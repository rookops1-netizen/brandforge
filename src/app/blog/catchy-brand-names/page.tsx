import type { Metadata } from 'next'
import Link from 'next/link'
import { NewsletterCta } from '@/components/NewsletterCta'
import { BlogPostSchema } from '@/components/BlogPostSchema'

export const metadata: Metadata = {
  title: 'Catchy Brand Names: 250+ Memorable Ideas for 2026 + Free AI Generator',
  description: 'Discover 250+ catchy brand name ideas across 10 industries, 7 naming formulas that make names stick, and a free AI generator that checks domain availability instantly.',
  keywords: [
    'catchy brand names',
    'catchy brand name ideas',
    'memorable brand names',
    'catchy business names',
    'how to create a catchy brand name',
    'catchy name ideas',
    'catchy brand names list',
    'memorable business names',
    'brand names that stick',
    'catchy company names',
    'memorable brand name examples',
    'catchy startup names',
    'brand naming tips',
    'what makes a brand name catchy',
    'catchy brand name generator',
  ],
  openGraph: {
    title: 'Catchy Brand Names: 250+ Memorable Ideas for 2026 + Free AI Generator',
    description: '250+ catchy brand name ideas, 7 naming formulas that make names stick, and a free AI generator with domain availability checks. Find your perfect catchy brand name today.',
    url: 'https://brandforge-phi-pearl.vercel.app/blog/catchy-brand-names',
    siteName: 'BrandForge',
    type: 'article',
    publishedTime: '2026-07-12T12:00:00.000Z',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Catchy Brand Names: 250+ Memorable Ideas for 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Catchy Brand Names: 250+ Memorable Ideas for 2026',
    description: '250+ catchy brand name ideas, 7 naming formulas, and a free AI generator with domain availability checks. Find your perfect brand name.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: 'https://brandforge-phi-pearl.vercel.app/blog/catchy-brand-names',
  },
  robots: { index: true, follow: true },
}

