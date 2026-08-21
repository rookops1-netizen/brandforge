/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import { BlogNewsletterSection } from '@/components/BlogNewsletterSection'
import { BlogPostSchema } from '@/components/BlogPostSchema'

export const dynamic = 'force-static'
export const metadata: Metadata = {
  title: 'Beauty Name Generator: 300+ Beauty Business Name Ideas for 2026 + Free AI Tool',
  description: '300+ beauty business name ideas across 10 categories, 7 proven naming strategies from top beauty brands, and a free AI generator that checks domain & social availability instantly.',
  keywords: [
    'beauty name generator',
    'beauty business names',
    'beauty salon names',
    'beauty brand names',
    'beauty brand name ideas',
    'beauty business name ideas',
    'how to name a beauty business',
    'beauty salon name ideas',
    'cosmetics brand names',
    'skincare brand names',
    'beauty studio names',
    'makeup brand names',
    'spa name ideas',
    'beauty company names',
    'catchy beauty names',
    'beauty parlour names',
    'unique beauty business names',
    'creative beauty names',
    'best beauty salon names',
    'beauty brand name generator',
  ],
  openGraph: {
    title: 'Beauty Name Generator: 300+ Beauty Business Name Ideas for 2026 + Free AI Tool',
    description: '300+ beauty business name ideas across 10 categories, 7 naming strategies from top beauty brands, and a free AI generator with domain & social availability checks.',
    url: 'https://brandforge.app/blog/beauty-name-generator',
    siteName: 'BrandForge',
    type: 'article',
    publishedTime: '2026-08-21T12:00:00.000Z',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Beauty Name Generator: 300+ Beauty Business Name Ideas for 2026',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beauty Name Generator: 300+ Beauty Business Name Ideas for 2026',
    description: '300+ beauty business name ideas by category, 7 naming strategies from top beauty brands, and a free AI generator that checks domain availability.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: 'https://brandforge.app/blog/beauty-name-generator',
  },
  robots: { index: true, follow: true },
}

