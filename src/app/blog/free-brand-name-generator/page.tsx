import type { Metadata } from 'next'
import Link from 'next/link'
import { BlogNewsletterSection } from '@/components/BlogNewsletterSection'

export const metadata: Metadata = {
  title: 'Free Brand Name Generator: How to Name Your Business Without Spending a Dime | BrandForge',
  description: 'Compare the 8 best free brand name generators in 2025 — including BrandForge. See which tools actually produce creative, usable names and which ones waste your time with random word salads.',
  openGraph: {
    title: 'Free Brand Name Generator: The Complete Guide to Naming Your Business for Free',
    description: 'Compare the best free brand name generators — plus learn how to get professional-quality names without paying naming agencies $5K+.',
    url: 'https://brandforge-phi-pearl.vercel.app/blog/free-brand-name-generator',
    siteName: 'BrandForge',
    type: 'article',
  },
}

const freeTools = [
  {
    name: 'BrandForge',
    url: '/generate',
    free: 'Yes — 5 generations free, no credit card',
    strengths: ['AI-powered context-aware naming', 'Full brand kit included (logo concepts, colors, taglines)', 'Real-time domain & social handle checks', 'Industry-specific suggestions based on your description'],
    limitations: ['Unlimited generations requires Pro plan'],
    bestFor: 'Founders who want a complete brand identity, not just a name list',
    verdict: '🏆 Best for: Complete branding from idea to identity',
  },
  {
    name: 'Namelix',
    url: 'https://namelix.com',
    free: 'Yes — free name generation',
    strengths: ['AI-generated short names', 'Logo preview alongside names', 'Filter by style (brandable, short, etc.)'],
    limitations: ['No domain/social checks in free tier', 'No tagline or color palette', 'Limited context — gives short names regardless of industry'],
    bestFor: 'Quick short name brainstorming',
    verdict: 'Good for: Quick short-name ideas',
  },
  {
    name: 'Shopify Business Name Generator',
    url: 'https://shopify.com/tools/business-name-generator',
    free: 'Yes — completely free',
    strengths: ['Fast results', 'Domain availability check (Shopify stores)', 'Large word database'],
    limitations: ['Names are often generic word combinations', 'Pushes Shopify store signup', 'No brand kit or visual identity'],
    bestFor: 'E-commerce store owners already using Shopify',
    verdict: 'Good for: Shopify merchants',
  },
  {
    name: 'Wix Business Name Generator',
    url: 'https://wix.com/business-name-generator',
    free: 'Yes — free name search',
    strengths: ['Clean interface', 'Industry-specific suggestions', 'Integrated with Wix website builder'],
    limitations: ['Results feel basic and templated', 'Heavy upsell to Wix platform', 'No creative context or brand identity'],
    bestFor: 'Wix users building their first website',
    verdict: 'Fine for: Wix ecosystem users',
  },
  {
    name: 'Looka',
    url: 'https://looka.com',
    free: 'Free name generation, paid for logo/brand kit',
    strengths: ['Names paired with logo mockups', 'Decent visual brand previews', 'Good industry filtering'],
    limitations: ['Most value requires paid plan', 'Brand kit locked behind premium', 'Names can feel similar across industries'],
    bestFor: 'Visual-first branding when you can pay',
    verdict: 'Good for: Paid visual branding',
  },
  {
    name: 'Business Name Generator (BNG)',
    url: 'https://businessnamegenerator.com',
    free: 'Yes — free keyword-based generation',
    strengths: ['Large volume of results', 'Keyword-based filtering', 'Domain check available'],
    limitations: ['Results feel random and low-quality', 'No AI or context awareness', 'No brand identity tools'],
    bestFor: 'Volume brainstorming (low quality)',
    verdict: '⚠️ Limited: Random results, no context',
  },
  {
    name: 'Lean Domain Search',
    url: 'https://leandomainsearch.com',
    free: 'Yes — completely free',
    strengths: ['Focuses on .com domain availability', 'Fast results', 'Simple interface'],
    limitations: ['Only shows names with available .com domains', 'Very basic word combinations', 'No brand identity or creative context'],
    bestFor: 'Pure domain availability hunting',
    verdict: 'Good for: Finding available .com domains',
  },
  {
    name: 'Wordlab Name Generator',
    url: 'https://wordlab.com',
    free: 'Yes — free random name generation',
    strengths: ['Large database of name templates', 'Some industry categorization'],
    limitations: ['Very dated interface', 'No AI or personalization', 'No domain or social checks'],
    bestFor: 'Retro-style name browsing',
    verdict: '⚠️ Limited: Dated, no AI',
  },
]

export default function FreeBrandNameGeneratorPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-12">
        <Link href="/blog" className="text-sm text-brand-600 hover:text-brand-700 font-medium">
          ← Back to Blog
        </Link>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Free Brand Name Generator: How to Name Your Business Without Spending a Dime
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl">
          You don&apos;t need a $10,000 naming agency to find a great brand name. Here are the 8 best
          free brand name generators — honestly compared — plus the strategy that works better than any tool.
        </p>
        <div className="mt-4 flex items-center gap-3 text-sm text-slate-400">
          <time>May 18, 2025</time>
          <span>·</span>
          <span>14 min read</span>
        </div>
      </div>

      {/* Intro */}
      <div className="prose prose-slate max-w-none mb-12">
        <p className="text-lg leading-relaxed text-slate-700">
          Naming your business is one of the first — and most frustrating — steps of starting something new.
          You want something memorable, meaningful, and available as a .com domain. And you&apos;d rather not
          spend weeks on it or pay an agency thousands of dollars.
        </p>
        <p className="text-lg leading-relaxed text-slate-700">
          That&apos;s where free brand name generators come in. But not all are created equal. Some give you
          genuine creative suggestions rooted in AI understanding. Others spit out random word combinations
          that feel like they were generated by throwing Scrabble tiles at a wall.
        </p>
        <p className="text-lg leading-relaxed text-slate-700">
          We tested the 8 most popular free brand name generators so you don&apos;t have to waste your time.
          Here&apos;s what actually works, what to skip, and how to get the best results from any naming tool.
        </p>
      </div>

      {/* CTA */}
      <div className="rounded-2xl bg-gradient-to-r from-brand-50 to-purple-50 p-6 mb-12 text-center">
        <p className="text-sm font-semibold text-brand-700 mb-2">Want names tailored to YOUR idea?</p>
        <p className="text-sm text-slate-600 mb-4">Describe your business and our AI generates names with full brand kits — free.</p>
        <a href="/generate" className="btn-primary">Generate Custom Names Free</a>
      </div>

      {/* Comparison */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          The 8 Best Free Brand Name Generators Compared
        </h2>
        <p className="text-slate-700 mb-8">
          We evaluated each tool on four criteria: <strong>name quality</strong> (are the names actually good?),
          <strong>context awareness</strong> (does it understand your business?), <strong>brand identity</strong>
          (does it give you more than just a name?), and <strong>free tier value</strong> (what do you get without paying?).
        </p>

        <div className="space-y-8">
          {freeTools.map((tool, i) => (
            <div key={tool.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between flex-wrap gap-2 mb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {i + 1}. {tool.name}
                  </h3>
                  <p className="text-sm text-slate-500">{tool.free}</p>
                </div>
                <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                  i === 0 ? 'bg-brand-100 text-brand-700' : 'bg-slate-100 text-slate-600'
                }`}>
                  {tool.verdict}
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm font-medium text-green-700 mb-2">✅ Strengths</p>
                  <ul className="space-y-1">
                    {tool.strengths.map((s) => (
                      <li key={s} className="text-sm text-slate-700">{s}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium text-red-700 mb-2">⚠️ Limitations</p>
                  <ul className="space-y-1">
                    {tool.limitations.map((l) => (
                      <li key={l} className="text-sm text-slate-700">{l}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="text-sm text-slate-600">
                <strong>Best for:</strong> {tool.bestFor}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* What makes a generator good? */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          What Makes a Brand Name Generator Actually Good?
        </h2>
        <div className="space-y-6 text-slate-700">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">1. Context awareness</h3>
            <p className="leading-relaxed">
              The best generators don&apos;t just mash keywords together — they understand the kind of business
              you&apos;re building. A coffee shop named &quot;ByteShift&quot; feels wrong. A tech startup named
              &quot;SweetRoot&quot; feels off. Good AI reads your description and generates names that
              <em> fit</em> — not just names that <em>exist</em>.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">2. Beyond the name</h3>
            <p className="leading-relaxed">
              A name sitting in a vacuum is just a word. What makes it a <em>brand</em> is the identity
              around it: the visual tone, the colors, the way it sounds in a sentence. Generators that
              pair names with logo concepts, color palettes, and taglines are giving you something 10x
              more useful than a bare list.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">3. Availability checks</h3>
            <p className="leading-relaxed">
              There&apos;s nothing worse than falling in love with a name and discovering the domain is taken.
              The best tools check domain and social handle availability in real-time, so you only see
              names you can actually use.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">4. Quality over quantity</h3>
            <p className="leading-relaxed">
              Tools that give you 500 random names sound generous, but they&apos;re actually making your
              job harder. 5 well-crafted, contextually relevant suggestions are worth more than 500
              keyword-stuffed permutations. Look for tools that prioritize relevance.
            </p>
          </div>
        </div>
      </div>

      {/* DIY Strategy */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          The DIY Naming Strategy (That Works Better Than Any Generator)
        </h2>
        <p className="text-slate-700 mb-6">
          Even the best name generator is a starting point. Here&apos;s a process that combines AI generation
          with human creativity to find names that are genuinely great:
        </p>

        <div className="space-y-4">
          <div className="flex gap-4 items-start">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700 font-bold text-sm">1</div>
            <div>
              <p className="font-semibold text-slate-900">Describe, don&apos;t just keyword</p>
              <p className="text-sm text-slate-600 mt-1">Instead of typing &quot;coffee,&quot; write &quot;a cozy third-wave coffee shop in a college town that sources fair-trade beans and hosts open mic nights.&quot; More context = better names.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700 font-bold text-sm">2</div>
            <div>
              <p className="font-semibold text-slate-900">Generate in batches, then distance yourself</p>
              <p className="text-sm text-slate-600 mt-1">Get 15–20 name suggestions, then walk away for at least an hour. Names that stick after a break are the ones worth pursuing.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700 font-bold text-sm">3</div>
            <div>
              <p className="font-semibold text-slate-900">Say them out loud</p>
              <p className="text-sm text-slate-600 mt-1">If you can&apos;t say it in a sentence without stumbling, your customers can&apos;t either. &quot;I heard about [name] from a friend&quot; — does it flow?</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700 font-bold text-sm">4</div>
            <div>
              <p className="font-semibold text-slate-900">Check availability immediately</p>
              <p className="text-sm text-slate-600 mt-1">Use a tool that checks domain and social handle availability in real-time. Good names get registered fast — don&apos;t fall in love with something you can&apos;t have.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700 font-bold text-sm">5</div>
            <div>
              <p className="font-semibold text-slate-900">Build the brand, not just the name</p>
              <p className="text-sm text-slate-600 mt-1">A name becomes powerful when it has a visual identity attached. Generate a full brand kit — logo concept, colors, tagline, typography — so you can see how the name lives in the real world.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Free vs Paid */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Free Name Generators vs. Naming Agencies: The Real Comparison
        </h2>
        <div className="rounded-2xl border border-slate-200 overflow-hidden mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50">
                <th className="text-left p-4 font-semibold text-slate-900">Factor</th>
                <th className="text-left p-4 font-semibold text-slate-900">Free Generator</th>
                <th className="text-left p-4 font-semibold text-brand-700">Naming Agency</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="p-4 font-medium text-slate-900">Cost</td>
                <td className="p-4 text-slate-600">$0</td>
                <td className="p-4 text-slate-600">$5,000–$50,000+</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-slate-900">Speed</td>
                <td className="p-4 text-slate-600">Seconds to minutes</td>
                <td className="p-4 text-slate-600">2–8 weeks</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-slate-900">Iterations</td>
                <td className="p-4 text-slate-600">Unlimited (regenerate anytime)</td>
                <td className="p-4 text-slate-600">2–3 rounds</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-slate-900">Customization</td>
                <td className="p-4 text-slate-600">Context-aware with AI</td>
                <td className="p-4 text-slate-600">Deep strategic research</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-slate-900">Brand identity</td>
                <td className="p-4 text-slate-600">Varies — some include kits</td>
                <td className="p-4 text-slate-600">Full brand guidelines</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-slate-900">Availability checks</td>
                <td className="p-4 text-slate-600">Real-time domain & social</td>
                <td className="p-4 text-slate-600">Manual trademark research</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-slate-700">
          For most founders — especially early-stage — a free AI name generator like BrandForge gives you
          90% of the value at 0% of the cost. Agencies shine when you need deep market research or trademark
          legal work. For naming itself, AI has caught up fast.
        </p>
      </div>

      {/* Industry-specific tips */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Industry-Specific Naming Tips
        </h2>
        <div className="space-y-6">
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-900 mb-2">🚀 Tech & SaaS Startups</h3>
            <p className="text-sm text-slate-700">
              Go for short, memorable names that suggest capability without boxing you in.
              &quot;Stripe,&quot; &quot;Figma,&quot; and &quot;Vercel&quot; work because they&apos;re distinctive without being
              descriptive. Use a free generator and filter for single-word, 2-syllable results.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-900 mb-2">☕ Food & Beverage Brands</h3>
            <p className="text-sm text-slate-700">
              Sensory names win. &quot;Salt &amp; Stone,&quot; &quot;Blue Bottle,&quot; &quot;Sweetgreen&quot; — they evoke taste,
              texture, or place. Write a vivid description of your concept before generating names.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-900 mb-2">👗 Fashion & Beauty Brands</h3>
            <p className="text-sm text-slate-700">
              Elegance and simplicity rule. French and Italian-sounding names (even made-up ones) carry
              weight. Single words with soft consonants — &quot;Alo,&quot; &quot;Everlane,&quot; &quot;Glossier&quot; —
              feel premium without trying too hard.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-900 mb-2">💼 Consulting & Finance</h3>
            <p className="text-sm text-slate-700">
              Trust signals matter. Names with &quot;Capital,&quot; &quot;Partners,&quot; &quot;Group,&quot; or geographic
              references (&quot;Meridian,&quot; &quot;Atlantic&quot;) convey stability. Don&apos;t be too clever —
              credibility beats creativity in this space.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-900 mb-2">🏋️ Fitness & Wellness</h3>
            <p className="text-sm text-slate-700">
              Action words and energy. &quot;Pulse,&quot; &quot;Stride,&quot; &quot;Forge&quot; — names that suggest movement,
              transformation, or commitment. Your customers are chasing a better version of themselves.
              The name should match that energy.
            </p>
          </div>
        </div>
      </div>

      {/* Common mistakes */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          5 Mistakes People Make With Free Name Generators
        </h2>
        <div className="space-y-5">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">❌ Using the first result without exploring</h3>
            <p className="text-slate-700">Generate at least 3–5 batches before committing. The first round is often a warmup. Your &quot;aha&quot; name usually comes in round 2 or 3.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">❌ Picking a name before checking availability</h3>
            <p className="text-slate-700">Fall in love with a name, then discover the domain is taken? Heartbreaking. Use a tool that checks availability from the start.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">❌ Ignoring how it sounds out loud</h3>
            <p className="text-slate-700">Say the name 10 times fast. Tell it to three friends. If anyone asks &quot;how do you spell that?&quot; — it&apos;s too complicated.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">❌ Choosing a name that describes what you do</h3>
            <p className="text-slate-700">&quot;Smith Accounting Services&quot; is clear but forgettable. &quot;ClearLedger&quot; is clear <em>and</em> memorable. Aim for suggestive, not literal.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">❌ Skipping the brand identity step</h3>
            <p className="text-slate-700">A name without a visual identity is just a word. Generate a full brand kit (colors, logo direction, tagline) alongside the name to see if it <em>feels</em> right.</p>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Ready to Find Your Brand Name?</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Stop scrolling through random word generators. Describe your business idea and let AI create
          names that actually fit — with full brand kits, real-time domain checks, and zero cost to start.
        </p>
        <div className="rounded-2xl border-2 border-brand-200 bg-brand-50/50 p-8 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-2">Try BrandForge free — no credit card required</h3>
          <p className="text-sm text-slate-600 mb-6">
            5 free name generations with complete brand kits. See why thousands of founders trust us.
          </p>
          <a href="/generate" className="btn-primary text-base px-8 py-3">
            Generate Names for My Business
          </a>
        </div>
      </div>

      {/* Related */}
      <div className="mb-12 rounded-2xl bg-slate-50 p-6">
        <p className="text-sm font-semibold text-slate-900 mb-3">📖 More naming guides:</p>
        <ul className="space-y-2">
          <li>
            <Link href="/blog/how-to-choose-business-name" className="text-brand-600 hover:text-brand-700 text-sm">
              How to Choose a Business Name: The Complete Guide →
            </Link>
          </li>
          <li>
            <Link href="/blog/catchy-business-names" className="text-brand-600 hover:text-brand-700 text-sm">
              150+ Catchy Business Names for Every Industry →
            </Link>
          </li>
          <li>
            <Link href="/blog/creative-brand-names" className="text-brand-600 hover:text-brand-700 text-sm">
              Creative Brand Names: 60+ Examples & What Makes Them Work →
            </Link>
          </li>
          <li>
            <Link href="/blog/startup-naming-mistakes" className="text-brand-600 hover:text-brand-700 text-sm">
              7 Naming Mistakes That Kill Startups →
            </Link>
          </li>
        </ul>
      </div>

      {/* Newsletter */}
      <BlogNewsletterSection />
    </div>
  )
}