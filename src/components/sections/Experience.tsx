import SectionTitle from "@/components/ui/SectionTitle";
import TimelineItem from "@/components/ui/TimelineItem";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24">
      <SectionTitle eyebrow="Expérience" title="Notre parcours" align="center" />

      {experience.length === 0 ? (
        <p className="mt-16 text-center text-[var(--color-text-soft)]">
          Aucun parcours renseigné pour l&apos;instant.
        </p>
      ) : (
        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute left-4 top-0 h-full w-px bg-[var(--color-border)] md:left-1/2 md:-translate-x-1/2"
          />
          <div className="flex flex-col gap-10">
            {experience.map((item, index) => (
              <div key={`${item.company}-${item.startDate}`} className="relative pl-12 md:pl-0">
                <span
                  aria-hidden="true"
                  className="absolute left-4 top-6 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-bg)] md:left-1/2"
                />
                <TimelineItem item={item} align={index % 2 === 0 ? "left" : "right"} />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
