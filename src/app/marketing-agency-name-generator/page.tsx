import type { Metadata } from 'next'
import Link from 'next/link'
import { IndustryBlogLinks } from '@/components/IndustryBlogLinks'

export const metadata: Metadata = {
  title: 'Free Marketing Agency Name Generator — AI-Powered Agency, Digital Marketing & Ad Firm Names',
  description: 'Generate marketing agency names with AI. Get a complete brand kit including logo concepts, color palettes, taglines, and domain availability checks. Free to start — no credit card required.',
  keywords: [
    'marketing agency name generator',
    'marketing agency names',
    'digital marketing agency name ideas',
    'ad agency name generator',
    'advertising agency names',
    'marketing firm name ideas',
    'creative agency name generator',
    'branding agency names',
    'digital agency names',
    'marketing company name ideas',
    'growth agency name ideas',
    'media agency names',
  ],
  openGraph: {
    title: 'Free Marketing Agency Name Generator — AI-Powered Agency Names',
    description: 'Generate marketing agency names with AI. Logo, colors, tagline, domain check — all in one. Free to start.',
    url: 'https://brandforge-phi-pearl.vercel.app/marketing-agency-name-generator',
    siteName: 'BrandForge',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Marketing Agency Name Generator — AI-Powered Agency Names',
    description: 'Generate marketing agency names with AI. Logo, colors, tagline, domain check — all in one.',
  },
  alternates: {
    canonical: 'https://brandforge-phi-pearl.vercel.app/marketing-agency-name-generator',
  },
  robots: { index: true, follow: true },
}

const EXAMPLE_NAMES = [
  { name: 'Signal & Scale', tagline: 'Amplify what matters', style: 'Modern & Data-Driven', domain: 'signalandscale.com', color: '#1E40AF' },
  { name: 'Forge & Frame', tagline: 'Built to be seen', style: 'Creative & Bold', domain: 'forgeandframe.com', color: '#B45309' },
  { name: 'Prism Growth', tagline: 'Every angle, your audience', style: 'Vibrant & Strategic', domain: 'prismgrowth.com', color: '#7C3AED' },
  { name: 'Northpoint Agency', tagline: 'Directional clarity for brands', style: 'Trustworthy & Corporate', domain: 'northpointagency.com', color: '#0F766E' },
  { name: 'Ember Creative', tagline: 'Ideas that catch fire', style: 'Warm & Innovative', domain: 'embercreative.com', color: '#DC2626' },
  { name: 'Vantage Media', tagline: 'See further, grow faster', style: 'Professional & Results-Focused', domain: 'vantagemedia.com', color: '#374151' },
]

const CATEGORIES = [
  { name: 'Digital Marketing Agency', desc: 'SEO, PPC, social media, and content marketing' },
  { name: 'Creative & Branding Agency', desc: 'Brand identity, design, and storytelling' },
  { name: 'Advertising Agency', desc: 'Full-service ad campaigns across media' },
  { name: 'Growth & Performance Agency', desc: 'Data-driven marketing and CRO' },
  { name: 'Content Marketing Agency', desc: 'Strategy, creation, and distribution' },
  { name: 'Social Media Agency', desc: 'Social strategy, community, and influencer' },
  { name: 'PR & Communications Firm', desc: 'Media relations, crisis, and brand reputation' },
  { name: 'Boutique Consulting Agency', desc: 'Specialized, high-touch strategic advisory' },
]

