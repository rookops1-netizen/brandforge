/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import { BlogNewsletterSection } from '@/components/BlogNewsletterSection'
import { BlogPostSchema } from '@/components/BlogPostSchema'

export const dynamic = 'force-static'
export const metadata: Metadata = {
  title: 'Startup Name Ideas: 300+ Names for Startups in 2026 + Free AI Generator',
  description: '300+ startup name ideas across 10 industries, 7 naming strategies behind billion-dollar startups like Stripe, Notion, and Canva, and a free AI generator that checks domain availability instantly.',
  keywords: [
    'startup name ideas',
    'startup names',
    'startup name generator',
    'cool startup names',
    'creative startup names',
    'tech startup name ideas',
    'startup naming',
    'how to name a startup',
    'best startup names',
    'unique startup names',
    'startup name ideas 2026',
    'startup company name ideas',
    'SaaS startup names',
    'startup naming guide',
    'good startup names'
  ],
  openGraph: {
    title: 'Startup Name Ideas: 300+ Names for Startups in 2026 + Free AI Generator',
    description: '300+ startup name ideas, 7 naming strategies behind billion-dollar startups, and a free AI generator with domain availability checks. Find your perfect startup name today.',
    url: 'https://brandforge.app/blog/startup-name-ideas',
    siteName: 'BrandForge',
    type: 'article',
    publishedTime: '2026-07-15T12:00:00.000Z',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Startup Name Ideas: 300+ Names for Startups in 2026',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Startup Name Ideas: 300+ Names for Startups in 2026',
    description: '300+ startup name ideas, 7 naming strategies behind billion-dollar startups, and a free AI tool that checks domain availability. Find your perfect startup name.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: 'https://brandforge.app/blog/startup-name-ideas',
  },
  robots: { index: true, follow: true },
}

const FAQ_ITEMS = [
  {
    question: 'How do I come up with a good name for my startup?',
    answer: 'Start by defining your startup\'s personality — list 5 adjectives that capture how you want people to feel when they encounter your brand. Then use naming strategies like compound words (Basecamp, Dropbox), evocative metaphors (Stripe, Notion), short punchy words (Zoom, Figma), invented words (Kodak, Etsy), or foreign words (Häagen-Dazs, Lego). Generate 50+ names, filter to your top 10 with the 6-rule filter (under 3 syllables, easy to spell, easy to say, no hyphens/numbers, fits personality, not easily confused), then validate domain and trademark availability.',
  },
  {
    question: 'What makes a good startup name?',
    answer: 'A great startup name is (1) short — 1–2 syllables ideal, 3 maximum, (2) easy to spell and pronounce on the first try, (3) memorable — it sticks after one hearing, (4) ownable — you can trademark it and get the .com, (5) evocative — it suggests what you do without being literal, and (6) scalable — it won\'t limit you if you pivot or expand. Look at Stripe, Notion, Canva, Slack, and Zoom — all are short, memorable, and evocative without being descriptive.',
  },
  {
    question: 'Should my startup name describe what we do?',
    answer: 'Usually not. The most successful startups use suggestive names (Stripe, Notion, Canva) rather than descriptive ones (PaymentProcessor, NoteApp, DesignTool). Descriptive names are forgettable, hard to trademark, and limit your growth. The exception: B2B enterprise startups where decision-makers search by category — names like Salesforce and HubSpot work because the market expects clarity. For most startups, a name that hints at your value (Notion = thinking/ideas, Slack = casual communication) outperforms one that describes your feature.',
  },
  {
    question: 'How do I check if a startup name is available?',
    answer: 'Check four things: (1) Domain availability for .com (use ICANN lookup or BrandForge\'s built-in checker), (2) USPTO trademark search at tmsearch.uspto.gov, (3) Social media handles on Twitter/X, Instagram, LinkedIn, and TikTok, (4) Google the name + "startup" or "company" to see if someone\'s already using it. BrandForge checks domain and social availability automatically during name generation. Do these checks before you get emotionally attached to a name — falling in love with an unavailable name is the #1 time-waster in naming.',
  },
  {
    question: 'What are the biggest startup naming mistakes?',
    answer: 'The top mistakes: (1) Choosing a name that\'s hard to spell or pronounce — if people can\'t type it after hearing it once, they\'ll never find you, (2) Picking a name too similar to an existing startup — trademark risk and user confusion, (3) Using hyphens, numbers, or intentional misspellings (Fyre, Lyfe) — people will type it wrong, (4) Being too descriptive (TaskManager Pro) — forgettable and hard to trademark, (5) Naming for your first product instead of your vision — you\'ll outgrow it, (6) Not checking international meanings — your name might mean something offensive in another language.',
  },
  {
    question: 'How much does the .com domain matter for a startup?',
    answer: 'It matters a lot for credibility and SEO, but it\'s not a dealbreaker. Investors, press, and users expect .com — 91 of the top 100 startups use .com as their primary domain. If the .com is taken but affordable ($500–$5,000), buy it. If it\'s expensive ($10,000+), consider .co, .io, or .ai as alternatives — these are widely accepted in tech and startup communities. Avoid obscure TLDs like .xyz, .tech, or .ly (Libya\'s TLD has had political instability). The best approach: find a name where .com is available, or where .com is parked/for-sale at a reasonable price.',
  },
  {
    question: 'Can I rename my startup later if I pick the wrong name?',
    answer: 'Yes, but it\'s painful and expensive. Renaming an established startup costs $5K–$50K+ in legal fees, rebranding, domain changes, and lost SEO authority. You\'ll confuse existing users, lose backlinks, and spend months redirecting traffic. Famous renames that worked (BackRub → Google, TheFacebook → Facebook) happened before scale. If you\'re going to rename, do it before launch. Spend 2–3 days naming now and save yourself $50K and 6 months of pain later.',
  },
  {
    question: 'What are examples of great startup names and why do they work?',
    answer: 'Stripe works because it suggests a clean, linear path (like a payment stripe) — short, memorable, and evocative. Notion works because it evokes thinking and ideas — feels smart and organized. Canva works because it\'s a blank creative space — 5 letters, easy to spell, suggests design. Slack works because it suggests casual, flexible communication — the opposite of rigid enterprise tools. Zoom works because it implies speed and connection — 4 letters, one syllable, impossible to misspell. The pattern: short, evocative, easy to spell, and suggests the benefit without being literal.',
  }
]

