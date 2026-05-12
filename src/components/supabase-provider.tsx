'use client'

import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import type { Database } from '@/types/supabase'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

let supabaseInstance: SupabaseClient<Database> | null = null

function getSupabase(): SupabaseClient<Database> | null {
  if (!supabaseUrl || !supabaseAnonKey) return null
  if (!supabaseInstance) {
    supabaseInstance = createClient<Database>(supabaseUrl, supabaseAnonKey)
  }
  return supabaseInstance
}

interface AuthContextType {
  user: any | null
  loading: boolean
  signInWithEmail: (email: string) => Promise<void>
  signInWithGoogle: () => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signInWithEmail: async () => {},
  signInWithGoogle: async () => {},
  signOut: async () => {},
})

export function SupabaseProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const client = getSupabase()
    if (!client) {
      setLoading(false)
      return
    }

    client.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      setLoading(false)
    })

    const { data: { subscription } } = client.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  const signInWithEmail = useCallback(async (email: string) => {
    const client = getSupabase()
    if (!client) throw new Error('Supabase not configured')
    const { error } = await client.auth.signInWithOtp({ email })
    if (error) throw error
  }, [])

  const signInWithGoogle = useCallback(async () => {
    const client = getSupabase()
    if (!client) throw new Error('Supabase not configured')
    const { error } = await client.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    })
    if (error) throw error
  }, [])

  const signOut = useCallback(async () => {
    const client = getSupabase()
    if (!client) return
    await client.auth.signOut()
    setUser(null)
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading, signInWithEmail, signInWithGoogle, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
export { getSupabase as supabase }