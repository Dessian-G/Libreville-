import SectionTitle from "@/components/ui/SectionTitle";
import SkillBar from "@/components/ui/SkillBar";
import { skills } from "@/data/skills";

const VARIANTS = ["green", "blue", "yellow"] as const;

export default function Skills() {
  return (
    <section id="competences" className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle eyebrow="Compétences" title="Ce que nous savons faire" align="center" />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <SkillBar key={skill.name} skill={skill} variant={VARIANTS[index % VARIANTS.length]} />
        ))}
      </div>
    </section>
  );
}
