import type { Metadata } from 'next'
import Link from 'next/link'
import { BlogPostSchema } from '@/components/BlogPostSchema'

export const metadata: Metadata = {
  title: 'Domain Name Availability: When .com Is Taken — BrandForge Blog',
  description: 'Your perfect name is available — just maybe not as a .com. Learn smart domain strategies using alternative TLDs, modifiers, and creative workarounds.',
  openGraph: {
    title: 'Domain Name Availability: Creative Strategies When .com Is Taken',
    description: 'Smart strategies for finding available domains when .com is already taken.',
    url: 'https://brandforge-phi-pearl.vercel.app/blog/domain-name-availability',
    siteName: 'BrandForge',
    type: 'article',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://brandforge-phi-pearl.vercel.app/blog/domain-name-availability' },
}

export default function DomainNameAvailability() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <BlogPostSchema
        title="Domain Name Availability: Creative Strategies When .com Is Taken"
        description="Your perfect name is available — just maybe not as a .com. Learn smart domain strategies using alternative TLDs, modifiers, and creative workarounds."
        url="https://brandforge-phi-pearl.vercel.app/blog/domain-name-availability"
        datePublished="2025-04-28"
      />
      <nav className="mb-8 text-sm text-slate-500">
        <Link href="/blog" className="hover:text-brand-600 transition-colors">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">Domain Name Availability</span>
      </nav>

      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-amber-100 text-amber-700">
            Domains
          </span>
          <span className="text-sm text-slate-400">7 min read</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Domain Name Availability: Creative Strategies When .com Is Taken
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Your perfect name is available — just maybe not as a .com. Here&apos;s how to find it.
        </p>
        <div className="mt-6 flex items-center gap-3 text-sm text-slate-500">
          <div className="h-8 w-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-semibold text-xs">BF</div>
          <span>BrandForge Team</span>
          <span>·</span>
          <time>April 28, 2025</time>
        </div>
      </header>

      <hr className="border-slate-200 mb-10" />

      <div className="prose prose-slate prose-lg max-w-none
        [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-slate-900
        [&_p]:mt-4 [&_p]:text-slate-700 [&_p]:leading-7
        [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-slate-700 [&_li]:mt-2
        [&_strong]:text-slate-900
      ">

        <p>
          Here&apos;s the uncomfortable truth about domain names: <strong>over 350 million .com domains have been registered</strong>, and virtually every dictionary word and common phrase is taken. If your first-choice .com isn&apos;t available, you&apos;re in good company. The question isn&apos;t &ldquo;what if .com is taken?&rdquo; — it&apos;s &ldquo;what do I do now?&rdquo;
        </p>

        <h2>Strategy 1: Alternative TLDs Are Not the Compromise They Used to Be</h2>

        <p>
          The landscape has shifted. In 2020, .io was seen as a &ldquo;startup thing.&rdquo; Now it&apos;s standard. .co, .ai, .app, .dev, and .so have all gained mainstream acceptance. Here&apos;s when each makes sense:
        </p>

        <ul>
          <li><strong>.io</strong> — Great for tech products and developer tools. Widely accepted. Slightly more expensive.</li>
          <li><strong>.co</strong> — Clean and short. Works well for companies. Make sure your name doesn&apos;t sound weird with &ldquo;co&rdquo; appended.</li>
          <li><strong>.ai</strong> — Perfect for AI products. High recognition right now. Premium pricing.</li>
          <li><strong>.app / .dev</strong> — Ideal for software products. Google uses .app for their own products.</li>
          <li><strong>.so</strong> — Trendy in the developer/creative space. Short and memorable.</li>
        </ul>

        <h2>Strategy 2: The Modifier Approach</h2>

        <p>
          Add a short, meaningful word before or after your brand name:
        </p>

        <ul>
          <li><strong>get[name].com</strong> — getstripe.com, getstreak.com (very common in SaaS)</li>
          <li><strong>[name]app.com</strong> — Clean and descriptive</li>
          <li><strong>try[name].com</strong> — Action-oriented, works for products</li>
          <li><strong>use[name].com</strong> — Similar energy to &ldquo;try&rdquo;</li>
          <li><strong>hey[name].com</strong> — Friendly, works for consumer products</li>
        </ul>

        <p>
          The modifier approach is so popular that many startups launch with &ldquo;get&rdquo; domains and never change them. It&apos;s not a temporary hack — it&apos;s a legitimate strategy.
        </p>

        <h2>Strategy 3: Buy the Domain</h2>

        <p>
          If the .com is held by a domain squatter, you can often buy it for $1,000–$5,000 — which is cheaper than rebranding later. Negotiate firmly. Most squatters paid $10 for the domain and are happy to sell for anything above $500.
        </p>

        <h2>Strategy 4: Abbreviate or Modify</h2>

        <p>
          If your full name isn&apos;t available, try:
        </p>

        <ul>
          <li>Dropping a letter (e.g., &ldquo;Fabric&rdquo; → fabrc.com)</li>
          <li>Acronymizing (e.g., &ldquo;Business Intelligence Tools&rdquo; → bitools.com)</li>
          <li>Adding a relevant suffix (e.g., &ldquo;Loom&rdquo; → loomvideo.com)</li>
        </ul>

        <p>
          <strong>Warning:</strong> Don&apos;t add hyphens or numbers. &ldquo;my-brand-name.com&rdquo; and &ldquo;brandname123.com&rdquo; look unprofessional and are hard to communicate verbally.
        </p>

        <h2>Check Domains Instantly with BrandForge</h2>

        <p>
          Every name generated by BrandForge comes with real-time domain availability checks across .com, .io, .co, and other popular TLDs. No more switching tabs to a domain registrar — see what&apos;s available the moment you see a name you like. <Link href="/generate" className="text-brand-600 underline decoration-brand-300 hover:decoration-brand-600">Try it free →</Link>
        </p>
      </div>

      <div className="mt-16 rounded-3xl bg-gradient-to-br from-brand-50 via-white to-purple-50 p-8 sm:p-12 text-center">
        <h2 className="text-2xl font-bold text-slate-900">Check domain availability as you brainstorm</h2>
        <p className="mt-2 text-slate-600">Generate names and see domain availability in real time.</p>
        <div className="mt-6">
          <a href="/generate" className="btn-primary">Start Generating</a>
        </div>
      </div>
    </article>
  )
}