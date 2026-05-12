// Force dynamic rendering for auth routes that use useSearchParams
export const dynamic = 'force-dynamic'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return children
}