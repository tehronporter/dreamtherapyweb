import Image from "next/image";
import Link from "next/link";

import { AppCTA, Breadcrumbs, FAQSection } from "@/components/seo-page";
import { StructuredData } from "@/components/structured-data";
import { siteConfig } from "@/lib/site";
import type { SEOContentFAQ } from "@/src/content";

type AppIntentPageProps = {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  features: {
    title: string;
    text: string;
  }[];
  faqs: SEOContentFAQ[];
  ctaTitle?: string;
  ctaText?: string;
};

export function AppIntentPage({
  href,
  eyebrow,
  title,
  description,
  features,
  faqs,
  ctaTitle = "Explore your dreams more deeply.",
  ctaText = "DreamTherapy is a private dream journal and AI interpretation app for iPhone. Save the dream, reflect on what it may suggest, and notice patterns over time.",
}: AppIntentPageProps) {
  const breadcrumbs = [
    { href: "/", label: "Home" },
    { href, label: title },
  ];

  return (
    <main className="page app-intent-page">
      <StructuredData
        data={[
          softwareApplicationSchema(title, description),
          faqPageSchema(faqs),
          breadcrumbSchema(breadcrumbs),
        ]}
      />
      <section className="app-intent-hero">
        <div>
          <Breadcrumbs items={breadcrumbs} />
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="page-title">{title}</h1>
          <p className="page-intro">{description}</p>
          <div className="button-row">
            <a href={siteConfig.appStoreUrl} className="button button--primary">
              Download on the App Store
            </a>
            <Link href="/dream-meanings" className="button button--secondary">
              Explore dream meanings
            </Link>
          </div>
        </div>
        <div className="app-intent-visual" aria-hidden="true">
          <Image
            src="/images/dreambuddy_iosstore.png"
            alt=""
            width={4096}
            height={4096}
            className="app-intent-visual__image"
            priority
          />
        </div>
      </section>

      <section className="app-feature-grid" aria-label="DreamTherapy features">
        {features.map((feature) => (
          <article key={feature.title} className="app-feature">
            <h2>{feature.title}</h2>
            <p>{feature.text}</p>
          </article>
        ))}
      </section>

      <article className="seo-content">
        <section className="seo-content__section">
          <h2>Why DreamTherapy takes a different approach</h2>
          <p>
            Most dream apps give you a one-line answer and move on. DreamTherapy
            is built differently. The dream is saved privately, reflected on with
            emotionally grounded AI, and revisited as patterns accumulate over time.
          </p>
          <p>
            That means the app gets more useful the longer you use it. Instead of
            chasing a fixed meaning, you start noticing symbols, emotional themes,
            and recurring patterns that are genuinely yours.
          </p>
        </section>
        <section className="seo-content__section">
          <h2>How DreamTherapy interprets dreams</h2>
          <p>
            DreamTherapy treats dream interpretation as reflective rather than
            definitive. Symbols are read through emotional tone, personal context,
            and recurring patterns — not one-size-fits-all definitions.
          </p>
          <p>
            For the full methodology, read{" "}
            <Link href="/blog/how-dreamtherapy-interprets-dreams" className="text-link">
              How DreamTherapy Interprets Dreams
            </Link>
            , which explains how AI is used as a reflective layer rather than an authority.
          </p>
        </section>
        <FAQSection faqs={faqs} />
        <AppCTA title={ctaTitle} text={ctaText} />
      </article>
    </main>
  );
}

function faqPageSchema(faqs: SEOContentFAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

function breadcrumbSchema(items: { href: string; label: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: new URL(item.href, siteConfig.url).toString(),
    })),
  };
}

function softwareApplicationSchema(title: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "LifestyleApplication",
    operatingSystem: "iOS",
    description,
    url: siteConfig.url,
    downloadUrl: siteConfig.appStoreUrl,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    headline: title,
  };
}
