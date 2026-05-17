import type { Metadata } from 'next'
import Link from 'next/link'
import { BlogNewsletterSection } from '@/components/BlogNewsletterSection'

export const metadata: Metadata = {
  title: 'Creative Brand Names: 60+ Examples & What Makes Them Work | BrandForge',
  description: 'Deconstruct 60+ creative brand names from real companies and learn the patterns behind them — portmanteaus, metaphors, foreign words, and more. Apply these patterns to name your own brand.',
  openGraph: {
    title: 'Creative Brand Names: 60+ Examples & What Makes Them Work',
    description: 'Deconstruct 60+ creative brand names and learn the patterns behind them. Apply these patterns to your own brand.',
    url: 'https://brandforge-phi-pearl.vercel.app/blog/creative-brand-names',
    siteName: 'BrandForge',
    type: 'article',
  },
}

const categories = [
  {
    title: 'Portmanteaus (Blended Words)',
    desc: 'Two words fused into one. Creates novelty while communicating meaning instantly.',
    examples: [
      { name: 'Pinterest', blend: 'Pin + Interest', why: 'Perfectly describes the product — pinning things you find interesting.' },
      { name: 'Instagram', blend: 'Instant + Telegram', why: 'Speed (instant) + communication (telegram). A photo-message.' },
      { name: 'Netflix', blend: 'Internet + Flicks', why: 'Internet-delivered movies. Simple and self-explanatory.' },
      { name: 'Microsoft', blend: 'Microcomputer + Software', why: 'Literally what they sold. The name IS the business model.' },
      { name: 'Vodafone', blend: 'Voice + Data + Phone', why: 'Telecom trifecta — voice, data, and phone in one name.' },
      { name: 'Groupon', blend: 'Group + Coupon', why: 'Group buying = group coupons. The name explains the mechanic.' },
      { name: 'Shopify', blend: 'Shop + Simplify', why: 'Simplified shopping. The "-ify" suffix is now iconic.' },
      { name: 'Mailchimp', blend: 'Mail + Chimpanzee', why: 'Playful, memorable. The mascot writes itself.' },
    ],
  },
  {
    title: 'Metaphors & Imagery',
    desc: 'Names that evoke a vivid image or concept. The brain remembers images 6x better than abstract words.',
    examples: [
      { name: 'Amazon', blend: 'Vast rainforest → vast selection', why: 'The biggest river in the world = the biggest store. Simple metaphor.' },
      { name: 'Apple', blend: 'Fruit → knowledge, simplicity', why: 'Counter-intuitive for tech. The surprise IS the memory hook.' },
      { name: 'Stripe', blend: 'A line → movement, flow', why: 'Visual and dynamic. Payments "stripe" through the system.' },
      { name: 'Nike', blend: 'Greek goddess of victory', why: 'Mythological backing gives the brand mythic proportions.' },
      { name: 'Patagonia', blend: 'Wild landscape → outdoor adventure', why: 'A real place associated with exploration and wilderness.' },
      { name: 'Spotify', blend: 'Spot + Identify', why: 'Abstract but suggestive of discovery and recognition.' },
      { name: 'Lululemon', blend: 'Playful repetition → approachable luxury', why: 'Triple-L sound is fun to say. The quirkiness IS the brand.' },
      { name: 'Warby Parker', blend: 'Two old-school names → retro-modern', why: 'Founders named after characters in Jack Kerouac papers.' },
    ],
  },
  {
    title: 'Foreign & Ancient Words',
    desc: 'Words borrowed from other languages carry exoticism and depth. They feel meaningful even if you don\'t know the translation.',
    examples: [
      { name: 'Volvo', blend: 'Latin: "I roll"', why: 'Simple, strong Latin verb. Perfect for cars.' },
      { name: 'Lego', blend: 'Danish: "play well" (leg godt)', why: 'The name IS the mission statement, and nobody realizes it.' },
      { name: 'Asus', blend: 'Greek: Pegasus (winged horse)', why: 'Dropped the "Peg" to get a unique short name. Still mythic.' },
      { name: 'Häagen-Dazs', blend: 'Made-up "Scandinavian" (no real meaning)', why: 'The sound evokes premium European quality. Brilliant phonetics.' },
      { name: 'Samsung', blend: 'Korean: "three stars"', why: 'Three = numerous/strong. Stars = eternal/bright. Very intentional.' },
      { name: 'Sony', blend: 'Latin: "sonus" (sound)', why: 'Sound company. Also sounds friendly and approachable.' },
      { name: 'Kia', blend: 'Korean: "to arise/orient"', why: 'Rising from the East. A name that hints at ambition.' },
      { name: 'Peugeot', blend: 'French surname → luxury heritage', why: 'Heritage names carry assumed quality and tradition.' },
    ],
  },
  {
    title: 'Descriptive & Literal',
    desc: 'Names that say exactly what you do. Lower creativity, higher clarity. Best for B2B and utilitarian products.',
    examples: [
      { name: 'General Motors', blend: 'Makes motors, generally', why: 'Zero ambiguity. You know exactly what this company does.' },
      { name: 'Bank of America', blend: 'A bank, for Americans', why: 'Maximum trust through maximum clarity. No guessing.' },
      { name: 'Home Depot', blend: 'Depot for home supplies', why: 'Warehouse scale suggested by "Depot." Substance over style.' },
      { name: 'Whole Foods', blend: 'Complete/uncut food', why: 'The name IS the value proposition. No processing, no confusion.' },
      { name: 'Best Buy', blend: 'The best purchase', why: 'Consumer value stated directly. What more do you need?' },
      { name: 'FedEx', blend: 'Federal Express', why: 'Started descriptive, shortened to iconic. The abbreviation IS the brand now.' },
      { name: 'Salesforce', blend: 'A force for sales', why: 'B2B clarity. The name states the business outcome.' },
      { name: 'WeWork', blend: 'We + work (together)', why: 'Community stated simply. "We" before "Work."' },
    ],
  },
  {
    title: 'Abstract & Invented',
    desc: 'Made-up words with no dictionary meaning. Total freedom but requires more marketing to build recognition.',
    examples: [
      { name: 'Kodak', blend: 'Invented — strong K sound', why: 'George Eastwood wanted a word that couldn\'t be misspelled or mispronounced.' },
      { name: 'Exxon', blend: 'Invented — double X is visually distinctive', why: 'Computer-generated from a list of candidates. The X\'s make it iconic.' },
      { name: 'Rolex', blend: 'Invented — sounds like rolling and luxury', why: 'Allegedly chosen because it sounds like a watch being wound.' },
      { name: 'Zappos', blend: 'Zap + shoes (zapatos in Spanish)', why: 'Playful sound + hidden Spanish meaning. Double-layered name.' },
      { name: 'Escalade', blend: 'Invented for Cadillac', why: 'Sounds like ascending/climbing. Luxury SUV positioning.' },
      { name: 'Velcro', blend: 'French: velours + crochet', why: 'The name describes HOW it works (velvet + hook). Functional poetry.' },
      { name: 'Kleenex', blend: 'Clean + ex (exceptional)', why: 'Modified real word. The "ex" ending is a naming convention now.' },
      { name: 'Google', blend: 'Googol (10^100) + Oogle', why: 'Mathematical vastness + casual slang. The misspelling is now worth $1.7T.' },
    ],
  },
]

