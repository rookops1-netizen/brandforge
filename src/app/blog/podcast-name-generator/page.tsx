/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import { BlogNewsletterSection } from '@/components/BlogNewsletterSection'
import { BlogPostSchema } from '@/components/BlogPostSchema'

export const dynamic = 'force-static'
export const metadata: Metadata = {
  title: 'Podcast Name Generator: 300+ Podcast Name Ideas for 2026 + Free AI Tool',
  description: '300+ podcast name ideas across 10 content categories, 7 proven naming strategies used by top podcasts, and a free AI generator that checks domain and social handle availability instantly.',
  keywords: [
    'podcast name generator',
    'podcast name ideas',
    'podcast names',
    'how to name a podcast',
    'podcast naming tips',
    'creative podcast names',
    'best podcast names',
    'cool podcast names',
    'podcast name ideas 2026',
    'unique podcast names',
    'podcast show name ideas',
    'podcast title generator',
    'catchy podcast names',
    'podcast branding guide',
    'podcast naming guide',
  ],
  openGraph: {
    title: 'Podcast Name Generator: 300+ Podcast Name Ideas for 2026 + Free AI Tool',
    description: '300+ podcast name ideas by category, 7 naming strategies from top podcasts like Serial and The Daily, and a free AI generator with domain and handle checks.',
    url: 'https://brandforge.app/blog/podcast-name-generator',
    siteName: 'BrandForge',
    type: 'article',
    publishedTime: '2026-07-27T12:00:00.000Z',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Podcast Name Generator: 300+ Podcast Name Ideas for 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Podcast Name Generator: 300+ Podcast Name Ideas for 2026',
    description: '300+ podcast name ideas by category, 7 naming strategies from top podcasts, and a free AI generator that checks handle availability.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: 'https://brandforge.app/blog/podcast-name-generator',
  },
  robots: { index: true, follow: true },
}

