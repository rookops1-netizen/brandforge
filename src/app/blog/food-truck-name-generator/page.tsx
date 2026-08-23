/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import { BlogNewsletterSection } from '@/components/BlogNewsletterSection'
import { BlogPostSchema } from '@/components/BlogPostSchema'
import { HowToSchema } from '@/components/HowToSchema'

export const dynamic = 'force-static'
export const metadata: Metadata = {
  title: 'Food Truck Name Generator: 300+ Food Truck Name Ideas for 2026 + Free AI Tool',
  description: '300+ food truck name ideas across 10 categories, 7 proven naming strategies from top food trucks, and a free AI generator that checks domain & social availability instantly.',
  keywords: [
    'food truck name generator',
    'food truck names',
    'food truck name ideas',
    'food cart name generator',
    'food truck business names',
    'creative food truck names',
    'catchy food truck names',
    'best food truck names',
    'how to name a food truck',
    'food truck naming tips',
    'unique food truck names',
    'food truck brand names',
    'cool food truck names',
    'food truck name ideas 2026',
    'funny food truck names',
    'cute food truck names',
    'street food names',
    'mobile kitchen names',
    'food trailer name ideas',
    'pop-up restaurant names',
  ],
  openGraph: {
    title: 'Food Truck Name Generator: 300+ Food Truck Name Ideas for 2026 + Free AI Tool',
    description: '300+ food truck name ideas by category, 7 naming strategies from top food trucks, and a free AI generator with domain & social availability checks.',
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
    name: 'Punny & Playful Food Truck Names',
    names: ['Holy Crepe', 'Wok This Way', 'Thai Me Up', 'Pho Real', 'Let Them Eat Tacos', 'Curry Up Now', 'Pasta La Vista', 'Wrap Star', 'Lord of the Fries', 'The Wing Dynasty', 'Naan Stop', 'Bahn Me!', 'Grill Seekers', 'Bite Club', 'Wok & Roll', 'The Fryfather', 'Pita Please', 'Soup-erman', 'Roll Model', 'Dough Not Disturb', 'Burger She Wrote', 'Taco Chance', 'Pho Shizzle', 'Mac & Cheese Please', 'The Great Bakesby', 'Falafel This Way', 'Ramenhood', 'Batter Up', 'Grill Power', 'Churro Luck'],
  },
  {
    name: 'Regional & Authentic Food Truck Names',
    names: ['Seoul Street', 'Oaxaca Kitchen', 'Bengal Bite', 'Sicilian Slice', 'Hanoi Hustle', 'Bombay Box', 'Baja Bound', 'Nashville Flame', 'Memphis Smoke', 'Brooklyn Bao', 'Taipei Cart', 'Puebla Plate', 'Szechuan Street', 'Saigon Roll', 'Havana Street', 'Kyoto Cart', 'Carolina BBQ Co.', 'K-Town Kitchen', 'Chi-Town Bites', 'Texas Smoke Cart', 'NOLA Kitchen', 'PDX Wok', 'ATL Biscuit', 'Detroit Slice', 'Philly Cart', 'Portland Noodle', 'Austin Taco Project', 'LA Grill Cart', 'SF Rice Box', 'Chi-Town Grill'],
  },
  {
    name: 'Modern & Minimalist Food Truck Names',
    names: ['STACK', 'BRICK', 'GRIND', 'SMOKT', 'BIRD', 'MELT', 'CART', 'FOLD', 'COAL', 'SLAB', 'SEAR', 'SALT', 'BLAZE', 'CUBE', 'ROAST', 'DRFT', 'BURN', 'CRFT', 'POKE', 'SIFT', 'GLAZE', 'RIND', 'TONG', 'BOLT', 'RUST', 'CHAR', 'KNOT', 'DASH', 'CRST', 'PINT'],
  },
  {
    name: 'Farm-to-Street & Sustainable Food Truck Names',
    names: ['Farm Cart Kitchen', 'The Honest Trailer', 'Soil & Street', 'Field & Fry', 'The Local Wok', 'Earth Kitchen', 'Sprout & Cart', 'The Good Truck', 'Harvest Kitchen', 'The Green Wagon', 'Root & Roll', 'Garden Cart Co.', 'The Seasonal Slice', 'Bloom Kitchen', 'The Sustainable Skillet', 'Farm to Fork Truck', 'The Pasture Cart', 'Fresh Press Kitchen', 'The Collective Kitchen', 'Honest Earth Truck', 'Field Kitchen Co.', 'The Wild Wok', 'Greens & Grains', 'The Local Ladle', 'Terra Truck Kitchen', 'Farmstand Bites', 'The Heritage Cart', 'Community Kitchen', 'The Harvest Wagon', 'Patch & Plate'],
  },
  {
    name: 'BBQ & Smoke-Focused Food Truck Names',
    names: ['Smoke & Fire', 'The Brisket Cart', 'Low & Slow Kitchen', 'Char & Bark', 'The Pit Stop', 'Smoke Ring BBQ', 'The Burnt End', 'Ash & Ember', 'The Smokehouse Cart', 'Pitmaster Kitchen', 'The Wood Cart', 'Smoke Signal BBQ', 'The Charcoal Cart', 'Rack & Roll', 'The Brisket Project', 'Smoke & Coals', 'The Fire Pit', 'Hickory Kitchen', 'The Smoke Wagon', 'Oak & Flame', 'The BBQ Cart', 'Ember & Smoke', 'The Rib Wagon', 'Brisket & Roll', 'The Pit Kitchen', 'Smokehouse Mobile', 'The Cue Cart', 'Wood-Fired Kitchen', 'The Smoke Stack', 'Bark & Bite BBQ'],
  },
  {
    name: 'Breakfast & Brunch Food Truck Names',
    names: ['The Morning Cart', 'Rise & Dine', 'Stacked Kitchen', 'Batter & Brew', 'The Waffle Wagon', 'Eggs & Co.', 'The Brunch Cart', 'Morning Glory Kitchen', 'The Biscuit Truck', 'Sunrise Skillet', 'The Pancake Project', 'Yolk & Roll', 'The French Toast Cart', 'Butter & Batter', 'The Breakfast Box', 'Dawn Kitchen', 'The Toast Cart', 'Morning Melt', 'The Hash Wagon', 'Brew & Bite', 'The Omelet Express', 'Sunny Side Kitchen', 'The Cinnamon Cart', 'Rise & Grind', 'The Brioche Truck', 'The Croissant Cart', 'First Bite Kitchen', 'The Egg Wagon', 'Breakfast & Beyond', 'The Morning Skillet'],
  },
  {
    name: 'Dessert & Sweet Food Truck Names',
    names: ['Sugar Rush Cart', 'The Sweet Wagon', 'Frost Kitchen', 'The Churro Cart', 'Cookie Dough Co.', 'The Ice Cream Express', 'Sweet Stack', 'The Cupcake Cart', 'Melt & Dip', 'The Pastry Wagon', 'Sugar & Spice Kitchen', 'The Donut Cart', 'Sweet Roll Kitchen', 'The Brownie Box', 'Candy Cart Co.', 'The Fudge Wagon', 'The Gelato Cart', 'Whipped Kitchen', 'The Churro Box', 'Sweet Stack Truck', 'The Macaron Cart', 'Cake & Cart', 'The Sundae Wagon', 'The Cookie Cart', 'Caramel Kitchen', 'The Waffle Cone Express', 'Sweet Tooth Truck', 'The Truffle Cart', 'Dough & Cream', 'The Sweet Skillet'],
  },
  {
    name: 'Taco & Latin Food Truck Names',
    names: ['Taco Cartel', 'The Taco Project', 'Baja Kitchen', 'Salsa & Smoke', 'The Al Pastor Cart', 'Taco Mafia', 'The Guac Wagon', 'Casa Taco', 'The Tortilla Cart', 'El Sabor Kitchen', 'The Queso Cart', 'Taco Nomad', 'The Salsa Bar', 'Oaxaca Street', 'The Chile Cart', 'Taco Republic', 'The Carnitas Wagon', 'Puebla Kitchen', 'The Tamale Cart', 'Taco Loco Co.', 'The Margarita Cart', 'Baja Taco Project', 'The Pico Truck', 'El Taco Cart', 'The Cilantro Kitchen', 'Taco Fuego', 'The Agave Wagon', 'Salsa Street', 'The Lime Cart', 'Taco Tierra'],
  },
  {
    name: 'Asian-Inspired Food Truck Names',
    names: ['The Dumpling Cart', 'Wok Street', 'Ramen Cart Co.', 'The Bao Wagon', 'Pho Cart Kitchen', 'Tokyo Street Bites', 'The Noodle Box', 'Dim Sum & Go', 'The Kimchi Cart', 'Thai Street Kitchen', 'The Spring Roll Wagon', 'Boba & Bites', 'The Pad Thai Cart', 'K-Town Kitchen', 'The Gyoza Cart', 'Hibachi Express', 'The Curry Wagon', 'Seoul Food Cart', 'The Mochi Truck', 'Teriyaki Kitchen', 'The Dim Sum Cart', 'Udon Street', 'The Sushi Box', 'Matcha Cart Co.', 'The Stir Fry Wagon', 'Yakitori Kitchen', 'The Miso Cart', 'Banh Mi Box', 'The Pho Wagon', 'Japchae Kitchen'],
  },
  {
    name: 'Burger & Sandwich Food Truck Names',
    names: ['The Patty Wagon', 'Stacked & Stuffed', 'Melt Kitchen', 'The Grilled Cheese Cart', 'Burger Republic', 'The Sandwich Project', 'Slider Cart Co.', 'The Deli Wagon', 'Bun & Barrel', 'The Cheese Melt', 'Chop & Stack', 'The Hero Cart', 'Bite Kitchen', 'The Smash Wagon', 'Press & Melt', 'The Club Cart', 'Burger Cartel', 'The Reuben Box', 'Stack & Smash', 'The Melt Wagon', 'Grill Mark Kitchen', 'The Hoagie Cart', 'Burger Bros Cart', 'The Panini Wagon', 'Smash Kitchen', 'The Melt Cart', 'Brisket & Bun', 'The Slider Box', 'Griddle Kitchen', 'The Toasted Cart'],
  },
]

