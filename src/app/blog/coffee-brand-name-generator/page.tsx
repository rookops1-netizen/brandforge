/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import { BlogNewsletterSection } from '@/components/BlogNewsletterSection'
import { BlogPostSchema } from '@/components/BlogPostSchema'

export const dynamic = 'force-static'
export const metadata: Metadata = {
  title: 'Coffee Shop Name Generator: 300+ Coffee Brand Name Ideas for 2026 + Free AI Tool',
  description: '300+ coffee shop and café name ideas across 10 categories, 7 proven naming strategies from top coffee brands, and a free AI generator that checks domain & social availability instantly.',
  keywords: [
    'coffee shop name generator',
    'coffee shop names',
    'café name ideas',
    'coffee brand names',
    'coffee shop name ideas',
    'café name generator',
    'coffee business names',
    'coffee house names',
    'coffee roaster names',
    'café business names',
    'coffee shop name ideas 2026',
    'best coffee shop names',
    'creative café names',
    'unique coffee shop names',
    'catchy coffee names',
    'how to name a coffee shop',
    'coffee shop naming tips',
    'coffee brand name ideas',
    'espresso bar names',
    'coffee stand names',
  ],
  openGraph: {
    title: 'Coffee Shop Name Generator: 300+ Coffee Brand Name Ideas for 2026 + Free AI Tool',
    description: '300+ coffee shop name ideas across 10 categories, 7 naming strategies from top coffee brands, and a free AI generator with domain & social availability checks.',
    url: 'https://brandforge.app/blog/coffee-brand-name-generator',
    siteName: 'BrandForge',
    type: 'article',
    publishedTime: '2026-08-14T12:00:00.000Z',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Coffee Shop Name Generator: 300+ Coffee Brand Name Ideas for 2026',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coffee Shop Name Generator: 300+ Coffee Brand Name Ideas for 2026',
    description: '300+ coffee shop name ideas by category, 7 naming strategies from top coffee brands, and a free AI generator that checks domain availability.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: 'https://brandforge.app/blog/coffee-brand-name-generator',
  },
  robots: { index: true, follow: true },
}

