import type { AnchorHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

const variants = {
  primary: "bg-foreground text-background hover:bg-primary",
  coat: "bg-primary text-primary-foreground hover:bg-foreground",
  outline: "border border-foreground/25 text-foreground hover:border-foreground hover:bg-foreground hover:text-background",
  light: "bg-background text-foreground hover:bg-secondary",
}

export function ButtonLink({
  variant = "primary",
  className,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: keyof typeof variants }) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}
