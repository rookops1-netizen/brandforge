/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import { BlogNewsletterSection } from '@/components/BlogNewsletterSection'
import { BlogPostSchema } from '@/components/BlogPostSchema'

export const dynamic = 'force-static'
export const metadata: Metadata = {
  title: 'Restaurant Name Generator: 300+ Restaurant Name Ideas for 2026 + Free AI Tool',
  description: '300+ restaurant name ideas across 10 categories, 7 proven naming strategies from top restaurant brands, and a free AI generator that checks domain & social availability instantly.',
  keywords: [
    'restaurant name generator',
    'restaurant name ideas',
    'restaurant names',
    'creative restaurant names',
    'unique restaurant names',
    'catchy restaurant names',
    'best restaurant names',
    'how to name a restaurant',
    'restaurant naming tips',
    'cool restaurant names',
    'fine dining restaurant names',
    'casual restaurant names',
    'restaurant name ideas 2026',
    'bistro name ideas',
    'café name ideas',
    'diner name ideas',
    'elegant restaurant names',
    'modern restaurant names',
    'restaurant brand names',
    'opening a restaurant name ideas',
  ],
  openGraph: {
    title: 'Restaurant Name Generator: 300+ Restaurant Name Ideas for 2026 + Free AI Tool',
    description: '300+ restaurant name ideas across 10 categories, 7 naming strategies from top restaurant brands, and a free AI generator with domain & social availability checks.',
    url: 'https://brandforge.app/blog/restaurant-name-generator',
    siteName: 'BrandForge',
    type: 'article',
    publishedTime: '2026-08-16T12:00:00.000Z',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Restaurant Name Generator: 300+ Restaurant Name Ideas for 2026',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Restaurant Name Generator: 300+ Restaurant Name Ideas for 2026',
    description: '300+ restaurant name ideas by category, 7 naming strategies from top restaurant brands, and a free AI generator that checks domain availability.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: 'https://brandforge.app/blog/restaurant-name-generator',
  },
  robots: { index: true, follow: true },
}

