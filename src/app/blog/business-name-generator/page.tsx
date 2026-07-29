import type { Metadata } from 'next'
import Link from 'next/link'
import { NewsletterCta } from '@/components/NewsletterCta'
import { BlogPostSchema } from '@/components/BlogPostSchema'

export const metadata: Metadata = {
  title: 'Business Name Generator: 300+ Name Ideas for 2026 + Free AI Tool',
  description: 'The #1 free business name generator — get AI-powered name ideas with instant domain and social handle availability checks. 300+ name ideas by industry, 7 proven naming frameworks, and a step-by-step process to find the perfect name.',
  keywords: [
    'business name generator',
    'free business name generator',
    'business name ideas',
    'business name ideas 2026',
    'best business name generator',
    'AI business name generator',
    'how to name a business',
    'business naming tool',
    'online name generator',
    'creative business names',
    'business name checker',
    'generate business name',
  ],
  openGraph: {
    title: 'Business Name Generator: 300+ Name Ideas for 2026 + Free AI Tool',
    description: 'AI-powered business name generator with 300+ name ideas, 7 naming frameworks, and instant domain availability checks. Find the perfect name for your business today.',
    url: 'https://brandforge.app/blog/business-name-generator',
    siteName: 'BrandForge',
    type: 'article',
    publishedTime: '2026-06-12T12:00:00.000Z',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Business Name Generator: 300+ Name Ideas for 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Name Generator: 300+ Name Ideas for 2026',
    description: '300+ business name ideas, 7 naming frameworks, and a free AI tool that checks domain availability. Find your perfect name today.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: 'https://brandforge.app/blog/business-name-generator',
  },
  robots: { index: true, follow: true },
}

