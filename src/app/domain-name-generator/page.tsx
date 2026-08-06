import type { Metadata } from 'next'
import Link from 'next/link'
import { IndustryPageSchema } from '@/components/IndustryPageSchema'
import { IndustryBlogLinks } from '@/components/IndustryBlogLinks'

export const metadata: Metadata = {
  title: 'Free Domain Name Generator — Check Domain Availability Instantly | BrandForge',
  description: 'Generate brand name ideas with instant domain availability checks. Find available .com, .io, .co, .ai domains and get a complete brand kit — logo, colors, tagline. Free to start.',
  keywords: [
    'domain name generator',
    'domain name availability',
    'domain name checker',
    'domain name ideas',
    'free domain name generator',
    'AI domain name generator',
    'check domain availability',
    'domain name search',
    'brand name domain checker',
    'available domain names',
    'domain finder',
    'how to pick a domain name',
    'best domain name generator',
    'business domain name generator',
    'domain name ideas 2026',
  ],
  openGraph: {
    title: 'Free Domain Name Generator — Check Domain Availability Instantly',
    description: 'Generate brand names with instant domain checks. Find available .com, .io, .co, .ai domains and get a complete brand kit.',
    url: 'https://brandforge.app/domain-name-generator',
    siteName: 'BrandForge',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Domain Name Generator — Check Domain Availability Instantly',
    description: 'Generate brand names with instant domain checks. Find available .com, .io, .co, .ai domains and get a full brand kit.',
  },
  alternates: {
    canonical: 'https://brandforge.app/domain-name-generator',
  },
  robots: { index: true, follow: true },
}

const EXAMPLE_NAMES = [
  { name: 'Veloris', tagline: 'Velocity redefined', domain: 'veloris.com', ext: '.com', color: '#6366F1' },
  { name: 'Bravura', tagline: 'Bold by nature', domain: 'bravura.io', ext: '.io', color: '#0EA5E9' },
  { name: 'Kindra', tagline: 'Kindness, amplified', domain: 'kindra.co', ext: '.co', color: '#10B981' },
  { name: 'Nexaly', tagline: 'Next-level clarity', domain: 'nexaly.ai', ext: '.ai', color: '#8B5CF6' },
  { name: 'Trellis', tagline: 'Growth, structured', domain: 'trellis.com', ext: '.com', color: '#F59E0B' },
  { name: 'Quanta', tagline: 'Small moves, big impact', domain: 'quanta.app', ext: '.app', color: '#EF4444' },
]

const DOMAIN_EXTENSIONS = [
  { ext: '.com', desc: 'The gold standard. Most recognized and trusted by customers worldwide.', best: 'Best for: Any business' },
  { ext: '.io', desc: 'Tech-forward and modern. Popular with startups and developer tools.', best: 'Best for: SaaS, tech startups' },
  { ext: '.co', desc: 'Short and professional. Great alternative when .com is taken.', best: 'Best for: Companies, consultancies' },
  { ext: '.ai', desc: 'Signals artificial intelligence. Rapidly growing in popularity.', best: 'Best for: AI products, ML tools' },
  { ext: '.app', desc: 'Google-backed TLD. Perfect for mobile and web applications.', best: 'Best for: Mobile apps, web apps' },
  { ext: '.dev', desc: 'Developer-focused TLD. Great for tools, APIs, and platforms.', best: 'Best for: Developer tools, APIs' },
]

