import Link from "next/link";
import BrandLogo from "@/components/ui/BrandLogo";
import SocialIcon from "@/components/ui/SocialIcon";
import { profile } from "@/data/profile";
import type { NavLink } from "@/types";

const FOOTER_LINKS: NavLink[] = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#a-propos" },
  { label: "Compétences", href: "#competences" },
  { label: "Projets", href: "#projets" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const [libreville, fortWorth] = profile.locations;

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-soft)]">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-[family-name:var(--font-display)] text-lg font-bold">
              <BrandLogo />
            </p>
            <p className="mt-3 max-w-xs text-sm text-[var(--color-text-soft)]">
              Studio digital basé à <strong>{libreville}</strong> et à{" "}
              <strong>{fortWorth}</strong>.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-text-soft)]">
              Navigation
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-text-soft)]">
              Réseaux sociaux
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {profile.socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)]"
                  >
                    <SocialIcon icon={social.icon} size={16} />
                    {social.name} — {profile.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-border)] pt-6 text-xs text-[var(--color-text-soft)] sm:flex-row">
          <p>
            © {year} {profile.name}. Tous droits réservés.
          </p>
          <Link href="/mentions-legales" className="hover:text-[var(--color-accent)]">
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}
