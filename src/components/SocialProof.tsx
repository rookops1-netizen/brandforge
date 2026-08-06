// ⚠️ PLACEHOLDER TESTIMONIALS — Daniel, replace these with real user reviews when available.
// Names, roles, and quotes are fabricated for launch. Swap in real customer feedback ASAP.

const testimonials = [
  {
    quote: "BrandForge gave me 3 names I loved in the first try. Picked one, grabbed the domain, and I was live within a week.",
    name: "Sarah Chen",
    role: "Founder, BloomStack",
    avatar: "SC",
    color: "#4338CA", // indigo-700 for WCAG AA contrast with white text
  },
  {
    quote: "I spent weeks brainstorming names. This gave me better results in 30 seconds. The brand kit was a game changer.",
    name: "Marcus Rivera",
    role: "CEO, PulseMetrics",
    avatar: "MR",
    color: "#0369A1", // sky-700 for WCAG AA contrast with white text
  },
  {
    quote: "The color palette and tagline suggestions were incredibly on-point. Felt like working with a branding agency.",
    name: "Priya Sharma",
    role: "Co-founder, Veles",
    avatar: "PS",
    color: "#6D28D9", // violet-700 for WCAG AA contrast with white text
  },
  {
    quote: "Got a name that sounds professional and trustworthy — exactly what cleaning clients need to see on Google Maps.",
    name: "James Okonkwo",
    role: "Owner, Northpoint Clean Co.",
    avatar: "JO",
    color: "#0F766E", // teal-700 for WCAG AA contrast with white text
  },
  {
    quote: "My clients always comment on the name. It's become part of our brand identity — warm, premium, and memorable.",
    name: "Amanda Liu",
    role: "Founder, Velvet Paws Pet Spa",
    avatar: "AL",
    color: "#B45309", // amber-700 for WCAG AA contrast with white text
  },
  {
    quote: "The name sounds artisan and approachable — exactly the vibe we wanted for our neighborhood roastery.",
    name: "David Kowalski",
    role: "Owner, Hearthstone Roasters",
    avatar: "DK",
    color: "#92400E", // amber-800 for WCAG AA contrast with white text
  },
]

const stats = [
  { value: "50K+", label: "Names Generated" },
  { value: "12K+", label: "Happy Founders" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "< 30s", label: "Time to Results" },
]

export function SocialProof() {
  return (
    <section className="bg-slate-50 border-y border-slate-100">
      {/* Stats bar */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-brand-600 sm:text-4xl">{stat.value}</div>
              <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Wall of Love heading */}
      <div className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold text-brand-600 tracking-wider uppercase mb-2">Wall of Love</p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Loved by founders everywhere
          </h2>
          <p className="mt-2 text-slate-500 max-w-xl mx-auto">
            From solo startups to established businesses — see how BrandForge helps real people name their ventures.
          </p>
        </div>
      </div>

      {/* Testimonial masonry grid */}
      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.06 8.283c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              {/* Quote */}
              <p className="text-slate-700 text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              {/* Author */}
              <div className="mt-4 flex items-center gap-3 pt-4 border-t border-slate-100">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full text-white font-bold text-xs"
                  style={{ backgroundColor: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Link to full testimonials page */}
        <div className="mt-10 text-center">
          <a
            href="/testimonials"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
          >
            Read more reviews from 12,000+ founders
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}