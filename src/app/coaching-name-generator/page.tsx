import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free Coaching Name Generator — AI-Powered Coaching & Life Coach Business Names',
  description: 'Generate creative coaching business names with AI. Get a complete brand kit including logo concepts, color palettes, taglines, and domain availability checks. Free to start — no credit card required.',
  keywords: [
    'coaching name generator',
    'coaching business names',
    'life coach name ideas',
    'coaching brand names',
    'life coach business names',
    'coaching practice names',
    'coach name generator',
    'wellness coaching names',
    'executive coaching names',
    'career coaching names',
    'how to name a coaching business',
    'coaching naming guide',
    'personal development coaching names',
    'business coach name ideas',
  ],
  openGraph: {
    title: 'Free Coaching Name Generator — AI-Powered Coaching & Life Coach Names',
    description: 'Generate creative coaching business names with AI. Logo, colors, tagline, domain check — all in one. Free to start.',
    url: 'https://brandforge-phi-pearl.vercel.app/coaching-name-generator',
    siteName: 'BrandForge',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Coaching Name Generator — AI-Powered Coaching & Life Coach Names',
    description: 'Generate creative coaching business names with AI. Logo, colors, tagline, domain check — all in one.',
  },
  alternates: {
    canonical: 'https://brandforge-phi-pearl.vercel.app/coaching-name-generator',
  },
}

const EXAMPLE_NAMES = [
  { name: 'Ascend & Align', tagline: 'Rise higher, stay grounded', style: 'Warm & Inspiring', domain: 'ascendandalign.com', color: '#7C3AED' },
  { name: 'Brightward', tagline: 'Moving toward what lights you up', style: 'Modern & Positive', domain: 'brightward.com', color: '#F59E0B' },
  { name: 'The Catalyst Method', tagline: 'Spark the shift within', style: 'Structured & Professional', domain: 'catalystmethod.com', color: '#059669' },
  { name: 'Momentum Path', tagline: 'Forward motion, one clarity at a time', style: 'Action-Oriented & Clean', domain: 'momentumpath.com', color: '#2563EB' },
  { name: 'Root & Rise Coaching', tagline: 'Grounded growth for ambitious lives', style: 'Nature-Inspired & Approachable', domain: 'rootandrisecoaching.com', color: '#92400E' },
  { name: 'Claritas Coaching', tagline: 'Clarity is the new power', style: 'Premium & Minimalist', domain: 'claritascoaching.com', color: '#0F172A' },
]

const CATEGORIES = [
  { name: 'Life Coaching', desc: 'Inspiring, personal names that feel warm and inviting' },
  { name: 'Executive & Leadership Coaching', desc: 'Authoritative, polished names that signal prestige and results' },
  { name: 'Career Coaching', desc: 'Action-oriented names that imply progress and achievement' },
  { name: 'Health & Wellness Coaching', desc: 'Vibrant, holistic names that evoke balance and vitality' },
  { name: 'Relationship Coaching', desc: 'Empathetic, connection-driven names that feel safe and supportive' },
  { name: 'Financial Coaching', desc: 'Trustworthy, clear names that convey security and growth' },
  { name: 'Performance Coaching', desc: 'Dynamic, results-focused names that push for excellence' },
  { name: 'Spiritual & Mindset Coaching', desc: 'Purposeful, introspective names that speak to inner transformation' },
]

const NAMING_TIPS = [
  {
    title: 'Match your coaching energy',
    description: 'Your name should feel like walking into your first session — warm and inviting for life coaching, sharp and authoritative for executive coaching, calming for wellness coaching. Let the name set the emotional tone before you say a word.',
  },
  {
    title: 'Use metaphor and movement',
    description: '"Ascend," "Momentum," "Catalyst," and "Claritas" all evoke motion or illumination — the core promise of coaching. Metaphors from nature (Root & Rise), physics (Momentum), and light (Brightward) create vivid mental images that stick.',
  },
  {
    title: 'Check social handle availability first',
    description: 'Coaches live on Instagram, LinkedIn, and YouTube. If your name isn\'t available as @YourCoachingName on at least 2 of 3 platforms, pick a different name. BrandForge checks all major platforms in real-time so you never fall in love with an unavailable handle.',
  },
  {
    title: 'Say it out loud — a lot',
    description: 'You\'ll say your coaching name on podcasts, in introductions, and in videos. Test your top 3 names by saying them 10 times in a row. If you stumble or it sounds awkward, your prospects will too. Short, clear, and rhythmic wins.',
  },
  {
    title: 'Avoid overly niche names',
    description: '"Career Pivot Coaching" locks you into career pivots. What if you expand to leadership coaching? "Momentum Path" works for any niche. A great coaching name grows with you — BrandForge generates names that scale with your practice.',
  },
  {
    title: 'Think about the testimonial test',
    description: 'Imagine a client writing "I had a breakthrough with [Your Name]." Does it feel personal and trustworthy? The best coaching names sound like something a happy client would proudly recommend to a friend, not a corporate service they\'d forget.',
  },
]

