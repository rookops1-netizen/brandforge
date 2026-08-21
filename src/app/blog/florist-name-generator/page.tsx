/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import { BlogNewsletterSection } from '@/components/BlogNewsletterSection'
import { BlogPostSchema } from '@/components/BlogPostSchema'
import { HowToSchema } from '@/components/HowToSchema'

export const dynamic = 'force-static'
export const metadata: Metadata = {
  title: 'Florist Name Generator: 300+ Flower Shop Name Ideas for 2026 + Free AI Tool',
  description: '300+ florist and flower shop name ideas across 10 categories, 7 proven naming strategies from top floral brands, and a free AI generator that checks domain & social availability instantly.',
  keywords: [
    'florist name generator',
    'flower shop names',
    'florist business names',
    'floral business names',
    'florist name ideas',
    'flower shop name ideas',
    'floral design names',
    'flower business names',
    'how to name a flower shop',
    'florist naming guide',
    'flower boutique names',
    'flower studio names',
    'creative florist names',
    'unique flower shop names',
    'catchy florist names',
    'best florist names',
    'floral shop names',
    'flower shop name generator',
    'florist business name ideas',
    'floral company names',
  ],
  openGraph: {
    title: 'Florist Name Generator: 300+ Flower Shop Name Ideas for 2026 + Free AI Tool',
    description: '300+ florist and flower shop name ideas across 10 categories, 7 naming strategies from top floral brands, and a free AI generator with domain & social availability checks.',
    url: 'https://brandforge.app/blog/florist-name-generator',
    siteName: 'BrandForge',
    type: 'article',
    publishedTime: '2026-08-19T12:00:00.000Z',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Florist Name Generator: 300+ Flower Shop Name Ideas for 2026',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Florist Name Generator: 300+ Flower Shop Name Ideas for 2026',
    description: '300+ florist name ideas by category, 7 naming strategies from top floral brands, and a free AI generator that checks domain availability.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: 'https://brandforge.app/blog/florist-name-generator',
  },
  robots: { index: true, follow: true },
}

