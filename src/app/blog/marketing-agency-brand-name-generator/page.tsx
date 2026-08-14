/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import { BlogNewsletterSection } from '@/components/BlogNewsletterSection'
import { BlogPostSchema } from '@/components/BlogPostSchema'

export const dynamic = 'force-static'
export const metadata: Metadata = {
  title: 'Marketing Agency Name Generator: 300+ Marketing Agency Name Ideas for 2026 + Free AI Tool',
  description: '300+ marketing agency name ideas across 10 categories, 7 proven naming strategies from top agencies, and a free AI generator that checks domain & social availability instantly.',
  keywords: [
    'marketing agency name generator',
    'marketing agency names',
    'digital marketing agency name ideas',
    'ad agency name ideas',
    'creative agency names',
    'marketing firm names',
    'branding agency name ideas',
    'digital agency names',
    'growth agency names',
    'advertising agency name ideas',
    'marketing company names',
    'media agency names',
    'best marketing agency names',
    'creative marketing agency names',
    'catchy agency names',
    'marketing agency naming tips',
    'how to name a marketing agency',
    'marketing agency branding ideas',
    'agency name ideas 2026',
    'consulting agency names',
  ],
  openGraph: {
    title: 'Marketing Agency Name Generator: 300+ Marketing Agency Name Ideas for 2026 + Free AI Tool',
    description: '300+ marketing agency name ideas across 10 categories, 7 naming strategies from top agencies, and a free AI generator with domain & social availability checks.',
    url: 'https://brandforge.app/blog/marketing-agency-brand-name-generator',
    siteName: 'BrandForge',
    type: 'article',
    publishedTime: '2026-08-13T12:00:00.000Z',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Marketing Agency Name Generator: 300+ Marketing Agency Name Ideas for 2026',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketing Agency Name Generator: 300+ Marketing Agency Name Ideas for 2026',
    description: '300+ marketing agency name ideas by category, 7 naming strategies from top agencies, and a free AI generator that checks domain availability.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: 'https://brandforge.app/blog/marketing-agency-brand-name-generator',
  },
  robots: { index: true, follow: true },
}

