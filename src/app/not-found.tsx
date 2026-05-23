import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found — BrandForge',
  description: 'The page you were looking for doesn\'t exist. Try generating a brand name or exploring our resources.',
}

export default function NotFound() {
  return (
    <section className="relative overflow-hidden min-h-[60vh] flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-purple-50" />
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-brand-200/30 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-2xl px-4 py-20 sm:px-6 lg:px-8 text-center">
        {/* 404 number */}
        <div className="mb-8">
          <span className="text-8xl sm:text-9xl font-black gradient-text opacity-30">404</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
          This page doesn&apos;t exist
        </h1>
        <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto">
          The page you were looking for has moved or doesn&apos;t exist. 
          But your perfect brand name is just a few seconds away!
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link 
            href="/generate" 
            className="btn-primary px-8 py-3 text-base animate-pulse-glow"
          >
            Generate Brand Names
          </Link>
          <Link 
            href="/" 
            className="btn-secondary px-8 py-3 text-base"
          >
            Go Home
          </Link>
        </div>

        {/* Helpful links */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
            Try one of these instead
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/blog" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors text-left">
              <svg className="w-5 h-5 text-brand-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <div>
                <div className="text-sm font-medium text-slate-900">Blog</div>
                <div className="text-xs text-slate-500">Naming tips & guides</div>
              </div>
            </Link>
            <Link href="/examples" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors text-left">
              <svg className="w-5 h-5 text-brand-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <div>
                <div className="text-sm font-medium text-slate-900">Examples</div>
                <div className="text-xs text-slate-500">See brand kits in action</div>
              </div>
            </Link>
            <Link href="/compare" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors text-left">
              <svg className="w-5 h-5 text-brand-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <div>
                <div className="text-sm font-medium text-slate-900">Compare</div>
                <div className="text-xs text-slate-500">BrandForge vs competitors</div>
              </div>
            </Link>
            <Link href="/#features" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors text-left">
              <svg className="w-5 h-5 text-brand-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <div>
                <div className="text-sm font-medium text-slate-900">Features</div>
                <div className="text-xs text-slate-500">What BrandForge can do</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}