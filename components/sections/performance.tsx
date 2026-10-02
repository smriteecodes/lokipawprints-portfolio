// ✏️ The big performance numbers are edited in data/performance.ts
import { performanceCopy, performanceStats } from "@/data"
import { Eyebrow, Reveal } from "@/components/reveal"
import { PawIcon } from "@/components/icons"

export function Performance() {
  return (
    <section id="performance" aria-labelledby="performance-title" className="relative overflow-hidden bg-espresso py-24 text-espresso-foreground md:py-32">
      <PawIcon className="absolute -right-16 -top-10 size-80 rotate-12 text-espresso-foreground/[0.04]" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-3xl">
          <Eyebrow className="text-secondary">Content performance</Eyebrow>
          <h2 id="performance-title" className="font-serif text-5xl font-medium leading-none tracking-tight text-balance md:text-7xl">
            Content that <em className="italic text-secondary">connects</em>
          </h2>
        </Reveal>

        <dl className="mt-16 grid gap-y-12 md:grid-cols-3 md:gap-x-10">
          {performanceStats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 120} className="border-t border-espresso-foreground/20 pt-6">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-serif text-7xl font-medium leading-none tracking-tight text-secondary md:text-8xl">
                  {stat.value}
                </span>
                <span className="mt-4 block max-w-[16rem] text-espresso-foreground/75" aria-hidden="true">
                  {stat.label}
                </span>
              </dd>
            </Reveal>
          ))}
        </dl>

        <Reveal className="mt-16 grid gap-8 border-t border-espresso-foreground/20 pt-10 md:grid-cols-2 md:items-end">
          <p className="font-serif text-3xl italic leading-tight md:text-4xl">
            {performanceCopy.aside} <span aria-hidden="true">👀</span>
          </p>
          <p className="max-w-md leading-relaxed text-espresso-foreground/75 md:justify-self-end">
            {performanceCopy.supporting}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
