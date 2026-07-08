import type { Metadata } from 'next'
import Link from 'next/link'
import { IndustryBlogLinks } from '@/components/IndustryBlogLinks'

export const metadata: Metadata = {
  title: 'Free Real Estate Name Generator — AI-Powered Realty & Property Business Names',
  description: 'Generate professional real estate business names with AI. Get a complete brand kit including logo concepts, color palettes, taglines, and domain availability checks. Free to start — no credit card required.',
  keywords: [
    'real estate name generator',
    'real estate business names',
    'property name ideas',
    'realty name generator',
    'real estate brand names',
    'real estate company names',
    'property business name ideas',
    'real estate agency names',
    'how to name a real estate business',
    'real estate branding',
    'real estate company name ideas',
    'property management names',
    'real estate group names',
    'luxury real estate names',
    'commercial real estate names',
  ],
  openGraph: {
    title: 'Free Real Estate Name Generator — AI-Powered Realty & Property Names',
    description: 'Generate professional real estate business names with AI. Logo, colors, tagline, domain check — all in one. Free to start.',
    url: 'https://brandforge-phi-pearl.vercel.app/real-estate-name-generator',
    siteName: 'BrandForge',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Real Estate Name Generator — AI-Powered Realty & Property Names',
    description: 'Generate professional real estate business names with AI. Logo, colors, tagline, domain check — all in one.',
  },
  alternates: {
    canonical: 'https://brandforge-phi-pearl.vercel.app/real-estate-name-generator',
  },
  robots: { index: true, follow: true },
}

const EXAMPLE_NAMES = [
  { name: 'Keystone Realty', tagline: 'The foundation of your future', style: 'Classic & Trustworthy', domain: 'keystonerealty.com', color: '#1E3A5F' },
  { name: 'VistaHaven', tagline: 'See your next chapter', style: 'Modern & Inviting', domain: 'vistahaven.com', color: '#2D8B4E' },
  { name: 'Meridian Properties', tagline: 'Where location meets lifestyle', style: 'Premium & Established', domain: 'meridianproperties.com', color: '#8B6914' },
  { name: 'Crestview Group', tagline: 'Elevated living, elevated standards', style: 'Upscale & Bold', domain: 'crestviewgroup.com', color: '#4A5899' },
  { name: 'Homeward & Co.', tagline: 'Bringing you home', style: 'Warm & Approachable', domain: 'homewardco.com', color: '#C45B28' },
  { name: 'Atlas Estates', tagline: 'Mapping your next move', style: 'Strong & Authoritative', domain: 'atlasestates.com', color: '#3D3D3D' },
]

const CATEGORIES = [
  { name: 'Residential Brokerage', desc: 'Names that feel like home — warm, trustworthy, and local' },
  { name: 'Commercial Real Estate', desc: 'Professional, authoritative names for B2B property deals' },
  { name: 'Property Management', desc: 'Reliable, service-oriented names that signal dependability' },
  { name: 'Luxury Real Estate', desc: 'Sophisticated, aspirational names for high-end markets' },
  { name: 'Real Estate Investment', desc: 'Strategic, growth-oriented names for portfolio builders' },
  { name: 'Relocation Services', desc: 'Helpful, welcoming names for people starting fresh' },
  { name: 'Vacation & Short-Term Rental', desc: 'Memorable, inviting names for property platforms' },
  { name: 'Real Estate Technology', desc: 'Modern, innovative names for PropTech ventures' },
]

const NAMING_TIPS = [
  {
    title: 'Emphasize trust and stability',
    description: 'Real estate is the biggest financial decision most people make. Your name should instantly convey reliability — words like "trust," "stone," "key," and "foundation" work well.',
  },
  {
    title: 'Include location hints',
    description: 'Names with geographic references (Hillside, Coastal, Urban) instantly signal where you operate. This helps with local SEO and builds regional credibility.',
  },
  {
    title: 'Think about your specialty',
    description: 'A luxury brokerage needs a different name than a property management firm. Choose a name that matches your market position — upscale names don\'t work for budget rentals and vice versa.',
  },
  {
    title: 'Keep it easy to spell and say',
    description: 'Real estate clients often hear about you through word of mouth. If they can\'t spell your name from hearing it, you\'ll lose referrals and search traffic.',
  },
  {
    title: 'Check domain availability early',
    description: 'The .com domain is non-negotiable for real estate businesses. BrandForge checks .com, .co, .io, and more in real time so you don\'t fall in love with an unavailable name.',
  },
  {
    title: 'Consider future expansion',
    description: 'Starting with residential? You might add commercial later. Pick a name that doesn\'t box you into one niche — "Summit Properties" beats "Downtown Condos LLC."',
  },
]

