import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free Food Truck Name Generator — AI-Powered Food Truck & Cart Business Names',
  description: 'Generate creative food truck names with AI. Get a complete brand kit including logo concepts, color palettes, taglines, and domain availability checks. Free to start — no credit card required.',
  keywords: [
    'food truck name generator',
    'food truck names',
    'food truck name ideas',
    'food cart name generator',
    'mobile food business names',
    'food truck branding',
    'street food name ideas',
    'food truck business names',
    'creative food truck names',
    'catchy food truck names',
    'best food truck names',
    'food van names',
    'food stall name generator',
    'how to name a food truck',
    'food truck branding ideas',
  ],
  openGraph: {
    title: 'Free Food Truck Name Generator — AI-Powered Food Truck & Cart Names',
    description: 'Generate creative food truck names with AI. Logo, colors, tagline, domain check — all in one. Free to start.',
    url: 'https://brandforge-phi-pearl.vercel.app/food-truck-name-generator',
    siteName: 'BrandForge',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Food Truck Name Generator — AI-Powered Food Truck & Cart Names',
    description: 'Generate creative food truck names with AI. Logo, colors, tagline, domain check — all in one.',
  },
  alternates: {
    canonical: 'https://brandforge-phi-pearl.vercel.app/food-truck-name-generator',
  },
}

const EXAMPLE_NAMES = [
  { name: 'Rolling Embers', tagline: 'Smoke, flame, and flavor — on wheels', style: 'Bold & Rustic', domain: 'rollingembers.com', color: '#DC2626' },
  { name: 'The Wandering Wok', tagline: 'Street-side stir-fry, traveled the world', style: 'Playful & Adventurous', domain: 'wanderingwok.com', color: '#EA580C' },
  { name: 'Brick & Batter', tagline: 'Comfort food, corner to corner', style: 'Hearty & Familiar', domain: 'brickandbatter.com', color: '#92400E' },
  { name: 'Saffron Route', tagline: 'Spice routes, street food', style: 'Global & Refined', domain: 'saffronroute.com', color: '#D97706' },
  { name: 'Curbside Crust', tagline: 'Pizza perfection, curbside pickup', style: 'Fun & Approachable', domain: 'curbsidecrust.com', color: '#16A34A' },
  { name: 'Honeytruck', tagline: 'Sweet and savory, always local', style: 'Modern & Clean', domain: 'honeytruck.com', color: '#CA8A04' },
]

const CATEGORIES = [
  { name: 'Tacos & Mexican', desc: 'Bold, vibrant names that promise fiesty flavor' },
  { name: 'Burgers & Sandwiches', desc: 'Hearty, satisfying names that comfort and satisfy' },
  { name: 'Asian Street Food', desc: 'Dynamic, flavorful names inspired by night markets' },
  { name: 'Pizza on Wheels', desc: 'Crusty, cheesy names that draw a crowd fast' },
  { name: 'Dessert & Sweet Trucks', desc: 'Sweet, irresistible names customers crave' },
  { name: 'BBQ & Smokehouse', desc: 'Smoky, rugged names that smell like tradition' },
  { name: 'Vegan & Plant-Based', desc: 'Fresh, modern names that signal clean eating' },
  { name: 'Coffee & Beverage Carts', desc: 'Energized, smooth names that fuel the morning rush' },
]

const NAMING_TIPS = [
  {
    title: 'Make it memorable from the curb',
    description: 'People spot your truck from across the street or scrolling past on social media. A name like "Rolling Embers" sticks; "Bob\'s Food Truck" doesn\'t. Short, punchy, and visual — that\'s the winning formula.',
  },
  {
    title: 'Hint at your cuisine',
    description: 'Your name should make people hungry. "Brick & Batter" tells you it\'s comfort food. "Saffron Route" signals global flavors. The best food truck names trigger cravings before the first bite.',
  },
  {
    title: 'Think wrap and Instagram',
    description: 'Your truck wrap and Instagram handle ARE your storefront. BrandForge checks social handle availability for every name — so your @handle matches your truck. A photogenic name helps you get tagged and shared.',
  },
  {
    title: 'Check local regulations',
    description: 'Some cities require your truck name to be unique within the municipality. BrandForge checks domain availability, but also search your city\'s food truck registry before committing to a name.',
  },
  {
    title: 'Say it loud — literally',
    description: 'You\'ll be shouting orders over traffic noise and music. If a customer has to say "What?" three times, the name is too complicated. Test your name by yelling it across a parking lot.',
  },
  {
    title: 'Plan for festivals and catering',
    description: 'A name like "Taco Mike\'s" limits you. "Rolling Embers" works at a street corner, a music festival, or a private catering gig. Think beyond the truck — the best names grow with you.',
  },
]

