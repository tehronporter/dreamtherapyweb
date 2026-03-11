import { homeContent } from "@/lib/site";

export function FeatureGrid() {
  return (
    <div className="feature-grid">
      {homeContent.features.items.map((feature) => (
        <article key={feature.name} className="card feature-card">
          <p className="eyebrow">{feature.name}</p>
          <p className="feature-card__summary">{feature.summary}</p>
          <p className="feature-card__detail">{feature.detail}</p>
        </article>
      ))}
    </div>
  );
}