const NAME_IDEAS = [
  {
    category: 'Tech & SaaS',
    icon: '💻',
    names: [
      'Ziply', 'Vexol', 'Cloudburst', 'Nexa', 'Stackmind',
      'Traction', 'PulseAI', 'Codehive', 'Shiftwise', 'NovaPeak',
      'Brightpath', 'Synthia', 'Meld', 'Quantumly', 'ArcForge',
      'Rapidgrid', 'Sparkbase', 'Cleverset', 'Ironstack', 'Dataloom',
      'Thrivekit', 'Nimbly', 'Brightshift', 'Launchpoint', 'Corewave',
    ],
  },
  {
    category: 'Fashion & Lifestyle',
    icon: '👗',
    names: [
      'Velora', 'Solstice', 'Cloth & Stone', 'Oakes & Co.', 'Ember & Silk',
      'Wildthread', 'The Linen Project', 'Maison Luxe', 'Kindred Cloth', 'Rivière',
      'Alto', 'Sable', 'Copper & Pine', 'Heirloom Co.', 'Atlas Wear',
      'Verano', 'Lumière', 'The Velvet Studio', 'Sundial', 'Arclight',
      'Floriana', 'March & Bloom', 'Silhouette', 'The Good Stitch', 'Nomad Thread',
    ],
  },
  {
    category: 'Food & Beverage',
    icon: '🍽️',
    names: [
      'Ember Kitchen', 'Copper & Thyme', 'Saltmark', 'Hearth & Oak', 'The Gilded Fork',
      'Brassfield', 'Sprout & Vine', 'Wildgrain', 'Cedar & Spice', 'Bloom Kitchen',
      'Fireside', 'The Rustic Plate', 'Golden Thistle', 'Mint & Malt', 'Ember & Rye',
      'The Olive Press', 'Saffron Trail', 'Heritage Kitchen', 'Stonecrop', 'The Copper Pot',
      'Briar Kitchen', 'Flame & Fork', 'Rosemary & Co.', 'The Grain Mill', 'Ash & Em',
    ],
  },
  {
    category: 'Health & Wellness',
    icon: '🌿',
    names: [
      'Verity Wellness', 'Solace Health', 'Bloomwell', 'Clearbody', 'Zenith Wellness',
      'Nurture Co.', 'The Still Point', 'Vitalroot', 'Harmony Health', 'Breathework',
      'Equilibrium', 'Greenpath', 'Recharge', 'Lumina Wellness', 'Pureform',
      'Restore', 'Thrive Collective', 'Mindful Motion', 'Bodyraft', 'Oasis Wellness',
      'The Good Body', 'Grounded', 'Flowstate', 'Everwell', 'Sage Wellness',
    ],
  },
  {
    category: 'Finance & Fintech',
    icon: '💰',
    names: [
      'Ledgerpoint', 'Capital Forge', 'Ironvault', 'Summit Capital', 'Clearvest',
      'Arch Capital', 'Bridgeworth', 'Forgepoint', 'Meridian Finance', 'Vault & Co.',
      'Everest Wealth', 'Precision Capital', 'Crest Finance', 'Horizonvest', 'Ironclad',
      'Northpoint Capital', 'Guardian Wealth', 'Atlas Finance', 'Keystonevest', 'Fortify',
      'Ashbridge', 'The Ledger Group', 'Ironbound', 'Truvest', 'Stonewell',
    ],
  },
  {
    category: 'Creative & Design',
    icon: '🎨',
    names: [
      'Studio Forma', 'Ink & Ember', 'Chromalux', 'Glyphworks', 'Pixel & Pine',
      'Canopy Creative', 'Render & Co.', 'Vivid Studio', 'Boldform', 'Frame & Form',
      'Alto Design', 'Kindred Creative', 'The Shape Studio', 'Lightbox', 'Draftcraft',
      'Palette Co.', 'Studio North', 'Prismworks', 'Mosaic Labs', 'Opus Studio',
      'The Artisan Co.', 'Hue & Thread', 'Ember Creative', 'Signal Creative', 'Archetype',
    ],
  },
  {
    category: 'Real Estate & Property',
    icon: '🏠',
    names: [
      'Keystone Realty', 'Summit Properties', 'Anchor Real Estate', 'Fieldstone Group', 'Harbor Realty',
      'Ridgeline Holdings', 'Crest Property Group', 'Ironworks Realty', 'Bluefield', 'Granite Estates',
      'Oakmont Group', 'Pinnacle Properties', 'Landmark Realty', 'Copper & Oak Real Estate', 'Meridian Holdings',
      'Northgate Realty', 'The Horizon Group', 'Greenfield Properties', 'Westmark Realty', 'Heritage Estates',
      'Cedar Realty', 'Summit & Stone', 'Sterling Properties', 'True North Realty', 'Vanguard Holdings',
    ],
  },
  {
    category: 'Education & EdTech',
    icon: '📚',
    names: [
      'Brightpath', 'Thinkwell', 'LearnForge', 'Scholarly', 'Mindcraft',
      'Elevate Learning', 'Curiosity Co.', 'The Learning Lab', 'Wellspring Academy', 'Knowledgeworks',
      'Spark Education', 'Mindsprout', 'Insight Academy', 'The Study Co.', 'Luminary Learning',
      'Nexlearn', 'Brainworks', 'Clarify', 'The Academy Project', 'Wavelength',
      'Intellectia', 'Skillforge', 'The Mentor Lab', 'Catalyst Learning', 'Pathwright',
    ],
  },
  {
    category: 'E-Commerce & Retail',
    icon: '🛒',
    names: [
      'Evergoods', 'Cart & Co.', 'The Market Project', 'Shelflife', 'Popshop',
      'Goodsift', 'Mint & Market', 'The Find Co.', 'Tradehill', 'Waresmith',
      'Unboxed', 'Ridge Supply Co.', 'The Goods Lab', 'Bloom & Cart', 'Nextdoor Goods',
      'Keen Market', 'Luxe & Co.', 'Homespin', 'Iron & Oak Co.', 'Shelf & Co.',
      'The General Store Co.', 'Copper Cart', 'Vault Goods', 'Goodspring', 'The Stockroom',
    ],
  },
  {
    category: 'Professional Services',
    icon: '💼',
    names: [
      'Archpoint', 'Clearpath Consulting', 'Beacon Advisory', 'Foresight Group', 'Granite Partners',
      'Meridian Strategy', 'Pinnacle Group', 'Summit Consulting', 'The Partnership Lab', 'Vanguard Advisory',
      'Truepoint', 'Westpath Group', 'Impact Partners', 'Keystone Strategy', 'Landmark Consulting',
      'Apex Advisory', 'Bridgepoint Group', 'Northstar Partners', 'The Strategy Firm', 'Catalyst Consulting',
      'Equinox Group', 'Truemark', 'Horizon Associates', 'Onpoint', 'Vertex Group',
    ],
  },
]

