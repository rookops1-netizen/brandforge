/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import { BlogNewsletterSection } from '@/components/BlogNewsletterSection'
import { BlogPostSchema } from '@/components/BlogPostSchema'

export const dynamic = 'force-static'
export const metadata: Metadata = {
  title: 'YouTube Channel Name Generator: 300+ YouTube Channel Name Ideas for 2026 + Free AI Tool',
  description: '300+ YouTube channel name ideas across 10 content categories, 7 proven naming strategies used by top YouTubers, and a free AI generator that checks domain and handle availability instantly.',
  keywords: [
    'youtube channel name generator',
    'youtube channel name ideas',
    'youtube channel names',
    'how to name a youtube channel',
    'youtube name ideas',
    'creative youtube channel names',
    'best youtube channel names',
    'cool youtube channel names',
    'youtube channel name ideas 2026',
    'unique youtube channel names',
    'youtube channel naming tips',
    'good youtube channel names',
    'vlog name ideas',
    'youtube brand name generator',
    'catchy youtube channel names',
  ],
  openGraph: {
    title: 'YouTube Channel Name Generator: 300+ YouTube Channel Name Ideas for 2026 + Free AI Tool',
    description: '300+ YouTube channel name ideas across 10 content categories, 7 naming strategies from top creators, and a free AI generator with domain and handle checks.',
    url: 'https://brandforge-phi-pearl.vercel.app/blog/youtube-channel-name-generator',
    siteName: 'BrandForge',
    type: 'article',
    publishedTime: '2026-07-26T12:00:00.000Z',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'YouTube Channel Name Generator: 300+ YouTube Channel Name Ideas for 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YouTube Channel Name Generator: 300+ YouTube Channel Name Ideas for 2026',
    description: '300+ YouTube channel name ideas by category, 7 naming strategies from top creators, and a free AI generator that checks handle availability.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: 'https://brandforge-phi-pearl.vercel.app/blog/youtube-channel-name-generator',
  },
  robots: { index: true, follow: true },
}

