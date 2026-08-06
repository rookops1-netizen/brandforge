import type { Metadata } from 'next'
import Link from 'next/link'
import { IndustryPageSchema } from '@/components/IndustryPageSchema'
import { IndustryBlogLinks } from '@/components/IndustryBlogLinks'

export const metadata: Metadata = {
  title: 'Free Consulting Name Generator — AI-Powered Consulting & Agency Business Names',
  description: 'Generate creative consulting business names with AI. Get a complete brand kit including logo concepts, color palettes, taglines, and domain availability checks. Free to start — no credit card required.',
  keywords: [
    'consulting name generator',
    'consulting business names',
    'consulting firm names',
    'agency name generator',
    'consulting company names',
    'consulting brand names',
    'management consulting names',
    'strategy consulting names',
    'consulting name ideas',
    'how to name a consulting business',
    'consulting naming guide',
    'coaching business names',
    'advisor name ideas',
    'professional services names',
  ],
  openGraph: {
    title: 'Free Consulting Name Generator — AI-Powered Consulting & Agency Names',
    description: 'Generate creative consulting business names with AI. Logo, colors, tagline, domain check — all in one. Free to start.',
    url: 'https://brandforge.app/consulting-name-generator',
    siteName: 'BrandForge',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Consulting Name Generator — AI-Powered Consulting & Agency Names',
    description: 'Generate creative consulting business names with AI. Logo, colors, tagline, domain check — all in one.',
  },
  alternates: {
    canonical: 'https://brandforge.app/consulting-name-generator',
  },
  robots: { index: true, follow: true },
}

const EXAMPLE_NAMES = [
  { name: 'Meridian Advisory', tagline: 'Navigating complexity with clarity', style: 'Authoritative & Trustworthy', domain: 'meridianadvisory.com', color: '#1E3A5F' },
  { name: 'Catalyst Point', tagline: 'Where insight ignites action', style: 'Dynamic & Results-Driven', domain: 'catalystpoint.com', color: '#D97706' },
  { name: 'Vantage Partners', tagline: 'Your edge in every decision', style: 'Strategic & Premium', domain: 'vantagepartners.com', color: '#0F766E' },
  { name: 'Clearwater Strategy', tagline: 'Crystal thinking for complex challenges', style: 'Clean & Methodical', domain: 'clearwaterstrategy.com', color: '#0369A1' },
  { name: 'Forge & Scale', tagline: 'Build what lasts, grow what works', style: 'Practical & Bold', domain: 'forgeandscale.com', color: '#7C2D12' },
  { name: 'Apex Consulting Group', tagline: 'Peak performance through peak strategy', style: 'Corporate & Established', domain: 'apexconsultinggroup.com', color: '#4338CA' },
]

const CATEGORIES = [
  { name: 'Management Consulting', desc: 'Strategic, authoritative names that signal leadership and trust' },
  { name: 'Strategy & Innovation', desc: 'Forward-thinking names that imply transformation and growth' },
  { name: 'Financial Advisory', desc: 'Credible, precise names that convey fiduciary responsibility' },
  { name: 'HR & Talent Consulting', desc: 'People-first names that feel welcoming and professional' },
  { name: 'Marketing & Brand Agency', desc: 'Creative, bold names that showcase storytelling ability' },
  { name: 'IT & Digital Consulting', desc: 'Tech-savvy names that bridge business and technology' },
  { name: 'Coaching & Personal Development', desc: 'Inspiring, approachable names that motivate action' },
  { name: 'Sustainability & ESG', desc: 'Purpose-driven names that reflect environmental responsibility' },
]

const NAMING_TIPS = [
  {
    title: 'Lead with credibility signals',
    description: 'Consulting is a trust business. Names with words like "Advisory," "Partners," "Group," or "Associates" instantly signal that you\'re established and trustworthy. Avoid names that sound like a single person\'s side hustle if you want enterprise clients.',
  },
  {
    title: 'Use metaphor for memorability',
    description: '"Meridian Advisory" is more memorable than "Strategic Business Consultants." Metaphors from geography (Summit, Vantage, Compass), nature (Clearwater, Oakwood), or action (Catalyst, Forge) create mental images that stick with decision-makers.',
  },
  {
    title: 'Match name tier to client tier',
    description: 'If you\'re targeting Fortune 500 companies, your name should sound like it belongs in the boardroom. If you\'re coaching solopreneurs, something approachable works better. BrandForge lets you describe your ideal client, and the AI names accordingly.',
  },
  {
    title: 'Keep it spellable and pronounceable',
    description: 'Your name will be said aloud in meetings, written in proposals, and typed into LinkedIn. If people have to ask "how do you spell that?" — you\'re losing referral potential. Test your top 3 names with 5 people who\'ve never heard them.',
  },
  {
    title: 'Check LinkedIn and domain early',
    description: 'A consulting name that\'s already taken on LinkedIn or has a parked homepage is a headache. BrandForge checks domain and social availability in real-time, so you can pick a name with a clean digital presence from day one.',
  },
  {
    title: 'Think about the slide deck test',
    description: 'Imagine your name on a PowerPoint title slide in front of a client. Does it look confident? Does it fit next to logos like McKinsey, Deloitte, or Bain? Your name should feel like it belongs in the room — or at least on the way there.',
  },
]