const CATEGORIES = [
  {
    name: 'Fine Dining & Elegant Restaurant Names',
    names: ['Ember & Oak', 'The Gilded Table', 'Savoureux', 'Pinnacle Dining', 'La Maison', 'The Velvet Fork', 'Nocturne', 'Château Blanc', 'Opulence', 'The Silver Palate', 'Meridian', 'Lumière', 'The Crown Room', 'Grandeur Restaurant', 'Étoile', 'The Golden Pear', 'Cellar 47', 'Ambrosia', 'The Refined Plate', 'L\'Auberge', 'The Heritage Table', 'Saffron & Thyme', 'Celeste', 'The Crystal Room', 'Sovereign', 'Petit Maison', 'The Obsidian Table', 'Maison Lumière', 'The Grand Courtyard', 'Noble House'],
  },
  {
    name: 'Casual & Neighborhood Restaurant Names',
    names: ['The Friendly Fork', 'Main Street Kitchen', 'Hearth & Home', 'The Corner Table', 'Good Eats Café', 'Neighborhood Kitchen', 'The Daily Plate', 'Comfort & Co.', 'The Local Spoon', 'Homeplate Restaurant', 'The Gathering Table', 'Sunday Kitchen', 'The Community Plate', 'Backyard Kitchen', 'The Warm Table', 'Side Street Café', 'The Steady Ladle', 'Front Porch Kitchen', 'The Good Plate', 'Hometown Kitchen', 'The Welcome Table', 'The Cozy Kettle', 'Maple & Main', 'The Familiar Fork', 'Everyday Kitchen', 'The Good Folk', 'The Neighborhood Fork', 'Kitchen & Co.', 'The Happy Plate', 'The Corner Kitchen'],
  },
  {
    name: 'Modern & Minimalist Restaurant Names',
    names: ['PROVISION', 'EMBER', 'FRAME', 'BASE Kitchen', 'SHIFT', 'LINE Kitchen', 'MTR Dining', 'CURATE', 'FORMA', 'ECHO Kitchen', 'ELEMENT', 'PLATE', 'MINT', 'CRAFT Kitchen', 'VERTEX Dining', 'NODE Kitchen', 'ARC', 'PRISM Restaurant', 'AXIS Dining', 'MOD Kitchen', 'CANVAS', 'TONE', 'BLK Restaurant', 'CORE Dining', 'HUE Kitchen', 'SHIFT Dining', 'GRID', 'VOID Kitchen', 'EDGE', 'NOVA Dining'],
  },
  {
    name: 'Italian & Mediterranean Restaurant Names',
    names: ['La Tavola', 'Bella Vita', 'Il Giardino', 'Trattoria del Sole', 'Olive & Vine', 'La Cucina', 'Mare Nostrum', 'Forno', 'Basilico', 'La Piazza', 'Casa Mia', 'Il Forno', 'Solare', 'Osteria Nova', 'La Bella Luna', 'Giardino Restaurant', 'Il Mercato', 'Sapore', 'La Terrazza', 'Mediterraneo', 'Cucina Fresca', 'Il Portico', 'Tavernetta', 'La Strada', 'L\'Olivo', 'Terramare', 'Aqua e Sale', 'Casa del Sole', 'Buongiorno Kitchen', 'The Amalfi Table'],
  },
  {
    name: 'Farm-to-Table & Sustainable Restaurant Names',
    names: ['Root & Vine', 'The Harvest Table', 'Field & Fork', 'From the Farm', 'Seasonal Kitchen', 'The Farmer\'s Plate', 'Garden Gate', 'Plough & Seed', 'The Wild Table', 'Earth & Plate', 'Acres Kitchen', 'The Foraged Plate', 'Greenhouse Kitchen', 'Pasture & Plate', 'The Rural Table', 'Barn Kitchen', 'Soil & Season', 'The Cultivated Plate', 'Sprout Kitchen', 'The Good Earth', 'Harvest Moon Kitchen', 'The Farm Stand', 'Fern & Root', 'The Seasonal Plate', 'Meadow Kitchen', 'The Woodland Table', 'Grove Kitchen', 'The Honest Plate', 'Sown Kitchen', 'The Open Acre'],
  },
  {
    name: 'Asian & Fusion Restaurant Names',
    names: ['Wok & Kin', 'Silk Road Kitchen', 'Umami House', 'Fire & Rice', 'Bao & Brew', 'Jade Palace', 'The Spice Route', 'Noodle & Thread', 'Red Lantern Kitchen', 'Dragonfly Dining', 'Miso & Co.', 'Sakura Table', 'Tiger Lily Kitchen', 'The Golden Wok', 'Bamboo Kitchen', 'Ginger & Scallion', 'The Iron Wok', 'Lotus Kitchen', 'Char & Pine', 'The Tea House', 'Ramen Republic', 'The Rice Bowl', 'Pho King Kitchen', 'Dim Sum Dynasty', 'Wonton Kitchen', 'Szechuan House', 'The Noodle Bar', 'Norimaki', 'Koi Garden', 'The Wok Station'],
  },
  {
    name: 'BBQ, Grill & Smokehouse Names',
    names: ['Smoke & Iron', 'The Brisket Barn', 'Ember & Oak BBQ', 'Low & Slow', 'The Smokehouse', 'Char & Bark', 'Hickory Kitchen', 'The Pit Stop', 'Smokestack', 'Brisket & Co.', 'The Burning Barrel', 'Oak & Smoke', 'The Rub', 'Smoke & Barrel', 'The Pit Master', 'Charcoal Kitchen', 'The Smoke Signal', 'Bark & Blade', 'The Slow Burn', 'Wood-Fired Kitchen', 'The Ash Pit', 'Smoke & Soul', 'The Iron Grill', 'Hickory & Co.', 'The BBQ Joint', 'Smokey\'s Kitchen', 'The Open Flame', 'Brisket Republic', 'The Fire Pit', 'Coal & Wood'],
  },
  {
    name: 'Brunch & Breakfast Restaurant Names',
    names: ['The Morning Table', 'Rise & Dine', 'Sunny Side Kitchen', 'The Brunch Box', 'Batter & Brew', 'The Pancake House', 'Over Easy Kitchen', 'The Morning Fork', 'Toast & Jam', 'Rise Kitchen', 'The Breakfast Club', 'Sunrise Café', 'The Egg & I', 'Brunch & Co.', 'The Waffle Iron', 'Morning Glory Kitchen', 'The Sunny Plate', 'Butter & Batter', 'The Early Bird', 'First Bite Kitchen', 'The French Toast', 'Brisk Morning', 'The Caffeinated Kitchen', 'Mimosa Kitchen', 'The Biscuit House', 'Stack Kitchen', 'The Omelette Bar', 'Daybreak Kitchen', 'The Brunch Spot'],
  },
  {
    name: 'Seafood & Coastal Restaurant Names',
    names: ['The Salty Oyster', 'Harbor Kitchen', 'Tide & Table', 'The Blue Marlin', 'Coastal Kitchen', 'Salt & Sea', 'The Catch', 'Pier & Plate', 'The Lighthouse Kitchen', 'Oceana', 'The Rolling Tide', 'Sea & Shore', 'The Lobster Pot', 'Coral Kitchen', 'The Driftwood Table', 'Anchor & Spoon', 'The Seaworthy', 'Mariner Kitchen', 'The Silver Fish', 'Bay & Plate', 'The Harbor House', 'Wave Kitchen', 'The Salt House', 'Seafarer Kitchen', 'The Dockside', 'Net & Knife', 'The Coastal Table', 'Shellfish Kitchen', 'The Reef', 'Buoy Kitchen'],
  },
  {
    name: 'Steakhouse & Classic Restaurant Names',
    names: ['The Prime Cut', 'Iron & Flame', 'The Capital Grill House', 'Ember Steakhouse', 'The Carving Room', 'Flint & Steel', 'The Cattleman\'s Table', 'Rib & Rye', 'The Sterling Grill', 'The Oak Room', 'Prime & Proper', 'The Heritage Steakhouse', 'The Copper Grill', 'Ash & Ember', 'The Gentlemen\'s Table', 'The Reserve', 'Manhattan Grill', 'The Prime Rib', 'Char & Oak', 'The Grand Steakhouse', 'The Butcher\'s Table', 'Cedar & Co.', 'The Bone & Marrow', 'The Iron Table', 'The Angus Room', 'Flame & Fork', 'The Classic Grill', 'Woodstone Steakhouse', 'The Bronze Grill', 'The Original Steakhouse'],
  },
]

