'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import type { BrandKit as BrandKitType } from '@/types'

function ExportPageContent() {
  const searchParams = useSearchParams()
  const name = searchParams.get('name') || ''
  const meaning = searchParams.get('meaning') || ''
  const style = searchParams.get('style') || 'modern'
  const sessionId = searchParams.get('session_id') || ''

  const [kit, setKit] = useState<BrandKitType | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!name) {
      setError('No business name provided')
      setLoading(false)
      return
    }
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

  function handlePrint() {
    window.print()
  }

  const colorEntries = kit ? Object.entries(kit.colorPalette).filter(([key]) => key !== 'name') as [string, string][] : []

  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex items-center gap-3 text-slate-500">
          <svg className="animate-spin h-8 w-8" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          <span className="text-lg">Generating your brand guidelines...</span>
        </div>
      </div>
    )
  }

  if (error || !kit) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-red-600">{error || 'Failed to load brand kit'}</p>
        <a href="/generate" className="btn-primary">Back to Generator</a>
      </div>
    )
  }

  return (
    <>
      {/* Screen-only header with print button */}
      <div className="print:hidden fixed top-0 left-0 right-0 bg-white border-b border-slate-200 z-50 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <a href={`/brand-kit?name=${encodeURIComponent(name)}&meaning=${encodeURIComponent(meaning)}&style=${encodeURIComponent(style)}${sessionId ? `&session_id=${sessionId}` : ''}`} className="text-slate-500 hover:text-slate-700 flex items-center gap-1 text-sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Brand Kit
            </a>
            <span className="text-slate-300">|</span>
            <span className="text-sm text-slate-700 font-medium">{kit.name} — Brand Guidelines</span>
          </div>
          <button
            onClick={handlePrint}
            className="btn-primary inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Save as PDF
          </button>
        </div>
      </div>

      {/* Printable brand guidelines document */}
      <div className="pt-20 print:pt-0">
        {/* Page 1: Cover */}
        <div className="brand-page">
          <div className="flex flex-col items-center justify-center min-h-[80vh] print:min-h-[90vh] text-center px-8">
            {/* Logo mark */}
            <div
              className="flex h-32 w-32 items-center justify-center rounded-3xl text-6xl font-bold text-white shadow-2xl mb-10"
              style={{ backgroundColor: kit.colorPalette.primary }}
            >
              {kit.name.charAt(0)}
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-slate-900">
              {kit.name}
            </h1>
            <p className="mt-4 text-xl text-slate-500 italic">&ldquo;{kit.tagline}&rdquo;</p>
            <p className="mt-6 text-slate-400">Brand Guidelines</p>
            <p className="mt-2 text-sm text-slate-300">{today}</p>

            <div className="mt-12 flex gap-6 items-center justify-center flex-wrap">
              <div className="text-center">
                <p className="text-xs uppercase tracking-wider text-slate-400 mb-1">Meaning</p>
                <p className="text-sm text-slate-700 max-w-xs">{meaning || 'A brand built on purpose and vision'}</p>
              </div>
              <div className="h-12 w-px bg-slate-200" />
              <div className="text-center">
                <p className="text-xs uppercase tracking-wider text-slate-400 mb-1">Style</p>
                <p className="text-sm text-slate-700 capitalize">{style}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Page break */}
        <div className="page-break" />

        {/* Page 2: Logo Concept */}
        <div className="brand-page">
          <div className="px-8 sm:px-12 py-10 print:py-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-1">Logo Concept</h2>
            <p className="text-sm text-slate-400 uppercase tracking-wider mb-8">Visual Identity</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Logo display */}
              <div className="flex flex-col items-center justify-center p-12 rounded-2xl bg-slate-50 border border-slate-100">
                <div
                  className="flex h-40 w-40 items-center justify-center rounded-3xl text-7xl font-bold text-white shadow-xl"
                  style={{ backgroundColor: kit.colorPalette.primary }}
                >
                  {kit.name.charAt(0)}
                </div>
                <p className="mt-6 text-2xl font-bold text-slate-900">{kit.name}</p>
              </div>

              {/* Logo description */}
              <div>
                <p className="text-slate-700 leading-relaxed text-base">{kit.logoConcept}</p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="h-4 w-4 rounded-full flex-shrink-0" style={{ backgroundColor: kit.colorPalette.primary }} />
                    <span className="text-sm text-slate-700">Primary brand color for logo mark</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <svg className="h-5 w-5 text-slate-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                    </svg>
                    <span className="text-sm text-slate-700">Works as standalone icon for app badges & favicons</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="page-break" />

        {/* Page 3: Color Palette */}
        <div className="brand-page">
          <div className="px-8 sm:px-12 py-10 print:py-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-1">Color Palette</h2>
            <p className="text-sm text-slate-400 uppercase tracking-wider mb-8">Brand Colors</p>

            {/* Large color swatches */}
            <div className="grid grid-cols-5 gap-4 mb-10">
              {colorEntries.map(([label, color]) => (
                <div key={label} className="text-center">
                  <div
                    className="aspect-square rounded-2xl border border-slate-200 shadow-sm mb-3"
                    style={{ backgroundColor: color }}
                  />
                  <p className="text-sm font-semibold text-slate-900 capitalize">{label}</p>
                  <p className="text-xs text-slate-500 font-mono mt-1">{color}</p>
                  <p className="text-xs text-slate-400 mt-0.5 capitalize">
                    {label === 'primary' ? 'Brand identity' :
                     label === 'secondary' ? 'Supporting accent' :
                     label === 'accent' ? 'Call-to-action' :
                     label === 'background' ? 'Page backgrounds' :
                     'Body text & headings'}
                  </p>
                </div>
              ))}
            </div>

            {/* Palette theme name */}
            {kit.colorPalette.name && (
              <div className="rounded-xl bg-slate-50 border border-slate-100 px-6 py-4 mb-8">
                <p className="text-xs text-slate-400 uppercase tracking-wider">Palette Theme</p>
                <p className="text-lg font-semibold text-slate-900 mt-1">{kit.colorPalette.name}</p>
              </div>
            )}

            {/* Usage guidelines */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-slate-200 p-5">
                <h3 className="text-sm font-semibold text-slate-900 mb-3">Color Ratios</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-3 rounded-full flex-[6]" style={{ backgroundColor: kit.colorPalette.primary }} />
                    <span className="text-xs text-slate-600">Primary 60%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-3 rounded-full flex-[3]" style={{ backgroundColor: kit.colorPalette.secondary }} />
                    <span className="text-xs text-slate-600">Secondary 30%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-3 rounded-full flex-[1]" style={{ backgroundColor: kit.colorPalette.accent }} />
                    <span className="text-xs text-slate-600">Accent 10%</span>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-slate-200 p-5">
                <h3 className="text-sm font-semibold text-slate-900 mb-3">Usage Guidelines</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex gap-2"><span className="text-green-500">✓</span> Use primary for headers and CTAs</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span> Use accent sparingly for highlights</li>
                  <li className="flex gap-2"><span className="text-red-500">✗</span> Don&apos;t use primary for body text</li>
                  <li className="flex gap-2"><span className="text-red-500">✗</span> Don&apos;t mix similar-value colors</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="page-break" />

        {/* Page 4: Typography & Tagline */}
        <div className="brand-page">
          <div className="px-8 sm:px-12 py-10 print:py-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-1">Typography & Tagline</h2>
            <p className="text-sm text-slate-400 uppercase tracking-wider mb-8">Brand Voice</p>

            {/* Tagline */}
            <div
              className="rounded-2xl p-12 text-center mb-10"
              style={{ backgroundColor: kit.colorPalette.background }}
            >
              <p className="text-sm text-slate-400 uppercase tracking-wider mb-4">Tagline</p>
              <p
                className="text-4xl sm:text-5xl font-bold italic"
                style={{ color: kit.colorPalette.text }}
              >
                &ldquo;{kit.tagline}&rdquo;
              </p>
            </div>

            {/* Typography recommendation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-slate-200 p-6">
                <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">Typography</p>
                <p className="text-lg font-semibold text-slate-900">{kit.fontSuggestion || kit.typography?.heading || 'Inter'}</p>
                {kit.typography && (
                  <div className="mt-4 space-y-3">
                    <div>
                      <p className="text-xs text-slate-400">Heading Font</p>
                      <p className="text-base font-semibold text-slate-900">{kit.typography.heading}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Body Font</p>
                      <p className="text-base text-slate-900">{kit.typography.body}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Type scale preview */}
              <div className="rounded-xl border border-slate-200 p-6">
                <p className="text-xs text-slate-400 uppercase tracking-wider mb-4">Type Scale</p>
                <div className="space-y-3">
                  <p className="text-3xl font-bold text-slate-900">Heading 1</p>
                  <p className="text-2xl font-semibold text-slate-900">Heading 2</p>
                  <p className="text-xl font-medium text-slate-900">Heading 3</p>
                  <p className="text-base text-slate-700">Body text for paragraphs and content</p>
                  <p className="text-sm text-slate-500">Small text for captions and labels</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="page-break" />

        {/* Page 5: Domain & Social Availability */}
        <div className="brand-page">
          <div className="px-8 sm:px-12 py-10 print:py-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-1">Domain & Social Availability</h2>
            <p className="text-sm text-slate-400 uppercase tracking-wider mb-8">Online Presence</p>

            <div className="space-y-4">
              {/* Domain */}
              <div className="flex items-center justify-between rounded-xl border border-slate-200 px-6 py-4">
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">Domain</p>
                  <p className="text-lg font-semibold text-slate-900 mt-1">
                    {kit.name.toLowerCase().replace(/\s+/g, '')}.com
                  </p>
                </div>
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  kit.domainAvailable
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}>
                  {kit.domainAvailable ? '✓ Available' : '✗ Taken'}
                </span>
              </div>

              {/* Social handles */}
              {kit.socialHandles && Object.entries(kit.socialHandles).map(([platform, data]: [string, any]) => (
                <div key={platform} className="flex items-center justify-between rounded-xl border border-slate-200 px-6 py-4">
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">{platform}</p>
                    <p className="text-lg font-semibold text-slate-900 mt-1">@{data.handle}</p>
                  </div>
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    data.available
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {data.available ? '✓ Available' : '✗ Taken'}
                  </span>
                </div>
              ))}
            </div>

            {/* Next steps */}
            <div className="mt-10 rounded-xl bg-brand-50 border border-brand-100 p-6">
              <h3 className="text-sm font-semibold text-brand-700 mb-2">Recommended Next Steps</h3>
              <ol className="space-y-2 text-sm text-brand-600">
                <li className="flex gap-2"><span className="font-semibold">1.</span> Register your domain name as soon as possible</li>
                <li className="flex gap-2"><span className="font-semibold">2.</span> Claim social media handles across all platforms</li>
                <li className="flex gap-2"><span className="font-semibold">3.</span> Send this brand guide to your designer or developer</li>
                <li className="flex gap-2"><span className="font-semibold">4.</span> Apply your color palette and typography consistently</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="page-break" />

        {/* Page 6: Quick Reference Card */}
        <div className="brand-page">
          <div className="px-8 sm:px-12 py-10 print:py-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-1">Quick Reference Card</h2>
            <p className="text-sm text-slate-400 uppercase tracking-wider mb-8">At-a-Glance</p>

            <div className="rounded-2xl border-2 border-slate-200 overflow-hidden">
              {/* Color strip */}
              <div className="flex h-6">
                {colorEntries.map(([_, color]) => (
                  <div key={_} className="flex-1" style={{ backgroundColor: color }} />
                ))}
              </div>

              <div className="p-8">
                {/* Brand name and tagline */}
                <div className="flex items-center gap-5 mb-8">
                  <div
                    className="flex h-20 w-20 items-center justify-center rounded-2xl text-4xl font-bold text-white flex-shrink-0"
                    style={{ backgroundColor: kit.colorPalette.primary }}
                  >
                    {kit.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900">{kit.name}</h3>
                    <p className="text-lg text-slate-500 italic mt-1">&ldquo;{kit.tagline}&rdquo;</p>
                  </div>
                </div>

                {/* Color swatches */}
                <div className="grid grid-cols-5 gap-4 mb-8">
                  {colorEntries.map(([label, color]) => (
                    <div key={label} className="text-center">
                      <div className="h-14 rounded-xl shadow-inner border border-white/50" style={{ backgroundColor: color }} />
                      <p className="text-xs font-semibold text-slate-700 capitalize mt-2">{label}</p>
                      <p className="text-xs text-slate-400 font-mono">{color}</p>
                    </div>
                  ))}
                </div>

                {/* Typography and meaning */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Typography</p>
                    <p className="text-sm font-semibold text-slate-900">{kit.fontSuggestion || 'Inter'}</p>
                    {kit.typography && (
                      <p className="text-xs text-slate-500">{kit.typography.heading} / {kit.typography.body}</p>
                    )}
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Meaning</p>
                    <p className="text-sm text-slate-700">{meaning || kit.name}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-10 text-center">
              <p className="text-sm text-slate-400">
                Generated by <span className="font-semibold text-brand-600">BrandForge</span> on {today}
              </p>
              <p className="text-xs text-slate-300 mt-1">brandforge-phi-pearl.vercel.app</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default function ExportBrandKitPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex items-center gap-3 text-slate-500">
          <svg className="animate-spin h-8 w-8" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Loading...
        </div>
      </div>
    }>
      <ExportPageContent />
    </Suspense>
  )
}