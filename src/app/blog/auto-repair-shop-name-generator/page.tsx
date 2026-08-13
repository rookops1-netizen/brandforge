/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import { BlogNewsletterSection } from '@/components/BlogNewsletterSection'
import { BlogPostSchema } from '@/components/BlogPostSchema'

export const dynamic = 'force-static'
export const metadata: Metadata = {
  title: 'Auto Repair Shop Name Generator: 300+ Mechanic Shop Names for 2026 + Free AI Tool',
  description: '300+ auto repair shop name ideas across 10 categories, 7 proven naming strategies from top shops, and a free AI generator that checks domain & social availability instantly.',
  keywords: [
    'auto repair shop name generator',
    'auto repair shop names',
    'mechanic shop names',
    'car repair business names',
    'garage name ideas',
    'auto shop name generator',
    'car repair shop names',
    'mechanic business names',
    'auto repair business names',
    'garage names',
    'automotive shop names',
    'car garage names',
    'auto repair shop name ideas',
    'mechanic garage names',
    'automotive business names',
    'best auto repair shop names',
    'creative mechanic names',
    'catchy auto shop names',
    'auto repair shop name ideas 2026',
    'how to name an auto repair shop',
  ],
  openGraph: {
    title: 'Auto Repair Shop Name Generator: 300+ Mechanic Shop Names for 2026 + Free AI Tool',
    description: '300+ auto repair shop name ideas across 10 categories, 7 naming strategies from top shops, and a free AI generator with domain & social availability checks.',
    url: 'https://brandforge.app/blog/auto-repair-shop-name-generator',
    siteName: 'BrandForge',
    type: 'article',
    publishedTime: '2026-08-13T12:00:00.000Z',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Auto Repair Shop Name Generator: 300+ Mechanic Shop Names for 2026',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Auto Repair Shop Name Generator: 300+ Mechanic Shop Names for 2026',
    description: '300+ auto repair shop name ideas by category, 7 naming strategies from top shops, and a free AI generator that checks domain availability.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: 'https://brandforge.app/blog/auto-repair-shop-name-generator',
  },
  robots: { index: true, follow: true },
}

