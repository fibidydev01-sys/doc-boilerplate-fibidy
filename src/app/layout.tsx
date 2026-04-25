import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, JetBrains_Mono, Playfair_Display } from 'next/font/google'
import { RootProvider } from 'fumadocs-ui/provider/next'
import './globals.css'

// ============================================================
// FONTS — next/font is self-hosted + CLS-proof.
// Don't @import Google Fonts in globals.css (that's a duplicate fetch).
// ============================================================

const fontSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700', '800'],
})

const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '700'],
})

const fontSerif = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '500', '600', '700', '800', '900'],
})

// ============================================================
// METADATA
// ============================================================

export const metadata: Metadata = {
  title: {
    default: 'Boilerplate Docs',
    template: '%s · Boilerplate Docs',
  },
  description:
    'Full-stack Next.js 16 + Supabase boilerplate — config-driven, module-based, production-ready.',
  icons: { icon: '/favicon.ico' },
}

// ============================================================
// ROOT LAYOUT
// RootProvider (from fumadocs-ui/provider/next) handles theme
// (next-themes internally) + search context. No need to wrap
// another ThemeProvider.
// ============================================================

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontMono.variable} ${fontSerif.variable}`}
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