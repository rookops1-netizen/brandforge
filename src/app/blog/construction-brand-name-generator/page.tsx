/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import { BlogNewsletterSection } from '@/components/BlogNewsletterSection'
import { BlogPostSchema } from '@/components/BlogPostSchema'
import { HowToSchema } from '@/components/HowToSchema'

export const dynamic = 'force-static'
export const metadata: Metadata = {
  title: 'Construction Company Name Generator: 300+ Construction Name Ideas for 2026 + Free AI Tool',
  description: '300+ construction company name ideas across 10 categories, 7 proven naming strategies from top contractors, and a free AI generator that checks domain & social availability instantly.',
  keywords: [
    'construction company name generator',
    'construction company names',
    'construction business names',
    'contractor name ideas',
    'builder name generator',
    'construction name ideas',
    'general contractor names',
    'home builder name ideas',
    'remodeling company names',
    'construction brand names',
    'roofing company names',
    'excavation company names',
    'best construction company names',
    'creative construction names',
    'catchy construction names',
    'construction company name ideas 2026',
    'how to name a construction company',
    'construction naming tips',
    'construction branding ideas',
    'building company names',
  ],
  openGraph: {
    title: 'Construction Company Name Generator: 300+ Construction Name Ideas for 2026 + Free AI Tool',
    description: '300+ construction company name ideas across 10 categories, 7 naming strategies from top contractors, and a free AI generator with domain & social availability checks.',
    url: 'https://brandforge.app/blog/construction-brand-name-generator',
    siteName: 'BrandForge',
    type: 'article',
    publishedTime: '2026-08-11T12:00:00.000Z',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Construction Company Name Generator: 300+ Construction Name Ideas for 2026',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Construction Company Name Generator: 300+ Construction Name Ideas for 2026',
    description: '300+ construction company name ideas by category, 7 naming strategies from top contractors, and a free AI generator that checks domain availability.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: 'https://brandforge.app/blog/construction-brand-name-generator',
  },
  robots: { index: true, follow: true },
}

