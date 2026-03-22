import { CtaButton } from "@/components/cta-button";
import { buildMetadata, siteConfig, supportTopics } from "@/lib/site";

export const metadata = buildMetadata(
  "Support",
  "Find DreamTherapy support details, waitlist help, privacy guidance, and links to account and deletion requests.",
  "/support",
);

export default function SupportPage() {
  return (
    <main className="page">
      <div className="support-grid">
        <div style={{ maxWidth: "38rem" }}>
          <p className="eyebrow">Support</p>
          <h1 className="page-title">
            Help, privacy questions, and prelaunch essentials.
          </h1>
          <p className="page-intro">
            If you need help with DreamTherapy, want to ask a privacy question,
            or need a path for account deletion, start here.
          </p>
          <div className="button-row">
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="button button--primary"
            >
              Email support
            </a>
            <CtaButton href="/delete-account" variant="secondary">
              Request account deletion
            </CtaButton>
          </div>
        </div>

        <div className="support-grid__sidebar">
          {supportTopics.map((topic) => (
            <article key={topic.title} className="card">
              <h2 className="card__title">{topic.title}</h2>
              <p className="card__text">{topic.description}</p>
            </article>
          ))}

          <div className="card card--mist">
            <p className="card__label">Helpful links</p>
            <div className="button-row">
              <CtaButton href="/privacy" variant="secondary">
                Privacy Policy
              </CtaButton>
              <CtaButton href="/terms" variant="secondary">
                Terms of Use
              </CtaButton>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
