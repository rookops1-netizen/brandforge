import type { Metadata } from 'next'
import Link from 'next/link'
import { IndustryBlogLinks } from '@/components/IndustryBlogLinks'

export const metadata: Metadata = {
  title: 'Free Salon Name Generator — AI-Powered Hair, Beauty & Barber Salon Names',
  description: 'Generate salon names with AI. Get a complete brand kit including logo concepts, color palettes, taglines, and domain availability checks. Free to start — no credit card required.',
  keywords: [
    'salon name generator',
    'hair salon name ideas',
    'beauty salon names',
    'barber shop name ideas',
    'salon name ideas',
    'hair salon names',
    'barbershop name generator',
    'nail salon name ideas',
    'spa name generator',
    'hair stylist business names',
    'cosmetology name ideas',
    'salon branding ideas',
  ],
  openGraph: {
    title: 'Free Salon Name Generator — AI-Powered Hair & Beauty Salon Names',
    description: 'Generate salon names with AI. Logo, colors, tagline, domain check — all in one. Free to start.',
    url: 'https://brandforge-phi-pearl.vercel.app/salon-name-generator',
    siteName: 'BrandForge',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Salon Name Generator — AI-Powered Salon & Barber Names',
    description: 'Generate salon names with AI. Logo, colors, tagline, domain check — all in one.',
  },
  alternates: {
    canonical: 'https://brandforge-phi-pearl.vercel.app/salon-name-generator',
  },
  robots: { index: true, follow: true },
}

const EXAMPLE_NAMES = [
  { name: 'Maison Lumière', tagline: 'Where beauty finds its light', style: 'Luxury & French-Inspired', domain: 'maisonlumiere.com', color: '#831843' },
  { name: 'Copper & Crown', tagline: 'Crafted for the bold', style: 'Modern & Masculine', domain: 'copperandcrown.com', color: '#92400E' },
  { name: 'Verdant Studio', tagline: 'Fresh cuts, natural style', style: 'Organic & Minimal', domain: 'verdantstudio.com', color: '#166534' },
  { name: 'Ember & Shears', tagline: 'Where heat meets precision', style: 'Warm & Artisan', domain: 'emberandshears.com', color: '#B45309' },
  { name: 'The Gilded Chair', tagline: 'Sit down, look extraordinary', style: 'Elegant & Classic', domain: 'thegildedchair.com', color: '#4C1D95' },
  { name: 'Honey & Blade', tagline: 'Sweet style, sharp edges', domain: 'honeyandblade.com', style: 'Trendy & Approachable', color: '#B76E1A' },
]

const CATEGORIES = [
  { name: 'Hair Salon', desc: 'Stylish, memorable names for full-service hair salons' },
  { name: 'Barbershop', desc: 'Bold, classic names for traditional and modern barber shops' },
  { name: 'Nail Studio', desc: 'Creative, chic names for nail art and manicure studios' },
  { name: 'Day Spa & Wellness', desc: 'Calming, luxurious names for spa and wellness centers' },
  { name: 'Blow Dry Bar', desc: 'Fun, trendy names for blowout and styling bars' },
  { name: 'Color & Highlights Studio', desc: 'Vibrant, artistic names for color-focused salons' },
  { name: 'Men\'s Grooming Lounge', desc: 'Refined, masculine names for men\'s grooming and barber' },
  { name: 'Cosmetology & Aesthetics', desc: 'Professional, clinical names for licensed cosmetology practices' },
]

const NAMING_TIPS = [
  {
    title: 'Make it easy to recommend',
    description: 'Salons live on word-of-mouth. If someone can\'t spell your name after hearing it once, they can\'t Google it or text it to a friend. "Copper & Crown" sticks. "Kwr & Syr" doesn\'t. The "text your friend" test is the single most important naming test for salons.',
  },
  {
    title: 'Signal your style tier',
    description: 'A luxury salon needs a name that feels premium — think "Maison Lumière" or "The Gilded Chair." A walk-in family salon needs warmth and accessibility — "Honey & Blade" or "Verdant Studio." Decide your positioning first, then name to match. A mismatch between name and experience confuses clients.',
  },
  {
    title: 'Own your neighborhood on Google',
    description: 'Most salon clients search "hair salon near me" or "barber shop near me." Your name needs to be readable on Google Maps, Yelp, and Instagram. Avoid names that are hard to spell, too similar to competitors, or easily confused with other businesses in your area.',
  },
  {
    title: 'Think beyond hair',
    description: 'If you plan to add nails, skin, lashes, or retail later, avoid names that lock you into just hair. "Ember & Shears" sounds like a barbershop. "Ember Studio" could house hair, nails, and skincare under one brand. Think five years ahead.',
  },
  {
    title: 'Check social handles first',
    description: 'Salons live on Instagram and TikTok — your name IS your visual brand. Before you commit, check that the handle is available on Instagram, TikTok, and Facebook. A matching handle builds trust and makes you findable. BrandForge checks social availability in real-time.',
  },
  {
    title: 'Avoid generic salon words alone',
    description: '"Studio," "Salon," and "Beauty" are overused as standalone words. Pair them with something distinctive: "Verdant Studio," "Copper & Crown," "Honey & Blade." The modifier is what makes you findable and memorable in a sea of "Salon" signs.',
  },
]

