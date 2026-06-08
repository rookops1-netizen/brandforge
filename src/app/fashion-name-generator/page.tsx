import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free Fashion Name Generator — AI-Powered Fashion & Clothing Brand Names',
  description: 'Generate creative fashion business names with AI. Get a complete brand kit including logo concepts, color palettes, taglines, and domain availability checks. Free to start — no credit card required.',
  keywords: [
    'fashion name generator',
    'fashion business names',
    'clothing brand names',
    'fashion brand names',
    'fashion label names',
    'clothing line name ideas',
    'how to name a fashion brand',
    'fashion brand name ideas',
    'apparel brand names',
    'boutique name generator',
    'fashion startup names',
    'streetwear brand names',
    'fashion company names',
    'designer brand names',
    'best fashion brand names',
  ],
  openGraph: {
    title: 'Free Fashion Name Generator — AI-Powered Fashion & Clothing Brand Names',
    description: 'Generate creative fashion business names with AI. Logo, colors, tagline, domain check — all in one. Free to start.',
    url: 'https://brandforge-phi-pearl.vercel.app/fashion-name-generator',
    siteName: 'BrandForge',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Fashion Name Generator — AI-Powered Fashion & Clothing Brand Names',
    description: 'Generate creative fashion business names with AI. Logo, colors, tagline, domain check — all in one.',
  },
  alternates: {
    canonical: 'https://brandforge-phi-pearl.vercel.app/fashion-name-generator',
  },
}

const EXAMPLE_NAMES = [
  { name: 'Noir & Thread', tagline: 'Dark elegance, everyday', style: 'Sleek & Minimal', domain: 'noirandthread.com', color: '#1E293B' },
  { name: 'Atelier Bloom', tagline: 'Where style blossoms', style: 'Romantic & Feminine', domain: 'atelierbloom.com', color: '#BE185D' },
  { name: 'Civic Apparel', tagline: 'City-made, universally worn', style: 'Urban & Contemporary', domain: 'civicapparel.com', color: '#0F766E' },
  { name: 'Maison Éclat', tagline: 'Radiance, redefined', style: 'Luxury & French-Inspired', domain: 'maisoneclat.com', color: '#7C3AED' },
  { name: 'Woven Way', tagline: 'Crafted for the journey', style: 'Heritage & Artisan', domain: 'wovenway.com', color: '#92400E' },
  { name: 'KINX Studio', tagline: 'Edge meets elegance', style: 'Streetwear & Bold', domain: 'kinxstudio.com', color: '#DC2626' },
]

const CATEGORIES = [
  { name: 'Luxury Fashion', desc: 'Elegant, sophisticated names that command premium positioning' },
  { name: 'Streetwear', desc: 'Bold, edgy names that own the culture' },
  { name: 'Sustainable Fashion', desc: 'Clean, earth-conscious names that signal purpose' },
  { name: 'Boutique & Retail', desc: 'Chic, curated names that feel personal and inviting' },
  { name: 'Activewear & Athleisure', desc: 'Dynamic, performance-driven names that move with you' },
  { name: 'Children\'s Fashion', desc: 'Playful, charming names that delight parents and kids' },
  { name: 'Accessories & Jewelry', desc: 'Refined, artful names that complement personal style' },
  { name: 'Custom & Bespoke', desc: 'Artisan, heritage names that convey craftsmanship' },
]

const NAMING_TIPS = [
  {
    title: 'Know your fashion archetype',
    description: 'A luxury brand needs an elegant, aspirational name. Streetwear demands something bold and cultural. Sustainable fashion should feel authentic and earth-conscious. Your name positions you in the market before anyone sees your designs.',
  },
  {
    title: 'French and Italian influence works — carefully',
    description: '"Maison," "Atelier," "Éclat" add sophistication to fashion names. But only use them if they align with your brand\'s actual identity. A streetwear brand called "Maison" feels disconnected. Match language to vibe.',
  },
  {
    title: 'Short names dominate fashion',
    description: 'The most iconic fashion brands are 1–2 words: Zara, Celine, Acne, Supreme, Aritzia. Short names look better on tags, storefronts, and Instagram bios. Aim for brevity without sacrificing meaning.',
  },
  {
    title: 'Design your name visually',
    description: 'Fashion is visual. Imagine your name on a clothing label, storefront sign, or Instagram grid. Does it look as good as it sounds? BrandForge includes logo concepts so you can see your name before you commit.',
  },
  {
    title: 'Check trademark early',
    description: 'Fashion is trademark-heavy. Before you fall in love with a name, run a basic USPTO search. BrandForge checks domain and social availability — add a trademark check to your shortlist process.',
  },
  {
    title: 'Think about global appeal',
    description: 'If you plan to sell internationally, avoid names that only make sense in one language or culture. Names like "Civic Apparel" or "Woven Way" travel well. BrandForge can generate globally-friendly names when you specify international ambitions.',
  },
]