const CATEGORIES = [
  {
    name: 'Elegant & Luxury Florist Names',
    names: ['Bloom & Orchid', 'The Gilded Stem', 'Fleur de Vie', 'Velvet Petal', 'Maison Flora', 'The Ivory Bouquet', 'Belle Fleur', 'Opulent Bloom', 'The Grand Stem', 'Luxe Petals', 'Serenity Florals', 'La Fleuriste', 'The Crown Bouquet', 'Élan Florals', 'Prestige Petals', 'The Sterling Stem', 'Rare Bloom', 'Château Fleur', 'The Emerald Petal', 'Noble Stem', 'Haute Fleur', 'The Velvet Rose', 'Floral Atelier', 'The High Garden', 'Celeste Flowers', 'The Marble Stem', 'Regal Bloom', 'Bouquet Royale', 'The Silk Petal', 'Eclat Florals'],
  },
  {
    name: 'Garden & Botanical Florist Names',
    names: ['Wildflower & Co.', 'The Garden Shed', 'Botanica', 'Fern & Petal', 'Meadow & Stem', 'The Greenhouse', 'Bloom & Bramble', 'Gardenia House', 'The Hidden Garden', 'Petals & Thorns', 'The Botanical', 'Field & Flower', 'The Wild Garden', 'Foliage & Co.', 'The Garden Path', 'Bloom & Vine', 'Greenhouse Florals', 'The Rose Garden', 'Woodland Bloom', 'The Garden Table', 'Naturescape', 'The Botanical Room', 'Wildflower House', 'The Rooted Bloom', 'Fernwood Florals', 'The Garden Party', 'Petals & Sage', 'The Golden Garden', 'Sage & Bloom', 'The Natural Garden'],
  },
  {
    name: 'Romantic & Wedding Florist Names',
    names: ['Love & Bloom', 'The Bridal Bloom', 'Romance in Bloom', 'The Veil & Vine', 'Everlasting Bouquets', 'Til Death Do Us Part Florals', 'Cupid & Co.', 'The Blushing Petal', 'Amour Florals', 'The Bridal Bouquet', 'Romantic Stems', 'The Love Garden', 'Nuptials & Petals', 'True Bloom', 'The Forever Flower', 'Cherished & Co.', 'The Honeysuckle', 'Blissful Bloom', 'Eternal Flowers', 'The Bridal Path', 'Tender & Bloom', 'The Confetti Bloom', 'The Serenade Stem', 'Amor & Fleur', 'The White Rose', 'Promise & Petal', 'The Rose Arc', 'Love Lane Florals', 'The Silver Bulb', 'Romance & Rose'],
  },
  {
    name: 'Modern & Minimalist Florist Names',
    names: ['STEM', 'BLOOM', 'FLO', 'PETAL', 'VINE', 'FLORA', 'STUDIO', 'BRANCH', 'LEAF', 'SPROUT', 'PETALS', 'ROOT', 'STEM & CO.', 'BLOSSOM', 'FRESH', 'BOTANY', 'SPRIG', 'BUD', 'GREENS', 'BLOOM ROOM', 'PETAL', 'GARDEN', 'DAISY', 'FOLIA', 'STEMS', 'BOUQUET', 'FERN', 'TULIP', 'ORCHID', 'BLUSH'],
  },
  {
    name: 'Charming & Cottage-Core Florist Names',
    names: ['The Bloom Barn', 'Sunflower & Sage', 'The Cottage Bloom', 'Sweet Pea Flowers', 'The Country Stem', 'The Bluebird Bouquet', 'Wildflower Cottage', 'The Thistle & Berry', 'The Rustic Petal', 'Meadow & Moss', 'The Garden Cottage', 'Poppy Cottage', 'The Farmer&apos;s Bouquet', 'Honeysuckle Cottage', 'The Daisy Patch', 'The Morning Bloom', 'Rose Cottage Florals', 'The Willow & Wren', 'The Secret Garden', 'Bloom & Buttercup', 'The Floral Cottage', 'The Meadow & Thistle', 'The Country Daisy', 'Petals & Pies', 'The Sunny Petal', 'Wild Rose Cottage', 'The Simple Stem', 'The Backyard Bloom', 'Lavender Cottage', 'The Field & Bloom'],
  },
  {
    name: 'Modern & Contemporary Florist Names',
    names: ['Bloom Works', 'The Petal Lab', 'Botanica Moderna', 'The Stem Studio', 'Floral Architecture', 'The Press & Bloom', 'Mint & Stem', 'Bold Bloom', 'The Curated Bouquet', 'Palette & Petal', 'The Modern Garden', 'Foliage Studio', 'The Design Florist', 'Studio Stem', 'The Vertical Garden', 'NEO Florals', 'The Edit Bloom', 'Modern Floral Co.', 'The Raw & Stem', 'Blush & Bloom Co.', 'The Clean Stem', 'Statement Florals', 'The Minimal Bouquet', 'The Accent', 'Crisp & Stem', 'The Pop Bouquet', 'Fresh Cut Studio', 'The Contemporary Stem', 'Line & Bloom', 'The Object Florist'],
  },
  {
    name: 'Eco-Friendly & Sustainable Florists',
    names: ['The Conscious Bloom', 'Rooted & Green', 'The Clean Stem', 'SustainaBloom', 'Greenhouse & Co.', 'The Ethical Petal', 'The Carbon Bloom', 'Root & Renewal', 'The Green Thumb', 'The Local Stem', 'The Zero Waste Bloom', 'Farm & Flower', 'The Reuse & Bloom', 'The Earth Stem', 'The Organic Petal', 'The Farm Stand & Bloom', 'The Biodegradable', 'The Planet & Petal', 'Green Stem Co.', 'The Earth-First Florist', 'The Pure Bloom', 'Bloom Responsibly', 'The Nature-Stem', 'The Green & Grown', 'EcoBloom', 'The Sustainability Stem', 'The Whole Flower', 'The Local Bloom', 'The Grow & Bloom', 'The Waste Not Florals'],
  },
  {
    name: 'Urban & Modern Lifestyle Florists',
    names: ['The City Stem', 'Metro Blooms', 'The Alley & Bloom', 'The Skyscraper Stem', 'Urban Botanic', 'The Block & Bloom', 'The Rooftop Garden', 'Cafe Florals', 'The Corner Bloom', 'The Metro Bouquet', 'Downtown Petals', 'The Town & Stem', 'The Hub & Bloom', 'The District Florist', 'The Block', 'The Platform', 'The Metro Bloom', 'The Plaza & Stem', 'The Midtown Bloom', 'The Urban Petal', 'The City Garden', 'The Market & Bloom', 'The Corner Florist', 'Street & Stem', 'The Walking Bloom', 'The Town House', 'The Street Bloom', 'The High Rise', 'The Metro Garden', 'The Crossing Bloom'],
  },
  {
    name: 'Classic & Traditional Florist Names',
    names: ['Petals & Co.', 'The Floral House', 'The Rose Shop', 'Bloom & Berry', 'The Lily Garden', 'The Tulip House', 'Blossom & Co.', 'The Flower Market', 'The Florists Room', 'The Garden & Sons', 'The Florist Society', 'The Evergreen', 'The Stem & Co.', 'The House of Bloom', 'The Traditional Bouquet', 'The Greenery', 'Bloom & Sons', 'The Classic Floral', 'The Wild Card', 'The Vintage Bloom', 'The Heritage Bouquet', 'The Heirloom', 'The Old Garden', 'The Timeless Stem', 'The Long Stem', 'The Parlor & Bloom', 'The Boutique & Co.', 'The Velvet Bloom', 'The Classic Rose', 'The Timeless Bloom'],
  },
  {
    name: 'Online & Delivery Florists',
    names: ['Send Bloom', 'The Click & Flower', 'Blooms in the Box', 'The Doorstep Bouquet', 'The 24/7 Bloom', 'Instant Bouquet', 'The App & Bloom', 'The Courier Stem', 'The Express Bloom', 'The Fast Flower', 'Online Bloom', 'The Virtual Bouquet', 'The Digital Petal', 'The Delivered Bloom', 'The Signature Bouquet', 'The Drop & Bloom', 'The Mail Bloom', 'The Snail Stem', 'The Warehouse Bloom', 'The Marketplace Bloom', 'The Custom Stem', 'The Order & Bloom', 'The Dash & Bloom', 'The Text Bouquet', 'The Quick Bloom', 'The Worldwide Bloom', 'The Global Petal', 'The Next-Day Stem', 'The Same-Day Bloom', 'The Instant Bouquet'],
  },
]

