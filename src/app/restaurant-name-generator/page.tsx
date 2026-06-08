import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free Restaurant Name Generator — AI Restaurant Name Ideas & Brand Kits',
  description: 'Generate unique restaurant names with AI. Get a complete brand kit including logo concepts, color palettes, taglines, and domain availability. From fine dining to food trucks — free to start.',
  keywords: [
    'restaurant name generator',
    'restaurant name ideas',
    'AI restaurant name generator',
    'cafe name generator',
    'food business name ideas',
    'restaurant naming tool',
    'bar name generator',
    'food truck name generator',
    'bakery name ideas',
    'coffee shop name generator',
    'how to name a restaurant',
    'creative restaurant names',
    'unique restaurant names',
    'catchy restaurant names',
    'best restaurant names',
  ],
  openGraph: {
    title: 'Free Restaurant Name Generator — AI-Powered Ideas & Brand Kits',
    description: 'Generate unique restaurant, cafe, bar, and food truck names with AI. Get a complete brand kit — logo, colors, tagline, domain check. Free to start.',
    url: 'https://brandforge-phi-pearl.vercel.app/restaurant-name-generator',
    siteName: 'BrandForge',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Restaurant Name Generator — AI-Powered Ideas & Brand Kits',
    description: 'Generate unique restaurant and food business names with AI. Logo, colors, tagline, domain check — all in one.',
  },
  alternates: {
    canonical: 'https://brandforge-phi-pearl.vercel.app/restaurant-name-generator',
  },
}

const EXAMPLE_NAMES = [
  { name: 'Ember & Vine', tagline: 'Where flame meets flavor', style: 'Upscale dining', domain: 'emberandvine.com', color: '#DC2626' },
  { name: 'Rustic Bloom', tagline: 'Farm to table, garden to glass', style: 'Farm-to-table', domain: 'rusticbloom.com', color: '#16A34A' },
  { name: 'Saltcraft', tagline: 'Seasoned to perfection', style: 'Modern artisan', domain: 'saltcraft.co', color: '#CA8A04' },
  { name: 'Moxie Kitchen', tagline: 'Bold food, bold spirit', style: 'Neighborhood gem', domain: 'moxiekitchen.com', color: '#7C3AED' },
  { name: 'Dawnflour', tagline: 'Baked with the sunrise', style: 'Bakery & café', domain: 'dawnflour.com', color: '#EA580C' },
  { name: 'The Copper Kettle', tagline: 'Warms the soul', style: 'Cozy tavern', domain: 'thecopperkettle.com', color: '#B45309' },
]

const CUISINE_CATEGORIES = [
  { emoji: '🍽️', name: 'Fine Dining', examples: 'Ember & Vine, Celestia, Maison Lumière' },
  { emoji: '🥪', name: 'Casual Dining', examples: 'Rustic Bloom, Moxie Kitchen, The Copper Spoon' },
  { emoji: '🚚', name: 'Food Trucks', examples: 'Roll & Coal, Smoke Signal, Streetfire' },
  { emoji: '☕', name: 'Cafes & Coffee Shops', examples: 'Dawnflour, Press & Pour, The Steaming Bean' },
  { emoji: '🍺', name: 'Bars & Breweries', examples: 'Hoptale, The Copper Kettle, Fermentary' },
  { emoji: '🥖', name: 'Bakeries', examples: 'Flourish, Golden Crumb, Rise & Shine' },
  { emoji: '🍣', name: 'Ethnic & Specialty', examples: 'Umami House, Spice Route, Basil & Ginger' },
  { emoji: '🥗', name: 'Health & Smoothie', examples: 'Verde, Glow Kitchen, Freshforce' },
]