const CATEGORIES = [
  {
    name: 'Luxury & High-End Beauty Names',
    names: ['Maison Lumière', 'Velvet Beauty', 'The Gilded Mirror', 'Opulent Glow', 'Aurelia Beauty', 'Prestige Skin', 'The Ivory Collection', 'Luxe Radiance', 'Sovereign Beauty', 'The Pearl Studio', 'Château Glow', 'Éclat Beauty', 'The Grand Aesthetic', 'Noble Beauty Co.', 'The Crown Aesthetics', 'Plush & Pearl', 'The Crystal Studio', 'Imperial Glow', 'The Diamond Skin', 'Radiance House', 'The Gilded Petal', 'Belle Époque', 'Haute Beauty', 'The Velvet Room', 'Supreme Aesthetics', 'The Sapphire Studio', 'Regal Glow', 'Maison Belle', 'The Opal Room', 'Lumina Beauty Lab'],
  },
  {
    name: 'Clean & Minimalist Beauty Names',
    names: ['GLOW', 'SKIN', 'PURE', 'LUMI', 'NOVA', 'VERA', 'ESSE', 'CLEAR', 'BARE', 'NÜDE', 'BASE', 'FRESH', 'AIRA', 'MINT', 'VOID', 'HUE', 'TRUE', 'SOFT', 'DAWN', 'SOLA', 'KIND', 'VEIL', 'CALM', 'FLEEK', 'LUXE', 'SEER', 'BLOM', 'SAGE', 'HON', 'SHEER'],
  },
  {
    name: 'Botanical & Natural Beauty Names',
    names: ['Rose & Root', 'Botanical Beauty Co.', 'The Herb Garden', 'Petal & Stem', 'Wildflower Beauty', 'The Green Glow', 'Naturale Studio', 'Sage & Bloom', 'The Daisy Chain', 'Fern & Flora', 'Rooted Beauty', 'The Lavender Room', 'Honey & Herb', 'The Botanist Beauty', 'Poppy & Petal', 'Moss & Glow', 'The Willow Studio', 'Cedar & Sage', 'The Sunflower', 'Bloom & Root', 'Herbivore Beauty', 'The Peony Room', 'Thyme & Glow', 'The Green House', 'Botanical Glow', 'The Herbalist', 'Garden Beauty Co.', 'Aloe & Bloom', 'The Cedar Studio', 'Verdant Beauty'],
  },
  {
    name: 'Glamorous & Bold Beauty Names',
    names: ['Glam Squad Studio', 'The Bold Beauty', 'Vamp & Velvet', 'Fierce Beauty Co.', 'The Dazzle Room', 'Electric Glow', 'Glamour House', 'The Sparkle Studio', 'Vivid Beauty Lab', 'Dramatic & Co.', 'The Statement Studio', 'Power & Glow', 'The Bold Face', 'Electric Beauty', 'The Flash Room', 'Fierce Glow', 'The Neon Studio', 'Glamour Project', 'The Vibe Beauty', 'Strut & Glow', 'The Dazzle Bar', 'Bold Aesthetics', 'The Glam Lab', 'Voltage Beauty', 'The Power Room', 'Iconic Glow', 'The Runway Studio', 'Fierce Aesthetics', 'The Scene Beauty', 'Vamp Studio'],
  },
  {
    name: 'Clinical & Med Spa Beauty Names',
    names: ['The Skin Clinic', 'Derma & Co.', 'The Glow Lab', 'Aesthetics Studio', 'Rejuvenate MD', 'The Skin Institute', 'Clinical Beauty Co.', 'The Renewal Room', 'Precision Skin', 'The Treatment Studio', 'Glow Medical', 'The Derm Studio', 'Rejuvenate Beauty', 'The Skin Science', 'Elite Aesthetics', 'The Radiance Lab', 'Restore Beauty', 'The Complexion Studio', 'Skin Health Co.', 'The Rejuvenation Room', 'Clarity Skin', 'The Wellness Aesthetic', 'Advanced Beauty', 'The Skin Studio MD', 'Pure Aesthetics', 'The Glow Institute', 'Vitality Skin', 'The Renew Studio', 'Pro Derm Co.', 'The Clinical Glow'],
  },
  {
    name: 'Playful & Fun Beauty Names',
    names: ['Glow Getter Studio', 'The Beauty Bar', 'Pretty & Co.', 'The Glitter Room', 'Glam & Go', 'The Happy Glow', 'BeautiFul Studio', 'The Sparkle Bar', 'Glow Up Studio', 'The Fierce Room', 'Primp & Play', 'The Dolly Studio', 'Glow Pop Beauty', 'The Twinkle Room', 'Slay Beauty Co.', 'The Glow Spot', 'Floss & Glow', 'The Beauty Bubble', 'Glam Camp', 'The Pretty Project', 'Bling Beauty', 'The Glow Den', 'Pop Beauty Studio', 'The Snatched Room', 'Glaze & Glow', 'The Fab Studio', 'Pout & Glow', 'The Glow Garage', 'Primp Studio', 'The Slay Bar'],
  },
  {
    name: 'Organic & Eco-Friendly Beauty Names',
    names: ['Clean Beauty Co.', 'The Conscious Glow', 'Earth & Glow', 'Purely Beautiful', 'The Green Studio', 'Ethical Beauty', 'The Clean Room', 'SustainaGlow', 'Root & Renewal', 'The Zero Glow', 'Green Beauty Lab', 'The Honest Studio', 'Kind Beauty Co.', 'The Natural Glow', 'EcoGlow Studio', 'The Earth Room', 'Pure & Simple', 'The Clean Aesthetic', 'Green Leaf Beauty', 'The Sustainable Glow', 'Clean Canvas Studio', 'The Botanical Room', 'Earth Friendly Beauty', 'The Pure Project', 'Conscious Glow Co.', 'The Kind Studio', 'Naturale Glow', 'The Green Glow Lab', 'Clean & Co.', 'The Ethical Aesthetic'],
  },
  {
    name: 'Wedding & Bridal Beauty Names',
    names: ['Bridal Glow Studio', 'The Veil & Glow', 'Ever After Beauty', 'The Bridal Room', 'Forever Beautiful Co.', 'The White Rose', 'Bridal Beauty Bar', 'The Blush Studio', 'I Do Beauty', 'The Bridal Aesthetic', 'Radiance Bridal', 'The Bridal Suite', 'Aisle & Glow', 'The Bridal Glow', 'Happily Ever Beauty', 'The Pearl Studio', 'Vow & Veil', 'The Bridal Pop', 'Altar Beauty', 'The Bridal Edit', 'Tulle & Glow', 'The Forever Studio', 'Bridal Bloom Co.', 'The Bride Room', 'Enchanted Beauty', 'The Bridal Canvas', 'Promise & Petal', 'The Bridal Glow Lab', 'The Wedding Studio', 'Bride & Beautiful'],
  },
  {
    name: 'Hair & Salon Beauty Names',
    names: ['The Style Studio', 'Mane & Glow', 'The Hair House', 'Strand & Co.', 'The Cut Studio', 'Locks & Beauty', 'The Crown Room', 'Tress Studio', 'The Hair Lab', 'Blow & Glow', 'The Strand Bar', 'Root & Style', 'The Mane Room', 'Fringe & Co.', 'The Hair Project', 'Shear Beauty', 'The Style Bar', 'Curl & Co.', 'The Glow Salon', 'Silk & Strand', 'The Polish Studio', 'Crown Beauty Co.', 'The Texture Room', 'Braid & Glow', 'The Hair Studio', 'Lock & Key Beauty', 'The Style Lab', 'Wave & Co.', 'The Mane Project', 'Strand Beauty Bar'],
  },
  {
    name: 'Skincare-First Beauty Names',
    names: ['Glow Lab Studio', 'The Skin Room', 'Dew & Glow', 'Complexion Co.', 'The Barrier Beauty', 'Clarity Skin Studio', 'The Glow Project', 'Serum & Co.', 'The Skin Edit', 'Radiance Room', 'The Hydration Studio', 'Clear & Co.', 'The Skin Method', 'Dewdrop Beauty', 'The Glow Routine', 'Pore & Co.', 'The Skin Canvas', 'Fresh Face Studio', 'The Glow Bar', 'Luminous Skin Co.', 'The Skin Recipe', 'Calm & Glow', 'The Complexion Lab', 'Balanced Beauty', 'The Skin Studio', 'Pure Glow Co.', 'The Face Edit', 'Youthful Beauty Lab', 'The Skin Project', 'Dew Studio'],
  },
]

