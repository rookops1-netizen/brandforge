import { NextRequest, NextResponse } from 'next/server'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY

export async function POST(request: NextRequest) {
  try {
    const { email, source } = await request.json()

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
      console.error('Supabase not configured for newsletter')
      return NextResponse.json({ error: 'Newsletter service not configured' }, { status: 500 })
    }

    // Insert into Supabase newsletter_subscribers table
    const res = await fetch(`${SUPABASE_URL}/rest/v1/newsletter_subscribers`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_SERVICE_KEY,
        'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'resolution=merge-duplicates',
      },
      body: JSON.stringify({
        email: email.toLowerCase().trim(),
        source: source || 'website',
      }),
    })

    if (!res.ok) {
      const errorData = await res.json()
      // If table doesn't exist yet (PGRST205), log and return success anyway
      // The table needs to be created via Supabase dashboard: see supabase/migrations/003_create_newsletter_subscribers.sql
      if (res.status === 404 || errorData?.code === 'PGRST205') {
        console.warn('newsletter_subscribers table not found. Email not saved to DB:', email)
        console.warn('Create the table by running: supabase/migrations/003_create_newsletter_subscribers.sql')
        return NextResponse.json({ message: 'Subscribed successfully! (pending table setup)' })
      }
      // Duplicate email
      if (res.status === 409 || errorData?.code === '23505') {
        return NextResponse.json({ message: 'Already subscribed!', alreadySubscribed: true })
      }
      console.error('Supabase newsletter insert error:', errorData)
      return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 })
    }

    return NextResponse.json({ message: 'Subscribed successfully!' })
  } catch (err) {
    console.error('Newsletter API error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}