const FAQ_ITEMS = [
  {
    q: 'How does the coaching name generator work?',
    a: 'Describe your coaching practice — your niche (life coaching, executive, career, wellness, relationship, financial), your ideal client type (professionals, executives, creatives, parents), and brand personality (warm, authoritative, modern, holistic). BrandForge\'s AI generates custom name suggestions paired with complete brand kits including logo concepts, color palettes, taglines, and domain/social availability checks.',
  },
  {
    q: 'Is the coaching name generator free?',
    a: 'Yes! You can generate coaching name ideas for free — 5 suggestions per search, unlimited searches, no credit card required. Unlock the full brand kit (logo, colors, tagline, typography, domain & social checks) for $9 per brand kit.',
  },
  {
    q: 'What makes a good coaching business name?',
    a: 'A great coaching name feels personal and approachable while signaling transformation and growth. It should be easy to say in introductions, spell on referral cards, and remember after a first conversation. Words like "Path," "Rise," "Clarity," and "Catalyst" evoke coaching\'s core promise — helping people move forward.',
  },
  {
    q: 'Should I use my own name for my coaching business?',
    a: 'Using your own name (e.g., "Sarah Chen Coaching") is common and builds personal trust — great for solopreneurs and 1:1 practices. However, a branded name (e.g., "Brightward") gives you more flexibility to hire associate coaches, create courses, and eventually sell the business. BrandForge generates both styles so you can choose what fits your 5-year vision.',
  },
  {
    q: 'Can I use these names for my coaching business?',
    a: 'Absolutely. All names you generate are yours to use commercially — for business registration, branding, domain purchases, social media, and marketing materials. There are no licensing restrictions.',
  },
  {
    q: 'What if I want names for a specific coaching niche?',
    a: 'Just describe your niche in the prompt. Whether it\'s spiritual coaching, executive leadership, ADHD coaching, divorce recovery, weight loss, or parent coaching — BrandForge tailors suggestions to your exact focus and ideal client demographic.',
  },
  {
    q: 'How important is a matching domain for coaches?',
    a: 'Very important. Your domain is where people book sessions, access resources, and read your content. A .com that matches your coaching name builds instant credibility. BrandForge checks domain availability in real-time, including .coaching, .life, and other coaching-friendly extensions.',
  },
  {
    q: 'What comes in the brand kit for each name?',
    a: 'Each brand kit includes: a logo concept (text-based with font pairing), a 5-color palette with hex codes, a custom tagline, typography recommendations, and real-time availability checks for domains and social handles. You can download it all as a PDF brand guidelines document.',
  },
]

