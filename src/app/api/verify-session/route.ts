import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

export async function GET(req: NextRequest) {
  const sessionId = req.nextUrl.searchParams.get('session_id')

  if (!sessionId) {
    return NextResponse.json({ error: 'Missing session_id parameter' }, { status: 400 })
  }

  const stripeKey = process.env.STRIPE_SECRET_KEY
  if (!stripeKey) {
    return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 })
  }

  const stripe = new Stripe(stripeKey, { apiVersion: '2023-10-16' })

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId)

    // Return only safe, non-sensitive info
    return NextResponse.json({
      status: session.payment_status,
      amountTotal: session.amount_total,
      businessName: session.metadata?.businessName || null,
      userId: session.metadata?.userId || session.client_reference_id || null,
      customerEmail: session.customer_details?.email || null,
    })
  } catch (error: any) {
    console.error('Session verify error:', error)
    return NextResponse.json(
      { error: 'Failed to verify session' },
      { status: 500 }
    )
  }
}