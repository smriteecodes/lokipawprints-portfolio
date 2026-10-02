/**
 * ============================================================
 *  CONTENT PILLARS — "Our content" section
 * ============================================================
 *  Add, remove, or reorder pillars. Numbers (01, 02…) are
 *  generated automatically.
 *
 *  `icon` comes from lucide-react. Browse icons at
 *  https://lucide.dev/icons — then add the name to the import
 *  line below and use it, e.g.  icon: Bone
 * ============================================================
 */

import { Clapperboard, Cookie, Footprints, Package, Puzzle, Sparkles, type LucideIcon } from "lucide-react"

export type ContentPillar = { title: string; description: string; icon: LucideIcon }

export const contentIntro =
  "Our content is built around Loki's real personality and the moments that make dog-parent life so relatable."

export const contentPillars: ContentPillar[] = [
  {
    title: "Dog Comedy",
    icon: Clapperboard,
    description:
      "Relatable skits, POVs, side-eyes, dramatic reactions, and the everyday situations dog parents immediately recognize.",
  },
  {
    title: "Dog Lifestyle",
    icon: Footprints,
    description: "Walks, routines, adventures, home life, dog-parent moments, travel, and everyday life with Loki.",
  },
  {
    title: "Enrichment & Activities",
    icon: Puzzle,
    description: "Simple enrichment ideas, games, activities, and ways we keep Loki entertained and engaged.",
  },
  {
    title: "Homemade Treats",
    icon: Cookie,
    description:
      "Simple dog-friendly recipes, homemade treats, and Loki performing his very important role as official taste tester.",
  },
  {
    title: "Product Storytelling",
    icon: Package,
    description:
      "Creative product integrations that naturally fit into Loki's life rather than feeling like traditional advertisements.",
  },
  {
    title: "Trends & Personality Content",
    icon: Sparkles,
    description: "Social trends reimagined around Loki's personality and our relationship with him.",
  },
]