const nameCategories = [
  {
    title: 'Tech & SaaS',
    names: [
      'Nexova', 'Stackr', 'Codify', 'Cloudpeak', 'Vervex', 'Devflow', 'Synctide', 'Luminary', 'Buildkit', 'Celeris',
      'Quantro', 'Platforma', 'Infinitix', 'Nebulr', 'Dataforge'
    ],
  },
  {
    title: 'AI & Machine Learning',
    names: [
      'Cognivex', 'Neuralspark', 'Intellimind', 'Deepcraft', 'Synthetix', 'Aivolve', 'Brainforge', 'Modelworks', 'Predictiv', 'Trainloop',
      'Algoris', 'Mindforge', 'Datamind', 'Patternly', 'Inferkit'
    ],
  },
  {
    title: 'Fintech & Payments',
    names: [
      'Ledgrify', 'Paymint', 'Vaultex', 'Equityx', 'Cointrek', 'Finova', 'Clearpay', 'Capitaly', 'Fundbridge', 'Bankify',
      'Wealthkit', 'Investr', 'Paystream', 'Monetix', 'Richpath'
    ],
  },
  {
    title: 'Health & Wellness',
    names: [
      'Vitarise', 'Wellpath', 'Pulsekit', 'Healify', 'Mindflow', 'Bodyforge', 'Zenpeak', 'Nutrisync', 'Fitvault', 'Careloop',
      'Healthstack', 'Remedify', 'Vitalix', 'Thriveup', 'Curepath'
    ],
  },
  {
    title: 'E-Commerce & Marketplace',
    names: [
      'Marketly', 'Shelfx', 'Cartify', 'Tradely', 'Buystack', 'Vendorio', 'Shopforge', 'Merchanix', 'Pickr', 'Stockwell',
      'Buyflow', 'Goodmarket', 'Sellstream', 'Boutiquey', 'Dealsphere'
    ],
  },
  {
    title: 'Productivity & Collaboration',
    names: [
      'Taskflow', 'Rallify', 'Syncboard', 'Focusly', 'Teampeak', 'Doistly', 'Agendix', 'Workstream', 'Plannr', 'Collabra',
      'Efficio', 'Flowstate', 'Checkmark', 'Priority', 'Hiveboard'
    ],
  },
  {
    title: 'Education & EdTech',
    names: [
      'Learnstack', 'Skillforge', 'Brainpath', 'Studyly', 'Coursify', 'Edupulse', 'Graspr', 'Masteryx', 'Thinklab', 'Tutorkit',
      'Academix', 'Knowhub', 'Flashpeak', 'Mindforge', 'Learncraft'
    ],
  },
  {
    title: 'Real Estate & PropTech',
    names: [
      'Propvault', 'Estatify', 'Rentkit', 'Homeforge', 'Buildr', 'Leasely', 'Nestworks', 'Propertylab', 'Dwellox', 'Houseprism',
      'Spacebridge', 'Realtyhub', 'Plotstream', 'Keyfinder', 'Urbanix'
    ],
  },
  {
    title: 'Sustainability & Green Tech',
    names: [
      'Greenforge', 'Earthly', 'Sustainix', 'Ecopeak', 'Climatix', 'Verdant', 'Carbonkit', 'Solkraft', 'Terravox', 'Biorise',
      'Cleanstream', 'Renewly', 'Planetworks', 'Growstack', 'Netzero'
    ],
  },
  {
    title: 'Food & Beverage',
    names: [
      'Freshforge', 'Tastely', 'Bitekit', 'Cookstack', 'Plateme', 'Mealmix', 'Nourishify', 'Harvestly', 'Kitchenloop', 'Flavourx',
      'Chefcraft', 'Foodstream', 'Pantrylab', 'Savourworks', 'Menumind'
    ],
  }
]

