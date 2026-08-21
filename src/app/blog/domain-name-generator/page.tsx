/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import { BlogNewsletterSection } from '@/components/BlogNewsletterSection'
import { BlogPostSchema } from '@/components/BlogPostSchema'
import { HowToSchema } from '@/components/HowToSchema'

export const dynamic = 'force-static'
export const metadata: Metadata = {
  title: 'Domain Name Generator: 300+ Domain Name Ideas for 2026 + Free AI Tool',
  description: '300+ domain name ideas across 10 categories, 7 proven naming strategies for choosing the perfect domain, and a free AI generator that checks domain availability instantly.',
  keywords: [
    'domain name generator',
    'domain name ideas',
    'domain name availability',
    'domain name checker',
    'how to pick a domain name',
    'domain name search',
    'best domain names',
    'available domain names',
    'creative domain names',
    'domain finder',
    'business domain name ideas',
    'brand domain name',
    'how to choose a domain name',
    'domain naming tips',
    'domain name ideas 2026',
    'catchy domain names',
    'domain name strategies',
    'domain name for startup',
    'short domain names',
    'domain name best practices',
  ],
  openGraph: {
    title: 'Domain Name Generator: 300+ Domain Name Ideas for 2026 + Free AI Tool',
    description: '300+ domain name ideas across 10 categories, 7 proven naming strategies, and a free AI tool that checks domain availability instantly.',
    url: 'https://brandforge.app/blog/domain-name-generator',
    siteName: 'BrandForge',
    type: 'article',
    publishedTime: '2026-08-19T12:00:00.000Z',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Domain Name Generator: 300+ Domain Name Ideas for 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Domain Name Generator: 300+ Domain Name Ideas for 2026 + Free AI Tool',
    description: '300+ domain name ideas, 7 naming strategies, and a free AI tool that checks domain availability instantly.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: 'https://brandforge.app/blog/domain-name-generator',
  },
  robots: { index: true, follow: true },
}

