// ✏️ Content pillars are edited in data/content-pillars.ts
import { contentIntro, contentPillars } from "@/data"
import { Eyebrow, Reveal } from "@/components/reveal"

export function OurContent() {
  return (
    <section id="content" aria-labelledby="content-title" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
            <Eyebrow>What we make</Eyebrow>
            <h2 id="content-title" className="font-serif text-5xl font-medium leading-none tracking-tight md:text-6xl">
              Our <em className="italic text-primary">content</em>
            </h2>
            <p className="mt-6 max-w-sm leading-relaxed text-muted-foreground text-pretty">{contentIntro}</p>
            <p className="mt-6 hidden max-w-xs font-serif text-lg italic text-foreground/70 lg:block">
              {"Scripted by us. Directed by Loki. He doesn't take notes."}
            </p>
          </Reveal>

          <ol className="border-b border-border lg:col-span-8">
            {contentPillars.map(({ title, description, icon: Icon }, i) => (
              <li key={title}>
                <Reveal delay={i * 60}>
                  <div className="group grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 border-t border-border py-8 transition-colors md:grid-cols-[4rem_1fr_auto] md:items-center md:gap-x-10">
                    <span className="font-serif text-sm text-muted-foreground md:text-base" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-serif text-2xl font-medium transition-colors group-hover:text-primary md:text-3xl">
                        {title}
                      </h3>
                      <p className="mt-2 max-w-xl leading-relaxed text-muted-foreground text-pretty">{description}</p>
                    </div>
                    <span
                      className="col-start-2 mt-2 flex size-14 items-center justify-center rounded-full bg-secondary text-primary transition-all duration-300 group-hover:rotate-[-8deg] group-hover:bg-primary group-hover:text-primary-foreground md:col-start-auto md:mt-0"
                      aria-hidden="true"
                    >
                      <Icon className="size-6" />
                    </span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
