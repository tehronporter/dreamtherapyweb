import Link from "next/link";

import { siteConfig } from "@/lib/site";
import { SiteLogo } from "@/components/site-logo";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <SiteLogo />

        <div className="site-header__actions">
          <nav className="site-nav" aria-label="Primary">
            {siteConfig.navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
          <a
            href={siteConfig.appStoreUrl}
            className="button button--secondary site-header__waitlist-button"
          >
            Get the App
          </a>
        </div>
      </div>
    </header>
  );
}