const NAMING_STRATEGIES = [
  {
    name: 'Evocative & Experience-Based',
    description: 'Names that capture the feeling, atmosphere, and experience of dining at your restaurant.',
    examples: 'Ember & Oak, The Velvet Fork, Nocturne, Hearth & Home',
    why: 'Dining is fundamentally an experience — the lighting, the sounds, the flavors, the company. Names that evoke that experience create an emotional connection before someone even walks through the door. "Ember & Oak" makes you imagine warm wood-fired flavors. "The Velvet Fork" suggests luxury and comfort. "Nocturne" hints at an intimate evening out. These names sell the experience, not just the food.',
  },
  {
    name: 'Ingredient & Craft-Based',
    description: 'Names that highlight your ingredients, cooking methods, or culinary craft.',
    examples: 'Smoke & Iron, The Brisket Barn, Root & Vine, The Carving Room',
    why: 'The farm-to-table and craft movement has trained diners to care about ingredients and process. Names like "Smoke & Iron," "Root & Vine," and "The Carving Room" immediately signal what kind of food you serve and how seriously you take it. These names attract diners who care about quality, sourcing, and craft — and they\'re willing to pay more for it.',
  },
  {
    name: 'Location & Neighborhood-Based',
    description: 'Names that anchor your restaurant to a place, creating local identity and discoverability.',
    examples: 'Main Street Kitchen, The Corner Table, Harbor Kitchen, Pier & Plate',
    why: 'Restaurants are inherently local businesses. "Main Street Kitchen" tells you exactly where it is and builds neighborhood pride. Location-based names dominate in local search ("restaurant near me" + your neighborhood), and they create loyalty — people love their neighborhood spot. This strategy is especially powerful in cities with strong neighborhood identities like New York, Chicago, or Portland.',
  },
  {
    name: 'Modern & Minimalist',
    description: 'Short, punchy names that look incredible on menus, signage, and Instagram.',
    examples: 'EMBER, PROVISION, SHIFT, BASE Kitchen, CURATE',
    why: 'The restaurant industry has embraced minimalism. Look at Noma, Alinea, Le Bernardin — the most acclaimed restaurants use clean, confident names. They look sharp on a menu, stunning on a sign, and perfect in an Instagram bio. If your restaurant targets design-conscious diners under 40, a minimalist name is your strongest move. One word. Maximum impact.',
  },
  {
    name: 'Cultural & Heritage-Inspired',
    description: 'Names that reference culinary traditions, regions, and cultural heritage.',
    examples: 'La Tavola, Silk Road Kitchen, Trattoria del Sole, Osteria Nova',
    why: 'Food is deeply cultural. Italian, Japanese, Mexican, French — every cuisine carries centuries of tradition. Names like "La Tavola" (the table) or "Silk Road Kitchen" immediately signal authenticity and invite diners into a cultural experience. These names work because they promise something specific and genuine — not generic "international" food, but a real connection to a culinary tradition.',
  },
  {
    name: 'Playful & Personality-Driven',
    description: 'Memorable names with personality that stand out and get people talking.',
    examples: 'The Friendly Fork, Rise & Dine, The Pancake House, Over Easy Kitchen',
    why: 'Some of the most beloved restaurants have names with personality. "Rise & Dine" is clever and memorable. "The Friendly Fork" is approachable and warm. Playful names work especially well for casual dining, brunch spots, and neighborhood restaurants where the vibe matters as much as the food. They make people smile — and smiling customers come back and bring friends.',
  },
  {
    name: 'Contrast & Pairing-Based',
    description: 'Names that use contrasting or complementary words — ingredient pairs, flavor opposites, or textural contrasts.',
    examples: 'Smoke & Iron, Salt & Sea, Root & Vine, Char & Oak',
    why: 'The "X & Y" pattern is one of the most successful naming formulas in restaurants. "Salt & Sea" tells a story about coastal cuisine. "Smoke & Iron" suggests bold, grilled flavors. "Root & Vine" signals farm-to-table freshness. These paired names are inherently memorable because they create a rhythm — and they immediately communicate what kind of dining experience to expect.',
  },
]

