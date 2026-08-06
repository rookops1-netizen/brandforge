'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import type { BrandKit as BrandKitType } from '@/types'
import { useAuth } from '@/components/supabase-provider'

export default function BrandKitPage() {
  return (
    <Suspense fallback={
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="animate-pulse space-y-4">
            <div className="h-8 w-64 rounded bg-slate-200" />
            <div className="h-4 w-48 rounded bg-slate-200" />
          </div>
        </div>
      </div>
    }>
      <BrandKitPageContent />
    </Suspense>
  )
}

function BrandKitPageContent() {
  const searchParams = useSearchParams()
  const name = searchParams.get('name') || ''
  const meaning = searchParams.get('meaning') || ''
  const style = searchParams.get('style') || 'modern'
  const sessionId = searchParams.get('session_id') || ''
  const { user } = useAuth()

  const [kit, setKit] = useState<BrandKitType | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [hasAccess, setHasAccess] = useState(false)
  const [verifying, setVerifying] = useState(false)
  const [checkingOut, setCheckingOut] = useState(false)

  // Verify Stripe session access when session_id is present
  useEffect(() => {
    if (!sessionId) return
    setVerifying(true)
    fetch(`/api/check-access?session_id=${encodeURIComponent(sessionId)}`)
      .then(res => res.json())
      .then(data => {
        if (data.hasAccess) {
          setHasAccess(true)
        }
      })
      .catch(err => {
        console.error('Access check failed:', err)
      })
      .finally(() => setVerifying(false))
  }, [sessionId])

  // Also check access by user_id if logged in
  useEffect(() => {
    if (!user?.id || sessionId) return // Skip if already checking by session_id
    fetch(`/api/check-access?user_id=${encodeURIComponent(user.id)}&business_name=${encodeURIComponent(name)}`)
      .then(res => res.json())
      .then(data => {
        if (data.hasAccess) {
          setHasAccess(true)
        }
      })
      .catch(err => {
        console.error('User access check failed:', err)
      })
  }, [user?.id, name, sessionId])

  useEffect(() => {
    if (!name) return
    generateKit()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name])

  async function generateKit() {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/brand-kit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ businessName: name, meaning, style }),
      })
      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Failed to generate brand kit')
      }
      const data = await res.json()
      setKit(data.kit)
    } catch (err: any) {
      setError(err.message || 'Failed to generate brand kit')
    } finally {
      setLoading(false)
    }
  }

  async function handleCheckout() {
    setCheckingOut(true)
    try {
      const body: Record<string, string> = { businessName: name }
      if (user?.id) body.userId = user.id

      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        alert(data.error || 'Failed to start checkout')
        setCheckingOut(false)
      }
    } catch (err) {
      console.error('Checkout error:', err)
      alert('Something went wrong. Please try again.')
      setCheckingOut(false)
    }
  }

  if (!name) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-center text-slate-600">No business name selected. Go back to generate one.</p>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Payment success banner */}
        {hasAccess && (
          <div className="mb-6 rounded-xl bg-green-50 border border-green-200 p-4 text-sm text-green-700 flex items-center gap-2">
            <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Payment confirmed! Your full brand kit is now unlocked.
          </div>
        )}

        {/* Verification in progress */}
        {verifying && (
          <div className="mb-6 rounded-xl bg-blue-50 border border-blue-200 p-4 text-sm text-blue-700 flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Verifying your payment...
          </div>
        )}

        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Brand Kit for <span className="text-brand-600">{name}</span>
        </h1>
        <p className="mt-2 text-slate-600">{meaning}</p>

        {loading && (
          <div className="mt-8 flex items-center justify-center py-12">
            <div className="flex items-center gap-3 text-slate-500">
              <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Creating your brand kit...
            </div>
          </div>
        )}

        {error && (
          <div className="mt-6 rounded-xl bg-red-50 p-4 text-sm text-red-600">
            {error}
          </div>
        )}

        {kit && !loading && (
          <div className="mt-8 space-y-8">
            {/* Logo Concept */}
            <div className="card">
              <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-100 text-brand-600 text-sm">
                  L
                </span>
                Logo Concept
              </h2>
              <div className="mt-4 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 p-6 text-center">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl text-4xl font-bold" style={{ backgroundColor: kit.colorPalette.primary, color: '#ffffff' }}>
                  {kit.name.charAt(0)}
                </div>
              </div>
              {hasAccess ? (
                <p className="mt-4 text-sm text-slate-600">{kit.logoConcept}</p>
              ) : (
                <div className="mt-4 relative">
                  <p className="text-sm text-slate-500 blur-sm select-none">{kit.logoConcept}</p>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-xl bg-white/90 px-4 py-2 shadow-sm border border-brand-200">
                      <span className="text-sm font-medium text-brand-600">Unlock full concept</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Color Palette */}
            <div className="card">
              <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-100 text-brand-600 text-sm">
                  C
                </span>
                Color Palette
              </h2>
              <div className="mt-4 grid grid-cols-5 gap-3">
                {Object.entries(kit.colorPalette)
                  .map(([label, color]) => (
                    <div key={label} className="text-center">
                      <div
                        className="mx-auto h-16 w-16 rounded-xl border border-slate-200 shadow-sm"
                        style={{ backgroundColor: color as string }}
                      />
                      {hasAccess ? (
                        <>
                          <p className="mt-2 text-xs font-medium text-slate-900 capitalize">{label}</p>
                          <p className="text-xs text-slate-500">{color as string}</p>
                        </>
                      ) : (
                        <>
                          <p className="mt-2 text-xs font-medium text-slate-900 capitalize">{label}</p>
                          <p className="text-xs text-slate-500">••••••</p>
                        </>
                      )}
                    </div>
                  ))}
              </div>
            </div>

            {/* Tagline */}
            <div className="card">
              <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-100 text-brand-600 text-sm">
                  T
                </span>
                Tagline
              </h2>
              {hasAccess ? (
                <p className="mt-4 text-xl text-center font-medium italic text-slate-700">
                  &ldquo;{kit.tagline}&rdquo;
                </p>
              ) : (
                <p className="mt-4 text-xl text-center font-medium italic text-slate-500 blur-sm select-none">
                  &ldquo;{kit.tagline.substring(0, 25)}...&rdquo;
                </p>
              )}
            </div>

            {/* Domain & Social */}
            <div className="card">
              <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-100 text-brand-600 text-sm">
                  D
                </span>
                Domain & Social Availability
              </h2>
              {hasAccess ? (
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3">
                    <span className="text-sm font-medium text-slate-700">
                      {kit.name.toLowerCase().replace(/\s+/g, '')}.com
                    </span>
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                      kit.domainAvailable
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {kit.domainAvailable ? 'Available' : 'Taken'}
                    </span>
                  </div>
                  {kit.socialHandles && Object.entries(kit.socialHandles).map(([platform, data]: [string, any]) => (
                    <div key={platform} className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3">
                      <span className="text-sm font-medium text-slate-700">
                        @{data.handle}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-500 capitalize">{platform}</span>
                        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                          data.available ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {data.available ? 'Available' : 'Taken'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3 blur-sm select-none">
                    <span className="text-sm font-medium text-slate-700">
                      {kit.name.toLowerCase().replace(/\s+/g, '')}.com
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-500">
                      ???
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3 blur-sm select-none">
                    <span className="text-sm font-medium text-slate-700">
                      @{kit.name.toLowerCase().replace(/\s+/g, '')}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-500">
                      ???
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Download Brand Kit — show for paid users */}
            {hasAccess && kit && (
              <div className="rounded-2xl border-2 border-brand-200 bg-brand-50 p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <svg className="h-5 w-5 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  <h3 className="text-lg font-bold text-slate-900">Brand Guidelines Ready</h3>
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  Download a professional brand guidelines document with your logo concept, colors, tagline, and typography.
                </p>
                <a
                  href={`/export?name=${encodeURIComponent(name)}&meaning=${encodeURIComponent(meaning)}&style=${encodeURIComponent(style)}${sessionId ? `&session_id=${encodeURIComponent(sessionId)}` : ''}`}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                  Download Brand Guidelines
                </a>
              </div>
            )}

            {/* Upgrade CTA — only show if user has NOT paid */}
            {!hasAccess && (
              <div className="rounded-2xl bg-gradient-to-r from-brand-600 to-purple-600 p-8 text-center text-white">
                <h3 className="text-xl font-bold">Unlock the full brand kit</h3>
                <p className="mt-2 text-brand-100">
                  Get logo concepts, full color palettes, taglines, and availability checks for just $9.
                </p>
                <button
                  onClick={handleCheckout}
                  disabled={checkingOut}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3 font-semibold text-brand-700 shadow-sm hover:bg-brand-50 transition-colors disabled:opacity-50"
                >
                  {checkingOut ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Processing...
                    </>
                  ) : (
                    'Upgrade Now — $9'
                  )}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}