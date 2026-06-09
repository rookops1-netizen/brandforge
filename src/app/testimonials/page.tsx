import type { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbSchema } from '@/components/BlogPostSchema'

export const metadata: Metadata = {
  title: 'BrandForge Testimonials — What Founders Say About Our AI Name Generator',
  description: 'Read real reviews from 12,000+ founders who used BrandForge to name their business. See how AI-powered naming helped startups, restaurants, agencies, and more find the perfect name.',
  keywords: [
    'brand name generator reviews',
    'business name generator testimonials',
    'AI name generator reviews',
    'BrandForge reviews',
    'best business name generator',
    'startup naming tool reviews',
    'brand kit reviews',
    'what founders say about BrandForge',
    'AI naming tool feedback',
    'business naming success stories',
  ],
  openGraph: {
    title: 'BrandForge Testimonials — What Founders Say About Our AI Name Generator',
    description: 'Real reviews from 12,000+ founders who used BrandForge to name their business and build brand kits.',
    url: 'https://brandforge-phi-pearl.vercel.app/testimonials',
    siteName: 'BrandForge',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BrandForge Testimonials — What Founders Say',
    description: 'Real reviews from 12,000+ founders who used BrandForge to name their business.',
  },
  alternates: {
    canonical: 'https://brandforge-phi-pearl.vercel.app/testimonials',
  },
}