const NAMING_TIPS = [
  {
    title: 'Prioritize .com availability',
    description: '.com is still king — 75% of consumers trust .com domains more than alternatives. If your ideal .com is taken, BrandForge suggests available alternatives across .io, .co, .ai, and more.',
  },
  {
    title: 'Keep it short and simple',
    description: 'The best domain names are 6-10 characters, easy to spell, and hard to mistype. Single-word domains are ideal. Two short words work too. Avoid hyphens, numbers, and double letters.',
  },
  {
    title: 'Make it brandable, not keyword-stuffed',
    description: '"best-cheap-shoes.com" tells Google what you sell, but nobody remembers it. "Nike.com" is brandable, memorable, and worth billions. BrandForge generates brandable names — not keyword salads.',
  },
  {
    title: 'Check social handles at the same time',
    description: 'Consistency matters. If your domain is @kindra but Instagram is @kindra_official, you\'re creating confusion. BrandForge checks domain AND social availability simultaneously.',
  },
  {
    title: 'Avoid trademark conflicts',
    description: 'Before committing to a name, search the USPTO database and Google for existing trademarks. BrandForge\'s generated names are original, but always do a quick trademark search before investing.',
  },
  {
    title: 'Think about how it sounds out loud',
    description: 'Can you say your domain on a podcast and have people spell it correctly? If you have to say "that\'s dash-this dash-that dot com," pick something else. The radio test never fails.',
  },
]

const FAQ_ITEMS = [
  {
    q: 'How does the domain name generator work?',
    a: 'You describe your business idea in plain English — what it does, who it\'s for, the vibe you want. BrandForge\'s AI generates custom brand names and instantly checks domain availability across .com, .io, .co, .ai, .app, and more. Each name comes with a complete brand kit including logo concepts, color palettes, and taglines.',
  },
  {
    q: 'Is the domain name generator free?',
    a: 'Yes! You can generate domain name ideas for free — 5 suggestions per search, unlimited searches, no credit card required. The domain availability check is included free. Upgrade to unlock the full brand kit (logo, colors, tagline, typography, social handles) for $9 per brand kit.',
  },
  {
    q: 'What domain extensions does BrandForge check?',
    a: 'We check availability across 6+ domain extensions: .com, .io, .co, .ai, .app, and .dev. This gives you flexibility — if the .com is taken (as it often is for short names), you can see available alternatives instantly.',
  },
  {
    q: 'How do I check if a domain name is available?',
    a: 'BrandForge checks domain availability automatically for every name it generates. You can also type any name into our generator and see real-time availability across multiple extensions. No separate WHOIS lookup needed — it\'s built right in.',
  },
  {
    q: 'What makes a good domain name?',
    a: 'A good domain name is short (6-10 characters), easy to spell and pronounce, memorable, and brandable. The best domains pass the "radio test" — if someone hears it on a podcast, they can spell it correctly. Avoid hyphens, numbers, and intentional misspellings.',
  },
  {
    q: 'Should I use .com or a different domain extension?',
    a: 'If the .com is available and affordable, always get it — .com is the most trusted TLD worldwide. But don\'t let a taken .com stop you. Many successful startups use .io (Stripe, Notion), .co (TripIt, AngelList), or .ai (Character.AI, Anthropic). BrandForge shows you all available options so you can pick what works.',
  },
  {
    q: 'Can I buy a domain through BrandForge?',
    a: 'BrandForge generates name ideas and checks availability — the actual domain registration happens through your preferred registrar (Namecheap, GoDaddy, Google Domains, etc.). We recommend purchasing your domain quickly once you find one you love, as good names get snatched up fast.',
  },
  {
    q: 'How is this different from other domain name generators?',
    a: 'Most domain generators just combine random words and check availability. BrandForge uses AI to understand your business concept and generate names that actually fit your brand identity. Each name comes with a logo concept, color palette, tagline, and typography — not just a bare domain suggestion. It\'s a complete brand kit, not just a name.',
  },
]