const CATEGORIES = [
  {
    name: 'Digital Marketing Agency Names',
    names: ['Signal & Scale', 'Prism Growth', 'Amplify Digital', 'Catalyst Marketing', 'Pivot Agency', 'Meridian Digital', 'Vertex Marketing', 'Nexus Digital Group', 'Elevate Agency', 'Metric & Bloom', 'Forge Digital', 'Stratos Marketing', 'Apex Digital Agency', 'BrightFunnel', 'Quant Growth', 'SignalPath Marketing', 'Crest Digital', 'Vantage Media', 'Momentum Digital', 'Clearpoint Agency', 'Northstar Digital', 'Basecamp Marketing', 'Ascent Agency', 'Helix Digital', 'Lift Marketing Group', 'Pulse Digital', 'Optima Agency', 'Reach Digital', 'Altitude Marketing', 'Prism Digital Co.'],
  },
  {
    name: 'Creative & Branding Agency Names',
    names: ['Ember Creative', 'Forge & Frame', 'Lumen Creative', 'Palette Studio', 'Canopy Creative', 'Wander Brand Co.', 'Chromatic Agency', 'Daybreak Creative', 'Murmur Brand Studio', 'Signal Creative', 'Arch Creative Group', 'Ritual Branding', 'Aura Creative', 'Parallax Studio', 'Mosaic Brand Co.', 'Flint Creative', 'Thread & Story', 'Ember & Oak Creative', 'Fable Branding', 'Wonder Studio', 'Prism Creative', 'Verve Brand Agency', 'Drift Creative Co.', 'Kinetic Branding', 'Studio Meridian', 'Proper Creative', 'Ember Brand Lab', 'Origami Studio', 'Bloom Creative Group', 'Sterling Brand Co.'],
  },
  {
    name: 'Growth & Performance Agency Names',
    names: ['ScaleUp Agency', 'GrowthForge', 'Ascend Performance', 'RocketFuel Marketing', 'Launchpad Growth', 'Traction Agency', 'Accelerate Marketing', 'Uplift Performance', 'Momentum Growth', 'Catalyst Performance', 'GrowthLab', 'Velocity Agency', 'Lift & Scale', 'Amplify Growth', 'Elevation Performance', 'Propel Marketing', 'Thrive Agency', 'Optimize Co.', 'Surge Growth', 'Peak Performance Marketing', 'Progress Agency', 'Scalebound', 'Compound Growth', 'Gains Marketing', 'Forward Momentum', 'Outpace Agency', 'GrowthEngine', 'Momentum Labs', 'ScaleCraft Agency', 'Catalyst Growth Co.'],
  },
  {
    name: 'Social Media Agency Names',
    names: ['BuzzHive Agency', 'ViralCraft', 'TrendForge', 'SocialPulse', 'Hashtag & Co.', 'Vibe Social', 'Tidal Social Agency', 'WaveMaker Social', 'Spark Social', 'Thread Social', 'Cultivate Agency', 'Social Current', 'Magnet Social', 'Loop Agency', 'Ripple Social Co.', 'Echo Social', 'Current Agency', 'FlowState Social', 'Connect Agency', 'SocialForge', 'Amplify Social', 'Engage Agency', 'BuzzCraft Social', 'TrendLab', 'Social Prism', 'Catalyst Social', 'Pulse Social Group', 'Swarm Agency', 'Hive Social', 'Buzzworthy Co.'],
  },
  {
    name: 'Content Marketing Agency Names',
    names: ['Inkwell Agency', 'Narrative Marketing', 'StoryForge', 'ContentCraft', 'Chapter & Verse', 'Pen & Pivot', 'Prose Agency', 'Dispatch Marketing', 'Volume Content Co.', 'Leadline Agency', 'Draft & Develop', 'VoiceBox Marketing', 'CopyForge', 'The Content Lab', 'NarrativeArc', 'Quill Agency', 'Pressplay Marketing', 'Storyline Agency', 'ContentCatalyst', 'Manuscript Co.', 'DraftCraft Agency', 'NarrativeForge', 'Substance Marketing', 'Ledger Agency', 'Parchment Content', 'Typewriter Co.', 'ContentMint', 'The Story Bureau', 'Ink & Impact', 'VoiceCraft Agency'],
  },
  {
    name: 'PR & Communications Firm Names',
    names: ['Bulldog PR', 'CrisisCraft', 'PressForge', 'Reputation Lab', 'Aperture Communications', 'PulsePoint PR', 'Bridge Communications', 'Meridian PR', 'Signal Public Relations', 'Vanguard Communications', 'Clarion PR', 'Threshold Communications', 'Bulwark PR Group', 'Torch Communications', 'Ironclad PR', 'Guardian Communications', 'ClearPath PR', 'Sentinel Media Relations', 'Compass Communications', 'Bastion PR', 'Forward Communications', 'Bulwark Agency', 'Resolve PR', 'Beacon Communications', 'Platform PR', 'Crest Communications', 'Aegis Public Relations', 'Pillar PR Group', 'Torch Communications Group', 'Horizon PR'],
  },
  {
    name: 'Boutique Agency Names',
    names: ['Atelier Agency', 'Craft & Kin', 'Oyster Co.', 'Marble & Clay', 'Hearth Agency', 'Vineyard Studio', 'Portico Agency', 'Linden & Co.', 'Terracotta Agency', 'Heron Marketing', 'Willow Agency', 'Sable & Finch', 'Copper House Agency', 'Juniper Co.', 'Orchid Agency', 'Ember & Stone', 'Indigo Marketing', 'Cedar Agency', 'Moss & Fern', 'Falcon Studio', 'Cottage Agency', 'Magnolia Co.', 'Stonecrop Agency', 'Birch & Ivy', 'Poppy Marketing', 'Thistle Agency', 'Sage & Salt', 'Olive Branch Co.', 'Ash Agency', 'Foxglove Studio'],
  },
  {
    name: 'Data-Driven & Analytics Agency Names',
    names: ['DataForge', 'MetricLab', 'Quanta Agency', 'Signal Analytics', 'InsightEngine', 'MeasureUp Agency', 'Precision Marketing', 'DataPulse', 'ClearMetric', 'Foresight Agency', 'Inflection Point', 'Calculus Co.', 'Proof Marketing', 'MetricCraft', 'Quant Agency', 'DataLens', 'Baseline Agency', 'SignalPoint Marketing', 'AnalyticsForge', 'InsightLayer', 'DataVault Agency', 'MetricSmith', 'Equation Marketing', 'Parallax Data', 'Infra Agency', 'Data Current', 'MetricPath', 'Quantify Co.', 'TrendPoint Agency', 'MeasureCraft'],
  },
  {
    name: 'Full-Service Advertising Agency Names',
    names: ['Campaign Agency', 'FullSpectrum Marketing', 'Omnichannel Co.', '360 Agency', 'FullCircle Marketing', 'VantagePoint Agency', 'Atlas Advertising', 'Horizon Marketing Group', 'Panorama Agency', 'Bridgehead Advertising', 'Summit Agency', 'Compass Marketing', 'Meridian Advertising', 'Pinnacle Agency', '360Brand Co.', 'AllPoints Marketing', 'Sterling Advertising', 'Landmark Agency', 'Keystone Marketing Group', 'Apex Advertising', 'Catalyst Agency', 'Alliance Marketing', 'Vanguard Advertising', 'Pillar Agency', 'Mosaic Marketing Group', 'Foundation Advertising', 'Crest Agency', 'Monument Marketing', 'Summit Advertising Co.', 'Beacon Agency'],
  },
  {
    name: 'Modern & Abstract Agency Names',
    names: ['KINETIC', 'FLUX Agency', 'NEXUS Co.', 'VECTOR Marketing', 'PRISM Agency', 'SHIFT', 'AXIS Group', 'ECHO Agency', 'DRIFT', 'CANVAS Co.', 'NODE Agency', 'ARC Marketing', 'STRATA', 'FRAME Agency', 'LEVEL Co.', 'SIGNAL Agency', 'MESH Marketing', 'CURRENT', 'TERRACE Agency', 'PEAK Co.', 'ORBIT Agency', 'VAULT Marketing', 'RADIUS', 'HELIX Agency', 'SURGE Co.', 'ATLAS Marketing', 'VERTEX Agency', 'PRIME', 'CANOPY Agency', 'CONTOUR'],
  },
]

