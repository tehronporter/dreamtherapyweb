import Link from "next/link";

import { AppCTA } from "@/components/seo-page";
import { StructuredData } from "@/components/structured-data";
import { InternalLinkCard } from "@/components/seo-page";
import { siteConfig } from "@/lib/site";
import {
  categoryHrefs,
  type CategorizedSEOContentItem,
  type SEOContentCategory,
} from "@/src/content";

type ContentHubProps = {
  category: SEOContentCategory;
  eyebrow: string;
  title: string;
  description: string;
  items: CategorizedSEOContentItem[];
  featuredHref?: string;
};

export function ContentHub({
  category,
  eyebrow,
  title,
  description,
  items,
  featuredHref,
}: ContentHubProps) {
  const featured =
    items.find((item) => item.href === featuredHref) ?? items.at(0) ?? null;
  const rest = featured
    ? items.filter((item) => item.href !== featured.href)
    : items;

  return (
    <main className="page seo-page">
      <StructuredData
        data={[collectionPageSchema(category, title, description), itemListSchema(items)]}
      />
      <div className="seo-hero seo-hero--hub">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="page-title">{title}</h1>
        <p className="page-intro">{description}</p>
        <div className="hub-pills" aria-label="Browse content hubs">
          <Link href="/dream-meanings" className="hub-pill">
            Dream meanings
          </Link>
          <Link href="/symbols" className="hub-pill">
            Symbols
          </Link>
          <Link href="/guides" className="hub-pill">
            Guides
          </Link>
          <Link href="/blog" className="hub-pill">
            Blog
          </Link>
        </div>
      </div>

      {featured ? (
        <Link href={featured.href} className="featured-content">
          <p className="featured-content__label">{featured.label}</p>
          <h2>{featured.h1}</h2>
          <p>{featured.quickAnswer}</p>
        </Link>
      ) : null}

      <div className="content-grid">
        {rest.map((item) => (
          <InternalLinkCard key={`${item.category}-${item.slug}`} item={item} />
        ))}
      </div>

      <AppCTA
        title="Want a personal interpretation?"
        text="Move from reading about symbols to saving your own dream privately, noticing patterns, and reflecting more deeply on iPhone."
      />
    </main>
  );
}

function collectionPageSchema(
  category: SEOContentCategory,
  title: string,
  description: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: new URL(categoryHrefs[category], siteConfig.url).toString(),
    about: category,
  };
}

function itemListSchema(items: CategorizedSEOContentItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: new URL(item.href, siteConfig.url).toString(),
      name: item.h1,
    })),
  };
}
