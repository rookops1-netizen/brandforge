/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import { NewsletterCta } from '@/components/NewsletterCta'
import { BlogPostSchema } from '@/components/BlogPostSchema'
import { HowToSchema } from '@/components/HowToSchema'

export const dynamic = 'force-static'
export const metadata: Metadata = {
  title: 'How to Come Up with a Business Name: 10 Proven Methods (2026 Guide)',
  description: 'Struggling to come up with a business name? 10 proven brainstorming methods, 200+ name ideas by industry, and a free AI generator that checks domain availability instantly.',
  keywords: [
    'how to come up with a business name',
    'coming up with a business name',
    'ways to come up with a business name',
    'business name ideas',
    'how to brainstorm a business name',
    'business name brainstorming',
    'how to think of a business name',
    'creative ways to name a business',
    'how to pick a business name',
    'naming your business',
    'how to create a business name',
    'business name generator',
    'good business name ideas',
    'how to find a business name',
    'tips for naming a business'
  ],
  openGraph: {
    title: 'How to Come Up with a Business Name: 10 Proven Methods (2026 Guide)',
    description: '10 proven brainstorming methods, 200+ name ideas by industry, and a free AI generator with instant domain availability checks. Find your perfect business name today.',
    url: 'https://brandforge.app/blog/how-to-come-up-with-business-name',
    siteName: 'BrandForge',
    type: 'article',
    publishedTime: '2026-07-17T12:00:00.000Z',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'How to Come Up with a Business Name: 10 Proven Methods',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Come Up with a Business Name: 10 Proven Methods (2026)',
    description: '10 proven methods to brainstorm business names, 200+ ideas by industry, and a free AI generator. Find your perfect name today.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: 'https://brandforge.app/blog/how-to-come-up-with-business-name',
  },
  robots: { index: true, follow: true },
}

