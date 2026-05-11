import { ContentHub } from "@/components/content-hub";
import { buildMetadata } from "@/lib/site";
import { getCollection, hubContent } from "@/src/content";

export const metadata = buildMetadata(
  "Dream Interpretation Guides",
  "Read grounded guides on why we dream, recurring dreams, dream journaling, Jungian dream analysis, and how to remember dreams.",
  "/guides",
  ["dream guides", "dream journaling", "recurring dreams"],
);

export default function GuidesPage() {
  return (
    <ContentHub
      category="guides"
      {...hubContent.guides}
      items={getCollection("guides")}
      featuredHref="/guides/why-we-dream"
    />
  );
}