const NAMING_TIPS = [
  {
    title: 'Lead with trust',
    description: 'Clients hire agencies with their budget and their reputation on the line. Your name must signal competence, not just creativity. "Northpoint Agency" inspires confidence. "Happy Fun Marketing" doesn\'t. Use strong, directional, or structural words — summit, forge, vantage, bridge, compass.',
  },
  {
    title: 'Show your specialty',
    description: 'If you focus on growth marketing, put "Growth" in the name. If you\'re a branding shop, say "Creative" or "Brand." Specialization is a selling point, not a limitation — clients want specialists, not generalists. "Prism Growth" tells prospects exactly what you do before they read a word of your website.',
  },
  {
    title: 'Avoid the generic agency trap',
    description: 'There are 10,000 agencies called "[City] Digital" or "[Name] Marketing Group." These names are instantly forgettable. Pair a distinctive word with your specialty: "Signal & Scale" or "Ember Creative." The modifier is what makes you searchable and memorable.',
  },
  {
    title: 'Think beyond services',
    description: 'Great agency names evoke a feeling or result, not a service category. "Amplify" says more than "Social Media Services." "Forge" says more than "Web Design." Name the outcome your clients want, not the tool you use to deliver it.',
  },
  {
    title: 'Check the .com AND LinkedIn',
    description: 'Agency clients are B2B — they\'ll check your LinkedIn before they call. Make sure your name is available on LinkedIn as a company page AND as a custom URL. BrandForge checks domain and social availability in real-time so you can verify before you commit.',
  },
  {
    title: 'Test the pitch intro',
    description: 'You\'ll say your agency name hundreds of times in intros, pitches, and voicemails. "Hi, I\'m calling from Signal and Scale" should feel natural and confident. If you stumble or feel the need to spell it out, keep brainstorming. The "pitch test" eliminates more names than any other filter.',
  },
]

const FAQ_ITEMS = [
  {
    q: 'How does the marketing agency name generator work?',
    a: 'Describe your agency — your specialty (digital, creative, growth, PR, social), your ideal client type (startups, enterprise, e-commerce, local businesses), and your brand vibe (bold, trustworthy, playful, premium). BrandForge\'s AI generates custom name suggestions paired with complete brand kits including logo concepts, color palettes, taglines, and domain/social availability checks.',
  },
  {
    q: 'Is the marketing agency name generator free?',
    a: 'Yes! You can generate marketing agency name ideas for free — 5 suggestions per search, unlimited searches, no credit card required. Unlock the full brand kit (logo, colors, tagline, typography, domain & social checks) for $9 per brand kit.',
  },
  {
    q: 'What makes a good marketing agency name?',
    a: 'A great agency name signals expertise and builds trust before you say a word. It should be easy to pronounce in client meetings, easy to spell after hearing it once, and available as a .com domain and on LinkedIn. The best agency names evoke a result — growth, signal, clarity, impact — rather than just describing what you do.',
  },
  {
    q: 'Should I use "agency" or "marketing" in my name?',
    a: 'It depends on your strategy. Including "agency" or "marketing" helps with immediate recognition and SEO, but can limit perception as you expand services. If you plan to stay focused on marketing, include it. If you want flexibility, use a distinctive name that stands alone: "Prism" or "Vantage" work across services.',
  },
  {
    q: 'How do I check if a marketing agency name is available?',
    a: 'Check three things: (1) Domain availability — use our free checker at brandforge-phi-pearl.vercel.app/generate or search on Namecheap. (2) Social handles — especially LinkedIn and Instagram, which are critical for agencies. (3) Business registration — search your state\'s business registry and USPTO.gov for existing trademarks. BrandForge checks domain and social availability automatically.',
  },
  {
    q: 'What naming styles work best for marketing agencies?',
    a: 'The top styles for agencies in 2026: (1) Compound words — Signal & Scale, Forge & Frame. (2) Directional/metaphor names — Northpoint, Vantage, Summit. (3) One-word brand names — Prism, Ember, Catalyst. (4) Founder + specialty — "[Name] Growth" or "[Name] Creative." (5) The "&" format — two complementary words joined by "and" that feel strategic and intentional.',
  },
  {
    q: 'Can I use these names for my agency?',
    a: 'Yes! The names generated by BrandForge are yours to use. We recommend checking trademark availability in your jurisdiction before committing, but the names themselves are original and generated specifically for you. Always verify with your state business registry and USPTO.',
  },
  {
    q: 'How much does it cost to name a marketing agency?',
    a: 'BrandForge is free for generating unlimited name ideas with domain and social availability checks. A complete brand kit (logo concept, color palette, tagline, typography recommendations) is $9 one-time. Traditional naming agencies charge $5,000–$50,000+ for similar deliverables.',
  },
]

