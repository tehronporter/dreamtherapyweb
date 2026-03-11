import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  narrow?: boolean;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  narrow = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className="section"
    >
      <div className={narrow ? "section__heading page--narrow" : "section__heading"}>
        {eyebrow ? <p className="eyebrow" style={{ marginBottom: "1rem" }}>{eyebrow}</p> : null}
        <h2 className="section__title">{title}</h2>
        {description ? (
          <p className="section__description">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
