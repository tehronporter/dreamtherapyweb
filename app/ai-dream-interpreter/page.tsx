import { AppIntentPage } from "@/components/app-intent-page";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata(
  "AI Dream Interpreter for iPhone",
  "Use DreamTherapy as a calm AI dream interpreter for iPhone, with private dream journaling, symbol reflection, and emotionally intelligent guidance.",
  "/ai-dream-interpreter",
  ["AI dream interpreter", "dream interpretation app", "dream meaning"],
);

export default function AIDreamInterpreterPage() {
  return (
    <AppIntentPage
      href="/ai-dream-interpreter"
      eyebrow="AI dream interpreter"
      title="AI dream interpretation that stays reflective."
      description="DreamTherapy helps you explore dream symbols, moods, and patterns without turning the dream into a fixed verdict. Save the dream, reflect on what it may suggest, and return to the pattern over time."
      features={[
        {
          title: "Symbol-aware reflection",
          text: "Explore images like water, snakes, houses, teeth, and mirrors through emotional context rather than one-size-fits-all definitions.",
        },
        {
          title: "Calm interpretation language",
          text: "DreamTherapy is built around possibility, reflection, and personal meaning. It avoids fear-based certainty and dramatic claims.",
        },
        {
          title: "Designed for private journaling",
          text: "Interpretation works best when paired with a dream record. Keep dreams in one place and revisit how themes evolve.",
        },
      ]}
      faqs={[
        {
          question: "Is DreamTherapy a dream dictionary?",
          answer:
            "It includes symbolic guidance, but the focus is personal reflection, emotional context, and patterns over time.",
        },
        {
          question: "Does AI dream interpretation replace therapy?",
          answer:
            "No. DreamTherapy is for journaling and reflection, not diagnosis, treatment, or emergency support.",
        },
      ]}
      ctaTitle="Reflect on your dreams with AI that stays honest."
      ctaText="DreamTherapy offers symbolic possibilities, not fixed verdicts. Private journaling. Calm interpretation. No account required. Free to download on iPhone."
    />
  );
}
