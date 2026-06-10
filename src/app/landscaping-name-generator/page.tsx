import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free Landscaping Business Name Generator — AI-Powered Lawn Care & Landscape Business Names',
  description: 'Generate landscaping business names with AI. Get a complete brand kit including logo concepts, color palettes, taglines, and domain availability checks. Free to start — no credit card required.',
  keywords: [
    'landscaping name generator',
    'landscaping business names',
    'lawn care name ideas',
    'landscape company names',
    'lawn care business names',
    'landscaping company name ideas',
    'how to name a landscaping business',
    'lawn service name generator',
    'landscape design business names',
    'yard maintenance business names',
    'garden design business names',
    'hardscape business names',
  ],
  openGraph: {
    title: 'Free Landscaping Business Name Generator — AI-Powered Lawn & Landscape Names',
    description: 'Generate landscaping business names with AI. Logo, colors, tagline, domain check — all in one. Free to start.',
    url: 'https://brandforge-phi-pearl.vercel.app/landscaping-name-generator',
    siteName: 'BrandForge',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Landscaping Business Name Generator — AI-Powered Landscape Business Names',
    description: 'Generate landscaping business names with AI. Logo, colors, tagline, domain check — all in one.',
  },
  alternates: {
    canonical: 'https://brandforge-phi-pearl.vercel.app/landscaping-name-generator',
  },
}

const EXAMPLE_NAMES = [
  { name: 'Greenridge Landscapes', tagline: 'Elevating outdoor living', style: 'Premium & Established', domain: 'greenridgelandscapes.com', color: '#166534' },
  { name: 'Root & Stone', tagline: 'Where nature meets craft', style: 'Artisan & Modern', domain: 'rootandstone.com', color: '#78350F' },
  { name: 'Verdant Edge', tagline: 'Sharp lines, living spaces', style: 'Contemporary & Bold', domain: 'verdantedge.com', color: '#065F46' },
  { name: 'Cedar & Turf Co.', tagline: 'From soil to skyline', style: 'Warm & Approachable', domain: 'cedarandturf.com', color: '#92400E' },
  { name: 'Hearthside Outdoor', tagline: 'Yards worth coming home to', style: 'Homey & Trusted', domain: 'hearthsideoutdoor.com', color: '#1E3A5F' },
  { name: 'Canopy Works', tagline: 'Shaping the outdoors', style: 'Clean & Professional', domain: 'canopyworks.com', color: '#155E75' },
]

const CATEGORIES = [
  { name: 'Residential Lawn Care', desc: 'Friendly, reliable names for mowing, edging, and yard maintenance' },
  { name: 'Landscape Design & Architecture', desc: 'Sophisticated, creative names for design-focused landscape firms' },
  { name: 'Hardscaping & Outdoor Living', desc: 'Strong, structural names for patios, walls, fire pits, and outdoor rooms' },
  { name: 'Tree Service & Arbor Care', desc: 'Trustworthy, skilled names for tree trimming, removal, and arborist services' },
  { name: 'Irrigation & Water Features', desc: 'Fresh, flowing names for sprinkler systems, ponds, and water features' },
  { name: 'Garden Design & Maintenance', desc: 'Elegant, natural names for planting, garden beds, and seasonal color' },
  { name: 'Commercial Landscaping', desc: 'Professional, large-scale names for property management and HOA contracts' },
  { name: 'Snow & Seasonal Services', desc: 'Reliable, all-season names for plowing, salting, and year-round maintenance' },
]

const NAMING_TIPS = [
  {
    title: 'Signal your specialty',
    description: '"Landscaping" covers everything from mowing lawns to designing outdoor kitchens. Your name should hint at your lane. "Root & Stone" suggests hardscaping expertise. "Greenridge Landscapes" says full-service design. Don\'t be vague — be specific to what you actually do best.',
  },
  {
    title: 'Think Google Maps first',
    description: 'Most landscaping clients search "landscaping near me" or "lawn care [city]." Your name needs to be easy to spell in a search bar and memorable enough for neighbors to recommend. Short, clear names win. "Canopy Works" is easier to find than "Evergreen Oasis Landscape & Design Associates."',
  },
  {
    title: 'Test it on a truck',
    description: 'Your name goes on truck doors, trailers, and yard signs before it goes anywhere else. It needs to read well at 45 mph on a busy road. High contrast, short words, no fancy fonts required. "Cedar & Turf" looks great on a white truck.',
  },
  {
    title: 'Match your price point',
    description: 'A $50/month mowing route needs a different name than a $50K landscape architecture firm. "Greenridge" feels high-end. "Hearthside" feels warm and approachable. Your name should set the right expectation before the first estimate.',
  },
  {
    title: 'Consider seasonal expansion',
    description: 'If you mow lawns in summer, you might plow snow in winter. Names like "Green & Grow" lock you into warm weather. "Verdant Edge" works year-round. Think about your 5-year plan before committing to a name.',
  },
  {
    title: 'Claim your digital ground',
    description: 'Landscaping is a local business — your Google Business Profile, Yelp, and Facebook presence matters as much as your truck. BrandForge checks domain and social handle availability in real-time so you can secure a consistent brand identity before registering your LLC.',
  },
]

