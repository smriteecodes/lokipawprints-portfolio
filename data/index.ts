/**
 * ============================================================
 *  LOKI PAWPRINTS — CONTENT GUIDE
 * ============================================================
 *  Everything that changes regularly lives in this /data folder.
 *  You never need to touch the design files in /components.
 *
 *  WHAT TO UPDATE                     WHICH FILE
 *  ---------------------------------  ------------------------
 *  Contact email, social links         data/site.ts
 *  Loki's photos, family photos        data/photos.ts
 *  Loki's profile facts & quote        data/loki-profile.ts
 *  Content pillars                     data/content-pillars.ts
 *  New collaborations / portfolio      data/portfolio.ts
 *  Portfolio videos & thumbnails       data/portfolio.ts
 *  Brand collaborations & logos        data/brands.ts
 *  Performance metrics (big numbers)   data/performance.ts
 *  Follower numbers & audience stats   data/audience.ts
 *  Collaboration services              data/collaborations.ts
 *
 *  Image files go in  /public/images   (logos in /public/logos,
 *  videos in /public/videos). Reference them starting with "/",
 *  e.g. "/images/loki-hero.jpg".
 * ============================================================
 */

export * from "./site"
export * from "./photos"
export * from "./loki-profile"
export * from "./content-pillars"
export * from "./portfolio"
export * from "./brands"
export * from "./performance"
export * from "./audience"
export * from "./collaborations"
