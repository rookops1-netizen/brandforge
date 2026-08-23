/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import { BlogNewsletterSection } from '@/components/BlogNewsletterSection'
import { BlogPostSchema } from '@/components/BlogPostSchema'
import { HowToSchema } from '@/components/HowToSchema'

export const dynamic = 'force-static'
export const metadata: Metadata = {
  title: 'Food Truck Name Generator: 300+ Food Truck Name Ideas for 2026 + Free AI Tool',
  description: '300+ food truck name ideas across 10 categories, 7 proven naming strategies from top food truck brands, and a free AI generator that checks domain & social availability instantly.',
  keywords: [
    'food truck name generator',
    'food truck names',
    'food truck name ideas',
    'food truck business names',
    'creative food truck names',
    'catchy food truck names',
    'best food truck names',
    'food cart name ideas',
    'mobile food business names',
    'street food name ideas',
    'food truck branding',
    'food truck naming tips',
    'how to name a food truck',
    'food van names',
    'food stall name ideas',
    'taco truck names',
    'ice cream truck names',
    'burger truck names',
    'pizza truck names',
    'food truck brand names',
  ],
  openGraph: {
    title: 'Food Truck Name Generator: 300+ Food Truck Name Ideas for 2026 + Free AI Tool',
    description: '300+ food truck name ideas across 10 categories, 7 naming strategies from top food truck brands, and a free AI generator with domain & social availability checks.',
    url: 'https://brandforge.app/blog/food-truck-name-generator',
    siteName: 'BrandForge',
    type: 'article',
    publishedTime: '2026-08-23T12:00:00.000Z',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Food Truck Name Generator: 300+ Food Truck Name Ideas for 2026',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Food Truck Name Generator: 300+ Food Truck Name Ideas for 2026',
    description: '300+ food truck name ideas by category, 7 naming strategies from top food trucks, and a free AI generator that checks domain availability.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: 'https://brandforge.app/blog/food-truck-name-generator',
  },
  robots: { index: true, follow: true },
}

