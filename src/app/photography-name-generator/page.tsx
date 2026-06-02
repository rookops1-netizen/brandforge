import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free Photography Name Generator — AI-Powered Photography & Studio Business Names',
  description: 'Generate creative photography business names with AI. Get a complete brand kit including logo concepts, color palettes, taglines, and domain availability checks. Free to start — no credit card required.',
  keywords: [
    'photography name generator',
    'photography business names',
    'photography studio names',
    'photographer name ideas',
    'photography brand names',
    'photo studio name ideas',
    'how to name a photography business',
    'creative photography names',
    'wedding photography names',
    'photography business name ideas',
    'portrait photography names',
    'photography branding',
    'photography company names',
    'lens studio name ideas',
    'best photography business names',
  ],
  openGraph: {
    title: 'Free Photography Name Generator — AI-Powered Photography & Studio Names',
    description: 'Generate creative photography business names with AI. Logo, colors, tagline, domain check — all in one. Free to start.',
    url: 'https://brandforge-phi-pearl.vercel.app/photography-name-generator',
    siteName: 'BrandForge',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Photography Name Generator — AI-Powered Photography & Studio Names',
    description: 'Generate creative photography business names with AI. Logo, colors, tagline, domain check — all in one.',
  },
  alternates: {
    canonical: 'https://brandforge-phi-pearl.vercel.app/photography-name-generator',
  },
}

const EXAMPLE_NAMES = [
  { name: 'Golden Hour Studio', tagline: 'Light that tells your story', style: 'Warm & Artistic', domain: 'goldenhourstudio.com', color: '#D97706' },
  { name: 'Lenscraft Co.', tagline: 'Every frame, intentionally yours', style: 'Modern & Minimal', domain: 'lenscraftco.com', color: '#6366F1' },
  { name: 'Vivid Frames', tagline: 'Color your memories', style: 'Bold & Vibrant', domain: 'vividframes.com', color: '#EC4899' },
  { name: 'Focal & True', tagline: 'Honest moments, beautifully kept', style: 'Authentic & Classic', domain: 'focalandtrue.com', color: '#0F766E' },
  { name: 'Aperture Lane', tagline: 'Where stories come into focus', style: 'Editorial & Refined', domain: 'aperturelane.com', color: '#1E293B' },
  { name: 'Moirá Photography', tagline: 'Destined moments, perfectly captured', style: 'Elegant & Unique', domain: 'moiraphotography.com', color: '#7C3AED' },
]

const CATEGORIES = [
  { name: 'Wedding Photography', desc: 'Romantic, elegant names that couples remember and recommend' },
  { name: 'Portrait & Headshot', desc: 'Professional, personal names that convey skill and trust' },
  { name: 'Commercial Photography', desc: 'Polished, corporate names that signal expertise' },
  { name: 'Event Photography', desc: 'Dynamic, energetic names for capturing live moments' },
  { name: 'Nature & Landscape', desc: 'Inspiring, atmospheric names aligned with the outdoors' },
  { name: 'Newborn & Family', desc: 'Warm, tender names that feel personal and inviting' },
  { name: 'Real Estate & Architectural', desc: 'Clean, precise names that convey accuracy and style' },
  { name: 'Fine Art Photography', desc: 'Sophisticated, evocative names that hint at artistry' },
]

const NAMING_TIPS = [
  {
    title: 'Think about your specialty',
    description: 'Wedding photography names should feel romantic and timeless. Commercial names should feel sharp and professional. Your name should instantly signal what kind of photographer you are.',
  },
  {
    title: 'Use photography terms tastefully',
    description: 'Words like "lens," "aperture," "exposure," and "focal" can work beautifully — but don\'t overdo it. One strong photography reference per name is plenty. "Focal & True" works; "Aperture Exposure Lens Studio" doesn\'t.',
  },
  {
    title: 'Say it out loud',
    description: 'You\'ll say your business name at weddings, events, and networking meetups. If it sounds awkward when spoken or people ask "how do you spell that?" — choose something else.',
  },
  {
    title: 'Check social handle availability',
    description: 'Photographers live on Instagram. BrandForge checks Instagram, Twitter, and other social handle availability for every name — so your @name matches your business name.',
  },
  {
    title: 'Consider your visual brand',
    description: 'Your name should feel like it belongs next to your best work. A bright, airy wedding brand needs a different name than a moody, film-emulation portrait style.',
  },
  {
    title: 'Keep it memorable for referrals',
    description: 'Most photography clients come from word of mouth. A short, memorable name that\'s easy to spell and Google means more referrals find you.',
  },
]

