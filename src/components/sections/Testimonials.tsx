"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: 1 | -1) {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const card = scroller.querySelector<HTMLElement>("[data-testimonial-card]");
    const amount = (card?.offsetWidth ?? scroller.clientWidth) + 24; // largeur carte + gap
    scroller.scrollBy({ left: amount * direction, behavior: "smooth" });
  }

  return (
    <section id="temoignages" className="bg-[var(--color-bg-soft)] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionTitle eyebrow="Témoignages" title="Ce que nos clients en disent" />

          {testimonials.length > 1 && (
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                aria-label="Témoignage précédent"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                <ChevronLeft size={18} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                aria-label="Témoignage suivant"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                <ChevronRight size={18} aria-hidden="true" />
              </button>
            </div>
          )}
        </div>

        {testimonials.length === 0 ? (
          <p className="mt-16 text-center text-[var(--color-text-soft)]">
            Aucun témoignage publié pour l&apos;instant.
          </p>
        ) : (
          <div
            ref={scrollerRef}
            className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                data-testimonial-card
                className="w-[85%] shrink-0 snap-start sm:w-[45%] lg:w-[31%]"
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