const CATEGORIES = [
  {
    name: 'General Contracting & Builder Names',
    names: ['Ironclad Builders', 'Summit Construction', 'Cornerstone Build', 'Meridian Contractors', 'Titan Builders Group', 'Apex Construction Co.', 'Keystone & Ridge', 'Foundation First Builders', 'Landmark General Contracting', 'Stonebridge Builders', 'True North Construction', 'Heritage Build Co.', 'Ridgeline Contractors', 'Steel Frame Builders', 'Vantage Construction', 'Fortis Builders', 'Atlas General Contracting', 'Pillar & Post', 'Crossroads Construction', 'Everest Builders', 'Bedrock Contracting', 'Hearthstone Builders', 'Pinnacle Construction Group', 'Gateway Builders', 'Ironworks Construction', 'Crestline Builders', 'Old Dominion Contracting', 'Sentinel Builders', 'Vanguard Construction', 'Monarch Builders'],
  },
  {
    name: 'Remodeling & Renovation Names',
    names: ['Renewal Remodeling', 'Freshstart Renovations', 'Revive Construction', 'Restoration Point', 'Transform Builders', 'Next Chapter Remodeling', 'Catalyst Renovations', 'Refine Construction', 'Lodge & Hearth Remodeling', 'Modern Edge Builders', 'Reimagine Renovations', 'Craft Renewal', 'Uplift Remodeling', 'Brightpath Renovations', 'Metamorphosis Builders', 'New Dawn Remodeling', 'Elevate Renovations', 'Shelter & Stone Remodeling', 'Turnkey Remodeling Co.', 'Clearview Renovations', 'Open Door Remodeling', 'Revive & Restore', 'Horizon Renovations', 'Crafted Renewal', 'Second Act Remodeling', 'Prime Renovation Group', 'New Frame Remodeling', 'Mosaic Renovations', 'Adapt Builders', 'Fine Line Remodeling'],
  },
  {
    name: 'Roofing Company Names',
    names: ['Crest Roofing', 'Skyline Roofing Co.', 'Peak & Pitch Roofing', 'Overhead Roofing', 'Ridgeline Roofers', 'Summit Roof Solutions', 'Capstone Roofing', 'Weatherguard Roofing', 'Crown Roofing Group', 'Aegis Roofing', 'Apex Roofing & Gutters', 'Canopy Roofing', 'Shield Roofing Co.', 'Fort Roofing', 'Summit Peak Roofing', 'TopLine Roofing', 'Everguard Roofing', 'Guardian Roof Solutions', 'CopperTop Roofing', 'Steeple Roofing', 'Highpoint Roofing', 'Stormshield Roofing', 'Ironclad Roof Co.', 'Alpha Roofing Group', 'Timberline Roofing', 'SkyGuard Roofing', 'TrueCover Roofing', 'RoofRight Contractors', 'Pinnacle Roofing', 'Apex Peak Roofing'],
  },
  {
    name: 'Excavation & Site Work Names',
    names: ['Deepgrade Excavation', 'Earthworks Co.', 'Groundbreak Excavating', 'TerraForm Excavation', 'DigRight Excavating', 'Bedrock Excavation', 'ClearPath Site Work', 'Gravel & Grade', 'LevelGround Excavation', 'Foundation Excavating', 'Cut & Fill Excavation', 'EarthShift Contractors', 'SolidGround Excavating', 'Benchmark Grading', 'TrenchMaster Excavation', 'SitePrep Contractors', 'GroundForce Excavation', 'RootGrade Excavating', 'BaseLayer Excavation', 'Frontier Site Work', 'RoughGrade Excavating', 'DirtWorks Contracting', 'ProExcavate', 'LandCraft Excavating', 'Terrain Excavation Co.', 'SubGrade Excavating', 'EarthCraft Excavation', 'ClearCut Site Prep', 'Foundation First Excavating', 'TrueGrade Excavation'],
  },
  {
    name: 'Residential & Home Builder Names',
    names: ['Homestead Builders', 'Hearth & Home Construction', 'Nest Builders Co.', 'Shelter Craft Homes', 'Legacy Home Builders', 'Cedar & Stone Homes', 'Timberframe Builders', 'Homeplace Construction', 'Evergreen Homes', 'Village Builders Group', 'Craftsman Home Co.', 'Foundry Homes', 'Sycamore Builders', 'Harbor Homes', 'Prairie Home Builders', 'Cottage & Cove Construction', 'Brookside Homes', 'Meadowlark Builders', 'Redwood Home Builders', 'Stonecroft Homes', 'Bluebird Builders', 'Cottage Grove Construction', 'Oakmont Homes', 'Willow Creek Builders', 'Harbor House Construction', 'Woodland Home Builders', 'Fieldstone Homes', 'Summit Home Builders', 'River Bend Construction', 'Pioneer Homes'],
  },
  {
    name: 'Commercial Construction Names',
    names: ['Meridian Commercial', 'Skyline Constructors', 'Atlas Commercial Group', 'Vantage Build Co.', 'SteelCore Construction', 'Paramount Commercial', 'Gateway Constructors', 'Titan Commercial Builders', 'Momentum Construction', 'Elevation Commercial', 'Monument Builders', 'Capital Construction Group', 'ProCore Builders', 'Landmark Commercial', 'Ironside Constructors', 'Zenith Commercial Group', 'Forge Construction', 'Apex Builders Group', 'Spire Construction', 'Alliance Commercial Builders', 'Precision Construction Co.', 'Forgepoint Builders', 'Sterling Commercial', 'Pillar Construction', 'Bridgepoint Builders', 'Command Construction', 'Vanguard Commercial', 'Heritage Builders Group', 'Fortress Construction', 'Delta Commercial Builders'],
  },
  {
    name: 'Specialty Trade Names (Plumbing, Electrical, HVAC)',
    names: ['Current Electric', 'FlowRight Plumbing', 'ClimatePro HVAC', 'Spark & Wire Electric', 'PipeMaster Plumbing', 'CoolBreeze HVAC', 'Voltage Electric Co.', 'ClearDrain Plumbing', 'AirTech Heating & Cooling', 'BrightLine Electrical', 'AquaFlow Plumbing', 'Comfort Zone HVAC', 'Circuit Electric Group', 'RooterPro Plumbing', 'TempControl HVAC', 'WireWorks Electric', 'Precision Plumbing Co.', 'AllSeason HVAC', 'PowerGrid Electric', 'DrainagePro', 'SunBelt HVAC', 'Lightning Electric Co.', 'PipeWorks Plumbing', 'ThermalPro HVAC', 'Arc Electric Group', 'FlowTech Plumbing', 'ZoneRight HVAC', 'Surge Electric', 'AquaForce Plumbing', 'CoolStar HVAC'],
  },
  {
    name: 'Landscaping & Outdoor Construction Names',
    names: ['GreenScape Construction', 'OutdoorEdge Builders', 'TerraCraft Landscaping', 'NatureBuild Outdoor', 'Stone & Soil Contractors', 'GreenPath Construction', 'LivingEdge Landscaping', 'EarthCraft Outdoor', 'GroundWorks Landscaping', 'Cedar & Stone Outdoors', 'WildRoot Landscaping', 'Patio & Path Builders', 'Oasis Outdoor Construction', 'Timber & Vine Landscaping', 'LawnCraft Outdoor', 'Field & Forest Builders', 'Watermark Hardscapes', 'Bloom & Build Outdoor', 'StoneCraft Landscaping', 'Canopy Outdoor Construction', 'Rooted Landscaping Co.', 'Trailside Builders', 'Heritage Outdoor', 'Ridgeline Landscaping', 'RiverRock Hardscapes', 'GreenFrame Outdoor', 'Summit Landscaping', 'PrairieStone Outdoors', 'Woodland Builders'],
  },
  {
    name: 'Luxury & Custom Home Builder Names',
    names: ['Prestige Builders', 'EstateCraft Homes', 'Grand Manor Construction', 'Sovereign Builders', 'Regal Custom Homes', 'Millstone Builders', 'Crown Estate Homes', 'Heritage Luxury Builders', 'Opus Construction Group', 'Chatham Builders', 'Artisan Estate Homes', 'Monarch Custom Builders', 'Grandview Construction', 'Luxe Build Co.', 'Sterling Custom Homes', 'Palisade Builders', 'Obsidian Homes', 'Apex Estate Builders', 'Crestwood Luxury Homes', 'Bellwether Builders', 'TruStone Custom Homes', 'Meridian Estate Construction', 'Iron Gate Builders', 'Cathedral Homes', 'Vista Luxury Builders', 'GoldLeaf Construction', 'Somerset Builders', 'Prime Estate Homes', 'Signature Custom Builders', 'Pillar Luxury Homes'],
  },
  {
    name: 'Modern & Minimalist Construction Names',
    names: ['FORM Construction', 'STRUCT Builders', 'GRID Contracting', 'LINE Build Co.', 'FRAME Construction', 'BASE Builders', 'LEVEL Contractors', 'BLOC Construction', 'NODE Builders', 'AXIS Construction Group', 'EDGE Builders', 'TIER Construction', 'ARCH Build Co.', 'PLANE Contractors', 'SHIFT Construction', 'CORE Builders Group', 'VECTOR Construction', 'CUBE Build Co.', 'PRISM Builders', 'SIGNAL Construction', 'AXIOM Builders', 'ORIGIN Construction', 'FACTOR Builders', 'UNIT Construction Co.', 'PLANK Builders', 'ANGLE Contracting', 'VERTEX Construction', 'THREAD Builders', 'MESH Construction Group'],
  },
]

