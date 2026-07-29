import type { Metadata } from 'next'
import Link from 'next/link'
import { NewsletterCta } from '@/components/NewsletterCta'
import { BlogPostSchema } from '@/components/BlogPostSchema'

export const metadata: Metadata = {
  title: 'Small Business Name Generator: 200+ Name Ideas for 2026',
  description: 'Struggling to name your small business? Get 200+ small business name ideas organized by type, learn the 7 naming frameworks that work, and use our free AI generator to find available names instantly.',
  keywords: [
    'small business name generator',
    'small business name ideas',
    'small business names',
    'how to name a small business',
    'small business naming',
    'best small business names',
    'creative small business names',
    'small business name ideas 2026',
    'naming your small business',
    'small business brand names',
    'small business name checker',
    'unique small business names',
  ],
  openGraph: {
    title: 'Small Business Name Generator: 200+ Name Ideas for 2026',
    description: '200+ small business name ideas, 7 naming frameworks, and a free AI tool that checks domain availability. Find the perfect name for your small business.',
    url: 'https://brandforge.app/blog/small-business-name-generator',
    siteName: 'BrandForge',
    type: 'article',
    publishedTime: '2026-06-09T12:00:00.000Z',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Small Business Name Generator: 200+ Name Ideas for 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Small Business Name Generator: 200+ Name Ideas for 2026',
    description: '200+ small business name ideas organized by type, plus 7 naming frameworks and a free AI generator.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: 'https://brandforge.app/blog/small-business-name-generator',
  },
  robots: { index: true, follow: true },
}

const NAME_IDEAS = [
  {
    category: 'Service-Based Businesses',
    icon: '🔧',
    names: [
      'Apex & Co.',
      'Brightspark',
      'Cornerstone Services',
      'Dovetail',
      'Everfix',
      'Forge Works',
      'Giltedge',
      'Hearth & Home',
      'Ironclad Services',
      'Keystone Pro',
      'Lighthouse Ops',
      'Mainstay',
      'Northpoint',
      'Oakheart Services',
      'Precision Hub',
      'Quillcraft',
      'Reliant',
      'Solidground',
      'Truepath',
      'Vantage Works',
    ],
  },
  {
    category: 'Retail & E-Commerce',
    icon: '🛍️',
    names: [
      'Amber & Elm',
      'Brick & Bloom',
      'Copper Cart',
      'Drift Market',
      'Everlane Co.',
      'Folk & Found',
      'Goldthread',
      'Harbor Goods',
      'Indigo Retail',
      'June & Co.',
      'Kindred Market',
      'Linen & Lodge',
      'Moss & Iron',
      'Newleaf Shop',
      'Oaken Collective',
      'Pine & Pearl',
      'Quarry Goods',
      'Riversend',
      'Sage & Stone',
      'Timber & Tide',
    ],
  },
  {
    category: 'Food & Beverage',
    icon: '🍽️',
    names: [
      'Ash & Ember',
      'Brine & Co.',
      'Copper Kettle',
      'Dough & Co.',
      'Ember Kitchen',
      'Fireside Eats',
      'Grit & Grain',
      'Hearthstone',
      'Ivy Kitchen',
      'Juniper Table',
      'Kindling',
      'Lark Bistro',
      'Malt & Co.',
      'Noodle & Oak',
      'Ovenheart',
      'Pepper & Rye',
      'Quince Kitchen',
      'Roast & Root',
      'Stone Soup Co.',
      'Thyme & Iron',
    ],
  },
  {
    category: 'Health & Wellness',
    icon: '💚',
    names: [
      'Align Wellness',
      'Bloom Health',
      'Calmroot',
      'Dailybalance',
      'Everwell',
      'Freshstart Health',
      'Greenpath Wellness',
      'Harmony Hub',
      'Innerbloom',
      'Joyful Health',
      'Kin Wellness',
      'Lifebalance',
      'Meridian Health',
      'Nourish Co.',
      'Oneleaf Wellness',
      'Purewell',
      'Quietstrength',
      'Root & Rest',
      'Stillpoint',
      'Vitalroot',
    ],
  },
  {
    category: 'Creative & Design',
    icon: '🎨',
    names: [
      'Alto Design',
      'Brushwork Studio',
      'Chromalink',
      'Draft & Draw',
      'Ember Creative',
      'Figment Studio',
      'Glyph & Grid',
      'Hue & Craft',
      'Inkwell Studio',
      'Junction Design',
      'Kinetic Studio',
      'Layer & Light',
      'Mosaic Co.',
      'Nimble Creative',
      'Outline Studio',
      'Pixelcraft',
      'Quill & Canvas',
      'Render Co.',
      'Studioform',
      'Tone & Texture',
    ],
  },
  {
    category: 'Professional Services',
    icon: '💼',
    names: [
      'Archpoint Consulting',
      'Beacon Advisory',
      'Clearpath Group',
      'Driver & Associates',
      'Elevate Consulting',
      'Foresight Group',
      'Granite Partners',
      'Horizon Advisory',
      'Ironbridge Consulting',
      'Keystone Group',
      'Landmark Partners',
      'Meridian Advisory',
      'Nexus Consulting',
      'Olympus Group',
      'Pinnacle Partners',
      'Quorum Consulting',
      'Ridgeline Advisory',
      'Summit Group',
      'Turnkey Partners',
      'Vanguard Consulting',
    ],
  },
  {
    category: 'Home & Local Services',
    icon: '🏠',
    names: [
      'Anchor Home Services',
      'Brightwork',
      'Clover Home Co.',
      'Doorstep Services',
      'Evergreen Home',
      'Fireside Services',
      'Greensight',
      'Homebase Co.',
      'Insulate Pro',
      'Joystick Home',
      'Kindkeep',
      'Localroot',
      'Maple Home Services',
      'Neighborly Pro',
      'Oakdale Services',
      'Porch & Home',
      'Quill Home Co.',
      'Rooted Services',
      'Shield Home',
      'Timbercraft',
    ],
  },
  {
    category: 'Tech & Digital',
    icon: '💻',
    names: [
      'Codeflow',
      'Dataforge',
      'Emberstack',
      'Fluxlogic',
      'Gridpulse',
      'Hackstack',
      'Iterate Co.',
      'Jumpnode',
      'Kineticode',
      'Launchpad Dev',
      'Meshpoint',
      'Nexadev',
      'Onward Digital',
      'Pixelshift',
      'Quantum Logic',
      'Rapiddeploy',
      'Signalstack',
      'Toggledev',
      'Uplink Co.',
      'Vertex Digital',
    ],
  },
]

