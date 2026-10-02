import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { ButtonLink } from "@/components/button-link"
import { PawIcon, SocialLinks } from "@/components/icons"
import { photos } from "@/data"

const tags = ["Dog Lifestyle", "Comedy", "UGC", "Brand Partnerships"]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-8 md:px-8 md:pt-12 lg:grid-cols-12 lg:gap-8 lg:pb-28">
        <div className="lg:col-span-7">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            <PawIcon className="size-3.5 text-primary" />
            Creator portfolio & media kit
          </p>

          <h1 className="font-serif text-6xl font-medium leading-[0.95] tracking-tight text-balance sm:text-7xl lg:text-8xl">
            {"Hi, I'm "}
            <em className="font-normal italic text-primary">Loki.</em>{" "}
            <PawIcon className="inline-block size-12 -rotate-12 align-top text-accent sm:size-14 lg:size-16" />
          </h1>

          <p className="mt-8 max-w-xl font-serif text-2xl leading-snug text-foreground/90 text-pretty md:text-3xl">
            Professional treat tester. Part-time troublemaker. Full-time main character.
          </p>

          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground text-pretty">
            Loki Pawprints is where dog-parent life meets comedy, creativity, and a little bit of chaos. We create
            relatable, personality-driven content designed to make pet parents stop scrolling, laugh, and think,{" "}
            <span className="italic text-foreground">{"“Yep… my dog does that too.”"}</span>
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#portfolio">
              See Our Work <ArrowRight className="size-4" />
            </ButtonLink>
            <ButtonLink href="#work-with-us" variant="outline">
              Work With Us
            </ButtonLink>
          </div>

          <div className="mt-10 flex flex-col gap-6 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
            <ul className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium text-muted-foreground">
              {tags.map((tag, i) => (
                <li key={tag} className="flex items-center gap-3">
                  {i > 0 && <span className="text-primary" aria-hidden="true">•</span>}
                  {tag}
                </li>
              ))}
            </ul>
            <SocialLinks />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <div
            className="absolute -right-10 -top-6 -z-10 size-72 bg-secondary md:size-96"
            style={{ borderRadius: "62% 38% 55% 45% / 48% 58% 42% 52%" }}
            aria-hidden="true"
          />
          {/* ✏️ Hero photo is set in data/photos.ts → photos.hero */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[2.5rem] shadow-[0_30px_60px_-30px_rgba(43,31,23,0.45)]">
            <Image
              src={photos.hero.src || "/placeholder.svg"}
              alt={photos.hero.alt}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover object-[50%_30%]"
            />
          </div>

          <div className="absolute -left-4 bottom-16 rotate-[-6deg] animate-float rounded-2xl bg-card px-4 py-3 shadow-lg md:-left-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Certified</p>
            <p className="font-serif text-lg leading-tight">Side-eye specialist</p>
          </div>
          <div
            className="absolute -right-2 top-10 flex size-24 rotate-12 animate-float flex-col items-center justify-center rounded-full bg-primary text-center text-primary-foreground shadow-lg md:-right-6 md:size-28"
            style={{ animationDelay: "1.5s" }}
          >
            <PawIcon className="mb-1 size-5" />
            <span className="px-2 text-[11px] font-semibold uppercase leading-tight tracking-wider">
              Main
              <br />
              character
            </span>
          </div>
        </div>
      </div>

      <Marquee />
    </section>
  )
}

const marqueeItems = [
  "Dog Comedy",
  "Sponsored Reels",
  "UGC",
  "Homemade Treats",
  "Enrichment",
  "Lifestyle",
  "Product Storytelling",
  "Side-eyes",
]

function Marquee() {
  return (
    <div className="overflow-hidden border-y border-border bg-card py-4" aria-hidden="true">
      <div className="flex w-max animate-marquee">
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <span key={i} className="flex items-center gap-6 px-3 font-serif text-xl italic text-foreground/80 md:text-2xl">
            {item}
            <PawIcon className="size-4 text-primary" />
          </span>
        ))}
      </div>
    </div>
  )
}
