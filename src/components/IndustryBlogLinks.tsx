import Link from 'next/link'

interface BlogLink {
  slug: string
  title: string
}

interface IndustryBlogLinksProps {
  industry: string
  gradient?: string
}

/**
 * Maps each industry page slug to its most relevant blog posts.
 * Each industry gets 3-4 blog posts: 2 universal + 1-2 industry-specific.
 */
const BLOG_LINKS: Record<string, BlogLink[]> = {
  'startup-name-generator': [
    { slug: 'startup-naming-mistakes', title: '7 Naming Mistakes That Kill Startups' },
    { slug: 'how-to-choose-business-name', title: 'How to Choose a Business Name' },
    { slug: 'how-to-come-up-with-business-name', title: 'How to Come Up with a Business Name' },
    { slug: 'brand-name-generator', title: 'Brand Name Generator: Find the Perfect Name' },
  ],
  'restaurant-name-generator': [
    { slug: 'bakery-name-generator', title: 'Bakery Name Generator: 300+ Ideas for 2026' },
    { slug: 'catchy-business-names', title: '150+ Catchy Business Names' },
    { slug: 'how-to-choose-business-name', title: 'How to Choose a Business Name' },
    { slug: 'brand-name-generator', title: 'Brand Name Generator: Find the Perfect Name' },
    { slug: 'brand-color-psychology', title: 'Brand Color Psychology' },
  ],
  'fitness-brand-name-generator': [
    { slug: 'fitness-brand-name-generator', title: 'Fitness Brand Name Generator: 300+ Ideas for 2026' },
    { slug: 'how-to-choose-brand-name', title: 'How to Choose a Brand Name' },
    { slug: 'how-to-choose-business-name', title: 'How to Choose a Business Name' },
    { slug: 'brand-name-generator', title: 'Brand Name Generator: Find the Perfect Name' },
    { slug: 'brand-color-psychology', title: 'Brand Color Psychology' },
  ],
  'real-estate-name-generator': [
    { slug: 'real-estate-brand-name-generator', title: 'Real Estate Brand Name Generator: 300+ Ideas for 2026' },
    { slug: 'how-to-build-brand-identity', title: 'How to Build a Brand Identity' },
    { slug: 'how-to-choose-business-name', title: 'How to Choose a Business Name' },
    { slug: 'brand-name-generator', title: 'Brand Name Generator: Find the Perfect Name' },
    { slug: 'llc-naming-guide', title: 'How to Pick a Name for Your LLC' },
  ],
  'photography-name-generator': [
    { slug: 'photography-brand-name-generator', title: 'Photography Brand Name Generator: 300+ Ideas for 2026' },
    { slug: 'creative-brand-names', title: 'Creative Brand Names: Examples & What Makes Them Work' },
    { slug: 'how-to-choose-business-name', title: 'How to Choose a Business Name' },
    { slug: 'brand-name-generator', title: 'Brand Name Generator: Find the Perfect Name' },
    { slug: 'brand-color-psychology', title: 'Brand Color Psychology: What Your Colors Say' },
  ],
  'beauty-name-generator': [
    { slug: 'brand-color-psychology', title: 'Brand Color Psychology: What Your Colors Say' },
    { slug: 'how-to-choose-business-name', title: 'How to Choose a Business Name' },
    { slug: 'brand-name-generator', title: 'Brand Name Generator: Find the Perfect Name' },
    { slug: 'creative-brand-names', title: 'Creative Brand Names' },
  ],
  'fashion-name-generator': [
    { slug: 'clothing-brand-name-generator', title: 'Clothing Brand Name Generator: 300+ Ideas' },
    { slug: 'brand-color-psychology', title: 'Brand Color Psychology: What Your Colors Say' },
    { slug: 'how-to-choose-business-name', title: 'How to Choose a Business Name' },
    { slug: 'creative-brand-names', title: 'Creative Brand Names' },
  ],
  'food-truck-name-generator': [
    { slug: 'bakery-name-generator', title: 'Bakery Name Generator: 300+ Ideas for 2026' },
    { slug: 'catchy-business-names', title: '150+ Catchy Business Names' },
    { slug: 'how-to-choose-business-name', title: 'How to Choose a Business Name' },
    { slug: 'brand-name-generator', title: 'Brand Name Generator: Find the Perfect Name' },
    { slug: 'small-business-name-generator', title: 'Small Business Name Generator' },
  ],
  'tech-name-generator': [
    { slug: 'saas-name-generator', title: 'SaaS Name Generator: 300+ Ideas for 2026' },
    { slug: 'startup-naming-mistakes', title: '7 Naming Mistakes That Kill Startups' },
    { slug: 'how-to-choose-business-name', title: 'How to Choose a Business Name' },
    { slug: 'brand-name-generator', title: 'Brand Name Generator: Find the Perfect Name' },
    { slug: 'company-name-checker', title: 'Company Name Checker: Verify Availability' },
  ],
  'consulting-name-generator': [
    { slug: 'company-name-checker', title: 'Company Name Checker: Verify Availability' },
    { slug: 'how-to-choose-business-name', title: 'How to Choose a Business Name' },
    { slug: 'brand-name-generator', title: 'Brand Name Generator: Find the Perfect Name' },
    { slug: 'llc-naming-guide', title: 'How to Pick a Name for Your LLC' },
  ],
  'podcast-name-generator': [
    { slug: 'podcast-name-generator', title: 'Podcast Name Generator: 300+ Ideas for 2026' },
    { slug: 'youtube-channel-name-generator', title: 'YouTube Channel Name Generator: 300+ Ideas' },
    { slug: 'how-to-choose-brand-name', title: 'How to Choose a Brand Name' },
    { slug: 'brand-name-generator', title: 'Brand Name Generator: Find the Perfect Name' },
  ],
  'coaching-name-generator': [
    { slug: 'fitness-brand-name-generator', title: 'Fitness Brand Name Generator: 300+ Ideas for 2026' },
    { slug: 'how-to-build-brand-identity', title: 'How to Build a Brand Identity' },
    { slug: 'how-to-choose-business-name', title: 'How to Choose a Business Name' },
    { slug: 'brand-name-generator', title: 'Brand Name Generator: Find the Perfect Name' },
  ],
  'nonprofit-name-generator': [
    { slug: 'unique-business-names', title: 'Unique Business Names: 120+ Standout Ideas' },
    { slug: 'how-to-choose-business-name', title: 'How to Choose a Business Name' },
    { slug: 'brand-name-generator', title: 'Brand Name Generator: Find the Perfect Name' },
    { slug: 'free-brand-name-generator', title: 'Free Brand Name Generator' },
  ],
  'craft-name-generator': [
    { slug: 'creative-brand-names', title: 'Creative Brand Names: Examples & What Makes Them Work' },
    { slug: 'how-to-choose-business-name', title: 'How to Choose a Business Name' },
    { slug: 'brand-name-generator', title: 'Brand Name Generator: Find the Perfect Name' },
    { slug: 'small-business-name-generator', title: 'Small Business Name Generator' },
  ],
  'education-name-generator': [
    { slug: 'product-naming-guide', title: 'Product Naming Guide: Name a Product That Sells' },
    { slug: 'how-to-choose-business-name', title: 'How to Choose a Business Name' },
    { slug: 'brand-name-generator', title: 'Brand Name Generator: Find the Perfect Name' },
    { slug: 'domain-name-availability', title: 'Domain Name Availability Guide' },
  ],
  'yoga-name-generator': [
    { slug: 'fitness-brand-name-generator', title: 'Fitness Brand Name Generator: 300+ Ideas for 2026' },
    { slug: 'brand-color-psychology', title: 'Brand Color Psychology: What Your Colors Say' },
    { slug: 'how-to-choose-brand-name', title: 'How to Choose a Brand Name' },
    { slug: 'brand-name-generator', title: 'Brand Name Generator: Find the Perfect Name' },
  ],
  'coffee-name-generator': [
    { slug: 'bakery-name-generator', title: 'Bakery Name Generator: 300+ Ideas for 2026' },
    { slug: 'catchy-business-names', title: '150+ Catchy Business Names' },
    { slug: 'how-to-choose-business-name', title: 'How to Choose a Business Name' },
    { slug: 'brand-name-generator', title: 'Brand Name Generator: Find the Perfect Name' },
    { slug: 'small-business-name-generator', title: 'Small Business Name Generator' },
  ],
  'music-name-generator': [
    { slug: 'creative-brand-names', title: 'Creative Brand Names: Examples & What Makes Them Work' },
    { slug: 'how-to-choose-brand-name', title: 'How to Choose a Brand Name' },
    { slug: 'brand-name-generator', title: 'Brand Name Generator: Find the Perfect Name' },
    { slug: 'tagline-writing-guide', title: 'Writing a Tagline That Sells' },
  ],
  'wedding-name-generator': [
    { slug: 'tagline-writing-guide', title: 'Writing a Tagline That Sells' },
    { slug: 'how-to-choose-business-name', title: 'How to Choose a Business Name' },
    { slug: 'brand-name-generator', title: 'Brand Name Generator: Find the Perfect Name' },
    { slug: 'brand-color-psychology', title: 'Brand Color Psychology' },
  ],
  'cleaning-business-name-generator': [
    { slug: 'cleaning-business-name-generator', title: 'Cleaning Business Name Generator: 300+ Ideas for 2026' },
    { slug: 'small-business-name-generator', title: 'Small Business Name Generator: 200+ Ideas' },
    { slug: 'how-to-choose-business-name', title: 'How to Choose a Business Name' },
    { slug: 'brand-name-generator', title: 'Brand Name Generator: Find the Perfect Name' },
    { slug: 'catchy-business-names', title: '150+ Catchy Business Names' },
  ],
  'pet-name-generator': [
    { slug: 'small-business-name-generator', title: 'Small Business Name Generator: 200+ Ideas' },
    { slug: 'how-to-choose-business-name', title: 'How to Choose a Business Name' },
    { slug: 'brand-name-generator', title: 'Brand Name Generator: Find the Perfect Name' },
    { slug: 'free-brand-name-generator', title: 'Free Brand Name Generator' },
  ],
  'landscaping-name-generator': [
    { slug: 'small-business-name-generator', title: 'Small Business Name Generator: 200+ Ideas' },
    { slug: 'how-to-choose-business-name', title: 'How to Choose a Business Name' },
    { slug: 'brand-name-generator', title: 'Brand Name Generator: Find the Perfect Name' },
    { slug: 'domain-name-availability', title: 'Domain Name Availability Guide' },
  ],
  'salon-name-generator': [
    { slug: 'salon-brand-name-generator', title: 'Salon Name Generator: 300+ Salon Name Ideas for 2026' },
    { slug: 'brand-color-psychology', title: 'Brand Color Psychology: What Your Colors Say' },
    { slug: 'how-to-choose-business-name', title: 'How to Choose a Business Name' },
    { slug: 'brand-name-generator', title: 'Brand Name Generator: Find the Perfect Name' },
    { slug: 'nail-salon-name-generator', title: 'Nail Salon Name Generator: 300+ Ideas for 2026' },
  ],
  'construction-name-generator': [
    { slug: 'construction-brand-name-generator', title: 'Construction Company Name Generator: 300+ Ideas' },
    { slug: 'small-business-name-generator', title: 'Small Business Name Generator: 200+ Ideas' },
    { slug: 'how-to-choose-business-name', title: 'How to Choose a Business Name' },
    { slug: 'brand-name-generator', title: 'Brand Name Generator: Find the Perfect Name' },
    { slug: 'llc-naming-guide', title: 'How to Pick a Name for Your LLC' },
  ],
  'marketing-agency-name-generator': [
    { slug: 'marketing-agency-brand-name-generator', title: 'Marketing Agency Name Generator: 300+ Ideas for 2026' },
    { slug: 'company-name-generator', title: 'Company Name Generator: 250+ Ideas' },
    { slug: 'how-to-choose-business-name', title: 'How to Choose a Business Name' },
    { slug: 'brand-name-generator', title: 'Brand Name Generator: Find the Perfect Name' },
    { slug: 'how-to-build-brand-identity', title: 'How to Build a Brand Identity' },
  ],
  'domain-name-generator': [
    { slug: 'domain-name-availability', title: 'Domain Name Availability: How to Check & Choose' },
    { slug: 'how-to-choose-business-name', title: 'How to Choose a Business Name' },
    { slug: 'brand-name-generator', title: 'Brand Name Generator: Find the Perfect Name' },
    { slug: 'company-name-checker', title: 'Company Name Checker: Verify Availability' },
  ],
  'florist-name-generator': [
    { slug: 'brand-color-psychology', title: 'Brand Color Psychology: What Your Colors Say' },
    { slug: 'catchy-business-names', title: '150+ Catchy Business Names' },
    { slug: 'how-to-choose-business-name', title: 'How to Choose a Business Name' },
    { slug: 'brand-name-generator', title: 'Brand Name Generator: Find the Perfect Name' },
    { slug: 'small-business-name-generator', title: 'Small Business Name Generator' },
  ],
  'clothing-brand-name-generator': [
    { slug: 'clothing-brand-name-generator', title: 'Clothing Brand Name Generator: 300+ Ideas' },
    { slug: 'brand-color-psychology', title: 'Brand Color Psychology: What Your Colors Say' },
    { slug: 'how-to-choose-brand-name', title: 'How to Choose a Brand Name' },
    { slug: 'brand-name-generator', title: 'Brand Name Generator: Find the Perfect Name' },
    { slug: 'creative-brand-names', title: 'Creative Brand Names' },
  ],
  'catering-name-generator': [
    { slug: 'bakery-name-generator', title: 'Bakery Name Generator: 300+ Ideas for 2026' },
    { slug: 'catchy-business-names', title: '150+ Catchy Business Names' },
    { slug: 'how-to-choose-business-name', title: 'How to Choose a Business Name' },
    { slug: 'brand-name-generator', title: 'Brand Name Generator: Find the Perfect Name' },
    { slug: 'small-business-name-generator', title: 'Small Business Name Generator' },
  ],
}

