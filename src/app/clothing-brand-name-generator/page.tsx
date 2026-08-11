import type { Metadata } from 'next'
import Link from 'next/link'
import { IndustryPageSchema } from '@/components/IndustryPageSchema'
import { IndustryBlogLinks } from '@/components/IndustryBlogLinks'

export const metadata: Metadata = {
  title: 'Free Clothing Brand Name Generator — AI-Powered Fashion & Apparel Brand Names',
  description: 'Generate creative clothing brand names with AI. Get a complete brand kit including logo concepts, color palettes, taglines, and domain availability checks. Free to start — no credit card required.',
  keywords: [
    'clothing brand name generator',
    'clothing brand names',
    'apparel brand names',
    'fashion brand name ideas',
    'clothing line name generator',
    'streetwear brand names',
    'clothing brand name ideas',
    'how to name a clothing brand',
    'clothing brand naming guide',
    'fashion label names',
    'clothing line names',
    'garment brand names',
    'clothing startup names',
    'best clothing brand names',
    'unique clothing brand names',
    'catchy clothing brand names',
    'clothing brand name ideas 2026',
  ],
  openGraph: {
    title: 'Free Clothing Brand Name Generator — AI-Powered Fashion & Apparel Brand Names',
    description: 'Generate creative clothing brand names with AI. Logo, colors, tagline, domain check — all in one. Free to start.',
    url: 'https://brandforge.app/clothing-brand-name-generator',
    siteName: 'BrandForge',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Clothing Brand Name Generator — AI-Powered Clothing Brand Names',
    description: 'Generate creative clothing brand names with AI. Logo, colors, tagline, domain check — all in one.',
  },
  alternates: {
    canonical: 'https://brandforge.app/clothing-brand-name-generator',
  },
  robots: { index: true, follow: true },
}

const EXAMPLE_NAMES = [
  { name: 'Threadbound', tagline: 'Stitched for the bold', style: 'Modern & Minimalist', domain: 'threadbound.com', color: '#1E293B' },
  { name: 'Velvet Forge', tagline: 'Where texture meets intention', style: 'Heritage & Crafted', domain: 'velvetforge.com', color: '#7C2D12' },
  { name: 'Urban Drift', tagline: 'Move through the city differently', style: 'Streetwear & Contemporary', domain: 'urbandrift.com', color: '#0F766E' },
  { name: 'Loom & Light', tagline: 'Woven with purpose', style: 'Organic & Sustainable', domain: 'loomandlight.com', color: '#15803D' },
  { name: 'Crimson Stitch', tagline: 'Bold cuts, bolder statements', style: 'Edgy & Statement', domain: 'crimsonstitch.com', color: '#991B1B' },
  { name: 'Halcyon Wear', tagline: 'Effortless, always', style: 'Athleisure & Casual', domain: 'halcyonwear.com', color: '#1E40AF' },
]

const CATEGORIES = [
  { name: 'Streetwear & Urban Brands', desc: 'Bold, culture-driven names for streetwear labels' },
  { name: 'Sustainable & Eco Fashion', desc: 'Conscious, earthy names for sustainable clothing brands' },
  { name: 'Luxury & High-End Fashion', desc: 'Elegant, aspirational names for premium labels' },
  { name: 'Athleisure & Activewear', desc: 'Dynamic, performance-driven names for athletic brands' },
  { name: 'Minimalist & Contemporary', desc: 'Clean, understated names for modern essentials brands' },
  { name: 'Vintage & Heritage', desc: 'Timeless, crafted names for heritage-inspired labels' },
  { name: 'Children\'s & Kids Fashion', desc: 'Playful, memorable names for children\'s clothing brands' },
  { name: 'Resort & Vacation Wear', desc: 'Relaxed, destination-inspired names for seasonal brands' },
]