const NAMING_FRAMEWORKS = [
  {
    name: 'The Founder Name',
    description: 'Name your business after yourself or a partner. Simple, authentic, and memorable. Works best when your personal reputation is the product.',
    examples: ['Ben & Jerry\'s', 'Merrill Lynch', 'McKinsey', 'Holland & Barrett'],
    bestFor: 'Consulting, law firms, boutique agencies, personal brands',
    when: 'Your name IS the brand promise — trust, expertise, personal guarantee.',
  },
  {
    name: 'The Compound Word',
    description: 'Combine two real words to create something new. Instant meaning, easy to remember, and usually available as a .com.',
    examples: ['Salesforce', 'Facebook', 'Dropbox', 'Bluebird'],
    bestFor: 'Tech startups, apps, modern service businesses',
    when: 'You want a name that explains itself in two words or less.',
  },
  {
    name: 'The Invented Word',
    description: 'A made-up word that sounds natural. Distinctive, ownable, and almost always available as a domain. Harder to spell but very memorable once learned.',
    examples: ['Kodak', 'Spotify', 'Zillow', 'Etsy'],
    bestFor: 'Consumer brands, tech products, anything that needs to stand out',
    when: 'You need a name that no one else has — and you\'re willing to invest in teaching people how to spell it.',
  },
  {
    name: 'The Metaphor',
    description: 'A name that evokes an image, feeling, or story. Builds instant emotional connections and differentiates you from literal competitors.',
    examples: ['Amazon', 'Nike', 'Patagonia', 'Warby Parker'],
    bestFor: 'Lifestyle brands, outdoor companies, creative businesses',
    when: 'You want emotional resonance over literal description.',
  },
  {
    name: 'The Acronym',
    description: 'Short, punchy, and professional. Works when the full name is too long or when you want a clean, corporate feel.',
    examples: ['IBM', 'IKEA', 'SAP', 'KPMG'],
    bestFor: 'B2B companies, enterprise services, organizations',
    when: 'Your full name is a mouthful and you need something people can say quickly.',
  },
  {
    name: 'The Real Word',
    description: 'A common dictionary word repurposed as a brand name. Familiar, meaningful, and easy to remember — but domain availability can be tricky.',
    examples: ['Apple', 'Stripe', 'Square', 'Trek'],
    bestFor: 'Brands that want simplicity and instant recognition',
    when: 'You find an evocative real word that your competitors aren\'t already using.',
  },
  {
    name: 'The Foreign Word',
    description: 'A word from another language that captures your brand\'s essence. Adds sophistication, mystery, or cultural depth.',
    examples: ['Lego (Danish: "play well")', 'Volvo (Latin: "I roll")', 'Sony (from sonus, Latin for "sound")', 'Acer (Latin: "sharp")'],
    bestFor: 'Luxury brands, restaurants, fashion, artisan businesses',
    when: 'You want a name that feels worldly and meaningful without being common.',
  },
]

