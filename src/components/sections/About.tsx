import FounderCard from "@/components/ui/FounderCard";
import SectionTitle from "@/components/ui/SectionTitle";
import StatCounter from "@/components/ui/StatCounter";
import { profile } from "@/data/profile";

export default function About() {
  const [maxime, gontran] = profile.founders;

  return (
    <section id="a-propos" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-start">
        <div>
          <SectionTitle eyebrow="À propos" title="Un studio, deux ancrages" />

          <p className="mt-6 text-[var(--color-text-soft)]">
            {profile.about ||
              "TODO — texte de présentation « À propos » à rédiger (parcours, naissance du studio, domaines d'intervention, types de clients accompagnés)."}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FounderCard founder={maxime} />
            <FounderCard founder={gontran} />
          </div>

          <p className="mt-8 rounded-2xl bg-[var(--color-accent-soft)] p-4 text-sm text-[var(--color-text)]">
            Grâce au décalage horaire entre l&apos;Afrique centrale et les États-Unis, notre
            équipe couvre une large plage horaire — joignable des deux côtés de
            l&apos;Atlantique.
          </p>
        </div>

        <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-soft)] p-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:grid-cols-1">
            <StatCounter value={profile.stats.projects} label="Projets réalisés" />
            <StatCounter value={profile.stats.yearsExperience} label="Années d'expérience" />
            <StatCounter value={profile.stats.clients} label="Clients accompagnés" />
          </div>
        </div>
      </div>
    </section>
  );
}
