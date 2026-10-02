"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
// ✏️ Nav links & Instagram URL are edited in data/site.ts
import { navLinks, siteConfig } from "@/data"
import { InstagramIcon, PawIcon } from "@/components/icons"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled || open ? "border-b border-border bg-background/90 backdrop-blur-md" : "border-b border-transparent",
      )}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <a href="#top" className="font-serif text-xl font-semibold tracking-tight" onClick={() => setOpen(false)}>
          Loki Pawprints <PawIcon className="ml-1 inline-block size-4 -rotate-12 align-baseline text-primary" />
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm font-medium text-foreground/75 transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition hover:bg-primary sm:inline-flex"
          >
            <InstagramIcon className="size-4" />
            Follow Our Adventures
          </a>
          <button
            type="button"
            className="flex size-10 items-center justify-center rounded-full border border-border lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden transition-[max-height] duration-500 lg:hidden",
          open ? "max-h-[calc(100dvh-4rem)]" : "max-h-0",
        )}
      >
        <ul className="flex flex-col gap-1 px-5 pb-8 pt-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-border py-4 font-serif text-2xl"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-6">
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-4 text-sm font-semibold text-background"
            >
              <InstagramIcon className="size-4" />
              Follow Our Adventures
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