const FAQ_ITEMS = [
  {
    q: 'How does the real estate name generator work?',
    a: 'Describe your real estate business — your specialty, target market, and the vibe you want. BrandForge\'s AI analyzes your description and generates custom name suggestions paired with complete brand kits including logo concepts, color palettes, taglines, and domain availability checks.',
  },
  {
    q: 'Is the real estate name generator free?',
    a: 'Yes! Generate real estate name ideas for free — 5 suggestions per search, unlimited searches, no credit card required. Unlock the full brand kit (logo, colors, tagline, typography, domain checks) for $9 per brand kit.',
  },
  {
    q: 'What makes a good real estate business name?',
    a: 'A strong real estate name conveys trust, expertise, and local connection. It should be easy to spell (critical for referrals), have an available .com domain, and reflect your market position — luxury, family-friendly, commercial, or tech-forward.',
  },
  {
    q: 'Can I use these names for my real estate brokerage?',
    a: 'Absolutely. All names generated are yours to use commercially — for business registration, brokerage licensing, trademarks, domain purchases, and marketing. There are no licensing or usage restrictions.',
  },
  {
    q: 'Should I use "Realty," "Properties," or "Group" in my name?',
    a: 'It depends on your positioning. "Realty" signals traditional brokerage services, "Properties" feels premium and established, "Group" suggests a larger organization or portfolio approach, and "Homes" feels warm and residential. Mix and match during generation to see what fits.',
  },
  {
    q: 'How do I check if a real estate name is already trademarked?',
    a: 'BrandForge checks domain and social media availability. For trademark protection, search the USPTO database at uspto.gov. We recommend checking trademarks before registering your business — this is separate from domain availability.',
  },
  {
    q: 'What domain extensions work best for real estate?',
    a: 'For real estate, .com is the gold standard. Secondary options include .co, .realestate, and .property. For local brokerages, a .com with your city name (e.g., austinhomes.com) is ideal for both credibility and local SEO.',
  },
  {
    q: 'Can I generate names for a specific type of real estate business?',
    a: 'Yes. Just describe your focus — whether it\'s residential sales, commercial leasing, property management, luxury markets, vacation rentals, or PropTech. BrandForge tailors every suggestion to your specific niche and audience.',
  },
]

