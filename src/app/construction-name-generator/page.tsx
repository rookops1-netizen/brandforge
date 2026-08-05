import type { Metadata } from 'next'
import Link from 'next/link'
import { IndustryPageSchema } from '@/components/IndustryPageSchema'
import { IndustryBlogLinks } from '@/components/IndustryBlogLinks'

export const metadata: Metadata = {
  title: 'Free Construction Business Name Generator — AI-Powered Contractor & Builder Names',
  description: 'Generate construction business names with AI. Get a complete brand kit including logo concepts, color palettes, taglines, and domain availability checks. Free to start — no credit card required.',
  keywords: [
    'construction name generator',
    'construction business names',
    'contractor name ideas',
    'builder name generator',
    'construction company names',
    'general contractor names',
    'home builder name ideas',
    'remodeling business names',
    'construction brand names',
    'building company names',
    'roofing business names',
    'excavation company names',
  ],
  openGraph: {
    title: 'Free Construction Business Name Generator — AI-Powered Contractor & Builder Names',
    description: 'Generate construction business names with AI. Logo, colors, tagline, domain check — all in one. Free to start.',
    url: 'https://brandforge.app/construction-name-generator',
    siteName: 'BrandForge',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Construction Business Name Generator — Contractor & Builder Names',
    description: 'Generate construction business names with AI. Logo, colors, tagline, domain check — all in one.',
  },
  alternates: {
    canonical: 'https://brandforge.app/construction-name-generator',
  },
  robots: { index: true, follow: true },
}

const EXAMPLE_NAMES = [
  { name: 'Ironclad Build', tagline: 'Built to last, built right', style: 'Strong & Traditional', domain: 'ironcladbuild.com', color: '#92400E' },
  { name: 'Summit Construction', tagline: 'Elevating standards from the ground up', style: 'Premium & Professional', domain: 'summitconstruction.com', color: '#1E3A5F' },
  { name: 'Keystone & Ridge', tagline: 'Where strength meets precision', style: 'Modern & Trustworthy', domain: 'keystoneridge.com', color: '#3B7D4F' },
  { name: 'Titan Builders', tagline: 'Big vision. Solid execution.', style: 'Bold & Authoritative', domain: 'titanbuilders.com', color: '#7C2D12' },
  { name: 'Cornerstone Craft', tagline: 'Detail makes the difference', style: 'Artisan & Quality-Focused', domain: 'cornerstonecraft.com', color: '#78350F' },
  { name: 'Apex Grading & Build', tagline: 'From dirt to done', style: 'Operational & Direct', domain: 'apexgrading.com', color: '#4C1D95' },
]

const CATEGORIES = [
  { name: 'General Contracting', desc: 'Strong, reliable names for full-service construction firms' },
  { name: 'Home Building & Development', desc: 'Premium names for residential builders and developers' },
  { name: 'Remodeling & Renovation', desc: 'Creative names for renovation and home improvement companies' },
  { name: 'Roofing', desc: 'Trustworthy names for roofing contractors and companies' },
  { name: 'Excavation & Grading', desc: 'Tough, precise names for site work and earth-moving businesses' },
  { name: 'Commercial Construction', desc: 'Professional names for large-scale commercial builders' },
  { name: 'Electrical & Plumbing', desc: 'Dependable names for trade subcontractors' },
  { name: 'Concrete & Masonry', desc: 'Solid, enduring names for concrete and masonry specialists' },
]

