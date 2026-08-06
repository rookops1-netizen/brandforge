'use client'

import { useState } from 'react'

const demoBrands = [
  {
    name: 'Nimbly',
    industry: 'SaaS / Tech Startup',
    description: 'An AI workflow automation platform that helps teams move faster.',
    tagline: 'Work at the speed of thought.',
    colors: ['#3B6FF5', '#7C3AED', '#0F172A', '#F8FAFC', '#10B981'],
    colorNames: ['Brand Blue', 'Purple Accent', 'Slate Dark', 'Cloud White', 'Action Green'],
    font: 'Inter + JetBrains Mono',
    logoDescription: 'A stylized "N" formed from three angled lines suggesting forward momentum and flow. Works as a standalone icon for app badges and favicons.',
    domain: 'nimbly.io',
    domainAvailable: true,
    socials: [
      { platform: 'Twitter', handle: '@nimblyapp', available: true },
      { platform: 'Instagram', handle: '@nimblyapp', available: true },
    ],
    vibe: 'Fast, clean',
  },
  {
    name: 'Ember & Oak',
    industry: 'Restaurant & Bar',
    description: 'A farm-to-fire restaurant specializing in wood-fired cuisine and craft cocktails.',
    tagline: 'Where fire meets flavor.',
    colors: ['#2D1B0E', '#C75B39', '#E8D5B7', '#4A7C59', '#1A1A2E'],
    colorNames: ['Charcoal Bark', 'Ember Orange', 'Cream Linen', 'Forest Sage', 'Midnight'],
    font: 'Playfair Display + Inter',
    logoDescription: 'A minimal campfire icon formed from two intersecting lines — one straight (oak), one curved (ember). Clean, warm, and versatile.',
    domain: 'emberandoak.com',
    domainAvailable: true,
    socials: [
      { platform: 'Instagram', handle: '@emberandoak', available: true },
      { platform: 'TikTok', handle: '@emberandoak', available: false },
    ],
    vibe: 'Rustic warm',
  },
  {
    name: 'PulseFit',
    industry: 'Fitness & Health',
    description: 'A heart-rate-based fitness platform that personalizes workouts to your body\'s signals.',
    tagline: 'Train to your own rhythm.',
    colors: ['#EF4444', '#0F172A', '#22D3EE', '#F8FAFC', '#6366F1'],
    colorNames: ['Pulse Red', 'Slate Black', 'Energy Cyan', 'Cloud White', 'Recovery Indigo'],
    font: 'Montserrat + Roboto Mono',
    logoDescription: 'A heartbeat line that transforms into a flexing arm at its peak. Dynamic, bold, and instantly recognizable at small sizes.',
    domain: 'pulsefit.com',
    domainAvailable: false,
    socials: [
      { platform: 'Twitter', handle: '@pulsefit', available: true },
      { platform: 'Instagram', handle: '@pulsefit', available: true },
    ],
    vibe: 'High energy',
  },
]

