import type { SVGProps } from "react"
import { cn } from "@/lib/utils"
// ✏️ Social links are edited in data/site.ts
import { siteConfig } from "@/data"

type IconProps = SVGProps<SVGSVGElement>

export function PawIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className} {...props}>
      <ellipse cx="6" cy="9.5" rx="2.1" ry="2.7" transform="rotate(-18 6 9.5)" />
      <ellipse cx="10" cy="5.6" rx="2.1" ry="2.8" transform="rotate(-6 10 5.6)" />
      <ellipse cx="14.5" cy="5.6" rx="2.1" ry="2.8" transform="rotate(6 14.5 5.6)" />
      <ellipse cx="18.4" cy="9.5" rx="2.1" ry="2.7" transform="rotate(18 18.4 9.5)" />
      <path d="M12.2 11c-2.6 0-5.6 3.6-5.6 6.4 0 1.9 1.4 2.9 3 2.9 1.2 0 1.7-.6 2.6-.6s1.4.6 2.6.6c1.6 0 3-1 3-2.9 0-2.8-3-6.4-5.6-6.4Z" />
    </svg>
  )
}

export function InstagramIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className={className} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function TikTokIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className} {...props}>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  )
}

export function FacebookIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className} {...props}>
      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z" />
    </svg>
  )
}

const socialLinks = [
  { label: "Instagram", href: siteConfig.socials.instagram, Icon: InstagramIcon },
  { label: "TikTok", href: siteConfig.socials.tiktok, Icon: TikTokIcon },
  { label: "Facebook", href: siteConfig.socials.facebook, Icon: FacebookIcon },
]

export function SocialLinks({ className, linkClassName }: { className?: string; linkClassName?: string }) {
  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {socialLinks.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Loki on ${label}`}
            className={cn(
              "flex size-10 items-center justify-center rounded-full border border-border text-foreground/80 transition hover:-translate-y-0.5 hover:border-primary hover:text-primary",
              linkClassName,
            )}
          >
            <Icon className="size-4" />
          </a>
        </li>
      ))}
    </ul>
  )
}
