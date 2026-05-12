'use client'

import { Suspense, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { supabase as getSupabaseClient } from '@/components/supabase-provider'

function AuthConfirmContent() {
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const code = searchParams.get('code')
    const next = searchParams.get('next') || '/'

    const client = getSupabaseClient()
    if (code && client) {
      client.auth.exchangeCodeForSession(code).then(() => {
        router.push(next)
      })
    }
  }, [searchParams, router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-600 mx-auto mb-4" />
        <p className="text-slate-600">Confirming authentication...</p>
      </div>
    </div>
  )
}

export default function AuthConfirmPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-600" />
        </div>
      }
    >
      <AuthConfirmContent />
    </Suspense>
  )
}