import type { Metadata } from 'next'
import Link from 'next/link'
import { BlogNewsletterSection } from '@/components/BlogNewsletterSection'
import { BlogPostSchema } from '@/components/BlogPostSchema'

export const dynamic = 'force-static'
export const metadata: Metadata = {
  title: 'Unique Business Names: 120+ Standout Ideas & How to Create Your Own | BrandForge',
  description: 'Browse 120+ unique business name ideas across 8 industries, plus learn the 6 proven techniques for creating names nobody else has — from portmanteaus to foreign words to deliberate misspellings.',
  openGraph: {
    title: 'Unique Business Names: 120+ Standout Ideas & Naming Techniques',
    description: 'Tired of finding your perfect name is already taken? Learn the techniques behind genuinely unique business names and browse 120+ examples by industry.',
    url: 'https://brandforge-phi-pearl.vercel.app/blog/unique-business-names',
    siteName: 'BrandForge',
    type: 'article',
  },

  robots: { index: true, follow: true },
  alternates: { canonical: 'https://brandforge-phi-pearl.vercel.app/blog/unique-business-names' },
}

const industries = [
  {
    name: 'Tech & SaaS',
    icon: '🚀',
    names: [
      { name: 'Nexora', pattern: 'Invented (prefix + suffix)' },
      { name: 'Veloxity', pattern: 'Portmanteau (velocity + city)' },
      { name: 'Cloudbound', pattern: 'Compound (cloud + bound)' },
      { name: 'Synthetica', pattern: 'Suffix extension' },
      { name: 'Kinetiq', pattern: 'Deliberate misspelling' },
      { name: 'ByteForge', pattern: 'Compound (byte + forge)' },
      { name: 'Luminode', pattern: 'Blend (luminous + node)' },
      { name: 'Algoris', pattern: 'Truncation (algorithm)' },
      { name: 'Devora', pattern: 'Blend (dev + ora)' },
      { name: 'Quantis', pattern: 'Truncation (quantitative)' },
      { name: 'Resolvr', pattern: 'Deliberate misspelling' },
      { name: 'Architechs', pattern: 'Pun (architects)' },
      { name: 'Framewire', pattern: 'Compound' },
      { name: 'Cortexia', pattern: 'Suffix extension' },
      { name: 'ShiftSync', pattern: 'Alliteration + compound' },
    ],
  },
  {
    name: 'Food & Beverage',
    icon: '🍽️',
    names: [
      { name: 'Ember & Oak', pattern: 'Compound with nature' },
      { name: 'Rivulets', pattern: 'Evocative word (small streams)' },
      { name: 'Gatherfold', pattern: 'Compound (gather + fold)' },
      { name: 'Saffron Trails', pattern: 'Spice + metaphor' },
      { name: 'Hearth & Rye', pattern: 'Alliterative compound' },
      { name: 'Bitterroot', pattern: 'Real plant name' },
      { name: 'Larkspur Kitchen', pattern: 'Flower + type' },
      { name: 'Saltmark', pattern: 'Compound (salt + mark)' },
      { name: 'Fern & Fable', pattern: 'Alliterative compound' },
      { name: 'Quill & Carafe', pattern: 'Alliterative compound' },
      { name: 'Tidewaters', pattern: 'Evocative word' },
      { name: 'Plum & Seed', pattern: 'Alliterative compound' },
      { name: 'Wildbrine', pattern: 'Compound (wild + brine)' },
      { name: 'Goldenrod', pattern: 'Nature word' },
      { name: 'Charred Leaf', pattern: 'Compound with nature' },
    ],
  },
  {
    name: 'Fashion & Beauty',
    icon: '👗',
    names: [
      { name: 'Veloura', pattern: 'Suffix extension (velour)' },
      { name: 'Casa Mina', pattern: 'Foreign phrase (my home)' },
      { name: 'Iver & Bloom', pattern: 'Compound with nature' },
      { name: 'Soletta', pattern: 'Italian-sounding suffix' },
      { name: 'Silkenist', pattern: 'Blend (silken + ist)' },
      { name: 'Aura Muse', pattern: 'Metaphor' },
      { name: 'Lumilla', pattern: 'Blend (luminous + vanilla)' },
      { name: 'Rove & Root', pattern: 'Alliterative compound' },
      { name: 'Noctis', pattern: 'Latin word (night)' },
      { name: 'Petale', pattern: 'Deliberate misspelling (petal)' },
      { name: 'Verve & Vow', pattern: 'Alliteration' },
      { name: 'Kinsley Rose', pattern: 'Personal name + flower' },
      { name: 'Maison Clair', pattern: 'French phrasing (clear house)' },
      { name: 'Olivane', pattern: 'Blend (olive + vanilla)' },
      { name: 'Threadlore', pattern: 'Compound (thread + lore)' },
    ],
  },
  {
    name: 'Consulting & Finance',
    icon: '💼',
    names: [
      { name: 'Meridian Group', pattern: 'Geographic word + type' },
      { name: 'Altitudinal', pattern: 'Evocative abstraction' },
      { name: 'Forgepoint', pattern: 'Compound (forge + point)' },
      { name: 'Catalyst Advising', pattern: 'Metaphor + type' },
      { name: 'Vantage Partners', pattern: 'Evocative word + type' },
      { name: 'Equitable', pattern: 'Evocative word' },
      { name: 'Stratos Capital', pattern: 'Prefix + traditional' },
      { name: 'Northward', pattern: 'Directional word' },
      { name: 'Keystone Ventures', pattern: 'Metaphor + type' },
      { name: 'Pillar & Post', pattern: 'Alliterative compound' },
      { name: 'Ascendancy', pattern: 'Evocative word' },
      { name: 'Summitline', pattern: 'Compound' },
      { name: 'Cobalt Capital', pattern: 'Material + type' },
      { name: 'Veridian', pattern: 'Suffix extension (verdant)' },
      { name: 'Crownmark', pattern: 'Compound' },
    ],
  },
  {
    name: 'Fitness & Wellness',
    icon: '🏋️',
    names: [
      { name: 'PulseFit', pattern: 'Compound (pulse + fit)' },
      { name: 'Habitat Wellness', pattern: 'Evocative + type' },
      { name: 'Stridetide', pattern: 'Compound (stride + tide)' },
      { name: 'Breatheology', pattern: 'Blend (breathe + ology)' },
      { name: 'Iron Resolve', pattern: 'Compound (strength metaphor)' },
      { name: 'Kinetic Shift', pattern: 'Scientific + metaphor' },
      { name: 'Vitalcore', pattern: 'Compound (vital + core)' },
      { name: 'Ascend Movement', pattern: 'Metaphor + type' },
      { name: 'Forge & Flow', pattern: 'Alliterative compound' },
      { name: 'Everthrive', pattern: 'Compound (ever + thrive)' },
      { name: 'Resilient', pattern: 'Evocative word' },
      { name: 'Boundless Health', pattern: 'Evocative + type' },
      { name: 'Peakform', pattern: 'Compound' },
      { name: 'Awaken', pattern: 'Evocative verb' },
      { name: 'Sustain', pattern: 'Evocative verb' },
    ],
  },
  {
    name: 'Creative & Design Agencies',
    icon: '🎨',
    names: [
      { name: 'StoryForge', pattern: 'Compound (story + forge)' },
      { name: 'Prism & Ink', pattern: 'Visual metaphor + medium' },
      { name: 'Framelight', pattern: 'Compound (frame + light)' },
      { name: 'Canopy Creative', pattern: 'Nature metaphor + type' },
      { name: 'Opus & Verse', pattern: 'Latin compound' },
      { name: 'Murmur', pattern: 'Evocative word' },
      { name: 'Ripple Studio', pattern: 'Metaphor + type' },
      { name: 'Mint & Match', pattern: 'Alliterative compound' },
      { name: 'Draftcraft', pattern: 'Compound' },
      { name: 'Signal & Noise', pattern: 'Contrast compound' },
      { name: 'Ember Studio', pattern: 'Nature + type' },
      { name: 'Threadbare', pattern: 'Evocative word' },
      { name: 'Mosaic Mind', pattern: 'Visual metaphor + noun' },
      { name: 'Chromascope', pattern: 'Blend (chromatic + scope)' },
      { name: 'Wondercraft', pattern: 'Compound' },
    ],
  },
  {
    name: 'Education & EdTech',
    icon: '📚',
    names: [
      { name: 'Learnloop', pattern: 'Compound + loop suffix' },
      { name: 'Scholaris', pattern: 'Suffix extension' },
      { name: 'Brainforest', pattern: 'Compound (brain + forest)' },
      { name: 'Curius', pattern: 'Deliberate misspelling (curious)' },
      { name: 'Epiphany', pattern: 'Evocative word' },
      { name: 'Skillweft', pattern: 'Compound (skill + weft)' },
      { name: 'Thinkery', pattern: 'Suffix extension (think + ery)' },
      { name: 'Lumen Academy', pattern: 'Latin word + type' },
      { name: 'Growthmind', pattern: 'Compound' },
      { name: 'Clarify', pattern: 'Evocative verb' },
      { name: 'Sapientia', pattern: 'Latin word (wisdom)' },
      { name: 'Noodleworks', pattern: 'Colloquial compound' },
      { name: 'Ignite Learning', pattern: 'Verb + type' },
      { name: 'Ponderwell', pattern: 'Compound (ponder + well)' },
      { name: 'Sparkpath', pattern: 'Compound' },
    ],
  },
  {
    name: 'Real Estate & Home Services',
    icon: '🏠',
    names: [
      { name: 'Keystone Realty', pattern: 'Metaphor + type' },
      { name: 'Hearth & Home', pattern: 'Alliterative compound' },
      { name: 'Elevation Estates', pattern: 'Evocative + type' },
      { name: 'Cornerstone', pattern: 'Compound metaphor' },
      { name: 'Lot & Line', pattern: 'Alliterative compound' },
      { name: 'Havenbridge', pattern: 'Compound' },
      { name: 'Dwellwell', pattern: 'Compound (dwell + well)' },
      { name: 'Greenpost', pattern: 'Compound' },
      { name: 'Ridgeline Properties', pattern: 'Nature + type' },
      { name: 'Settled', pattern: 'Evocative word' },
      { name: 'Tenet Homes', pattern: 'Play on tenant' },
      { name: 'Anchor & Branch', pattern: 'Compound metaphor' },
      { name: 'Maple Square', pattern: 'Nature + shape' },
      { name: 'Hearthstone', pattern: 'Compound' },
      { name: 'Crestview', pattern: 'Compound (crest + view)' },
    ],
  },
]

