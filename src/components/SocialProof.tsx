const testimonials = [
  {
    quote: "BrandForge gave me 3 names I loved in the first try. Picked one, grabbed the domain, and I was live within a week.",
    name: "Sarah Chen",
    role: "Founder, BloomStack",
    avatar: "SC",
  },
  {
    quote: "I spent weeks brainstorming names. This gave me better results in 30 seconds. The brand kit was a game changer.",
    name: "Marcus Rivera",
    role: "CEO, PulseMetrics",
    avatar: "MR",
  },
  {
    quote: "The color palette and tagline suggestions were incredibly on-point. Felt like working with a branding agency.",
    name: "Priya Sharma",
    role: "Co-founder, Veles",
    avatar: "PS",
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

      {/* Testimonials */}
      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="card flex flex-col">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.06 8.283c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-700 text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-700 font-semibold text-sm">
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
      </div>
    </section>
  )
}