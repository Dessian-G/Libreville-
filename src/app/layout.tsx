import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { profile } from "@/data/profile";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// TODO: renseigner NEXT_PUBLIC_SITE_URL dans .env.local une fois le domaine définitif choisi.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://libreville-digital-ia.vercel.app";

const title = "Libreville Digital.IA — Studio digital à Libreville et Fort Worth";
const description =
  "Libreville Digital.IA est un studio digital basé à Libreville (Gabon) et à Fort Worth (Texas, États-Unis). Sites web, applications, design, branding et solutions IA pour entrepreneurs et institutions d'Afrique centrale et de la diaspora.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "studio digital Libreville",
    "agence web Gabon",
    "création site web Libreville",
    "studio digital Fort Worth",
    "intelligence artificielle Afrique centrale",
    "branding Gabon",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: profile.name,
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: profile.name,
  url: siteUrl,
  logo: `${siteUrl}${profile.logo}`,
  ...(profile.email && { email: profile.email }),
  sameAs: profile.socials.filter((social) => social.url).map((social) => social.url),
  founder: profile.founders.map((founder) => ({
    "@type": "Person",
    name: [founder.firstName, founder.lastName].filter(Boolean).join(" "),
  })),
  areaServed: profile.locations,
  location: profile.locations.map((location) => ({
    "@type": "Place",
    address: location,
  })),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--color-bg)] text-[var(--color-text)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