const FAQ_ITEMS = [
  {
    q: 'How does the fashion name generator work?',
    a: 'Describe your fashion brand — your style, target customer, price point, and the vibe you want your name to project. BrandForge\'s AI generates custom name suggestions paired with complete brand kits including logo concepts, color palettes, taglines, and domain/social availability checks.',
  },
  {
    q: 'Is the fashion name generator free?',
    a: 'Yes! You can generate fashion name ideas for free — 5 suggestions per search, unlimited searches, no credit card required. Unlock the full brand kit (logo, colors, tagline, typography, domain & social checks) for $9 per brand kit.',
  },
  {
    q: 'What makes a good fashion brand name?',
    a: 'A great fashion name is short, memorable, visually striking, and positions your brand correctly — luxury names should feel exclusive, streetwear should feel bold, sustainable brands should feel authentic. It should also have an available .com domain and matching social handles.',
  },
  {
    q: 'Should I use my own name for my fashion brand?',
    a: 'Many iconic fashion brands use the designer\'s name (Dior, Chanel, Versace). It builds personal brand equity. But if you want to scale, sell, or expand beyond yourself, a standalone brand name gives you more flexibility. BrandForge generates both personal and brand-style names.',
  },
  {
    q: 'Can I use these names for my fashion business?',
    a: 'Absolutely. All names you generate are yours to use commercially — for business registration, branding, domain purchases, social media, and marketing. There are no licensing restrictions. Just make sure to do your own trademark search before launching.',
  },
  {
    q: 'What if I want names for a specific fashion niche?',
    a: 'Just describe your niche in the prompt. Whether it\'s luxury, streetwear, sustainable, activewear, children\'s, bridal, or accessories — BrandForge tailors suggestions to your exact style and target customer.',
  },
  {
    q: 'How important is domain availability for fashion brands?',
    a: 'Very. Fashion customers expect a polished online presence. A .com domain is ideal for credibility. If it\'s taken, .co, .studio, or .shop can work. BrandForge checks multiple extensions so you can pick the right one for your brand.',
  },
  {
    q: 'What comes in the brand kit for each name?',
    a: 'Each brand kit includes: a logo concept (text-based with font pairing), a 5-color palette with hex codes, a custom tagline, typography recommendations, and real-time availability checks for domains and social handles. You can download it all as a PDF brand guidelines document.',
  },
]

export default function FashionNameGeneratorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'BrandForge Fashion Name Generator',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description: 'AI-powered fashion brand name generator with complete brand kits including logos, colors, taglines, and domain/social availability.',
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
          { '@type': 'ListItem', position: 2, name: 'Fashion Name Generator', item: 'https://brandforge-phi-pearl.vercel.app/fashion-name-generator' },
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
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-amber-50" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-700">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            AI-Powered Fashion Naming
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Fashion Name Generator
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Generate creative fashion brand names with AI. Describe your style, get name suggestions with complete brand kits — logo concepts, color palettes, taglines, and domain availability. Free to start.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="btn-primary inline-flex items-center gap-2 text-base px-8 py-3"
            >
              Generate Fashion Names
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
              Names for Every Fashion Aesthetic
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              Whether you&apos;re launching a luxury label, streetwear brand, sustainable line, or boutique — we generate names that fit your aesthetic and attract your audience.
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
              Fashion Names, Generated in Seconds
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
            These are real examples — your results will be tailored to your specific fashion style.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              How to Name Your Fashion Brand with AI
            </h2>
          </div>
          <div className="space-y-8">
            {[
              { step: '1', title: 'Describe your fashion vision', desc: 'Tell us your style — luxury, streetwear, sustainable, minimalist. Describe your target customer, price point, and the mood your brand should project.' },
              { step: '2', title: 'Get tailored name suggestions', desc: 'BrandForge generates 5 unique fashion names per search, each with a matching tagline, color palette, and logo concept. Every name is designed to position your brand and attract your audience.' },
              { step: '3', title: 'Check domain & social availability', desc: 'Every name comes with real-time checks for .com, .co, .shop, .studio, and more — plus Instagram and social media handle availability. Essential for fashion brands building a visual identity online.' },
              { step: '4', title: 'Download your brand kit', desc: 'Unlock the full brand kit: logo concept, 5-color palette with hex codes, tagline, typography recommendations, and a downloadable PDF brand guidelines document.' },
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
              Tips for Naming Your Fashion Brand
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              In fashion, your name is your label. Here&apos;s how to make it iconic.
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
      <section className="py-16 bg-gradient-to-br from-slate-800 to-amber-700">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to Name Your Fashion Brand?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Describe your style. Get names with brand kits. Free to start, $9 per brand kit you love.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-semibold text-amber-700 shadow-lg hover:bg-gray-50 transition-colors"
            >
              Generate Fashion Names
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
            <Link href="/blog/how-to-choose-business-name" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              📖 How to Choose a Business Name
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}