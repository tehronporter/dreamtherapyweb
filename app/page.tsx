import Image from "next/image";
import Link from "next/link";

import { CtaButton } from "@/components/cta-button";
import { FeatureGrid } from "@/components/feature-grid";
import { Section } from "@/components/section";
import { buildMetadata, homeContent, siteConfig } from "@/lib/site";

export const metadata = buildMetadata(
  "Home",
  "DreamTherapy is a calm, public-facing home for private dream journaling, thoughtful AI reflection, support, and legal details.",
  "/",
);

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero__content">
          <p className="eyebrow">{homeContent.hero.eyebrow}</p>
          <h1 className="hero__title">{homeContent.hero.title}</h1>
          <p className="hero__description">{homeContent.hero.description}</p>
          <div className="button-row">
            <CtaButton href={siteConfig.appStoreUrl}>
              {homeContent.hero.primaryCta}
            </CtaButton>
            <CtaButton href="/privacy" variant="secondary">
              {homeContent.hero.secondaryCta}
            </CtaButton>
          </div>
          <div className="hero__mini-grid">
            {homeContent.features.items.map((feature) => (
              <div className="mini-feature" key={feature.name}>
                <p className="mini-feature__title">{feature.name}</p>
                <p className="mini-feature__text">{feature.summary}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__glow" />
          <div className="panel">
            <div className="panel__header">
              <div>
                <p className="panel__title">DreamTherapy</p>
                <p className="panel__meta">Reflection, journaling, and support</p>
              </div>
              <span className="pill">iOS app</span>
            </div>
            <div className="panel__body">
              <div className="hero__image-wrap">
                <Image
                  src="/images/dreambuddy_dreamchat.png"
                  alt="DreamTherapy mascot seated calmly as a supporting brand illustration."
                  width={1536}
                  height={1024}
                  className="hero__image"
                  priority
                />
              </div>
              <div className="stack">
                <div className="card card--soft">
                  <p className="card__label">DreamChat</p>
                  <p className="card__text">
                    Explore a dream through guided AI reflection that stays
                    curious, calm, and personal.
                  </p>
                </div>
                <div className="card">
                  <p className="card__label">DreamBook</p>
                  <p className="card__text">
                    Keep entries close, return to them later, and notice what
                    repeats over time.
                  </p>
                </div>
                <div className="card">
                  <p className="card__label">DreamCircle</p>
                  <p className="card__text">
                    Broaden the lens with shared themes and carefully framed
                    collective reflection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        id="features"
        eyebrow={homeContent.features.eyebrow}
        title={homeContent.features.title}
        description={homeContent.features.description}
      >
        <FeatureGrid />
      </Section>

      <Section
        eyebrow={homeContent.trust.eyebrow}
        title={homeContent.trust.title}
        description={homeContent.trust.description}
      >
        <div className="trust-grid">
          <div className="card trust-grid__left" style={{ padding: "2rem" }}>
            <div className="info-grid">
              <div>
                <p className="info-grid__item-title">Careful language</p>
                <p className="info-grid__item-text">
                  We describe DreamTherapy as a reflective journaling product,
                  not as treatment, diagnosis, or emergency help.
                </p>
              </div>
              <div>
                <p className="info-grid__item-title">Transparent essentials</p>
                <p className="info-grid__item-text">
                  Privacy, terms, support, and deletion guidance stay public and
                  easy to find.
                </p>
              </div>
              <div>
                <p className="info-grid__item-title">A calm surface</p>
                <p className="info-grid__item-text">
                  High whitespace, clear hierarchy, and restrained motion keep
                  the interface from competing with the content.
                </p>
              </div>
              <div>
                <p className="info-grid__item-title">
                  Replaceable launch details
                </p>
                <p className="info-grid__item-text">
                  App Store and support contact details are wired centrally so
                  they can be swapped quickly as launch assets arrive.
                </p>
              </div>
            </div>
          </div>

          <div className="card card--soft trust-grid__image">
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
        <div className="support-grid">
          <div className="card">
            <p className="card__title">Need a public support path before launch?</p>
            <p className="card__text">
              Review support options, account deletion guidance, and the
              placeholder launch contact address.
            </p>
            <div className="button-row">
              <CtaButton href="/support" variant="secondary">
                Visit support
              </CtaButton>
              <CtaButton href="/delete-account" variant="secondary">
                Account deletion
              </CtaButton>
            </div>
          </div>

          <div className="card card--mist">
            <p className="card__title">Legal pages, kept simple.</p>
            <p className="card__text">
              The public compliance pages stay narrow, readable, and easy to
              review on mobile before App Store submission.
            </p>
            <div className="button-row">
              <Link href="/privacy" className="text-link">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-link">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