const CATEGORIES = [
  {
    name: 'Tech & Startup Domain Names',
    names: ['Veloris', 'Nexaly', 'Quanta', 'Bravura', 'Shiftly', 'Kinetiq', 'Synthra', 'Codevex', 'Prismix', 'Zentrik', 'Altorith', 'Flowbase', 'Coredex', 'Vexion', 'Numera', 'Datapulse', 'Buildkit', 'Signaly', 'Cloudmesh', 'Devforge', 'Stackr', 'Neuralbase', 'Ciphern', 'Appvex', 'Logicbit', 'Gridwise', 'Synthesy', 'Algoris', 'Nexogen', 'Techvault'],
  },
  {
    name: 'E-Commerce & Retail Domain Names',
    names: ['CartBloom', 'ShopVelvet', 'Merchantly', 'BuyBright', 'Shelf&Co', 'TradeGlow', 'MarketPulse', 'Storecraft', 'GoodCart', 'Retailry', 'Cartify', 'ShopNova', 'Basketsy', 'DealDen', 'CartCraze', 'Storewave', 'Purchasely', 'ShopSphere', 'RetailRush', 'MerchMix', 'Marketly', 'CartNest', 'ShopVault', 'Baskit', 'TheShelf', 'StoreSpark', 'MarketMint', 'ShopCurve', 'RetailEdge', 'CartLogic'],
  },
  {
    name: 'Creative & Agency Domain Names',
    names: ['StudioForge', 'PixelCraft', 'DesignHive', 'CreativePulse', 'Artisanly', 'Ideamint', 'VisionLab', 'Craft&Co', 'Concepta', 'StudioRush', 'PixelMint', 'DesignVault', 'CreativeEdge', 'SparkStudio', 'Artistryx', 'ForgeCreative', 'MintDesign', 'HiveCreative', 'StudioNova', 'CraftPulse', 'PixelForge', 'DesignSphere', 'CreativeLogic', 'ArtisanForge', 'StudioFlow', 'Conceptry', 'VisionCraft', 'DesignPulse', 'CreativeVault', 'StudioMint'],
  },
  {
    name: 'Health & Wellness Domain Names',
    names: ['VitalStep', 'WellCore', 'BodyPulse', 'HealthBridge', 'PurelyFit', 'Wellnessy', 'ThrivePath', 'BalanceLab', 'ActiveForge', 'HealthHive', 'VitalPoint', 'WellCraft', 'BodyNova', 'PureThrive', 'ZenPath', 'HealthMint', 'VitalFlow', 'WellSphere', 'ActivePulse', 'BalanceForge', 'CoreWell', 'ThriveLab', 'PurelyActive', 'HealthVault', 'BodyLogic', 'WellForge', 'ZenithHealth', 'VitalCraft', 'BalancePoint', 'ThriveMint'],
  },
  {
    name: 'Finance & Business Domain Names',
    names: ['FinVault', 'CapitalForge', 'Ledgerly', 'EquityPulse', 'WealthPath', 'FinoLogic', 'Capitalist', 'MoneyMint', 'Investiq', 'ProfitLab', 'FinanceEdge', 'GrowthForge', 'LedgerPoint', 'WealthCraft', 'EquityLab', 'CapitalCore', 'FinSphere', 'MoneyVault', 'InvestPulse', 'ProfitPath', 'FinanceLogic', 'GrowthLab', 'LedgerForge', 'WealthEdge', 'EquityMint', 'CapitalPulse', 'FinCraft', 'MoneyPath', 'InvestEdge', 'ProfitForge'],
  },
  {
    name: 'Education & Learning Domain Names',
    names: ['LearnForge', 'StudyPulse', 'EduCraft', 'KnowledgeBase', 'SkillMint', 'AcademyLab', 'LearnSphere', 'BrainForge', 'CourseVault', 'EduPulse', 'StudyEdge', 'SkillForge', 'AcademyPath', 'LearnLogic', 'BrainCraft', 'CourseMint', 'EduVault', 'StudyLab', 'SkillPulse', 'KnowledgeForge', 'AcademyCore', 'LearnPoint', 'BrainPath', 'CourseLogic', 'EduSphere', 'StudyCraft', 'SkillEdge', 'AcademyForge', 'LearnVault', 'BrainPulse'],
  },
  {
    name: 'Food & Restaurant Domain Names',
    names: ['FlavorForge', 'TasteCraft', 'MenuMint', 'PlatePulse', 'HarvestLab', 'SavoryPoint', 'KitchenVault', 'DineLogic', 'CulinaryEdge', 'FlavorPath', 'TasteSphere', 'MenuCraft', 'PlateForge', 'HarvestMint', 'KitchenPulse', 'SavoryLab', 'DineEdge', 'CulinaryForge', 'FlavorLogic', 'TasteVault', 'MenuPath', 'PlateMint', 'HarvestEdge', 'KitchenForge', 'DineSphere', 'CulinaryLab', 'FlavorCraft', 'TasteEdge', 'MenuForge', 'PlateCraft'],
  },
  {
    name: 'Minimalist & Short Domain Names',
    names: ['Aura', 'Lynx', 'Vox', 'Zeal', 'Kova', 'Nexy', 'Dusk', 'Rift', 'Fawn', 'Brio', 'Haze', 'Onyx', 'Quay', 'Trek', 'Veld', 'Apex', 'Clio', 'Dexy', 'Fern', 'Glow', 'Hive', 'Jolt', 'Kind', 'Luze', 'Moxi', 'Novy', 'Opal', 'Prim', 'Reve', 'Sola'],
  },
  {
    name: 'Real Estate & Property Domain Names',
    names: ['EstateForge', 'PropertyPulse', 'HomeVault', 'RealtyLab', 'NestCraft', 'DwellEdge', 'EstateLogic', 'PropertyPath', 'HomeMint', 'RealtyForge', 'NestPulse', 'DwellSphere', 'EstateEdge', 'PropertyForge', 'HomeLogic', 'RealtyVault', 'NestEdge', 'DwellCraft', 'EstatePulse', 'PropertyLab', 'HomeForge', 'RealtyPath', 'NestLogic', 'DwellVault', 'EstateMint', 'PropertyCraft', 'HomeEdge', 'RealtyPulse', 'NestForge', 'DwellPath'],
  },
  {
    name: 'Social & Community Domain Names',
    names: ['ConnectForge', 'CirclePulse', 'GatherLab', 'CommunityMint', 'SocialEdge', 'HubCraft', 'NetworkVault', 'TribalPath', 'UnityForge', 'GatherPoint', 'ConnectLogic', 'CircleCraft', 'SocialPulse', 'CommunityForge', 'GatherEdge', 'HubSphere', 'NetworkMint', 'TribalForge', 'UnityPath', 'GatherCraft', 'ConnectPulse', 'CircleVault', 'SocialForge', 'CommunityEdge', 'GatherLogic', 'HubForge', 'NetworkPath', 'TribalCraft', 'UnityPulse', 'GatherMint'],
  },
]

