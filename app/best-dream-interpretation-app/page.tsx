import { AppIntentPage } from "@/components/app-intent-page";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata(
  "Best Dream Interpretation App for iPhone",
  "DreamTherapy is a premium iPhone dream interpretation app for calm reflection, private journaling, emotional symbolism, and recurring dream insight.",
  "/best-dream-interpretation-app",
  ["best dream interpretation app", "dream app", "AI dream app"],
);

export default function BestDreamInterpretationAppPage() {
  return (
    <AppIntentPage
      href="/best-dream-interpretation-app"
      eyebrow="Dream interpretation app"
      title="A premium dream app for reflection, not noise."
      description="The best dream interpretation experience should feel personal, calm, and useful. DreamTherapy combines private journaling with thoughtful interpretation so symbols become part of a longer emotional pattern."
      features={[
        {
          title: "Built around your journal",
          text: "A single dream can matter, but a saved history reveals what returns. DreamTherapy treats interpretation as an ongoing practice.",
        },
        {
          title: "Premium, iPhone-first design",
          text: "The interface is intentionally restrained so the focus stays on the dream, the feeling, and the meaning you are exploring.",
        },
        {
          title: "Emotionally intelligent AI",
          text: "Interpretations are framed as possibilities, using grounded language that supports reflection without overclaiming.",
        },
      ]}
      faqs={[
        {
          question: "What makes a good dream interpretation app?",
          answer:
            "A good dream app should help you record details, notice patterns, and reflect with nuance instead of giving rigid definitions.",
        },
        {
          question: "Is DreamTherapy only for AI interpretation?",
          answer:
            "No. DreamTherapy is also a dream journal and reflection space, with AI as one layer of support.",
        },
      ]}
      ctaTitle="The dream app built for serious reflection."
      ctaText="DreamTherapy is a private journal, AI reflection tool, and pattern tracker in one calm iPhone app. Premium design. Emotionally intelligent. Free to download."
    />
  );
}