const namingStrategies = [
  {
    name: 'The Evocative Metaphor',
    description: 'Use a word from a completely different domain that captures the feeling of your startup. This is the strategy behind most billion-dollar brands.',
    examples: [
      { name: 'Stripe', why: 'A clean, linear path through payments' },
      { name: 'Notion', why: 'Evokes thinking, ideas, and mental models' },
      { name: 'Slack', why: 'Suggests casual, flexible, easy communication' },
      { name: 'Canva', why: 'A blank creative canvas — 5 letters' },
      { name: 'Figma', why: 'Figure + sigma — design with mathematical precision' }
    ],
    strengths: ['Highly memorable', 'Rich storytelling potential', 'Room for brand evolution', 'Easy to trademark'],
    weaknesses: ['Requires marketing to build meaning', 'Risk of being too abstract', 'Harder for SEO initially'],
    bestFor: 'Startups where emotion and brand story matter more than immediate category clarity',
  },
  {
    name: 'The Compound Blend',
    description: 'Combine two short words into one seamless name. Immediately understandable and hard to forget.',
    examples: [
      { name: 'Basecamp', why: 'Base + camp — your central project hub' },
      { name: 'Dropbox', why: 'Drop + box — files you can drop anywhere' },
      { name: 'Evernote', why: 'Ever + note — notes that last forever' },
      { name: 'Facebook', why: 'Face + book — a directory of people' },
      { name: 'Shopify', why: 'Shop + ify — turn anything into a shop' }
    ],
    strengths: ['Immediately descriptive', 'Easy to understand', 'Domain-friendly (more options)', 'Strong SEO potential'],
    weaknesses: ['Can feel generic if both words are common', 'Need both words to be short', 'Many good compounds are taken'],
    bestFor: 'B2B startups, productivity tools, and products where immediate understanding drives adoption',
  },
  {
    name: 'The Short & Punchy',
    description: 'One short word, 4–6 letters, easy to type on a phone. Pure brandability with maximum memorability.',
    examples: [
      { name: 'Zoom', why: 'Speed + connection in 4 letters' },
      { name: 'Duo', why: 'Two people, one call — 3 letters' },
      { name: 'Vine', why: 'Short like the videos — 4 letters' },
      { name: 'Square', why: 'A shape that suggests fairness and solidity' },
      { name: 'Block', why: 'A building unit — fundamental and strong' }
    ],
    strengths: ['Maximum memorability', 'Perfect for mobile', 'Great for app icons', 'Easy to say and spell'],
    weaknesses: ['Hard to find available .com domains', 'May need marketing to build meaning', 'Limited SEO signal'],
    bestFor: 'Consumer startups, mobile-first products, and brands that want to own a single word',
  },
  {
    name: 'The Invented Word',
    description: 'Make up a word that sounds right. Maximum distinctiveness, zero competition, globally ownable.',
    examples: [
      { name: 'Kodak', why: 'Invented by George Eastman — he liked the letter K' },
      { name: 'Etsy', why: 'Short, catchy, sounds like "etsy" = easy' },
      { name: 'Spotify', why: 'Spot + identify — finding music' },
      { name: 'Waze', why: 'Ways + ease — easy navigation' },
      { name: 'Lululemon', why: 'Invented — sounds playful and athletic' }
    ],
    strengths: ['Completely ownable', 'No SEO competition', 'Works globally', 'Easy to trademark'],
    weaknesses: ['Requires significant marketing investment', 'No inherent meaning to anchor on', 'Harder to spell sometimes'],
    bestFor: 'Startups with marketing budget targeting global or broad audiences',
  },
  {
    name: 'The Real Word Reclaimed',
    description: 'Take a common English word and make it your brand. Works when the word has a secondary meaning that fits your product.',
    examples: [
      { name: 'Apple', why: 'Knowledge, simplicity, approachability' },
      { name: 'Amazon', why: 'Vast, enormous — the everything store' },
      { name: 'Uber', why: 'German for "over" or "super" — premium transportation' },
      { name: 'Tinder', why: 'Something that catches fire — sparking connections' },
      { name: 'Robinhood', why: 'Taking from the rich — democratizing finance' }
    ],
    strengths: ['Instantly recognizable', 'Easy to spell and say', 'Rich with associations', 'Built-in storytelling'],
    weaknesses: ['Very hard to get .com domain', 'Expensive to acquire', 'SEO competition from the dictionary word', 'Trademark challenges'],
    bestFor: 'Startups with significant funding where brand awareness is the priority',
  },
  {
    name: 'The Action Verb',
    description: 'Use a verb or verb-like word that implies action and progress. People remember doing words.',
    examples: [
      { name: 'Grubhub', why: 'Grub (food) + hub — the center of food delivery' },
      { name: 'Kickstarter', why: 'Kick + start — launching projects into motion' },
      { name: 'Shutterfly', why: 'Shutter + fly — fast photo service' },
      { name: 'Couchsurfing', why: 'Couch + surfing — staying on strangers\' couches' },
      { name: 'SoundCloud', why: 'Sound + cloud — audio in the cloud' }
    ],
    strengths: ['Implies action and utility', 'Easy to understand the benefit', 'Often has domains available', 'Strong for SEO'],
    weaknesses: ['Can sound generic', 'May limit perceived scope', 'Harder to stand out in crowded categories'],
    bestFor: 'Marketplace startups, on-demand services, and products where the action is the value proposition',
  },
  {
    name: 'The Founder Name',
    description: 'Named after a founder or character. Bold, personal, and impossible to copy.',
    examples: [
      { name: 'Ben & Jerry\'s', why: 'Two founders, one brand' },
      { name: 'Warby Parker', why: 'Two characters from Jack Kerouac novels' },
      { name: 'Huffman (Reddit)', why: 'Co-founder Steve Huffman\'s name was in the original URL' },
      { name: 'Goldman Sachs', why: 'Marcus Goldman + Samuel Sachs — partnership brand' },
      { name: 'J.P. Morgan', why: 'The founder\'s name became synonymous with finance' }
    ],
    strengths: ['Authentic and personal', 'Great for personal brands', 'Unique by definition', 'Strong founder story'],
    weaknesses: ['Hard to sell the company later', 'Doesn\'t describe what you do', 'Can create confusion in B2B', 'Founder reputation = brand reputation'],
    bestFor: 'Consulting firms, personal brands, agencies, and startups where founder credibility is the differentiator',
  }
]

