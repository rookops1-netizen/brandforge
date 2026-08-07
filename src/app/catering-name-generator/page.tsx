import type { Metadata } from 'next'
import Link from 'next/link'
import { IndustryPageSchema } from '@/components/IndustryPageSchema'
import { IndustryBlogLinks } from '@/components/IndustryBlogLinks'

export const metadata: Metadata = {
  title: 'Free Catering Name Generator — AI-Powered Catering & Event Food Business Names',
  description: 'Generate creative catering business names with AI. Get a complete brand kit including logo concepts, color palettes, taglines, and domain availability checks. Free to start — no credit card required.',
  keywords: [
    'catering name generator',
    'catering business names',
    'catering company names',
    'catering name ideas',
    'event catering names',
    'food catering business names',
    'how to name a catering business',
    'catering brand names',
    'catering company name ideas',
    'wedding catering names',
    'corporate catering names',
    'private chef business names',
    'catering business name ideas 2026',
    'catering service names',
    'best catering names',
    'unique catering business names',
    'catering startup names',
    'mobile catering names',
    'catering brand name ideas',
    'creative catering names',
  ],
  openGraph: {
    title: 'Free Catering Name Generator — AI-Powered Catering & Event Food Business Names',
    description: 'Generate creative catering business names with AI. Logo, colors, tagline, domain check — all in one. Free to start.',
    url: 'https://brandforge.app/catering-name-generator',
    siteName: 'BrandForge',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Catering Name Generator — AI-Powered Catering & Event Food Names',
    description: 'Generate creative catering business names with AI. Logo, colors, tagline, domain check — all in one.',
  },
  alternates: {
    canonical: 'https://brandforge.app/catering-name-generator',
  },
  robots: { index: true, follow: true },
}

const EXAMPLE_NAMES = [
  { name: 'Savor & Serve', tagline: 'Crafted menus, served with style', style: 'Modern & Refined', domain: 'savorandserve.com', color: '#B45309' },
  { name: 'Gathered Table', tagline: 'Where every plate tells a story', style: 'Warm & Inviting', domain: 'gatheredtable.com', color: '#166534' },
  { name: 'Copper Kitchen Co.', tagline: 'Event cuisine, elevated', style: 'Industrial & Upscale', domain: 'copperkitchenco.com', color: '#92400E' },
  { name: 'Plated Affairs', tagline: 'From kitchen to celebration', style: 'Classic & Professional', domain: 'platedaffairs.com', color: '#1E3A5F' },
  { name: 'Fireside Catering', tagline: 'Bold flavors for big occasions', style: 'Rustic & Hearty', domain: 'firesidecatering.com', color: '#991B1B' },
  { name: 'Bloom & Bite', tagline: 'Beautiful food, beautifully served', style: 'Elegant & Creative', domain: 'bloombite.com', color: '#6B21A8' },
]

const CATEGORIES = [
  { name: 'Corporate & Business Catering', desc: 'Professional, reliable names for corporate event catering' },
  { name: 'Wedding & Celebration Catering', desc: 'Romantic, memorable names for wedding and special event caterers' },
  { name: 'Private Chef & Personal Catering', desc: 'Intimate, artisan names for personal chef services' },
  { name: 'Food Truck & Mobile Catering', desc: 'Bold, catchy names for mobile and street food caterers' },
  { name: 'BBQ & Outdoor Event Catering', desc: 'Rustic, hearty names for barbecue and outdoor event caterers' },
  { name: 'Vegan & Specialty Diet Catering', desc: 'Fresh, mindful names for plant-based and dietary-specific caterers' },
  { name: 'Luxury & Fine Dining Catering', desc: 'Elegant, sophisticated names for high-end event catering' },
  { name: 'Drop-Off & Meal Prep Catering', desc: 'Convenient, approachable names for delivery and meal prep services' },
]

