import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '7 Naming Mistakes That Kill Startups — BrandForge Blog',
  description: 'Hard-to-spell names, inside jokes, trademark conflicts — these are the naming traps founders fall into over and over. Here\'s how to avoid all of them.',
  openGraph: {
    title: '7 Naming Mistakes That Kill Startups (Before They Even Launch)',
    description: 'The naming traps founders fall into and how to avoid them.',
    url: 'https://brandforge-phi-pearl.vercel.app/blog/startup-naming-mistakes',
    siteName: 'BrandForge',
    type: 'article',
  },
}

export default function StartupNamingMistakes() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <nav className="mb-8 text-sm text-slate-500">
        <Link href="/blog" className="hover:text-brand-600 transition-colors">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">Startup Naming Mistakes</span>
      </nav>

      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-red-100 text-red-700">
            Naming
          </span>
          <span className="text-sm text-slate-400">5 min read</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          7 Naming Mistakes That Kill Startups (Before They Even Launch)
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Hard-to-spell names, inside jokes, trademark conflicts — these are the traps that founders fall into over and over. Here&apos;s how to avoid all of them.
        </p>
        <div className="mt-6 flex items-center gap-3 text-sm text-slate-500">
          <div className="h-8 w-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-semibold text-xs">BF</div>
          <span>BrandForge Team</span>
          <span>·</span>
          <time>April 15, 2025</time>
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
          A bad business name doesn&apos;t just look unfortunate on a business card — it actively harms your ability to grow. It hurts SEO, confuses customers, invites legal trouble, and creates friction in every single interaction. Here are the seven most common naming mistakes that kill startups before they even get off the ground.
        </p>

        <h2>Mistake #1: Choosing a Name You Have to Spell Out Loud</h2>

        <p>
          If you say your name at a networking event and the other person asks, &ldquo;How do you spell that?&rdquo; — you&apos;ve already lost. Every time someone has to spell your name, it creates friction. Friction kills word of mouth.
        </p>

        <p>
          <strong>The test:</strong> Say your name to a friend. If they can&apos;t type it into a browser correctly on the first try, change it.
        </p>

        <h2>Mistake #2: Using Your Own Name</h2>

        <p>
          &ldquo;Johnson Consulting&rdquo; is fine for a local business. But naming your startup after yourself creates three problems: it limits scale (what if you sell the company?), it&apos;s not distinctive (&ldquo;Johnson Consulting&rdquo; returns 47 results on Google), and it makes the brand about you instead of the value you provide.
        </p>

        <p>
          There are exceptions — Ford, Dell, Ferrari. But for every one of those, there are ten thousand anonymous personal-name businesses that struggle to differentiate.
        </p>

        <h2>Mistake #3: Picking a Name That&apos;s Too Literal</h2>

        <p>
          &ldquo;Online Shoe Store&rdquo; tells you what the business does, but it doesn&apos;t give you a reason to care. The best names are evocative, not descriptive. &ldquo;Zappos&rdquo; doesn&apos;t tell you they sell shoes — but you remember it, and you can find it on Google in one try.
        </p>

        <h2>Mistake #4: Ignoring Trademark Conflicts</h2>

        <p>
          Spending six months building a brand only to receive a cease-and-desist letter is a startup-ending event. A quick USPTO search takes 10 minutes and can prevent months of legal headaches later. Do this <em>before</em> you register your domain.
        </p>

        <h2>Mistake #5: Adding Numbers, Hyphens, or Dots</h2>

        <p>
          &ldquo;my-brand-name.com&rdquo; and &ldquo;brandname123.com&rdquo; look unprofessional, are hard to communicate verbally, and destroy brand memorability. If you can&apos;t get the clean domain, use a modifier (get, try, app) or an alternative TLD (.io, .co) — never add punctuation or numbers.
        </p>

        <h2>Mistake #6: Naming Inside Jokes</h2>

        <p>
          A name that only makes sense to you and your co-founder might be funny at the whiteboard, but it won&apos;t resonate with customers. Your name needs to work for someone who has zero context about your story.
        </p>

        <h2>Mistake #7: Waiting Too Long to Decide</h2>

        <p>
          &ldquo;Perfect is the enemy of shipped.&rdquo; This applies to naming more than almost anything else. Many founders spend weeks or months agonizing over a name while their product gathers dust. A good-enough name launched today beats a perfect name launched next quarter.
        </p>

        <h2>How to Avoid All Seven</h2>

        <p>
          Use a tool that checks all the boxes at once. BrandForge generates names that are short, spellable, distinctive, and come with instant domain and social handle availability — so you can skip the most common mistakes and get back to building. <Link href="/generate" className="text-brand-600 underline decoration-brand-300 hover:decoration-brand-600">Try it free →</Link>
        </p>
      </div>

      <div className="mt-16 rounded-3xl bg-gradient-to-br from-brand-50 via-white to-purple-50 p-8 sm:p-12 text-center">
        <h2 className="text-2xl font-bold text-slate-900">Stop overthinking your name</h2>
        <p className="mt-2 text-slate-600">Generate short, memorable, available names in seconds — and check domains at the same time.</p>
        <div className="mt-6">
          <a href="/generate" className="btn-primary">Generate Names Free</a>
        </div>
      </div>
    </article>
  )
}