const CATEGORIES = [
  {
    name: 'Taco & Mexican Truck Names',
    names: ['Taco Republic', 'Fuego Street Tacos', 'The Wandering Jalapeño', 'Casa Taqueria', 'Salsa Cartel', 'Guac & Roll', 'El Camino Taco', 'Cilantro Kings', 'Masa & Fire', 'Taco Circus', 'Baja Drift', 'The Salsa Route', 'Lucha Libre Tacos', 'Serrano Station', 'Tortilla Express', 'Carnita Club', 'Habanero Highway', 'Taco Bandito', 'El Fuego Truck', 'The Queso Quest', 'Verde & Co.', 'Pico de Gallo Truck', 'Chile Express', 'Taco Safari', 'The Marg Cart', 'Salsa Vaquera', 'Oaxaca on Wheels', 'Taco Terrarium', 'Fiesta Cart', 'Maíz Street'],
  },
  {
    name: 'Burger & Slider Truck Names',
    names: ['Patty Wagon', 'Slide & Serve', 'The Burger Bus', 'Smash Cartel', 'Bun & Run', 'Griddle Republic', 'Slider Society', 'The Beef Barn', 'Stacked Truck', 'Burger Bureau', 'Flip & Roll', 'Juicy Lucy Truck', 'Patty Shack', 'The Slider Kings', 'Grill Marks', 'Burger Drift', 'Sidecar Sliders', 'The Onion Ring', 'Chop House Truck', 'Burger Nomad', 'Double Stack', 'The Meltdown', 'Bun Buggy', 'Smash & Dash', 'The Brisket Bus', 'Griddle House', 'Slider Station', 'Burger Cartel', 'Patty Project', 'Flip Truck'],
  },
  {
    name: 'Pizza Truck Names',
    names: ['Pie Cruiser', 'Dough & Go', 'The Pizza Pilgrim', 'Slice Squad', 'Brick Oven Bus', 'Dough Drift', 'Crust Cartel', 'The Rolling Pie', 'Slice Station', 'Wood-Fired Wheels', 'Neapolitan Express', 'The Pie Route', 'Slice & Drive', 'Dough Boy Truck', 'Pizza Pilots', 'The Slice Truck', 'Crust & Co.', 'Margherita Mobile', 'Calzone Cruiser', 'Dough Engine', 'Pie Patrol', 'Slice Runner', 'The Brick Bus', 'Focaccia Flyer', 'The Pizza Pod', 'Sicilian Street', 'Slice Ventures', 'The Dough Drop', 'Pizza Port', 'Crust Cruiser'],
  },
  {
    name: 'BBQ & Smoke Truck Names',
    names: ['Rolling Embers', 'Smoke & Wheel', 'Brisket Bus', 'The Pit Stop', 'Hickory Highway', 'Smoke Wagon', 'Char & Cart', 'The Bark Truck', 'Ember & Iron', 'Smoke Drift', 'Low & Slow Mobile', 'Rib Runner', 'The Smokehouse Cart', 'Ash & Oak Truck', 'Wood-Fired Wheels', 'The Brisket Route', 'Smoke Signal Truck', 'Pitmaster Express', 'Burnt End Bus', 'The Char Cart', 'Smoke Nomad', 'Hickory & Co.', 'The Pit Patrol', 'BBQ Express', 'Smoky Road', 'The Ember Cart', 'Brisket & Brothers', 'Smoke Route', 'Char Cruiser', 'The BBQ Bus'],
  },
  {
    name: 'Asian & Fusion Truck Names',
    names: ['The Wandering Wok', 'Ramen Road', 'Bao Bus', 'Noodle Cartel', 'Dim Sum Drift', 'Pho Wheels', 'The Rice Route', 'Wok & Roll', 'Miso Mobile', 'The Dumpling Drop', 'Sriracha Station', 'Bao House', 'Kimchi Cruiser', 'Yaki Cart', 'The Noodle Bus', 'Gyoza Go', 'Ramen Republic', 'The Bao Route', 'Teriyaki Truck', 'Wok Star', 'The Pho Express', 'Sushi Station', 'Umi Wheels', 'Banh Mi Bus', 'The Stir-Fry Cart', 'Mochi Mobile', 'Noodle Nomad', 'Wok Patrol', 'The Miso Route', 'Sumo Sliders'],
  },
  {
    name: 'Dessert & Sweet Truck Names',
    names: ['Sweet Wheels', 'The Sugar Bus', 'Frost & Go', 'The Churro Cart', 'Cupcake Cruiser', 'Sweet Drift', 'The Ice Cream Route', 'Cookie Cartel', 'Waffle Wagon', 'The Sugar Drop', 'Frozen Wheels', 'The Donut Bus', 'Candy Cruiser', 'Sweet Roll Truck', 'The Frost Express', 'Cupcake Highway', 'Scoop Cart', 'The Sugar Route', 'Fudge Bus', 'Dough & Sugar', 'The Cookie Cart', 'The Churro Route', 'Gelato Go', 'Sweet Spot Truck', 'The Cake Cruiser', 'Sugar Nomad', 'The Pastry Bus', 'Ice Cream Express', 'The Brownie Bus', 'Sweet Ride'],
  },
  {
    name: 'Healthy & Fresh Truck Names',
    names: ['Green Machine', 'The Fresh Route', 'Sprout & Go', 'Veggie Drift', 'Lean & Green Truck', 'The Salad Cart', 'Harvest Wheels', 'Fresh Express', 'The Kale Route', 'Quinoa Cartel', 'Wellness Wagon', 'The Acai Bus', 'Clean Eats Truck', 'Green Go', 'Vitality Van', 'The Smoothie Route', 'Fresh Fuel', 'Raw & Roll', 'The Veggie Bus', 'Nourish Cart', 'The Power Bowl', 'Farm to Truck', 'Garden Express', 'The Herb Route', 'Fresh Pedal', 'Bowl & Go', 'The Green Cruiser', 'Alive Truck', 'Veggie Ventures', 'The Juice Bus'],
  },
  {
    name: 'Seafood Truck Names',
    names: ['The Lobster Roll', 'Catch & Go', 'The Oyster Cart', 'Surf & Wheel', 'Ceviche Cruiser', 'The Fish Route', 'Shrimp Shack Truck', 'The Crab Bus', 'Pier Express', 'The Raw Bar Cart', 'Sea & Street', 'The Lobster Bus', 'Tide & Trailer', 'The Clam Cart', 'Fishmonger Express', 'The Tuna Route', 'Shellfish Wheels', 'The Crab Cart', 'Pier Drift', 'Ocean Express', 'The Shrimp Route', 'The Catch Cart', 'Harbor House Truck', 'The Lobster Cart', 'Seafood Express', 'Coral Cruiser', 'The Salmon Bus', 'Wave & Wheel', 'The Oyster Route', 'Dock & Go'],
  },
  {
    name: 'Clever & Pun Truck Names',
    names: ['Wheelie Good Food', 'Grill Seeker', 'Bite Club', 'The Rolling Scone', 'Thai Me Up', 'Pita Please', 'Pasta La Vista', 'Lord of the Pies', 'Naan Stop', 'Bunless Journey', 'Falafel Force', 'Churro Loco', 'Waffle House of Cards', 'Donut Enter', 'Bacon the Rules', 'You Knead This', 'Pita Pocket Express', 'The Daily Bread', 'Soup Er Truck', 'Rolling in the Dough', 'Taco Chance', 'Pho Real', 'Churro Believe It', 'The Great Ba-cini', 'Naan of Your Business', 'Penne for Your Thoughts', 'Batter Up Truck', 'Mac the Knife', 'The Toast of the Town', 'Pizza My Mind'],
  },
  {
    name: 'Modern & Minimalist Truck Names',
    names: ['DRIFT', 'HATCH', 'CRATE', 'CURB', 'STACK', 'PARE', 'SEAR', 'BLAZE', 'EMBER', 'PULSE', 'FORGE', 'ROAM', 'MINT', 'HUE', 'CHAR', 'BASE', 'SOW', 'BROIL', 'PARE Truck', 'ROAM Kitchen', 'HATCH Street', 'SEAR & Co.', 'CURB Side', 'BASE Kitchen', 'DRIFT Food', 'STACK Truck', 'EMBER Cart', 'FORGE Food', 'PULSE Kitchen'],
  },
]

