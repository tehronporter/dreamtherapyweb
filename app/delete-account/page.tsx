import { buildMetadata, deleteAccountSteps, siteConfig } from "@/lib/site";

export const metadata = buildMetadata(
  "Delete Account",
  "Learn how to request deletion of your DreamTherapy account and where to send account-related support requests.",
  "/delete-account",
);

export default function DeleteAccountPage() {
  return (
    <main className="page">
      <div className="page--narrow">
        <p className="eyebrow">Delete Account</p>
        <h1 className="page-title">
          Need to request account deletion?
        </h1>
        <p className="page-intro">
          You can request deletion by contacting support. For the fastest
          review, include enough detail for us to identify your account and
          confirm the request safely.
        </p>

        <div className="card" style={{ marginTop: "2.5rem", padding: "2rem" }}>
          <h2 className="card__title">What to include</h2>
          <ol className="steps">
            {deleteAccountSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <div className="card card--soft support-email-box">
            <p className="mini-feature__title">Support email</p>
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="text-link"
              style={{ display: "inline-block", marginTop: "0.5rem" }}
            >
              {siteConfig.supportEmail}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
