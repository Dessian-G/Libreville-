import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — Libreville Digital.IA",
};

export default function MentionsLegalesPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold">
        Mentions légales
      </h1>
      <p className="mt-6 text-[var(--color-text-soft)]">
        TODO — contenu à rédiger (identité légale du studio, hébergeur, propriété
        intellectuelle, données personnelles). Ne pas publier tel quel.
      </p>
    </div>
  );
}
