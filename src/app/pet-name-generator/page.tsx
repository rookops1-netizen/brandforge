import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free Pet Business Name Generator — AI-Powered Pet Store, Grooming & Vet Business Names',
  description: 'Generate pet business names with AI. Get a complete brand kit including logo concepts, color palettes, taglines, and domain availability checks. Free to start — no credit card required.',
  keywords: [
    'pet name generator',
    'pet business names',
    'pet store names',
    'pet grooming business names',
    'dog grooming name ideas',
    'veterinary clinic names',
    'pet sitting business names',
    'pet brand names',
    'pet company names',
    'how to name a pet business',
    'animal business names',
    'pet daycare names',
  ],
  openGraph: {
    title: 'Free Pet Business Name Generator — AI-Powered Pet Store & Grooming Names',
    description: 'Generate pet business names with AI. Logo, colors, tagline, domain check — all in one. Free to start.',
    url: 'https://brandforge-phi-pearl.vercel.app/pet-name-generator',
    siteName: 'BrandForge',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Pet Business Name Generator — AI-Powered Pet & Animal Business Names',
    description: 'Generate pet business names with AI. Logo, colors, tagline, domain check — all in one.',
  },
  alternates: {
    canonical: 'https://brandforge-phi-pearl.vercel.app/pet-name-generator',
  },
}

const EXAMPLE_NAMES = [
  { name: 'Paw & Compass', tagline: 'Guiding tails home', style: 'Warm & Trustworthy', domain: 'pawandcompass.com', color: '#92400E' },
  { name: 'Velvet Paws Studio', tagline: 'Where every coat shines', style: 'Elegant & Premium', domain: 'velvetpawsstudio.com', color: '#7C3AED' },
  { name: 'Wildtail Co.', tagline: 'Born to roam, groomed to shine', style: 'Adventure & Bold', domain: 'wildtailco.com', color: '#B45309' },
  { name: 'Fern & Fetch', tagline: 'Nature-raised, people-trusted', domain: 'fernandfetch.com', style: 'Organic & Fresh', color: '#16A34A' },
  { name: 'Snout & Co.', tagline: 'All nose, all heart', style: 'Playful & Friendly', domain: 'snoutandco.com', color: '#DC2626' },
  { name: 'Brightpaws Veterinary', tagline: 'Bright care for your brightest friend', style: 'Professional & Caring', domain: 'brightpawsvet.com', color: '#1D4ED8' },
]

const CATEGORIES = [
  { name: 'Pet Grooming & Spa', desc: 'Stylish, caring names for pet groomers and spa services' },
  { name: 'Veterinary Clinics', desc: 'Professional, trustworthy names for vet practices' },
  { name: 'Pet Stores & Retail', desc: 'Welcoming, fun names for pet supply shops' },
  { name: 'Pet Sitting & Walking', desc: 'Reliable, friendly names for pet care services' },
  { name: 'Dog Daycare & Boarding', desc: 'Warm, safe names for pet boarding facilities' },
  { name: 'Pet Food & Treats', desc: 'Appetizing, wholesome names for pet nutrition brands' },
  { name: 'Pet Training & Behavior', desc: 'Expert, patient names for training businesses' },
  { name: 'Exotic & Specialty Pets', desc: 'Unique, niche names for specialty animal businesses' },
]

const NAMING_TIPS = [
  {
    title: 'Say it to a pet owner',
    description: 'Pet businesses thrive on word of mouth at dog parks, vet offices, and neighborhood walks. Your name should be easy to say in passing and memorable enough to repeat. "Paw & Compass" and "Snout & Co." are conversation starters.',
  },
  {
    title: 'Match the pet energy',
    description: 'A luxury cat spa needs a different name than a rugged dog boarding facility. "Velvet Paws Studio" is perfect for premium grooming; "Wildtail Co." fits adventure-focused services. Your name should match the experience you deliver.',
  },
  {
    title: 'Don\'t lock into one animal',
    description: '"Poodles & Paws" only works for dogs. "Fern & Fetch" is broader — it works for cats, dogs, and more. Unless you\'re a species-specific business (e.g., reptile-only vet), keep your name flexible for growth.',
  },
  {
    title: 'Think Yelp and Google Maps',
    description: 'Pet owners search "dog groomer near me," "vet near me," "pet store open now." Your name needs to be instantly recognizable in search results, easy to spell, and professional enough to earn that first booking.',
  },
  {
    title: 'Use pet language naturally',
    description: 'Words like "Paw," "Snout," "Tail," "Fetch," "Coat," and "Whisker" are pet vocabulary that immediately signal your industry. Pair them with evocative words: "Paw & Compass," "Fern & Fetch," "Brightpaws." This formula works because it\'s specific and warm.',
  },
  {
    title: 'Test the Instagram factor',
    description: 'Pet businesses are some of the most-Instagrammed brands out there. Your name should look good as a handle (@wildtailco), work on a cute logo, and be short enough to hashtag. Visual brands win in pet care.',
  },
]