const NAMING_STRATEGIES = [
  {
    name: 'Short & Memorable',
    description: 'One-word names under 6 characters that are instantly memorable and easy to type.',
    examples: 'Aura, Vox, Zeal, Kova, Dusk, Brio, Onyx, Fawn',
    why: 'Short domains are the gold standard. They\'re easy to type, easy to remember, and look incredible on business cards and social media. Think of the most successful tech companies — Stripe, Slack, Notion, Figma — all short, memorable names. A 4-5 letter domain costs more upfront but pays dividends in brand recognition and direct traffic for years. If you can snag a short domain, do it.',
  },
  {
    name: 'Brandable & Invented',
    description: 'Made-up words that sound like real words — unique, ownable, and inherently distinctive.',
    examples: 'Veloris, Nexaly, Quanta, Bravura, Synthra, Zentrik',
    why: 'Invented names are the most powerful category for domains because they\'re almost always available as .com. "Veloris" doesn\'t exist in any dictionary, so there\'s no trademark conflict, no SEO competition for the word, and no confusion with other businesses. The best invented names follow phonetic patterns that feel natural — Veloris sounds like velocity + aurora. Quanta sounds scientific and precise. These names become entirely yours.',
  },
  {
    name: 'Compound & Modified',
    description: 'Two words combined or a word with a suffix/prefix modification.',
    examples: 'CartBloom, ShopVelvet, FinVault, LearnForge, WellCore',
    why: 'Compound names combine two familiar concepts into something new and specific. "CartBloom" instantly signals e-commerce + growth. "FinVault" combines finance + security. These names are descriptive enough that people immediately understand what you do, but distinctive enough that your domain is usually available. They also tend to rank well for both component words in search engines.',
  },
  {
    name: 'Keyword + Suffix',
    description: 'A core keyword paired with a business suffix like -ify, -ly, -base, -lab, -forge.',
    examples: 'Cartify, Designly, Flowbase, ProfitLab, SkillForge',
    why: 'The "keyword + suffix" pattern is one of the most reliable naming formulas for available domains. Adding -ify, -ly, -base, -lab, or -forge to a core word gives you a name that\'s descriptive, brandable, and usually available as a .com. It\'s the formula behind companies like Shopify (shop + ify), Grammarly (grammar + ly), and Database (data + base). The key is choosing a suffix that fits your brand personality.',
  },
  {
    name: 'Evocative & Metaphorical',
    description: 'Names that evoke a feeling or metaphor rather than literally describing the business.',
    examples: 'HarvestLab, PulsePath, NestForge, Dusk, Rift, Hearth',
    why: 'Evocative names create an emotional connection that literal names can\'t match. "HarvestLab" suggests abundance and scientific precision — perfect for an analytics company. "NestForge" suggests building + comfort — great for home services. These names work because they trigger associations and imagery in your audience\'s mind, making them more memorable and more likely to be available as domains.',
  },
  {
    name: 'Action & Verb-Based',
    description: 'Names built around verbs and action words that communicate what users will do.',
    examples: 'Shiftly, Buildkit, ThrivePath, ConnectForge, GatherLab',
    why: 'Action-based names tell users what they\'ll achieve with your product. "Buildkit" implies creation. "ThrivePath" implies growth. "ConnectForge" implies building relationships. These names are powerful because they\'re inherently motivating — they don\'t just describe what you do, they describe the transformation your customer will experience. They also tend to be more available than noun-based alternatives.',
  },
  {
    name: 'TLD Strategy & Alternative Extensions',
    description: 'Using .io, .co, .ai, .app, .dev, or .so instead of competing for .com.',
    examples: 'veloris.io, bravura.co, nexaly.ai, quanta.app, buildkit.dev',
    why: 'Sometimes the best domain strategy isn\'t fighting for a .com — it\'s owning a different extension. .io has become the standard for developer tools and SaaS. .ai signals artificial intelligence. .co works great for companies and consultancies. .app is perfect for mobile and web apps. The key is choosing a TLD that reinforces your brand story rather than settling for one. BrandForge automatically checks all major TLDs so you can pick the one that fits best.',
  },
]

