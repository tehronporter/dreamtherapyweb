import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ContentStructuredData, SEOPageLayout } from "@/components/seo-page";
import { buildMetadata } from "@/lib/site";
import { getCollection, getContentItem, getRelatedContent } from "@/src/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getCollection("guides").map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getContentItem("guides", slug);
  return item
    ? buildMetadata(item.h1, item.description, item.href, item.keywords, "article")
    : {};
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const item = getContentItem("guides", slug);

  if (!item) {
    notFound();
  }

  const breadcrumbs = [
    { href: "/", label: "Home" },
    { href: "/guides", label: "Guides" },
    { href: item.href, label: item.h1 },
  ];

  return (
    <>
      <ContentStructuredData item={item} breadcrumbs={breadcrumbs} />
      <SEOPageLayout
        item={item}
        breadcrumbs={breadcrumbs}
        related={getRelatedContent(item)}
      />
    </>
  );
}
