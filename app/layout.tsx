import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { buildMetadata, siteConfig } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

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
      <body className={`${inter.variable} site-body`}>
        <div className="page-shell page-shell--layout">
          <SiteHeader />
          <div className="page-shell__content">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
