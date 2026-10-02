/**
 * ============================================================
 *  PORTFOLIO — "Our Work" section (new collaborations go here!)
 * ============================================================
 *  HOW TO ADD A NEW PROJECT:
 *   1. Copy one whole { ... } block below (including the comma)
 *   2. Paste it where you want it to appear in the grid
 *   3. Give it a unique `id` and edit the details
 *
 *  PORTFOLIO THUMBNAILS:
 *   Put the cover image in /public/images/portfolio/ and set
 *   `thumbnail: "/images/portfolio/my-cover.jpg"`.
 *   Vertical 9:16 images (e.g. 1080×1920) look best.
 *
 *  PORTFOLIO VIDEOS (optional):
 *   Put a vertical .mp4 in /public/videos/ and set
 *   `videoUrl: "/videos/my-reel.mp4"`. The thumbnail becomes the
 *   video's cover and the modal plays the video.
 *   Keep files small (under ~15MB). For large videos, upload to
 *   Vercel Blob or another host and paste the full https:// URL.
 *   No video? Leave `videoUrl` out and the image is shown instead.
 *
 *  OPTIONAL FIELDS (delete the line if you don't need it):
 *   videoUrl, image, metric, postUrl
 * ============================================================
 */

export type ContentType =
  | "Comedy Reel"
  | "Sponsored Reel"
  | "UGC"
  | "Lifestyle Integration"
  | "Product Demo"
  | "Enrichment Content"
  | "Treat/Recipe Content"
  | (string & {})

export type PortfolioItem = {
  /** Unique, lowercase, no spaces — e.g. "barkery-taste-test" */
  id: string
  /** Campaign title shown on the card */
  title: string
  /** Brand name — use "Organic" for non-sponsored content */
  brand: string
  /** Content type label, e.g. "Sponsored Reel" or "UGC" */
  contentType: ContentType
  /** One-line concept shown in the modal */
  concept: string
  /** Short campaign description shown in the modal */
  description: string
  /** Cover image for the grid (and video poster) */
  thumbnail: string
  /** Describes the thumbnail for screen readers */
  thumbnailAlt: string
  /** OPTIONAL: vertical video (.mp4) that plays in the modal */
  videoUrl?: string
  /** OPTIONAL: a larger/different image for the modal */
  image?: string
  /** OPTIONAL: performance line, e.g. "800K+ views" */
  metric?: string
  /** OPTIONAL: link to the original Instagram/TikTok post */
  postUrl?: string
}

export const portfolioIntro = "A few moments we're particularly proud of. Tap any project for the full story."

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
    thumbnailAlt: "Loki giving the camera a dramatic side-eye",
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
    thumbnailAlt: "Loki eyeing a plate of homemade dog treats",
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
    thumbnailAlt: "Loki inspecting a delivery box next to a rope toy",
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
    thumbnailAlt: "Loki nose-deep in a snuffle mat",
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
    thumbnailAlt: "Loki mid-sprint through golden park grass",
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
    thumbnailAlt: "Portrait of Loki looking thoughtfully at the camera",
    postUrl: "https://instagram.com/lokipawprints",
  },

  /* ✏️ NEW COLLABORATION — copy this template, remove the slashes, and fill it in:
  {
    id: "brand-campaign-name",
    title: "Campaign Title",
    brand: "Brand Name",
    contentType: "Sponsored Reel",
    concept: "One sentence about the idea.",
    description: "Two or three sentences about the campaign and how it went.",
    thumbnail: "/images/portfolio/campaign-cover.jpg",
    thumbnailAlt: "What the cover image shows",
    videoUrl: "/videos/campaign-reel.mp4",
    metric: "120K views",
    postUrl: "https://instagram.com/p/XXXXXXXX",
  },
  */
]