const CATCHY_FORMULAS = [
  {
    formula: 'Short & Punchy (1–2 Syllables)',
    description: 'The most memorable brand names are brief — they hit hard and stick instantly. Research shows shorter names are recalled 40% more often than longer ones.',
    examples: ['Nike', 'Apple', 'Stripe', 'Slack', 'Zoom'],
    why: 'Short names reduce cognitive load. Your brain processes them faster, stores them easier, and recalls them without effort.',
    howTo: 'Take your core concept and distill it to its shortest form. Drop suffixes. Merge syllables. Aim for 1–2 syllables max.',
    generated: ['Vex', 'Nim', 'Hark', 'Bolt', 'Quill'],
  },
  {
    formula: 'The Double Letter Technique',
    description: 'Repeating a letter creates a visual pattern that makes a name instantly recognizable and fun to say. Double letters are a cheat code for memorability.',
    examples: ['Instagram', 'BuzzFeed', 'Zillow', 'Hulu', 'Fiverr'],
    why: 'Double letters create a visual hook — your eye catches the pattern before you even read the full word. Plus, they make the name satisfying to type.',
    howTo: 'Take a strong word and double a vowel or consonant. "Mellow" becomes "Melllow" → "Melo". "Zippy" becomes "Zippo". The double creates the catch.',
    generated: ['Riffraff', 'Moolah', 'Sizzle', 'Joomo', 'Peeko'],
  },
  {
    formula: 'The Compound Blend',
    description: 'Combine two meaningful words into one seamless name. Compounds tell a story in micro — every syllable carries weight.',
    examples: ['Facebook', 'Pinterest', 'Shopify', 'Grubhub', 'Dropbox'],
    why: 'Compounds work because they give your brain two anchors instead of one. "Shop" + "ify" is more memorable than either word alone.',
    howTo: 'Write down your brand\'s core action and its core feeling. Smash them together. Then trim, merge letters, or swap suffixes until it rolls off the tongue.',
    generated: ['Brandwise', 'Nameloom', 'Trustforge', 'Quickstack', 'Brightpillar'],
  },
  {
    formula: 'The Vowel Swap',
    description: 'Take a real word and swap one vowel to create a name that\'s almost familiar — your brain fills in the original, creating an instant memory hook.',
    examples: ['Lyft', 'Digg', 'Flickr', 'Lyst', 'Vox'],
    why: 'The "almost but not quite" feeling forces cognitive engagement. You notice the difference, and that noticing is what makes it memorable.',
    howTo: 'Pick a word that captures your brand\'s essence. Swap the main vowel (a→y, i→y, o→oo). Test it: does it sound like the original but feel fresher?',
    generated: ['Vybe', 'Kraftly', 'Spyn', 'Fynix', 'Mync'],
  },
  {
    formula: 'The Metaphor Method',
    description: 'Name your brand after something that symbolizes your promise. Metaphors create instant emotional connections — the name does the selling.',
    examples: ['Amazon', 'Nike', 'Patagonia', 'Caterpillar', 'Puma'],
    why: 'Metaphors piggyback on existing mental models. When you hear "Summit," you already feel ambition, achievement, and height — no explanation needed.',
    howTo: 'List your brand\'s 3 core promises. For each, brainstorm natural metaphors (speed = cheetah, growth = seed). Test the metaphor against your audience.',
    generated: ['Catalyst', 'Forgepoint', 'Summitwell', 'Ironclad', 'Greenpath'],
  },
  {
    formula: 'The Alliteration Play',
    description: 'Names that repeat initial sounds are catchier by nature — they\'re easier to say, remember, and recognize. Alliteration is the oldest memory trick in the book.',
    examples: ['PayPal', 'Best Buy', 'Dunkin\' Donuts', 'Weight Watchers', 'Bed Bath & Beyond'],
    why: 'Alliteration creates a rhythm. Rhythmic names are processed as patterns, and patterns stick. It\'s why nursery rhymes survive centuries.',
    howTo: 'Write your brand concept. Then list every word that starts with that same first letter. Pair them until you find a combo that clicks.',
    generated: ['BoldBrand', 'SwiftStack', 'PixelPush', 'CraftCore', 'BrightBridge'],
  },
  {
    formula: 'The Abstract Invention',
    description: 'Create a completely new word with no dictionary meaning. Bold, ownable, and zero competition in search results — but requires more marketing muscle.',
    examples: ['Kodak', 'Rolex', 'Verizon', 'Accenture', 'Xerox'],
    why: 'Invented names are 100% ownable — no SEO competition, no trademark conflicts, and the name becomes synonymous with your brand.',
    howTo: 'Combine sounds that evoke your industry. Hard consonants (K, X, Z) feel sharp and techy. Soft sounds (L, M, S) feel warm. Test with 10 people — if they can spell it after hearing it once, it works.',
    generated: ['Zynova', 'Krexio', 'Veltris', 'Ondura', 'Xyptik'],
  },
]

