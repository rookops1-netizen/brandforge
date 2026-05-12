import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { headers } from 'next/headers'

export async function POST(req: NextRequest) {
  const stripeKey = process.env.STRIPE_SECRET_KEY
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

  if (!stripeKey || stripeKey.includes('placeholder')) {
    console.error('STRIPE_SECRET_KEY not configured')
    return NextResponse.json({ error: 'Payment system not configured' }, { status: 503 })
  }

  if (!webhookSecret || webhookSecret.includes('placeholder')) {
    console.error('STRIPE_WEBHOOK_SECRET not configured')
    return NextResponse.json({ error: 'Webhook not configured' }, { status: 503 })
  }

  const stripe = new Stripe(stripeKey, {
    apiVersion: '2023-10-16',
  })

  const body = await req.text()
  const headersList = await headers()
  const signature = headersList.get('stripe-signature')

  if (!signature) {
    return NextResponse.json({ error: 'Missing stripe-signature header' }, { status: 400 })
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session
      const brandKitId = session.metadata?.brand_kit_id
      const name = session.metadata?.name

      if (brandKitId && name) {
        console.log(`Payment completed for brand kit: ${brandKitId} (${name})`)
        // In production: update Supabase record to mark brand kit as paid/unlocked
        // For now, log it — the success page will verify via Stripe session
      }
      break
    }
    case 'checkout.session.expired': {
      const session = event.data.object as Stripe.Checkout.Session
      console.log(`Checkout session expired: ${session.id}`)
      break
    }
    case 'charge.refunded': {
      const charge = event.data.object as Stripe.Charge
      console.log(`Charge refunded: ${charge.id}`)
      break
    }
    default:
      console.log(`Unhandled event type: ${event.type}`)
  }

  return NextResponse.json({ received: true })
}