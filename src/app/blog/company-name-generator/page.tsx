import type { Metadata } from 'next'
import Link from 'next/link'
import { NewsletterCta } from '@/components/NewsletterCta'
import { BlogPostSchema } from '@/components/BlogPostSchema'
import { HowToSchema } from '@/components/HowToSchema'

export const metadata: Metadata = {
  title: 'Company Name Generator: 250+ Name Ideas for 2026 + Free AI Tool',
  description: 'The #1 free company name generator — get AI-powered company name ideas with instant domain and social availability checks. 250+ name ideas by industry, 6 naming strategies, and a step-by-step process.',
  keywords: [
    'company name generator',
    'free company name generator',
    'company name ideas',
    'company names',
    'company name ideas 2026',
    'best company name generator',
    'AI company name generator',
    'how to name a company',
    'company naming tool',
    'corporate name generator',
    'company name checker',
    'startup company names',
    'LLC name generator',
    'inc name ideas',
    'generate company name',
  ],
  openGraph: {
    title: 'Company Name Generator: 250+ Name Ideas for 2026 + Free AI Tool',
    description: 'AI-powered company name generator with 250+ name ideas, 6 naming strategies, and instant domain availability checks. Find the perfect name for your company today.',
    url: 'https://brandforge.app/blog/company-name-generator',
    siteName: 'BrandForge',
    type: 'article',
    publishedTime: '2026-07-07T12:00:00.000Z',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Company Name Generator: 250+ Name Ideas for 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Company Name Generator: 250+ Name Ideas for 2026',
    description: '250+ company name ideas, 6 naming strategies, and a free AI tool that checks domain availability. Find your perfect company name today.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: 'https://brandforge.app/blog/company-name-generator',
  },
  robots: { index: true, follow: true },
}

