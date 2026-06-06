import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free Fitness Brand Name Generator — AI Gym & Fitness Brand Ideas & Brand Kits',
  description: 'Generate unique fitness brand names with AI. Get a complete brand kit including logo concepts, color palettes, taglines, and domain availability. Gyms, apps, apparel — free to start.',
  keywords: [
    'fitness brand name generator',
    'gym name generator',
    'fitness business name ideas',
    'workout brand name generator',
    'gym name ideas',
    'fitness app name generator',
    'sportswear brand name generator',
    'personal training name ideas',
    'yoga studio name generator',
    'CrossFit gym name generator',
    'fitness brand names',
    'athletic brand name generator',
    'how to name a fitness business',
    'creative gym names',
    'unique fitness names',
  ],
  openGraph: {
    title: 'Free Fitness Brand Name Generator — AI-Powered Ideas & Brand Kits',
    description: 'Generate unique fitness brand names with AI. Complete brand kits — logo, colors, tagline, domain check. Gyms, apps, apparel. Free to start.',
    url: 'https://brandforge-phi-pearl.vercel.app/fitness-brand-name-generator',
    siteName: 'BrandForge',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Fitness Brand Name Generator — AI-Powered Ideas & Brand Kits',
    description: 'Generate unique fitness brand names with AI. Logo, colors, tagline, domain check — all in one.',
  },
  alternates: {
    canonical: 'https://brandforge-phi-pearl.vercel.app/fitness-brand-name-generator',
  },
}

const EXAMPLE_NAMES = [
  { name: 'Ironpulse', tagline: 'Feel the rhythm of strength', style: 'Modern gym', domain: 'ironpulse.com', color: '#18181B' },
  { name: 'Verde Motion', tagline: 'Move with purpose', style: 'Yoga & wellness', domain: 'verdemotion.com', color: '#16A34A' },
  { name: 'Kineticore', tagline: 'Engineered for motion', style: 'Performance training', domain: 'kineticore.co', color: '#2563EB' },
  { name: 'Peakstate', tagline: 'Your body, activated', style: 'Fitness app', domain: 'peakstate.io', color: '#7C3AED' },
  { name: 'Forge Athletics', tagline: 'Built, not born', style: 'Sportswear brand', domain: 'forgeathletics.com', color: '#DC2626' },
  { name: 'Rise & Rep', tagline: 'Every rep counts', style: 'Community gym', domain: 'riseandrep.com', color: '#F59E0B' },
]

const FITNESS_CATEGORIES = [
  { emoji: '🏋️', name: 'Gyms & Studios', examples: 'Ironpulse, Forge Athletics, Rise & Rep' },
  { emoji: '📱', name: 'Fitness Apps', examples: 'Peakstate, Striver, Motionmate' },
  { emoji: '👟', name: 'Sportswear & Apparel', examples: 'Forge Athletics, Kineticore, Verge Fit' },
  { emoji: '🧘', name: 'Yoga & Pilates', examples: 'Verde Motion, Stillness Studio, Root & Flow' },
  { emoji: '🥊', name: 'Combat & MMA', examples: 'Ironpulse, Strikehouse, Formidus' },
  { emoji: '🏃', name: 'Running & Endurance', examples: 'Pacebound, Kineticore, Everrun' },
  { emoji: '🥗', name: 'Nutrition & Supplements', examples: 'Fuelstate, Primefuel, Cleanstride' },
  { emoji: '💪', name: 'Personal Training', examples: 'Rise & Rep, Peakstate, Nextlevel' },
]

const NAMING_TIPS = [
  {
    title: 'Convey energy and movement',
    description: 'The best fitness names feel active — even before you walk through the door. "Kineticore" suggests motion. "Peakstate" suggests achievement. Let the name do the warm-up.',
  },
  {
    title: 'Match your audience\'s identity',
    description: 'A boutique yoga studio and a powerlifting gym need very different names. Think about who you serve and what identity they want to embody.',
  },
  {
    title: 'Keep it short and punchy',
    description: 'Fitness brands live on gym signage, tank tops, and Instagram. Short names (1-2 syllables) are easier to remember, type, and hashtag.',
  },
  {
    title: 'Think about merch potential',
    description: 'If your gym or app becomes popular, your name will be on t-shirts, water bottles, and hoodies. A name that looks good in one color on black is a huge asset.',
  },
  {
    title: 'Check domains and social handles early',
    description: 'Fitness brands thrive on social media. Make sure your name has clean handles on Instagram, TikTok, and YouTube — not just domain availability.',
  },
  {
    title: 'Avoid generic fitness words',
    description: '"Fit," "strong," "power," "elite" — these are overused in fitness branding. An AI name generator can help you find names that stand out, not blend in.',
  },
]

