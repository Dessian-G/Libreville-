"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Globe,
  Smartphone,
  Palette,
  Megaphone,
  Fingerprint,
  GraduationCap,
  PenSquare,
  Cpu,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/data/services";

const SERVICE_ICONS: Record<string, LucideIcon> = {
  Globe,
  Smartphone,
  Palette,
  Megaphone,
  Fingerprint,
  GraduationCap,
  PenSquare,
  Cpu,
};

type Variant = "green" | "blue" | "yellow";

const BADGE_CLASSES: Record<Variant, string> = {
  green: "bg-[var(--color-accent-soft)] text-[var(--color-accent)]",
  blue: "bg-[var(--color-blue-soft)] text-[var(--color-blue)]",
  yellow: "bg-[var(--color-yellow-soft)] text-[var(--color-yellow-ink)]",
};

interface ServiceCardProps {
  service: Service;
  variant?: Variant;
}

export default function ServiceCard({ service, variant = "green" }: ServiceCardProps) {
  const [expanded, setExpanded] = useState(false);
  const Icon = SERVICE_ICONS[service.icon];

  return (
    <div className="flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
      <span
        className={`flex h-11 w-11 items-center justify-center rounded-full ${BADGE_CLASSES[variant]}`}
      >
        {Icon && <Icon size={22} aria-hidden="true" />}
      </span>

      <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg font-bold">
        {service.title}
      </h3>

      <p className="mt-2 flex-1 text-sm text-[var(--color-text-soft)]">
        {service.description || "TODO — description courte (1-2 phrases) à rédiger."}
      </p>

      {service.items && (
        <div className="mt-3">
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            aria-expanded={expanded}
            className="flex min-h-11 items-center gap-1 text-sm font-semibold text-[var(--color-accent)]"
          >
            {expanded ? "Masquer les modules" : "Voir les modules"}
            <ChevronDown
              size={16}
              aria-hidden="true"
              className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
            />
          </button>

          {expanded && (
            <ul className="mt-3 flex flex-col gap-1.5 text-sm text-[var(--color-text-soft)]">
              {service.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]"
                  />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <Link
        href={`/?service=${service.id}#contact`}
        className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)]"
      >
        Démarrer un projet →
      </Link>
    </div>
  );
}
