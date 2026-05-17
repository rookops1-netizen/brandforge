export function CTA() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-brand-50 to-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-3xl border border-brand-200 bg-white p-10 sm:p-16 relative overflow-hidden shadow-xl">
          {/* Decorative orbs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-100/50 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100/50 rounded-full blur-3xl -z-10" />

          {/* Icon */}
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100 text-brand-600">
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84 2.18a4.01 4.01 0 004.42-3.52c.09-1.68-.62-3.18-1.79-4.11a4.01 4.01 0 00-2.63-4.45A4.01 4.01 0 0010.6 2.6a4.01 4.01 0 00-2.42 4.48 4.01 4.01 0 00-2.96 4.46A4.01 4.01 0 0110.6 16.77" />
            </svg>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-slate-900">
            Ready to name your
            <br className="hidden sm:block" />
            <span className="gradient-text">next big thing?</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto mb-8">
            Join thousands of founders who&apos;ve found their perfect brand name with BrandForge. Free to start, powerful to scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/generate"
              className="btn-primary inline-flex items-center justify-center gap-2 text-base px-8 py-4"
            >
              Start Generating — It&apos;s Free
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
            <a
              href="#pricing"
              className="btn-secondary inline-flex items-center justify-center gap-2 text-base px-8 py-4"
            >
              View Pricing
            </a>
            <a
              href="/examples"
              className="text-sm text-brand-600 hover:text-brand-700 font-medium self-center"
            >
              See Brand Kit Examples →
            </a>
          </div>

          {/* Urgency + social proof row */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <span className="inline-flex items-center gap-1.5 text-slate-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              847 names generated today
            </span>
            <span className="text-slate-300">&middot;</span>
            <span className="text-slate-400">No credit card required</span>
            <span className="text-slate-300">&middot;</span>
            <span className="text-slate-400">5 free generations included</span>
          </div>
        </div>
      </div>
    </section>
  )
}