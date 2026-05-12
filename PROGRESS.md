# BrandForge Progress

## What's Done
- [x] Next.js 14 project initialized with TypeScript + Tailwind CSS
- [x] Supabase client configured (`src/lib/supabase.ts`) with typed Database interface
- [x] Supabase project connected: `dpkuxmetcmiydflsghkc` (us-west-2)
- [x] `.env.local` populated with Supabase URL, anon key, service role key
- [x] Database tables created with RLS:
  - `projects` — user projects (id, user_id, name, industry, description, keywords, status, timestamps)
  - `brand_kits` — brand kit records (id, generation_id, user_id, business_name, logo_concept, color_palette, tagline, domain_available, social_handles, font_suggestions, domain_availability, social_availability, is_paid, stripe_session_id, timestamps)
  - `purchases` — Stripe payment tracking (from earlier migration)
  - `generations` — name generation history
  - `profiles` — user profiles with free/paid tier tracking
- [x] RLS policies on all tables (users can CRUD own data, service_role has full access)
- [x] Auth provider (`supabase-provider.tsx`) with email OTP + Google OAuth methods
- [x] Auth callback route (`/auth/callback`) for OAuth redirects
- [x] Auth confirm page (`/auth/confirm`) with Suspense boundary
- [x] TypeScript types updated (`src/types/supabase.ts`) to match all DB tables
- [x] Server-side admin client (`getSupabaseAdmin()`) for API routes/webhooks
- [x] Landing page with Hero, Features, CTA sections
- [x] Responsive Header + Footer with gradient branding
- [x] Business name generation form + API route (`/api/generate`)
- [x] AI-powered name generation via OpenAI with mock fallback
- [x] Name results grid with NameCard components
- [x] Favorites system (`src/lib/favorites.ts` with localStorage)
- [x] Brand Kit modal preview (BrandKitModal.tsx)
- [x] Brand Kit full page (`/brand-kit`) with logo concept, colors, tagline, domain/social
- [x] Brand Kit API route (`/api/brand-kit`) with AI generation + mock fallback
- [x] Domain availability checks via DNS-over-HTTPS (Cloudflare) + RDAP fallback
- [x] Social handle availability checks for Twitter/X + Instagram
- [x] Stripe checkout session creation
- [x] Stripe webhook handler for purchase tracking
- [x] Dark mode + custom Tailwind config with brand colors
- [x] Build passes cleanly (`next build` succeeds)

## What's Blocked
- [ ] Google OAuth needs Google Cloud Console project — requires manual setup:
  1. Create project at console.cloud.google.com
  2. Enable "Google+ API" / "Identity Toolkit"
  3. Create OAuth 2.0 Client ID (web application)
  4. Add redirect URI: `https://dpkuxmetcmiydflsghkc.supabase.co/auth/v1/callback`
  5. Set client ID + secret in Supabase Dashboard → Authentication → Providers → Google

## What's Needed Next
- [ ] Stripe product + price setup ($9 one-time)
- [ ] Fill in OpenAI API key in `.env.local`
- [ ] Deploy to Vercel
- [ ] End-to-end test of full flow
- [ ] Google OAuth credentials setup (blocked on Daniel)

## Architecture
- `/` — Landing page
- `/generate?desc=...` — Name generation results
- `/brand-kit?name=...&meaning=...&style=...` — Full brand kit page
- `/auth/callback` — OAuth redirect handler
- `/auth/confirm` — Code exchange for session
- `/api/generate` — OpenAI name generation
- `/api/brand-kit` — OpenAI brand kit generation
- `/api/check-domain` — DNS-based domain availability
- `/api/check-social` — Twitter/Instagram handle availability
- `/api/checkout` — Stripe checkout session creation
- `/api/webhook` — Stripe webhook for purchase tracking
- `/api/verify-session` — Stripe session verification
- `/api/check-access` — Purchase access checking via Supabase

## Supabase Project Details
- **Project ref:** dpkuxmetcmiydflsghkc
- **Region:** us-west-2
- **Dashboard:** https://supabase.com/dashboard/project/dpkuxmetcmiydflsghkc
- **API URL:** https://dpkuxmetcmiydflsghkc.supabase.co
- **DB Host:** db.dpkuxmetcmiydflsghkc.supabase.co
- **Auth:** Email/OTP enabled. Google OAuth not yet configured.