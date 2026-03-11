import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2E53FF",
    icons: [
      {
        src: "/images/dreambuddy_iosstore.png",
        sizes: "1536x1024",
        type: "image/png",
      },
    ],
  };
}