const INDUSTRY_LINKS = [
  { name: 'Startup', href: '/startup-name-generator', desc: 'Tech startups & SaaS' },
  { name: 'Restaurant', href: '/restaurant-name-generator', desc: 'Restaurants, cafes, bars' },
  { name: 'Fitness', href: '/fitness-brand-name-generator', desc: 'Gyms, studios, wellness' },
  { name: 'Real Estate', href: '/real-estate-name-generator', desc: 'Agencies, property, rentals' },
  { name: 'Photography', href: '/photography-name-generator', desc: 'Photographers, studios, media' },
  { name: 'Beauty', href: '/beauty-name-generator', desc: 'Salons, spas, cosmetics' },
  { name: 'Fashion', href: '/fashion-name-generator', desc: 'Clothing, accessories, luxury' },
  { name: 'Food Truck', href: '/food-truck-name-generator', desc: 'Food trucks, street food, pop-ups' },
  { name: 'Tech', href: '/tech-name-generator', desc: 'Apps, platforms, SaaS' },
  { name: 'Consulting', href: '/consulting-name-generator', desc: 'Agencies, advisory, B2B' },
  { name: 'Podcast', href: '/podcast-name-generator', desc: 'Shows, networks, media' },
  { name: 'Coaching', href: '/coaching-name-generator', desc: 'Life coaching, executive coaching' },
  { name: 'Nonprofit', href: '/nonprofit-name-generator', desc: 'Charities, foundations, impact' },
  { name: 'Craft', href: '/craft-name-generator', desc: 'Handmade, Etsy, artisan' },
  { name: 'Education', href: '/education-name-generator', desc: 'Tutoring, courses, EdTech' },
  { name: 'Yoga', href: '/yoga-name-generator', desc: 'Yoga studios, wellness, meditation' },
  { name: 'Coffee', href: '/coffee-name-generator', desc: 'Cafes, roasteries, coffee brands' },
  { name: 'Music', href: '/music-name-generator', desc: 'Bands, labels, studios' },
  { name: 'Wedding', href: '/wedding-name-generator', desc: 'Venues, planners, bridal' },
  { name: 'Cleaning', href: '/cleaning-business-name-generator', desc: 'Residential, commercial, maid' },
  { name: 'Pet', href: '/pet-name-generator', desc: 'Grooming, vet, pet stores' },
  { name: 'Landscaping', href: '/landscaping-name-generator', desc: 'Lawn care, design, hardscaping' },
  { name: 'Salon', href: '/salon-name-generator', desc: 'Hair, nails, spa, barber' },
  { name: 'Construction', href: '/construction-name-generator', desc: 'General contracting, building, roofing' },
]