const FAQ_ITEMS = [
  {
    q: 'How does the landscaping business name generator work?',
    a: 'Describe your landscaping business — your service type (lawn care, landscape design, hardscaping, tree service, irrigation, garden design, commercial, seasonal), your market position (premium, budget, mid-range), and your ideal customer (homeowners, property managers, HOAs, commercial buildings). BrandForge\'s AI generates custom name suggestions paired with complete brand kits including logo concepts, color palettes, taglines, and domain/social availability checks.',
  },
  {
    q: 'Is the landscaping business name generator free?',
    a: 'Yes! You can generate landscaping name ideas for free — 5 suggestions per search, unlimited searches, no credit card required. Unlock the full brand kit (logo, colors, tagline, typography, domain & social checks) for $9 per brand kit.',
  },
  {
    q: 'What makes a good landscaping business name?',
    a: 'A great landscaping name signals reliability and craftsmanship — it should make homeowners feel confident letting you transform their property. Words like "Ridge," "Stone," "Canopy," and "Root" evoke the outdoors without being generic. The best names are easy to spell in a Google search and look great on a truck or yard sign.',
  },
  {
    q: 'Should I include "landscaping" in my business name?',
    a: 'For most lawn care and maintenance businesses, yes — "landscaping" helps with Google Maps discoverability and immediately tells people what you do. But if you focus on design or hardscaping, a broader name like "Root & Stone" or "Verdant Edge" can convey more sophistication and leave room to grow beyond basic lawn care.',
  },
  {
    q: 'Can I use these names for my landscaping business?',
    a: 'Absolutely. All names you generate are yours to use commercially — for business registration, LLC filing, truck lettering, yard signs, domain purchases, social media, and marketing. There are no licensing restrictions.',
  },
  {
    q: 'What if I want names for a specific landscaping niche?',
    a: 'Just describe your niche in the prompt. Whether it\'s residential lawn maintenance, high-end landscape architecture, hardscaping and outdoor living, tree service, irrigation systems, or commercial property management — BrandForge tailors suggestions to your exact service, positioning, and ideal customer.',
  },
  {
    q: 'How important is a matching domain for landscaping businesses?',
    a: 'Very. Landscaping clients find you through Google Maps, Yelp, and neighborhood recommendations — and they\'ll search you online before calling. A matching .com or .landscaping domain builds trust instantly. BrandForge checks domain availability in real-time.',
  },
  {
    q: 'What comes in the brand kit for each name?',
    a: 'Each brand kit includes: a logo concept (text-based with font pairing), a 5-color palette with hex codes, a custom tagline, typography recommendations, and real-time availability checks for domains and social handles. You can download it all as a PDF brand guidelines document.',
  },
]

