import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Export Brand Guidelines — BrandForge',
  description: 'Download your complete brand guidelines document with logo concepts, color palettes, taglines, typography, and domain availability.',
  robots: { index: false, follow: true },
}

export default function ExportLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}