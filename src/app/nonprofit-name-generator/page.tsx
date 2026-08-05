import type { Metadata } from 'next'
import Link from 'next/link'
import { IndustryPageSchema } from '@/components/IndustryPageSchema'
import { IndustryBlogLinks } from '@/components/IndustryBlogLinks'

export const metadata: Metadata = {
  title: 'Free Nonprofit Name Generator — AI-Powered Nonprofit & Charity Organization Names',
  description: 'Generate creative nonprofit organization names with AI. Get a complete brand kit including logo concepts, color palettes, taglines, and domain availability checks. Free to start — no credit card required.',
  keywords: [
    'nonprofit name generator',
    'nonprofit organization names',
    'charity name generator',
    'nonprofit name ideas',
    'charity name ideas',
    'foundation name generator',
    'nonprofit business names',
    'NGO name generator',
    'social enterprise names',
    'community organization names',
    'how to name a nonprofit',
    'nonprofit naming guide',
    '501c3 name ideas',
    'charitable organization names',
  ],
  openGraph: {
    title: 'Free Nonprofit Name Generator — AI-Powered Nonprofit & Charity Names',
    description: 'Generate creative nonprofit organization names with AI. Logo, colors, tagline, domain check — all in one. Free to start.',
    url: 'https://brandforge.app/nonprofit-name-generator',
    siteName: 'BrandForge',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Nonprofit Name Generator — AI-Powered Nonprofit & Charity Names',
    description: 'Generate creative nonprofit organization names with AI. Logo, colors, tagline, domain check — all in one.',
  },
  alternates: {
    canonical: 'https://brandforge.app/nonprofit-name-generator',
  },
  robots: { index: true, follow: true },
}

const EXAMPLE_NAMES = [
  { name: 'Brightroots', tagline: 'Where change takes hold', style: 'Modern & Approachable', domain: 'brightroots.org', color: '#059669' },
  { name: 'The Common Thread', tagline: 'Bound together for greater good', style: 'Warm & Community-Focused', domain: 'thecommonthread.org', color: '#DC2626' },
  { name: 'Liftward', tagline: 'Elevating lives, one community at a time', style: 'Aspirational & Clean', domain: 'liftward.org', color: '#2563EB' },
  { name: 'Evergive Foundation', tagline: 'Generosity that outlasts us all', style: 'Established & Trustworthy', domain: 'evergive.org', color: '#7C3AED' },
  { name: 'Seed & Compass', tagline: 'Plant direction. Harvest impact.', style: 'Nature-Inspired & Purposeful', domain: 'seedandcompass.org', color: '#65A30D' },
  { name: 'Unison Collective', tagline: 'Many voices, one mission', style: 'United & Inclusive', domain: 'unisoncollective.org', color: '#0891B2' },
]

const CATEGORIES = [
  { name: 'Education & Youth', desc: 'Hopeful, learning-focused names that signal growth and opportunity' },
  { name: 'Health & Wellness', desc: 'Compassionate, clear names that convey care and healing' },
  { name: 'Environmental & Climate', desc: 'Nature-inspired names that evoke stewardship and urgency' },
  { name: 'Social Justice & Equity', desc: 'Bold, principled names that signal advocacy and systemic change' },
  { name: 'Community Development', desc: 'Warm, inclusive names that feel local and welcoming' },
  { name: 'Animal Welfare', desc: 'Empathetic, gentle names that connect people to animals' },
  { name: 'Arts & Culture', desc: 'Creative, expressive names that celebrate human creativity' },
  { name: 'Disaster Relief & Humanitarian', desc: 'Action-oriented, urgent names that signal rapid response' },
]