const NAMING_STRATEGIES = [
  {
    name: 'Floral & Botanical-Inspired',
    description: 'Names that use flower, plant, and botanical language to create instant recognition and connection.',
    examples: 'Bloom, Petal, Fern & Petal, Wildflower Garden, The Greenhouse',
    why: 'Flowers are the product, so using floral vocabulary is the most direct path to brand clarity. "Bloom" is the most popular suffix in the florist industry — it immediately signals what you do. "Fern & Petal" adds texture and elegance. "The Greenhouse" tells customers exactly what you are before they even see your storefront. Floral names work because they create instant category recognition — nobody wonders what you sell.',
  },
  {
    name: 'Emotive & Experience-Based',
    description: 'Names that capture the feeling of receiving or giving flowers — love, joy, celebration.',
    examples: 'Love & Bloom, Blissful Bloom, The Happy Petal, Cherished & Co.',
    why: 'Flowers are fundamentally emotional products. People buy them to celebrate, apologize, love, mourn, and cheer. Names like "Love & Bloom" and "Blissful Bloom" attach your brand to the most powerful emotions behind buying flowers. "The Happy Petal" makes people smile. These names create an emotional connection with customers before they even step through the door.',
  },
  {
    name: 'Personal & Eponymous',
    description: 'Names built around a person\'s name — the founder, a loved one, or a family name.',
    examples: 'Amelia\'s Bloom, Rosie\'s Flowers, The Petunia, Sarah\'s Garden',
    why: 'Florists are personal businesses. Many of the most beloved local flower shops are named after their founders — "Rosie\'s Flowers" or "Amelia\'s Bloom" feel authentic and personal. These names build trust because customers feel they\'re supporting a real person. For wedding florists especially, a personal name builds a connection — couples often pick their florist based on personality, and a personal name reinforces that.',
  },
  {
    name: 'Location & Neighborhood-Based',
    description: 'Names that anchor your florist to a place, building local identity and search visibility.',
    examples: 'The Portland Petal, Main Street Florist, Brooklyn Blooms, The Village Garden',
    why: 'Florists are hyper-local businesses. Most orders come from within a 10-mile radius — weddings, funerals, events, and celebrations. "Portland Petal" or "Brooklyn Blooms" tells customers exactly where you are and dominates local search. Plus location-based names build neighborhood loyalty. "The Village Garden" makes it feel like a local institution.',
  },
  {
    name: 'Modern & Minimalist',
    description: 'Short, clean, one-word names that look stunning on signage, cards, and Instagram.',
    examples: 'STEM, FLORA, BLOOM, VINE, PETAL, SPROUT',
    why: 'The floral industry has been modernized. Design-forward florists in New York, LA, and London use clean, one-word names. "FLORA" is simple and classy. "STEM" is edgy and modern. These names look amazing in an Instagram grid, on a business card, and on a website. They appeal to a design-savvy clientele that pays premium prices for modern arrangements.',
  },
  {
    name: 'Playful & Personality-Driven',
    description: 'Fun, clever names that stand out and get people talking.',
    examples: 'Petal & Puns, F.U.B.A.R. Flowers, The Bloomin Onion, Flower Power',
    why: 'Florists have permission to be fun. "The Bloomin\' Onion" is memorable and makes people smile. "Flower Power" brings instant nostalgia. "Petal Pusher" is playful and catchy. Playful names work especially well for independent florists that want to stand out from corporate competitors like 1-800-Flowers. They create word-of-mouth — people share clever names with friends.',
  },
  {
    name: 'Personal Name + Florist/Flowers',
    description: 'Pairing your name with "Florist", "Flowers", "Bloom", or "Petal" for a clear, professional, branded identity.',
    examples: 'Jasmine\'s Florist, The Bloom & Co., Rose & Stem, Sarah\'s Garden',
    why: 'This is the most direct and professional naming strategy. "Jasmine\'s Florist" tells customers exactly what you do and who you are. It\'s perfect for building a family-style business that customers trust. "Rose & Flowers" adds the poetic "Rose" while staying clear. "The Bloom & Co." feels boutique and professional. This strategy builds trust quickly — customers know exactly what they\'re getting.',
  },
]