const FAQ_ITEMS = [
  {
    q: 'How does the consulting name generator work?',
    a: 'Describe your consulting business — your niche (management, strategy, HR, IT, coaching), ideal client type (enterprise, SMB, startups), and brand personality (authoritative, innovative, approachable). BrandForge\'s AI generates custom name suggestions paired with complete brand kits including logo concepts, color palettes, taglines, and domain/social availability checks.',
  },
  {
    q: 'Is the consulting name generator free?',
    a: 'Yes! You can generate consulting name ideas for free — 5 suggestions per search, unlimited searches, no credit card required. Unlock the full brand kit (logo, colors, tagline, typography, domain & social checks) for $9 per brand kit.',
  },
  {
    q: 'What makes a good consulting business name?',
    a: 'A great consulting name signals credibility and expertise. It should be easy to say in a boardroom, spell on a business card, and remember after a first meeting. Words like "Advisory," "Partners," or "Group" add gravitas. Metaphors (Vantage, Catalyst, Meridian) make it memorable without sacrificing professionalism.',
  },
  {
    q: 'Should I include my own name in the consulting firm name?',
    a: 'It depends on your goals. Surnames (e.g., "Anderson Consulting") convey tradition and personal accountability, but they can limit growth if you want to sell the firm or expand beyond your personal brand. A branded name (e.g., "Catalyst Point") gives you more flexibility and is often more memorable.',
  },
  {
    q: 'Can I use these names for my consulting business?',
    a: 'Absolutely. All names you generate are yours to use commercially — for LLC registration, branding, domain purchases, business cards, and proposals. There are no licensing restrictions.',
  },
  {
    q: 'What if I want names for a specific consulting niche?',
    a: 'Just describe your niche in the prompt. Whether it\'s healthcare consulting, supply chain advisory, DEI consulting, executive coaching, or digital transformation — BrandForge tailors suggestions to your exact focus and target clients.',
  },
  {
    q: 'How important is social handle availability for consultants?',
    a: 'Very important. LinkedIn is your primary storefront as a consultant. A consistent @YourName across LinkedIn, Twitter, and your website builds credibility and makes it easy for prospects and referral partners to find you. BrandForge checks all major platforms.',
  },
  {
    q: 'What comes in the brand kit for each name?',
    a: 'Each brand kit includes: a logo concept (text-based with font pairing), a 5-color palette with hex codes, a custom tagline, typography recommendations, and real-time availability checks for domains and social handles. You can download it all as a PDF brand guidelines document.',
  },
]

export default function ConsultingNameGeneratorPage() {
  return (
    <>
      <IndustryPageSchema name="Consulting Name Generator" path="/consulting-name-generator" description="AI-powered consulting name generator with complete brand kits including logos, colors, taglines, and domain availability." faqItems={FAQ_ITEMS} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-emerald-900" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-medium text-emerald-700">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
            </svg>
            AI-Powered Consulting Naming
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Consulting Name Generator
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            Generate consulting business names with AI. Describe your practice, get name suggestions with complete brand kits — logo concepts, color palettes, taglines, and domain availability. Free to start.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="btn-primary inline-flex items-center gap-2 text-base px-8 py-3"
            >
              Generate Consulting Names
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

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Names for Every Consulting Niche
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              From management strategy to HR and sustainability — we generate names that command respect and win proposals.
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
              Consulting Names, Generated in Seconds
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
                    <p className="text-sm text-slate-500">{item.style}</p>
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
          <p className="mt-8 text-center text-sm text-slate-500">
            These are real examples — your results will be tailored to your specific consulting practice.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              How to Name Your Consulting Business with AI
            </h2>
          </div>
          <div className="space-y-8">
            {[
              { step: '1', title: 'Describe your consulting practice', desc: 'Tell us your niche — management, strategy, HR, financial, marketing, IT, or coaching. Describe your ideal client (enterprise, SMB, startups) and brand personality (authoritative, innovative, approachable, premium).' },
              { step: '2', title: 'Get tailored name suggestions', desc: 'BrandForge generates 5 unique consulting names per search, each with a matching tagline, color palette, and logo concept. Every name is designed to resonate with decision-makers and look great on proposals.' },
              { step: '3', title: 'Check domain & social availability', desc: 'Every name comes with real-time checks for .com, .co, .consulting, and more — plus LinkedIn, Twitter, and social media handle availability. Critical for consultants who live on LinkedIn.' },
              { step: '4', title: 'Download your brand kit', desc: 'Unlock the full brand kit: logo concept, 5-color palette with hex codes, tagline, typography recommendations, and a downloadable PDF brand guidelines document ready for your proposals and website.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-emerald-700 text-white font-bold text-lg">
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
              Tips for Naming Your Consulting Business
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              In consulting, your name sets the tone before you even walk into the room. Here&apos;s how to get it right.
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
      <section className="py-16 bg-gradient-to-br from-slate-800 to-emerald-900">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to Name Your Consulting Business?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Describe your practice. Get names with brand kits. Free to start, $9 per brand kit you love.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-semibold text-slate-800 shadow-lg hover:bg-gray-50 transition-colors"
            >
              Generate Consulting Names
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
      <IndustryBlogLinks industry="consulting-name-generator" />
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
            <Link href="/real-estate-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-emerald-300 hover:text-emerald-600 transition-colors">
              🏠 Real Estate Name Generator
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