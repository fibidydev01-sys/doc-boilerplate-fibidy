import type { ReactNode } from 'react'
import { Info, AlertTriangle, AlertOctagon, CheckCircle2, Lightbulb, Lock } from 'lucide-react'
import { cn } from '@/lib/shared/utils'

// ============================================================
// CALLOUT — Railway-minimal editorial style
// Single left border (no bg flood), tight vertical rhythm
// Usage in MDX: <Callout type="warning">...</Callout>
// ============================================================

type CalloutType = 'info' | 'warning' | 'danger' | 'success' | 'tip' | 'secure'

interface CalloutProps {
  type?: CalloutType
  title?: string
  children: ReactNode
}

const VARIANT = {
  info:    { Icon: Info,          border: 'border-l-blue-400/70',    icon: 'text-blue-400',    title: 'Info' },
  warning: { Icon: AlertTriangle, border: 'border-l-amber-400/70',   icon: 'text-amber-400',   title: 'Warning' },
  danger:  { Icon: AlertOctagon,  border: 'border-l-red-400/70',     icon: 'text-red-400',     title: 'Danger' },
  success: { Icon: CheckCircle2,  border: 'border-l-emerald-400/70', icon: 'text-emerald-400', title: 'Success' },
  tip:     { Icon: Lightbulb,     border: 'border-l-purple-400/70',  icon: 'text-purple-400',  title: 'Tip' },
  secure:  { Icon: Lock,          border: 'border-l-rose-400/70',    icon: 'text-rose-400',    title: 'Security' },
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