const NAME_IDEAS = [
  {
    category: 'Tech & Software',
    icon: '💻',
    names: [
      'Apexlogic', 'Cipherstack', 'Datacove', 'Elevatech', 'Framewire',
      'Gridpoint', 'Helix Systems', 'Ion Digital', 'Keystream', 'Lumicode',
      'Meshworks', 'Neuralforge', 'Omniplatform', 'Pixel Logic', 'Quantum Core',
      'Rapidstack', 'Signalworks', 'Toggledev', 'Uplink Labs', 'Vector Systems',
      'Warp Dynamics', 'Xylos Tech', 'Yieldstack', 'Zencore', 'Zero Latency',
    ],
  },
  {
    category: 'Consulting & Professional Services',
    icon: '💼',
    names: [
      'Archpoint Group', 'Beacon Advisory', 'Clearpath Consulting', 'Driver & Partners', 'Elevate Strategy',
      'Foresight Group', 'Granite Partners', 'Horizon Associates', 'Impact Advisors', 'Junction Consulting',
      'Keystone Group', 'Landmark Strategy', 'Meridian Partners', 'Nexus Advisory', 'Onpoint Consulting',
      'Pinnacle Group', 'Quest Advisors', 'Ridgeline Partners', 'Summit Strategy', 'Truemark Consulting',
      'Unity Partners', 'Vertex Group', 'Westpath Advisory', 'Xcel Strategy', 'Zenith Partners',
    ],
  },
  {
    category: 'Creative & Design',
    icon: '🎨',
    names: [
      'Alto Studio', 'Brushmark', 'Chromalink', 'Draft & Form', 'Ember Creative',
      'Figment Co.', 'Glyph Studio', 'Hue & Thread', 'Inkwell Design', 'Junction Creative',
      'Kinetik Studio', 'Layer & Light', 'Mosaic Co.', 'Nimble Design', 'Outline Studio',
      'Pixelcraft', 'Quill Collective', 'Render Studio', 'Studioform', 'Tone & Texture',
      'Uplift Creative', 'Vividform', 'Warp Studio', 'Xpress Design', 'Yield Creative',
    ],
  },
  {
    category: 'Finance & Investment',
    icon: '📊',
    names: [
      'Altacapital', 'Bluechip Partners', 'Capital Forge', 'Delta Ventures', 'Equity Works',
      'Forge Capital', 'Goldleaf Investments', 'Haven Partners', 'Ironclad Capital', 'Junction Finance',
      'Keystone Capital', 'Ledger Point', 'Meridian Capital', 'Northstar Finance', 'Opal Investments',
      'Pinnacle Capital', 'Quarry Partners', 'Reserve Group', 'Sterling Capital', 'Truevest Partners',
      'Union Capital', 'Vault Partners', 'Wealthmark', 'Xpoint Capital', 'Zenith Finance',
    ],
  },
  {
    category: 'Healthcare & Biotech',
    icon: '🏥',
    names: [
      'Biocrest', 'Caredyne', 'Cellmark', 'Dockline', 'Elara Health',
      'Floral Medical', 'Genpath', 'Healthbridge', 'Ionic Therapeutics', 'Jupiter Health',
      'Kinedge', 'Lifepath', 'Medpoint', 'Nova Health Group', 'Omnicare',
      'Providence Health', 'Quantum Bio', 'Remedica', 'Solace Health', 'Truemed',
      'Unimed', 'Vital Works', 'Wellpath Group', 'Xenacare', 'Zephyr Health',
    ],
  },
  {
    category: 'E-Commerce & Retail',
    icon: '🛒',
    names: [
      'Alphabay', 'Bloom & Cart', 'Cartworks', 'Drift Market', 'Evergoods',
      'Flashbay', 'Goodsift', 'Homespin', 'Iron & Oak Co.', 'Junction Goods',
      'Keen Market', 'Luxe Cart', 'Mint & Co.', 'Nextdoor Goods', 'Orbit Commerce',
      'Popshop', 'Quickcart', 'Ridge Supply Co.', 'Shelf & Co.', 'Tradehill',
      'Unboxed', 'Vault Goods', 'Waresmith', 'Xpress Market', 'Yield Retail',
    ],
  },
  {
    category: 'Real Estate & Property',
    icon: '🏠',
    names: [
      'Anchor Realty', 'Bluefield Properties', 'Corepoint Group', 'Denali Real Estate', 'Everest Holdings',
      'Fieldstone Realty', 'Granite Properties', 'Highland Group', 'Ironclad Realty', 'Keystone Holdings',
      'Landmark Properties', 'Meridian Realty', 'Noble Holdings', 'Oakmont Group', 'Pinnacle Realty',
      'Quarry Properties', 'Ridgeline Holdings', 'Summit Realty', 'Truenorth Properties', 'Unity Holdings',
      'Valley Group', 'Westmark Realty', 'Xenith Properties', 'Yield Holdings', 'Zenith Realty',
    ],
  },
  {
    category: 'Food & Beverage',
    icon: '🍽️',
    names: [
      'Ash & Oak Co.', 'Brass Table', 'Copper Kettle Co.', 'Driftwood Kitchen', 'Ember & Rye',
      'Fireside Group', 'Goldleaf Kitchen', 'Harvest Table Co.', 'Iron Chef Co.', 'Juniper Foods',
      'Kindred Kitchen', 'Lark & Co.', 'Malt House', 'Noodle Works Co.', 'Ovenheart',
      'Pepper & Co.', 'Quince Kitchen', 'Roast & Root Co.', 'Stonefire Group', 'Thyme & Iron',
      'Umami Co.', 'Vine & Dine', 'Wildroot Kitchen', 'Yolk Co.', 'Zest Kitchen Group',
    ],
  },
]

