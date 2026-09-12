import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { RootProvider } from 'fumadocs-ui/provider/next'
import './globals.css'

// ============================================================
// FONTS — Inter + JetBrains Mono only (Expo Design System)
// Weight: 400/500/600 sesuai type scale
// ============================================================

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600'],
})

const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'Fibidy Docs',
    template: '%s · Fibidy Docs',
  },
  description:
    'Dokumentasi resmi Fibidy — platform all-in-one untuk UMKM Indonesia. Toko online, kasir, manajemen stok, dan laporan penjualan.',
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="id"
      className={`${fontSans.variable} ${fontMono.variable}`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen">
        <RootProvider>
          {children}
        </RootProvider>
      </body>
    </html>
  )
}