const NAMING_STRATEGIES = [
  {
    name: 'Food-First & Descriptive',
    description: 'Names that tell people exactly what you serve — the fastest way to attract hungry customers.',
    examples: 'Taco Republic, The Burger Bus, Smoke Wagon, Slice Station',
    why: 'Food truck customers are walking by on the street, scrolling through delivery apps, or searching "food trucks near me." They make decisions in seconds. A name like "Taco Republic" or "The Burger Bus" instantly tells them what you serve — no guessing required. On Instagram and TikTok, descriptive names are searchable. "Best taco truck" is a search query. "Best Curiosity Cart" is not. Food-first names win in the food truck space because speed and clarity beat cleverness.',
  },
  {
    name: 'Movement & Mobility',
    description: 'Names that lean into the truck lifestyle — wheels, streets, routes, and roaming.',
    examples: 'Rolling Embers, The Wandering Wok, Ramen Road, Pie Cruiser',
    why: 'Food trucks are mobile by nature. Names that incorporate movement — "Rolling," "Wandering," "Route," "Drift," "Cruiser" — tap into the romance of the open road and the excitement of street food culture. These names feel alive, adventurous, and part of the experience. Customers don\'t just buy food from a truck — they buy into the story of a chef who took their craft to the streets.',
  },
  {
    name: 'Playful & Punny',
    description: 'Clever wordplay that makes people smile and remember you.',
    examples: 'Patty Wagon, Grill Seeker, Thai Me Up, Lord of the Pies',
    why: 'Food trucks live on social media. A punny name is instantly shareable — people photograph it, tag it, and tell their friends about it. "Patty Wagon" gets a laugh and a photo. "Grill Seeker" gets a smirk and a follow. The food truck industry has a culture of fun and personality, and your name should reflect that. Just make sure the pun is easy to spell and pronounce — if someone can\'t search for it, the cleverness is wasted.',
  },
  {
    name: 'Neighborhood & Location-Based',
    description: 'Names that ground your truck in a place and build local identity.',
    examples: 'Stone Street Tacos, Eastside BBQ, Mission Slider Co., Harbor Pie',
    why: 'Food trucks are deeply local businesses. "Eastside BBQ" immediately tells people where to find you and creates neighborhood pride. Location-based names dominate in local search ("food truck near me" + your neighborhood name), and they create loyalty — people love supporting their local truck. This strategy is especially powerful in cities with strong neighborhood identities like Austin, Portland, or Brooklyn.',
  },
  {
    name: 'Bold & Attitude-Driven',
    description: 'Names with swagger and personality that stand out in a crowded pod.',
    examples: 'Smoke Cartel, Salsa Cartel, Smash Cartel, Brisket Bandits',
    why: 'When you\'re parked in a row of 8 food trucks at a festival, your name needs to stand out from 20 feet away on a menu board or banner. Bold names with attitude — "Cartel," "Bandits," "Republic," "Squad" — command attention and create a brand personality that\'s impossible to ignore. These names say "we\'re confident, we\'re different, and our food backs it up." They work especially well for BBQ, taco, and burger trucks.',
  },
  {
    name: 'Short & Punchy (One or Two Words)',
    description: 'Minimalist names that look incredible on truck wraps, menus, and social media.',
    examples: 'DRIFT, HATCH, SEAR, EMBER, CRATE, ROAM',
    why: 'Your food truck name will be displayed on the side of a vehicle, printed on napkins, stamped on stickers, and posted on Instagram stories. Short names scale perfectly — they look amazing on a truck wrap and read instantly from across a parking lot. "DRIFT" on a matte black truck is a brand. "The Wandering Artisan Food Experience" is a paragraph. In the food truck world, where space is limited and first impressions happen fast, brevity wins.',
  },
  {
    name: 'Story & Heritage',
    description: 'Names that reference culture, family recipes, or food traditions.',
    examples: 'Oaxaca on Wheels, Neapolitan Express, The Brisket Route, Saffron Road',
    why: 'Food trucks that succeed aren\'t just serving food — they\'re telling a story about where their recipes come from. Names like "Oaxaca on Wheels" or "Neapolitan Express" signal authenticity and heritage before anyone takes a bite. Customers increasingly seek out food trucks with genuine cultural stories. This strategy works especially well for cuisine-specific trucks — Mexican, Italian, Korean, Vietnamese — where the heritage is part of the selling point.',
  },
]

