import Link from "next/link";

import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-brand">
          <div className="site-brand__mark">
            DT
          </div>
          <div>
            <p className="site-brand__name">{siteConfig.name}</p>
            <p className="site-brand__meta">Dream journaling</p>
          </div>
        </Link>

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
