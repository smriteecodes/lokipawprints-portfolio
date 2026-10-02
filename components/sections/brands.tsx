import Image from "next/image"
import { ArrowRight } from "lucide-react"
// ✏️ Add/remove brands and logos in data/brands.ts
import { brands, brandsTagline } from "@/data"
import { Eyebrow, Reveal } from "@/components/reveal"
import { PawIcon } from "@/components/icons"

export function Brands() {
  return (
    <section aria-labelledby="brands-title" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 text-center md:px-8">
        <Reveal>
          <Eyebrow className="justify-center">Brands {"we've"} worked with</Eyebrow>
          <h2 id="brands-title" className="font-serif text-4xl font-medium leading-tight tracking-tight text-balance md:text-6xl">
            Loki-approved <em className="italic text-primary">collaborations</em>
          </h2>
          <p className="mt-5 text-muted-foreground">{brandsTagline}</p>
        </Reveal>

        <Reveal delay={100}>
          <ul className="mx-auto mt-14 flex max-w-5xl flex-wrap items-center justify-center gap-x-4 gap-y-4 md:gap-x-6">
            {brands.map((brand, i) => {
              const content = brand.logo ? (
                <Image
                  src={brand.logo || "/placeholder.svg"}
                  alt={brand.name}
                  width={140}
                  height={48}
                  className="h-8 w-auto object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0"
                />
              ) : (
                <span className="font-serif text-2xl font-medium italic text-foreground/70 transition-colors group-hover:text-foreground md:text-3xl">
                  {brand.name}
                </span>
              )
              return (
                <li key={brand.name} className="flex items-center gap-4 md:gap-6">
                  {i > 0 && <PawIcon className="size-3.5 text-primary/60" aria-hidden="true" />}
                  {brand.url ? (
                    <a href={brand.url} target="_blank" rel="noopener noreferrer" className="group">
                      {content}
                    </a>
                  ) : (
                    <span className="group">{content}</span>
                  )}
                </li>
              )
            })}
          </ul>
        </Reveal>

        <Reveal delay={200}>
          <a
            href="#contact"
            className="group mt-14 inline-flex items-center gap-2 border-b border-foreground/30 pb-1 font-medium transition-colors hover:border-primary hover:text-primary"
          >
            {"Want to join the list? Let's talk."}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
