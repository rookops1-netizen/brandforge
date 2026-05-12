const features = [
  {
    name: 'AI Name Generation',
    description: 'Get creative, unique business names tailored to your vision. Our AI analyzes your description for perfect matches.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  },
  {
    name: 'Brand Kit',
    description: 'Every name comes with a complete brand identity — logo concept, color palette, and tagline that tells your story.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 01-1.272-2.916l.015-.958a3.75 3.75 0 011.533-2.867L7.72 12.53a.75.75 0 000-1.06l-3.346-2.63a3.75 3.75 0 01-1.533-2.867l-.015-.958a3.75 3.75 0 011.272-2.916 3.75 3.75 0 012.916-1.272l.958.015a3.75 3.75 0 012.867 1.533l2.63 3.346a.75.75 0 001.06 0l2.63-3.346a3.75 3.75 0 012.867-1.533l.958.015a3.75 3.75 0 012.916 1.272 3.75 3.75 0 011.272 2.916l-.015.958a3.75 3.75 0 01-1.533 2.867L16.28 11.47a.75.75 0 000 1.06l3.346 2.63a3.75 3.75 0 011.533 2.867l.015.958a3.75 3.75 0 01-1.272 2.916 3.75 3.75 0 01-2.916 1.272l-.958-.015a3.75 3.75 0 01-2.867-1.533l-2.63-3.346a.75.75 0 00-1.06 0l-2.63 3.346a3.75 3.75 0 01-2.867 1.533l-.958.015a3.75 3.75 0 01-2.916-1.272z" />
      </svg>
    ),
  },
  {
    name: 'Domain & Social Checks',
    description: 'Instantly see if the .com domain and social media handles are available for each name suggestion.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A8.966 8.966 0 013 12c0-1.264.26-2.466.733-3.568" />
      </svg>
    ),
  },
  {
    name: 'Export & Share',
    description: 'Download your complete brand kit as a shareable document. Get brand guidelines ready for designers and developers.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
  },
]

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-sm font-semibold text-brand-600 mb-3 tracking-wider uppercase">
          Features
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Everything you need to launch
        </h2>
        <p className="mt-4 text-lg text-slate-500">
          From a spark of an idea to a complete brand identity in seconds.
        </p>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.name}
            className="group rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-brand-200"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
              {feature.icon}
            </div>
            <h3 className="mt-4 text-sm font-semibold text-slate-900">{feature.name}</h3>
            <p className="mt-2 text-sm text-slate-500 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}