const NAMING_MISTAKES = [
  {
    title: 'Choosing a domain before checking trademark conflicts',
    description: 'You find the perfect domain, launch your site, and six months later get a cease-and-desist letter. Always search the USPTO database before committing. A domain without trademark clearance is a lawsuit waiting to happen. BrandForge checks domain availability, but you should also run a trademark search for your top 3-5 names.',
  },
  {
    title: 'Using hyphens, numbers, or tricky spellings',
    description: 'If you tell someone your domain and they can\'t type it immediately, it\'s the wrong domain. "my-brand-site.com" will be typed as "mybrandsite.com" every time. "4real.com" will be typed as "forreal.com". Numbers and hyphens kill word-of-mouth marketing because people can\'t spell your domain after hearing it once.',
  },
  {
    title: 'Picking a domain that doesn\'t match your brand name',
    description: 'Your brand is "Velocity Labs" but velocitylabs.com is taken, so you register velocity-labs-inc.com. Now your domain doesn\'t match what people search for, what\'s on your business cards, or what people remember. Either choose a brand name where the exact .com is available, or go with a different TLD that matches exactly (velocitylabs.io, velocitylabs.co).',
  },
  {
    title: 'Ignoring social media handle availability',
    description: 'Your domain is available but @yourbrand is taken on Instagram, TikTok, and X. Now you\'re @yourbrand_official or @yourbrand_hq — which looks unprofessional and makes you harder to find. Check domain AND social handle availability at the same time. BrandForge checks both simultaneously.',
  },
  {
    title: 'Going too narrow with your domain',
    description: '"SeattlePlumbingRepairs.com" tells people exactly what you do — but what if you expand to Portland? Or add HVAC services? Geographic and service-specific domains box you in. Choose a brandable domain that can grow with your business. "FlowWorks.com" works for plumbing, HVAC, and beyond.',
  },
  {
    title: 'Waiting too long to register',
    description: 'Good domains disappear fast. If you find a domain you love and it\'s available, register it immediately. Domain availability changes by the minute — the .com you checked this morning might be registered this afternoon. Don\'t spend weeks deliberating. Pick your top 3, register them all, and decide later. Domains are cheap; rebranding is expensive.',
  },
  {
    title: 'Forgetting about domain length and typeability',
    description: 'Long domains are hard to type on mobile, hard to fit on business cards, and easy to misspell. "internationalbusinesssolutions.com" is 30 characters — nobody is typing that correctly. The best domains are under 12 characters. If you can\'t say it, spell it, and type it in under 3 seconds, keep looking.',
  },
]

