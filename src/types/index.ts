export interface ImageAsset {
  src: string;
  alt: string;
  caption?: string;
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  category: string;
  image: ImageAsset;
  heroTitle: string;
  introduction: string;
  environments: string[];
  benefits: string[];
  process: string[];
  preparation: string[];
  faqs: { question: string; answer: string }[];
}

export interface FAQ {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  service: string;
  location: string;
  quote: string;
  image?: ImageAsset;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: string;
  beforeAfter?: boolean;
  placeholder?: boolean;
}
