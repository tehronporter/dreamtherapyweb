import { AppIntentPage } from "@/components/app-intent-page";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata(
  "Lucid Dreaming App for iPhone",
  "DreamTherapy supports your lucid dreaming practice with private dream journaling, pattern tracking, and reflective AI — the foundation every lucid dreamer needs.",
  "/lucid-dreaming-app",
  ["lucid dreaming app", "lucid dream journal", "lucid dreaming tracker"],
);

export default function LucidDreamingAppPage() {
  return (
    <AppIntentPage
      href="/lucid-dreaming-app"
      eyebrow="Lucid dreaming app"
      title="The journal behind your lucid dreaming practice."
      description="Lucid dreaming starts with dream recall. DreamTherapy gives you a private, structured space to record dreams, notice recurring patterns, and build the awareness that makes lucid dreaming more accessible over time."
      features={[
        {
          title: "Build dream recall first",
          text: "Consistent journaling is the foundation of lucid dreaming. DreamTherapy makes it easy to capture each dream quickly after waking, before details fade.",
        },
        {
          title: "Spot patterns across dreams",
          text: "Recurring symbols, settings, and emotional themes are the raw material of lucid awareness. A saved journal helps you recognize your personal dream signs.",
        },
        {
          title: "Reflect, not just record",
          text: "DreamTherapy adds a reflective layer — not just a log, but a space to explore what each dream may mean as your practice deepens.",
        },
      ]}
      faqs={[
        {
          question: "How does journaling support lucid dreaming?",
          answer:
            "Dream journaling strengthens dream recall, which is the essential first step toward lucid dreaming. The more consistently you record your dreams, the more your brain learns to treat dreams as worth remembering — and the easier it becomes to notice when you are dreaming.",
        },
        {
          question: "Does DreamTherapy have lucid dreaming techniques?",
          answer:
            "DreamTherapy is focused on journaling, reflection, and pattern recognition rather than specific induction techniques. It supports the awareness side of lucid dreaming — knowing your dream signs, tracking your sleep rhythm, and building the recall habit that most techniques depend on.",
        },
        {
          question: "What is a dream sign and how do I find mine?",
          answer:
            "A dream sign is a recurring element — a person, setting, object, or emotional state — that appears consistently in your dreams. Recognizing one while dreaming is a common trigger for becoming lucid. A dream journal is the most reliable way to discover yours.",
        },
      ]}
      ctaTitle="Build the awareness that lucid dreaming requires."
      ctaText="DreamTherapy is a private dream journal and reflection app for iPhone. Start recording dreams consistently, notice what repeats, and develop the awareness your lucid dreaming practice depends on. Free to download."
    />
  );
}
