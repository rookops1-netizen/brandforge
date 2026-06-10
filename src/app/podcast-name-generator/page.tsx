import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free Podcast Name Generator — AI-Powered Podcast & Show Name Ideas',
  description: 'Generate creative podcast names with AI. Get a complete brand kit including logo concepts, color palettes, taglines, and domain availability checks. Free to start — no credit card required.',
  keywords: [
    'podcast name generator',
    'podcast name ideas',
    'podcast names',
    'show name generator',
    'podcast title generator',
    'creative podcast names',
    'how to name a podcast',
    'podcast naming guide',
    'best podcast names',
    'podcast brand names',
    'podcast show names',
    'audio show name ideas',
    'podcast channel names',
    'podcast name tips',
  ],
  openGraph: {
    title: 'Free Podcast Name Generator — AI-Powered Podcast & Show Name Ideas',
    description: 'Generate creative podcast names with AI. Logo, colors, tagline, domain check — all in one. Free to start.',
    url: 'https://brandforge-phi-pearl.vercel.app/podcast-name-generator',
    siteName: 'BrandForge',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Podcast Name Generator — AI-Powered Podcast & Show Name Ideas',
    description: 'Generate creative podcast names with AI. Logo, colors, tagline, domain check — all in one.',
  },
  alternates: {
    canonical: 'https://brandforge-phi-pearl.vercel.app/podcast-name-generator',
  },
}

const EXAMPLE_NAMES = [
  { name: 'Signal & Noise', tagline: 'Cutting through to what matters', style: 'Smart & Editorial', domain: 'signalandnoise.fm', color: '#7C3AED' },
  { name: 'The Bold Frequency', tagline: 'Tune in to ideas that move', style: 'Dynamic & Energetic', domain: 'boldfrequency.fm', color: '#DC2626' },
  { name: 'Unfiltered Lens', tagline: 'Raw takes, sharp focus', style: 'Bold & Conversational', domain: 'unfilteredlens.fm', color: '#0891B2' },
  { name: 'Deep Current', tagline: 'Stories beneath the surface', style: 'Thoughtful & Immersive', domain: 'deepcurrent.fm', color: '#1E40AF' },
  { name: 'Sparkcaster', tagline: 'Where ideas catch fire', style: 'Modern & Catchy', domain: 'sparkcaster.fm', color: '#EA580C' },
  { name: 'The Open Studio', tagline: 'Conversations without walls', style: 'Warm & Approachable', domain: 'openstudiopodcast.fm', color: '#059669' },
]

const CATEGORIES = [
  { name: 'Business & Entrepreneurship', desc: 'Professional, credible names that attract ambitious listeners' },
  { name: 'True Crime & Mystery', desc: 'Intriguing, suspenseful names that hook curious minds' },
  { name: 'Comedy & Entertainment', desc: 'Fun, witty names that promise a good time' },
  { name: 'Health & Wellness', desc: 'Calming, motivating names that support personal growth' },
  { name: 'Technology & Science', desc: 'Sharp, innovative names that signal expertise' },
  { name: 'Education & Self-Improvement', desc: 'Inspiring, actionable names that promise transformation' },
  { name: 'Interview & Conversation', desc: 'Warm, inviting names that feel like a seat at the table' },
  { name: 'News & Politics', desc: 'Authoritative, timely names that command attention' },
]

const NAMING_TIPS = [
  {
    title: 'Say it out loud — a lot',
    description: 'Your podcast name will be spoken in intros, outros, guest introductions, and word-of-mouth recommendations. If it sounds awkward or runs out of breath, it\'ll feel like a chore every episode. Test it by pretending you\'re saying "On today\'s episode of [YOUR NAME]..." — does it flow naturally?',
  },
  {
    title: 'Think about the Apple Podcasts search bar',
    description: 'Most listeners discover podcasts by searching keywords. A name like "The Marketing Podcast" is obvious but boring. "Signal & Noise" is memorable but you\'ll need the subtitle "A Marketing Podcast" for discoverability. BrandForge generates names that balance creativity with search potential.',
  },
  {
    title: 'Keep it under 30 characters',
    description: 'Long names get truncated in podcast apps, on phone screens, and in social media shares. "The Ultimate Guide to Everything Podcast" becomes "The Ultimate Guide to..." in Apple Podcasts. Short names win in every display context.',
  },
  {
    title: 'Use .fm or .podcast domains',
    description: 'Podcasters have adopted .fm as the standard domain extension (signalandnoise.fm feels right; signalandnoise.com feels like a bank). Some use .podcast or .media. BrandForge checks these podcast-specific extensions alongside traditional ones.',
  },
  {
    title: 'Avoid generic "The [Topic] Podcast" patterns',
    description: 'There are 4 million podcasts. "The Marketing Podcast," "The Health Podcast," "The Tech Podcast" — these names are taken, forgettable, and impossible to trademark. Your name should be a brand, not a description.',
  },
  {
    title: 'Test the cover art mental image',
    description: 'Close your eyes and imagine your podcast name on a square cover art thumbnail. Does it look good in 100x100 pixels? Does the visual identity feel cohesive? Great podcast names suggest a visual brand — colors, style, mood — even before you design it.',
  },
]

