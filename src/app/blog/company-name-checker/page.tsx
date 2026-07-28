import type { Metadata } from 'next'
import Link from 'next/link'
import { BlogNewsletterSection } from '@/components/BlogNewsletterSection'
import { BlogPostSchema } from '@/components/BlogPostSchema'

export const dynamic = 'force-static'
export const metadata: Metadata = {
  title: 'Company Name Checker: How to Verify Your Business Name Is Available | BrandForge',
  description: 'Check if your company name is available as a domain, trademark, social handle, and business registration. Complete guide to name availability across all channels.',
  openGraph: {
    title: 'Company Name Checker: How to Verify Your Business Name Is Available',
    description: 'Before you commit to a business name, make sure it\'s actually available. Here\'s how to check domain availability, trademark conflicts, social handles, and state registrations.',
    url: 'https://brandforge-phi-pearl.vercel.app/blog/company-name-checker',
    siteName: 'BrandForge',
    type: 'article',
  },

  robots: { index: true, follow: true },
  alternates: { canonical: 'https://brandforge-phi-pearl.vercel.app/blog/company-name-checker' },
}

const FAQ_ITEMS = [
  {
    question: 'How do I check if a company name is available?',
    answer: 'Check four things: (1) Domain availability — search at a registrar like Namecheap or Google Domains, (2) Trademark availability — search USPTO.gov for existing trademarks, (3) Social media handle availability — check Twitter/X, Instagram, LinkedIn, and Facebook, (4) State business registration — search your state\'s Secretary of State database. BrandForge checks domain and social availability automatically when generating names.',
  },
  {
    question: 'Can I use a company name if the .com domain is taken?',
    answer: 'Yes, but it depends on the situation. If the .com is a parked page or for sale, consider buying it or using an alternative TLD (.co, .io, .ai). If the .com belongs to an active business in your industry, pick a different name — you\'ll compete for search traffic and confuse customers. For local businesses, a .com with a city modifier (e.g., bostonplumbers.com) works well.',
  },
  {
    question: 'Do I need to trademark my company name?',
    answer: 'If you\'re doing business only in one state, a state-level DBA or LLC registration provides some protection. But if you plan to operate nationally, sell online, or expand, federal trademark registration is essential. It gives you exclusive nationwide rights, the ability to sue infringers, and prevents others from registering similar names.',
  },
  {
    question: 'What\'s the difference between a business name, DBA, and trademark?',
    answer: 'A business name is your legal entity name (e.g., Acme LLC). A DBA ("doing business as") is a trade name you operate under (e.g., Acme LLC doing business as "BrightPath"). A trademark is a federal registration that gives you exclusive rights to use that name for your goods or services nationwide. You need all three to be fully protected.',
  },
  {
    question: 'How long does it take to check company name availability?',
    answer: 'Domain availability is instant — search takes 10 seconds. Social handle checks take 5–10 minutes across platforms. USPTO trademark search takes 15–30 minutes. State registration checks vary but typically take 10–20 minutes. Total: about 1 hour for a thorough check. BrandForge automates domain and social checks, cutting that down significantly.',
  },
  {
    question: 'What happens if I use a name that\'s already trademarked?',
    answer: 'You could receive a cease-and-desist letter forcing you to rebrand, which means new domain, new website, new marketing materials, new business cards — expensive and time-consuming. In some cases, you could face legal damages. It\'s always cheaper to check trademark availability before committing than to rebrand after launch.',
  },
  {
    question: 'Should I check social media handles before choosing a name?',
    answer: 'Absolutely. Consistent handles across Twitter/X, Instagram, LinkedIn, and Facebook make your brand look professional and easy to find. If @yourname is taken on one platform but available on others, customers will get confused. BrandForge checks social handle availability automatically during name generation.',
  },
  {
    question: 'Can two companies have the same name?',
    answer: 'Yes, if they\'re in different industries and different geographic markets. "Delta" is both an airline and a faucet company. But if you\'re in the same industry or could reasonably expand into it, having the same name creates legal risk and customer confusion. Always check for competing businesses with similar names.',
  }
]