const industries = [
  { name: 'Tech & SaaS', href: '/tech-name-generator' },
  { name: 'Startup', href: '/startup-name-generator' },
  { name: 'Consulting', href: '/consulting-name-generator' },
  { name: 'Coaching', href: '/coaching-name-generator' },
  { name: 'Creative & Design', href: '/craft-name-generator' },
  { name: 'Food & Beverage', href: '/food-truck-name-generator' },
  { name: 'Fitness', href: '/fitness-brand-name-generator' },
  { name: 'Real Estate', href: '/real-estate-name-generator' },
  { name: 'Photography', href: '/photography-name-generator' },
  { name: 'Education', href: '/education-name-generator' },
  { name: 'Fashion', href: '/fashion-name-generator' },
  { name: 'Beauty & Salon', href: '/salon-name-generator' },
  { name: 'Coffee', href: '/coffee-name-generator' },
  { name: 'Music', href: '/music-name-generator' },
  { name: 'Wedding', href: '/wedding-name-generator' },
  { name: 'Podcast', href: '/podcast-name-generator' },
  { name: 'Nonprofit', href: '/nonprofit-name-generator' },
  { name: 'Cleaning', href: '/cleaning-business-name-generator' },
  { name: 'Pet', href: '/pet-name-generator' },
  { name: 'Landscaping', href: '/landscaping-name-generator' },
  { name: 'Yoga', href: '/yoga-name-generator' },
  { name: 'Restaurant', href: '/restaurant-name-generator' },
  { name: 'Construction', href: '/construction-name-generator' },
  { name: 'Marketing Agency', href: '/marketing-agency-name-generator' }
]

