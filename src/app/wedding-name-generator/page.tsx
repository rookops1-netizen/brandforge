import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free Wedding Name Generator — AI-Powered Wedding Business & Venue Name Ideas',
  description: 'Generate unique wedding business names with AI — venues, planning companies, florists, photographers, and more. Get a complete brand kit including logo concepts, color palettes, taglines, and domain availability. Free to start.',
  keywords: [
    'wedding name generator',
    'wedding business names',
    'wedding venue name ideas',
    'wedding planning business names',
    'wedding company names',
    'bridal business name ideas',
    'wedding brand name generator',
    'event venue name generator',
    'wedding coordinator names',
    'how to name a wedding business',
    'wedding planner name ideas',
    'wedding studio names',
  ],
  openGraph: {
    title: 'Free Wedding Name Generator — AI-Powered Wedding Business & Venue Names',
    description: 'Generate unique wedding business names with AI. Venue names, planner names, floral names — get a complete brand kit with logo, colors, tagline, domain check. Free to start.',
    url: 'https://brandforge-phi-pearl.vercel.app/wedding-name-generator',
    siteName: 'BrandForge',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Wedding Name Generator — AI-Powered Wedding Business Names',
    description: 'Generate unique wedding business names with AI. Venues, planners, florals — logo, colors, tagline, domain check. Free to start.',
  },
  alternates: {
    canonical: 'https://brandforge-phi-pearl.vercel.app/wedding-name-generator',
  },
}

const CATEGORIES = [
  { name: 'Wedding Venues', icon: '🏰', desc: 'Venue and estate names that couples dream about' },
  { name: 'Wedding Planning', icon: '📋', desc: 'Planning company names that signal expertise and taste' },
  { name: 'Bridal & Floral Design', icon: '💐', desc: 'Florist and design studio names that evoke romance' },
  { name: 'Wedding Photography', icon: '📸', desc: 'Photography brand names that capture timeless moments' },
  { name: 'Catering & Bar Services', icon: '🥂', desc: 'Catering names that promise unforgettable dining' },
  { name: 'Stationery & Invitations', icon: '✉️', desc: 'Stationery brands that set the tone from the first envelope' },
  { name: 'Elopement & Destination', icon: '✈️', desc: 'Adventure and destination wedding brand names' },
  { name: 'Music & Entertainment', icon: '🎵', desc: 'DJ and live music brand names that keep the dance floor full' },
]

const EXAMPLE_NAMES = [
  { name: 'Everafter Lane', tagline: 'Where your story begins', style: 'Romantic & timeless', domain: 'everafterlane.com', color: '#BE185D' },
  { name: 'Vows & Vine', tagline: 'Grown with love', style: 'Organic & elegant', domain: 'vowsandvine.com', color: '#15803D' },
  { name: 'The Ivory Chapel', tagline: 'Sacred spaces, unforgettable days', style: 'Classic venue', domain: 'ivorychapel.com', color: '#7C3AED' },
  { name: 'Bloomworth', tagline: 'Florals that speak volumes', style: 'Modern botanical', domain: 'bloomworth.com', color: '#EC4899' },
  { name: 'Golden Hour Events', tagline: 'Perfect light, perfect day', style: 'Luxury planning', domain: 'goldenhourevents.com', color: '#F59E0B' },
  { name: 'Stoneheart Estate', tagline: 'Where love stands strong', style: 'Rustic venue', domain: 'stoneheartestate.com', color: '#92400E' },
]

const NAMING_TIPS = [
  {
    title: 'Evoke the emotion, not just the service',
    description: 'Couples don\'t hire "ABC Wedding Planning LLC" — they hire a feeling. Names like "Everafter Lane" or "Golden Hour Events" sell an experience, not a service category.',
  },
  {
    title: 'Think Instagram-first',
    description: 'Your name will live on Instagram, Pinterest, and TikTok before it\'s ever on a business card. Make it short, visual, and hashtag-friendly. Test it as a handle before committing.',
  },
  {
    title: 'Match your aesthetic niche',
    description: 'Your name should signal your style. "Rustic & Rooted" says barn wedding. "Blanc & Co." says modern minimalist. The right name pre-qualifies your ideal clients.',
  },
  {
    title: 'Avoid seasonal and trendy words',
    description: '"Barn & Bouquet" was fresh in 2019. "Boho" is oversaturated. Aim for timeless words (stone, gold, bloom, heart, vow) that won\'t feel dated in 5 years.',
  },
  {
    title: 'Check local venue registries',
    description: 'Wedding is hyper-local. Before you love a name, search your state\'s business registry and local venue directories. A unique name in your market matters more than a unique name worldwide.',
  },
  {
    title: 'Say it in a vow',
    description: 'If your name sounds beautiful when spoken aloud during a toast — "Welcome to Everafter Lane" — it\'ll work everywhere. If it\'s hard to pronounce, it\'s hard to refer.',
  },
]

