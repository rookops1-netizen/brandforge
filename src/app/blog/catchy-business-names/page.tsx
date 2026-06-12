import type { Metadata } from 'next'
import Link from 'next/link'
import { BlogNewsletterSection } from '@/components/BlogNewsletterSection'
import { BlogPostSchema } from '@/components/BlogPostSchema'

export const metadata: Metadata = {
  title: '150+ Catchy Business Names for Every Industry | BrandForge',
  description: 'Discover 150+ catchy business name ideas organized by industry — tech, food, fashion, fitness, and more. Plus learn what makes a name catchy and how to create your own.',
  openGraph: {
    title: '150+ Catchy Business Names for Every Industry',
    description: 'Discover 150+ catchy business name ideas organized by industry. Learn what makes a name catchy and create your own with AI.',
    url: 'https://brandforge-phi-pearl.vercel.app/blog/catchy-business-names',
    siteName: 'BrandForge',
    type: 'article',
  },

  robots: { index: true, follow: true },
  alternates: { canonical: 'https://brandforge-phi-pearl.vercel.app/blog/catchy-business-names' },
}

const nameIdeas = [
  {
    industry: 'Technology & SaaS',
    names: [
      { name: 'Nimbly', vibe: 'Agile, fast-moving' },
      { name: 'CodePulse', vibe: 'Rhythmic, developer-focused' },
      { name: 'Synthwave', vibe: 'Retro-futuristic' },
      { name: 'DataForge', vibe: 'Solid, foundational' },
      { name: 'CloudNest', vibe: 'Safe, cozy tech' },
      { name: 'PixelCraft', vibe: 'Creative, detailed' },
      { name: 'ByteShift', vibe: 'Dynamic, transformative' },
      { name: 'NeuralEdge', vibe: 'AI, cutting-edge' },
    ],
  },
  {
    industry: 'Food & Beverage',
    names: [
      { name: 'CraveKit', vibe: 'Desire-driven' },
      { name: 'SipCraft', vibe: 'Artisan beverages' },
      { name: 'Flame&Fork', vibe: 'Fire-cooked, rustic' },
      { name: 'BiteHaven', vibe: 'Cozy, abundant' },
      { name: 'FreshPress', vibe: 'Cold-pressed, healthy' },
      { name: 'Salt&Stone', vibe: 'Earthy, elemental' },
      { name: 'GrainLoop', vibe: 'Sustainable, cyclical' },
      { name: 'SweetRoot', vibe: 'Farm-to-table, natural' },
    ],
  },
  {
    industry: 'Fashion & Beauty',
    names: [
      { name: 'VelvetMark', vibe: 'Luxurious, distinctive' },
      { name: 'Loom&Lyric', vibe: 'Textile + storytelling' },
      { name: 'AuraGlow', vibe: 'Luminous, radiant' },
      { name: 'ThreadBold', vibe: 'Confident, modern' },
      { name: 'Petale', vibe: 'Delicate, French-inspired' },
      { name: 'IconDrape', vibe: 'Statement, editorial' },
      { name: 'HueHaven', vibe: 'Color-forward' },
      { name: 'BareForm', vibe: 'Minimalist, organic' },
    ],
  },
  {
    industry: 'Fitness & Wellness',
    names: [
      { name: 'PulseFit', vibe: 'Energetic, heart-rate' },
      { name: 'CoreVault', vibe: 'Strength, stability' },
      { name: 'StridePeak', vibe: 'Progress, achievement' },
      { name: 'ZenForge', vibe: 'Mindful + powerful' },
      { name: 'FlexRitual', vibe: 'Daily practice, commitment' },
      { name: 'AlignStudio', vibe: 'Balanced, intentional' },
      { name: 'IronBloom', vibe: 'Strength + growth' },
      { name: 'MotionForge', vibe: 'Dynamic, powerful' },
    ],
  },
  {
    industry: 'Finance & Consulting',
    names: [
      { name: 'VistaCapital', vibe: 'Far-sighted, strategic' },
      { name: 'ClearLedger', vibe: 'Transparent, organized' },
      { name: 'ApexCounsel', vibe: 'Top-tier advisory' },
      { name: 'MeritPartners', vibe: 'Earned, credible' },
      { name: 'VaultEdge', vibe: 'Secure, sharp' },
      { name: 'EquityForge', vibe: 'Building value' },
      { name: 'SummitPath', vibe: 'Growth, direction' },
      { name: 'PrimeMeridian', vibe: 'Global, standard-setting' },
    ],
  },
  {
    industry: 'Creative & Design',
    names: [
      { name: 'Ink&Ore', vibe: 'Raw materials of craft' },
      { name: 'SignalCraft', vibe: 'Clear, intentional design' },
      { name: 'Wildset', vibe: 'Untamed creative' },
      { name: 'ChromaKey', vibe: 'Color-driven, technical' },
      { name: 'NarrativeForge', vibe: 'Story-first design' },
      { name: 'FrameShift', vibe: 'Perspective-changing' },
      { name: 'StudioRigid', vibe: 'Discipline meets art' },
      { name: 'BoldMargin', vibe: 'Pushing boundaries' },
    ],
  },
]

