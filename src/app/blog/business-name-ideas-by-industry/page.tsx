import type { Metadata } from 'next'
import Link from 'next/link'
import { BlogNewsletterSection } from '@/components/BlogNewsletterSection'

export const metadata: Metadata = {
  title: 'Business Name Ideas by Industry: The 2025 Edition | BrandForge',
  description: 'Browse hundreds of business name ideas organized by industry — tech startups, restaurants, consulting, e-commerce, creative agencies, and 10+ more. Each with vibe descriptions and naming patterns.',
  openGraph: {
    title: 'Business Name Ideas by Industry: The 2025 Edition',
    description: 'Hundreds of business name ideas organized by industry with vibe descriptions and naming patterns.',
    url: 'https://brandforge-phi-pearl.vercel.app/blog/business-name-ideas-by-industry',
    siteName: 'BrandForge',
    type: 'article',
  },
}

const industryNames: Record<string, { names: string[]; pattern: string; patternDesc: string }> = {
  'Tech Startups': {
    names: ['Nimbl', 'VersaCore', 'PatchAI', 'LoopLogic', 'ShiftStack', 'NeuralPath', 'DevForge', 'CodeVault', 'CloudMesh', 'ByteCraft'],
    pattern: 'Short + technical suffix',
    patternDesc: 'Combine a short, dynamic word with a technical concept (AI, Stack, Cloud, Logic, Path). Example: "Nimbl" + "AI" = NimblAI.',
  },
  'Restaurants & Cafes': {
    names: ['Ember&Oak', 'SaltHouse', 'CopperKettle', 'FiddleGreen', 'TheWheatField', 'BrushfireKitchen', 'Rye&River', 'PlumBakery', 'SageTable', 'IronSkillet'],
    pattern: 'Ingredient + place/object',
    patternDesc: 'Pair a food element with a physical space or material. "Ember & Oak" immediately evokes a warm, fire-cooked atmosphere.',
  },
  'Consulting & Professional': {
    names: ['MeridianGroup', 'ApexAdvisory', 'ClearPathPartners', 'VanguardCounsel', 'SterlingInsight', 'BridgepointStrategy', 'ForesightCollab', 'PrimeMeridian', 'NorthstarAdvisors', 'EquitablePartners'],
    pattern: 'Directional/metaphorical + professional suffix',
    patternDesc: 'Use words suggesting vision or direction (Meridian, Apex, Pathfinder) paired with Group, Advisory, or Partners.',
  },
  'E-commerce & Retail': {
    names: ['CurateCo', 'CartCandy', 'TheGoodsProject', 'Shelf&Story', 'BazaarBold', 'PennyLaneShop', 'Findery', 'ThreadTrunk', 'ThePickedItem', 'MintMarket'],
    pattern: 'Discovery + retail/marketplace word',
    patternDesc: 'Emphasize the joy of finding. Words like "Curate," "Find," "Shelf," and "Bazaar" signal a shopping experience.',
  },
  'Fitness & Health': {
    names: ['IronPulse', 'MotionForge', 'CoreRhythm', 'FitVault', 'PeakForm', 'RecoverLab', 'FlexState', 'StrideCollective', 'IronBloomGym', 'GrindSpace'],
    pattern: 'Action/metal + rhythm/state',
    patternDesc: 'Combine a strong action or material word with a state of being. "Iron Pulse" is strength + energy. "Recover Lab" is healing + science.',
  },
  'Creative Agencies': {
    names: ['Ink&Ore', 'SignalCraft', 'WildsetStudio', 'FrameShift', 'BoldMargin', 'StoryForge', 'PixelBrew', 'ChromaCraft', 'DraftPunk', 'NocturneCreative'],
    pattern: 'Material/medium + creative action',
    patternDesc: 'Reference the raw materials of creativity (Ink, Pixel, Chroma, Draft) alongside the act of making (Forge, Craft, Brew).',
  },
  'Real Estate': {
    names: ['HearthstoneRealty', 'KeystoneHomes', 'Plot&Parcel', 'ElevationProperties', 'CornerstoneLiving', 'LandmarkCollective', 'DoorwayRealty', 'HavenGroup', 'FoundationFirst', 'RidgelineHomes'],
    pattern: 'Foundation/architecture + property word',
    patternDesc: 'Words suggesting stability and construction (Keystone, Hearthstone, Foundation) paired with Realty, Homes, or Properties.',
  },
  'Education & Coaching': {
    names: ['LearnForge', 'MindCraftAcademy', 'SkillVault', 'GrowthPilot', 'InsightEngine', 'CuriousPath', 'ThinkBridge', 'SparkCo', 'ElevateEd', 'KnowledgeTree'],
    pattern: 'Growth/learning + container/direction',
    patternDesc: 'Pair learning verbs (Learn, Grow, Think, Spark) with words that hold or direct (Vault, Path, Bridge, Engine).',
  },
  'Beauty & Skincare': {
    names: ['VelvetSkin', 'AuraGlow', 'Petal&Clay', 'BareForm', 'LumiereBotanica', 'GlowForge', 'HueRitual', 'SoftAlchemy', 'DewCraft', 'FloraGlow'],
    pattern: 'Texture/light + nature word',
    patternDesc: 'Combine sensory words (Velvet, Glow, Dew, Soft) with nature or craft references (Petal, Flora, Clay, Alchemy).',
  },
  'Finance & Fintech': {
    names: ['ClearLedger', 'VaultEdge', 'MeritCapital', 'HorizonFinance', 'EquityForge', 'SummitWealth', 'BridgeCapital', 'PrimeVault', 'SteadyGrowth', 'AtlasFinance'],
    pattern: 'Clarity/strength + finance word',
    patternDesc: 'Lead with trust signals (Clear, Steady, Merit) and follow with financial terms (Ledger, Capital, Vault, Wealth).',
  },
}

