import { ContentHub } from "@/components/content-hub";
import { buildMetadata } from "@/lib/site";
import { getCollection, hubContent } from "@/src/content";

export const metadata = buildMetadata(
  "Nightmare Meanings And Stress Dreams",
  "Explore calm, non-sensational guidance for nightmares, stress dreams, recurring difficult dreams, and reflective interpretation.",
  "/nightmares",
  ["nightmares", "stress dreams", "nightmare meaning"],
);

export default function NightmaresPage() {
  return (
    <ContentHub
      category="nightmares"
      {...hubContent.nightmares}
      items={getCollection("nightmares")}
      featuredHref="/nightmares/nightmares"
    />
  );
}
