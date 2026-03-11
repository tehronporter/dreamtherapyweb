import { LegalPage } from "@/components/legal-page";
import { buildMetadata, privacySections, siteConfig } from "@/lib/site";

export const metadata = buildMetadata(
  "Privacy Policy",
  "Read the DreamTherapy Privacy Policy for an overview of how information may be collected, used, and handled.",
  "/privacy",
);

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title="Privacy Policy"
      intro="This page explains, in plain language, how DreamTherapy may collect, use, and handle information associated with the app and this website."
    >
      {privacySections.map((section) => (
        <section key={section.title}>
          <h2>{section.title}</h2>
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {section.bullets ? (
            <ul>
              {section.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
      <section>
        <h2>Contact details</h2>
        <p>
          You can contact DreamTherapy about privacy matters at{" "}
          <a className="text-link" href={`mailto:${siteConfig.supportEmail}`}>
            {siteConfig.supportEmail}
          </a>
          .
        </p>
      </section>
    </LegalPage>
  );
}