const techniques = [
  {
    name: 'Portmanteau',
    description: 'Blend two words into one to create something entirely new.',
    examples: ['Pinterest (pin + interest)', 'Netflix (net + flicks)', 'Instagram (instant + telegram)', 'Evernote (forever + note)'],
    howTo: 'Think of two words that describe what you do. Mash them together. Then trim until it sounds natural. Veloxity (velocity + city), Gatherfold (gather + fold).',
    worksBest: 'Tech, SaaS, anything modern and fast-moving',
  },
  {
    name: 'Foreign Words & Phrases',
    description: 'Borrow from Latin, Greek, Italian, Japanese — any language that resonates with your brand.',
    examples: ['Lego (Latin: "I put together")', 'Volvo (Latin: "I roll")', 'Audi (Latin: "listen")', 'Vizio (Italian-sounding invented)'],
    howTo: 'Start with what your brand means (growth, clarity, strength). Translate that concept into 5-10 languages. Pick the one that sounds best as a name — meaning matters less than sound and distinctiveness.',
    worksBest: 'Fashion, beauty, luxury brands, consulting',
  },
  {
    name: 'Deliberate Misspelling',
    description: 'Take a real word and spell it differently to make it ownable as a trademark.',
    examples: ['Lyft (lift)', 'Fiverr (fiver)', 'Reddit (read it)', 'Tumblr (tumbler)'],
    howTo: 'Write down 20 words related to your brand. Try removing vowels, doubling consonants, or swapping letters. Keep only the ones that are still easy to pronounce and spell when heard.',
    worksBest: 'Tech startups, apps, consumer brands',
  },
  {
    name: 'Evocative Metaphors',
    description: 'Choose a word that evokes a feeling or image — not literal, but suggestive.',
    examples: ['Patagonia (wilderness)', 'Amazon (vastness)', 'Nike (Greek goddess of victory)', 'Casper (friendly ghost → friendly mattress)'],
    howTo: 'Don\'t name what you do — name how you want people to feel. A meal kit company called "HelloFresh" feels approachable and immediate. A project tool called "Asana" feels grounded and intentional.',
    worksBest: 'Consumer brands, lifestyle brands, creative agencies',
  },
  {
    name: 'Compound Words',
    description: 'Combine two real words that tell a story together.',
    examples: ['Facebook (face + book)', 'YouTube (you + tube)', 'Dropbox (drop + box)', 'WordPress (word + press)'],
    howTo: 'List 20 words related to your industry. List 20 more related to your brand personality. Combine every first word with every second word. You\'ll find 3-5 genuinely good compounds.',
    worksBest: 'B2B, tech, platforms, and marketplaces',
  },
  {
    name: 'Personal Names & Surnames',
    description: 'Use a first name, surname, or initials to create an approachable, human-sounding brand.',
    examples: ['Tesla (Nikola Tesla)', 'Hugo Boss (founder)', 'Ben & Jerry\'s (founders)', 'J.Crew (mystery initials)'],
    howTo: 'Pick a name that matches your brand personality. A law firm called "Anderson & Partners" sounds established. A bakery called "Nora" feels warm and personal. The name should feel right for the vibe.',
    worksBest: 'Food, fashion, consulting, professional services',
  },
]

