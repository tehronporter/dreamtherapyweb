import type { Metadata } from "next";

import "./globals.css";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { buildMetadata, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  ...buildMetadata(siteConfig.name, siteConfig.description),
  title: siteConfig.name,
  icons: {
    icon: "/images/oldreambuddy01.png",
    apple: "/images/oldreambuddy01.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="site-body">
        <div className="page-shell page-shell--layout">
          <SiteHeader />
          <div className="page-shell__content">{children}</div>
          <SiteFooter />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
