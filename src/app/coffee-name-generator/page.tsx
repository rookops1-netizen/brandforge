import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free Coffee Name Generator — AI-Powered Coffee Shop, Roastery & Café Business Names',
  description: 'Generate creative coffee business names with AI. Get a complete brand kit including logo concepts, color palettes, taglines, and domain availability checks. Free to start — no credit card required.',
  keywords: [
    'coffee name generator',
    'coffee shop names',
    'café name generator',
    'coffee business names',
    'coffee brand names',
    'coffee roastery names',
    'café name ideas',
    'coffee shop name ideas',
    'coffee brand name ideas',
    'how to name a coffee shop',
    'coffee naming guide',
    'espresso bar names',
  ],
  openGraph: {
    title: 'Free Coffee Name Generator — AI-Powered Coffee Shop & Café Business Names',
    description: 'Generate creative coffee business names with AI. Logo, colors, tagline, domain check — all in one. Free to start.',
    url: 'https://brandforge-phi-pearl.vercel.app/coffee-name-generator',
    siteName: 'BrandForge',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Coffee Name Generator — AI-Powered Coffee Shop & Café Names',
    description: 'Generate creative coffee business names with AI. Logo, colors, tagline, domain check — all in one.',
  },
  alternates: {
    canonical: 'https://brandforge-phi-pearl.vercel.app/coffee-name-generator',
  },
}

const EXAMPLE_NAMES = [
  { name: 'Hearthstone Roasters', tagline: 'Warm in the cup, rooted in the land', style: 'Rustic & Heritage', domain: 'hearthstoneroasters.com', color: '#78350F' },
  { name: 'Drip & Co.', tagline: 'Slow mornings, strong coffee', style: 'Modern & Minimal', domain: 'dripandco.com', color: '#1E293B' },
  { name: 'Velvet Brew', tagline: 'Smooth from bean to cup', style: 'Refined & Elegant', domain: 'velvetbrew.com', color: '#7C3AED' },
  { name: 'Canopy Coffee', tagline: 'Grown under shade, served under sky', style: 'Organic & Ethical', domain: 'canopycoffee.com', color: '#065F46' },
  { name: 'Ember & Bean', tagline: 'Fire-roasted, hand-poured', style: 'Warm & Craft', domain: 'emberandbean.com', color: '#B45309' },
  { name: 'Kiln & Cup', tagline: 'Fired by passion, served with care', style: 'Artisan & Ceramic', domain: 'kilnandcup.com', color: '#DC2626' },
]

const CATEGORIES = [
  { name: 'Specialty Coffee & Third Wave', desc: 'Craft-forward, origin-focused names for specialty roasters' },
  { name: 'Neighborhood Cafés', desc: 'Warm, welcoming names for community gathering spots' },
  { name: 'Coffee Roasteries', desc: 'Bold, heritage names for bean-to-cup roasting brands' },
  { name: 'Espresso Bars & Drive-Thru', desc: 'Fast, punchy names for on-the-go coffee concepts' },
  { name: 'Coffee Trucks & Carts', desc: 'Mobile, memorable names for pop-up and street coffee' },
  { name: 'Cold Brew & Nitro Brands', desc: 'Fresh, edgy names for packaged and canned coffee' },
  { name: 'Coffee Subscriptions', desc: 'Destination-inspired names for delivery-first brands' },
  { name: 'Coffee & Bakery Combos', desc: 'Warm, indulgent names for pastry-paired coffee shops' },
]

