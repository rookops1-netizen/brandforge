import type { Metadata } from 'next'
import Link from 'next/link'
import { BlogPostSchema } from '@/components/BlogPostSchema'

export const metadata: Metadata = {
  title: 'Brand Color Psychology: What Your Colors Say About Your Business — BrandForge Blog',
  description: 'Blue builds trust. Red drives action. Green signals growth. Here\'s how to pick a color palette that communicates exactly what your brand stands for.',
  openGraph: {
    title: 'Brand Color Psychology: What Your Colors Say',
    description: 'How to pick a brand color palette that communicates exactly what your business stands for.',
    url: 'https://brandforge-phi-pearl.vercel.app/blog/brand-color-psychology',
    siteName: 'BrandForge',
    type: 'article',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://brandforge-phi-pearl.vercel.app/blog/brand-color-psychology' },
}

const FAQ_ITEMS = [
  {
    question: 'What is brand color psychology?',
    answer: 'Brand color psychology is the study of how colors influence consumer perception and behavior. Different colors evoke different emotions — blue signals trust and stability, red creates urgency and energy, green suggests growth and health. Choosing the right brand colors helps communicate your brand\'s personality and values before a single word is read.',
  },
  {
    question: 'What color is best for a brand?',
    answer: 'There\'s no single "best" brand color — it depends on your industry, audience, and personality. Blue is the most popular brand color (used by 33% of top brands) because it signals trust and reliability. Tech and finance brands often choose blue, while food brands lean toward red and orange for appetite stimulation. Pick the color that matches the emotion you want your audience to feel.',
  },
  {
    question: 'How many colors should a brand have?',
    answer: 'Most brands use 3-5 colors: 1 primary color (60% of usage), 1-2 secondary colors (30%), and 1-2 accent colors (10%). This 60-30-10 rule creates visual hierarchy and keeps your brand consistent. Start with your primary color based on psychology, then choose supporting colors that complement it.',
  },
  {
    question: 'What does the color blue mean in branding?',
    answer: 'Blue is the most universally positive brand color, signaling trust, stability, professionalism, and security. It\'s used by 33% of Fortune 500 companies and is especially popular in finance (Chase, Capital One), technology (IBM, Intel, Facebook), and healthcare. Blue also suppresses appetite, making it a poor choice for food brands.',
  },
  {
    question: 'What does the color red mean in branding?',
    answer: 'Red is the most attention-grabbing color, signaling energy, urgency, passion, and excitement. It physically raises heart rate and stimulates appetite — which is why it\'s used by virtually every fast-food chain (McDonald\'s, KFC, Pizza Hut, Burger King). Red is ideal for call-to-action buttons, sale announcements, and brands that want to project bold energy.',
  },
  {
    question: 'How do I choose brand colors for my business?',
    answer: 'Follow this 4-step process: (1) Define 2-3 emotions you want your brand to evoke (e.g., trust + innovation). (2) Match those emotions to colors using color psychology research. (3) Choose 1 primary color that represents your brand\'s dominant emotion. (4) Add 1-2 complementary colors using the 60-30-10 rule. Test your palette with real people in your target audience.',
  },
  {
    question: 'Can BrandForge help me choose brand colors?',
    answer: 'Yes! When you generate a brand kit on BrandForge, our AI recommends a complete color palette based on your business description. Describe a "sustainable coffee shop" and you\'ll get earthy greens and warm browns. Describe a "fintech app for freelancers" and you\'ll get trustworthy blues with energetic accents. The entire process takes under 30 seconds.',
  },
  {
    question: 'Should I use black in my brand colors?',
    answer: 'Black is powerful in branding — it signals sophistication, luxury, and authority. Brands like Chanel, Apple, and Nike use black as a primary color. It works best for premium brands, fashion houses, and high-end professional services. If your brand is playful or approachable, use black as an accent rather than a primary color.',
  },
]

export default function BrandColorPsychology() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <BlogPostSchema
        title="Brand Color Psychology: What Your Colors Say About Your Business"
        description="Blue builds trust. Red drives action. Green signals growth. Here's how to pick a color palette that communicates exactly what your brand stands for."
        url="https://brandforge-phi-pearl.vercel.app/blog/brand-color-psychology"
        datePublished="2025-05-05"
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
        <span className="text-slate-900">Brand Color Psychology</span>
      </nav>

      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-brand-100 text-brand-700">
            Brand Strategy
          </span>
          <span className="text-sm text-slate-400">5 min read</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Brand Color Psychology: What Your Colors Say About Your Business
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Blue builds trust. Red drives action. Green signals growth. Here&apos;s how to pick a color palette that communicates exactly what your brand stands for.
        </p>
        <div className="mt-6 flex items-center gap-3 text-sm text-slate-500">
          <div className="h-8 w-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-semibold text-xs">BF</div>
          <span>BrandForge Team</span>
          <span>·</span>
          <time>May 5, 2025</time>
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
          Color is the first thing people notice about your brand — before they read a single word of your copy, before they understand your product, before they form any conscious opinion. Research shows that <strong>color increases brand recognition by up to 80%</strong> and influences 62–90% of first impressions.
        </p>

        <p>
          Choosing your brand colors isn&apos;t just an aesthetic decision. It&apos;s a strategic one.
        </p>

        <h2>The Major Brand Colors and What They Signal</h2>

        <h3>🔵 Blue — Trust, Stability, Professionalism</h3>
        <p>
          The most popular brand color in the world. Used by banks (Chase, Capital One), tech giants (IBM, Intel, Facebook), and healthcare companies. Blue signals reliability, competence, and security. <strong>Best for:</strong> Finance, technology, healthcare, B2B SaaS.
        </p>

        <h3>🔴 Red — Energy, Urgency, Passion</h3>
        <p>
          Red grabs attention and creates urgency. It&apos;s why call-to-action buttons are almost always red, and why fast food brands (McDonald&apos;s, KFC, Pizza Hut) love it. Red raises heart rates and stimulates appetite. <strong>Best for:</strong> Food, entertainment, retail, urgent call-to-actions.
        </p>

        <h3>🟢 Green — Growth, Health, Sustainability</h3>
        <p>
          Green is the color of money, nature, and health. It&apos;s the natural choice for eco-friendly brands, health products, and financial services. It signals growth (literally and figuratively). <strong>Best for:</strong> Sustainability, wellness, finance, organic products.
        </p>

        <h3>🟡 Yellow — Optimism, Warmth, Creativity</h3>
        <p>
          Yellow is the most visible color and evokes happiness and energy. It&apos;s attention-grabbing but can feel cheap if overused. Brands like Best Buy, Snapchat, and National Geographic use it strategically. <strong>Best for:</strong> Creative tools, children&apos;s products, budget-friendly brands.
        </p>

        <h3>🟣 Purple — Luxury, Creativity, Wisdom</h3>
        <p>
          Historically the most expensive dye, purple still carries associations of luxury and royalty. It&apos;s popular with creative brands (Twitch, Hallmark) and premium products. <strong>Best for:</strong> Luxury, creative tools, spirituality, premium brands.
        </p>

        <h3>⚫ Black — Sophistication, Power, Elegance</h3>
        <p>
          Black is the color of high-end. Fashion houses (Chanel, Prada), luxury cars, and premium tech (Apple) use black to signal exclusivity and sophistication. <strong>Best for:</strong> Luxury brands, fashion, premium professional services.
        </p>

        <h2>How to Choose Your Brand Colors</h2>

        <p>Follow this framework:</p>

        <ul>
          <li><strong>Start with emotion</strong> — What 2–3 feelings do you want your brand to evoke? Match those to colors first, not the other way around.</li>
          <li><strong>Pick a primary color</strong> — This represents your brand. Choose one dominant emotion and its corresponding color.</li>
          <li><strong>Add 1–2 supporting colors</strong> — These complement your primary and add depth. A common formula: primary (60%), secondary (30%), accent (10%).</li>
          <li><strong>Test with real people</strong> — Show your color palette to people in your target audience. Ask what feelings the colors evoke. If the answers don&apos;t match your intent, adjust.</li>
        </ul>

        <h2>The BrandForge Approach</h2>

        <p>
          When you generate a brand kit on BrandForge, our AI recommends a color palette based on your business description. Describe a &ldquo;sustainable coffee shop&rdquo; and you&apos;ll get earthy greens and warm browns. Describe a &ldquo;fintech app for freelancers&rdquo; and you&apos;ll get trustworthy blues with energetic accents. <Link href="/generate" className="text-brand-600 underline decoration-brand-300 hover:decoration-brand-600">Try it free →</Link>
        </p>
      </div>

      <div className="mt-16 rounded-3xl bg-gradient-to-br from-brand-50 via-white to-purple-50 p-8 sm:p-12 text-center">
        <h2 className="text-2xl font-bold text-slate-900">Get an AI-generated color palette for your brand</h2>
        <p className="mt-2 text-slate-600">Describe your business and BrandForge creates a complete brand kit — including colors.</p>
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
    </article>
  )
}