const NAMING_TIPS = [
  {
    title: 'Think about the tag, not just the label',
    description: 'In fashion, your name appears on clothing tags, labels, and hangtags — tiny spaces where long names die. "Threadbound" fits on a tag beautifully. "Urban Thread Collective" gets cut off. Your name needs to work at 12-point size on a label, not just on a billboard.',
  },
  {
    title: 'Test it on Instagram before committing',
    description: 'Fashion brands live on Instagram. Search your name idea right now — if the handle is taken, if there are 50 unrelated posts under the hashtag, or if it\'s hard to spell in a search bar, you\'ll fight an uphill battle for discovery. The Instagram test is the single most important check for clothing brands.',
  },
  {
    title: 'Decide: descriptive or invented?',
    description: 'Descriptive names like "Everlane" or "Outerknown" tell you something about the product. Invented names like "Zara" or "Nike" are blank canvases. Descriptive names are easier to understand but harder to own as trademarks. Invented names are harder to remember but easier to protect. Most breakout brands land somewhere in between — "Lululemon" is neither descriptive nor purely invented.',
  },
  {
    title: 'Say it in a dressing room',
    description: 'Would you say "I got this from [brand name]" out loud to a friend? Some names feel great on paper but awkward in conversation. The best clothing brand names are names you\'re proud to recommend — "You have to check out Threadbound, their stuff is amazing." If it doesn\'t feel natural to say, it won\'t spread by word of mouth.',
  },
  {
    title: 'Check trademark early — fashion is crowded',
    description: 'The USPTO has over 400,000 active clothing trademarks. Your name needs to be unique enough to register and defend. Before falling in love with a name, search the USPTO TESS database for existing registrations in Class 25 (Clothing). BrandForge\'s domain check is a starting point, but trademark clearance is essential for clothing brands.',
  },
  {
    title: 'Your name should suggest your price point',
    description: '"Velvet Forge" sounds premium — it suggests craftsmanship and materials. "Urban Drift" sounds approachable — it suggests movement and everyday wear. Your name sets price expectations before customers ever see a price tag. Make sure the name matches where you want to sit in the market.',
  },
]

const FAQ_ITEMS = [
  {
    q: 'How does the clothing brand name generator work?',
    a: 'Describe your clothing brand — your niche (streetwear, sustainable, luxury, athleisure, etc.), your style (minimalist, bold, vintage, contemporary), and your target customer. BrandForge\'s AI generates custom name suggestions paired with complete brand kits including logo concepts, color palettes, taglines, and domain/social availability checks.',
  },
  {
    q: 'Is the clothing brand name generator free?',
    a: 'Yes! You can generate clothing brand name ideas for free — 5 suggestions per search, unlimited searches, no credit card required. Unlock the full brand kit (logo, colors, tagline, typography, domain & social checks) for $9 per brand kit.',
  },
  {
    q: 'What makes a good clothing brand name?',
    a: 'A great clothing brand name is short (1-2 words), easy to spell and pronounce, works on labels and tags, looks good as a logo, and is available as a .com domain and Instagram handle. The best names — like Zara, Nike, or Everlane — are distinctive enough to trademark yet simple enough to remember.',
  },
  {
    q: 'Should I include "clothing" or "apparel" in my brand name?',
    a: 'Most successful clothing brands don\'t include generic words like "clothing" or "apparel" — think Zara, H&M, Supreme, or Everlane. These words add bulk without adding meaning. If your name doesn\'t immediately signal fashion, consider adding a descriptor in your tagline rather than the brand name itself.',
  },
  {
    q: 'Can I use these names for my clothing line?',
    a: 'Absolutely. All names you generate are yours to use commercially — for business registration, labels, tags, website, social media, and marketing materials. There are no licensing restrictions. Just make sure to check trademark availability for your final choice.',
  },
  {
    q: 'What if I want names for a specific type of clothing brand?',
    a: 'Just describe your focus in the prompt. Whether it\'s streetwear, sustainable fashion, luxury womenswear, menswear, athleisure, resort wear, kids\' clothing, vintage-inspired, or made-to-measure — BrandForge tailors suggestions to your exact niche, style, and ideal customer.',
  },
  {
    q: 'How important is a matching domain for clothing brands?',
    a: 'Critical. Fashion brands sell online first — your .com is your storefront. A matching domain builds trust, makes your brand findable, and prevents competitors or squatters from taking it. If your exact .com is taken, .co, .store, and .shop are popular alternatives in the fashion space.',
  },
  {
    q: 'What comes in the brand kit for each name?',
    a: 'Each brand kit includes: a logo concept (text-based with font pairing), a 5-color palette with hex codes, a custom tagline, typography recommendations, and real-time availability checks for domains and social handles. You can download it all as a PDF brand guidelines document.',
  },
]