const CATEGORIES = [
  {
    name: 'General Auto Repair & Service Names',
    names: ['Precision Auto Care', 'Reliable Auto Repair', 'Ironhorse Garage', 'Summit Auto Service', 'Apex Auto Works', 'Trustpoint Auto Repair', 'Meridian Auto Care', 'Cornerstone Garage', 'Vanguard Auto Service', 'TrueLine Auto Repair', 'Heritage Auto Works', 'Fortress Auto Care', 'Sterling Auto Repair', 'Crossroads Garage', 'Pinnacle Auto Service', 'Bedrock Auto Care', 'Sentinel Auto Repair', 'Keystone Garage', 'Anchor Auto Works', 'Alliance Auto Service', 'Guardian Auto Care', 'Legacy Auto Repair', 'Prime Auto Works', 'Summit Ridge Garage', 'Atlas Auto Service', 'Cornerstone Auto Repair', 'Vantage Garage', 'Ironclad Auto Care', 'Stonebridge Auto Works', 'Everest Auto Repair'],
  },
  {
    name: 'Performance & Speed Shop Names',
    names: ['Torque Performance', 'Redline Auto Works', 'Velocity Garage', 'Boost Performance', 'RPM Performance Shop', 'Horsepower Haven', 'Drivetrain Performance', 'TurboTech Performance', 'Overdrive Garage', 'Full Throttle Auto', 'Nitro Performance', 'Shiftpoint Garage', 'Acceleration Auto', 'PowerCurve Performance', 'Ignition Motorsports', 'QuickShift Performance', 'G-Force Garage', 'Apex Performance', 'Velocity Motors', 'RaceReady Auto', 'Sprint Performance', 'Piston Performance', 'TopSpeed Garage', 'Momentum Motorsports', 'LaunchPoint Performance', 'ThrottleWorks', 'Overkill Performance', 'Shaft & Shift Garage', 'HighOctane Motors', 'Burnout Performance'],
  },
  {
    name: 'Foreign & Luxury Car Specialist Names',
    names: ['EuroTech Auto Works', 'Continental Auto Care', 'Meridian European', 'Prestige Auto Specialists', 'Elite Euro Garage', 'Bavarian Auto Works', 'Italian Stallion Motors', 'Royal Motor Works', 'LuxAuto Specialists', 'Sovereign Euro Care', 'Heritage German Auto', 'Imperial Motors', 'Crown Auto Specialist', 'Palace Garage', 'Regal Motor Works', 'Apex Euro Service', 'Vantage European Auto', 'Chateau Motors', 'Opulent Auto Care', 'Stirling Euro Garage', 'Metropolitan Motors', 'Grand Prix Auto Works', 'Ascot European', 'Deluxe Auto Works', 'Premier Euro Motors', 'Lombardi Motors', 'Monarch Euro Auto', 'Sovereign Garage', 'Elite Import Auto', 'Classique Motors'],
  },
  {
    name: 'Transmission & Specialty Repair Names',
    names: ['GearWorks Transmission', 'ShiftRight Transmissions', 'Precision Gear & Clutch', 'TorqueFlow Transmissions', 'ClutchMaster Auto', 'Gearhead Transmission Co.', 'Drivetrain Depot', 'ShiftPoint Transmissions', 'Ratchet & Gear Auto', 'Transmission Central', 'GearMasters', 'AutoTrans Specialists', 'ShiftLine Transmissions', 'GearBox Garage', 'ProShift Transmissions', 'TorqueLine Auto', 'ClutchWorks', 'GearForge Transmissions', 'TransTech Auto', 'SmoothShift Transmissions', 'DriveShaft Specialists', 'GearWorks Auto Care', 'ShiftPro Transmissions', 'Transmission Pros', 'GearUp Auto', 'Clutch & Gear Co.', 'TorqueMasters', 'TransDirect Auto', 'ShiftRight Garage', 'PrecisionDrive Transmissions'],
  },
  {
    name: 'Brakes, Tires & Quick Service Names',
    names: ['BrakeStop Auto', 'TireWorks Express', 'QuickStop Brakes & Tires', 'PitStop Auto Care', 'WheelHouse Tires', 'FastBrake Auto', 'Traction Tire Co.', 'StopRight Brakes', 'SpeedLube Express', 'TireHaven Auto', 'BrakeRight Garage', 'LubeZone Express', 'QuickLube Auto', 'TreadWorks Tires', 'BrakeLine Auto', 'PitCrew Auto Service', 'RapidService Garage', 'TireCraft Express', 'Momentum Lube & Brake', 'WheelWorks Tires', 'FleetStop Auto Care', 'ExpressBrake Co.', 'TorqueLube Express', 'TirePoint Auto', 'BrakeMasters', 'QuickTurn Auto Care', 'WheelRight Tires', 'Lubricity Express', 'StopLine Brake Co.', 'TireForce Auto'],
  },
  {
    name: 'Mobile & On-Site Mechanic Names',
    names: ['Mobile Mechanic Pros', 'OnSite Auto Care', 'DriveRight Mobile Repair', 'Roadside Rescue Auto', 'WrenchWorks Mobile', 'The Mobile Garage', 'VanGogh Mobile Repair', 'HomeCall Auto Care', 'Rolling Wrench Co.', 'Mobile Moto Works', 'RoadReady Mobile Auto', 'Anywhere Auto Repair', 'Mobile Mechanics United', 'DriveToYou Auto Care', 'OnDemand Mobile Auto', 'Curbside Mechanic Co.', 'Mobile Torque', 'Wrench on Wheels', 'AutoCare To-Go', 'RoadRunner Mobile Auto', 'Mobile Master Mechanic', 'Voyager Mobile Repair', 'HouseCall Garage', 'Roaming Wrench Auto', 'Mobile Fix Garage', 'StreetSmart Mobile Auto', 'The Traveling Wrench', 'Nomad Auto Repair', 'Mobile Precision Auto', 'OnTheGo Garage'],
  },
  {
    name: 'Truck, Diesel & Heavy Duty Names',
    names: ['DieselWorks Heavy Duty', 'TruckLine Auto Care', 'IronHorse Diesel', 'HeavyDuty Garage', 'TorqueTruck Services', 'DieselForce Auto', 'BigRig Repair Co.', 'Highway Diesel Works', 'TruckStop Garage', 'Diesel Depot Auto', 'LoadMaster Truck Care', '18-Wheeler Works', 'RigRight Diesel', 'DieselTech Services', 'Payload Auto Care', 'Overdrive Diesel', 'TruckWrench Garage', 'Diesel Express Services', 'FleetForce Diesel', 'BigBlock Diesel Works', 'DieselPro Services', 'TruckTorque Auto', 'HeavyMetal Garage', 'Diesel & Dirt Co.', 'PowerStroke Pros', 'DieselHead Garage', 'TruckWorks Heavy Duty', 'MileMarker Diesel', 'IronRig Auto Care', 'Workhorse Diesel Co.'],
  },
  {
    name: 'Classic & Restoration Shop Names',
    names: ['Vintage Torque Garage', 'Heritage Auto Restoration', 'ClassicWrench Works', 'RestoreRide Garage', 'Golden Era Auto', 'RetroRoad Garage', 'Classic Motor Works', 'Heritage Restoration Co.', 'Antique Auto Works', 'BackToLife Garage', 'Nostalgia Motors', 'Classic Line Garage', 'Vintage Rides Restoration', 'OldSchool Auto Works', 'Bygone Motors', 'Legacy Classic Auto', 'Restored & Reliable', 'Timeless Torque Garage', 'Classic Revival Auto', 'Vintage Value Motors', 'Heritage Drive Garage', 'RetroRestore Auto', 'OldIron Garage', 'Classic Corner Auto', 'Heritage Wrench Co.', 'GoldenCrank Garage', 'Vintage Velocity', 'Classic Craft Auto', 'Timeless Auto Works', 'Restoration Rides Co.'],
  },
  {
    name: 'Detailing & Custom Shop Names',
    names: ['Showroom Detail Co.', 'MirrorFinish Auto Spa', 'CustomCraft Garage', 'PolishedAuto Detail', 'LuxeCar Studio', 'GlossWorks Detailing', 'ShowCar Customs', 'Reflection Auto Spa', 'PrimeCut Customs', 'DetailDen Garage', 'Apex Auto Spa', 'SlickFinish Detailing', 'CustomLine Auto Studio', 'Showtime Auto Detail', 'EliteWash Studio', 'ChromeCraft Customs', 'ShowStop Detail Co.', 'MirrorImage Auto Spa', 'Bespoke Auto Studio', 'Prestige Detail Garage', 'FlashFinish Detailing', 'CustomRide Studio', 'GlowUp Auto Spa', 'Artisan Auto Detail', 'ShowroomShine Co.', 'Signature Detail Garage', 'HighGloss Auto Studio', 'CraftDetail Customs', 'Showcase Auto Spa', 'FinalTouch Detail Co.'],
  },
  {
    name: 'Modern & Minimalist Shop Names',
    names: ['TORQ Auto', 'AXLE Garage', 'GEAR Auto Works', 'LUBE Co.', 'RPM Auto', 'FLUX Garage', 'SPARK Auto', 'PULSE Motor Works', 'GRID Auto Care', 'NODE Garage', 'MOTOR Co.', 'SHIFT Auto', 'VAULT Garage', 'FORGE Auto Works', 'KILN Motor Co.', 'EDGE Auto Care', 'CORE Garage', 'VECTOR Auto', 'MOMENTUM Motor Works', 'PRISM Garage', 'BASE Auto Co.', 'SPIN Motor Works', 'UNIT Auto Care', 'THRUST Garage', 'PIVOT Auto', 'FOCUS Motor Co.', 'LEVEL Auto Care', 'AURA Garage', 'PULSE Auto Works', 'NEXUS Motor Co.'],
  },
]

