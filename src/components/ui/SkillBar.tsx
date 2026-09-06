"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Palette,
  Code2,
  LayoutTemplate,
  BrainCircuit,
  TrendingUp,
  MessagesSquare,
  type LucideIcon,
} from "lucide-react";
import type { Skill } from "@/data/skills";

const SKILL_ICONS: Record<string, LucideIcon> = {
  Palette,
  Code2,
  LayoutTemplate,
  BrainCircuit,
  TrendingUp,
  MessagesSquare,
};

type Variant = "green" | "blue" | "yellow";

const BADGE_CLASSES: Record<Variant, string> = {
  green: "bg-[var(--color-accent-soft)] text-[var(--color-accent)]",
  blue: "bg-[var(--color-blue-soft)] text-[var(--color-blue)]",
  yellow: "bg-[var(--color-yellow-soft)] text-[var(--color-yellow-ink)]",
};

const FILL_CLASSES: Record<Variant, string> = {
  green: "bg-[var(--color-accent)]",
  blue: "bg-[var(--color-blue)]",
  yellow: "bg-[var(--color-yellow)]",
};

interface SkillBarProps {
  skill: Skill;
  variant?: Variant;
}

export default function SkillBar({ skill, variant = "green" }: SkillBarProps) {
  const Icon = SKILL_ICONS[skill.icon];
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
      <div className="flex items-center gap-3">
        <span
          className={`flex h-10 w-10 items-center justify-center rounded-full ${BADGE_CLASSES[variant]}`}
        >
          {Icon && <Icon size={20} aria-hidden="true" />}
        </span>
        <p className="font-semibold text-[var(--color-text)]">{skill.name}</p>
      </div>

      <div
        className="mt-4 h-2 w-full overflow-hidden rounded-full bg-[var(--color-bg-soft)]"
        role="progressbar"
        aria-valuenow={skill.level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Niveau : ${skill.name}`}
      >
        <motion.div
          initial={shouldReduceMotion ? { width: `${skill.level}%` } : { width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 1, ease: "easeOut" }}
          className={`h-full rounded-full ${FILL_CLASSES[variant]}`}
        />
      </div>
    </div>
  );
}