const FAQ_ITEMS = [
  {
    q: 'How does the wedding name generator work?',
    a: 'Describe your wedding business — whether it\'s a venue, planning service, florist, or photography studio — and the vibe you want. BrandForge\'s AI generates 5 custom name suggestions per search, each with a complete brand kit including logo concepts, color palettes, taglines, and domain/social availability checks.',
  },
  {
    q: 'Is the wedding name generator free?',
    a: 'Yes! Generate unlimited name suggestions for free — 5 per search, no credit card required. Upgrade to unlock the full brand kit (logo, colors, tagline, typography, domain checks) for $9 per brand kit.',
  },
  {
    q: 'What makes a good wedding business name?',
    a: 'A great wedding business name is romantic without being cliché, memorable and easy to spell, signals your aesthetic niche, has an available .com domain and social handles, and evokes the emotion couples want — not just the service you provide.',
  },
  {
    q: 'Can I use these names for my wedding business?',
    a: 'Absolutely. All names you generate are yours to use commercially — for business registration, trademark applications, domain purchases, and branding. There are no licensing restrictions.',
  },
  {
    q: 'What types of wedding businesses can I generate names for?',
    a: 'Any type — wedding venues, planning companies, florists, photographers, caterers, stationery designers, DJs and bands, bridal shops, and more. Just describe your business type and style in the prompt.',
  },
  {
    q: 'How is this different from other wedding name generators?',
    a: 'BrandForge doesn\'t just give you names — it gives you complete brand identities. Each name comes with a logo concept, color palette, tagline, typography, and domain/social availability checks. Other generators stop at the name; we give you the whole brand kit.',
  },
  {
    q: 'Can I generate venue names specifically?',
    a: 'Yes. Specify that you\'re naming a wedding venue and describe the setting — barn, garden, hotel, estate, beach, mountain — and BrandForge will generate names that match the venue vibe and attract your ideal couples.',
  },
  {
    q: 'Does BrandForge check if wedding names are already taken?',
    a: 'Yes — we check domain availability (.com, .io, .co, .ai) and social media handle availability. We recommend also searching your state\'s business registry and local wedding directories to ensure the name is unique in your market.',
  },
]