const CATEGORIES = [
  {
    name: 'Classic & Heritage Coffee Shop Names',
    names: ['The Roasted Bean', 'Heritage Coffee Co.', 'Old Mill Coffee', 'Copper Kettle Coffee', 'The Grindstone', 'Founders Coffee House', 'Pioneer Roasters', 'Tradition Coffee Co.', 'Ironclad Café', 'The Brick Bean', 'Heritage Brew', 'Stone Street Coffee', 'The Daily Grind', 'Columbian Roast Co.', 'Timber Creek Coffee', 'The Roasting Room', 'Atlas Coffee House', 'Cornerstone Café', 'Common Grounds', 'Foundry Coffee Co.', 'The Roaster\'s Table', 'Market Street Coffee', 'Cobblestone Café', 'Iron Bridge Coffee', 'The Beanery', 'Riverside Roasters', 'Main Street Coffee', 'Old Town Roasters', 'Union Coffee House', 'Pioneer Brew Co.'],
  },
  {
    name: 'Modern & Minimalist Café Names',
    names: ['BREW', 'RAOST', 'GRND', 'FILTER', 'DRAFT Coffee', 'POUR', 'SHIFT Coffee', 'BASIS', 'ESSE Coffee Co.', 'LINEA', 'MONO Café', 'MTR Coffee', 'NODE', 'KINETIC Coffee', 'FORMA', 'VERTEX Café', 'ECHO Roasters', 'PRISM Coffee', 'NULL Coffee Co.', 'CORE Café', 'PLANE Coffee', 'AXIS Roasters', 'CUB Coffee', 'HUE Café', 'SHIFT Roasters', 'GRID Coffee', 'FLUX Café', 'PEAK Coffee Co.', 'BLK Coffee', 'MOD Coffee Lab'],
  },
  {
    name: 'Artisan & Third Wave Coffee Names',
    names: ['Ritual Roasters', 'Craft & Co. Coffee', 'Ember Roasting Co.', 'Parchment Coffee', 'Single Origin House', 'The Careful Pour', 'Artisan Roast Lab', 'Small Batch Coffee', 'Bloom Roasters', 'Temper Coffee Co.', 'Copper Press', 'The Gentle Pour', 'Prism Roasters', 'Dose Coffee', 'Metric Coffee Co.', 'The Roast Project', 'Gentle Brew Co.', 'Copperhead Roasters', 'Pourover Society', 'The Extraction Co.', 'Slow Pour Coffee', 'Vessel Roasters', 'Copper Canopy Coffee', 'The Artisan Cup', 'Fraction Coffee', 'Dial In Coffee Co.', 'Heritage Roast Lab', 'Copper & Oak Coffee', 'The Pour Collective', 'Threshold Coffee Co.'],
  },
  {
    name: 'Cozy & Neighborhood Café Names',
    names: ['The Living Room Café', 'Hearth Coffee', 'Warm Cup Café', 'Front Porch Coffee', 'Cozy Bean', 'Neighborhood Cup', 'The Comfort Café', 'Homeplate Coffee', 'The Corner Cup', 'Welcome Café', 'Steady Pour', 'Haven Coffee House', 'The Mug & Blanket', 'Good Morning Café', 'The Gathering Cup', 'Slow Morning Coffee', 'The Friendly Bean', 'Sunroom Café', 'The Cozy Kettle', 'Front Door Coffee', 'Warm Glow Café', 'The Community Cup', 'Slow Brew House', 'Neighborly Coffee', 'The Hearthstone', 'The Open Door Café', 'Steady Hand Coffee', 'Good Nature Café', 'The Porch Swing', 'At Home Coffee Co.'],
  },
  {
    name: 'Specialty & Roaster Names',
    names: ['Altitude Roasters', 'Green Bean Collective', 'Seed to Cup Co.', 'Equator Coffee Roasters', 'Harvest Roasters', 'Summit Coffee Roasters', 'Terrain Roasting Co.', 'The Roasting Guild', 'Apex Roasters', 'Boreal Coffee Co.', 'Terroir Roasters', 'Latitude Coffee', 'Elevation Roast Co.', 'The Bean Cartel', 'Highland Roasters', 'Crown Roasting Co.', 'Single Origin Supply', 'The Roaster\'s Guild', 'Meridian Roasters', 'Origin Trail Coffee', 'Summit Supply Co.', 'Coastal Roasters', 'Terrain Coffee Supply', 'Valley Roasters', 'Crest Coffee Co.', 'The Green Cherry', 'Highground Roasters', 'Canopy Coffee Co.', 'Origin Story Roasters', 'District Roasters'],
  },
  {
    name: 'Espresso & Italian-Inspired Names',
    names: ['Espresso Republic', 'Caffè Veloce', 'La Tazza', 'Doppio Coffee Co.', 'Macchiato House', 'Crema Coffee Bar', 'Espresso Lungo', 'La Moka', 'Barista & Co.', 'Caffè Rustico', 'Espressamente', 'La Bottega del Caffè', 'Caffè Pronto', 'L\'Espresso', 'Caffè Vivo', 'Macchina Coffee', 'La Pressa', 'Caffè Fresco', 'Dolce Caffè', 'Barista Lab', 'Crema & Co.', 'Caffè Milano', 'Espresso Nostrano', 'La Tazza Perfetta', 'Caffè Centrale', 'Espresso Maestro', 'Caffè Bottega', 'L\'Arte del Caffè', 'Caffè Espresso Bar', 'La Casa del Caffè'],
  },
  {
    name: 'Playful & Trendy Coffee Names',
    names: ['But First Coffee', 'Caffeine & Chaos', 'The Wandering Bean', 'Wakey Wakey Café', 'Dark Matter Coffee', 'Coffee o\'Clock', 'Brewed Awakening', 'Bean There Café', 'Grounds for Coffee', 'The Caffeinated Cat', 'Mug Life Coffee', 'Perk Up Café', 'The Jittery Bean', 'Coffee Conspiracy', 'Undercover Roasters', 'Bean Me Up', 'The Sleepy Barista', 'Ctrl+Alt+Brew', 'Coffee Criminals', 'The Buzzed Bean', 'Morning Report Coffee', 'Coffee & Contemplation', 'The Decaf Detective', 'Espresso Yourself', 'Bean Bandit', 'Coffee & Chaos Co.', 'The Wide Awake Café', 'Perk Patrol', 'Caffeine Cartel', 'The Unfiltered Bean'],
  },
  {
    name: 'Nature & Botanical Coffee Names',
    names: ['Wild Bloom Coffee', 'Sage & Bean', 'Moss & Roast', 'Cedar Creek Coffee', 'Timber Roasters', 'Fern & Pour', 'River Bean Coffee Co.', 'Wildflower Café', 'Oak & Ember', 'Birchwood Coffee', 'Pine & Pour', 'Ivy League Coffee', 'Redwood Roasters', 'Alder Coffee Co.', 'Willow & Bean', 'Summit & Seed Coffee', 'Meadow Roasters', 'Stone Creek Coffee', 'Maple Brew Co.', 'Elm Street Roasters', 'Canopy Coffee House', 'Fernwood Café', 'Acorn Coffee Co.', 'Driftwood Roasters', 'Hemlock Coffee House', 'Spruce & Cup', 'Moss Creek Roasters', 'Briar Coffee Co.', 'Cedar & Cup Café', 'Wild Root Roasters'],
  },
  {
    name: 'Mobile & Drive-Through Coffee Names',
    names: ['Fuel Line Coffee', 'Dash & Brew', 'Cup Route Coffee', 'Quick Pour Café', 'The Coffee Stop', 'Express Lane Coffee', 'Steer & Brew', 'Pitstop Coffee Co.', 'The Commuter\'s Cup', 'Road Bean Roasters', 'Mug Run Coffee', 'Fast Grind Café', 'Drive & Pour', 'The Window Coffee', 'Curb Brew', 'Swift Cup Mobile', 'The Roaming Bean', 'Mile Marker Coffee', 'Brew & Go', 'The Daily Route', 'Street Pour Coffee', 'Dash Cup Café', 'Trailhead Coffee Co.', 'The Roaming Roaster', 'Rapid Brew', 'Breeze Coffee Bar', 'The Cup Window', 'Street & Bean', 'Rolling Roasters', 'The Brew Stop'],
  },
  {
    name: 'Corporate & Wholesale Coffee Names',
    names: ['Crest Coffee Supply Co.', 'Vantage Coffee Group', 'Summit Coffee Partners', 'Atlas Coffee Holdings', 'Meridian Coffee Corp.', 'Prime Roast Group', 'Sterling Coffee Co.', 'Vanguard Coffee Supply', 'Apex Coffee Solutions', 'Catalyst Coffee Co.', 'Eclipse Coffee Group', 'Pinnacle Coffee Partners', 'Fortis Coffee Supply', 'Equinox Roasters', 'Beacon Coffee Co.', 'Capital Coffee Group', 'Benchmark Roasters', 'Integral Coffee Corp.', 'Summit Supply Co.', 'Alliance Coffee Group', 'True North Coffee Co.', 'Pacific Roasters Group', 'Horizon Coffee Holdings', 'Unity Coffee Corp.', 'Pillar Coffee Co.', 'Vanguard Roasters', 'Landmark Coffee Group', 'Precision Roast Co.', 'Continental Coffee Supply', 'Pacific Coffee Partners'],
  },
]