const NAMING_STRATEGIES = [
  {
    title: 'The Compound Strategy',
    description: 'Combine two real words to create something new and memorable.',
    examples: ['Face(book)', 'You(Tube)', 'Snap(chat)', 'Pin(terest)', 'Air(bnb)'],
    bestFor: 'Tech startups, apps, SaaS — anywhere you want a name that feels modern and digital.',
    tip: 'Pick one word that describes what you do and one that describes how it feels. "Data" + "cove" = Datacove.',
  },
  {
    title: 'The Invented Word Strategy',
    description: 'Create a completely new word that sounds like it could be real.',
    examples: ['Kodak', 'Rolex', 'Exxon', 'Verizon', 'Accenture'],
    bestFor: 'Companies that want to own their brand identity completely — no trademark conflicts, no SEO competition.',
    tip: 'Use sounds that evoke your industry. Hard consonants (K, X, Z) feel techy. Soft sounds (L, M, S) feel approachable.',
  },
  {
    title: 'The Metaphor Strategy',
    description: 'Name your company after something that symbolizes what you stand for.',
    examples: ['Amazon', 'Nike', 'Patagonia', 'Caterpillar', 'Puma'],
    bestFor: 'Companies with a strong mission or identity — especially in B2B, consulting, and professional services.',
    tip: 'Think about what your company represents at its core. Speed? Strength? Growth? Find a natural metaphor for that.',
  },
  {
    title: 'The Founder Name Strategy',
    description: 'Use the founder\'s name — real or modified — as the company identity.',
    examples: ['Goldman Sachs', 'J.P. Morgan', 'Boeing', 'Ferrari', 'Hewlett-Packard'],
    bestFor: 'Professional services, law firms, financial companies, and luxury brands where personal credibility matters.',
    tip: 'You don\'t have to use your exact name. Modify it, combine it, or use just your first initial for a cleaner sound.',
  },
  {
    title: 'The Acronym Strategy',
    description: 'Create a name from initials — either meaningful or abstract.',
    examples: ['IBM', 'IKEA', 'SAP', 'H&M', 'KPMG'],
    bestFor: 'B2B companies, government contractors, and organizations that value gravitas and authority.',
    tip: 'The best acronyms spell a real word or are easy to say as a word (IKEA, not I-K-E-A).',
  },
  {
    title: 'The Foreign Word Strategy',
    description: 'Borrow a word from another language that captures your company essence.',
    examples: ['Alibaba', 'Lego', 'Samsung', 'Hakuna', 'Asana'],
    bestFor: 'Companies that want a name with depth and story — especially lifestyle, wellness, and creative brands.',
    tip: 'Always check that the word doesn\'t have negative meanings in other languages. And make sure your target audience can spell and pronounce it.',
  },
]

