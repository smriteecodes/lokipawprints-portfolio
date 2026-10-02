/**
 * ============================================================
 *  BRAND COLLABORATIONS — "Loki-approved collaborations"
 * ============================================================
 *  HOW TO ADD A BRAND:  add a new line like
 *    { name: "Brand Name" },
 *
 *  BRAND LOGOS (optional):
 *   Put the logo file in /public/logos/ (SVG or transparent PNG
 *   is best) and add  logo: "/logos/brand-name.svg".
 *   Without a logo, the brand name shows as an elegant wordmark.
 *
 *  `url` (optional) makes the logo link to the brand's website.
 *  To remove a brand, delete its line.
 * ============================================================
 */

export type Brand = { name: string; logo?: string; url?: string }

export const brandsTagline = "Products tested. Treats collected. Partnerships created."

export const brands: Brand[] = [
  { name: "Barkery Co." }, // PLACEHOLDER — replace with a real collaboration
  { name: "Wag & Wild" }, // PLACEHOLDER
  { name: "Sniff Supply" }, // PLACEHOLDER
  { name: "Golden Bowl" }, // PLACEHOLDER
  { name: "Tailwise" }, // PLACEHOLDER
  { name: "Furrow Pet" }, // PLACEHOLDER
  // { name: "New Brand", logo: "/logos/new-brand.svg", url: "https://newbrand.com" },
]