const FAQ_ITEMS = [
  {
    q: 'How does the pet business name generator work?',
    a: 'Describe your pet business — your service type (grooming, veterinary, pet store, sitting, daycare, training, food brand), your animal focus (dogs, cats, exotics, all pets), and your brand personality (luxury, playful, professional, eco-friendly). BrandForge\'s AI generates custom name suggestions paired with complete brand kits including logo concepts, color palettes, taglines, and domain/social availability checks.',
  },
  {
    q: 'Is the pet business name generator free?',
    a: 'Yes! You can generate pet business name ideas for free — 5 suggestions per search, unlimited searches, no credit card required. Unlock the full brand kit (logo, colors, tagline, typography, domain & social checks) for $9 per brand kit.',
  },
  {
    q: 'What makes a good pet business name?',
    a: 'A great pet business name feels warm and memorable — it should make pet owners feel like their animal is in caring hands. Words like "Paw," "Compass," "Velvet," and "Brightpaws" convey trust and affection. The best names work on Instagram, Yelp, and that conversation at the dog park.',
  },
  {
    q: 'Should I include "pet" or "dog" in my business name?',
    a: 'For discoverability, yes — "pet" helps with Google Maps and Yelp searches. But "dog" or "cat" limits you if you plan to serve all animals. "Paw & Compass" works for any pet business; "Poodle Parlor" only works for dogs. Consider your long-term service range before choosing.',
  },
  {
    q: 'Can I use these names for my pet business?',
    a: 'Absolutely. All names you generate are yours to use commercially — for business registration, LLC filing, signage, vehicle wraps, grooming smocks, domain purchases, social media, and marketing. There are no licensing restrictions.',
  },
  {
    q: 'What if I want names for a specific pet niche?',
    a: 'Just describe your niche in the prompt. Whether it\'s a mobile cat grooming service, holistic veterinary clinic, organic pet food brand, dog adventure camp, reptile specialty store, or pet photography studio — BrandForge tailors suggestions to your exact service, personality, and ideal customer.',
  },
  {
    q: 'How important is a matching domain for pet businesses?',
    a: 'Very. Pet owners find businesses through Google Maps, Yelp, Instagram, and word of mouth. A matching domain and consistent social handles build credibility instantly. BrandForge checks domain and social availability in real-time.',
  },
  {
    q: 'What comes in the brand kit for each name?',
    a: 'Each brand kit includes: a logo concept (text-based with font pairing), a 5-color palette with hex codes, a custom tagline, typography recommendations, and real-time availability checks for domains and social handles. You can download it all as a PDF brand guidelines document.',
  },
]