const FAQ_ITEMS = [
  {
    question: 'Is the BrandForge company name generator free?',
    answer: 'Yes! You get 5 free name generations, each returning 5 unique company name suggestions. That\'s 25 free name ideas with no credit card required. If you want a complete brand kit with logo concept, color palette, tagline, and domain availability, you can upgrade for $9 per brand kit.',
  },
  {
    question: 'What makes a good company name?',
    answer: 'A good company name is memorable, easy to spell and pronounce, reflects your brand\'s personality, and is available as a .com domain and on social platforms. The best names are short (1-3 syllables), distinctive in your industry, and flexible enough to grow with your business.',
  },
  {
    question: 'How is a company name different from a business name?',
    answer: 'A company name is the legal entity name registered with your state (e.g., "Acme Technologies, Inc." or "Smith & Jones, LLC"). A business name or "doing business as" (DBA) name is the public-facing name customers see. Your company name and business name can be different — many companies register a legal entity name and operate under a shorter brand name.',
  },
  {
    question: 'Should I include "Inc." or "LLC" in my company name?',
    answer: 'For branding purposes, no. Keep your public-facing name clean and memorable — "Acme" not "Acme Technologies, LLC." The legal designation goes on contracts and legal documents, not your logo, website, or marketing materials. Most successful companies drop the legal suffix from their brand entirely.',
  },
  {
    question: 'How do I check if a company name is taken?',
    answer: 'Check four things: (1) Domain availability — search for the .com version. (2) Trademark search — use the USPTO\'s TESS database. (3) State business registry — search your state\'s Secretary of State database. (4) Social media handles — check Twitter/X, Instagram, and LinkedIn. BrandForge automatically checks domain and social availability for every name it generates.',
  },
  {
    question: 'Can I trademark a company name generated by AI?',
    answer: 'Yes! Names generated by BrandForge are original creations — they don\'t copy existing trademarks. However, you should always do a proper trademark search before committing, as similar names may exist independently. We recommend filing a trademark application once you\'ve confirmed availability.',
  },
  {
    question: 'What if the .com domain is taken?',
    answer: 'You have several options: (1) Try a different TLD like .co, .io, or .ai — these are increasingly popular for companies. (2) Add a modifier like "get" or "try" (getacme.com). (3) Use your company name with a descriptor (acmetech.com). (4) Consider modifying the name slightly. BrandForge shows domain availability in real-time so you can find an available option fast.',
  },
  {
    question: 'How long should a company name be?',
    answer: 'The best company names are 1-2 words and 5-12 characters. Shorter names are easier to remember, type, and fit on logos and social media. Think of the biggest companies in the world: Apple, Nike, Tesla, Uber — all one word, all under 7 letters. If your name is longer, make sure it has a natural abbreviation.',
  },
]

const RELATED_POSTS = [
  { slug: 'business-name-generator', title: 'Business Name Generator: 300+ Name Ideas for 2026', category: 'Naming' },
  { slug: 'brand-name-generator', title: 'Brand Name Generator: How to Find the Perfect Brand Name in 2026', category: 'Naming' },
  { slug: 'how-to-choose-business-name', title: 'How to Choose a Business Name: The Complete Guide for 2026', category: 'Naming' },
  { slug: 'llc-naming-guide', title: 'How to Pick a Name for Your LLC: The Legal & Branding Guide', category: 'Legal' },
  { slug: 'company-name-checker', title: 'Company Name Checker: How to Verify Your Business Name Is Available', category: 'Legal' },
  { slug: 'startup-naming-mistakes', title: '7 Naming Mistakes That Kill Startups (Before They Even Launch)', category: 'Naming' },
  { slug: 'startup-name-ideas', title: 'Startup Name Ideas: 300+ Names for Startups in 2026', category: 'Naming' },
]

