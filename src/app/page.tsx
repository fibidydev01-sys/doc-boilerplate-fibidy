import Link from 'next/link'

// ============================================================
// LANDING PAGE
// Public-facing docs homepage — aligned with actual boilerplate
// (Next.js 16 + Supabase, config-driven, module-based)
// ============================================================

const TECH_STACK = [
  { label: 'Next.js 16', color: 'text-fd-foreground' },
  { label: 'React 19', color: 'text-blue-400' },
  { label: 'TypeScript', color: 'text-blue-300' },
  { label: 'Supabase', color: 'text-primary' },
  { label: 'Tailwind v4', color: 'text-cyan-400' },
  { label: 'shadcn/ui', color: 'text-fd-foreground' },
  { label: 'Zustand', color: 'text-yellow-400' },
]

const FEATURES = [
  {
    icon: '⚙️',
    title: 'Config-Driven',
    description:
      'Semua behavior dikontrol dari src/config/. Ganti config = ganti behavior, zero code change.',
  },
  {
    icon: '🧩',
    title: 'Module System',
    description:
      '8 module toggleable — admin, saas, landing, commerce, blog, project, forum, chat.',
  },
  {
    icon: '🔐',
    title: 'Authentication',
    description:
      'Email/password, Google OAuth, magic link. Built on Supabase Auth + SSR-friendly.',
  },
  {
    icon: '🛡️',
    title: 'RBAC + Wildcard',
    description:
      'Permission matrix dengan wildcard ("users:*"). Pure function, dipake di client/server/edge.',
  },
  {
    icon: '🌐',
    title: 'i18n Built-in',
    description:
      'Type-safe translation, zero runtime dependency. id + en out of the box.',
  },
  {
    icon: '🎨',
    title: 'Branding via Env',
    description:
      'Ganti nama, logo, warna, meta — semua dari .env tanpa sentuh code.',
  },
]

const QUICK_LINKS = [
  {
    href: '/docs',
    title: 'Introduction',
    description: 'Apa itu boilerplate ini dan apa yang udah ada di dalemnya.',
    icon: '📖',
  },
  {
    href: '/docs/tech-stack',
    title: 'Tech Stack',
    description: 'Alasan setiap keputusan teknologi.',
    icon: '🧱',
  },
  {
    href: '/docs/setup/project',
    title: 'Getting Started',
    description: 'Install, konfigurasi env, jalan di localhost dalam 10 menit.',
    icon: '🚀',
  },
  {
    href: '/docs/authentication/overview',
    title: 'Authentication',
    description: 'Flow auth end-to-end, provider, session, role-based redirect.',
    icon: '🔑',
  },
  {
    href: '/docs/database/overview',
    title: 'Database',
    description: 'Supabase Postgres + RLS, 3 client variant, type-safe generated.',
    icon: '🗄️',
  },
  {
    href: '/docs/working-with-the-codebase/production-builds',
    title: 'Deployment',
    description: 'Vercel, Netlify, Docker — production build + checklist.',
    icon: '⚡',
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen">

      {/* ── HERO ── */}
      <section className="flex flex-col items-center justify-center px-6 pt-20 pb-16 text-center">
        {/* Status badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-card px-4 py-1.5 text-xs font-medium text-fd-muted-foreground">
          <span className="size-1.5 rounded-full bg-primary animate-pulse inline-block" />
          Production-ready · Config-driven · Open source
        </div>

        <h1 className="font-sans text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
          <span className="text-primary">Next.js</span>{' '}
          <span className="text-fd-foreground">+ Supabase</span>
          <br />
          <span className="text-fd-foreground">Boilerplate</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-fd-muted-foreground leading-relaxed">
          Full-stack starter yang udah jadi — auth, RBAC, dashboard, i18n, dan
          module system. Ganti{' '}
          <code className="font-mono text-fd-foreground px-1 rounded bg-fd-accent">
            .env
          </code>{' '}
          + logo, aplikasi lo siap jalan. Zero boilerplate yang harus ditulis ulang.
        </p>

        {/* Tech stack pills */}
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
            Read the Docs
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="/docs/setup/project"
            className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-card px-6 py-3 text-sm font-semibold text-fd-foreground transition-colors hover:bg-fd-accent"
          >
            Quick Start
            <span aria-hidden>↗</span>
          </Link>
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
          Boilerplate Docs · Open Source ·{' '}
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