const FAQ_ITEMS = [
  {
    q: 'How does the photography name generator work?',
    a: 'Describe your photography business — your specialty, style, and the vibe you want your name to have. BrandForge\'s AI generates custom name suggestions paired with complete brand kits including logo concepts, color palettes, taglines, and domain/social availability checks.',
  },
  {
    q: 'Is the photography name generator free?',
    a: 'Yes! You can generate photography name ideas for free — 5 suggestions per search, unlimited searches, no credit card required. Unlock the full brand kit (logo, colors, tagline, typography, domain & social checks) for $9 per brand kit.',
  },
  {
    q: 'What makes a good photography business name?',
    a: 'A great photography name is memorable, easy to spell, reflects your style (light & airy, dark & moody, editorial, documentary), and has an available .com domain plus matching social media handles. Since photographers rely on Instagram, social handle availability is especially important.',
  },
  {
    q: 'Should I use my own name or a studio name?',
    a: 'Both work. Using your own name (e.g., "Sarah Chen Photography") builds personal brand recognition, which matters in photography. A studio name (e.g., "Golden Hour Studio") is more memorable and gives you room to expand or sell the business later. BrandForge can generate both styles.',
  },
  {
    q: 'Can I use these names for my photography business?',
    a: 'Absolutely. All names you generate are yours to use commercially — for business registration, branding, domain purchases, social media, and marketing. There are no licensing restrictions.',
  },
  {
    q: 'What if I want names for a specific photography niche?',
    a: 'Just describe your niche in the prompt. Whether it\'s weddings, newborns, commercial, real estate, fine art, or food photography — BrandForge tailors suggestions to your exact specialty and target clients.',
  },
  {
    q: 'How important is domain availability for photographers?',
    a: 'It depends on your specialty. Wedding and commercial photographers need a .com for credibility. Portrait and social media photographers can sometimes use .co or .photography. BrandForge checks multiple extensions so you can pick what works for your niche.',
  },
  {
    q: 'What comes in the brand kit for each name?',
    a: 'Each brand kit includes: a logo concept (text-based with font pairing), a 5-color palette with hex codes, a custom tagline, typography recommendations, and real-time availability checks for domains and social handles. You can download it all as a PDF brand guidelines document.',
  },
]

