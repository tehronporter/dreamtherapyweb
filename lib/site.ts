import type { Metadata } from "next";

export const siteConfig = {
  name: "DreamTherapy",
  shortName: "DreamTherapy",
  description:
    "A private place to record dreams, revisit them over time, and reflect with thoughtful AI guidance.",
  url: "https://dreamtherapy.app",
  ogImage: "/images/oldreambuddy01.png",
  supportEmail: "dreamtherapyapp@gmail.com",
  lastUpdated: "March 10, 2026",
  navLinks: [
    { href: "/", label: "Home" },
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
    { href: "/support", label: "Support" },
  ],
  footerLinks: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Use" },
    { href: "/support", label: "Support" },
    { href: "/delete-account", label: "Delete Account" },
  ],
};

export const homeContent = {
  hero: {
    eyebrow: "Private dream journaling",
    titleLead: "Your Dreams Carry",
    titleEmphasis: "Meaning.",
    titleEnd: "We're Here to Help You Listen.",
    description:
      "DreamTherapy gently decodes the moods, symbols, and patterns in your dreams — especially for those processing trauma, grief, or deep emotional shifts.",
    primaryCta: "Join the waitlist",
    availabilityNote: "App Store coming soon",
    orbit: "DreamChat · DreamBook · DreamCircle",
  },
  features: {
    eyebrow: "Feature architecture",
    title: "The DreamTherapy Flow",
    description:
      "A daily rhythm of dreaming, interpreting, and reflecting.",
    items: [
      {
        name: "DreamChat",
        summary: "A conversational reflection layer for sitting with a dream a little longer.",
        detail:
          "Use guided AI dialogue to explore symbols, moods, and possible meanings without turning the experience into a chatbot gimmick.",
        accent: "Interpret moods, symbols, and patterns",
      },
      {
        name: "DreamBook",
        summary: "Your private archive of dreams, patterns, and returning details.",
        detail:
          "Save entries, revisit them over time, and notice the imagery or themes that keep finding their way back.",
        accent: "Dream in your own words",
      },
      {
        name: "DreamCircle",
        summary: "A more open space for shared dream themes and collective reflection.",
        detail:
          "Explore the broader conversation around dreaming in a way that feels careful, anonymous, and grounded rather than performative.",
        accent: "Reflect on what returns over time",
      },
    ],
  },
  trust: {
    eyebrow: "Designed with care",
    title: "Dream content can feel deeply personal.",
    description:
      "DreamTherapy is built for reflection, not performance. We describe our privacy practices clearly, keep our language careful, and avoid claims we cannot stand behind.",
  },
  support: {
    eyebrow: "Support and legal",
    title: "Support, privacy, and account help stay close at hand.",
    description:
      "The launch surface stays minimal, but the important public paths remain easy to reach before and after release.",
  },
};

export type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export const privacySections: LegalSection[] = [
  {
    title: "Introduction",
    paragraphs: [
      "DreamTherapy is a journaling and reflection app designed to help you record dreams, revisit them over time, and explore them through optional AI-assisted reflection. This Privacy Policy explains how information may be collected, used, and handled when you use the app or contact us through this website.",
      "Dream content can feel personal. Our goal is to be transparent about the categories of information that may be involved in providing DreamTherapy while avoiding claims that go beyond the product’s actual behavior.",
    ],
  },
  {
    title: "Information we may collect",
    paragraphs: [
      "Depending on how you use DreamTherapy, we may collect or receive the following categories of information:",
    ],
    bullets: [
      "Account information, such as your email address, when you create or manage an account.",
      "Dream entries, journal text, titles, tags, or similar content you choose to save in the app.",
      "Voice recordings or audio input if DreamTherapy offers voice-based dream capture or transcription features.",
      "Usage, diagnostics, and device information that helps us understand app performance, reliability, and feature usage.",
      "Purchase or subscription information when premium features, in-app purchases, or subscription management are applicable.",
      "Support messages and related details when you contact us for help or submit a request.",
    ],
  },
  {
    title: "How information may be used",
    bullets: [
      "To provide, maintain, and improve DreamTherapy.",
      "To save, organize, and display your dream journal content.",
      "To generate AI-assisted reflections when you choose to use those features.",
      "To support authentication, account management, and subscription status when applicable.",
      "To monitor performance, troubleshoot issues, and improve reliability.",
      "To respond to support requests, privacy inquiries, and account-related questions.",
      "To comply with legal obligations and enforce our terms when necessary.",
    ],
  },
  {
    title: "AI processing",
    paragraphs: [
      "If you submit dream content for AI-assisted reflection, that content may be processed by systems used to generate those responses. AI-generated reflections are provided for informational and reflective purposes only.",
      "Unless we clearly state otherwise at the point of use, you should not assume that AI-related processing is used to train public models, and you should not rely on DreamTherapy for medical, psychological, or crisis support.",
    ],
  },
  {
    title: "Sharing and service providers",
    paragraphs: [
      "DreamTherapy may rely on third-party service providers to help operate the app and website. These providers may support infrastructure hosting, analytics, subscription management, communications, and AI-related processing.",
      "We may share information with service providers only as reasonably necessary to operate, secure, support, or improve DreamTherapy, or as otherwise required by law.",
    ],
  },
  {
    title: "Data retention",
    paragraphs: [
      "We may retain information for as long as reasonably necessary to provide DreamTherapy, maintain your account, resolve disputes, comply with legal obligations, and enforce our agreements.",
      "Retention periods can vary depending on the type of information involved, whether you actively use the service, and whether certain records must be kept for operational, legal, or security reasons.",
    ],
  },
  {
    title: "Your choices",
    bullets: [
      "You may be able to access, update, or correct certain account details in the app.",
      "You may delete individual dream entries or other saved content when those controls are available.",
      "You can manage notifications through your device settings when reminders or alerts are enabled.",
      "You can contact support to request account deletion or ask questions about your data.",
    ],
  },
  {
    title: "Security",
    paragraphs: [
      "We use reasonable administrative, technical, and organizational measures intended to protect information associated with DreamTherapy. However, no method of transmission, storage, or security control can guarantee absolute security.",
    ],
  },
  {
    title: "Children’s privacy",
    paragraphs: [
      "DreamTherapy is not intended for children under the age required by applicable law to use the service. If you believe a child has provided personal information inappropriately, please contact us so we can review the situation.",
    ],
  },
  {
    title: "Changes to this policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. When we do, we will update the Last Updated date on this page and may take additional steps when required by law or appropriate for the change.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      `For privacy questions, support needs, or account-related requests, contact us at ${siteConfig.supportEmail}.`,
    ],
  },
];

