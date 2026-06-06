import { Comparison } from '@/components/Comparison'
import { BreadcrumbSchema } from '@/components/BlogPostSchema'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BrandForge vs Namelix vs Looka — Best Business Name Generator Comparison',
  description: 'Compare BrandForge, Namelix, Looka, and Shopify Business Name Generator side-by-side. See which tool offers the best brand kits, domain checks, and value for founders.',
  keywords: [
    'brand name generator comparison',
    'BrandForge vs Namelix',
    'best business name generator',
    'Namelix alternative',
    'Looka vs BrandForge',
    'AI name generator review',
    'brand kit tool comparison',
    'free naming tool comparison',
  ],
  openGraph: {
    title: 'BrandForge vs Namelix vs Looka — Which Name Generator Is Best?',
    description: 'Compare the top AI business name generators side-by-side. See which tool gives you the most complete brand identity.',
    url: 'https://brandforge-phi-pearl.vercel.app/compare',
    siteName: 'BrandForge',
    type: 'website',
  },
  alternates: {
    canonical: 'https://brandforge-phi-pearl.vercel.app/compare',
  },
}

export default function ComparePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Compare', href: '/compare' }]} />
      {/* Compare page WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'BrandForge vs Namelix vs Looka — Business Name Generator Comparison',
            description: 'Compare the top AI business name generators side-by-side. See which tool gives you the most complete brand identity.',
            url: 'https://brandforge-phi-pearl.vercel.app/compare',
            publisher: {
              '@type': 'Organization',
              name: 'BrandForge',
              url: 'https://brandforge-phi-pearl.vercel.app',
            },
          }),
        }}
      />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-purple-50" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
            </svg>
            Honest Comparison
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            BrandForge vs Namelix vs Looka
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            An honest, feature-by-feature comparison of the top AI business name generators. Find out which tool gives you the most complete brand identity.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="btn-primary inline-flex items-center gap-2 text-base px-8 py-3"
            >
              Try BrandForge Free
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#comparison"
              className="btn-secondary inline-flex items-center gap-2 text-base px-8 py-3"
            >
              See Full Comparison
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <div id="comparison">
        <Comparison />
      </div>

      {/* Detailed write-ups */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-8">
            Detailed Breakdown
          </h2>

          {/* BrandForge */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-100 text-brand-600 font-bold text-sm">B</span>
              BrandForge — Best for Complete Brand Kits
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              BrandForge is the only tool that gives you <strong>everything in one place</strong>: AI-generated business names, a full brand kit (logo concept, color palette, tagline, typography), and instant domain &amp; social handle availability checks. You describe your business idea in plain English and get a complete brand identity in seconds.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-2 text-sm text-slate-600">
                <svg className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                Complete brand kits with logo, colors, and tagline
              </div>
              <div className="flex items-start gap-2 text-sm text-slate-600">
                <svg className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                Real-time domain &amp; social availability checks
              </div>
              <div className="flex items-start gap-2 text-sm text-slate-600">
                <svg className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                Free tier with 5 names per search
              </div>
              <div className="flex items-start gap-2 text-sm text-slate-600">
                <svg className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                Exportable brand guidelines document
              </div>
            </div>
          </div>

          {/* Namelix */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-600 font-bold text-sm">N</span>
              Namelix — Good for Quick Name Ideas
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Namelix is a popular AI name generator that creates short, brandable name ideas based on keywords. It&rsquo;s fast and free to use, but it <strong>doesn&rsquo;t include brand kits</strong>, color palettes, taglines, or domain/social availability checks. You get names only — the branding work is on you.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-2 text-sm text-slate-600">
                <svg className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                Fast AI-powered name generation
              </div>
              <div className="flex items-start gap-2 text-sm text-slate-600">
                <svg className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                Free to generate names
              </div>
              <div className="flex items-start gap-2 text-sm text-slate-600">
                <svg className="h-5 w-5 text-slate-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                No brand kits or visual identity
              </div>
              <div className="flex items-start gap-2 text-sm text-slate-600">
                <svg className="h-5 w-5 text-slate-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                No domain or social availability checks
              </div>
            </div>
          </div>

          {/* Looka */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-600 font-bold text-sm">L</span>
              Looka — Best for Logo-Ready Brands
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Looka (formerly Looka/LogoJoy) generates names and pairs them with logo designs. It&rsquo;s strong on visual branding but <strong>requires payment for most features</strong> and doesn&rsquo;t include domain or social availability checks. If you need a logo first, it&rsquo;s worth considering — but the full brand kit experience is paid.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-2 text-sm text-slate-600">
                <svg className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                Logo design included in brand kit
              </div>
              <div className="flex items-start gap-2 text-sm text-slate-600">
                <svg className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                Multiple brand kit export options
              </div>
              <div className="flex items-start gap-2 text-sm text-slate-600">
                <svg className="h-5 w-5 text-slate-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                No free tier (paid only)
              </div>
              <div className="flex items-start gap-2 text-sm text-slate-600">
                <svg className="h-5 w-5 text-slate-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                No domain or social availability checks
              </div>
            </div>
          </div>

          {/* Shopify */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-600 font-bold text-sm">S</span>
              Shopify Business Name Generator — Basic &amp; Free
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Shopify&rsquo;s free business name generator is simple: type a keyword, get name suggestions, and see if the .com domain is available. That&rsquo;s it. <strong>No brand kits, no taglines, no social checks, no logo concepts.</strong> It&rsquo;s a fine starting point if you just need a quick name, but you&rsquo;ll need other tools for everything else.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-2 text-sm text-slate-600">
                <svg className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                Completely free
              </div>
              <div className="flex items-start gap-2 text-sm text-slate-600">
                <svg className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                Includes domain availability check
              </div>
              <div className="flex items-start gap-2 text-sm text-slate-600">
                <svg className="h-5 w-5 text-slate-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                No brand kits or visual identity
              </div>
              <div className="flex items-start gap-2 text-sm text-slate-600">
                <svg className="h-5 w-5 text-slate-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                Keyword-based (no AI business description input)
              </div>
            </div>
          </div>

          {/* Verdict */}
          <div className="rounded-2xl border-2 border-brand-200 bg-gradient-to-br from-brand-50/50 to-purple-50/50 p-8 sm:p-10">
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              The Verdict
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              If you just need a quick name brainstorm, <strong>any of these tools will work</strong>. But if you want a complete brand identity — name, logo concept, colors, tagline, typography, and availability checks — <strong>BrandForge is the only tool that does it all in one place, and it&rsquo;s free to start.</strong>
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="/generate"
                className="btn-primary inline-flex items-center gap-2 whitespace-nowrap"
              >
                Generate Your Brand Now — It&rsquo;s Free
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="/examples"
                className="text-sm text-brand-600 hover:text-brand-700 font-medium"
              >
                See Brand Kit Examples →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}