const NAME_IDEAS = [
  {
    category: 'Tech & SaaS',
    icon: '💻',
    names: [
      'NovaPeak', 'Codehive', 'Syncwise', 'ShiftLab', 'DataForge',
      'Brightpath', 'Stackmind', 'Pulsepoint', 'ArcForge', 'Meldr',
      'Launchdeck', 'Corewave', 'Nimblr', 'Thrivekit', 'Quantumly',
      'Rapidgrid', 'Cleverset', 'Ironstack', 'Dataloom', 'Vexol',
      'Ziply', 'Cloudshift', 'Nextbase', 'Buildkit', 'Flowstate'
    ],
  },
  {
    category: 'Food & Beverage',
    icon: '🍽️',
    names: [
      'Ember Kitchen', 'Saltmark', 'Copper & Thyme', 'Hearth & Oak', 'Wildgrain',
      'The Gilded Fork', 'Sprout & Vine', 'Cedar & Spice', 'Bloom Kitchen', 'Fireside',
      'Golden Thistle', 'Mint & Malt', 'The Olive Press', 'Saffron Trail', 'Stonecrop',
      'The Copper Pot', 'Briar Kitchen', 'Flame & Fork', 'Heritage Kitchen', 'Ash & Em',
      'Rosemary & Co.', 'The Grain Mill', 'Gather Kitchen', 'Salt & Ember', 'Basil & Iron'
    ],
  },
  {
    category: 'Health & Wellness',
    icon: '🌿',
    names: [
      'Verity Wellness', 'Solace Health', 'Bloomwell', 'Clearbody', 'Zenith Wellness',
      'Nurture Co.', 'The Still Point', 'Vitalroot', 'Harmony Health', 'Equilibrium',
      'Greenpath', 'Recharge', 'Lumina Wellness', 'Pureform', 'Restore',
      'Thrive Collective', 'Mindful Motion', 'Bodyraft', 'Oasis Wellness', 'Grounded',
      'Flowstate Wellness', 'Everwell', 'Sage Wellness', 'Radiant Health', 'Wellcraft'
    ],
  },
  {
    category: 'Fashion & Lifestyle',
    icon: '👗',
    names: [
      'Velora', 'Solstice', 'Cloth & Stone', 'Ember & Silk', 'Wildthread',
      'The Linen Project', 'Maison Luxe', 'Kindred Cloth', 'Rivière', 'Alto',
      'Sable', 'Copper & Pine', 'Heirloom Co.', 'Atlas Wear', 'Verano',
      'Lumière', 'The Velvet Studio', 'Sundial', 'Arclight', 'Floriana',
      'March & Bloom', 'Silhouette', 'The Good Stitch', 'Nomad Thread', 'Oakes & Co.'
    ],
  },
  {
    category: 'Finance & Fintech',
    icon: '💰',
    names: [
      'Ledgerpoint', 'Vaultline', 'Fundcraft', 'Capitalwise', 'NexFin',
      'Clearledger', 'Trustline', 'Paybridge', 'Meridian Finance', 'Corevest',
      'Balancesheet', 'Summit Finance', 'Greenline Capital', 'Prosperpath', 'Fiscally',
      'Wealthcraft', 'Boldvest', 'Trueledger', 'Equitable', 'Finpoint',
      'Accrue', 'Vestwell', 'Steady Growth', 'Mintline', 'Capital Forge'
    ],
  },
  {
    category: 'Real Estate & Property',
    icon: '🏠',
    names: [
      'Keystone Realty', 'Crestline Properties', 'Meridian Homes', 'Summit Realty', 'Landmark Group',
      'Foundation Realty', 'Horizon Estates', 'Cornerstone Properties', 'Apex Homes', 'Cedar Realty',
      'Stonepath Properties', 'Heritage Estates', 'Primepoint Realty', 'Vista Homes', 'Noble Properties',
      'Ironbridge Realty', 'Greenfield Homes', 'Oakmont Properties', 'Pinnacle Realty', 'Trustline Estates',
      'Truevest Realty', 'Anchor Properties', 'Crestview Homes', 'Crestpoint', 'Hearth Realty'
    ],
  },
  {
    category: 'Creative & Design',
    icon: '🎨',
    names: [
      'Pixelcraft', 'Boldstroke', 'Inkwell Studio', 'Chromatic', 'DesignForge',
      'Freshcanvas', 'Brightline Creative', 'Studio Meridian', 'Artifex', 'Craft & Code',
      'The Design Lab', 'Folio Studio', 'Prism Creative', 'Vivid Studio', 'Oakes Creative',
      'Ironclad Design', 'Copper & Canvas', 'Wilde Design', 'Paper & Pixel', 'Sketchpad',
      'Makers Studio', 'Hatch Creative', 'Frame & Form', 'Ink & Ember', 'Truecolor'
    ],
  },
  {
    category: 'Education & EdTech',
    icon: '📚',
    names: [
      'Brightpath Learning', 'MindForge', 'Learnwise', 'Elevate Education', 'Scholarly',
      'Knowledgebase', 'Skillshift', 'The Learning Lab', 'Cleverpath', 'NextLesson',
      'Studyforge', 'Thinkspace', 'Curiousmind', 'Braintree Learning', 'Mastery Path',
      'Wisdom Craft', 'Insight Academy', 'Spark Learning', 'Growthmind', 'Truelearn',
      'Academy Lane', 'Noble Studies', 'Illuminated Learning', 'Brainbank', 'Clarify'
    ],
  },
  {
    category: 'E-Commerce & Retail',
    icon: '🛒',
    names: [
      'Cartwell', 'Shelf & Co.', 'The Good Market', 'Stockwell', 'Buymore',
      'Marketstreet', 'Foundry & Supply', 'The Daily Goods', 'Crate & Barrel 2', 'Wellstocked',
      'The Storefront', 'Pantry & Co.', 'Rack & Shelf', 'Goodfinds', 'The Market Co.',
      'Shelflife', 'Basics & Beyond', 'Everyday Goods', 'Supply & Co.', 'The Goods Market',
      'Pickwell', 'Freshmarket', 'Cabinet & Co.', 'The Find', 'Wellmade'
    ],
  },
  {
    category: 'Professional Services',
    icon: '💼',
    names: [
      'Clearpoint Consulting', 'Ironclad Advisory', 'True North Partners', 'Summit Consulting', 'Meridian Group',
      'Foundation Advisory', 'Beacon Partners', 'Apex Consulting Group', 'Crestline Advisors', 'Steadfast Consulting',
      'Trustline Advisory', 'Cornerstone Partners', 'Greenfield Consulting', 'Vanguard Advisory', 'Pinnacle Group',
      'Forge Consulting', 'The Advisory Co.', 'Keystone Partners', 'Horizon Advisory', 'Noble Consulting',
      'Clarity Partners', 'Truepath Advisors', 'Boldmove Consulting', 'Principled Group', 'Archway Partners'
    ],
  }
]

