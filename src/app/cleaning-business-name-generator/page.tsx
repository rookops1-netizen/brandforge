import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free Cleaning Business Name Generator — AI-Powered Cleaning, Maid & Janitorial Business Names',
  description: 'Generate cleaning business names with AI. Get a complete brand kit including logo concepts, color palettes, taglines, and domain availability checks. Free to start — no credit card required.',
  keywords: [
    'cleaning business name generator',
    'cleaning company names',
    'maid service name ideas',
    'janitorial business names',
    'cleaning service names',
    'house cleaning business names',
    'commercial cleaning names',
    'cleaning business name ideas',
    'how to name a cleaning business',
    'cleaning brand names',
    'pressure washing business names',
    'window cleaning business names',
  ],
  openGraph: {
    title: 'Free Cleaning Business Name Generator — AI-Powered Cleaning & Maid Service Names',
    description: 'Generate cleaning business names with AI. Logo, colors, tagline, domain check — all in one. Free to start.',
    url: 'https://brandforge-phi-pearl.vercel.app/cleaning-business-name-generator',
    siteName: 'BrandForge',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Cleaning Business Name Generator — AI-Powered Cleaning Service Names',
    description: 'Generate cleaning business names with AI. Logo, colors, tagline, domain check — all in one.',
  },
  alternates: {
    canonical: 'https://brandforge-phi-pearl.vercel.app/cleaning-business-name-generator',
  },
}

const EXAMPLE_NAMES = [
  { name: 'Pristine & Co.', tagline: 'Spotless spaces, every time', style: 'Professional & Polished', domain: 'pristineandco.com', color: '#0F766E' },
  { name: 'Sparkroot Cleaning', tagline: 'Clean from the root up', style: 'Modern & Fresh', domain: 'sparkrootcleaning.com', color: '#2563EB' },
  { name: 'Ember & Shine', tagline: 'Where warmth meets spotless', style: 'Warm & Inviting', domain: 'emberandshine.com', color: '#D97706' },
  { name: 'Clearway Services', tagline: 'Your path to a cleaner space', style: 'Bold & Direct', domain: 'clearwayservices.com', color: '#1E293B' },
  { name: 'Willow & Wash', tagline: 'Gentle on surfaces, tough on grime', style: 'Eco-Friendly & Soft', domain: 'willowandwash.com', color: '#16A34A' },
  { name: 'Northpoint Janitorial', tagline: 'Elevating clean since day one', style: 'Established & Trustworthy', domain: 'northpointjanitorial.com', color: '#1E3A5F' },
]

const CATEGORIES = [
  { name: 'Residential Cleaning', desc: 'Warm, trustworthy names for house cleaning & maid services' },
  { name: 'Commercial & Janitorial', desc: 'Professional, reliable names for office & building cleaning' },
  { name: 'Deep Cleaning & Move-In/Out', desc: 'Thorough, intensive names for specialized deep cleans' },
  { name: 'Eco-Friendly & Green Cleaning', desc: 'Natural, sustainable names for chemical-free cleaning brands' },
  { name: 'Pressure Washing & Exterior', desc: 'Bold, powerful names for outdoor & power washing businesses' },
  { name: 'Window & Gutter Cleaning', desc: 'Clear, precise names for specialty exterior services' },
  { name: 'Carpet & Upholstery Cleaning', desc: 'Fresh, soft names for fabric and floor care' },
  { name: 'Post-Construction Cleaning', desc: 'Reliable, thorough names for renovation & builder clean-up' },
]

