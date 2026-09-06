import Button from "@/components/ui/Button";
import { profile } from "@/data/profile";

export default function CallToAction() {
  const whatsappHref = profile.whatsapp
    ? `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(
        "Bonjour, j'aimerais démarrer un projet avec Libreville Digital.IA."
      )}`
    : "#contact";

  return (
    <section className="bg-[var(--color-yellow)] px-6 py-20 text-center text-[var(--color-yellow-ink)]">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold sm:text-4xl">
          Vous avez un projet ?
        </h2>
        <p className="mt-4 text-base sm:text-lg">
          Parlons-en — notre équipe vous répond entre Libreville et Fort Worth.
        </p>
        <div className="mt-8">
          <Button
            href={whatsappHref}
            variant="primary"
            target={profile.whatsapp ? "_blank" : undefined}
            rel={profile.whatsapp ? "noopener noreferrer" : undefined}
          >
            Démarrer un projet
          </Button>
        </div>
      </div>
    </section>
  );
}