const NAMING_STRATEGIES = [
  {
    name: 'Trust & Reliability-Based',
    description: 'Names that communicate dependability — the #1 thing customers want from a mechanic.',
    examples: 'Reliable Auto Repair, Trustpoint Garage, Guardian Auto Care, TrueLine Auto Repair',
    why: 'People don\'t just want a mechanic — they want a mechanic they can trust not to rip them off. Names that signal honesty and reliability ("Reliable," "Trustpoint," "TrueLine") preempt the biggest fear customers have about auto shops. This instantly builds credibility in a high-anxiety purchase.',
  },
  {
    name: 'Precision & Craft-Based',
    description: 'Names that emphasize skill, accuracy, and quality workmanship.',
    examples: 'Precision Auto Care, GearWorks, CraftAuto, FineLine Garage',
    why: 'Auto repair is skilled work — a good mechanic is a craftsman. Names that evoke precision ("Precision," "GearWorks," "CraftAuto") signal that you measure twice and cut once. This appeals to customers who\'ve been burned by sloppy work and want to know you take pride in the details.',
  },
  {
    name: 'Performance & Speed-Based',
    description: 'Names that capture power, torque, and automotive passion.',
    examples: 'Torque Performance, Redline Garage, Boost Auto Works, Velocity Motors',
    why: 'Car people love speed, power, and performance — even when they\'re just dropping off a sedan for an oil change. A performance-flavored name ("Torque," "Redline," "Boost") attracts enthusiasts and signals you actually care about cars, not just the cash. This is especially effective if you offer performance work.',
  },
  {
    name: 'Niche-Specific',
    description: 'Names that immediately tell people exactly what you fix or service.',
    examples: 'GearWorks Transmission, EuroTech Auto, DieselForce, QuickLube Express',
    why: 'When someone searches "euro car repair near me" or "diesel mechanic," a niche name ("EuroTech," "DieselForce") gets the click. Niche-specific names convert better in search because they match exactly what the customer is looking for — and they build authority by signaling specialization.',
  },
  {
    name: 'Personal Name + Auto/Repair',
    description: 'Your name backed by the trade — the classic, trusted garage format.',
    examples: 'Johnson Auto Repair, Martinez Garage, O\'Brien Auto Works, Patel Motor Co.',
    why: 'In the auto industry, personal reputation is everything. Putting your name on the shop says "I stand behind this work." It\'s the most common naming pattern among top shops because it builds personal accountability and word-of-mouth trust — critical for a local, referral-driven business.',
  },
  {
    name: 'Location & Road-Based',
    description: 'Names that ground your shop in a place or evoke the road.',
    examples: 'Summit Auto Care, Crossroads Garage, Highway Diesel, MileMarker Auto',
    why: 'Auto repair is deeply local. Names that reference your area or evoke the open road ("Summit," "Crossroads," "Highway") build local familiarity and make you findable when people search "[city] mechanic." Road-themed names also resonate with the automotive culture itself.',
  },
  {
    name: 'Modern & Abstract',
    description: 'Short, punchy names that stand out in a crowded market.',
    examples: 'TORQ Auto, AXLE Garage, FLUX Motor Works, GEAR Co.',
    why: 'The auto repair space is saturated with "[Name] Auto Repair" and "[Name] Garage." A short, modern, abstract name cuts through the noise and looks sharp on a shop sign, on a work shirt, and on the side of a service van. These names feel contemporary and premium — attracting a younger, design-conscious customer.',
  },
]