const relatedPosts = [
  { slug: 'saas-name-generator', title: 'SaaS Name Generator: 300+ SaaS Name Ideas', excerpt: '300+ SaaS name ideas across 10 categories with strategies from top SaaS companies' },
  { slug: 'startup-naming-mistakes', title: '7 Naming Mistakes That Kill Startups', excerpt: 'The naming traps that founders fall into over and over' },
  { slug: 'app-name-generator', title: 'App Name Generator: 200+ App Name Ideas', excerpt: '200+ app name ideas and 6 naming frameworks behind hit apps' },
  { slug: 'youtube-channel-name-generator', title: 'YouTube Channel Name Generator: 300+ Channel Name Ideas', excerpt: '300+ YouTube channel name ideas and 7 naming strategies from top creators' },
  { slug: 'company-name-generator', title: 'Company Name Generator: 250+ Name Ideas', excerpt: '250+ company name ideas by industry with naming strategies' },
  { slug: 'brand-name-ideas', title: 'Brand Name Ideas: 300+ Creative Examples', excerpt: '300+ brand name ideas with naming techniques and real examples' }
]

export default function StartupNameIdeasPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <BlogPostSchema
        url="https://brandforge.app/blog/startup-name-ideas"
        title="Startup Name Ideas: 300+ Names for Startups in 2026 + Free AI Generator"
        description="300+ startup name ideas across 10 industries, 7 naming strategies behind billion-dollar startups like Stripe, Notion, and Canva, and a free AI generator that checks domain availability instantly."
        datePublished="2026-07-15T12:00:00.000Z"
        dateModified="2026-07-15T12:00:00.000Z"
        authorName="BrandForge"
        imageUrl="/opengraph-image"
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
              }
            ],
          }),
        }}
      />

      {/* Header */}
      <header className="mb-12">
        <p className="text-sm font-semibold text-brand-600 tracking-wide uppercase mb-3">Startup Naming</p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Startup Name Ideas: 300+ Names for Startups in 2026
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-3xl">
          300+ startup name ideas across 10 industries, 7 naming strategies behind billion-dollar startups like Stripe, Notion, and Canva, and a free AI tool that checks domain availability instantly.
        </p>
        <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
          <time dateTime="2026-07-15">July 15, 2026</time>
          <span>·</span>
          <span>15 min read</span>
        </div>
      </header>

      {/* CTA */}
      <div className="mb-12 rounded-2xl bg-gradient-to-br from-brand-50 via-white to-purple-50 p-6 sm:p-8 text-center border border-brand-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
          Generate Your Startup Name Free
        </h2>
        <p className="text-slate-600 mb-4">
          Get AI-powered startup name ideas with instant domain and social handle availability checks.
        </p>
        <a href="/generate" className="btn-primary text-base px-8 py-3">
          Generate Startup Names Free →
        </a>
      </div>

      {/* Name Categories */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-8">
          300+ Startup Name Ideas by Category
        </h2>
        <p className="text-slate-600 mb-8">
          Browse startup name ideas organized by industry. Each name follows the naming principles we break down below — short, memorable, and ownable.
        </p>
        <div className="space-y-8">
          {nameCategories.map((category) => (
            <div key={category.title} className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.names.map((name) => (
                  <span key={name} className="inline-flex items-center rounded-lg bg-brand-50 px-3 py-1.5 text-sm font-medium text-brand-700 hover:bg-brand-100 transition-colors">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Naming Strategies */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4">
          7 Startup Naming Strategies (with Billion-Dollar Examples)
        </h2>
        <p className="text-slate-600 mb-8">
          The best startup names aren't random — they follow repeatable patterns. Here are the 7 strategies that produced Stripe, Notion, Slack, and other iconic brands.
        </p>
        <div className="space-y-10">
          {namingStrategies.map((strategy, idx) => (
            <div key={strategy.name} className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
              <div className="bg-gradient-to-r from-brand-600 to-purple-600 p-6 text-white">
                <p className="text-sm font-medium text-brand-200 mb-1">Strategy {idx + 1}</p>
                <h3 className="text-xl font-bold">{strategy.name}</h3>
                <p className="mt-2 text-brand-100">{strategy.description}</p>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Real Examples</p>
                  <div className="space-y-3">
                    {strategy.examples.map((example) => (
                      <div key={example.name} className="flex items-start gap-3">
                        <span className="inline-flex items-center justify-center rounded-lg bg-brand-50 px-2.5 py-1 text-sm font-bold text-brand-700 flex-shrink-0">
                          {example.name}
                        </span>
                        <span className="text-sm text-slate-600">{example.why}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div>
                    <p className="text-sm font-semibold text-emerald-600 mb-2">✓ Strengths</p>
                    <ul className="space-y-1">
                      {strategy.strengths.map((s) => (
                        <li key={s} className="text-sm text-slate-600">• {s}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-amber-600 mb-2">⚠ Watch Out</p>
                    <ul className="space-y-1">
                      {strategy.weaknesses.map((w) => (
                        <li key={w} className="text-sm text-slate-600">• {w}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="mt-4 text-sm text-slate-500">
                  <span className="font-semibold text-slate-700">Best for:</span> {strategy.bestFor}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5-Step Naming Process */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4">
          How to Name Your Startup in 5 Steps
        </h2>
        <p className="text-slate-600 mb-8">
          Follow this proven process to find a name that's memorable, available, and built to scale.
        </p>
        <div className="space-y-6">
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <div className="flex items-start gap-4">
              <span className="inline-flex items-center justify-center rounded-full bg-brand-600 text-white text-sm font-bold w-8 h-8 flex-shrink-0">1</span>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Define Your Startup's Personality</h3>
                <p className="mt-2 text-slate-600">List 5 adjectives that describe your startup's vibe. Is it fast? Trustworthy? Playful? Premium? These adjectives become your naming filters. Stripe feels premium and clean. Notion feels smart and organized. Slack feels casual and flexible. Your name should match your personality — if your startup is playful, a serious name won't work.</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <div className="flex items-start gap-4">
              <span className="inline-flex items-center justify-center rounded-full bg-brand-600 text-white text-sm font-bold w-8 h-8 flex-shrink-0">2</span>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Generate 50+ Name Ideas Across All Strategies</h3>
                <p className="mt-2 text-slate-600">Use all 7 naming strategies to brainstorm. Try evocative metaphors, compound blends, short words, invented words, real words, action verbs, and founder names. Generate at least 7 names per strategy — quantity leads to quality. <a href="/generate" className="text-brand-600 hover:text-brand-700 font-medium">Use BrandForge's AI generator →</a></p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <div className="flex items-start gap-4">
              <span className="inline-flex items-center justify-center rounded-full bg-brand-600 text-white text-sm font-bold w-8 h-8 flex-shrink-0">3</span>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Filter to Your Top 10</h3>
                <p className="mt-2 text-slate-600">Apply the 6-rule filter: (1) Under 3 syllables, (2) Easy to spell on the first try, (3) Easy to say in a sentence, (4) No hyphens or numbers, (5) Fits your personality, (6) Not easily confused with an existing startup. If a name fails any rule, cut it. This should get you from 50+ names to about 10.</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <div className="flex items-start gap-4">
              <span className="inline-flex items-center justify-center rounded-full bg-brand-600 text-white text-sm font-bold w-8 h-8 flex-shrink-0">4</span>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Validate Availability</h3>
                <p className="mt-2 text-slate-600">Check your top 10 for: (1) .com domain availability, (2) USPTO trademark search at tmsearch.uspto.gov, (3) Social media handle availability on Twitter/X, Instagram, LinkedIn, and TikTok, (4) Google your name + "startup" or "company" to verify no one's already using it. BrandForge checks domain and social availability automatically. <a href="/generate" className="text-brand-600 hover:text-brand-700 font-medium">Try it free →</a></p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <div className="flex items-start gap-4">
              <span className="inline-flex items-center justify-center rounded-full bg-brand-600 text-white text-sm font-bold w-8 h-8 flex-shrink-0">5</span>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Test with Real People</h3>
                <p className="mt-2 text-slate-600">Say your top 3–5 names to 10 people and ask: (1) Can you spell it after hearing it once? (2) What does it make you think of? (3) Would you trust a startup with this name? The name that passes all three tests wins. Don't skip this — your intuition as a founder will mislead you. Get real reactions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Startup vs Company vs Product Naming */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4">
          Startup vs. Company vs. Product Naming: What's Different?
        </h2>
        <p className="text-slate-600 mb-6">
          Startup naming has unique constraints that company and product naming don't. Here's what changes:
        </p>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900">Factor</th>
                <th className="px-4 py-3 font-semibold text-slate-900">Startup Naming</th>
                <th className="px-4 py-3 font-semibold text-slate-900">Company Naming</th>
                <th className="px-4 py-3 font-semibold text-slate-900">Product Naming</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="px-4 py-3 font-medium text-slate-900">Goal</td>
                <td className="px-4 py-3 text-slate-600">Memorable + ownable + scalable</td>
                <td className="px-4 py-3 text-slate-600">Professional + credible + clear</td>
                <td className="px-4 py-3 text-slate-600">Descriptive + appealing + searchable</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-slate-900">Ideal length</td>
                <td className="px-4 py-3 text-slate-600">1–2 syllables, 4–8 chars</td>
                <td className="px-4 py-3 text-slate-600">1–4 syllables, longer OK</td>
                <td className="px-4 py-3 text-slate-600">1–3 syllables, 4–12 chars</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-slate-900">Best style</td>
                <td className="px-4 py-3 text-slate-600">Evocative or invented</td>
                <td className="px-4 py-3 text-slate-600">Descriptive or compound</td>
                <td className="px-4 py-3 text-slate-600">Suggestive or metaphorical</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-slate-900">Domain priority</td>
                <td className="px-4 py-3 text-slate-600">.com preferred, .co/.io acceptable</td>
                <td className="px-4 py-3 text-slate-600">.com required</td>
                <td className="px-4 py-3 text-slate-600">.com preferred, .app/.io OK</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-slate-900">Must work in</td>
                <td className="px-4 py-3 text-slate-600">Pitch deck, tweet, app icon, 1-line bio</td>
                <td className="px-4 py-3 text-slate-600">Website, email, legal docs, business card</td>
                <td className="px-4 py-3 text-slate-600">Website, packaging, ad copy, app store</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-slate-900">Scalability</td>
                <td className="px-4 py-3 text-slate-600">Must — startups pivot often</td>
                <td className="px-4 py-3 text-slate-600">Nice to have — companies are stable</td>
                <td className="px-4 py-3 text-slate-600">Product-specific is fine</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Naming Mistakes */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4">
          7 Startup Naming Mistakes That Kill Growth
        </h2>
        <p className="text-slate-600 mb-8">
          These mistakes are common — and expensive. Learn from the startups that got them wrong.
        </p>
        <div className="space-y-4">
          <div className="rounded-xl border border-red-100 bg-red-50 p-6">
            <h3 className="font-bold text-red-900 mb-1">❌ Picking a Name That's Hard to Spell</h3>
            <p className="text-sm text-red-800">If someone can't type your name after hearing it once, they'll never find you. "Xytify" might look cool, but it's a spelling minefield. Instead: <span className="font-semibold">Use the "phone test" — say it once, ask someone to spell it. If they get it wrong, pick another name.</span></p>
          </div>
          <div className="rounded-xl border border-red-100 bg-red-50 p-6">
            <h3 className="font-bold text-red-900 mb-1">❌ Being Too Descriptive</h3>
            <p className="text-sm text-red-800">"TaskManager Pro" and "CloudSync Solutions" describe what you do, but they're forgettable and hard to trademark. The best startup names suggest rather than describe. Instead: <span className="font-semibold">Pick a name that evokes the feeling, not the feature.</span> Slack doesn't say "chat," Stripe doesn't say "payments," Notion doesn't say "notes."</p>
          </div>
          <div className="rounded-xl border border-red-100 bg-red-50 p-6">
            <h3 className="font-bold text-red-900 mb-1">❌ Choosing a Name Too Similar to a Competitor</h3>
            <p className="text-sm text-red-800">Naming your fintech startup "Strype" or "Stripes" is asking for a trademark lawsuit and user confusion. Instead: <span className="font-semibold">Differentiate.</span> If every competitor in your space uses "-ify" or "-ly," go the opposite direction. Distinctiveness is your competitive advantage.</p>
          </div>
          <div className="rounded-xl border border-red-100 bg-red-50 p-6">
            <h3 className="font-bold text-red-900 mb-1">❌ Using Hyphens, Numbers, or Intentional Misspellings</h3>
            <p className="text-sm text-red-800">"Fyre," "Lyfe," "N3xt" — these look edgy on paper, but people will type "Fire," "Life," and "Next" when they search for you. You'll permanently lose traffic to the correctly-spelled version. Instead: <span className="font-semibold">Choose a name that has exactly one correct spelling.</span></p>
          </div>
          <div className="rounded-xl border border-red-100 bg-red-50 p-6">
            <h3 className="font-bold text-red-900 mb-1">❌ Naming for Your First Product, Not Your Vision</h3>
            <p className="text-sm text-red-800">"PhotoFilterApp" is great if you'll always be a photo filter. But startups pivot. Instagram started as "Burbn" (a check-in app) — good thing they didn't name it CheckInApp. Instead: <span className="font-semibold">Name the transformation, not the feature.</span> Think about where you'll be in 5 years, not what you're building this quarter.</p>
          </div>
          <div className="rounded-xl border border-red-100 bg-red-50 p-6">
            <h3 className="font-bold text-red-900 mb-1">❌ Skipping the Availability Check</h3>
            <p className="text-sm text-red-800">Falling in love with a name before checking domain, trademark, and social availability is the #1 time-waster in naming. Instead: <span className="font-semibold">Check availability before you get attached.</span> BrandForge checks domain and social handles automatically — <a href="/generate" className="text-red-700 hover:text-red-800 underline">try it free</a>.</p>
          </div>
          <div className="rounded-xl border border-red-100 bg-red-50 p-6">
            <h3 className="font-bold text-red-900 mb-1">❌ Not Checking International Meanings</h3>
            <p className="text-sm text-red-800">Your startup name might mean something offensive or absurd in another language. The Chevy Nova = "no va" = "no go" in Spanish is the classic example. Instead: <span className="font-semibold">Google your top names + "meaning in [language]"</span> for the 10 most spoken languages before committing.</p>
          </div>
        </div>
      </section>

      {/* Industry-Specific Generators */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4">
          Industry-Specific Name Generators
        </h2>
        <p className="text-slate-600 mb-6">
          Already know your industry? Get name ideas tailored to your niche:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {industries.map((industry) => (
            <Link
              key={industry.href}
              href={industry.href}
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:border-brand-300 hover:text-brand-600 transition-colors text-center"
            >
              {industry.name}
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-16">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-8">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-600 mb-8">
          Common questions about startup naming, answered.
        </p>
        <div className="space-y-4">
          {FAQ_ITEMS.map((faq, i) => (
            <details key={i} className="group rounded-2xl border border-slate-200 bg-white">
              <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-base font-semibold text-slate-900 hover:bg-slate-50 transition-colors rounded-2xl">
                {faq.question}
                <svg
                  className="h-5 w-5 text-slate-500 flex-shrink-0 ml-4 transition-transform duration-200 group-open:rotate-180"
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
      <div className="mb-12 rounded-2xl bg-slate-50 p-6">
        <p className="text-sm font-semibold text-slate-900 mb-3">📖 More naming guides:</p>
        <ul className="space-y-2">
          {relatedPosts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="text-brand-600 hover:text-brand-700 text-sm">
                {post.title} →
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="rounded-2xl bg-gradient-to-br from-brand-600 to-purple-600 p-8 sm:p-10 text-center text-white">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">
          Ready to Name Your Startup?
        </h2>
        <p className="text-brand-100 mb-6 max-w-xl mx-auto">
          Get AI-powered startup name ideas with instant domain and social handle availability checks. Free to start, no credit card required.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/generate" className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-brand-700 hover:bg-brand-50 transition-colors">
            Generate Startup Names Free →
          </a>
          <a href="/pricing" className="inline-flex items-center rounded-lg border-2 border-white/30 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition-colors">
            View Pricing
          </a>
        </div>
      </div>

      <BlogNewsletterSection />
    </div>
  )
}