import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

const VARIANTS = ["green", "blue", "yellow"] as const;

export default function Services() {
  return (
    <section id="services" className="bg-[var(--color-bg-soft)] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Services" title="Ce que nous proposons" align="center" />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              variant={VARIANTS[index % VARIANTS.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
