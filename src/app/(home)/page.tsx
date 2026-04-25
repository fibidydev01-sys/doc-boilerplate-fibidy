import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Boxes,
  Database,
  FileCheck2,
  Globe,
  Image as ImageIcon,
  KeyRound,
  LayoutDashboard,
  Lock,
  Mail,
  Rocket,
  ShoppingCart,
  Sparkles,
  Zap,
} from 'lucide-react'

// ============================================================
// LANDING PAGE — buyer's docs entry
//
// Style: shadcn/ui — B&W minimal, sparing accent, Lucide icons.
// Foreground/background inversion on the primary CTA. Vercel-style
// gap-px grid for the stats and features blocks.
//
// All copy is in English and tuned for someone who already owns the
// boilerplate (no marketing pitch, just orientation + confidence).
// ============================================================

const TECH_STACK = [
  'Next.js 16',
  'React 19',
  'TypeScript',
  'Supabase',
  'Tailwind v4',
  'shadcn/ui',
  'Zustand',
  'Resend',
] as const

const STATS = [
  { value: '8', label: 'Modules' },
  { value: '5', label: 'Auth flows' },
  { value: '15+', label: 'API routes' },
  { value: 'AES-256', label: 'Encryption' },
] as const

const FEATURES = [
  {
    icon: Lock,
    title: 'Authentication',
    description:
      'Email & password, magic links, Google OAuth. Forgot/reset flows included. Session refresh handled at the edge.',
  },
  {
    icon: ShoppingCart,
    title: 'Commerce',
    description:
      'Multi-tenant Lemon Squeezy integration. Per-user encrypted credentials, signed webhooks with idempotency.',
  },
  {
    icon: KeyRound,
    title: 'RBAC + Permissions',
    description:
      'Wildcard permission matrix in one file. Pure can() function works on client, server, and edge.',
  },
  {
    icon: Database,
    title: 'Database',
    description:
      'Supabase Postgres with Row Level Security on every table. Type-safe queries via generated Database type.',
  },
  {
    icon: Mail,
    title: 'Transactional Email',
    description:
      'Resend + React Email templates. Replaces Supabase default SMTP via Send Email Hook for full branding control.',
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboard Shell',
    description:
      'Responsive sidebar, mobile bottom nav, header with user menu, profile, settings, admin panel — all wired.',
  },
  {
    icon: Globe,
    title: 'Internationalization',
    description:
      'Type-safe t() function, zero runtime dependency. English & Indonesian shipped. Add a locale with one JSON file.',
  },
  {
    icon: ImageIcon,
    title: 'Branding via Env',
    description:
      'Name, logo, colors, meta — every identity value driven from .env. Rebrand without touching components.',
  },
] as const

const QUICK_LINKS = [
  {
    href: '/docs',
    icon: BookOpen,
    title: 'Introduction',
    description: 'What\'s included and how the pieces fit together.',
  },
  {
    href: '/docs/setup/project',
    icon: Rocket,
    title: 'Quick Start',
    description: 'Install, configure env, run on localhost in 10 minutes.',
  },
  {
    href: '/docs/architecture/overview',
    icon: Boxes,
    title: 'Architecture',
    description: 'Four-layer design: config, core, modules, shared.',
  },
  {
    href: '/docs/authentication/overview',
    icon: Lock,
    title: 'Authentication',
    description: 'End-to-end flow, providers, session handling, redirects.',
  },
  {
    href: '/docs/commerce/overview',
    icon: ShoppingCart,
    title: 'Commerce',
    description: 'Lemon Squeezy integration, webhooks, products, subscriptions.',
  },
  {
    href: '/docs/deployment/checklist',
    icon: Zap,
    title: 'Deployment',
    description: 'Pre-launch checklist + Vercel and self-hosted guides.',
  },
] as const

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatsStrip />
      <FeaturesGrid />
      <QuickLinks />
      <PageFooter />
    </main>
  )
}