const NAMING_TIPS = [
  {
    title: 'Think about the morning ritual',
    description: 'Coffee is a ritual — not just a drink. Names like "Hearthstone Roasters" or "Drip & Co." capture the feeling of those quiet morning moments. Your name should evoke the experience customers are buying into: warmth, energy, comfort, or craft.',
  },
  {
    title: 'Use origin and process words',
    description: 'Words like "Roast," "Drip," "Brew," "Bean," and "Grind" are coffee vocabulary that immediately signal your industry. Pair them with evocative words: "Ember & Bean," "Canopy Coffee," "Velvet Brew." This formula is proven in the third-wave coffee world.',
  },
  {
    title: 'Test it on a cup sleeve',
    description: 'Your name will live on a cup sleeve, a menu board, and an Instagram post — often at small scale. If it\'s too long, it won\'t fit. If it\'s too generic ("The Coffee Shop"), it\'ll disappear. Short, distinctive, and warm is the formula.',
  },
  {
    title: 'Consider the neighborhood',
    description: 'Coffee shops are hyper-local. Including a neighborhood, street, or landmark reference in your name ("Riverside Roasters," "Main & Bean") builds instant community connection and helps with local SEO when people search "coffee near me."',
  },
  {
    title: 'Stand out from the sea of "& Co."',
    description: '"& Co." and "Studio" suffixes are trendy in coffee branding right now. They work — but they\'re also everywhere. If you go this route, make the first word genuinely distinctive. "Drip & Co." works because "Drip" is specific; "Coffee & Co." doesn\'t.',
  },
  {
    title: 'Google Maps is your first impression',
    description: 'Most people find coffee shops by searching "coffee near me" on Google Maps. Your name needs to be immediately recognizable in a list of 10 pins, easy to spell when typing into search, and memorable enough to recommend to a friend. The best coffee names pass the "text your friend" test.',
  },
]

const FAQ_ITEMS = [
  {
    q: 'How does the coffee name generator work?',
    a: 'Describe your coffee business — your concept (specialty roaster, neighborhood café, espresso bar, cold brew brand, coffee cart), your atmosphere (minimal, cozy, industrial, plant-filled), and your target customer (commuters, remote workers, coffee geeks, families). BrandForge\'s AI generates custom name suggestions paired with complete brand kits including logo concepts, color palettes, taglines, and domain/social availability checks.',
  },
  {
    q: 'Is the coffee name generator free?',
    a: 'Yes! You can generate coffee name ideas for free — 5 suggestions per search, unlimited searches, no credit card required. Unlock the full brand kit (logo, colors, tagline, typography, domain & social checks) for $9 per brand kit.',
  },
  {
    q: 'What makes a good coffee shop name?',
    a: 'A great coffee name feels warm and specific — it should evoke the ritual, the atmosphere, or the craft behind your business. Words like "Roast," "Drip," "Brew," "Ember," and "Canopy" immediately signal coffee while adding character. The best names feel like something you\'d see written in chalk on a menu board.',
  },
  {
    q: 'Should I include "coffee" in my business name?',
    a: 'It depends. Including "coffee" helps with discoverability (people search "coffee shop" on Google Maps) but can feel generic. Many successful third-wave brands drop it: "Blue Bottle," "Stumptown," "Intelligentsia." If your name clearly signals coffee through other words ("Roasters," "Brew," "Bean"), you can skip "coffee" and still be found.',
  },
  {
    q: 'Can I use these names for my coffee shop or roastery?',
    a: 'Absolutely. All names you generate are yours to use commercially — for business registration, shop signage, packaging, domain purchases, social media, menu boards, and merchandise. There are no licensing restrictions.',
  },
  {
    q: 'What if I want names for a specific coffee concept?',
    a: 'Just describe your concept in the prompt. Whether it\'s a specialty pour-over bar, a neighborhood bakery-café, a drive-thru espresso stand, a cold brew brand, or a coffee subscription box — BrandForge tailors suggestions to your exact concept, atmosphere, and ideal customer.',
  },
  {
    q: 'How important is a matching domain for coffee businesses?',
    a: 'Very. Coffee customers are digital — they find you on Google Maps, check your hours online, and share your Instagram. A matching .com is ideal, but .coffee, .roasters, and .cafe extensions are increasingly popular in the specialty coffee world. BrandForge checks all of these in real-time.',
  },
  {
    q: 'What comes in the brand kit for each name?',
    a: 'Each brand kit includes: a logo concept (text-based with font pairing), a 5-color palette with hex codes, a custom tagline, typography recommendations, and real-time availability checks for domains and social handles. You can download it all as a PDF brand guidelines document.',
  },
]

