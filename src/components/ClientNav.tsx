'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useAuth } from './supabase-provider'

export default function ClientNav() {
  const { user, signOut } = useAuth()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Desktop nav */}
      <nav className="hidden sm:flex items-center gap-6">
        <Link href="/examples" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">
          Examples
        </Link>
        <Link href="/compare" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">
          Compare
        </Link>
        <Link href="/pricing" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">
          Pricing
        </Link>
        <a href="#features" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">
          Features
        </a>
        <Link href="/blog" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">
          Blog
        </Link>
        <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">
          FAQ
        </a>
        {user ? (
          <>
            <Link href="/generate" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">
              Generate
            </Link>
            <Link href="/dashboard" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">
              Dashboard
            </Link>
            <button
              onClick={signOut}
              className="btn-secondary text-xs py-2 px-4"
            >
              Sign Out
            </button>
          </>
        ) : (
          <Link href="/generate" className="btn-primary text-xs py-2 px-4">
            Get Started
          </Link>
        )}
      </nav>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="sm:hidden p-2 -mr-2 text-slate-600 hover:text-slate-900"
        aria-label="Toggle menu"
      >
        {mobileOpen ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="sm:hidden border-t border-slate-200 bg-white px-4 pb-4 pt-2 space-y-3 absolute top-full left-0 right-0 z-50">
          <Link href="/examples" onClick={() => setMobileOpen(false)} className="block py-2 text-sm font-medium text-slate-600 hover:text-brand-600">
            Examples
          </Link>
          <Link href="/compare" onClick={() => setMobileOpen(false)} className="block py-2 text-sm font-medium text-slate-600 hover:text-brand-600">
            Compare
          </Link>
          <Link href="/pricing" onClick={() => setMobileOpen(false)} className="block py-2 text-sm font-medium text-slate-600 hover:text-brand-600">
            Pricing
          </Link>
          <a href="#features" onClick={() => setMobileOpen(false)} className="block py-2 text-sm font-medium text-slate-600 hover:text-brand-600">
            Features
          </a>
          <Link href="/blog" onClick={() => setMobileOpen(false)} className="block py-2 text-sm font-medium text-slate-600 hover:text-brand-600">
            Blog
          </Link>
          <a href="#faq" onClick={() => setMobileOpen(false)} className="block py-2 text-sm font-medium text-slate-600 hover:text-brand-600">
            FAQ
          </a>
          {user ? (
            <>
              <Link href="/generate" onClick={() => setMobileOpen(false)} className="block py-2 text-sm font-medium text-slate-600 hover:text-brand-600">
                Generate
              </Link>
              <button
                onClick={() => { setMobileOpen(false); signOut() }}
                className="block w-full text-left py-2 text-sm font-medium text-slate-600 hover:text-brand-600"
              >
                Sign Out
              </button>
            </>
          ) : (
            <Link
              href="/generate"
              onClick={() => setMobileOpen(false)}
              className="btn-primary block text-center text-sm py-2.5"
            >
              Get Started Free
            </Link>
          )}
        </div>
      )}
    </>
  )
}