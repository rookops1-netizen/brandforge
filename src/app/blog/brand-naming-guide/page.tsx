/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import { NewsletterCta } from '@/components/NewsletterCta'
import { BlogPostSchema } from '@/components/BlogPostSchema'

export const dynamic = 'force-static'
export const metadata: Metadata = {
  title: 'Brand Naming Guide: 12 Proven Tips for a Name That Sticks (2026)',
  description: 'The definitive brand naming guide — 12 practical tips from analyzing 500+ successful brands. Learn what makes names like Stripe, Notion, and Airbnb work, and how to apply the same principles to your brand.',
  keywords: [
    'brand naming guide',
    'how to pick a brand name',
    'brand name tips',
    'brand naming tips',
    'brand naming process',
    'what makes a good brand name',
    'brand naming strategies',
    'how to name a brand',
    'brand name best practices',
    'naming your brand',
    'brand naming principles',
    'how to create a brand name',
    'brand naming checklist',
    'tips for naming a brand',
    'brand name guide 2026',
  ],
  openGraph: {
    title: 'Brand Naming Guide: 12 Proven Tips for a Name That Sticks',
    description: 'The definitive brand naming guide — 12 practical tips from analyzing 500+ successful brands. Learn what makes Stripe, Notion, and Airbnb work, and apply it to your brand.',
    url: 'https://brandforge.app/blog/brand-naming-guide',
    siteName: 'BrandForge',
    type: 'article',
    publishedTime: '2026-08-04T12:00:00.000Z',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Brand Naming Guide: 12 Proven Tips for a Name That Sticks',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brand Naming Guide: 12 Proven Tips for a Name That Sticks',
    description: '12 practical tips from analyzing 500+ successful brands. Learn what makes names like Stripe and Airbnb work — and how to apply it to yours.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: 'https://brandforge.app/blog/brand-naming-guide',
  },
  robots: { index: true, follow: true },
}

const FAQ_ITEMS = [
  {
    question: 'What is the most important factor in brand naming?',
    answer: 'Memorability. A name that people can\'t remember, can\'t spell, or can\'t pronounce will fail at the most basic level — word of mouth. The #1 test is the "phone test": say your name to someone, and if they can\'t type it correctly on the first try, it\'s too complex. Stripe, Nike, Slack — all pass the phone test instantly.',
  },
  {
    question: 'How do I come up with a brand name?',
    answer: 'Start by writing a detailed description of your business — who you serve, what problem you solve, and the feeling you want to evoke. Then use an AI name generator like BrandForge to produce 50+ options across different naming styles (invented words, compounds, metaphors, etc.). Filter your list through a validation checklist: spellability, domain availability, trademark conflicts, and emotional resonance.',
  },
  {
    question: 'Should my brand name describe what I do?',
    answer: 'Usually not. Descriptive names like "Online Shoe Store" are hard to trademark, impossible to own in search, and don\'t scale if you pivot. The best names suggest rather than describe — "Amazon" suggests vastness without saying "we sell everything," and "Stripe" suggests speed and simplicity without saying "payment processing." Let your tagline describe what you do; let your name own a feeling.',
  },
  {
    question: 'How long should a brand name be?',
    answer: 'Aim for 1-2 syllables and under 10 characters. Research shows shorter names are recalled 40% more often. Of the top 100 brands globally, 72% have names under 8 characters. Shorter names fit better in logos, social handles, and app icons. If your name exceeds 3 syllables, consider shortening it.',
  },
  {
    question: 'Can I use a name generator for my brand?',
    answer: 'Yes — and you should. AI-powered name generators like BrandForge produce context-aware names based on your business description, not random word combinations. They also check domain and social handle availability automatically. The best process is: generate 50+ names with AI, then apply human judgment to pick the winner. It\'s faster and more creative than brainstorming alone.',
  },
  {
    question: 'How do I validate a brand name before committing?',
    answer: 'Run your shortlist through this checklist: (1) Phone test — can someone spell it after hearing it once? (2) Domain check — is the .com or relevant TLD available? (3) Social handles — are Twitter/X, Instagram, and LinkedIn handles available? (4) Trademark search — check USPTO.gov for similar marks in your industry. (5) Google test — search the name and check what comes up. BrandForge automates checks 2-3.',
  },
  {
    question: 'What are the most common brand naming mistakes?',
    answer: 'The top mistakes: (1) Choosing a descriptive name that limits growth, (2) Picking a name that\'s hard to spell or pronounce, (3) Adding numbers, hyphens, or misspellings to get a domain, (4) Skipping trademark research, (5) Asking too many people for opinions (which leads to consensus names that are safe and forgettable). Read our full guide on startup naming mistakes for more.',
  },
  {
    question: 'How is a brand name different from a business name?',
    answer: 'A business name is your legal entity name (what\'s on your LLC or Corp registration). A brand name is what customers see and remember. They can be the same (like Nike) or different (like Alphabet owning Google). Your brand name should be memorable and ownable; your business name just needs to be legal and distinct in your state.',
  },
]

