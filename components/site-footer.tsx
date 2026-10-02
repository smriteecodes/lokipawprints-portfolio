import { PawIcon, SocialLinks } from "@/components/icons"

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-espresso text-espresso-foreground">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-20 md:px-8">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="font-serif text-5xl font-medium tracking-tight md:text-7xl">
              Loki Pawprints <PawIcon className="inline-block size-10 -rotate-12 align-baseline text-secondary md:size-14" />
            </p>
            <p className="mt-4 font-serif text-xl italic text-espresso-foreground/70">
              Made with treats, side-eyes & a little chaos.
            </p>
          </div>
          <SocialLinks linkClassName="border-espresso-foreground/20 text-espresso-foreground/80 hover:border-secondary hover:text-secondary" />
        </div>
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-espresso-foreground/15 pt-6 text-sm text-espresso-foreground/60 sm:flex-row">
          <p>© 2026 Loki Pawprints. All rights reserved.</p>
          <a href="#top" className="inline-flex items-center gap-2 transition-colors hover:text-secondary">
            <PawIcon className="size-4" /> Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}
