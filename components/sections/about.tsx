import Image from "next/image"
import { Eyebrow, Reveal } from "@/components/reveal"
import { PawIcon } from "@/components/icons"
import { photos } from "@/data"

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          {/* ✏️ Family photo is set in data/photos.ts → photos.family */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-[0_30px_60px_-30px_rgba(43,31,23,0.4)]">
            <Image
              src={photos.family.src || "/placeholder.svg"}
              alt={photos.family.alt}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 right-6 max-w-[15rem] rotate-2 rounded-2xl bg-card p-5 shadow-lg md:-right-6">
            <p className="font-serif text-lg leading-snug">{"“Who's Mom?”"}</p>
            <p className="mt-1 text-xs text-muted-foreground">— Loki, every time Dad gets home</p>
          </div>
        </Reveal>

        <Reveal delay={120} className="flex flex-col justify-center">
          <Eyebrow>About us</Eyebrow>
          <h2 id="about-title" className="font-serif text-4xl font-medium leading-[1.05] tracking-tight text-balance md:text-6xl">
            The humans behind the <em className="italic text-primary">paws</em>
          </h2>

          <div className="mt-8 space-y-5 leading-relaxed text-muted-foreground text-pretty">
            <p>
              Loki Pawprints started as a little corner of the internet to share life with Loki — and somehow turned
              into a community following the funny, chaotic, sweet, and very relatable reality of being his humans.
            </p>
            <p>
              <strong className="font-semibold text-foreground">{"Then there's Dad:"}</strong>{" "}
              {"Loki's favorite person in the entire world. No competition. No explanation needed."}
            </p>
            <p>
              <strong className="font-semibold text-foreground">And Mom: the spare.</strong> She comes up with the
              ideas, films and edits the content, plans his enrichment, makes his treats, feeds him, takes
              approximately a million photos of him, and loves him unconditionally… only for Loki to hear Dad walk into
              the room and forget she exists. <span aria-hidden="true">😂</span>
            </p>
            <p>
              Together, we share Loki exactly as he is — expressive, playful, occasionally dramatic, and always keeping
              us entertained. From comedy skits and everyday dog-parent moments to enrichment, homemade treats,
              adventures, and brand collaborations, we create content that feels like a peek into our real life with
              Loki.
            </p>
            <p>{"Because around here, Loki isn't just part of the content."}</p>
          </div>

          <blockquote className="mt-8 border-l-2 border-primary pl-6">
            <p className="font-serif text-3xl font-medium leading-tight text-foreground text-balance md:text-4xl">
              Loki is the main character. <em className="italic text-primary">{"We're just his staff."}</em>{" "}
              <PawIcon className="inline size-7 align-baseline text-primary" />
            </p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  )
}
