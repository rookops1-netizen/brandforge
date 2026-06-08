import Link from 'next/link'
import dynamic from 'next/dynamic'

// Only the auth-aware nav is client-side — the header shell is server-rendered
const ClientNav = dynamic(
  () => import('@/components/ClientNav'),
  { ssr: false }
)

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 text-white font-bold text-lg shadow-sm">
            B
          </div>
          <span className="text-xl font-bold text-slate-900">
            Brand<span className="text-brand-600">Forge</span>
          </span>
        </Link>

        {/* Client-side nav handles mobile menu + auth state */}
        <ClientNav />
      </div>
    </header>
  )
}