const NAMING_STRATEGIES = [
  {
    name: 'Sensory & Experience-Based',
    description: 'Names that evoke the taste, smell, and feeling of coffee — the most powerful way to connect with customers.',
    examples: 'Ember Roasters, The Gentle Pour, Bloom Coffee, Warm Cup Café',
    why: 'Coffee is one of the most sensory products on earth. The smell alone can pull someone through your door. Names that evoke the experience — the warmth, the ritual, the slow pour — create an immediate emotional connection. "Ember Roasters" makes you feel the warmth. "The Gentle Pour" makes you slow down. "Bloom" captures that moment when hot water hits fresh grounds. These names sell the experience before someone even walks in.',
  },
  {
    name: 'Minimalist & Modern',
    description: 'Short, punchy names that look incredible on cups, signage, and Instagram.',
    examples: 'BREW, FILTER, POUR, SHIFT Coffee, DRAFT Coffee, LINEA',
    why: 'The coffee industry has gone minimalist. Look at Blue Bottle, Stumptown, Verve — the most successful modern coffee brands use short, punchy, single-word or two-syllable names. They look clean on a cup, sharp on a sign, and perfect in an Instagram bio. If your target customer is under 40, lives in a city, and cares about design, a minimalist name is your strongest move.',
  },
  {
    name: 'Craft & Process-Based',
    description: 'Names that signal expertise in the craft — roasting, brewing, sourcing.',
    examples: 'Ritual Roasters, Small Batch Coffee, Parchment Coffee, The Extraction Co.',
    why: 'Third-wave coffee is about craft. Customers who care about single-origin, fair-trade, and pour-over methods want to know you take the craft seriously. Names like "Ritual Roasters" and "Small Batch" signal expertise, intentionality, and respect for the bean. These names attract the coffee enthusiast who will pay $6 for a pour-over and tell their friends about it.',
  },
  {
    name: 'Location & Neighborhood-Based',
    description: 'Names that ground your café in a place and build local identity.',
    examples: 'Stone Street Coffee, Market Street Coffee, Cedar Creek Coffee, Riverside Roasters',
    why: 'Coffee shops are deeply local businesses. "Stone Street Coffee" instantly tells you where it is and builds neighborhood pride. Location-based names dominate in local search ("coffee shop near me" + your neighborhood name), and they create loyalty — people love their neighborhood café. This strategy is especially powerful in cities with strong neighborhood identities.',
  },
  {
    name: 'Italian & Heritage-Inspired',
    description: 'Names that reference the Italian espresso tradition and café culture.',
    examples: 'Caffè Veloce, La Tazza, Macchiato House, Crema Coffee Bar',
    why: 'Italy is the birthplace of espresso culture. Italian-inspired names immediately signal authenticity, tradition, and quality to anyone who cares about real coffee. "Caffè Veloce" sounds like it belongs on a cobblestone street in Rome. This strategy works best for traditional espresso bars, Italian-style cafés, and shops that emphasize classic preparation methods.',
  },
  {
    name: 'Playful & Personality-Driven',
    description: 'Fun, memorable names with personality that stand out in a crowded market.',
    examples: 'But First Coffee, Brewed Awakening, Espresso Yourself, The Wandering Bean',
    why: 'Coffee culture has a sense of humor. A playful name like "Brewed Awakening" or "But First Coffee" is instantly memorable, highly shareable on social media, and creates an approachable brand personality. These names work especially well for neighborhood cafés, campus coffee shops, and brands targeting millennials and Gen Z. They make people smile — and smiling customers come back.',
  },
  {
    name: 'Botanical & Origin-Based',
    description: 'Names that connect to coffee\'s natural origins — plants, geography, terroir.',
    examples: 'Wild Bloom Coffee, Cedar Creek Coffee, Equator Roasters, Seed to Cup Co.',
    why: `Coffee starts as a fruit on a plant in a specific place. Botanical and origin-based names ("Wild Bloom," "Equator," "Seed to Cup") remind customers of that journey. They signal transparency, sustainability, and a connection to the source — values that matter enormously to specialty coffee drinkers. These names also differentiate you from generic "Joe's Coffee" shops by telling a story about where your beans come from.`,
  },
]