const NAMING_STRATEGIES = [
  {
    name: 'Beauty & Aesthetic Vocabulary',
    description: 'Names that use beauty, glow, skin, and aesthetic language to create instant category recognition.',
    examples: 'Glow Lab, The Skin Room, Radiance Studio, Luxe Beauty',
    why: 'Beauty businesses thrive on clarity. "Glow Lab" tells customers exactly what you do — you help them glow. "The Skin Room" is warm and inviting. "Radiance Studio" sounds professional and results-focused. These names work because they use the vocabulary your customers are already searching for — "glow," "skin," "beauty," "aesthetic" — making you discoverable and memorable at the same time.',
  },
  {
    name: 'Evocative & Sensory Names',
    description: 'Names that capture how beauty feels — luminous, soft, radiant, renewed.',
    examples: 'Velvet Beauty, Dew & Glow, Lumière, The Soft Room',
    why: 'Beauty is a sensory experience. Customers don\'t buy products — they buy how those products make them feel. "Velvet Beauty" evokes smoothness and luxury. "Dew & Glow" captures that fresh, hydrated, just-stepped-out feeling. "Lumière" (French for "light") adds elegance and aspiration. These names create desire before a customer even walks through the door.',
  },
  {
    name: 'Personal & Eponymous Names',
    description: 'Names built around a founder\'s name — creating trust, authenticity, and personal brand.',
    examples: 'Amara Beauty, Sofia\'s Studio, The Rachel Room, Emma Aesthetics',
    why: 'The beauty industry was built on personal brands — Estée Lauder, Bobbi Brown, Laura Mercier, Charlotte Tilbury. A personal name creates an instant connection. "Amara Beauty" feels like a real person stands behind it. "Sofia\'s Studio" sounds intimate and trustworthy. Personal names are especially powerful for beauty because customers want a relationship with the person making them look and feel beautiful.',
  },
  {
    name: 'Location & Neighborhood-Based Names',
    description: 'Names that anchor your beauty business to a place, building local identity and search visibility.',
    examples: 'Brooklyn Glow Studio, The Midtown Aesthetic, Portland Beauty Co., The Village Skin Room',
    why: 'Most beauty customers search locally — "beauty salon near me," "med spa in [city]," "facials [neighborhood]." "Brooklyn Glow Studio" tells Google exactly where you are and what you do. "The Midtown Aesthetic" builds local cachet. Location-based names dominate local search results and create a loyal neighborhood following that chain salons can\'t replicate.',
  },
  {
    name: 'French & European-Inspired Names',
    description: 'Names that borrow from French, Italian, and other European languages to signal luxury and sophistication.',
    examples: 'Maison Lumière, Beauté Studio, Belle Fleur, Éclat Aesthetics',
    why: 'The beauty industry has a long love affair with French and European branding — it signals luxury, sophistication, and that effortless chic customers crave. "Maison Lumière" sounds like a Parisian beauty house. "Beauté Studio" is instantly recognizable as a premium beauty destination. "Éclat" (French for "brilliance/radiance") is short, memorable, and aspirational. These names work because they tap into the "French beauty" mythos that drives billions in global beauty sales.',
  },
  {
    name: 'Lab, Studio & Room Names',
    description: 'Names that use "Lab," "Studio," "Room," or "Co." to signal expertise, modernity, and specialization.',
    examples: 'Glow Lab, The Skin Room, Radiance Studio, Beauty Co.',
    why: '"Lab" suggests science-backed, results-driven beauty — perfect for med spas, skincare clinics, and aesthetic practices. "Studio" feels creative and personalized — great for hair, makeup, and lash artists. "Room" is intimate and exclusive — ideal for private beauty suites. "Co." is professional and established. These suffixes add credibility and help customers understand your specialty before they even visit.',
  },
  {
    name: 'Minimalist One-Word Names',
    description: 'Short, clean, one-word names that look stunning on packaging, signage, and Instagram.',
    examples: 'GLOW, SKIN, LUMI, VERD, AURA, ESSE, NOVA, RENE, BLOM, PURE',
    why: 'The biggest beauty brands in the world — Glossier, Fenty, Ilia, Herbivore, Versed — all use short, one-word names. "GLOW" is immediately recognizable and aspirational. "AURA" sounds mystical and premium. "PURE" communicates clean beauty. One-word names look incredible on product packaging, Instagram grids, and minimalist salon signage. They\'re the naming strategy for beauty brands that want to feel modern, confident, and design-forward.',
  },
]

