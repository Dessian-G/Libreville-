import Image from "next/image";
import type { Founder } from "@/data/profile";

interface FounderCardProps {
  founder: Founder;
  className?: string;
}

export default function FounderCard({ founder, className = "" }: FounderCardProps) {
  const fullName = [founder.firstName, founder.lastName].filter(Boolean).join(" ");
  const initial = founder.firstName.charAt(0);

  return (
    <div className={`flex items-center gap-3 text-left ${className}`}>
      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-[var(--color-accent-soft)]">
        {founder.photo ? (
          <Image src={founder.photo} alt={fullName} fill sizes="56px" className="object-cover" />
        ) : (
          <span
            aria-hidden="true"
            className="flex h-full w-full items-center justify-center font-[family-name:var(--font-display)] text-lg font-bold text-[var(--color-accent)]"
          >
            {initial}
          </span>
        )}
      </div>
      <div>
        <p className="font-semibold text-[var(--color-text)]">{fullName}</p>
        {founder.role && (
          <p className="text-xs text-[var(--color-text-soft)]">{founder.role}</p>
        )}
        <p className="text-xs text-[var(--color-text-soft)]">{founder.city}</p>
      </div>
    </div>
  );
}