const NAMING_MISTAKES = [
  {
    title: 'Being too generic',
    description: '"The Coffee Shop" or "Morning Brew" tells customers nothing about what makes you different. There are 65,000+ coffee shops in the US — a generic name makes you invisible. "Ember Roasters" or "The Gentle Pour" says something specific about your craft and experience.',
  },
  {
    title: 'Choosing a name you can\'t spell over the phone',
    description: 'If someone has to ask "How do you spell that?" when you tell them your café name, it\'s too complicated. Your name will be spoken in recommendations, typed in Google, and texted to friends. If they can\'t spell it, they can\'t find you.',
  },
  {
    title: 'Ignoring the cup test',
    description: 'Your name will appear on coffee cups, menu boards, Instagram posts, and Yelp listings. Long names become unreadable on a 12oz cup. "Caffè Veloce" fits perfectly. "The Best Coffee House in Downtown Portland" does not. If it doesn\'t fit on a cup, it\'s too long.',
  },
  {
    title: 'Copying the competition',
    description: 'If every coffee shop in your area uses "[Neighborhood] Coffee Co." or "The [Something] Bean," naming yourself the same way makes you forgettable. Look at your local competition, then pick a name that stands out. Differentiation is everything in a saturated market.',
  },
  {
    title: 'Limiting your growth',
    description: '"Downtown Espresso Bar" locks you into one location and one product. "Ember Roasters" lets you expand to multiple locations, sell wholesale beans, launch a subscription box, and build a national brand. Pick a name that grows with your ambitions.',
  },
  {
    title: 'Forgetting the Instagram factor',
    description: 'Coffee shops live and die by Instagram. Your name needs to work as a handle (@emberrroasters), look good on a story, and be shareable in a bio. If the Instagram handle is taken, you\'re fighting for discoverability from day one. Check social handles before you commit.',
  },
  {
    title: 'Skipping trademark research',
    description: 'The coffee industry has intense trademark competition. Before committing to a name, search the USPTO database for existing registrations in Class 30 (coffee, beverages) and Class 43 (restaurant and café services). A cease-and-desist letter after you\'ve already printed cups, menus, signage, and merchandise is expensive and demoralizing.',
  },
]