const NAMING_STRATEGIES = [
  {
    name: 'Punny & Humorous Names',
    description: 'Food trucks that make people smile — puns, wordplay, and food humor that creates instant memorability.',
    examples: 'Holy Crepe, Wok This Way, Pho Real, Thai Me Up, Lord of the Fries',
    why: 'Food trucks are street culture — playful, irreverent, and fun. A punny name makes your truck the one people photograph and share on Instagram. "Holy Crepe" gets a laugh and a follow. "Pho Real" makes people stop and smile. These names work because they\'re shareable — customers post photos of your truck name on social media, giving you free marketing. The key is making sure the pun matches your cuisine. "Lord of the Fries" only works for a fry-focused truck. Don\'t force it.',
  },
  {
    name: 'Cuisine-First Names',
    description: 'Names that instantly tell customers what you cook — the most effective approach for food trucks.',
    examples: 'Seoul Street, The Brisket Cart, The Dumpling Cart, Taco Cartel',
    why: 'Food trucks have 3 seconds to communicate what they sell. People walking past at a festival or food truck park need to know immediately — "That\'s Korean BBQ" or "That\'s dumplings." "Seoul Street" tells you it\'s Korean food. "The Brisket Cart" tells you it\'s BBQ. "Taco Cartel" tells you it\'s tacos. These names convert better than clever abstract names because they eliminate confusion. When someone is hungry, clarity beats cleverness.',
  },
  {
    name: 'Location & Neighborhood Names',
    description: 'Names that anchor your truck to a city, neighborhood, or street — building local identity and search visibility.',
    examples: 'Brooklyn Bao, Nashville Flame, Portland Noodle, ATX Taco Project',
    why: 'Food trucks are hyperlocal businesses. When someone searches "food trucks near me" or "Austin food trucks" or "Portland street food," your location-based name dominates local search results. "Nashville Flame" shows up for Nashville food searches AND signals hot chicken. "Brooklyn Bao" combines place and cuisine. Location names also build fierce local loyalty — people love repping their city\'s food scene.',
  },
  {
    name: 'Action & Verb-Based Names',
    description: 'Names that use cooking verbs — grill, smoke, melt, stack, smash — creating energy and appetite appeal.',
    examples: 'Smoke & Fire, Stacked Kitchen, The Melt Cart, Smash Kitchen, Grill Power',
    why: 'Action names trigger appetite. When you read "Smoke & Fire," you can almost smell the BBQ. "The Melt Cart" makes you crave grilled cheese. "Smash Kitchen" makes you think of that perfect smashburger sear. These names work on a psychological level — they activate the same brain regions that fire when you\'re actually cooking or eating. They also perform well in Google searches because people search for "smash burgers near me" or "melted cheese food truck."',
  },
  {
    name: 'Minimalist One-Word Names',
    description: 'Short, punchy, one-word names that look incredible on a truck wrap and Instagram feed.',
    examples: 'STACK, GRIND, SMOKT, BIRD, MELT, SEAR, BLAZE, CHAR, DRFT, SALT',
    why: 'One-word names dominate food truck culture — look at CAVA, DIGG, sweetgreen, and SHAK. They look stunning on truck wraps, Instagram feeds, and custom merchandise. "STACK" on a black truck with gold lettering? Instagram gold. "SMOKT" on a matte charcoal trailer? Instant credibility. These names work because they\'re impossible to miss, easy to remember, and they photograph beautifully. The key is choosing a word that\'s evocative of your food — "MELT" for grilled cheese, "BIRD" for chicken, "SEAR" for steak.',
  },
  {
    name: 'Cart, Wagon & Box Names',
    description: 'Names that use "Cart," "Wagon," "Box," "Kitchen," or "Project" to signal mobile food culture.',
    examples: 'The Dumpling Cart, The Sweet Wagon, The Melt Cart, Burger Republic, The Taco Project',
    why: '"Cart," "Wagon," and "Box" are the food truck vocabulary. They immediately signal "mobile food" to customers, which is exactly what you want. "The Dumpling Cart" sounds authentic and street-food credible. "The Sweet Wagon" sounds fun and approachable. "The Taco Project" sounds modern and intentional. These suffixes also help with domain availability — "The Melt Cart" is much easier to get as a .com than just "Melt." Use "Kitchen" for a premium feel, "Cart" or "Wagon" for casual charm, and "Project" for a modern, artisanal vibe.',
  },
  {
    name: 'Ingredient & Dish Names',
    description: 'Names built around a signature ingredient or dish — creating a specialty reputation that draws crowds.',
    examples: 'The Brisket Cart, Pho Cart Kitchen, The Guac Wagon, The Churro Cart, Cookie Dough Co.',
    why: 'The most successful food trucks specialize — and their names reflect that. "The Brisket Cart" tells you this truck does one thing incredibly well. "Pho Cart Kitchen" signals pho expertise. "Cookie Dough Co." tells you exactly what to crave. These names create a specialty reputation that draws dedicated crowds. People don\'t go to "The Brisket Cart" for tacos — they go for the best brisket in the city. This focus makes your marketing 10x easier because you\'re known for one thing.',
  },
]