export default function RealEstateNameGeneratorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'BrandForge Real Estate Name Generator',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description: 'AI-powered real estate name generator with complete brand kits including logos, colors, taglines, and domain availability.',
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
          { '@type': 'ListItem', position: 2, name: 'Real Estate Name Generator', item: 'https://brandforge-phi-pearl.vercel.app/real-estate-name-generator' },
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
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-medium text-emerald-700">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            AI-Powered Real Estate Naming
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Real Estate Name Generator
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Generate professional real estate business names with AI. Describe your brokerage, get name suggestions with complete brand kits — logo concepts, color palettes, taglines, and domain availability. Free to start.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="btn-primary inline-flex items-center gap-2 text-base px-8 py-3"
            >
              Generate Real Estate Names
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
              Names for Every Real Estate Niche
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              Whether you&apos;re launching a residential brokerage, commercial firm, or PropTech startup — we generate names that fit.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((cat) => (
              <div key={cat.name} className="rounded-xl border border-slate-200 p-5 hover:border-emerald-300 hover:shadow-sm transition-all">
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
              Real Estate Names, Generated in Seconds
            </h2>
            <p className="mt-3 text-slate-500">
              Each name comes with a complete brand kit — not just a name on its own.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {EXAMPLE_NAMES.map((item) => (
              <div key={item.name} className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-emerald-200">
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
            These are real examples — your results will be tailored to your specific real estate business.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              How to Name Your Real Estate Business with AI
            </h2>
          </div>
          <div className="space-y-8">
            {[
              { step: '1', title: 'Describe your real estate business', desc: 'Tell us your specialty — residential, commercial, luxury, property management, or PropTech. Describe your target market and the feeling you want your name to evoke.' },
              { step: '2', title: 'Get tailored name suggestions', desc: 'BrandForge generates 5 unique real estate names per search, each with a matching tagline, color palette, and logo concept. Every name is designed to build trust and attract your ideal clients.' },
              { step: '3', title: 'Check domain & social availability', desc: 'Every name comes with real-time checks for .com, .co, .io, and more — plus social media handle availability. Essential for real estate, where your online presence drives leads.' },
              { step: '4', title: 'Download your brand kit', desc: 'Unlock the full brand kit: logo concept, 5-color palette with hex codes, tagline, typography, and a downloadable PDF brand guidelines document you can hand to designers.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-lg">
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
              Tips for Naming Your Real Estate Business
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              In real estate, your name is your first impression. Here&apos;s how to make it count.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {NAMING_TIPS.map((tip) => (
              <div key={tip.title} className="rounded-xl border border-slate-200 bg-white p-6 hover:border-emerald-200 transition-colors">
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
                <summary className="flex cursor-pointer items-center justify-between p-5 text-base font-medium text-slate-900 hover:text-emerald-600">
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
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to Name Your Real Estate Business?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Describe your brokerage or firm. Get names with brand kits. Free to start, $9 per brand kit you love.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-semibold text-emerald-700 shadow-lg hover:bg-gray-50 transition-colors"
            >
              Generate Real Estate Names
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


      {/* Blog Links */}
      <IndustryBlogLinks industry="real-estate-name-generator" />
      {/* Internal Links */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold text-slate-900 mb-6">More Name Generators</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/startup-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-emerald-300 hover:text-emerald-600 transition-colors">
              🚀 Startup Name Generator
            </Link>
            <Link href="/restaurant-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-emerald-300 hover:text-emerald-600 transition-colors">
              🍽️ Restaurant Name Generator
            </Link>
            <Link href="/fitness-brand-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-emerald-300 hover:text-emerald-600 transition-colors">
              💪 Fitness Brand Name Generator
            </Link>
            <Link href="/photography-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-emerald-300 hover:text-emerald-600 transition-colors">
              📸 Photography Name Generator
            </Link>
            <Link href="/beauty-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-emerald-300 hover:text-emerald-600 transition-colors">
              💄 Beauty Name Generator
            </Link>
            <Link href="/fashion-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-emerald-300 hover:text-emerald-600 transition-colors">
              👗 Fashion Name Generator
            </Link>
            <Link href="/food-truck-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-emerald-300 hover:text-emerald-600 transition-colors">
              🚚 Food Truck Name Generator
            </Link>
            <Link href="/tech-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-emerald-300 hover:text-emerald-600 transition-colors">
              💻 Tech Name Generator
            </Link>
            <Link href="/consulting-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-emerald-300 hover:text-emerald-600 transition-colors">
              💼 Consulting Name Generator
            </Link>
            <Link href="/podcast-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-emerald-300 hover:text-emerald-600 transition-colors">
              🎙️ Podcast Name Generator
            </Link>
            <Link href="/coaching-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-emerald-300 hover:text-emerald-600 transition-colors">
              🧭 Coaching Name Generator
            </Link>
            <Link href="/nonprofit-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-emerald-300 hover:text-emerald-600 transition-colors">
              🌍 Nonprofit Name Generator
            </Link>
            <Link href="/craft-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-emerald-300 hover:text-emerald-600 transition-colors">
              🧶 Craft Name Generator
            </Link>
            <Link href="/education-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-emerald-300 hover:text-emerald-600 transition-colors">
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
            <Link href="/landscaping-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-orange-300 hover:text-orange-600 transition-colors">
              🌿 Landscaping Name Generator
            </Link>
            <Link href="/salon-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-pink-300 hover:text-pink-600 transition-colors">
              💇 Salon Name Generator
            </Link>
            <Link href="/construction-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              Construction Name Generator
            </Link>
            <Link href="/marketing-agency-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              📈 Marketing Agency Name Generator
            </Link>
<Link href="/compare" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-emerald-300 hover:text-emerald-600 transition-colors">
              📊 Compare Name Generators
            </Link>
            <Link href="/examples" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-emerald-300 hover:text-emerald-600 transition-colors">
              ✨ Brand Kit Examples
            </Link>          </div>
        </div>
      </section>
    </>
  )
}