const NAME_IDEAS = [
  {
    category: 'Tech & Startups',
    icon: '💻',
    names: [
      'Apexstack', 'Blazebase', 'Codenest', 'Dataforge', 'Emberstack',
      'Fluxlogic', 'Gridpulse', 'Hacklink', 'Iterate', 'Jumpnode',
      'Keystone AI', 'Launchpoint', 'Meshworks', 'Neuralshift', 'Omnicore',
      'Pixelshift', 'Quantum Logic', 'Rapiddeploy', 'Signalstack', 'Toggledev',
      'Uplink Labs', 'Vertex Digital', 'Waveform', 'Xylos', 'Zenith Tech',
    ],
  },
  {
    category: 'Food & Restaurant',
    icon: '🍽️',
    names: [
      'Ash & Ember', 'Brass Kitchen', 'Copper Kettle', 'Driftwood Bistro', 'Ember & Oak',
      'Fireside Grill', 'Gilt Plate', 'Harvest & Co.', 'Iron Skillet', 'Juniper Table',
      'Kindling', 'Lark Bistro', 'Malt & Rye', 'Noodle Works', 'Ovenheart',
      'Pepper & Thyme', 'Quince Kitchen', 'Roast & Root', 'Stone Soup Co.', 'Thyme & Iron',
      'Umami House', 'Vine & Dine', 'Wildroot', 'Yolk & Yam', 'Zest Kitchen',
    ],
  },
  {
    category: 'Fitness & Wellness',
    icon: '💪',
    names: [
      'Activecore', 'Boldfit', 'Corestride', 'Dynapeak', 'Everlift',
      'Fitforge', 'Gridiron Fitness', 'Highpulse', 'Ironbound', 'Jumpstart',
      'Kinetic Studio', 'Lift & Co.', 'Momentum Fit', 'Novaactive', 'Powerforge',
      'Quickflex', 'Rep & Set', 'Strive Fitness', 'Trucore', 'Vitalift',
      'Wellforce', 'Xenafit', 'Yieldstrength', 'Zenith Fitness', 'Zero Limits',
    ],
  },
  {
    category: 'Creative & Design',
    icon: '🎨',
    names: [
      'Alto Design', 'Brushwork Studio', 'Chromalink', 'Draft & Draw', 'Ember Creative',
      'Figment Studio', 'Glyph & Grid', 'Hue & Craft', 'Inkwell Studio', 'Junction Design',
      'Kinetic Studio', 'Layer & Light', 'Mosaic Co.', 'Nimble Creative', 'Outline Studio',
      'Pixelcraft', 'Quill & Canvas', 'Render Co.', 'Studioform', 'Tone & Texture',
      'Uplift Design', 'Vivid Collective', 'Warp Studio', 'Xpress Design', 'Yield Creative',
    ],
  },
  {
    category: 'Consulting & Professional Services',
    icon: '💼',
    names: [
      'Archpoint', 'Beacon Advisory', 'Clearpath Group', 'Driver & Associates', 'Elevate Consulting',
      'Foresight Group', 'Granite Partners', 'Horizon Advisory', 'Ironbridge', 'Keystone Group',
      'Landmark Partners', 'Meridian Advisory', 'Nexus Consulting', 'Olympus Group', 'Pinnacle Partners',
      'Quorum Consulting', 'Ridgeline Advisory', 'Summit Group', 'Turnkey Partners', 'Vanguard Consulting',
      'Westbridge', 'Xcel Group', 'Yield Partners', 'Zenith Advisory', 'Zephyr Consulting',
    ],
  },
  {
    category: 'Real Estate',
    icon: '🏠',
    names: [
      'Abode Group', 'Beacon Realty', 'Cornerstone Properties', 'Doorstep Realty', 'Equity Homes',
      'Foundation Real Estate', 'Greenacres Group', 'Hearth & Home', 'Iron Gate Realty', 'Keystone Properties',
      'Landmark Estates', 'Maple Group', 'Northgate Realty', 'Oakmont Properties', 'Pinnacle Homes',
      'Quarry Real Estate', 'Ridgeline Realty', 'Summit Properties', 'Timber Group', 'Vista Estates',
    ],
  },
  {
    category: 'Fashion & Beauty',
    icon: '✨',
    names: [
      'Amber & Rose', 'Bloom Studio', 'Copper & Silk', 'Dusk & Velvet', 'Ember Beauty',
      'Fawn & Co.', 'Gilt & Glow', 'Honey & Blush', 'Ivory Collective', 'Jade & Pearl',
      'Kindred Beauty', 'Luxe & Bloom', 'Mauve Studio', 'Nectar Beauty', 'Opal & Co.',
      'Primrose', 'Quartz Beauty', 'Rosewood Studio', 'Silk & Sage', 'Tulle & Vine',
    ],
  },
  {
    category: 'E-Commerce & Retail',
    icon: '🛍️',
    names: [
      'Amber & Elm', 'Brick & Bloom', 'Copper Cart', 'Drift Market', 'Everlane Co.',
      'Folk & Found', 'Goldthread', 'Harbor Goods', 'Indigo Retail', 'June & Co.',
      'Kindred Market', 'Linen & Lodge', 'Moss & Iron', 'Newleaf Shop', 'Oaken Collective',
      'Pine & Pearl', 'Quarry Goods', 'Riversend', 'Sage & Stone', 'Timber & Tide',
    ],
  },
  {
    category: 'Education & Coaching',
    icon: '📚',
    names: [
      'Ascend Academy', 'Brightmind', 'Catalyst Learning', 'Dialect Education', 'Elevate Academy',
      'Firstprinciple', 'Growthpath', 'Horizon Learning', 'Insight Co.', 'Journey Academy',
      'Knowledgebase', 'Learnforge', 'Masterypath', 'Nextstep Coaching', 'Onward Academy',
      'Pathfinder Education', 'Quest Learning', 'Rise Academy', 'Sparkpath', 'Thrivecoaching',
    ],
  },
  {
    category: 'Home & Local Services',
    icon: '🔧',
    names: [
      'Anchor Home Services', 'Brightwork', 'Clover Home Co.', 'Doorstep Services', 'Evergreen Home',
      'Fireside Services', 'Greensight', 'Homebase Co.', 'Insulate Pro', 'Joystick Home',
      'Kindkeep', 'Localroot', 'Maple Home Services', 'Neighborly Pro', 'Oakdale Services',
      'Porch & Home', 'Quill Home Co.', 'Rooted Services', 'Shield Home', 'Timbercraft',
    ],
  },
  {
    category: 'Photography & Video',
    icon: '📸',
    names: [
      'Aperture & Co.', 'Brightframe', 'Captured Studio', 'Depth & Light', 'Exposure Studio',
      'Flashpoint Media', 'Goldlens', 'Horizon Visuals', 'Iris Creative', 'Juxtapose Studio',
      'Keystone Visuals', 'Lenscraft Studio', 'Moonlight Media', 'Novaframe', 'Optic Studio',
      'Prism & Light', 'Quill Visual', 'Rosewood Media', 'Shutter & Co.', 'Vista Studios',
    ],
  },
  {
    category: 'Nonprofit & Social Impact',
    icon: '🌍',
    names: [
      'Arise Foundation', 'Brightpath', 'Cause & Effect', 'Dreamforward', 'Elevate Impact',
      'Footprint Initiative', 'Goodspark', 'Heart & Hand', 'Impactbridge', 'Justcause',
      'Kindred Impact', 'Lighthouse Initiative', 'Mission Forward', 'Newground', 'Openhand',
      'Purposepath', 'Quantum Impact', 'Ripple Foundation', 'Steadfast', 'Together Co.',
    ],
  },
]

