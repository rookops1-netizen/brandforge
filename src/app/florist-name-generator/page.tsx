import type { Metadata } from 'next'
import Link from 'next/link'
import { IndustryPageSchema } from '@/components/IndustryPageSchema'
import { IndustryBlogLinks } from '@/components/IndustryBlogLinks'

export const metadata: Metadata = {
  title: 'Free Florist Name Generator — AI-Powered Flower Shop & Floristry Business Names',
  description: 'Generate creative florist business names with AI. Get a complete brand kit including logo concepts, color palettes, taglines, and domain availability checks. Free to start — no credit card required.',
  keywords: [
    'florist name generator',
    'flower shop names',
    'florist business names',
    'floral business names',
    'florist name ideas',
    'flower shop name ideas',
    'floral design names',
    'flower business names',
    'how to name a flower shop',
    'florist naming guide',
    'flower boutique names',
    'flower studio names',
  ],
  openGraph: {
    title: 'Free Florist Name Generator — AI-Powered Flower Shop & Floristry Business Names',
    description: 'Generate creative florist business names with AI. Logo, colors, tagline, domain check — all in one. Free to start.',
    url: 'https://brandforge.app/florist-name-generator',
    siteName: 'BrandForge',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Florist Name Generator — AI-Powered Flower Shop & Florist Names',
    description: 'Generate creative florist business names with AI. Logo, colors, tagline, domain check — all in one.',
  },
  alternates: {
    canonical: 'https://brandforge.app/florist-name-generator',
  },
  robots: { index: true, follow: true },
}

const EXAMPLE_NAMES = [
  { name: 'Petal & Stem', tagline: 'Every bloom tells a story', style: 'Modern & Botanical', domain: 'petalandstem.com', color: '#4C1D95' },
  { name: 'Wildflower Studio', tagline: 'Untamed beauty, arranged with intention', style: 'Organic & Freeform', domain: 'wildflowerstudio.com', color: '#065F46' },
  { name: 'Bloom & Bound', tagline: 'Flowers delivered with feeling', style: 'Contemporary & Clean', domain: 'bloomandbound.com', color: '#BE185D' },
  { name: 'Rose & Reverie', tagline: 'Romance in every arrangement', style: 'Elegant & Romantic', domain: 'rosereverie.com', color: '#9F1239' },
  { name: 'Verdant Floral', tagline: 'Nature-inspired, locally grown', style: 'Sustainable & Fresh', domain: 'verdantfloral.com', color: '#15803D' },
  { name: 'Ivy & Oak Florals', tagline: 'Timeless arrangements for lasting moments', style: 'Heritage & Classic', domain: 'ivyoakflorals.com', color: '#78350F' },
]

const CATEGORIES = [
  { name: 'Boutique Flower Shops', desc: 'Elevated, design-forward names for artisan florists' },
  { name: 'Wedding & Event Floristry', desc: 'Romantic, memorable names for special-occasion florists' },
  { name: 'Online Flower Delivery', desc: 'Fresh, modern names for subscription and delivery brands' },
  { name: 'Flower Farms & Locally Grown', desc: 'Rustic, earthy names for farm-to-vase florists' },
  { name: 'Floral Design Studios', desc: 'Creative, artistic names for design-focused florists' },
  { name: 'Plant & Succulent Shops', desc: 'Fresh, modern names for plant shops and greenery brands' },
  { name: 'Sympathy & Funeral Flowers', desc: 'Dignified, comforting names for compassionate floristry' },
  { name: 'Pop-Up & Market Florists', desc: 'Catchy, approachable names for mobile and market florists' },
]

const NAMING_TIPS = [
  {
    title: 'Say it over the phone',
    description: 'Most flower orders come by phone. Your name needs to be instantly understood without spelling it out. "Petal & Stem" is clear on the first try. "Phlox & Phlorals" will have you spelling it every time. The phone test is the most important test for florists.',
  },
  {
    title: 'Think in bouquets, not just words',
    description: 'The best florist names evoke something visual — petals, blooms, wildflowers, gardens, seasons. Words like "Bloom," "Petal," "Stem," "Vine," and "Grove" immediately signal your industry while adding character. Your name should make people picture flowers before they even see your work.',
  },
  {
    title: 'Consider your specialty',
    description: 'If you specialize in weddings, romantic names like "Rose & Reverie" signal your focus. If you\'re farm-to-vase, "Wildflower Studio" tells that story. A generic name like "City Flowers" says nothing about what makes you special. Let your name reflect your craft.',
  },
  {
    title: 'Check local competition fast',
    description: 'Floristry is hyper-local — there are 32,000+ flower shops in the US alone. Search your city name + "florist" on Google Maps before committing. Your name needs to stand out from the "ABC Flowers" and "Main Street Florals" clutter. Distinctive names win in local search.',
  },
  {
    title: 'Make it Instagram-worthy',
    description: 'Floristry is one of the most visual industries on Instagram and Pinterest. Your name will appear on photos of your arrangements — it should look good as a watermark, hashtag, and handle. Short, memorable names like "Bloom & Bound" are instantly shareable.',
  },
  {
    title: 'Test the "just sent you flowers" rule',
    description: 'When someone texts "I just sent you flowers from ___," does your name sound natural? Does the recipient instantly know it\'s a florist? Names like "Verdant Floral" or "Ivy & Oak Florals" pass this test. Abstract names without floral references can create confusion at the delivery door.',
  },
]