const NAMING_STRATEGIES = [
  {
    name: 'Action & Result-Based',
    description: 'Names that evoke the outcome your agency delivers — growth, scale, momentum.',
    examples: 'Amplify Digital, ScaleUp Agency, Catalyst Marketing, Elevate Agency',
    why: 'Clients hire agencies for results, not process. Names like Amplify, ScaleUp, and Catalyst speak directly to what clients want — more leads, more revenue, more growth. These names sell the outcome before you say a word.',
  },
  {
    name: 'Metaphor & Symbol-Based',
    description: 'Names that use visual metaphors to create instant brand recognition.',
    examples: 'Prism Growth, Signal & Scale, Ember Creative, Northstar Digital',
    why: 'Metaphors create mental images that stick. "Prism" suggests revealing hidden value. "Signal" cuts through noise. "Northstar" provides direction. These names give your agency an instant visual identity — before you even design a logo.',
  },
  {
    name: 'The "Two-Word" Format',
    description: 'Two complementary words joined by "&" or side by side — the most popular format for modern agencies.',
    examples: 'Signal & Scale, Forge & Frame, Ember & Oak Creative, Thread & Story',
    why: 'The two-word format dominates agency naming because it sounds intentional, not accidental. It lets you pair a strength word with a result word, creating immediate meaning. It also looks exceptional on business cards, proposals, and pitch decks.',
  },
  {
    name: 'Directional & Positional',
    description: 'Names that evoke position, height, or movement — suggesting leadership and forward momentum.',
    examples: 'Ascend Performance, Vertex Marketing, Elevation Agency, Meridian Digital',
    why: 'Directional names suggest authority and progress — exactly what clients want from an agency. "Ascend," "Vertex," and "Elevation" all imply upward movement and achievement. They also sound established and confident, which matters in B2B sales.',
  },
  {
    name: 'Personal Name + Agency',
    description: 'Your name (or a founder name) paired with "Agency," "Group," or "Co." — the most trusted format in consulting.',
    examples: 'Chen Agency, Patel Marketing Group, Rodriguez & Co., Williams Creative',
    why: 'In marketing and consulting, personal reputation is everything. Putting your name on the business says "I stand behind this work." It creates accountability and trust — especially for boutique and mid-market agencies competing against larger firms.',
  },
  {
    name: 'Craft & Making-Based',
    description: 'Names that emphasize the work itself — creating, building, forging.',
    examples: 'Forge Digital, StoryForge, ContentCraft, DataForge',
    why: '"Forge," "Craft," and "Build" signal hands-on, intentional work — not cookie-cutter solutions. These names work especially well for agencies that position themselves as strategic partners, not order-takers. They imply customization and care.',
  },
  {
    name: 'Niche-Specific',
    description: 'Names that immediately signal your specialty — growth, social, content, PR, or analytics.',
    examples: 'GrowthForge, SocialPulse, Inkwell Agency, DataForge',
    why: 'When a founder searches "growth marketing agency" and sees "GrowthForge" in the results, they click. Niche-specific names convert better in search because they match exactly what the client is looking for. If you\'re specializing anyway, your name should reflect it.',
  },
]