const STEPS = [
  {
    step: 1,
    title: 'Define your brand\'s DNA',
    description: 'Before you start brainstorming, get crystal clear on 3 things: who you serve, what makes you different, and the feeling you want your name to evoke. Write these down — they\'re your naming compass. A name that doesn\'t match your brand\'s essence is a name that confuses customers.',
    tip: 'Write a one-sentence positioning statement: "We help [audience] achieve [outcome] through [differentiator]." Your name should reinforce this.',
  },
  {
    step: 2,
    title: 'Generate 50+ name candidates',
    description: 'Use the 7 naming frameworks above to brainstorm at least 50 candidates. Don\'t filter yet — quantity first. Try each framework: compound words, metaphors, foreign words, founder names. The best names often come from unexpected categories.',
    tip: 'Set a timer for 15 minutes and write down every name idea without judging. Then use our free generator to get AI-powered suggestions based on your industry and style.',
  },
  {
    step: 3,
    title: 'Filter ruthlessly',
    description: 'Run every name through this checklist: Is it easy to spell? Easy to pronounce? Under 3 syllables? Not already trademarked? Available as a .com (or .co, .io, .ai for tech)? Does it feel right for your industry? Most names fail 2-3 of these tests.',
    tip: 'The "phone test" — say your name out loud in a sentence. "Hi, I\'m calling from [NAME]." If you cringe, keep looking.',
  },
  {
    step: 4,
    title: 'Validate availability',
    description: 'Check domain availability, social handles, and trademark databases simultaneously. A great name that\'s taken in all extensions isn\'t great — it\'s a future legal headache. Use our free domain and social handle checker to confirm availability in seconds.',
    tip: 'If the .com is taken, don\'t immediately reach for .co or .io. Consider adding a modifier ("Get[Name]", "[Name]App") or going back to your list.',
  },
  {
    step: 5,
    title: 'Test with real people',
    description: 'Share your top 3-5 names with 10 people in your target audience (not friends and family — they\'ll tell you what you want to hear). Ask them: What does this name make you think of? Would you trust a business with this name? Can you spell it after hearing it once?',
    tip: 'Create a simple survey asking for first impressions. You\'re not looking for consensus — you\'re looking for clarity. A name that some people love and some people hate is better than one everyone feels "meh" about.',
  },
]

const MISTAKES = [
  {
    mistake: 'Naming after your city',
    why: '"Austin Web Design" limits you if you expand. Geographic names are fine for local businesses, but they\'re a ceiling for growth.',
    instead: 'Use a name that evokes your values or approach, not your ZIP code. You can always add location keywords to your SEO.',
  },
  {
    mistake: 'Being too clever or punny',
    why: 'Puns age fast. What feels witty today feels cringe in 3 years. And if people don\'t get the joke, they won\'t remember the name.',
    instead: 'Aim for clarity first, personality second. "Mailchimp" works because "chimp" is memorable — not because it\'s a pun.',
  },
  {
    mistake: 'Using initials or abbreviations',
    why: '"JDR Solutions" means nothing to a potential customer. Initials are generic, forgettable, and impossible to Google. You\'ll always be competing with "JDR" car dealerships from New Jersey.',
    instead: 'Use a real word or compound. If you must abbreviate, make sure it\'s pronounceable (IKEA, not IA).',
  },
  {
    mistake: 'Copying your competitor\'s naming style',
    why: 'If every consulting firm is "Apex Consulting," then "Apex Consulting" doesn\'t mean anything. You blend in instead of standing out.',
    instead: 'Look at what your competitors are naming themselves — then do the opposite. If they\'re all corporate, go warm. If they\'re all literal, go metaphorical.',
  },
  {
    mistake: 'Skipping the trademark check',
    why: 'Falling in love with a name before checking trademarks is like falling in love with a house you can\'t afford. It\'s painful to let go, and rebranding costs 10x what a trademark search does.',
    instead: 'Check USPTO.gov early and often. When you find a name you like, run a quick TM search before you invest any energy in it.',
  },
]