const NAMING_MISTAKES = [
  {
    title: 'Making your name impossible to spell',
    description: 'Food trucks live on word-of-mouth. If someone says "You have to try Guërró Tacos" and their friend can\'t spell it to search on Instagram, you\'ve lost a customer. Your truck name should be spellable after hearing it once. "Fuego Tacos" works. "Phuego Taco\'s" does not. The same applies to hashtags — if people can\'t spell your name, they can\'t tag you.',
  },
  {
    title: 'Being too clever at the expense of clarity',
    description: '"The Curiosity Cart" sounds intriguing, but what do they serve? Tacos? Ice cream? Mystery meat? Food truck customers decide in 3-5 seconds. If your name doesn\'t hint at what you serve, people will walk past. "Curiosity Cart BBQ" solves this. "The Curiosity Cart" alone doesn\'t. Cleverness is great — just pair it with clarity.',
  },
  {
    title: 'Choosing a name that limits your menu',
    description: '"Just Tacos" locks you into tacos. What happens when you want to add breakfast burritos? Or seasonal specials? The most successful food trucks pick names that let their menu evolve. "Fuego Street Kitchen" lets you serve tacos, burritos, and anything else that fits the brand. "Just Tacos" doesn\'t. Think about where you want to be in 3 years, not just day one.',
  },
  {
    title: 'Ignoring the Instagram & TikTok factor',
    description: 'Food trucks get discovered on Instagram and TikTok. Your name needs to work as a handle (@rollingembers), look good in a story, and be findable in search. If the Instagram handle is taken, you\'re fighting for discoverability from day one. Check social handles before you commit to a name — this is non-negotiable for food trucks.',
  },
  {
    title: 'Skipping the truck wrap test',
    description: 'Your name will be 4-8 feet wide on the side of a truck. Long names become unreadable at speed. "Rolling Embers" looks stunning on a truck wrap. "The Authentic Southern Barbecue Experience Food Truck" is a billboard that nobody can read while driving past. If your name doesn\'t fit on the side of a truck in bold letters, it\'s too long.',
  },
  {
    title: 'Forgetting about health department permits',
    description: 'Most cities require your food truck name to match your business license, health permit, and insurance. Changing your name later means updating all of these — plus your truck wrap, menus, signage, social media, and domain. Choose a name you can commit to from day one. Do a quick search on your city\'s food truck permit database to make sure no one else is operating under a similar name.',
  },
  {
    title: 'Not checking if the domain and handles are available',
    description: 'Your food truck needs a website (for the menu, hours, and location) and social media (for posting daily locations). If the .com is taken and the Instagram handle is @rollingembers_truck_2026, your digital presence is fragmented from day one. Check domain availability and social handles before committing to any name. This takes 5 minutes and saves you weeks of rebranding.',
  },
]