const NAMING_MISTAKES = [
  {
    title: 'Being too clever at the expense of clarity',
    description: '"XK Culinary" sounds cool but tells nobody what you cook. When someone\'s scrolling Instagram for food trucks, they need to know in 2 seconds that you serve tacos, BBQ, or dumplings. "The Brisket Cart" converts 5x better than "Flame & Fork" because customers immediately know what they\'re getting. Cleverness is a bonus, not the foundation.',
  },
  {
    title: 'Ignoring the Instagram and TikTok test',
    description: 'Food trucks live and die by social media. Your name needs to look good as an @handle and on a truck wrap photo. @lordofthefries is memorable and shareable. @xkculinary3 is not. If your name doesn\'t work as a social handle, it doesn\'t work for a food truck. Check Instagram, TikTok, and Google handle availability before committing.',
  },
  {
    title: 'Not checking local food truck regulations',
    description: 'Many cities require your truck name on permits, health department certificates, and insurance. If you pick a name that\'s already registered locally, you\'ll be forced to rebrand — expensive when your truck is already wrapped. Search your city\'s food truck permit database and state business registry first.',
  },
  {
    title: 'Picking a name that\'s too cuisine-specific',
    description: '"Just Tacos" is clear but what happens when you want to add birria ramen or loaded fries? The best food truck names grow with your menu. "The Brisket Cart" can expand to burgers, burnt ends, and sides. "Just Tacos" cannot. Pick a name that\'s specific enough to signal your style but broad enough to evolve.',
  },
  {
    title: 'Forgetting the truck wrap test',
    description: 'Your name will be printed on a 14-20 foot vehicle driving through traffic. Long names ("The Absolutely Amazing Authentic Mexican Food Cart") are unreadable at 35 mph. Short, punchy names ("TACO CARTEL" or "SMOKT" or "MELT") are visible from across a parking lot. Count the syllables. If it takes more than 2-3 seconds to read, it\'s too long for a truck.',
  },
  {
    title: 'Skipping domain availability checks',
    description: 'Your food truck needs a website for menus, locations, and catering inquiries. If your ideal name\'s .com is taken, you\'ll end up with a confusing URL like "holocrepefoodtruck-atx.com." BrandForge checks domain availability in real-time so you can pick a name with a clean .com from the start.',
  },
  {
    title: 'Copying existing food truck names',
    description: 'There are over 35,000 food trucks in the US. If "The Halal Guys" or "Kogi BBQ" inspired you, great — but don\'t copy their name. Customers and food bloggers know the originals. A derivative name ("The Halal Guys 2" or "Kogi Style BBQ") signals unoriginality. Be inspired by their naming strategy, not their actual name.',
  },
]