export default function PetNameGeneratorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'BrandForge Pet Business Name Generator',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description: 'AI-powered pet business name generator with complete brand kits including logos, colors, taglines, and domain/social availability.',
        offers: [
          { '@type': 'Offer', price: '0', priceCurrency: 'USD', description: 'Free tier — 5 name suggestions per search' },
          { '@type': 'Offer', price: '9', priceCurrency: 'USD', description: 'Brand Kit Pro — complete brand identity per name' },
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          ratingCount: '2914',
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
          { '@type': 'ListItem', position: 2, name: 'Pet Name Generator', item: 'https://brandforge-phi-pearl.vercel.app/pet-name-generator' },
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
        <div className="absolute inset-0 bg-gradient-to-br from-amber-700 via-orange-600 to-rose-600" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-700">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            AI-Powered Pet Naming
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Pet Business Name Generator
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-amber-100">
            Generate pet business names with AI. Describe your service, get name suggestions with complete brand kits — logo concepts, color palettes, taglines, and domain availability. Free to start.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="btn-primary inline-flex items-center gap-2 text-base px-8 py-3"
            >
              Generate Pet Names
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
              Names for Every Pet Business
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              From grooming salons to veterinary clinics — we generate names that feel warm, trustworthy, and impossible to forget.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((cat) => (
              <div key={cat.name} className="rounded-xl border border-slate-200 p-5 hover:border-orange-300 hover:shadow-sm transition-all">
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
              Pet Names, Generated in Seconds
            </h2>
            <p className="mt-3 text-slate-500">
              Each name comes with a complete brand kit — not just a name on its own.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {EXAMPLE_NAMES.map((item) => (
              <div key={item.name} className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-orange-200">
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
            These are real examples — your results will be tailored to your specific pet business.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              How to Name Your Pet Business with AI
            </h2>
          </div>
          <div className="space-y-8">
            {[
              { step: '1', title: 'Describe your service', desc: 'Tell us your pet business type — grooming salon, veterinary clinic, pet store, sitting service, daycare, training school, or pet food brand. Describe your animal focus (dogs, cats, exotics, all pets) and your brand personality (luxury, playful, professional, eco-friendly).' },
              { step: '2', title: 'Get tailored name suggestions', desc: 'BrandForge generates 5 unique pet business names per search, each with a matching tagline, color palette, and logo concept. Every name feels warm and memorable — no generic "Happy Paws" here.' },
              { step: '3', title: 'Check domain & social availability', desc: 'Every name comes with real-time checks for .com, .pet, .vet, .groom, and more — plus Instagram, TikTok, and social media handle availability. Essential for pet businesses that thrive on visual platforms and local search.' },
              { step: '4', title: 'Download your brand kit', desc: 'Unlock the full brand kit: logo concept, 5-color palette with hex codes, tagline, typography recommendations, and a downloadable PDF brand guidelines document ready for your website, social media, grooming smocks, and business cards.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-600 text-white font-bold text-lg">
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
              Tips for Naming Your Pet Business
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              In the pet world, your name is on every bandana, business card, and Instagram post. Here&apos;s how to make it stick.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {NAMING_TIPS.map((tip) => (
              <div key={tip.title} className="rounded-xl border border-slate-200 bg-white p-6 hover:border-orange-200 transition-colors">
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
                <summary className="flex cursor-pointer items-center justify-between p-5 text-base font-medium text-slate-900 hover:text-orange-600">
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
      <section className="py-16 bg-gradient-to-br from-amber-700 to-rose-600">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to Name Your Pet Business?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Describe your service. Get names with brand kits. Free to start, $9 per brand kit you love.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-semibold text-amber-700 shadow-lg hover:bg-gray-50 transition-colors"
            >
              Generate Pet Names
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

      {/* Internal Links */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold text-slate-900 mb-6">More Name Generators</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/startup-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-orange-300 hover:text-orange-600 transition-colors">
              🚀 Startup Name Generator
            </Link>
            <Link href="/restaurant-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-orange-300 hover:text-orange-600 transition-colors">
              🍽️ Restaurant Name Generator
            </Link>
            <Link href="/fitness-brand-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-orange-300 hover:text-orange-600 transition-colors">
              💪 Fitness Brand Name Generator
            </Link>
            <Link href="/real-estate-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-orange-300 hover:text-orange-600 transition-colors">
              🏠 Real Estate Name Generator
            </Link>
            <Link href="/photography-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-orange-300 hover:text-orange-600 transition-colors">
              📸 Photography Name Generator
            </Link>
            <Link href="/beauty-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-orange-300 hover:text-orange-600 transition-colors">
              💄 Beauty Name Generator
            </Link>
            <Link href="/fashion-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-orange-300 hover:text-orange-600 transition-colors">
              👗 Fashion Name Generator
            </Link>
            <Link href="/food-truck-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-orange-300 hover:text-orange-600 transition-colors">
              🚚 Food Truck Name Generator
            </Link>
            <Link href="/tech-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-orange-300 hover:text-orange-600 transition-colors">
              💻 Tech Name Generator
            </Link>
            <Link href="/consulting-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-orange-300 hover:text-orange-600 transition-colors">
              📊 Consulting Name Generator
            </Link>
            <Link href="/podcast-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-orange-300 hover:text-orange-600 transition-colors">
              🎙️ Podcast Name Generator
            </Link>
            <Link href="/coaching-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-orange-300 hover:text-orange-600 transition-colors">
              💡 Coaching Name Generator
            </Link>
            <Link href="/nonprofit-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-orange-300 hover:text-orange-600 transition-colors">
              🌍 Nonprofit Name Generator
            </Link>
            <Link href="/craft-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-orange-300 hover:text-orange-600 transition-colors">
              ✂️ Craft Name Generator
            </Link>
            <Link href="/education-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-orange-300 hover:text-orange-600 transition-colors">
              📚 Education Name Generator
            </Link>
            <Link href="/yoga-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-orange-300 hover:text-orange-600 transition-colors">
              🧘 Yoga Name Generator
            </Link>
            <Link href="/coffee-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-orange-300 hover:text-orange-600 transition-colors">
              ☕ Coffee Name Generator
            </Link>
            <Link href="/music-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-orange-300 hover:text-orange-600 transition-colors">
              🎵 Music Name Generator
            </Link>
            <Link href="/wedding-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-orange-300 hover:text-orange-600 transition-colors">
              💍 Wedding Name Generator
            </Link>
            <Link href="/cleaning-business-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-orange-300 hover:text-orange-600 transition-colors">
              🧹 Cleaning Business Name Generator
            </Link>
            <Link href="/landscaping-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-orange-300 hover:text-orange-600 transition-colors">
              🌿 Landscaping Name Generator
            </Link>
            <Link href="/compare" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-orange-300 hover:text-orange-600 transition-colors">
              📊 Compare Name Generators
            </Link>
            <Link href="/examples" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-orange-300 hover:text-orange-600 transition-colors">
              ✨ Brand Kit Examples
            </Link>
            <Link href="/blog/how-to-choose-business-name" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-orange-300 hover:text-orange-600 transition-colors">
              📖 How to Choose a Business Name
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}