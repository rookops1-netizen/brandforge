import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free Tech Name Generator — AI-Powered Tech Startup & SaaS Business Names',
  description: 'Generate creative tech startup names with AI. Get a complete brand kit including logo concepts, color palettes, taglines, and domain availability checks. Free to start — no credit card required.',
  keywords: [
    'tech name generator',
    'tech startup names',
    'SaaS name generator',
    'tech company names',
    'technology business names',
    'app name generator',
    'software name ideas',
    'tech brand names',
    'AI startup name generator',
    'tech startup name ideas',
    'cool tech names',
    'clever tech company names',
    'how to name a tech startup',
    'tech naming guide',
    'product name generator for tech',
  ],
  openGraph: {
    title: 'Free Tech Name Generator — AI-Powered Tech Startup & SaaS Names',
    description: 'Generate creative tech startup names with AI. Logo, colors, tagline, domain check — all in one. Free to start.',
    url: 'https://brandforge-phi-pearl.vercel.app/tech-name-generator',
    siteName: 'BrandForge',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Tech Name Generator — AI-Powered Tech Startup & SaaS Names',
    description: 'Generate creative tech startup names with AI. Logo, colors, tagline, domain check — all in one.',
  },
  alternates: {
    canonical: 'https://brandforge-phi-pearl.vercel.app/tech-name-generator',
  },
  robots: { index: true, follow: true },
}

const EXAMPLE_NAMES = [
  { name: 'Nexora', tagline: 'Infrastructure that scales with you', style: 'Modern & Abstract', domain: 'nexora.io', color: '#6366F1' },
  { name: 'Pulseway', tagline: 'Real-time insights, one pulse at a time', style: 'Dynamic & Motion-Oriented', domain: 'pulseway.io', color: '#0EA5E9' },
  { name: 'Vaultik', tagline: 'Secure by design, simple by nature', style: 'Bold & Disruptive', domain: 'vaultik.com', color: '#7C3AED' },
  { name: 'SyncLab', tagline: 'Where data meets decisions', style: 'Clean & Technical', domain: 'synclab.io', color: '#14B8A6' },
  { name: 'Oridia', tagline: 'Orchestrate your operations', style: 'Elegant & Enterprise', domain: 'oridia.com', color: '#2563EB' },
  { name: 'Formstack', tagline: 'Build workflows that work', style: 'Practical & Approachable', domain: 'formstack.io', color: '#059669' },
]

const CATEGORIES = [
  { name: 'SaaS & Cloud', desc: 'Scalable, modern names that signal reliability and growth' },
  { name: 'AI & Machine Learning', desc: 'Intelligent, forward-thinking names with a tech edge' },
  { name: 'Cybersecurity', desc: 'Strong, secure names that build instant trust' },
  { name: 'FinTech', desc: 'Sharp, credible names that bridge finance and technology' },
  { name: 'DevTools & Infrastructure', desc: 'Clean, technical names developers respect and adopt' },
  { name: 'HealthTech', desc: 'Caring yet innovative names that merge health and tech' },
  { name: 'EdTech', desc: 'Approachable, inspiring names that promote learning' },
  { name: 'Marketplace & Platform', desc: 'Connecting, dynamic names that signal scale and community' },
]

const NAMING_TIPS = [
  {
    title: 'Aim for .io or .ai domains',
    description: 'Tech startups have embraced .io and .ai as de facto standards. "Nexora.io" signals tech credibility better than "NexoraLLC.com." BrandForge checks multiple domain extensions so you can pick the one that fits your audience.',
  },
  {
    title: 'Keep it under 8 characters',
    description: 'The best tech names are short: Stripe, Notion, Vercel, Figma. Short names are easier to type in a terminal, fit in app icons, and stick in developer minds. If you can\'t say it in one breath, shorten it.',
  },
  {
    title: 'Use metaphor over description',
    description: '"CloudStoragePro" is forgettable. "Vaultik" is memorable. The best tech names use abstract or metaphorical language — they hint at what you do without spelling it out. This gives your brand room to evolve.',
  },
  {
    title: 'Check GitHub and npm before committing',
    description: 'A name that\'s already taken on GitHub, npm, PyPI, or Docker Hub will cause confusion. BrandForge checks social handles, but also search these platforms. A clean developer ecosystem presence matters.',
  },
  {
    title: 'Think about your HN moment',
    description: 'Imagine launching on Hacker News or Product Hunt. Does your name sound like a real product? Does it stand out in a list of 20 other launches? The best tech names generate curiosity clicks.',
  },
  {
    title: 'Test with your technical audience',
    description: 'Developers and CTOs are your toughest naming critics. They hate generic names ("Tech Solutions Inc.") and love clever ones. Share your top 3 with your target users — their gut reactions are gold.',
  },
]

