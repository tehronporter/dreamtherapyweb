import Link from "next/link";

import { AppCTA } from "@/components/seo-page";
import { StructuredData } from "@/components/structured-data";
import { buildMetadata, siteConfig } from "@/lib/site";

export const metadata = buildMetadata(
  "About DreamTherapy",
  "DreamTherapy is a calm dream journal and AI reflection app for iPhone built on the belief that dreams carry emotional meaning worth exploring — without fear, without certainty.",
  "/about",
);

export default function AboutPage() {
  const breadcrumbs = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
  ];

  return (
    <main className="page">
      <StructuredData
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: breadcrumbs.map((item, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: item.label,
              item: new URL(item.href, siteConfig.url).toString(),
            })),
          },
        ]}
      />

      <article className="seo-content seo-content--standalone">
        <header className="seo-content__header">
          <nav aria-label="Breadcrumb">
            <ol className="breadcrumbs">
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.href}>
                  {i < breadcrumbs.length - 1 ? (
                    <Link href={crumb.href}>{crumb.label}</Link>
                  ) : (
                    <span aria-current="page">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <p className="eyebrow">About</p>
          <h1 className="page-title">What DreamTherapy is and why it exists.</h1>
          <p className="page-intro">
            DreamTherapy is a private dream journal and AI interpretation app for
            iPhone. It exists because most people have no good place to put their
            dreams — and the places that do exist tend to sensationalize, oversimplify,
            or turn inner life into content.
          </p>
        </header>

        <section className="seo-content__section">
          <h2>The problem with most dream interpretation</h2>
          <p>
            Most dream dictionaries give you a one-line answer. "Snakes mean
            betrayal." "Teeth falling out means anxiety about appearance." "Death
            means change." These answers are not wrong, exactly — but they are not
            yours.
          </p>
          <p>
            Dreams are not universal. They are specific to your life, your emotional
            history, your current pressures, and your way of attaching meaning to
            things. A spider in your dream may mean something completely different
            from what it means for someone else, because you are not the same person.
          </p>
          <p>
            DreamTherapy is built around this belief. Interpretation should be
            reflective rather than definitive — a set of possibilities to sit with,
            not a verdict to accept.
          </p>
        </section>

        <section className="seo-content__section">
          <h2>What DreamTherapy is built to do</h2>
          <p>
            DreamTherapy is a private iPhone app with three core functions: journaling,
            interpretation, and pattern tracking.
          </p>
          <p>
            The journal is where dreams go immediately after waking — the setting,
            the people, the strongest image, the feeling that lingered. The
            interpretation layer uses AI to reflect on the emotional context of what
            you recorded, surfacing symbolic possibilities rather than fixed meanings.
            The pattern layer becomes meaningful over weeks and months, as recurring
            symbols, emotional tones, and figures begin to emerge from the accumulation
            of entries.
          </p>
          <p>
            These three functions work together. Interpretation without a journal is
            guesswork. A journal without reflection is just storage. Pattern tracking
            without both is noise. DreamTherapy tries to bring all three into a single,
            calm experience.
          </p>
        </section>

        <section className="seo-content__section">
          <h2>Our approach to interpretation</h2>
          <p>
            DreamTherapy does not claim to know what your dream means. It offers
            frameworks, emotional context, and symbolic possibilities — and it does
            so with language designed to support reflection rather than manufacture
            certainty.
          </p>
          <p>
            The approach draws on psychological traditions that treat dreams as
            meaningful rather than random — Jungian ideas about the unconscious,
            contemporary research on emotional processing during sleep, and the
            longstanding observation that recurring themes often track recurring
            feelings in waking life.
          </p>
          <p>
            It deliberately avoids fear-based interpretation. Dreams about death are
            not warnings. Dreams about teeth falling out are not signs of impending
            embarrassment. Dreams about snakes are not omens. These interpretive
            traditions create anxiety without insight, and DreamTherapy was built as
            an alternative to them.
          </p>
        </section>

        <section className="seo-content__section">
          <h2>Privacy as a design principle</h2>
          <p>
            Dreams are intimate. They surface fears, relationships, grief, and desires
            that most people do not share publicly. A tool for working with dreams
            should reflect that intimacy rather than exploit it.
          </p>
          <p>
            DreamTherapy does not require an account to start. There are no social
            features, no sharing prompts, no public feeds. Your dreams stay on your
            device, private to you. The absence of social mechanics is a deliberate
            design choice, not an oversight.
          </p>
          <p>
            Genuine reflection requires a feeling of safety. DreamTherapy is designed
            to create that feeling rather than compromise it.
          </p>
        </section>

        <section className="seo-content__section">
          <h2>Who DreamTherapy is for</h2>
          <p>
            DreamTherapy is for anyone who takes their inner life seriously and wants
            a calm, structured way to engage with it through dreams. That includes
            people who journal regularly and want a dedicated space for dreams, people
            who are processing grief or transition and find that their dreams are
            unusually active, people curious about recurring symbols or nightmares
            that keep returning, and people who simply want to remember their dreams
            more clearly.
          </p>
          <p>
            It is not for people seeking entertainment, predictions, or spiritual
            certainty. It is not a replacement for therapy, and it does not claim to
            be. DreamTherapy is a private reflection tool — honest about what it can
            and cannot do.
          </p>
        </section>

        <section className="seo-content__section">
          <h2>The content on this site</h2>
          <p>
            Alongside the app, DreamTherapy publishes a library of guides, dream
            meaning articles, symbol explorations, and nightmare reflections — all
            written with the same values as the app: calm, psychologically grounded,
            and unwilling to manufacture fear or false certainty.
          </p>
          <p>
            You can explore{" "}
            <Link href="/dream-meanings" className="text-link">
              common dream meanings
            </Link>
            ,{" "}
            <Link href="/symbols" className="text-link">
              recurring dream symbols
            </Link>
            ,{" "}
            <Link href="/guides" className="text-link">
              guides on journaling and interpretation
            </Link>
            , and{" "}
            <Link href="/nightmares" className="text-link">
              a grounded approach to nightmares
            </Link>
            . All of it is free to read, and none of it requires the app.
          </p>
        </section>

        <AppCTA
          title="Try DreamTherapy on iPhone."
          text="A private dream journal, AI reflection tool, and pattern tracker in one calm app. No account required. Free to download."
        />
      </article>
    </main>
  );
}
