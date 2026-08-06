import type { Metadata } from 'next'
import Link from 'next/link'
import { IndustryPageSchema } from '@/components/IndustryPageSchema'
import { IndustryBlogLinks } from '@/components/IndustryBlogLinks'

export const metadata: Metadata = {
  title: 'Free Craft Name Generator — AI-Powered Handmade & Artisan Business Names',
  description: 'Generate creative craft business names with AI. Get a complete brand kit including logo concepts, color palettes, taglines, and domain availability checks. Free to start — no credit card required.',
  keywords: [
    'craft name generator',
    'handmade business names',
    'artisan name ideas',
    'craft brand names',
    'Etsy shop name generator',
    'handmade name ideas',
    'craft business names',
    'artisan business names',
    'craft brand name generator',
    ' makers business name',
    'handmade brand names',
    'DIY business names',
    'how to name a craft business',
    'craft naming guide',
  ],
  openGraph: {
    title: 'Free Craft Name Generator — AI-Powered Handmade & Artisan Business Names',
    description: 'Generate creative craft business names with AI. Logo, colors, tagline, domain check — all in one. Free to start.',
    url: 'https://brandforge.app/craft-name-generator',
    siteName: 'BrandForge',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Craft Name Generator — AI-Powered Handmade & Artisan Names',
    description: 'Generate creative craft business names with AI. Logo, colors, tagline, domain check — all in one.',
  },
  alternates: {
    canonical: 'https://brandforge.app/craft-name-generator',
  },
  robots: { index: true, follow: true },
}

const EXAMPLE_NAMES = [
  { name: 'Ember & Grain', tagline: 'Shaped by hand, powered by heart', style: 'Warm & Artisan', domain: 'emberandgrain.com', color: '#92400E' },
  { name: 'Thistlecraft', tagline: 'Where wild meets made', style: 'Nature-Inspired & Earthy', domain: 'thistlecraft.com', color: '#065F46' },
  { name: 'Fireside Makers', tagline: 'Crafted around the glow', style: 'Cozy & Inviting', domain: 'firesidemakers.com', color: '#DC2626' },
  { name: 'Hearth & Honey', tagline: 'Sweet things, made slowly', style: 'Charming & Nostalgic', domain: 'hearthandhoney.com', color: '#D97706' },
  { name: 'Riven Studio', tagline: 'Split from the ordinary', style: 'Modern & Edgy', domain: 'rivenstudio.com', color: '#1E293B' },
  { name: 'Wildskein', tagline: 'Threads that run free', style: 'Organic & Textural', domain: 'wildskein.com', color: '#7C3AED' },
]

const CATEGORIES = [
  { name: 'Pottery & Ceramics', desc: 'Wheel-thrown, handbuilt, and kiln-fired names for clay artists' },
  { name: 'Jewelry & Metalsmithing', desc: 'Refined, sparkling names for handcrafted adornments' },
  { name: 'Textile & Fiber Arts', desc: 'Woven, knit, and dyed names for fabric-first brands' },
  { name: 'Woodworking & Carpentry', desc: 'Grain-rich, solid names for makers who shape wood' },
  { name: 'Candles & Home Fragrance', desc: 'Warm, evocative names for scented craft businesses' },
  { name: 'Leatherwork & Bookbinding', desc: 'Tactile, heritage names for leather crafters' },
  { name: 'Soap & Skincare', desc: 'Clean, natural names for handmade bath & body brands' },
  { name: 'Paper & Stationery', desc: 'Ink-forward, elegant names for print & paper artists' },
]

const NAMING_TIPS = [
  {
    title: 'Embrace material words',
    description: 'Words like "Grain," "Thistle," "Skein," and "Ember" signal craft without being generic. They anchor your name in the physical world of making — exactly what craft customers are searching for.',
  },
  {
    title: 'Think Etsy-first',
    description: 'Your name will appear in Etsy search results, Instagram bios, and craft fair signage. It needs to be memorable at 3 inches on a booth banner and readable at 12 pixels in a search result. Short, distinctive, and spellable wins every time.',
  },
  {
    title: 'Pair a nature word with a craft word',
    description: 'The best craft names combine the organic and the handmade: "Ember & Grain," "Thistlecraft," "Wildskein." This formula is popular because it works — it tells customers you make real things from real materials.',
  },
  {
    title: 'Check trademark before you fall in love',
    description: 'The craft space is crowded on Etsy and at craft fairs. Search the USPTO database before committing to a name. BrandForge checks domain and social availability, but do a quick trademark search too — especially in the "handmade goods" class.',
  },
  {
    title: 'Avoid "handmade" in the name itself',
    description: '"Handmade Soaps by Sarah" describes what you do — but it doesn\'t differentiate you from the 10,000 other "handmade" soap sellers. Build a brand name that stands on its own; let "handmade" be a value proposition, not your entire identity.',
  },
  {
    title: 'Test it at a craft fair',
    description: 'Say your name to 5 people at a craft fair. If they can spell it back, remember it 10 minutes later, and it feels right next to the other booth signs — you\'ve got a winner. The best craft names feel like they belong on a hand-stamped tag.',
  },
]

