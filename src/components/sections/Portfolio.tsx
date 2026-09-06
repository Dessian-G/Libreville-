"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects, type Project, type ProjectCategory } from "@/data/projects";
import { useActiveFilter, ALL_FILTER } from "@/hooks/useActiveFilter";

const FILTERS: (ProjectCategory | typeof ALL_FILTER)[] = [
  ALL_FILTER,
  "Web",
  "Design",
  "IA",
  "Branding",
];

export default function Portfolio() {
  const { activeFilter, setActiveFilter, filtered } = useActiveFilter(projects);
  const [detailProject, setDetailProject] = useState<Project | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!detailProject) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setDetailProject(null);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [detailProject]);

  return (
    <section id="projets" className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle eyebrow="Portfolio" title="Nos réalisations" align="center" />

      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`min-h-11 rounded-full px-5 text-sm font-semibold transition-colors ${
              activeFilter === filter
                ? "bg-[var(--color-accent)] text-[var(--color-accent-contrast)]"
                : "bg-[var(--color-bg-soft)] text-[var(--color-text-soft)] hover:text-[var(--color-text)]"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-16 text-center text-[var(--color-text-soft)]">
          {projects.length === 0
            ? "Aucune réalisation publiée pour l'instant — nos premiers projets arrivent bientôt."
            : "Aucun projet dans cette catégorie pour l'instant."}
        </p>
      ) : (
        <motion.div layout={!shouldReduceMotion} className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout={!shouldReduceMotion}
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
              >
                <ProjectCard project={project} onOpenDetail={setDetailProject} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      <AnimatePresence>
        {detailProject && (
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-6"
            onClick={() => setDetailProject(null)}
            role="dialog"
            aria-modal="true"
            aria-label={detailProject.name}
          >
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
              onClick={(event) => event.stopPropagation()}
              className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-[var(--color-bg)] p-6"
            >
              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold">
                {detailProject.name}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-text-soft)]">
                {detailProject.description}
              </p>

              {detailProject.technologies.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {detailProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-[var(--color-bg-soft)] px-3 py-1 text-xs text-[var(--color-text-soft)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              <button
                type="button"
                onClick={() => setDetailProject(null)}
                className="mt-6 min-h-11 rounded-full border border-[var(--color-border)] px-5 text-sm font-semibold"
              >
                Fermer
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