const METHODS = [
  {
    number: '01',
    title: 'The Word-Storm Method',
    description: 'Write down 50 words related to your business — what you do, who you serve, how you make people feel. Don\'t edit, don\'t judge. Just fill the page. Then circle the 10 words that spark something. Combine, shorten, or remix those words into name candidates.',
    example: 'A meal kit company brainstorms: fresh, cook, deliver, kitchen, table, taste, simple, home, chef, plate. Combines "fresh" + "plate" → Freshplate. Shortens "kitchen" + "simple" → Simpkitchen → Simpkitch → Kitchsimp → Kitsch Kitchen.',
    tip: 'Set a 10-minute timer. Quantity beats quality in the first round. You\'ll find gold in word #37 that you\'d never reach if you stopped at #10.',
  },
  {
    number: '02',
    title: 'The Portmanteau Blend',
    description: 'Combine two relevant words into one new word. This is how the biggest brands did it: Pinterest (pin + interest), Instagram (instant + telegram), Netflix (net + flicks). Pick two words from your word storm and smash them together.',
    example: 'A pet grooming app: "paw" + "polish" → Pawlish. A fitness platform: "sweat" + "sync" → Sweatsync. A learning platform: "skill" + "forge" → Skillforge.',
    tip: 'The best portmanteaus blend seamlessly — the seam between words disappears. If people can\'t tell where one word ends and the other begins, you\'ve struck gold.',
  },
  {
    number: '03',
    title: 'The Foreign Word Borrow',
    description: 'Find words in other languages that capture your brand\'s essence. Google Translate is your friend. Latin, Greek, Japanese, and French are goldmines for brand names because they sound sophisticated and carry layers of meaning.',
    example: 'A meditation app finds "serenity" in Japanese → "seijaku." A shoe brand finds "swift" in Latin → "velox." A coffee company finds "morning" in Italian → "mattina" → Mattina Coffee.',
    tip: 'Always check that the word doesn\'t have an unintended meaning in another language. The Chevrolet Nova famously didn\'t sell in Spanish-speaking countries because "no va" means "it doesn\'t go."',
  },
  {
    number: '04',
    title: 'The Metaphor Method',
    description: 'Think of your business as something else entirely. If your brand were an animal, a natural element, a tool, a place — what would it be? The metaphor gives you a rich, evocative name that tells a story without spelling it out.',
    example: 'A fast delivery service → Falcon (the bird). A secure data platform → Vault (the bank). A creative agency → Forge (the workshop). A learning platform → Lighthouse (the guide).',
    tip: 'Metaphors work because they activate visual memory. People remember "Robinhood" far better than "Free Stock Trading Platform." The image is the hook.',
  },
  {
    number: '05',
    title: 'The Founder Story',
    description: 'Use your own name, a meaningful place, or a personal story. This creates instant authenticity and a narrative you can tell in every pitch, about page, and interview. Many iconic brands are founder names: Ford, Disney, Chanel, Hermes, Boeing.',
    example: 'A bakery started by two sisters → Bennett & Bloom (their last names). A consulting firm → Oakmont Advisory (the street where the founder grew up). A design studio → Calder Creative (the founder\'s middle name).',
    tip: 'Founder names work best when they\'re short, easy to spell, and sound good out loud. If your name is hard to pronounce, consider a shortened version or initials.',
  },
  {
    number: '06',
    title: 'The Acronym Shortcut',
    description: 'Take a descriptive phrase and turn it into an acronym. This works especially well for B2B and tech companies where you want a short, punchy name that hints at something bigger. Think IKEA (Ingvar Kamprad Elmtaryd Agunnaryd) or H&M (Hennes & Mauritz).',
    example: 'A project management tool: "Streamlined Task Engine" → STE. A financial app: "Smart Money Management" → SMM → sounds awkward → try "Unified Finance Platform" → UFP → nope → "Next Level Wealth" → NLW → better as "Level Wealth."',
    tip: 'Acronyms only work if they\'re pronounceable as a word (IKEA) or if the full phrase is meaningful (H&M). Random letters mean nothing to customers.',
  },
  {
    number: '07',
    title: 'The Opposite/Contrast Method',
    description: 'What is the opposite of what your customers expect? A calm name for an energy drink. A simple name for a complex product. A playful name for serious software. Contrast creates memorability because the brain pauses to resolve the unexpected.',
    example: 'A cybersecurity firm → Velvet (soft + protective). A budget brand → Crown (luxury connotation at discount prices). A complex data platform → Pebble (simple, small, foundational).',
    tip: 'The contrast method is risky — it can confuse people if the disconnect is too big. Test it with 10 people before committing. If 7+ "get it," you\'re onto something.',
  },
  {
    number: '08',
    title: 'The Domain-First Approach',
    description: 'Start by searching for available .com domains instead of starting with a name. Browse expiring domains, use a bulk domain checker, or let a name generator suggest names where the domain is actually available. This eliminates the heartbreak of falling in love with a name you can\'t have.',
    example: 'Search for available 5-letter .com domains → find "velox" is taken → try "veloxio" → available → Veloxio it is. Or use BrandForge which checks domain availability during generation.',
    tip: 'Don\'t settle for a bad domain. If yourname.com is taken and you have to use yourname-inc.co, pick a different name. The domain is half the brand.',
  },
  {
    number: '09',
    title: 'The Competitor Inversion',
    description: 'Write down your top 10 competitors\' names. Identify the pattern (are they all compound words? Initials? Latin?) and deliberately do the opposite. If everyone in your space uses tech-y names, use a warm human name. If they\'re all serious, be playful.',
    example: 'In the finance space where names like Wealthfront, Betterment, and Acorns dominate → a warm, personal name like "Hearth Finance." In fitness where names like Peloton, Equinox, and CrossFit dominate → a simple, welcoming name like "Walk."',
    tip: 'You\'re not copying — you\'re differentiating. The goal is to be the one brand in your category that doesn\'t sound like all the others.',
  },
  {
    number: '10',
    title: 'The AI-Assisted Brainstorm',
    description: 'Use an AI name generator (like BrandForge) to produce 100+ name ideas in seconds, then curate the best ones. AI is exceptionally good at generating options you\'d never think of — it combines patterns across languages, industries, and creative frameworks simultaneously.',
    example: 'Describe your business to BrandForge: "A sustainable clothing brand for active women aged 25-40." Get names like: Willow Active, Ember & Root, Verdant, Moss & Motion, Thrive Threads, Kin & Cloth, Evergreen Athletics, Verdant Way, The Good Thread, Root & Rise.',
    tip: 'Use AI as a brainstorming partner, not a decision-maker. Generate 100 names, pick your top 10, then apply the other 9 methods to refine them. The best names come from human creativity enhanced by AI breadth.',
  }
]

