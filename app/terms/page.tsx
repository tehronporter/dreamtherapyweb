import { LegalPage } from "@/components/legal-page";
import { buildMetadata, siteConfig, termsSections } from "@/lib/site";

export const metadata = buildMetadata(
  "Terms of Use",
  "Review the DreamTherapy Terms of Use, including acceptable use, purchases, disclaimers, and support contact details.",
  "/terms",
);

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms of Use"
      title="Terms of Use"
      intro="These terms describe the basic rules for using DreamTherapy and set expectations around accounts, purchases, acceptable use, and the reflective nature of the product."
    >
      {termsSections.map((section) => (
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
        <h2>Questions</h2>
        <p>
          Questions about these terms can be sent to{" "}
          <a className="text-link" href={`mailto:${siteConfig.supportEmail}`}>
            {siteConfig.supportEmail}
          </a>
          .
        </p>
      </section>
    </LegalPage>
  );
}
