import { AppIntentPage } from "@/components/app-intent-page";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata(
  "Dream Journal App for iPhone",
  "DreamTherapy is a private dream journal app for iPhone for saving dreams, noticing patterns, and reflecting on meaning over time.",
  "/dream-journal-app",
  ["dream journal app", "dream journaling", "dream tracker"],
);

export default function DreamJournalAppPage() {
  return (
    <AppIntentPage
      href="/dream-journal-app"
      eyebrow="Dream journal app"
      title="A quieter place to keep your dreams."
      description="DreamTherapy gives your dreams a private home on iPhone, with space to save entries, revisit symbols, and notice the emotional patterns that return over time."
      features={[
        {
          title: "Save dreams before they fade",
          text: "Capture the setting, symbols, people, and emotional tone while the dream is still close.",
        },
        {
          title: "Notice recurring themes",
          text: "A journal becomes more meaningful as patterns accumulate across dreams, moods, and symbols.",
        },
        {
          title: "Reflect without noise",
          text: "The experience is designed to feel calm, minimal, and emotionally careful rather than cluttered or sensational.",
        },
      ]}
      faqs={[
        {
          question: "What should I write in a dream journal?",
          answer:
            "Start with the title, strongest image, strongest emotion, setting, people, and any waking-life connection.",
        },
        {
          question: "Can DreamTherapy help with recurring dreams?",
          answer:
            "It can help you save and revisit recurring themes so patterns become easier to notice over time.",
        },
      ]}
      ctaTitle="Your dreams deserve a private space."
      ctaText="Start your dream journal on iPhone today. Capture what you remember, revisit what keeps returning, and build a reflective practice that grows over time. Free to download."
    />
  );
}