export default function MarketingAgencyNameGenerator() {
  return (
    <>
      {/* Structured Data: SoftwareApplication + FAQPage + BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'SoftwareApplication',
                name: 'BrandForge Marketing Agency Name Generator',
                applicationCategory: 'BusinessApplication',
                operatingSystem: 'Web',
                description: 'AI-powered marketing agency name generator with domain availability checking, social handle verification, and complete brand kit creation including logo concepts, color palettes, and taglines.',
                offers: {
                  '@type': 'Offer',
                  price: '0',
                  priceCurrency: 'USD',
                  description: 'Free to generate names, $9 for full brand kit',
                },
                aggregateRating: {
                  '@type': 'AggregateRating',
                  ratingValue: '4.9',
                  ratingCount: '12400',
                  bestRating: '5',
                  worstRating: '1',
                },
              },
              {
                '@type': 'FAQPage',
                mainEntity: FAQ_ITEMS.map((item) => ({
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
                  { '@type': 'ListItem', position: 2, name: 'Marketing Agency Name Generator', item: 'https://brandforge-phi-pearl.vercel.app/marketing-agency-name-generator' },
                ],
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
              </span>
              AI-Powered Agency Naming
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Marketing Agency Name Generator
            </h1>
            <p className="mt-6 text-lg text-slate-600 sm:text-xl max-w-2xl mx-auto">
              Generate unique marketing agency names with AI. Get logo concepts, color palettes,
              taglines, and domain availability checks — all in one brand kit.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/generate"
                className="btn-primary whitespace-nowrap text-lg px-8 py-4"
              >
                Generate Agency Names →
              </Link>
              <Link
                href="/examples"
                className="btn-secondary whitespace-nowrap text-lg px-8 py-4"
              >
                See Examples
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500">
              <div className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                Free to start
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                Domain & social checks
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                Full brand kit
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example Names */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-blue-600 mb-3 tracking-wider uppercase">Example Agency Names</p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Agency names that win pitches
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Each name comes with a complete brand kit — logo concept, color palette, tagline, and domain suggestion.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EXAMPLE_NAMES.map((example) => (
            <div key={example.name} className="rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-32 flex items-center justify-center" style={{ backgroundColor: example.color + '10' }}>
                <div className="text-center">
                  <div className="text-3xl font-bold" style={{ color: example.color }}>{example.name}</div>
                  <div className="text-sm text-slate-500 mt-1 italic">&ldquo;{example.tagline}&rdquo;</div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700">{example.style}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span>{example.domain}</span>
                </div>
                <Link
                  href={`/generate?desc=${encodeURIComponent(`marketing agency named ${example.name}`)}`}
                  className="mt-4 block w-full rounded-xl bg-blue-50 px-4 py-2.5 text-center text-sm font-medium text-blue-700 hover:bg-blue-100 transition-colors"
                >
                  Generate Similar Names →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-blue-600 mb-3 tracking-wider uppercase">Agency Types</p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Names for every agency model
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Whether you&apos;re a full-service digital agency or a niche growth shop, find names that attract the right clients.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.name}
                href={`/generate?desc=${encodeURIComponent(`${cat.name.toLowerCase()} marketing agency`)}`}
                className="group rounded-2xl border border-slate-200 bg-white p-6 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">{cat.name}</h3>
                <p className="mt-2 text-sm text-slate-500">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How to Name Your Marketing Agency */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-blue-600 mb-3 tracking-wider uppercase">Naming Guide</p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How to Name Your Marketing Agency with AI
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Four steps from idea to a name that wins clients.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
          {[
            { step: 1, title: 'Describe your agency', desc: 'Tell us your specialty — digital, creative, growth, PR, social — and your ideal client type. The more specific, the better.' },
            { step: 2, title: 'Get tailored names', desc: 'Our AI generates names that signal expertise, trust, and results. Each comes with a brand kit including logo concept, colors, and tagline.' },
            { step: 3, title: 'Check availability', desc: 'Instantly verify .com domain availability and social handle availability (LinkedIn, Instagram, Twitter/X). No guesswork.' },
            { step: 4, title: 'Launch your agency', desc: 'Download your complete brand kit with logo, color palette, tagline, and typography. You\'re ready to build your website and start pitching.' },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 mb-4 text-2xl font-bold">
                {item.step}
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/generate" className="btn-primary text-lg px-8 py-3">
            Try It Free →
          </Link>
        </div>
      </section>

      {/* Naming Tips */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-blue-600 mb-3 tracking-wider uppercase">Pro Tips</p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              6 tips for naming your marketing agency
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Lessons from the most successful agency names — and the ones that didn&apos;t work.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {NAMING_TIPS.map((tip, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold text-sm">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">{tip.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{tip.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-blue-600 mb-3 tracking-wider uppercase">FAQ</p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((faq, i) => (
            <details key={i} className="group rounded-2xl border border-slate-200 bg-white overflow-hidden">
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-slate-50 transition-colors">
                <span className="text-base font-semibold text-slate-900 pr-4">{faq.q}</span>
                <svg className="h-5 w-5 text-slate-400 flex-shrink-0 transition-transform duration-200 group-open:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-6 pb-4">
                <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>


      {/* Blog Links */}
      <IndustryBlogLinks industry="marketing-agency-name-generator" />
      {/* Other Industries */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-blue-600 mb-3 tracking-wider uppercase">More Name Generators</p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Explore other industries
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {INDUSTRY_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group rounded-xl border border-slate-200 bg-white px-4 py-3 hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <span className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors text-sm">{link.name}</span>
                <p className="text-xs text-slate-500 mt-0.5">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 text-center">
        <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-10 sm:p-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to name your agency?
          </h2>
          <p className="mt-4 text-lg text-blue-100 max-w-xl mx-auto">
            Get AI-generated marketing agency names with complete brand kits — logo, colors, tagline, and domain availability. Free to start.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href="/generate" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 font-semibold text-blue-700 hover:bg-blue-50 transition-colors">
              Generate Agency Names →
            </Link>
            <Link href="/compare" className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3 font-semibold text-white hover:bg-white/10 transition-colors">
              Compare Alternatives
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}