const FAQ_ITEMS = [
  {
    q: 'How does the fitness brand name generator work?',
    a: 'Describe your fitness business — type (gym, app, apparel, studio), your audience, the vibe you want, and any style preferences. BrandForge\'s AI generates custom name suggestions complete with brand kits: logo concepts, color palettes, taglines, and domain availability checks.',
  },
  {
    q: 'What types of fitness businesses does this work for?',
    a: 'All of them — gyms, fitness apps, sportswear brands, yoga studios, personal training businesses, CrossFit boxes, supplement brands, and more. Just describe what you\'re building.',
  },
  {
    q: 'Is this fitness name generator free?',
    a: 'Yes! Generate fitness brand names for free — 5 suggestions per search, unlimited searches. Upgrade to unlock the full brand kit (logo, colors, tagline, typography, domain checks) for $9 per brand kit.',
  },
  {
    q: 'How is this different from generic name lists?',
    a: 'Generic "100 gym name ideas" lists give you the same names as everyone else. BrandForge generates names tailored to YOUR specific concept, audience, and vibe — each with a complete brand identity, not just a name.',
  },
  {
    q: 'Can I use these names for my fitness business?',
    a: 'Yes. All names you generate are yours to use commercially — for business registration, trademarks, domains, social media, and branding. No licensing restrictions.',
  },
  {
    q: 'What domain extensions does it check?',
    a: 'We check .com, .io, .co, .ai, .app, and more. For fitness apps, .app and .io are great alternatives. For local gyms, .com is usually best.',
  },
  {
    q: 'Do I get a logo and brand kit with the name?',
    a: 'Yes! Each brand kit Pro includes an AI-generated logo concept, 5-color palette with hex codes, a brand tagline, typography recommendations, domain and social availability checks, and a downloadable PDF brand guidelines document.',
  },
  {
    q: 'I\'m naming a fitness app — any specific tips?',
    a: 'For apps, short names with clean spellings work best (think Strava, Peloton, Nike Training Club). Check that the name is easy to type in an app store search, looks good as an app icon, and has clean social handles. Our generator handles all of this.',
  },
]

export default function FitnessBrandNameGeneratorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'BrandForge Fitness Brand Name Generator',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description: 'AI-powered fitness brand name generator with complete brand kits including logos, colors, taglines, and domain availability.',
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
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brandforge-phi-pearl.vercel.app' },
          { '@type': 'ListItem', position: 2, name: 'Fitness Brand Name Generator', item: 'https://brandforge-phi-pearl.vercel.app/fitness-brand-name-generator' },
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
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-emerald-50" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1.5 text-sm font-medium text-green-700">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.012 3.668l-1.09.218a9.645 9.645 0 01-3.086.023l-2.874-.4a9.645 9.645 0 01-3.086-.023l-1.09-.218c-1.662-.35-2.244-2.436-1.012-3.668L5 14.5" />
            </svg>
            AI-Powered Fitness Branding
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Fitness Brand Name Generator
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Generate powerful fitness brand names with AI. Get a complete brand kit — logo concepts, color palettes, taglines, and domain availability. Gyms, apps, apparel — free to start.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="btn-primary inline-flex items-center gap-2 text-base px-8 py-3"
            >
              Generate Fitness Names
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

      {/* Fitness Categories */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Names for Every Type of Fitness Business
            </h2>
            <p className="mt-3 text-slate-500">
              Gyms, apps, apparel, studios — generate names that match your niche.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FITNESS_CATEGORIES.map((cat) => (
              <div key={cat.name} className="rounded-xl border border-slate-200 p-5 text-center hover:border-green-300 hover:shadow-md transition-all">
                <div className="text-3xl mb-2">{cat.emoji}</div>
                <h3 className="text-base font-semibold text-slate-900">{cat.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{cat.examples}</p>
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
              Fitness Brand Names, Generated in Seconds
            </h2>
            <p className="mt-3 text-slate-500">
              Each name comes with a complete brand kit — not just a name on its own.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {EXAMPLE_NAMES.map((item) => (
              <div key={item.name} className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-green-200">
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
            These are examples — your results will be tailored to your specific fitness brand.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              From Idea to Identity in 4 Steps
            </h2>
          </div>
          <div className="space-y-8">
            {[
              { step: '1', title: 'Describe your fitness brand', desc: 'Tell us your business type (gym, app, apparel, studio), target audience, and the vibe you want. "Boutique HIIT studio in LA" or "minimalist fitness tracker app" — our AI handles it.' },
              { step: '2', title: 'Get tailored fitness names', desc: 'BrandForge generates 5 custom fitness brand names per search, each with a matching tagline, color palette, and logo concept. Designed to feel strong, modern, and memorable.' },
              { step: '3', title: 'Check domain & social availability', desc: 'Every name comes with real-time domain checks for .com, .io, .co, .ai, .app and social media handle availability — crucial for fitness brands that live on Instagram and TikTok.' },
              { step: '4', title: 'Download your brand kit', desc: 'Unlock the complete brand kit: logo concept, 5-color palette with hex codes, tagline, typography recommendations, and a downloadable PDF brand guidelines document.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-600 text-white font-bold text-lg">
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
              Tips for Naming Your Fitness Brand
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              Great fitness brands have names that feel as strong as the workouts they represent.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {NAMING_TIPS.map((tip) => (
              <div key={tip.title} className="rounded-xl border border-slate-200 bg-white p-6 hover:border-green-200 transition-colors">
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
                <summary className="flex cursor-pointer items-center justify-between p-5 text-base font-medium text-slate-900 hover:text-green-600">
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
      <section className="py-16 bg-gradient-to-br from-green-600 to-emerald-600">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to Name Your Fitness Brand?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Describe your brand. Get names with brand kits. Free to start, $9 per brand kit you love.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-semibold text-green-700 shadow-lg hover:bg-gray-50 transition-colors"
            >
              Generate Fitness Names
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
            <Link href="/startup-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-green-300 hover:text-green-600 transition-colors">
              🚀 Startup Name Generator
            </Link>
            <Link href="/restaurant-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-green-300 hover:text-green-600 transition-colors">
              🍽️ Restaurant Name Generator
            </Link>
            <Link href="/real-estate-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-green-300 hover:text-green-600 transition-colors">
              🏠 Real Estate Name Generator
            </Link>
            <Link href="/photography-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-green-300 hover:text-green-600 transition-colors">
              📸 Photography Name Generator
            </Link>
            <Link href="/beauty-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-green-300 hover:text-green-600 transition-colors">
              💄 Beauty Name Generator
            </Link>
            <Link href="/fashion-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-green-300 hover:text-green-600 transition-colors">
              👗 Fashion Name Generator
            </Link>
            <Link href="/food-truck-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-green-300 hover:text-green-600 transition-colors">
              🚚 Food Truck Name Generator
            </Link>
            <Link href="/tech-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-green-300 hover:text-green-600 transition-colors">
              💻 Tech Name Generator
            </Link>
            <Link href="/consulting-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-green-300 hover:text-green-600 transition-colors">
              💼 Consulting Name Generator
            </Link>
            <Link href="/podcast-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-green-300 hover:text-green-600 transition-colors">
              🎙️ Podcast Name Generator
            </Link>
            <Link href="/coaching-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-green-300 hover:text-green-600 transition-colors">
              🧭 Coaching Name Generator
            </Link>
            <Link href="/nonprofit-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-green-300 hover:text-green-600 transition-colors">
              🌍 Nonprofit Name Generator
            </Link>
            <Link href="/craft-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-green-300 hover:text-green-600 transition-colors">
              🧶 Craft Name Generator
            </Link>
            <Link href="/education-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-green-300 hover:text-green-600 transition-colors">
              📚 Education Name Generator
            </Link>
            <Link href="/yoga-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors">
              🧘 Yoga Name Generator
            </Link>
            <Link href="/coffee-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors">
              ☕ Coffee Name Generator
            </Link>
            <Link href="/compare" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-green-300 hover:text-green-600 transition-colors">
              📊 Compare Name Generators
            </Link>
            <Link href="/examples" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-green-300 hover:text-green-600 transition-colors">
              ✨ Brand Kit Examples
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}