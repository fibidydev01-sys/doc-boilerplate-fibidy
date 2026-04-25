import Link from 'next/link'

// ============================================================
// LANDING PAGE
// Public-facing docs homepage
// ============================================================

const TECH_STACK = [
  { label: 'NestJS', color: 'text-red-400' },
  { label: 'Next.js 16', color: 'text-foreground' },
  { label: 'PostgreSQL', color: 'text-blue-400' },
  { label: 'Prisma', color: 'text-primary' },
  { label: 'Redis', color: 'text-orange-400' },
  { label: 'WhatsApp', color: 'text-green-400' },
  { label: 'Midtrans', color: 'text-purple-400' },
]

const FEATURES = [
  {
    icon: '🏪',
    title: 'Multi-Tenant',
    description:
      'Every UMKM gets their own isolated storefront, data, and WhatsApp session.',
  },
  {
    icon: '📦',
    title: 'Product Catalog',
    description:
      '3-tier pricing, stock tracking, multi-image upload via Cloudinary.',
  },
  {
    icon: '🤖',
    title: 'Auto-Reply Engine',
    description:
      '5 trigger types: Welcome, Keyword, Time-Based, Order Status, Payment.',
  },
  {
    icon: '📣',
    title: 'Social Feed',
    description:
      'Cross-tenant discovery with likes, comments, bookmarks, and trending.',
  },
  {
    icon: '💳',
    title: 'Subscription Gate',
    description:
      'STARTER free / BUSINESS Rp 99K/month. Midtrans Snap payment.',
  },
  {
    icon: '🔒',
    title: 'LTS Certified',
    description:
      'v1.0-LTS: 8 migrations, 16 models, 8 enums — additive-only, zero breaking changes.',
  },
]

const QUICK_LINKS = [
  {
    href: '/docs',
    title: 'Getting Started',
    description: 'Install and run in under 5 minutes.',
    icon: '🚀',
  },
  {
    href: '/docs/architecture',
    title: 'Architecture',
    description: 'Multi-tenant design, DB schema, invariants.',
    icon: '🏗️',
  },
  {
    href: '/docs/api-reference',
    title: 'API Reference',
    description: 'All endpoints across v1.0.0–v1.9.0 LTS.',
    icon: '📡',
  },
  {
    href: '/docs/migrations',
    title: 'Migrations',
    description: 'Safe Prisma migration patterns + rollback.',
    icon: '🗄️',
  },
  {
    href: '/docs/deployment',
    title: 'Deployment',
    description: 'CI/CD, Git workflow, production checklist.',
    icon: '⚡',
  },
  {
    href: '/docs/contributing',
    title: 'Contributing',
    description: 'How to contribute to this open-source project.',
    icon: '🤝',
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen">

      {/* ── HERO ── */}
      <section className="flex flex-col items-center justify-center px-6 pt-20 pb-16 text-center">
        {/* LTS badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-fd-card px-4 py-1.5 text-xs font-medium text-fd-muted-foreground">
          <span className="size-1.5 rounded-full bg-primary animate-pulse inline-block" />
          v1.9.0 — LTS Release · 8 migrations · 16 models
        </div>

        <h1 className="font-sans text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
          <span className="text-primary">UMKM</span>{' '}
          <span className="text-fd-foreground">Platform</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-fd-muted-foreground leading-relaxed">
          Open-source multi-tenant platform for Indonesian SMEs — upload
          products, manage orders, automate WhatsApp, grow with social feed.
          Production-ready. LTS certified.
        </p>

        {/* tech stack pills */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {TECH_STACK.map((tech) => (
            <span
              key={tech.label}
              className={`rounded-md border border-fd-border bg-fd-card px-3 py-1 font-mono text-xs font-medium ${tech.color}`}
            >
              {tech.label}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get Started
            <span aria-hidden>→</span>
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-card px-6 py-3 text-sm font-semibold text-fd-foreground transition-colors hover:bg-fd-accent"
          >
            GitHub
            <span aria-hidden>↗</span>
          </a>
        </div>
      </section>

      {/* ── FEATURES GRID ── */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <h2 className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-fd-muted-foreground">
          What's Included
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="flex flex-col gap-3 rounded-xl border border-fd-border bg-fd-card p-6"
            >
              <span className="text-2xl">{f.icon}</span>
              <div>
                <p className="font-semibold text-fd-foreground">{f.title}</p>
                <p className="mt-1 text-sm text-fd-muted-foreground">
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── QUICK LINKS ── */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <h2 className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-fd-muted-foreground">
          Documentation
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {QUICK_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex flex-col gap-3 rounded-xl border border-fd-border bg-fd-card p-6 transition-colors hover:border-primary/50 hover:bg-fd-accent"
            >
              <span className="text-2xl">{link.icon}</span>
              <div>
                <p className="font-semibold text-fd-foreground group-hover:text-primary transition-colors">
                  {link.title}
                </p>
                <p className="mt-1 text-sm text-fd-muted-foreground">
                  {link.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-fd-border py-8 text-center text-xs text-fd-muted-foreground">
        <p>
          UMKM Platform · Open Source · v1.0-LTS ·{' '}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            GitHub ↗
          </a>
        </p>
      </footer>
    </main>
  )
}