const NAMING_TIPS = [
  {
    title: 'Lead with trust',
    description: 'Construction is a trust business. Clients are spending thousands or hundreds of thousands — they need to feel confident before the first call. Names that convey solidity, precision, and reliability ("Ironclad Build," "Summit Construction") win over clever or trendy names. Trust isn\'t optional in this industry — it\'s everything.',
  },
  {
    title: 'Win the Google Maps game',
    description: 'Most construction clients search "contractor near me" or "roofing company [city]." Your name needs to be readable, spellable, and memorable on Google Maps, Yelp, and Angi. Include your trade ("Roofing," "Builders," "Construction") for local SEO, and make sure the name isn\'t easily confused with competitors in your area.',
  },
  {
    title: 'Name for your scope',
    description: 'If you\'re a general contractor, a broad name like "Summit Construction" works great. If you\'re a specialist, lean into it — "Apex Grading & Build" immediately signals what you do. Avoid names so generic that clients can\'t tell if you do roofs, remodels, or high-rises. Clarity beats cleverness.',
  },
  {
    title: 'The truck test',
    description: 'Your name will be on your truck, your trailer, your hard hat, and your job site sign. It needs to be legible from 50 feet away at 60mph. Short names with strong visual presence win. "Titan Builders" reads on a truck door. "Keystone & Ridge" works on a sign. If you need to squint, it\'s too complex.',
  },
  {
    title: 'Check licensing availability',
    description: 'Construction businesses need to register with their state licensing board. Before you commit to a name, check that it\'s available in your state\'s contractor license database and that no other licensed contractor is using it in your service area. BrandForge checks domain availability — but you need to check license databases too.',
  },
  {
    title: 'Think five years ahead',
    description: 'Starting with roofing? You might add siding, gutters, or general contracting later. Names like "Cornerstone Craft" can grow with you. Names like "Metro Roofing" lock you in. Pick a name that can expand with your services — or deliberately choose a niche name if you\'ll never add trades.',
  },
]

const FAQ_ITEMS = [
  {
    q: 'How does the construction business name generator work?',
    a: 'Describe your construction business — your trade (general contracting, home building, remodeling, roofing, excavation, commercial, electrical, concrete), your service area (local, regional, national), and your brand personality (professional, rugged, premium, approachable). BrandForge\'s AI generates custom name suggestions paired with complete brand kits including logo concepts, color palettes, taglines, and domain/social availability checks.',
  },
  {
    q: 'Is the construction name generator free?',
    a: 'Yes! You can generate construction business name ideas for free — 5 suggestions per search, unlimited searches, no credit card required. Unlock the full brand kit (logo, colors, tagline, typography, domain & social checks) for $9 per brand kit.',
  },
  {
    q: 'What makes a good construction business name?',
    a: 'A great construction name inspires trust and confidence. It should be easy to spell, easy to remember, and easy to recommend. Names that convey strength, reliability, and precision — like "Ironclad Build" or "Summit Construction" — outperform generic names like "ABC Construction" or "Smith Building Services." Your name is your first impression on a job bid.',
  },
  {
    q: 'Should I include "Construction" or "Contracting" in my name?',
    a: 'For local SEO and clarity, yes — including "Construction," "Contracting," "Builders," or your trade ("Roofing," "Grading") helps clients find you quickly and understand what you do. If you want a brand that can expand beyond one trade, consider "Summit" as your brand name and use "Summit Construction" as your legal/dba name. This gives you flexibility.',
  },
  {
    q: 'Can I use these names for my construction business?',
    a: 'Absolutely. All names you generate are yours to use commercially — for business registration, LLC filing, contractor licensing, signage, vehicle branding, social media handles, website domain, and marketing materials. There are no licensing restrictions or ongoing fees.',
  },
  {
    q: 'What if I want names for a specific construction niche?',
    a: 'Just describe your niche in the prompt. Whether it\'s luxury home building, commercial tenant improvements, roofing and gutters, concrete flatwork, excavation and grading, electrical contracting, or green/sustainable building — BrandForge tailors suggestions to your exact trade, positioning, and ideal client.',
  },
  {
    q: 'How important is a matching domain for construction businesses?',
    a: 'Critical. Construction clients search online before they call. A matching domain (yourname.com or yournameconstruction.com) builds instant credibility and makes you findable. If the .com is taken, consider .build, .contractors, or .construction TLDs. BrandForge checks domain availability in real-time.',
  },
  {
    q: 'What comes in the brand kit for each name?',
    a: 'Each brand kit includes: a logo concept (text-based with font pairing), a 5-color palette with hex codes, a custom tagline, typography recommendations, and real-time availability checks for domains and social handles. You can download it all as a PDF brand guidelines document ready for your truck wrap, business cards, website, and bid proposals.',
  },
]

