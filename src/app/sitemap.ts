import type { MetadataRoute } from "next";

// TODO: renseigner NEXT_PUBLIC_SITE_URL dans .env.local une fois le domaine définitif choisi.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://libreville-digital-ia.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/mentions-legales`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