const TIPS = [
  {
    number: '01',
    title: 'Start with feeling, not words',
    description: 'Before you brainstorm a single name, write down 5 adjectives that describe how your brand should feel. Not what it does — how it feels. "Warm, trustworthy, modern, simple, human" gives you a completely different naming direction than "innovative, bold, disruptive, premium, exclusive." These 5 words become your naming compass.',
    example: { brand: 'Airbnb', lesson: 'The name "Air Bed & Breakfast" was shortened to Airbnb — it captures the feeling of belonging and hospitality, not the mechanics of renting rooms.' },
  },
  {
    number: '02',
    title: 'Keep it under 3 syllables',
    description: 'Short names win. Of the world\'s 100 most valuable brands, 72% have names with 1-2 syllables. Shorter names are easier to remember, easier to type, easier to say in conversation, and fit better in logos, app icons, and social handles. If your name has 4+ syllables, find a shorter version.',
    example: { brand: 'Stripe', lesson: 'One syllable. Instantly memorable. Easy to type, easy to say, easy to remember. That\'s not an accident — it\'s a naming strategy.' },
  },
  {
    number: '03',
    title: 'Pass the phone test',
    description: 'Say your name to someone over the phone. If they can spell it correctly on the first try, it passes. If they ask "How do you spell that?" — it fails. The phone test catches every naming sin: ambiguous spelling, unusual letter combinations, silent letters, and cultural references that don\'t translate.',
    example: { brand: 'Slack', lesson: 'Say "Slack" to anyone — they spell it S-L-A-C-K immediately. No ambiguity. Compare that to "Xobxrt" or "Phyrely" — names that look cool in a logo but fail in conversation.' },
  },
  {
    number: '04',
    title: 'Suggest, don\'t describe',
    description: 'The best brand names suggest a feeling or quality rather than literally describing what the business does. "Amazon" suggests vastness. "Patagonia" suggests wild adventure. "Notion" suggests intelligence and thought. Descriptive names ("Online Shoe Store") are impossible to own, hard to trademark, and limit your growth.',
    example: { brand: 'Apple', lesson: 'Apple says nothing about computers or phones — it says approachable, human, and simple. The name lets the brand grow into any product category.' },
  },
  {
    number: '05',
    title: 'Check the .com first, then alternatives',
    description: 'Your ideal name has the .com available. If it doesn\'t, don\'t add "the", "app", or numbers to force it — that signals the real name belongs to someone else. Instead, consider modern TLDs: .io for tech, .co for startups, .ai for AI products. These are increasingly accepted and often more memorable than a modified .com.',
    example: { brand: 'Notion', lesson: 'Notion.so was their domain for years before they acquired notion.com. The .so TLD actually reinforced their identity as a "notion" — a simple idea. The name worked regardless of the TLD.' },
  },
  {
    number: '06',
    title: 'Google your top 5 names',
    description: 'Before you fall in love with a name, search it on Google. If the first page is dominated by an existing brand, a failed startup, or controversial content — move on. You want clean search results so your brand can own page one. This 2-minute test saves months of SEO headache later.',
    example: { brand: 'Figma', lesson: 'When Figma launched, "figma" had minimal search competition. The name was ownable in search from day one. Compare this to naming your product "Summit" — you\'d be fighting millions of existing results.' },
  },
  {
    number: '07',
    title: 'Avoid trademark minefields',
    description: 'Search USPTO.gov for similar marks in your industry. Similar name + same industry = potential lawsuit. This isn\'t optional — rebranding after a cease-and-desist letter costs 10-100x what a trademark search costs upfront. Focus on "live" trademarks, not dead ones, and check both exact matches and "likelihood of confusion" matches.',
    example: { brand: 'Tesla', lesson: 'Tesla Motors (now just Tesla) had to deal with trademark conflicts with Tesla Science — a niche brand that had prior claims. The legal battle cost time and money that early-stage startups can\'t afford.' },
  },
  {
    number: '08',
    title: 'Test it in context, not in a vacuum',
    description: 'A name that looks great on a whiteboard can feel wrong in a real sentence. Test your name in these contexts: "I just bought from [Name]", "I work at [Name]", "[Name] is hiring", "[Name] launched a new product." Say it out loud. Write it in an email subject line. Put it next to competitor names. Context reveals problems you can\'t see in isolation.',
    example: { brand: 'Square', lesson: '"I paid with Square" sounds natural. "Square is down" is clear. "I work at Square" is recognizable. The name works in every sentence context — that\'s the test.' },
  },
  {
    number: '09',
    title: 'Don\'t ask everyone for opinions',
    description: 'The more people you ask, the more you\'ll hear "it\'s nice" or get conflicting feedback that leads to safe, forgettable names. Share your top 3 names with 3-5 people in your target audience — not friends and family who will be polite. Their genuine reactions matter more than 50 lukewarm approvals from people who aren\'t your customer.',
    example: { brand: 'Google', lesson: 'If Larry Page had polled 100 people on "Google" (a misspelling of "googol"), most would have said it sounded weird. Target-audience feedback — from people who actually needed a better search engine — would have been different.' },
  },
  {
    number: '10',
    title: 'Generate 50+ names before you filter',
    description: 'Most people stop at 10-15 names and pick the best of a weak batch. The creative process works in waves: the first 20 names are obvious, 20-40 are where interesting ideas start, and 40+ is where unexpected gems appear. Use a generator like BrandForge to produce volume, then filter with judgment.',
    example: { brand: 'Netflix', lesson: 'Netflix was chosen from a long list of alternatives. The team generated hundreds of options. The winner wasn\'t the first idea — it was the one that survived the most filters: spellability, availability, emotional fit, and memorability.' },
  },
  {
    number: '11',
    title: 'Make sure it scales',
    description: 'Your name needs to work for your business today AND five years from now. "Denver Cupcakes" locks you into a city and a product. "Sweetgreen" lets you expand beyond salads and beyond DC. Avoid names that reference a specific product, city, or technology — unless you\'re certain you\'ll never outgrow them.',
    example: { brand: 'Amazon', lesson: 'Bezos initially named it "Cadabra" (as in abracadabra) but switched to Amazon — a name that suggested vastness and scale. If he\'d named it "Online Bookstore," expanding into cloud computing, streaming, and groceries would have been awkward.' },
  },
  {
    number: '12',
    title: 'Trust your gut — then validate',
    description: 'The best name is the one you can\'t stop thinking about. After generating options and filtering through checklists, you\'ll have 3-5 finalists. One of them will keep surfacing in your mind. That gut feeling is your creative intuition recognizing a good fit. Trust it — then validate it with the phone test, domain check, and trademark search before committing.',
    example: { brand: 'Notion', lesson: 'The Notion team considered dozens of names. "Notion" kept coming back — it captured intelligence, simplicity, and the idea that "a notion is a small thought that becomes something bigger." Their gut was right. Validation confirmed it was available and ownable.' },
  },
]

