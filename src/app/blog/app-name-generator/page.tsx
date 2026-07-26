/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import { BlogNewsletterSection } from '@/components/BlogNewsletterSection'
import { BlogPostSchema } from '@/components/BlogPostSchema'

export const dynamic = 'force-static'
export const metadata: Metadata = {
  title: 'App Name Generator: 200+ App Name Ideas for 2026 + Free AI Tool',
  description: '200+ app name ideas across 10 categories, 6 proven naming frameworks behind hit apps like Slack, Notion, and Calendly, and a free AI generator that checks domain availability instantly.',
  keywords: [
    'app name generator',
    'app name ideas',
    'mobile app name generator',
    'SaaS name generator',
    'how to name an app',
    'app naming guide',
    'app name ideas 2026',
    'best app names',
    'creative app names',
    'cool app names',
    'app name ideas for startups',
    'mobile app naming',
    'how to come up with an app name',
    'app name brainstorming',
    'unique app names',
  ],
  openGraph: {
    title: 'App Name Generator: 200+ App Name Ideas for 2026 + Free AI Tool',
    description: '200+ app name ideas, 6 naming frameworks behind hit apps, and a free AI generator with domain availability checks. Find the perfect name for your app.',
    url: 'https://brandforge-phi-pearl.vercel.app/blog/app-name-generator',
    siteName: 'BrandForge',
    type: 'article',
    publishedTime: '2026-07-13T12:00:00.000Z',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'App Name Generator: 200+ App Name Ideas for 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'App Name Generator: 200+ App Name Ideas for 2026',
    description: '200+ app name ideas, 6 naming frameworks, and a free AI tool that checks domain availability. Find your perfect app name today.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: 'https://brandforge-phi-pearl.vercel.app/blog/app-name-generator',
  },
  robots: { index: true, follow: true },
}

const FAQ_ITEMS = [
  {
    question: 'How do I come up with a good name for my app?',
    answer: 'Start by listing 5–10 words that describe what your app does and how it makes users feel. Then apply naming frameworks: try shortening a descriptive phrase (Slack from "Searchable Log of All Communication and Knowledge"), blending two words (Calendly from "calendar" + "kindly"), using a metaphor (Notion for "ideas"), or inventing a word (Kodak-style). Aim for 1–2 syllables, easy spelling, and a .com or .app domain that\'s available. Generate 50+ names and narrow down to your top 5 before checking availability.',
  },
  {
    question: 'Should my app name describe what it does?',
    answer: 'It depends on your market. B2B and enterprise apps benefit from descriptive names (Salesforce, HubSpot) because decision-makers search by category. Consumer apps and SaaS products perform better with suggestive names (Slack, Notion, Calendly) that are memorable and ownable. The best app names hint at what you do without literally saying it — they create curiosity that makes people want to learn more.',
  },
  {
    question: 'What are the best app name examples and why do they work?',
    answer: 'Slack works because it suggests casual, flexible communication. Notion works because it evokes thinking and ideas. Calendly works because it blends "calendar" and "kindly" — scheduling that feels friendly. Canva works because it\'s short, sounds creative, and feels premium. Zoom works because it suggests speed and connection. The pattern: 1–2 syllables, easy to spell on the first try, and evokes the right feeling without being literal.',
  },
  {
    question: 'How do I check if an app name is available?',
    answer: 'Check four things: (1) Domain availability for .com, .app, or .io, (2) App Store and Google Play search to see if a similar name exists, (3) USPTO trademark search at tmsearch.uspto.gov, (4) Social media handles on Twitter/X, Instagram, and LinkedIn. BrandForge checks domain and social availability automatically during name generation. For app stores, search directly and also check developer names.',
  },
  {
    question: 'Should I use .app, .io, or .com for my app?',
    answer: '.com is still the gold standard for credibility and SEO, but .app and .io are widely accepted for tech products. .app is Google\'s TLD specifically for applications and signals "this is an app." .io is popular with developer tools and SaaS. If your .com is available and affordable, take it. If not, .app and .io are strong alternatives. Avoid obscure TLDs like .xyz or .tech — they look less professional and hurt click-through rates.',
  },
  {
    question: 'How long should an app name be?',
    answer: 'The sweet spot is 2–3 syllables and 4–8 characters. Look at the top 100 apps: Slack (5 chars), Zoom (4 chars), Notion (6 chars), Calendly (8 chars), Canva (5 chars). Shorter names are easier to remember, type, and say. They also look better in app icons, push notifications, and social media bios. If you need more words, use a compound name (Basecamp, Figma) rather than a long single word.',
  },
  {
    question: 'What app naming mistakes should I avoid?',
    answer: 'The top mistakes: (1) Adding "app" to the name (WeatherApp, NoteApp) — it\'s generic and forgettable, (2) Using a name that\'s hard to spell or pronounce (people will search for it wrong), (3) Choosing a name too similar to an existing app (trademark risk + user confusion), (4) Picking a name that only makes sense to you (inside jokes don\'t scale), (5) Not checking domain and social availability before committing, (6) Using hyphens, numbers, or intentional misspellings (Fyre vs Fire — people will type it wrong).',
  },
  {
    question: 'Can I rename my app later if I pick the wrong name?',
    answer: 'Yes, but it\'s expensive and painful. Rebranding an established app costs $10K–$100K+ depending on your user base, and you\'ll lose SEO authority, brand recognition, and App Store rankings. Famous rebrands (Downtown Project → Zappos, BackRub → Google, FaceMash → Facebook) worked because they happened early, before millions of users. Name it right the first time — spend a few hours now to save thousands later.',
  },
]