const NAMING_MISTAKES = [
  {
    title: 'Choosing a name that\'s too generic',
    description: '"The Beauty Salon" or "Glow Beauty" tells customers nothing about your specialty, your style, or what makes you different. There are over 1.2 million beauty businesses in the US — a generic name makes you invisible. "The Skin Room" or "Glow Lab" says something specific about your brand promise.',
  },
  {
    title: 'Ignoring the Instagram test',
    description: 'Instagram and TikTok are the #1 discovery platforms for beauty businesses. Your handle (@yourbeautybrand) is where customers will find you, watch your content, and book appointments. If the handle is taken, you\'ll struggle to build a following. Check handle availability before committing to a name — not after.',
  },
  {
    title: 'Not checking domain availability first',
    description: 'Your beauty business needs a website for booking, reviews, and SEO. If the .com domain for your ideal name is taken, you\'ll either pay premium prices or settle for a confusing URL. BrandForge checks domain availability in real-time so you can pick a name with an available .com from the start.',
  },
  {
    title: 'Picking a name that limits your services',
    description: '"Lash & Brow Only" or "Just Facials" locks you into one service type and scares away customers who want more. The best beauty names grow with your business — they let you add services, products, and locations. "Glow Lab" works for facials, lashes, brows, injectables, and skincare products. "Just Lashes" does not.',
  },
  {
    title: 'Forgetting the Google Maps test',
    description: 'People searching "beauty salon near me" or "med spa near me" on Google Maps are your highest-intent customers. If your name isn\'t obviously beauty-related, customers will skip you for competitors with clearer names. Your name should signal what you do in a quick glance on a map pin.',
  },
  {
    title: 'Skipping trademark research',
    description: 'The beauty industry has fierce trademark competition. Before committing to a name, search the USPTO database for existing registrations in Class 3 (cosmetics) and Class 44 (beauty services). A cease-and-desist after you\'ve invested in branding, signage, and marketing materials is devastating. Check first — it takes 30 minutes.',
  },
  {
    title: 'Copying trending beauty names',
    description: 'If every new beauty business uses "Glow," "Skin," or "Aesthetic" in their name, you\'re making yourself invisible. Look at your top 5 local competitors on Google Maps and pick a name that stands out. Differentiation is everything in the crowded beauty market — especially when 70% of beauty businesses close within 5 years.',
  },
]

