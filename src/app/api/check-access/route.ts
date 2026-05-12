import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function GET(req: NextRequest) {
  const sessionId = req.nextUrl.searchParams.get('session_id')
  const userId = req.nextUrl.searchParams.get('user_id')
  const businessName = req.nextUrl.searchParams.get('business_name')

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseServiceKey) {
    // Without Supabase, check via Stripe session ID if provided
    if (sessionId) {
      const stripeKey = process.env.STRIPE_SECRET_KEY
      if (stripeKey) {
        const Stripe = require('stripe')
        const stripe = new Stripe(stripeKey, { apiVersion: '2023-10-16' })
        try {
          const session = await stripe.checkout.sessions.retrieve(sessionId)
          return NextResponse.json({
            hasAccess: session.payment_status === 'paid',
            businessName: session.metadata?.businessName || businessName || null,
          })
        } catch {
          return NextResponse.json({ hasAccess: false })
        }
      }
    }
    return NextResponse.json({ hasAccess: false })
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey)

  // Check by session_id (direct from Stripe redirect)
  if (sessionId) {
    const { data, error } = await supabase
      .from('purchases')
      .select('*')
      .eq('stripe_session_id', sessionId)
      .eq('status', 'completed')
      .limit(1)

    if (!error && data && data.length > 0) {
      return NextResponse.json({
        hasAccess: true,
        businessName: data[0].business_name,
      })
    }
  }

  // Check by user_id
  if (userId) {
    const { data, error } = await supabase
      .from('purchases')
      .select('*')
      .eq('user_id', userId)
      .eq('status', 'completed')
      .order('created_at', { ascending: false })
      .limit(1)

    if (!error && data && data.length > 0) {
      // If businessName specified, check for a specific purchase
      if (businessName) {
        const match = data.find((p: any) => p.business_name === businessName)
        if (match) {
          return NextResponse.json({
            hasAccess: true,
            businessName: match.business_name,
          })
        }
      }
      // User has at least one purchase — grant access
      return NextResponse.json({
        hasAccess: true,
        businessName: data[0].business_name,
      })
    }
  }

  return NextResponse.json({ hasAccess: false })
}