const NAMING_MISTAKES = [
  {
    title: 'Choosing a name that\'s too generic',
    description: '"Flowers R Us" or "The Flower Shop" tells customers nothing about your floral style, your vibe, or what makes you different. There are tens of thousands of florists in the US — a generic name makes you invisible. "The Garden & Bloom" or "Bloom & Vine" says something specific about your brand.',
  },
  {
    title: 'Forgetting the "search test"',
    description: 'Flower orders happen fast. Most brides and event planners Google "florist near me" or "wedding florist in [city]". Your name needs to appear in search results for those terms. A clever-but-complicated name like "Fleur de Fleur" might be elegant, but if customers can\'t spell it to search for it, they can\'t find you. Test: if someone asks "How do you spell that?" — it\'s too complicated.',
  },
  {
    title: 'Not checking Instagram handle availability',
    description: 'Instagram is the #1 marketing platform for florists. Your handle (@yourflorist) is where customers will find you, DM you, and follow your work. If the handle for your ideal name is taken, you\'ll struggle to grow an engaged following. Check handle availability before committing to a name — not after.',
  },
  {
    title: 'Choosing a name that limits your scope',
    description: '"Wedding Flowers Only" or "Funeral Florals" locks you into one event type and scares away other customers. The best florist names grow with your business — they let you do weddings, funerals, events, corporate arrangements, and retail. "Bloom & Vine" works for everything. "The Wedding Florist" does not.',
  },
  {
    title: 'Ignoring the Google Maps test',
    description: 'People searching "florist near me" on Google Maps are your highest-intent customers. If your name isn\'t obviously florist-related, customers will skip you and go to competitors with clearer names. Your name should signal what you do in a quick glance on a map pin.',
  },
  {
    title: 'Skipping trademark research',
    description: 'The floral industry has aggressive trademark competition. Before committing to a name, search the USPTO database for existing registrations in Class 35 (retail/wholesale services) or Class 3 (floral products). A cease-and-desist after you\'ve printed cards, invested in signage, and built a website is expensive and disheartening. Check first — it takes 30 minutes.',
  },
  {
    title: 'Copying the local competition',
    description: 'If every florist in your city uses "Bloom" or "Petal" in their name, you\'re making yourself invisible. Look at your top 5 local competitors on Google Maps and pick a name that stands out. Differentiation is everything in a crowded floral market.',
  },
]

