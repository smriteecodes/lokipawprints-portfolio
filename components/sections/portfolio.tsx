"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, Expand, Play, TrendingUp, X } from "lucide-react"
// ✏️ Add new collaborations, videos, and thumbnails in data/portfolio.ts
import { portfolio, portfolioIntro, type PortfolioItem } from "@/data"
import { Eyebrow, Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"

export function Portfolio() {
  const [active, setActive] = useState<PortfolioItem | null>(null)

  return (
    <section id="portfolio" aria-labelledby="portfolio-title" className="bg-card py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow>Featured work</Eyebrow>
            <h2 id="portfolio-title" className="font-serif text-5xl font-medium leading-none tracking-tight md:text-7xl">
              Our <em className="italic text-primary">work</em>
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground text-pretty">{portfolioIntro}</p>
        </Reveal>

        <ul className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-3 lg:pb-12">
          {portfolio.map((item, i) => (
            <li key={item.id} className={cn(i % 3 === 1 && "lg:translate-y-12")}>
              <Reveal delay={(i % 3) * 100}>
                <PortfolioCard item={item} onOpen={() => setActive(item)} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>

      <PortfolioModal item={active} onClose={() => setActive(null)} />
    </section>
  )
}

function PortfolioCard({ item, onOpen }: { item: PortfolioItem; onOpen: () => void }) {
  const isVideo = Boolean(item.videoUrl)
  const ActionIcon = isVideo ? Play : Expand

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group block w-full rounded-[1.75rem] text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
      aria-label={`${isVideo ? "Watch" : "View"} project: ${item.title} for ${item.brand}`}
      aria-haspopup="dialog"
    >
      <div className="relative aspect-[9/16] overflow-hidden rounded-[1.75rem] bg-secondary shadow-[0_20px_40px_-28px_rgba(43,31,23,0.5)] transition-shadow duration-500 group-hover:shadow-[0_28px_50px_-24px_rgba(43,31,23,0.55)]">
        <Image
          src={item.thumbnail || "/placeholder.svg"}
          alt={item.thumbnailAlt}
          fill
          sizes="(min-width: 1024px) 30vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/0 to-foreground/0" />
        <span className="absolute left-3 top-3 max-w-[calc(100%-4.5rem)] truncate rounded-full bg-card/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider backdrop-blur md:left-4 md:top-4">
          {item.contentType}
        </span>
        <span
          className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-card/90 backdrop-blur transition-transform duration-300 group-hover:scale-110 md:right-4 md:top-4 md:size-11"
          aria-hidden="true"
        >
          <ActionIcon className={cn("size-4", isVideo && "fill-current")} />
        </span>
        <div className="absolute inset-x-0 bottom-0 p-4 text-background transition-transform duration-500 group-hover:-translate-y-1 md:p-6">
          {item.metric && (
            <p className="mb-2 inline-flex items-center gap-1.5 text-xs font-semibold">
              <TrendingUp className="size-3.5" aria-hidden="true" />
              {item.metric}
            </p>
          )}
          <h3 className="font-serif text-xl leading-tight md:text-2xl">{item.title}</h3>
          <p className="mt-1 text-xs text-background/75 md:text-sm">{item.brand}</p>
        </div>
      </div>
    </button>
  )
}

function PortfolioModal({ item, onClose }: { item: PortfolioItem | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (item && !dialog.open) dialog.showModal()
    if (!item && dialog.open) dialog.close()
    document.body.style.overflow = item ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [item])

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      aria-labelledby="portfolio-modal-title"
      className="m-auto w-[min(64rem,calc(100%-2rem))] max-h-[calc(100dvh-2rem)] overflow-hidden rounded-[2rem] bg-card p-0 text-foreground shadow-2xl backdrop:bg-foreground/70 backdrop:backdrop-blur-sm open:animate-in open:fade-in-0 open:zoom-in-95"
    >
      {item && (
        <div className="grid max-h-[calc(100dvh-2rem)] overflow-y-auto md:grid-cols-2">
          <div className="relative bg-foreground md:h-full">
            <div className="relative mx-auto aspect-[9/16] max-h-[70dvh] md:max-h-[85dvh]">
              {item.videoUrl ? (
                <video
                  key={item.id}
                  src={item.videoUrl}
                  poster={item.thumbnail}
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={`${item.title} video`}
                  className="size-full object-cover"
                />
              ) : (
                <Image
                  src={item.image || item.thumbnail}
                  alt={item.thumbnailAlt}
                  fill
                  sizes="(min-width: 768px) 32rem, 100vw"
                  className="object-cover"
                />
              )}
            </div>
          </div>

          <div className="flex flex-col p-7 md:p-10">
            <div className="flex items-start justify-between gap-4">
              <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                {item.contentType}
              </span>
              <button
                type="button"
                onClick={onClose}
                className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border transition hover:rotate-90 hover:bg-secondary"
                aria-label="Close project"
              >
                <X className="size-5" />
              </button>
            </div>

            <h3 id="portfolio-modal-title" className="mt-6 font-serif text-4xl font-medium leading-tight text-balance">
              {item.title}
            </h3>

            <dl className="mt-6 grid grid-cols-2 gap-4 border-y border-border py-5">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Brand</dt>
                <dd className="mt-1 font-medium">{item.brand}</dd>
              </div>
              {item.metric && (
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Performance
                  </dt>
                  <dd className="mt-1 font-medium text-primary">{item.metric}</dd>
                </div>
              )}
            </dl>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">The concept</p>
              <p className="mt-2 font-serif text-xl leading-snug">{item.concept}</p>
            </div>

            <p className="mt-6 leading-relaxed text-muted-foreground">{item.description}</p>

            {item.postUrl && (
              <a
                href={item.postUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition hover:bg-primary md:mt-auto"
              >
                View the original post
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            )}
          </div>
        </div>
      )}
    </dialog>
  )
}