const FAQ_ITEMS = [
  {
    question: 'How do I choose the best domain name for my business?',
    answer: 'Start with your brand name — your domain should match it exactly or be as close as possible. Check .com availability first, then consider .io, .co, or .ai if .com is taken. Keep it under 12 characters, avoid hyphens and numbers, and make sure it\'s easy to spell and type. Use BrandForge\'s domain checker to verify availability across all major TLDs simultaneously.',
  },
  {
    question: 'What if the .com domain I want is already taken?',
    answer: 'You have three options: (1) Choose an alternative TLD like .io, .co, .ai, or .app — these are increasingly popular and well-accepted. (2) Add a modifier to your brand name — try "get[yourname].com", "[yourname]app.com", or "use[yourname].com". (3) Consider a different brand name where the .com is available. Option 1 is usually best — a matching .io or .co is better than a mismatched .com.',
  },
  {
    question: 'Are .io, .co, and .ai domains as good as .com?',
    answer: 'Yes, for the right businesses. .io is the standard for developer tools and SaaS — Stripe uses stripe.io. .co is great for companies and startups. .ai is perfect for AI products. The key is matching your TLD to your audience. A tech startup on .io has more credibility than on a hyphenated .com. The only downside: .com still has the most universal recognition, so if your .com is available, grab it.',
  },
  {
    question: 'How much should a domain name cost?',
    answer: 'A new, unregistered domain costs $10-15/year from registrars like Namecheap, Google Domains, or Cloudflare. Premium domains (short, dictionary-word .coms) can cost $2,000-$100,000+. For most startups and small businesses, a brandable .com, .io, .co, or .ai at $10-15/year is the way to go. Don\'t overspend on a domain before you\'ve validated your business.',
  },
  {
    question: 'Should I buy multiple domain extensions?',
    answer: 'If you can afford it, yes — buy the .com and your primary alternative TLD (e.g., .io). This prevents competitors from registering similar domains and protects your brand. Redirect the secondary domain to your primary one. For most businesses, owning 2-3 domains (.com + .io + maybe .co) is sufficient. Don\'t buy 10 extensions unless you\'re a major brand.',
  },
  {
    question: 'Can I use BrandForge to check domain availability?',
    answer: 'Yes. BrandForge\'s AI name generator automatically checks domain availability for every name it suggests. Enter your business description and get name ideas with instant .com, .io, .co, .ai, .app, and .dev availability checks. You can also check social media handle availability at the same time. Free to use, no signup required.',
  },
  {
    question: 'How do domain names affect SEO?',
    answer: 'Exact-match domains (like "seattle-plumber.com") used to rank well, but Google has devalued them. Today, brand signals matter more — a unique brand name that people search for directly is worth more than a keyword-stuffed domain. Choose a brandable domain that people will remember and search for by name. "Stripe.com" ranks better than "online-payment-processing.com" because people search for "Stripe" directly.',
  },
  {
    question: 'What makes a domain name memorable?',
    answer: 'Memorable domains share five traits: (1) Short — under 12 characters. (2) Easy to spell — if you have to spell it over the phone, it\'s too complicated. (3) Distinctive — it doesn\'t sound like five other companies. (4) Relevant — it connects to what you do or the feeling you want to evoke. (5) Ownable — it\'s unique enough to trademark. Names like "Stripe," "Notion," and "Figma" nail all five.',
  },
]

const INDUSTRY_LINKS = [
  { name: '🚀 Startup Name Generator', href: '/startup-name-generator', desc: 'Tech & startup names with domain checks' },
  { name: '💻 Tech Name Generator', href: '/tech-name-generator', desc: 'Tech company names with .io & .ai focus' },
  { name: '🏪 Store Name Generator', href: '/blog/store-name-generator', desc: 'Retail & e-commerce store names' },
  { name: '📊 Consulting Name Generator', href: '/consulting-name-generator', desc: 'Consulting & professional services names' },
  { name: '🏢 Company Name Generator', href: '/blog/company-name-generator', desc: 'Company names across all industries' },
  { name: '✅ Company Name Checker', href: '/blog/company-name-checker', desc: 'Verify your business name is available' },
  { name: '🌐 Domain Availability Guide', href: '/blog/domain-name-availability', desc: 'When .com is taken: creative domain strategies' },
  { name: '💡 How to Choose a Brand Name', href: '/blog/how-to-choose-brand-name', desc: 'The complete decision framework' },
  { name: '🏷️ Free Brand Name Generator', href: '/blog/free-brand-name-generator', desc: 'Compare 8 free naming tools honestly' },
  { name: '📋 How to Choose a Business Name', href: '/blog/how-to-choose-business-name', desc: 'The complete business naming guide' },
]

