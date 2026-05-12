import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

export async function POST(req: NextRequest) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
  if (!webhookSecret) {
    console.error('STRIPE_WEBHOOK_SECRET not set')
    return NextResponse.json({ error: 'Webhook secret not configured' }, { status: 500 })
  }

  const stripeKey = process.env.STRIPE_SECRET_KEY
  if (!stripeKey) {
    console.error('STRIPE_SECRET_KEY not set')
    return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 })
  }

  const stripe = new Stripe(stripeKey, { apiVersion: '2023-10-16' })

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(body, sig!, webhookSecret)
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session
      const businessName = session.metadata?.businessName || 'unknown'
      const userId = session.metadata?.userId || session.client_reference_id || null
      const paymentIntentId = session.payment_intent as string | null

      console.log(`Checkout completed: session=${session.id}, user=${userId}, business=${businessName}`)

      // Update the purchase record in Supabase
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
      const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

      if (supabaseUrl && supabaseServiceKey) {
        const supabase = createClient(supabaseUrl, supabaseServiceKey)

        // Try to update existing purchase record (created during checkout)
        const { error: updateError } = await supabase
          .from('purchases')
          .update({
            status: 'completed',
            stripe_payment_intent_id: paymentIntentId,
            user_id: userId,
          })
          .eq('stripe_session_id', session.id)

        if (updateError) {
          // If no existing record (e.g., anonymous user), insert a new one
          if (updateError.code === 'PGRST116' || updateError.message?.includes('0 rows')) {
            await supabase.from('purchases').insert({
              user_id: userId,
              stripe_session_id: session.id,
              stripe_payment_intent_id: paymentIntentId,
              business_name: businessName,
              amount_cents: session.amount_total || 900,
              status: 'completed',
            })
          } else {
            console.error('Failed to update purchase:', updateError)
          }
        }
      }

      console.log(`Purchase recorded: session=${session.id}, status=completed`)
      break
    }

    case 'checkout.session.expired': {
      const session = event.data.object as Stripe.Checkout.Session
      console.log(`Checkout expired: session=${session.id}`)

      // Mark purchase as failed if it exists
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
      const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
      if (supabaseUrl && supabaseServiceKey) {
        const supabase = createClient(supabaseUrl, supabaseServiceKey)
        await supabase
          .from('purchases')
          .update({ status: 'failed' })
          .eq('stripe_session_id', session.id)
      }
      break
    }

    case 'charge.refunded': {
      const charge = event.data.object as Stripe.Charge
      console.log(`Charge refunded: charge=${charge.id}`)

      // Mark purchase as refunded
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
      const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
      if (supabaseUrl && supabaseServiceKey) {
        const supabase = createClient(supabaseUrl, supabaseServiceKey)
        // Find purchase by payment intent id
        const { data: purchases } = await supabase
          .from('purchases')
          .select('id')
          .eq('stripe_payment_intent_id', charge.payment_intent as string)
          .limit(1)

        if (purchases && purchases.length > 0) {
          await supabase
            .from('purchases')
            .update({ status: 'refunded' })
            .eq('id', purchases[0].id)
        }
      }
      break
    }

    default:
      console.log('Unhandled event type:', event.type)
  }

  return NextResponse.json({ received: true })
}