const NAMING_TIPS = [
  {
    title: 'Say it at a crowded event',
    description: 'Your catering name will be said over music, at busy events, and in phone calls with stressed planners. "Savor & Serve" cuts through noise. "Quintessence Culinary" gets lost. If they can\'t hear it, they can\'t refer you — and referrals are everything in catering.',
  },
  {
    title: 'Think menus, not just names',
    description: 'The best catering names evoke taste and gathering — words like "Plated," "Table," "Kitchen," "Gathered," and "Feast" instantly signal food and events. Your name should make people hungry before they\'ve seen a single dish. Abstract names miss this advantage entirely.',
  },
  {
    title: 'Match your event style',
    description: 'If you specialize in corporate lunches, a name like "Gathered Table" signals warmth and reliability. For luxury weddings, "Plated Affairs" sounds aspirational. For casual BBQ events, "Fireside Catering" fits perfectly. Your name should attract the clients you actually want.',
  },
  {
    title: 'Check catering directories first',
    description: 'The catering industry has 12,000+ businesses in the US alone. Search your city + "catering" on Google, Yelp, and The Knot before committing. You need a name that stands out from "ABC Catering" and "Delicious Events" — the two most generic naming patterns in the industry.',
  },
  {
    title: 'Test the "who\'s catering?" rule',
    description: 'When an event planner asks "Who\'s doing the food?", your name should sound natural and memorable in the answer. "Fireside Catering" or "Savor & Serve" pass this test instantly. Names that are hard to spell or pronounce create friction at the exact moment you need word-of-mouth.',
  },
  {
    title: 'Make it Instagram-worthy',
    description: 'Catering is one of the most visually shared services — every beautiful plate, every buffet setup, every dessert table gets photographed. Your name will appear on menus, food stations, and social media posts. Short, memorable names like "Copper Kitchen Co." look great on signage and hashtag.',
  },
]

const FAQ_ITEMS = [
  {
    q: 'How does the catering name generator work?',
    a: 'Describe your catering business — your specialty (corporate events, weddings, private chef, BBQ, meal prep, vegan), your style (elegant, rustic, modern, casual, luxury), and your ideal client. BrandForge\'s AI generates custom name suggestions paired with complete brand kits including logo concepts, color palettes, taglines, and domain/social availability checks.',
  },
  {
    q: 'Is the catering name generator free?',
    a: 'Yes! You can generate catering name ideas for free — 5 suggestions per search, unlimited searches, no credit card required. Unlock the full brand kit (logo, colors, tagline, typography, domain & social checks) for $9 per brand kit.',
  },
  {
    q: 'What makes a good catering business name?',
    a: 'A great catering name evokes taste and gathering while being easy to say and spell. Words like "Plated," "Table," "Kitchen," "Gathered," and "Feast" immediately signal food and events. The best names feel like something you\'d be proud to put on a menu card or event program — professional, appetizing, and memorable.',
  },
  {
    q: 'Should I include "catering" in my business name?',
    a: 'It depends on your market. Including "catering" helps with local discoverability — people search "catering near me" constantly. But many successful caterers drop it: "Gathered Table," "Plated Affairs," "Copper Kitchen Co." If your name clearly signals food and events through other words, you can skip "catering" and still be found.',
  },
  {
    q: 'Can I use these names for my catering business?',
    a: 'Absolutely. All names you generate are yours to use commercially — for business registration, menus, signage, packaging, domain purchases, social media, and event branding. There are no licensing restrictions.',
  },
  {
    q: 'What if I want names for a specific type of catering?',
    a: 'Just describe your focus in the prompt. Whether it\'s luxury wedding catering, corporate boxed lunches, BBQ and outdoor events, vegan and plant-based catering, private chef services, or drop-off meal prep — BrandForge tailors suggestions to your exact specialty, style, and ideal client.',
  },
  {
    q: 'How important is a matching domain for catering businesses?',
    a: 'Very. Catering clients find you through Google searches, wedding directories, and direct website visits to view menus. A matching .com domain builds trust and makes it easy for planners to find you. If your exact .com is taken, .catering, .events, and .kitchen are growing in popularity in the catering industry.',
  },
  {
    q: 'What comes in the brand kit for each name?',
    a: 'Each brand kit includes: a logo concept (text-based with font pairing), a 5-color palette with hex codes, a custom tagline, typography recommendations, and real-time availability checks for domains and social handles. You can download it all as a PDF brand guidelines document.',
  },
]