const NAMING_MISTAKES = [
  {
    title: 'Being too generic',
    description: '"Quality Auto Repair" tells your customers nothing. Every shop claims quality — it\'s not a differentiator. "Precision Auto Care" or "TorqueWorks" says something specific about how you work. Generic names get lost in search results and on a crowded strip of shops.',
  },
  {
    title: 'Using your initials',
    description: '"J&S Auto" means nothing to someone scrolling through Google results. It doesn\'t tell them what you fix, how you work, or why you\'re different. Initials are fine on legal documents, but they\'re invisible as a brand. Use a name that says something.',
  },
  {
    title: 'Limiting your growth',
    description: 'Naming yourself "Transmission Only" when you plan to expand into general repair, or "[Your City] Brakes" when you want to open a second location — you\'re building a cage. Pick a name that gives you room to grow your services and your geography.',
  },
  {
    title: 'Ignoring the shop sign test',
    description: 'Your name will appear on the front of your shop, on service vans, on work shirts, and in Google Maps. Long names become unreadable from a passing car. "TorqueWorks" reads perfectly at 40 mph. "Premium Auto Repair & Complete Automotive Services" does not. If it doesn\'t fit on a van door, it\'s too long.',
  },
  {
    title: 'Forgetting the Google Maps factor',
    description: 'Most auto repair customers find shops through Google Maps and local search. If your name is "ABC Auto," you\'re competing with every other ABC in your city. A distinctive name like "TorqueWorks" or "EuroTech" is easier to find, easier to review, and easier to recommend by word of mouth.',
  },
  {
    title: 'Copying the competition',
    description: 'If every shop in your area is named "[Last Name] Auto Repair," naming yourself the same way makes you forgettable. Look at your local competition — then pick a name that stands out. Differentiation is especially important in auto repair, where most names blend together.',
  },
  {
    title: 'Skipping trademark research',
    description: 'The automotive industry has heavy trademark overlap. Before committing to a name, search the USPTO database for existing registrations in Class 37 (repair services) and Class 12 (vehicles). A name conflict can force a rebrand mid-stream — signs, vans, shirts, business cards. Do the research up front.',
  },
]