const CATCHY_TESTS = [
  {
    test: 'The Phone Test',
    description: 'Say your name out loud on a phone call. If the other person can spell it correctly without asking "how do you spell that?" — it\'s catchy.',
    icon: '📱',
  },
  {
    test: 'The Cocktail Party Test',
    description: 'Imagine introducing your brand at a noisy party. Can you say it once and have the other person remember it 5 minutes later? If yes, it\'s catchy.',
    icon: '🎉',
  },
  {
    test: 'The URL Test',
    description: 'Type your name as a URL without looking. If your fingers naturally go to the right keys, the name passes. If you hesitate, it\'s too complex.',
    icon: '🌐',
  },
  {
    test: 'The Search Test',
    description: 'Google your name idea. If the results are dominated by other brands or dictionary definitions, it\'s not unique enough. A catchy name should own its search results.',
    icon: '🔍',
  },
  {
    test: 'The Nickname Test',
    description: 'Ask 5 people to create a nickname from your brand name. If they all shorten it the same way, you\'ve got a catchy name. If everyone shortens it differently, it\'s not sticky enough.',
    icon: '💬',
  },
  {
    test: 'The Sleep Test',
    description: 'Write down 5 name candidates before bed. In the morning, which one do you remember first? That\'s your catchiest option.',
    icon: '😴',
  },
  {
    test: 'The Spell Test',
    description: 'Read the name to someone who\'s never seen it written. Ask them to spell it. If they get it right (or close), the name has intuitive spelling — a hallmark of catchiness.',
    icon: '✏️',
  },
  {
    test: 'The Emotion Test',
    description: 'Say your name and immediately write the first emotion that comes to mind. If it evokes something specific (excitement, trust, fun), it\'s working. If it\'s "meh," try again.',
    icon: '❤️',
  },
]

