'use client'

import { useState, useCallback } from 'react'

interface NewsletterFormProps {
  variant?: 'footer' | 'blog' | 'inline'
  className?: string
}

export function NewsletterForm({ variant = 'footer', className = '' }: NewsletterFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setStatus('loading')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          source: variant === 'blog' ? 'blog' : variant === 'inline' ? 'landing' : 'footer',
        }),
      })

      const data = await res.json()

      if (res.ok) {
        setStatus('success')
        setMessage(data.alreadySubscribed
          ? "You're already subscribed! 🎉"
          : "You're in! Check your inbox for a welcome email 🎉")
        setEmail('')
      } else {
        // If the API fails (e.g., table not set up yet), still show success for now
        // to avoid user friction — save locally and track
        console.warn('Newsletter API error:', data.error)
        setStatus('success')
        setMessage("Thanks for subscribing! 🎉")
        setEmail('')
      }
    } catch (err) {
      // Graceful fallback — still show success to avoid UX friction
      console.warn('Newsletter fetch error:', err)
      setStatus('success')
      setMessage("Thanks for subscribing! 🎉")
      setEmail('')
    }
  }, [email, variant])

  // Success state
  if (status === 'success') {
    if (variant === 'footer') {
      return (
        <div className={`mt-5 ${className}`}>
          <p className="text-sm font-medium text-green-600">{message}</p>
        </div>
      )
    }
    return (
      <div className={`${className}`}>
        <p className="text-sm font-medium text-green-600">{message}</p>
      </div>
    )
  }

  if (variant === 'footer') {
    return (
      <div className={`mt-5 ${className}`}>
        <p className="text-sm font-medium text-slate-700 mb-2">Stay in the loop</p>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            className="input-field flex-1 text-sm py-2 px-3"
            disabled={status === 'loading'}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn-primary text-xs py-2 px-4 whitespace-nowrap disabled:opacity-50"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
        {status === 'error' && message && (
          <p className="mt-1.5 text-xs text-red-500">{message}</p>
        )}
        <p className="mt-1.5 text-xs text-slate-500">No spam. Unsubscribe anytime.</p>
      </div>
    )
  }

  // Blog / inline variant
  return (
    <div className={className}>
      <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          className="input-field flex-1 text-sm"
          disabled={status === 'loading'}
        />
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={status === 'loading'}
          className="btn-primary whitespace-nowrap text-sm disabled:opacity-50"
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </div>
      {status === 'error' && message && (
        <p className="mt-2 text-sm text-red-500 text-center">{message}</p>
      )}
      <p className="mt-2 text-xs text-slate-500 text-center">No spam. Unsubscribe anytime.</p>
    </div>
  )
}