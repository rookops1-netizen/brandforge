export function Comparison() {
  const features = [
    {
      name: 'AI-Powered Name Generation',
      description: 'Creative, unique names tailored to your business description',
      brandforge: true,
      namelix: true,
      looka: true,
      shopify: false,
    },
    {
      name: 'Full Brand Kit',
      description: 'Logo concepts, color palettes, taglines, and typography',
      brandforge: true,
      namelix: false,
      looka: true,
      shopify: false,
    },
    {
      name: 'Domain Availability Check',
      description: 'Instant .com, .io, .co availability for every name',
      brandforge: true,
      namelix: false,
      looka: false,
      shopify: true,
    },
    {
      name: 'Social Handle Availability',
      description: 'Check Twitter, Instagram, TikTok handle availability',
      brandforge: true,
      namelix: false,
      looka: false,
      shopify: false,
    },
    {
      name: 'Multiple Names Per Search',
      description: 'Get several options in one generation',
      brandforge: true,
      namelix: true,
      looka: true,
      shopify: true,
    },
    {
      name: 'Free Tier',
      description: 'Try before you buy, no credit card needed',
      brandforge: true,
      namelix: true,
      looka: false,
      shopify: true,
    },
    {
      name: 'Brand Kit Export (PDF)',
      description: 'Download a complete brand guidelines document',
      brandforge: true,
      namelix: false,
      looka: true,
      shopify: false,
    },
    {
      name: 'No Design Skills Needed',
      description: 'Everything is AI-generated, ready to use immediately',
      brandforge: true,
      namelix: false,
      looka: true,
      shopify: true,
    },
  ]

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-brand-600 mb-3 tracking-wider uppercase">
            Why BrandForge
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            The only naming tool that gives you <span className="gradient-text">the full picture</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Other tools stop at the name. BrandForge gives you the complete brand identity — logo, colors, tagline, and availability checks, all in one place.
          </p>
        </div>

        {/* Desktop comparison table */}
        <div className="hidden md:block">
          <div className="rounded-2xl border border-slate-200 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50">
                  <th className="text-left py-4 px-6 text-sm font-semibold text-slate-900 w-[40%]">
                    Feature
                  </th>
                  <th className="py-4 px-4 text-center w-[20%]">
                    <div className="inline-flex flex-col items-center">
                      <span className="text-sm font-bold text-brand-600">BrandForge</span>
                      <span className="text-xs text-green-600 font-medium">Free to start</span>
                    </div>
                  </th>
                  <th className="py-4 px-4 text-center text-sm font-medium text-slate-600 w-[15%]">
                    Namelix
                  </th>
                  <th className="py-4 px-4 text-center text-sm font-medium text-slate-600 w-[15%]">
                    Looka
                  </th>
                  <th className="py-4 px-4 text-center text-sm font-medium text-slate-600 w-[15%]">
                    Shopify
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, i) => (
                  <tr
                    key={feature.name}
                    className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}
                  >
                    <td className="py-3.5 px-6">
                      <div>
                        <p className="text-sm font-medium text-slate-900">{feature.name}</p>
                        <p className="text-xs text-slate-500 hidden lg:block">{feature.description}</p>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      {feature.brandforge ? (
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </span>
                      ) : (
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-200 text-slate-500">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      {feature.namelix ? (
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-green-50 text-green-600">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </span>
                      ) : (
                        <span className="inline-flex h-7 w-7 items-center justify-center text-slate-300">
                          <span className="text-slate-300">—</span>
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      {feature.looka ? (
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-green-50 text-green-600">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </span>
                      ) : (
                        <span className="inline-flex h-7 w-7 items-center justify-center text-slate-300">
                          <span className="text-slate-300">—</span>
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      {feature.shopify ? (
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-green-50 text-green-600">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </span>
                      ) : (
                        <span className="inline-flex h-7 w-7 items-center justify-center text-slate-300">
                          <span className="text-slate-300">—</span>
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Bottom CTA */}
            <div className="bg-gradient-to-r from-brand-50 to-purple-50 px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-brand-100">
              <p className="text-sm text-slate-700">
                <span className="font-semibold text-slate-900">BrandForge covers all the bases.</span> Names, branding, and availability — all in one tool.
              </p>
              <a
                href="/generate"
                className="btn-primary inline-flex items-center gap-2 whitespace-nowrap"
              >
                Try It Free
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile card view */}
        <div className="md:hidden space-y-4">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="rounded-xl border border-slate-200 bg-white p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold text-slate-900">{feature.name}</h3>
                {feature.brandforge && (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-600">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    BrandForge
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 mb-3">{feature.description}</p>
              <div className="flex gap-3 text-xs">
                <span className={`px-2 py-1 rounded-full ${feature.brandforge ? 'bg-brand-100 text-brand-700 font-medium' : 'bg-slate-200 text-slate-600'}`}>
                  BrandForge {feature.brandforge ? '✓' : '—'}
                </span>
                <span className={`px-2 py-1 rounded-full ${feature.namelix ? 'bg-green-50 text-green-700' : 'bg-slate-200 text-slate-600'}`}>
                  Namelix {feature.namelix ? '✓' : '—'}
                </span>
                <span className={`px-2 py-1 rounded-full ${feature.looka ? 'bg-green-50 text-green-700' : 'bg-slate-200 text-slate-600'}`}>
                  Looka {feature.looka ? '✓' : '—'}
                </span>
              </div>
            </div>
          ))}

          {/* Mobile CTA */}
          <div className="rounded-xl bg-gradient-to-r from-brand-50 to-purple-50 p-5 text-center border border-brand-100">
            <p className="text-sm text-slate-700 mb-3">
              <span className="font-semibold text-slate-900">The only tool with names + full brand kits + availability checks.</span>
            </p>
            <a
              href="/generate"
              className="btn-primary inline-flex items-center gap-2"
            >
              Try It Free
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}