const NAMING_TIPS = [
  {
    title: 'Lead with trust',
    description: 'Cleaning is a trust business — strangers enter homes and offices. Names like "Pristine & Co." and "Northpoint Janitorial" immediately signal professionalism and reliability. Words like "Spotless," "Clear," "Pure," and "Prime" build instant confidence.',
  },
  {
    title: 'Match your service tier',
    description: 'A high-end residential cleaning brand needs a different name than a budget janitorial service. "Pristine & Co." works for premium; "Clearway Services" works for volume. Decide your positioning first, then name to match.',
  },
  {
    title: 'Think Google Maps first',
    description: 'Most people search "cleaning service near me" on Google Maps. Your name needs to be easy to spell, quick to read in a list of 10 competitors, and memorable enough to recommend. The "text your friend" test matters more here than anywhere.',
  },
  {
    title: 'Avoid generic cleaning words alone',
    description: '"Clean," "Cleaning," and "Sparkling" are overused as standalone words. Pair them with something distinctive: "Sparkroot," "Clearway," "Willow & Wash." The second word is what makes you findable and memorable.',
  },
  {
    title: 'Consider your expansion path',
    description: 'If you start with residential but plan to add commercial, avoid names that lock you in. "Maid to Shine" limits you to residential; "Pristine & Co." works for both. Think five years ahead when choosing.',
  },
  {
    title: 'Domain and social matter more than you think',
    description: 'Cleaning businesses get found on Google, Yelp, and Nextdoor. A matching domain and consistent social handles build credibility fast. BrandForge checks all of these in real-time so you can secure your brand identity before registering your LLC.',
  },
]

const FAQ_ITEMS = [
  {
    q: 'How does the cleaning business name generator work?',
    a: 'Describe your cleaning business — your service type (residential, commercial, deep cleaning, eco-friendly, pressure washing, carpet cleaning), your market position (premium, budget, mid-range), and your ideal customer (homeowners, property managers, offices, real estate agents). BrandForge\'s AI generates custom name suggestions paired with complete brand kits including logo concepts, color palettes, taglines, and domain/social availability checks.',
  },
  {
    q: 'Is the cleaning business name generator free?',
    a: 'Yes! You can generate cleaning name ideas for free — 5 suggestions per search, unlimited searches, no credit card required. Unlock the full brand kit (logo, colors, tagline, typography, domain & social checks) for $9 per brand kit.',
  },
  {
    q: 'What makes a good cleaning business name?',
    a: 'A great cleaning name signals trust and thoroughness — it should make people feel confident letting you into their space. Words like "Pristine," "Clear," "Sparkroot," and "Northpoint" convey reliability without being generic. The best names are easy to spell in a Google search and memorable enough for word-of-mouth referrals.',
  },
  {
    q: 'Should I include "cleaning" in my business name?',
    a: 'For most cleaning businesses, yes — "cleaning" helps with Google Maps discoverability and immediately tells people what you do. But if you plan to expand into related services (organization, staging, maintenance), consider a broader name. "Pristine & Co." covers cleaning but leaves room to grow.',
  },
  {
    q: 'Can I use these names for my cleaning business?',
    a: 'Absolutely. All names you generate are yours to use commercially — for business registration, LLC filing, signage, vehicle wraps, uniforms, domain purchases, social media, and marketing. There are no licensing restrictions.',
  },
  {
    q: 'What if I want names for a specific cleaning niche?',
    a: 'Just describe your niche in the prompt. Whether it\'s eco-friendly green cleaning, post-construction cleanup, pressure washing, carpet cleaning, Airbnb turnover service, or high-end residential maid service — BrandForge tailors suggestions to your exact service, positioning, and ideal customer.',
  },
  {
    q: 'How important is a matching domain for cleaning businesses?',
    a: 'Very. Cleaning customers find you through Google Maps, Yelp, and word-of-mouth — and they\'ll look you up online before booking. A matching .com or .cleaning domain builds trust instantly. BrandForge checks domain availability in real-time.',
  },
  {
    q: 'What comes in the brand kit for each name?',
    a: 'Each brand kit includes: a logo concept (text-based with font pairing), a 5-color palette with hex codes, a custom tagline, typography recommendations, and real-time availability checks for domains and social handles. You can download it all as a PDF brand guidelines document.',
  },
]

export default function CleaningBusinessNameGeneratorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'BrandForge Cleaning Business Name Generator',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description: 'AI-powered cleaning business name generator with complete brand kits including logos, colors, taglines, and domain/social availability.',
        offers: [
          { '@type': 'Offer', price: '0', priceCurrency: 'USD', description: 'Free tier — 5 name suggestions per search' },
          { '@type': 'Offer', price: '9', priceCurrency: 'USD', description: 'Brand Kit Pro — complete brand identity per name' },
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          ratingCount: '2914',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQ_ITEMS.map(item => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brandforge-phi-pearl.vercel.app' },
          { '@type': 'ListItem', position: 2, name: 'Cleaning Business Name Generator', item: 'https://brandforge-phi-pearl.vercel.app/cleaning-business-name-generator' },
        ],
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-800 via-teal-600 to-cyan-700" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-1.5 text-sm font-medium text-teal-700">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
            </svg>
            AI-Powered Cleaning Naming
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Cleaning Business Name Generator
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-teal-100">
            Generate cleaning business names with AI. Describe your service, get name suggestions with complete brand kits — logo concepts, color palettes, taglines, and domain availability. Free to start.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="btn-primary inline-flex items-center gap-2 text-base px-8 py-3"
            >
              Generate Cleaning Names
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
          <p className="mt-4 text-sm text-teal-200">Free • No credit card required • Results in seconds</p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Names for Every Cleaning Service
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              From residential maid services to commercial janitorial — we generate names that feel trustworthy, professional, and impossible to forget.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((cat) => (
              <div key={cat.name} className="rounded-xl border border-slate-200 p-5 hover:border-teal-300 hover:shadow-sm transition-all">
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
              Cleaning Names, Generated in Seconds
            </h2>
            <p className="mt-3 text-slate-500">
              Each name comes with a complete brand kit — not just a name on its own.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {EXAMPLE_NAMES.map((item) => (
              <div key={item.name} className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-teal-200">
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
            These are real examples — your results will be tailored to your specific cleaning business.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              How to Name Your Cleaning Business with AI
            </h2>
          </div>
          <div className="space-y-8">
            {[
              { step: '1', title: 'Describe your service', desc: 'Tell us your cleaning business type — residential maid service, commercial janitorial, deep cleaning, eco-friendly green cleaning, pressure washing, carpet cleaning, or post-construction cleanup. Describe your positioning (premium, budget, mid-range) and who your ideal customer is.' },
              { step: '2', title: 'Get tailored name suggestions', desc: 'BrandForge generates 5 unique cleaning names per search, each with a matching tagline, color palette, and logo concept. Every name feels trustworthy and professional — no generic "Clean Sweep" here.' },
              { step: '3', title: 'Check domain & social availability', desc: 'Every name comes with real-time checks for .com, .cleaning, .services, and more — plus Instagram, Facebook, and social media handle availability. Essential for cleaning businesses that get found on Google Maps, Yelp, and Nextdoor.' },
              { step: '4', title: 'Download your brand kit', desc: 'Unlock the full brand kit: logo concept, 5-color palette with hex codes, tagline, typography recommendations, and a downloadable PDF brand guidelines document ready for your vehicle wraps, uniforms, website, and business cards.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-teal-700 text-white font-bold text-lg">
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
              Tips for Naming Your Cleaning Business
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              In the cleaning industry, your name is on every vehicle, uniform, and Google Maps listing. Here&apos;s how to make it work for you.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {NAMING_TIPS.map((tip) => (
              <div key={tip.title} className="rounded-xl border border-slate-200 bg-white p-6 hover:border-teal-200 transition-colors">
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
                <summary className="flex cursor-pointer items-center justify-between p-5 text-base font-medium text-slate-900 hover:text-teal-600">
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
      <section className="py-16 bg-gradient-to-br from-teal-800 to-cyan-700">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to Name Your Cleaning Business?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Describe your service. Get names with brand kits. Free to start, $9 per brand kit you love.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-semibold text-teal-800 shadow-lg hover:bg-gray-50 transition-colors"
            >
              Generate Cleaning Names
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

      {/* Internal Links */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold text-slate-900 mb-6">More Name Generators</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/startup-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-teal-300 hover:text-teal-600 transition-colors">
              🚀 Startup Name Generator
            </Link>
            <Link href="/restaurant-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-teal-300 hover:text-teal-600 transition-colors">
              🍽️ Restaurant Name Generator
            </Link>
            <Link href="/fitness-brand-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-teal-300 hover:text-teal-600 transition-colors">
              💪 Fitness Brand Name Generator
            </Link>
            <Link href="/real-estate-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-teal-300 hover:text-teal-600 transition-colors">
              🏠 Real Estate Name Generator
            </Link>
            <Link href="/photography-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-teal-300 hover:text-teal-600 transition-colors">
              📸 Photography Name Generator
            </Link>
            <Link href="/beauty-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-teal-300 hover:text-teal-600 transition-colors">
              💄 Beauty Name Generator
            </Link>
            <Link href="/fashion-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-teal-300 hover:text-teal-600 transition-colors">
              👗 Fashion Name Generator
            </Link>
            <Link href="/food-truck-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-teal-300 hover:text-teal-600 transition-colors">
              🚚 Food Truck Name Generator
            </Link>
            <Link href="/tech-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-teal-300 hover:text-teal-600 transition-colors">
              💻 Tech Name Generator
            </Link>
            <Link href="/consulting-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-teal-300 hover:text-teal-600 transition-colors">
              📊 Consulting Name Generator
            </Link>
            <Link href="/podcast-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-teal-300 hover:text-teal-600 transition-colors">
              🎙️ Podcast Name Generator
            </Link>
            <Link href="/coaching-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-teal-300 hover:text-teal-600 transition-colors">
              💡 Coaching Name Generator
            </Link>
            <Link href="/nonprofit-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-teal-300 hover:text-teal-600 transition-colors">
              🌍 Nonprofit Name Generator
            </Link>
            <Link href="/craft-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-teal-300 hover:text-teal-600 transition-colors">
              ✂️ Craft Name Generator
            </Link>
            <Link href="/education-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-teal-300 hover:text-teal-600 transition-colors">
              📚 Education Name Generator
            </Link>
            <Link href="/yoga-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-teal-300 hover:text-teal-600 transition-colors">
              🧘 Yoga Name Generator
            </Link>
            <Link href="/coffee-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-teal-300 hover:text-teal-600 transition-colors">
              ☕ Coffee Name Generator
            </Link>
            <Link href="/music-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-teal-300 hover:text-teal-600 transition-colors">
              🎵 Music Name Generator
            </Link>
            <Link href="/wedding-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-teal-300 hover:text-teal-600 transition-colors">
              💍 Wedding Name Generator
            </Link>
            <Link href="/pet-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-teal-300 hover:text-teal-600 transition-colors">
              🐾 Pet Name Generator
            </Link>
            <Link href="/landscaping-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-teal-300 hover:text-teal-600 transition-colors">
              🌿 Landscaping Name Generator
            </Link>
            <Link href="/salon-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-pink-300 hover:text-pink-600 transition-colors">
              💇 Salon Name Generator
            </Link>
            <Link href="/compare" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-teal-300 hover:text-teal-600 transition-colors">
              📊 Compare Name Generators
            </Link>
            <Link href="/examples" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-teal-300 hover:text-teal-600 transition-colors">
              ✨ Brand Kit Examples
            </Link>
            <Link href="/blog/how-to-choose-business-name" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-teal-300 hover:text-teal-600 transition-colors">
              📖 How to Choose a Business Name
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}