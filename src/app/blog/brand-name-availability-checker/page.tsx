/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import { BlogNewsletterSection } from '@/components/BlogNewsletterSection'
import { BlogPostSchema } from '@/components/BlogPostSchema'

export const dynamic = 'force-static'
export const metadata: Metadata = {
  title: 'Brand Name Availability Checker: How to Verify Your Brand Name Is Available in 2026',
  description: 'Check if your brand name is available as a domain, trademark, social handle, and business registration. Free 4-step availability checker with real-time domain and social search.',
  keywords: [
    'brand name availability checker',
    'check brand name availability',
    'brand name availability',
    'is my brand name available',
    'brand name checker',
    'brand name availability search',
    'how to check if a brand name is taken',
    'verify brand name availability',
    'brand name availability tool',
    'check if business name is available',
    'brand name availability checker free',
    'brand name domain availability',
    'trademark name availability check',
    'brand name search availability',
    'brand name availability 2026',
  ],
  openGraph: {
    title: 'Brand Name Availability Checker: How to Verify Your Brand Name Is Available in 2026',
    description: 'Check if your brand name is available as a domain, trademark, social handle, and business registration. Free 4-step availability checker with instant domain and social search.',
    url: 'https://brandforge-phi-pearl.vercel.app/blog/brand-name-availability-checker',
    siteName: 'BrandForge',
    type: 'article',
    publishedTime: '2026-07-26T12:00:00.000Z',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Brand Name Availability Checker: Verify Your Brand Name Is Available',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brand Name Availability Checker: Verify Your Brand Name in 4 Steps',
    description: 'Check if your brand name is available as a domain, trademark, social handle, and business registration. Free availability checker.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: 'https://brandforge-phi-pearl.vercel.app/blog/brand-name-availability-checker',
  },
  robots: { index: true, follow: true },
}

const FAQ_ITEMS = [
  {
    question: 'How do I check if a brand name is available?',
    answer: 'Check four things in order: (1) Domain — use BrandForge\'s built-in checker to see if the .com is available, (2) Trademark — search USPTO.gov for federal trademark conflicts in your industry class, (3) Social handles — check Instagram, Twitter/X, LinkedIn, and Facebook for @yourbrandname, (4) State registration — search your Secretary of State database if you\'re forming an LLC or corporation. BrandForge automates domain and social checks during name generation.',
  },
  {
    question: 'Can I use a brand name if the .com domain is taken?',
    answer: 'It depends on why it\'s taken. If the .com is a parked page or for sale, you can buy it or use an alternative TLD (.co, .io, .ai). If the .com belongs to an active business in your industry, choose a different name — you\'ll compete for search traffic and confuse customers. For local businesses, a .com with a city modifier (e.g., bostonplumbers.com) works well. The best approach: pick a name with an available .com from the start using a brand name generator with built-in availability checking.',
  },
  {
    question: 'How long does it take to check brand name availability?',
    answer: 'Domain availability is instant — under 10 seconds. Social handle checks take 5-10 minutes across platforms. USPTO trademark search takes 15-30 minutes for a thorough check. State registration checks vary but typically take 10-20 minutes. Total for a complete check: about 1 hour. BrandForge cuts this to under 2 minutes by automating domain and social availability checks during name generation.',
  },
  {
    question: 'What happens if I use a brand name that\'s already trademarked?',
    answer: 'You risk receiving a cease-and-desist letter that forces you to rebrand — new domain, new website, new marketing materials, new business cards. In serious cases, you could face legal damages. Rebranding after launch typically costs $5,000-$50,000+ depending on your business size. It\'s always cheaper to check trademark availability before committing. Search USPTO.gov and consider consulting a trademark attorney for high-stakes names.',
  },
  {
    question: 'Should I check social media handles before choosing a brand name?',
    answer: 'Absolutely. Consistent handles across Instagram, Twitter/X, LinkedIn, Facebook, and TikTok make your brand look professional and easy to find. If @yourname is taken on one platform but available on others, customers will get confused. Before committing to a name, verify that the handle is available on ALL major platforms — or be prepared to use a consistent modifier (like @yournameHQ or @joinyourname).',
  },
  {
    question: 'How do I check if a brand name is trademarked?',
    answer: 'Go to USPTO.gov and use the Trademark Electronic Search System (TESS). Search for your exact name AND close variations (e.g., if your name is "Brightly," also search "Brightlie," "Brightlee"). Look at the International Class — you only need to worry about classes related to your business (Class 25 for clothing, Class 9 for software, etc.). If you find a live registration in your class, choose a different name. For thorough protection, hire a trademark attorney to do a comprehensive clearance search ($300-$500).',
  },
  {
    question: 'What\'s the difference between a business name, DBA, and trademark?',
    answer: 'A business name is your legal entity name (e.g., Acme LLC). A DBA ("doing business as") is a trade name you operate under (e.g., Acme LLC doing business as "BrightPath"). A trademark is a federal registration that gives you exclusive nationwide rights to use that name for your goods or services. You need all three to be fully protected. Registering an LLC or DBA does NOT give you trademark rights — it only prevents someone from registering the exact same business name in your state.',
  },
  {
    question: 'Can I use a brand name that\'s used in a different industry?',
    answer: 'Possibly, but it depends on trademark law. Trademark protection is industry-specific — "Delta" is a registered trademark for both an airline and a faucet company because customers won\'t confuse the two. However, if the existing brand is "famous" (like Nike or Apple), they have protection across all industries. And if there\'s any likelihood of customer confusion, you could still face a lawsuit. When in doubt, consult a trademark attorney or choose a completely unique name.',
  },
]