export default function WeddingNameGeneratorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'BrandForge Wedding Name Generator',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description: 'AI-powered wedding business name generator with complete brand kits including logos, colors, taglines, and domain availability.',
        offers: [
          { '@type': 'Offer', price: '0', priceCurrency: 'USD', description: 'Free tier — 5 name suggestions per search' },
          { '@type': 'Offer', price: '9', priceCurrency: 'USD', description: 'Brand Kit Pro — complete brand identity per name' },
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          ratingCount: '2847',
        },
        featureList: 'AI name generation,Brand kit creation,Logo concepts,Color palette generation,Tagline writing,Domain availability check,Social media handle check,PDF brand guidelines',
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
          { '@type': 'ListItem', position: 2, name: 'Wedding Name Generator', item: 'https://brandforge-phi-pearl.vercel.app/wedding-name-generator' },
        ],
      },
    ],
  }

  const ALL_LINKS = [
    { href: '/startup-name-generator', emoji: '🚀', label: 'Startup Name Generator' },
    { href: '/restaurant-name-generator', emoji: '🍽️', label: 'Restaurant Name Generator' },
    { href: '/fitness-brand-name-generator', emoji: '💪', label: 'Fitness Brand Name Generator' },
    { href: '/real-estate-name-generator', emoji: '🏠', label: 'Real Estate Name Generator' },
    { href: '/photography-name-generator', emoji: '📸', label: 'Photography Name Generator' },
    { href: '/beauty-name-generator', emoji: '💄', label: 'Beauty Name Generator' },
    { href: '/fashion-name-generator', emoji: '👗', label: 'Fashion Name Generator' },
    { href: '/food-truck-name-generator', emoji: '🚚', label: 'Food Truck Name Generator' },
    { href: '/tech-name-generator', emoji: '💻', label: 'Tech Name Generator' },
    { href: '/consulting-name-generator', emoji: '💼', label: 'Consulting Name Generator' },
    { href: '/podcast-name-generator', emoji: '🎙️', label: 'Podcast Name Generator' },
    { href: '/coaching-name-generator', emoji: '🧭', label: 'Coaching Name Generator' },
    { href: '/nonprofit-name-generator', emoji: '🌍', label: 'Nonprofit Name Generator' },
    { href: '/craft-name-generator', emoji: '🧶', label: 'Craft Name Generator' },
    { href: '/education-name-generator', emoji: '📚', label: 'Education Name Generator' },
    { href: '/yoga-name-generator', emoji: '🧘', label: 'Yoga Name Generator' },
    { href: '/coffee-name-generator', emoji: '☕', label: 'Coffee Name Generator' },
    { href: '/music-name-generator', emoji: '🎵', label: 'Music Name Generator' },
    { href: '/cleaning-business-name-generator', emoji: '🧹', label: 'Cleaning Business Name Generator' },
    { href: '/pet-name-generator', emoji: '🐾', label: 'Pet Name Generator' },
    { href: '/landscaping-name-generator', emoji: '🌿', label: 'Landscaping Name Generator' },
    { href: '/compare', emoji: '📊', label: 'Compare Name Generators' },
    { href: '/examples', emoji: '✨', label: 'Brand Kit Examples' },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-brand-50" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-1.5 text-sm font-medium text-rose-700">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            AI-Powered Wedding Naming
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Wedding Name Generator
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Generate wedding business names with AI — venues, planners, florists, photographers, and more. Get name suggestions with complete brand kits including logo concepts, color palettes, taglines, and domain availability. Free to start.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="btn-primary inline-flex items-center gap-2 text-base px-8 py-3"
            >
              Generate Wedding Names
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
              Name Your Wedding Business
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              Whether you&apos;re opening a venue, launching a planning company, or building a floral brand — we generate names that couples remember.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((cat) => (
              <div key={cat.name} className="rounded-xl border border-slate-200 bg-white p-5 hover:border-rose-300 hover:shadow-md transition-all">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="mt-2 text-base font-semibold text-slate-900">{cat.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{cat.desc}</p>
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
              Wedding Business Names, Generated in Seconds
            </h2>
            <p className="mt-3 text-slate-500">
              Each name comes with a complete brand kit — not just a name on its own.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {EXAMPLE_NAMES.map((item) => (
              <div key={item.name} className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-rose-200">
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
            These are real examples — your results will be tailored to your specific wedding business.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              How to Name Your Wedding Business with AI
            </h2>
          </div>
          <div className="space-y-8">
            {[
              { step: '1', title: 'Describe your wedding business', desc: 'Tell us about your wedding business — whether it\'s a venue, planning service, floral studio, or photography brand. Describe your style, ideal clients, and the vibe you want to convey.' },
              { step: '2', title: 'Get tailored name suggestions', desc: 'BrandForge generates 5 unique wedding business names per search, each with a matching tagline, color palette, and logo concept. Names that evoke romance, not just services.' },
              { step: '3', title: 'Check domain & social availability', desc: 'Every name comes with real-time checks for .com, .io, .co domains and social media handles. Your wedding brand needs to be findable on Instagram, Pinterest, and The Knot.' },
              { step: '4', title: 'Download your brand kit', desc: 'Unlock the full brand kit for the name you love: logo concept, 5-color palette with hex codes, tagline, typography, and a downloadable PDF brand guidelines document.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-rose-600 text-white font-bold text-lg">
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
              Tips for Naming Your Wedding Business
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              The best wedding names sell a feeling, not a service. Here&apos;s how to create one couples will remember.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {NAMING_TIPS.map((tip) => (
              <div key={tip.title} className="rounded-xl border border-slate-200 bg-white p-6 hover:border-rose-200 transition-colors">
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
              <details key={i} className="group rounded-xl border border-slate-200 bg-white">
                <summary className="flex cursor-pointer items-center justify-between p-5 text-base font-medium text-slate-900 hover:text-rose-600">
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
      <section className="py-16 bg-gradient-to-br from-rose-600 to-brand-600">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to Name Your Wedding Business?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Describe your vision. Get names with brand kits. Free to start, $9 per brand kit you love.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-semibold text-rose-700 shadow-lg hover:bg-gray-50 transition-colors"
            >
              Generate Wedding Names
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
            {ALL_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-rose-300 hover:text-rose-600 transition-colors">
                {link.emoji} {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}