const FAQ_ITEMS = [
  {
    question: 'How does the auto repair shop name generator work?',
    answer: 'Describe your auto repair business — your specialty (general repair, performance, transmission, diesel, detailing, etc.), your style (traditional, modern, premium, approachable), and your target customers. BrandForge\'s AI generates custom name suggestions paired with complete brand kits including logo concepts, color palettes, taglines, and domain/social availability checks.',
  },
  {
    question: 'Is the auto repair shop name generator free?',
    answer: 'Yes! You can generate auto repair shop name ideas for free — 5 suggestions per search, unlimited searches, no credit card required. Unlock the full brand kit (logo, colors, tagline, typography, domain & social checks) for $9 per brand kit.',
  },
  {
    question: 'What makes a good auto repair shop name?',
    answer: 'A great auto repair shop name is trustworthy and memorable, easy to read from a passing car, works well in local search ("[city] mechanic"), and conveys skill and reliability. The best names — like TorqueWorks or Precision Auto Care — are distinctive, short, and instantly signal what the shop does well.',
  },
  {
    question: 'Should I include "auto repair," "garage," or "motors" in my name?',
    answer: 'It depends on your growth plans. "Auto Repair" signals general service. "Garage" feels approachable and community-oriented. "Motors" or "Motor Works" feels more premium and performance-focused. If you have a niche — transmission, diesel, European cars — a niche-specific name (like "EuroTech" or "DieselForce") converts better in search.',
  },
  {
    question: 'Can I use these names for my auto repair business?',
    answer: 'Absolutely. All names you generate are yours to use commercially — for business registration, shop signs, van wraps, website, social media, and marketing materials. There are no licensing restrictions. Just make sure to check trademark availability for your final choice.',
  },
  {
    question: 'How important is a matching domain for auto repair shops?',
    answer: 'Very important. Most auto repair leads come through Google searches and Google Maps. A matching .com domain makes you findable, professional, and trustworthy. If your exact .com is taken, .co, .auto, and .repair are popular alternatives in the automotive industry.',
  },
  {
    question: 'What comes in the brand kit for each name?',
    answer: 'Each brand kit includes: a logo concept (text-based with font pairing), a 5-color palette with hex codes, a custom tagline, typography recommendations, and real-time availability checks for domains and social handles. You can download it all as a PDF brand guidelines document.',
  },
  {
    question: 'How do auto repair shop names differ from other business names?',
    answer: 'Auto repair names need to work in contexts other businesses don\'t — on shop signs and service vans at 40 mph, on work shirts, and in Google Maps listings. They need to convey trust (customers are spending hundreds to thousands on repairs they don\'t fully understand) and reliability. And they need to perform well in local search, because auto repair is a local, referral-driven business.',
  },
]

