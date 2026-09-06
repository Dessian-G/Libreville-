import Image from "next/image";
import { Star } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const initial = testimonial.name.charAt(0);

  return (
    <div className="flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
      <div className="flex items-center gap-0.5" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={16}
            className={
              index < testimonial.rating
                ? "fill-[var(--color-yellow)] text-[var(--color-yellow)]"
                : "text-[var(--color-border)]"
            }
          />
        ))}
      </div>
      <span className="sr-only">{testimonial.rating} sur 5 étoiles</span>

      <p className="mt-4 flex-1 text-sm text-[var(--color-text-soft)]">
        &laquo;&nbsp;{testimonial.quote}&nbsp;&raquo;
      </p>

      <div className="mt-6 flex items-center gap-3">
        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-[var(--color-accent-soft)]">
          {testimonial.photo ? (
            <Image
              src={testimonial.photo}
              alt={testimonial.name}
              fill
              sizes="44px"
              className="object-cover"
            />
          ) : (
            <span
              aria-hidden="true"
              className="flex h-full w-full items-center justify-center font-[family-name:var(--font-display)] text-sm font-bold text-[var(--color-accent)]"
            >
              {initial}
            </span>
          )}
        </div>
        <div>
          <p className="text-sm font-semibold text-[var(--color-text)]">{testimonial.name}</p>
          <p className="text-xs text-[var(--color-text-soft)]">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
