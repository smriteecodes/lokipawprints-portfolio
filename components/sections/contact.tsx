import { ArrowRight, Mail } from "lucide-react"
// ✏️ Contact email & social links are edited in data/site.ts
import { siteConfig } from "@/data"
import { Eyebrow, Reveal } from "@/components/reveal"
import { ButtonLink } from "@/components/button-link"
import { FacebookIcon, InstagramIcon, PawIcon, TikTokIcon } from "@/components/icons"

const channels = [
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}`, Icon: Mail },
  { label: "Instagram", value: siteConfig.handle, href: siteConfig.socials.instagram, Icon: InstagramIcon },
  { label: "TikTok", value: siteConfig.handle, href: siteConfig.socials.tiktok, Icon: TikTokIcon },
  { label: "Facebook", value: "Loki Pawprints", href: siteConfig.socials.facebook, Icon: FacebookIcon },
]

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-card py-24 md:py-32">
      <div
        className="absolute -left-24 top-10 -z-0 size-80 bg-secondary/70"
        style={{ borderRadius: "45% 55% 60% 40% / 55% 45% 55% 45%" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
          <h2 className="font-serif text-5xl font-medium leading-none tracking-tight text-balance md:text-7xl">
            Got something in <em className="italic text-primary">mind?</em> <PawIcon className="inline-block size-10 -rotate-12 align-top text-accent md:size-14" />
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground text-pretty">
            {
              "Whether you've got a campaign idea, a product Loki needs to investigate, or something completely unexpected — we'd love to hear about it."
            }
          </p>
          <ButtonLink
            href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("Let's work together")}`}
            className="mt-10 px-8 py-4 text-base"
          >
            {"Let's Work Together"} <ArrowRight className="size-4" />
          </ButtonLink>
        </Reveal>

        <Reveal delay={120}>
          <ul className="divide-y divide-border border-y border-border">
            {channels.map(({ label, value, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={label === "Email" ? undefined : "_blank"}
                  rel={label === "Email" ? undefined : "noopener noreferrer"}
                  className="group flex items-center gap-5 py-6"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      {label}
                    </span>
                    <span className="block truncate font-serif text-xl md:text-2xl">{value}</span>
                  </span>
                  <ArrowRight className="size-5 shrink-0 -rotate-45 text-muted-foreground transition group-hover:rotate-0 group-hover:text-primary" />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <PawIcon className="size-4 text-primary" />
            Response time: faster than Loki ignores Mom. (So, pretty fast.)
          </p>
        </Reveal>
      </div>
    </section>
  )
}
