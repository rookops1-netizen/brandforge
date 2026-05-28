'use client'

import { useState } from 'react'

export function Pricing() {
  const [loading, setLoading] = useState(false)

  async function handleCheckout() {
    setLoading(true)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({}),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        alert(data.error || 'Failed to start checkout')
      }
    } catch (err) {
      console.error('Checkout error:', err)
      alert('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-brand-600 mb-3 tracking-wider uppercase">
            Simple Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Start free, upgrade when you&apos;re ready
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto text-lg">
            Try the name generator for free. Upgrade to unlock the full brand kit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Free tier */}
          <div className="card flex flex-col">
            <h3 className="text-lg font-semibold text-slate-900 mb-1">Free</h3>
            <p className="text-sm text-slate-500 mb-6">Perfect for brainstorming</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-slate-900">$0</span>
              <span className="text-slate-400 text-sm">/forever</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {[
                "5 name suggestions per search",
                "Unlimited searches",
                "Basic name meanings",
                "Save up to 10 favorites",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                  <svg
                    className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="/generate"
              className="btn-secondary block text-center"
            >
              Get Started Free
            </a>
          </div>

          {/* Pro tier */}
          <div className="relative flex flex-col rounded-2xl border-2 border-brand-500 bg-gradient-to-b from-brand-50/50 to-white p-6 shadow-lg ring-1 ring-brand-500/20">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
              Most Popular
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-1">Brand Kit Pro</h3>
            <p className="text-sm text-slate-500 mb-6">Full branding in one click</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-slate-900">$9</span>
              <span className="text-slate-400 text-sm">/brand kit</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {[
                "Unlimited name suggestions",
                "AI logo concepts & descriptions",
                "Custom color palettes",
                "Brand taglines & copy",
                "Domain availability check",
                "Social handle availability",
                "Export full brand kit (PDF)",
                "Priority name generation",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                  <svg
                    className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={handleCheckout}
              disabled={loading}
              className="btn-primary block w-full text-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="inline-flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Redirecting to checkout...
                </span>
              ) : (
                'Upgrade to Pro — $9'
              )}
            </button>
          </div>
        </div>

        {/* Enterprise note */}
        <p className="mt-8 text-center text-sm text-slate-400">
          Need team access or custom volume?{' '}
          <a href="mailto:hello@brandforge.ai" className="text-brand-600 hover:underline font-medium">
            Contact us
          </a>
          {' '}·{' '}
          <a href="/pricing" className="text-brand-600 hover:underline font-medium">
            See full pricing details
          </a>
        </p>
      </div>
    </section>
  )
}