export default function PhotographyNameGeneratorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'BrandForge Photography Name Generator',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description: 'AI-powered photography business name generator with complete brand kits including logos, colors, taglines, and domain/social availability.',
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
          { '@type': 'ListItem', position: 2, name: 'Photography Name Generator', item: 'https://brandforge-phi-pearl.vercel.app/photography-name-generator' },
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
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-fuchsia-50" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-1.5 text-sm font-medium text-violet-700">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-3.694-.498 48.789 48.789 0 00-3.694.498 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
            </svg>
            AI-Powered Photography Naming
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Photography Name Generator
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Generate creative photography business names with AI. Describe your style, get name suggestions with complete brand kits — logo concepts, color palettes, taglines, and domain availability. Free to start.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="btn-primary inline-flex items-center gap-2 text-base px-8 py-3"
            >
              Generate Photography Names
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
              Names for Every Photography Style
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              Whether you shoot weddings, portraits, products, or landscapes — we generate names that match your creative vision.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((cat) => (
              <div key={cat.name} className="rounded-xl border border-slate-200 p-5 hover:border-violet-300 hover:shadow-sm transition-all">
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
              Photography Names, Generated in Seconds
            </h2>
            <p className="mt-3 text-slate-500">
              Each name comes with a complete brand kit — not just a name on its own.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {EXAMPLE_NAMES.map((item) => (
              <div key={item.name} className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-violet-200">
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
            These are real examples — your results will be tailored to your specific photography style.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              How to Name Your Photography Business with AI
            </h2>
          </div>
          <div className="space-y-8">
            {[
              { step: '1', title: 'Describe your photography style', desc: 'Tell us your specialty — weddings, portraits, commercial, fine art. Describe your aesthetic (light & airy, dark & moody, editorial) and the feeling you want your name to evoke.' },
              { step: '2', title: 'Get tailored name suggestions', desc: 'BrandForge generates 5 unique photography names per search, each with a matching tagline, color palette, and logo concept. Every name is designed to resonate with your ideal clients.' },
              { step: '3', title: 'Check domain & social availability', desc: 'Every name comes with real-time checks for .com, .co, .photography, and more — plus Instagram and social media handle availability. Critical for photographers who live on Instagram.' },
              { step: '4', title: 'Download your brand kit', desc: 'Unlock the full brand kit: logo concept, 5-color palette with hex codes, tagline, typography recommendations, and a downloadable PDF brand guidelines document.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-violet-600 text-white font-bold text-lg">
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
              Tips for Naming Your Photography Business
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              Your name is the first frame of your brand story. Here&apos;s how to compose it well.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {NAMING_TIPS.map((tip) => (
              <div key={tip.title} className="rounded-xl border border-slate-200 bg-white p-6 hover:border-violet-200 transition-colors">
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
                <summary className="flex cursor-pointer items-center justify-between p-5 text-base font-medium text-slate-900 hover:text-violet-600">
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
      <section className="py-16 bg-gradient-to-br from-violet-600 to-fuchsia-600">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to Name Your Photography Business?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Describe your style. Get names with brand kits. Free to start, $9 per brand kit you love.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-semibold text-violet-700 shadow-lg hover:bg-gray-50 transition-colors"
            >
              Generate Photography Names
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
            <Link href="/startup-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-violet-300 hover:text-violet-600 transition-colors">
              🚀 Startup Name Generator
            </Link>
            <Link href="/restaurant-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-violet-300 hover:text-violet-600 transition-colors">
              🍽️ Restaurant Name Generator
            </Link>
            <Link href="/fitness-brand-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-violet-300 hover:text-violet-600 transition-colors">
              💪 Fitness Brand Name Generator
            </Link>
            <Link href="/real-estate-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-violet-300 hover:text-violet-600 transition-colors">
              🏠 Real Estate Name Generator
            </Link>
            <Link href="/beauty-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-violet-300 hover:text-violet-600 transition-colors">
              💄 Beauty Name Generator
            </Link>
            <Link href="/fashion-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-violet-300 hover:text-violet-600 transition-colors">
              👗 Fashion Name Generator
            </Link>
            <Link href="/food-truck-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-violet-300 hover:text-violet-600 transition-colors">
              🚚 Food Truck Name Generator
            </Link>
            <Link href="/tech-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-violet-300 hover:text-violet-600 transition-colors">
              💻 Tech Name Generator
            </Link>
            <Link href="/consulting-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-violet-300 hover:text-violet-600 transition-colors">
              💼 Consulting Name Generator
            </Link>
            <Link href="/podcast-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-violet-300 hover:text-violet-600 transition-colors">
              🎙️ Podcast Name Generator
            </Link>
            <Link href="/compare" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-violet-300 hover:text-violet-600 transition-colors">
              📊 Compare Name Generators
            </Link>
            <Link href="/examples" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-violet-300 hover:text-violet-600 transition-colors">
              ✨ Brand Kit Examples
            </Link>
            <Link href="/blog/how-to-choose-business-name" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-violet-300 hover:text-violet-600 transition-colors">
              📖 How to Choose a Business Name
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}