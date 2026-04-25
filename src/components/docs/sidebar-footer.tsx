'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { ArrowUpRight, Sun, Moon } from 'lucide-react'

// ============================================================
// SIDEBAR FOOTER
// Contact link (left) + theme toggle (right)
// Pinned at bottom of sidebar via sidebar.footer prop
// ============================================================

const CONTACT_URL = 'https://x.com/fibidy42581'

export function SidebarFooter() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch — theme is only known client-side
  useEffect(() => setMounted(true), [])

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="mt-auto flex items-center justify-between gap-3 border-t border-fd-border/50 px-3 py-3">
      {/* Contact link */}
      <a
        href={CONTACT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-fd-muted-foreground transition-colors hover:text-fd-foreground"
      >
        Contact
        <ArrowUpRight className="h-3.5 w-3.5 opacity-60" aria-hidden />
      </a>

      {/* Theme toggle */}
      {mounted && (
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-fd-border/60 bg-fd-card/40 text-fd-muted-foreground transition-colors hover:bg-fd-accent/40 hover:text-fd-foreground"
        >
          {resolvedTheme === 'dark' ? (
            <Sun className="h-3.5 w-3.5" />
          ) : (
            <Moon className="h-3.5 w-3.5" />
          )}
        </button>
      )}
    </div>
  )
}