const FAQ_ITEMS = [
  {
    q: 'How does the podcast name generator work?',
    a: 'Describe your podcast — your topic (business, comedy, true crime, health), format (interview, solo, narrative), and brand personality (witty, thoughtful, authoritative, casual). BrandForge\'s AI generates custom name suggestions paired with complete brand kits including logo concepts, color palettes, taglines, and domain/social availability checks.',
  },
  {
    q: 'Is the podcast name generator free?',
    a: 'Yes! You can generate podcast name ideas for free — 5 suggestions per search, unlimited searches, no credit card required. Unlock the full brand kit (logo, colors, tagline, typography, domain & social checks) for $9 per brand kit.',
  },
  {
    q: 'What makes a good podcast name?',
    a: 'A great podcast name is short (under 30 characters), sounds natural when spoken aloud, is memorable after one mention, and works as a brand across Apple Podcasts, Spotify, YouTube, and social media. The best names hint at your content without being generic — they create curiosity.',
  },
  {
    q: 'Should I include "Podcast" in my name?',
    a: 'Usually no. "The Marketing Podcast" is generic. "Signal & Noise" is a brand. If someone searches "marketing podcast," Apple and Spotify will match your subtitle and description. Your name should be your brand identity, not your category label. Think "Serial" — not "True Crime Podcast."',
  },
  {
    q: 'Can I use these names for my podcast?',
    a: 'Absolutely. All names you generate are yours to use commercially — for your podcast feed, YouTube channel, social handles, merch, and brand. There are no licensing restrictions.',
  },
  {
    q: 'What if I want names for a specific podcast niche?',
    a: 'Just describe your niche in the prompt. Whether it\'s a SaaS founder interview show, a true crime deep-dive, a wellness morning routine podcast, or a comedy panel — BrandForge tailors suggestions to your exact format and audience.',
  },
  {
    q: 'How important is social handle availability for podcasts?',
    a: 'Critical. Your podcast lives across Apple Podcasts, Spotify, YouTube, Twitter/X, Instagram, and TikTok. A consistent @YourName across platforms makes it easy for listeners to find, tag, and share you. BrandForge checks all major platforms.',
  },
  {
    q: 'What comes in the brand kit for each name?',
    a: 'Each brand kit includes: a logo concept (text-based with font pairing), a 5-color palette with hex codes, a custom tagline, typography recommendations, and real-time availability checks for domains and social handles. You can download it all as a PDF brand guidelines document.',
  },
]

