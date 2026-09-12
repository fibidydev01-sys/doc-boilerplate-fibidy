import {
  DocsPage,
  DocsBody,
  DocsTitle,
  DocsDescription,
} from 'fumadocs-ui/page'
import { notFound } from 'next/navigation'
import { source } from '@/lib/source'
import { useMDXComponents } from '../../../mdx-components'
import { PageBreadcrumb, buildCrumbsFromSlug } from '@/components/docs/page-breadcrumb'
import { FeedbackLink } from '@/components/docs/feedback-link'
import type { Metadata } from 'next'

// ============================================================
// DOCS PAGE — dynamic catch-all
// Railway-style: breadcrumb above title, minimal footer
// Trust Fumadocs TOC (clerk style) for accuracy
// ============================================================

interface Props {
  params: Promise<{ slug?: string[] }>
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const page = source.getPage(slug)

  if (!page) notFound()

  const MDX = page.data.body
  const mdxComponents = useMDXComponents({})
  const crumbs = buildCrumbsFromSlug(slug)

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      tableOfContent={{
        style: 'clerk',
        single: false,
      }}
    >
      {/* Breadcrumb (subtle, Railway-style) */}
      {crumbs.length > 0 && <PageBreadcrumb crumbs={crumbs} />}

      <DocsTitle>{page.data.title}</DocsTitle>

      {page.data.description ? (
        <DocsDescription>{page.data.description}</DocsDescription>
      ) : null}

      <DocsBody>
        <MDX components={mdxComponents} />
      </DocsBody>

      {/* Minimal footer — inspired by Railway's understated edit-link */}
      <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-fd-border/40 pt-6 text-xs text-fd-muted-foreground/70">
        <FeedbackLink title={page.data.title} />
        <span>Last updated · Apr 2026</span>
      </div>
    </DocsPage>
  )
}

export function generateStaticParams() {
  return source.generateParams()
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = source.getPage(slug)
  if (!page) return {}

  return {
    title: page.data.title,
    description: page.data.description,
  }
}