export default function ConstructionNameGeneratorPage() {
  return (
    <>
      <IndustryPageSchema name="Construction Name Generator" path="/construction-name-generator" description="AI-powered construction name generator with complete brand kits including logos, colors, taglines, and domain availability." faqItems={FAQ_ITEMS} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-orange-700 to-yellow-600" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-800">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-18v18M6 7.5h3m-3 3h3m-3 3h3m6-6h3m-3 3h3m-3 3h3M6 21v-3m6 0v-3m6 0v-3" />
            </svg>
            AI-Powered Construction Naming
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Construction Business Name Generator
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-amber-100">
            Generate construction business names with AI. Describe your trade, get name suggestions with complete brand kits — logo concepts, color palettes, taglines, and domain availability. Free to start.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="btn-primary inline-flex items-center gap-2 text-base px-8 py-3"
            >
              Generate Construction Names
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
              Names for Every Construction Trade
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              From general contractors and home builders to roofers, excavators, and concrete specialists — we generate names that win bids and build trust.
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
              Construction Names, Generated in Seconds
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
            These are real examples — your results will be tailored to your specific trade and market.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              How to Name Your Construction Business with AI
            </h2>
          </div>
          <div className="space-y-8">
            {[
              { step: '1', title: 'Describe your construction business', desc: 'Tell us your trade — general contracting, home building, remodeling, roofing, excavation, commercial, electrical, or concrete. Describe your service area, your positioning (premium, mid-market, budget), and who your ideal client is (homeowners, developers, commercial property managers).' },
              { step: '2', title: 'Get tailored name suggestions', desc: 'BrandForge generates 5 unique construction names per search, each with a matching tagline, color palette, and logo concept. Every name is designed to inspire trust and attract your ideal clients — not just another "ABC Construction" in a sea of generic builders.' },
              { step: '3', title: 'Check domain & social availability', desc: 'Every name comes with real-time checks for .com, .build, .contractors, and .construction TLDs — plus social media handle availability. Essential for construction businesses that need credibility from the first search result.' },
              { step: '4', title: 'Download your brand kit', desc: 'Unlock the full brand kit: logo concept, 5-color palette with hex codes, tagline, typography recommendations, and a downloadable PDF brand guidelines document ready for your truck wrap, business cards, job site signage, and website.' },
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
              Tips for Naming Your Construction Business
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              Your construction name is on your truck, your job site sign, your bid proposals, and every referral. Here&apos;s how to make it count.
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
      <section className="py-16 bg-gradient-to-br from-amber-900 to-orange-700">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to Name Your Construction Business?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Describe your trade. Get names with brand kits. Free to start, $9 per brand kit you love.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-semibold text-amber-800 shadow-lg hover:bg-gray-50 transition-colors"
            >
              Generate Construction Names
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
      <IndustryBlogLinks industry="construction-name-generator" />
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
            <Link href="/coffee-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              ☕ Coffee Name Generator
            </Link>
            <Link href="/music-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              🎵 Music Name Generator
            </Link>
            <Link href="/wedding-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              💍 Wedding Name Generator
            </Link>
            <Link href="/cleaning-business-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              🧹 Cleaning Name Generator
            </Link>
            <Link href="/pet-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              🐾 Pet Name Generator
            </Link>
            <Link href="/landscaping-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              🌿 Landscaping Name Generator
            </Link>
            <Link href="/salon-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              ✂️ Salon Name Generator
            </Link>
            <Link href="/marketing-agency-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              📈 Marketing Agency Name Generator
            </Link>
            <Link href="/compare" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              📊 Compare Name Generators
            </Link>
            <Link href="/examples" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              ✨ Brand Kit Examples
            </Link>          </div>
        </div>
      </section>
    </>
  )
}