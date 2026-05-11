import { AppIntentPage } from "@/components/app-intent-page";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata(
  "Dream Tracker App for iPhone",
  "DreamTherapy is a dream tracker app for iPhone that helps you log dreams, recognize recurring patterns, and understand your emotional sleep life over time.",
  "/dream-tracker-app",
  ["dream tracker app", "dream tracking app", "track dreams app"],
);

export default function DreamTrackerAppPage() {
  return (
    <AppIntentPage
      href="/dream-tracker-app"
      eyebrow="Dream tracker app"
      title="Track your dreams. Notice what keeps returning."
      description="A single dream is a moment. A saved record of many dreams is a pattern. DreamTherapy gives you a private iPhone app to log each dream and watch themes, symbols, and emotional states accumulate into something genuinely meaningful."
      features={[
        {
          title: "Log every dream, not just the vivid ones",
          text: "Even fragments matter when tracked over time. DreamTherapy makes it easy to capture what you remember — however much or little that is — after each night.",
        },
        {
          title: "Watch patterns emerge",
          text: "Recurring symbols, emotional tones, settings, and figures reveal themselves over weeks and months. A consistent log makes these patterns visible rather than invisible.",
        },
        {
          title: "Reflective, not clinical",
          text: "DreamTherapy tracks your dreams with emotional care rather than raw data. The focus is on meaning, not metrics — on what keeps returning and why it might matter.",
        },
      ]}
      faqs={[
        {
          question: "What should I track in a dream log?",
          answer:
            "Start with the core details: the setting, strongest image, strongest emotion, key figures, and any waking-life connection you notice. Over time, even simple entries reveal patterns that a mental memory cannot hold.",
        },
        {
          question: "How long before I start seeing patterns?",
          answer:
            "Many people begin noticing recurring symbols or emotional themes within two to four weeks of consistent journaling. The longer the log, the richer the pattern — but insight often comes sooner than expected.",
        },
        {
          question: "Is DreamTherapy different from a notes app?",
          answer:
            "Yes. DreamTherapy is designed specifically for dreams — with AI reflection, symbolic guidance, and a structure built around the emotional and psychological dimensions of dream experience, not just raw text storage.",
        },
      ]}
      ctaTitle="Start tracking. Start noticing."
      ctaText="DreamTherapy is a private dream tracker and journal for iPhone. Log dreams consistently, watch what returns, and build a reflective record that grows more meaningful over time. Free to download."
    />
  );
}
