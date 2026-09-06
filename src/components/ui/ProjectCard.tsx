import Image from "next/image";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onOpenDetail?: (project: Project) => void;
}

export default function ProjectCard({ project, onOpenDetail }: ProjectCardProps) {
  const isExternal = Boolean(project.url);

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="relative aspect-[4/3] w-full bg-[var(--color-bg-soft)]">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs text-[var(--color-text-soft)]">
            Image à venir
          </div>
        )}
        <span className="absolute left-3 top-3 rounded-full bg-[var(--color-bg)]/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-text)]">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-[family-name:var(--font-display)] text-lg font-bold">{project.name}</h3>
        <p className="mt-2 flex-1 text-sm text-[var(--color-text-soft)]">{project.description}</p>

        {project.technologies.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-[var(--color-bg-soft)] px-3 py-1 text-xs text-[var(--color-text-soft)]"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {isExternal ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--color-accent)]"
          >
            Voir le projet →
          </a>
        ) : (
          <button
            type="button"
            onClick={() => onOpenDetail?.(project)}
            className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--color-accent)]"
          >
            Voir le projet →
          </button>
        )}
      </div>
    </div>
  );
}