export default function CoachingNameGeneratorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'BrandForge Coaching Name Generator',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description: 'AI-powered coaching business name generator with complete brand kits including logos, colors, taglines, and domain/social availability.',
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
          { '@type': 'ListItem', position: 2, name: 'Coaching Name Generator', item: 'https://brandforge-phi-pearl.vercel.app/coaching-name-generator' },
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
        <div className="absolute inset-0 bg-gradient-to-br from-violet-800 via-purple-700 to-amber-600" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-700">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 15 8.252 8.252 0 016.638 5.214M5.625 5.214A12.014 12.014 0 0012 3c4.628 0 8.628 2.14 11.142 5.454M12 21c-4.628 0-8.628-2.14-11.142-5.454M15.362 5.214A12.014 12.014 0 0012 3c-4.628 0-8.628 2.14-11.142 5.454" />
            </svg>
            AI-Powered Coaching Naming
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Coaching Name Generator
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-purple-100">
            Generate coaching business names with AI. Describe your practice, get name suggestions with complete brand kits — logo concepts, color palettes, taglines, and domain availability. Free to start.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="btn-primary inline-flex items-center gap-2 text-base px-8 py-3"
            >
              Generate Coaching Names
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
          <p className="mt-4 text-sm text-purple-200">Free • No credit card required • Results in seconds</p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Names for Every Coaching Niche
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              From life coaching to executive leadership — we generate names that inspire trust and spark transformation.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((cat) => (
              <div key={cat.name} className="rounded-xl border border-slate-200 p-5 hover:border-purple-300 hover:shadow-sm transition-all">
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
              Coaching Names, Generated in Seconds
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
            These are real examples — your results will be tailored to your specific coaching practice.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              How to Name Your Coaching Business with AI
            </h2>
          </div>
          <div className="space-y-8">
            {[
              { step: '1', title: 'Describe your coaching practice', desc: 'Tell us your niche — life coaching, executive, career, wellness, relationship, financial, performance, or spiritual. Describe your ideal client (professionals, executives, creatives, parents) and brand personality (warm, authoritative, modern, holistic).' },
              { step: '2', title: 'Get tailored name suggestions', desc: 'BrandForge generates 5 unique coaching names per search, each with a matching tagline, color palette, and logo concept. Every name is designed to resonate with your ideal clients and feel personal yet professional.' },
              { step: '3', title: 'Check domain & social availability', desc: 'Every name comes with real-time checks for .com, .co, .coaching, .life, and more — plus Instagram, LinkedIn, and social media handle availability. Essential for coaches who live on social platforms.' },
              { step: '4', title: 'Download your brand kit', desc: 'Unlock the full brand kit: logo concept, 5-color palette with hex codes, tagline, typography recommendations, and a downloadable PDF brand guidelines document ready for your website, social profiles, and client materials.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-700 text-white font-bold text-lg">
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
              Tips for Naming Your Coaching Business
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              In coaching, your name is often the first impression — before the discovery call, before the testimonial. Here&apos;s how to make it count.
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
              <details key={i} className="group rounded-xl border border-slate-200 bg-slate-50">
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
      <section className="py-16 bg-gradient-to-br from-violet-800 to-amber-600">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to Name Your Coaching Practice?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Describe your practice. Get names with brand kits. Free to start, $9 per brand kit you love.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-semibold text-violet-800 shadow-lg hover:bg-gray-50 transition-colors"
            >
              Generate Coaching Names
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
            <Link href="/startup-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-purple-300 hover:text-purple-600 transition-colors">
              🚀 Startup Name Generator
            </Link>
            <Link href="/restaurant-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-purple-300 hover:text-purple-600 transition-colors">
              🍽️ Restaurant Name Generator
            </Link>
            <Link href="/fitness-brand-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-purple-300 hover:text-purple-600 transition-colors">
              💪 Fitness Brand Name Generator
            </Link>
            <Link href="/real-estate-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-purple-300 hover:text-purple-600 transition-colors">
              🏠 Real Estate Name Generator
            </Link>
            <Link href="/photography-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-purple-300 hover:text-purple-600 transition-colors">
              📸 Photography Name Generator
            </Link>
            <Link href="/beauty-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-purple-300 hover:text-purple-600 transition-colors">
              💄 Beauty Name Generator
            </Link>
            <Link href="/fashion-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-purple-300 hover:text-purple-600 transition-colors">
              👗 Fashion Name Generator
            </Link>
            <Link href="/food-truck-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-purple-300 hover:text-purple-600 transition-colors">
              🚚 Food Truck Name Generator
            </Link>
            <Link href="/tech-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-purple-300 hover:text-purple-600 transition-colors">
              💻 Tech Name Generator
            </Link>
            <Link href="/consulting-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-purple-300 hover:text-purple-600 transition-colors">
              📊 Consulting Name Generator
            </Link>
            <Link href="/podcast-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-purple-300 hover:text-purple-600 transition-colors">
              🎙️ Podcast Name Generator
            </Link>
            <Link href="/nonprofit-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-purple-300 hover:text-purple-600 transition-colors">
              🌍 Nonprofit Name Generator
            </Link>
            <Link href="/craft-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-purple-300 hover:text-purple-600 transition-colors">
              🧶 Craft Name Generator
            </Link>
            <Link href="/education-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-purple-300 hover:text-purple-600 transition-colors">
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
<Link href="/compare" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-purple-300 hover:text-purple-600 transition-colors">
              📊 Compare Name Generators
            </Link>
            <Link href="/examples" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-purple-300 hover:text-purple-600 transition-colors">
              ✨ Brand Kit Examples
            </Link>
            <Link href="/blog/how-to-choose-business-name" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-purple-300 hover:text-purple-600 transition-colors">
              📖 How to Choose a Business Name
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}