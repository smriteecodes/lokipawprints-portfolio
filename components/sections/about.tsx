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
             Meet Smriti and Saujan, the two humans behind Lokipawprints. 
            </p>
            <p>
              <strong className="font-semibold text-foreground">{"Then there's Dad:"}</strong>{" "}
              {"Loki's favorite person in the entire world. No competition. No explanation needed."}
            </p>
            <p>
              I'm Smriti, Loki's mom and the person behind the camera. I come up with the ideas,
              film and edit our videos, plan his activities, and take more pictures of him
              than I'd like to admit. Loki is pretty much the love of my life, although
              I'm not too sure the feeling is mutual. 😂
            </p>

            <p>
              Then there's Saujan, Loki's dad and his absolute favorite person in the world.
              He makes appearances in our videos, helps bring my ideas to life, and somehow
              gets all of Loki's attention without even trying.
  </p>

  <p>
            What started as us capturing Loki's everyday moments has turned into something
            we both genuinely love. It's our way of being creative, having fun, and sharing
            a little bit of our lives with people who love their dogs just as much as we do.
  </p>
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