const FAQ_ITEMS = [
  {
    q: 'How does the salon name generator work?',
    a: 'Describe your salon — your type (hair salon, barbershop, nail studio, spa, blow dry bar, color studio), your style tier (luxury, mid-range, budget-friendly), and your ideal client (men, women, families, professionals, trendsetters). BrandForge\'s AI generates custom name suggestions paired with complete brand kits including logo concepts, color palettes, taglines, and domain/social availability checks.',
  },
  {
    q: 'Is the salon name generator free?',
    a: 'Yes! You can generate salon name ideas for free — 5 suggestions per search, unlimited searches, no credit card required. Unlock the full brand kit (logo, colors, tagline, typography, domain & social checks) for $9 per brand kit.',
  },
  {
    q: 'What makes a good salon name?',
    a: 'A great salon name is easy to remember, easy to spell, and easy to recommend. It should signal your style — luxury, modern, vintage, organic, masculine — so clients know what to expect before they walk in. The best salon names feel like a brand, not just a description: "Copper & Crown" vs. "Bob\'s Haircuts."',
  },
  {
    q: 'Should I include "salon" or "barber" in my business name?',
    a: 'For local SEO on Google Maps, including "salon," "barber," or "barbershop" helps customers find you quickly. But if you want a brand that can expand beyond one service, consider a name that works without it: "Verdant Studio" instead of "Verdant Hair Salon." You can always add "Salon" as a descriptor in your logo, signage, or Google Business Profile without making it part of your legal name.',
  },
  {
    q: 'Can I use these names for my salon business?',
    a: 'Absolutely. All names you generate are yours to use commercially — for business registration, LLC filing, signage, social media handles, website domain, and marketing materials. There are no licensing restrictions or ongoing fees.',
  },
  {
    q: 'What if I want names for a specific salon niche?',
    a: 'Just describe your niche in the prompt. Whether it\'s a luxury blow dry bar, a classic Italian barbershop, a nail art studio, a medi-spa, a bridal hair specialist, or a kids\' salon — BrandForge tailors suggestions to your exact style, positioning, and ideal client.',
  },
  {
    q: 'How important is a matching domain for salons?',
    a: 'Very important. Clients find salons through Google, Instagram, and Yelp — and a matching domain builds instant credibility. If the .com is taken, consider .salon, .studio, or .beauty TLDs. BrandForge checks domain availability in real-time so you can secure your digital identity before launching.',
  },
  {
    q: 'What comes in the brand kit for each name?',
    a: 'Each brand kit includes: a logo concept (text-based with font pairing), a 5-color palette with hex codes, a custom tagline, typography recommendations, and real-time availability checks for domains and social handles. You can download it all as a PDF brand guidelines document.',
  },
]

