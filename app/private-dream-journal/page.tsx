import { AppIntentPage } from "@/components/app-intent-page";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata(
  "Private Dream Journal App for iPhone",
  "DreamTherapy is a private dream journal for iPhone — no account required, no sharing, no social features. A quiet, secure space for your dreams and your reflection.",
  "/private-dream-journal",
  ["private dream journal", "private dream journal app", "secure dream journal"],
);

export default function PrivateDreamJournalPage() {
  return (
    <AppIntentPage
      href="/private-dream-journal"
      eyebrow="Private dream journal"
      title="Your dreams stay yours."
      description="DreamTherapy is a private dream journal built for iPhone. No account required. No sharing. No feeds. Just a quiet, secure space to record what you dream, reflect on what it might mean, and return to it whenever you are ready."
      features={[
        {
          title: "No account required",
          text: "Start journaling immediately. DreamTherapy does not require an account, email, or sign-in — your dreams live on your device, not on a server.",
        },
        {
          title: "No social features",
          text: "There is nothing to share, post, or compare. DreamTherapy is designed for private reflection, not public performance.",
        },
        {
          title: "A space that stays quiet",
          text: "No notifications pushing you to engage. No feeds, no rankings, no gamification. A calm, minimal space where your inner life is the only focus.",
        },
      ]}
      faqs={[
        {
          question: "Is DreamTherapy truly private?",
          answer:
            "DreamTherapy is designed with privacy as a core value. No account is required to use the app, and dream entries are stored privately on your device. Dreams are personal — the app is built to reflect that.",
        },
        {
          question: "Why does privacy matter for a dream journal?",
          answer:
            "Dreams often surface deeply personal material — fears, relationships, memories, grief. A journal that feels genuinely private creates the safety to record honestly, which makes reflection much more useful. If you are worried about who might see your entries, you will censor yourself.",
        },
        {
          question: "Can I export or back up my dream entries?",
          answer:
            "DreamTherapy is built for private on-device journaling. The app is focused on creating a safe, minimal space for reflection rather than cloud sync or sharing features.",
        },
      ]}
      ctaTitle="A private journal for your most private experiences."
      ctaText="DreamTherapy keeps your dreams between you and you. No account. No sharing. No noise. Just a calm, private iPhone app for recording dreams and reflecting on what they might mean. Free to download."
    />
  );
}
