import Link from "next/link";

import { siteConfig } from "@/lib/site";
import { SiteLogo } from "@/components/site-logo";
import { WaitlistModal } from "@/components/waitlist-modal";

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
          <WaitlistModal buttonClassName="site-header__waitlist-button" />
        </div>
      </div>
    </header>
  );
}