const FAQ_ITEMS = [
  {
    question: 'How does the coffee shop name generator work?',
    answer: 'Describe your coffee business — your style (third-wave artisan, cozy neighborhood, Italian espresso bar, mobile cart, etc.), your vibe (modern, traditional, playful, premium), and your target customers. BrandForge\'s AI generates custom name suggestions paired with complete brand kits including logo concepts, color palettes, taglines, and domain/social availability checks.',
  },
  {
    question: 'Is the coffee shop name generator free?',
    answer: 'Yes! You can generate coffee shop name ideas for free — 5 suggestions per search, unlimited searches, no credit card required. Unlock the full brand kit (logo, colors, tagline, typography, domain & social checks) for $9 per brand kit.',
  },
  {
    question: 'What makes a good coffee shop name?',
    answer: 'A great coffee shop name is memorable, easy to spell and pronounce, fits on a coffee cup, works as a social media handle, and evokes the experience you want customers to have. The best names — Blue Bottle, Stumptown, Verve, Intelligentsia — are distinctive, short, and instantly signal quality and personality.',
  },
  {
    question: 'Should I include "coffee," "café," or "roasters" in my name?',
    answer: 'It depends on your business model. "Coffee" is universal and clear. "Café" implies a sit-down experience with food. "Roasters" signals specialty coffee expertise and suggests you roast your own beans — don\'t use it if you don\'t. "Bar" suggests a focused espresso experience. If you plan to expand beyond coffee (merch, wholesale, subscriptions), a name without a category word (like "Ember" or "Verve") gives you more room to grow.',
  },
  {
    question: 'Can I use these names for my coffee business?',
    answer: 'Absolutely. All names you generate are yours to use commercially — for business registration, signage, cups, merchandise, website, social media, and marketing materials. There are no licensing restrictions. Just make sure to check trademark availability for your final choice.',
  },
  {
    question: 'How important is a matching domain for coffee shops?',
    answer: 'Very important. Coffee shops get discovered through Google searches ("coffee near me"), Instagram, and word of mouth. A matching .com domain makes you findable, professional, and easy to remember. If your exact .com is taken, .coffee and .cafe are strong alternatives in the coffee industry.',
  },
  {
    question: 'What comes in the brand kit for each name?',
    answer: 'Each brand kit includes: a logo concept (text-based with font pairing), a 5-color palette with hex codes, a custom tagline, typography recommendations, and real-time availability checks for domains and social handles. You can download it all as a PDF brand guidelines document.',
  },
  {
    question: 'How do coffee shop names differ from other business names?',
    answer: 'Coffee shop names need to work in unique contexts: printed on small cups, visible on a chalkboard menu, readable on Instagram stories, and memorable enough to recommend in a quick conversation. They also compete in one of the most saturated local markets — "coffee near me" returns dozens of results. A distinctive name is not optional for coffee shops; it\'s essential for survival.',
  },
]