const NAMING_TIPS = [
  {
    title: 'Evoke the experience',
    description: 'Great restaurant names don\'t just name the food — they hint at the vibe. "Rustic Bloom" says farm-to-table garden café. "Ember & Vine" suggests wood-fired elegance.',
  },
  {
    title: 'Keep it easy to spell and say',
    description: 'If someone can\'t pronounce your restaurant name, they won\'t recommend it to friends. Word-of-mouth is the #1 driver for restaurants — make it easy.',
  },
  {
    title: 'Consider your format',
    description: 'A food truck name should be punchy and memorable in neon. A fine dining name should feel elegant. A bakery should evoke warmth. Let your format guide the naming style.',
  },
  {
    title: 'Check local business registrations',
    description: 'Beyond domain availability, check your state\'s business registry and local restaurant databases to make sure no one nearby has the same name.',
  },
  {
    title: 'Think about signage and menus',
    description: 'Imagine your name on a sign, a menu cover, an Instagram handle. Names with 2-3 words and a balanced visual shape work best for physical branding.',
  },
  {
    title: 'Test it with food lovers',
    description: 'Say the name to people who dine out frequently. Do they get the vibe? Can they spell it? Would they remember it? Their instinct is your best feedback.',
  },
]

const FAQ_ITEMS = [
  {
    q: 'How does the restaurant name generator work?',
    a: 'Describe your restaurant concept — cuisine type, atmosphere, target audience, and naming style. BrandForge\'s AI generates custom name suggestions complete with brand kits: logo concepts, color palettes, taglines, and domain availability checks.',
  },
  {
    q: 'What types of restaurants does this work for?',
    a: 'All of them — fine dining, casual restaurants, food trucks, cafes, bars, bakeries, ghost kitchens, and more. Just tell our AI what you\'re building and it will tailor suggestions accordingly.',
  },
  {
    q: 'Is this restaurant name generator free?',
    a: 'Yes! Generate restaurant names for free — 5 suggestions per search, unlimited searches. Upgrade to unlock the full brand kit (logo, colors, tagline, typography, domain checks) for $9 per brand kit.',
  },
  {
    q: 'How do I check if a restaurant name is already used?',
    a: 'BrandForge checks domain availability (.com, .io, .co, .ai, .app) for every name suggestion. We recommend also checking your state\'s business registry and a quick Google search for local restaurants with the same name.',
  },
  {
    q: 'Can I use these names for my restaurant business?',
    a: 'Yes. All names you generate are yours to use commercially — for business registration, signage, menus, branding, and trademarks. No licensing restrictions from BrandForge.',
  },
  {
    q: 'What if I\'m opening a food truck?',
    a: 'Just mention it in your description! BrandForge will suggest short, punchy, memorable names that work great for food trucks — easy to paint on a truck, easy for customers to remember and recommend.',
  },
  {
    q: 'Do I get a logo with the name?',
    a: 'Yes! Each brand kit Pro includes an AI-generated logo concept that matches the name and vibe. You also get a 5-color palette, tagline, typography recommendations, domain availability, and a downloadable PDF brand guide.',
  },
  {
    q: 'How is BrandForge different from random name lists?',
    a: 'Random name lists give you 100 generic names. BrandForge gives you 5 tailored names that match your specific concept, each with a complete brand identity. It\'s the difference between a phonebook and a personal branding agency.',
  },
]

