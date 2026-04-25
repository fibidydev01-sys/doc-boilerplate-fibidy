// ============================================================
// FEEDBACK LINK — simple text link to X
// Railway-style: no icon noise, just text
// ============================================================

const CONTACT_URL = 'https://x.com/fibidy42581'

interface FeedbackLinkProps {
  title: string
}

export function FeedbackLink({ title }: FeedbackLinkProps) {
  // Pre-fill X DM composer if supported, else just open profile
  const dmUrl = `${CONTACT_URL}`

  return (
    <a
      href={dmUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-1.5 transition-colors hover:text-fd-foreground"
      title={`Feedback for: ${title}`}
    >
      <span>Found an issue? DM on X</span>
      <span
        aria-hidden
        className="opacity-70 transition-transform group-hover:translate-x-0.5"
      >
        ↗
      </span>
    </a>
  )
}