const NAMING_MISTAKES = [
  {
    title: 'Being too clever at the expense of clarity',
    description: '"QuarksDigital" sounds cool but tells a prospect nothing about what you do. Your agency name should signal expertise or outcome within 3 seconds. Cleverness that requires explanation is cleverness wasted. "Signal & Scale" is both distinctive and clear.',
  },
  {
    title: 'Using generic location + service',
    description: '"Austin Digital Marketing" or "Chicago SEO Group" — there are thousands of these. They\'re instantly forgettable and impossible to trademark. Worse, they limit your perceived geography. A distinctive name like "Prism Growth" works in any city and stands out in any market.',
  },
  {
    title: 'Choosing a name you can\'t say in a pitch',
    description: 'You\'ll introduce your agency hundreds of times — in calls, at conferences, in voicemails. "Hi, I\'m calling from Catalyst Marketing" should roll off your tongue. If you stumble over it, need to spell it, or feel awkward saying it, keep brainstorming. The "pitch test" eliminates more bad names than any other filter.',
  },
  {
    title: 'Forgetting the LinkedIn test',
    description: 'Agency clients are B2B — they\'ll check your LinkedIn before they call. If your name is too generic to find on LinkedIn, or worse, if there are 10 other agencies with the same name, you lose credibility. Search LinkedIn and Google before committing. BrandForge checks social availability automatically.',
  },
  {
    title: 'Naming for today instead of tomorrow',
    description: '"PPC Pros" locks you into paid advertising. "Social Media Sarah" locks you into one channel. If you plan to expand services — and most agencies do — choose a name that gives you room. "Prism," "Signal & Scale," and "Vantage" work across channels and services.',
  },
  {
    title: 'Copying the competition',
    description: 'If every agency in your niche is named "[Word] Digital" or "[Word] Marketing," naming yourself the same way makes you forgettable. Open a list of your top 20 competitors. Look at their names. Then pick something that sounds nothing like any of them. Differentiation starts with the name.',
  },
  {
    title: 'Skipping trademark research',
    description: 'The marketing agency space is crowded with trademarks. Before you commit to a name, search the USPTO database for existing registrations in Class 35 (Advertising & Business). A naming conflict can force a rebrand — new website, new business cards, new proposals, new LinkedIn. Do the research upfront.',
  },
]

const FAQ_ITEMS = [
  {
    question: 'How does the marketing agency name generator work?',
    answer: 'Describe your agency — your specialty (digital, creative, growth, PR, social), your ideal client type (startups, enterprise, e-commerce, local businesses), and your brand vibe (bold, trustworthy, playful, premium). BrandForge\'s AI generates custom name suggestions paired with complete brand kits including logo concepts, color palettes, taglines, and domain/social availability checks.',
  },
  {
    question: 'Is the marketing agency name generator free?',
    answer: 'Yes! You can generate marketing agency name ideas for free — 5 suggestions per search, unlimited searches, no credit card required. Unlock the full brand kit (logo, colors, tagline, typography, domain & social checks) for $9 per brand kit.',
  },
  {
    question: 'What makes a good marketing agency name?',
    answer: 'A great agency name signals expertise and builds trust before you say a word. It should be easy to pronounce in client meetings, easy to spell after hearing it once, and available as a .com domain and on LinkedIn. The best agency names evoke a result — growth, signal, clarity, impact — rather than just describing what you do.',
  },
  {
    question: 'Should I use "agency" or "marketing" in my name?',
    answer: 'It depends on your strategy. Including "agency" or "marketing" helps with immediate recognition and SEO, but can limit perception as you expand services. If you plan to stay focused on marketing, include it. If you want flexibility, use a distinctive name that stands alone: "Prism" or "Vantage" work across services. The "Two-Word" format (Signal & Scale) offers the best of both worlds.',
  },
  {
    question: 'How do I check if a marketing agency name is available?',
    answer: 'Check three things: (1) Domain availability — use our free checker at brandforge.app/generate or search on Namecheap. (2) Social handles — especially LinkedIn and Instagram, which are critical for agencies. (3) Business registration — search your state\'s business registry and USPTO.gov for existing trademarks. BrandForge checks domain and social availability automatically.',
  },
  {
    question: 'What naming styles work best for marketing agencies?',
    answer: 'The top styles for agencies in 2026: (1) Two-word format — Signal & Scale, Forge & Frame. (2) Directional/metaphor names — Northpoint, Vantage, Prism. (3) One-word brand names — Catalyst, Ember, Shift. (4) Founder + specialty — "[Name] Growth" or "[Name] Creative." (5) Action & result names — Amplify, ScaleUp, Elevate.',
  },
  {
    question: 'Can I use these names for my agency?',
    answer: 'Yes! All names you generate are yours to use commercially — for business registration, website, LinkedIn, proposals, and marketing materials. There are no licensing restrictions. Just make sure to check trademark availability for your final choice using USPTO.gov.',
  },
  {
    question: 'How much does it cost to name a marketing agency?',
    answer: 'BrandForge is free for generating unlimited name ideas with domain and social availability checks. A complete brand kit (logo concept, color palette, tagline, typography recommendations) is $9 one-time. Traditional naming agencies charge $5,000–$50,000+ for similar deliverables. Most agencies spend $0 on naming — they pick something and move on. But the right name can be worth thousands in client acquisition.',
  },
]

