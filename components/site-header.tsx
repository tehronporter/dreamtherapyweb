import Link from "next/link";

import { siteConfig } from "@/lib/site";
import { SiteLogo } from "@/components/site-logo";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <SiteLogo />

        <nav className="site-nav">
          {siteConfig.navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