const INDUSTRY_LINKS = [
  { name: '☕ AI Name Generator', href: '/generate', desc: 'Generate coffee names with full brand kits' },
  { name: '🍞 Bakery Name Generator', href: '/blog/bakery-name-generator', desc: 'Name ideas for bakeries and pastry shops' },
  { name: '🍽️ Restaurant Name Generator', href: '/restaurant-name-generator', desc: 'Name ideas for restaurants and dining' },
  { name: '🧹 Small Business Name Generator', href: '/blog/small-business-name-generator', desc: 'General small business naming' },
  { name: '💡 Business Name Ideas by Industry', href: '/blog/business-name-ideas-by-industry', desc: 'Browse names across 10+ industries' },
  { name: '🏷️ LLC Naming Guide', href: '/blog/llc-naming-guide', desc: 'How to pick a name for your LLC' },
  { name: '✏️ How to Choose a Business Name', href: '/blog/how-to-choose-business-name', desc: 'Complete naming guide for 2026' },
  { name: '🎯 Catchy Business Names', href: '/blog/catchy-business-names', desc: '150+ catchy business name ideas' },
  { name: '🏠 Real Estate Name Generator', href: '/blog/real-estate-brand-name-generator', desc: '300+ real estate name ideas' },
  { name: '📊 Marketing Agency Names', href: '/blog/marketing-agency-brand-name-generator', desc: '300+ marketing agency name ideas' },
]