const industries = Object.keys(industryNames)

export default function BusinessNameIdeasByIndustryPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-12">
        <Link href="/blog" className="text-sm text-brand-600 hover:text-brand-700 font-medium">
          ← Back to Blog
        </Link>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Business Name Ideas by Industry: The 2025 Edition
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl">
          Stop starting at a blank page. Browse hundreds of name ideas organized by industry — 
          each with the naming pattern behind it so you can create your own variations.
        </p>
        <div className="mt-4 flex items-center gap-3 text-sm text-slate-400">
          <time>May 17, 2025</time>
          <span>·</span>
          <span>12 min read</span>
        </div>
      </div>

      {/* Intro */}
      <div className="mb-12 text-slate-700 leading-relaxed">
        <p>
          Generic name lists are frustrating — you find 50 &quot;creative&quot; names for tech startups but nothing 
          for your specific bakery or consulting firm. We organized this guide differently: every name 
          is paired with its <strong>naming pattern</strong>, so you understand the formula and can create 
          dozens more on your own.
        </p>
        <p className="mt-4">
          Or skip the list entirely — describe your business and let AI generate names that follow 
          these patterns automatically. <a href="/generate" className="text-brand-600 hover:underline font-medium">Try it free →</a>
        </p>
      </div>

      {/* CTA */}
      <div className="rounded-2xl bg-gradient-to-r from-brand-50 to-purple-50 p-6 mb-12 text-center">
        <p className="text-sm font-semibold text-brand-700 mb-2">Want names tailored to YOUR business?</p>
        <p className="text-sm text-slate-600 mb-4">Describe your idea and get custom suggestions with brand kits — free.</p>
        <a href="/generate" className="btn-primary">Generate Custom Names Free</a>
      </div>

      {/* Industry lists */}
      {industries.map((industry) => {
        const data = industryNames[industry]
        return (
          <div key={industry} className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{industry}</h2>
            
            {/* Pattern explanation */}
            <div className="rounded-xl bg-brand-50 border border-brand-100 p-4 mb-4">
              <p className="text-sm text-slate-700">
                <span className="font-semibold text-brand-700">Pattern:</span> {data.pattern}
              </p>
              <p className="text-sm text-slate-600 mt-1">{data.patternDesc}</p>
            </div>

            {/* Names grid */}
            <div className="grid gap-2 sm:grid-cols-2">
              {data.names.map((name) => (
                <div key={name} className="rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <span className="font-semibold text-slate-900">{name}</span>
                </div>
              ))}
            </div>
          </div>
        )
      })}

      {/* How to create your own */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">How to Create Your Own Variations</h2>
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>
            Every name above follows a pattern. Here&apos;s how to use those patterns to generate 
            unlimited variations:
          </p>
          <ol className="space-y-4 list-decimal list-inside">
            <li>
              <strong>Identify the pattern:</strong> Pick an industry above and note its formula 
              (e.g., &quot;Short word + technical suffix&quot;).
            </li>
            <li>
              <strong>Swap components:</strong> Replace words in the pattern with your own. 
              Instead of &quot;Nimbl + AI,&quot; try &quot;Swift + Logic&quot; = SwiftLogic.
            </li>
            <li>
              <strong>Test the sound:</strong> Say it out loud. Does it roll off the tongue? 
              Two-syllable combinations almost always win.
            </li>
            <li>
              <strong>Check availability:</strong> Verify the domain and social handles are free 
              before committing. A great name you can&apos;t use online isn&apos;t great.
            </li>
            <li>
              <strong>Get feedback:</strong> Share your top 3 with people in your target audience. 
              Ask: &quot;What does this name make you think of?&quot; If their answer matches your intent, you&apos;re good.
            </li>
          </ol>
        </div>
      </div>

      {/* Final CTA */}
      <div className="rounded-2xl border-2 border-brand-200 bg-brand-50/50 p-8 text-center mb-12">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Let AI do the brainstorming</h3>
        <p className="text-sm text-slate-600 mb-6">
          Describe your business idea in one sentence and get name suggestions with brand kits, 
          domain checks, and more. Free to start.
        </p>
        <a href="/generate" className="btn-primary text-base px-8 py-3">
          Generate Names for My Industry
        </a>
      </div>

      {/* Newsletter */}
      <BlogNewsletterSection />
    </div>
  )
}