const INDUSTRY_LINKS = [
  { name: 'Startup', href: '/startup-name-generator', desc: 'Launch-ready names' },
  { name: 'Restaurant', href: '/restaurant-name-generator', desc: 'Food & dining' },
  { name: 'Fitness', href: '/fitness-brand-name-generator', desc: 'Gyms, studios, wellness' },
  { name: 'Real Estate', href: '/real-estate-name-generator', desc: 'Property & brokerage' },
  { name: 'Photography', href: '/photography-name-generator', desc: 'Studios & portfolios' },
  { name: 'Beauty', href: '/beauty-name-generator', desc: 'Salons & skincare' },
  { name: 'Fashion', href: '/fashion-name-generator', desc: 'Clothing & lifestyle' },
  { name: 'Food Truck', href: '/food-truck-name-generator', desc: 'Mobile food' },
  { name: 'Tech', href: '/tech-name-generator', desc: 'SaaS & startups' },
  { name: 'Consulting', href: '/consulting-name-generator', desc: 'Advisory firms' },
  { name: 'Podcast', href: '/podcast-name-generator', desc: 'Shows & media' },
  { name: 'Coaching', href: '/coaching-name-generator', desc: 'Life & business coaches' },
  { name: 'Nonprofit', href: '/nonprofit-name-generator', desc: 'Charities & causes' },
  { name: 'Craft', href: '/craft-name-generator', desc: 'Handmade & artisan' },
  { name: 'Education', href: '/education-name-generator', desc: 'Tutoring & courses' },
  { name: 'Yoga', href: '/yoga-name-generator', desc: 'Studios & wellness' },
  { name: 'Coffee', href: '/coffee-name-generator', desc: 'Cafés & roasters' },
  { name: 'Music', href: '/music-name-generator', desc: 'Bands & studios' },
  { name: 'Wedding', href: '/wedding-name-generator', desc: 'Planning & venues' },
  { name: 'Cleaning', href: '/cleaning-business-name-generator', desc: 'Residential & commercial' },
  { name: 'Pet', href: '/pet-name-generator', desc: 'Pet businesses' },
  { name: 'Landscaping', href: '/landscaping-name-generator', desc: 'Lawn & garden' },
  { name: 'Salon', href: '/salon-name-generator', desc: 'Hair & beauty' },
  { name: 'Construction', href: '/construction-name-generator', desc: 'Contractors & builders' },
  { name: 'Marketing Agency', href: '/marketing-agency-name-generator', desc: 'Agencies & creatives' }
]

