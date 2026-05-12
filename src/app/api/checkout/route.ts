import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

export async function POST(req: NextRequest) {
  try {
    const stripeKey = process.env.STRIPE_SECRET_KEY
    if (!stripeKey) {
      console.error('STRIPE_SECRET_KEY not set')
      return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 })
    }

    const stripe = new Stripe(stripeKey, {
      apiVersion: '2023-10-16',
    })

    // Parse request body for business name and user info
    let businessName = ''
    let userId: string | undefined

    try {
      const body = await req.json()
      businessName = body.businessName || ''
      userId = body.userId || undefined
    } catch {
      // Empty body is fine — will use defaults
    }

    // If userId not provided in body, try from auth header
    if (!userId) {
      const authHeader = req.headers.get('authorization')
      if (authHeader?.startsWith('Bearer ')) {
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
        const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
        const supabase = createClient(supabaseUrl, supabaseServiceKey)
        const token = authHeader.replace('Bearer ', '')
        const { data: { user } } = await supabase.auth.getUser(token)
        userId = user?.id
      }
    }

    const origin = req.headers.get('origin') || 'http://localhost:3000'

    // Build success URL with business name so we can redirect back
    const successUrl = businessName
      ? `${origin}/brand-kit?session_id={CHECKOUT_SESSION_ID}&name=${encodeURIComponent(businessName)}&paid=true`
      : `${origin}/brand-kit?session_id={CHECKOUT_SESSION_ID}&paid=true`

    const sessionParams: Stripe.Checkout.SessionCreateParams = {
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'BrandForge Brand Kit',
              description: 'Full brand kit with logo concept, color palette, tagline, domain & social availability',
              images: [],
            },
            unit_amount: 900, // $9.00
          },
          quantity: 1,
        },
      ],
      success_url: successUrl,
      cancel_url: `${origin}/?cancelled=true`,
      metadata: {
        businessName: businessName || 'unknown',
        userId: userId || 'anonymous',
      },
    }

    // If we have a userId, add it as client_reference_id for webhook matching
    if (userId) {
      sessionParams.client_reference_id = userId
    }

    const session = await stripe.checkout.sessions.create(sessionParams)

    // Create a pending purchase record if we have a user
    if (userId) {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
      const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
      if (supabaseUrl && supabaseServiceKey) {
        const supabase = createClient(supabaseUrl, supabaseServiceKey)
        await supabase.from('purchases').insert({
          user_id: userId,
          stripe_session_id: session.id,
          business_name: businessName || 'unknown',
          amount_cents: 900,
          status: 'pending',
        })
      }
    }

    return NextResponse.json({ url: session.url })
  } catch (error: any) {
    console.error('Checkout error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}