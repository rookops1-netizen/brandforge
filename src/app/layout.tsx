import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SupabaseProvider } from '@/components/supabase-provider'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://brandforge-phi-pearl.vercel.app'),
  title: 'BrandForge — Free AI Business Name Generator & Brand Kit Creator',
  description: 'Generate unique business names instantly with AI. Get complete brand kits with logo concepts, color palettes, taglines, and domain availability. Free to start — no credit card required.',
  keywords: [
    'business name generator',
    'brand name generator',
    'AI name generator',
    'company name ideas',
    'startup name generator',
    'brand kit',
    'logo generator',
    'ai naming',
    'startup names',
    'brand identity',
    'company name ideas',
    'domain name checker',
    'brand kit creator',
    'free business name generator',
    'online name generator',
    'business naming tool',
    'catchy business names',
    'brand kit examples',
    'LLC name ideas',
    'creative brand names',
    'business name ideas by industry',
    'brand name generator free',
    'company name checker',
    'unique business names',
    'product naming guide',
    'brandforge vs namelix',
    'best business name generator',
    'naming tool comparison',
    'AI brand name generator comparison',
    'is brand name generator free',
    'how to come up with a business name',
    'business name availability check',
    'what makes a good brand name',
    'brand name ideas by industry',
    'free AI brand kit',
    'how to build a brand identity',
    'brand identity guide',
    'brand identity from scratch',
    'create a brand identity',
    'brand identity for startups',
    'brand kit template',
    'cool business names',
    'cool brand names',
    'brand kit pricing',
    'business name generator pricing',
    'AI brand kit price',
    'brand identity cost',
    'startup name generator',
    'startup name ideas',
    'tech startup names',
    'restaurant name generator',
    'restaurant name ideas',
    'cafe name generator',
    'food business name ideas',
    'fitness brand name generator',
    'gym name generator',
    'fitness brand names',
    'gym name ideas',
    'real estate name generator',
    'real estate business names',
    'property name ideas',
    'realty name generator',
    'photography name generator',
    'photography business names',
    'photography studio names',
    'photographer name ideas',
  ],
  openGraph: {
    title: 'BrandForge — Free AI Business Name Generator & Brand Kit',
    description: 'Generate unique business names with complete brand kits — logo concepts, color palettes, taglines, and domain availability. Free to start, no credit card required.',
    url: 'https://brandforge-phi-pearl.vercel.app',
    siteName: 'BrandForge',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'BrandForge — AI Business Name Generator & Brand Kit',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BrandForge — Free AI Business Name Generator & Brand Kit',
    description: 'Generate unique business names with complete brand kits — logos, colors, taglines, domain checks. Free to start.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://brandforge-phi-pearl.vercel.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <SupabaseProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </SupabaseProvider>
      </body>
    </html>
  )
}