const FAQ_ITEMS = [
  {
    q: 'How does the craft name generator work?',
    a: 'Describe your craft business — your medium (pottery, jewelry, textiles, wood, candles, leather, soap, paper), your style (rustic, modern, minimalist, whimsical), and your target customer (Etsy shoppers, craft fair visitors, wholesale buyers). BrandForge\'s AI generates custom name suggestions paired with complete brand kits including logo concepts, color palettes, taglines, and domain/social availability checks.',
  },
  {
    q: 'Is the craft name generator free?',
    a: 'Yes! You can generate craft name ideas for free — 5 suggestions per search, unlimited searches, no credit card required. Unlock the full brand kit (logo, colors, tagline, typography, domain & social checks) for $9 per brand kit.',
  },
  {
    q: 'What makes a good handmade business name?',
    a: 'A great craft name feels tactile and authentic — it should evoke the material and process behind your work. Words like "Grain," "Skein," "Forge," and "Studio" connect customers to the making process. The best names sound like something you\'d see on a hand-stamped label, not a corporate logo.',
  },
  {
    q: 'Should I use "handmade" or "craft" in my business name?',
    a: 'Generally, no. "Handmade" and "craft" are descriptions, not differentiators. There are thousands of "Handmade Creations" shops on Etsy. A distinctive brand name like "Thistlecraft" or "Wildskein" is more memorable and gives you room to expand beyond a single product line.',
  },
  {
    q: 'Can I use these names for my Etsy shop or craft business?',
    a: 'Absolutely. All names you generate are yours to use commercially — for business registration, Etsy shop names, domain purchases, social media, craft fair signage, and product packaging. There are no licensing restrictions.',
  },
  {
    q: 'What if I want names for a specific craft niche?',
    a: 'Just describe your craft in the prompt. Whether it\'s wheel-thrown pottery, hand-poured candles, custom leather wallets, or woven wall hangings — BrandForge tailors suggestions to your exact medium, aesthetic, and ideal customer.',
  },
  {
    q: 'How important is a matching domain for craft businesses?',
    a: 'Essential if you plan to sell online beyond Etsy. A .com matching your brand name builds trust for direct-to-customer sales and gives you an email address that looks professional on craft fair applications. BrandForge checks domain availability in real-time, including .craft, .shop, and .studio extensions.',
  },
  {
    q: 'What comes in the brand kit for each name?',
    a: 'Each brand kit includes: a logo concept (text-based with font pairing), a 5-color palette with hex codes, a custom tagline, typography recommendations, and real-time availability checks for domains and social handles. You can download it all as a PDF brand guidelines document.',
  },
]

export default function CraftNameGeneratorPage() {
  return (
    <>
      <IndustryPageSchema name="Craft Name Generator" path="/craft-name-generator" description="AI-powered craft name generator with complete brand kits including logos, colors, taglines, and domain availability." faqItems={FAQ_ITEMS} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-700 via-orange-600 to-rose-700" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-700">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 3.996 3.996 0 004.996 3.75 3.996 3.996 0 003.184-4.623l1.69-1.69m0 0l1.69-1.69m-1.69 1.69l1.78 1.78M5.56 5.56l1.78 1.78m14.71-1.78l-1.78 1.78M5.56 18.44l1.78-1.78" />
            </svg>
            AI-Powered Craft Naming
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Craft Name Generator
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-amber-100">
            Generate handmade business names with AI. Describe your craft, get name suggestions with complete brand kits — logo concepts, color palettes, taglines, and domain availability. Free to start.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="btn-primary inline-flex items-center gap-2 text-base px-8 py-3"
            >
              Generate Craft Names
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
              Names for Every Craft
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              From pottery to leatherwork — we generate names that feel handmade, authentic, and unmistakably yours.
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
              Craft Names, Generated in Seconds
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
            These are real examples — your results will be tailored to your specific craft business.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              How to Name Your Craft Business with AI
            </h2>
          </div>
          <div className="space-y-8">
            {[
              { step: '1', title: 'Describe your craft', desc: 'Tell us what you make — pottery, jewelry, textiles, woodwork, candles, leather goods, soap, paper crafts, or something else entirely. Describe your aesthetic (rustic, modern, whimsical, minimalist) and where you sell (Etsy, craft fairs, wholesale, direct online).' },
              { step: '2', title: 'Get tailored name suggestions', desc: 'BrandForge generates 5 unique craft names per search, each with a matching tagline, color palette, and logo concept. Every name feels handcrafted, authentic, and distinctive — no generic "Handmade Creations" here.' },
              { step: '3', title: 'Check domain & social availability', desc: 'Every name comes with real-time checks for .com, .shop, .craft, .studio, and more — plus Instagram, Pinterest, Etsy, and social media handle availability. Essential for craft businesses that live on visual platforms.' },
              { step: '4', title: 'Download your brand kit', desc: 'Unlock the full brand kit: logo concept, 5-color palette with hex codes, tagline, typography recommendations, and a downloadable PDF brand guidelines document ready for your labels, packaging, and online shop.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-600 text-white font-bold text-lg">
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
              Tips for Naming Your Craft Business
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              In the handmade world, your name is your first impression at a craft fair, on Etsy, and on Instagram. Here&apos;s how to make it stick.
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
      <section className="py-16 bg-gradient-to-br from-amber-700 to-rose-700">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to Name Your Craft Business?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Describe your craft. Get names with brand kits. Free to start, $9 per brand kit you love.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-semibold text-amber-800 shadow-lg hover:bg-gray-50 transition-colors"
            >
              Generate Craft Names
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
      <IndustryBlogLinks industry="craft-name-generator" />
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
            <Link href="/education-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
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
<Link href="/florist-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              💐 Florist Name Generator
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