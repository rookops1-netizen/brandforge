'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const placeholderHints = [
  'A sustainable coffee shop in Brooklyn...',
  'A fintech app for freelance creatives...',
  'An AI-powered pet care platform...',
  'A modern coworking space for makers...',
  'A meal prep delivery for busy parents...',
]

export function Hero() {
  const [description, setDescription] = useState('')
  const [mounted, setMounted] = useState(false)
  const [placeholderIndex, setPlaceholderIndex] = useState(0)

  useEffect(() => { setMounted(true) }, [])

  // Cycle placeholder hints
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((i) => (i + 1) % placeholderHints.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-purple-50" />
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-brand-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="text-center">
          {/* Badge */}
          <div
            className={`mb-6 inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700 transition-all duration-700 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
            </span>
            AI-Powered Brand Creation
          </div>

          {/* Headline */}
          <h1
            className={`text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl transition-all duration-700 delay-100 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Name your business.
            <br />
            <span className="gradient-text">Build your brand.</span>
          </h1>

          {/* Subheading */}
          <p
            className={`mx-auto mt-6 max-w-2xl text-lg text-slate-600 sm:text-xl transition-all duration-700 delay-200 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Describe your business idea and get unique name suggestions with complete
            brand kits — logo concepts, color palettes, taglines, and domain availability.
          </p>

          {/* Search form */}
          <div
            className={`mx-auto mt-10 max-w-xl transition-all duration-700 delay-300 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault()
                if (description.trim()) {
                  window.location.href = `/generate?desc=${encodeURIComponent(description.trim())}`
                } else {
                  window.location.href = '/generate'
                }
              }}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder={placeholderHints[placeholderIndex]}
                className="input-field flex-1 text-base transition-all duration-300"
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap animate-pulse-glow"
              >
                Generate Names
              </button>
            </form>
            <p className="mt-3 text-xs text-slate-400">
              Try: &ldquo;A boutique wine bar in Portland&rdquo; or &ldquo;An online tutoring marketplace&rdquo;
            </p>
          </div>

          {/* Trust signals */}
          <div
            className={`mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-slate-500 transition-all duration-700 delay-500 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              5 free generations
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Full brand kits
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Domain checks
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}