const nameCategories = [
  {
    title: 'Productivity & Task Management',
    names: [
      'Taskflow', 'Docket', 'Planr', 'Orbitask', 'Agendly', 'Sprintly', 'Doist', 'Focusly', 'Rally', 'Tickmark',
      'Clearpath', 'Workrhythm', 'Nextstep', 'Momentum', 'Flowstate',
    ],
  },
  {
    title: 'Communication & Messaging',
    names: [
      'Pingboard', 'Chatterly', 'Loopline', 'Burst', 'Speakly', 'Threadline', 'Hivechat', 'Vocali', 'Echohub', 'Signalpath',
      'Conversa', 'Channl', 'Syncword', 'Relaytalk', 'Waveconnect',
    ],
  },
  {
    title: 'Finance & Payments',
    names: [
      'Ledgr', 'Paymint', 'Cashflow', 'Equityx', 'Budgetly', 'Cointrek', 'Splitcheck', 'Finova', 'Clearpay', 'Vaultwise',
      'Mintpath', 'Centsible', 'Paytrack', 'Wealthify', 'Balancely',
    ],
  },
  {
    title: 'Health & Fitness',
    names: [
      'Vitarun', 'Pulsely', 'Moveapp', 'Fitvault', 'Stridetrack', 'Wellpath', 'Calorily', 'Habitforge', 'Zenflow', 'Endurely',
      'Pulsepoint', 'Breathely', 'Bodytrack', 'Stretchr', 'Activebeat',
    ],
  },
  {
    title: 'Education & Learning',
    names: [
      'Learnscape', 'Skillflow', 'Brainshelf', 'Studyly', 'Coursely', 'Knowhub', 'Graspit', 'Masterypath', 'Cognition', 'Thinkly',
      'Lectura', 'Eduspark', 'Flashvault', 'Mindforge', 'Tutorloop',
    ],
  },
  {
    title: 'Social & Community',
    names: [
      'Crewlink', 'Famly', 'Gathr', 'Tribevine', 'Circleup', 'Peoply', 'Connecta', 'Linkhive', 'Bondr', 'Kithub',
      'Socialarc', 'Meetpoint', 'Huddleup', 'Neighborly', 'Communityx',
    ],
  },
  {
    title: 'Creative & Design',
    names: [
      'Canvasly', 'Draftpath', 'Pixelhive', 'Colorway', 'Artsync', 'Designr', 'Sketchflow', 'Creately', 'Stylos', 'Visually',
      'Moodboard', 'Palettr', 'Designlab', 'Framecraft', 'Studioforge',
    ],
  },
  {
    title: 'Food & Delivery',
    names: [
      'Plateme', 'Bitepath', 'Cookly', 'Freshdrop', 'Tastify', 'Mealmix', 'Orderly', 'Kitchenlink', 'Nourishly', 'Foodrhythm',
      'Menumatch', 'Pantryapp', 'Recipely', 'Savourit', 'Chefpath',
    ],
  },
  {
    title: 'Travel & Navigation',
    names: [
      'Waypath', 'Routely', 'Globetrek', 'Flyright', 'Navigo', 'Trekkit', 'Wanderapp', 'Tripshift', 'Compassly', 'Journeyx',
      'Mapforge', 'Explorely', 'Arrival', 'Transitlink', 'Destinly',
    ],
  },
  {
    title: 'Developer Tools & Infrastructure',
    names: [
      'Codestream', 'Pipeline', 'Deployly', 'Stacksync', 'Devhub', 'Buildr', 'Gitpath', 'Terminalx', 'Infraworks', 'Apexstack',
      'Debugly', 'Containr', 'Cloudbuild', 'Shipit', 'Envault',
    ],
  },
]