const FAQ_ITEMS = [
  {
    question: 'How do I come up with a good name for my podcast?',
    answer: 'Start by defining your podcast\'s niche, tone, and target audience. Then use BrandForge\'s AI podcast name generator to get tailored suggestions instantly. Follow this process: (1) write down 5 adjectives that describe your show\'s personality, (2) generate 30+ names across different naming styles (descriptive, evocative, compound, personal, etc.), (3) filter to your top 10 using the "3 AM test" — could someone spell your name after hearing it once at 3 AM?, (4) check domain availability and social handle consistency using BrandForge\'s built-in checker, (5) test your top 3 with 5 people in your target audience. The best podcast names are short (2-4 words), memorable, and hint at your topic without being generic.',
  },
  {
    question: 'What makes a good podcast name?',
    answer: 'Great podcast names share these qualities: (1) Short — 2-3 words max, easy to say in one breath (Serial, The Daily, Radiolab), (2) Memorable — sticks after one mention, (3) Easy to spell — if someone hears it, they can search for it, (4) Distinctive — doesn\'t blend in with hundreds of similar names in your niche, (5) Scalable — doesn\'t lock you into one narrow topic or guest format, (6) Available — the .com domain, Apple Podcasts listing, and social handles are all free. The pattern behind hits like "Serial," "The Daily," and "Radiolab"? One strong concept word, or "The" + a concept word. Short and evocative always beats long and descriptive.',
  },
  {
    question: 'Should my podcast name include my niche keyword?',
    answer: 'Including a niche keyword can help discoverability in the early days, but it\'s a tradeoff. Shows like "TechStuff" and "Marketing School" benefit from keyword clarity — listeners immediately know the topic. But shows like "Serial," "Radiolab," and "Revisionist History" grew massive without niche keywords. If you include a niche keyword: (1) make sure it won\'t limit you if your show evolves, (2) keep it short — "Marketing School" works but "Digital Marketing Tips Daily" doesn\'t, (3) pair it with a distinctive modifier word. A good compromise: an evocative first word + niche word (TechStuff, Marketing School, Science Vs).',
  },
  {
    question: 'How do I check if a podcast name is available?',
    answer: 'Check five things before committing to a name: (1) Apple Podcasts search — type the name and see if shows already use it, (2) Spotify search — check for duplicates there too, (3) Domain availability — use BrandForge\'s built-in checker to verify the .com is available for your podcast website, (4) Social handles — check @yourpodcastname on Instagram, X, and TikTok for consistency, (5) Google the name + "podcast" — see if someone\'s already using it in any form. BrandForge checks domain and social availability automatically during name generation. Do these checks before you get attached to a name — falling in love with an unavailable name is the #1 time-waster in podcast naming.',
  },
  {
    question: 'What are the most popular podcast naming styles?',
    answer: 'The 7 most effective podcast naming strategies are: (1) Evocative — creates a feeling without being literal (Serial, Radiolab, S-Town), (2) Compound — two words combined for new meaning (TechStuff, BusinessWars, CrimeJunkie), (3) "The" + Concept — creates authority and memorability (The Daily, The Dropout, The Pitch), (4) Descriptive — clearly signals your topic (Marketing School, Science Vs), (5) Personal Name — uses the host\'s name or identity (The Joe Rogan Experience, Conan O\'Brien Needs A Friend), (6) Question/Action — poses a question or command (How I Built This, StartUp, Call Her Daddy), (7) Invented — a made-up word or phrase (Radiolab, Revisionist History). Most top shows combine 2 strategies.',
  },
  {
    question: 'Can I rename my podcast later?',
    answer: 'Yes, but it\'s disruptive and should be avoided if possible. When you rename a podcast: (1) your RSS feed URL may change, which can break subscriptions, (2) existing reviews and ratings sometimes don\'t transfer, (3) listeners may not recognize the new name in their feed, (4) SEO authority built under the old name is disrupted, (5) you\'ll need to update your cover art, website, social profiles, and everywhere else the old name appears. The cost: it can take 3-6 months to recover your search rankings. If you must rename, do it before 500 downloads per episode when the disruption is minimal. Otherwise, invest 2 days now in getting the name right.',
  },
  {
    question: 'What podcast naming mistakes should I avoid?',
    answer: 'The 6 biggest podcast naming mistakes: (1) Too long — "The Ultimate Entrepreneurial Business Development Podcast" won\'t display fully in apps and is impossible to remember. Aim for 2-4 words max. (2) Generic titles — "Business Talk" and "Tech Chat" are impossible to rank for and forgettable. (3) Inside jokes — names that only make sense to you alienate potential new listeners. (4) Hard to spell — if someone can\'t type your name after hearing it, they can\'t find you. (5) Too similar to hit shows — naming your show "Crime Time" when "Crime Junkie" exists means you\'ll always be confused for the other show. (6) Using dates or years — "Marketing 2026" ages immediately and limits your show\'s lifespan.',
  },
  {
    question: 'Should my podcast name match my domain and social handles?',
    answer: 'Absolutely — consistency is critical for building a podcast brand. Here\'s why: (1) Listeners search for your show name on Apple Podcasts, Spotify, Google, Instagram, and your website — if the name varies across platforms, they may not find you, (2) Consistent branding builds trust — if your show is "Signal & Noise" but your Instagram is @signalandnoisepod and your website is signalnoiseshow.com, people get confused, (3) Social algorithms favor consistent naming — it\'s easier to build authority when all profiles match. Before you commit to a name, use BrandForge\'s domain and social handle checker to make sure the .com, @handle, and podcast listing are all available under the same name. If they\'re not, pick a different name.',
  },
]

