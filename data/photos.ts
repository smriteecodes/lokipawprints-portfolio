/**
 * ============================================================
 *  LOKI'S PHOTOS & FAMILY PHOTOS
 * ============================================================
 *  HOW TO SWAP A PHOTO:
 *   1. Put your new image in the  /public/images  folder
 *      (e.g. /public/images/loki-hero-new.jpg)
 *   2. Change the matching `src` below to "/images/loki-hero-new.jpg"
 *   3. Update the `alt` text so it describes the new photo
 *      (this is read aloud by screen readers and helps SEO)
 *
 *  Tip: .jpg or .webp files under ~500KB load fastest.
 * ============================================================
 */

export type Photo = { src: string; alt: string }

export const photos = {
  // ✏️ HERO — the big photo at the top of the page (portrait / 4:5 works best)
  hero: {
    src: "/images/loki-hero.png",
    alt: "Loki, an apricot Cavapoo with white markings, sitting on a cream sofa looking at the camera",
  },

  // ✏️ FAMILY PHOTO — "The humans behind the paws" (Loki with Mom and/or Dad)
  family: {
    src: "/images/loki-family.png",
    alt: "Loki at home with his humans, gazing adoringly at Dad",
  },

  // ✏️ MEET LOKI — three photos in the profile collage
  meetLoki: {
    portrait: {
      src: "/images/loki-portrait.png",
      alt: "Studio portrait of Loki with soulful eyes",
    },
    funny: {
      src: "/images/loki-sideeye.png",
      alt: "Loki delivering a dramatic side-eye",
    },
    action: {
      src: "/images/loki-action.png",
      alt: "Loki running through golden grass at a park",
    },
  },

  // ✏️ WORK WITH US — photo beside the collaboration section
  workWithUs: {
    src: "/images/loki-product.png",
    alt: "Loki inspecting a package next to a rope toy",
  },
} satisfies Record<string, Photo | Record<string, Photo>>