const INDUSTRY_LINKS = [
  { name: '📱 Marketing Agency Name Generator', href: '/marketing-agency-name-generator', desc: 'Generate marketing agency names with full brand kits' },
  { name: '🚀 Startup Name Generator', href: '/startup-name-generator', desc: 'Name your startup with AI' },
  { name: '🏢 Company Name Generator', href: '/blog/company-name-generator', desc: '250+ company name ideas' },
  { name: '💡 SaaS Name Generator', href: '/blog/saas-name-generator', desc: '300+ SaaS name ideas' },
  { name: '📋 How to Choose a Business Name', href: '/blog/how-to-choose-business-name', desc: 'Complete naming guide for 2026' },
  { name: '🏗️ How to Build a Brand Identity', href: '/blog/how-to-build-brand-identity', desc: 'From name to complete brand identity' },
  { name: '🏷️ Brand Name Generator', href: '/blog/brand-name-generator', desc: 'Find the perfect brand name' },
  { name: '🔍 Company Name Checker', href: '/blog/company-name-checker', desc: 'Verify your name is available' },
  { name: '💻 Tech Name Generator', href: '/tech-name-generator', desc: 'Name your tech company or product' },
  { name: '📊 Consulting Name Generator', href: '/consulting-name-generator', desc: 'Name your consulting practice' },
]