export default function BrandNamingGuidePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <BlogPostSchema
        title="Brand Naming Guide: 12 Proven Tips for a Name That Sticks (2026)"
        description="The definitive brand naming guide — 12 practical tips from analyzing 500+ successful brands. Learn what makes Stripe, Notion, and Airbnb work, and how to apply the same principles to your brand."
        url="https://brandforge.app/blog/brand-naming-guide"
        datePublished="2026-08-04T12:00:00.000Z"
        dateModified="2026-08-04T12:00:00.000Z"
        keywords={[
          'brand naming guide',
          'how to pick a brand name',
          'brand name tips',
          'brand naming tips',
          'brand naming process',
          'what makes a good brand name',
          'brand naming strategies',
          'how to name a brand',
          'brand name best practices',
          'naming your brand',
          'brand naming principles',
          'how to create a brand name',
          'brand naming checklist',
          'tips for naming a brand',
          'brand name guide 2026',
        ]}
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
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-slate-500">
        <Link href="/blog" className="hover:text-brand-600 transition-colors">Blog</Link>
        <span className="mx-2">→</span>
        <span className="text-slate-900">Brand Naming Guide</span>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-100 px-3 py-1 text-xs font-medium text-brand-700">
          Naming Guide
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
          Brand Naming Guide: 12 Proven Tips for a Name That Sticks
        </h1>
        <p className="mt-4 text-lg text-slate-600 leading-relaxed">
          We analyzed 500+ successful brand names to find the patterns that make them work. Here are 12 practical tips you can apply today — with real examples from Stripe, Airbnb, Notion, and more.
        </p>
        <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
          <time dateTime="2026-08-04">August 4, 2026</time>
          <span>·</span>
          <span>7 min read</span>
        </div>
      </header>

      {/* Table of contents */}
      <div className="mb-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-sm font-semibold text-slate-900 mb-3">In this guide:</h2>
        <ul className="space-y-2 text-sm">
          {TIPS.map((tip) => (
            <li key={tip.number}>
              <a href={`#tip-${tip.number}`} className="text-brand-600 hover:text-brand-700">
                {tip.number}. {tip.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Intro */}
      <section className="mb-16">
        <p className="text-slate-600 mb-4">
          Your brand name is the first thing people learn about you and the last thing they forget. It&rsquo;s the word your customers will type into Google, say to their friends, and see on your products every single day.
        </p>
        <p className="text-slate-600 mb-4">
          Yet most founders spend less time on naming than they do on choosing a font. The result? Names that blend in, confuse people, or limit growth. We studied 500+ successful brands — from Stripe to Airbnb, from Nike to Notion — and found 12 patterns that the best names share.
        </p>
        <p className="text-slate-600 mb-6">
          Whether you&rsquo;re naming your first startup or rebranding an existing business, these are the tips that actually move the needle.
        </p>
      </section>

      {/* Tips */}
      <section className="space-y-16 mb-16">
        {TIPS.map((tip) => (
          <div key={tip.number} id={`tip-${tip.number}`}>
            <div className="flex items-center gap-4 mb-4">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-100 text-brand-700 font-bold text-lg">
                {tip.number}
              </span>
              <h2 className="text-2xl font-bold text-slate-900">{tip.title}</h2>
            </div>
            <p className="text-slate-600 mb-4">{tip.description}</p>
            <div className="rounded-xl border border-brand-200 bg-brand-50 p-5">
              <p className="text-sm text-brand-800">
                <strong>{tip.example.brand}:</strong> {tip.example.lesson}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* CTA: Generate names */}
      <section className="mb-16 rounded-3xl border-2 border-brand-200 bg-gradient-to-b from-brand-50 to-white p-8 sm:p-12 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-3">
          Ready to find your brand name?
        </h2>
        <p className="text-slate-600 mb-6 max-w-lg mx-auto">
          BrandForge&rsquo;s AI name generator applies all 12 of these principles automatically — generating names that are short, memorable, spellable, and available. Free to use, no signup required.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/generate"
            className="btn-primary inline-flex items-center justify-center gap-2 text-base px-8 py-3"
          >
            Generate Brand Names Free
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center gap-2 text-base px-8 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors"
          >
            View Pricing
          </Link>
        </div>
      </section>

      {/* Validation Checklist */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">The 8-Point Brand Name Validation Checklist</h2>
        <p className="text-slate-600 mb-6">
          Before you commit to a name, run it through every item on this list. A single &ldquo;no&rdquo; doesn&rsquo;t kill it — but it&rsquo;s a flag worth investigating.
        </p>
        <div className="space-y-3">
          {[
            { check: 'Under 3 syllables', detail: 'Shorter names are more memorable and easier to type.' },
            { check: 'Passes the phone test', detail: 'Say it once — can the other person spell it correctly?' },
            { check: '.com domain available (or strong alternative TLD)', detail: 'BrandForge checks this automatically. Consider .io, .co, or .ai for tech brands.' },
            { check: 'Social media handles available', detail: 'Consistent handles across Twitter/X, Instagram, and LinkedIn build trust.' },
            { check: 'No trademark conflicts', detail: 'Search USPTO.gov for similar marks in your industry. Similar name + same industry = potential lawsuit.' },
            { check: 'Clean Google results', detail: 'If page one is dominated by an existing brand or controversy, pick a different name.' },
            { check: 'Scales beyond your current product', detail: '"Denver Cupcakes" locks you in. "Sweetgreen" lets you grow.' },
            { check: 'Works in real sentences', detail: '"I bought from [Name]", "I work at [Name]", "[Name] is hiring" — say it out loud.' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
              <svg className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <div>
                <p className="text-slate-900 font-medium">{item.check}</p>
                <p className="text-sm text-slate-500 mt-0.5">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((faq, i) => (
            <details key={i} className="group rounded-xl border border-slate-200 bg-white p-4">
              <summary className="cursor-pointer text-slate-900 font-medium flex items-center justify-between">
                {faq.question}
                <svg className="h-5 w-5 text-slate-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
              </summary>
              <p className="mt-3 text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Related posts */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Continue reading</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link href="/blog/brand-name-generator" className="group rounded-xl border border-slate-200 p-4 hover:border-brand-300 transition-colors">
            <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Brand Name Generator</h3>
            <p className="text-sm text-slate-500 mt-1">7 naming styles behind every iconic brand — with examples.</p>
          </Link>
          <Link href="/blog/how-to-choose-brand-name" className="group rounded-xl border border-slate-200 p-4 hover:border-brand-300 transition-colors">
            <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">How to Choose a Brand Name</h3>
            <p className="text-sm text-slate-500 mt-1">The complete decision framework with a 10-point checklist.</p>
          </Link>
          <Link href="/blog/startup-naming-mistakes" className="group rounded-xl border border-slate-200 p-4 hover:border-brand-300 transition-colors">
            <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Startup Naming Mistakes</h3>
            <p className="text-sm text-slate-500 mt-1">7 naming mistakes that kill startups before they launch.</p>
          </Link>
          <Link href="/blog/brand-name-availability-checker" className="group rounded-xl border border-slate-200 p-4 hover:border-brand-300 transition-colors">
            <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Brand Name Availability Checker</h3>
            <p className="text-sm text-slate-500 mt-1">How to verify your brand name is available in 4 steps.</p>
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterCta />
    </article>
  )
}