const FAQ_ITEMS = [
  {
    question: 'How do I come up with a unique business name?',
    answer: 'Use proven naming techniques: (1) Portmanteau — blend two words (Pinterest = pin + interest). (2) Foreign words — borrow from Latin, Greek, or other languages (Lego = Latin "I put together"). (3) Deliberate misspelling — modify a real word (Lyft, Fiverr). (4) Evocative metaphors — choose a word that suggests a feeling (Stripe, Amazon). (5) Compound words — combine two real words (Facebook, Dropbox). BrandForge applies all these techniques automatically based on your business description.',
  },
  {
    question: 'What makes a business name truly unique?',
    answer: 'A truly unique name is: (1) Ownable — you can trademark it, get the domain, and own the social handles. (2) Pronounceable — people can say it and spell it after hearing it once. (3) Suggestive, not descriptive — "Stripe" suggests payments without saying "payment processing." (4) Culturally appropriate — it doesn\'t have unintended meanings in your target markets. A name that\'s merely unusual but can\'t be pronounced or spelled isn\'t unique — it\'s just bad.',
  },
  {
    question: 'Can I use a misspelled word as a business name?',
    answer: 'Yes — deliberate misspelling is one of the most effective naming techniques. Lyft (not Lift), Fiverr (not Fiver), Reddit (not Read It), and Tumblr (not Tumbler) all use this approach. The key is that the misspelling must still be easy to pronounce and spell when heard. If someone hears your name and can\'t figure out how to type it, the misspelling is too extreme.',
  },
  {
    question: 'Should I use a foreign word for my business name?',
    answer: 'Foreign words can make excellent brand names — Lego (Latin for "I put together"), Volvo (Latin for "I roll"), and Audi (Latin for "listen") are all Latin-derived. The advantages: they\'re distinctive, often available as domains, and easy to trademark. The key is choosing a word that sounds good in your primary market, regardless of whether customers know the translation. Always check that the word doesn\'t have negative meanings in other languages you might expand into.',
  },
  {
    question: 'How do I check if my unique business name is available?',
    answer: 'Check four things: (1) Domain availability — search at a domain registrar. (2) Trademark search — use USPTO\'s TESS database for identical and similar marks. (3) Social media handles — check Twitter/X, Instagram, LinkedIn, and TikTok. (4) Google search — does your name appear uniquely or get lost among competitors? BrandForge automatically checks domain and social availability for every name it generates.',
  },
  {
    question: 'What are examples of unique business names?',
    answer: 'The most unique business names use naming techniques that create something genuinely new: Portmanteaus like Netflix (net + flicks) and Pinterest (pin + interest). Foreign words like Lego (Latin) and Volvo (Latin). Deliberate misspellings like Lyft and Reddit. Evocative metaphors like Stripe, Amazon, and Nike. Compounds like Facebook and Dropbox. Each technique creates a name that\'s ownable, memorable, and hard to copy.',
  },
  {
    question: 'Is it better to have a unique name or a descriptive name?',
    answer: 'Unique names almost always win. Descriptive names ("Online Shoe Store") are forgettable, hard to trademark, and difficult to rank for in SEO because you compete with every business in that category. Evocative names ("Zappos") are memorable, easy to trademark, and stand out in search. The best names are unique but suggestive — they hint at what you do without being generic.',
  },
  {
    question: 'Is BrandForge\'s name generator free?',
    answer: 'Yes! BrandForge\'s name generator is completely free with unlimited generations. You get name ideas using all six naming techniques — portmanteaus, foreign words, compounds, misspellings, metaphors, and real words — with instant domain and social availability checks. A complete brand kit is available for $9 one-time.',
  },
]

