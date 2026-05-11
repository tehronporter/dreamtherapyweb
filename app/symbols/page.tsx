import { ContentHub } from "@/components/content-hub";
import { buildMetadata } from "@/lib/site";
import { getCollection, hubContent } from "@/src/content";

export const metadata = buildMetadata(
  "Dream Symbols Guide",
  "Browse DreamTherapy's calm guide to dream symbols like water, snakes, houses, mirrors, teeth, ocean, dogs, cats, and birds.",
  "/symbols",
  ["dream symbols", "dream dictionary", "symbolism"],
);

export default function SymbolsPage() {
  return (
    <ContentHub
      category="symbols"
      {...hubContent.symbols}
      items={getCollection("symbols")}
      featuredHref="/symbols/water"
    />
  );
}