const NAMING_STRATEGIES = [
  {
    name: 'Strength & Material-Based',
    description: 'Names that evoke durability and physical power — the core promise of construction.',
    examples: 'Ironclad Builders, SteelFrame Construction, Bedrock Contracting, Forge Builders',
    why: 'Construction is about building things that last. Names with iron, steel, stone, and forge immediately communicate strength and permanence — exactly what clients want from a builder.',
  },
  {
    name: 'Location & Topography-Based',
    description: 'Names that ground your business in a specific place, building local trust and recognition.',
    examples: 'Summit Construction, Ridgeline Builders, Harbor Homes, RiverStone Contracting',
    why: 'Construction is inherently local. Clients hire contractors who know the area, the soil, the building codes. A location-based name signals local expertise and makes you findable when people search "[city] contractor."',
  },
  {
    name: 'Precision & Craft-Based',
    description: 'Names that emphasize accuracy, quality, and skilled workmanship.',
    examples: 'Precision Builders, LevelGround Construction, Cornerstone Craft, TrueLine Contractors',
    why: 'In construction, "close enough" isn\'t good enough. Names that evoke precision — level, true, cornerstone, craft — signal that you measure twice and cut once. This builds trust with clients who\'ve been burned by sloppy contractors.',
  },
  {
    name: 'Action & Process-Based',
    description: 'Names that capture the momentum and transformation of building.',
    examples: 'Groundbreak Construction, Elevate Builders, Transform Remodeling, Foundation First',
    why: 'Construction is about transformation — turning empty land into a structure, an old kitchen into a dream space. Action-based names capture that momentum and make your business feel dynamic and results-oriented.',
  },
  {
    name: 'Personal Name + Construction',
    description: 'Your name backed by the trade — the most trusted format in contracting.',
    examples: 'Johnson Builders, Martinez Construction, O\'Brien Contracting, Patel Builders Group',
    why: 'In construction, personal reputation is everything. Putting your name on the business says "I stand behind this work." It\'s the most common naming pattern among top contractors because it builds personal accountability and trust.',
  },
  {
    name: 'Modern & Abstract',
    description: 'Short, distinctive names that stand out in a sea of "[Name] Construction."',
    examples: 'FORM Builders, APEX Construction, VANTAGE Builders, MERIDIAN Group',
    why: 'The construction industry is saturated with "[Name] Construction" and "[Name] Builders." A modern, abstract name cuts through the noise and makes your brand instantly recognizable on job site signs, truck wraps, and hard hats.',
  },
  {
    name: 'Niche-Specific',
    description: 'Names that immediately tell people exactly what you build.',
    examples: 'RoofRight Contractors, DigDeep Excavation, Nest Homes, CoolBreeze HVAC',
    why: 'When someone searches "roofing contractor near me" and sees "RoofRight" in the results, they click. Niche-specific names convert better in search because they match exactly what the client is looking for.',
  },
]

