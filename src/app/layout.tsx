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
  keywords: ['business name generator', 'brand kit', 'logo generator', 'ai naming', 'startup names'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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