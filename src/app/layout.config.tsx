import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'
import { ArrowUpRight } from 'lucide-react'

// ============================================================
// SHARED LAYOUT CONFIG — header for both home and docs
// Header structure in notebook layout:
//   [Logo]  [Search ⌘K]        [Contact ↗] [🌙 theme]
// ============================================================

const CONTACT_URL = 'https://x.com/fibidy42581'

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center gap-2">
        <div className="h-6 w-6 rounded-[5px] bg-primary flex items-center justify-center shrink-0 shadow-sm">
          <span className="text-primary-foreground text-[11px] font-bold leading-none">
            B
          </span>
        </div>
        <span className="font-semibold text-fd-foreground tracking-tight">
          Boilerplate
        </span>
      </div>
    ),
    url: '/',
  },
  links: [
    {
      text: (
        <span className="inline-flex items-center gap-1 text-sm font-medium">
          Contact
          <ArrowUpRight className="h-3.5 w-3.5 opacity-60" aria-hidden />
        </span>
      ),
      url: CONTACT_URL,
      external: true,
    },
  ],
}
