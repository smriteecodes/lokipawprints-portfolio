import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { MeetLoki } from "@/components/sections/meet-loki"
import { OurContent } from "@/components/sections/our-content"
import { Portfolio } from "@/components/sections/portfolio"
import { Performance } from "@/components/sections/performance"
import { Brands } from "@/components/sections/brands"
import { Community } from "@/components/sections/community"
import { WorkWithUs } from "@/components/sections/work-with-us"
import { Contact } from "@/components/sections/contact"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <MeetLoki />
        <OurContent />
        <Portfolio />
        <Performance />
        <Brands />
        <Community />
        <WorkWithUs />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
