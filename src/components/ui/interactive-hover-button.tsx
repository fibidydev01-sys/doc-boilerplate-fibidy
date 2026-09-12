import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/shared/utils"

// ============================================================
// INTERACTIVE HOVER BUTTON — pill shape, hitam/putih
// Efek hover: fill animasi dari dalam
// Konsisten dengan button.tsx: rounded-full
// ============================================================

export function InteractiveHoverButton({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "group bg-background relative w-auto cursor-pointer overflow-hidden rounded-full border border-primary/20 p-2 px-6 text-center font-semibold text-foreground transition-colors hover:border-primary/40",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div className="bg-primary h-2 w-2 rounded-full transition-all duration-300 group-hover:scale-[100.8]" />
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div className="text-primary-foreground absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
        <span>{children}</span>
        <ArrowRight />
      </div>
    </button>
  )
}
