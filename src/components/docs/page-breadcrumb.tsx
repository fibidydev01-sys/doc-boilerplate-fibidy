import Link from 'next/link'

// ============================================================
// PAGE BREADCRUMB — Railway-minimal text breadcrumb
// "Home > Section > Subsection"
// Plain text, primary color on hover
// ============================================================

interface Crumb {
  label: string
  href?: string
}

interface PageBreadcrumbProps {
  crumbs: Crumb[]
}

export function PageBreadcrumb({ crumbs }: PageBreadcrumbProps) {
  if (crumbs.length === 0) return null

  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-4 flex items-center gap-2 text-sm text-fd-muted-foreground"
    >
      <Link
        href="/docs"
        className="transition-colors hover:text-fd-foreground"
      >
        Home
      </Link>

      {crumbs.map((crumb, idx) => (
        <span key={idx} className="flex items-center gap-2">
          <span className="text-fd-muted-foreground/40" aria-hidden>
            &gt;
          </span>
          {crumb.href ? (
            <Link
              href={crumb.href}
              className="transition-colors hover:text-fd-foreground"
            >
              {crumb.label}
            </Link>
          ) : (
            <span>{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}

// Build crumbs from slug segments (excluding last — which becomes H1)
// Input:  ["setup", "project"]
// Output: [{label: "Setup", href: "/docs/setup"}]
export function buildCrumbsFromSlug(slug: string[] | undefined): Crumb[] {
  if (!slug || slug.length === 0) return []

  const segments = slug.slice(0, -1)
  if (segments.length === 0) return []

  const crumbs: Crumb[] = []
  let accumulated = '/docs'

  segments.forEach((seg) => {
    accumulated += `/${seg}`
    crumbs.push({
      label: formatSegment(seg),
      href: accumulated,
    })
  })

  return crumbs
}

function formatSegment(seg: string): string {
  return seg
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}