const NAMING_MISTAKES = [
  {
    title: 'Being too generic',
    description: '"Quality Construction" tells your clients nothing. Every contractor claims quality — it\'s not a differentiator. "Cornerstone Craft" or "Ironclad Builders" says something specific about how you build. Generic names get lost in search results and on job site signs.',
  },
  {
    title: 'Using your initials',
    description: '"J&S Construction" means nothing to someone scrolling through Google results. It doesn\'t tell them what you build, how you build, or why you\'re different. Initials are fine on legal documents, but they\'re invisible as a brand. Use a name that says something.',
  },
  {
    title: 'Limiting your growth',
    description: 'Naming yourself "Smith Roofing" when you plan to offer general contracting, or "Austin Kitchen Remodeling" when you want to serve the whole metro — you\'re building a cage. Pick a name that gives you room to expand your services and your geography.',
  },
  {
    title: 'Ignoring the job site sign test',
    description: 'Your name will appear on job site signs, truck doors, and hard hats — all small formats where long names become unreadable. "Keystone Builders" reads perfectly at 40 mph on a highway. "Keystone Premium General Contracting & Remodeling Services" does not. If it doesn\'t fit on a truck door, it\'s too long.',
  },
  {
    title: 'Forgetting the Google Maps factor',
    description: 'Most construction clients find you through Google Maps and local search. If your name is "ABC Builders," you\'re competing with every other ABC in your city. A distinctive name like "Ironclad Builders" or "Ridgeline Construction" is easier to find, easier to review, and easier to recommend.',
  },
  {
    title: 'Copying the competition',
    description: 'If every contractor in your area is named "[Last Name] Construction," naming yourself the same way makes you forgettable. Look at your local competition — then pick a name that stands out. Differentiation is especially important in construction, where most names blend together.',
  },
  {
    title: 'Skipping trademark research',
    description: 'The construction industry has heavy trademark overlap. Before committing to a name, search the USPTO database for existing registrations in Class 37 (Construction). A name conflict can force a rebrand mid-stream — signs, trucks, shirts, business cards. Do the research up front.',
  },
]

