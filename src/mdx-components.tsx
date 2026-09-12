import defaultMdxComponents from 'fumadocs-ui/mdx'
import type { MDXComponents } from 'mdx/types'
import { Callout } from '@/components/docs/callout'
import { CtaNext } from '@/components/docs/cta-next'
import { mdxIconComponents } from '@/components/docs/mdx-icons'

// ============================================================
// MDX COMPONENTS — Expo Design System
//
// KRITIS: link warna dipisah dari --primary (hitam CTA di Expo)
// Expo beda dua warna aksi:
//   - colors.primary (#000000) = CTA button (pill, hitam)
//   - colors.text-link (#0d74ce) = inline body link
// Keduanya TIDAK boleh disamakan — jika primary = hitam, link
// yang pakai text-primary jadi hitam dan tidak beda dari teks biasa.
//
// ICON SHORTCODES: mdxIconComponents (IconRocket, IconCheck, dst)
// diregistrasi di sini supaya semua file content/docs/**/*.mdx bisa
// langsung pakai <IconRocket /> dkk tanpa import per-file. Ini
// menggantikan emoji (🚀 📦 ✅ dst) yang sebelumnya dipakai inline
// di judul dan list. Lihat src/components/docs/mdx-icons.tsx untuk
// daftar lengkap dan mapping emoji → icon.
// ============================================================

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,

    Callout,
    CtaNext,
    ...mdxIconComponents,

    // Inline code — minimal, tanpa border
    code: ({ className, ...props }) => (
      <code
        className={`rounded-md bg-fd-accent/50 px-[0.35em] py-[0.15em] text-[0.88em] font-mono text-fd-foreground ${className ?? ''}`}
        {...props}
      />
    ),

    // Links — Expo text-link (#0d74ce) bukan primary (hitam CTA)
    // dark mode: accent-link-bright (#47c2ff) supaya kontras di canvas gelap
    a: ({ className, ...props }) => (
      <a
        className={`text-[#0d74ce] dark:text-[#47c2ff] underline decoration-[#0d74ce]/30 dark:decoration-[#47c2ff]/30 underline-offset-[3px] transition-colors hover:decoration-[#0d74ce] dark:hover:decoration-[#47c2ff] ${className ?? ''}`}
        {...props}
      />
    ),

    // Blockquote — accent kiri sederhana
    blockquote: ({ className, ...props }) => (
      <blockquote
        className={`my-6 border-l-2 border-fd-muted-foreground/40 pl-4 text-fd-muted-foreground [&>p]:m-0 ${className ?? ''}`}
        {...props}
      />
    ),

    // Horizontal rule — tipis, tidak mencolok
    hr: ({ className, ...props }) => (
      <hr
        className={`my-10 border-0 border-t border-fd-border/60 ${className ?? ''}`}
        {...props}
      />
    ),

    ...components,
  }
}