const CHECKLIST_ITEMS = [
  {
    step: '1',
    title: 'Check Domain Availability',
    description: 'Start with the .com domain — it\'s the gold standard for brand credibility. Use BrandForge\'s built-in domain checker during name generation, or search at a registrar like Namecheap. If the .com is taken, check .co, .io, .ai, and .net alternatives. But ideally, pick a name where the .com is available — it saves headaches later.',
    tip: 'Search for your name at multiple registrars simultaneously. Some registrars cache availability data, so a name might appear taken when it\'s actually available.',
  },
  {
    step: '2',
    title: 'Search Trademark Databases',
    description: 'Go to USPTO.gov and use TESS (Trademark Electronic Search System). Search for your exact name and close phonetic variations. Focus on International Classes relevant to your business. If you find a live registration in your class, the name is not available — period. Don\'t assume slight spelling changes will protect you.',
    tip: 'Also check Google Patents and your state\'s trademark database. Some trademarks are registered at the state level only but still carry legal weight.',
  },
  {
    step: '3',
    title: 'Verify Social Handle Availability',
    description: 'Check Instagram, Twitter/X, LinkedIn, Facebook, TikTok, and YouTube for @yourbrandname. Ideally, the same handle is available across ALL platforms. If it\'s taken on one major platform, you\'ll need a consistent modifier (like @yournameHQ or @joinyourname) — which weakens your brand consistency.',
    tip: 'BrandForge checks Twitter/X and Instagram availability automatically during name generation. For other platforms, search directly or use a tool like Namechk.',
  },
  {
    step: '4',
    title: 'Check State Business Registration',
    description: 'If you\'re forming an LLC or corporation, search your state\'s Secretary of State database for business name conflicts. This is legally required for entity formation and prevents you from using a name that\'s already registered in your state. Sole proprietors using a DBA should check with their county clerk.',
    tip: 'Even if a name isn\'t trademarked federally, a state-level business registration can block you from using it in that state. Always check both federal and state databases.',
  },
]