export default function DomainNameGeneratorPage() {
  return (
    <>
      <IndustryPageSchema name="Domain Name Generator" path="/domain-name-generator" description="AI-powered domain name generator with complete brand kits including logos, colors, taglines, and domain availability." faqItems={FAQ_ITEMS} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-brand-50" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.733 0 5.236-1.1 7.07-2.89M12 21a9.004 9.004 0 01-7.07-2.89m7.07 2.89V3m0 0a9.004 9.004 0 018.716 6.747M12 3a9.004 9.004 0 00-8.716 6.747M12 3a9.004 9.004 0 008.716 6.747" />
            </svg>
            AI-Powered Domain Search
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Domain Name Generator
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Generate brand name ideas with instant domain availability checks. Find available .com, .io, .co, .ai domains and get a complete brand kit — logo, colors, tagline. Free to start.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="btn-primary inline-flex items-center gap-2 text-base px-8 py-3"
            >
              Check Domain Availability
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
          <p className="mt-4 text-sm text-slate-500">Free • No credit card required • Results in seconds</p>
        </div>
      </section>

      {/* Example Names */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Brand Names with Available Domains
            </h2>
            <p className="mt-3 text-slate-500">
              Each name comes with a complete brand kit — and every domain is checked in real time.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {EXAMPLE_NAMES.map((item) => (
              <div key={item.name} className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-brand-200">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl text-white font-bold text-lg"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.name[0]}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{item.name}</h3>
                    <p className="text-sm text-slate-500">Brandable domain</p>
                  </div>
                </div>
                <p className="text-sm text-slate-500 italic mb-3">&ldquo;{item.tagline}&rdquo;</p>
                <div className="flex items-center gap-2 text-sm">
                  <span className="inline-flex items-center gap-1 rounded-full bg-green-100 text-green-700 px-2.5 py-0.5 text-xs font-medium">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6L19.5 4.5" /></svg>
                    {item.domain}
                  </span>
                  <span className="text-xs text-slate-500">Available</span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-slate-500">
            These are real examples — your results will be tailored to your specific business idea.
          </p>
        </div>
      </section>

      {/* Domain Extensions Guide */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Which Domain Extension Should You Choose?
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              BrandForge checks availability across all these extensions simultaneously. Here&apos;s what each one signals to your customers.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DOMAIN_EXTENSIONS.map((ext) => (
              <div key={ext.ext} className="rounded-xl border border-slate-200 bg-white p-6 hover:border-brand-200 transition-colors">
                <div className="text-2xl font-bold text-brand-600 mb-2">{ext.ext}</div>
                <p className="text-sm text-slate-600 leading-relaxed mb-2">{ext.desc}</p>
                <p className="text-xs text-slate-500 font-medium">{ext.best}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              How to Find the Perfect Domain Name
            </h2>
          </div>
          <div className="space-y-8">
            {[
              { step: '1', title: 'Describe your business', desc: 'Tell us what your business does, who your customers are, and the brand vibe you want. Our AI understands context — the more you share, the better the names.' },
              { step: '2', title: 'Get names with domain checks', desc: 'BrandForge generates 5 unique brand names per search, each with real-time domain availability checks across .com, .io, .co, .ai, .app, and .dev. No more guessing if a name is taken.' },
              { step: '3', title: 'See social media availability', desc: 'Every name also comes with social handle availability checks for Instagram, Twitter/X, TikTok, and more. Get a name you can own everywhere, not just as a domain.' },
              { step: '4', title: 'Download your brand kit', desc: 'Unlock the full brand kit for your favorite name: logo concept, 5-color palette with hex codes, tagline, typography, and a downloadable PDF brand guidelines document.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-white font-bold text-lg">
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
              6 Tips for Choosing a Domain Name
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              Your domain name is your digital front door. Here&apos;s how to pick one that works for your brand.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {NAMING_TIPS.map((tip) => (
              <div key={tip.title} className="rounded-xl border border-slate-200 bg-white p-6 hover:border-brand-200 transition-colors">
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
            Domain Name Generator FAQ
          </h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, i) => (
              <details key={i} className="group rounded-xl border border-slate-200 bg-white">
                <summary className="flex cursor-pointer items-center justify-between p-5 text-base font-medium text-slate-900 hover:text-brand-600">
                  {item.q}
                  <svg className="h-5 w-5 flex-shrink-0 text-slate-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
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
      <section className="py-16 bg-gradient-to-br from-brand-600 to-blue-600">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Find Your Perfect Domain Name
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Describe your idea. Get names with domain &amp; social availability checks. Free to start, $9 per brand kit you love.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-semibold text-brand-700 shadow-lg hover:bg-gray-50 transition-colors"
            >
              Check Domain Availability
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
      <IndustryBlogLinks industry="domain-name-generator" />

      {/* Internal Links */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold text-slate-900 mb-6">More Name Generators</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/startup-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-brand-300 hover:text-brand-600 transition-colors">
              🚀 Startup Name Generator
            </Link>
            <Link href="/restaurant-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-brand-300 hover:text-brand-600 transition-colors">
              🍽️ Restaurant Name Generator
            </Link>
            <Link href="/tech-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-brand-300 hover:text-brand-600 transition-colors">
              💻 Tech Name Generator
            </Link>
            <Link href="/beauty-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-brand-300 hover:text-brand-600 transition-colors">
              💄 Beauty Name Generator
            </Link>
            <Link href="/fashion-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-brand-300 hover:text-brand-600 transition-colors">
              👗 Fashion Name Generator
            </Link>
            <Link href="/food-truck-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-brand-300 hover:text-brand-600 transition-colors">
              🚚 Food Truck Name Generator
            </Link>
            <Link href="/real-estate-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-brand-300 hover:text-brand-600 transition-colors">
              🏠 Real Estate Name Generator
            </Link>
            <Link href="/consulting-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-brand-300 hover:text-brand-600 transition-colors">
              💼 Consulting Name Generator
            </Link>
            <Link href="/photography-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-brand-300 hover:text-brand-600 transition-colors">
              📸 Photography Name Generator
            </Link>
            <Link href="/podcast-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-brand-300 hover:text-brand-600 transition-colors">
              🎙️ Podcast Name Generator
            </Link>
            <Link href="/fitness-brand-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-brand-300 hover:text-brand-600 transition-colors">
              💪 Fitness Brand Name Generator
            </Link>
            <Link href="/coaching-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-brand-300 hover:text-brand-600 transition-colors">
              🧭 Coaching Name Generator
            </Link>
            <Link href="/nonprofit-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-brand-300 hover:text-brand-600 transition-colors">
              🌍 Nonprofit Name Generator
            </Link>
            <Link href="/craft-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-brand-300 hover:text-brand-600 transition-colors">
              🧶 Craft Name Generator
            </Link>
            <Link href="/education-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-brand-300 hover:text-brand-600 transition-colors">
              📚 Education Name Generator
            </Link>
            <Link href="/yoga-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-brand-300 hover:text-brand-600 transition-colors">
              🧘 Yoga Name Generator
            </Link>
            <Link href="/coffee-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-brand-300 hover:text-brand-600 transition-colors">
              ☕ Coffee Name Generator
            </Link>
            <Link href="/music-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-brand-300 hover:text-brand-600 transition-colors">
              🎵 Music Name Generator
            </Link>
            <Link href="/wedding-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-brand-300 hover:text-brand-600 transition-colors">
              💍 Wedding Name Generator
            </Link>
            <Link href="/cleaning-business-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-brand-300 hover:text-brand-600 transition-colors">
              🧹 Cleaning Business Name Generator
            </Link>
            <Link href="/pet-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-brand-300 hover:text-brand-600 transition-colors">
              🐾 Pet Name Generator
            </Link>
            <Link href="/landscaping-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-brand-300 hover:text-brand-600 transition-colors">
              🌿 Landscaping Name Generator
            </Link>
            <Link href="/salon-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-brand-300 hover:text-brand-600 transition-colors">
              💇 Salon Name Generator
            </Link>
            <Link href="/construction-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-brand-300 hover:text-brand-600 transition-colors">
              🏗️ Construction Name Generator
            </Link>
            <Link href="/marketing-agency-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-brand-300 hover:text-brand-600 transition-colors">
              📈 Marketing Agency Name Generator
            </Link>
            <Link href="/compare" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-brand-300 hover:text-brand-600 transition-colors">
              📊 Compare Name Generators
            </Link>
            <Link href="/examples" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-brand-300 hover:text-brand-600 transition-colors">
              ✨ Brand Kit Examples
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}