import Link from "next/link";

import { siteConfig } from "@/lib/site";
import { SiteLogo } from "@/components/site-logo";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <div>
            <div className="site-footer__brand">
              <SiteLogo withWordmark size="sm" />
            </div>
            <p className="site-footer__text">
              A calm, public home for product details, support, privacy, and
              account guidance.
            </p>
          </div>
          <a
            href={`mailto:${siteConfig.supportEmail}`}
            className="site-footer__email"
          >
            {siteConfig.supportEmail}
          </a>
        </div>

        <div className="site-footer__links">
          {siteConfig.footerLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        <p className="site-footer__legal">© 2026 DreamTherapy. All rights reserved.</p>
      </div>
    </footer>
  );
}