export default function CoffeeBrandNameGeneratorPage() {
  return (
    <>
      <BlogPostSchema
        title="Coffee Shop Name Generator: 300+ Coffee Brand Name Ideas for 2026 + Free AI Tool"
        description="300+ coffee shop and café name ideas across 10 categories, 7 naming strategies from top coffee brands, and a free AI generator with domain & social availability checks."
        url="https://brandforge.app/blog/coffee-brand-name-generator"
        datePublished="2026-08-14"
        dateModified="2026-08-14"
      />
      {/* FAQ Schema for rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'FAQPage',
                mainEntity: FAQ_ITEMS.map((faq) => ({
                  '@type': 'Question',
                  name: faq.question,
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer,
                  },
                })),
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: 'https://brandforge.app',
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Blog',
                    item: 'https://brandforge.app/blog',
                  },
                  {
                    '@type': 'ListItem',
                    position: 3,
                    name: 'Coffee Shop Name Generator',
                    item: 'https://brandforge.app/blog/coffee-brand-name-generator',
                  },
                ],
              },
            ],
          }),
        }}
      />

      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero */}
        <header className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-700">
            ☕ Coffee Naming Guide
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Coffee Shop Name Generator:{' '}
            <span className="gradient-text">300+ Ideas for 2026</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            300+ coffee shop and café name ideas across 10 categories, 7 proven naming strategies from top coffee brands, and a free AI generator that checks domain availability instantly.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="/generate"
              className="btn-primary inline-flex items-center gap-2 text-base px-8 py-3"
            >
              Generate Coffee Names
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/generate"
              className="btn-secondary inline-flex items-center gap-2 text-base px-8 py-3"
            >
              ☕ Try the Generator
            </a>
          </div>
        </header>

        {/* Table of Contents */}
        <nav className="mb-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-sm font-semibold text-slate-900 mb-3">📋 In this guide:</h2>
          <ol className="space-y-2 text-sm text-slate-600">
            <li><a href="#categories" className="hover:text-brand-600 transition-colors">300+ coffee shop name ideas by category</a></li>
            <li><a href="#strategies" className="hover:text-brand-600 transition-colors">7 naming strategies from top coffee brands</a></li>
            <li><a href="#process" className="hover:text-brand-600 transition-colors">5-step naming process for coffee shops</a></li>
            <li><a href="#mistakes" className="hover:text-brand-600 transition-colors">7 naming mistakes that cost cafés customers</a></li>
            <li><a href="#faq" className="hover:text-brand-600 transition-colors">FAQ: Everything about coffee shop names</a></li>
          </ol>
        </nav>

        {/* Categories */}
        <section id="categories" className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">
            300+ Coffee Shop Name Ideas by Category
          </h2>
          <p className="text-slate-600 mb-8">
            Browse coffee shop and café name ideas organized by style and specialty. From cozy neighborhood spots to artisan roasters — find inspiration for your coffee business.
          </p>

          <div className="space-y-8">
            {CATEGORIES.map((cat) => (
              <div key={cat.name} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">{cat.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.names.map((name) => (
                    <span
                      key={name}
                      className="inline-flex items-center rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 transition-colors cursor-default"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="/generate"
              className="btn-primary inline-flex items-center gap-2 text-base px-8 py-3"
            >
              Generate Custom Names for Your Coffee Business
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </section>

        {/* Naming Strategies */}
        <section id="strategies" className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">
            7 Naming Strategies Top Coffee Brands Use
          </h2>
          <p className="text-slate-600 mb-8">
            The best coffee shop names aren't random — they follow proven naming patterns. Here are 7 strategies used by successful cafés, roasters, and coffee brands.
          </p>

          <div className="space-y-6">
            {NAMING_STRATEGIES.map((strategy, i) => (
              <div key={strategy.name} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-white font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{strategy.name}</h3>
                    <p className="mt-1 text-sm text-slate-500">{strategy.description}</p>
                    <p className="mt-2 text-sm text-slate-700">
                      <span className="font-semibold">Examples:</span> {strategy.examples}
                    </p>
                    <p className="mt-2 text-sm text-slate-600">{strategy.why}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5-Step Process */}
        <section id="process" className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">
            How to Name Your Coffee Shop in 5 Steps
          </h2>
          <p className="text-slate-600 mb-8">
            A proven process for naming your café, roastery, or coffee brand — from brainstorming to grand opening.
          </p>

          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Define your coffee concept</h3>
                  <p className="mt-2 text-slate-600">Before you name anything, get specific about what kind of coffee business you're building. Are you a neighborhood café? A third-wave roastery? A drive-through? A mobile cart? An Italian-style espresso bar? Your concept shapes your name entirely. "Ritual Roasters" works for artisan coffee. "Dash & Brew" works for speed and convenience. Write down your concept, your ideal customer, and what experience you want to deliver.</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-white font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Generate 20-30 name ideas</h3>
                  <p className="mt-2 text-slate-600">Use BrandForge's coffee name generator above to create a broad list. Try different angles — sensory names, craft names, location names, minimalist names, playful names. Don't filter yet. The goal is volume. Mix in personal name options (your name + Coffee Co.) and concept-specific options (Ember, Ritual, Bloom). You'll narrow down in the next steps.</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Run the Cup Test</h3>
                  <p className="mt-2 text-slate-600">This is the most important test for coffee shop names. Print your top 10 names and imagine each one on a 12oz coffee cup. Which names look great? Which ones are easy to read at a glance? Which ones would you be proud to hand to a customer? The Cup Test eliminates names that are too long, too complicated, or don't look good at cup size. A name that works on a business card but not on a cup is the wrong name for a coffee shop.</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-white font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Check domain, social handles, and trademark availability</h3>
                  <p className="mt-2 text-slate-600">Four checks, all critical for coffee shops: (1) Is the .com domain available? Check with BrandForge's domain checker. Also check .coffee and .cafe as strong alternatives. (2) Check Instagram, TikTok, and Yelp for handle availability — these are your primary marketing channels. (3) Search Google Maps in your area — are there already 3 cafés with similar names? If yes, pick something more distinctive. (4) Search the USPTO database for trademark conflicts in Class 30 (coffee) and Class 43 (restaurant/café services).</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-white font-bold">
                  5
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Say it in a recommendation</h3>
                  <p className="mt-2 text-slate-600">Coffee shops thrive on word of mouth. Would someone say "You have to try Ember Roasters — their pour-over is incredible" or "You have to try The Best Coffee House in Downtown Portland" — which one is easier to remember, easier to find on Instagram, easier to recommend to a friend? The best coffee shop names are names people remember and can recommend without spelling them out.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Naming Mistakes */}
        <section id="mistakes" className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">
            7 Naming Mistakes That Cost Coffee Shops Customers
          </h2>
          <p className="text-slate-600 mb-8">
            Avoid these common pitfalls that make coffee businesses harder to find, remember, and recommend.
          </p>

          <div className="space-y-4">
            {NAMING_MISTAKES.map((mistake, i) => (
              <div key={mistake.title} className="rounded-xl border border-red-100 bg-red-50/50 p-5">
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 text-xs font-bold">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900">{mistake.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{mistake.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Industry Generators */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">
            More Food & Beverage Name Generators
          </h2>
          <p className="text-slate-600 mb-6">
            Explore name generators for coffee-adjacent and food & beverage businesses.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {INDUSTRY_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 hover:border-brand-300 hover:shadow-sm transition-all"
              >
                <span className="text-2xl">{link.name.split(' ')[0]}</span>
                <div>
                  <div className="font-semibold text-slate-900 text-sm">{link.name.replace(link.name.split(' ')[0] + ' ', '')}</div>
                  <div className="text-xs text-slate-500">{link.desc}</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, i) => (
              <details key={i} className="group rounded-xl border border-slate-200 bg-slate-50">
                <summary className="flex cursor-pointer items-center justify-between p-5 text-base font-medium text-slate-900 hover:text-brand-600">
                  {item.question}
                  <svg className="h-5 w-5 flex-shrink-0 text-slate-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-gradient-to-br from-slate-900 to-brand-900 p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Name Your Coffee Shop?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Describe your coffee business. Get names with logo concepts, color palettes, taglines, and domain checks. Free to start, $9 per brand kit you love.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-semibold text-slate-900 shadow-lg hover:bg-gray-50 transition-colors"
            >
              Generate Coffee Names
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
        </section>

        {/* Related Posts */}
        <section className="mt-16">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Related Guides</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/blog/bakery-name-generator" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all">
              <div className="text-2xl mb-2">🍞</div>
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Bakery Name Generator</h3>
              <p className="text-sm text-slate-500 mt-1">300+ bakery name ideas for bakeries, pastry shops, and bake houses.</p>
            </Link>
            <Link href="/blog/small-business-name-generator" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all">
              <div className="text-2xl mb-2">📋</div>
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Small Business Name Generator</h3>
              <p className="text-sm text-slate-500 mt-1">200+ small business name ideas across every industry.</p>
            </Link>
            <Link href="/blog/catchy-business-names" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all">
              <div className="text-2xl mb-2">🎯</div>
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Catchy Business Names</h3>
              <p className="text-sm text-slate-500 mt-1">150+ catchy business name ideas that stick in people's minds.</p>
            </Link>
            <Link href="/blog/brand-color-psychology" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all">
              <div className="text-2xl mb-2">🎨</div>
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Brand Color Psychology</h3>
              <p className="text-sm text-slate-500 mt-1">What your brand colors say and how to choose the right palette.</p>
            </Link>
            <Link href="/blog/how-to-choose-business-name" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all">
              <div className="text-2xl mb-2">✏️</div>
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">How to Choose a Business Name</h3>
              <p className="text-sm text-slate-500 mt-1">The complete guide to naming a business in 2026.</p>
            </Link>
            <Link href="/blog/how-to-build-brand-identity" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all">
              <div className="text-2xl mb-2">🏗️</div>
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">How to Build a Brand Identity</h3>
              <p className="text-sm text-slate-500 mt-1">From name to logo to colors — build a brand people remember.</p>
            </Link>
          </div>
        </section>

        {/* Newsletter */}
        <BlogNewsletterSection />
      </article>
    </>
  )
}