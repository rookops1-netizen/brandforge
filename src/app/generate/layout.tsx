import { Suspense } from 'react'

export default function GenerateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <Suspense fallback={<div className="mx-auto max-w-7xl px-4 py-12 text-center text-slate-500">Loading...</div>}>{children}</Suspense>
}