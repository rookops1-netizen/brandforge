import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next') || '/'

  if (code) {
    // Exchange the code for a session by redirecting to a client-side route
    // that will call supabase.auth.exchangeCodeForSession(code)
    const response = NextResponse.redirect(
      new URL(`/auth/confirm?code=${code}&next=${next}`, request.url)
    )
    return response
  }

  // Return the user to an error page with instructions
  return NextResponse.redirect(new URL('/auth/auth-code-error', request.url))
}