// ✏️ Follower numbers & audience analytics are edited in data/audience.ts
import { audience } from "@/data"
import { Eyebrow, Reveal } from "@/components/reveal"
import { FacebookIcon, InstagramIcon, TikTokIcon } from "@/components/icons"

const platformIcons: Record<string, typeof InstagramIcon> = {
  Instagram: InstagramIcon,
  TikTok: TikTokIcon,
  Facebook: FacebookIcon,
}

export function Community() {
  const highlights = [
    { label: "Primary audience", value: audience.highlights.primaryAudience },
    { label: "Core age range", value: audience.highlights.coreAgeRange },
    { label: "Primary location", value: audience.highlights.primaryLocation },
  ]

  return (
    <section aria-labelledby="community-title" className="bg-secondary/60 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow>Our community</Eyebrow>
            <h2 id="community-title" className="font-serif text-5xl font-medium leading-none tracking-tight text-balance md:text-7xl">
              {"Who's watching "}
              <em className="italic text-primary">Loki?</em>
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground text-pretty">
            Mostly dog moms who have also been replaced the second someone else walks in the door.
          </p>
        </Reveal>

        <Reveal>
          <dl className="grid gap-px overflow-hidden rounded-[2rem] bg-foreground/10 md:grid-cols-3">
            {highlights.map((h) => (
              <div key={h.label} className="bg-background p-8 md:p-10">
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{h.label}</dt>
                <dd className="mt-3 font-serif text-4xl font-medium md:text-5xl">{h.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <Reveal className="rounded-[2rem] bg-background p-8">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Followers</h3>
            <ul className="mt-6 space-y-5">
              {audience.followers.map((f) => {
                const Icon = platformIcons[f.platform]
                return (
                  <li key={f.platform} className="flex items-center justify-between">
                    <span className="flex items-center gap-3 font-medium">
                      <span className="flex size-9 items-center justify-center rounded-full bg-secondary text-primary">
                        {Icon && <Icon className="size-4" />}
                      </span>
                      {f.platform}
                    </span>
                    <span className="font-serif text-2xl">{f.value}</span>
                  </li>
                )
              })}
            </ul>
            <div className="mt-8 border-t border-border pt-6">
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Gender</h3>
              <div className="mt-4 flex h-3 overflow-hidden rounded-full bg-secondary">
                {audience.gender.map((g, i) => (
                  <div
                    key={g.label}
                    className={i === 0 ? "bg-primary" : "bg-accent"}
                    style={{ width: `${g.percent}%` }}
                  />
                ))}
              </div>
              <ul className="mt-3 flex justify-between text-sm">
                {audience.gender.map((g, i) => (
                  <li key={g.label} className="flex items-center gap-2">
                    <span className={`size-2 rounded-full ${i === 0 ? "bg-primary" : "bg-accent"}`} aria-hidden="true" />
                    {g.label} <span className="font-semibold">{g.percent}%</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100} className="rounded-[2rem] bg-background p-8">
            <BarList title="Age breakdown" items={audience.age} />
          </Reveal>

          <Reveal delay={200} className="rounded-[2rem] bg-background p-8">
            <BarList title="Top locations" items={audience.topLocations} />
          </Reveal>
        </div>

        <Reveal className="mt-6">
          <dl className="grid gap-6 rounded-[2rem] bg-foreground p-8 text-background md:grid-cols-3 md:p-10">
            {audience.metrics.map((m) => (
              <div key={m.label} className="md:border-l md:border-background/15 md:pl-8 md:first:border-0 md:first:pl-0">
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-background/60">{m.label}</dt>
                <dd className="mt-2 font-serif text-5xl font-medium text-secondary">{m.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <p className="mt-6 text-center text-sm text-muted-foreground">Audience insights updated {audience.updated}</p>
      </div>
    </section>
  )
}

function BarList({ title, items }: { title: string; items: { label: string; percent: number }[] }) {
  const max = Math.max(...items.map((i) => i.percent))
  return (
    <>
      <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{title}</h3>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item.label}>
            <div className="mb-1.5 flex justify-between text-sm">
              <span className="font-medium">{item.label}</span>
              <span className="text-muted-foreground">{item.percent}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-secondary">
              <div
                className={item.percent === max ? "h-full rounded-full bg-primary" : "h-full rounded-full bg-primary/45"}
                style={{ width: `${item.percent}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
