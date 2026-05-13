import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SupabaseProvider } from '@/components/supabase-provider'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BrandForge — AI Business Name Generator & Brand Kit',
  description: 'Generate unique business names with complete brand kits including logos, colors, taglines, and domain availability. Powered by AI.',
  keywords: ['business name generator', 'brand kit', 'logo generator', 'ai naming', 'startup names', 'brand identity', 'company name ideas'],
  openGraph: {
    title: 'BrandForge — AI Business Name Generator & Brand Kit',
    description: 'Generate unique business names with complete brand kits — logo concepts, color palettes, taglines, and domain availability. Free to start.',
    url: 'https://brandforge.ai',
    siteName: 'BrandForge',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BrandForge — AI Business Name Generator & Brand Kit',
    description: 'Generate unique business names with complete brand kits — logos, colors, taglines, domain checks. Free to start.',
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