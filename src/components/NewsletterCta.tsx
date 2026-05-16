import { NewsletterForm } from '@/components/NewsletterForm'

export function NewsletterCta() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-brand-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-2xl bg-white border border-slate-200 p-8 sm:p-10 shadow-sm">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
            Weekly naming tips & branding insights
          </h3>
          <p className="text-slate-500 max-w-lg mx-auto mb-6">
            Join 2,000+ founders getting our free newsletter. Short, actionable advice on naming, branding, and launching — delivered every Tuesday.
          </p>
          <NewsletterForm variant="inline" />
        </div>
      </div>
    </section>
  )
}