export default function ClothingBrandNameGeneratorPage() {
  return (
    <>
      <IndustryPageSchema name="Clothing Brand Name Generator" path="/clothing-brand-name-generator" description="AI-powered clothing brand name generator with complete brand kits including logos, colors, taglines, and domain availability." faqItems={FAQ_ITEMS} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-700">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
            </svg>
            AI-Powered Clothing Brand Naming
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Clothing Brand Name Generator
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            Generate clothing brand names with AI. Describe your style, get name suggestions with complete brand kits — logo concepts, color palettes, taglines, and domain availability. Free to start.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="btn-primary inline-flex items-center gap-2 text-base px-8 py-3"
            >
              Generate Clothing Names
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
          <p className="mt-4 text-sm text-slate-400">Free • No credit card required • Results in seconds</p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Names for Every Type of Clothing Brand
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              From streetwear to sustainable fashion — names that define your style and stand out in a crowded market.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((cat) => (
              <div key={cat.name} className="rounded-xl border border-slate-200 p-5 hover:border-indigo-300 hover:shadow-sm transition-all">
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
              Clothing Brand Names, Generated in Seconds
            </h2>
            <p className="mt-3 text-slate-500">
              Each name comes with a complete brand kit — not just a name on its own.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {EXAMPLE_NAMES.map((item) => (
              <div key={item.name} className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-indigo-200">
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
            These are real examples — your results will be tailored to your specific clothing brand.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              How to Name Your Clothing Brand with AI
            </h2>
          </div>
          <div className="space-y-8">
            {[
              { step: '1', title: 'Describe your clothing brand concept', desc: 'Tell us about your brand — streetwear, sustainable fashion, luxury womenswear, athleisure, vintage-inspired, made-to-measure, kids\' clothing, or resort wear. Describe your style (minimalist, bold, heritage, contemporary) and who your customer is.' },
              { step: '2', title: 'Get tailored name suggestions', desc: 'BrandForge generates 5 unique clothing brand names per search, each with a matching tagline, color palette, and logo concept. Every name is distinctive, memorable, and built to look good on a label.' },
              { step: '3', title: 'Check domain & social availability', desc: 'Every name comes with real-time checks for .com, .co, .store, and .shop domain availability — plus Instagram, TikTok, and social media handle availability. Essential for fashion brands that live on visual platforms.' },
              { step: '4', title: 'Download your brand kit', desc: 'Unlock the full brand kit: logo concept, 5-color palette with hex codes, tagline, typography recommendations, and a downloadable PDF brand guidelines document ready for your labels, tags, website, and lookbooks.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-700 text-white font-bold text-lg">
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
              Tips for Naming Your Clothing Brand
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              Fashion branding is different from other industries. Your name has to work on a label, on Instagram, and in a dressing room conversation.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {NAMING_TIPS.map((tip) => (
              <div key={tip.title} className="rounded-xl border border-slate-200 bg-white p-6 hover:border-indigo-200 transition-colors">
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
                <summary className="flex cursor-pointer items-center justify-between p-5 text-base font-medium text-slate-900 hover:text-indigo-600">
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
      <section className="py-16 bg-gradient-to-br from-slate-900 to-indigo-900">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to Name Your Clothing Brand?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Describe your style. Get names with brand kits. Free to start, $9 per brand kit you love.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-semibold text-slate-900 shadow-lg hover:bg-gray-50 transition-colors"
            >
              Generate Clothing Names
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
      <IndustryBlogLinks industry="clothing-brand-name-generator" />

      {/* Internal Links */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold text-slate-900 mb-6">More Name Generators</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/startup-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors">
              🚀 Startup Name Generator
            </Link>
            <Link href="/fashion-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors">
              👗 Fashion Name Generator
            </Link>
            <Link href="/beauty-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors">
              💄 Beauty Name Generator
            </Link>
            <Link href="/photography-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors">
              📸 Photography Name Generator
            </Link>
            <Link href="/fitness-brand-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors">
              💪 Fitness Name Generator
            </Link>
            <Link href="/salon-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors">
              💇 Salon Name Generator
            </Link>
            <Link href="/craft-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors">
              ✂️ Craft Name Generator
            </Link>
            <Link href="/compare" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors">
              📊 Compare Name Generators
            </Link>
            <Link href="/examples" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors">
              ✨ Brand Kit Examples
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}