const FAQ_ITEMS = [
  {
    q: 'How does the florist name generator work?',
    a: 'Describe your flower business — your specialty (weddings, everyday bouquets, event design, subscriptions, farm-to-vase), your style (romantic, modern, wild, minimalist, luxury), and your target customer. BrandForge\'s AI generates custom name suggestions paired with complete brand kits including logo concepts, color palettes, taglines, and domain/social availability checks.',
  },
  {
    q: 'Is the florist name generator free?',
    a: 'Yes! You can generate florist name ideas for free — 5 suggestions per search, unlimited searches, no credit card required. Unlock the full brand kit (logo, colors, tagline, typography, domain & social checks) for $9 per brand kit.',
  },
  {
    q: 'What makes a good flower shop name?',
    a: 'A great florist name evokes beauty and nature while being easy to say and spell. Words like "Bloom," "Petal," "Stem," "Vine," and "Grove" immediately signal flowers. The best names feel like something you\'d see on a handwritten card with a bouquet — personal, memorable, and a little romantic.',
  },
  {
    q: 'Should I include "florist" or "flowers" in my business name?',
    a: 'It depends on your market. Including "florist" or "flowers" helps with local discoverability — people search "florist near me" constantly. But many high-end floral designers drop it: "Petal & Stem," "Bloom & Bound," "Verdant." If your name clearly signals flowers through other words, you can skip it and still be found.',
  },
  {
    q: 'Can I use these names for my flower shop or floristry business?',
    a: 'Absolutely. All names you generate are yours to use commercially — for business registration, signage, packaging, domain purchases, social media, wedding portfolios, and delivery branding. There are no licensing restrictions.',
  },
  {
    q: 'What if I want names for a specific type of floristry?',
    a: 'Just describe your focus in the prompt. Whether it\'s luxury wedding floristry, everyday delivery bouquets, corporate flower subscriptions, dried flower arrangements, succulent gardens, or event florals — BrandForge tailors suggestions to your exact specialty, style, and ideal customer.',
  },
  {
    q: 'How important is a matching domain for flower businesses?',
    a: 'Very. Floristry customers discover you through Google Maps, Instagram, and direct website visits. A matching .com domain builds trust and makes it easy for customers to find you online. If your exact .com is taken, .florist, .flowers, and .shop are increasingly popular alternatives in the floral industry.',
  },
  {
    q: 'What comes in the brand kit for each name?',
    a: 'Each brand kit includes: a logo concept (text-based with font pairing), a 5-color palette with hex codes, a custom tagline, typography recommendations, and real-time availability checks for domains and social handles. You can download it all as a PDF brand guidelines document.',
  },
]

