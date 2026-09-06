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

interface SkillBarProps {
  skill: Skill;
}

export default function SkillBar({ skill }: SkillBarProps) {
  const Icon = SKILL_ICONS[skill.icon];
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
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
          className="h-full rounded-full bg-[var(--color-accent)]"
        />
      </div>
    </div>
  );
}