const FAQ_ITEMS = [
  {
    question: 'How does the construction company name generator work?',
    answer: 'Describe your construction business — your specialty (general contracting, remodeling, roofing, excavation, etc.), your style (traditional, modern, premium, approachable), and your target clients. BrandForge\'s AI generates custom name suggestions paired with complete brand kits including logo concepts, color palettes, taglines, and domain/social availability checks.',
  },
  {
    question: 'Is the construction company name generator free?',
    answer: 'Yes! You can generate construction company name ideas for free — 5 suggestions per search, unlimited searches, no credit card required. Unlock the full brand kit (logo, colors, tagline, typography, domain & social checks) for $9 per brand kit.',
  },
  {
    question: 'What makes a good construction company name?',
    answer: 'A great construction company name is strong and memorable, easy to read on a truck door or job site sign, works well in local search ("[city] contractor"), and conveys trust and durability. The best names — like Turner, Bechtel, or Skanska — are distinctive, short, and instantly recognizable.',
  },
  {
    question: 'Should I include "construction" or "contracting" in my name?',
    answer: 'It depends on your growth plans. "Construction" signals general capability. "Contracting" is more personal. "Builders" feels approachable. If you have a niche — roofing, excavation, remodeling — a niche-specific name (like "RoofRight") converts better in search. If you plan to expand, keep it broad with "Builders" or "Group."',
  },
  {
    question: 'Can I use these names for my construction business?',
    answer: 'Absolutely. All names you generate are yours to use commercially — for business registration, job site signs, truck wraps, website, social media, and marketing materials. There are no licensing restrictions. Just make sure to check trademark availability for your final choice.',
  },
  {
    question: 'How important is a matching domain for construction companies?',
    answer: 'Very important. Most construction leads come through Google searches and Google Maps. A matching .com domain makes you findable, professional, and trustworthy. If your exact .com is taken, .co and .build are popular alternatives in the construction industry.',
  },
  {
    question: 'What comes in the brand kit for each name?',
    answer: 'Each brand kit includes: a logo concept (text-based with font pairing), a 5-color palette with hex codes, a custom tagline, typography recommendations, and real-time availability checks for domains and social handles. You can download it all as a PDF brand guidelines document.',
  },
  {
    question: 'How do construction company names differ from other business names?',
    answer: 'Construction names need to work in contexts other businesses don\'t — on hard hats, truck doors, job site signs, and work shirts at 40 mph. They need to convey trust and durability (clients are spending thousands to hundreds of thousands). And they need to perform well in local search, because construction is a local business.',
  },
]