const nameCategories = [
  {
    title: 'True Crime & Mystery',
    names: [
      'Dark Frequency', 'The Cold Trail', 'Unseen Evidence', 'Shadow File', 'The Last Witness',
      'Cold Case Theory', 'The Black Door', 'Signal Lost', 'The Silence Project', 'Under Cover Dark',
      'The Evidence Room', 'Blind Spot', 'The Cold Light', 'Night Frequency', 'The Unresolved',
      'Case Theory', 'Dark Archive', 'The Hidden Thread', 'Cold Reading', 'Blind Verdict',
    ],
  },
  {
    title: 'Business & Entrepreneurship',
    names: [
      'The Growth Lab', 'Scale Theory', 'The Founder Shift', 'Profit Protocol', 'The Build Loop',
      'Venture Shift', 'The Capital Engine', 'Growth Framework', 'The Founder Lens', 'Stack Theory',
      'The Profit Shift', 'Scale Lab', 'The Builder Co.', 'The Revenue Loop', 'Momentum Theory',
      'The Edge Method', 'Founder Logic', 'The Startup Shift', 'Scale Protocol', 'The Growth Engine',
    ],
  },
  {
    title: 'Health & Wellness',
    names: [
      'The Wellness Shift', 'Body Protocol', 'The Mind Lab', 'Vital Theory', 'The Health Loop',
      'Well Framework', 'The Balance Shift', 'Core Protocol', 'The Wellness Lens', 'Form & Function',
      'The Vital Method', 'Mind Shift', 'The Health Theory', 'Wellness Engine', 'The Recovery Lab',
      'Peak Protocol', 'The Mindful Shift', 'Breath Theory', 'The Wellness Forge', 'Body Logic',
    ],
  },
  {
    title: 'Technology & Science',
    names: [
      'The Byte Shift', 'Neural Theory', 'The Code Lab', 'Signal Protocol', 'The Tech Lens',
      'Circuit Theory', 'The Data Shift', 'Quantum Framework', 'The Innovation Loop', 'Tech Protocol',
      'The Logic Engine', 'Future Shift', 'The Algorithm', 'Digital Theory', 'The Next Protocol',
      'The Tech Forge', 'Cipher Theory', 'The Dev Shift', 'Binary Lens', 'The Code Protocol',
    ],
  },
  {
    title: 'Comedy & Entertainment',
    names: [
      'The Punchline Lab', 'Laugh Theory', 'The Comedy Shift', 'Joke Protocol', 'The Fun Loop',
      'Gag Theory', 'The Satire Engine', 'Comedy Forge', 'The Bit Shift', 'The Irony Lab',
      'Funny Protocol', 'The Laugh Lens', 'The Chuckle Co.', 'Humor Theory', 'The Comedy Loop',
      'Bit Forge', 'The Punchline Shift', 'LOL Protocol', 'The Joke Engine', 'The Comedy Lab',
    ],
  },
  {
    title: 'Education & Learning',
    names: [
      'The Knowledge Lab', 'Learn Theory', 'The Insight Shift', 'Skill Protocol', 'The Study Loop',
      'Brain Framework', 'The Learn Engine', 'Clarity Theory', 'The Method Lab', 'Smart Protocol',
      'The Thinking Shift', 'The Insight Loop', 'Wisdom Theory', 'The Study Protocol', 'Learn Forge',
      'The Bright Shift', 'Knowledge Engine', 'The Skill Lab', 'Think Protocol', 'The Insight Engine',
    ],
  },
  {
    title: 'Storytelling & Narrative',
    names: [
      'The Story Lab', 'Narrative Theory', 'The Tale Shift', 'Story Protocol', 'The Plot Loop',
      'Myth Framework', 'The Story Engine', 'Chapter Theory', 'The Narrative Shift', 'The Tale Co.',
      'Arc Theory', 'The Story Lens', 'The Unfold Lab', 'Story Forge', 'The Chapter Protocol',
      'The Plot Shift', 'Tale Engine', 'The Story Loop', 'Thread Theory', 'The Narrative Lab',
    ],
  },
  {
    title: 'Sports & Fitness',
    names: [
      'The Play Shift', 'Athletic Theory', 'The Game Lab', 'Performance Protocol', 'The Sports Loop',
      'Form Framework', 'The Athletic Shift', 'Power Theory', 'The Game Engine', 'Peak Protocol',
      'The Playbook', 'Drive Theory', 'The Fitness Shift', 'Iron Protocol', 'The Champion Lab',
      'Grit Theory', 'The Sports Shift', 'Endurance Protocol', 'The Arena', 'The Motion Lab',
    ],
  },
  {
    title: 'Politics & Current Events',
    names: [
      'The Signal', 'The Briefing Lab', 'Civic Theory', 'The Policy Shift', 'Current Protocol',
      'The Front Page', 'Democracy Theory', 'The Debate Shift', 'The Lens Co.', 'Source Protocol',
      'The Civic Loop', 'Power Theory', 'The Headline Engine', 'The Vote Shift', 'The Briefing Protocol',
      'The Public Lens', 'Forum Theory', 'The Angle', 'The Current Lab', 'The Dispatch',
    ],
  },
  {
    title: 'Relationships & Lifestyle',
    names: [
      'The Connection Lab', 'Life Theory', 'The Relationship Shift', 'Heart Protocol', 'The Living Loop',
      'Balance Framework', 'The Life Shift', 'Love Theory', 'The Connection Co.', 'The Honest Lens',
      'The Bond Shift', 'Purpose Theory', 'The Life Engine', 'The Daily Shift', 'Glow Protocol',
      'The Honest Loop', 'Life Forge', 'The Connection Protocol', 'Real Theory', 'The Life Lab',
    ],
  },
]

