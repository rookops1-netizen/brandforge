# BrandForge

AI-powered business name generator and brand kit builder.

## Getting Started

1. Clone the repository
2. Copy `.env.example` to `.env.local` and fill in your API keys
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000)

## Features

- **AI Name Generation** — Describe your business and get 5 unique name suggestions
- **Brand Kits** — Logo concepts, color palettes, taglines for each name
- **Domain & Social Checks** — See if .com domains and social handles are available
- **Free Tier** — 5 free generations
- **Brand Kit Upgrade** — $9 one-time for full brand kits

## Tech Stack

- Next.js 14 (App Router)
- TypeScript & Tailwind CSS
- Supabase (Auth + Database)
- Stripe (Payments)
- OpenAI API (Name & brand generation)

## Deployment

Deploy to Vercel:

```bash
vercel --prod
```

Set environment variables in Vercel dashboard:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `OPENAI_API_BASE`
- `OPENAI_API_KEY`
- `OPENAI_MODEL`
- `STRIPE_SECRET_KEY`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `STRIPE_WEBHOOK_SECRET`