export default function CoffeeNameGeneratorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'BrandForge Coffee Name Generator',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description: 'AI-powered coffee business name generator with complete brand kits including logos, colors, taglines, and domain/social availability.',
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
          { '@type': 'ListItem', position: 2, name: 'Coffee Name Generator', item: 'https://brandforge-phi-pearl.vercel.app/coffee-name-generator' },
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
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-amber-700 to-orange-800" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-700">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-3.283A3.75 3.75 0 0012 18z" />
            </svg>
            AI-Powered Coffee Naming
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Coffee Name Generator
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-amber-100">
            Generate coffee shop names with AI. Describe your concept, get name suggestions with complete brand kits — logo concepts, color palettes, taglines, and domain availability. Free to start.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="btn-primary inline-flex items-center gap-2 text-base px-8 py-3"
            >
              Generate Coffee Names
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
          <p className="mt-4 text-sm text-amber-200">Free • No credit card required • Results in seconds</p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Names for Every Coffee Concept
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              From specialty roasters to neighborhood cafés — we generate names that feel warm, craft-forward, and unmistakably yours.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((cat) => (
              <div key={cat.name} className="rounded-xl border border-slate-200 p-5 hover:border-amber-300 hover:shadow-sm transition-all">
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
              Coffee Names, Generated in Seconds
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
            These are real examples — your results will be tailored to your specific coffee business.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              How to Name Your Coffee Business with AI
            </h2>
          </div>
          <div className="space-y-8">
            {[
              { step: '1', title: 'Describe your concept', desc: 'Tell us your coffee business type — specialty roastery, neighborhood café, espresso bar, cold brew brand, coffee cart, or subscription service. Describe your atmosphere (minimal, cozy, industrial, plant-filled) and who walks through your door (commuters, remote workers, coffee geeks, families).' },
              { step: '2', title: 'Get tailored name suggestions', desc: 'BrandForge generates 5 unique coffee names per search, each with a matching tagline, color palette, and logo concept. Every name feels warm, craft-forward, and distinctive — no generic "Coffee Corner" here.' },
              { step: '3', title: 'Check domain & social availability', desc: 'Every name comes with real-time checks for .com, .coffee, .cafe, .roasters, and more — plus Instagram, TikTok, and social media handle availability. Essential for coffee businesses that live on visual platforms and Google Maps.' },
              { step: '4', title: 'Download your brand kit', desc: 'Unlock the full brand kit: logo concept, 5-color palette with hex codes, tagline, typography recommendations, and a downloadable PDF brand guidelines document ready for your cup sleeves, menu boards, packaging, and website.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-700 text-white font-bold text-lg">
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
              Tips for Naming Your Coffee Business
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              In the coffee world, your name is on every cup sleeve, menu board, and Instagram story. Here&apos;s how to make it unforgettable.
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
      <section className="py-16 bg-gradient-to-br from-amber-900 to-orange-800">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to Name Your Coffee Business?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Describe your concept. Get names with brand kits. Free to start, $9 per brand kit you love.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-semibold text-amber-900 shadow-lg hover:bg-gray-50 transition-colors"
            >
              Generate Coffee Names
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
            <Link href="/restaurant-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              🍽️ Restaurant Name Generator
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
              📊 Consulting Name Generator
            </Link>
            <Link href="/podcast-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              🎙️ Podcast Name Generator
            </Link>
            <Link href="/coaching-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              💡 Coaching Name Generator
            </Link>
            <Link href="/nonprofit-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              🌍 Nonprofit Name Generator
            </Link>
            <Link href="/craft-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              ✂️ Craft Name Generator
            </Link>
            <Link href="/education-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              📚 Education Name Generator
            </Link>
            <Link href="/yoga-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              🧘 Yoga Name Generator
            </Link>
            <Link href="/compare" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              📊 Compare Name Generators
            </Link>
            <Link href="/examples" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              ✨ Brand Kit Examples
            </Link>
            <Link href="/blog/how-to-choose-business-name" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              📖 How to Choose a Business Name
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}