const INDUSTRY_LINKS = [
  { name: '🏗️ Construction Name Generator', href: '/construction-name-generator', desc: 'Generate construction names with full brand kits' },
  { name: '🏠 Real Estate Name Generator', href: '/real-estate-name-generator', desc: 'Name ideas for real estate businesses' },
  { name: '🏢 Startup Name Generator', href: '/startup-name-generator', desc: 'Name your startup with AI' },
  { name: '🧹 Cleaning Business Name Generator', href: '/cleaning-business-name-generator', desc: 'Name ideas for cleaning companies' },
  { name: '🌳 Landscaping Name Generator', href: '/landscaping-name-generator', desc: 'Name ideas for landscaping businesses' },
  { name: '📋 Small Business Name Generator', href: '/small-business-name-generator', desc: 'General small business naming' },
  { name: '💡 Business Name Ideas by Industry', href: '/blog/business-name-ideas-by-industry', desc: 'Browse names across 10+ industries' },
  { name: '🏷️ LLC Naming Guide', href: '/blog/llc-naming-guide', desc: 'How to pick a name for your LLC' },
  { name: '✏️ How to Choose a Business Name', href: '/blog/how-to-choose-business-name', desc: 'Complete naming guide for 2026' },
  { name: '🔍 Company Name Generator', href: '/blog/company-name-generator', desc: '250+ company name ideas' },
]