export const termsSections: LegalSection[] = [
  {
    title: "Acceptance of terms",
    paragraphs: [
      "By accessing or using DreamTherapy, you agree to these Terms of Use. If you do not agree to these terms, do not use the service.",
    ],
  },
  {
    title: "Eligibility",
    paragraphs: [
      "You may use DreamTherapy only if you are legally able to enter into a binding agreement and meet any minimum age requirements that apply where you live.",
    ],
  },
  {
    title: "Accounts",
    paragraphs: [
      "If DreamTherapy requires an account, you are responsible for providing accurate information, maintaining the confidentiality of your credentials, and taking reasonable steps to secure access to your account.",
    ],
  },
  {
    title: "Acceptable use",
    bullets: [
      "Use DreamTherapy only for lawful purposes and in compliance with applicable rules and platform requirements.",
      "Do not misuse the service, interfere with its operation, or attempt to access systems or data you are not authorized to access.",
      "Do not submit content that infringes another person’s rights or violates applicable law.",
    ],
  },
  {
    title: "Subscriptions and purchases",
    paragraphs: [
      "Some DreamTherapy features may require a paid subscription or in-app purchase. When applicable, pricing, billing, renewal, and cancellation will be presented at the point of purchase and may also be governed by Apple’s App Store terms.",
    ],
  },
  {
    title: "Intellectual property",
    paragraphs: [
      "DreamTherapy, including its software, design, branding, and related content, is protected by intellectual property laws. Except for rights granted to you to use the service, all rights remain reserved.",
    ],
  },
  {
    title: "Reflective use only",
    paragraphs: [
      "DreamTherapy is offered as a journaling and reflective product. It is not a medical device, mental health service, diagnostic tool, or substitute for therapy, counseling, or emergency assistance.",
      "AI-generated reflections are informational only and may be incomplete, inaccurate, or not appropriate for your situation.",
    ],
  },
  {
    title: "Disclaimers",
    paragraphs: [
      "DreamTherapy is provided on an \"as is\" and \"as available\" basis to the extent permitted by law. We do not guarantee uninterrupted availability, error-free operation, or that the service will meet every expectation or use case.",
    ],
  },
  {
    title: "Limitation of liability",
    paragraphs: [
      "To the fullest extent permitted by law, DreamTherapy and its operators will not be liable for indirect, incidental, special, consequential, or punitive damages, or for loss of data, profits, or goodwill arising from your use of the service.",
    ],
  },
  {
    title: "Termination",
    paragraphs: [
      "We may suspend or terminate access to DreamTherapy if reasonably necessary to protect the service, comply with legal obligations, or address misuse. You may stop using the service at any time.",
    ],
  },
  {
    title: "Changes to these terms",
    paragraphs: [
      "We may update these Terms of Use from time to time. Continued use of DreamTherapy after updated terms take effect means you accept the revised terms.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      `Questions about these terms can be sent to ${siteConfig.supportEmail}.`,
    ],
  },
];

export const supportTopics = [
  {
    title: "General support",
    description:
      "If you need help using DreamTherapy, have trouble accessing your account, or want to report a problem, email us and include any helpful screenshots or details.",
  },
  {
    title: "Privacy questions",
    description:
      "If your question is about privacy, data handling, or account deletion, contact us from the email associated with your account when possible so we can review the request more efficiently.",
  },
  {
    title: "Billing and subscriptions",
    description:
      "Billing and subscription details will be shared when DreamTherapy launches. For now, contact us with waitlist, product, or access questions.",
  },
];

export const deleteAccountSteps = [
  "Email the support address listed below from the account you use with DreamTherapy, if possible.",
  "Use the subject line “Account Deletion Request” so we can route the request quickly.",
  "Include enough information for us to identify your account and reply if we need clarification.",
  "If you are contacting us from a different email address, note that additional verification may be required before we can act on the request.",
];

export function buildMetadata(
  title: string,
  description: string,
  path = "/",
): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`;
  const absoluteUrl = new URL(path, siteConfig.url).toString();
  const imageUrl = new URL(siteConfig.ogImage, siteConfig.url).toString();

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      title: fullTitle,
      description,
      url: absoluteUrl,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1536,
          height: 1024,
          alt: `${siteConfig.name} social preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
  };
}