const FAQ_ITEMS = [
  {
    question: 'How does the food truck name generator work?',
    answer: 'Describe your food truck concept — your cuisine type (BBQ, tacos, Asian, dessert, etc.), your vibe (playful, authentic, modern, farm-to-street), and your target location. BrandForge\'s AI generates custom name suggestions paired with complete brand kits including logo concepts, color palettes, taglines, and domain & social availability checks.',
  },
  {
    question: 'Is the food truck name generator free?',
    answer: 'Yes! You can generate food truck name ideas for free — 5 suggestions per search, unlimited searches, no credit card required. Unlock the full brand kit (logo, colors, tagline, typography, domain & social checks) for $9 per brand kit.',
  },
  {
    question: 'What makes a good food truck name?',
    answer: 'A great food truck name is visible from 20 feet away (the truck wrap test), easy to say in one breath (the radio test), makes people hungry (appetite appeal), works as an @handle on Instagram and TikTok, and signals your cuisine clearly. The best food truck names — Kogi BBQ, The Halal Guys, Sweetgreen — are memorable, mouth-watering, and instantly clear.',
  },
  {
    question: 'Should my food truck name include my cuisine type?',
    answer: 'Usually yes. Food trucks have 3 seconds to communicate what they sell. "The Brisket Cart" tells you BBQ. "Taco Cartel" tells you tacos. "The Dumpling Cart" tells you dumplings. If you want to be more abstract (like "SMOKT" or "BIRD"), make sure your logo, colors, and menu photos make the cuisine obvious. Cleverness is a bonus, not a replacement for clarity.',
  },
  {
    question: 'Can I use these names for my food truck?',
    answer: 'Absolutely. All names you generate are yours to use commercially — for business registration, truck wraps, menus, social media, and catering. There are no licensing restrictions. Just make sure to check trademark availability for your final choice.',
  },
  {
    question: 'How do I check if a food truck name is already taken?',
    answer: 'Four checks are essential: (1) Search your state\'s business registry to make sure the name isn\'t already registered. (2) Search the USPTO trademark database for existing registrations in Class 43 (food and drink services). (3) Search Instagram, TikTok, and Google for handle availability — these are your primary discovery channels. (4) Search your city\'s food truck permit database — even if a name isn\'t trademarked, having 3 other trucks with similar names in your city creates confusion.',
  },
  {
    question: 'Should my food truck name match my domain?',
    answer: 'Ideally, yes. Your food truck\'s website is where people find your schedule, menu, and catering info. If the .com is taken, .truck, .kitchen, and .co are all popular alternatives for food trucks. BrandForge checks domain availability in real-time so you can pick a name with an available domain from the start.',
  },
  {
    question: 'What are the biggest food truck naming trends in 2026?',
    answer: 'The biggest trends are: (1) Punny and humorous names (Holy Crepe, Pho Real, Lord of the Fries) — shareable on social and create word-of-mouth. (2) Minimalist one-word names (STACK, SMOKT, MELT) — look stunning on truck wraps and Instagram. (3) Cuisine-first names (The Brisket Cart, Taco Cartel) — clarity converts hungry customers. (4) Cart/Wagon/Box suffixes (The Dumpling Cart, The Sweet Wagon) — authentic street food vibes. (5) Location-based names (Nashville Flame, Brooklyn Bao) — dominate local search. The best names combine trend awareness with your unique concept.',
  },
]