const FAQ_ITEMS = [
  {
    question: 'How does the food truck name generator work?',
    answer: 'Describe your food truck — your cuisine (tacos, BBQ, burgers, dessert, etc.), your style (playful, bold, minimalist, heritage), and your target customers. BrandForge\'s AI generates custom name suggestions paired with complete brand kits including logo concepts, color palettes, taglines, and domain & social availability checks.',
  },
  {
    question: 'Is the food truck name generator free?',
    answer: 'Yes! You can generate food truck name ideas for free — 5 suggestions per search, unlimited searches, no credit card required. Unlock the full brand kit (logo, colors, tagline, typography, domain & social checks) for $9 per brand kit.',
  },
  {
    question: 'What makes a good food truck name?',
    answer: 'A great food truck name is easy to spell after hearing it once, hints at what you serve, looks incredible on a truck wrap, works as an Instagram handle, and makes people smile or curious. The best food truck names — Kogi BBQ, The Halal Guys, Coolhaus, Fuku — are distinctive, memorable, and instantly tell you something about the food.',
  },
  {
    question: 'Should I include my cuisine in the food truck name?',
    answer: 'In most cases, yes. Food truck customers make split-second decisions. A name like "Fuego Tacos" immediately tells people what you serve. A name like "The Curiosity Cart" makes them wonder — and most will just walk past. That said, if your truck has a strong brand identity and you\'re willing to invest in marketing, a cuisine-agnostic name like "DRIFT" or "ROAM" can work. Just pair it with a clear tagline or descriptor on the truck.',
  },
  {
    question: 'Can I use these names for my food truck business?',
    answer: 'Absolutely. All names you generate are yours to use commercially — for business registration, truck wraps, menus, social media, website, and merchandise. There are no licensing restrictions. Just make sure to check trademark availability for your final choice, especially in the food and beverage classes.',
  },
  {
    question: 'How important is a matching domain for food trucks?',
    answer: 'Very important, but for different reasons than other businesses. Food trucks need a website primarily for: (1) posting daily locations and hours, (2) displaying the menu, and (3) catering inquiries. A matching domain makes you easy to find and looks professional on catering proposals. If your exact .com is taken, .co and .truck are strong alternatives in the food truck space.',
  },
  {
    question: 'What comes in the brand kit for each name?',
    answer: 'Each brand kit includes: a logo concept (text-based with font pairing), a 5-color palette with hex codes, a custom tagline, typography recommendations, and real-time availability checks for domains and social handles. You can download it all as a PDF brand guidelines document.',
  },
  {
    question: 'How do food truck names differ from restaurant names?',
    answer: 'Food truck names face unique challenges that restaurant names don\'t: they must be readable at 30 mph on a truck wrap, spellable after a single mention at a loud festival, short enough for Instagram hashtags, and memorable enough for word-of-mouth in a competitive pod. A restaurant name works on a awning. A food truck name has to work on a moving vehicle, a tiny menu board, and a phone screen simultaneously. Shorter, punchier, and more descriptive wins.',
  },
]

