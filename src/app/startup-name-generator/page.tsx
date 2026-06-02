import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free Startup Name Generator — AI-Powered Startup Name Ideas & Brand Kits',
  description: 'Generate unique, investor-ready startup names with AI. Get a complete brand kit including logo concepts, color palettes, taglines, and domain availability checks. Free to start — no credit card required.',
  keywords: [
    'startup name generator',
    'startup name ideas',
    'AI startup name generator',
    'tech startup names',
    'startup naming tool',
    'generate startup names',
    'startup brand name generator',
    'SaaS name generator',
    'app name generator',
    'startup name ideas free',
    'best startup names',
    'cool startup names',
    'unique startup names',
    'startup naming guide',
    'how to name a startup',
  ],
  openGraph: {
    title: 'Free Startup Name Generator — AI-Powered Ideas & Brand Kits',
    description: 'Generate unique, investor-ready startup names with AI. Get a complete brand kit — logo, colors, tagline, domain check. Free to start.',
    url: 'https://brandforge-phi-pearl.vercel.app/startup-name-generator',
    siteName: 'BrandForge',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Startup Name Generator — AI-Powered Ideas & Brand Kits',
    description: 'Generate unique, investor-ready startup names with AI. Logo, colors, tagline, domain check — all in one.',
  },
  alternates: {
    canonical: 'https://brandforge-phi-pearl.vercel.app/startup-name-generator',
  },
}

const EXAMPLE_NAMES = [
  { name: 'Novascale', tagline: 'Scale what matters', style: 'Tech-forward', domain: 'novascale.com', color: '#6366F1' },
  { name: 'Ventris', tagline: 'Where ventures begin', style: 'Minimal & bold', domain: 'ventris.io', color: '#0EA5E9' },
  { name: 'Launchpoint', tagline: 'Your launch, amplified', style: 'Action-driven', domain: 'launchpoint.com', color: '#10B981' },
  { name: 'Synthex', tagline: 'Intelligence meets intuition', style: 'Futuristic', domain: 'synthex.ai', color: '#8B5CF6' },
  { name: 'Meridian', tagline: 'Redefining the baseline', style: 'Premium', domain: 'meridian.co', color: '#F59E0B' },
  { name: 'Catalyze', tagline: 'Accelerate what\'s next', style: 'Metaphorical', domain: 'catalyze.io', color: '#EF4444' },
]

const NAMING_TIPS = [
  {
    title: 'Keep it short and memorable',
    description: 'The best startup names are 1-2 syllables. Think Shopify, Notion, Figma. Short names are easier to remember, type, and brand.',
  },
  {
    title: 'Make it spellable and pronounceable',
    description: 'If someone hears your name on a podcast and can\'t spell it, you\'re losing traffic. Avoid creative spellings that confuse.',
  },
  {
    title: 'Choose names with room to grow',
    description: 'Don\'t box yourself in with a name tied to one feature. "Stripe" works for payments. "OnlinePaymentProcessor" doesn\'t.',
  },
  {
    title: 'Check domain availability early',
    description: 'A great name with no available domain is a dead end. BrandForge checks .com, .io, .co, .ai, and more in real time.',
  },
  {
    title: 'Think about your brand identity',
    description: 'Your name is just the start. Generate it alongside colors, typography, and taglines so everything feels cohesive from day one.',
  },
  {
    title: 'Test it with real people',
    description: 'Say the name out loud. Text it to friends. See if they can spell it back. First impressions matter — especially for startups.',
  },
]

const FAQ_ITEMS = [
  {
    q: 'How does the startup name generator work?',
    a: 'You describe your startup idea in plain English — what it does, who it\'s for, the vibe you want. BrandForge\'s AI analyzes your description and generates custom name suggestions with complete brand kits including logos, colors, taglines, and domain availability.',
  },
  {
    q: 'Is the startup name generator free?',
    a: 'Yes! You can generate startup names for free — 5 suggestions per search, unlimited searches, no credit card required. Upgrade to unlock the full brand kit (logo, colors, tagline, typography, domain checks) for $9 per brand kit.',
  },
  {
    q: 'What makes a good startup name?',
    a: 'A great startup name is short (1-2 syllables), memorable, easy to spell and pronounce, and has an available .com or .io domain. It should feel modern and leave room for your company to grow beyond its initial product.',
  },
  {
    q: 'Can I use these startup names for my business?',
    a: 'Absolutely. All names you generate are yours to use commercially — for company registration, trademarks, domain purchases, and branding. There are no licensing restrictions.',
  },
  {
    q: 'What if I need names for a specific type of startup?',
    a: 'Just describe the type in your prompt. Whether it\'s a SaaS tool, fintech app, health tech platform, or marketplace — BrandForge tailors suggestions to your industry and audience.',
  },
  {
    q: 'How is this different from other name generators?',
    a: 'BrandForge doesn\'t just give you names — it gives you complete brand identities. Each name comes with a logo concept, color palette, tagline, typography, and domain/social availability checks. Other generators stop at the name; we give you the whole brand kit.',
  },
  {
    q: 'What domain extensions does BrandForge check?',
    a: 'We check .com, .io, .co, .ai, .app, and more. For startups, .io and .ai are often great alternatives if the .com is taken.',
  },
  {
    q: 'Can I generate names for a startup I\'m already working on?',
    a: 'Yes. Whether you\'re pre-launch, pivoting, or rebranding, just describe your current vision and BrandForge will generate names that align with your direction.',
  },
]