const RED_FLAGS = [
  {
    flag: 'The .com domain is already an active business website',
    why: 'You\'ll compete for search traffic, confuse customers, and risk legal action if they\'re in a similar industry. Even if they\'re in a different industry, having two brands with the same name creates unnecessary confusion.',
    whatToDo: 'Choose a different name. If you\'re set on it, check if the domain owner is willing to sell — but expect to pay a premium.',
  },
  {
    flag: 'There\'s a live trademark in your International Class',
    why: 'The trademark owner has exclusive legal rights to that name in their industry. Using it anyway risks a cease-and-desist letter, forced rebranding ($5K-$50K+), and potential damages.',
    whatToDo: 'Choose a completely different name. Don\'t try to skirt around it with spelling variations — that makes it worse.',
  },
  {
    flag: 'The social handle is taken on 2+ major platforms',
    why: 'Inconsistent social handles (@yourname on Instagram but @yournameHQ on Twitter) look unprofessional and make it harder for customers to find you. It also signals the name is already associated with another brand.',
    whatToDo: 'If handles are taken on only one minor platform, a modifier can work. If they\'re taken on 2+ major platforms, pick a different name.',
  },
  {
    flag: 'Google search shows another business using the name',
    why: 'Even without a formal trademark, common law trademark rights protect businesses that are "first to use" a name in commerce. If someone is already using the name publicly, they may have rights that predate yours.',
    whatToDo: 'Evaluate the existing user — if they\'re in a different industry and small, you may be fine. If they\'re in your industry or well-known, choose a different name.',
  },
  {
    flag: 'The name is very similar to a famous brand',
    why: 'Famous brands (Nike, Apple, Google) have "famous mark" protection that extends across ALL industries, not just their own. "Googgle" or "Nikke" will get you sued regardless of your business type.',
    whatToDo: 'Choose a name that\'s clearly distinct from any well-known brand. This is one area where creativity matters — avoid anything that could be seen as riding on someone else\'s coattails.',
  },
]

const industries = [
  { name: 'Startup Names', href: '/startup-name-generator' },
  { name: 'Restaurant Names', href: '/restaurant-name-generator' },
  { name: 'Fitness Brands', href: '/fitness-brand-name-generator' },
  { name: 'Real Estate Names', href: '/real-estate-name-generator' },
  { name: 'Photography Names', href: '/photography-name-generator' },
  { name: 'Beauty Names', href: '/beauty-name-generator' },
  { name: 'Fashion Names', href: '/fashion-name-generator' },
  { name: 'Food Truck Names', href: '/food-truck-name-generator' },
  { name: 'Tech Names', href: '/tech-name-generator' },
  { name: 'Consulting Names', href: '/consulting-name-generator' },
  { name: 'Podcast Names', href: '/podcast-name-generator' },
  { name: 'Coaching Names', href: '/coaching-name-name-generator' },
  { name: 'Nonprofit Names', href: '/nonprofit-name-generator' },
  { name: 'Craft Names', href: '/craft-name-generator' },
  { name: 'Education Names', href: '/education-name-generator' },
  { name: 'Yoga Names', href: '/yoga-name-generator' },
  { name: 'Coffee Names', href: '/coffee-name-generator' },
  { name: 'Music Names', href: '/music-name-generator' },
  { name: 'Wedding Names', href: '/wedding-name-generator' },
  { name: 'Cleaning Names', href: '/cleaning-business-name-generator' },
  { name: 'Pet Names', href: '/pet-name-generator' },
  { name: 'Landscaping Names', href: '/landscaping-name-generator' },
  { name: 'Salon Names', href: '/salon-name-generator' },
  { name: 'Construction Names', href: '/construction-name-generator' },
  { name: 'Marketing Agency Names', href: '/marketing-agency-name-generator' },
  { name: 'Domain Names', href: '/domain-name-generator' },
]

const relatedPosts = [
  {
    slug: 'company-name-checker',
    title: 'Company Name Checker: How to Verify Your Business Name Is Available',
    excerpt: 'Check domain availability, trademark conflicts, social handles, and state registration — the complete 4-step checklist.',
  },
  {
    slug: 'domain-name-availability',
    title: 'Domain Name Availability: Creative Strategies When .com Is Taken',
    excerpt: 'Your perfect name is available — just maybe not as a .com. Learn smart domain strategies using alternative TLDs and creative workarounds.',
  },
  {
    slug: 'how-to-choose-brand-name',
    title: 'How to Choose a Brand Name in 2026: The Complete Decision Framework',
    excerpt: '6 naming styles, a 5-step process, and a 10-point validation checklist for choosing a name that sticks.',
  },
  {
    slug: 'brand-name-generator',
    title: 'Brand Name Generator: How to Find the Perfect Brand Name in 2026',
    excerpt: '7 naming styles, 60+ real examples, and a free AI tool that checks domain and social availability.',
  },
  {
    slug: 'llc-naming-guide',
    title: 'How to Pick a Name for Your LLC: The Legal & Branding Guide',
    excerpt: 'LLC naming rules, state requirements, DBA strategies, and trademark considerations.',
  },
  {
    slug: 'startup-naming-mistakes',
    title: '7 Naming Mistakes That Kill Startups (Before They Even Launch)',
    excerpt: 'Hard-to-spell names, inside jokes, trademark conflicts — these naming traps cost founders thousands.',
  },
]

export default function BrandNameAvailabilityCheckerPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: 'Brand Name Availability Checker: How to Verify Your Brand Name Is Available in 2026',
        description: 'Check if your brand name is available as a domain, trademark, social handle, and business registration. Free 4-step availability checker with real-time domain and social search.',
        url: 'https://brandforge-phi-pearl.vercel.app/blog/brand-name-availability-checker',
        datePublished: '2026-07-26T12:00:00.000Z',
        dateModified: '2026-07-26T12:00:00.000Z',
        author: {
          '@type': 'Organization',
          name: 'BrandForge',
          url: 'https://brandforge-phi-pearl.vercel.app',
        },
        publisher: {
          '@type': 'Organization',
          name: 'BrandForge',
          url: 'https://brandforge-phi-pearl.vercel.app',
          logo: {
            '@type': 'ImageObject',
            url: 'https://brandforge-phi-pearl.vercel.app/opengraph-image',
          },
        },
        image: 'https://brandforge-phi-pearl.vercel.app/opengraph-image',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://brandforge-phi-pearl.vercel.app/blog/brand-name-availability-checker',
        },
      },
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
            item: 'https://brandforge-phi-pearl.vercel.app',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: 'https://brandforge-phi-pearl.vercel.app/blog',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Brand Name Availability Checker',
            item: 'https://brandforge-phi-pearl.vercel.app/blog/brand-name-availability-checker',
          },
        ],
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostSchema
        title="Brand Name Availability Checker: How to Verify Your Brand Name Is Available in 2026"
        description="Check if your brand name is available as a domain, trademark, social handle, and business registration. Free 4-step availability checker with real-time domain and social search."
        url="https://brandforge-phi-pearl.vercel.app/blog/brand-name-availability-checker"
        datePublished="2026-07-26T12:00:00.000Z"
        dateModified="2026-07-26T12:00:00.000Z"
      />
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
              Domains & Legal
            </span>
            <span className="text-sm text-slate-400">8 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Brand Name Availability Checker: How to Verify Your Brand Name Is Available in 2026
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl">
            You&apos;ve found the perfect brand name. But is it actually available? Here&apos;s the complete 4-step
            checklist to verify domain availability, trademark conflicts, social handles, and business
            registration — before you invest a single dollar in branding.
          </p>
        </div>

        {/* Quick CTA */}
        <div className="mb-12 rounded-2xl bg-gradient-to-br from-brand-50 via-white to-purple-50 p-8 text-center border border-brand-100">
          <h2 className="text-xl font-bold text-slate-900 mb-2">
            Check Your Brand Name Availability — Free
          </h2>
          <p className="text-slate-600 mb-4">
            Type your brand name idea and instantly check domain + social handle availability.
          </p>
          <a href="/generate" className="btn-primary text-base px-8 py-3">
            Check Availability Free →
          </a>
        </div>

        {/* Why Availability Matters */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4">
            Why Brand Name Availability Matters
          </h2>
          <p className="text-slate-600 mb-4">
            Picking a brand name is exciting. Checking if it&apos;s available? Not so much. But skipping this step
            is the single most expensive mistake founders make. Here&apos;s what happens when you launch with
            an unavailable name:
          </p>
          <div className="space-y-4">
            <div className="rounded-xl border border-red-100 bg-red-50/30 p-5">
              <h3 className="font-bold text-slate-900 mb-1">💰 Rebranding costs $5,000–$50,000+</h3>
              <p className="text-slate-600 text-sm">
                New domain, new website, new logo, new business cards, new packaging, new legal filings — and
                that&apos;s before counting the lost brand equity and customer confusion.
              </p>
            </div>
            <div className="rounded-xl border border-red-100 bg-red-50/30 p-5">
              <h3 className="font-bold text-slate-900 mb-1">⚖️ Cease-and-desist letters are common</h3>
              <p className="text-slate-600 text-sm">
                Trademark owners are legally obligated to defend their marks. If you&apos;re using a name that
                someone else owns, you WILL hear from their lawyers — and you WILL have to change it.
              </p>
            </div>
            <div className="rounded-xl border border-red-100 bg-red-50/30 p-5">
              <h3 className="font-bold text-slate-900 mb-1">🔍 SEO confusion kills discoverability</h3>
              <p className="text-slate-600 text-sm">
                If another business shares your name, you&apos;ll compete for the same search results, social
                media mentions, and customer reviews. Your brand will always be the &quot;other&quot; one.
              </p>
            </div>
            <div className="rounded-xl border border-red-100 bg-red-50/30 p-5">
              <h3 className="font-bold text-slate-900 mb-1">📱 Inconsistent social handles look amateur</h3>
              <p className="text-slate-600 text-sm">
                @yourname on Instagram but @yournameHQ on Twitter and @joinyourname on TikTok — this
                inconsistency destroys trust and makes you harder to find.
              </p>
            </div>
          </div>
          <p className="mt-4 text-slate-600">
            The good news: a thorough availability check takes less than an hour, and <a href="/generate" className="text-brand-600 hover:text-brand-700 font-medium">BrandForge automates</a> the two
            most important checks (domain + social) during name generation. Here&apos;s the complete process.
          </p>
        </section>

        {/* 4-Step Checklist */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4">
            The 4-Step Brand Name Availability Checklist
          </h2>
          <p className="text-slate-600 mb-8">
            Follow these four steps in order. Each one gets progressively more important — but they all
            matter. A name that passes all four checks is truly available.
          </p>
          <div className="space-y-8">
            {CHECKLIST_ITEMS.map((item) => (
              <div key={item.step} className="rounded-xl border border-slate-200 bg-white p-6">
                <div className="flex items-start gap-4">
                  <span className="inline-flex items-center justify-center rounded-full bg-brand-600 text-white text-lg font-bold w-10 h-10 flex-shrink-0">
                    {item.step}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 mb-3">{item.description}</p>
                    <div className="rounded-lg bg-amber-50 border border-amber-200 p-4">
                      <p className="text-sm text-amber-800"><span className="font-bold">💡 Pro tip:</span> {item.tip}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Red Flags */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4">
            5 Red Flags That Mean You Should Pick a Different Name
          </h2>
          <p className="text-slate-600 mb-8">
            If any of these apply to your chosen name, it&apos;s not worth the risk. Move on — there are
            thousands of great names that pass all availability checks.
          </p>
          <div className="space-y-6">
            {RED_FLAGS.map((flag, i) => (
              <div key={i} className="rounded-xl border border-slate-200 bg-white p-6">
                <div className="flex items-start gap-3">
                  <span className="text-red-500 text-xl mt-0.5">🚩</span>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{flag.flag}</h3>
                    <p className="text-sm text-slate-500 mb-2"><strong>Why it&apos;s a problem:</strong> {flag.why}</p>
                    <p className="text-sm text-emerald-700 font-medium">✅ {flag.whatToDo}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Domain TLD Strategies */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4">
            What to Do When the .com Is Taken
          </h2>
          <p className="text-slate-600 mb-6">
            About 350 million .com domains are registered — your first-choice name might not be available.
            Here are your options, ranked from best to worst:
          </p>
          <div className="space-y-4">
            <div className="rounded-xl border border-emerald-200 bg-emerald-50/30 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">🥇 Best: Pick a name with an available .com</h3>
              <p className="text-slate-600">
                Use <a href="/generate" className="text-brand-600 hover:text-brand-700 font-medium">BrandForge&apos;s AI generator</a> to
                generate names where the .com is actually available. This is faster, cheaper, and more
                professional than any workaround. A clean .com costs $12/year and builds instant trust.
              </p>
            </div>
            <div className="rounded-xl border border-blue-200 bg-blue-50/30 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">🥈 Good: Use a modern TLD (.co, .io, .ai)</h3>
              <p className="text-slate-600">
                If your perfect name is available on .co, .io, or .ai, go for it — these TLDs are widely
                accepted in tech, SaaS, and startup communities. Avoid obscure TLDs like .xyz or .biz,
                which look spammy to customers and search engines alike.
              </p>
            </div>
            <div className="rounded-xl border border-amber-200 bg-amber-50/30 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">🥉 Acceptable: Add a modifier (get[Name].com, [Name]app.com)</h3>
              <p className="text-slate-600">
                Adding &quot;get,&quot; &quot;try,&quot; &quot;app,&quot; or &quot;hq&quot; to the domain is common practice (getbootstrap.com,
                notion.so, linear.app). It works, but you lose some brand memorability. The modifier should
                feel natural, not forced.
              </p>
            </div>
            <div className="rounded-xl border border-red-200 bg-red-50/30 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">⚠️ Risky: Buy the .com from the current owner</h3>
              <p className="text-slate-600">
                Premium domains can cost $2,000–$500,000+. It&apos;s an option for well-funded startups, but
                for most founders, that money is better spent on marketing. Plus, the current owner might
                not want to sell. Consider this only if you&apos;re absolutely set on the name.
              </p>
            </div>
          </div>
        </section>

        {/* Trademark Classes */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4">
            Trademark Classes: Which Ones Matter for Your Brand?
          </h2>
          <p className="text-slate-600 mb-6">
            Trademark protection is industry-specific. &quot;Delta&quot; is trademarked by both an airline (Class 39)
            and a faucet company (Class 11) — and both are legally fine because customers won&apos;t confuse them.
            Here are the most common International Classes you should check:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-brand-50">
                  <th className="text-left p-4 font-semibold text-slate-900 text-sm">Class</th>
                  <th className="text-left p-4 font-semibold text-slate-900 text-sm">Industry</th>
                  <th className="text-left p-4 font-semibold text-slate-900 text-sm">Examples</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="bg-white">
                  <td className="p-4 text-sm font-mono text-brand-600">Class 9</td>
                  <td className="p-4 text-sm text-slate-900">Software, Electronics, SaaS</td>
                  <td className="p-4 text-sm text-slate-500">Apps, cloud services, hardware</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-4 text-sm font-mono text-brand-600">Class 25</td>
                  <td className="p-4 text-sm text-slate-900">Clothing, Footwear, Headgear</td>
                  <td className="p-4 text-sm text-slate-500">Fashion brands, streetwear, athletic wear</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4 text-sm font-mono text-brand-600">Class 35</td>
                  <td className="p-4 text-sm text-slate-900">Advertising, Business Management</td>
                  <td className="p-4 text-sm text-slate-500">Marketing agencies, consulting firms</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-4 text-sm font-mono text-brand-600">Class 41</td>
                  <td className="p-4 text-sm text-slate-900">Education, Entertainment</td>
                  <td className="p-4 text-sm text-slate-500">Courses, podcasts, coaching</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4 text-sm font-mono text-brand-600">Class 42</td>
                  <td className="p-4 text-sm text-slate-900">Computer & Scientific Services</td>
                  <td className="p-4 text-sm text-slate-500">Tech services, web design, analytics</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-4 text-sm font-mono text-brand-600">Class 43</td>
                  <td className="p-4 text-sm text-slate-900">Food & Drink Services</td>
                  <td className="p-4 text-sm text-slate-500">Restaurants, food trucks, coffee shops</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4 text-sm font-mono text-brand-600">Class 44</td>
                  <td className="p-4 text-sm text-slate-900">Medical, Beauty, Wellness</td>
                  <td className="p-4 text-sm text-slate-500">Salons, gyms, wellness brands</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-4 text-sm font-mono text-brand-600">Class 36</td>
                  <td className="p-4 text-sm text-slate-900">Financial, Insurance, Real Estate</td>
                  <td className="p-4 text-sm text-slate-500">Fintech, real estate agencies, insurance</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            Search all relevant classes at <a href="https://tmsearch.uspto.gov" className="text-brand-600 hover:text-brand-700 font-medium" target="_blank" rel="noopener noreferrer">USPTO.gov/TESS</a>.
            If you find a live registration in your class, the name is not available.
          </p>
        </section>

        {/* Social Handle Strategies */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4">
            Social Handle Availability: How to Get Consistent Branding
          </h2>
          <p className="text-slate-600 mb-6">
            Your social handles are your digital identity. Inconsistent handles across platforms (e.g.,
            @brightly on Instagram but @brightlyhq on Twitter) confuse customers and look unprofessional.
            Here&apos;s how to handle it:
          </p>
          <div className="space-y-4">
            <div className="rounded-xl border border-emerald-200 bg-emerald-50/30 p-5">
              <h3 className="font-bold text-slate-900 mb-1">✅ Ideal: Same handle everywhere</h3>
              <p className="text-sm text-slate-600">
                @brightly on Instagram, Twitter/X, LinkedIn, Facebook, TikTok, and YouTube. This is the
                gold standard. Use <a href="/generate" className="text-brand-600 hover:text-brand-700 font-medium">BrandForge</a> to
                check Twitter/X and Instagram availability during name generation.
              </p>
            </div>
            <div className="rounded-xl border border-blue-200 bg-blue-50/30 p-5">
              <h3 className="font-bold text-slate-900 mb-1">✅ Good: Consistent modifier</h3>
              <p className="text-sm text-slate-600">
                If @brightly is taken on one platform, use the same modifier on ALL platforms:
                @brightlyhq everywhere, or @getbrightly everywhere. Consistency &gt; perfection.
              </p>
            </div>
            <div className="rounded-xl border border-amber-200 bg-amber-50/30 p-5">
              <h3 className="font-bold text-slate-900 mb-1">⚠️ Avoid: Different modifiers per platform</h3>
              <p className="text-sm text-slate-600">
                @brightly on Instagram, @brightlyhq on Twitter, @joinbrightly on LinkedIn — this is
                confusing and unprofessional. If you can&apos;t be consistent, reconsider the name.
              </p>
            </div>
            <div className="rounded-xl border border-red-200 bg-red-50/30 p-5">
              <h3 className="font-bold text-slate-900 mb-1">❌ Don&apos;t: Use a different name entirely</h3>
              <p className="text-sm text-slate-600">
                If your brand is &quot;Brightly&quot; but your social handle is &quot;@brightdesigns&quot; because
                @brightly is taken — you&apos;ve created a different brand. Customers won&apos;t connect the two.
                Choose a different brand name instead.
              </p>
            </div>
          </div>
        </section>

        {/* Industry Generators */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4">
            Check Availability for Your Industry
          </h2>
          <p className="text-slate-600 mb-8">
            Generate names with built-in availability checking for your specific industry:
          </p>
          <div className="flex flex-wrap gap-2">
            {industries.map((ind) => (
              <a
                key={ind.href}
                href={ind.href}
                className="inline-flex items-center rounded-lg bg-brand-50 px-3 py-2 text-sm font-medium text-brand-700 hover:bg-brand-100 transition-colors"
              >
                {ind.name}
              </a>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((faq, i) => (
              <details key={i} className="group rounded-xl border border-slate-200 bg-white">
                <summary className="flex cursor-pointer items-center justify-between p-6 text-left font-semibold text-slate-900 hover:bg-slate-50 rounded-xl transition-colors">
                  {faq.question}
                  <span className="ml-4 flex-shrink-0 text-brand-600 transition-transform group-open:rotate-180">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-slate-600">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Related Posts */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-8">
            Continue Reading
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {relatedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <div className="rounded-2xl bg-gradient-to-br from-brand-50 via-white to-purple-50 p-8 sm:p-10 text-center border border-brand-100">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            Check Your Brand Name Availability — Free
          </h2>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Type your brand name idea and instantly see if the domain and social handles are available.
            No signup required — free to start.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/generate" className="btn-primary text-base px-8 py-3">
              Check Brand Name Availability →
            </a>
            <a href="/pricing" className="btn-secondary text-base px-8 py-3">
              View Brand Kit Pricing
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12">
          <BlogNewsletterSection />
        </div>
      </div>
    </>
  )
}