const FAQ_ITEMS = [
  {
    question: 'How do I come up with a business name from scratch?',
    answer: 'Start with the Word-Storm Method: write 50 words related to what you do, who you serve, and how you want people to feel. Then try combining words (portmanteau), borrowing foreign words, or using metaphors. Generate 100+ name ideas before narrowing down. Use a free tool like BrandForge to instantly check domain availability for each idea — this eliminates names you can\'t use and saves hours of manual research.',
  },
  {
    question: 'What makes a good business name?',
    answer: 'A good business name is (1) easy to spell and pronounce on the first try, (2) 1-3 syllables long, (3) available as a .com domain, (4) free of trademark conflicts, (5) evocative of what you do without being overly literal, and (6) not easily confused with a competitor. The best names pass the "phone test" — if you say it over the phone, the other person can spell it correctly without asking.',
  },
  {
    question: 'Should my business name describe what I do?',
    answer: 'Not necessarily. Descriptive names (like "General Motors") are clear but hard to own as trademarks and often forgettable. Suggestive names (like "Netflix") hint at what you do while being more memorable and legally protectable. Abstract names (like "Kodak") are the most ownable but require the most marketing investment to build meaning. For most businesses, suggestive is the sweet spot.',
  },
  {
    question: 'How do I know if a business name is already taken?',
    answer: 'Check three things: (1) Domain availability — search for yourname.com using a domain registrar or BrandForge\'s built-in checker. (2) Trademark conflicts — search the USPTO database at tmsearch.uspto.gov for similar names in your industry class. (3) Social media handles — search Twitter/X, Instagram, and LinkedIn. If all three are available, you\'re likely safe to proceed. When in doubt, consult a trademark attorney.',
  },
  {
    question: 'How many business name ideas should I generate before choosing?',
    answer: 'Generate at least 100 name ideas before narrowing down. Research shows that the best names tend to appear after the first 30-40 ideas, when your brain moves past obvious choices into more creative territory. Use multiple brainstorming methods (Word-Storm, Portmanteau, Metaphor, AI-assisted) to diversify your options. Then narrow to a top 10, check availability, and pick from the 2-3 that are actually available.',
  },
  {
    question: 'Can I use my own name for my business?',
    answer: 'Yes — many iconic brands are founder names (Ford, Disney, Chanel, Dell). Founder names work well for consulting, law, and personal brands. They\'re authentic and create a natural story. Drawbacks: they\'re hard to sell if you ever want to exit, and they don\'t hint at what you do. If your name is hard to spell or pronounce, consider using initials or a shortened version.',
  },
  {
    question: 'Should I use a .com domain or is another TLD okay?',
    answer: '.com is still the gold standard — it\'s what people type instinctively and what looks most credible. If your ideal .com is taken, try adding a short modifier (getyourname.com, yournameapp.com) before jumping to another TLD. If you must use an alternative, .co, .io, and .ai are widely accepted for tech startups, while .store works for e-commerce. Avoid obscure TLDs like .xyz or .biz — they look less trustworthy.',
  },
  {
    question: 'How long should a business name be?',
    answer: 'Aim for 2-3 syllables and 4-10 characters. Look at the most successful brands: Apple (5 chars), Slack (5 chars), Notion (6 chars), Stripe (6 chars), Shopify (7 chars). Shorter names are easier to remember, type, say in conversation, and fit on logos and social media profiles. If your name needs to be longer, consider a compound word (Basecamp, Figma) rather than a long single word.',
  }
]