export default function LandscapingNameGeneratorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'BrandForge Landscaping Business Name Generator',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description: 'AI-powered landscaping business name generator with complete brand kits including logos, colors, taglines, and domain/social availability.',
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
          { '@type': 'ListItem', position: 2, name: 'Landscaping Business Name Generator', item: 'https://brandforge-phi-pearl.vercel.app/landscaping-name-generator' },
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
        <div className="absolute inset-0 bg-gradient-to-br from-green-800 via-emerald-700 to-green-600" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1.5 text-sm font-medium text-green-700">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
            AI-Powered Landscape Naming
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Landscaping Business Name Generator
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-green-100">
            Generate landscaping business names with AI. Describe your service, get name suggestions with complete brand kits — logo concepts, color palettes, taglines, and domain availability. Free to start.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="btn-primary inline-flex items-center gap-2 text-base px-8 py-3"
            >
              Generate Landscaping Names
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
          <p className="mt-4 text-sm text-green-200">Free • No credit card required • Results in seconds</p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Names for Every Landscaping Service
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              From neighborhood lawn care to high-end landscape architecture — we generate names that feel trustworthy, professional, and impossible to forget.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((cat) => (
              <div key={cat.name} className="rounded-xl border border-slate-200 p-5 hover:border-green-300 hover:shadow-sm transition-all">
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
              Landscaping Names, Generated in Seconds
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
            These are real examples — your results will be tailored to your specific landscaping business.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              How to Name Your Landscaping Business with AI
            </h2>
          </div>
          <div className="space-y-8">
            {[
              { step: '1', title: 'Describe your service', desc: 'Tell us your landscaping business type — residential lawn care, landscape design & architecture, hardscaping & outdoor living, tree service, irrigation, garden design, commercial landscaping, or seasonal services. Describe your positioning (premium, budget, mid-range) and who your ideal customer is.' },
              { step: '2', title: 'Get tailored name suggestions', desc: 'BrandForge generates 5 unique landscaping names per search, each with a matching tagline, color palette, and logo concept. Every name feels natural and professional — no generic "Green Guys" here.' },
              { step: '3', title: 'Check domain & social availability', desc: 'Every name comes with real-time checks for .com, .landscaping, .services, and more — plus Instagram, Facebook, and social media handle availability. Essential for landscaping businesses that get found on Google Maps and Yelp.' },
              { step: '4', title: 'Download your brand kit', desc: 'Unlock the full brand kit: logo concept, 5-color palette with hex codes, tagline, typography recommendations, and a downloadable PDF brand guidelines document ready for your truck wraps, yard signs, website, and estimates.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-700 text-white font-bold text-lg">
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
              Tips for Naming Your Landscaping Business
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              In the landscaping industry, your name is on every truck, yard sign, and Google Maps listing. Here&apos;s how to make it work for you.
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
      <section className="py-16 bg-gradient-to-br from-green-800 to-emerald-600">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to Name Your Landscaping Business?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Describe your service. Get names with brand kits. Free to start, $9 per brand kit you love.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-semibold text-green-800 shadow-lg hover:bg-gray-50 transition-colors"
            >
              Generate Landscaping Names
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
            <Link href="/fitness-brand-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-green-300 hover:text-green-600 transition-colors">
              💪 Fitness Name Generator
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
              📊 Consulting Name Generator
            </Link>
            <Link href="/podcast-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-green-300 hover:text-green-600 transition-colors">
              🎙️ Podcast Name Generator
            </Link>
            <Link href="/coaching-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-green-300 hover:text-green-600 transition-colors">
              💡 Coaching Name Generator
            </Link>
            <Link href="/nonprofit-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-green-300 hover:text-green-600 transition-colors">
              🌍 Nonprofit Name Generator
            </Link>
            <Link href="/craft-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-green-300 hover:text-green-600 transition-colors">
              ✂️ Craft Name Generator
            </Link>
            <Link href="/education-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-green-300 hover:text-green-600 transition-colors">
              📚 Education Name Generator
            </Link>
            <Link href="/yoga-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-green-300 hover:text-green-600 transition-colors">
              🧘 Yoga Name Generator
            </Link>
            <Link href="/coffee-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-green-300 hover:text-green-600 transition-colors">
              ☕ Coffee Name Generator
            </Link>
            <Link href="/music-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-green-300 hover:text-green-600 transition-colors">
              🎵 Music Name Generator
            </Link>
            <Link href="/wedding-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-green-300 hover:text-green-600 transition-colors">
              💍 Wedding Name Generator
            </Link>
            <Link href="/cleaning-business-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-green-300 hover:text-green-600 transition-colors">
              🧹 Cleaning Name Generator
            </Link>
            <Link href="/pet-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-green-300 hover:text-green-600 transition-colors">
            <Link href="/landscaping-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-green-300 hover:text-green-600 transition-colors">
              🌿 Landscaping Name Generator
            </Link>
            <Link href="/landscaping-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-green-300 hover:text-green-600 transition-colors">
              🌿 Landscaping Name Generator
            </Link>
              🐾 Pet Name Generator
            </Link>
            <Link href="/compare" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-green-300 hover:text-green-600 transition-colors">
              📊 Compare Name Generators
            </Link>
            <Link href="/examples" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-green-300 hover:text-green-600 transition-colors">
              ✨ Brand Kit Examples
            </Link>
            <Link href="/blog/how-to-choose-business-name" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-green-300 hover:text-green-600 transition-colors">
              📖 How to Choose a Business Name
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}