const INDUSTRY_LINKS = [
  { name: '🌮 AI Name Generator', href: '/generate', desc: 'Generate food truck names with full brand kits' },
  { name: '🍽️ Restaurant Name Generator', href: '/blog/restaurant-name-generator', desc: '300+ restaurant name ideas' },
  { name: '☕ Coffee Shop Name Generator', href: '/blog/coffee-brand-name-generator', desc: '300+ coffee shop name ideas' },
  { name: '🥖 Bakery Name Generator', href: '/blog/bakery-name-generator', desc: '300+ bakery name ideas' },
  { name: '🎯 Catchy Business Names', href: '/blog/catchy-business-names', desc: '150+ catchy business name ideas' },
  { name: '📋 How to Choose a Business Name', href: '/blog/how-to-choose-business-name', desc: 'Complete naming guide for 2026' },
  { name: '💼 Small Business Name Generator', href: '/blog/small-business-name-generator', desc: '200+ small business name ideas' },
  { name: '🏠 Real Estate Name Generator', href: '/blog/real-estate-brand-name-generator', desc: '300+ real estate name ideas' },
  { name: '📊 Marketing Agency Names', href: '/blog/marketing-agency-brand-name-generator', desc: '300+ marketing agency name ideas' },
  { name: '✨ Brand Name Generator', href: '/blog/brand-name-generator', desc: 'How to find the perfect brand name' },
]

