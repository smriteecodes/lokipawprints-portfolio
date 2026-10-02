/**
 * ============================================================
 *  CONTACT EMAIL, SOCIAL LINKS & NAVIGATION
 * ============================================================
 *  Update your email or social links here and they change
 *  everywhere on the site (header, hero, contact, footer).
 * ============================================================
 */

export const siteConfig = {
  name: "Loki Pawprints",
  handle: "@lokipawprints",

  // ✏️ CONTACT EMAIL — used by every "Work With Us" / "Contact" button
  email: "hello@lokipawprints.com",

  location: "Dallas–Fort Worth, Texas",

  // ✏️ SOCIAL MEDIA LINKS — paste your full profile URLs
  socials: {
    instagram: "https://instagram.com/lokipawprints",
    tiktok: "https://tiktok.com/@lokipawprints",
    facebook: "https://facebook.com/lokipawprints",
  },

  // ✏️ Subject line that pre-fills when a brand clicks an email button
  collaborationEmailSubject: "Collaboration with Loki Pawprints",
}

/* ✏️ NAVIGATION — `href` must match a section's id (e.g. "#about") */
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Meet Loki", href: "#meet-loki" },
  { label: "Our Content", href: "#content" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Work With Us", href: "#work-with-us" },
  { label: "Contact", href: "#contact" },
]

/* A ready-made mailto link (no need to edit this one) */
export const collaborationMailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
  siteConfig.collaborationEmailSubject,
)}`