export default function UniqueBusinessNamesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <BlogPostSchema
        title="Unique Business Names: 120+ Standout Ideas and How to Create Your Own"
        description="Browse 120+ unique business name ideas across 8 industries, plus learn the 6 proven techniques for creating names nobody else has."
        url="https://brandforge-phi-pearl.vercel.app/blog/unique-business-names"
        datePublished="2025-05-20"
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
      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brandforge-phi-pearl.vercel.app' },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://brandforge-phi-pearl.vercel.app/blog' },
              { '@type': 'ListItem', position: 3, name: 'Unique Business Names', item: 'https://brandforge-phi-pearl.vercel.app/blog/unique-business-names' },
            ],
          }),
        }}
      />
      {/* Header */}
      <div className="mb-12">
        <Link href="/blog" className="text-sm text-brand-600 hover:text-brand-700 font-medium">
          ← Back to Blog
        </Link>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Unique Business Names: 120+ Standout Ideas & the Techniques Behind Them
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl">
          The best business names don&apos;t come from random word generators — they come from repeatable
          patterns that create genuinely unique, ownable names. Here are 120+ examples across 8 industries
          and the 6 techniques you can use to create your own.
        </p>
        <div className="mt-4 flex items-center gap-3 text-sm text-slate-400">
          <time>May 20, 2025</time>
          <span>·</span>
          <span>13 min read</span>
        </div>
      </div>

      {/* Intro */}
      <div className="prose prose-slate max-w-none mb-12">
        <p className="text-lg leading-relaxed text-slate-700">
          &quot;All the good names are taken.&quot; We hear this every day. It&apos;s not true — but it <em>feels</em> true
          because most naming approaches produce names that already exist or are boring.
        </p>
        <p className="text-lg leading-relaxed text-slate-700">
          Unique names come from unique <strong>patterns</strong>. Netflix isn&apos;t random — it&apos;s a portmanteau
          of &quot;net&quot; and &quot;flicks.&quot; Lego isn&apos;t arbitrary — it&apos;s Latin for &quot;I put together.&quot; Every
          great name follows a pattern you can replicate.
        </p>
        <p className="text-lg leading-relaxed text-slate-700">
          Below, we&apos;ll show you 120+ unique business name ideas organized by industry, then teach you
          the 6 naming patterns behind them so you can create your own.
        </p>
      </div>

      {/* CTA */}
      <div className="rounded-2xl bg-gradient-to-r from-brand-50 to-purple-50 p-6 mb-12 text-center">
        <p className="text-sm font-semibold text-brand-700 mb-2">Want AI to generate unique names for YOUR idea?</p>
        <p className="text-sm text-slate-600 mb-4">Describe your business and get names crafted from real patterns — not random word salads.</p>
        <a href="/generate" className="btn-primary">Generate Unique Names Free</a>
      </div>

      {/* Industry names */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          120+ Unique Business Name Ideas by Industry
        </h2>
        <p className="text-slate-700 mb-8">
          Each name includes the naming pattern it uses — so you can understand <em>why</em> it works
          and create your own variations.
        </p>

        <div className="space-y-8">
          {industries.map((industry) => (
            <div key={industry.name}>
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                {industry.icon} {industry.name}
              </h3>
              <div className="rounded-2xl border border-slate-200 overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="text-left p-3 font-semibold text-slate-900">Name</th>
                      <th className="text-left p-3 font-semibold text-slate-900 hidden sm:table-cell">Pattern</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {industry.names.map((item) => (
                      <tr key={item.name} className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 font-medium text-brand-700">{item.name}</td>
                        <td className="p-3 text-slate-600 hidden sm:table-cell">{item.pattern}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6 Techniques */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          The 6 Techniques for Creating Unique Business Names
        </h2>
        <p className="text-slate-700 mb-8">
          Every unique name on the list above was built with one of these six patterns. Here&apos;s how each works,
          with famous examples and step-by-step instructions.
        </p>

        <div className="space-y-8">
          {techniques.map((tech, i) => (
            <div key={tech.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700 font-bold text-sm">{i + 1}</div>
                <h3 className="text-xl font-bold text-slate-900">{tech.name}</h3>
              </div>
              <p className="text-slate-700 mb-4">{tech.description}</p>

              <div className="rounded-xl bg-slate-50 p-4 mb-4">
                <p className="text-sm font-medium text-slate-700 mb-2">Famous examples:</p>
                <div className="flex flex-wrap gap-2">
                  {tech.examples.map((ex) => (
                    <span key={ex} className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700 border border-slate-200">
                      {ex}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm font-medium text-slate-700 mb-2">How to do it:</p>
                <p className="text-sm text-slate-600">{tech.howTo}</p>
              </div>

              <div className="rounded-xl bg-brand-50/50 p-3">
                <p className="text-xs font-medium text-brand-700">Works best for: {tech.worksBest}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What makes a name truly unique */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          What Makes a Name <em>Truly</em> Unique (vs. Just Unusual)
        </h2>
        <p className="text-slate-700 mb-6">
          There&apos;s a difference between a name that&apos;s unique and a name that&apos;s just weird. Here&apos;s
          the acid test:
        </p>
        <div className="space-y-5">
          <div className="flex gap-4 items-start">
            <div className="text-xl">✅</div>
            <div>
              <p className="font-semibold text-slate-900">Unique = ownable</p>
              <p className="text-sm text-slate-600 mt-1">You can trademark it, get the domain, and own the social handles. Nobody else is using it in your space.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="text-xl">✅</div>
            <div>
              <p className="font-semibold text-slate-900">Unique = pronounceable</p>
              <p className="text-sm text-slate-600 mt-1">If people can say it and spell it after hearing it once, it&apos;s good unusual. If they say &quot;how do you spell that?&quot; it&apos;s bad unusual.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="text-xl">✅</div>
            <div>
              <p className="font-semibold text-slate-900">Unique = suggestive, not descriptive</p>
              <p className="text-sm text-slate-600 mt-1">&quot;Stripe&quot; suggests payments without saying &quot;payment processing.&quot; &quot;Xqyt&quot; says nothing and nobody can spell it. Aim for Stripe, not Xqyt.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="text-xl">✅</div>
            <div>
              <p className="font-semibold text-slate-900">Unique = culturally appropriate</p>
              <p className="text-sm text-slate-600 mt-1">A name that sounds great in English might mean something embarrassing in another language. Always check across your target markets.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3 exercises */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          3 Exercises to Create Your Own Unique Name
        </h2>

        <div className="space-y-6">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Exercise 1: The Word Blender</h3>
            <p className="text-sm text-slate-700 mb-3">
              Write 10 words that describe what your business <em>does</em> (functional words). Then write 10
              words that describe how you want people to <em>feel</em> (emotional words). Now blend every
              functional word with every emotional word.
            </p>
            <p className="text-sm text-slate-600 italic">
              Example: &quot;growth&quot; + &quot;spark&quot; = GrowthSpark. &quot;data&quot; + &quot;luminous&quot; = Luminodata. &quot;home&quot; + &quot;haven&quot; = HavenHome. Keep going — 100 combinations takes 15 minutes.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Exercise 2: The Translation Test</h3>
            <p className="text-sm text-slate-700 mb-3">
              Write down 5 core concepts your brand represents (e.g., &quot;speed,&quot; &quot;trust,&quot; &quot;growth&quot;).
              Translate each into 10 languages on Google Translate. The translations that sound best
              as brand names — regardless of meaning — are your starting points.
            </p>
            <p className="text-sm text-slate-600 italic">
              Example: &quot;light&quot; in Latin is &quot;lumen&quot; (lumen.com — taken, but Lumenate or Lumenis still work). &quot;Truth&quot; in Japanese is &quot;shinri&quot; — modern and distinctive.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Exercise 3: The Misspelling Game</h3>
            <p className="text-sm text-slate-700 mb-3">
              Write 20 common words related to your business. Now:
              remove one vowel (Slider → Slidr), double a consonant (Crate → Krate),
              swap a vowel (Spark → Spirk), remove the last letter (Market → Marke).
              Keep anything that&apos;s still easy to pronounce.
            </p>
            <p className="text-sm text-slate-600 italic">
              Example: &quot;shift&quot; → &quot;Shift&quot; (too common), &quot;Shyft&quot; (ownable!), &quot;Shifte&quot; (interesting), &quot;Xhift&quot; (too weird). &quot;Shyft&quot; wins.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Generate Unique Names With AI</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          These patterns are powerful — but combining them with AI gives you hundreds of unique, available
          names in seconds. BrandForge uses all six naming techniques to generate names that are genuinely
          distinctive, then checks domain and social availability so you can actually use what you find.
        </p>
        <div className="rounded-2xl border-2 border-brand-200 bg-brand-50/50 p-8 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-2">Create your unique business name now</h3>
          <p className="text-sm text-slate-600 mb-6">
            Describe your business and our AI applies all six naming patterns — portmanteaus,
            foreign words, compounds, and more — with instant availability checks.
          </p>
          <a href="/generate" className="btn-primary text-base px-8 py-3">
            Generate Unique Names Free
          </a>
        </div>
      </div>

      {/* Related */}
      <div className="mb-12 rounded-2xl bg-slate-50 p-6">
        <p className="text-sm font-semibold text-slate-900 mb-3">📖 More naming guides:</p>
        <ul className="space-y-2">
          <li>
            <Link href="/blog/creative-brand-names" className="text-brand-600 hover:text-brand-700 text-sm">
              Creative Brand Names: 60+ Examples & What Makes Them Work →
            </Link>
          </li>
          <li>
            <Link href="/blog/catchy-business-names" className="text-brand-600 hover:text-brand-700 text-sm">
              150+ Catchy Business Names for Every Industry →
            </Link>
          </li>
          <li>
            <Link href="/blog/business-name-ideas-by-industry" className="text-brand-600 hover:text-brand-700 text-sm">
              Business Name Ideas by Industry: The 2026 Edition →
            </Link>
          </li>
          <li>
            <Link href="/blog/free-brand-name-generator" className="text-brand-600 hover:text-brand-700 text-sm">
              Free Brand Name Generator: How to Name Your Business Without Spending a Dime →
            </Link>
          </li>
        </ul>
      </div>

      {/* Related articles */}
      <div className="mb-12 border-t border-slate-200 pt-10">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">More naming guides</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          <a href="/blog/cool-business-names" className="group rounded-xl border border-slate-200 bg-white p-4 hover:border-brand-200 hover:shadow-md transition-all">
            <h4 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors text-sm">Cool Business Names: 150+ Ideas →</h4>
            <p className="mt-1 text-xs text-slate-500">Industry-specific name ideas with a 5-step naming framework.</p>
          </a>
          <a href="/blog/catchy-business-names" className="group rounded-xl border border-slate-200 bg-white p-4 hover:border-brand-200 hover:shadow-md transition-all">
            <h4 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors text-sm">Catchy Business Names: 150+ Ideas →</h4>
            <p className="mt-1 text-xs text-slate-500">The psychology and patterns behind names that stick.</p>
          </a>
        </div>
      </div>

      {/* Newsletter */}
      
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

      <BlogNewsletterSection />
    </div>
  )
}