const FAQ_ITEMS = [
  {
    question: 'How does the beauty name generator work?',
    answer: 'Describe your beauty business — your specialty (skincare, lashes, med spa, hair, nails, makeup), your vibe (luxury, clean, clinical, playful), and your target clients. BrandForge\'s AI generates custom name suggestions paired with complete brand kits including logo concepts, color palettes, taglines, and domain & social availability checks.',
  },
  {
    question: 'Is the beauty name generator free?',
    answer: 'Yes! You can generate beauty business name ideas for free — 5 suggestions per search, unlimited searches, no credit card required. Unlock the full brand kit (logo, colors, tagline, typography, domain & social checks) for $9 per brand kit.',
  },
  {
    question: 'What makes a good beauty business name?',
    answer: 'A great beauty business name is memorable, easy to spell and pronounce, looks good on Instagram and signage, appears in local search results, and signals your beauty specialty. The best names — Glossier, Glow Lab, The Skin Room, Éclat — are distinctive, short, and immediately signal beauty and quality.',
  },
  {
    question: 'Should I use "Beauty" in my business name?',
    answer: 'It depends. Including "Beauty" or "Studio" (like "Glow Beauty Studio") makes your business instantly clear — great for local search and walk-in traffic. But it can feel limiting if you want to expand into products, education, or consulting. Modern beauty brands often skip "Beauty" — "Glow Lab," "LUMI," "Éclat" — and let their visual brand and content speak for them.',
  },
  {
    question: 'Can I use these names for my beauty business?',
    answer: 'Absolutely. All names you generate are yours to use commercially — for business registration, signage, product labels, website, social media, and marketing materials. There are no licensing restrictions. Just make sure to check trademark availability for your final choice.',
  },
  {
    question: 'How do I check if a beauty business name is already taken?',
    answer: 'Four checks are essential: (1) Search your state\'s business registry to make sure the name isn\'t already registered. (2) Search the USPTO trademark database for existing registrations in Class 3 (cosmetics) and Class 44 (beauty services). (3) Search Google Maps in your area — even if a name isn\'t trademarked, having 3 other beauty businesses with similar names nearby will confuse customers. (4) Check Instagram, TikTok, and Google handle availability — these are your primary discovery channels.',
  },
  {
    question: 'Should my beauty business name match my domain?',
    answer: 'Ideally, yes. Your beauty business name and domain should be the same (or very close) so customers can find you online. If the .com is taken, consider .beauty, .studio, .co, or .skin as alternatives — they\'re increasingly popular in the beauty space. BrandForge checks domain availability in real-time so you can pick a name with an available domain from the start.',
  },
  {
    question: 'What are the biggest beauty naming trends in 2026?',
    answer: 'The biggest trends are: (1) Minimalist one-word names (GLOW, SKIN, LUMI) — short, Instagram-perfect, and instantly recognizable. (2) Clean beauty vocabulary (Glow Lab, Pure & Co., The Clean Room) — signals the booming clean beauty movement. (3) French and European names (Maison Lumière, Éclat, Beauté Studio) — aspirational and luxury-positioned. (4) Lab/Studio/Room suffixes (Glow Lab, The Skin Room, Radiance Studio) — expertise signals that build trust. The best names combine trend awareness with authenticity.',
  },
]