export default function StartupNameGeneratorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'BrandForge Startup Name Generator',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description: 'AI-powered startup name generator with complete brand kits including logos, colors, taglines, and domain availability.',
        offers: [
          { '@type': 'Offer', price: '0', priceCurrency: 'USD', description: 'Free tier — 5 name suggestions per search' },
          { '@type': 'Offer', price: '9', priceCurrency: 'USD', description: 'Brand Kit Pro — complete brand identity per name' },
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          ratingCount: '2847',
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
          { '@type': 'ListItem', position: 2, name: 'Startup Name Generator', item: 'https://brandforge-phi-pearl.vercel.app/startup-name-generator' },
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
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-brand-50" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-700">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84 2.18a4.01 4.01 0 004.42-3.52c.09-1.68-.62-3.18-1.79-4.11a4.01 4.01 0 00-2.63-4.45A4.01 4.01 0 0010.6 2.6a4.01 4.01 0 00-2.42 4.48 4.01 4.01 0 00-2.96 4.46A4.01 4.01 0 0110.6 16.77" />
            </svg>
            AI-Powered Startup Naming
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Startup Name Generator
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Generate investor-ready startup names with AI. Describe your idea, get name suggestions with complete brand kits — logo concepts, color palettes, taglines, and domain availability. Free to start.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="btn-primary inline-flex items-center gap-2 text-base px-8 py-3"
            >
              Generate Startup Names
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
          <p className="mt-4 text-sm text-slate-400">Free • No credit card required • Results in seconds</p>
        </div>
      </section>

      {/* Example Names */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Startup Names, Generated in Seconds
            </h2>
            <p className="mt-3 text-slate-500">
              Each name comes with a complete brand kit — not just a name on its own.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {EXAMPLE_NAMES.map((item) => (
              <div key={item.name} className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-brand-200">
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
            These are real examples — your results will be tailored to your specific startup idea.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              How to Name Your Startup with AI
            </h2>
          </div>
          <div className="space-y-8">
            {[
              { step: '1', title: 'Describe your startup', desc: 'Tell us what your startup does, who your customers are, and the vibe you\'re going for. Be as specific or creative as you want — our AI handles it.' },
              { step: '2', title: 'Get tailored name suggestions', desc: 'BrandForge generates 5 unique startup names per search, each with a matching tagline, color palette, and logo concept. No generic keyword combos — these are real, brandable names.' },
              { step: '3', title: 'Check domain & social availability', desc: 'Every name comes with real-time checks for .com, .io, .ai, .co domains and social media handles. No more finding the perfect name only to discover the domain\'s taken.' },
              { step: '4', title: 'Download your brand kit', desc: 'Unlock the full brand kit for the name you love: logo concept, 5-color palette with hex codes, tagline, typography, and a downloadable PDF brand guidelines document.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-white font-bold text-lg">
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
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Tips for Naming Your Startup
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              The best startup names are short, memorable, and have domain availability. Here&apos;s how to get it right.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {NAMING_TIPS.map((tip) => (
              <div key={tip.title} className="rounded-xl border border-slate-200 p-6 hover:border-brand-200 transition-colors">
                <h3 className="text-base font-semibold text-slate-900 mb-2">{tip.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, i) => (
              <details key={i} className="group rounded-xl border border-slate-200 bg-white">
                <summary className="flex cursor-pointer items-center justify-between p-5 text-base font-medium text-slate-900 hover:text-brand-600">
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
      <section className="py-16 bg-gradient-to-br from-brand-600 to-indigo-600">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to Name Your Startup?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Describe your idea. Get names with brand kits. Free to start, $9 per brand kit you love.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-semibold text-brand-700 shadow-lg hover:bg-gray-50 transition-colors"
            >
              Generate Startup Names
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
            <Link href="/restaurant-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-brand-300 hover:text-brand-600 transition-colors">
              🍽️ Restaurant Name Generator
            </Link>
            <Link href="/fitness-brand-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-brand-300 hover:text-brand-600 transition-colors">
              💪 Fitness Brand Name Generator
            </Link>
            <Link href="/real-estate-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-brand-300 hover:text-brand-600 transition-colors">
              🏠 Real Estate Name Generator
            </Link>
            <Link href="/photography-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-brand-300 hover:text-brand-600 transition-colors">
              📸 Photography Name Generator
            </Link>
            <Link href="/beauty-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-brand-300 hover:text-brand-600 transition-colors">
              💄 Beauty Name Generator
            </Link>
            <Link href="/fashion-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-brand-300 hover:text-brand-600 transition-colors">
              👗 Fashion Name Generator
            </Link>
            <Link href="/food-truck-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-brand-300 hover:text-brand-600 transition-colors">
              🚚 Food Truck Name Generator
            </Link>
            <Link href="/tech-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-brand-300 hover:text-brand-600 transition-colors">
              💻 Tech Name Generator
            </Link>
            <Link href="/consulting-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-brand-300 hover:text-brand-600 transition-colors">
              💼 Consulting Name Generator
            </Link>
            <Link href="/podcast-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-brand-300 hover:text-brand-600 transition-colors">
              🎙️ Podcast Name Generator
            </Link>
            <Link href="/compare" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-brand-300 hover:text-brand-600 transition-colors">
              📊 Compare Name Generators
            </Link>
            <Link href="/examples" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-brand-300 hover:text-brand-600 transition-colors">
              ✨ Brand Kit Examples
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}