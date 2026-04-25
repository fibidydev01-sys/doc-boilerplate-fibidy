import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

// ============================================================
// CTA NEXT — minimal inline CTA at end of page
// Railway-style: just a link row, not a loud card
// Usage:
//   <CtaNext href="/docs/setup/resend">Set up transactional email</CtaNext>
// ============================================================

interface CtaNextProps {
  href: string
  children: React.ReactNode
}

export function CtaNext({ href, children }: CtaNextProps) {
  return (
    <Link
      href={href}
      className="group mt-10 flex items-center justify-between gap-4 rounded-md border border-fd-border/60 px-4 py-3.5 text-sm transition-colors hover:border-fd-border hover:bg-fd-accent/30"
    >
      <div className="flex-1 min-w-0">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-fd-muted-foreground/70">
          Next
        </div>
        <div className="mt-0.5 font-medium text-fd-foreground">
          {children}
        </div>
      </div>
      <ArrowRight
        className="h-4 w-4 shrink-0 text-fd-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-fd-foreground"
        aria-hidden
      />
    </Link>
  )
}