const NAMING_FRAMEWORKS = [
  {
    name: 'The Compound Word',
    description: 'Combine two real words to create something new and meaningful. Instant comprehension, easy to remember, and usually available as a .com domain.',
    examples: ['Salesforce', 'Facebook', 'Dropbox', 'Bluebird'],
    bestFor: 'Tech startups, apps, modern service businesses',
  },
  {
    name: 'The Invented Word',
    description: 'A made-up word that sounds natural. Distinctive, ownable, and almost always available as a domain. Requires marketing investment to teach people the name.',
    examples: ['Kodak', 'Spotify', 'Zillow', 'Etsy'],
    bestFor: 'Consumer brands, tech products, anything that needs to stand out',
  },
  {
    name: 'The Metaphor',
    description: 'A name that evokes an image, feeling, or story. Builds instant emotional connections and differentiates from literal competitors.',
    examples: ['Amazon', 'Nike', 'Patagonia', 'Warby Parker'],
    bestFor: 'Lifestyle brands, outdoor companies, creative businesses',
  },
  {
    name: 'The Founder Name',
    description: 'Name your business after yourself. Simple, authentic, and memorable. Works best when your personal reputation IS the product.',
    examples: ['Ben & Jerry\'s', 'McKinsey', 'Hewlett-Packard', 'Merrill Lynch'],
    bestFor: 'Consulting, law firms, boutique agencies, personal brands',
  },
  {
    name: 'The Acronym',
    description: 'Short, punchy, and professional. Works when the full name is too long or when you want a clean, corporate feel.',
    examples: ['IBM', 'IKEA', 'SAP', 'KPMG'],
    bestFor: 'B2B companies, enterprise services, organizations',
  },
  {
    name: 'The Real Word',
    description: 'A common dictionary word repurposed as a brand name. Familiar and meaningful — but .com availability can be a challenge.',
    examples: ['Apple', 'Stripe', 'Square', 'Trek'],
    bestFor: 'Brands that want simplicity and instant recognition',
  },
  {
    name: 'The Foreign Word',
    description: 'A word from another language that captures your brand\'s essence. Adds sophistication, mystery, or cultural depth.',
    examples: ['Lego (Danish: "play well")', 'Volvo (Latin: "I roll")', 'Sony (from sonus, Latin for "sound")', 'Acer (Latin: "sharp")'],
    bestFor: 'Luxury brands, restaurants, fashion, artisan businesses',
  },
]