const relatedPosts = [
  { slug: 'brand-name-generator', title: 'Brand Name Generator: How to Find the Perfect Brand Name', category: 'Naming' },
  { slug: 'business-name-generator', title: 'Business Name Generator: 300+ Name Ideas for 2026', category: 'Naming' },
  { slug: 'how-to-choose-brand-name', title: 'How to Choose a Brand Name: The Complete Decision Framework', category: 'Brand Strategy' },
  { slug: 'startup-naming-mistakes', title: '7 Naming Mistakes That Kill Startups', category: 'Naming' },
  { slug: 'free-brand-name-generator', title: 'Free Brand Name Generator: How to Name Without Spending a Dime', category: 'AI & Naming' },
  { slug: 'small-business-name-generator', title: 'Small Business Name Generator: 200+ Name Ideas for 2026', category: 'Naming' }
]

export default function HowToComeUpWithBusinessName() {
  const faqSchema = {
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
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <BlogPostSchema
        title="How to Come Up with a Business Name: 10 Proven Methods (2026 Guide)"
        description="10 proven brainstorming methods, 200+ name ideas by industry, and a free AI generator that checks domain availability instantly. Find your perfect business name today."
        url="https://brandforge.app/blog/how-to-come-up-with-business-name"
        datePublished="2026-07-17T12:00:00.000Z"
        keywords={[
          'how to come up with a business name',
          'coming up with a business name',
          'business name brainstorming',
          'how to brainstorm a business name',
          'business name ideas',
          'naming your business',
          'creative ways to name a business',
          'how to create a business name',
          'business name generator',
          'how to pick a business name'
        ]}
      />
      <HowToSchema
        name="How to Come Up with a Business Name"
        description="A proven 5-step process for coming up with a business name — from defining your brand DNA to testing with real people."
        url="/blog/how-to-come-up-with-business-name"
        totalTime="PT30M"
        estimatedCost="$0"
        steps={[
          { name: 'Define your brand DNA', text: 'Write one sentence: "We help [audience] achieve [outcome] through [method]." This becomes your naming compass. Every name candidate should align with this statement.' },
          { name: 'Generate 100+ name ideas', text: 'Use at least 3 naming methods. Don\'t filter yet — quantity creates quality. The best names often appear after idea #40, when your brain is forced past obvious choices.' },
          { name: 'Narrow to your top 10', text: 'Run each name through a quick filter: Can you spell it after hearing it once? Does it sound good out loud? Is it 1-3 syllables? Does the .com domain exist? Cut anything that fails two or more checks.' },
          { name: 'Validate availability', text: 'Check .com domain availability, USPTO trademark search, and social media handles. BrandForge checks domain and social availability automatically.' },
          { name: 'Test with real people', text: 'Say your top 3 names to 10 people. Ask them to spell it back and tell you what they think the business does. If they can spell it and guess correctly, you\'ve found your name.' },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-slate-500">
        <Link href="/" className="hover:text-brand-600 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-brand-600 transition-colors">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">How to Come Up with a Business Name</span>
      </nav>

      {/* Hero */}
      <header className="mb-12">
        <div className="mb-4 flex items-center gap-3">
          <span className="inline-flex items-center rounded-full bg-brand-100 px-3 py-1 text-xs font-medium text-brand-700">
            Naming Guide
          </span>
          <span className="text-sm text-slate-500">15 min read</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
          How to Come Up with a Business Name: 10 Proven Methods
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl">
          Staring at a blank page? You&apos;re not alone. Here are 10 brainstorming methods that
          professional naming agencies use — plus 200+ name ideas by industry and a free
          AI generator that checks domain availability instantly.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">brainstorming</span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">naming methods</span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">business name ideas</span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">name generator</span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">domain availability</span>
        </div>
      </header>

      {/* CTA Banner */}
      <div className="mb-12 rounded-2xl bg-gradient-to-r from-brand-50 to-purple-50 border border-brand-200 p-6 sm:p-8 text-center">
        <h2 className="text-xl font-bold text-slate-900 mb-2">
          Can&apos;t wait? Generate names now ↓
        </h2>
        <p className="text-slate-600 mb-4 text-sm">
          Describe your business and get AI-powered name ideas with instant domain &amp; social availability checks.
        </p>
        <a
          href="/generate"
          className="inline-flex items-center rounded-lg bg-brand-600 px-6 py-3 text-base font-semibold text-white hover:bg-brand-700 transition-colors"
        >
          Generate Business Names Free →
        </a>
      </div>

      {/* 10 Methods */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4">
          10 Proven Methods to Come Up with a Business Name
        </h2>
        <p className="text-slate-600 mb-8">
          Professional naming agencies charge $15,000–$50,000 for a name. Here are the exact methods they use,
          for free. Try at least 3 of these before you commit to a name.
        </p>
        <div className="space-y-8">
          {METHODS.map((method) => (
            <div key={method.number} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 text-2xl font-bold text-brand-600">{method.number}</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{method.title}</h3>
                  <p className="text-slate-600 mb-4">{method.description}</p>
                  <div className="rounded-xl bg-slate-50 p-4 mb-3">
                    <p className="text-sm text-slate-700">
                      <span className="font-semibold text-slate-900">Example:</span> {method.example}
                    </p>
                  </div>
                  <p className="text-sm text-brand-700 font-medium">
                    💡 Pro tip: {method.tip}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Name Ideas by Industry */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4">
          200+ Business Name Ideas by Industry
        </h2>
        <p className="text-slate-600 mb-8">
          Browse name ideas across 10 industries. Use these as starting points — combine, remix,
          and make them your own. Or generate unlimited ideas with our free AI tool.
        </p>
        <div className="space-y-6">
          {NAME_IDEAS.map((group) => (
            <div key={group.category} className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="text-lg font-bold text-slate-900">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.names.map((name) => (
                  <span
                    key={name}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700 hover:border-brand-300 hover:text-brand-700 hover:bg-brand-50 transition-colors cursor-default"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <a
            href="/generate"
            className="inline-flex items-center rounded-lg bg-brand-600 px-6 py-3 text-base font-semibold text-white hover:bg-brand-700 transition-colors"
          >
            Generate More Names Free →
          </a>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4">
          From Idea to Name: A 5-Step Process
        </h2>
        <p className="text-slate-600 mb-8">
          Having methods is great. Having a process is better. Here&apos;s the exact 5-step system
          that turns brainstorming into a final name.
        </p>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold">1</div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-1">Define your brand DNA</h3>
              <p className="text-slate-600">Write one sentence: &quot;We help [audience] achieve [outcome] through [method].&quot; This becomes your naming compass. Every name candidate should align with this statement. If it doesn&apos;t, cut it.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold">2</div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-1">Generate 100+ name ideas</h3>
              <p className="text-slate-600">Use at least 3 of the 10 methods above. Don&apos;t filter yet — quantity creates quality. The best names often appear after idea #40, when your brain is forced past obvious choices.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold">3</div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-1">Narrow to your top 10</h3>
              <p className="text-slate-600">Run each name through a quick filter: Can you spell it after hearing it once? Does it sound good out loud? Is it 1-3 syllables? Does the .com domain exist? Cut anything that fails two or more checks.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold">4</div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-1">Validate availability</h3>
              <p className="text-slate-600">Check (1) .com domain availability, (2) USPTO trademark search, (3) social media handles. BrandForge checks domain and social availability automatically. For trademarks, search <a href="https://tmsearch.uspto.gov" className="text-brand-600 hover:underline" target="_blank" rel="noopener noreferrer">tmsearch.uspto.gov</a>.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold">5</div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-1">Test with real people</h3>
              <p className="text-slate-600">Say your top 3 names to 10 people. Ask them to spell it back and tell you what they think the business does. If they can spell it and guess correctly (or close), you&apos;ve found your name. If not, go back to step 2.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4">
          6 Naming Mistakes That Kill Businesses
        </h2>
        <p className="text-slate-600 mb-6">
          Avoid these at all costs. Each one has tanked real businesses.
        </p>
        <div className="space-y-4">
          <div className="rounded-xl border border-red-200 bg-red-50 p-5">
            <h3 className="font-semibold text-red-900 mb-1">❌ Spelling it wrong on purpose</h3>
            <p className="text-sm text-red-700">&quot;Kwik&quot; instead of &quot;Quick&quot; — people will search for the correct spelling and never find you. Real brands like Lyft work because they&apos;re shortening, not misspelling. If people can&apos;t spell it, they can&apos;t find you.</p>
          </div>
          <div className="rounded-xl border border-red-200 bg-red-50 p-5">
            <h3 className="font-semibold text-red-900 mb-1">❌ Using your initials</h3>
            <p className="text-sm text-red-700">&quot;JDR Consulting&quot; — initials tell customers nothing about what you do. They also make SEO nearly impossible since you&apos;re competing with every other combination of three letters on the internet.</p>
          </div>
          <div className="rounded-xl border border-red-200 bg-red-50 p-5">
            <h3 className="font-semibold text-red-900 mb-1">❌ Adding &quot;solutions&quot; or &quot;services&quot;</h3>
            <p className="text-sm text-red-700">&quot;Acme Solutions&quot; — these are filler words that add zero meaning. Everyone provides solutions. Everyone provides services. Cut them and your name instantly becomes shorter, punchier, and more memorable.</p>
          </div>
          <div className="rounded-xl border border-red-200 bg-red-50 p-5">
            <h3 className="font-semibold text-red-900 mb-1">❌ Making it too literal</h3>
            <p className="text-sm text-red-700">&quot;Online Shoe Store&quot; — descriptive names are hard to trademark, impossible to own as a brand, and sound generic. You&apos;re not just a shoe store. You&apos;re a brand. Name yourself like one.</p>
          </div>
          <div className="rounded-xl border border-red-200 bg-red-50 p-5">
            <h3 className="font-semibold text-red-900 mb-1">❌ Picking a name you can&apos;t own</h3>
            <p className="text-sm text-red-700">If the .com is taken, the trademark is registered, and the social handles are occupied — move on. Fighting for a name you can&apos;t fully own creates confusion, legal risk, and branding headaches for years.</p>
          </div>
          <div className="rounded-xl border border-red-200 bg-red-50 p-5">
            <h3 className="font-semibold text-red-900 mb-1">❌ Inside jokes only you get</h3>
            <p className="text-sm text-red-700">Your cofounder&apos;s dorm room number, your dog&apos;s name, an obscure reference — these make great stories but terrible brand names. Customers don&apos;t know the story. They just see a random name that means nothing to them.</p>
          </div>
        </div>
      </section>

      {/* Industry Generators */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4">
          Industry-Specific Name Generators
        </h2>
        <p className="text-slate-600 mb-6">
          Already know your industry? Jump straight to a name generator tailored for your niche.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {INDUSTRY_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-xl border border-slate-200 bg-white p-3 text-center hover:border-brand-300 hover:shadow-md transition-all"
            >
              <span className="block text-sm font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">{link.name}</span>
              <span className="block text-xs text-slate-500">{link.desc}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-600 mb-8">
          Common questions about coming up with business names, answered.
        </p>
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

      {/* Related Posts */}
      <div className="mb-12 rounded-2xl bg-slate-50 p-6">
        <p className="text-sm font-semibold text-slate-900 mb-3">📖 More naming guides:</p>
        <ul className="space-y-2">
          {relatedPosts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="text-brand-600 hover:text-brand-700 text-sm">
                {post.title} →
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="rounded-2xl bg-gradient-to-br from-brand-600 to-purple-600 p-8 sm:p-10 text-center text-white">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">
          Ready to Find Your Business Name?
        </h2>
        <p className="text-brand-100 mb-6 max-w-xl mx-auto">
          Get AI-powered name ideas with instant domain and social handle availability checks. Free to start, no credit card required.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/generate" className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-brand-700 hover:bg-brand-50 transition-colors">
            Generate Business Names Free →
          </a>
          <a href="/pricing" className="inline-flex items-center rounded-lg border-2 border-white/30 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition-colors">
            View Pricing
          </a>
        </div>
      </div>

      <NewsletterCta />
    </div>
  )
}