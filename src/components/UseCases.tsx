const useCases = [
  {
    title: 'Startups & New Ventures',
    description: 'Find a name that resonates with investors and customers alike. Get a complete brand identity before your first pitch deck.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84 2.18a4.01 4.01 0 004.42-3.52c.09-1.68-.62-3.18-1.79-4.11a4.01 4.01 0 00-2.63-4.45A4.01 4.01 0 0010.6 2.6a4.01 4.01 0 00-2.42 4.48 4.01 4.01 0 00-2.96 4.46A4.01 4.01 0 0110.6 16.77" />
      </svg>
    ),
    keywords: ['startup name ideas', 'tech startup naming', 'venture naming'],
  },
  {
    title: 'Freelancers & Solopreneurs',
    description: 'Your personal brand deserves a name that\'s as unique as your work. Stand out with a name clients will remember.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.502 9.73a7.5 7.5 0 0114.996 0A7.5 7.5 0 014.502 9.73zM2.25 21h19.5" />
      </svg>
    ),
    keywords: ['freelance business names', 'personal brand naming', 'solopreneur name generator'],
  },
  {
    title: 'Agencies & Studios',
    description: 'Name your next client project or your agency rebrand. Generate options that align with creative direction and strategy.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.152m10.082-4.726a15.99 15.99 0 01-3.388 1.152m0 0a15.99 15.99 0 01-3.388-1.152m3.388 1.152a3 3 0 005.78 1.128 2.25 2.25 0 012.4 2.245 4.5 4.5 0 01-8.4-2.245c0-.399.078-.78.22-1.128" />
      </svg>
    ),
    keywords: ['agency naming', 'creative studio names', 'design firm name ideas'],
  },
  {
    title: 'Side Projects & Products',
    description: 'Shipping fast? Get a memorable name and brand kit in seconds so you can launch MVPs without branding bottlenecks.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.092-.767 2.04-1.829 2.282-.74.175-1.484.295-2.246.295-4.971 0-9.175-3.038-10.845-7.357A12.004 12.004 0 011.5 12c0-1.47.265-2.878.745-4.225C3.915 3.448 8.119.41 13.09.41c.762 0 1.506.12 2.246.295C16.398.947 17.165 1.895 17.165 2.987V7.15" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    keywords: ['side project naming', 'product name generator', 'app name ideas'],
  },
  {
    title: 'Rebranding & Renaming',
    description: 'Outgrown your current name? Get fresh perspectives and alternatives that honor your brand\'s evolution and vision.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
      </svg>
    ),
    keywords: ['business rebranding', 'company rename ideas', 'rebrand name generator'],
  },
  {
    title: 'E-commerce & D2C Brands',
    description: 'Find catchy, memorable names that convert browsers into buyers. With domain checks, you\'ll know the .com is yours.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3a3 3 0 01-3-3l1.386-8.25h15.75L21 14.25a3 3 0 01-3 3h-7.5" />
      </svg>
    ),
    keywords: ['ecommerce brand names', 'D2C naming', 'online store name ideas'],
  },
]

export function UseCases() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-brand-600 mb-3 tracking-wider uppercase">
            Built For Every Founder
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Whatever you&apos;re building, we&apos;ve got a name for it
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            From weekend side projects to funded startups — BrandForge gives you names that fit your vision and brand kits that make you look professional from day one.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((uc) => (
            <div
              key={uc.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-brand-200"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                {uc.icon}
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">{uc.title}</h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">{uc.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="/generate"
            className="btn-primary inline-flex items-center gap-2 text-base px-8 py-3"
          >
            Try It Free
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}