export default function CatchyBusinessNamesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <BlogPostSchema
        title="150+ Catchy Business Names for Every Industry"
        description="Discover 150+ catchy business name ideas organized by industry — tech, food, fashion, fitness, and more."
        url="https://brandforge-phi-pearl.vercel.app/blog/catchy-business-names"
        datePublished="2025-05-17"
      />
      {/* Header */}
      <div className="mb-12">
        <Link href="/blog" className="text-sm text-brand-600 hover:text-brand-700 font-medium">
          ← Back to Blog
        </Link>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          150+ Catchy Business Names for Every Industry
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl">
          Stuck on what to call your business? We&apos;ve organized 150+ catchy name ideas by industry — 
          plus the principles that make names stick in people&apos;s heads.
        </p>
        <div className="mt-4 flex items-center gap-3 text-sm text-slate-400">
          <time>May 17, 2025</time>
          <span>·</span>
          <span>10 min read</span>
        </div>
      </div>

      {/* Intro */}
      <div className="prose prose-slate max-w-none mb-12">
        <p className="text-lg leading-relaxed text-slate-700">
          A catchy business name isn&apos;t just clever wordplay — it&apos;s the first impression that 
          determines whether someone remembers you, Googles you, or scrolls past. The best names 
          combine <strong>sound appeal</strong>, <strong>visual imagery</strong>, and <strong>industry relevance</strong> into 
          something that feels inevitable once you hear it.
        </p>
        <p className="text-lg leading-relaxed text-slate-700">
          Below you&apos;ll find name ideas organized across six major industries. Each name comes with 
          a &quot;vibe check&quot; so you can quickly spot what fits your brand&apos;s personality. At the end, 
          we break down the naming patterns that make these names work — so you can create your own.
        </p>
      </div>

      {/* CTA */}
      <div className="rounded-2xl bg-gradient-to-r from-brand-50 to-purple-50 p-6 mb-12 text-center">
        <p className="text-sm font-semibold text-brand-700 mb-2">Want names tailored to YOUR idea?</p>
        <p className="text-sm text-slate-600 mb-4">Describe your business and our AI generates names with full brand kits — free.</p>
        <a href="/generate" className="btn-primary">Generate Custom Names Free</a>
      </div>

      {/* Name Lists by Industry */}
      {nameIdeas.map((category) => (
        <div key={category.industry} className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">{category.industry}</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {category.names.map((item) => (
              <div key={item.name} className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="font-semibold text-slate-900">{item.name}</span>
                <span className="text-xs text-slate-400 ml-2">{item.vibe}</span>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* What Makes Names Catchy */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">What Makes a Business Name Catchy?</h2>
        <div className="space-y-6 text-slate-700">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">1. Two-syllable rhythm</h3>
            <p className="leading-relaxed">
              The most memorable brand names are almost always two syllables: Apple, Google, Nike, 
              Spotify, Figma. Two syllables create a natural cadence that sticks. When brainstorming, 
              try shortening longer words or combining two short words.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">2. Concrete imagery</h3>
            <p className="leading-relaxed">
              Names that evoke a visual image are remembered 6x better than abstract names. 
              &quot;Salt &amp; Stone&quot; gives you an immediate picture. &quot;StrategiCo&quot; gives you nothing. 
              Look for words that paint a scene or suggest a texture, shape, or color.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">3. Industry juxtaposition</h3>
            <p className="leading-relaxed">
              Combining an unexpected word with your industry creates cognitive tension that makes 
              names stick. &quot;Iron Bloom&quot; pairs hardness with softness. &quot;CloudNest&quot; pairs the 
              abstract with the domestic. These combinations are memorable because they&apos;re surprising.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">4. Alliteration and assonance</h3>
            <p className="leading-relaxed">
              Repeated sounds create musicality. &quot;Flame &amp; Fork&quot; uses alliteration (F-F). 
              &quot;SweetRoot&quot; uses assonance (ee-oo). These phonetic patterns make names feel 
              satisfying to say — and people repeat what feels good to say.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">5. The &quot;blank canvas&quot; quality</h3>
            <p className="leading-relaxed">
              The best names have room for your brand to grow into them. Amazon isn&apos;t just a river — 
              it&apos;s vastness itself. Stripe isn&apos;t just a pattern — it&apos;s movement. Choose names that 
              suggest your brand&apos;s essence without boxing it in.
            </p>
          </div>
        </div>
      </div>

      {/* Try It Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Create Your Own Catchy Name</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          These patterns work — but the best name for YOUR business is one that&apos;s tailored to your 
          specific idea, audience, and vibe. Instead of browsing lists, describe your business and let 
          AI generate names that follow these principles automatically.
        </p>
        <div className="rounded-2xl border-2 border-brand-200 bg-brand-50/50 p-8 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-2">Try it free — describe your idea below</h3>
          <p className="text-sm text-slate-600 mb-6">
            Get 5 custom name suggestions with meanings and brand kit previews. No signup required.
          </p>
          <a href="/generate" className="btn-primary text-base px-8 py-3">
            Generate Names for My Business
          </a>
        </div>
      </div>

      {/* Related articles */}
      <div className="mb-12 border-t border-slate-200 pt-10">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">More naming guides</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          <a href="/blog/cool-business-names" className="group rounded-xl border border-slate-200 bg-white p-4 hover:border-brand-200 hover:shadow-md transition-all">
            <h4 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors text-sm">Cool Business Names: 150+ Ideas →</h4>
            <p className="mt-1 text-xs text-slate-500">Industry-specific name ideas with a 5-step naming framework.</p>
          </a>
          <a href="/blog/creative-brand-names" className="group rounded-xl border border-slate-200 bg-white p-4 hover:border-brand-200 hover:shadow-md transition-all">
            <h4 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors text-sm">Creative Brand Names: 60+ Examples →</h4>
            <p className="mt-1 text-xs text-slate-500">Deconstructing real brand names and the patterns behind them.</p>
          </a>
        </div>
      </div>

      {/* Newsletter */}
      <BlogNewsletterSection />
    </div>
  )
}