const NAMING_TIPS = [
  {
    title: 'Lead with your mission, not your structure',
    description: '"The Brightroots Foundation" is better than "The Brightroots 501(c)(3)." Your mission should be immediately clear — the legal structure comes later. Focus on the change you make, not the tax code you file under.',
  },
  {
    title: 'Think .org from day one',
    description: 'Nonprofits live on .org domains. It signals trust and mission-focus instantly. When BrandForge generates names, we check .org availability alongside .com — because your nonprofit\'s URL should match your brand, not compromise it.',
  },
  {
    title: 'Choose a name that scales',
    description: 'Starting with "Austin Pet Rescue" locks you into one city and one cause. "Brightroots" works whether you expand to pet welfare + education, or grow from Austin to 10 states. Pick a name that doesn\'t limit your impact.',
  },
  {
    title: 'Test with donors and volunteers',
    description: 'Your name needs to resonate with two audiences: donors (who decide to give) and volunteers (who decide to show up). Share your top 3 names with 10 people in your target community — not just your board members.',
  },
  {
    title: 'Avoid abbreviations and jargon',
    description: '"SASHRI" might mean something to your board, but donors won\'t remember it. Abbreviations, acronyms, and nonprofit jargon create distance between you and the people you serve. Real words with emotional resonance always win.',
  },
  {
    title: 'Check state charity registrations',
    description: 'Many states require nonprofit name registration, and your name can\'t conflict with existing charities in your state. BrandForge helps by checking domain and social availability — but also search your state\'s nonprofit registry before committing.',
  },
]

const FAQ_ITEMS = [
  {
    q: 'How does the nonprofit name generator work?',
    a: 'Describe your nonprofit — your cause (education, health, environment, social justice, community, animal welfare, arts, or disaster relief), your target community, and brand personality (warm, bold, professional, grassroots). BrandForge\'s AI generates custom name suggestions paired with complete brand kits including logo concepts, color palettes, taglines, and domain/social availability checks.',
  },
  {
    q: 'Is the nonprofit name generator free?',
    a: 'Yes! You can generate nonprofit name ideas for free — 5 suggestions per search, unlimited searches, no credit card required. Unlock the full brand kit (logo, colors, tagline, typography, domain & social checks) for $9 per brand kit.',
  },
  {
    q: 'What makes a good nonprofit name?',
    a: 'A great nonprofit name communicates your mission instantly, feels warm and trustworthy, and is easy to remember. It should work on donation pages, event banners, and grant applications. Avoid jargon, abbreviations, and overly narrow names — focus on the change you create, not the structure of your organization.',
  },
  {
    q: 'Should I use "Foundation" or "Fund" in my nonprofit name?',
    a: 'Terms like "Foundation" and "Fund" can add gravitas and signal credibility to donors. "Foundation" suggests a broad, established organization (great for education, health, arts). "Fund" implies targeted, immediate impact (great for disaster relief, emergency aid). However, a branded name without these suffixes (e.g., "Brightroots" instead of "Brightroots Foundation") gives you more flexibility.',
  },
  {
    q: 'Can I use these names for my nonprofit organization?',
    a: 'Absolutely. All names you generate are yours to use commercially — for IRS Form 1023, state charity registration, branding, website, and fundraising materials. There are no licensing restrictions.',
  },
  {
    q: 'What if I want names for a specific cause?',
    a: 'Just describe your cause in the prompt. Whether it\'s childhood literacy, clean water access, mental health advocacy, animal rescue, climate action, or veterans\' support — BrandForge tailors suggestions to your exact mission and community.',
  },
  {
    q: 'Why is .org domain availability important for nonprofits?',
    a: 'A .org domain instantly signals to visitors that you\'re a mission-driven organization, not a for-profit business. It builds trust before someone reads a single word on your site. BrandForge checks .org availability alongside .com so your name and domain match perfectly.',
  },
  {
    q: 'What comes in the brand kit for each name?',
    a: 'Each brand kit includes: a logo concept (text-based with font pairing), a 5-color palette with hex codes, a custom tagline, typography recommendations, and real-time availability checks for domains (.com and .org) and social handles. You can download it all as a PDF brand guidelines document.',
  },
]

