/**
 * ============================================================
 *  LOKI PAWPRINTS — EDIT EVERYTHING HERE
 * ============================================================
 *  Links, stats, analytics, brands, and portfolio projects all
 *  live in this one file. Update a value, save, and the site
 *  updates everywhere it's used.
 * ============================================================
 */

/* ---------- Contact & social links ---------- */
export const siteConfig = {
  name: "Loki Pawprints",
  handle: "@lokipawprints",
  email: "hello@lokipawprints.com", // TODO: replace with your real email
  location: "Dallas–Fort Worth, Texas",
  socials: {
    instagram: "https://instagram.com/lokipawprints", // TODO: confirm
    tiktok: "https://tiktok.com/@lokipawprints", // TODO: confirm
    facebook: "https://facebook.com/lokipawprints", // TODO: confirm
  },
}

/* ---------- Content performance (big bold numbers) ---------- */
export const performanceStats = [
  { value: "6K+", label: "Instagram community" },
  { value: "800K+", label: "Views on a top-performing organic Reel" },
  { value: "85K+", label: "Views on another organic Reel" },
]

/* ---------- Audience analytics ---------- */
/* Values marked PLACEHOLDER are examples — swap in your real insights. */
export const audience = {
  updated: "October 2026",
  highlights: {
    primaryAudience: "Women",
    coreAgeRange: "25–44",
    primaryLocation: "United States",
  },
  followers: [
    { platform: "Instagram", value: "6K+" },
    { platform: "TikTok", value: "1.2K" }, // PLACEHOLDER
    { platform: "Facebook", value: "800" }, // PLACEHOLDER
  ],
  metrics: [
    { label: "Average Reel views", value: "12K" }, // PLACEHOLDER
    { label: "Engagement rate", value: "6.4%" }, // PLACEHOLDER
    { label: "Monthly reach", value: "150K" }, // PLACEHOLDER
  ],
  // Percentages (numbers only, should add up to ~100)
  gender: [
    { label: "Women", percent: 78 }, // PLACEHOLDER
    { label: "Men", percent: 22 }, // PLACEHOLDER
  ],
  age: [
    { label: "18–24", percent: 12 }, // PLACEHOLDER
    { label: "25–34", percent: 41 }, // PLACEHOLDER
    { label: "35–44", percent: 29 }, // PLACEHOLDER
    { label: "45–54", percent: 12 }, // PLACEHOLDER
    { label: "55+", percent: 6 }, // PLACEHOLDER
  ],
  topLocations: [
    { label: "United States", percent: 64 }, // PLACEHOLDER
    { label: "Canada", percent: 8 }, // PLACEHOLDER
    { label: "United Kingdom", percent: 7 }, // PLACEHOLDER
    { label: "Australia", percent: 5 }, // PLACEHOLDER
  ],
}

/* ---------- Brands we've worked with ---------- */
/* Add a `logo` path (e.g. "/logos/brand.svg") to show an image instead of the wordmark. */
export type Brand = { name: string; logo?: string; url?: string }

export const brands: Brand[] = [
  { name: "Barkery Co." }, // PLACEHOLDER
  { name: "Wag & Wild" }, // PLACEHOLDER
  { name: "Sniff Supply" }, // PLACEHOLDER
  { name: "Golden Bowl" }, // PLACEHOLDER
  { name: "Tailwise" }, // PLACEHOLDER
  { name: "Furrow Pet" }, // PLACEHOLDER
]

/* ---------- Portfolio / featured work ---------- */
/*
 * To add a project, copy one object and edit it.
 *  - thumbnail: image shown in the grid (vertical 9:16 works best)
 *  - videoUrl:  optional .mp4 — plays in the modal if provided
 *  - image:     optional larger image for the modal (falls back to thumbnail)
 *  - metric:    optional performance line, e.g. "800K+ views"
 *  - postUrl:   link to the live Instagram/TikTok post
 */
export type PortfolioItem = {
  id: string
  title: string
  brand: string
  contentType: string
  concept: string
  description: string
  thumbnail: string
  videoUrl?: string
  image?: string
  metric?: string
  postUrl?: string
}

export const portfolio: PortfolioItem[] = [
  {
    id: "dad-walks-in",
    title: "When Dad Walks In",
    brand: "Organic",
    contentType: "Comedy Reel",
    concept: "Mom does everything. Dad opens the door. Loki forgets Mom exists.",
    description:
      "A relatable POV skit about being the 'spare human.' Built on a real daily moment, it struck a nerve with dog parents everywhere — the comments were basically a support group.",
    thumbnail: "/images/loki-sideeye.png",
    metric: "800K+ views",
    postUrl: "https://instagram.com/lokipawprints",
  },
  {
    id: "official-taste-tester",
    title: "Official Taste Tester",
    brand: "Barkery Co.",
    contentType: "Sponsored Reel",
    concept: "Loki reviews a new treat line with the seriousness of a food critic.",
    description:
      "A sponsored reel framed as a dramatic tasting panel — complete with suspicious sniffs, a long pause, and a very enthusiastic verdict. Product front and centre, story first.",
    thumbnail: "/images/loki-treats.png",
    metric: "85K+ views",
    postUrl: "https://instagram.com/lokipawprints",
  },
  {
    id: "unboxing-inspection",
    title: "The Unboxing Inspection",
    brand: "Wag & Wild",
    contentType: "UGC",
    concept: "Every package is for Loki until proven otherwise.",
    description:
      "Unboxing-style UGC delivered with raw files for the brand's paid social. Natural, unscripted reactions with clear product shots and a hook in the first second.",
    thumbnail: "/images/loki-product.png",
    postUrl: "https://instagram.com/lokipawprints",
  },
  {
    id: "rainy-day-enrichment",
    title: "Rainy Day Brain Games",
    brand: "Sniff Supply",
    contentType: "Enrichment Content",
    concept: "Three easy enrichment ideas for when the weather says no.",
    description:
      "Educational, save-worthy content showing how we use a snuffle mat and puzzle toy to keep Loki busy indoors. High saves and shares from dog parents looking for ideas.",
    thumbnail: "/images/loki-enrichment.png",
    postUrl: "https://instagram.com/lokipawprints",
  },
  {
    id: "golden-hour-zoomies",
    title: "Golden Hour Zoomies",
    brand: "Golden Bowl",
    contentType: "Lifestyle Integration",
    concept: "A Saturday in DFW, from park zoomies to post-walk dinner.",
    description:
      "A day-in-the-life reel weaving the brand's food naturally into Loki's routine — no hard sell, just the part where he sprints home for dinner.",
    thumbnail: "/images/loki-action.png",
    postUrl: "https://instagram.com/lokipawprints",
  },
  {
    id: "main-character-portrait",
    title: "Main Character Energy",
    brand: "Tailwise",
    contentType: "Product Demo",
    concept: "A calm product walkthrough… narrated by a dog who has opinions.",
    description:
      "A clean product demo paired with Loki's commentary-style captions. Clear features, honest use, and the kind of personality that keeps people watching to the end.",
    thumbnail: "/images/loki-portrait.png",
    postUrl: "https://instagram.com/lokipawprints",
  },
]
