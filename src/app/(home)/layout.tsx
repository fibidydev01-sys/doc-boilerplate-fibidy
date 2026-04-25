import { HomeLayout } from 'fumadocs-ui/layouts/home'
import { baseOptions } from '@/app/layout.config'
import type { ReactNode } from 'react'

// ============================================================
// HOME LAYOUT
// Wraps the landing page — uses Fumadocs HomeLayout
// (top navbar, no sidebar)
// ============================================================

export default function Layout({ children }: { children: ReactNode }) {
  return <HomeLayout {...baseOptions}>{children}</HomeLayout>
}