const BLOG_ICONS: Record<string, string> = {
  'startup-naming-mistakes': '🚀',
  'how-to-choose-business-name': '📋',
  'brand-name-generator': '✨',
  'free-brand-name-generator': '🆓',
  'catchy-business-names': '🎯',
  'brand-color-psychology': '🎨',
  'how-to-choose-brand-name': '💡',
  'how-to-build-brand-identity': '🏗️',
  'creative-brand-names': '🌟',
  'small-business-name-generator': '💼',
  'product-naming-guide': '📦',
  'company-name-checker': '✅',
  'llc-naming-guide': '📑',
  'unique-business-names': '💎',
  'domain-name-availability': '🌐',
  'tagline-writing-guide': '💬',
  'company-name-generator': '🏢',
  'how-to-come-up-with-business-name': '💡',
  'youtube-channel-name-generator': '🎬',
  'saas-name-generator': '🚀',
  'bakery-name-generator': '🥖',
  'real-estate-brand-name-generator': '🏠',
  'photography-brand-name-generator': '📸',
  'cleaning-business-name-generator': '🧹',
  'salon-brand-name-generator': '💇',
  'clothing-brand-name-generator': '👕',
  'construction-brand-name-generator': '🏗️',
  'marketing-agency-brand-name-generator': '📊',
}

export function IndustryBlogLinks({ industry, gradient = 'from-slate-50 to-white' }: IndustryBlogLinksProps) {
  const links = BLOG_LINKS[industry]

  if (!links || links.length === 0) return null

  return (
    <section className={`py-16 bg-gradient-to-b ${gradient}`}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-brand-600 mb-3 tracking-wider uppercase">From Our Blog</p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Learn more about naming your business
          </h2>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">
            Expert guides on choosing the perfect name, building your brand identity, and standing out in your industry.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {links.map((link) => (
            <Link
              key={link.slug}
              href={`/blog/${link.slug}`}
              className="group flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-md transition-all"
            >
              <span className="flex-shrink-0 text-xl mt-0.5">{BLOG_ICONS[link.slug] || '📖'}</span>
              <div>
                <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors text-sm leading-snug">
                  {link.title}
                </h3>
                <span className="text-xs text-brand-600 font-medium mt-1 inline-flex items-center gap-1">
                  Read article
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}