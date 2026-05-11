import { ContentHub } from "@/components/content-hub";
import { buildMetadata } from "@/lib/site";
import { getCollection, hubContent } from "@/src/content";

export const metadata = buildMetadata(
  "Dream Meanings: 15 Common Dreams, Interpreted Calmly",
  "Explore 15 common dream meanings, from snakes and teeth falling out to flying, water, pregnancy, and recurring chase dreams.",
  "/dream-meanings",
  ["dream meanings", "dream interpretation", "dream symbols"],
);

export default function DreamMeaningsPage() {
  return (
    <ContentHub
      category="dream-meanings"
      {...hubContent["dream-meanings"]}
      items={getCollection("dream-meanings")}
      featuredHref="/dream-meanings/snake-dream-meaning"
    />
  );
}