const FAQ_ITEMS = [
  {
    q: 'How does the tech name generator work?',
    a: 'Describe your tech product or startup — your category (SaaS, AI, fintech, devtools), target user (developers, enterprises, consumers), and brand personality (minimal, bold, playful, enterprise). BrandForge\'s AI generates custom name suggestions paired with complete brand kits including logo concepts, color palettes, taglines, and domain/social availability checks.',
  },
  {
    q: 'Is the tech name generator free?',
    a: 'Yes! You can generate tech name ideas for free — 5 suggestions per search, unlimited searches, no credit card required. Unlock the full brand kit (logo, colors, tagline, typography, domain & social checks) for $9 per brand kit.',
  },
  {
    q: 'What makes a good tech startup name?',
    a: 'A great tech name is short (under 8 characters), memorable, works as a .io or .ai domain, and doesn\'t conflict with existing GitHub/npm packages. It should sound like a product people want to try, pass the "Hacker News test" (would you click on it?), and give your brand room to pivot as you find product-market fit.',
  },
  {
    q: 'Should I use .com, .io, or .ai for my tech startup?',
    a: 'It depends on your audience. .io is the standard for developer tools and SaaS. .ai signals artificial intelligence. .com is best if you\'re targeting enterprises or non-technical users. BrandForge checks all three, so you can choose based on your audience, not domain availability.',
  },
  {
    q: 'Can I use these names for my tech startup?',
    a: 'Absolutely. All names you generate are yours to use commercially — for company registration, branding, domain purchases, App Store listings, and GitHub organizations. There are no licensing restrictions.',
  },
  {
    q: 'What if I want names for a specific tech niche?',
    a: 'Just describe your niche in the prompt. Whether it\'s an AI code assistant, a fintech API platform, a cybersecurity dashboard, or a devops tool — BrandForge tailors suggestions to your exact product and target users.',
  },
  {
    q: 'How important is social handle availability for tech startups?',
    a: 'Critical. Your GitHub org, Twitter handle, and Product Hunt profile are your storefront. A consistent @YourName across platforms builds credibility and makes it easy for developers, investors, and journalists to find you. BrandForge checks all major platforms.',
  },
  {
    q: 'What comes in the brand kit for each name?',
    a: 'Each brand kit includes: a logo concept (text-based with font pairing), a 5-color palette with hex codes, a custom tagline, typography recommendations, and real-time availability checks for domains and social handles. You can download it all as a PDF brand guidelines document.',
  },
]