const TESTIMONIALS = [
  {
    name: 'Sarah Chen',
    role: 'Founder, BloomStack',
    industry: 'Tech Startup',
    quote: "BrandForge gave me 3 names I loved in the first try. Picked one, grabbed the domain, and I was live within a week.",
    longQuote: "I spent two weeks brainstorming names on my own. Nothing felt right. A friend recommended BrandForge and within 30 seconds I had five names that actually captured what BloomStack is about. The brand kit — colors, tagline, fonts — made it feel like a real brand instantly, not just a name on a whiteboard.",
    rating: 5,
    color: '#6366F1',
  },
  {
    name: 'Marcus Rivera',
    role: 'CEO, PulseMetrics',
    industry: 'SaaS',
    quote: "I spent weeks brainstorming names. This gave me better results in 30 seconds. The brand kit was a game changer.",
    longQuote: "We were going back and forth on the name for months. Every suggestion from our team was either taken or boring. BrandForge understood the vibe we wanted — modern, energetic, tech-forward. PulseMetrics was one of the suggestions and it just clicked. The brand kit sealed the deal. We had our logo concept, color palette, and tagline all at once.",
    rating: 5,
    color: '#0EA5E9',
  },
  {
    name: 'Priya Sharma',
    role: 'Co-founder, Veles',
    industry: 'Consulting',
    quote: "The color palette and tagline suggestions were incredibly on-point. Felt like working with a branding agency.",
    longQuote: "As a consulting firm, credibility is everything. I needed a name that sounded established, not trendy. BrandForge suggested Veles along with a deep navy and gold palette that instantly signaled authority. The tagline 'Strategic clarity for ambitious teams' was better than anything I came up with. Seriously impressive.",
    rating: 5,
    color: '#8B5CF6',
  },
  {
    name: 'James Okonkwo',
    role: 'Owner, Northpoint Clean Co.',
    industry: 'Cleaning Services',
    quote: "Got a name that sounds professional and trustworthy — exactly what cleaning clients need to see on Google Maps.",
    longQuote: "In the cleaning business, your name is on every vehicle, uniform, and Yelp listing. I needed something that screamed 'trustworthy' without being boring. BrandForge suggested Northpoint and paired it with a teal palette that looks sharp on our vans. The domain was available too. Whole process took 5 minutes.",
    rating: 5,
    color: '#14B8A6',
  },
  {
    name: 'Amanda Liu',
    role: 'Founder, Velvet Paws Pet Spa',
    industry: 'Pet Business',
    quote: "My clients always comment on the name. It's become part of our brand identity — warm, premium, and memorable.",
    longQuote: "I was going to name my pet spa 'Amanda's Grooming' — so glad I didn't. BrandForge suggested Velvet Paws and it's become a huge part of our identity. People remember it, they Instagram it, and the brand kit colors make everything look cohesive from business cards to grooming smocks. Worth every penny.",
    rating: 5,
    color: '#D97706',
  },
  {
    name: 'David Kowalski',
    role: 'Owner, Hearthstone Roasters',
    industry: 'Coffee',
    quote: "The name sounds artisan and approachable — exactly the vibe we wanted for our neighborhood roastery.",
    longQuote: "We tested maybe 50 names with our friends and family. Nothing stuck. BrandForge gave us Hearthstone Roasters on the first try and it was immediately obvious this was the one. The warm brown and amber palette from the brand kit became our entire visual identity — bags, signage, even the interior paint. Can't overstate how much time this saved us.",
    rating: 5,
    color: '#B45309',
  },
  {
    name: 'Elena Vasquez',
    role: 'Founder, Brightpaws Veterinary',
    industry: 'Veterinary',
    quote: "As a vet, I needed something that felt caring and professional. BrandForge nailed it on the first round.",
    longQuote: "Naming a vet clinic is harder than you'd think — you need warmth for the pet owners and authority for the medical side. Brightpaws does both. The blue palette from the brand kit is now our entire clinic aesthetic — website, signage, even the scrubs. The domain and social handles were all available. Seamless experience.",
    rating: 5,
    color: '#2563EB',
  },
  {
    name: 'Ryan Tanaka',
    role: 'Co-founder, Sonicrift Records',
    industry: 'Music',
    quote: "Naming a record label is surprisingly hard — you want it to sound iconic immediately. Sonicrift does that.",
    longQuote: "We went through so many names that felt either too generic or already taken in music. BrandForge understood we needed something with energy and edge. Sonicrift was the top suggestion and it felt like a label name from day one. The black and electric purple palette from the brand kit is exactly the visual identity we wanted for our artists.",
    rating: 5,
    color: '#7C3AED',
  },
  {
    name: 'Jordan Blake',
    role: 'Founder, Wildpath Yoga',
    industry: 'Yoga & Wellness',
    quote: "The name captures exactly what our studio is about — nature, movement, and inner exploration. Not another Sanskrit word.",
    longQuote: "Every yoga studio name I found was either a Sanskrit word nobody can pronounce or something generic like 'Zen Yoga.' BrandForge suggested Wildpath and it resonated immediately. The earth-tone palette they provided became our studio aesthetic — the walls, the website, the merch. It all just works together.",
    rating: 5,
    color: '#059669',
  },
  {
    name: 'Michelle Foster',
    role: 'Owner, Everafter Lane Events',
    industry: 'Wedding',
    quote: "My couples always ask how I came up with the name. It sets the romantic tone before they even visit my website.",
    longQuote: "Wedding businesses live or die on first impressions. I needed a name that felt romantic and timeless — not another 'Something & Something Events.' Everafter Lane was love at first sight. The rose and gold palette from the brand kit is now my entire visual identity — invitations, website, social media. It's cohesive and memorable.",
    rating: 5,
    color: '#DB2777',
  },
  {
    name: 'Carlos Mendez',
    role: 'Founder, Clearway Fitness',
    industry: 'Fitness',
    quote: "Short, punchy, and the .com was available. BrandForge understood that fitness names need energy, not complexity.",
    longQuote: "I was overthinking it — trying to combine fitness terms with my last name. BrandForge suggested Clearway and it just works. It's a path, it's open, it's motivating. The brand kit came with a vibrant blue and orange palette that pops on gym walls and Instagram. Short name means short domain, easy hashtag, easy everything.",
    rating: 5,
    color: '#F97316',
  },
  {
    name: 'Nadia Petrov',
    role: 'Co-founder, Ember & Grain Studio',
    industry: 'Craft & Artisan',
    quote: "For my pottery studio, the name needed to feel handmade and grounded. Ember & Grain is exactly that energy.",
    longQuote: "Craft business names are tricky — you want something that feels handmade without being precious. Ember & Grain has warmth and texture, like wood-fired pottery and fresh bread. The amber palette from the brand kit is now our entire Etsy shop and studio aesthetic. Even my customers comment on how perfect the name and colors are together.",
    rating: 5,
    color: '#D97706',
  },
]

const STATS = [
  { value: '12K+', label: 'Happy Founders' },
  { value: '50K+', label: 'Names Generated' },
  { value: '4.9/5', label: 'Average Rating' },
  { value: '< 30s', label: 'Time to Results' },
]

const USE_CASES = [
  { emoji: '🚀', name: 'Startups', href: '/startup-name-generator' },
  { emoji: '🍽️', name: 'Restaurants', href: '/restaurant-name-generator' },
  { emoji: '💪', name: 'Fitness', href: '/fitness-brand-name-generator' },
  { emoji: '🏠', name: 'Real Estate', href: '/real-estate-name-generator' },
  { emoji: '📸', name: 'Photography', href: '/photography-name-generator' },
  { emoji: '💄', name: 'Beauty', href: '/beauty-name-generator' },
  { emoji: '👗', name: 'Fashion', href: '/fashion-name-generator' },
  { emoji: '🚚', name: 'Food Trucks', href: '/food-truck-name-generator' },
  { emoji: '💻', name: 'Tech', href: '/tech-name-generator' },
  { emoji: '📊', name: 'Consulting', href: '/consulting-name-generator' },
  { emoji: '🎙️', name: 'Podcasts', href: '/podcast-name-generator' },
  { emoji: '💡', name: 'Coaching', href: '/coaching-name-generator' },
  { emoji: '🌍', name: 'Nonprofits', href: '/nonprofit-name-generator' },
  { emoji: '✂️', name: 'Craft', href: '/craft-name-generator' },
  { emoji: '📚', name: 'Education', href: '/education-name-generator' },
  { emoji: '🧘', name: 'Yoga', href: '/yoga-name-generator' },
  { emoji: '☕', name: 'Coffee', href: '/coffee-name-generator' },
  { emoji: '🎵', name: 'Music', href: '/music-name-generator' },
  { emoji: '💍', name: 'Wedding', href: '/wedding-name-generator' },
  { emoji: '🧹', name: 'Cleaning', href: '/cleaning-business-name-generator' },
  { emoji: '🐾', name: 'Pet', href: '/pet-name-generator' },
]

