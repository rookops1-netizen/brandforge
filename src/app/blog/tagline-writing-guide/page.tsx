import type { Metadata } from 'next'
import Link from 'next/link'
import { BlogPostSchema } from '@/components/BlogPostSchema'

export const metadata: Metadata = {
  title: 'Writing a Tagline That Sells — BrandForge Blog',
  description: '"Just Do It." "Think Different." Great taglines aren\'t born — they\'re crafted. Here\'s the formula behind the world\'s most iconic brand slogans.',
  openGraph: {
    title: 'Writing a Tagline That Sells: The Art and Science of Brand Slogans',
    description: 'The formula behind the world\'s most iconic brand taglines and how to write your own.',
    url: 'https://brandforge.app/blog/tagline-writing-guide',
    siteName: 'BrandForge',
    type: 'article',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://brandforge.app/blog/tagline-writing-guide' },
}

const FAQ_ITEMS = [
  {
    question: 'What is a tagline?',
    answer: 'A tagline is a short, memorable phrase that captures your brand\'s essence in 3-7 words. It appears under your logo, in ads, and in every customer\'s mental model of who you are. Think "Just Do It" (Nike), "Think Different" (Apple), or "Because You\'re Worth It" (L\'Oréal). A great tagline sells your brand in one second of attention.',
  },
  {
    question: 'How do I write a tagline for my business?',
    answer: 'Follow these steps: (1) Choose your tagline type — imperative ("Just Do It"), descriptive ("The World\'s Online Marketplace"), aspirational ("Because You\'re Worth It"), or superlative ("The Ultimate Driving Machine"). (2) Use a formula — [Verb] + [Outcome], [Subject] + [Benefit], or [Superlative] + [Category]. (3) Keep it under 7 words. (4) Test it: can you remember it after hearing it once? If not, it\'s too long.',
  },
  {
    question: 'What are the 4 types of taglines?',
    answer: 'The four main types are: (1) Imperative — action-oriented, telling the customer what to do ("Just Do It," "Think Different"). Best for active brands and fitness. (2) Descriptive — explains what you do ("The World\'s Online Marketplace"). Best for new categories and B2B. (3) Aspirational — sells a feeling ("Because You\'re Worth It"). Best for consumer and lifestyle brands. (4) Superlative — bold claims ("The Ultimate Driving Machine"). Best for premium brands with clear advantages.',
  },
  {
    question: 'How long should a tagline be?',
    answer: 'Under 7 words. The best taglines are 3-5 words: "Just Do It" (3), "Think Different" (2), "I\'m Lovin\' It" (3), "The Ultimate Driving Machine" (4). If you can\'t remember your tagline after hearing it once, it\'s too long. Every extra word dilutes the impact.',
  },
  {
    question: 'What tagline mistakes should I avoid?',
    answer: 'Four mistakes that kill taglines: (1) Being generic — "Your Trusted Partner" says nothing and half your competitors could use it. (2) Being clever at the expense of clarity — if people don\'t understand it on first read, it won\'t stick. (3) Copying competitors — find your own voice. (4) Changing it every year — consistency builds recognition. Pick one and commit for at least 2-3 years.',
  },
  {
    question: 'Can BrandForge generate a tagline for my brand?',
    answer: 'Yes! When you create a brand kit on BrandForge, our AI generates tagline options that match your business description, industry, and brand personality. It considers your target audience, competitive landscape, and desired emotional response — all in under 30 seconds.',
  },
  {
    question: 'What\'s the difference between a tagline and a slogan?',
    answer: 'They\'re often used interchangeably, but technically: a tagline is a permanent brand identifier (Nike\'s "Just Do It" has been used since 1988), while a slogan is typically temporary and campaign-specific (McDonald\'s "I\'m Lovin\' It" started as a campaign slogan). Taglines stay; slogans can change. For most small businesses, they\'re the same thing.',
  },
  {
    question: 'What makes a tagline memorable?',
    answer: 'Three things make taglines stick: (1) Rhythm and sound — alliteration, repetition, and short syllable counts make phrases catchy ("Just Do It" has a staccato rhythm). (2) Emotional resonance — the best taglines make you feel something, not just think something. (3) Simplicity — every word must earn its place. Cut anything that isn\'t essential.',
  },
]

export default function TaglineWritingGuide() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <BlogPostSchema
        title="Writing a Tagline That Sells: The Art and Science of Brand Slogans"
        description="Great taglines are not born — they are crafted. Here is the formula behind the icons."
        url="https://brandforge.app/blog/tagline-writing-guide"
        datePublished="2025-04-20"
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
      <nav className="mb-8 text-sm text-slate-500">
        <Link href="/blog" className="hover:text-brand-600 transition-colors">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">Tagline Writing Guide</span>
      </nav>

      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-brand-100 text-brand-700">
            Brand Strategy
          </span>
          <span className="text-sm text-slate-500">6 min read</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Writing a Tagline That Sells: The Art and Science of Brand Slogans
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          &ldquo;Just Do It.&rdquo; &ldquo;Think Different.&rdquo; &ldquo;Because You&apos;re Worth It.&rdquo; Great taglines aren&apos;t born — they&apos;re crafted. Here&apos;s the formula.
        </p>
        <div className="mt-6 flex items-center gap-3 text-sm text-slate-500">
          <div className="h-8 w-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-semibold text-xs">BF</div>
          <span>BrandForge Team</span>
          <span>·</span>
          <time>April 20, 2025</time>
        </div>
      </header>

      <hr className="border-slate-200 mb-10" />

      <div className="prose prose-slate prose-lg max-w-none
        [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-slate-900
        [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-slate-900
        [&_p]:mt-4 [&_p]:text-slate-700 [&_p]:leading-7
        [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-slate-700 [&_li]:mt-2
        [&_strong]:text-slate-900
      ">

        <p>
          A tagline is the sentence that sells your brand when you have exactly one second of attention. It&apos;s the phrase that appears under your logo, in your ads, and in every customer&apos;s mental model of who you are. Nike didn&apos;t just choose &ldquo;Just Do It&rdquo; — they crafted it using principles you can apply to your own brand.
        </p>

        <h2>The 4 Types of Taglines</h2>

        <h3>1. The Imperative (Action-Oriented)</h3>
        <p>
          &ldquo;Just Do It&rdquo; (Nike), &ldquo;Think Different&rdquo; (Apple), &ldquo;Move Fast&rdquo; (Facebook). These taglines tell the customer what to do. They&apos;re energizing, direct, and memorable. <strong>Best for:</strong> Active brands, productivity tools, fitness, motivation.
        </p>

        <h3>2. The Descriptive (What You Do)</h3>
        <p>
          &ldquo;The World&apos;s Online Marketplace&rdquo; (eBay), &ldquo;The Best Way to Get Around&rdquo; (Uber). These explain your value proposition in plain language. Less poetic but more clear. <strong>Best for:</strong> New categories, B2B products, anything where clarity matters more than cleverness.
        </p>

        <h3>3. The Aspirational (Who You Could Be)</h3>
        <p>
          &ldquo;Because You&apos;re Worth It&rdquo; (L&apos;Oréal), &ldquo;I&apos;m Lovin&apos; It&rdquo; (McDonald&apos;s), &ldquo;Open Happiness&rdquo; (Coca-Cola). These taglines sell a feeling, not a feature. <strong>Best for:</strong> Consumer brands, lifestyle products, anything selling an experience.
        </p>

        <h3>4. The Superlative (Why You&apos;re the Best)</h3>
        <p>
          &ldquo;The Ultimate Driving Machine&rdquo; (BMW), &ldquo;There Is No Substitute&rdquo; (Porsche). These make bold claims. They work when you can back them up. <strong>Best for:</strong> Premium brands, market leaders, products with clear competitive advantages.
        </p>

        <h2>The Tagline Formula</h2>

        <p>
          Most great taglines follow one of these patterns:
        </p>

        <ul>
          <li><strong>[Verb] + [Outcome]</strong> — &ldquo;Just Do It,&rdquo; &ldquo;Save Better,&rdquo; &ldquo;Think Different&rdquo;</li>
          <li><strong>[Subject] + [Benefit]</strong> — &ldquo;Because You&apos;re Worth It,&rdquo; &ldquo;Everything Is Awesome&rdquo;</li>
          <li><strong>[Superlative] + [Category]</strong> — &ldquo;The Ultimate Driving Machine,&rdquo; &ldquo;America&apos;s Best&lt;sup&gt;®&lt;/sup&gt;&rdquo;</li>
          <li><strong>[Contrast]</strong> — &ldquo;Think Small&rdquo; (VW), &ldquo;Less Is More&rdquo;</li>
        </ul>

        <p>
          Keep it under 7 words. The best are 3–5 words. If you can&apos;t remember your tagline after hearing it once, it&apos;s too long.
        </p>

        <h2>Tagline Mistakes to Avoid</h2>

        <ul>
          <li><strong>Beinggeneric</strong> — &ldquo;Your Trusted Partner&rdquo; says nothing. Half your competitors could use the same line.</li>
          <li><strong>Being clever at the expense of clarity</strong> — If people don&apos;t understand it on first read, it won&apos;t stick.</li>
          <li><strong>Copying competitors</strong> — &ldquo;The [Blank] of [Blank]&rdquo; format is overused. Find your own voice.</li>
          <li><strong>Changing it every year</strong> — Consistency builds recognition. Pick one and commit.</li>
        </ul>

        <h2>How BrandForge Generates Taglines</h2>

        <p>
          When you create a brand kit on BrandForge, our AI generates tagline options that match your business description, industry, and brand personality. It considers your target audience, competitive landscape, and desired emotional response — all in seconds. <Link href="/brand-kit" className="text-brand-600 underline decoration-brand-300 hover:decoration-brand-600">Generate your brand kit →</Link>
        </p>
      </div>

      <div className="mt-16 rounded-3xl bg-gradient-to-br from-brand-50 via-white to-purple-50 p-8 sm:p-12 text-center">
        <h2 className="text-2xl font-bold text-slate-900">Need a tagline for your brand?</h2>
        <p className="mt-2 text-slate-600">BrandForge generates taglines, logos, and color palettes — all AI-powered, all in one brand kit.</p>
        <div className="mt-6">
          <a href="/brand-kit" className="btn-primary">Create Your Brand Kit</a>
        </div>
      </div>
      {/* FAQ */}
      <section className="mt-16">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-8">
          Frequently Asked Questions
        </h2>
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

      {/* Related articles */}
      <section className="mt-16 border-t border-slate-200 pt-10">
        <h3 className="text-lg font-semibold text-slate-900 mb-6">Related articles</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link href="/blog/brand-color-psychology" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-200 hover:shadow-md transition-all">
            <h4 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Brand Color Psychology: How Colors Shape Your Brand Identity</h4>
            <p className="mt-1 text-sm text-slate-500">Learn how color choices influence perception and how to pick the perfect palette for your brand.</p>
          </Link>
          <Link href="/blog/brand-name-generator" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-200 hover:shadow-md transition-all">
            <h4 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Brand Name Generator: How to Find the Perfect Brand Name in 2026</h4>
            <p className="mt-1 text-sm text-slate-500">The complete guide to finding a brand name that sticks — strategies, examples, and a free AI generator.</p>
          </Link>
          <Link href="/blog/how-to-choose-brand-name" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-200 hover:shadow-md transition-all">
            <h4 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">How to Choose a Brand Name: The Complete 2026 Guide</h4>
            <p className="mt-1 text-sm text-slate-500">A step-by-step framework for choosing a brand name that fits your business, audience, and vision.</p>
          </Link>
          <Link href="/blog/creative-brand-names" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-200 hover:shadow-md transition-all">
            <h4 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Creative Brand Names: 60+ Examples &amp; What Makes Them Work</h4>
            <p className="mt-1 text-sm text-slate-500">Deconstruct 60+ real brand names and learn the repeatable naming patterns behind them.</p>
          </Link>
          <Link href="/blog/catchy-brand-names" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-200 hover:shadow-md transition-all">
            <h4 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Catchy Brand Names: 250+ Memorable Ideas for 2026</h4>
            <p className="mt-1 text-sm text-slate-500">250+ catchy name ideas plus 7 naming formulas that make names stick in people&apos;s minds.</p>
          </Link>
        </div>
      </section>
    </article>
  )
}