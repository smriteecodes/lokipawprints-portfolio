import Image from "next/image"
import { Eyebrow, Reveal } from "@/components/reveal"
// ✏️ Profile facts & quote: data/loki-profile.ts   •   Photos: data/photos.ts
import { lokiIntro, lokiPhotoCaptions, lokiProfile, lokiQuote, photos } from "@/data"

export function MeetLoki() {
  const { portrait, funny, action } = photos.meetLoki

  return (
    <section
      id="meet-loki"
      aria-labelledby="meet-loki-title"
      className="relative overflow-hidden bg-secondary/60 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow>The profile</Eyebrow>
            <h2 id="meet-loki-title" className="font-serif text-5xl font-medium leading-none tracking-tight md:text-7xl">
              Meet <em className="italic text-primary">Loki</em>
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground text-pretty">{lokiIntro}</p>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="grid grid-cols-2 gap-4 self-start lg:sticky lg:top-28 lg:col-span-6">
            <figure className="relative col-span-1 row-span-2 aspect-[3/5] overflow-hidden rounded-t-full rounded-b-3xl">
              <Image
                src={portrait.src || "/placeholder.svg"}
                alt={portrait.alt}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </figure>
            <figure className="relative h-full min-h-40 overflow-hidden rounded-3xl">
              <Image
                src={funny.src || "/placeholder.svg"}
                alt={funny.alt}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <figcaption className="absolute bottom-3 left-3 rounded-full bg-card/90 px-3 py-1 text-xs font-semibold backdrop-blur">
                {lokiPhotoCaptions.funny}
              </figcaption>
            </figure>
            <figure className="relative h-full min-h-40 overflow-hidden rounded-3xl">
              <Image
                src={action.src || "/placeholder.svg"}
                alt={action.alt}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <figcaption className="absolute bottom-3 left-3 rounded-full bg-card/90 px-3 py-1 text-xs font-semibold backdrop-blur">
                {lokiPhotoCaptions.action}
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-6">
            <dl className="divide-y divide-foreground/10 border-y border-foreground/10">
              {lokiProfile.map((item) => (
                <div key={item.label} className="grid gap-1 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6">
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-primary sm:pt-1">
                    {item.label}
                  </dt>
                  <dd className="font-serif text-xl leading-snug text-foreground">{item.value}</dd>
                </div>
              ))}
            </dl>

            <figure className="relative mt-10 rounded-[2rem] bg-foreground p-8 text-background md:p-10">
              <span
                className="absolute -top-8 left-6 font-serif text-[7rem] leading-none text-primary"
                aria-hidden="true"
              >
                {"“"}
              </span>
              <blockquote className="font-serif text-3xl font-medium leading-tight text-balance md:text-4xl">
                {lokiQuote.text} <em className="italic text-secondary">{lokiQuote.highlight}</em>
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-background/60">
                — {lokiQuote.author}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
