"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

interface StatCounterProps {
  value: number;
  label: string;
  suffix?: string;
  light?: boolean; // sur fond vert plein : chiffre blanc plutôt que vert (illisible sur vert)
}

export default function StatCounter({ value, label, suffix = "", light = false }: StatCounterProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(shouldReduceMotion ? value : 0);

  useEffect(() => {
    if (!isInView || shouldReduceMotion) return;

    const controls = animate(0, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (current) => setDisplay(Math.round(current)),
    });

    return () => controls.stop();
  }, [isInView, value, shouldReduceMotion]);

  return (
    <div>
      <p
        ref={ref}
        className={`font-[family-name:var(--font-display)] text-4xl font-bold ${
          light ? "text-white" : "text-[var(--color-accent)]"
        }`}
      >
        {display}
        {suffix}
      </p>
      <p
        className={`mt-1 text-sm ${light ? "text-[var(--color-accent-soft)]" : "text-[var(--color-text-soft)]"}`}
      >
        {label}
      </p>
    </div>
  );
}
