"use client";

import { useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";
import type { NavLink } from "@/types";

interface MobileMenuProps {
  links: NavLink[];
  isOpen: boolean;
  activeId: string;
  onClose: () => void;
}

export default function MobileMenu({ links, isOpen, activeId, onClose }: MobileMenuProps) {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0, y: -16 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
          className="fixed inset-x-0 top-20 bottom-0 z-40 flex flex-col overflow-y-auto bg-[var(--color-bg)] px-6 py-10 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
        >
          <nav className="flex flex-col gap-2">
            {links.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = id === activeId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={`min-h-11 rounded-xl px-4 py-3 text-lg font-medium transition-colors ${
                    isActive
                      ? "bg-[var(--color-accent-soft)] text-[var(--color-accent)]"
                      : "text-[var(--color-text)] hover:bg-[var(--color-bg-soft)]"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="mt-auto pt-6">
            <Button href="#contact" variant="primary" onClick={onClose} className="w-full">
              Nous contacter
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
