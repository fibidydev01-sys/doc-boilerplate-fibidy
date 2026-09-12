import type { ReactNode } from 'react'
import { Info, AlertTriangle, AlertOctagon, CheckCircle2, Lightbulb, Lock } from 'lucide-react'
import { cn } from '@/lib/shared/utils'

// ============================================================
// CALLOUT — Expo Design System color mapping
// info    → #0d74ce (colors.text-link Expo)
// warning → #ab6400 (colors.accent-warning Expo)
// danger  → #eb8e90 (colors.semantic-error Expo)
// success → #16a34a (colors.semantic-success Expo)
// tip     → #8145b5 (colors.accent-preview Expo)
// secure  → foreground (tidak ada token security di Expo)
// ============================================================

type CalloutType = 'info' | 'warning' | 'danger' | 'success' | 'tip' | 'secure'

interface CalloutProps {
  type?: CalloutType
  title?: string
  children: ReactNode
}

const VARIANT = {
  info:    { Icon: Info,          border: 'border-l-[#0d74ce]/70', icon: 'text-[#0d74ce]', title: 'Info' },
  warning: { Icon: AlertTriangle, border: 'border-l-[#ab6400]/70', icon: 'text-[#ab6400]', title: 'Warning' },
  danger:  { Icon: AlertOctagon,  border: 'border-l-[#eb8e90]/70', icon: 'text-[#eb8e90]', title: 'Danger' },
  success: { Icon: CheckCircle2,  border: 'border-l-[#16a34a]/70', icon: 'text-[#16a34a]', title: 'Success' },
  tip:     { Icon: Lightbulb,     border: 'border-l-[#8145b5]/70', icon: 'text-[#8145b5]', title: 'Tip' },
  secure:  { Icon: Lock,          border: 'border-l-foreground/70', icon: 'text-foreground', title: 'Security' },
} as const

export function Callout({ type = 'info', title, children }: CalloutProps) {
  const v = VARIANT[type]
  const { Icon } = v
  const resolvedTitle = title ?? v.title

  return (
    <div
      className={cn(
        'my-6 flex gap-3 border-l-2 pl-4 py-1',
        v.border,
      )}
      role="note"
    >
      <Icon className={cn('mt-1 h-4 w-4 shrink-0', v.icon)} aria-hidden />
      <div className="flex-1 min-w-0">
        {resolvedTitle ? (
          <p className="mb-1 text-sm font-semibold leading-tight text-fd-foreground">
            {resolvedTitle}
          </p>
        ) : null}
        <div className="text-sm leading-relaxed text-fd-muted-foreground [&>p]:m-0 [&>p+p]:mt-2 [&_code]:rounded [&_code]:bg-fd-accent/60 [&_code]:px-1 [&_code]:py-0.5 [&_code]:text-[0.85em] [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-fd-foreground">
          {children}
        </div>
      </div>
    </div>
  )
}