export default function CateringNameGeneratorPage() {
  return (
    <>
      <IndustryPageSchema name="Catering Name Generator" path="/catering-name-generator" description="AI-powered catering name generator with complete brand kits including logos, colors, taglines, and domain availability." faqItems={FAQ_ITEMS} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-800 via-orange-700 to-red-800" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-700">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
            </svg>
            AI-Powered Catering Naming
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Catering Name Generator
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-amber-100">
            Generate catering business names with AI. Describe your specialty, get name suggestions with complete brand kits — logo concepts, color palettes, taglines, and domain availability. Free to start.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="btn-primary inline-flex items-center gap-2 text-base px-8 py-3"
            >
              Generate Catering Names
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
              Names for Every Type of Catering
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              From corporate lunches to luxury weddings — names that taste as good as they sound.
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
              Catering Names, Generated in Seconds
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
            These are real examples — your results will be tailored to your specific catering business.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              How to Name Your Catering Business with AI
            </h2>
          </div>
          <div className="space-y-8">
            {[
              { step: '1', title: 'Describe your catering concept', desc: 'Tell us about your catering business — corporate events, weddings, private chef, BBQ, meal prep, or plant-based cuisine. Describe your style (elegant, rustic, modern, casual, luxury) and who your clients are (corporate planners, brides, event venues, families).' },
              { step: '2', title: 'Get tailored name suggestions', desc: 'BrandForge generates 5 unique catering names per search, each with a matching tagline, color palette, and logo concept. Every name feels professional, appetizing, and memorable — no generic "Best Catering" here.' },
              { step: '3', title: 'Check domain & social availability', desc: 'Every name comes with real-time checks for .com, .catering, .events, .kitchen, and more — plus Instagram, Facebook, and social media handle availability. Essential for catering businesses that get found through directories, referrals, and social media.' },
              { step: '4', title: 'Download your brand kit', desc: 'Unlock the full brand kit: logo concept, 5-color palette with hex codes, tagline, typography recommendations, and a downloadable PDF brand guidelines document ready for your menus, signage, website, and event proposals.' },
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
              Tips for Naming Your Catering Business
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              In catering, your name goes on menus, proposals, and every event program. Here&apos;s how to make it unforgettable.
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
      <section className="py-16 bg-gradient-to-br from-amber-800 to-red-800">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to Name Your Catering Business?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Describe your concept. Get names with brand kits. Free to start, $9 per brand kit you love.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-semibold text-amber-900 shadow-lg hover:bg-gray-50 transition-colors"
            >
              Generate Catering Names
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
      <IndustryBlogLinks industry="catering-name-generator" />
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
            <Link href="/food-truck-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              🚚 Food Truck Name Generator
            </Link>
            <Link href="/wedding-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              💍 Wedding Name Generator
            </Link>
            <Link href="/coffee-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              ☕ Coffee Name Generator
            </Link>
            <Link href="/beauty-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              💄 Beauty Name Generator
            </Link>
            <Link href="/florist-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              💐 Florist Name Generator
            </Link>
            <Link href="/craft-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              ✂️ Craft Name Generator
            </Link>
            <Link href="/nonprofit-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              💛 Nonprofit Name Generator
            </Link>
            <Link href="/compare" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              📊 Compare Name Generators
            </Link>
            <Link href="/examples" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-amber-300 hover:text-amber-600 transition-colors">
              ✨ Brand Kit Examples
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}