export default function TechNameGeneratorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'BrandForge Tech Name Generator',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description: 'AI-powered tech startup name generator with complete brand kits including logos, colors, taglines, and domain/social availability.',
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
          { '@type': 'ListItem', position: 2, name: 'Tech Name Generator', item: 'https://brandforge-phi-pearl.vercel.app/tech-name-generator' },
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
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-50" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-700">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 14.5M14.25 3.104c.251.023.501.05.75.082M19.8 14.5l-1.48-1.481a2.25 2.25 0 01-.658-1.59V8.432m0 0a25.04 25.04 0 00-1.162-.934m0 0a24.3 24.3 0 00-4.5 0m0 0c-.382.285-.772.6-1.162.934" />
            </svg>
            AI-Powered Tech Naming
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Tech Name Generator
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Generate creative tech startup names with AI. Describe your product, get name suggestions with complete brand kits — logo concepts, color palettes, taglines, and domain availability. Free to start.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="btn-primary inline-flex items-center gap-2 text-base px-8 py-3"
            >
              Generate Tech Names
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
              Names for Every Tech Category
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              From SaaS and AI to cybersecurity and fintech — we generate names that developers respect and investors remember.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((cat) => (
              <div key={cat.name} className="rounded-xl border border-slate-200 p-5 hover:border-indigo-300 hover:shadow-sm transition-all">
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
              Tech Names, Generated in Seconds
            </h2>
            <p className="mt-3 text-slate-500">
              Each name comes with a complete brand kit — not just a name on its own.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {EXAMPLE_NAMES.map((item) => (
              <div key={item.name} className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-indigo-200">
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
            These are real examples — your results will be tailored to your specific tech product or startup.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              How to Name Your Tech Startup with AI
            </h2>
          </div>
          <div className="space-y-8">
            {[
              { step: '1', title: 'Describe your tech product', desc: 'Tell us your category — SaaS, AI, fintech, devtools, cybersecurity. Describe your target user (developers, enterprises, consumers) and brand personality (minimal, bold, playful, enterprise).' },
              { step: '2', title: 'Get tailored name suggestions', desc: 'BrandForge generates 5 unique tech names per search, each with a matching tagline, color palette, and logo concept. Every name is designed to resonate with your target users and stand out on Product Hunt.' },
              { step: '3', title: 'Check domain & social availability', desc: 'Every name comes with real-time checks for .com, .io, .ai, .co, and more — plus GitHub, Twitter, and social media handle availability. Critical for tech startups that live online.' },
              { step: '4', title: 'Download your brand kit', desc: 'Unlock the full brand kit: logo concept, 5-color palette with hex codes, tagline, typography recommendations, and a downloadable PDF brand guidelines document ready for your landing page.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 text-white font-bold text-lg">
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
              Tips for Naming Your Tech Startup
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              In tech, your name is your first feature. Here&apos;s how to make it count.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {NAMING_TIPS.map((tip) => (
              <div key={tip.title} className="rounded-xl border border-slate-200 bg-white p-6 hover:border-indigo-200 transition-colors">
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
                <summary className="flex cursor-pointer items-center justify-between p-5 text-base font-medium text-slate-900 hover:text-indigo-600">
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
      <section className="py-16 bg-gradient-to-br from-indigo-600 to-blue-600">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to Name Your Tech Startup?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Describe your product. Get names with brand kits. Free to start, $9 per brand kit you love.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-semibold text-indigo-700 shadow-lg hover:bg-gray-50 transition-colors"
            >
              Generate Tech Names
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
            <Link href="/startup-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors">
              🚀 Startup Name Generator
            </Link>
            <Link href="/restaurant-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors">
              🍽️ Restaurant Name Generator
            </Link>
            <Link href="/fitness-brand-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors">
              💪 Fitness Brand Name Generator
            </Link>
            <Link href="/real-estate-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors">
              🏠 Real Estate Name Generator
            </Link>
            <Link href="/photography-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors">
              📸 Photography Name Generator
            </Link>
            <Link href="/beauty-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors">
              💄 Beauty Name Generator
            </Link>
            <Link href="/fashion-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors">
              👗 Fashion Name Generator
            </Link>
            <Link href="/food-truck-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors">
              🚚 Food Truck Name Generator
            </Link>
            <Link href="/consulting-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors">
              💼 Consulting Name Generator
            </Link>
            <Link href="/podcast-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors">
              🎙️ Podcast Name Generator
            </Link>
            <Link href="/coaching-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors">
              🧭 Coaching Name Generator
            </Link>
            <Link href="/nonprofit-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors">
              🌍 Nonprofit Name Generator
            </Link>
            <Link href="/craft-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors">
              🧶 Craft Name Generator
            </Link>
            <Link href="/education-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors">
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
<Link href="/compare" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors">
              📊 Compare Name Generators
            </Link>
            <Link href="/examples" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors">
              ✨ Brand Kit Examples
            </Link>
            <Link href="/blog/how-to-choose-business-name" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors">
              📖 How to Choose a Business Name
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}