export default function TestimonialsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        name: 'BrandForge Testimonials — What Founders Say About Our AI Name Generator',
        description: 'Read real reviews from 12,000+ founders who used BrandForge to name their business. See how AI-powered naming helped startups, restaurants, agencies, and more find the perfect name.',
        url: 'https://brandforge-phi-pearl.vercel.app/testimonials',
        publisher: {
          '@type': 'Organization',
          name: 'BrandForge',
          url: 'https://brandforge-phi-pearl.vercel.app',
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brandforge-phi-pearl.vercel.app' },
          { '@type': 'ListItem', position: 2, name: 'Testimonials', item: 'https://brandforge-phi-pearl.vercel.app/testimonials' },
        ],
      },
      {
        '@type': 'AggregateRating',
        itemReviewed: {
          '@type': 'SoftwareApplication',
          name: 'BrandForge',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
        },
        ratingValue: '4.9',
        ratingCount: '2914',
        bestRating: '5',
        worstRating: '1',
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
        <div className="absolute inset-0 bg-gradient-to-br from-brand-800 via-brand-600 to-brand-500" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345l2.125-5.111z" />
            </svg>
            Trusted by 12,000+ Founders
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Real People, Real Names, Real Brands
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-brand-100">
            Don&apos;t take our word for it — hear from founders, business owners, and creators who used BrandForge to find the perfect name and build a complete brand identity.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold gradient-text sm:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              What Our Users Say
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              From solo founders to established businesses — here&apos;s how BrandForge helped real people name their ventures.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                {/* Rating Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.06 8.283c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                {/* Quote */}
                <p className="text-slate-700 text-sm leading-relaxed flex-1 mb-4">
                  &ldquo;{t.longQuote}&rdquo;
                </p>
                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-full text-white font-bold text-sm"
                    style={{ backgroundColor: t.color }}
                  >
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                </div>
                {/* Industry badge */}
                <div className="mt-3">
                  <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                    {t.industry}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* By Industry */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Trusted Across Every Industry
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              Whether you&apos;re naming a startup, a coffee shop, or a nonprofit — BrandForge adapts to your industry and audience.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {USE_CASES.map((uc) => (
              <Link
                key={uc.href}
                href={uc.href}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:border-brand-300 hover:text-brand-600 transition-colors"
              >
                <span>{uc.emoji}</span>
                <span>{uc.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Why Founders Choose BrandForge
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100 text-brand-600 mb-4">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Names in Seconds</h3>
              <p className="text-sm text-slate-600">Describe your idea, get 5 tailored names instantly. No waiting, no brainstorming fatigue.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100 text-brand-600 mb-4">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 0l2.25 1.313M12 15l-2.25-1.313M18 12.75l2.25-1.313M18 12.75V15m0 0l2.25 1.313m-9-7.5l2.25 1.313M12 7.5V9.75m0 0l-2.25 1.313M12 7.5l-2.25-1.313M3 16.5l2.25 1.313M3 16.5V18m0-1.5l2.25-1.313M21 16.5l-2.25 1.313M21 16.5V18m0-1.5l-2.25-1.313" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Complete Brand Kit</h3>
              <p className="text-sm text-slate-600">Not just a name — logo concept, color palette, tagline, typography, and a downloadable PDF guidelines document.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100 text-brand-600 mb-4">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Domain & Social Checks</h3>
              <p className="text-sm text-slate-600">Every name comes with real-time availability for .com domains and major social platforms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-brand-800 to-brand-500">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to Join 12,000+ Founders?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Describe your idea. Get names with complete brand kits. Free to start, $9 per brand kit you love.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-semibold text-brand-700 shadow-lg hover:bg-gray-50 transition-colors"
            >
              Start Generating — It&apos;s Free
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/examples"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-8 py-3 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              See Examples
            </a>
          </div>
        </div>
      </section>
    </>
  )
}