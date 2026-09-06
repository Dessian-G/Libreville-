import type { MetadataRoute } from "next";

// TODO: renseigner NEXT_PUBLIC_SITE_URL dans .env.local une fois le domaine définitif choisi.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://libreville-digital-ia.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
