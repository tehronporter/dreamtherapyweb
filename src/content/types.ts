export type SEOContentCategory =
  | "dream-meanings"
  | "symbols"
  | "guides"
  | "blog"
  | "nightmares";

export type SEOContentSection = {
  heading: string;
  body: string;
};

export type SEOContentFAQ = {
  question: string;
  answer: string;
};

export type SEOContentItem = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  quickAnswer: string;
  showApproachNote?: boolean;
  sections: SEOContentSection[];
  faqs: SEOContentFAQ[];
  relatedSlugs: string[];
  keywords: string[];
  lastUpdated: string;
};

export type CategorizedSEOContentItem = SEOContentItem & {
  category: SEOContentCategory;
  href: string;
  label: string;
};

export type RelatedContentItem = {
  category: SEOContentCategory | "app-pages";
  href: string;
  h1: string;
  description: string;
  label: string;
};