const FAQ_ITEMS = [
  {
    question: 'How does the florist name generator work?',
    answer: 'Describe your flower business — your specialty (weddings, events, retail bouquets, corporate), your style (elegant, modern, garden, luxury), and your target customers. BrandForge\'s AI generates custom name suggestions paired with complete brand kits including logo concepts, color palettes, taglines, and domain/social availability checks.',
  },
  {
    question: 'Is the florist name generator free?',
    answer: 'Yes! You can generate florist name ideas for free — 5 suggestions per search, unlimited searches, no credit card required. Unlock the full brand kit (logo, colors, tagline, typography, domain & social checks) for $9 per brand kit.',
  },
  {
    question: 'What makes a good florist name?',
    answer: 'A great florist name is memorable, easy to spell and pronounce, appears in search results for "florist near me", works as a social handle, and signals your floral style. The best names — Bloom, A Simple Bouquet, The Garden, Fleur — are distinctive, short, and immediately signal beauty and craft.',
  },
  {
    question: 'Should I use "Florist" in my business name?',
    answer: 'It depends. Including "Florist" or "Flowers" (like "Bloom & Flowers") makes your business instantly clear — great for search and discoverability. But it can feel limiting if you want to expand into event decor, interior styling, or corporate services. Modern florists often use a name without the word — "The Garden", "Vine", "Botanica" — and let their Instagram and portfolio speak for them.',
  },
  {
    question: 'Can I use these names for my flower shop?',
    answer: 'Absolutely. All names you generate are yours to use commercially — for business registration, signage, menus, merchandise, website, social media, and marketing materials. There are no licensing restrictions. Just make sure to check trademark availability for your final choice.',
  },
  {
    question: 'How do I check if a florist name is already taken?',
    answer: 'Four checks are essential: (1) Search your state\'s business registry to make sure the name isn\'t already registered. (2) Search the USPTO trademark database for existing registrations. (3) Search Google Maps in your area — even if a name isn\'t trademarked, having 3 other florists with similar names nearby will confuse customers. (4) Check Instagram and Facebook handle availability — these are your primary marketing channels.',
  },
  {
    question: 'Should my florist name match my domain?',
    answer: 'Ideally, yes. Your florist name and domain should be the same (or very close) so customers can find you online. If the .com is taken, consider .florist, .flowers, .shop, or .online as alternatives. BrandForge checks domain availability in real-time so you can pick a name with an available domain from the start.',
  },
  {
    question: 'What are the most popular florist naming trends in 2026?',
    answer: 'The biggest trends are: (1) Minimalist one-word names (FLORA, STEM, BLOOM) — short, memorable, Instagram-perfect. (2) Botanically-inspired names using flower and plant language (Wildflower, Fern, Blossom). (3) Emotional & romantic names that connect to weddings and love (Love & Bloom, Cherished). (4) Location-based names that build local identity and rank in "florist near me" searches. The best names combine trend awareness with authenticity.',
  },
]

const INDUSTRY_LINKS = [
  { name: '🌸 Florist Generator', href: '/florist-name-generator', desc: 'AI florist name generator' },
  { name: '💍 Wedding Generator', href: '/wedding-name-generator', desc: 'Wedding business names' },
  { name: '🌿 Wedding Planning Generator', href: '/wedding-name-generator', desc: 'Wedding planning business names' },
  { name: '👗 Fashion Generator', href: '/fashion-name-generator', desc: 'Fashion & boutique names' },
  { name: '🎨 Craft Generator', href: '/craft-name-generator', desc: 'Handmade & artisan names' },
  { name: '📦 Etsy Shop Generator', href: '/craft-name-generator', desc: 'Etsy & handmade shop names' },
  { name: '☕ Coffee Shop Generator', href: '/coffee-name-generator', desc: 'Coffee shop & café names' },
  { name: '🎁 Gift Shop Generator', href: '/craft-name-generator', desc: 'Gift shop name ideas' },
  { name: '🌱 Small Business Generator', href: '/blog/small-business-name-generator', desc: 'Small business name ideas' },
  { name: '📋 Business Name Generator', href: '/blog/business-name-generator', desc: '300+ business name ideas' },
]