const INDUSTRY_LINKS = [
  { name: '🌮 Food Truck Generator', href: '/food-truck-name-generator', desc: 'AI food truck name generator' },
  { name: '🍽️ Restaurant Generator', href: '/blog/restaurant-name-generator', desc: 'Restaurant name ideas' },
  { name: '☕ Coffee Generator', href: '/blog/coffee-brand-name-generator', desc: 'Coffee shop name ideas' },
  { name: '🥖 Bakery Generator', href: '/blog/bakery-name-generator', desc: 'Bakery name ideas' },
  { name: '🍾 Catering Generator', href: '/catering-name-generator', desc: 'Catering business names' },
  { name: '💪 Fitness Generator', href: '/fitness-brand-name-generator', desc: 'Fitness brand names' },
  { name: '🎉 Event Generator', href: '/wedding-name-generator', desc: 'Wedding & event business names' },
  { name: '🐕 Pet Generator', href: '/pet-name-generator', desc: 'Pet business name ideas' },
  { name: '🧹 Cleaning Generator', href: '/blog/cleaning-business-name-generator', desc: 'Cleaning business names' },
  { name: '💼 Small Business Generator', href: '/blog/small-business-name-generator', desc: 'Small business name ideas' },
]

export default function FoodTruckNameGeneratorBlog() {
  return (
    <>
      <BlogPostSchema
        title="Food Truck Name Generator: 300+ Food Truck Name Ideas for 2026 + Free AI Tool"
        description="300+ food truck name ideas across 10 categories, 7 proven naming strategies from top food trucks, and a free AI generator that checks domain & social availability."
        url="https://brandforge.app/blog/food-truck-name-generator"
        datePublished="2026-08-23"
      />
      <HowToSchema
        name="How to Name Your Food Truck in 5 Steps"
        description="A proven 5-step process for naming your food truck — from defining your concept to the recommendation test."
        url="https://brandforge.app/blog/food-truck-name-generator"
        totalTime="PT20M"
        steps={[
          { name: 'Define Your Food Truck Concept', text: 'Get specific about your cuisine, style, and audience. Are you BBQ, tacos, Asian fusion, dessert, or breakfast? Your concept drives whether your name should be punny, authentic, modern, or location-based. "The Brisket Cart" works for BBQ. "Holy Crepe" works for a crepe truck. "SMOKT" works for a modern, Instagram-worthy concept. Write down your cuisine, your vibe, and your ideal customer.' },
          { name: 'Generate 20-30 Name Ideas', text: 'Use BrandForge\'s food truck name generator above to create a broad list. Try punny names, cuisine-first names, location names, action names, and minimalist names. Volume first, filter later. The best food truck names often come from combining two ideas — "Brooklyn" + "Bao" or "Smoke" + "Ring."' },
          { name: 'Run the Truck Wrap Test', text: 'Imagine your top 10 names on a 16-foot food truck driving through city traffic. Can you read it from across a parking lot? Does it make sense in 2 seconds? Does it photograph well for Instagram? The Truck Wrap Test eliminates names that are too long, too abstract, or too hard to read at speed. If you can\'t fit it on a truck and read it from 20 feet, it\'s too long.' },
          { name: 'Check Domain, Social Handles, and Local Permits', text: 'Four checks for food trucks: (1) Is the .com domain available? Check with BrandForge\'s domain checker. (2) Is the @handle available on Instagram and TikTok? These are your primary marketing channels. (3) Search your city\'s food truck permit database — is there already a truck with a similar name? (4) Check USPTO for trademark conflicts in Class 43 (food and drink services).' },
          { name: 'Say It in a Recommendation', text: 'The best food truck names are easy to recommend: "You have to try The Brisket Cart — their burnt ends are insane." If someone can recommend your truck in one sentence and the listener can find it on Google or Instagram, you\'ve got a great name. Test your top 3 names by saying them out loud in a recommendation context. The one that feels most natural wins.' },
        ]}
      />
      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-12">
          <div className="mb-4">
            <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
              Food Truck Naming Guide
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Food Truck Name Generator: 300+ Food Truck Name Ideas for 2026
          </h1>
          <p className="text-lg text-slate-600 mb-6">
            300+ food truck name ideas across 10 categories, 7 naming strategies used by the most successful food trucks, and a free AI generator that checks domain & social availability instantly.
          </p>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <time dateTime="2026-08-23">August 23, 2026</time>
            <span>·</span>
            <span>15 min read</span>
          </div>
        </header>

        {/* CTA Banner */}
        <div className="mb-12 rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 border border-brand-200 p-6 sm:p-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
            Generate Your Food Truck Name Now
          </h2>
          <p className="text-slate-600 mb-6">
            Describe your food truck concept. Get AI-powered name suggestions with logo concepts, color palettes, taglines, and domain availability — free to start.
          </p>
          <a
            href="/generate"
            className="btn-primary inline-flex items-center gap-2 text-base px-8 py-3"
          >
            Generate Food Truck Names
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        {/* Categories */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">
            300+ Food Truck Name Ideas by Category
          </h2>
          <p className="text-slate-600 mb-8">
            Browse food truck name ideas organized by type — from punny and playful names to BBQ-focused, Asian-inspired, and minimalist one-word names. Each category has 30 names designed for that specific food truck concept.
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
            7 Naming Strategies Top Food Trucks Use
          </h2>
          <p className="text-slate-600 mb-8">
            The best food truck names aren't random — they follow proven naming patterns. Here are 7 strategies used by the most successful food trucks in the country.
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
            A proven process for naming your food truck — from concept to first customer.
          </p>

          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Define your food truck concept</h3>
                  <p className="mt-2 text-slate-600">Before you name anything, get specific about what kind of food truck you're building. BBQ? Tacos? Asian fusion? Dessert? Breakfast? Farm-to-street? The concept drives your name entirely. "The Brisket Cart" works for BBQ. "Holy Crepe" works for a crepe truck. "SMOKT" works for a modern, Instagram-worthy concept. "Brooklyn Bao" works for Asian fusion with a local identity. Write down your cuisine, your vibe, and your ideal customer — this is your naming brief.</p>
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
                  <p className="mt-2 text-slate-600">Use BrandForge's food truck name generator above to create a broad list. Try punny names, cuisine-first names, location names, action names, and minimalist names. Volume first, filter later. The best food truck names often come from combining two ideas — "Brooklyn" + "Bao" or "Smoke" + "Ring." Don't judge yet — just generate.</p>
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
                  <p className="mt-2 text-slate-600">Imagine your top 10 names on a 16-foot food truck driving through city traffic. Can you read it from across a parking lot? Does it make sense in 2 seconds? Does it photograph well for Instagram? The Truck Wrap Test eliminates names that are too long, too abstract, or too hard to read at speed. "STACK" on a matte black truck is visible from 100 feet. "The Absolutely Amazing Authentic Mexican Food Cart" is not readable from 20 feet.</p>
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
                  <p className="mt-2 text-slate-600">Four checks for food trucks: (1) Is the .com domain available? Check with BrandForge's domain checker. Also check .truck, .kitchen, and .co as alternatives. (2) Check Instagram and TikTok for handle availability — these are your primary marketing channels. (3) Search your city's food truck permit database — are there already trucks with similar names? (4) Search USPTO for trademark conflicts in Class 43 (food and drink services).</p>
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
                  <p className="mt-2 text-slate-600">Food trucks thrive on word of mouth. Would someone say "You HAVE to try The Brisket Cart — their burnt ends are insane" or "You have to try that one truck... what was it called?" The best food truck names are names people remember and can recommend without spelling them out. Test your top 3 by saying them in a recommendation — the one that feels most natural wins.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Naming Mistakes */}
        <section id="mistakes" className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">
            7 Naming Mistakes That Kill Food Trucks
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
            Explore name generators for food-adjacent and hospitality businesses.
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
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-semibold text-slate-900 hover:bg-slate-100 transition-colors"
            >
              Generate Food Truck Names Free
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
            <Link href="/blog/restaurant-name-generator" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Restaurant Name Generator</h3>
              <p className="mt-1 text-sm text-slate-500">300+ restaurant name ideas across 10 categories with naming strategies.</p>
            </Link>
            <Link href="/blog/how-to-choose-business-name" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">How to Choose a Business Name</h3>
              <p className="mt-1 text-sm text-slate-500">The complete guide to picking a name that sticks, ranks, and scales.</p>
            </Link>
            <Link href="/blog/catchy-business-names" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Catchy Business Names</h3>
              <p className="mt-1 text-sm text-slate-500">150+ catchy name ideas and the 5 principles that make names stick.</p>
            </Link>
            <Link href="/blog/small-business-name-generator" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Small Business Name Generator</h3>
              <p className="mt-1 text-sm text-slate-500">200+ small business name ideas with frameworks for naming.</p>
            </Link>
            <Link href="/blog/brand-color-psychology" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Brand Color Psychology</h3>
              <p className="mt-1 text-sm text-slate-500">What your brand colors say about your food truck — and which colors drive hunger.</p>
            </Link>
            <Link href="/blog/bakery-name-generator" className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">Bakery Name Generator</h3>
              <p className="mt-1 text-sm text-slate-500">300+ bakery name ideas across 10 categories with proven naming strategies.</p>
            </Link>
          </div>
        </section>

        <BlogNewsletterSection />
      </article>
    </>
  )
}