const checkCategories = [
  {
    title: 'Domain Name Availability',
    icon: '🌐',
    description: 'The first thing most founders check — is the .com available?',
    steps: [
      'Search your desired name at a domain registrar (Namecheap, Google Domains, etc.)',
      'Check .com, .io, .co, and relevant industry TLDs (.ai for tech, .design for creative)',
      'If the .com is taken but not actively used, check if it\'s listed for sale on Sedo or Afternic',
      'Consider alternative spellings or adding a modifier (get[name].com, [name]app.com)'
    ],
    proTip: 'A name with an available .com is worth 10x more than one where you have to use a quirky TLD. If the .com is taken by an active business, seriously reconsider the name.',
    tools: ['BrandForge\'s built-in domain checker', 'Namecheap bulk search', 'DomainTyper for real-time checking', 'ICANN WHOIS lookup'],
  },
  {
    title: 'Trademark & Legal Availability',
    icon: '⚖️',
    description: 'The check that matters most — is someone else legally entitled to the name?',
    steps: [
      'Search the USPTO database (TESS) for identical and similar marks',
      'Check your state\'s business entity registry (Secretary of State website)',
      'Search common law trademarks (Google the name + industry)',
      'If expanding internationally, check WIPO and EU IPO databases'
    ],
    proTip: 'A name that\'s trademarked in a different industry might still be usable — but it\'s risky. If there\'s any chance of market overlap, find another name.',
    tools: ['USPTO TESS (free)', 'Google Patents search', 'State Secretary of State databases', 'LegalZoom trademark search'],
  },
  {
    title: 'Social Media Handle Availability',
    icon: '📱',
    description: 'Consistent branding across platforms builds trust. Can you get the same handle everywhere?',
    steps: [
      'Check major platforms: Instagram, Twitter/X, Facebook, LinkedIn, TikTok, YouTube',
      'Search for the exact handle (e.g., @yourbrandname) on each platform',
      'Check if similar handles exist that could cause confusion (e.g., @yourbrand_name)',
      'Verify the name isn\'t being used as a hashtag with heavy traffic'
    ],
    proTip: 'Having @yourname everywhere beats @yourname_hq or @yournameofficial. If the exact handle is taken on 2+ major platforms, consider a different name.',
    tools: ['Namechk.com (free bulk checker)', 'KnowEm (paid, comprehensive)', 'BrandForge\'s social checker', 'Manual platform searches'],
  },
  {
    title: 'State Business Registration',
    icon: '🏛️',
    description: 'Can you legally register the business in your state?',
    steps: [
      'Search your state\'s Secretary of State business entity database',
      'Check both exact match and "similar name" results',
      'Verify the name follows your state\'s naming rules (e.g., must include "LLC" for LLCs)',
      'If forming a corporation, check naming suffix requirements (Inc., Corp., Ltd.)'
    ],
    proTip: 'Even if a name is taken in another state, you can usually register it in yours. But if you plan to operate nationally, check all states you\'ll do business in.',
    tools: ['Your state\'s Secretary of State website', 'LegalZoom business name search', 'IncFile name availability check'],
  }
]

const redFlags = [
  {
    title: 'The .com is parked or listed for sale',
    description: 'Someone bought it expecting to resell. You can negotiate, but prices often run $2,000–$50,000+. Factor this into your naming budget.',
  },
  {
    title: 'An active business uses the name',
    description: 'Even if they haven\'t trademarked it, they have common law rights. If they\'re in your industry, you\'re heading for a legal headache.',
  },
  {
    title: 'The name is trademarked in a related category',
    description: 'USPTO uses a "likelihood of confusion" test. If a consumer could mix up your brand with an existing trademarked one, you\'re at risk.',
  },
  {
    title: 'Social handles are taken but inactive',
    description: 'Inactive accounts can sometimes be reclaimed through platform support. But it takes time and isn\'t guaranteed. Have a backup handle strategy.',
  },
  {
    title: 'The name is very similar to a well-known brand',
    description: 'Even without a trademark conflict, brand confusion hurts you. Customers searching for you might find the other brand instead. Distinctiveness wins.',
  }
]