const namingStrategies = [
  {
    name: 'Evocative',
    emoji: '✨',
    description: 'Creates a feeling or identity without being literal — the most popular style among hit podcasts',
    examples: ['Serial', 'Radiolab', 'S-Town', 'Revisionist History', 'The Dropout'],
    bestFor: 'Narrative and storytelling shows — evocative names create intrigue and make people curious enough to click',
    howToUse: 'Pick a word that captures the feeling of your content. "Serial" suggests something ongoing and addictive. "Radiolab" sounds experimental and exploratory. "S-Town" evokes mystery. Say your name idea out loud — if it sounds like a brand, not a keyword, you\'re on the right track.',
  },
  {
    name: '"The" + Concept',
    emoji: '🎙️',
    description: '"The" followed by a strong concept word — creates authority and memorability',
    examples: ['The Daily', 'The Pitch', 'The Tim Ferriss Show', 'The Joe Rogan Experience'],
    bestFor: 'Authority-building shows — the "The" signals this is THE definitive show on the topic',
    howToUse: 'Pair "The" with a concept word that captures your show\'s core idea. "The Daily" = news every day. "The Pitch" = founders pitching investors. The concept word should be 1-2 syllables and instantly recognizable. Avoid "The [Your Name] Show" unless your name is already well-known.',
  },
  {
    name: 'Compound',
    emoji: '🔗',
    description: 'Two words combined to create a new meaning',
    examples: ['TechStuff', 'BusinessWars', 'CrimeJunkie', 'SmartLess', 'ScienceVs'],
    bestFor: 'Niche podcasts that want clear positioning — the compound word signals your topic while staying memorable',
    howToUse: 'Combine a niche word with an action or identity word. "Crime" + "Junkie" = true crime for obsessed fans. "Business" + "Wars" = corporate drama. "Smart" + "Less" = learning made simple. Think about what your content DOES, not just what it\'s ABOUT.',
  },
  {
    name: 'Question / Action',
    emoji: '❓',
    description: 'Poses a question or command that hooks curiosity',
    examples: ['How I Built This', 'StartUp', 'Call Her Daddy', 'Reply All', 'What\'s Good with Stretch'],
    bestFor: 'Interview and how-to shows — the question/action format immediately communicates your show\'s value proposition',
    howToUse: 'Frame your show as an answer to a question your audience is already asking. "How I Built This" = you\'ll hear startup stories. "StartUp" = the journey of starting something. "Reply All" = internet culture explained. The key: make it something your audience would actually type into a search bar.',
  },
  {
    name: 'Descriptive',
    emoji: '🏷️',
    description: 'Clearly signals your topic so listeners know exactly what they\'re getting',
    examples: ['Marketing School', 'The Art of Charm', 'Freakonomics Radio', 'The School of Greatness'],
    bestFor: 'New podcasts that need every discovery advantage — descriptive names help Apple Podcasts and Spotify algorithms match you with the right listeners',
    howToUse: 'Combine your niche with a power word. "Marketing" + "School" = structured marketing lessons. "The Art of" + "Charm" = social skills mastery. Make sure the descriptive word is broad enough to allow growth (Marketing School works even if you cover entrepreneurship and sales too).',
  },
  {
    name: 'Personal Name',
    emoji: '👤',
    description: 'Uses the host\'s name or identity — builds a personal brand',
    examples: ['The Joe Rogan Experience', 'Conan O\'Brien Needs A Friend', 'The Tim Ferriss Show', 'Armchair Expert with Dax Shepard'],
    bestFor: 'Host-driven shows where the personality IS the content — interview shows, personal brands, and solo commentary',
    howToUse: 'Use your real name if it\'s distinctive, or pair it with a memorable phrase. "Conan O\'Brien Needs A Friend" works because it\'s personal AND funny. "Armchair Expert" works because it\'s evocative of casual conversation. Don\'t just use your name — add something that tells people what they\'ll get.',
  },
  {
    name: 'Invented / Metaphor',
    emoji: '💡',
    description: 'A made-up word or metaphorical name that\'s unique and brandable',
    examples: ['Radiolab', 'Revisionist History', '99% Invisible', 'Hidden Brain', 'Throughline'],
    bestFor: 'Shows that want to build a media brand beyond just a podcast — invented names are ownable and can expand into books, TV, and merchandise',
    howToUse: 'Create a word or phrase that captures your show\'s essence metaphorically. "99% Invisible" = design you don\'t notice. "Hidden Brain" = unconscious psychology. "Throughline" = connecting past to present. The test: if someone googles your name, nothing else should come up. That means you own it.',
  },
]

