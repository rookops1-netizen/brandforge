'use client'

import { useState, useCallback, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import type { GeneratedName, BusinessName, AvailabilityStatus } from '@/types'
import { isFavorite, toggleFavorite } from '@/lib/favorites'
import NameResultsGrid from '@/components/NameResultsGrid'

const INDUSTRIES = [
  'Technology', 'Food & Beverage', 'Fashion', 'Health & Wellness',
  'Finance', 'Education', 'Entertainment', 'E-commerce', 'Real Estate', 'Other'
]

/** Convert API response (GeneratedName[]) to UI-ready BusinessName[] */
function toBusinessNames(raw: GeneratedName[], industry: string): BusinessName[] {
  return raw.map((n) => ({
    ...n,
    id: crypto.randomUUID(),
    industry: industry || 'General',
    domainAvailable: 'unknown' as const,
    twitterAvailable: 'unknown' as const,
    instagramAvailable: 'unknown' as const,
    isFavorite: isFavorite(n.name),
    domainSuggestion: n.domainSuggestion || `${n.name.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`,
  }))
}

function GeneratePageContent() {
  const searchParams = useSearchParams()
  const initialDesc = searchParams.get('desc') || ''

  const [description, setDescription] = useState(initialDesc)
  const [industry, setIndustry] = useState('')
  const [names, setNames] = useState<BusinessName[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault()
    if (!description.trim()) return

    setLoading(true)
    setError('')
    setNames([])

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description: description.trim(), industry: industry || undefined }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Generation failed')
      }

      const data = await res.json()
      const businessNames = toBusinessNames(data.names, industry)
      setNames(businessNames)
    } catch (err: any) {
      setError(err.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  const handleToggleFavorite = useCallback((id: string) => {
    setNames((prev) =>
      prev.map((n) => {
        if (n.id !== id) return n
        const newFav = toggleFavorite(n.name, n.meaning, n.style, n.industry)
        return { ...n, isFavorite: newFav }
      })
    )
  }, [])

  // Check domain availability for each name after generation
  const checkDomainAvailability = useCallback(async (nameId: string, domain: string) => {
    // Mark as "checking"
    setNames((prev) =>
      prev.map((n) =>
        n.id === nameId ? { ...n, domainAvailable: 'checking' as AvailabilityStatus } : n
      )
    )

    try {
      const res = await fetch(`/api/check-domain?domain=${encodeURIComponent(domain)}`)
      const data = await res.json()
      setNames((prev) =>
        prev.map((n) =>
          n.id === nameId ? { ...n, domainAvailable: data.available ? 'available' as AvailabilityStatus : 'taken' as AvailabilityStatus } : n
        )
      )
    } catch {
      setNames((prev) =>
        prev.map((n) =>
          n.id === nameId ? { ...n, domainAvailable: 'unknown' as AvailabilityStatus } : n
        )
      )
    }
  }, [])

  // Check social handle availability for each name after generation
  const checkSocialAvailability = useCallback(async (nameId: string, handle: string) => {
    // Mark as "checking"
    setNames((prev) =>
      prev.map((n) =>
        n.id === nameId
          ? { ...n, twitterAvailable: 'checking' as AvailabilityStatus, instagramAvailable: 'checking' as AvailabilityStatus }
          : n
      )
    )

    try {
      const res = await fetch(`/api/check-social?handle=${encodeURIComponent(handle)}&platform=all`)
      const data = await res.json()

      setNames((prev) =>
        prev.map((n) =>
          n.id === nameId
            ? {
                ...n,
                twitterAvailable: (data.twitter?.available ? 'available' : 'taken') as AvailabilityStatus,
                instagramAvailable: (data.instagram?.available ? 'available' : 'taken') as AvailabilityStatus,
              }
            : n
        )
      )
    } catch {
      setNames((prev) =>
        prev.map((n) =>
          n.id === nameId
            ? { ...n, twitterAvailable: 'unknown' as AvailabilityStatus, instagramAvailable: 'unknown' as AvailabilityStatus }
            : n
        )
      )
    }
  }, [])

  // Trigger availability checks when new names appear (after generation completes)
  // Uses a ref to track which name IDs we've already started checking
  const [checkedIds, setCheckedIds] = useState<Set<string>>(new Set())

  useEffect(() => {
    if (names.length === 0) return

    // Only check names that still have 'unknown' status and haven't been checked yet
    const namesToCheck = names.filter(
      (n) => n.domainAvailable === 'unknown' && !checkedIds.has(n.id)
    )

    if (namesToCheck.length === 0) return

    // Mark these as queued so we don't re-trigger
    setCheckedIds((prev) => {
      const next = new Set(prev)
      namesToCheck.forEach((n) => next.add(n.id))
      return next
    })

    // Stagger checks to avoid overwhelming APIs (500ms apart)
    namesToCheck.forEach((name, i) => {
      const domain = name.domainSuggestion || `${name.name.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`
      const handle = name.name.toLowerCase().replace(/[^a-z0-9_]/g, '').slice(0, 15)

      setTimeout(() => {
        checkDomainAvailability(name.id, domain)
        checkSocialAvailability(name.id, handle)
      }, i * 500)
    })
  }, [names, checkedIds, checkDomainAvailability, checkSocialAvailability])

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Generate Business Names
        </h1>
        <p className="mt-2 text-slate-600">
          Describe your business idea and we&apos;ll create unique name suggestions with meanings.
        </p>

        <form onSubmit={handleGenerate} className="mt-8 space-y-4">
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-1">
              Describe your business *
            </label>
            <textarea
              id="description"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g. A sustainable coffee shop in Brooklyn that sources fair-trade beans and offers community events..."
              className="input-field resize-none"
              required
            />
          </div>

          <div>
            <label htmlFor="industry" className="block text-sm font-medium text-slate-700 mb-1">
              Industry (optional)
            </label>
            <select
              id="industry"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="input-field"
            >
              <option value="">Select an industry</option>
              {INDUSTRIES.map((ind) => (
                <option key={ind} value={ind}>{ind}</option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={loading || !description.trim()}
            className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Generating names...
              </span>
            ) : (
              'Generate Names'
            )}
          </button>
        </form>

        {error && (
          <div className="mt-6 rounded-xl bg-red-50 p-4 text-sm text-red-600">
            {error}
          </div>
        )}
      </div>

      {/* Results outside the max-w-2xl constraint so cards can use full width */}
      {names.length > 0 && (
        <div className="mx-auto max-w-5xl mt-4">
          <NameResultsGrid
            names={names}
            onToggleFavorite={handleToggleFavorite}
          />
          <p className="mt-6 text-center text-sm text-slate-500">
            Click any name to see the full brand kit with logo, colors, and more.
          </p>
        </div>
      )}
    </div>
  )
}

export default function GeneratePage() {
  return (
    <Suspense fallback={
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="animate-pulse space-y-4">
            <div className="h-8 w-64 rounded bg-slate-200" />
            <div className="h-4 w-96 rounded bg-slate-200" />
          </div>
        </div>
      </div>
    }>
      <GeneratePageContent />
    </Suspense>
  )
}