import defaultMdxComponents from 'fumadocs-ui/mdx'
import type { MDXComponents } from 'mdx/types'
import { Callout } from '@/components/docs/callout'
import { CtaNext } from '@/components/docs/cta-next'

// ============================================================
// MDX COMPONENTS
// Minimal overrides — Railway-style
// Let typography do the work; no decorative borders/gradients
// ============================================================

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,

    // ── Custom MDX components (usable inline in .mdx) ──
    Callout,
    CtaNext,

    // ── Inline code — minimal bg, no border ──
    code: ({ className, ...props }) => (
      <code
        className={`rounded bg-fd-accent/50 px-[0.35em] py-[0.15em] text-[0.88em] font-mono text-fd-foreground ${className ?? ''}`}
        {...props}
      />
    ),

    // ── Links — primary with subtle underline ──
    a: ({ className, ...props }) => (
      <a
        className={`text-primary underline decoration-primary/30 underline-offset-[3px] transition-colors hover:decoration-primary ${className ?? ''}`}
        {...props}
      />
    ),

    // ── Blockquote — simple left accent ──
    blockquote: ({ className, ...props }) => (
      <blockquote
        className={`my-6 border-l-2 border-fd-muted-foreground/40 pl-4 text-fd-muted-foreground [&>p]:m-0 ${className ?? ''}`}
        {...props}
      />
    ),

    // ── Horizontal rule — thin, unobtrusive ──
    hr: ({ className, ...props }) => (
      <hr
        className={`my-10 border-0 border-t border-fd-border/60 ${className ?? ''}`}
        {...props}
      />
    ),

    // ── User overrides last ──
    ...components,
  }
}