export default function FloristNameGeneratorPage() {
  return (
    <>
      <IndustryPageSchema name="Florist Name Generator" path="/florist-name-generator" description="AI-powered florist name generator with complete brand kits including logos, colors, taglines, and domain availability." faqItems={FAQ_ITEMS} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900 via-rose-700 to-fuchsia-800" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-1.5 text-sm font-medium text-pink-700">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
            </svg>
            AI-Powered Florist Naming
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Florist Name Generator
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-pink-100">
            Generate flower shop names with AI. Describe your specialty, get name suggestions with complete brand kits — logo concepts, color palettes, taglines, and domain availability. Free to start.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="btn-primary inline-flex items-center gap-2 text-base px-8 py-3"
            >
              Generate Florist Names
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
          <p className="mt-4 text-sm text-pink-200">Free • No credit card required • Results in seconds</p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Names for Every Type of Floristry
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              From boutique flower shops to wedding florists and subscription brands — names that bloom with personality.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((cat) => (
              <div key={cat.name} className="rounded-xl border border-slate-200 p-5 hover:border-pink-300 hover:shadow-sm transition-all">
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
              Florist Names, Generated in Seconds
            </h2>
            <p className="mt-3 text-slate-500">
              Each name comes with a complete brand kit — not just a name on its own.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {EXAMPLE_NAMES.map((item) => (
              <div key={item.name} className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-pink-200">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl text-white font-bold text-lg"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.name[0]}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{item.name}</h3>
                    <p className="text-sm text-slate-400">{item.style}</p>
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
          <p className="mt-8 text-center text-sm text-slate-400">
            These are real examples — your results will be tailored to your specific floristry business.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              How to Name Your Florist Business with AI
            </h2>
          </div>
          <div className="space-y-8">
            {[
              { step: '1', title: 'Describe your floristry concept', desc: 'Tell us about your flower business — boutique flower shop, wedding floristry, event florals, online delivery, subscription boxes, flower farm, or plant shop. Describe your style (romantic, modern, wild, minimalist, luxury) and who your customers are (brides, corporate clients, gift buyers, plant lovers).' },
              { step: '2', title: 'Get tailored name suggestions', desc: 'BrandForge generates 5 unique florist names per search, each with a matching tagline, color palette, and logo concept. Every name feels natural, evocative, and memorable — no generic "Flower Shop" here.' },
              { step: '3', title: 'Check domain & social availability', desc: 'Every name comes with real-time checks for .com, .florist, .flowers, .shop, and more — plus Instagram, Pinterest, and social media handle availability. Essential for flower businesses that live on visual platforms and Google Maps.' },
              { step: '4', title: 'Download your brand kit', desc: 'Unlock the full brand kit: logo concept, 5-color palette with hex codes, tagline, typography recommendations, and a downloadable PDF brand guidelines document ready for your signage, packaging, website, and wedding portfolios.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-pink-700 text-white font-bold text-lg">
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
              Tips for Naming Your Florist Business
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              In floristry, your name is on every bouquet wrap, delivery van, and Instagram grid. Here&apos;s how to make it unforgettable.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {NAMING_TIPS.map((tip) => (
              <div key={tip.title} className="rounded-xl border border-slate-200 bg-white p-6 hover:border-pink-200 transition-colors">
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
                <summary className="flex cursor-pointer items-center justify-between p-5 text-base font-medium text-slate-900 hover:text-pink-600">
                  {item.q}
                  <svg className="h-5 w-5 flex-shrink-0 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
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
      <section className="py-16 bg-gradient-to-br from-pink-900 to-fuchsia-800">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to Name Your Florist Business?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Describe your concept. Get names with brand kits. Free to start, $9 per brand kit you love.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-semibold text-pink-900 shadow-lg hover:bg-gray-50 transition-colors"
            >
              Generate Florist Names
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
      <IndustryBlogLinks industry="florist-name-generator" />
      {/* Internal Links */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold text-slate-900 mb-6">More Name Generators</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/startup-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-pink-300 hover:text-pink-600 transition-colors">
              🚀 Startup Name Generator
            </Link>
            <Link href="/restaurant-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-pink-300 hover:text-pink-600 transition-colors">
              🍽️ Restaurant Name Generator
            </Link>
            <Link href="/wedding-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-pink-300 hover:text-pink-600 transition-colors">
              💍 Wedding Name Generator
            </Link>
            <Link href="/beauty-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-pink-300 hover:text-pink-600 transition-colors">
              💄 Beauty Name Generator
            </Link>
            <Link href="/coffee-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-pink-300 hover:text-pink-600 transition-colors">
              ☕ Coffee Name Generator
            </Link>
            <Link href="/craft-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-pink-300 hover:text-pink-600 transition-colors">
              ✂️ Craft Name Generator
            </Link>
            <Link href="/fashion-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-pink-300 hover:text-pink-600 transition-colors">
              👗 Fashion Name Generator
            </Link>
            <Link href="/photography-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-pink-300 hover:text-pink-600 transition-colors">
              📸 Photography Name Generator
            </Link>
            <Link href="/event-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-pink-300 hover:text-pink-600 transition-colors">
              🎉 Event Name Generator
            </Link>
            <Link href="/compare" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-pink-300 hover:text-pink-600 transition-colors">
              📊 Compare Name Generators
            </Link>
            <Link href="/examples" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-pink-300 hover:text-pink-600 transition-colors">
              ✨ Brand Kit Examples
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}