const FAQ_ITEMS = [
  {
    question: 'How do I come up with a YouTube channel name?',
    answer: 'Start by defining your niche, personality, and content type in BrandForge\'s AI generator — it produces tailored names instantly. Then follow this process: (1) brainstorm 20+ options across different naming styles, (2) filter for names that are short, memorable, and spellable, (3) check YouTube to make sure the name isn\'t already taken by a large channel, (4) verify the handle is available on YouTube, Instagram, and TikTok, (5) test your top 3 with real people in your target audience. The best YouTube names are 1-2 words, easy to spell after hearing once, and hint at your content without being generic.',
  },
  {
    question: 'What makes a good YouTube channel name?',
    answer: 'The best YouTube channel names share these qualities: (1) Short — 1-2 words, easy to say in one breath (MrBeast, MKBHD, Veritasium), (2) Memorable — sticks in your head after one mention, (3) Easy to spell — if someone hears it, they can search it on YouTube, (4) Distinctive — doesn\'t blend in with hundreds of similar names in your niche, (5) Scalable — doesn\'t lock you into one narrow topic, (6) Available — the YouTube handle, Instagram, and TikTok are all free. The best names work as a brand that can grow beyond YouTube.',
  },
  {
    question: 'Should I use my real name for my YouTube channel?',
    answer: 'It depends on your content type and goals. Using your real name works well for: personal vloggers, educators, consultants, and anyone building a personal brand (Marques Brownlee, Ali Abdaal, Peter McKinnon). Advantages: authentic, easy to remember, transfers across platforms. Disadvantages: limits future channel sales, can be hard to spell if your name is uncommon, and doesn\'t communicate your niche. A branded name works better for: entertainment channels, niche content, comedy, and channels you might sell later (MrBeast, Veritasium, Kurzgesagt).',
  },
  {
    question: 'How do I check if a YouTube channel name is available?',
    answer: 'Check five things before committing: (1) YouTube search — type the name and see if large channels already use it, (2) YouTube handle — try claiming @yourchannelname when you create your channel, (3) BrandForge\'s domain checker — verify the .com is available for a future website, (4) Social handles — check Instagram, TikTok, and X for @yourchannelname, (5) Google search — see if the name appears in unrelated contexts that could cause confusion. The sooner you check, the less likely you are to fall in love with a name you can\'t use.',
  },
  {
    question: 'What are the most popular YouTube channel naming styles?',
    answer: 'The 7 most effective YouTube naming strategies are: (1) Personal Name — uses your real name or nickname (Marques Brownlee, Ali Abdaal, Peter McKinnon), (2) Compound — two words combined for new meaning (MrBeast, ThinkMedia, TechLinked), (3) Invented — a made-up word that\'s catchy (Kurzgesagt, Veritasium, SmarterEveryDay), (4) Descriptive — hints at your content type (TechLinked, HowToBasic, CookingNinja), (5) Evocative — creates a feeling or identity (Veritasium, Vox, Seeker), (6) Acronym — short and memorable (MKBHD, Vsauce, SNL), (7) Niche + Modifier — your topic plus a power word (TechWithTim, FitnessBlender, ProZD). Most top channels combine 2 strategies.',
  },
  {
    question: 'Can I change my YouTube channel name later?',
    answer: 'Yes, YouTube allows name changes, but there are important caveats: (1) You can change your channel name without changing your Google account name, (2) Your custom URL (youtube.com/c/yourname) may not transfer easily, (3) Existing subscribers will see the new name — some may be confused, (4) Comments you made under the old name may still show the old name, (5) SEO authority built under the old name can be disrupted. The best time to choose the right name is before you launch. If you must rebrand, do it before 1,000 subscribers when your audience is small enough that the disruption is minimal.',
  },
  {
    question: 'Should my YouTube channel name include my niche keyword?',
    answer: 'Including your niche can help with discoverability in the early days, but it\'s a double-edged sword. Channels like "TechWithTim" and "FitnessBlender" benefit from keyword clarity. But channels like "MrBeast" and "Veritasium" grew massive without niche keywords. If you include a niche keyword: (1) make sure you won\'t outgrow it (TechWithTim still works if Tim covers broader topics), (2) keep it short — avoid names like "TechReviewAndUnboxingDaily", (3) use the niche as a modifier, not the whole name. A good compromise: a distinctive first word + niche word (TechLinked, FitnessBlender).',
  },
  {
    question: 'What YouTube channel name mistakes should I avoid?',
    answer: 'The 6 biggest YouTube naming mistakes: (1) Too long — "TheUltimateTechReviewChannel" won\'t fit in YouTube\'s display and is impossible to remember. Aim for 2 words max. (2) Numbers and special characters — "TechReviews2026" and "Gamer_Boy_X" look amateur and are hard to search. (3) Generic names — "Tech Reviews" and "Gaming Channel" are impossible to rank for and forgettable. (4) Hard to spell — if someone can\'t type your name after hearing it, they can\'t find you. (5) Copying popular channels — slight variations of "MrBeast" or "MKBHD" will get you lost in their search results. (6) Too niche — "iPhone12Cases" locks you into a product that ages out.',
  },
]