const NAMING_MISTAKES = [
  {
    title: 'Being too generic',
    description: '"The Restaurant" or "Good Food Dining" tells customers nothing about your cuisine, vibe, or what makes you different. There are 1 million+ restaurants in the US alone — a generic name makes you invisible. "Ember & Oak" or "The Gilded Table" says something specific about your food and experience.',
  },
  {
    title: 'Choosing a name you can\'t spell over the phone',
    description: 'If someone has to ask "How do you spell that?" when you tell them your restaurant name, it\'s too complicated. Your name will be spoken in recommendations, typed in Google, and texted to friends. If they can\'t spell it, they can\'t find you. And they can\'t leave you a review either.',
  },
  {
    title: 'Ignoring the menu test',
    description: 'Your name will appear on menus, signage, napkins, matchbooks, and reservation systems. Long names become unreadable on a menu header. "Ember & Oak" fits beautifully. "The Best Restaurant in Downtown Portland Oregon" does not. If it doesn\'t fit on a menu, it\'s too long.',
  },
  {
    title: 'Copying the competition',
    description: 'If every Italian restaurant in your area uses "La [Something]" or every BBQ joint uses "[Name]\'s Smokehouse," naming yourself the same way makes you forgettable. Look at your local competition on Google Maps, then pick a name that stands out. Differentiation is everything in a crowded market.',
  },
  {
    title: 'Limiting your growth',
    description: '"Downtown Pizza Joint" locks you into one location and one cuisine. "Ember & Oak" lets you expand to multiple locations, add catering, launch a food product line, and build a regional brand. Pick a name that grows with your ambitions.',
  },
  {
    title: 'Forgetting the reservation test',
    description: 'Restaurants live and die by reservations — OpenTable, Yelp, Resy, Google. Your name needs to be easily found and typed in a reservation search. If someone searches your name and 6 other restaurants with similar names come up, you\'re losing reservations. Be distinctive enough to be the only result.',
  },
  {
    title: 'Skipping trademark research',
    description: 'The restaurant industry has intense trademark competition. Before committing to a name, search the USPTO database for existing registrations in Class 43 (restaurant and food services). A cease-and-desist letter after you\'ve already printed menus, signage, napkins, and merchandise is expensive and demoralizing. Check first — it takes 30 minutes.',
  },
]

