import { blogPosts } from "./blogPosts";
import { dreamMeanings } from "./dreamMeanings";
import { guides } from "./guides";
import { nightmares } from "./nightmares";
import { symbols } from "./symbols";
import type {
  CategorizedSEOContentItem,
  RelatedContentItem,
  SEOContentCategory,
  SEOContentItem,
} from "./types";

export { blogPosts, dreamMeanings, guides, nightmares, symbols };
export type {
  CategorizedSEOContentItem,
  RelatedContentItem,
  SEOContentCategory,
  SEOContentFAQ,
  SEOContentItem,
  SEOContentSection,
} from "./types";

export const contentCollections: Record<SEOContentCategory, SEOContentItem[]> = {
  "dream-meanings": dreamMeanings,
  symbols,
  guides,
  blog: blogPosts,
  nightmares,
};

export const categoryLabels: Record<SEOContentCategory, string> = {
  "dream-meanings": "Dream Meaning",
  symbols: "Dream Symbol",
  guides: "Guide",
  blog: "Article",
  nightmares: "Nightmare Guide",
};

export const categoryHrefs: Record<SEOContentCategory, string> = {
  "dream-meanings": "/dream-meanings",
  symbols: "/symbols",
  guides: "/guides",
  blog: "/blog",
  nightmares: "/nightmares",
};

export const hubContent: Record<
  SEOContentCategory,
  {
    eyebrow: string;
    title: string;
    description: string;
  }
> = {
  "dream-meanings": {
    eyebrow: "Dream meanings",
    title: "Dream meanings, interpreted with more calm and context.",
    description:
      "Explore common dream themes through psychology, emotion, symbolism, and reflection without fear-based certainty.",
  },
  symbols: {
    eyebrow: "Dream symbols",
    title: "Dream symbols, explained with emotional context.",
    description:
      "Browse recurring dream symbols and reflect on how images like water, houses, mirrors, and animals may carry emotional meaning.",
  },
  guides: {
    eyebrow: "Guides",
    title: "Guides for dream reflection, journaling, and interpretation.",
    description:
      "Learn how to remember dreams, journal them, notice patterns, and approach symbolism with care.",
  },
  blog: {
    eyebrow: "Blog",
    title: "Thoughtful essays on dreams, symbols, and reflection.",
    description:
      "Substantial guides for dream interpretation, AI reflection, recurring patterns, nightmares, and dream journaling.",
  },
  nightmares: {
    eyebrow: "Nightmares",
    title: "A gentler way to understand nightmares and stress dreams.",
    description:
      "Reflect on nightmares and stress dreams without sensational claims or fear-based interpretation.",
  },
};

export function withCategory(
  item: SEOContentItem,
  category: SEOContentCategory,
): CategorizedSEOContentItem {
  return {
    ...item,
    category,
    href: `${categoryHrefs[category]}/${item.slug}`,
    label: categoryLabels[category],
  };
}

export function getCollection(category: SEOContentCategory) {
  return contentCollections[category].map((item) => withCategory(item, category));
}

export function getAllContent() {
  return (Object.keys(contentCollections) as SEOContentCategory[]).flatMap(
    (category) => getCollection(category),
  );
}

export function getContentItem(category: SEOContentCategory, slug: string) {
  const item = contentCollections[category].find((entry) => entry.slug === slug);
  return item ? withCategory(item, category) : null;
}

export function getRelatedContent(
  item: CategorizedSEOContentItem,
  limit = 4,
): RelatedContentItem[] {
  const allContent = getAllContent().filter((entry) => entry.slug !== item.slug);
  const appEntries = getAppIntentEntries();
  const appEntryBySlug = new Map(
    appIntentPages.map((page) => [
      page.slug,
      {
        category: "app-pages" as const,
        href: page.href,
        h1: page.h1,
        description: page.description,
        label: page.label,
      },
    ]),
  );
  const explicit = item.relatedSlugs.reduce<RelatedContentItem[]>(
    (items, slug) => {
      const entry =
        allContent.find((contentItem) => contentItem.slug === slug) ??
        appEntryBySlug.get(slug);

      if (entry) {
        items.push(entry);
      }

      return items;
    },
    [],
  );

  const explicitHrefs = new Set(explicit.map((entry) => entry.href));
  const keywordMatches = allContent
    .filter((entry) => !explicitHrefs.has(entry.href))
    .map((entry) => {
      const score = entry.keywords.filter((keyword) =>
        item.keywords.includes(keyword),
      ).length;
      return { entry, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ entry }) => entry);

  const inferredAppEntries = appEntries.filter(
    (entry) => !explicitHrefs.has(entry.href),
  );

  // Build candidate list: explicit links + keyword matches + app entries
  const candidates = [...explicit, ...keywordMatches, ...inferredAppEntries];

  // Guarantee at least one app entry appears in related content
  const hasAppEntry = candidates
    .slice(0, limit)
    .some((entry) => "category" in entry && entry.category === "app-pages");

  if (!hasAppEntry && inferredAppEntries.length > 0) {
    const nonApp = candidates
      .filter(
        (entry) => !("category" in entry && entry.category === "app-pages"),
      )
      .slice(0, limit - 1);
    return [...nonApp, inferredAppEntries[0]];
  }

  return candidates.slice(0, limit);
}

export const appIntentPages = [
  {
    slug: "ai-dream-interpreter",
    href: "/ai-dream-interpreter",
    title: "AI Dream Interpreter",
    h1: "AI Dream Interpreter for Calm Reflection",
    label: "App Page",
    description:
      "A calm way to explore dream symbols, moods, and patterns with reflective AI support.",
    lastUpdated: "2026-05-10",
  },
  {
    slug: "dream-journal-app",
    href: "/dream-journal-app",
    title: "Dream Journal App",
    h1: "Dream Journal App for iPhone",
    label: "App Page",
    description:
      "Save dreams privately, revisit patterns, and build a reflective journaling habit on iPhone.",
    lastUpdated: "2026-05-10",
  },
  {
    slug: "best-dream-interpretation-app",
    href: "/best-dream-interpretation-app",
    title: "Best Dream Interpretation App",
    h1: "A Premium Dream Interpretation App",
    label: "App Page",
    description:
      "A premium iPhone app for dream journaling, personal reflection, and thoughtful interpretation.",
    lastUpdated: "2026-05-10",
  },
  {
    slug: "lucid-dreaming-app",
    href: "/lucid-dreaming-app",
    title: "Lucid Dreaming App",
    h1: "The Journal Behind Your Lucid Dreaming Practice",
    label: "App Page",
    description:
      "Build dream recall, discover your personal dream signs, and develop the awareness that lucid dreaming depends on.",
    lastUpdated: "2026-05-10",
  },
  {
    slug: "dream-tracker-app",
    href: "/dream-tracker-app",
    title: "Dream Tracker App",
    h1: "Track Your Dreams. Notice What Keeps Returning.",
    label: "App Page",
    description:
      "Log dreams consistently and watch themes, symbols, and emotional states accumulate into patterns that matter.",
    lastUpdated: "2026-05-10",
  },
  {
    slug: "private-dream-journal",
    href: "/private-dream-journal",
    title: "Private Dream Journal",
    h1: "Your Dreams Stay Yours",
    label: "App Page",
    description:
      "A private dream journal for iPhone. No account required. No sharing. A quiet, secure space for reflection.",
    lastUpdated: "2026-05-10",
  },
];

export function getAppIntentEntries(): RelatedContentItem[] {
  return appIntentPages.map((page) => ({
    category: "app-pages",
    href: page.href,
    h1: page.h1,
    description: page.description,
    label: page.label,
  }));
}