export default function DomainNameGeneratorPage() {
  return (
    <>
      <BlogPostSchema
        url="https://brandforge.app/blog/domain-name-generator"
        title="Domain Name Generator: 300+ Domain Name Ideas for 2026 + Free AI Tool"
        description="300+ domain name ideas across 10 categories, 7 proven naming strategies for choosing the perfect domain, and a free AI generator that checks domain availability instantly."
        datePublished="2026-08-19"
        dateModified="2026-08-19"
      />
      <HowToSchema
        name="How to Choose Your Domain Name in 5 Steps"
        description="A proven 5-step process for finding and securing the perfect domain name for your business."
        url="https://brandforge.app/blog/domain-name-generator"
        totalTime="PT25M"
        steps={[
          { name: 'Start with Your Brand Name, Not the Domain', text: 'Pick the right brand name first, then find the best domain for it. A great brand name on .io or .co is infinitely better than a mediocre name that happens to have a .com available.' },
          { name: 'Check Availability Across All Major TLDs', text: 'Don\'t just check .com. Check .io, .co, .ai, .app, and .dev simultaneously. The perfect domain might be available on .io even if .com is taken.' },
          { name: 'Run the Phone Test', text: 'Say your domain name out loud to a friend. Can they spell it correctly without asking? If you have to spell it out, it\'s too complicated. Every spelling error is a lost visitor.' },
          { name: 'Check Social Handles and Trademarks', text: 'Verify @yourbrand is available on major social platforms and search USPTO for trademark conflicts. A domain is just one piece — consistent branding across platforms matters.' },
          { name: 'Register Immediately and Buy Variants', text: 'Good domains disappear fast. Register your domain immediately, and buy the .com plus your primary alternative TLD. Redirect the secondary domain to your primary one.' },
        ]}
      />
      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12">
          <p className="text-sm font-semibold text-brand-600 tracking-wider uppercase mb-3">Domain & Naming Guide</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Domain Name Generator: 300+ Domain Name Ideas for 2026 + Free AI Tool
          </h1>
          <p className="text-lg text-slate-600 mb-4">
            Your domain name is your address on the internet — and your first impression with every customer. Browse 300+ domain name ideas across 10 categories, learn 7 proven naming strategies for choosing the perfect domain, and use our free AI generator to find available domains instantly.
          </p>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <time dateTime="2026-08-19">August 19, 2026</time>
            <span>·</span>
            <span>12 min read</span>
          </div>
        </header>

        {/* CTA Banner */}
        <div className="mb-12 rounded-2xl bg-gradient-to-br from-brand-50 to-purple-50 border border-brand-200 p-6 sm:p-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
            Find Your Perfect Domain — Free AI Generator
          </h2>
          <p className="text-slate-600 mb-6 max-w-xl mx-auto">
            Describe your business, get name ideas with instant domain availability checks across .com, .io, .co, .ai, .app, and .dev.
          </p>
          <a
            href="/domain-name-generator"
            className="btn-primary inline-flex items-center gap-2 text-base px-8 py-3"
          >
            Check Domain Availability — Free
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        {/* Categories */}
        <section id="ideas" className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">
            300+ Domain Name Ideas by Category
          </h2>
          <p className="text-slate-600 mb-8">
            Browse domain name ideas across 10 categories. Each name is designed to be brandable, memorable, and likely available as a domain. Use these as inspiration — then check availability with our free generator.
          </p>

          <div className="space-y-8">
            {CATEGORIES.map((category) => (
              <div key={category.name}>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.names.map((name) => (
                    <a
                      key={name}
                      href={`/generate?desc=${encodeURIComponent(name + ' - a brand name for a business')}`}
                      className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:border-brand-300 hover:text-brand-600 hover:shadow-sm transition-all"
                    >
                      {name}
                    </a>
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
              Generate Custom Domain Names
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </section>

        {/* Naming Strategies */}
        <section id="strategies" className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">
            7 Domain Naming Strategies That Work
          </h2>
          <p className="text-slate-600 mb-8">
            The best domain names aren't random — they follow proven patterns. Here are 7 strategies used by the world's most successful brands to pick domains that are available, memorable, and brandable.
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
            How to Choose Your Domain Name in 5 Steps
          </h2>
          <p className="text-slate-600 mb-8">
            A proven process for finding and securing the perfect domain name for your business.
          </p>

          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Start with your brand name, not the domain</h3>
                  <p className="mt-2 text-slate-600">Most people start by searching for available domains — that's backwards. Start by picking the right brand name first, then find the best domain for that name. A great brand name on a .io or .co domain is infinitely better than a mediocre name that happens to have a .com available. Use BrandForge to generate brand names based on your business description, then check domain availability.</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-white font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Check availability across all major TLDs</h3>
                  <p className="mt-2 text-slate-600">Don't just check .com. Check .io, .co, .ai, .app, and .dev simultaneously. The perfect domain might be available on .io even if .com is taken. BrandForge checks all major TLDs in one click — .com, .io, .co, .ai, .app, and .dev. You might be surprised which one is available and feels right for your brand.</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Run the Phone Test</h3>
                  <p className="mt-2 text-slate-600">Say your domain name out loud to a friend. Can they spell it correctly without asking? If you have to spell it out ("that's V-E-L-O-R-I-S with an S at the end"), it's too complicated. The Phone Test is simple: if someone can't type your domain after hearing it once, find a simpler name. Every spelling error is a lost visitor.</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-white font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Check social handles and trademarks at the same time</h3>
                  <p className="mt-2 text-slate-600">A domain is just one piece. You also need consistent social media handles (@yourbrand on Instagram, X, TikTok) and a clean trademark. BrandForge checks domain AND social handle availability simultaneously. For trademarks, search the USPTO database for your top 3-5 names. It takes 30 minutes and can save you months of legal headaches later.</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-white font-bold">
                  5
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Register immediately and buy variants</h3>
                  <p className="mt-2 text-slate-600">Good domains disappear fast. Once you've found a domain where the .com (or your primary TLD) is available, register it immediately — within hours if possible. Buy the .com and your primary alternative TLD (e.g., .io) at minimum. Redirect the secondary domain to your primary one. Domains cost $10-15/year. Rebranding costs thousands. Don't wait.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Naming Mistakes */}
        <section id="mistakes" className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">
            7 Domain Naming Mistakes That Kill Businesses
          </h2>
          <p className="text-slate-600 mb-8">
            Avoid these common pitfalls that make your domain harder to find, remember, and type.
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
            More Name Generators with Domain Checks
          </h2>
          <p className="text-slate-600 mb-6">
            Every BrandForge generator checks domain and social handle availability automatically.
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
            Ready to Find Your Perfect Domain?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Describe your business, get name ideas with instant domain availability checks for .com, .io, .co, .ai, .app, and .dev. Free to start, $9 per brand kit you love.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/domain-name-generator"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-semibold text-slate-900 shadow-lg hover:bg-gray-50 transition-colors"
            >
              Check Domain Availability — Free
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
            <Link href="/blog/domain-name-availability" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all">
              <div className="text-2xl mb-2">🌐</div>
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Domain Name Availability</h3>
              <p className="text-sm text-slate-500 mt-1">Creative strategies when .com is taken — TLD alternatives and workarounds.</p>
            </Link>
            <Link href="/blog/company-name-checker" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all">
              <div className="text-2xl mb-2">✅</div>
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Company Name Checker</h3>
              <p className="text-sm text-slate-500 mt-1">How to verify your business name is available — domain, trademark, social, and state.</p>
            </Link>
            <Link href="/blog/brand-name-availability-checker" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all">
              <div className="text-2xl mb-2">🔍</div>
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Brand Name Availability Checker</h3>
              <p className="text-sm text-slate-500 mt-1">Check if your brand name is available as a domain, trademark, and social handle.</p>
            </Link>
            <Link href="/blog/how-to-choose-brand-name" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all">
              <div className="text-2xl mb-2">💡</div>
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">How to Choose a Brand Name</h3>
              <p className="text-sm text-slate-500 mt-1">The complete decision framework for picking a name you won't regret.</p>
            </Link>
            <Link href="/blog/free-brand-name-generator" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all">
              <div className="text-2xl mb-2">🆓</div>
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Free Brand Name Generator</h3>
              <p className="text-sm text-slate-500 mt-1">Compare 8 free naming tools honestly — plus the DIY strategy that beats them all.</p>
            </Link>
            <Link href="/blog/startup-naming-mistakes" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all">
              <div className="text-2xl mb-2">🚀</div>
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">7 Naming Mistakes That Kill Startups</h3>
              <p className="text-sm text-slate-500 mt-1">The naming traps founders fall into over and over — and how to avoid them.</p>
            </Link>
          </div>
        </section>

        {/* Newsletter */}
        <BlogNewsletterSection />
      </article>
    </>
  )
}