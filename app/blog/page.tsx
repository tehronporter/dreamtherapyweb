import { ContentHub } from "@/components/content-hub";
import { buildMetadata } from "@/lib/site";
import { getCollection, hubContent } from "@/src/content";

export const metadata = buildMetadata(
  "Dream Interpretation Blog",
  "Read thoughtful essays on dream meaning, AI dream interpretation, nightmares, dream symbols, and dream journaling.",
  "/blog",
  ["dream blog", "dream interpretation", "dream journaling"],
);

export default function BlogPage() {
  return (
    <ContentHub
      category="blog"
      {...hubContent.blog}
      items={getCollection("blog")}
      featuredHref="/blog/what-dreams-may-mean"
    />
  );
}