export default function SmallBusinessNameGeneratorBlog() {
  const faqItems = [
    {
      q: 'What makes a good small business name?',
      a: 'A good small business name is memorable, easy to spell and pronounce, available as a domain, not trademarked by competitors, and aligned with your brand\'s values and target audience. The best names are under 3 syllables, evoke a positive feeling, and work well both spoken and written.',
    },
    {
      q: 'How do I check if a small business name is available?',
      a: 'Check three things: (1) Domain availability — use our free checker or search on a registrar like Namecheap. (2) Social handle availability — search on Twitter/X, Instagram, and Facebook. (3) Trademark status — search USPTO.gov for existing trademarks in your industry. If all three are clear, you\'re good to go.',
    },
    {
      q: 'Should my small business name include my industry?',
      a: 'It depends on your growth plans. Including your industry (like "Austin Plumbing Pros") helps with local SEO and immediacy, but it can become a ceiling if you expand. If you plan to stay local and specialized, an industry descriptor helps. If you want to grow beyond one niche, choose a flexible name and use your tagline or SEO to convey your specialty.',
    },
    {
      q: 'Should I use my own name for my small business?',
      a: 'Founder names work well for service businesses where your personal reputation is the brand — consulting, law, coaching, design. They\'re less effective for product businesses or if you plan to sell the company someday. A founder name is hard to transfer. If you might sell in the future, choose a standalone brand name instead.',
    },
    {
      q: 'What domain extension should I use for my small business?',
      a: '.com is still the gold standard — it\'s what people type by default. If your ideal .com is taken, consider .co (for companies), .io (for tech), or .ai (for AI products). Avoid obscure extensions like .xyz or .biz, which look spammy to customers. Adding a modifier to get the .com ("GetSpark.co" → "GetSparkApp.com") is often better than settling for a weird extension.',
    },
    {
      q: 'How long should a small business name be?',
      a: 'Aim for 1-2 words, under 12 characters, and under 3 syllables. The most memorable business names — Nike, Stripe, Slack, Apple — are short and punchy. If your name is long, customers will abbreviate it (and the abbreviation might already be someone else\'s trademark).',
    },
    {
      q: 'Can I change my small business name later?',
      a: 'Yes, but it\'s expensive. Rebranding a small business typically costs $5,000-$50,000 when you factor in new domain, legal filings, signage, packaging, marketing materials, and customer confusion. It\'s much cheaper to invest time upfront in finding the right name than to rebrand later.',
    },
    {
      q: 'Is a small business name generator worth using?',
      a: 'Yes — a good name generator gives you starting points you wouldn\'t think of on your own. The key is using it as inspiration, not a final answer. Generate 20-30 candidates with a tool, then narrow down using the 5-step validation process in this guide. Our AI-powered generator also checks domain and social availability in one step.',
    },
  ]

  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <BlogPostSchema
        title={metadata.title as string}
        description={metadata.description as string}
        url="https://brandforge.app/blog/small-business-name-generator"
        datePublished="2026-06-09"
        dateModified="2026-06-09"
        keywords={metadata.keywords as string[]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map((item) => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.a,
              },
            })),
          }),
        }}
      />

      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-slate-500">
        <Link href="/blog" className="hover:text-brand-600 transition-colors">Blog</Link>
        <span className="mx-2">→</span>
        <span className="text-slate-900">Small Business Name Generator</span>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">Naming</span>
          <span className="text-sm text-slate-400">June 9, 2026 · 10 min read</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Small Business Name Generator: 200+ Name Ideas for 2026
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-3xl">
          Struggling to name your small business? You&apos;re not alone — naming is the #1 creative blocker for new entrepreneurs. In this guide, you&apos;ll get 200+ name ideas organized by business type, learn the 7 naming frameworks behind the world&apos;s most iconic brands, and use our free AI generator to find available names instantly.
        </p>
      </header>

      {/* CTA Banner */}
      <div className="mb-12 rounded-2xl bg-gradient-to-br from-brand-500 to-purple-600 p-6 sm:p-8 text-white">
        <h2 className="text-xl font-bold mb-2">🎯 Free AI Small Business Name Generator</h2>
        <p className="text-white/90 mb-4">
          Enter your business description and get AI-generated name ideas with instant domain availability and social handle checks. Completely free to start.
        </p>
        <Link
          href="/generate"
          className="inline-flex items-center rounded-full bg-white px-6 py-3 font-semibold text-brand-600 hover:bg-white/90 transition-colors"
        >
          Generate Names Now →
        </Link>
      </div>

      {/* Name Ideas by Category */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">200+ Small Business Name Ideas by Category</h2>
        <p className="text-slate-600 mb-8">
          Browse name ideas organized by business type. Use these as starting points — then customize them with your unique angle, location, or specialty.
        </p>

        <div className="space-y-8">
          {NAME_IDEAS.map((category) => (
            <div key={category.category} className="rounded-2xl border border-slate-200 overflow-hidden">
              <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
                <h3 className="text-lg font-bold text-slate-900">{category.icon} {category.category}</h3>
              </div>
              <div className="px-6 py-4">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {category.names.map((name) => (
                    <Link
                      key={name}
                      href={`/generate?desc=${encodeURIComponent(`${category.category.toLowerCase()} named ${name}`)}`}
                      className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 transition-colors text-center"
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-slate-500">
          Want names tailored to YOUR business?{' '}
          <Link href="/generate" className="text-brand-600 font-semibold hover:underline">
            Try our AI generator →
          </Link>
        </p>
      </section>

      {/* 7 Naming Frameworks */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">7 Naming Frameworks That Work for Small Businesses</h2>
        <p className="text-slate-600 mb-8">
          Every great business name falls into one of these 7 categories. Understanding these frameworks is the key to naming — because once you know the pattern, you can generate unlimited variations.
        </p>

        <div className="space-y-6">
          {NAMING_FRAMEWORKS.map((framework, index) => (
            <div key={framework.name} className="rounded-2xl border border-slate-200 p-6">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-700 font-bold text-lg">
                  {index + 1}
                </span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{framework.name}</h3>
                  <p className="text-slate-600 mb-3">{framework.description}</p>
                  <div className="mb-3 flex flex-wrap gap-2">
                    {framework.examples.map((example) => (
                      <span key={example} className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                        {example}
                      </span>
                    ))}
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="font-semibold text-slate-900">Best for:</span>{' '}
                      <span className="text-slate-600">{framework.bestFor}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900">When to use:</span>{' '}
                      <span className="text-slate-600">{framework.when}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">How to Name Your Small Business in 5 Steps</h2>
        <p className="text-slate-600 mb-8">
          A systematic approach beats random brainstorming every time. Follow these 5 steps to go from blank page to final name.
        </p>

        <div className="space-y-8">
          {STEPS.map((item) => (
            <div key={item.step} className="relative pl-12">
              <div className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-white font-bold text-sm">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 mb-3">{item.description}</p>
              <div className="rounded-lg bg-amber-50 border border-amber-200 px-4 py-3 text-sm">
                <span className="font-semibold text-amber-800">💡 Pro tip:</span>{' '}
                <span className="text-amber-700">{item.tip}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">5 Small Business Naming Mistakes (and What to Do Instead)</h2>
        <p className="text-slate-600 mb-8">
          These are the traps that catch first-time entrepreneurs. Learn from others&apos; mistakes — not your own.
        </p>

        <div className="space-y-6">
          {MISTAKES.map((item) => (
            <div key={item.mistake} className="rounded-2xl border border-red-200 bg-red-50/50 p-6">
              <h3 className="text-lg font-bold text-red-800 mb-2">❌ {item.mistake}</h3>
              <p className="text-red-700 mb-3">{item.why}</p>
              <div className="rounded-lg bg-green-50 border border-green-200 px-4 py-3">
                <span className="font-semibold text-green-800">✅ Instead:</span>{' '}
                <span className="text-green-700">{item.instead}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industry-Specific Resources */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Industry-Specific Name Generators</h2>
        <p className="text-slate-600 mb-6">
          Looking for names tailored to your industry? We have dedicated name generators with industry-specific name ideas, tips, and examples:
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: 'Startup Names', href: '/startup-name-generator', desc: 'Tech, SaaS, and innovation-focused' },
            { name: 'Restaurant Names', href: '/restaurant-name-generator', desc: 'Restaurants, cafés, and food businesses' },
            { name: 'Fitness Brand Names', href: '/fitness-brand-name-generator', desc: 'Gyms, studios, and wellness brands' },
            { name: 'Real Estate Names', href: '/real-estate-name-generator', desc: 'Brokerages, agencies, and property firms' },
            { name: 'Photography Names', href: '/photography-name-generator', desc: 'Studios, portfolios, and photo businesses' },
            { name: 'Beauty Brand Names', href: '/beauty-name-generator', desc: 'Salons, skincare, and cosmetics' },
            { name: 'Fashion Brand Names', href: '/fashion-name-generator', desc: 'Clothing, accessories, and boutiques' },
            { name: 'Food Truck Names', href: '/food-truck-name-generator', desc: 'Food trucks, carts, and mobile kitchens' },
            { name: 'Tech Startup Names', href: '/tech-name-generator', desc: 'Apps, SaaS, and tech companies' },
            { name: 'Consulting Names', href: '/consulting-name-generator', desc: 'Agencies, advisory firms, and consultants' },
            { name: 'Podcast Names', href: '/podcast-name-generator', desc: 'Shows, channels, and media brands' },
            { name: 'Coaching Names', href: '/coaching-name-generator', desc: 'Life coaches, business coaches, and mentors' },
            { name: 'Nonprofit Names', href: '/nonprofit-name-generator', desc: 'Charities, foundations, and organizations' },
            { name: 'Craft Business Names', href: '/craft-name-generator', desc: 'Handmade, Etsy, and artisan brands' },
            { name: 'Education Names', href: '/education-name-generator', desc: 'Courses, academies, and EdTech' },
            { name: 'Yoga & Wellness Names', href: '/yoga-name-generator', desc: 'Studios, retreats, and mindfulness' },
            { name: 'Coffee Shop Names', href: '/coffee-name-generator', desc: 'Cafés, roasteries, and coffee brands' },
            { name: 'Music Brand Names', href: '/music-name-generator', desc: 'Bands, labels, and studios' },
            { name: 'Wedding Business Names', href: '/wedding-name-generator', desc: 'Venues, planners, and bridal brands' },
            { name: 'Cleaning Business Names', href: '/cleaning-business-name-generator', desc: 'Residential, commercial, and maid services' },
            { name: 'Pet Business Names', href: '/pet-name-generator', desc: 'Grooming, vet clinics, and pet stores' },
            { name: 'Marketing Agency Names', href: '/marketing-agency-name-generator', desc: 'Digital, creative, and ad agencies' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-xl border border-slate-200 p-4 hover:border-brand-300 hover:bg-brand-50/50 transition-colors"
            >
              <h4 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">{link.name}</h4>
              <p className="text-sm text-slate-500">{link.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqItems.map((item) => (
            <details key={item.q} className="group rounded-2xl border border-slate-200">
              <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-lg font-semibold text-slate-900">
                {item.q}
                <svg className="h-5 w-5 text-slate-400 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-6 pb-4 text-slate-600">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="rounded-2xl bg-gradient-to-br from-brand-50 via-white to-purple-50 border border-brand-200 p-8 sm:p-12 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-3">Ready to Find Your Small Business Name?</h2>
        <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
          Skip the brainstorming paralysis. Enter your business description and our AI will generate names with domain availability and social handle checks in seconds.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/generate"
            className="inline-flex items-center justify-center rounded-full bg-brand-600 px-8 py-3 font-semibold text-white hover:bg-brand-700 transition-colors"
          >
            Generate Names Free →
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-8 py-3 font-semibold text-slate-700 hover:border-brand-300 hover:text-brand-600 transition-colors"
          >
            View Brand Kit Pricing
          </Link>
        </div>
      </section>

      {/* Related Articles */}
      <section className="mt-16 pt-12 border-t border-slate-200">
        <h2 className="text-xl font-bold text-slate-900 mb-6">Related Articles</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { href: '/blog/how-to-choose-business-name', title: 'How to Choose a Business Name: The Complete Guide' },
            { href: '/blog/brand-name-generator', title: 'Brand Name Generator: How to Find the Perfect Brand Name' },
            { href: '/blog/catchy-business-names', title: '150+ Catchy Business Names for Every Industry' },
            { href: '/blog/llc-naming-guide', title: 'How to Pick a Name for Your LLC' },
            { href: '/blog/unique-business-names', title: 'Unique Business Names: 120+ Standout Ideas' },
            { href: '/blog/company-name-checker', title: 'Company Name Checker: How to Verify Availability' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-xl border border-slate-200 p-4 hover:border-brand-300 hover:bg-brand-50/50 transition-colors"
            >
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">{link.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <div className="mt-12">
        <NewsletterCta />
      </div>
    </article>
  )
}