export default function RestaurantNameGeneratorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'BrandForge Restaurant Name Generator',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description: 'AI-powered restaurant name generator with complete brand kits including logos, colors, taglines, and domain availability.',
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
          { '@type': 'ListItem', position: 2, name: 'Restaurant Name Generator', item: 'https://brandforge-phi-pearl.vercel.app/restaurant-name-generator' },
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
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-orange-50" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-700">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.525 6.012 9.32 5.9 10.34l-.026.243a48.5 48.5 0 00-.736 7.054c0 1.06.421 2.083 1.171 2.833l.832.832a2.83 2.83 0 004.032 0l.832-.832a2.834 2.834 0 001.171-2.833l-.008-.06a48.497 48.497 0 01-.72-6.994l-.026-.242c-.112-1.02-.945-1.814-2.076-2.174A48.587 48.587 0 0012 8.25z" />
            </svg>
            AI-Powered Restaurant Naming
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Restaurant Name Generator
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            From fine dining to food trucks, generate restaurant names that make mouths water. Get a complete brand kit — logo, colors, tagline, and domain check. Free to start.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="btn-primary inline-flex items-center gap-2 text-base px-8 py-3"
            >
              Generate Restaurant Names
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

      {/* Cuisine Categories */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Names for Every Type of Food Business
            </h2>
            <p className="mt-3 text-slate-500">
              Whether you&apos;re opening a bistro, a food truck, or a coffee shop — we&apos;ve got names that fit.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CUISINE_CATEGORIES.map((cat) => (
              <div key={cat.name} className="rounded-xl border border-slate-200 p-5 text-center hover:border-amber-300 hover:shadow-md transition-all">
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
              Restaurant Names, Generated in Seconds
            </h2>
            <p className="mt-3 text-slate-500">
              Each name comes with a complete brand kit — not just a name on its own.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {EXAMPLE_NAMES.map((item) => (
              <div key={item.name} className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-amber-200">
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
            These are examples — your results will match your specific restaurant concept.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              From Concept to Menu in 4 Steps
            </h2>
          </div>
          <div className="space-y-8">
            {[
              { step: '1', title: 'Describe your restaurant concept', desc: 'Tell us the cuisine, atmosphere, location, and target audience. "Farm-to-table dinner in Austin" or "vintage bakery in Brooklyn" — the more specific, the better.' },
              { step: '2', title: 'Get tailored name suggestions', desc: 'BrandForge generates 5 custom restaurant names per search, each with a matching tagline, color palette, and logo concept. No generic word salads — real, brandable names.' },
              { step: '3', title: 'Check domain & social availability', desc: 'Every name includes real-time domain checks (.com, .io, .co) and social media handle availability. Perfect names with taken domains are filtered out.' },
              { step: '4', title: 'Download your brand kit', desc: 'Unlock the complete brand kit: logo concept, 5-color palette with hex codes, tagline, typography recommendations, and a downloadable PDF brand guidelines document.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-600 text-white font-bold text-lg">
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
              Tips for Naming Your Restaurant
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              A great restaurant name stays in people&apos;s minds — and on their lips. Here&apos;s how to make yours memorable.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {NAMING_TIPS.map((tip) => (
              <div key={tip.title} className="rounded-xl border border-slate-200 bg-white p-6 hover:border-amber-200 transition-colors">
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
                <summary className="flex cursor-pointer items-center justify-between p-5 text-base font-medium text-slate-900 hover:text-amber-600">
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
      <section className="py-16 bg-gradient-to-br from-amber-600 to-orange-600">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to Name Your Restaurant?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Describe your concept. Get names with brand kits. Free to start, $9 per brand kit you love.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-semibold text-amber-700 shadow-lg hover:bg-gray-50 transition-colors"
            >
              Generate Restaurant Names
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
            <Link href="/startup-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              🚀 Startup Name Generator
            </Link>
            <Link href="/fitness-brand-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              💪 Fitness Brand Name Generator
            </Link>
            <Link href="/real-estate-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              🏠 Real Estate Name Generator
            </Link>
            <Link href="/photography-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              📸 Photography Name Generator
            </Link>
            <Link href="/beauty-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              💄 Beauty Name Generator
            </Link>
            <Link href="/fashion-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              👗 Fashion Name Generator
            </Link>
            <Link href="/food-truck-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              🚚 Food Truck Name Generator
            </Link>
            <Link href="/tech-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              💻 Tech Name Generator
            </Link>
            <Link href="/consulting-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              💼 Consulting Name Generator
            </Link>
            <Link href="/podcast-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              🎙️ Podcast Name Generator
            </Link>
            <Link href="/coaching-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              🧭 Coaching Name Generator
            </Link>
            <Link href="/nonprofit-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              🌍 Nonprofit Name Generator
            </Link>
            <Link href="/craft-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              🧶 Craft Name Generator
            </Link>
            <Link href="/education-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
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
<Link href="/compare" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              📊 Compare Name Generators
            </Link>
            <Link href="/examples" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              ✨ Brand Kit Examples
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}