export function BrandKitPreview() {
  const [activeBrand, setActiveBrand] = useState(0)
  const brand = demoBrands[activeBrand]

  return (
    <section className="py-20 sm:py-28 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-brand-600 mb-3 tracking-wider uppercase">
            What You Get
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            A complete brand kit, <span className="gradient-text">not just a name</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Every name comes with a full brand identity — logo concept, color palette, tagline, typography, and domain availability. Here&apos;s exactly what that looks like.
          </p>
        </div>

        {/* Brand selector tabs */}
        <div className="flex justify-center gap-3 mb-8">
          {demoBrands.map((b, i) => (
            <button
              key={b.name}
              onClick={() => setActiveBrand(i)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                i === activeBrand
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-600/25'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-brand-200 hover:text-brand-600'
              }`}
            >
              <span className="hidden sm:inline">{b.name}</span>
              <span className="sm:hidden">{b.name.split(' ')[0]}</span>
              <span className="ml-2 text-xs opacity-60">{b.vibe}</span>
            </button>
          ))}
        </div>

        {/* Brand kit card */}
        <div className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-xl shadow-slate-200/50 transition-all duration-500">
          {/* Color strip at top */}
          <div className="flex h-2.5">
            {brand.colors.map((color) => (
              <div key={color} className="flex-1 transition-all duration-500" style={{ backgroundColor: color }} />
            ))}
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Left column */}
              <div className="space-y-6">
                {/* Brand name + vibe */}
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl text-xl font-bold text-white shadow-lg"
                      style={{ backgroundColor: brand.colors[0] }}
                    >
                      {brand.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{brand.name}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-brand-600 font-medium">{brand.industry}</span>
                        <span className="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">{brand.vibe}</span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-slate-600 text-sm leading-relaxed">{brand.description}</p>
                </div>

                {/* Tagline */}
                <div className="rounded-xl bg-gradient-to-r from-slate-50 to-brand-50 px-5 py-4">
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-1">Tagline</p>
                  <p className="text-lg text-slate-900 font-semibold italic">&ldquo;{brand.tagline}&rdquo;</p>
                </div>

                {/* Logo Concept */}
                <div>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-2">Logo Concept</p>
                  <p className="text-sm text-slate-700 leading-relaxed">{brand.logoDescription}</p>
                </div>

                {/* Typography */}
                <div>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-2">Typography</p>
                  <p className="text-sm text-slate-700">{brand.font}</p>
                </div>
              </div>

              {/* Right column */}
              <div className="space-y-6">
                {/* Color Palette */}
                <div>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-3">Color Palette</p>
                  <div className="grid grid-cols-5 gap-3">
                    {brand.colors.map((color, i) => (
                      <div key={color} className="text-center">
                        <div
                          className="h-16 rounded-xl shadow-inner border border-slate-100 transition-all duration-500"
                          style={{ backgroundColor: color }}
                        />
                        <p className="mt-1.5 text-xs font-medium text-slate-700 truncate">{brand.colorNames[i]}</p>
                        <p className="text-xs text-slate-500 font-mono">{color}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Domain & Social Availability */}
                <div>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-3">Domain & Social Availability</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3">
                      <span className="text-sm font-medium text-slate-700">{brand.domain}</span>
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                        brand.domainAvailable
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {brand.domainAvailable ? 'Available' : 'Taken'}
                      </span>
                    </div>
                    {brand.socials.map((social) => (
                      <div key={social.platform} className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3">
                        <span className="text-sm text-slate-500">{social.platform}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium text-slate-700">{social.handle}</span>
                          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                            social.available ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                          }`}>
                            {social.available ? 'Available' : 'Taken'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pro badge */}
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <svg className="h-4 w-4 text-brand-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                  Full brand kit unlocked with Pro — logo, colors, tagline, domain & social checks
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="border-t border-slate-100 bg-gradient-to-r from-brand-50/50 to-purple-50/50 px-6 py-5 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-600">
              <span className="font-semibold text-slate-900">This could be your brand.</span> Describe your idea and get results like these in 30 seconds.
            </p>
            <a
              href="/generate"
              className="btn-primary inline-flex items-center gap-2 whitespace-nowrap"
            >
              Generate Your Brand
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>

        {/* Feature highlights below */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-start gap-3 rounded-xl bg-white border border-slate-200 p-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-600">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">AI-Generated Names</p>
              <p className="text-xs text-slate-500 mt-0.5">Creative, unique names tailored to your description</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl bg-white border border-slate-200 p-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 01-1.272-2.916l.015-.958a3.75 3.75 0 011.533-2.867L7.72 12.53a.75.75 0 000-1.06l-3.346-2.63a3.75 3.75 0 01-1.533-2.867l-.015-.958a3.75 3.75 0 011.272-2.916 3.75 3.75 0 012.916-1.272l.958.015a3.75 3.75 0 012.867 1.533l2.63 3.346a.75.75 0 001.06 0l2.63-3.346a3.75 3.75 0 012.867-1.533l.958-.015a3.75 3.75 0 012.916 1.272 3.75 3.75 0 011.272 2.916l-.015.958a3.75 3.75 0 01-1.533 2.867L16.28 11.47a.75.75 0 000 1.06l3.346 2.63a3.75 3.75 0 011.533 2.867l.015.958a3.75 3.75 0 01-1.272 2.916 3.75 3.75 0 01-2.916 1.272l-.958-.015a3.75 3.75 0 01-2.867-1.533l-2.63-3.346a.75.75 0 00-1.06 0l-2.63 3.346a3.75 3.75 0 01-2.867 1.533l-.958.015a3.75 3.75 0 01-2.916-1.272z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Full Brand Kit</p>
              <p className="text-xs text-slate-500 mt-0.5">Logo, colors, tagline, and typography included</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl bg-white border border-slate-200 p-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A8.966 8.966 0 013 12c0-1.264.26-2.466.733-3.568" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Instant Availability</p>
              <p className="text-xs text-slate-500 mt-0.5">Real-time domain & social handle checks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}