const nameCategories = [
  {
    title: 'Tech & Gaming',
    names: [
      'ByteForge', 'Pixel Drift', 'Ctrl Alt Create', 'The Tech Loop', 'Neon Circuit',
      'Code & Coil', 'FrameRate', 'Pixel Theory', 'The Sync Lab', 'Digital Drift',
      'Tech Nomad', 'The Bit Studio', 'Circuit Break', 'Pixel Forge', 'Logic Lane',
      'The Debug Diaries', 'Chip Theory', 'Pixel Shift', 'The Binary Beat', 'Code Breaker',
    ],
  },
  {
    title: 'Vlogs & Lifestyle',
    names: [
      'Day Drift', 'The Daily Thread', 'Life Unscripted', 'The Good Life Co.', 'Weekend Theory',
      'Morning Shift', 'The Honest Lens', 'Day by Day', 'Real Talk Daily', 'Life in Focus',
      'The Open Journal', 'Fresh Chapter', 'The Daily Shift', 'Life Unfiltered', 'Everyday Magic',
      'The Raw Reel', 'Life Canvas', 'The Spontaneous Co.', 'Daymaker', 'The Unplanned Life',
    ],
  },
  {
    title: 'Education & How-To',
    names: [
      'Smart Every Day', 'The Knowledge Lab', 'Learn Loop', 'The Study Studio', 'QuickThink',
      'The Skill Shift', 'Brain Frame', 'The Insight Engine', 'Learn Fast Co.', 'Mind Bloom',
      'The Think Tank', 'Skill Forge', 'The Learning Curve', 'Bright Method', 'The How-To Hub',
      'Clarity Studio', 'The Guide Post', 'Know Theory', 'The Lesson Lab', 'Think Clear',
    ],
  },
  {
    title: 'Fitness & Health',
    names: [
      'The Fit Shift', 'Move Theory', 'Iron Mindset', 'The Strength Lab', 'Form & Function',
      'The Active Co.', 'Fit Framework', 'The Motion Studio', 'Rep Theory', 'The Daily Burn',
      'Iron Forge', 'The Movement Loop', 'Core Shift', 'The Wellness Loop', 'Power Protocol',
      'The Form Lab', 'Grit & Grace', 'The Fit Protocol', 'Body Theory', 'The Active Shift',
    ],
  },
  {
    title: 'Food & Cooking',
    names: [
      'The Flavor Lab', 'Spice Theory', 'The Cook Shift', 'Taste Lab', 'The Fresh Plate',
      'Flame & Fork', 'The Recipe Loop', 'Kitchen Theory', 'The Dish Studio', 'Coastal Kitchen',
      'The Seasoned Co.', 'Taste Shift', 'The Pantry Lab', 'Stove & Story', 'The Flavor Shift',
      'Plate Theory', 'The Hungry Lens', 'Spice & Steel', 'The Cook Theory', 'Fresh Frame Kitchen',
    ],
  },
  {
    title: 'Beauty & Fashion',
    names: [
      'The Glow Lab', 'Style Theory', 'The Beauty Shift', 'Gloss & Glass', 'The Style Studio',
      'Radiant Theory', 'The Look Loop', 'Aura & Co.', 'The Chic Shift', 'Velvet Theory',
      'The Glam Lab', 'Beauty Protocol', 'The Style Engine', 'Glow Frame', 'The Beauty Lens',
      'Hue Theory', 'The Radiant Co.', 'Polish & Glow', 'The Style Shift', 'Canvas Beauty',
    ],
  },
  {
    title: 'Finance & Business',
    names: [
      'The Money Shift', 'Wealth Theory', 'The Invest Lab', 'The Finance Loop', 'Capital Think',
      'The Profit Engine', 'Money Protocol', 'The Growth Studio', 'Scale Theory', 'The Wealth Lens',
      'The Compound Co.', 'Equity Shift', 'The Portfolio Lab', 'Fiscal Theory', 'The Build Loop',
      'The Smart Money', 'Value Protocol', 'The Founder Lab', 'Stack Theory', 'The Dividend Shift',
    ],
  },
  {
    title: 'Comedy & Entertainment',
    names: [
      'The Joke Lab', 'Laugh Theory', 'The Comedy Shift', 'Punchline Co.', 'The Fun Loop',
      'Gag Forge', 'The Chuckle Studio', 'Bit Theory', 'The Satire Shift', 'The Irony Engine',
      'LOL Lab', 'The Prank Loop', 'Comic Shift', 'The Laugh Lens', 'The Jest Co.',
      'Funny Theory', 'The Humor Hub', 'The Bit Shift', 'Laugh Forge', 'The Comedy Lens',
    ],
  },
  {
    title: 'Travel & Adventure',
    names: [
      'The Drift Lab', 'Waypoint Theory', 'The Travel Shift', 'Nomad Loop', 'The Journey Studio',
      'Atlas Theory', 'The Explore Co.', 'The Route Lens', 'Roam Shift', 'The Compass Lab',
      'Trek Theory', 'The Latitude Loop', 'The Wander Engine', 'Path Theory', 'The Horizon Shift',
      'The Adventure Lab', 'Map & Memory', 'The Voyage Co.', 'The Trail Theory', 'Wander Forge',
    ],
  },
  {
    title: 'Music & Creative Arts',
    names: [
      'The Sound Lab', 'Chord Theory', 'The Music Shift', 'Beat Forge', 'The Creative Loop',
      'Melody Studio', 'The Art Engine', 'Rhythm Theory', 'The Sound Shift', 'The Studio Co.',
      'Note Theory', 'The Mix Lab', 'The Creative Lens', 'Canvas Theory', 'The Artful Shift',
      'The Track Loop', 'Sound Forge', 'The Composition Co.', 'Tone Theory', 'The Creative Shift',
    ],
  },
]