const namingFrameworks = [
  {
    name: 'The Compound Blend',
    description: 'Combine two short words into one seamless name. Easy to understand, hard to forget.',
    examples: [
      { name: 'Calendly', why: 'Calendar + kindly — scheduling that feels friendly' },
      { name: 'Basecamp', why: 'Base + camp — your central project hub' },
      { name: 'Dropbox', why: 'Drop + box — files you can drop anywhere' },
      { name: 'Evernote', why: 'Ever + note — notes that last forever' },
      { name: 'Figma', why: 'Figure + sigma — design with mathematical precision' },
    ],
    strengths: ['Immediately descriptive', 'Easy to trademark', 'Domain-friendly (two short words = more options)'],
    weaknesses: ['Can feel generic if words are common', 'Need both words to be short'],
    bestFor: 'SaaS, productivity tools, apps with a clear function',
  },
  {
    name: 'The Evocative Metaphor',
    description: 'Use a word from a completely different domain that captures the feeling of your app.',
    examples: [
      { name: 'Slack', why: 'Suggests casual, flexible communication' },
      { name: 'Notion', why: 'Evokes thinking, ideas, and mental models' },
      { name: 'Canva', why: 'Evokes canvas — a blank space for creativity' },
      { name: 'Spotify', why: 'Suggests "spot" and "identify" — finding music' },
      { name: 'Loom', why: 'A loom weaves threads together — video threads' },
    ],
    strengths: ['Highly memorable', 'Rich storytelling potential', 'Room for brand evolution'],
    weaknesses: ['Takes marketing to connect the metaphor to the product', 'Risk of being too abstract'],
    bestFor: 'Consumer apps, social apps, products where emotion drives adoption',
  },
  {
    name: 'The Short & Punchy',
    description: 'One short word, 4–6 letters, easy to type on a phone. Pure brandability.',
    examples: [
      { name: 'Zoom', why: 'Speed + connection in 4 letters' },
      { name: 'Figma', why: 'Design + precision in 5 letters' },
      { name: 'Vine', why: 'Short like the videos — 4 letters' },
      { name: 'Duo', why: 'Two people, one call — 3 letters' },
      { name: 'Trello', why: 'Friendly and round, like "trill" — 6 letters' },
    ],
    strengths: ['Maximum memorability', 'Perfect for mobile', 'Great for app icons'],
    weaknesses: ['Hard to find available .com domains', 'May need marketing to build meaning'],
    bestFor: 'Consumer apps, social apps, mobile-first products',
  },
  {
    name: 'The Invented Word',
    description: 'Make up a word that sounds right. Maximum distinctiveness, zero competition.',
    examples: [
      { name: 'Kodak', why: 'Invented by George Eastman — he liked the letter K' },
      { name: 'Etsy', why: 'Short, catchy, sounds like "etsy" = easy' },
      { name: 'Skype', why: 'Sky + peer — calling through the sky' },
      { name: 'Doodle', why: 'Playful, easy, sounds like what it is' },
      { name: 'Waze', why: 'Ways + ease — easy navigation' },
    ],
    strengths: ['Completely ownable', 'No SEO competition', 'Works globally'],
    weaknesses: ['Requires significant marketing investment', 'No inherent meaning to anchor on'],
    bestFor: 'Startups with marketing budget, products targeting global audiences',
  },
  {
    name: 'The Verbed Noun',
    description: 'Take a noun and add action. Implies doing something with your app.',
    examples: [
      { name: 'Shopify', why: 'Shop + ify — turn anything into a shop' },
      { name: 'Spotify', why: 'Spot + ify — identify and play music' },
      { name: 'Simplifi', why: 'Simplify + ifi — make finances simple' },
      { name: 'Honey', why: 'A sweet noun that finds you savings' },
      { name: 'Robinhood', why: 'A noun that means taking from the rich — democratizing finance' },
    ],
    strengths: ['Implies action and utility', 'Easy to understand', 'Often has domains available'],
    weaknesses: ['The "-ify" trend feels dated', 'Can sound like a generic product'],
    bestFor: 'Utility apps, fintech, e-commerce, tools with a clear action',
  },
  {
    name: 'The Founder Name',
    description: 'Named after the founder. Bold, personal, and impossible to copy.',
    examples: [
      { name: 'Zuckerberg (→ Meta)', why: 'Named after the founder — eventually evolved beyond' },
      { name: 'Ben & Jerry\'s', why: 'Two founders, one brand' },
      { name: 'Warby Parker', why: 'Two characters from Jack Kerouac novels' },
      { name: 'Moz', why: 'Named after founder Rand Fishkin\'s mom' },
      { name: 'Bezos (→ Amazon)', why: 'Named after a river, not the founder — but could have been' },
    ],
    strengths: ['Authentic and personal', 'Great for personal brands', 'Unique by definition'],
    weaknesses: ['Hard to sell the company later', 'Doesn\'t describe what you do', 'Can create confusion in B2B'],
    bestFor: 'Personal brand apps, consulting tools, products where founder credibility matters',
  },
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
  { name: 'Marketing Agency', href: '/marketing-agency-name-generator' },
]

