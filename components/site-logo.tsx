import Image from "next/image";
import Link from "next/link";

type SiteLogoProps = {
  href?: string;
  withWordmark?: boolean;
  size?: "sm" | "md";
};

export function SiteLogo({
  href = "/",
  withWordmark = false,
  size = "md",
}: SiteLogoProps) {
  const imageClass =
    size === "sm" ? "site-logo__image site-logo__image--sm" : "site-logo__image";

  const content = (
    <>
      <span className="site-logo__mark" aria-hidden="true">
        <Image
          src="/images/oldreambuddy01.png"
          alt=""
          width={1536}
          height={1024}
          className={imageClass}
          priority={false}
        />
      </span>
      {withWordmark ? (
        <span className="site-logo__wordmark">DreamTherapy</span>
      ) : null}
    </>
  );

  return (
    <Link href={href} className="site-logo" aria-label="DreamTherapy home">
      {content}
    </Link>
  );
}