const FAQ_ITEMS = [
  {
    question: 'What makes a brand name catchy?',
    answer: 'A catchy brand name is short (1–3 syllables), easy to spell and pronounce, evokes an emotion or image, and is distinctive enough to stand out. The most memorable names use techniques like alliteration, compound words, or vowel swaps to create names that stick in your head after one encounter.',
  },
  {
    question: 'Should my brand name describe what I do?',
    answer: 'Not necessarily. The most iconic brand names — Nike, Apple, Stripe — don\'t describe their products. Descriptive names (like "Quality Cleaning Services") are clear but forgettable. Suggestive names (like "Brightpath") hint at your value without being literal. Aim for suggestive — it\'s the sweet spot between clarity and memorability.',
  },
  {
    question: 'How do I know if my brand name is already taken?',
    answer: 'Check three places: (1) USPTO.gov for trademark registrations, (2) domain availability for your .com, and (3) social media handles on Twitter/X and Instagram. BrandForge checks domain and social availability automatically for every name it generates.',
  },
  {
    question: 'Can a catchy brand name be long?',
    answer: 'It\'s harder, but not impossible. "Weight Watchers" is catchy despite being long because it uses alliteration. "Bed Bath & Beyond" uses triple B sounds. If you go long, lean into repetition, alliteration, or rhythm to make it memorable. But when in doubt, shorter is catchier.',
  },
  {
    question: 'Should I use my own name as a brand name?',
    answer: 'Founder names work for consultancies and personal brands (McKinsey, Goldman Sachs), but they make it harder to sell the company later and don\'t communicate what you do. If your name is short, easy to spell, and sounds good — it can work. Otherwise, create a name that carries meaning.',
  },
  {
    question: 'How many brand name ideas should I generate before choosing?',
    answer: 'Aim for 50–100 initial ideas, then narrow to 10–15 using your validation criteria. From there, check domain and trademark availability — typically 2–3 will survive. Test those with real people before committing. BrandForge generates 5 names per round, so 10–20 generations will give you a strong pool.',
  },
  {
    question: 'What if the .com domain is taken?',
    answer: 'A .com domain is ideal but not mandatory. Consider: (1) adding a modifier like "get[brand].com" or "[brand]app.com," (2) using .co, .io, or .ai for tech brands, (3) using your brand word plus a descriptor. Don\'t add hyphens or numbers — they kill catchiness.',
  },
  {
    question: 'Is it worth paying for a premium domain name?',
    answer: 'If the domain is under $2,000 and you\'re committed to the brand for 5+ years, it\'s usually worth it. A great domain increases credibility, improves SEO, and saves you from "get[brand]" workarounds. For a side project, start with an alternative and upgrade later.',
  },
]

const RELATED_POSTS = [
  { slug: 'brand-name-ideas', title: 'Brand Name Ideas: 300+ Creative Examples for 2026', category: 'Naming' },
  { slug: 'catchy-business-names', title: '150+ Catchy Business Names for Every Industry', category: 'Naming' },
  { slug: 'brand-name-generator', title: 'Brand Name Generator: How to Find the Perfect Brand Name', category: 'Guide' },
  { slug: 'how-to-choose-brand-name', title: 'How to Choose a Brand Name: The Complete Framework', category: 'Strategy' },
  { slug: 'cool-business-names', title: '200+ Cool Business Names That Stand Out', category: 'Naming' },
  { slug: 'creative-brand-names', title: '200+ Creative Brand Names + Free AI Generator', category: 'Naming' },
]