const INDUSTRY_LINKS = [
  { name: '🔧 AI Name Generator', href: '/generate', desc: 'Generate auto repair names with full brand kits' },
  { name: '🚗 Startup Name Generator', href: '/startup-name-generator', desc: 'Name ideas for automotive startups' },
  { name: '🏠 Real Estate Name Generator', href: '/real-estate-name-generator', desc: 'Name ideas for real estate businesses' },
  { name: '🧹 Cleaning Business Name Generator', href: '/cleaning-business-name-generator', desc: 'Name ideas for cleaning companies' },
  { name: '📋 Small Business Name Generator', href: '/small-business-name-generator', desc: 'General small business naming' },
  { name: '💡 Business Name Ideas by Industry', href: '/blog/business-name-ideas-by-industry', desc: 'Browse names across 10+ industries' },
  { name: '🏷️ LLC Naming Guide', href: '/blog/llc-naming-guide', desc: 'How to pick a name for your LLC' },
  { name: '✏️ How to Choose a Business Name', href: '/blog/how-to-choose-business-name', desc: 'Complete naming guide for 2026' },
  { name: '🔍 Company Name Generator', href: '/blog/company-name-generator', desc: '250+ company name ideas' },
  { name: '🏗️ Construction Company Names', href: '/blog/construction-brand-name-generator', desc: '300+ construction name ideas' },
]