export default function CreativeBrandNamesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-12">
        <Link href="/blog" className="text-sm text-brand-600 hover:text-brand-700 font-medium">
          ← Back to Blog
        </Link>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Creative Brand Names: 60+ Examples &amp; What Makes Them Work
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl">
          Portmanteaus, metaphors, foreign words, and more — deconstruct 60+ real brand names 
          and learn the repeatable patterns behind them.
        </p>
        <div className="mt-4 flex items-center gap-3 text-sm text-slate-400">
          <time>May 17, 2025</time>
          <span>·</span>
          <span>11 min read</span>
        </div>
      </div>

      {/* Intro */}
      <div className="mb-12 text-slate-700 leading-relaxed">
        <p>
          Creative brand names aren&apos;t random. Behind every &quot;Pinterest&quot; and &quot;Stripe&quot; is a pattern — 
          a repeatable naming formula you can apply to your own business. This guide breaks down 60+ 
          real brand names into <strong>five naming archetypes</strong> so you can understand what 
          works, why it works, and how to make it work for you.
        </p>
      </div>

      {/* CTA */}
      <div className="rounded-2xl bg-gradient-to-r from-brand-50 to-purple-50 p-6 mb-12 text-center">
        <p className="text-sm font-semibold text-brand-700 mb-2">Apply these patterns to YOUR brand</p>
        <p className="text-sm text-slate-600 mb-4">Describe your business and AI generates names using these proven patterns — free.</p>
        <a href="/generate" className="btn-primary">Try the AI Name Generator</a>
      </div>

      {/* Categories */}
      {categories.map((category) => (
        <div key={category.title} className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">{category.title}</h2>
          <p className="text-slate-600 mb-6">{category.desc}</p>
          
          <div className="space-y-4">
            {category.examples.map((example) => (
              <div key={example.name} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-bold text-slate-900">{example.name}</span>
                    <span className="text-xs text-brand-600 bg-brand-50 px-2 py-0.5 rounded-full">{category.title.split(' ')[0]}</span>
                  </div>
                  <span className="text-sm text-slate-500">{example.blend}</span>
                </div>
                <p className="mt-2 text-sm text-slate-600">{example.why}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Applying the patterns */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Applying These Patterns to Your Brand</h2>
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>Here&apos;s the meta-pattern: <strong>every great brand name follows a formula</strong>. 
          You don&apos;t need to be &quot;creative&quot; in the mystical sense — you need to pick the right formula 
          for your industry and audience, then find the best words to fill it.</p>
          
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-6 space-y-3">
            <h3 className="font-semibold text-slate-900">Quick formula picker:</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>B2C / consumer app?</strong> → Portmanteau or metaphor (Instagram, Spotify)</li>
              <li><strong>B2B / enterprise?</strong> → Descriptive with a twist (Salesforce, ClearLedger)</li>
              <li><strong>Luxury / lifestyle?</strong> → Foreign word or abstract (Lululemon, Häagen-Dazs)</li>
              <li><strong>Product / utility?</strong> → Descriptive or literal (Whole Foods, Home Depot)</li>
              <li><strong>Creative / agency?</strong> → Material + action (Ink &amp; Ore, StoryForge)</li>
              <li><strong>Tech / startup?</strong> → Short + suffix (Shopify, CodePulse, NimblAI)</li>
            </ul>
          </div>
          
          <p>Once you know your formula, the brainstorming goes 10x faster — because you&apos;re filling in a template, 
          not staring at a blank page.</p>
        </div>
      </div>

      {/* Final CTA */}
      <div className="rounded-2xl border-2 border-brand-200 bg-brand-50/50 p-8 text-center mb-12">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Let AI find your formula</h3>
        <p className="text-sm text-slate-600 mb-6">
          Describe your business and our AI applies these naming patterns to generate custom 
          suggestions with brand kits — free to start.
        </p>
        <a href="/generate" className="btn-primary text-base px-8 py-3">
          Generate My Brand Name
        </a>
      </div>

      {/* Newsletter */}
      <BlogNewsletterSection />
    </div>
  )
}