const industries = [
  { name: 'Startup', href: '/startup-name-generator' },
  { name: 'Restaurant', href: '/restaurant-name-generator' },
  { name: 'Fashion', href: '/fashion-name-generator' },
  { name: 'Beauty & Salon', href: '/salon-name-generator' },
  { name: 'Coffee', href: '/coffee-name-generator' },
  { name: 'Tech & SaaS', href: '/tech-name-generator' },
  { name: 'Fitness', href: '/fitness-brand-name-generator' },
  { name: 'Real Estate', href: '/real-estate-name-generator' },
  { name: 'Photography', href: '/photography-name-generator' },
  { name: 'Music', href: '/music-name-generator' },
  { name: 'Food Truck', href: '/food-truck-name-generator' },
  { name: 'Coaching', href: '/coaching-name-generator' },
  { name: 'Podcast', href: '/podcast-name-generator' },
  { name: 'Consulting', href: '/consulting-name-generator' },
  { name: 'Education', href: '/education-name-generator' },
  { name: 'Craft', href: '/craft-name-generator' },
  { name: 'Yoga', href: '/yoga-name-generator' },
  { name: 'Wedding', href: '/wedding-name-generator' },
  { name: 'Cleaning', href: '/cleaning-business-name-generator' },
  { name: 'Pet', href: '/pet-name-generator' },
  { name: 'Landscaping', href: '/landscaping-name-generator' },
  { name: 'Salon', href: '/salon-name-generator' },
  { name: 'Construction', href: '/construction-name-generator' },
  { name: 'Marketing Agency', href: '/marketing-agency-name-generator' },
  { name: 'Domain Name', href: '/domain-name-generator' },
]

const relatedPosts = [
  { slug: 'how-to-choose-brand-name', title: 'How to Choose a Brand Name in 2026', excerpt: 'The complete decision framework for picking a brand name that sticks.' },
  { slug: 'brand-name-ideas', title: 'Brand Name Ideas: 300+ Creative Examples', excerpt: 'The ultimate collection of brand name ideas across 10 categories.' },
  { slug: 'youtube-channel-name-generator', title: 'YouTube Channel Name Generator: 300+ Ideas', excerpt: 'Naming strategies from top YouTubers and 300+ channel name ideas.' },
  { slug: 'blog-name-generator', title: 'Blog Name Generator: 250+ Blog Name Ideas', excerpt: '250+ blog name ideas across 10 niches, 7 naming strategies from top bloggers.' },
  { slug: 'catchy-brand-names', title: 'Catchy Brand Names: 250+ Memorable Ideas', excerpt: '7 proven naming formulas that make names stick.' },
  { slug: 'brand-name-availability-checker', title: 'Brand Name Availability Checker', excerpt: 'How to verify your brand name is available — domain, trademark, social, and state registration.' },
]

