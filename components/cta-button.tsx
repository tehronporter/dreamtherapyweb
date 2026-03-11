import type { ReactNode } from "react";
import Link from "next/link";

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function CtaButton({
  href,
  children,
  variant = "primary",
}: CtaButtonProps) {
  const baseClasses =
    "button";
  const variantClasses =
    variant === "primary"
      ? "button--primary"
      : "button--secondary";

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses}`}>
      {children}
    </Link>
  );
}