const FAQ_ITEMS = [
  {
    question: 'How does the restaurant name generator work?',
    answer: 'Describe your restaurant — your cuisine (Italian, farm-to-table, BBQ, fine dining, etc.), your atmosphere (elegant, casual, modern, cozy), and your target diners. BrandForge\'s AI generates custom name suggestions paired with complete brand kits including logo concepts, color palettes, taglines, and domain/social availability checks.',
  },
  {
    question: 'Is the restaurant name generator free?',
    answer: 'Yes! You can generate restaurant name ideas for free — 5 suggestions per search, unlimited searches, no credit card required. Unlock the full brand kit (logo, colors, tagline, typography, domain & social checks) for $9 per brand kit.',
  },
  {
    question: 'What makes a good restaurant name?',
    answer: 'A great restaurant name is memorable, easy to spell and pronounce, fits on a menu header, works as a social media handle, and evokes the dining experience you want guests to have. The best names — Noma, Alinea, Le Bernardin, Shake Shack — are distinctive, short, and immediately signal cuisine and quality.',
  },
  {
    question: 'Should I include my cuisine type in my restaurant name?',
    answer: 'It depends on your concept. Including your cuisine ("Silk Road Kitchen," "The Pancake House") makes you immediately discoverable and clear. But it can limit you if you want to expand your menu later. Fine dining restaurants almost never include cuisine type (Noma, Eleven Madison Park). Casual restaurants often benefit from it. If you plan to expand or evolve, a name without a cuisine word gives you more flexibility.',
  },
  {
    question: 'Can I use these names for my restaurant?',
    answer: 'Absolutely. All names you generate are yours to use commercially — for business registration, signage, menus, merchandise, website, social media, and marketing materials. There are no licensing restrictions. Just make sure to check trademark availability for your final choice.',
  },
  {
    question: 'How do I check if a restaurant name is already taken?',
    answer: 'Three checks are essential: (1) Search your state\'s business registry to make sure the name isn\'t already registered. (2) Search the USPTO trademark database for existing registrations in Class 43 (restaurant services). (3) Search Google Maps in your area — even if a name isn\'t trademarked, having 3 other restaurants with similar names nearby will confuse customers.',
  },
  {
    question: 'Should my restaurant name match my domain name?',
    answer: 'Ideally, yes. Your restaurant name and domain should be the same (or very close) so diners can find you online. If the .com is taken, consider .restaurant, .menu, or .cafe as alternatives. BrandForge checks domain availability in real-time so you can pick a name with an available domain from the start.',
  },
  {
    question: 'What are the most popular restaurant naming trends in 2026?',
    answer: 'The biggest trends are: (1) Minimalist single-word names (EMBER, CURATE, PRISM) — works especially for fine dining and modern concepts. (2) "X & Y" paired names (Smoke & Iron, Salt & Sea) — creates rhythm and tells a story. (3) Heritage-based names referencing culinary traditions (La Tavola, Silk Road Kitchen). (4) Location-based names for neighborhood identity (Main Street Kitchen, The Corner Table). The best names combine trend awareness with authenticity.',
  },
]

