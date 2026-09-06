"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import BrandLogo from "@/components/ui/BrandLogo";
import MobileMenu from "@/components/layout/MobileMenu";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import type { NavLink } from "@/types";

const NAV_LINKS: NavLink[] = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#a-propos" },
  { label: "Compétences", href: "#competences" },
  { label: "Projets", href: "#projets" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const SECTION_IDS = NAV_LINKS.map((link) => link.href.replace("#", ""));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(SECTION_IDS);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 h-20 transition-colors duration-300 ${
        scrolled
          ? "bg-[var(--color-bg)]/95 shadow-sm backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">
        <a
          href="#accueil"
          className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight"
        >
          <BrandLogo />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navigation principale">
          {NAV_LINKS.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = id === activeId;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-text-soft)] hover:text-[var(--color-text)]"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button href="#contact" variant="primary">
            Nous contacter
          </Button>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-full text-[var(--color-text)] md:hidden"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <MobileMenu
        links={NAV_LINKS}
        isOpen={menuOpen}
        activeId={activeId}
        onClose={() => setMenuOpen(false)}
      />
    </header>
  );
}
