import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

export async function POST(req: NextRequest) {
  const stripeKey = process.env.STRIPE_SECRET_KEY
  if (!stripeKey || stripeKey.includes('placeholder')) {
    console.error('STRIPE_SECRET_KEY not configured')
    return NextResponse.json({ error: 'Payment system not configured. Please try again later.' }, { status: 503 })
  }

  const stripe = new Stripe(stripeKey, {
    apiVersion: '2023-10-16',
  })

  try {
    const body = await req.json()
    const { brand_kit_id, name, email } = body as {
      brand_kit_id: string
      name: string
      email?: string
    }

    if (!brand_kit_id || !name) {
      return NextResponse.json(
        { error: 'brand_kit_id and name are required' },
        { status: 400 }
      )
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `BrandForge Full Brand Kit — ${name}`,
              description: 'Complete brand kit with logo concepts, color palette, tagline, domain availability, and social handle checks.',
            },
            unit_amount: 900, // $9.00
          },
          quantity: 1,
        },
      ],
      metadata: {
        brand_kit_id,
        name,
      },
      success_url: `${appUrl}/brand-kit/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/brand-kit/cancelled`,
      customer_email: email,
    })

    return NextResponse.json({ url: session.url })
  } catch (error: any) {
    console.error('Stripe checkout error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}