export default function ConstructionBrandNameGeneratorPage() {
  return (
    <>
      <BlogPostSchema
        title="Construction Company Name Generator: 300+ Construction Name Ideas for 2026 + Free AI Tool"
        description="300+ construction company name ideas across 10 categories, 7 naming strategies from top contractors, and a free AI generator with domain & social availability checks."
        url="https://brandforge.app/blog/construction-brand-name-generator"
        datePublished="2026-08-11"
        dateModified="2026-08-11"
      />
      <HowToSchema
        name="How to Name Your Construction Company in 5 Steps"
        description="A proven 5-step process for naming your construction business — from defining your niche to validating your name."
        url="https://brandforge.app/blog/construction-brand-name-generator"
        totalTime="PT25M"
        steps={[
          { name: 'Define Your Construction Niche', text: 'Get specific about what you build — residential, commercial, remodeling, roofing, or excavation. Your niche shapes your name and helps you stand out from generic "contractor" names.' },
          { name: 'Generate 20-30 Name Ideas', text: 'Use BrandForge\'s construction name generator to create a broad list. Try strength-based names, location names, craft names, and modern names. Don\'t filter yet — volume first.' },
          { name: 'Run the Job Site Sign Test', text: 'Write your top 10 names on paper and walk 30 feet away. Which names can you still read clearly? Which look professional on a truck door or yard sign? This eliminates names that are too long or complicated.' },
          { name: 'Check Domain, Maps, and Trademark Availability', text: 'Verify the .com domain is available, check Google Maps for similar business names in your area, and search USPTO for trademark conflicts in Class 37 (Construction).' },
          { name: 'Say It in a Recommendation', text: 'Most construction business comes from word of mouth. Pick a name people can remember, spell in a text, and find on Google without spelling it out.' },
        ]}
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
                    name: 'Construction Company Name Generator',
                    item: 'https://brandforge.app/blog/construction-brand-name-generator',
                  },
                ],
              },
            ],
          }),
        }}
      />

      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero */}
        <header className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-700">
            🏗️ Construction Naming Guide
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Construction Company Name Generator:{' '}
            <span className="gradient-text">300+ Ideas for 2026</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            300+ construction company name ideas across 10 categories, 7 proven naming strategies from top contractors, and a free AI generator that checks domain availability instantly.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="/generate"
              className="btn-primary inline-flex items-center gap-2 text-base px-8 py-3"
            >
              Generate Construction Names
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/construction-name-generator"
              className="btn-secondary inline-flex items-center gap-2 text-base px-8 py-3"
            >
              🏗️ Try Industry Generator
            </a>
          </div>
        </header>

        {/* Table of Contents */}
        <nav className="mb-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-sm font-semibold text-slate-900 mb-3">📋 In this guide:</h2>
          <ol className="space-y-2 text-sm text-slate-600">
            <li><a href="#categories" className="hover:text-brand-600 transition-colors">300+ construction name ideas by category</a></li>
            <li><a href="#strategies" className="hover:text-brand-600 transition-colors">7 naming strategies from top contractors</a></li>
            <li><a href="#process" className="hover:text-brand-600 transition-colors">5-step naming process for construction companies</a></li>
            <li><a href="#mistakes" className="hover:text-brand-600 transition-colors">7 naming mistakes that cost contractors clients</a></li>
            <li><a href="#faq" className="hover:text-brand-600 transition-colors">FAQ: Everything about construction company names</a></li>
          </ol>
        </nav>

        {/* Categories */}
        <section id="categories" className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">
            300+ Construction Company Name Ideas by Category
          </h2>
          <p className="text-slate-600 mb-8">
            Browse construction name ideas organized by specialty. From general contracting to niche trades — find inspiration for your business.
          </p>

          <div className="space-y-8">
            {CATEGORIES.map((cat) => (
              <div key={cat.name} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">{cat.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.names.map((name) => (
                    <span
                      key={name}
                      className="inline-flex items-center rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 transition-colors cursor-default"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="/generate"
              className="btn-primary inline-flex items-center gap-2 text-base px-8 py-3"
            >
              Generate Custom Names for Your Business
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </section>

        {/* Naming Strategies */}
        <section id="strategies" className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">
            7 Naming Strategies Top Construction Companies Use
          </h2>
          <p className="text-slate-600 mb-8">
            The best construction company names aren\'t random — they follow proven naming patterns. Here are 7 strategies used by successful contractors, builders, and construction firms.
          </p>

          <div className="space-y-6">
            {NAMING_STRATEGIES.map((strategy, i) => (
              <div key={strategy.name} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-white font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{strategy.name}</h3>
                    <p className="mt-1 text-sm text-slate-500">{strategy.description}</p>
                    <p className="mt-2 text-sm text-slate-700">
                      <span className="font-semibold">Examples:</span> {strategy.examples}
                    </p>
                    <p className="mt-2 text-sm text-slate-600">{strategy.why}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5-Step Process */}
        <section id="process" className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">
            How to Name Your Construction Company in 5 Steps
          </h2>
          <p className="text-slate-600 mb-8">
            A proven process for naming your construction business — from brainstorming to launch.
          </p>

          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Define your construction niche</h3>
                  <p className="mt-2 text-slate-600">Before you name anything, get specific about what you build. "General contractor" is too broad — are you residential? Commercial? Remodeling? New construction? Roofing? Excavation? Your niche shapes your name. A roofing company can use "Peak" or "Crest" — those metaphors work for roofs, not for foundation work. Write down your specialty, your ideal client, and your service area.</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-white font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Generate 20-30 name ideas</h3>
                  <p className="mt-2 text-slate-600">Use BrandForge\'s construction name generator above to create a broad list. Try different angles — strength-based names, location names, craft names, modern names. Don\'t filter yet. The goal is volume. Mix in personal name options (your last name + Builders) and niche-specific options (RoofRight, DigDeep). You\'ll narrow down in the next steps.</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Run the Job Site Sign Test</h3>
                  <p className="mt-2 text-slate-600">This is the most important test for construction names. Write your top 10 names on a piece of paper, tape it to a wall, and walk 30 feet away. Which names can you still read clearly? Which ones look professional? Which ones would you trust on a job site sign, truck door, or yard sign? The Job Site Sign Test eliminates names that are too long, too generic, or too complicated at a glance.</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-white font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Check domain, Google Maps, and trademark availability</h3>
                  <p className="mt-2 text-slate-600">Three checks, all critical: (1) Is the .com domain available? Check with BrandForge\'s domain checker. (2) Search Google Maps in your service area — are there already 3 businesses with similar names? If yes, pick something more distinctive. (3) Search the USPTO database for trademark conflicts in Class 37 (Construction). A name conflict can force a full rebrand — signs, trucks, shirts, cards. Check early.</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-white font-bold">
                  5
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Say it in a recommendation</h3>
                  <p className="mt-2 text-slate-600">Most construction business comes from word of mouth. Would someone say "You should call Ironclad Builders — they did our kitchen and it was perfect" or "You should call Quality Construction Services" — which one is easier to remember, easier to spell in a text, easier to find on Google? The best construction names are names people remember and can recommend without spelling them out.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Naming Mistakes */}
        <section id="mistakes" className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">
            7 Naming Mistakes That Cost Contractors Clients
          </h2>
          <p className="text-slate-600 mb-8">
            Avoid these common pitfalls that make construction businesses harder to find, remember, and trust.
          </p>

          <div className="space-y-4">
            {NAMING_MISTAKES.map((mistake, i) => (
              <div key={mistake.title} className="rounded-xl border border-red-100 bg-red-50/50 p-5">
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 text-xs font-bold">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900">{mistake.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{mistake.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Industry Generators */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">
            More Construction & Trade Name Generators
          </h2>
          <p className="text-slate-600 mb-6">
            Explore name generators for specific construction niches and related industries.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {INDUSTRY_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 hover:border-brand-300 hover:shadow-sm transition-all"
              >
                <span className="text-2xl">{link.name.split(' ')[0]}</span>
                <div>
                  <div className="font-semibold text-slate-900 text-sm">{link.name.replace(link.name.split(' ')[0] + ' ', '')}</div>
                  <div className="text-xs text-slate-500">{link.desc}</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, i) => (
              <details key={i} className="group rounded-xl border border-slate-200 bg-slate-50">
                <summary className="flex cursor-pointer items-center justify-between p-5 text-base font-medium text-slate-900 hover:text-brand-600">
                  {item.question}
                  <svg className="h-5 w-5 flex-shrink-0 text-slate-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-gradient-to-br from-slate-900 to-brand-900 p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Name Your Construction Company?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Describe your construction business. Get names with logo concepts, color palettes, taglines, and domain checks. Free to start, $9 per brand kit you love.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-semibold text-slate-900 shadow-lg hover:bg-gray-50 transition-colors"
            >
              Generate Construction Names
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-8 py-3 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              See Pricing
            </a>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mt-16">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Related Guides</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/blog/real-estate-brand-name-generator" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all">
              <div className="text-2xl mb-2">🏠</div>
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Real Estate Brand Name Generator</h3>
              <p className="text-sm text-slate-500 mt-1">300+ real estate name ideas with naming strategies for agents and brokerages.</p>
            </Link>
            <Link href="/blog/cleaning-business-name-generator" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all">
              <div className="text-2xl mb-2">🧹</div>
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Cleaning Business Name Generator</h3>
              <p className="text-sm text-slate-500 mt-1">300+ cleaning company name ideas for residential and commercial cleaning.</p>
            </Link>
            <Link href="/blog/small-business-name-generator" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all">
              <div className="text-2xl mb-2">📋</div>
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Small Business Name Generator</h3>
              <p className="text-sm text-slate-500 mt-1">200+ small business name ideas across every industry.</p>
            </Link>
            <Link href="/blog/company-name-generator" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all">
              <div className="text-2xl mb-2">🏢</div>
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Company Name Generator</h3>
              <p className="text-sm text-slate-500 mt-1">250+ company name ideas with legal and branding guidance.</p>
            </Link>
            <Link href="/blog/how-to-choose-business-name" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all">
              <div className="text-2xl mb-2">✏️</div>
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">How to Choose a Business Name</h3>
              <p className="text-sm text-slate-500 mt-1">The complete guide to naming a business in 2026.</p>
            </Link>
            <Link href="/blog/llc-naming-guide" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all">
              <div className="text-2xl mb-2">🏷️</div>
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">LLC Naming Guide</h3>
              <p className="text-sm text-slate-500 mt-1">How to pick a name for your LLC — legal requirements and best practices.</p>
            </Link>
          </div>
        </section>

        {/* Newsletter */}
        <BlogNewsletterSection />
      </article>
    </>
  )
}