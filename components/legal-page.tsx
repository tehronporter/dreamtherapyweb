import type { ReactNode } from "react";

import { siteConfig } from "@/lib/site";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
};

export function LegalPage({ eyebrow, title, intro, children }: LegalPageProps) {
  return (
    <main className="page">
      <div className="page--narrow">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="page-title">{title}</h1>
        <p className="page-intro">{intro}</p>
        <p className="page-meta">Last updated: {siteConfig.lastUpdated}</p>
      </div>
      <div className="legal-copy page--narrow" style={{ marginTop: "3rem" }}>
        {children}
      </div>
    </main>
  );
}
