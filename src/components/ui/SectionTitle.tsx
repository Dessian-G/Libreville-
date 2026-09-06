interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionTitleProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`${alignment} ${className}`}>
      {eyebrow && (
        <p className="font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-accent)]">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-2xl text-[var(--color-text-soft)] ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