export default function NonprofitNameGeneratorPage() {
  return (
    <>
      <IndustryPageSchema name="Nonprofit Name Generator" path="/nonprofit-name-generator" description="AI-powered nonprofit name generator with complete brand kits including logos, colors, taglines, and domain availability." faqItems={FAQ_ITEMS} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-700 via-teal-600 to-sky-500" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-medium text-emerald-700">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            AI-Powered Nonprofit Naming
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Nonprofit Name Generator
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-emerald-100">
            Generate nonprofit organization names with AI. Describe your cause, get name suggestions with complete brand kits — logo concepts, color palettes, taglines, and domain availability. Free to start.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="btn-primary inline-flex items-center gap-2 text-base px-8 py-3"
            >
              Generate Nonprofit Names
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/examples"
              className="btn-secondary inline-flex items-center gap-2 text-base px-8 py-3"
            >
              See Examples
            </a>
          </div>
          <p className="mt-4 text-sm text-emerald-200">Free • No credit card required • Results in seconds</p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Names for Every Cause
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              From education to environmental advocacy — we generate names that inspire trust, generosity, and action.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((cat) => (
              <div key={cat.name} className="rounded-xl border border-slate-200 p-5 hover:border-emerald-300 hover:shadow-sm transition-all">
                <h3 className="font-semibold text-slate-900 mb-1">{cat.name}</h3>
                <p className="text-sm text-slate-500">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Names */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Nonprofit Names, Generated in Seconds
            </h2>
            <p className="mt-3 text-slate-500">
              Each name comes with a complete brand kit — not just a name on its own.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {EXAMPLE_NAMES.map((item) => (
              <div key={item.name} className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-emerald-200">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl text-white font-bold text-lg"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.name[0]}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{item.name}</h3>
                    <p className="text-sm text-slate-400">{item.style}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-500 italic mb-3">&ldquo;{item.tagline}&rdquo;</p>
                <div className="flex items-center gap-2 text-sm">
                  <span className="inline-flex items-center gap-1 rounded-full bg-green-100 text-green-700 px-2.5 py-0.5 text-xs font-medium">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6L19.5 4.5" /></svg>
                    {item.domain}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-slate-400">
            These are real examples — your results will be tailored to your specific cause and community.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              How to Name Your Nonprofit with AI
            </h2>
          </div>
          <div className="space-y-8">
            {[
              { step: '1', title: 'Describe your nonprofit mission', desc: 'Tell us your cause — education, health, environment, social justice, community development, animal welfare, arts, or disaster relief. Describe your target community and brand personality (warm, bold, professional, grassroots).' },
              { step: '2', title: 'Get tailored name suggestions', desc: 'BrandForge generates 5 unique nonprofit names per search, each with a matching tagline, color palette, and logo concept. Every name is designed to inspire trust, generosity, and action — the three pillars of a great nonprofit name.' },
              { step: '3', title: 'Check domain & social availability', desc: 'Every name comes with real-time checks for .org, .com, .co, and more — plus social media handle availability across all platforms. Essential for a nonprofit that needs consistent branding across donation pages, social campaigns, and outreach.' },
              { step: '4', title: 'Download your brand kit', desc: 'Unlock the full brand kit: logo concept, 5-color palette with hex codes, tagline, typography recommendations, and a downloadable PDF brand guidelines document ready for grant applications, donation pages, and event materials.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-emerald-700 text-white font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Naming Tips */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Tips for Naming Your Nonprofit
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              In the nonprofit world, your name is your first donation pitch. Here&apos;s how to make it count.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {NAMING_TIPS.map((tip) => (
              <div key={tip.title} className="rounded-xl border border-slate-200 bg-white p-6 hover:border-emerald-200 transition-colors">
                <h3 className="text-base font-semibold text-slate-900 mb-2">{tip.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, i) => (
              <details key={i} className="group rounded-xl border border-slate-200 bg-slate-50">
                <summary className="flex cursor-pointer items-center justify-between p-5 text-base font-medium text-slate-900 hover:text-emerald-600">
                  {item.q}
                  <svg className="h-5 w-5 flex-shrink-0 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-emerald-700 to-sky-500">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to Name Your Nonprofit?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Describe your cause. Get names with brand kits. Free to start, $9 per brand kit you love.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-semibold text-emerald-700 shadow-lg hover:bg-gray-50 transition-colors"
            >
              Generate Nonprofit Names
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-8 py-3 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              See Pricing
            </a>
          </div>
        </div>
      </section>


      {/* Blog Links */}
      <IndustryBlogLinks industry="nonprofit-name-generator" />
      {/* Internal Links */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold text-slate-900 mb-6">More Name Generators</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/startup-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-emerald-300 hover:text-emerald-600 transition-colors">
              🚀 Startup Name Generator
            </Link>
            <Link href="/restaurant-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-emerald-300 hover:text-emerald-600 transition-colors">
              🍽️ Restaurant Name Generator
            </Link>
            <Link href="/fitness-brand-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-emerald-300 hover:text-emerald-600 transition-colors">
              💪 Fitness Brand Name Generator
            </Link>
            <Link href="/real-estate-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-emerald-300 hover:text-emerald-600 transition-colors">
              🏠 Real Estate Name Generator
            </Link>
            <Link href="/photography-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-emerald-300 hover:text-emerald-600 transition-colors">
              📸 Photography Name Generator
            </Link>
            <Link href="/beauty-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-emerald-300 hover:text-emerald-600 transition-colors">
              💄 Beauty Name Generator
            </Link>
            <Link href="/fashion-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-emerald-300 hover:text-emerald-600 transition-colors">
              👗 Fashion Name Generator
            </Link>
            <Link href="/food-truck-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-emerald-300 hover:text-emerald-600 transition-colors">
              🚚 Food Truck Name Generator
            </Link>
            <Link href="/tech-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-emerald-300 hover:text-emerald-600 transition-colors">
              💻 Tech Name Generator
            </Link>
            <Link href="/consulting-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-emerald-300 hover:text-emerald-600 transition-colors">
              📊 Consulting Name Generator
            </Link>
            <Link href="/podcast-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-emerald-300 hover:text-emerald-600 transition-colors">
              🎙️ Podcast Name Generator
            </Link>
            <Link href="/coaching-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-emerald-300 hover:text-emerald-600 transition-colors">
              🧭 Coaching Name Generator
            </Link>
            <Link href="/craft-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-emerald-300 hover:text-emerald-600 transition-colors">
              🧶 Craft Name Generator
            </Link>
            <Link href="/education-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-emerald-300 hover:text-emerald-600 transition-colors">
              📚 Education Name Generator
            </Link>
            <Link href="/yoga-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors">
              🧘 Yoga Name Generator
            </Link>
            <Link href="/coffee-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors">
              ☕ Coffee Name Generator
            </Link>
                        <Link href="/music-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-brand-300 hover:text-brand-600 transition-colors">
              🎵 Music Name Generator
            </Link>
            <Link href="/wedding-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-brand-300 hover:text-brand-600 transition-colors">
              💍 Wedding Name Generator
            </Link>
            <Link href="/cleaning-business-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-teal-300 hover:text-teal-600 transition-colors">
              🧹 Cleaning Business Name Generator
            </Link>
            <Link href="/pet-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-orange-300 hover:text-orange-600 transition-colors">
              🐾 Pet Name Generator
            </Link>
            <Link href="/landscaping-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-orange-300 hover:text-orange-600 transition-colors">
              🌿 Landscaping Name Generator
            </Link>
            <Link href="/salon-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-pink-300 hover:text-pink-600 transition-colors">
              💇 Salon Name Generator
            </Link>
            <Link href="/construction-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              Construction Name Generator
            </Link>
            <Link href="/marketing-agency-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              📈 Marketing Agency Name Generator
            </Link>
<Link href="/compare" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-emerald-300 hover:text-emerald-600 transition-colors">
              📊 Compare Name Generators
            </Link>
            <Link href="/examples" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-emerald-300 hover:text-emerald-600 transition-colors">
              ✨ Brand Kit Examples
            </Link>          </div>
        </div>
      </section>
    </>
  )
}