export default function CatchyBrandNamesPage() {
  return (
    <>
      <BlogPostSchema
        title="Catchy Brand Names: 250+ Memorable Ideas for 2026 + Free AI Generator"
        description="Discover 250+ catchy brand name ideas across 10 industries, 7 proven naming formulas that make names stick, and a free AI generator that checks domain availability instantly."
        url="https://brandforge-phi-pearl.vercel.app/blog/catchy-brand-names"
        datePublished="2026-07-12T12:00:00.000Z"
        dateModified="2026-07-12T12:00:00.000Z"
        keywords={[
          'catchy brand names',
          'catchy brand name ideas',
          'memorable brand names',
          'catchy business names',
          'how to create a catchy brand name',
          'catchy name ideas',
          'brand names that stick',
          'memorable business names',
          'catchy company names',
          'what makes a brand name catchy',
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

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brandforge-phi-pearl.vercel.app' },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://brandforge-phi-pearl.vercel.app/blog' },
              { '@type': 'ListItem', position: 3, name: 'Catchy Brand Names', item: 'https://brandforge-phi-pearl.vercel.app/blog/catchy-brand-names' },
            ],
          }),
        }}
      />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-slate-500" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li><Link href="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link href="/blog" className="hover:text-brand-600 transition-colors">Blog</Link></li>
            <li>/</li>
            <li className="text-slate-900 font-medium">Catchy Brand Names</li>
          </ol>
        </nav>
        <header className="mb-12">
          <div className="inline-flex items-center rounded-full bg-brand-100 px-3 py-1 text-sm font-medium text-brand-700 mb-4">
            Free AI Name Generator Included
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Catchy Brand Names: 250+ Memorable Ideas for 2026
          </h1>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            The best brand names don&apos;t just describe — they <em>stick</em>. They bounce around in your head
            after one hearing. They roll off the tongue. They look good on a logo and a domain. Below you&apos;ll
            find 250+ catchy brand name ideas organized by industry, 7 proven naming formulas that make names
            memorable, and a free AI generator that checks domain availability in real time.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-500">
            <span>📖 12 min read</span>
            <span>•</span>
            <span>📅 Updated July 2026</span>
            <span>•</span>
            <span>✍️ By BrandForge Team</span>
          </div>
        </header>

        {/* CTA */}
        <div className="mb-12 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-700 p-8 text-center text-white">
          <h2 className="text-2xl font-bold">Generate Catchy Brand Names Instantly</h2>
          <p className="mt-2 text-brand-100 max-w-lg mx-auto">
            Describe your brand idea and get 5 unique, catchy names with domain &amp; social checks — free.
          </p>
          <a
            href="/generate"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-semibold text-brand-700 shadow-lg hover:bg-brand-50 transition-colors"
          >
            Generate Names — Free
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        {/* Name Ideas by Industry */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">
            Catchy Brand Names by Industry
          </h2>
          <p className="text-slate-600 mb-8">
            Browse 250+ catchy brand name ideas across 10 industries. Every name is designed to be short,
            memorable, and available-ish (always verify domains before committing).
          </p>

          <div className="space-y-8">
            {NAME_IDEAS.map((group) => (
              <div key={group.category} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  <span className="mr-2">{group.icon}</span>
                  {group.category}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                  {group.names.map((name) => (
                    <span
                      key={name}
                      className="inline-flex items-center rounded-lg bg-slate-50 border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 transition-all cursor-default"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Naming Formulas */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">
            7 Naming Formulas That Make Brand Names Catchy
          </h2>
          <p className="text-slate-600 mb-8">
            Catchy names aren&apos;t random — they follow patterns that are hardwired into how human memory
            works. Here are 7 proven formulas, each with real brand examples and AI-generated alternatives.
          </p>

          <div className="space-y-8">
            {CATCHY_FORMULAS.map((formula, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-brand-100 text-brand-700 font-bold text-lg">
                    {i + 1}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900">{formula.formula}</h3>
                    <p className="mt-2 text-slate-600 leading-relaxed">{formula.description}</p>

                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">
                        Famous Examples
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {formula.examples.map((ex) => (
                          <span key={ex} className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
                            {ex}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 rounded-xl bg-emerald-50 border border-emerald-200 p-4">
                      <h4 className="text-sm font-semibold text-emerald-800 mb-1">Why It Works</h4>
                      <p className="text-sm text-emerald-700">{formula.why}</p>
                    </div>

                    <div className="mt-4 rounded-xl bg-blue-50 border border-blue-200 p-4">
                      <h4 className="text-sm font-semibold text-blue-800 mb-1">How to Use It</h4>
                      <p className="text-sm text-blue-700">{formula.howTo}</p>
                    </div>

                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">
                        AI-Generated With This Formula
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {formula.generated.map((name) => (
                          <span key={name} className="inline-flex items-center rounded-lg bg-brand-100 px-3 py-1.5 text-sm font-medium text-brand-700">
                            {name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Catchy Name Test */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">
            The 8-Point Catchy Name Test
          </h2>
          <p className="text-slate-600 mb-8">
            Before you commit to a name, run it through these 8 quick tests. A truly catchy name
            should pass at least 6 out of 8.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {CATCHY_TESTS.map((test, i) => (
              <div key={i} className="rounded-xl border border-slate-200 bg-white p-5">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{test.icon}</span>
                  <div>
                    <h3 className="font-bold text-slate-900">{test.test}</h3>
                    <p className="mt-1 text-sm text-slate-600">{test.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl bg-brand-50 border border-brand-200 p-5 text-center">
            <p className="text-brand-800 font-medium">
              Want a name that passes all 8 tests? <a href="/generate" className="underline font-semibold hover:text-brand-600">Try our AI generator</a> — it optimizes for short, spellable, and memorable names by default.
            </p>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">
            6 Naming Mistakes That Kill Catchiness
          </h2>
          <p className="text-slate-600 mb-6">
            These are the most common ways founders accidentally make their brand names forgettable.
            Avoid them and you&apos;ll already be ahead of 80% of new brands.
          </p>

          <div className="space-y-4">
            <div className="rounded-xl border border-red-200 bg-red-50 p-5">
              <h3 className="font-bold text-red-900">❌ Using hyphens and numbers</h3>
              <p className="mt-1 text-red-700 text-sm">&quot;Best-Brand-4U&quot; looks spammy, is hard to say out loud, and nobody will remember where the hyphen goes. <span className="font-semibold">Instead:</span> Use a single clean word or compound — &quot;BestBrand&quot; or &quot;Brandify.&quot;</p>
            </div>
            <div className="rounded-xl border border-red-200 bg-red-50 p-5">
              <h3 className="font-bold text-red-900">❌ Choosing a name that&apos;s too literal</h3>
              <p className="mt-1 text-red-700 text-sm">&quot;Quick Accounting Services&quot; is clear but completely forgettable. Literal names tell but don&apos;t stick. <span className="font-semibold">Instead:</span> Use a suggestive name — &quot;Ledgerpoint&quot; suggests accounting without spelling it out.</p>
            </div>
            <div className="rounded-xl border border-red-200 bg-red-50 p-5">
              <h3 className="font-bold text-red-900">❌ Copying trends blindly</h3>
              <p className="mt-1 text-red-700 text-sm">The &quot;-ify&quot; suffix (Shopify, Spotify) was fresh in 2010. In 2026, it reads as derivative. Every naming trend has a shelf life. <span className="font-semibold">Instead:</span> Create your own pattern or use proven techniques (alliteration, compounds, metaphors) in fresh combinations.</p>
            </div>
            <div className="rounded-xl border border-red-200 bg-red-50 p-5">
              <h3 className="font-bold text-red-900">❌ Picking a name you can&apos;t spell</h3>
              <p className="mt-1 text-red-700 text-sm">If someone hears your name on a podcast and can&apos;t Google it correctly, you&apos;ve lost them forever. <span className="font-semibold">Instead:</span> Test it: say your name to 5 people and ask them to spell it. If more than 1 gets it wrong, simplify.</p>
            </div>
            <div className="rounded-xl border border-red-200 bg-red-50 p-5">
              <h3 className="font-bold text-red-900">❌ Ignoring trademark conflicts</h3>
              <p className="mt-1 text-red-700 text-sm">A catchy name that someone else already owns isn&apos;t yours. A cease-and-desist letter 6 months in means rebranding costs that dwarf any naming investment. <span className="font-semibold">Instead:</span> Always check USPTO.gov before falling in love with a name.</p>
            </div>
            <div className="rounded-xl border border-red-200 bg-red-50 p-5">
              <h3 className="font-bold text-red-900">❌ Naming for yourself, not your customer</h3>
              <p className="mt-1 text-red-700 text-sm">You might love &quot;Xyloquin&quot; because it sounds unique. But if your customers can&apos;t pronounce it, spell it, or remember what you do — it&apos;s not catchy, it&apos;s just confusing. <span className="font-semibold">Instead:</span> Test names with people in your target market, not your friends.</p>
            </div>
          </div>
        </section>

        {/* Industry-Specific Generators */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">
            Industry-Specific Brand Name Generators
          </h2>
          <p className="text-slate-600 mb-6">
            Generic name ideas are a starting point, but industry-specific names convert better.
            Use our generators for names tailored to your niche:
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
                    className="h-5 w-5 text-slate-400 flex-shrink-0 ml-4 transition-transform duration-200 group-open:rotate-180"
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
            Ready to Find Your Catchy Brand Name?
          </h2>
          <p className="mt-3 text-slate-300 max-w-lg mx-auto">
            Describe your brand idea and get 5 unique names with brand kits, domain checks, and social
            availability — free.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-brand-700 transition-colors"
            >
              Generate Catchy Names — Free
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