const INDUSTRY_LINKS = [
  { name: '🍕 Restaurant Generator', href: '/restaurant-name-generator', desc: 'AI restaurant name generator' },
  { name: '🚚 Food Truck Generator', href: '/food-truck-name-generator', desc: 'Food truck name ideas' },
  { name: '☕ Coffee Shop Generator', href: '/coffee-name-generator', desc: 'Coffee shop & café names' },
  { name: '🎂 Bakery Generator', href: '/blog/bakery-name-generator', desc: 'Bakery name ideas' },
  { name: '🍽️ Catering Generator', href: '/catering-name-generator', desc: 'Catering business names' },
  { name: '💍 Wedding Generator', href: '/wedding-name-generator', desc: 'Wedding business names' },
  { name: '🌿 Farm-to-Table Generator', href: '/restaurant-name-generator', desc: 'Farm-to-table restaurant names' },
  { name: '🍷 Bar & Lounge Generator', href: '/restaurant-name-generator', desc: 'Bar and lounge name ideas' },
  { name: '🍺 Brewery Generator', href: '/restaurant-name-generator', desc: 'Brewery and taproom names' },
  { name: '📋 Small Business Generator', href: '/blog/small-business-name-generator', desc: 'Small business name ideas' },
]

export default function RestaurantNameGeneratorBlog() {
  return (
    <>
      <BlogPostSchema
        title="Restaurant Name Generator: 300+ Restaurant Name Ideas for 2026 + Free AI Tool"
        description="300+ restaurant name ideas across 10 categories, 7 proven naming strategies from top restaurant brands, and a free AI generator that checks domain & social availability."
        url="https://brandforge.app/blog/restaurant-name-generator"
        datePublished="2026-08-16"
      />
      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-12">
          <div className="mb-4">
            <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
              Restaurant Naming Guide
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Restaurant Name Generator: 300+ Restaurant Name Ideas for 2026
          </h1>
          <p className="text-lg text-slate-600 mb-6">
            300+ restaurant name ideas across 10 categories, 7 naming strategies used by the world's most successful restaurants, and a free AI generator that checks domain & social availability instantly.
          </p>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <time dateTime="2026-08-16">August 16, 2026</time>
            <span>·</span>
            <span>15 min read</span>
          </div>
        </header>

        {/* CTA Banner */}
        <div className="mb-12 rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 border border-brand-200 p-6 sm:p-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
            Generate Your Restaurant Name Now
          </h2>
          <p className="text-slate-600 mb-6">
            Describe your restaurant concept. Get AI-powered name suggestions with logo concepts, color palettes, taglines, and domain availability — free to start.
          </p>
          <a
            href="/generate"
            className="btn-primary inline-flex items-center gap-2 text-base px-8 py-3"
          >
            Generate Restaurant Names
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        {/* Categories */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">
            300+ Restaurant Name Ideas by Category
          </h2>
          <p className="text-slate-600 mb-8">
            Browse restaurant name ideas organized by concept type — from fine dining to casual, BBQ to brunch. Each category has 30 names designed for that specific restaurant style.
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
              Generate Custom Names for Your Restaurant
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </section>

        {/* Naming Strategies */}
        <section id="strategies" className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">
            7 Naming Strategies Top Restaurant Brands Use
          </h2>
          <p className="text-slate-600 mb-8">
            The best restaurant names aren't random — they follow proven naming patterns. Here are 7 strategies used by successful restaurants, bistros, and dining brands.
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
            How to Name Your Restaurant in 5 Steps
          </h2>
          <p className="text-slate-600 mb-8">
            A proven process for naming your restaurant — from concept to grand opening.
          </p>

          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Define your restaurant concept</h3>
                  <p className="mt-2 text-slate-600">Before you name anything, get specific about what kind of restaurant you're building. Fine dining? Casual neighborhood spot? Farm-to-table? Fast-casual concept? BBQ joint? Brunch café? Your concept shapes your name entirely. "Ember & Oak" works for a wood-fired steakhouse. "Rise & Dine" works for a brunch spot. Write down your concept, your ideal diner, and what experience you want to deliver.</p>
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
                  <p className="mt-2 text-slate-600">Use BrandForge's restaurant name generator above to create a broad list. Try different angles — evocative names, ingredient names, location names, minimalist names, playful names. Don't filter yet. The goal is volume. Mix in personal name options (your name + Kitchen, House, or Table) and concept-specific options. You'll narrow down in the next steps.</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Run the Menu Test</h3>
                  <p className="mt-2 text-slate-600">This is the most important test for restaurant names. Print your top 10 names and imagine each one on a menu header, a storefront sign, and a reservation confirmation email. Which names look great? Which ones are easy to read at a glance? Which ones would you be proud to put on a menu? The Menu Test eliminates names that are too long, too complicated, or don't look good at menu size. A name that works on a business card but not on a menu is the wrong name for a restaurant.</p>
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
                  <p className="mt-2 text-slate-600">Four checks, all critical for restaurants: (1) Is the .com domain available? Check with BrandForge's domain checker. Also check .restaurant and .menu as strong alternatives. (2) Check Instagram, TikTok, and Yelp for handle availability — these are your primary marketing channels for restaurants. (3) Search Google Maps in your area — are there already 3 restaurants with similar names? If yes, pick something more distinctive. (4) Search the USPTO database for trademark conflicts in Class 43 (restaurant services).</p>
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
                  <p className="mt-2 text-slate-600">Restaurants thrive on word of mouth. Would someone say "You have to try Ember & Oak — their wood-fired steak is incredible" or "You have to try The Best Restaurant in Downtown Portland" — which one is easier to remember, easier to find on OpenTable, easier to recommend to a friend? The best restaurant names are names people remember and can recommend without spelling them out.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Naming Mistakes */}
        <section id="mistakes" className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">
            7 Naming Mistakes That Cost Restaurants Customers
          </h2>
          <p className="text-slate-600 mb-8">
            Avoid these common pitfalls that make restaurants harder to find, remember, and recommend.
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
            More Food & Hospitality Name Generators
          </h2>
          <p className="text-slate-600 mb-6">
            Explore name generators for restaurant-adjacent and hospitality businesses.
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
            Ready to Name Your Restaurant?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Describe your restaurant concept. Get names with logo concepts, color palettes, taglines, and domain checks. Free to start, $9 per brand kit you love.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-semibold text-slate-900 shadow-lg hover:bg-gray-50 transition-colors"
            >
              Generate Restaurant Names
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
            <Link href="/blog/coffee-brand-name-generator" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all">
              <div className="text-2xl mb-2">☕</div>
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Coffee Shop Name Generator</h3>
              <p className="text-sm text-slate-500 mt-1">300+ coffee shop and café name ideas for 2026.</p>
            </Link>
            <Link href="/food-truck-name-generator" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all">
              <div className="text-2xl mb-2">🚚</div>
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Food Truck Name Generator</h3>
              <p className="text-sm text-slate-500 mt-1">300+ food truck name ideas for every cuisine type.</p>
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
            <Link href="/blog/how-to-choose-business-name" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all">
              <div className="text-2xl mb-2">✏️</div>
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">How to Choose a Business Name</h3>
              <p className="text-sm text-slate-500 mt-1">The complete guide to naming a business in 2026.</p>
            </Link>
            <Link href="/blog/how-to-build-brand-identity" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all">
              <div className="text-2xl mb-2">🏗️</div>
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">How to Build a Brand Identity</h3>
              <p className="text-sm text-slate-500 mt-1">From name to logo to colors — build a brand people remember.</p>
            </Link>
          </div>
        </section>

        {/* Newsletter */}
        <BlogNewsletterSection />
      </article>
    </>
  )
}