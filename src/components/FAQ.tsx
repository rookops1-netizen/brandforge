"use client"

import { useState } from "react"

const faqs = [
  {
    q: "How does the name generator work?",
    a: "You describe your business idea in plain English — like 'a sustainable coffee subscription box' — and our AI generates creative, memorable names tailored to your description, industry, and target audience.",
  },
  {
    q: "What's included in the free tier?",
    a: "The free tier gives you 5 name suggestions per search with unlimited searches and basic name meanings. You can save up to 10 favorite names.",
  },
  {
    q: "What do I get with the Brand Kit Pro?",
    a: "The Pro tier unlocks everything: unlimited name suggestions, AI-generated logo concepts, custom color palettes, taglines, domain and social handle availability checks, and a downloadable brand kit PDF.",
  },
  {
    q: "Can I use the generated names commercially?",
    a: "Yes! All names generated are yours to use. We recommend checking trademark databases in your jurisdiction before finalizing, but there are no licensing restrictions from our side.",
  },
  {
    q: "How accurate is the domain availability check?",
    a: "We query real-time domain registries to give you up-to-the-minute availability for .com, .io, .co, and other popular TLDs. We recommend registering quickly — good domains go fast.",
  },
  {
    q: "Can I get a refund?",
    a: "Absolutely. If you're not satisfied with your brand kit, contact us within 14 days for a full refund — no questions asked.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 sm:py-28 bg-slate-50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-brand-600 mb-3 tracking-wider uppercase">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Common questions
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Everything you need to know about BrandForge.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-xl border overflow-hidden transition-colors duration-200 ${
                openIndex === i
                  ? "border-brand-200 bg-white shadow-sm"
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left transition-colors"
              >
                <span className={`font-medium pr-4 transition-colors ${
                  openIndex === i ? "text-brand-700" : "text-slate-900"
                }`}>
                  {faq.q}
                </span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${
                    openIndex === i
                      ? "rotate-180 text-brand-500"
                      : "text-slate-400"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className="accordion-content"
                data-open={openIndex === i ? "true" : "false"}
              >
                <div>
                  <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}