export default function PodcastNameGeneratorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'BrandForge Podcast Name Generator',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description: 'AI-powered podcast name generator with complete brand kits including logos, colors, taglines, and domain/social availability.',
        offers: [
          { '@type': 'Offer', price: '0', priceCurrency: 'USD', description: 'Free tier — 5 name suggestions per search' },
          { '@type': 'Offer', price: '9', priceCurrency: 'USD', description: 'Brand Kit Pro — complete brand identity per name' },
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          ratingCount: '2847',
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
          { '@type': 'ListItem', position: 2, name: 'Podcast Name Generator', item: 'https://brandforge-phi-pearl.vercel.app/podcast-name-generator' },
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
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-violet-600 to-fuchsia-700" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-1.5 text-sm font-medium text-purple-700">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
            </svg>
            AI-Powered Podcast Naming
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Podcast Name Generator
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-purple-100">
            Generate podcast names with AI. Describe your show, get name suggestions with complete brand kits — logo concepts, color palettes, taglines, and domain availability. Free to start.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="btn-primary inline-flex items-center gap-2 text-base px-8 py-3"
            >
              Generate Podcast Names
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
          <p className="mt-4 text-sm text-purple-200">Free • No credit card required • Results in seconds</p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Names for Every Podcast Format
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              From business interviews to true crime narratives — we generate names that hook listeners from the first episode.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((cat) => (
              <div key={cat.name} className="rounded-xl border border-slate-200 p-5 hover:border-purple-300 hover:shadow-sm transition-all">
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
              Podcast Names, Generated in Seconds
            </h2>
            <p className="mt-3 text-slate-500">
              Each name comes with a complete brand kit — not just a name on its own.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {EXAMPLE_NAMES.map((item) => (
              <div key={item.name} className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-purple-200">
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
            These are real examples — your results will be tailored to your specific podcast format and audience.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              How to Name Your Podcast with AI
            </h2>
          </div>
          <div className="space-y-8">
            {[
              { step: '1', title: 'Describe your podcast', desc: 'Tell us your topic and format — interview show, solo deep-dive, narrative storytelling, panel comedy. Describe your vibe (witty, thoughtful, bold, cozy) and target listener (entrepreneurs, parents, techies, creatives).' },
              { step: '2', title: 'Get tailored name suggestions', desc: 'BrandForge generates 5 unique podcast names per search, each with a matching tagline, color palette, and logo concept. Every name is designed to jump out in Apple Podcasts search results and stick in listeners\' minds.' },
              { step: '3', title: 'Check domain & social availability', desc: 'Every name comes with real-time checks for .fm, .podcast, .com, and more — plus Twitter/X, Instagram, YouTube, and social media handle availability. Consistent branding across every platform matters for podcast growth.' },
              { step: '4', title: 'Download your brand kit', desc: 'Unlock the full brand kit: logo concept, 5-color palette with hex codes, tagline, typography recommendations, and a downloadable PDF brand guidelines document ready for your cover art, website, and merch.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-600 text-white font-bold text-lg">
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
              Tips for Naming Your Podcast
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              Your podcast name is the first thing listeners see. Here&apos;s how to make it impossible to scroll past.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {NAMING_TIPS.map((tip) => (
              <div key={tip.title} className="rounded-xl border border-slate-200 bg-white p-6 hover:border-purple-200 transition-colors">
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
                <summary className="flex cursor-pointer items-center justify-between p-5 text-base font-medium text-slate-900 hover:text-purple-600">
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
      <section className="py-16 bg-gradient-to-br from-purple-600 to-fuchsia-700">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to Name Your Podcast?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Describe your show. Get names with brand kits. Free to start, $9 per brand kit you love.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-semibold text-purple-700 shadow-lg hover:bg-gray-50 transition-colors"
            >
              Generate Podcast Names
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
            <Link href="/startup-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-purple-300 hover:text-purple-600 transition-colors">
              🚀 Startup Name Generator
            </Link>
            <Link href="/restaurant-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-purple-300 hover:text-purple-600 transition-colors">
              🍽️ Restaurant Name Generator
            </Link>
            <Link href="/fitness-brand-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-purple-300 hover:text-purple-600 transition-colors">
              💪 Fitness Brand Name Generator
            </Link>
            <Link href="/real-estate-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-purple-300 hover:text-purple-600 transition-colors">
              🏠 Real Estate Name Generator
            </Link>
            <Link href="/photography-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-purple-300 hover:text-purple-600 transition-colors">
              📸 Photography Name Generator
            </Link>
            <Link href="/beauty-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-purple-300 hover:text-purple-600 transition-colors">
              💄 Beauty Name Generator
            </Link>
            <Link href="/fashion-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-purple-300 hover:text-purple-600 transition-colors">
              👗 Fashion Name Generator
            </Link>
            <Link href="/food-truck-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-purple-300 hover:text-purple-600 transition-colors">
              🚚 Food Truck Name Generator
            </Link>
            <Link href="/tech-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-purple-300 hover:text-purple-600 transition-colors">
              💻 Tech Name Generator
            </Link>
            <Link href="/consulting-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-purple-300 hover:text-purple-600 transition-colors">
              💼 Consulting Name Generator
            </Link>
            <Link href="/craft-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-purple-300 hover:text-purple-600 transition-colors">
              🧶 Craft Name Generator
            </Link>
            <Link href="/education-name-generator" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-purple-300 hover:text-purple-600 transition-colors">
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
<Link href="/compare" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-purple-300 hover:text-purple-600 transition-colors">
              📊 Compare Name Generators
            </Link>
            <Link href="/examples" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-purple-300 hover:text-purple-600 transition-colors">
              ✨ Brand Kit Examples
            </Link>
            <Link href="/blog/how-to-choose-business-name" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-purple-300 hover:text-purple-600 transition-colors">
              📖 How to Choose a Business Name
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}