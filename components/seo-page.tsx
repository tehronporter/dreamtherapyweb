import Link from "next/link";
import type { ReactNode } from "react";

import { StructuredData } from "@/components/structured-data";
import { siteConfig } from "@/lib/site";
import type {
  SEOContentCategory,
  CategorizedSEOContentItem,
  RelatedContentItem,
  SEOContentItem,
} from "@/src/content";

type Breadcrumb = {
  href: string;
  label: string;
};

type SEOPageLayoutProps = {
  item: CategorizedSEOContentItem;
  breadcrumbs: Breadcrumb[];
  related: RelatedContentItem[];
  children?: ReactNode;
};

export function Breadcrumbs({ items }: { items: Breadcrumb[] }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <span key={item.href} className="breadcrumbs__item">
          {index > 0 ? <span aria-hidden="true">/</span> : null}
          <Link href={item.href}>{item.label}</Link>
        </span>
      ))}
    </nav>
  );
}

export function LastUpdated({ date }: { date: string }) {
  return <p className="page-meta">Last updated: {formatDate(date)}</p>;
}

export function ContentHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  lastUpdated,
}: {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs: Breadcrumb[];
  lastUpdated: string;
}) {
  return (
    <div className="seo-hero">
      <Breadcrumbs items={breadcrumbs} />
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="page-title">{title}</h1>
      <p className="page-intro">{description}</p>
      <LastUpdated date={lastUpdated} />
    </div>
  );
}

export function QuickAnswerBox({ answer }: { answer: string }) {
  return (
    <aside className="quick-answer">
      <p className="quick-answer__label">Quick answer</p>
      <p className="quick-answer__text">{answer}</p>
    </aside>
  );
}

export function FAQSection({ faqs }: { faqs: SEOContentItem["faqs"] }) {
  if (!faqs.length) {
    return null;
  }

  return (
    <section className="seo-content__section">
      <h2>FAQ</h2>
      <div className="faq-list">
        {faqs.map((faq) => (
          <details key={faq.question} className="faq-item">
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function InternalLinkCard({ item }: { item: RelatedContentItem }) {
  return (
    <Link href={item.href} className="internal-link-card">
      <p className="internal-link-card__label">{item.label}</p>
      <h3>{item.h1}</h3>
      <p>{item.description}</p>
    </Link>
  );
}

export function RelatedContentGrid({
  items,
}: {
  items: RelatedContentItem[];
}) {
  if (!items.length) {
    return null;
  }

  return (
    <section className="related-content">
      <div>
        <p className="eyebrow">Related reflection</p>
        <h2>Keep exploring this theme.</h2>
      </div>
      <div className="content-grid content-grid--compact">
        {items.map((item) => (
          <InternalLinkCard key={`${item.category}-${item.href}`} item={item} />
        ))}
      </div>
    </section>
  );
}

export function ExploreByCategory({
  category,
}: {
  category: SEOContentCategory;
}) {
  const links = [
    { href: "/dream-meanings", label: "Dream meanings" },
    { href: "/symbols", label: "Symbols" },
    { href: "/guides", label: "Guides" },
    { href: "/blog", label: "Blog" },
    { href: "/nightmares", label: "Nightmares" },
  ].filter((entry) => entry.href !== `/${category}`);

  return (
    <section className="related-content">
      <div>
        <p className="eyebrow">Explore the cluster</p>
        <h2>Move between meanings, symbols, guides, and app pages.</h2>
      </div>
      <div className="hub-pills">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="hub-pill">
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}

export function AppCTA({
  title = "Explore your dreams more deeply.",
  text = "DreamTherapy is a private dream journal and AI interpretation app for iPhone. Save the dream, reflect on what it may suggest, and notice patterns over time.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <aside className="app-cta">
      <div>
        <p className="eyebrow">DreamTherapy for iPhone</p>
        <h2>{title}</h2>
        <p>{text}</p>
        <p className="app-cta__trust">Private journaling. No account required. Free to download.</p>
      </div>
      <a href={siteConfig.appStoreUrl} className="button button--primary">
        Download on the App Store
      </a>
    </aside>
  );
}

export function SEOPageLayout({
  item,
  breadcrumbs,
  related,
  children,
}: SEOPageLayoutProps) {
  return (
    <main className="page seo-page">
      <ContentHero
        eyebrow={item.label}
        title={item.h1}
        description={item.description}
        breadcrumbs={breadcrumbs}
        lastUpdated={item.lastUpdated}
      />
      <article className="seo-content">
        <QuickAnswerBox answer={item.quickAnswer} />
        {item.sections.map((section) => (
          <section key={section.heading} className="seo-content__section">
            <h2>{section.heading}</h2>
            {section.body.split("\n\n").map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
        {item.showApproachNote ? (
          <DreamTherapyApproach
            includeMethodologyLink={
              item.slug !== "how-dreamtherapy-interprets-dreams"
            }
          />
        ) : null}
        <FAQSection faqs={item.faqs} />
        {children}
        <AppCTA />
      </article>
      <ExploreByCategory category={item.category} />
      <RelatedContentGrid items={related} />
    </main>
  );
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));
}

export function DreamTherapyApproach({
  includeMethodologyLink = false,
}: {
  includeMethodologyLink?: boolean;
}) {
  return (
    <section className="seo-content__section">
      <h2>How DreamTherapy approaches interpretation</h2>
      <p>
        DreamTherapy treats dreams as reflective material, not fixed verdicts.
        Symbols are read through emotional tone, personal context, and repeated
        patterns rather than one-size-fits-all definitions.
      </p>
      <p>
        The goal is not to declare what a dream definitely means. The goal is to
        help you notice what the dream may be bringing closer to the surface:
        stress, longing, grief, identity change, memory, relationship tension,
        or a symbol that keeps returning over time.
      </p>
      <p>
        That is why DreamTherapy stays non-medical and user-centered. AI can help
        organize themes and questions, but your own emotional context remains the
        center of the interpretation.
      </p>
      {includeMethodologyLink ? (
        <p>
          For the fuller philosophy, read{" "}
          <Link
            href="/blog/how-dreamtherapy-interprets-dreams"
            className="text-link"
          >
            How DreamTherapy Interprets Dreams
          </Link>
          .
        </p>
      ) : null}
    </section>
  );
}

export function articleSchema(item: CategorizedSEOContentItem) {
  const url = new URL(item.href, siteConfig.url).toString();

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: item.h1,
    name: item.h1,
    description: item.description,
    url,
    dateModified: item.lastUpdated,
    datePublished: item.lastUpdated,
    keywords: item.keywords.join(", "),
    mainEntityOfPage: url,
    author: {
      "@type": "Person",
      name: siteConfig.creator,
      url: siteConfig.url,
      description:
        `${siteConfig.creator} is the creator of DreamTherapy, an iPhone app for private dream journaling and reflective AI interpretation built around calm, non-fear-based dream psychology.`,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: new URL(siteConfig.ogImage, siteConfig.url).toString(),
      },
    },
  };
}

export function faqSchema(item: CategorizedSEOContentItem) {
  if (!item.faqs.length) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: item.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: Breadcrumb[]) {
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

export function ContentStructuredData({
  item,
  breadcrumbs,
}: {
  item: CategorizedSEOContentItem;
  breadcrumbs: Breadcrumb[];
}) {
  const data: Array<Record<string, unknown> | null> = [
    articleSchema(item),
    breadcrumbSchema(breadcrumbs),
    faqSchema(item),
  ];

  return (
    <StructuredData
      data={data.filter(
        (entry): entry is Record<string, unknown> => entry !== null,
      )}
    />
  );
}