const relatedPosts = [
  { slug: 'product-naming-guide', title: 'Product Naming Guide: How to Name a Product That Sells', excerpt: 'The 5 naming frameworks behind Slack, Notion, and Tesla' },
  { slug: 'product-name-generator', title: 'Product Name Generator: 250+ Product Name Ideas', excerpt: '250+ product name ideas and 6 naming frameworks' },
  { slug: 'youtube-channel-name-generator', title: 'YouTube Channel Name Generator: 300+ Channel Name Ideas', excerpt: '300+ YouTube channel name ideas and 7 naming strategies from top creators' },
  { slug: 'how-to-choose-business-name', title: 'How to Choose a Business Name: The Complete Guide', excerpt: 'From brainstorming to trademark — everything you need' },
  { slug: 'brand-name-generator', title: 'Brand Name Generator: How to Find the Perfect Brand Name', excerpt: '7 naming styles behind iconic brands' },
  { slug: 'cool-business-names', title: 'Cool Business Names: 150+ Ideas', excerpt: '150+ cool names organized by industry' },
]

export default function AppNameGeneratorPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <BlogPostSchema
        url="https://brandforge-phi-pearl.vercel.app/blog/app-name-generator"
        title="App Name Generator: 200+ App Name Ideas for 2026 + Free AI Tool"
        description="200+ app name ideas across 10 categories, 6 proven naming frameworks behind hit apps like Slack, Notion, and Calendly, and a free AI generator that checks domain availability instantly."
        datePublished="2026-07-13T12:00:00.000Z"
        dateModified="2026-07-13T12:00:00.000Z"
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
                  { '@type': 'ListItem', position: 3, name: 'App Name Generator', item: 'https://brandforge-phi-pearl.vercel.app/blog/app-name-generator' },
                ],
              },
            ],
          }),
        }}
      />

      {/* Header */}
      <header className="mb-12">
        <p className="text-sm font-semibold text-brand-600 tracking-wide uppercase mb-3">App Naming</p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          App Name Generator: 200+ App Name Ideas for 2026
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-3xl">
          200+ app name ideas across 10 categories, 6 naming frameworks behind hit apps like Slack, Notion, and Calendly, and a free AI tool that checks domain availability instantly.
        </p>
        <div className="mt-6 flex items-center gap-4 text-sm text-slate-400">
          <time dateTime="2026-07-13">July 13, 2026</time>
          <span>·</span>
          <span>14 min read</span>
        </div>
      </header>

      {/* CTA */}
      <div className="mb-12 rounded-2xl bg-gradient-to-br from-brand-50 via-white to-purple-50 p-6 sm:p-8 text-center border border-brand-100">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
          Generate Your App Name Free
        </h2>
        <p className="text-slate-600 mb-4">
          Get AI-powered app name ideas with instant domain and social handle availability checks.
        </p>
        <a href="/generate" className="btn-primary text-base px-8 py-3">
          Generate App Names Free →
        </a>
      </div>

      {/* Name Categories */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-8">
          200+ App Name Ideas by Category
        </h2>
        <p className="text-slate-600 mb-8">
          Browse app name ideas organized by category. Each name follows the naming principles we break down below — short, memorable, and ownable.
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

      {/* Naming Frameworks */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4">
          6 App Naming Frameworks (with Real Examples)
        </h2>
        <p className="text-slate-600 mb-8">
          The best app names aren't random — they follow repeatable patterns. Here are the 6 frameworks that produced Slack, Calendly, Zoom, and other iconic apps.
        </p>
        <div className="space-y-10">
          {namingFrameworks.map((framework, idx) => (
            <div key={framework.name} className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
              <div className="bg-gradient-to-r from-brand-600 to-purple-600 p-6 text-white">
                <p className="text-sm font-medium text-brand-200 mb-1">Framework {idx + 1}</p>
                <h3 className="text-xl font-bold">{framework.name}</h3>
                <p className="mt-2 text-brand-100">{framework.description}</p>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Real Examples</p>
                  <div className="space-y-3">
                    {framework.examples.map((example) => (
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
                      {framework.strengths.map((s) => (
                        <li key={s} className="text-sm text-slate-600">• {s}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-amber-600 mb-2">⚠ Watch Out</p>
                    <ul className="space-y-1">
                      {framework.weaknesses.map((w) => (
                        <li key={w} className="text-sm text-slate-600">• {w}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="mt-4 text-sm text-slate-500">
                  <span className="font-semibold text-slate-700">Best for:</span> {framework.bestFor}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5-Step Naming Process */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4">
          How to Name Your App in 5 Steps
        </h2>
        <p className="text-slate-600 mb-8">
          Follow this proven process to find a name that's memorable, available, and built to scale.
        </p>
        <div className="space-y-6">
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <div className="flex items-start gap-4">
              <span className="inline-flex items-center justify-center rounded-full bg-brand-600 text-white text-sm font-bold w-8 h-8 flex-shrink-0">1</span>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Define Your App's Personality</h3>
                <p className="mt-2 text-slate-600">List 5 adjectives that describe your app's vibe. Is it fast? Friendly? Professional? Playful? These adjectives become your naming filters. Slack feels casual and flexible. Notion feels smart and organized. Canva feels creative and accessible. Your name should match your personality.</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <div className="flex items-start gap-4">
              <span className="inline-flex items-center justify-center rounded-full bg-brand-600 text-white text-sm font-bold w-8 h-8 flex-shrink-0">2</span>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Generate 50+ Name Ideas Across Frameworks</h3>
                <p className="mt-2 text-slate-600">Use all 6 naming frameworks to brainstorm. Try compound blends (2 short words), evocative metaphors, short punchy words, invented words, verbed nouns, and founder names. Generate at least 8 names per framework — quantity leads to quality. <a href="/generate" className="text-brand-600 hover:text-brand-700 font-medium">Use BrandForge's AI generator →</a></p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <div className="flex items-start gap-4">
              <span className="inline-flex items-center justify-center rounded-full bg-brand-600 text-white text-sm font-bold w-8 h-8 flex-shrink-0">3</span>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Filter to Your Top 10</h3>
                <p className="mt-2 text-slate-600">Apply the 6-rule filter: (1) Under 3 syllables, (2) Easy to spell on the first try, (3) Easy to say in a sentence, (4) No hyphens or numbers, (5) Feels like your personality, (6) Not easily confused with an existing app. If a name fails any rule, cut it.</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <div className="flex items-start gap-4">
              <span className="inline-flex items-center justify-center rounded-full bg-brand-600 text-white text-sm font-bold w-8 h-8 flex-shrink-0">4</span>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Validate Availability</h3>
                <p className="mt-2 text-slate-600">Check your top 10 for: (1) .com, .app, or .io domain availability, (2) App Store and Google Play search results, (3) USPTO trademark search, (4) Social media handle availability. BrandForge checks domain and social availability automatically. <a href="/generate" className="text-brand-600 hover:text-brand-700 font-medium">Try it free →</a></p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <div className="flex items-start gap-4">
              <span className="inline-flex items-center justify-center rounded-full bg-brand-600 text-white text-sm font-bold w-8 h-8 flex-shrink-0">5</span>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Test with Real People</h3>
                <p className="mt-2 text-slate-600">Say your top 3–5 names to 10 people and ask: (1) Can you spell it after hearing it once? (2) What does it make you think of? (3) Would you download an app with this name? The name that passes all three tests wins. Don't skip this step — your intuition will mislead you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App vs Product vs Company Naming */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4">
          App vs. Product vs. Company Naming: What's Different?
        </h2>
        <p className="text-slate-600 mb-6">
          App naming has unique constraints that company and product naming don't. Here's what changes:
        </p>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900">Factor</th>
                <th className="px-4 py-3 font-semibold text-slate-900">App Naming</th>
                <th className="px-4 py-3 font-semibold text-slate-900">Product Naming</th>
                <th className="px-4 py-3 font-semibold text-slate-900">Company Naming</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="px-4 py-3 font-medium text-slate-900">Ideal length</td>
                <td className="px-4 py-3 text-slate-600">1–2 syllables, 4–8 chars</td>
                <td className="px-4 py-3 text-slate-600">1–3 syllables</td>
                <td className="px-4 py-3 text-slate-600">1–4 syllables</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-slate-900">Domain priority</td>
                <td className="px-4 py-3 text-slate-600">.app or .io acceptable</td>
                <td className="px-4 py-3 text-slate-600">.com preferred</td>
                <td className="px-4 py-3 text-slate-600">.com required</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-slate-900">Must work in</td>
                <td className="px-4 py-3 text-slate-600">App icon, push notification, 1-line bio</td>
                <td className="px-4 py-3 text-slate-600">Website, packaging, ad copy</td>
                <td className="px-4 py-3 text-slate-600">Website, email, legal docs</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-slate-900">Uniqueness bar</td>
                <td className="px-4 py-3 text-slate-600">Very high — App Store competition</td>
                <td className="px-4 py-3 text-slate-600">High — category + marketplace</td>
                <td className="px-4 py-3 text-slate-600">Moderate — industry-specific</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-slate-900">Best style</td>
                <td className="px-4 py-3 text-slate-600">Suggestive or invented</td>
                <td className="px-4 py-3 text-slate-600">Suggestive or metaphorical</td>
                <td className="px-4 py-3 text-slate-600">Descriptive or suggestive</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Naming Mistakes */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4">
          6 App Naming Mistakes That Kill Downloads
        </h2>
        <p className="text-slate-600 mb-8">
          These mistakes are common — and expensive. Learn from the apps that got it wrong.
        </p>
        <div className="space-y-4">
          <div className="rounded-xl border border-red-100 bg-red-50 p-6">
            <h3 className="font-bold text-red-900 mb-1">❌ Adding "App" to Your Name</h3>
            <p className="text-sm text-red-800">WeatherApp, NoteApp, FitnessApp — these are generic and forgettable. The App Store already tells people you're an app. Instead: <span className="font-semibold">Pick a name that stands on its own</span>. Slack doesn't call itself "ChatApp." Canva doesn't call itself "DesignApp."</p>
          </div>
          <div className="rounded-xl border border-red-100 bg-red-50 p-6">
            <h3 className="font-bold text-red-900 mb-1">❌ Using a Name That's Hard to Spell</h3>
            <p className="text-sm text-red-800">If someone can't type your app name after hearing it once, they'll never find you. "Xytify" might look cool, but it's a spelling minefield. Instead: <span className="font-semibold">Use the "phone test" — say it once, ask someone to spell it.</span> If they get it wrong, pick another name.</p>
          </div>
          <div className="rounded-xl border border-red-100 bg-red-50 p-6">
            <h3 className="font-bold text-red-900 mb-1">❌ Copying a Competitor's Naming Style</h3>
            <p className="text-sm text-red-800">If you see five apps in your category using the "-ify" suffix, that's a signal to go the opposite direction. Copying makes you forgettable. Instead: <span className="font-semibold">Differentiate.</span> Calendly stood out in scheduling by NOT using "Book" or "Schedule" in the name.</p>
          </div>
          <div className="rounded-xl border border-red-100 bg-red-50 p-6">
            <h3 className="font-bold text-red-900 mb-1">❌ Naming for Your Feature, Not Your Outcome</h3>
            <p className="text-sm text-red-800">"TaskManager Pro" describes a feature, not a feeling. Features change — outcomes are timeless. Instead: <span className="font-semibold">Name the transformation.</span> Slack → effortless communication. Notion → organized thinking. Zoom → instant connection.</p>
          </div>
          <div className="rounded-xl border border-red-100 bg-red-50 p-6">
            <h3 className="font-bold text-red-900 mb-1">❌ Skipping the Availability Check</h3>
            <p className="text-sm text-red-800">Falling in love with a name before checking if the domain, social handles, and App Store listing are available is the #1 time-waster in naming. Instead: <span className="font-semibold">Check availability before you get attached.</span> BrandForge checks domain and social handles automatically.</p>
          </div>
          <div className="rounded-xl border border-red-100 bg-red-50 p-6">
            <h3 className="font-bold text-red-900 mb-1">❌ Not Checking International Meanings</h3>
            <p className="text-sm text-red-800">Your app name might mean something offensive or absurd in another language. The Chevy Nova = "no go" in Spanish is the classic example. Instead: <span className="font-semibold">Google your top names + "meaning in [language]"</span> before committing.</p>
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
          Common questions about app naming, answered.
        </p>
        <div className="space-y-4">
          {FAQ_ITEMS.map((faq, i) => (
            <details key={i} className="group rounded-2xl border border-slate-200 bg-white">
              <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-base font-semibold text-slate-900 hover:bg-slate-50 transition-colors rounded-2xl">
                {faq.question}
                <svg
                  className="h-5 w-5 text-slate-400 flex-shrink-0 ml-4 transition-transform duration-200 group-open:rotate-180"
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
          Ready to Name Your App?
        </h2>
        <p className="text-brand-100 mb-6 max-w-xl mx-auto">
          Get AI-powered app name ideas with instant domain and social handle availability checks. Free to start, no credit card required.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/generate" className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-brand-700 hover:bg-brand-50 transition-colors">
            Generate App Names Free →
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