const namingStrategies = [
  {
    name: 'Personal Name',
    emoji: '👤',
    description: 'Uses your real name or nickname — the most common approach for top creators',
    examples: ['Marques Brownlee', 'Ali Abdaal', 'Peter McKinnon', 'MrBeast'],
    bestFor: 'Personal brands, educators, vloggers, consultants — anyone whose personality IS the content',
    howToUse: 'Use your first name, full name, or a nickname that\'s easy to remember. "Marques Brownlee" works because it\'s authentic. "MrBeast" works because it\'s a nickname that became iconic. If your name is hard to spell, consider a simplified version.',
  },
  {
    name: 'Compound',
    emoji: '🔗',
    description: 'Two words combined to create a new meaning',
    examples: ['TechLinked', 'ThinkMedia', 'FitnessBlender', 'TechWithTim'],
    howToUse: 'Combine a niche word with an action or identity word. "Tech" + "Linked" = tech content that connects ideas. "Fitness" + "Blender" = mixing fitness routines together. Think about what your content DOES, not just what it\'s ABOUT.',
    bestFor: 'Niche channels where discoverability matters — the compound word signals your topic while staying unique',
  },
  {
    name: 'Invented',
    emoji: '💡',
    description: 'A made-up word that\'s catchy and brandable',
    examples: ['Kurzgesagt', 'Veritasium', 'SmarterEveryDay', 'Vsauce'],
    bestFor: 'Educational and science channels — invented names feel intellectual and unique. Also great for channels planning to become media brands.',
    howToUse: 'Create a word with the right "sound" for your niche. "Veritasium" sounds scientific (from "veritas" = truth). "Kurzgesagt" is German for "in a nutshell" — foreign words can work beautifully. The key: it must be memorable even if people can\'t spell it at first.',
  },
  {
    name: 'Descriptive',
    emoji: '🏷️',
    description: 'Hints at your content type so viewers know what to expect',
    examples: ['HowToBasic', 'TechLinked', 'CookingNinja', 'TechWithTim'],
    bestFor: 'New channels that need every discovery advantage — descriptive names help YouTube\'s algorithm and viewers understand your content immediately',
    howToUse: 'Combine your niche with a power word. "HowTo" + content type, "Tech" + identity word, "Niche" + "With" + your name. Make sure the descriptive word is broad enough to allow growth (TechWithTim still works if Tim covers more than phones).',
  },
  {
    name: 'Evocative',
    emoji: '✨',
    description: 'Creates a feeling or identity without being literal',
    examples: ['Vox', 'Seeker', 'The Verge', 'Corridor'],
    bestFor: 'Channels that want to build a media brand beyond YouTube — evocative names scale across platforms and content types',
    howToUse: 'Pick a word that captures the feeling of your content. "Vox" suggests voice and authority. "Seeker" suggests exploration and curiosity. "Corridor" suggests a creative journey. Test it: say it out loud. If it sounds like a brand, not a keyword, you\'re on the right track.',
  },
  {
    name: 'Acronym',
    emoji: '🔤',
    description: 'Short letters that become iconic through repetition',
    examples: ['MKBHD', 'VFX', 'SNL', 'DIY'],
    bestFor: 'Channels where the creator already has initials or a memorable abbreviation — especially tech and review channels',
    howToUse: 'Use your initials or a short abbreviation that\'s catchy to say out loud. "MKBHD" (Marques K. Brownlee HD) became iconic because it\'s short and distinctive. Make sure the acronym doesn\'t spell something awkward. Say it 10 times fast — if it still sounds good, it works.',
  },
  {
    name: 'Niche + Modifier',
    emoji: '🎯',
    description: 'Your content topic paired with a power word',
    examples: ['TechWithTim', 'FitnessBlender', 'ProZD', 'SuperCarBlondie'],
    bestFor: 'Channels in competitive niches that need clear positioning — the niche word helps discovery, the modifier makes it memorable',
    howToUse: 'Pick your niche (tech, fitness, cooking, gaming) and pair it with a distinctive modifier. The modifier should be a power word, your name, or an evocative word. "Tech" + "With Tim" = personal + clear. "Fitness" + "Blender" = unexpected + memorable. Avoid generic modifiers like "Pro," "Best," or "Daily."',
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
  { name: 'Photography', href: '/photography-name-generator' },
  { name: 'Real Estate', href: '/real-estate-name-generator' },
  { name: 'Food Truck', href: '/food-truck-name-generator' },
  { name: 'Consulting', href: '/consulting-name-generator' },
  { name: 'Coaching', href: '/coaching-name-generator' },
  { name: 'Pet', href: '/pet-name-generator' },
  { name: 'Yoga', href: '/yoga-name-generator' },
  { name: 'Cleaning', href: '/cleaning-business-name-generator' },
  { name: 'Landscaping', href: '/landscaping-name-generator' },
  { name: 'Construction', href: '/construction-name-generator' },
  { name: 'Education', href: '/education-name-generator' },
  { name: 'Music', href: '/music-name-generator' },
  { name: 'Wedding', href: '/wedding-name-generator' },
  { name: 'Craft', href: '/craft-name-generator' },
  { name: 'Nonprofit', href: '/nonprofit-name-generator' },
  { name: 'Podcast', href: '/podcast-name-generator' },
  { name: 'Marketing Agency', href: '/marketing-agency-name-generator' },
]

const relatedPosts = [
  { slug: 'brand-name-ideas', title: 'Brand Name Ideas: 300+ Creative Examples for 2026', excerpt: '300+ brand name ideas across 10 categories with 7 proven naming techniques.' },
  { slug: 'catchy-brand-names', title: 'Catchy Brand Names: 250+ Memorable Ideas for 2026', excerpt: '250+ catchy brand name ideas and 7 naming formulas that make names stick.' },
  { slug: 'app-name-generator', title: 'App Name Generator: 200+ App Name Ideas for 2026', excerpt: '200+ app name ideas and 6 naming frameworks behind hit apps like Slack and Notion.' },
  { slug: 'podcast-name-generator', title: 'Podcast Name Generator: 300+ Podcast Name Ideas for 2026', excerpt: '300+ podcast name ideas, 7 naming strategies from hit shows like Serial and The Daily, and a free AI generator.' },
  { slug: 'startup-name-ideas', title: 'Startup Name Ideas: 300+ Names for Startups in 2026', excerpt: '300+ startup name ideas and 7 naming strategies behind billion-dollar startups.' },
  { slug: 'creative-brand-names', title: 'Creative Brand Names: 200+ Unique Ideas for 2026', excerpt: '200+ creative brand name ideas with naming techniques from top branding agencies.' },
]

export default function YouTubeChannelNameGeneratorPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <BlogPostSchema
        url="https://brandforge-phi-pearl.vercel.app/blog/youtube-channel-name-generator"
        title="YouTube Channel Name Generator: 300+ YouTube Channel Name Ideas for 2026 + Free AI Tool"
        description="300+ YouTube channel name ideas across 10 content categories, 7 proven naming strategies used by top YouTubers, and a free AI generator that checks domain and handle availability instantly."
        datePublished="2026-07-26T12:00:00.000Z"
        dateModified="2026-07-26T12:00:00.000Z"
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
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brandforge-phi-pearl.vercel.app' },
                  { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://brandforge-phi-pearl.vercel.app/blog' },
                  { '@type': 'ListItem', position: 3, name: 'YouTube Channel Name Generator', item: 'https://brandforge-phi-pearl.vercel.app/blog/youtube-channel-name-generator' },
                ],
              },
            ],
          }),
        }}
      />

      {/* Header */}
      <header className="mb-12">
        <p className="text-sm font-semibold text-brand-600 tracking-wide uppercase mb-3">YouTube & Creator Naming</p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          YouTube Channel Name Generator: 300+ YouTube Channel Name Ideas for 2026
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-3xl">
          300+ YouTube channel name ideas organized by content category, 7 naming strategies used by the world&apos;s most successful creators, and a free AI generator that checks domain and handle availability instantly.
        </p>
        <div className="mt-6 flex items-center gap-4 text-sm text-slate-400">
          <time dateTime="2026-07-26">July 26, 2026</time>
          <span>·</span>
          <span>15 min read</span>
        </div>
      </header>

      {/* CTA */}
      <div className="mb-12 rounded-2xl bg-gradient-to-br from-brand-50 via-white to-purple-50 p-6 sm:p-8 text-center border border-brand-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
          Generate Your YouTube Channel Name Free
        </h2>
        <p className="text-slate-600 mb-4">
          Get AI-powered YouTube channel name ideas with instant domain and social handle availability checks.
        </p>
        <a href="/generate" className="btn-primary text-base px-8 py-3">
          Generate YouTube Channel Names Free →
        </a>
      </div>

      {/* Name Categories */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-8">
          300+ YouTube Channel Name Ideas by Category
        </h2>
        <p className="text-slate-600 mb-8">
          Browse YouTube channel name ideas organized by content category. Each name is designed to be memorable, brandable, and available — or use these as inspiration and <a href="/generate" className="text-brand-600 hover:text-brand-700 font-medium">generate your own with our AI tool →</a>
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
          7 YouTube Channel Naming Strategies (Used by MrBeast, MKBHD, Veritasium & More)
        </h2>
        <p className="text-slate-600 mb-8">
          The most successful YouTubers don&apos;t pick names randomly. They follow proven patterns that make their channels discoverable, memorable, and brandable. Here are 7 strategies behind the world&apos;s most successful YouTube channels.
        </p>
        <div className="space-y-6">
          {namingStrategies.map((strategy) => (
            <div key={strategy.name} className="rounded-xl border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{strategy.emoji}</span>
                <h3 className="text-lg font-bold text-slate-900">{strategy.name}</h3>
              </div>
              <p className="text-slate-600 mb-3">{strategy.description}</p>
              <div className="mb-3 rounded-lg bg-slate-50 p-3">
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1">Real Examples</p>
                <div className="flex flex-wrap gap-2">
                  {strategy.examples.map((example) => (
                    <span key={example} className="inline-flex items-center rounded-md bg-white px-2.5 py-1 text-sm font-medium text-slate-700 border border-slate-200">
                      {example}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-slate-500 mb-2"><strong>Best for:</strong> {strategy.bestFor}</p>
              <p className="text-sm text-slate-600"><strong>How to use it:</strong> {strategy.howToUse}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5-Step Naming Process */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4">
          How to Name Your YouTube Channel in 5 Steps
        </h2>
        <p className="text-slate-600 mb-8">
          Follow this proven process to find a YouTube channel name that&apos;s memorable, available, and built to grow.
        </p>
        <div className="space-y-6">
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <div className="flex items-start gap-4">
              <span className="inline-flex items-center justify-center rounded-full bg-brand-600 text-white text-sm font-bold w-8 h-8 flex-shrink-0">1</span>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Define Your Channel Identity</h3>
                <p className="mt-2 text-slate-600">Before naming, write down your channel&apos;s: content niche (tech, fitness, comedy, education), target audience (age, interests, why they watch), personality (funny, authoritative, casual, intense), and growth goal (personal brand, media company, niche authority). This context is crucial — &quot;ByteForge&quot; works for tech but would kill a lifestyle channel. Use <a href="/generate" className="text-brand-600 hover:text-brand-700 font-medium">BrandForge&apos;s AI generator</a> and describe your channel concept in plain English.</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <div className="flex items-start gap-4">
              <span className="inline-flex items-center justify-center rounded-full bg-brand-600 text-white text-sm font-bold w-8 h-8 flex-shrink-0">2</span>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Generate 25+ Name Candidates</h3>
                <p className="mt-2 text-slate-600">Aim for quantity first. Run <a href="/generate" className="text-brand-600 hover:text-brand-700 font-medium">BrandForge</a> 4-5 times with different descriptions (vary the tone, audience, and keywords). Browse the name lists above for inspiration. Try at least 3 of the 7 naming strategies — one personal, one compound, and one evocative. The more diverse your options, the better your final pick.</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <div className="flex items-start gap-4">
              <span className="inline-flex items-center justify-center rounded-full bg-brand-600 text-white text-sm font-bold w-8 h-8 flex-shrink-0">3</span>
              <div>
                <h3 className="text-lg font-bold text-slate-900">The YouTube Filter: Cut for Platform Fit</h3>
                <p className="mt-2 text-slate-600">Cut your list from 25+ to 5-7 using YouTube-specific filters: (1) <strong>Searchability</strong> — can someone type it into YouTube search after hearing it once?, (2) <strong>Display test</strong> — does it look good in YouTube&apos;s sidebar and mobile layout (1-2 words max)?, (3) <strong>Handle test</strong> — does @yourchannelname work on YouTube, Instagram, and TikTok?, (4) <strong>Scalability</strong> — can your channel outgrow the name without rebranding?, (5) <strong>Distinctiveness</strong> — does it stand out from the 10 similar channels in your niche? Names that fail 2+ rules get cut.</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <div className="flex items-start gap-4">
              <span className="inline-flex items-center justify-center rounded-full bg-brand-600 text-white text-sm font-bold w-8 h-8 flex-shrink-0">4</span>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Check YouTube, Domain & Social Availability</h3>
                <p className="mt-2 text-slate-600">For each finalist, check: (1) <strong>YouTube search</strong> — type the name and see if large channels already use it, (2) <strong>YouTube handle</strong> — try claiming @yourchannelname, (3) <strong>Domain</strong> — use <a href="/generate" className="text-brand-600 hover:text-brand-700 font-medium">BrandForge&apos;s domain checker</a> to verify the .com, (4) <strong>Social handles</strong> — check Instagram, TikTok, and X for @yourchannelname, (5) <strong>Google search</strong> — see if the name appears in unrelated contexts. The best names are available everywhere.</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <div className="flex items-start gap-4">
              <span className="inline-flex items-center justify-center rounded-full bg-brand-600 text-white text-sm font-bold w-8 h-8 flex-shrink-0">5</span>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Test With Your Target Audience</h3>
                <p className="mt-2 text-slate-600">Show your top 3 names to 5 people in your target audience and ask: (1) What kind of videos do you expect from this channel?, (2) Can you spell it after hearing it once?, (3) Would you subscribe to a channel with this name?, (4) Does this name stand out from other channels in this niche? Their answers will surprise you. Pick the name that creates the right impression, not the one you&apos;re personally most attached to. Then <a href="/generate" className="text-brand-600 hover:text-brand-700 font-medium">generate your complete brand kit →</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Naming Mistakes */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4">
          6 YouTube Channel Naming Mistakes That Kill Growth
        </h2>
        <p className="text-slate-600 mb-8">
          These mistakes are common — and they cost creators thousands of views, subscribers, and brand deals.
        </p>
        <div className="space-y-6">
          <div className="rounded-xl border border-red-100 bg-red-50/50 p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-2">❌ Choosing a name that&apos;s too long</h3>
            <p className="text-slate-600 mb-2">&quot;TheUltimateTechReviewChannel&quot; is 29 characters — it won&apos;t fit in YouTube&apos;s display, it&apos;s impossible to remember, and it looks amateur in search results. YouTube truncates long names in sidebar recommendations and mobile search.</p>
            <p className="text-sm text-emerald-700 font-medium">✅ Instead: Aim for 1-2 words, max 15 characters. &quot;MKBHD,&quot; &quot;Vox,&quot; and &quot;Seeker&quot; are 3-6 characters and instantly recognizable. Short names display better, search better, and stick better.</p>
          </div>
          <div className="rounded-xl border border-red-100 bg-red-50/50 p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-2">❌ Using numbers and special characters</h3>
            <p className="text-slate-600 mb-2">&quot;TechReviews2026&quot; and &quot;Gamer_Boy_X&quot; look amateur, are hard to search for, and the numbers will age your channel. Viewers will wonder: is it &quot;TechReviews2026&quot; or &quot;TechReviewsTwoZeroTwoSix&quot;?</p>
            <p className="text-sm text-emerald-700 font-medium">✅ Instead: Use clean, spelled-out words only. &quot;TechReview&quot; or &quot;GamerForge&quot; are cleaner, more professional, and won&apos;t age out. Numbers and underscores signal &quot;I couldn&apos;t get the name I wanted.&quot;</p>
          </div>
          <div className="rounded-xl border border-red-100 bg-red-50/50 p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-2">❌ Picking a name that&apos;s too generic</h3>
            <p className="text-slate-600 mb-2">&quot;Tech Reviews&quot; and &quot;Gaming Channel&quot; are impossible to rank for in YouTube search, impossible to trademark, and viewers won&apos;t remember them because there are hundreds of channels with similar names.</p>
            <p className="text-sm text-emerald-700 font-medium">✅ Instead: Add a distinctive modifier. &quot;TechLinked&quot; (tech + connected ideas), &quot;FitnessBlender&quot; (fitness + mixing it up), &quot;MrBeast&quot; (personality + power word). Specificity wins on YouTube.</p>
          </div>
          <div className="rounded-xl border border-red-100 bg-red-50/50 p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-2">❌ Choosing a name that&apos;s hard to spell</h3>
            <p className="text-slate-600 mb-2">If someone hears your channel name in a video and can&apos;t type it into YouTube search, you&apos;ve lost a subscriber. &quot;Kurzgesagt&quot; is iconic but most viewers discover it through recommendations, not search. For search-dependent growth, spellability matters.</p>
            <p className="text-sm text-emerald-700 font-medium">✅ Instead: Use names that pass the &quot;phone test&quot; — say it to a friend, and they should be able to type it into YouTube on the first try. &quot;Veritasium&quot; is hard but the alternative — a simple name — makes discovery easier. <a href="/generate" className="text-brand-600 hover:text-brand-700 font-medium">Try BrandForge for spellable name ideas →</a></p>
          </div>
          <div className="rounded-xl border border-red-100 bg-red-50/50 p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-2">❌ Copying popular channel names with a twist</h3>
            <p className="text-slate-600 mb-2">&quot;MrBeast2,&quot; &quot;TechWithTimReview,&quot; or &quot;MKBHD_Fan&quot; — these names will get you buried in the original channel&apos;s search results, confuse viewers, and potentially face trademark claims. You&apos;re building on someone else&apos;s brand, not your own.</p>
            <p className="text-sm text-emerald-700 font-medium">✅ Instead: Use BrandForge to generate genuinely unique names that stand on their own. The goal is to be DISCOVERABLE, not confused with an existing creator.</p>
          </div>
          <div className="rounded-xl border border-red-100 bg-red-50/50 p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-2">❌ Picking a name that locks you into one narrow topic</h3>
            <p className="text-slate-600 mb-2">&quot;iPhoneRepairTips&quot; traps you in a single device. &quot;MinecraftBuilderPro&quot; limits you to one game. When your content evolves (and it will), you&apos;ll face a painful rebrand. Channels like &quot;MKBHD&quot; started with phones but grew to cover all tech because the name allowed it.</p>
            <p className="text-sm text-emerald-700 font-medium">✅ Instead: Choose a name that captures your &quot;angle,&quot; not your &quot;topic.&quot; &quot;TechLinked&quot; covers any tech. &quot;SmarterEveryDay&quot; covers any curiosity. &quot;Veritasium&quot; covers any science. Think broad angle, not narrow niche.</p>
          </div>
        </div>
      </section>

      {/* Industry Generators */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4">
          Name Generators by Industry
        </h2>
        <p className="text-slate-600 mb-8">
          Looking for a brand name in a specific industry? Try one of our specialized name generators:
        </p>
        <div className="flex flex-wrap gap-2">
          {industries.map((ind) => (
            <a
              key={ind.href}
              href={ind.href}
              className="inline-flex items-center rounded-lg bg-brand-50 px-3 py-2 text-sm font-medium text-brand-700 hover:bg-brand-100 transition-colors"
            >
              {ind.name}
            </a>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((faq, i) => (
            <details key={i} className="group rounded-xl border border-slate-200 bg-white">
              <summary className="flex cursor-pointer items-center justify-between p-6 text-left font-semibold text-slate-900 hover:bg-slate-50 rounded-xl transition-colors">
                {faq.question}
                <span className="ml-4 flex-shrink-0 text-brand-600 transition-transform group-open:rotate-180">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-slate-600">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Related Posts */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-8">
          Continue Reading
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {relatedPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <div className="rounded-2xl bg-gradient-to-br from-brand-50 via-white to-purple-50 p-8 sm:p-10 text-center border border-brand-100">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
          Ready to Name Your YouTube Channel?
        </h2>
        <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
          Describe your channel concept and get AI-generated name ideas with instant domain and social handle availability checks. Free to start — no credit card required.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/generate" className="btn-primary text-base px-8 py-3">
            Generate YouTube Channel Names Free →
          </a>
          <a href="/pricing" className="btn-secondary text-base px-8 py-3">
            View Brand Kit Pricing
          </a>
        </div>
      </div>

      {/* Newsletter */}
      <div className="mt-12">
        <BlogNewsletterSection />
      </div>
    </div>
  )
}