export default function SalonNameGeneratorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'BrandForge Salon Name Generator',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description: 'AI-powered salon name generator with complete brand kits including logos, colors, taglines, and domain/social availability.',
        offers: [
          { '@type': 'Offer', price: '0', priceCurrency: 'USD', description: 'Free tier — 5 name suggestions per search' },
          { '@type': 'Offer', price: '9', priceCurrency: 'USD', description: 'Brand Kit Pro — complete brand identity per name' },
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          ratingCount: '12400',
          bestRating: '5',
          worstRating: '1',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQ_ITEMS.map(item => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brandforge-phi-pearl.vercel.app' },
          { '@type': 'ListItem', position: 2, name: 'Salon Name Generator', item: 'https://brandforge-phi-pearl.vercel.app/salon-name-generator' },
        ],
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-800 via-pink-600 to-purple-700" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-1.5 text-sm font-medium text-pink-700">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
            </svg>
            AI-Powered Salon Naming
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Salon Name Generator
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-pink-100">
            Generate salon names with AI. Describe your style, get name suggestions with complete brand kits — logo concepts, color palettes, taglines, and domain availability. Free to start.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="btn-primary inline-flex items-center gap-2 text-base px-8 py-3"
            >
              Generate Salon Names
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
              Names for Every Salon Type
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              From luxury hair salons to classic barbershops, chic nail studios to wellness spas — we generate names that attract your ideal clients.
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
              Salon Names, Generated in Seconds
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
            These are real examples — your results will be tailored to your specific salon type and style.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              How to Name Your Salon with AI
            </h2>
          </div>
          <div className="space-y-8">
            {[
              { step: '1', title: 'Describe your salon', desc: 'Tell us your salon type — hair salon, barbershop, nail studio, day spa, blow dry bar, color studio, men\'s grooming lounge, or cosmetology practice. Describe your style tier (luxury, mid-range, budget) and who your ideal client is.' },
              { step: '2', title: 'Get tailored name suggestions', desc: 'BrandForge generates 5 unique salon names per search, each with a matching tagline, color palette, and logo concept. Every name is designed to attract your ideal clients and feel like a real brand — not a generic "Salon" sign.' },
              { step: '3', title: 'Check domain & social availability', desc: 'Every name comes with real-time checks for .com, .salon, .studio, .beauty, and more — plus Instagram, TikTok, and social media handle availability. Essential for salons that live on visual platforms.' },
              { step: '4', title: 'Download your brand kit', desc: 'Unlock the full brand kit: logo concept, 5-color palette with hex codes, tagline, typography recommendations, and a downloadable PDF brand guidelines document ready for your signage, business cards, Instagram, and website.' },
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
              Tips for Naming Your Salon
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              Your salon name is on your signage, your Instagram, your business cards, and every word-of-mouth referral. Here&apos;s how to make it count.
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
      <section className="py-16 bg-gradient-to-br from-rose-800 to-purple-700">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to Name Your Salon?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Describe your style. Get names with brand kits. Free to start, $9 per brand kit you love.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-semibold text-rose-800 shadow-lg hover:bg-gray-50 transition-colors"
            >
              Generate Salon Names
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
      <IndustryBlogLinks industry="salon-name-generator" />
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
            <Link href="/fitness-brand-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-pink-300 hover:text-pink-600 transition-colors">
              💪 Fitness Brand Name Generator
            </Link>
            <Link href="/real-estate-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-pink-300 hover:text-pink-600 transition-colors">
              🏠 Real Estate Name Generator
            </Link>
            <Link href="/photography-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-pink-300 hover:text-pink-600 transition-colors">
              📸 Photography Name Generator
            </Link>
            <Link href="/beauty-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-pink-300 hover:text-pink-600 transition-colors">
              💄 Beauty Name Generator
            </Link>
            <Link href="/fashion-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-pink-300 hover:text-pink-600 transition-colors">
              👗 Fashion Name Generator
            </Link>
            <Link href="/food-truck-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-pink-300 hover:text-pink-600 transition-colors">
              🚚 Food Truck Name Generator
            </Link>
            <Link href="/tech-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-pink-300 hover:text-pink-600 transition-colors">
              💻 Tech Name Generator
            </Link>
            <Link href="/consulting-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-pink-300 hover:text-pink-600 transition-colors">
              📊 Consulting Name Generator
            </Link>
            <Link href="/podcast-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-pink-300 hover:text-pink-600 transition-colors">
              🎙️ Podcast Name Generator
            </Link>
            <Link href="/coaching-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-pink-300 hover:text-pink-600 transition-colors">
              💡 Coaching Name Generator
            </Link>
            <Link href="/nonprofit-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-pink-300 hover:text-pink-600 transition-colors">
              🌍 Nonprofit Name Generator
            </Link>
            <Link href="/craft-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-pink-300 hover:text-pink-600 transition-colors">
              ✂️ Craft Name Generator
            </Link>
            <Link href="/education-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-pink-300 hover:text-pink-600 transition-colors">
              📚 Education Name Generator
            </Link>
            <Link href="/yoga-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-pink-300 hover:text-pink-600 transition-colors">
              🧘 Yoga Name Generator
            </Link>
            <Link href="/coffee-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-pink-300 hover:text-pink-600 transition-colors">
              ☕ Coffee Name Generator
            </Link>
            <Link href="/music-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-pink-300 hover:text-pink-600 transition-colors">
              🎵 Music Name Generator
            </Link>
            <Link href="/wedding-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-pink-300 hover:text-pink-600 transition-colors">
              💍 Wedding Name Generator
            </Link>
            <Link href="/cleaning-business-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-pink-300 hover:text-pink-600 transition-colors">
              🧹 Cleaning Name Generator
            </Link>
            <Link href="/pet-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-pink-300 hover:text-pink-600 transition-colors">
              🐾 Pet Name Generator
            </Link>
            <Link href="/landscaping-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-pink-300 hover:text-pink-600 transition-colors">
              🌿 Landscaping Name Generator
            </Link>
            <Link href="/construction-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-pink-300 hover:text-pink-600 transition-colors">
              Construction Name Generator
            </Link>
            <Link href="/marketing-agency-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-pink-300 hover:text-pink-600 transition-colors">
              📈 Marketing Agency Name Generator
            </Link>
            <Link href="/compare" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-pink-300 hover:text-pink-600 transition-colors">
              📊 Compare Name Generators
            </Link>
            <Link href="/examples" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-pink-300 hover:text-pink-600 transition-colors">
              ✨ Brand Kit Examples
            </Link>          </div>
        </div>
      </section>
    </>
  )
}