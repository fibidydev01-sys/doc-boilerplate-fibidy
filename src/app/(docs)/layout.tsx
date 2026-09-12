import { DocsLayout } from 'fumadocs-ui/layouts/docs'
import { baseOptions } from '@/app/layout.config'
import { source } from '@/lib/source'
import { SidebarFooter } from '@/components/docs/sidebar-footer'
import type { ReactNode } from 'react'

// ============================================================
// DOCS LAYOUT — using 'docs' layout (NOT 'notebook')
//
// WHY NOT NOTEBOOK:
// Fumadocs 'notebook' layout is opinionated — its sidebar cannot
// be replaced and `sidebar.footer` prop is effectively ignored.
// That's why <SidebarFooter /> didn't render before.
//
// The 'docs' layout fully supports `sidebar.footer`.
//
// HEADER:
// Still minimal — themeSwitch disabled + links[]=[] means top nav
// only shows Logo + Search. Contact + Theme toggle live in the
// sidebar footer below.
//
// NOTE: `key="sidebar-footer"` on <SidebarFooter /> avoids a
// React "missing key" warning because Fumadocs renders footer
// inside a children array internally.
// ============================================================

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions}
      links={[]}
      themeSwitch={{ enabled: false }}
      sidebar={{
        footer: <SidebarFooter key="sidebar-footer" />,
      }}
    >
      {children}
    </DocsLayout>
  )
}
