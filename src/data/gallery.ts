import type { GalleryImage } from "@/types";
import { siteImages } from "@/data/images";

export const galleryCategories = [
  "All",
  "Carpet",
  "Rug",
  "Upholstery",
  "Mattress",
  "Commercial",
  "Epoxy",
  "Before & After",
] as const;

export const galleryImages: GalleryImage[] = [
  { id: "g1", src: siteImages.gallery.carpet1, alt: "Freshly cleaned living room carpet", caption: "Residential carpet deep clean", category: "Carpet" },
  { id: "g2", src: siteImages.gallery.carpet2, alt: "Steam carpet cleaning in progress", caption: "Professional steam extraction", category: "Carpet" },
  { id: "g3", src: siteImages.gallery.rug, alt: "Clean area rug in modern interior", caption: "Area rug restoration", category: "Rug" },
  { id: "g4", src: siteImages.gallery.upholstery, alt: "Clean sofa in living room", caption: "Sofa & upholstery cleaning", category: "Upholstery" },
  { id: "g5", src: siteImages.gallery.mattress, alt: "Fresh clean bedroom mattress", caption: "Mattress steam cleaning", category: "Mattress" },
  { id: "g6", src: siteImages.gallery.commercial, alt: "Commercial office space carpet", caption: "Office carpet maintenance", category: "Commercial" },
  { id: "g7", src: siteImages.gallery.epoxy1, alt: "Epoxy coated garage floor", caption: "Garage epoxy flooring", category: "Epoxy" },
  { id: "g8", src: siteImages.gallery.epoxy2, alt: "Modern epoxy basement floor", caption: "Basement epoxy finish", category: "Epoxy" },
  { id: "ba1", src: siteImages.gallery.before, alt: "Room before professional cleaning", caption: "Before professional cleaning", category: "Before & After", beforeAfter: true },
  { id: "ba2", src: siteImages.gallery.after, alt: "Room after professional cleaning", caption: "After professional cleaning", category: "Before & After", beforeAfter: true },
];

export const beforeAfterItems = galleryImages.filter((i) => i.beforeAfter);
