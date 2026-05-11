import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";
import { appIntentPages, getAllContent } from "@/src/content";

const staticPages = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/dream-meanings", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/symbols", priority: 0.85, changeFrequency: "weekly" as const },
  { path: "/guides", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/nightmares", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/privacy", priority: 0.4, changeFrequency: "yearly" as const },
  { path: "/terms", priority: 0.4, changeFrequency: "yearly" as const },
  { path: "/support", priority: 0.4, changeFrequency: "monthly" as const },
  { path: "/delete-account", priority: 0.3, changeFrequency: "yearly" as const },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const contentEntries = getAllContent().map((item) => ({
    url: new URL(item.href, siteConfig.url).toString(),
    lastModified: item.lastUpdated,
    changeFrequency:
      item.category === "blog" || item.category === "dream-meanings"
        ? ("weekly" as const)
        : ("monthly" as const),
    priority: item.category === "dream-meanings" ? 0.82 : 0.72,
  }));

  const appEntries = appIntentPages.map((page) => ({
    url: new URL(page.href, siteConfig.url).toString(),
    lastModified: page.lastUpdated,
    changeFrequency: "weekly" as const,
    priority: 0.86,
  }));

  const staticEntries = staticPages.map((page) => ({
    url: new URL(page.path, siteConfig.url).toString(),
    lastModified: "2026-05-10",
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  return [...staticEntries, ...appEntries, ...contentEntries];
}
