import { profile } from "@/data/profile";

interface BrandLogoProps {
  className?: string;
  light?: boolean; // sur fond foncé/coloré : logo entièrement dans la couleur héritée (ex. blanc)
}

// "Libreville Digital.IA" : le ".IA" final est toujours mis en accent — voir
// CLAUDE.md §4.1 ("ne jamais l'écrire autrement").
export default function BrandLogo({ className = "", light = false }: BrandLogoProps) {
  const suffix = ".IA";
  const hasSuffix = profile.name.endsWith(suffix);
  const prefix = hasSuffix ? profile.name.slice(0, -suffix.length) : profile.name;

  return (
    <span className={className}>
      {prefix}
      {hasSuffix && (
        <span className={light ? undefined : "text-[var(--color-blue)]"}>{suffix}</span>
      )}
    </span>
  );
}