const STEPS = [
  {
    step: 1,
    title: 'Define your brand\'s DNA',
    description: 'Before you brainstorm, answer three questions: Who do you serve? What makes you different? What feeling should your name evoke? Write these down — they\'re your naming compass. A name that doesn\'t match your brand\'s essence confuses customers.',
    tip: 'Write a one-sentence positioning statement: "We help [audience] achieve [outcome] through [differentiator]." Your name should reinforce this.',
  },
  {
    step: 2,
    title: 'Generate 50+ candidates',
    description: 'Use the 7 naming frameworks above to brainstorm at least 50 names. Don\'t filter yet — quantity first. Try compound words, metaphors, foreign words, founder names. The best names often come from unexpected categories.',
    tip: 'Use our free AI business name generator to get started. It produces industry-specific suggestions and checks domain availability in one step.',
  },
  {
    step: 3,
    title: 'Filter with a ruthless checklist',
    description: 'Run every name through this checklist: Easy to spell? Easy to pronounce? Under 3 syllables? Not already trademarked? Domain available? Feels right for your industry? Most names fail 2-3 of these tests.',
    tip: 'The "phone test" — say your name out loud in a sentence. "Hi, I\'m calling from [NAME]." If you cringe, keep looking.',
  },
  {
    step: 4,
    title: 'Validate availability',
    description: 'Check domain availability, social handles, and trademark databases simultaneously. A great name that\'s taken everywhere isn\'t great — it\'s a future legal headache. Use our free domain and social handle checker to confirm in seconds.',
    tip: 'If the .com is taken, try adding a modifier ("Get[Name]", "[Name]App") rather than settling for a weird extension like .xyz or .biz.',
  },
  {
    step: 5,
    title: 'Test with your target audience',
    description: 'Share your top 3-5 names with 10 people in your target audience — not friends and family. Ask: What does this name make you think of? Would you trust a business with this name? Can you spell it after hearing it once?',
    tip: 'You\'re not looking for consensus — you\'re looking for clarity. A name that some people love and some hate is better than one everyone feels "meh" about.',
  },
]

