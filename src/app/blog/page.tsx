import type { Metadata } from 'next'
import Link from 'next/link'
import { BlogNewsletterSection } from '@/components/BlogNewsletterSection'
import { BlogIndexSchema, BreadcrumbSchema } from '@/components/BlogPostSchema'

export const metadata: Metadata = {
  title: 'BrandForge Blog — Business Naming Tips, Brand Strategy & AI Insights',
  description: 'Expert advice on choosing the perfect business name, building your brand identity, and leveraging AI for creative branding. Practical guides for founders and entrepreneurs.',
  openGraph: {
    title: 'BrandForge Blog — Business Naming Tips & Brand Strategy',
    description: 'Expert advice on choosing the perfect business name and building your brand identity.',
    url: 'https://brandforge-phi-pearl.vercel.app/blog',
    siteName: 'BrandForge',
    type: 'website',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://brandforge-phi-pearl.vercel.app/blog' },
}

const blogPosts = [
  {
    slug: 'how-to-choose-business-name',
    title: 'How to Choose a Business Name: The Complete Guide for 2026',
    excerpt: 'From brainstorming to trademark research — everything you need to know about picking a name that sticks, ranks, and scales with your business.',
    category: 'Naming',
    readTime: '8 min',
    date: '2025-05-15',
    featured: false,
  },
  {
    slug: 'business-name-ideas-by-industry',
    title: 'Business Name Ideas by Industry: The 2026 Edition',
    excerpt: 'Browse hundreds of name ideas across 10 industries — tech, food, fashion, consulting, and more. Each with the naming pattern so you can create your own variations.',
    category: 'Naming',
    readTime: '12 min',
    date: '2025-05-17',
    featured: false,
  },
  {
    slug: 'catchy-business-names',
    title: '150+ Catchy Business Names for Every Industry',
    excerpt: 'Discover 150+ catchy business name ideas organized by industry — tech, food, fashion, fitness, and more. Plus learn the 5 principles that make names stick.',
    category: 'Naming',
    readTime: '10 min',
    date: '2025-05-17',
    featured: false,
  },
  {
    slug: 'creative-brand-names',
    title: 'Creative Brand Names: 60+ Examples & What Makes Them Work',
    excerpt: 'Deconstruct 60+ real brand names — Pinterest, Stripe, Nike, Lego — and learn the repeatable naming patterns behind them. Portmanteaus, metaphors, foreign words, and more.',
    category: 'Brand Strategy',
    readTime: '11 min',
    date: '2025-05-17',
    featured: false,
  },
  {
    slug: 'free-brand-name-generator',
    title: 'Free Brand Name Generator: How to Name Your Business Without Spending a Dime',
    excerpt: 'Compare the 8 best free brand name generators honestly — plus the DIY naming strategy that works better than any tool.',
    category: 'AI & Naming',
    readTime: '14 min',
    date: '2025-05-18',
    featured: false,
  },
  {
    slug: 'ai-name-generator-vs-traditional',
    title: 'AI Name Generators vs Traditional Naming Agencies: What Actually Works?',
    excerpt: 'We compared AI naming tools, naming agencies, and DIY brainstorming. The results might surprise you — especially on price and speed.',
    category: 'AI & Naming',
    readTime: '6 min',
    date: '2025-05-10',
    featured: false,
  },
  {
    slug: 'brand-color-psychology',
    title: 'Brand Color Psychology: What Your Colors Say About Your Business',
    excerpt: 'Blue builds trust. Red drives action. Green signals growth. Here\'s how to pick a color palette that communicates exactly what your brand stands for.',
    category: 'Brand Strategy',
    readTime: '5 min',
    date: '2025-05-05',
    featured: false,
  },
  {
    slug: 'llc-naming-guide',
    title: 'How to Pick a Name for Your LLC: The Legal & Branding Guide',
    excerpt: 'LLC naming rules, state-by-state requirements, DBA strategies, and trademark considerations — everything you need to name your LLC legally AND memorably.',
    category: 'Legal',
    readTime: '9 min',
    date: '2025-05-17',
    featured: false,
  },
  {
    slug: 'domain-name-availability',
    title: 'Domain Name Availability: Creative Strategies When .com Is Taken',
    excerpt: 'Your perfect name is available — just maybe not as a .com. Learn smart domain strategies using alternative TLDs, modifiers, and creative workarounds.',
    category: 'Domains',
    readTime: '7 min',
    date: '2025-04-28',
    featured: false,
  },
  {
    slug: 'tagline-writing-guide',
    title: 'Writing a Tagline That Sells: The Art and Science of Brand Slogans',
    excerpt: '"Just Do It." "Think Different." "Because You\'re Worth It." Great taglines aren\'t born — they\'re crafted. Here\'s the formula behind the icons.',
    category: 'Brand Strategy',
    readTime: '6 min',
    date: '2025-04-20',
    featured: false,
  },
  {
    slug: 'startup-naming-mistakes',
    title: '7 Naming Mistakes That Kill Startups (Before They Even Launch)',
    excerpt: 'Hard-to-spell names, inside jokes, trademark conflicts — these are the naming traps that founders fall into over and over. Here\'s how to avoid all of them.',
    category: 'Naming',
    readTime: '5 min',
    date: '2025-04-15',
    featured: false,
  },
  {
    slug: 'company-name-checker',
    title: 'Company Name Checker: How to Verify Your Business Name Is Available',
    excerpt: 'Before you commit to a name, check these 4 things: domain availability, trademark conflicts, social handles, and state registration. Here\'s the complete checklist.',
    category: 'Legal',
    readTime: '10 min',
    date: '2025-05-20',
    featured: false,
  },
  {
    slug: 'unique-business-names',
    title: 'Unique Business Names: 120+ Standout Ideas & How to Create Your Own',
    excerpt: 'Browse 120+ unique business name ideas across 8 industries, plus learn the 6 proven techniques — portmanteaus, foreign words, compounds, and more.',
    category: 'Naming',
    readTime: '13 min',
    date: '2025-05-20',
    featured: false,
  },
  {
    slug: 'product-naming-guide',
    title: 'Product Naming Guide: How to Name a Product That Sells',
    excerpt: 'The 5 naming frameworks behind Slack, Notion, Tesla, and Airbnb — plus product-type-specific rules and a step-by-step process you can follow.',
    category: 'Brand Strategy',
    readTime: '15 min',
    date: '2025-05-20',
    featured: false,
  },
  {
    slug: 'how-to-build-brand-identity',
    title: 'How to Build a Brand Identity from Scratch: The 2026 Guide',
    excerpt: 'A step-by-step guide to creating a complete brand identity — name, logo, color palette, typography, and tagline — without hiring an agency. Includes real examples and free tools.',
    category: 'Brand Strategy',
    readTime: '12 min',
    date: '2026-05-25',
    featured: false,
  },
  {
    slug: 'cool-business-names',
    title: 'Cool Business Names: 150+ Ideas and How to Create Your Own',
    excerpt: 'Discover 150+ cool business name ideas organized by industry, plus a proven 5-step framework for creating a name that turns heads and sticks in memory.',
    category: 'Naming',
    readTime: '12 min',
    date: '2026-05-28',
    featured: false,
  },
  {
    slug: 'brand-name-generator',
    title: 'Brand Name Generator: How to Find the Perfect Brand Name in 2026',
    excerpt: 'The complete guide to brand name generators — 7 naming styles behind iconic brands, 60+ real examples, and a free AI tool that checks domain and social availability.',
    category: 'Naming',
    readTime: '8 min',
    date: '2026-06-07',
    featured: false,
  },
  {
    slug: 'small-business-name-generator',
    title: 'Small Business Name Generator: 200+ Name Ideas for 2026',
    excerpt: '200+ small business name ideas organized by type, 7 naming frameworks that work, and a free AI generator with domain availability checks. Find your name today.',
    category: 'Naming',
    readTime: '10 min',
    date: '2026-06-09',
    featured: false,
  },
  {
    slug: 'how-to-choose-brand-name',
    title: 'How to Choose a Brand Name in 2026: The Complete Decision Framework',
    excerpt: 'A step-by-step framework for choosing a brand name — 6 naming styles, a 5-step process, a 10-point validation checklist, and a free AI tool that checks availability instantly.',
    category: 'Brand Strategy',
    readTime: '7 min',
    date: '2026-06-10',
    featured: false,
  },
  {
    slug: 'business-name-generator',
    title: 'Business Name Generator: 300+ Name Ideas for 2026 + Free AI Tool',
    excerpt: 'The complete guide to naming your business — 300+ name ideas by industry, 7 proven naming frameworks, and a free AI tool that checks domain and social handle availability.',
    category: 'Naming',
    readTime: '12 min',
    date: '2026-06-12',
    featured: false,
  },
  {
    slug: 'company-name-generator',
    title: 'Company Name Generator: 250+ Name Ideas for 2026 + Free AI Tool',
    excerpt: 'The #1 free company name generator — 250+ name ideas by industry, 6 proven naming strategies, and instant domain availability checks. Find the perfect name for your company.',
    category: 'Naming',
    readTime: '15 min',
    date: '2026-07-07',
    featured: false,
  },
  {
    slug: 'brand-name-ideas',
    title: 'Brand Name Ideas: 300+ Creative Examples for 2026 + Free AI Generator',
    excerpt: 'The ultimate collection of 300+ brand name ideas across 10 categories — 7 naming techniques with real examples, a validation checklist, and a free AI generator with domain availability checks.',
    category: 'Naming',
    readTime: '14 min',
    date: '2026-07-08',
    featured: false,
  },
  {
    slug: 'catchy-brand-names',
    title: 'Catchy Brand Names: 250+ Memorable Ideas for 2026 + Free AI Generator',
    excerpt: 'Discover 250+ catchy brand name ideas across 10 industries, 7 proven naming formulas that make names stick, and a free AI generator that checks domain availability instantly.',
    category: 'Naming',
    readTime: '12 min',
    date: '2026-07-12',
    featured: false,
  },
  {
    slug: 'app-name-generator',
    title: 'App Name Generator: 200+ App Name Ideas for 2026 + Free AI Tool',
    excerpt: '200+ app name ideas across 10 categories, 6 naming frameworks behind hit apps like Slack, Notion, and Calendly, and a free AI generator that checks domain availability instantly.',
    category: 'Naming',
    readTime: '14 min',
    date: '2026-07-13',
    featured: true,
  },
]

const categoryColors: Record<string, string> = {
  'Naming': 'bg-blue-100 text-blue-700',
  'AI & Naming': 'bg-purple-100 text-purple-700',
  'Brand Strategy': 'bg-brand-100 text-brand-700',
  'Domains': 'bg-amber-100 text-amber-700',
  'Legal': 'bg-emerald-100 text-emerald-700',
}

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured)
  const otherPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <BlogIndexSchema postCount={24} />
      <BreadcrumbSchema items={[{ name: 'Blog', href: '/blog' }]} />
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-sm font-semibold text-brand-600 tracking-wide uppercase mb-3">The BrandForge Blog</p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Naming tips, brand strategy,<br className="hidden sm:block" /> and AI insights
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          Practical guides for founders and entrepreneurs navigating the journey from idea to brand identity.
        </p>
      </div>

      {/* Featured post */}
      {featuredPost && (
        <Link
          href={`/blog/${featuredPost.slug}`}
          className="group block mb-12"
        >
          <div className="rounded-3xl bg-gradient-to-br from-brand-50 via-white to-purple-50 p-8 sm:p-10 transition-shadow duration-200 hover:shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${categoryColors[featuredPost.category] || 'bg-slate-100 text-slate-700'}`}>
                {featuredPost.category}
              </span>
              <span className="text-xs text-slate-400">Featured</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl group-hover:text-brand-600 transition-colors">
              {featuredPost.title}
            </h2>
            <p className="mt-3 text-slate-600 text-base sm:text-lg max-w-2xl">
              {featuredPost.excerpt}
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-400">
              <time>{new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
              <span>·</span>
              <span>{featuredPost.readTime} read</span>
            </div>
          </div>
        </Link>
      )}

      {/* Post grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group"
          >
            <div className="card h-full flex flex-col">
              <div className="mb-3">
                <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${categoryColors[post.category] || 'bg-slate-100 text-slate-700'}`}>
                  {post.category}
                </span>
              </div>
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 line-clamp-3 flex-1">
                {post.excerpt}
              </p>
              <div className="mt-4 flex items-center gap-3 text-xs text-slate-400">
                <time>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</time>
                <span>·</span>
                <span>{post.readTime} read</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Newsletter CTA */}
      <div className="mt-16 rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 text-center">
        <h2 className="text-2xl font-bold text-slate-900">Get naming tips in your inbox</h2>
        <p className="mt-2 text-slate-600">
          Weekly insights on branding, naming, and building a business identity — straight to your inbox.
        </p>
        <BlogNewsletterSection />
      </div>
    </div>
  )
}