export default function CompanyNameCheckerPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <BlogPostSchema
        title="Company Name Checker: How to Verify Your Business Name Is Available"
        description="Before you commit to a name, check these 4 things: domain availability, trademark conflicts, social handles, and state registration."
        url="https://brandforge-phi-pearl.vercel.app/blog/company-name-checker"
        datePublished="2025-05-20"
      />
      {/* Header */}
      <div className="mb-12">
        <Link href="/blog" className="text-sm text-brand-600 hover:text-brand-700 font-medium">
          ← Back to Blog
        </Link>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Company Name Checker: How to Verify Your Business Name Is Actually Available
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl">
          Falling in love with a name and then discovering it&apos;s taken — as a domain, trademark, or social
          handle — is the most common naming heartbreak. Here&apos;s the complete checklist to make sure your
          name is clear across every channel.
        </p>
        <div className="mt-4 flex items-center gap-3 text-sm text-slate-400">
          <time>May 20, 2025</time>
          <span>·</span>
          <span>10 min read</span>
        </div>
      </div>

      {/* Intro */}
      <div className="prose prose-slate max-w-none mb-12">
        <p className="text-lg leading-relaxed text-slate-700">
          You found the perfect name. It&apos;s catchy, meaningful, and represents your brand perfectly.
          But before you order business cards, you need to verify that name is actually available —
          and we&apos;re not just talking about the domain.
        </p>
        <p className="text-lg leading-relaxed text-slate-700">
          A truly available business name needs to pass <strong>four checks</strong>: domain availability,
          trademark clearance, social handle availability, and state business registration. Skipping any
          of these can lead to rebranding costs, legal disputes, or confused customers.
        </p>
        <p className="text-lg leading-relaxed text-slate-700">
          This guide walks you through each check in order — from quick to thorough — so you can
          verify your name with confidence.
        </p>
      </div>

      {/* CTA */}
      <div className="rounded-2xl bg-gradient-to-r from-brand-50 to-purple-50 p-6 mb-12 text-center">
        <p className="text-sm font-semibold text-brand-700 mb-2">Check domain & social availability automatically</p>
        <p className="text-sm text-slate-600 mb-4">BrandForge generates names and checks availability in real-time — so you never fall for a taken name.</p>
        <a href="/generate" className="btn-primary">Check Names Free</a>
      </div>

      {/* The Four Checks */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          The 4 Checks Every Business Name Needs to Pass
        </h2>
        <p className="text-slate-700 mb-8">
          Think of name availability like a funnel. Each check narrows the field. Do them
          in order — there&apos;s no point doing a trademark search if the .com isn&apos;t available.
        </p>

        <div className="space-y-10">
          {checkCategories.map((cat, i) => (
            <div key={cat.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{cat.icon}</span>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Check {i + 1}: {cat.title}
                  </h3>
                  <p className="text-sm text-slate-500">{cat.description}</p>
                </div>
              </div>

              <div className="mb-5">
                <p className="text-sm font-medium text-slate-700 mb-3">How to check:</p>
                <div className="space-y-2">
                  {cat.steps.map((step, j) => (
                    <div key={j} className="flex gap-3 items-start">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700 font-bold text-xs mt-0.5">{j + 1}</div>
                      <p className="text-sm text-slate-700">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl bg-amber-50 border border-amber-200 p-4 mb-4">
                <p className="text-sm text-amber-900">
                  <strong>💡 Pro tip:</strong> {cat.proTip}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">Recommended Tools</p>
                <div className="flex flex-wrap gap-2">
                  {cat.tools.map((tool) => (
                    <span key={tool} className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Red flags */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          🚩 Red Flags: When to Walk Away From a Name
        </h2>
        <p className="text-slate-700 mb-6">
          Sometimes the data tells you to find another name. Here are five situations where you should
          seriously consider starting over.
        </p>
        <div className="space-y-5">
          {redFlags.map((flag) => (
            <div key={flag.title} className="rounded-xl border border-red-200 bg-red-50/50 p-5">
              <h3 className="font-semibold text-red-900 mb-1">{flag.title}</h3>
              <p className="text-sm text-slate-700">{flag.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Domain strategies */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          Creative Strategies When Your .com Is Taken
        </h2>
        <p className="text-slate-700 mb-6">
          Don&apos;t panic if the exact .com is taken. Here are proven alternatives that still look professional:
        </p>
        <div className="space-y-5">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">1. Add a modifier</h3>
            <p className="text-slate-700">
              Add a short, meaningful word: <strong>get[name].com</strong>, <strong>[name]app.com</strong>,
              <strong>try[name].com</strong>, <strong>[name]co.com</strong>. Many successful startups started
              this way — Before Slack was slack.com, it was slackhq.com.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">2. Use an industry TLD</h3>
            <p className="text-slate-700">
              <strong>.io</strong> for tech, <strong>.co</strong> for companies, <strong>.ai</strong> for
              AI products, <strong>.design</strong> for creative agencies. These can feel even more targeted
              than .com in the right context.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">3. Buy the .com</h3>
            <p className="text-slate-700">
              If it&apos;s parked (not actively used), the owner might sell. Use a broker or reach out
              directly. Prices range from $500 to $50,000+, but for a name you truly love, it can be
              the best investment you make early on.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">4. Slightly modify the name</h3>
            <p className="text-slate-700">
              Adding a single letter can unlock the .com. <strong>Figma</strong> (not Fig), <strong>Notion</strong>
              (not Note). These modifications often make the name stronger, not weaker.
            </p>
          </div>
        </div>
      </div>

      {/* The complete checklist */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          The Complete Name Availability Checklist
        </h2>
        <p className="text-slate-700 mb-6">
          Print this out, check each box, and only commit to a name that passes all four checks:
        </p>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded border-2 border-slate-300 mt-0.5"></div>
              <div>
                <p className="font-medium text-slate-900">.com domain is available (or acceptable alternative)</p>
                <p className="text-sm text-slate-500">Check: domain registrar search</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded border-2 border-slate-300 mt-0.5"></div>
              <div>
                <p className="font-medium text-slate-900">No conflicting trademarks in USPTO database</p>
                <p className="text-sm text-slate-500">Check: USPTO TESS search for identical + similar marks</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded border-2 border-slate-300 mt-0.5"></div>
              <div>
                <p className="font-medium text-slate-900">Social handles available on major platforms</p>
                <p className="text-sm text-slate-500">Check: Namechk or BrandForge social checker</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded border-2 border-slate-300 mt-0.5"></div>
              <div>
                <p className="font-medium text-slate-900">Business name can be registered in your state</p>
                <p className="text-sm text-slate-500">Check: Secretary of State business entity search</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded border-2 border-slate-300 mt-0.5"></div>
              <div>
                <p className="font-medium text-slate-900">No active businesses using the same name in your industry</p>
                <p className="text-sm text-slate-500">Check: Google search + industry directories</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded border-2 border-slate-300 mt-0.5"></div>
              <div>
                <p className="font-medium text-slate-900">Name passes the &quot;phone test&quot; (easy to say, spell, and hear)</p>
                <p className="text-sm text-slate-500">Check: Say it to 3 friends and ask them to spell it back</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Stop Guessing — Check Availability Instantly</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          BrandForge doesn&apos;t just generate names — it checks domain and social handle availability
          in real-time. No more falling in love with a name only to discover it&apos;s taken. Every
          name you see comes with an availability report.
        </p>
        <div className="rounded-2xl border-2 border-brand-200 bg-brand-50/50 p-8 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-2">Check names with real-time availability</h3>
          <p className="text-sm text-slate-600 mb-6">
            Describe your business and get AI-generated names with instant domain & social checks — free.
          </p>
          <a href="/generate" className="btn-primary text-base px-8 py-3">
            Try BrandForge Free
          </a>
        </div>
      </div>

      {/* Related */}
      <div className="mb-12 rounded-2xl bg-slate-50 p-6">
        <p className="text-sm font-semibold text-slate-900 mb-3">📖 More naming guides:</p>
        <ul className="space-y-2">
          <li>
            <Link href="/blog/domain-name-availability" className="text-brand-600 hover:text-brand-700 text-sm">
              Domain Name Availability: Creative Strategies When .com Is Taken →
            </Link>
          </li>
          <li>
            <Link href="/blog/how-to-choose-business-name" className="text-brand-600 hover:text-brand-700 text-sm">
              How to Choose a Business Name: The Complete Guide →
            </Link>
          </li>
          <li>
            <Link href="/blog/llc-naming-guide" className="text-brand-600 hover:text-brand-700 text-sm">
              How to Pick a Name for Your LLC: The Legal & Branding Guide →
            </Link>
          </li>
          <li>
            <Link href="/blog/startup-naming-mistakes" className="text-brand-600 hover:text-brand-700 text-sm">
              7 Naming Mistakes That Kill Startups →
            </Link>
          </li>
          <li>
            <Link href="/blog/brand-name-availability-checker" className="text-brand-600 hover:text-brand-700 text-sm">
              Brand Name Availability Checker: Verify Your Name Is Available →
            </Link>
          </li>
        </ul>
      </div>

      {/* Newsletter */}
      
      {/* FAQ */}
      <section className="mt-16">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((faq, i) => (
            <details key={i} className="group rounded-2xl border border-slate-200 bg-white">
              <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-base font-semibold text-slate-900 hover:bg-slate-50 transition-colors rounded-2xl">
                {faq.question}
                <svg
                  className="h-5 w-5 text-slate-400 flex-shrink-0 ml-4 transition-transform duration-200 group-open:rotate-180"
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

      <BlogNewsletterSection />
    </div>
  )
}