import type { Metadata } from 'next'
import { BreadcrumbSchema, OrganizationSchema } from '@/components/BlogPostSchema'

export const metadata: Metadata = {
  title: 'About BrandForge — AI-Powered Business Naming & Brand Kits',
  description: 'BrandForge helps entrepreneurs name their business and build a complete brand identity — logos, colors, taglines, and domain checks — all powered by AI, all in under a minute.',
  openGraph: {
    title: 'About BrandForge',
    description: 'AI-powered business naming and brand kits. From idea to identity in seconds.',
    url: 'https://brandforge-phi-pearl.vercel.app/about',
    siteName: 'BrandForge',
    type: 'website',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://brandforge-phi-pearl.vercel.app/about' },
}

const teamValues = [
  {
    icon: (
      <svg className="h-8 w-8 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'AI-First Thinking',
    description: 'We leverage cutting-edge AI not as a gimmick, but as a creative partner — helping you explore possibilities you\'d never have considered alone.',
  },
  {
    icon: (
      <svg className="h-8 w-8 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Speed Without Sacrifice',
    description: 'A great brand name shouldn\'t take weeks of brainstorming. We deliver quality names in seconds — without cutting corners on creativity or relevance.',
  },
  {
    icon: (
      <svg className="h-8 w-8 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Built for Founders',
    description: 'Every feature is designed for someone starting from zero — no design degree required, no enterprise price tag, no 14-step onboarding.',
  },
  {
    icon: (
      <svg className="h-8 w-8 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Global Perspective',
    description: 'Great names travel. Our AI considers cultural nuances, domain availability across TLDs, and social handle availability worldwide.',
  },
]

const stats = [
  { value: '50K+', label: 'Names Generated' },
  { value: '12K+', label: 'Happy Founders' },
  { value: '< 30s', label: 'Time to Results' },
  { value: '4.9/5', label: 'User Rating' },
]

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <OrganizationSchema detailed />
      <BreadcrumbSchema items={[{ name: 'About', href: '/about' }]} />
      {/* Hero */}
      <div className="text-center mb-16">
        <p className="text-sm font-semibold text-brand-600 tracking-wide uppercase mb-3">Our Story</p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Branding should be the <span className="gradient-text">exciting part</span>, not the hard part.
        </h1>
        <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
          BrandForge was born from a simple frustration: naming a business shouldn&apos;t take longer than building the product. We make it possible to go from idea to full brand identity in under a minute.
        </p>
      </div>

      {/* The Problem */}
      <div className="mb-20">
        <div className="rounded-3xl bg-gradient-to-br from-brand-50 via-white to-purple-50 p-8 sm:p-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">The naming problem is real</h2>
          <div className="grid sm:grid-cols-2 gap-6 mt-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </div>
                <p className="text-slate-700">The average founder spends <strong>2–3 weeks</strong> brainstorming business names</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </div>
                <p className="text-slate-700">72% of .com domains for short names are <strong>already taken</strong></p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </div>
                <p className="text-slate-700">Hiring a naming agency costs <strong>$5,000–$50,000+</strong></p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <p className="text-slate-700">BrandForge generates names in <strong>under 30 seconds</strong></p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <p className="text-slate-700">Instant domain &amp; social handle <strong>availability checks</strong></p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <p className="text-slate-700">Complete brand kit for <strong>less than a cup of coffee</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mb-20">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Values */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-brand-600 tracking-wide uppercase mb-3">What Drives Us</p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Built on principles, powered by AI</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-8">
          {teamValues.map((value) => (
            <div key={value.title} className="card flex gap-4">
              <div className="shrink-0">{value.icon}</div>
              <div>
                <h3 className="font-semibold text-slate-900">{value.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How it's different */}
      <div className="mb-20">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Not just another name generator
            </h2>
            <p className="mt-4 text-slate-600 max-w-xl mx-auto">
              Most naming tools give you a list of random word combinations. BrandForge understands your vision and builds a complete identity around it.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-600 mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.822a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>
              </div>
              <h3 className="font-semibold text-slate-900">Context-Aware AI</h3>
              <p className="mt-2 text-sm text-slate-600">Describe your idea in plain English. Our AI understands industry, audience, and vibe — not just keywords.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-600 mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 0l2.25 1.313M12 15l-2.25-1.313M18 12.75l2.25-1.313M18 12.75V15m0 0l2.25 1.313m-9-7.5l2.25 1.313M12 7.5V9.75m0 0l-2.25 1.313M12 7.5l-2.25-1.313M3 16.5l2.25 1.313M3 16.5V18m0-1.5l2.25-1.313M21 16.5l-2.25 1.313M21 16.5V18m0-1.5l-2.25-1.313" /></svg>
              </div>
              <h3 className="font-semibold text-slate-900">Full Brand Kit</h3>
              <p className="mt-2 text-sm text-slate-600">Logo concepts, color palettes, taglines, fonts — not just a name, but an entire brand identity ready to use.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-600 mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-semibold text-slate-900">Real-Time Checks</h3>
              <p className="mt-2 text-sm text-slate-600">Instant domain availability and social handle verification — so the name you love is actually one you can use.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Ready to find your name?
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Join thousands of founders who named their business with BrandForge.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/generate" className="btn-primary">
            Start Generating — It&apos;s Free
          </a>
          <a href="/brand-kit" className="btn-secondary">
            Explore Brand Kits
          </a>
        </div>
      </div>
    </div>
  )
}