export default function FoodTruckNameGeneratorPage() {
  return (
    <>
      <BlogPostSchema
        title="Food Truck Name Generator: 300+ Food Truck Name Ideas for 2026 + Free AI Tool"
        description="300+ food truck name ideas across 10 categories, 7 naming strategies from top food truck brands, and a free AI generator with domain & social availability checks."
        url="https://brandforge.app/blog/food-truck-name-generator"
        datePublished="2026-08-23"
        dateModified="2026-08-23"
      />
      <HowToSchema
        name="How to Name Your Food Truck in 5 Steps"
        description="A 5-step process for naming your food truck — from brainstorming to finalizing your brand name."
        url="https://brandforge.app/blog/food-truck-name-generator"
        totalTime="PT20M"
        steps={[
          { name: 'Brainstorm broadly by cuisine and style', text: 'Use BrandForge\'s food truck name generator to create a broad list. Try food-first names, playful names, bold names, location names, and heritage names. Don\'t filter yet — the goal is volume.' },
          { name: 'Filter by your truck\'s vibe', text: 'Cross out names that don\'t match your food truck\'s personality. A BBQ truck needs a different name than an acai bowl truck. A playful pun works for a taco truck but feels wrong for a fine-dining pop-up.' },
          { name: 'Run the Truck Wrap Test', text: 'Print your top 10 names in large bold letters and imagine each one on the side of your truck. Which names look stunning at 8 feet wide? Which ones are readable from 30 feet away? Which ones make you want to walk over and order? The Truck Wrap Test eliminates names that are too long, too complicated, or don\'t pop on a vehicle.' },
          { name: 'Check domain, social handles, and local permits', text: 'Four checks: (1) Is the .com available? Check with BrandForge\'s domain checker. Also check .truck and .co as alternatives. (2) Check Instagram, TikTok, and Yelp for handle availability — these are your primary marketing channels. (3) Search your city\'s food truck permit database for similar names. (4) Search USPTO for trademark conflicts in Class 43 (food services).' },
          { name: 'Say it at a loud festival', text: 'Food trucks live at festivals, street fairs, and busy pods where it\'s loud. Would someone say "You have to try Rolling Embers — their brisket is incredible" and would their friend remember it? The best food truck names are names people can hear in a noisy crowd, spell in a text, and find on Instagram. If it passes the festival test, it works.' },
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
                    name: 'Food Truck Name Generator',
                    item: 'https://brandforge.app/blog/food-truck-name-generator',
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
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5 text-sm font-medium text-orange-700">
            🌮 Food Truck Naming Guide
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Food Truck Name Generator:{' '}
            <span className="gradient-text">300+ Ideas for 2026</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            300+ food truck name ideas across 10 categories, 7 proven naming strategies from top food truck brands, and a free AI generator that checks domain availability instantly.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="/generate"
              className="btn-primary inline-flex items-center gap-2 text-base px-8 py-3"
            >
              Generate Food Truck Names
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/food-truck-name-generator"
              className="btn-secondary inline-flex items-center gap-2 text-base px-8 py-3"
            >
              🌮 Try the Generator
            </a>
          </div>
        </header>

        {/* Table of Contents */}
        <nav className="mb-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-sm font-semibold text-slate-900 mb-3">📋 In this guide:</h2>
          <ol className="space-y-2 text-sm text-slate-600">
            <li><a href="#categories" className="hover:text-brand-600 transition-colors">300+ food truck name ideas by category</a></li>
            <li><a href="#strategies" className="hover:text-brand-600 transition-colors">7 naming strategies from top food truck brands</a></li>
            <li><a href="#process" className="hover:text-brand-600 transition-colors">5-step naming process for food trucks</a></li>
            <li><a href="#mistakes" className="hover:text-brand-600 transition-colors">7 naming mistakes that cost food trucks customers</a></li>
            <li><a href="#faq" className="hover:text-brand-600 transition-colors">FAQ: Everything about food truck names</a></li>
          </ol>
        </nav>

        {/* Categories */}
        <section id="categories" className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">
            300+ Food Truck Name Ideas by Category
          </h2>
          <p className="text-slate-600 mb-8">
            Browse food truck name ideas organized by cuisine and style. From taco trucks and BBQ rigs to dessert carts and modern minimalist concepts — find inspiration for your mobile food business.
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
              Generate Custom Names for Your Food Truck
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </section>

        {/* Naming Strategies */}
        <section id="strategies" className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">
            7 Naming Strategies Top Food Truck Brands Use
          </h2>
          <p className="text-slate-600 mb-8">
            The best food truck names aren't random — they follow proven naming patterns. Here are 7 strategies used by successful food trucks across the country.
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
            How to Name Your Food Truck in 5 Steps
          </h2>
          <p className="text-slate-600 mb-8">
            A proven process for naming your food truck — from brainstorming to your first day on the street.
          </p>

          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Define your truck concept</h3>
                  <p className="mt-2 text-slate-600">Before you name anything, get specific about what kind of food truck you're building. What's your cuisine? Who's your customer? What's the vibe — fast and loud, or slow and artisanal? Are you a taco truck at festivals, a dessert truck at corporate events, or a BBQ rig that parks at breweries? Your concept shapes your name entirely. "Rolling Embers" works for BBQ. "Frost & Go" works for ice cream. Write down your concept, your ideal customer, and the experience you want to deliver.</p>
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
                  <p className="mt-2 text-slate-600">Use BrandForge's food truck name generator above to create a broad list. Try different angles — food-first names, playful puns, bold attitude names, location names, heritage names. Don't filter yet. The goal is volume. Mix in cuisine-specific options and broad concepts. You'll narrow down in the next steps.</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Run the Truck Wrap Test</h3>
                  <p className="mt-2 text-slate-600">This is the most important test for food truck names. Print your top 10 names in large bold letters and imagine each one on the side of your truck at 4-8 feet wide. Which names look stunning? Which ones are readable from across a parking lot? Which ones make people want to walk over and order? The Truck Wrap Test eliminates names that are too long, too complicated, or don't pop on a vehicle. A name that works on a business card but not on a truck is the wrong name for a food truck.</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-white font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Check domain, social handles, and local permits</h3>
                  <p className="mt-2 text-slate-600">Four checks, all critical for food trucks: (1) Is the .com domain available? Check with BrandForge's domain checker. Also check .truck and .co as alternatives. (2) Check Instagram, TikTok, and Yelp for handle availability — these are your primary marketing channels. (3) Search your city's food truck permit database for similar names — many cities have public registries. (4) Search the USPTO database for trademark conflicts in Class 43 (food services).</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-white font-bold">
                  5
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Say it at a loud festival</h3>
                  <p className="mt-2 text-slate-600">Food trucks thrive at festivals, street fairs, and busy food truck pods where it's loud and chaotic. Would someone say "You have to try Rolling Embers — their brisket is incredible" and would their friend remember it? Could they spell it in a text? Could they find it on Instagram? The best food truck names are names people can hear in a noisy crowd, spell in a text message, and find on social media. If it passes the festival test, it works.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Naming Mistakes */}
        <section id="mistakes" className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">
            7 Naming Mistakes That Cost Food Trucks Customers
          </h2>
          <p className="text-slate-600 mb-8">
            Avoid these common pitfalls that make food trucks harder to find, remember, and recommend.
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
            More Food & Beverage Name Generators
          </h2>
          <p className="text-slate-600 mb-6">
            Explore name generators for food-adjacent and food & beverage businesses.
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
            Ready to Name Your Food Truck?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Describe your food truck concept. Get names with logo concepts, color palettes, taglines, and domain checks. Free to start, $9 per brand kit you love.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/generate"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-semibold text-slate-900 shadow-lg hover:bg-gray-50 transition-colors"
            >
              Generate Food Truck Names
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
            <Link href="/blog/restaurant-name-generator" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all">
              <div className="text-2xl mb-2">🍽️</div>
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Restaurant Name Generator</h3>
              <p className="text-sm text-slate-500 mt-1">300+ restaurant name ideas for every dining concept.</p>
            </Link>
            <Link href="/blog/bakery-name-generator" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all">
              <div className="text-2xl mb-2">🥖</div>
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Bakery Name Generator</h3>
              <p className="text-sm text-slate-500 mt-1">300+ bakery name ideas for bakeries and pastry shops.</p>
            </Link>
            <Link href="/blog/coffee-brand-name-generator" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all">
              <div className="text-2xl mb-2">☕</div>
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Coffee Shop Name Generator</h3>
              <p className="text-sm text-slate-500 mt-1">300+ coffee shop and café name ideas.</p>
            </Link>
            <Link href="/blog/catchy-business-names" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all">
              <div className="text-2xl mb-2">🎯</div>
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Catchy Business Names</h3>
              <p className="text-sm text-slate-500 mt-1">150+ catchy business name ideas that stick in people's minds.</p>
            </Link>
            <Link href="/blog/how-to-choose-business-name" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all">
              <div className="text-2xl mb-2">✏️</div>
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">How to Choose a Business Name</h3>
              <p className="text-sm text-slate-500 mt-1">The complete guide to naming a business in 2026.</p>
            </Link>
            <Link href="/blog/small-business-name-generator" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all">
              <div className="text-2xl mb-2">💼</div>
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Small Business Name Generator</h3>
              <p className="text-sm text-slate-500 mt-1">200+ small business name ideas across every industry.</p>
            </Link>
          </div>
        </section>

        {/* Newsletter */}
        <BlogNewsletterSection />
      </article>
    </>
  )
}