export default function PodcastNameGeneratorPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <BlogPostSchema
        title="Podcast Name Generator: 300+ Podcast Name Ideas for 2026 + Free AI Tool"
        description="300+ podcast name ideas across 10 content categories, 7 proven naming strategies used by top podcasts like Serial and The Daily, and a free AI generator that checks domain and social handle availability instantly."
        url="https://brandforge.app/blog/podcast-name-generator"
        datePublished="2026-07-27"
        dateModified="2026-07-27"
      />
      {/* FAQ Schema for rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQ_ITEMS.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <Link href="/blog" className="text-sm text-brand-600 hover:text-brand-700 transition-colors">← Blog</Link>
          <span className="text-slate-300">·</span>
          <span className="text-sm text-slate-500">Naming</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Podcast Name Generator: 300+ Podcast Name Ideas for 2026 + Free AI Tool
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-3xl">
          300+ podcast name ideas across 10 content categories, 7 naming strategies used by top podcasts like <strong>Serial</strong>, <strong>The Daily</strong>, and <strong>Radiolab</strong>, and a free AI generator that checks domain and social handle availability instantly.
        </p>
        <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
          <time dateTime="2026-07-27">July 27, 2026</time>
          <span>·</span>
          <span>15 min read</span>
        </div>
      </header>

      {/* CTA - Generate */}
      <div className="mb-12 rounded-2xl bg-gradient-to-br from-brand-600 to-purple-700 p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Generate Your Podcast Name Now</h2>
        <p className="text-brand-100 mb-6 max-w-xl mx-auto">
          Describe your podcast and get AI-powered name suggestions with instant domain and social handle availability checks.
        </p>
        <Link
          href="/generate"
          className="inline-flex items-center rounded-full bg-white px-8 py-3 text-base font-semibold text-brand-700 shadow-lg hover:bg-brand-50 transition-colors"
        >
          Try Free Podcast Name Generator →
        </Link>
      </div>

      {/* Name Ideas by Category */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">300+ Podcast Name Ideas by Category</h2>
        <p className="text-slate-600 mb-8">
          Browse podcast name ideas organized by content type. Find the right style for your show, then use our AI generator to create variations and check availability.
        </p>
        <div className="space-y-8">
          {nameCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.names.map((name) => (
                  <span
                    key={name}
                    className="inline-block rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-sm font-medium text-brand-700 hover:bg-brand-100 transition-colors cursor-default"
                  >
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
        <h2 className="text-3xl font-bold text-slate-900 mb-2">7 Podcast Naming Strategies (With Examples from Hit Shows)</h2>
        <p className="text-slate-600 mb-8">
          The most popular podcasts in the world don&rsquo;t pick names randomly. They use these 7 proven naming strategies — and you can too.
        </p>
        <div className="space-y-8">
          {namingStrategies.map((strategy) => (
            <div key={strategy.name} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{strategy.emoji}</span>
                <h3 className="text-xl font-bold text-slate-900">{strategy.name}</h3>
              </div>
              <p className="text-slate-600 mb-4">{strategy.description}</p>
              <div className="mb-4">
                <p className="text-sm font-medium text-slate-500 mb-2">Real examples:</p>
                <div className="flex flex-wrap gap-2">
                  {strategy.examples.map((example) => (
                    <span key={example} className="inline-block rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                      {example}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-slate-500 mb-2"><strong>Best for:</strong> {strategy.bestFor}</p>
              <p className="text-sm text-slate-600">{strategy.howToUse}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5-Step Naming Process */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">5 Steps to Name Your Podcast (With the &ldquo;Car Test&rdquo;)</h2>
        <p className="text-slate-600 mb-8">
          Don&rsquo;t just brainstorm — follow a process that produces names people can actually remember and find.
        </p>
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white font-bold">1</span>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Define Your Podcast&rsquo;s Personality</h3>
                <p className="text-slate-600">Write down 5 adjectives that describe your show&rsquo;s vibe. Is it authoritative? Casual? Funny? Investigative? Conversational? These adjectives become your naming filter — every name candidate should match at least 3 of them. <strong>Example:</strong> If your adjectives are &ldquo;bold, investigative, urgent, smart, surprising&rdquo; — a name like &ldquo;The Cold Trail&rdquo; works. &ldquo;Cozy Chat Time&rdquo; doesn&rsquo;t.</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white font-bold">2</span>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Generate 30+ Names Across All 7 Strategies</h3>
                <p className="text-slate-600">Don&rsquo;t limit yourself to one style. Use our AI generator to produce names across all 7 naming strategies: Evocative, &ldquo;The&rdquo; + Concept, Compound, Question/Action, Descriptive, Personal, and Invented. The more options you have, the better your final pick will be. <strong>Pro tip:</strong> Generate at least 5 names per strategy — quantity leads to quality.</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white font-bold">3</span>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Apply the &ldquo;Car Test&rdquo; Filter</h3>
                <p className="text-slate-600">Cut your 30+ names down to 10 using the Car Test: <strong>If someone heard your podcast name while driving and tried to search for it later, could they spell it correctly from memory?</strong> Names that fail the Car Test: hard-to-spell words, foreign words without obvious spelling, names with numbers or special characters, names longer than 4 words. <strong>The Car Test eliminates ~70% of name candidates. That&rsquo;s a feature, not a bug.</strong></p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white font-bold">4</span>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Check Domain & Social Availability</h3>
                <p className="text-slate-600">Before you fall in love with a name, verify it&rsquo;s actually available. Check: (1) the .com domain for your podcast website, (2) @yourpodcastname on Instagram, X, and TikTok, (3) Apple Podcasts and Spotify for duplicate names. <strong>BrandForge checks domain and social availability automatically</strong> — generate a name and see if it&rsquo;s available in seconds. If the exact .com is taken, try adding &ldquo;podcast&rdquo; or &ldquo;show&rdquo; (e.g., signalandnoise.fm → signalandnoisepodcast.com).</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white font-bold">5</span>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Test Your Top 3 With Real Listeners</h3>
                <p className="text-slate-600">Send your top 3 names to 5 people in your target audience. Ask them: &ldquo;If you saw this podcast in your feed, what would you expect it to be about?&rdquo; If their answer matches your show, the name works. If they&rsquo;re confused or guess wrong, it&rsquo;s back to the drawing board. <strong>Never skip this step</strong> — your opinion of your own name is always biased because you already know what the show is about.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Podcast Naming Mistakes */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">6 Podcast Naming Mistakes That Kill Discoverability</h2>
        <p className="text-slate-600 mb-8">
          These are the mistakes that make your show harder to find, harder to remember, and harder to grow.
        </p>
        <div className="space-y-6">
          <div className="rounded-2xl border border-red-100 bg-red-50/50 p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-2">❌ Mistake 1: Making Your Name Too Long</h3>
            <p className="text-slate-700">&ldquo;The Ultimate Entrepreneurial Business Development Podcast&rdquo; — 7 words, 60+ characters. Apple Podcasts truncates long titles. Spotify shows maybe 40 characters. Listeners can&rsquo;t remember it. <strong>Instead:</strong> Aim for 2-4 words. &ldquo;The Growth Lab&rdquo; says the same thing in 3 words and actually fits on a phone screen.</p>
          </div>
          <div className="rounded-2xl border border-red-100 bg-red-50/50 p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-2">❌ Mistake 2: Choosing a Generic Name</h3>
            <p className="text-slate-700">&ldquo;Business Talk&rdquo; and &ldquo;Tech Chat&rdquo; are forgettable and impossible to rank for. There are 4 million+ podcasts — your name needs to stand out, not blend in. <strong>Instead:</strong> Add a distinctive modifier. &ldquo;Business Talk&rdquo; → &ldquo;The Growth Lab.&rdquo; &ldquo;Tech Chat&rdquo; → &ldquo;The Byte Shift.&rdquo; The modifier makes it ownable.</p>
          </div>
          <div className="rounded-2xl border border-red-100 bg-red-50/50 p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-2">❌ Mistake 3: Using Inside Jokes or Obscure References</h3>
            <p className="text-slate-700">&ldquo;Tuesdays with Morrie&rdquo; makes sense to you because it&rsquo;s an inside joke with your co-host. New listeners see it and think &ldquo;book club?&rdquo; Your name needs to work for people who know nothing about you yet. <strong>Instead:</strong> Names that create intrigue for strangers. &ldquo;The Cold Trail&rdquo; makes anyone curious. &ldquo;Tuesdays with Morrie&rdquo; makes only you smile.</p>
          </div>
          <div className="rounded-2xl border border-red-100 bg-red-50/50 p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-2">❌ Mistake 4: Picking a Name That&rsquo;s Hard to Spell</h3>
            <p className="text-slate-700">If someone hears your podcast on a friend&rsquo;s recommendation and can&rsquo;t spell it to search, they&rsquo;ll never find you. &ldquo;Kuerzegsagt&rdquo; is an incredible show, but how many people misspell it on the first try? <strong>Instead:</strong> If your name isn&rsquo;t easy to spell, register common misspellings as alternate domains and social handles. Or pick a name that passes the Car Test — someone should be able to spell it after hearing it once.</p>
          </div>
          <div className="rounded-2xl border border-red-100 bg-red-50/50 p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-2">❌ Mistake 5: Choosing a Name Too Similar to an Existing Hit</h3>
            <p className="text-slate-700">Naming your show &ldquo;Crime Junkie&rdquo; when there&rsquo;s already a massive show called Crime Junkie is a recipe for confusion. You&rsquo;ll always show up in their search results, and listeners will find them instead of you. <strong>Instead:</strong> Pick a name in the same space but clearly distinct. If you&rsquo;re a true crime show, &ldquo;The Cold Trail&rdquo; or &ldquo;Unseen Evidence&rdquo; stands on its own without competing with Crime Junkie for search.</p>
          </div>
          <div className="rounded-2xl border border-red-100 bg-red-50/50 p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-2">❌ Mistake 6: Naming for Your First 10 Episodes, Not Your Next 100</h3>
            <p className="text-slate-700">&ldquo;iPhone 17 Review&rdquo; limits you to one product. &ldquo;Tech Talk Daily&rdquo; commits you to daily. &ldquo;Interviews with Denver Chefs&rdquo; locks you into one city. Your podcast name should be broad enough to evolve with you. <strong>Instead:</strong> &ldquo;The Byte Shift&rdquo; covers any tech topic at any cadence. &ldquo;The Flavor Lab&rdquo; covers any food content. &ldquo;The Knowledge Lab&rdquo; covers any educational topic. Think about where your show will be in 2 years, not 2 weeks.</p>
          </div>
        </div>
      </section>

      {/* CTA - Generate */}
      <div className="mb-16 rounded-2xl bg-gradient-to-br from-brand-600 to-purple-700 p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Ready to Find Your Podcast Name?</h2>
        <p className="text-brand-100 mb-6 max-w-xl mx-auto">
          Describe your podcast and get AI-powered name suggestions with instant domain and social handle availability checks.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/generate"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-brand-700 shadow-lg hover:bg-brand-50 transition-colors"
          >
            Generate Podcast Names Free →
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-3 text-base font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Get Full Brand Kit — $9
          </Link>
        </div>
      </div>

      {/* Industry-Specific Generators */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Industry-Specific Name Generators</h2>
        <p className="text-slate-600 mb-6">
          Need a name for a specific type of business? Try one of our 25 industry-specific name generators:
        </p>
        <div className="flex flex-wrap gap-2">
          {industries.map((industry) => (
            <Link
              key={industry.href}
              href={industry.href}
              className="inline-block rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700 hover:bg-brand-100 transition-colors"
            >
              {industry.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Related Blog Posts */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Related Articles</h2>
        <div className="grid sm:grid-cols-2 gap-4 mt-6">
          {relatedPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl border border-slate-200 bg-white p-6 hover:border-brand-300 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 line-clamp-2">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <details
              key={index}
              className="group rounded-2xl border border-slate-200 bg-white"
            >
              <summary className="cursor-pointer p-6 text-lg font-semibold text-slate-900 list-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.question}
                  <svg className="h-5 w-5 shrink-0 text-brand-600 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-slate-600">{item.answer}</div>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <div className="rounded-2xl bg-gradient-to-br from-brand-600 to-purple-700 p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Find Your Perfect Podcast Name</h2>
        <p className="text-brand-100 mb-6 max-w-xl mx-auto">
          Generate podcast names with AI, check domain and social availability, and build a complete brand kit — all in one place.
        </p>
        <Link
          href="/generate"
          className="inline-flex items-center rounded-full bg-white px-8 py-3 text-base font-semibold text-brand-700 shadow-lg hover:bg-brand-50 transition-colors"
        >
          Start Free →
        </Link>
      </div>

      {/* Newsletter */}
      <BlogNewsletterSection />
    </article>
  )
}