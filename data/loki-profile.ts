/**
 * ============================================================
 *  MEET LOKI — PROFILE FACTS & CAPTIONS
 * ============================================================
 *  Edit any line below. Add or remove rows from `lokiProfile`
 *  and the profile list updates automatically.
 *  (Remember to update Loki's age on his birthday!)
 * ============================================================
 */

import { siteConfig } from "./site"

export const lokiProfile = [
  { label: "Name", value: "Loki" },
  { label: "Breed", value: "Cavapoo" },
  { label: "Age", value: "3" },
  { label: "Based in", value: siteConfig.location },
  { label: "Personality", value: "Curious, expressive, playful & slightly dramatic" },
  {
    label: "Special talents",
    value: "Side-eye, selective listening, treat detection, making ordinary situations unnecessarily entertaining",
  },
  { label: "Favorite human", value: "Dad" },
  { label: "Mom's official position", value: "Spare human / personal chef / photographer / content manager" },
]

/* Short intro next to the "Meet Loki" heading */
export const lokiIntro =
  "Male. Apricot. White socks he didn't ask for. Kisses every dog he likes at the park — humans need not apply."

/* Little labels on top of the collage photos */
export const lokiPhotoCaptions = {
  funny: "Exhibit A: the side-eye",
  action: "Zoomies, scheduled",
}

/* Pull quote — `highlight` is the italic second half */
export const lokiQuote = {
  text: "Will work for treats.",
  highlight: "Will ignore Mom for free.",
  author: "Loki",
}
