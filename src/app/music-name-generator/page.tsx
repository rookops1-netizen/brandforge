import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free Music Name Generator — AI-Powered Band, Label & Music Business Name Ideas',
  description: 'Generate unique music names with AI — band names, record label names, music studio names, and more. Get a complete brand kit including logo concepts, color palettes, taglines, and domain availability. Free to start.',
  keywords: [
    'music name generator',
    'band name generator',
    'record label name generator',
    'music studio name ideas',
    'music business names',
    'DJ name generator',
    'music brand name ideas',
    'how to name a band',
    'music production company names',
    'playlist name generator',
    'singer stage name generator',
    'music group name ideas',
  ],
  openGraph: {
    title: 'Free Music Name Generator — AI-Powered Band, Label & Music Business Names',
    description: 'Generate unique music names with AI. Band names, label names, studio names — get a complete brand kit with logo, colors, tagline, domain check. Free to start.',
    url: 'https://brandforge-phi-pearl.vercel.app/music-name-generator',
    siteName: 'BrandForge',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Music Name Generator — AI-Powered Band & Music Business Names',
    description: 'Generate unique music names with AI. Band names, label names, studio names — logo, colors, tagline, domain check. Free to start.',
  },
  alternates: {
    canonical: 'https://brandforge-phi-pearl.vercel.app/music-name-generator',
  },
}

const CATEGORIES = [
  { name: 'Bands & Groups', icon: '🎸', desc: 'Rock bands, indie groups, collectives — names that sound like a headliner' },
  { name: 'Solo Artists & Stage Names', icon: '🎤', desc: 'Memorable solo performer names that stand out on a marquee' },
  { name: 'Record Labels', icon: '💿', desc: 'Label names that signal taste and authority in the industry' },
  { name: 'Music Production Studios', icon: '🎚️', desc: 'Studio names that attract artists and convey sonic quality' },
  { name: 'DJ & Electronic Artists', icon: '🎧', desc: 'EDM, DJ, and electronic project names with energy' },
  { name: 'Music Festivals & Events', icon: '🎪', desc: 'Festival names that sell tickets before the lineup drops' },
  { name: 'Music Schools & Academies', icon: '🎼', desc: 'Educational music brand names that attract students' },
  { name: 'Audio & Podcast Studios', icon: '🎙️', desc: 'Production house names for audio content creation' },
]

const EXAMPLE_NAMES = [
  { name: 'Sonicrift', tagline: 'Where sound breaks open', style: 'Bold & electric', domain: 'sonicrift.com', color: '#7C3AED' },
  { name: 'Velvet Chord', tagline: 'Luxury in every note', style: 'Warm & refined', domain: 'velvetchord.com', color: '#BE185D' },
  { name: 'Reverbfire', tagline: 'Burn loud, echo forever', style: 'Alt & fierce', domain: 'reverbfire.com', color: '#DC2626' },
  { name: 'Aetherwave', tagline: 'Music beyond gravity', style: 'Atmospheric', domain: 'aetherwave.io', color: '#0EA5E9' },
  { name: 'Ironwood Sound', tagline: 'Rooted in tone', style: 'Organic & strong', domain: 'ironwoodsound.com', color: '#92400E' },
  { name: 'Luminary Records', tagline: 'Illuminating new voices', style: 'Premium label', domain: 'luminaryrecords.com', color: '#F59E0B' },
]

const NAMING_TIPS = [
  {
    title: 'Say it on a marquee',
    description: 'Your music name has to look good on a festival poster and sound great on a mic intro. If it doesn\'t sound powerful when announced, keep searching.',
  },
  {
    title: 'Think genre-fluid',
    description: 'Great music names aren\'t trapped in one genre. "Radiohead" works for rock, electronic, and experimental. Avoid names that lock you into one sound.',
  },
  {
    title: 'Check Spotify and Apple Music',
    description: 'Before you fall in love with a name, search it on streaming platforms. Duplicate artist names cause discoverability nightmares and royalty confusion.',
  },
  {
    title: 'Short names travel further',
    description: 'Think Daft Punk, The Weeknd, ODESZA. Short names fit on merch, hashtags, and festival lineups. Keep it under 12 characters if possible.',
  },
  {
    title: 'Avoid real-person name collisions',
    description: 'Searching your potential name on social media first avoids legal issues and confused fans. A unique name is a searchable name.',
  },
  {
    title: 'Merch-first naming',
    description: 'If the name doesn\'t look good on a t-shirt, hoodie, or tote bag, reconsider. Your biggest fans will wear your name — make it wearable.',
  },
]