export default function MarketingAgencyBrandNameGeneratorPage() {
  return (
    <>
      <BlogPostSchema
        title="Marketing Agency Name Generator: 300+ Marketing Agency Name Ideas for 2026 + Free AI Tool"
        description="300+ marketing agency name ideas across 10 categories, 7 naming strategies from top agencies, and a free AI generator with domain & social availability checks."
        url="https://brandforge.app/blog/marketing-agency-brand-name-generator"
        datePublished="2026-08-13"
        dateModified="2026-08-13"
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
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: 'https://brandforge.app',
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Blog',
                    item: 'https://brandforge.app/blog',
                  },
                  {
                    '@type': 'ListItem',
                    position: 3,
                    name: 'Marketing Agency Name Generator',
                    item: 'https://brandforge.app/blog/marketing-agency-brand-name-generator',
                  },
                ],
              },
            ],
          }),
        }}
      />

      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">Naming</span>
            <span className="text-sm text-slate-500">15 min read</span>
            <span className="text-sm text-slate-400">·</span>
            <time className="text-sm text-slate-500" dateTime="2026-08-13">August 13, 2026</time>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Marketing Agency Name Generator: 300+ Marketing Agency Name Ideas for 2026 + Free AI Tool
          </h1>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Starting a marketing agency? Your name is your first impression — and in a crowded industry,
            it needs to be unforgettable. We've analyzed hundreds of successful agency names to bring you
            300+ marketing agency name ideas organized by category, 7 naming strategies that actually work,
            and a free AI tool that checks domain and social availability instantly.
          </p>

          {/* CTA */}
          <div className="mt-8 rounded-2xl bg-gradient-to-br from-blue-50 via-white to-indigo-50 border border-blue-100 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex-1">
                <h2 className="text-lg font-bold text-slate-900">Generate Your Agency Name Now ↓</h2>
                <p className="mt-1 text-sm text-slate-600">Free AI-powered name generation with domain & social availability checks.</p>
              </div>
              <Link
                href="/generate"
                className="btn-primary whitespace-nowrap px-6 py-3"
              >
                Generate Names →
              </Link>
            </div>
          </div>
        </header>

        {/* Categories */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">
            300+ Marketing Agency Name Ideas by Category
          </h2>
          <p className="text-slate-600 mb-8">
            Browse agency names organized by type. Each category reflects a different agency positioning —
            from data-driven performance shops to creative boutiques. Find the style that fits your vision.
          </p>

          <div className="space-y-10">
            {CATEGORIES.map((category) => (
              <div key={category.name}>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{category.name}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1">
                  {category.names.map((name) => (
                    <div key={name} className="flex items-center gap-2 py-1">
                      <svg className="h-3.5 w-3.5 flex-shrink-0 text-brand-500" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      <span className="text-slate-700 text-sm sm:text-base">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl bg-brand-50 border border-brand-100 p-6 text-center">
            <p className="text-slate-700 font-medium">
              Want names tailored to your specific agency? →{' '}
              <Link href="/generate" className="text-brand-600 font-semibold hover:text-brand-700 underline underline-offset-2">
                Try our free AI generator
              </Link>
            </p>
          </div>
        </section>

        {/* Naming Strategies */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">
            7 Naming Strategies Behind Top Marketing Agencies
          </h2>
          <p className="text-slate-600 mb-8">
            Great agency names don't happen by accident. They follow patterns — and those patterns
            are learnable. Here are the 7 naming strategies used by the most successful agencies in 2026.
          </p>

          <div className="space-y-8">
            {NAMING_STRATEGIES.map((strategy, index) => (
              <div key={strategy.name} className="rounded-xl border border-slate-200 p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-brand-700 font-bold text-sm">
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900">{strategy.name}</h3>
                    <p className="mt-1 text-sm text-slate-500 italic">{strategy.description}</p>
                    <p className="mt-3 text-sm text-slate-600">
                      <span className="font-semibold text-slate-800">Examples:</span> {strategy.examples}
                    </p>
                    <p className="mt-3 text-slate-700 leading-relaxed">{strategy.why}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5-Step Naming Process */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">
            How to Choose Your Marketing Agency Name: A 5-Step Process
          </h2>
          <p className="text-slate-600 mb-8">
            Picking a name shouldn't take weeks. Follow this 5-step process to go from brainstorm to
            decision in under an hour — with confidence that your name will work.
          </p>

          <div className="space-y-6">
            <div className="rounded-xl bg-slate-50 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                <span className="text-brand-600">Step 1:</span> Define your positioning in one sentence
              </h3>
              <p className="text-slate-700">
                Before you brainstorm a single name, answer this: "We help [target client] achieve [result] through [method]." If you can't fill in those blanks, you're not ready to name — you're still defining what you do. Your positioning drives your naming direction. A growth agency and a creative branding shop should have very different names.
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                <span className="text-brand-600">Step 2:</span> Generate 20-30 candidates using multiple strategies
              </h3>
              <p className="text-slate-700">
                Don't just list random words. Use the 7 strategies above systematically — try one name from each strategy. You'll get variety and intentionality. Use BrandForge's free generator for instant AI-powered suggestions, then add your own ideas. Aim for quantity first, quality second.
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                <span className="text-brand-600">Step 3:</span> Run the "Three-Second Test"
              </h3>
              <p className="text-slate-700">
                Show each name to 5 people who don't know your business. After 3 seconds, ask: "What does this company do?" If they guess "marketing," "advertising," or "growth" — you've got a winner. If they say "I have no idea" — it's too abstract. If they guess "software" or "clothing" — it's confusing. The Three-Second Test is your fastest filter.
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                <span className="text-brand-600">Step 4:</span> Check availability across all channels
              </h3>
              <p className="text-slate-700">
                Your shortlist needs to pass four availability checks: <strong>.com domain</strong> (non-negotiable for agencies), <strong>LinkedIn company page</strong> (critical for B2B), <strong>Instagram handle</strong> (for social proof), and <strong>USPTO trademark</strong> (for legal protection). BrandForge checks domain and social availability automatically — use it before you fall in love with a name.
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                <span className="text-brand-600">Step 5:</span> Sleep on it, then say it out loud
              </h3>
              <p className="text-slate-700">
                Pick your top 3 names and sleep on them. The next morning, say each one out loud in this sentence: "Hi, I'm calling from [Agency Name]." If it feels natural, confident, and easy to say — you've found your name. If you hesitate, mumble, or need to spell it out, go back to your list. Your agency name will be spoken thousands of times — make sure it sounds as good as it looks.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/generate"
              className="btn-primary inline-block px-8 py-3"
            >
              Generate Your Agency Name →
            </Link>
          </div>
        </section>

        {/* Naming Mistakes */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">
            7 Naming Mistakes That Kill Marketing Agencies
          </h2>
          <p className="text-slate-600 mb-8">
            We've seen these mistakes sink otherwise promising agencies. Don't let your name be the reason
            prospects scroll past you.
          </p>

          <div className="space-y-6">
            {NAMING_MISTAKES.map((mistake) => (
              <div key={mistake.title} className="rounded-xl border border-red-100 bg-red-50/50 p-6">
                <h3 className="text-base font-bold text-red-900 mb-2">
                  ❌ {mistake.title}
                </h3>
                <p className="text-slate-700 leading-relaxed">{mistake.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((faq) => (
              <details key={faq.question} className="group rounded-xl border border-slate-200 bg-white">
                <summary className="flex cursor-pointer items-center justify-between p-5 text-left font-semibold text-slate-900 hover:text-brand-600 transition-colors">
                  {faq.question}
                  <svg className="h-5 w-5 flex-shrink-0 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                </summary>
                <div className="px-5 pb-5 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Industry Generators */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">
            Explore More Name Generators
          </h2>
          <p className="text-slate-600 mb-6">
            Need a name for a different type of business? Try one of our industry-specific name generators:
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {INDUSTRY_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 hover:border-brand-300 hover:shadow-md transition-all"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors text-sm">
                    {link.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">{link.desc}</p>
                </div>
                <svg className="h-4 w-4 flex-shrink-0 text-slate-400 group-hover:text-brand-600 transition-colors mt-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </Link>
            ))}
          </div>
        </section>

        {/* Related Blog Posts */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">
            Continue Reading
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { slug: 'company-name-generator', title: 'Company Name Generator: 250+ Name Ideas', excerpt: '250+ company name ideas by industry with 6 proven naming strategies.' },
              { slug: 'saas-name-generator', title: 'SaaS Name Generator: 300+ SaaS Name Ideas', excerpt: '300+ SaaS name ideas across 10 categories with naming strategies from Stripe, Notion, and Figma.' },
              { slug: 'how-to-build-brand-identity', title: 'How to Build a Brand Identity', excerpt: 'Step-by-step guide to creating a complete brand identity from scratch.' },
              { slug: 'how-to-choose-business-name', title: 'How to Choose a Business Name', excerpt: 'The complete guide to picking a name that sticks, ranks, and scales.' },
              { slug: 'brand-name-generator', title: 'Brand Name Generator: Find the Perfect Brand Name', excerpt: '7 naming styles behind iconic brands and a free AI tool.' },
              { slug: 'brand-naming-guide', title: 'Brand Naming Guide: 12 Proven Tips', excerpt: '12 practical tips from analyzing 500+ successful brands.' },
            ].map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors text-sm leading-snug">
                  {post.title}
                </h3>
                <p className="mt-2 text-xs text-slate-500 line-clamp-2">{post.excerpt}</p>
                <span className="mt-2 inline-flex items-center gap-1 text-xs text-brand-600 font-medium">
                  Read article
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="mb-8">
          <div className="rounded-2xl bg-gradient-to-br from-brand-600 to-brand-700 p-8 sm:p-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Name Your Marketing Agency?
            </h2>
            <p className="text-brand-100 mb-6 max-w-xl mx-auto">
              Get AI-powered name suggestions with logo concepts, color palettes, taglines, and instant
              domain & social availability checks. Free to start.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/generate"
                className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-brand-700 hover:bg-brand-50 transition-colors shadow-lg"
              >
                Generate Agency Names →
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white hover:bg-white/10 transition-colors"
              >
                See Pricing
              </Link>
            </div>
          </div>
        </section>

        <BlogNewsletterSection />
      </article>
    </>
  )
}