export default function AutoRepairShopNameGeneratorPage() {
  return (
    <>
      <BlogPostSchema
        title="Auto Repair Shop Name Generator: 300+ Mechanic Shop Names for 2026 + Free AI Tool"
        description="300+ auto repair shop name ideas across 10 categories, 7 naming strategies from top shops, and a free AI generator with domain & social availability checks."
        url="https://brandforge.app/blog/auto-repair-shop-name-generator"
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
                    name: 'Auto Repair Shop Name Generator',
                    item: 'https://brandforge.app/blog/auto-repair-shop-name-generator',
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
            🔧 Auto Repair Naming Guide
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Auto Repair Shop Name Generator:{' '}
            <span className="gradient-text">300+ Ideas for 2026</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            300+ auto repair shop name ideas across 10 categories, 7 proven naming strategies from top shops, and a free AI generator that checks domain availability instantly.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="/generate"
              className="btn-primary inline-flex items-center gap-2 text-base px-8 py-3"
            >
              Generate Auto Repair Names
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/generate"
              className="btn-secondary inline-flex items-center gap-2 text-base px-8 py-3"
            >
              🔧 Try the Generator
            </a>
          </div>
        </header>

        {/* Table of Contents */}
        <nav className="mb-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-sm font-semibold text-slate-900 mb-3">📋 In this guide:</h2>
          <ol className="space-y-2 text-sm text-slate-600">
            <li><a href="#categories" className="hover:text-brand-600 transition-colors">300+ auto repair shop name ideas by category</a></li>
            <li><a href="#strategies" className="hover:text-brand-600 transition-colors">7 naming strategies from top shops</a></li>
            <li><a href="#process" className="hover:text-brand-600 transition-colors">5-step naming process for auto repair shops</a></li>
            <li><a href="#mistakes" className="hover:text-brand-600 transition-colors">7 naming mistakes that cost shops customers</a></li>
            <li><a href="#faq" className="hover:text-brand-600 transition-colors">FAQ: Everything about auto repair shop names</a></li>
          </ol>
        </nav>

        {/* Categories */}
        <section id="categories" className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">
            300+ Auto Repair Shop Name Ideas by Category
          </h2>
          <p className="text-slate-600 mb-8">
            Browse auto repair shop name ideas organized by specialty. From general repair to performance shops — find inspiration for your garage.
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
            7 Naming Strategies Top Auto Repair Shops Use
          </h2>
          <p className="text-slate-600 mb-8">
            The best auto repair shop names aren't random — they follow proven naming patterns. Here are 7 strategies used by successful shops, garages, and automotive specialists.
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
            How to Name Your Auto Repair Shop in 5 Steps
          </h2>
          <p className="text-slate-600 mb-8">
            A proven process for naming your auto repair business — from brainstorming to launch.
          </p>

          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Define your repair niche</h3>
                  <p className="mt-2 text-slate-600">Before you name anything, get specific about what you fix. "General auto repair" is too broad — are you a performance shop? Transmission specialist? Diesel? European cars? Classic restoration? Mobile mechanic? Your niche shapes your name. A transmission shop can use "GearWorks" — that metaphor doesn't work for a detailing studio. Write down your specialty, your ideal customer, and your service area.</p>
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
                  <p className="mt-2 text-slate-600">Use BrandForge's auto repair name generator above to create a broad list. Try different angles — trust-based names, precision names, performance names, niche names. Don't filter yet. The goal is volume. Mix in personal name options (your last name + Auto Repair) and niche-specific options (GearWorks, EuroTech). You'll narrow down in the next steps.</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Run the Van Sign Test</h3>
                  <p className="mt-2 text-slate-600">This is the most important test for auto repair names. Write your top 10 names on a piece of paper, tape it to a wall, and walk 30 feet away. Which names can you still read clearly? Which ones look professional on a shop sign? Which ones would you trust with your brakes? The Van Sign Test eliminates names that are too long, too generic, or too complicated at a glance.</p>
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
                  <p className="mt-2 text-slate-600">Three checks, all critical: (1) Is the .com domain available? Check with BrandForge's domain checker. (2) Search Google Maps in your service area — are there already 3 shops with similar names? If yes, pick something more distinctive. (3) Search the USPTO database for trademark conflicts in Class 37 (repair services) and Class 12 (vehicles). A name conflict can force a full rebrand — signs, vans, shirts, cards. Check early.</p>
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
                  <p className="mt-2 text-slate-600">Auto repair business is built on word of mouth. Would someone say "You should call TorqueWorks — they fixed my transmission and it was perfect" or "You should call Quality Auto Repair Services" — which one is easier to remember, easier to spell in a text, easier to find on Google? The best auto shop names are names people remember and can recommend without spelling them out.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Naming Mistakes */}
        <section id="mistakes" className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">
            7 Naming Mistakes That Cost Auto Shops Customers
          </h2>
          <p className="text-slate-600 mb-8">
            Avoid these common pitfalls that make auto repair businesses harder to find, remember, and trust.
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
            More Auto & Service Name Generators
          </h2>
          <p className="text-slate-600 mb-6">
            Explore name generators for auto-related and adjacent service businesses.
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
            Ready to Name Your Auto Repair Shop?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Describe your auto repair business. Get names with logo concepts, color palettes, taglines, and domain checks. Free to start, $9 per brand kit you love.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-semibold text-slate-900 shadow-lg hover:bg-gray-50 transition-colors"
            >
              Generate Auto Repair Names
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
            <Link href="/blog/construction-brand-name-generator" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all">
              <div className="text-2xl mb-2">🏗️</div>
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Construction Company Name Generator</h3>
              <p className="text-sm text-slate-500 mt-1">300+ construction name ideas with naming strategies for contractors.</p>
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