const INDUSTRY_LINKS = [
  { name: '💄 Beauty Generator', href: '/beauty-name-generator', desc: 'AI beauty name generator' },
  { name: '💇 Salon Generator', href: '/salon-name-generator', desc: 'Salon name ideas' },
  { name: '💅 Nail Salon Generator', href: '/blog/nail-salon-name-generator', desc: 'Nail salon name ideas' },
  { name: '👗 Fashion Generator', href: '/fashion-name-generator', desc: 'Fashion & boutique names' },
  { name: '🌸 Florist Generator', href: '/florist-name-generator', desc: 'Florist & flower shop names' },
  { name: '💍 Wedding Generator', href: '/wedding-name-generator', desc: 'Wedding business names' },
  { name: '🧘 Yoga Generator', href: '/yoga-name-generator', desc: 'Yoga studio name ideas' },
  { name: '📸 Photography Generator', href: '/photography-name-generator', desc: 'Photography brand names' },
  { name: '🏋️ Fitness Generator', href: '/fitness-brand-name-generator', desc: 'Fitness brand name ideas' },
  { name: '🎨 Craft Generator', href: '/craft-name-generator', desc: 'Handmade & artisan names' },
]

export default function BeautyNameGeneratorBlog() {
  return (
    <>
      <BlogPostSchema
        title="Beauty Name Generator: 300+ Beauty Business Name Ideas for 2026 + Free AI Tool"
        description="300+ beauty business name ideas across 10 categories, 7 proven naming strategies from top beauty brands, and a free AI generator that checks domain & social availability."
        url="https://brandforge.app/blog/beauty-name-generator"
        datePublished="2026-08-21"
      />
      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-12">
          <div className="mb-4">
            <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
              Beauty Naming Guide
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Beauty Name Generator: 300+ Beauty Business Name Ideas for 2026
          </h1>
          <p className="text-lg text-slate-600 mb-6">
            300+ beauty business name ideas across 10 categories, 7 naming strategies used by the world's most successful beauty brands, and a free AI generator that checks domain & social availability instantly.
          </p>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <time dateTime="2026-08-21">August 21, 2026</time>
            <span>·</span>
            <span>16 min read</span>
          </div>
        </header>

        {/* CTA Banner */}
        <div className="mb-12 rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 border border-brand-200 p-6 sm:p-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
            Generate Your Beauty Business Name Now
          </h2>
          <p className="text-slate-600 mb-6">
            Describe your beauty business concept. Get AI-powered name suggestions with logo concepts, color palettes, taglines, and domain availability — free to start.
          </p>
          <a
            href="/generate"
            className="btn-primary inline-flex items-center gap-2 text-base px-8 py-3"
          >
            Generate Beauty Names
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        {/* Categories */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">
            300+ Beauty Business Name Ideas by Category
          </h2>
          <p className="text-slate-600 mb-8">
            Browse beauty business name ideas organized by type — from luxury beauty brands and clean minimalist names to med spa aesthetics, playful beauty bars, and skincare-first studios. Each category has 30 names designed for that specific beauty concept.
          </p>

          <div className="space-y-8">
            {CATEGORIES.map((category) => (
              <div key={category.name}>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.names.map((name) => (
                    <span
                      key={name}
                      className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 transition-colors cursor-default"
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
              Generate Custom Names for Your Beauty Business
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </section>

        {/* Naming Strategies */}
        <section id="strategies" className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">
            7 Naming Strategies Top Beauty Brands Use
          </h2>
          <p className="text-slate-600 mb-8">
            The best beauty names aren't random — they follow proven naming patterns. Here are 7 strategies used by successful beauty brands, salons, med spas, and skincare companies.
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
            How to Name Your Beauty Business in 5 Steps
          </h2>
          <p className="text-slate-600 mb-8">
            A proven process for naming your beauty business — from concept to grand opening.
          </p>

          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Define your beauty concept</h3>
                  <p className="mt-2 text-slate-600">Before you name anything, get specific about what kind of beauty business you're building. Med spa? Lash studio? Skincare line? Hair salon? Nail bar? Full-service beauty lounge? The concept shapes your name entirely. "The Skin Room" works for a clinical skincare practice. "Glow Getter Studio" works for a fun, social lash and brow bar. "Maison Lumière" works for a luxury beauty house. Write down your concept, your ideal client, and the feeling you want to deliver.</p>
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
                  <p className="mt-2 text-slate-600">Use BrandForge's beauty name generator above to create a broad list. Try different angles — luxury names, clean names, clinical names, playful names, personal names, location names. Don't filter yet. The goal is volume. Mix in personal name options (your name + "Beauty," "Studio," "Aesthetics") and concept-specific options. You'll narrow down in the next steps.</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Run the Instagram & TikTok Test</h3>
                  <p className="mt-2 text-slate-600">For beauty businesses, Instagram and TikTok are your #1 discovery and booking channels. Write your top 10 names as handles (@yourbeautybrand). Which ones are available? Which ones look good in a bio? Which ones would make someone tap "Book Now"? The Instagram Test eliminates names that are taken, too long, or don't look professional on a social profile. A great beauty name should look stunning as an @handle — because that's where your future clients will find you.</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-white font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Check domain, social handles, and trademark availability</h3>
                  <p className="mt-2 text-slate-600">Four checks, all critical for beauty businesses: (1) Is the .com domain available? Check with BrandForge's domain checker. Also check .beauty, .studio, and .co as strong alternatives. (2) Check Instagram, TikTok, and Google Business for handle availability — these are your primary discovery and booking channels. (3) Search Google Maps in your area — are there already 3 beauty businesses with similar names? If yes, pick something more distinctive. (4) Search the USPTO database for trademark conflicts in Class 3 (cosmetics) and Class 44 (beauty services).</p>
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
                  <p className="mt-2 text-slate-600">Beauty businesses thrive on word of mouth and referrals. Would someone say "You have to check out Glow Lab — their facials are incredible" or "You have to check out that new beauty place on Main Street"? Which one is easier to remember, easier to find on Google, easier to recommend to a friend getting married? The best beauty names are names people remember and can recommend without spelling them out.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Naming Mistakes */}
        <section id="mistakes" className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">
            7 Naming Mistakes That Kill Beauty Businesses
          </h2>
          <p className="text-slate-600 mb-8">
            Avoid these common pitfalls that make beauty businesses harder to find, remember, and recommend.
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
            More Beauty & Wellness Name Generators
          </h2>
          <p className="text-slate-600 mb-6">
            Explore name generators for beauty-adjacent and wellness businesses.
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
            Ready to Name Your Beauty Business?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Describe your beauty business concept. Get names with logo concepts, color palettes, taglines, and domain checks. Free to start, $9 per brand kit you love.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-semibold text-slate-900 hover:bg-slate-100 transition-colors"
            >
              Generate Beauty Names Free
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-8 py-3 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              View Pricing
            </a>
          </div>
        </section>

        {/* Related Blog Posts */}
        <section className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-6">
            Continue Reading
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/blog/brand-color-psychology" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Brand Color Psychology</h3>
              <p className="mt-1 text-sm text-slate-500">What your brand colors say about your beauty business — and which colors drive bookings.</p>
            </Link>
            <Link href="/blog/how-to-choose-business-name" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">How to Choose a Business Name</h3>
              <p className="mt-1 text-sm text-slate-500">The complete guide to picking a name that sticks, ranks, and scales with your business.</p>
            </Link>
            <Link href="/blog/creative-brand-names" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Creative Brand Names</h3>
              <p className="mt-1 text-sm text-slate-500">60+ real brand name examples and the naming patterns behind them.</p>
            </Link>
            <Link href="/blog/brand-name-generator" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Brand Name Generator</h3>
              <p className="mt-1 text-sm text-slate-500">7 naming styles behind iconic brands, plus a free AI name generator.</p>
            </Link>
            <Link href="/blog/catchy-business-names" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Catchy Business Names</h3>
              <p className="mt-1 text-sm text-slate-500">150+ catchy name ideas and the 5 principles that make names stick.</p>
            </Link>
            <Link href="/blog/salon-brand-name-generator" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Salon Name Generator</h3>
              <p className="mt-1 text-sm text-slate-500">300+ salon name ideas across 10 categories for hair, nail, and beauty salons.</p>
            </Link>
          </div>
        </section>

        <BlogNewsletterSection />
      </article>
    </>
  )
}