"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import FounderCard from "@/components/ui/FounderCard";
import { profile } from "@/data/profile";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [maxime, gontran] = profile.founders;

  return (
    <section
      id="accueil"
      className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 py-24 text-center"
    >
      <p className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-[0.08em] text-[var(--color-accent)]">
        {profile.name}
      </p>

      <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
        {profile.headline}
      </h1>

      <p className="mt-6 max-w-xl text-base text-[var(--color-text-soft)] sm:text-lg">
        {profile.tagline ||
          "TODO — présentation courte du studio et du duo fondateur (2-3 lignes) à rédiger."}
      </p>

      <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
        <FounderCard founder={maxime} />
        <FounderCard founder={gontran} />
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
        <Button href="#projets" variant="primary">
          Voir nos projets
        </Button>

        <div className="flex items-center gap-4">
          {profile.socials.map((social) => (
            <a
              key={social.name}
              href={social.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--color-text-soft)] transition-colors hover:text-[var(--color-accent)]"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>

      <motion.div
        aria-hidden="true"
        animate={shouldReduceMotion ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--color-text-soft)]"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}