const FAQ_ITEMS = [
  {
    q: 'How does the food truck name generator work?',
    a: 'Describe your food truck concept — your cuisine, target customers, vibe, and the city you operate in. BrandForge\'s AI generates custom name suggestions paired with complete brand kits including logo concepts, color palettes, taglines, and domain/social availability checks.',
  },
  {
    q: 'Is the food truck name generator free?',
    a: 'Yes! You can generate food truck name ideas for free — 5 suggestions per search, unlimited searches, no credit card required. Unlock the full brand kit (logo, colors, tagline, typography, domain & social checks) for $9 per brand kit.',
  },
  {
    q: 'What makes a good food truck name?',
    a: 'A great food truck name is short, memorable, hints at your cuisine, sounds good shouted across a street, and has an available .com domain plus matching social handles. Since food trucks rely on Instagram and street visibility, the name needs to work on both a truck wrap and a phone screen.',
  },
  {
    q: 'Should my food truck name include my city or neighborhood?',
    a: 'It can help for local SEO and walk-up customers — "Eastside Embers" tells locals where to find you. But avoid limiting yourself if you plan to serve multiple areas or do festivals. BrandForge can generate both location-specific and broad names.',
  },
  {
    q: 'Can I use these names for my food truck business?',
    a: 'Absolutely. All names you generate are yours to use commercially — for business registration, branding, domain purchases, social media, and menu design. There are no licensing restrictions.',
  },
  {
    q: 'What if I want names for a specific cuisine?',
    a: 'Just describe your cuisine in the prompt. Whether it\'s tacos, BBQ, ramen, waffles, bubble tea, or vegan comfort food — BrandForge tailors suggestions to your exact menu and target customers.',
  },
  {
    q: 'How important is domain availability for food trucks?',
    a: 'Very. Even if you\'re a street business, customers Google you for menus, schedules, and reviews. A .com domain builds trust and makes you easy to find. BrandForge checks multiple extensions so you always have options.',
  },
  {
    q: 'What comes in the brand kit for each name?',
    a: 'Each brand kit includes: a logo concept (text-based with font pairing), a 5-color palette with hex codes, a custom tagline, typography recommendations, and real-time availability checks for domains and social handles. You can download it all as a PDF brand guidelines document.',
  },
]

export default function FoodTruckNameGeneratorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'BrandForge Food Truck Name Generator',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description: 'AI-powered food truck business name generator with complete brand kits including logos, colors, taglines, and domain/social availability.',
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
          { '@type': 'ListItem', position: 2, name: 'Food Truck Name Generator', item: 'https://brandforge-phi-pearl.vercel.app/food-truck-name-generator' },
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
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5 text-sm font-medium text-orange-700">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0H21M3.375 14.25h.008v.008h-.008v-.008zm0 0H7.5m6.75 0h-.008v.008h.008v-.008zm0 0H21m-17.25 0V3.375c0-.621.504-1.125 1.125-1.125h9.75c.621 0 1.125.504 1.125 1.125v10.875" />
            </svg>
            AI-Powered Food Truck Naming
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Food Truck Name Generator
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Generate creative food truck names with AI. Describe your cuisine, get name suggestions with complete brand kits — logo concepts, color palettes, taglines, and domain availability. Free to start.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="btn-primary inline-flex items-center gap-2 text-base px-8 py-3"
            >
              Generate Food Truck Names
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

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Names for Every Food Truck Style
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              From tacos and BBQ to specialty desserts and coffee carts — we generate names that make mouths water and feet follow.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((cat) => (
              <div key={cat.name} className="rounded-xl border border-slate-200 p-5 hover:border-orange-300 hover:shadow-sm transition-all">
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
              Food Truck Names, Generated in Seconds
            </h2>
            <p className="mt-3 text-slate-500">
              Each name comes with a complete brand kit — not just a name on its own.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {EXAMPLE_NAMES.map((item) => (
              <div key={item.name} className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-orange-200">
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
            These are real examples — your results will be tailored to your specific food truck concept.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              How to Name Your Food Truck with AI
            </h2>
          </div>
          <div className="space-y-8">
            {[
              { step: '1', title: 'Describe your food truck concept', desc: 'Tell us your cuisine — tacos, BBQ, waffles, coffee, vegan bowls. Describe your style (rustic, modern, playful, global) and where you plan to serve.' },
              { step: '2', title: 'Get tailored name suggestions', desc: 'BrandForge generates 5 unique food truck names per search, each with a matching tagline, color palette, and logo concept. Every name is designed to look great on a truck wrap and Instagram.' },
              { step: '3', title: 'Check domain & social availability', desc: 'Every name comes with real-time checks for .com, .co, .truck, and more — plus Instagram and social media handle availability. Critical for food trucks that live on social media.' },
              { step: '4', title: 'Download your brand kit', desc: 'Unlock the full brand kit: logo concept, 5-color palette with hex codes, tagline, typography recommendations, and a downloadable PDF brand guidelines document ready for your truck wrap designer.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-600 text-white font-bold text-lg">
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
              Tips for Naming Your Food Truck
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              Your name is the first thing customers see on the street. Make it count.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {NAMING_TIPS.map((tip) => (
              <div key={tip.title} className="rounded-xl border border-slate-200 bg-white p-6 hover:border-orange-200 transition-colors">
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
                <summary className="flex cursor-pointer items-center justify-between p-5 text-base font-medium text-slate-900 hover:text-orange-600">
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
      <section className="py-16 bg-gradient-to-br from-orange-600 to-amber-600">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to Name Your Food Truck?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Describe your cuisine. Get names with brand kits. Free to start, $9 per brand kit you love.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-semibold text-orange-700 shadow-lg hover:bg-gray-50 transition-colors"
            >
              Generate Food Truck Names
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
            <Link href="/startup-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-orange-300 hover:text-orange-600 transition-colors">
              🚀 Startup Name Generator
            </Link>
            <Link href="/restaurant-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-orange-300 hover:text-orange-600 transition-colors">
              🍽️ Restaurant Name Generator
            </Link>
            <Link href="/fitness-brand-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-orange-300 hover:text-orange-600 transition-colors">
              💪 Fitness Brand Name Generator
            </Link>
            <Link href="/real-estate-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-orange-300 hover:text-orange-600 transition-colors">
              🏠 Real Estate Name Generator
            </Link>
            <Link href="/photography-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-orange-300 hover:text-orange-600 transition-colors">
              📸 Photography Name Generator
            </Link>
            <Link href="/beauty-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-orange-300 hover:text-orange-600 transition-colors">
              💄 Beauty Name Generator
            </Link>
            <Link href="/fashion-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-orange-300 hover:text-orange-600 transition-colors">
              👗 Fashion Name Generator
            </Link>
            <Link href="/tech-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-orange-300 hover:text-orange-600 transition-colors">
              💻 Tech Name Generator
            </Link>
            <Link href="/consulting-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-orange-300 hover:text-orange-600 transition-colors">
              💼 Consulting Name Generator
            </Link>
            <Link href="/podcast-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-orange-300 hover:text-orange-600 transition-colors">
              🎙️ Podcast Name Generator
            </Link>
            <Link href="/coaching-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-orange-300 hover:text-orange-600 transition-colors">
              🧭 Coaching Name Generator
            </Link>
            <Link href="/nonprofit-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-orange-300 hover:text-orange-600 transition-colors">
              🌍 Nonprofit Name Generator
            </Link>
            <Link href="/craft-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-orange-300 hover:text-orange-600 transition-colors">
              🧶 Craft Name Generator
            </Link>
            <Link href="/education-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-orange-300 hover:text-orange-600 transition-colors">
              📚 Education Name Generator
            </Link>
            <Link href="/compare" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-orange-300 hover:text-orange-600 transition-colors">
              📊 Compare Name Generators
            </Link>
            <Link href="/examples" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-orange-300 hover:text-orange-600 transition-colors">
              ✨ Brand Kit Examples
            </Link>
            <Link href="/blog/how-to-choose-business-name" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-orange-300 hover:text-orange-600 transition-colors">
              📖 How to Choose a Business Name
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}