const FAQ_ITEMS = [
  {
    q: 'How does the music name generator work?',
    a: 'Describe your music project — genre, vibe, audience, and goals. BrandForge\'s AI generates 5 custom name suggestions per search, each with a complete brand kit including logo concepts, color palettes, taglines, and domain/social availability checks.',
  },
  {
    q: 'Is the music name generator free?',
    a: 'Yes! Generate unlimited name suggestions for free — 5 per search, no credit card required. Upgrade to unlock the full brand kit (logo, colors, tagline, typography, domain checks) for $9 per brand kit.',
  },
  {
    q: 'What makes a good band name?',
    a: 'A great band name is short (1-2 words), memorable, easy to spell after hearing it once, genre-flexible, and available as a .com domain and social media handles. It should look great on merch and sound great when introduced on stage.',
  },
  {
    q: 'Can I use these names for my band or label?',
    a: 'Absolutely. All names you generate are yours to use commercially — for band registration, trademark applications, streaming platforms, and merchandising. There are no licensing restrictions.',
  },
  {
    q: 'What if I need a name for a specific music genre?',
    a: 'Just specify the genre in your description. Whether it\'s hip-hop, indie rock, electronic, jazz, country, or classical — BrandForge tailors suggestions to your genre and audience.',
  },
  {
    q: 'How is this different from other band name generators?',
    a: 'BrandForge doesn\'t just combine random words — it generates names with complete brand identities. Each name comes with a logo concept, color palette, tagline, typography, and domain/social availability checks. Other generators stop at the name; we give you the whole brand kit.',
  },
  {
    q: 'Can I generate stage names for solo artists?',
    a: 'Yes. Describe your musical style, image, and the vibe you want to project. BrandForge will generate stage names that work across streaming platforms, social media, and live performances.',
  },
  {
    q: 'Does BrandForge check if music names are already taken?',
    a: 'Yes — we check domain availability (.com, .io, .co, .ai) and social media handle availability. We recommend also searching Spotify and Apple Music to avoid artist name collisions on streaming platforms.',
  },
]

export default function MusicNameGeneratorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'BrandForge Music Name Generator',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description: 'AI-powered music name generator with complete brand kits including logos, colors, taglines, and domain availability.',
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
          { '@type': 'ListItem', position: 2, name: 'Music Name Generator', item: 'https://brandforge-phi-pearl.vercel.app/music-name-generator' },
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
    { href: '/wedding-name-generator', emoji: '💍', label: 'Wedding Name Generator' },
    { href: '/cleaning-business-name-generator', emoji: '🧹', label: 'Cleaning Business Name Generator' },
    { href: '/pet-name-generator', emoji: '🐾', label: 'Pet Name Generator' },
    { href: '/landscaping-name-generator', emoji: '🌿', label: 'Landscaping Name Generator' },
    { href: '/salon-name-generator', emoji: '💇', label: 'Salon Name Generator' },
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
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-brand-50" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-1.5 text-sm font-medium text-purple-700">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
            AI-Powered Music Naming
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Music Name Generator
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Generate band names, record label names, and music brand names with AI. Describe your sound and style, get name suggestions with complete brand kits — logo concepts, color palettes, taglines, and domain availability. Free to start.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="btn-primary inline-flex items-center gap-2 text-base px-8 py-3"
            >
              Generate Music Names
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
              Name Your Music Project
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              Whether you&apos;re forming a band, launching a label, or building a studio — we generate names that resonate.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((cat) => (
              <div key={cat.name} className="rounded-xl border border-slate-200 bg-white p-5 hover:border-purple-300 hover:shadow-md transition-all">
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
              Music Names, Generated in Seconds
            </h2>
            <p className="mt-3 text-slate-500">
              Each name comes with a complete brand kit — not just a name on its own.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {EXAMPLE_NAMES.map((item) => (
              <div key={item.name} className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-purple-200">
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
            These are real examples — your results will be tailored to your specific music project.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              How to Name Your Music Project with AI
            </h2>
          </div>
          <div className="space-y-8">
            {[
              { step: '1', title: 'Describe your sound and vision', desc: 'Tell us about your music project — genre, influences, audience, and the vibe you\'re going for. The more specific, the better the names.' },
              { step: '2', title: 'Get tailored name suggestions', desc: 'BrandForge generates 5 unique music names per search, each with a matching tagline, color palette, and logo concept. No generic word salad — these are real, brandable names.' },
              { step: '3', title: 'Check availability instantly', desc: 'Every name comes with real-time checks for .com, .io, .co, .music domains and social media handles. Avoid the heartbreak of loving a name that\'s already taken.' },
              { step: '4', title: 'Download your brand kit', desc: 'Unlock the full brand kit for the name you love: logo concept, 5-color palette with hex codes, tagline, typography, and a downloadable PDF brand guidelines document.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-600 text-white font-bold text-lg">
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
              Tips for Naming Your Music Project
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              The best music names are unforgettable, genre-flexible, and look great on a t-shirt. Here&apos;s how to nail yours.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {NAMING_TIPS.map((tip) => (
              <div key={tip.title} className="rounded-xl border border-slate-200 bg-white p-6 hover:border-purple-200 transition-colors">
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
                <summary className="flex cursor-pointer items-center justify-between p-5 text-base font-medium text-slate-900 hover:text-purple-600">
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
      <section className="py-16 bg-gradient-to-br from-purple-600 to-brand-600">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to Name Your Music Project?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Describe your sound. Get names with brand kits. Free to start, $9 per brand kit you love.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-semibold text-purple-700 shadow-lg hover:bg-gray-50 transition-colors"
            >
              Generate Music Names
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
              <Link key={link.href} href={link.href} className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-purple-300 hover:text-purple-600 transition-colors">
                {link.emoji} {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}