import type { Metadata } from 'next'
import Link from 'next/link'
import { BlogNewsletterSection } from '@/components/BlogNewsletterSection'

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
}

const blogPosts = [
  {
    slug: 'how-to-choose-business-name',
    title: 'How to Choose a Business Name: The Complete Guide for 2025',
    excerpt: 'From brainstorming to trademark research — everything you need to know about picking a name that sticks, ranks, and scales with your business.',
    category: 'Naming',
    readTime: '8 min',
    date: '2025-05-15',
    featured: true,
  },
  {
    slug: 'business-name-ideas-by-industry',
    title: 'Business Name Ideas by Industry: The 2025 Edition',
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
    title: 'Domain Name Availability in 2025: Creative Strategies When .com Is Taken',
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