// ============================================================
// HERO
// ============================================================
function HeroSection() {
  return (
    <section className="relative">
      {/* Subtle radial glow — only visible in dark, sparingly */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(ellipse_at_top,_color-mix(in_oklch,_var(--primary)_8%,_transparent),_transparent_60%)]"
      />

      <div className="mx-auto max-w-5xl px-6 pt-24 pb-20 sm:pt-32 sm:pb-24">
        {/* Status badge */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-card/60 px-3 py-1 font-mono text-[11px] text-fd-muted-foreground backdrop-blur">
            <Sparkles className="h-3 w-3 text-primary" aria-hidden />
            v1.0 · Production Ready
          </span>
        </div>

        {/* Headline */}
        <h1 className="mt-8 text-balance text-center text-4xl font-bold tracking-tight text-fd-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Ship your SaaS,
          <br />
          <span className="text-fd-muted-foreground/60">
            not the boilerplate.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-balance text-center text-base leading-relaxed text-fd-muted-foreground sm:text-lg">
          A production-grade Next.js 16 + Supabase foundation. Authentication,
          commerce, RBAC, dashboard, and email — already wired up. Drop in
          your{' '}
          <code className="rounded border border-fd-border/70 bg-fd-card px-1.5 py-0.5 font-mono text-[0.85em] text-fd-foreground">
            .env
          </code>{' '}
          and your logo, and ship.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/docs"
            className="group inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Read the Docs
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          </Link>
          <Link
            href="/docs/setup/project"
            className="group inline-flex items-center gap-2 rounded-md border border-fd-border bg-fd-card px-5 py-2.5 text-sm font-medium text-fd-foreground transition-colors hover:border-fd-foreground/30 hover:bg-fd-accent/40"
          >
            <Rocket className="h-4 w-4" aria-hidden />
            Quick Start
          </Link>
        </div>

        {/* Tech stack chips */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-1.5">
          {TECH_STACK.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-fd-border bg-fd-card/60 px-2.5 py-1 font-mono text-[11px] font-medium text-fd-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================
// STATS STRIP — Vercel-style gap-px grid
// ============================================================
function StatsStrip() {
  return (
    <section className="border-y border-fd-border bg-fd-card/20">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-2 gap-px bg-fd-border sm:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center gap-1.5 bg-background px-6 py-10"
            >
              <div className="font-mono text-3xl font-semibold tracking-tight text-fd-foreground sm:text-4xl">
                {stat.value}
              </div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-fd-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================
// FEATURES GRID — gap-px divider trick on a single bordered block
// ============================================================
function FeaturesGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <div className="mb-14 max-w-2xl">
        <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-fd-muted-foreground">
          What&apos;s included
        </p>
        <h2 className="text-balance text-3xl font-bold tracking-tight text-fd-foreground sm:text-4xl">
          Eight production-ready capabilities,
          <br />
          <span className="text-fd-muted-foreground/60">
            none of the busywork.
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-fd-border bg-fd-border sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((feature) => {
          const Icon = feature.icon
          return (
            <div
              key={feature.title}
              className="group relative flex flex-col gap-4 bg-background p-6 transition-colors hover:bg-fd-card/40"
            >
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-fd-border bg-fd-card text-fd-foreground">
                <Icon className="h-[18px] w-[18px]" aria-hidden />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-fd-foreground">
                  {feature.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-fd-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

// ============================================================
// QUICK LINKS — card grid with hover state
// ============================================================
function QuickLinks() {
  return (
    <section className="border-t border-fd-border bg-fd-card/20">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-fd-muted-foreground">
              Documentation
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-fd-foreground sm:text-4xl">
              Start here.
            </h2>
            <p className="mt-3 max-w-xl text-sm text-fd-muted-foreground sm:text-base">
              Six guides to take you from clone to production.
            </p>
          </div>
          <Link
            href="/docs"
            className="group inline-flex shrink-0 items-center gap-1.5 rounded-md border border-fd-border bg-background px-3 py-2 text-xs font-medium text-fd-muted-foreground transition-colors hover:border-fd-foreground/30 hover:text-fd-foreground"
          >
            All docs
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {QUICK_LINKS.map((link) => {
            const Icon = link.icon
            return (
              <Link
                key={link.href}
                href={link.href}
                className="group relative flex flex-col gap-4 rounded-lg border border-fd-border bg-background p-5 transition-all hover:border-fd-foreground/20 hover:bg-fd-card/60"
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-fd-border bg-fd-card text-fd-foreground transition-colors group-hover:border-fd-foreground/30">
                    <Icon className="h-4 w-4" aria-hidden />
                  </div>
                  <ArrowUpRight
                    className="h-4 w-4 text-fd-muted-foreground/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fd-foreground"
                    aria-hidden
                  />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-fd-foreground">
                    {link.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-fd-muted-foreground">
                    {link.description}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ============================================================
// FOOTER
// ============================================================
function PageFooter() {
  return (
    <footer className="border-t border-fd-border">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8">
        <div className="flex items-center gap-2 font-mono text-xs text-fd-muted-foreground">
          <FileCheck2 className="h-3.5 w-3.5" aria-hidden />
          <span>Boilerplate Docs · v1.0</span>
        </div>
        <div className="flex items-center gap-5 text-xs text-fd-muted-foreground">
          <Link
            href="/docs"
            className="transition-colors hover:text-fd-foreground"
          >
            Documentation
          </Link>
          <Link
            href="/docs/setup/project"
            className="transition-colors hover:text-fd-foreground"
          >
            Quick Start
          </Link>
          <Link
            href="/docs/troubleshooting"
            className="transition-colors hover:text-fd-foreground"
          >
            Troubleshooting
          </Link>
        </div>
      </div>
    </footer>
  )
}