export default function CompanyNameGeneratorPage() {
  return (
    <>
      <BlogPostSchema
        title="Company Name Generator: 250+ Name Ideas for 2026 + Free AI Tool"
        description="The #1 free company name generator — get AI-powered company name ideas with instant domain and social availability checks. 250+ name ideas by industry, 6 naming strategies, and a step-by-step process."
        url="https://brandforge.app/blog/company-name-generator"
        datePublished="2026-07-07T12:00:00.000Z"
        dateModified="2026-07-07T12:00:00.000Z"
        keywords={[
          'company name generator',
          'company name ideas',
          'how to name a company',
          'company names',
          'free company name generator',
          'AI company name generator',
          'best company name generator',
          'company name checker',
          'corporate name generator',
          'startup company names',
        ]}
      />
      <HowToSchema
        name="How to Name Your Company in 5 Steps"
        description="A proven 5-step process for naming your company — from defining your company identity to testing with real people."
        url="/blog/company-name-generator"
        totalTime="PT30M"
        estimatedCost="$0"
        steps={[
          { name: 'Define Your Company\'s Identity', text: 'Write down 3-5 words that describe what your company does, who it serves, and how it should feel. This is your naming brief — it separates a great name from a random one.' },
          { name: 'Generate 20+ Name Options', text: 'Use an AI generator with your naming brief. Run it 4-5 times with different descriptions to get variety. Don\'t filter yet — quantity breeds quality.' },
          { name: 'Filter Ruthlessly', text: 'Cross off anything that is hard to spell, sounds like a competitor, could be mispronounced, doesn\'t feel right when said out loud, or has a .com domain that\'s taken. Aim for 5-7 names.' },
          { name: 'Validate Your Shortlist', text: 'Check domain availability, trademark conflicts via USPTO, social handles on Twitter/X, Instagram, LinkedIn, and Google search results. BrandForge checks domain and social automatically.' },
          { name: 'Test & Commit', text: 'Say the name out loud in a sentence. Ask 5 people in your target audience what they think. Sleep on it. If it still feels right the next day, you\'ve found your name.' },
        ]}
      />

      {/* FAQ Schema for rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQ_ITEMS.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-slate-500" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li><Link href="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link href="/blog" className="hover:text-brand-600 transition-colors">Blog</Link></li>
            <li>/</li>
            <li className="text-slate-900 font-medium">Company Name Generator</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="mb-4">
            <span className="inline-flex items-center rounded-full bg-brand-100 px-3 py-1 text-xs font-medium text-brand-700">
              Naming
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Company Name Generator: 250+ Name Ideas for 2026
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl">
            The #1 free AI company name generator — 250+ name ideas organized by industry, 6 proven naming strategies behind the world&apos;s best companies, and instant domain availability checks. Find the perfect name for your company today.
          </p>
          <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
            <time dateTime="2026-07-07">July 7, 2026</time>
            <span>·</span>
            <span>15 min read</span>
            <span>·</span>
            <span>By BrandForge Team</span>
          </div>
        </header>

        {/* CTA Banner */}
        <div className="mb-12 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-700 p-8 text-center text-white">
          <h2 className="text-xl sm:text-2xl font-bold">Generate Company Names with AI — Free</h2>
          <p className="mt-2 text-brand-100 max-w-lg mx-auto">
            Describe your company idea and get 5 unique names with brand kits, domain checks, and social availability. No signup required.
          </p>
          <a
            href="/generate"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-semibold text-brand-700 shadow-lg hover:bg-gray-50 transition-colors"
          >
            Try It Free
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        {/* Name Ideas by Industry */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">
            250+ Company Name Ideas by Industry
          </h2>
          <p className="text-slate-600 mb-8">
            Browse company name ideas across 8 industries. Each name was generated to be memorable, brandable, and available-friendly. Click any industry to jump to its section, or use our AI generator above for custom results.
          </p>

          <div className="space-y-8">
            {NAME_IDEAS.map((category) => (
              <div key={category.category} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  {category.icon} {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.names.map((name) => (
                    <span
                      key={name}
                      className="inline-flex items-center rounded-lg bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-700 transition-colors cursor-default"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-brand-50 border border-brand-200 p-6 text-center">
            <p className="text-brand-800 font-semibold">
              Want names tailored to YOUR specific company idea?
            </p>
            <p className="mt-1 text-brand-600 text-sm">
              Our AI generates custom names based on your description — not generic lists.
            </p>
            <a href="/generate" className="mt-3 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 transition-colors">
              Generate Custom Names — Free
            </a>
          </div>
        </section>

        {/* Naming Strategies */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">
            6 Proven Company Naming Strategies
          </h2>
          <p className="text-slate-600 mb-8">
            Every great company name follows at least one of these six strategies. Here&apos;s how they work — with real examples from companies you know.
          </p>

          <div className="space-y-8">
            {NAMING_STRATEGIES.map((strategy, i) => (
              <div key={strategy.title} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-brand-700 font-bold text-sm">
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">{strategy.title}</h3>
                </div>
                <p className="text-slate-600 mb-4">{strategy.description}</p>
                <div className="mb-4">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Real Examples</p>
                  <div className="flex flex-wrap gap-2">
                    {strategy.examples.map((example) => (
                      <span key={example} className="inline-flex items-center rounded-lg bg-purple-50 px-3 py-1 text-sm font-medium text-purple-700">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mb-3">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Best For</p>
                  <p className="text-sm text-slate-600">{strategy.bestFor}</p>
                </div>
                <div className="rounded-xl bg-brand-50 p-4">
                  <p className="text-sm text-brand-800">
                    <span className="font-semibold">💡 Pro Tip:</span> {strategy.tip}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How to Name Your Company - Step by Step */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">
            How to Name Your Company in 5 Steps
          </h2>
          <p className="text-slate-600 mb-8">
            Don&apos;t just pick a name — follow a process that gives you confidence. Here&apos;s the same framework used by naming agencies (minus the $50K price tag).
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Define Your Company&apos;s Identity</h3>
                <p className="mt-1 text-slate-600">Before you generate a single name, write down 3-5 words that describe what your company does, who it serves, and how it should feel. This is your naming brief — it&apos;s what separates a great name from a random one. Example: &quot;B2B software, mid-market, trustworthy, innovative.&quot;</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Generate 20+ Name Options</h3>
                <p className="mt-1 text-slate-600">Use BrandForge&apos;s AI generator with your naming brief. Run it 4-5 times with different descriptions to get variety. Don&apos;t filter yet — quantity breeds quality. The best names often come from the 3rd or 4th batch, not the 1st.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Filter Ruthlessly</h3>
                <p className="mt-1 text-slate-600">Cross off anything that: is hard to spell, sounds like a competitor, could be mispronounced, doesn&apos;t feel right when you say it out loud, or has a .com domain that&apos;s taken. Aim for a shortlist of 5-7 names.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Validate Your Shortlist</h3>
                <p className="mt-1 text-slate-600">For each name on your shortlist, check: (1) Domain availability — .com is ideal, but .co and .io work too. (2) Trademark conflicts — search USPTO. (3) Social handles — Twitter/X, Instagram, LinkedIn. (4) Google the name — are there negative associations? BrandForge checks domain and social automatically.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white font-bold text-lg">
                5
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Test & Commit</h3>
                <p className="mt-1 text-slate-600">Say the name out loud in a sentence (&quot;I&apos;m calling from [name].&quot;). Ask 5 people who match your target audience what they think. Sleep on it. If it still feels right the next day, you&apos;ve found your name. Now go get the brand kit and make it official.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-gradient-to-br from-brand-50 to-purple-50 p-6 text-center">
            <p className="font-semibold text-slate-900">BrandForge handles steps 2-4 automatically.</p>
            <p className="mt-1 text-sm text-slate-600">Generate names, check domains, verify social availability — all in one tool.</p>
            <a href="/generate" className="mt-3 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 transition-colors">
              Start Generating — It&apos;s Free
            </a>
          </div>
        </section>

        {/* Company vs Brand vs Business Name */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">
            Company Name vs. Brand Name vs. Business Name: What&apos;s the Difference?
          </h2>
          <p className="text-slate-600 mb-6">
            These terms get used interchangeably, but they&apos;re not the same thing. Understanding the difference matters for legal, branding, and SEO reasons.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-3 px-4 font-semibold text-slate-900 bg-slate-50 rounded-tl-lg">Term</th>
                  <th className="py-3 px-4 font-semibold text-slate-900 bg-slate-50">What It Is</th>
                  <th className="py-3 px-4 font-semibold text-slate-900 bg-slate-50">Example</th>
                  <th className="py-3 px-4 font-semibold text-slate-900 bg-slate-50 rounded-tr-lg">Use Case</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 font-medium text-brand-700">Company Name</td>
                  <td className="py-3 px-4 text-slate-600">The legal entity name registered with your state</td>
                  <td className="py-3 px-4 text-slate-600 italic">Alphabet Inc.</td>
                  <td className="py-3 px-4 text-slate-600">Legal documents, contracts, tax filings</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 font-medium text-brand-700">Brand Name</td>
                  <td className="py-3 px-4 text-slate-600">The public-facing name customers know you by</td>
                  <td className="py-3 px-4 text-slate-600 italic">Google</td>
                  <td className="py-3 px-4 text-slate-600">Marketing, website, social media, logo</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-brand-700">Business Name (DBA)</td>
                  <td className="py-3 px-4 text-slate-600">A &quot;doing business as&quot; name — a registered trade name</td>
                  <td className="py-3 px-4 text-slate-600 italic">Google LLC (operating as Google)</td>
                  <td className="py-3 px-4 text-slate-600">Bank accounts, invoices, local registrations</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-xl bg-amber-50 border border-amber-200 p-4">
            <p className="text-sm text-amber-800">
              <span className="font-semibold">⚡ Key insight:</span> Your company name, brand name, and DBA can all be different. Alphabet Inc. is the company — Google is the brand. When people search for your company, they search for your brand name. That&apos;s why your brand name should be short, memorable, and easy to spell.
            </p>
          </div>
        </section>

        {/* Common Naming Mistakes */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">
            5 Company Naming Mistakes to Avoid
          </h2>
          <p className="text-slate-600 mb-8">
            These are the traps that founders fall into over and over. Learn from their mistakes — not your own.
          </p>

          <div className="space-y-4">
            <div className="rounded-xl border border-red-200 bg-red-50 p-5">
              <h3 className="font-bold text-red-900">❌ Choosing a name you can&apos;t spell on the phone</h3>
              <p className="mt-1 text-red-700 text-sm">If you have to spell your name out letter by letter every time you say it, it&apos;s too complicated. The best names are self-spelling. <span className="font-semibold">Instead:</span> Pick a name where there&apos;s only one obvious spelling.</p>
            </div>
            <div className="rounded-xl border border-red-200 bg-red-50 p-5">
              <h3 className="font-bold text-red-900">❌ Using your initials or a generic descriptor</h3>
              <p className="mt-1 text-red-700 text-sm">&quot;JDR Consulting&quot; tells people nothing. &quot;Premier Business Solutions&quot; is so generic it&apos;s invisible. <span className="font-semibold">Instead:</span> Use a name that signals what makes you different, not just that you exist.</p>
            </div>
            <div className="rounded-xl border border-red-200 bg-red-50 p-5">
              <h3 className="font-bold text-red-900">❌ Picking a name that limits your growth</h3>
              <p className="mt-1 text-red-700 text-sm">&quot;Austin Plumbing Pros&quot; works great in Austin. But what happens when you expand to Dallas? Or add HVAC? <span className="font-semibold">Instead:</span> Choose a name that&apos;s big enough to grow into, not just descriptive of where you are today.</p>
            </div>
            <div className="rounded-xl border border-red-200 bg-red-50 p-5">
              <h3 className="font-bold text-red-900">❌ Skipping the trademark search</h3>
              <p className="mt-1 text-red-700 text-sm">Spending months building a brand and then getting a cease-and-desist is the worst-case scenario. A quick USPTO search takes 10 minutes and can save you thousands. <span className="font-semibold">Instead:</span> Always check trademarks before committing.</p>
            </div>
            <div className="rounded-xl border border-red-200 bg-red-50 p-5">
              <h3 className="font-bold text-red-900">❌ Naming by committee</h3>
              <p className="mt-1 text-red-700 text-sm">The more people involved in naming, the more you&apos;ll gravitate toward safe, boring names. Great names have edge — they&apos;re not everyone&apos;s first choice. <span className="font-semibold">Instead:</span> Get input from 3-5 people who match your target audience, not your friends and family.</p>
            </div>
          </div>
        </section>

        {/* Industry-Specific Generators */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">
            Industry-Specific Company Name Generators
          </h2>
          <p className="text-slate-600 mb-6">
            Generic names work for brainstorming, but industry-specific names convert better. Use our industry-tuned generators for names that actually fit your niche:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {[
              { emoji: '🚀', name: 'Startup', href: '/startup-name-generator' },
              { emoji: '🍽️', name: 'Restaurant', href: '/restaurant-name-generator' },
              { emoji: '💪', name: 'Fitness', href: '/fitness-brand-name-generator' },
              { emoji: '🏠', name: 'Real Estate', href: '/real-estate-name-generator' },
              { emoji: '📸', name: 'Photography', href: '/photography-name-generator' },
              { emoji: '💄', name: 'Beauty', href: '/beauty-name-generator' },
              { emoji: '👗', name: 'Fashion', href: '/fashion-name-generator' },
              { emoji: '🚚', name: 'Food Truck', href: '/food-truck-name-generator' },
              { emoji: '💻', name: 'Tech', href: '/tech-name-generator' },
              { emoji: '📊', name: 'Consulting', href: '/consulting-name-generator' },
              { emoji: '🎙️', name: 'Podcast', href: '/podcast-name-generator' },
              { emoji: '💡', name: 'Coaching', href: '/coaching-name-generator' },
              { emoji: '🌍', name: 'Nonprofit', href: '/nonprofit-name-generator' },
              { emoji: '✂️', name: 'Craft', href: '/craft-name-generator' },
              { emoji: '📚', name: 'Education', href: '/education-name-generator' },
              { emoji: '🧘', name: 'Yoga', href: '/yoga-name-generator' },
              { emoji: '☕', name: 'Coffee', href: '/coffee-name-generator' },
              { emoji: '🎵', name: 'Music', href: '/music-name-generator' },
              { emoji: '💍', name: 'Wedding', href: '/wedding-name-generator' },
              { emoji: '🧹', name: 'Cleaning', href: '/cleaning-business-name-generator' },
              { emoji: '🐾', name: 'Pet', href: '/pet-name-generator' },
              { emoji: '🌿', name: 'Landscaping', href: '/landscaping-name-generator' },
              { emoji: '💇', name: 'Salon', href: '/salon-name-generator' },
              { emoji: '🏗️', name: 'Construction', href: '/construction-name-generator' },
              { emoji: '📈', name: 'Marketing Agency', href: '/marketing-agency-name-generator' },
            ].map((industry) => (
              <Link
                key={industry.href}
                href={industry.href}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 transition-all"
              >
                <span>{industry.emoji}</span>
                <span>{industry.name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((faq, i) => (
              <details key={i} className="group rounded-2xl border border-slate-200 bg-white">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-base font-semibold text-slate-900 hover:bg-slate-50 transition-colors rounded-2xl">
                  {faq.question}
                  <svg
                    className="h-5 w-5 text-slate-500 flex-shrink-0 ml-4 transition-transform duration-200 group-open:rotate-180"
                    fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <div className="px-6 pb-4 text-sm text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Related Posts */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-6">
            Continue Reading
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {RELATED_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-md transition-all"
              >
                <span className="inline-flex items-center rounded-full bg-brand-100 px-2.5 py-0.5 text-xs font-medium text-brand-700">
                  {post.category}
                </span>
                <h3 className="mt-2 font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">
                  {post.title}
                </h3>
                <span className="mt-1 inline-flex items-center text-sm text-brand-600 font-medium">
                  Read article
                  <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to Name Your Company?
          </h2>
          <p className="mt-3 text-slate-300 max-w-lg mx-auto">
            Describe your company idea and get 5 unique names with brand kits, domain checks, and social availability — free.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-brand-700 transition-colors"
            >
              Generate Company Names — Free
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-slate-600 px-8 py-3 text-base font-semibold text-slate-300 hover:bg-slate-700 transition-colors"
            >
              See Pricing
            </a>
          </div>
        </section>

        {/* Newsletter */}
        <div className="mt-12">
          <NewsletterCta />
        </div>
      </article>
    </>
  )
}