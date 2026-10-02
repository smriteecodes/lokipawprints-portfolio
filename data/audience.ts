/**
 * ============================================================
 *  AUDIENCE ANALYTICS & FOLLOWER NUMBERS — "Who's watching Loki?"
 * ============================================================
 *  Copy these from Instagram / TikTok / Facebook insights.
 *  Lines marked PLACEHOLDER are example numbers — replace them
 *  with your real ones before sending the site to brands.
 *
 *  Percentages are plain numbers (78, not "78%").
 *  Don't forget to update `updated` each time!
 * ============================================================
 */

export const audience = {
  // ✏️ Shown as "Audience insights updated …"
  updated: "October 2026",

  highlights: {
    primaryAudience: "Women",
    coreAgeRange: "25–44",
    primaryLocation: "United States",
  },

  // ✏️ FOLLOWER NUMBERS
  followers: [
    { platform: "Instagram", value: "6K+" },
    { platform: "TikTok", value: "1.2K" }, // PLACEHOLDER
    { platform: "Facebook", value: "800" }, // PLACEHOLDER
  ],

  // ✏️ KEY METRICS
  metrics: [
    { label: "Average Reel views", value: "12K" }, // PLACEHOLDER
    { label: "Engagement rate", value: "6.4%" }, // PLACEHOLDER
    { label: "Monthly reach", value: "150K" }, // PLACEHOLDER
  ],

  // ✏️ GENDER BREAKDOWN (should add up to ~100)
  gender: [
    { label: "Women", percent: 78 }, // PLACEHOLDER
    { label: "Men", percent: 22 }, // PLACEHOLDER
  ],

  // ✏️ AGE BREAKDOWN (should add up to ~100)
  age: [
    { label: "18–24", percent: 12 }, // PLACEHOLDER
    { label: "25–34", percent: 41 }, // PLACEHOLDER
    { label: "35–44", percent: 29 }, // PLACEHOLDER
    { label: "45–54", percent: 12 }, // PLACEHOLDER
    { label: "55+", percent: 6 }, // PLACEHOLDER
  ],

  // ✏️ TOP LOCATIONS
  topLocations: [
    { label: "United States", percent: 64 }, // PLACEHOLDER
    { label: "Canada", percent: 8 }, // PLACEHOLDER
    { label: "United Kingdom", percent: 7 }, // PLACEHOLDER
    { label: "Australia", percent: 5 }, // PLACEHOLDER
  ],
}
