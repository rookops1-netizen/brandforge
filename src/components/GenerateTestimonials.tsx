// ⚠️ PLACEHOLDER TESTIMONIALS — Daniel, replace these with real user reviews when available.

const GENERATE_TESTIMONIALS = [
  {
    quote: "BrandForge gave me 3 names I loved in the first try. Picked one, grabbed the domain, and I was live within a week.",
    name: "Sarah Chen",
    role: "Founder, BloomStack",
    avatar: "SC",
    color: "#6366F1",
  },
  {
    quote: "I spent weeks brainstorming names. This gave me better results in 30 seconds. The brand kit was a game changer.",
    name: "Marcus Rivera",
    role: "CEO, PulseMetrics",
    avatar: "MR",
    color: "#0EA5E9",
  },
  {
    quote: "The color palette and tagline suggestions were incredibly on-point. Felt like working with a branding agency.",
    name: "Priya Sharma",
    role: "Co-founder, Veles",
    avatar: "PS",
    color: "#8B5CF6",
  },
  {
    quote: "Short, punchy, and the .com was available. BrandForge understood that fitness names need energy, not complexity.",
    name: "Carlos Mendez",
    role: "Founder, Clearway Fitness",
    avatar: "CM",
    color: "#F97316",
  },
  {
    quote: "For my pottery studio, the name needed to feel handmade and grounded. Ember & Grain is exactly that energy.",
    name: "Nadia Petrov",
    role: "Co-founder, Ember & Grain Studio",
    avatar: "NP",
    color: "#D97706",
  },
  {
    quote: "Naming a record label is surprisingly hard — you want it to sound iconic immediately. Sonicrift does that.",
    name: "Ryan Tanaka",
    role: "Co-founder, Sonicrift Records",
    avatar: "RT",
    color: "#7C3AED",
  },
]

export function GenerateTestimonials() {
  return (
    <section className="bg-white border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-1.5 mb-3">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="h-5 w-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.06 8.283c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2 text-sm font-medium text-slate-600">4.9/5 from 12,000+ founders</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Founders love BrandForge
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GENERATE_TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="rounded-xl border border-slate-200 bg-slate-50/50 p-5 transition-all duration-200 hover:shadow-md hover:border-brand-200"
            >
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-3.5 w-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.06 8.283c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-2.5">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full text-white font-bold text-[10px] flex-shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.avatar}
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-slate-900 truncate">{t.name}</div>
                  <div className="text-[11px] text-slate-500 truncate">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="/testimonials"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
          >
            See all reviews
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}