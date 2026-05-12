export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Describe your idea',
      description: 'Tell us about your business — the industry, the vibe, your target audience. The more detail, the better the names.',
      icon: (
        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487z" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Get tailored names',
      description: 'Our AI generates creative, memorable business names complete with meanings and brand identity suggestions.',
      icon: (
        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Launch your brand',
      description: 'Pick your favorite and unlock the full brand kit — logo, colors, tagline, domain & social handles, all ready to go.',
      icon: (
        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84 2.18a4.01 4.01 0 004.42-3.52c.09-1.68-.62-3.18-1.79-4.11a4.01 4.01 0 00-2.63-4.45A4.01 4.01 0 0010.6 2.6a4.01 4.01 0 00-2.42 4.48 4.01 4.01 0 00-2.96 4.46A4.01 4.01 0 0110.6 16.77" />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-brand-600 mb-3 tracking-wider uppercase">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Three steps to your perfect brand
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
            From idea to brand identity in under a minute. No design skills needed.
          </p>
        </div>

        <div className="relative">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-16 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-brand-200 via-brand-300 to-brand-200" />

          <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative text-center">
                {/* Step circle */}
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 ring-4 ring-white shadow-sm">
                  {step.icon}
                </div>
                {/* Step number badge */}
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 rounded-full bg-brand-600 px-2.5 py-0.5 text-xs font-bold text-white shadow-sm">
                  {step.number}
                </span>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}