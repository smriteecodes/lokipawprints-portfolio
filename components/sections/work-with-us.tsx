import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"
// ✏️ Services: data/collaborations.ts   •   Photo: data/photos.ts   •   Email: data/site.ts
import { collaborationMailto, collaborationOptions, collaborationQuote, collaborationTerms, photos } from "@/data"
import { Eyebrow, Reveal } from "@/components/reveal"
import { ButtonLink } from "@/components/button-link"

export function WorkWithUs() {
  return (
    <section id="work-with-us" aria-labelledby="work-with-us-title" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="overflow-hidden rounded-[2.5rem] bg-primary text-primary-foreground">
          <div className="grid lg:grid-cols-12">
            <div className="p-8 md:p-14 lg:col-span-7">
              <Reveal>
                <Eyebrow className="text-primary-foreground/80">Work with us</Eyebrow>
                <h2
                  id="work-with-us-title"
                  className="font-serif text-4xl font-medium leading-[1.02] tracking-tight text-balance md:text-6xl"
                >
                  {"Let's make something people "}
                  <em className="italic">actually</em> want to watch.
                </h2>
                <p className="mt-6 max-w-xl leading-relaxed text-primary-foreground/85 text-pretty">
                  {
                    "We love partnering with brands that naturally fit Loki's life and our community. Whether the goal is awareness, storytelling, product education, or simply making dog parents smile, we want the collaboration to feel like content first — and an ad second."
                  }
                </p>
              </Reveal>

              <Reveal delay={100}>
                <ul className="mt-10 flex flex-wrap gap-2.5" aria-label="Collaboration options">
                  {collaborationOptions.map((option) => (
                    <li
                      key={option}
                      className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-4 py-2 text-sm font-medium transition-colors hover:bg-primary-foreground/10"
                    >
                      <Check className="size-3.5" aria-hidden="true" />
                      {option}
                    </li>
                  ))}
                </ul>

                <p className="mt-8 max-w-xl border-l-2 border-primary-foreground/40 pl-4 text-sm leading-relaxed text-primary-foreground/80">
                  {collaborationTerms}
                </p>

                <ButtonLink href={collaborationMailto} variant="light" className="group mt-10 px-8 py-4 text-base">
                  Start a Collaboration{" "}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </ButtonLink>
              </Reveal>
            </div>

            <div className="relative min-h-80 lg:col-span-5">
              <Image
                src={photos.workWithUs.src || "/placeholder.svg"}
                alt={photos.workWithUs.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <figure className="absolute bottom-6 left-6 right-6 rounded-2xl bg-card/95 p-5 text-foreground backdrop-blur md:left-auto md:max-w-xs">
                <blockquote className="font-serif text-lg leading-snug">{`“${collaborationQuote.text}”`}</blockquote>
                <figcaption className="mt-1 text-xs text-muted-foreground">— {collaborationQuote.author}</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