export default function FloristNameGeneratorBlog() {
  return (
    <>
      <BlogPostSchema
        title="Florist Name Generator: 300+ Flower Name Ideas for 2026 + Free AI Tool"
        description="300+ florist and flower shop name ideas across 10 categories, 7 proven naming strategies from top floral brands, and a free AI generator that checks domain & social availability."
        url="https://brandforge.app/blog/florist-name-generator"
        datePublished="2026-08-19"
      />
      <HowToSchema
        name="How to Name Your Florist in 5 Steps"
        description="A proven 5-step process for naming your florist or flower shop — from defining your concept to the recommendation test."
        url="https://brandforge.app/blog/florist-name-generator"
        totalTime="PT25M"
        steps={[
          { name: 'Define Your Florist Concept', text: 'Get specific about your flower style — wedding-focused, modern arrangements, garden-style, tropical, or dried flowers. Your concept drives whether your name should feel romantic, modern, or playful.' },
          { name: 'Generate 20-30 Name Ideas', text: 'Use BrandForge\'s florist name generator to create a broad list. Try botanical names, emotion-based names, location names, and artisan names. Don\'t filter yet — volume first.' },
          { name: 'Run the Instagram Test', text: 'Search Instagram for your top names. If 10+ florists already use similar names, pick something more distinctive. Your name needs to stand out in a visually-driven industry.' },
          { name: 'Check Domain, Social Handles, and Trademark Availability', text: 'Verify the .com domain is available, check Instagram and Pinterest for similar names, and search USPTO for trademark conflicts in the floral services category.' },
          { name: 'Say It in a Recommendation', text: 'The best florist names are easy to recommend by word of mouth. Say: "You should try [Name] — their arrangements are stunning." If it sounds natural and memorable, you\'ve found the right name.' },
        ]}
      />
      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-12">
          <div className="mb-4">
            <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
              Florist Naming Guide
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Florist Name Generator: 300+ Flower Shop Name Ideas for 2026
          </h1>
          <p className="text-lg text-slate-600 mb-6">
            300+ florist name ideas across 10 categories, 7 naming strategies used by the world's most successful floral brands, and a free AI generator that checks domain & social availability instantly.
          </p>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <time dateTime="2026-08-19">August 19, 2026</time>
            <span>·</span>
            <span>15 min read</span>
          </div>
        </header>

        {/* CTA Banner */}
        <div className="mb-12 rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 border border-brand-200 p-6 sm:p-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
            Generate Your Florist Name Now
          </h2>
          <p className="text-slate-600 mb-6">
            Describe your flower shop concept. Get AI-powered name suggestions with logo concepts, color palettes, taglines, and domain availability — free to start.
          </p>
          <a
            href="/generate"
            className="btn-primary inline-flex items-center gap-2 text-base px-8 py-3"
          >
            Generate Florist Names
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        {/* Categories */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">
            300+ Florist Name Ideas by Category
          </h2>
          <p className="text-slate-600 mb-8">
            Browse florist name ideas organized by business type — from elegant luxury florists to wildflower cottage shops, modern studios, and online-only brands. Each category has 30 names designed for that specific florist style.
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
              Generate Custom Names for Your Florist Business
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </section>

        {/* Naming Strategies */}
        <section id="strategies" className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">
            7 Naming Strategies Top Florist Brands Use
          </h2>
          <p className="text-slate-600 mb-8">
            The best florist names aren't random — they follow proven naming patterns. Here are 7 strategies used by successful flower shops, boutique florists, and floral design studios.
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
            How to Name Your Florist Business in 5 Steps
          </h2>
          <p className="text-slate-600 mb-8">
            A proven process for naming your flower shop — from concept to grand opening.
          </p>

          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Define your florist concept</h3>
                  <p className="mt-2 text-slate-600">Before you name anything, get specific about what kind of florist you're building. Wedding florist? Luxury event floral design? Neighborhood flower shop? Modern studio? The concept shapes your name entirely. "Love & Bloom" works for a wedding florist. "The Garden Shed" works for a charming local flower shop. Write down your concept, your ideal customer, and the feeling you want to deliver.</p>
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
                  <p className="mt-2 text-slate-600">Use BrandForge's florist name generator above to create a broad list. Try different angles — floral names, emotive names, personal names, location names, minimalist names. Don't filter yet. The goal is volume. Mix in personal name options (your name + "Florist", "Bloom", "Petal") and concept-specific options. You'll narrow down in the next steps.</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Run the Instagram Test</h3>
                  <p className="mt-2 text-slate-600">For florists, Instagram is your #1 portfolio and customer acquisition channel. Write your top 10 names as Instagram handles (@name). Which ones are available? Which ones look good in a bio? Which ones would make customers want to tap follow? The Instagram Test eliminates names that are taken, too long, or don't look professional on a social profile. A great florist name should look stunning as an @handle — because that's where your future customers will find you.</p>
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
                  <p className="mt-2 text-slate-600">Four checks, all critical for florists: (1) Is the .com domain available? Check with BrandForge's domain checker. Also check .flor, .flowers, and .shop as strong alternatives. (2) Check Instagram, Facebook, and Pinterest for handle availability — these are your primary marketing channels. (3) Search Google Maps in your area — are there already 3 florists with similar names? If yes, pick something more distinctive. (4) Search the USPTO database for trademark conflicts in Class 35 (retail services) and Class 3 (floral products).</p>
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
                  <p className="mt-2 text-slate-600">Florists thrive on word of mouth and referrals. Would someone say "You have to check out Bloom & Vine — their bouquets are stunning" or "You have to check out the florist on Main Street"? Which one is easier to remember, easier to find on Google, easier to recommend to a friend getting married? The best florist names are names people remember and can recommend without spelling them out.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Naming Mistakes */}
        <section id="mistakes" className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">
            7 Naming Mistakes That Cost Flower Shops Customers
          </h2>
          <p className="text-slate-600 mb-8">
            Avoid these common pitfalls that make florists harder to find, remember, and recommend.
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
            More Beauty & Event Name Generators
          </h2>
          <p className="text-slate-600 mb-6">
            Explore name generators for florist-adjacent and event-related businesses.
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
            Ready to Name Your Florist Business?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Describe your flower shop concept. Get names with logo concepts, color palettes, taglines, and domain checks. Free to start, $9 per brand kit you love.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-semibold text-slate-900 shadow-lg hover:bg-gray-50 transition-colors"
            >
              Generate Florist Names
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
            <Link href="/blog/nail-salon-name-generator" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all">
              <div className="text-2xl mb-2">💅</div>
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Nail Salon Name Generator</h3>
              <p className="text-sm text-slate-500 mt-1">300+ nail salon and beauty studio name ideas for 2026.</p>
            </Link>
            <Link href="/blog/salon-brand-name-generator" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all">
              <div className="text-2xl mb-2">💇</div>
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Salon Name Generator</h3>
              <p className="text-sm text-slate-500 mt-1">300+ salon and hair studio name ideas for every style.</p>
            </Link>
            <Link href="/blog/coffee-brand-name-generator" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all">
              <div className="text-2xl mb-2">☕</div>
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Coffee Shop Name Generator</h3>
              <p className="text-sm text-slate-500 mt-1">300+ coffee shop and café name ideas for 2026.</p>
            </Link>
            <Link href="/blog/restaurant-name-generator" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all">
              <div className="text-2xl mb-2">🍽️</div>
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Restaurant Name Generator</h3>
              <p className="text-sm text-slate-500 mt-1">300+ restaurant name ideas for every concept type.</p>
            </Link>
            <Link href="/blog/catchy-business-names" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all">
              <div className="text-2xl mb-2">🎯</div>
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Catchy Business Names</h3>
              <p className="text-sm text-slate-500 mt-1">150+ catchy business name ideas that stick in people's minds.</p>
            </Link>
            <Link href="/blog/brand-color-psychology" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all">
              <div className="text-2xl mb-2">🎨</div>
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Brand Color Psychology</h3>
              <p className="text-sm text-slate-500 mt-1">What your brand colors say and how to choose the right palette.</p>
            </Link>
          </div>
        </section>

        {/* Newsletter */}
        <BlogNewsletterSection />
      </article>
    </>
  )
}
