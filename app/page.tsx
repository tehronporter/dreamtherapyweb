import Image from "next/image";
import Link from "next/link";

import { EmailCapture } from "@/components/email-capture";
import { Section } from "@/components/section";
import { StructuredData } from "@/components/structured-data";
import { buildMetadata, homeContent, siteConfig } from "@/lib/site";

export const metadata = buildMetadata(
  "DreamTherapy",
  "DreamTherapy is a calm dream journal and AI dream interpretation app for iPhone, with thoughtful guides on dream meanings, symbols, recurring dreams, and nightmares.",
  "/",
);

export default function HomePage() {
  return (
    <main>
      <StructuredData data={[organizationSchema(), websiteSchema(), mobileAppSchema()]} />
      <section className="hero">
        <div className="hero__center">
          <p className="eyebrow hero__eyebrow">{homeContent.hero.eyebrow}</p>
          <div className="hero__mascot-stage" aria-hidden="true">
            <div className="hero__mascot-shadow" />
            <Image
              src="/images/dreambuddy_dreamchat.png"
              alt=""
              width={1536}
              height={1024}
              className="hero__mascot"
              priority
            />
          </div>
        </div>

        <div className="hero__content hero__content--centered">
          <h1 className="hero__title">
            {homeContent.hero.titleLead}{" "}
            <span className="hero__title-emphasis">
              {homeContent.hero.titleEmphasis}
            </span>
            <br />
            {homeContent.hero.titleEnd}
          </h1>
          <p className="hero__description">{homeContent.hero.description}</p>
          <div className="button-row button-row--centered">
            <a href={siteConfig.appStoreUrl} className="button button--primary">
              {homeContent.hero.primaryCta}
            </a>
            <Link href="/dream-meanings" className="button button--secondary">
              Explore dream meanings
            </Link>
          </div>
          <p className="hero__rating">
            <span className="hero__rating-stars" aria-hidden="true">
              {homeContent.appRating.stars}
            </span>{" "}
            <span className="hero__rating-text">
              {homeContent.appRating.rating} · {homeContent.appRating.count}
            </span>
          </p>
          <p className="hero__availability">{homeContent.hero.availabilityNote}</p>
          <p className="hero__orbit">{homeContent.hero.orbit}</p>
        </div>
      </section>

      <Section
        id="features"
        eyebrow={homeContent.features.eyebrow}
        title={homeContent.features.title}
        description={homeContent.features.description}
      >
        <div className="story-list">
          {homeContent.features.items.map((feature, index) => (
            <details
              key={feature.name}
              className="story-item"
              open={index === 0}
            >
              <summary className="story-item__summary">
                <div className="story-item__index">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="story-item__copy">
                  <p className="story-item__eyebrow">{feature.name}</p>
                  <h3 className="story-item__title">{feature.accent}</h3>
                  <p className="story-item__summary-text">{feature.summary}</p>
                </div>
                <div className="story-item__toggle" aria-hidden="true">
                  <span className="story-item__toggle-line" />
                  <span className="story-item__toggle-line story-item__toggle-line--vertical" />
                </div>
              </summary>
              <div className="story-item__body">
                <p className="story-item__detail">{feature.detail}</p>
              </div>
            </details>
          ))}
        </div>
      </Section>

      <Section
        eyebrow={homeContent.testimonials.eyebrow}
        title={homeContent.testimonials.title}
      >
        <div className="testimonial-grid">
          {homeContent.testimonials.items.map((testimonial) => (
            <blockquote key={testimonial.author} className="testimonial-card">
              <p className="testimonial-card__text">&ldquo;{testimonial.text}&rdquo;</p>
              <footer className="testimonial-card__author">{testimonial.author}</footer>
            </blockquote>
          ))}
        </div>
      </Section>

      <EmailCapture />

      <Section
        eyebrow={homeContent.trust.eyebrow}
        title={homeContent.trust.title}
        description={homeContent.trust.description}
      >
        <div className="trust-grid trust-grid--refined">
          <div className="trust-essay">
            <div className="trust-essay__item">
              <p className="trust-essay__title">Reflective, not clinical</p>
              <p className="trust-essay__text">
                DreamTherapy is positioned as a journaling and reflection
                product, not as diagnosis, treatment, or emergency guidance.
              </p>
            </div>
            <div className="trust-essay__item">
              <p className="trust-essay__title">Public trust paths</p>
              <p className="trust-essay__text">
                Privacy, terms, support, and deletion guidance remain visible in
                the footer and support flow instead of being held back until
                release.
              </p>
            </div>
            <div className="trust-essay__item">
              <p className="trust-essay__title">Quiet interaction design</p>
              <p className="trust-essay__text">
                The interface uses strong type, restrained motion, and generous
                negative space so the product feels calm before it feels
                technical.
              </p>
            </div>
          </div>

          <div className="trust-image-card">
            <Image
              src="/images/dreambuddy_dreamcircle.png"
              alt="DreamTherapy mascot group illustration representing DreamCircle."
              width={4096}
              height={4096}
              className="trust__image"
            />
          </div>
        </div>
      </Section>

      <Section
        eyebrow={homeContent.support.eyebrow}
        title={homeContent.support.title}
        description={homeContent.support.description}
      >
        <div className="support-links-grid">
          <Link href="/support" className="support-link-card">
            <p className="support-link-card__label">Support</p>
            <p className="support-link-card__title">Get help or contact us.</p>
            <p className="support-link-card__text">
              Start with account access, billing questions, or general support.
            </p>
          </Link>

          <Link href="/privacy" className="support-link-card">
            <p className="support-link-card__label">Privacy</p>
            <p className="support-link-card__title">
              Review how information may be handled.
            </p>
            <p className="support-link-card__text">
              Public privacy language stays concise, careful, and easy to read.
            </p>
          </Link>

          <Link href="/delete-account" className="support-link-card">
            <p className="support-link-card__label">Account deletion</p>
            <p className="support-link-card__title">
              Request removal when you are ready.
            </p>
            <p className="support-link-card__text">
              Follow the deletion path without hunting through the app first.
            </p>
          </Link>
        </div>
      </Section>
    </main>
  );
}

function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: new URL(siteConfig.ogImage, siteConfig.url).toString(),
    sameAs: [siteConfig.appStoreUrl],
  };
}

function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  };
}

function mobileAppSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: siteConfig.name,
    operatingSystem: "iOS",
    applicationCategory: "LifestyleApplication",
    url: siteConfig.url,
    downloadUrl: siteConfig.appStoreUrl,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: homeContent.appRating.rating,
      bestRating: "5",
      worstRating: "1",
      ratingCount: "3",
    },
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}
