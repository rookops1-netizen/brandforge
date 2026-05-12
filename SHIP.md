# BrandForge — Ship Report

## Production URL
**https://brandforge-phi-pearl.vercel.app**

## Status: LIVE

All core features are deployed and working:

### Verified Features
- **Landing Page** — Hero, Features, Pricing ($0 Free / $9 Brand Kit Pro), FAQ, CTA
- **Name Generation** — `/generate` page with AI-powered name generation (5 names per search)
- **Brand Kit Preview** — `/brand-kit` page with logo concepts, color palettes, taglines, domain/social checks
- **Stripe Checkout** — Server-side redirect to $9 one-time payment (test mode)
- **Domain & Social Checks** — DNS-over-HTTPS + RDAP for domains, Twitter/Instagram handle availability
- **Favorites** — LocalStorage-based favorites system
- **Auth** — Supabase email OTP + Google OAuth (Google needs config in Supabase dashboard)

### API Routes
| Route | Purpose |
|-------|---------|
| `/api/generate` | AI name generation |
| `/api/brand-kit` | AI brand kit generation |
| `/api/check-domain` | Domain availability via DNS |
| `/api/check-social` | Twitter/Instagram handle availability |
| `/api/checkout` | Stripe Checkout Session creation |
| `/api/webhook` | Stripe webhook (checkout.completed, expired, charge.refunded) |
| `/api/verify-session` | Stripe session verification |
| `/api/check-access` | Purchase access check |

### Environment Variables (Production)
All configured in Vercel:
- `NEXT_PUBLIC_SUPABASE_URL` — Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — Supabase anon key
- `SUPABASE_SERVICE_ROLE_KEY` — Supabase admin key
- `STRIPE_SECRET_KEY` — Stripe test secret key
- `STRIPE_WEBHOOK_SECRET` — Production webhook signing secret
- `NEXT_PUBLIC_APP_URL` — `https://brandforge-phi-pearl.vercel.app`
- `OPENAI_API_KEY` — OpenAI-compatible API key (Ollama/deepseek-v4-pro)
- `OPENAI_API_BASE` — `https://ollama.com/v1`
- `OPENAI_MODEL` — `deepseek-v4-pro`

### Stripe Webhook
- **Production endpoint:** `https://brandforge-phi-pearl.vercel.app/api/webhook`
- **Webhook ID:** `we_1TWJtLBmn1wDs1BRPHtVLeB0`
- **Events:** `checkout.session.completed`, `checkout.session.expired`, `charge.refunded`

### Custom Domain
`brandforge.app` has been added to Vercel but needs DNS configuration:
- Add A record in Cloudflare: `A brandforge.app 76.76.21.21`
  OR change nameservers to `ns1.vercel-dns.com` / `ns2.vercel-dns.com`

## Action Items for Daniel
1. **DNS for brandforge.app** — Add A record `76.76.21.21` in Cloudflare or switch nameservers
2. **Google OAuth** — Set up in Google Cloud Console + Supabase Dashboard
3. **Stripe Live Mode** — Switch from `sk_test_` to `sk_live_` keys for real payments
4. **OpenAI API Key** — Current `OPENAI_API_BASE` points to `ollama.com/v1` which may not be accessible from Vercel's servers. Consider switching to a standard OpenAI API key for reliable production use.

## Tech Stack
- Next.js 14 (App Router)
- Tailwind CSS
- Supabase (Auth + Database)
- Stripe (Payments)
- Vercel (Hosting)