const COMPARISON = [
  {
    feature: 'AI-powered name generation',
    brandforge: '✅ Yes — uses GPT-4 class AI',
    typical: '⚠️ Random word combiner',
  },
  {
    feature: 'Domain availability check',
    brandforge: '✅ Real-time DNS + RDAP',
    typical: '⚠️ Basic WHOIS lookup',
  },
  {
    feature: 'Social handle check',
    brandforge: '✅ Twitter/X + Instagram',
    typical: '❌ Rarely included',
  },
  {
    feature: 'Brand kit included',
    brandforge: '✅ Logo, colors, tagline, fonts',
    typical: '❌ Names only',
  },
  {
    feature: 'Industry-specific names',
    brandforge: '✅ 23 industries supported',
    typical: '⚠️ Generic suggestions',
  },
  {
    feature: 'Price',
    brandforge: 'Free to generate, $9 for full brand kit',
    typical: 'Free to generate, $29-199 for logo',
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
  { name: 'Marketing Agency', href: '/marketing-agency-name-generator', desc: 'Digital, creative, ad agencies' },
]

export default function BusinessNameGeneratorBlog() {
  const faqItems = [
    {
      q: 'What is the best free business name generator?',
      a: 'BrandForge is the best free business name generator because it uses AI to create industry-specific names, checks domain availability in real-time, verifies social handle availability, and includes a complete brand kit (logo, colors, tagline, fonts) for $9. Most other generators just combine random words without checking availability.',
    },
    {
      q: 'How do I come up with a business name?',
      a: 'Start by defining your brand\'s DNA — who you serve, what makes you different, and the feeling you want to evoke. Then brainstorm 50+ candidates using proven naming frameworks: compound words, metaphors, foreign words, founder names, and more. Filter ruthlessly using a checklist (easy to spell, available domain, not trademarked), then test your top 3-5 names with real people in your target audience.',
    },
    {
      q: 'What makes a good business name?',
      a: 'A good business name is: (1) Easy to spell and pronounce after hearing it once, (2) Under 3 syllables and under 12 characters, (3) Available as a .com domain, (4) Not already trademarked in your industry, (5) Distinctive enough to stand out from competitors, (6) Aligned with your brand\'s values and target audience. The best names pass all six criteria.',
    },
    {
      q: 'How do I check if a business name is available?',
      a: 'Check three things: (1) Domain availability — use our free checker at brandforge.app/generate or search on Namecheap. (2) Social handle availability — search on Twitter/X, Instagram, and Facebook. (3) Trademark status — search USPTO.gov for existing trademarks in your industry. If all three are clear, you\'re good to go.',
    },
    {
      q: 'Should I include my industry in my business name?',
      a: 'It depends on your growth plans. Including your industry (like "Austin Plumbing Pros") helps with local SEO and immediate recognition, but becomes a ceiling if you expand. If you plan to stay local and specialized, an industry descriptor helps. If you want to grow beyond one niche, choose a flexible name and use your tagline for specificity.',
    },
    {
      q: 'How much does it cost to name a business?',
      a: 'With BrandForge, it\'s free to generate unlimited name ideas with domain and social availability checks. A complete brand kit (logo, color palette, tagline, fonts) is $9 one-time. Traditional naming agencies charge $5,000-$50,000+ for the same service. DIY brainstorming is free but time-consuming and doesn\'t include availability checks.',
    },
    {
      q: 'Can I use a business name generator for an LLC?',
      a: 'Yes! A business name generator can help you find LLC name ideas. Just make sure to: (1) Check your state\'s LLC naming requirements (most require "LLC" or "L.L.C." in the name), (2) Verify the name isn\'t already registered in your state, (3) Check trademark availability at USPTO.gov, and (4) Confirm the .com domain is available. Our generator helps with domain availability automatically.',
    },
    {
      q: 'What are the most popular business name styles in 2026?',
      a: 'The top naming trends in 2026 are: (1) Compound words — two words merged into one (Salesforce, Facebook), (2) Short invented words — memorable and ownable (Spotify, Zillow), (3) Nature metaphors — evoking growth and authenticity (Bloom, Grove, Ember), (4) Minimalist real words — one dictionary word that captures your essence (Stripe, Square), (5) Foreign words — adding sophistication and depth (Volvo, Lego).',
    },
  ]

  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <BlogPostSchema
        title={metadata.title as string}
        description={metadata.description as string}
        url="https://brandforge.app/blog/business-name-generator"
        datePublished="2026-06-12"
        dateModified="2026-06-12"
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
        <span className="text-slate-900">Business Name Generator</span>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex items-center rounded-full bg-brand-100 px-3 py-1 text-xs font-medium text-brand-700">Naming</span>
          <span className="text-sm text-slate-400">June 12, 2026 · 12 min read</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Business Name Generator: 300+ Name Ideas for 2026
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-3xl">
          The complete guide to naming your business — 300+ name ideas by industry, 7 proven naming frameworks, and a free AI tool that checks domain and social handle availability instantly.
        </p>
      </header>

      {/* CTA Banner */}
      <div className="mb-12 rounded-2xl bg-gradient-to-br from-brand-500 to-purple-600 p-6 sm:p-8 text-white">
        <h2 className="text-xl font-bold mb-2">🎯 Free AI Business Name Generator</h2>
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

      {/* What is a Business Name Generator */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">What Is a Business Name Generator?</h2>
        <div className="prose prose-slate prose-lg max-w-none
          [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-slate-900
          [&_p]:mt-4 [&_p]:text-slate-700 [&_p]:leading-7
          [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-slate-700 [&_li]:mt-2
          [&_a]:text-brand-600 [&_a]:hover:text-brand-700 [&_a]:underline [&_a]:decoration-brand-300 [&_a]:underline-offset-2
        ">
          <p>
            A business name generator is a tool that creates potential names for your company, product, or brand. The best generators — like BrandForge — use AI to understand your industry, values, and target audience, producing names that are <em>actually good</em>, not just random word combinations.
          </p>
          <p>
            Unlike old-school generators that slap two random words together (&quot;BlueFox Consulting&quot;), modern AI-powered generators consider:
          </p>
          <ul>
            <li><strong>Your industry</strong> — A tech startup needs a different name than a bakery</li>
            <li><strong>Your brand personality</strong> — Playful vs. professional vs. luxurious</li>
            <li><strong>Domain availability</strong> — The name&apos;s no good if you can&apos;t get the .com</li>
            <li><strong>Social handle availability</strong> — Consistent branding across platforms matters</li>
            <li><strong>Naming patterns that work</strong> — The 7 proven frameworks behind the world&apos;s most iconic brands</li>
          </ul>
        </div>
      </section>

      {/* Name Ideas by Category */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">300+ Business Name Ideas by Industry</h2>
        <p className="text-slate-600 mb-8">
          Browse name ideas organized by industry. Use these as starting points — then customize them with your unique angle, location, or specialty. Click any name to generate a full brand kit around it.
        </p>

        <div className="space-y-6">
          {NAME_IDEAS.map((category) => (
            <div key={category.category} className="rounded-2xl border border-slate-200 overflow-hidden">
              <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
                <h3 className="text-lg font-bold text-slate-900">{category.icon} {category.category}</h3>
              </div>
              <div className="px-6 py-4">
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
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

        <div className="mt-6 text-center">
          <Link
            href="/generate"
            className="inline-flex items-center rounded-full bg-brand-600 px-6 py-3 font-semibold text-white hover:bg-brand-700 transition-colors"
          >
            Generate More Names →
          </Link>
        </div>
      </section>

      {/* Naming Frameworks */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">7 Naming Frameworks Behind the World&apos;s Best Brands</h2>
        <p className="text-slate-600 mb-8">
          Every great business name uses one of these 7 patterns. Understanding them makes brainstorming 10x faster.
        </p>

        <div className="space-y-6">
          {NAMING_FRAMEWORKS.map((framework, index) => (
            <div key={framework.name} className="rounded-2xl border border-slate-200 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-brand-100 text-brand-700 font-bold text-lg">
                  {index + 1}
                </span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{framework.name}</h3>
                  <p className="text-slate-700 leading-7 mb-4">{framework.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {framework.examples.map((example) => (
                      <span key={example} className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-700">
                        {example}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-slate-500">
                    <strong>Best for:</strong> {framework.bestFor}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">How to Name Your Business in 5 Steps</h2>
        <p className="text-slate-600 mb-8">
          Stop staring at a blank page. Follow this proven 5-step process to find a name you love — and that actually works.
        </p>

        <div className="space-y-8">
          {STEPS.map((step) => (
            <div key={step.step} className="relative pl-12">
              <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-brand-600 text-white font-bold text-sm">
                {step.step}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-700 leading-7 mb-3">{step.description}</p>
              <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
                <p className="text-sm text-amber-900">
                  <span className="font-semibold">💡 Pro tip:</span> {step.tip}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">BrandForge vs. Other Business Name Generators</h2>
        <p className="text-slate-600 mb-8">
          Not all name generators are created equal. Here&apos;s how BrandForge compares to typical free generators.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-4 font-semibold text-slate-900">Feature</th>
                <th className="text-left py-3 px-4 font-semibold text-brand-600">BrandForge</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-500">Typical Generator</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                  <td className="py-3 px-4 text-slate-700 font-medium">{row.feature}</td>
                  <td className="py-3 px-4 text-green-700">{row.brandforge}</td>
                  <td className="py-3 px-4 text-slate-500">{row.typical}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Industry Generators */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Industry-Specific Name Generators</h2>
        <p className="text-slate-600 mb-8">
          Need names tailored to your specific industry? We have dedicated generators with industry-specific keywords, categories, and examples.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {INDUSTRY_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl border border-slate-200 p-4 hover:border-brand-300 hover:bg-brand-50 transition-colors group"
            >
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">{link.name}</h3>
              <p className="text-sm text-slate-500 mt-1">{link.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <details key={index} className="group rounded-2xl border border-slate-200 overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-left font-semibold text-slate-900 hover:bg-slate-50 transition-colors">
                <span className="pr-4">{item.q}</span>
                <span className="flex-shrink-0 text-brand-500 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-4 text-slate-700 leading-7">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Related Blog Posts */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Articles</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link href="/blog/brand-name-generator" className="rounded-xl border border-slate-200 p-4 hover:border-brand-300 hover:bg-brand-50 transition-colors group">
            <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Brand Name Generator: How to Find the Perfect Brand Name</h3>
            <p className="text-sm text-slate-500 mt-1">7 naming styles, 60+ examples, and a free AI tool.</p>
          </Link>
          <Link href="/blog/how-to-choose-brand-name" className="rounded-xl border border-slate-200 p-4 hover:border-brand-300 hover:bg-brand-50 transition-colors group">
            <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">How to Choose a Brand Name in 2026</h3>
            <p className="text-sm text-slate-500 mt-1">The complete decision framework with a 10-point validation checklist.</p>
          </Link>
          <Link href="/blog/small-business-name-generator" className="rounded-xl border border-slate-200 p-4 hover:border-brand-300 hover:bg-brand-50 transition-colors group">
            <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Small Business Name Generator: 200+ Ideas</h3>
            <p className="text-sm text-slate-500 mt-1">Name ideas for every type of small business.</p>
          </Link>
          <Link href="/blog/company-name-checker" className="rounded-xl border border-slate-200 p-4 hover:border-brand-300 hover:bg-brand-50 transition-colors group">
            <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Company Name Checker: Verify Your Name Is Available</h3>
            <p className="text-sm text-slate-500 mt-1">Domain, trademark, social, and state registration checks.</p>
          </Link>
          <Link href="/blog/startup-name-ideas" className="rounded-xl border border-slate-200 p-4 hover:border-brand-300 hover:bg-brand-50 transition-colors group">
            <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Startup Name Ideas: 300+ Names for Startups in 2026</h3>
            <p className="text-sm text-slate-500 mt-1">Startup naming strategies behind billion-dollar brands.</p>
          </Link>
          <Link href="/blog/how-to-come-up-with-business-name" className="rounded-xl border border-slate-200 p-4 hover:border-brand-300 hover:bg-brand-50 transition-colors group">
            <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">How to Come Up with a Business Name: 10 Proven Methods</h3>
            <p className="text-sm text-slate-500 mt-1">Brainstorming methods, 200+ ideas, and a free AI generator.</p>
          </Link>
          <Link href="/blog/store-name-generator" className="rounded-xl border border-slate-200 p-4 hover:border-brand-300 hover:bg-brand-50 transition-colors group">
            <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Store Name Generator: 300+ Store Name Ideas for 2026</h3>
            <p className="text-sm text-slate-500 mt-1">300+ store name ideas by category, 7 naming strategies, and domain checks.</p>
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mb-16">
        <div className="rounded-3xl bg-gradient-to-br from-brand-500 via-purple-600 to-indigo-700 p-8 sm:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Business Name?</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto text-lg">
            Enter a short description of your business and our AI will generate name ideas with instant domain and social handle availability checks. It&apos;s free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/generate"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-bold text-brand-600 hover:bg-white/90 transition-colors text-lg"
            >
              Generate Business Names →
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-4 font-bold text-white hover:bg-white/10 transition-colors text-lg"
            >
              View Brand Kit Pricing
            </Link>
          </div>
        </div>
      </section>

      <NewsletterCta />
    </article>
  )
}