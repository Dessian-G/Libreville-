import type { ExperienceItem } from "@/data/experience";

interface TimelineItemProps {
  item: ExperienceItem;
  align?: "left" | "right";
}

function formatDate(value: string) {
  if (value === "present") return "Aujourd'hui";
  const [year, month] = value.split("-");
  const date = new Date(Number(year), Number(month) - 1);
  return date.toLocaleDateString("fr-FR", { month: "short", year: "numeric" });
}

export default function TimelineItem({ item, align = "left" }: TimelineItemProps) {
  return (
    <div
      className={`rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 md:w-[calc(50%-2rem)] ${
        align === "right" ? "md:ml-auto" : ""
      }`}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-accent)]">
        {formatDate(item.startDate)} — {formatDate(item.endDate)}
      </p>
      <h3 className="mt-1 font-[family-name:var(--font-display)] text-lg font-bold">{item.role}</h3>
      <p className="text-sm font-medium text-[var(--color-text-soft)]">{item.company}</p>
      <ul className="mt-3 flex flex-col gap-1.5 text-sm text-[var(--color-text-soft)]">
        {item.missions.map((mission) => (
          <li key={mission} className="flex items-start gap-2">
            <span
              aria-hidden="true"
              className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]"
            />
            {mission}
          </li>
        ))}
      </ul>
    </div>
  );
}
