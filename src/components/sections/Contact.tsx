"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { Mail, MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import SocialIcon from "@/components/ui/SocialIcon";
import { profile } from "@/data/profile";
import { services } from "@/data/services";

type Status = "idle" | "sending" | "success" | "error";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") ?? "";

  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    if (formData.get("company")) {
      // Honeypot rempli : probable bot, on ignore silencieusement sans appeler l'API.
      setStatus("success");
      form.reset();
      return;
    }

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      setErrorMessage("Merci de remplir les champs obligatoires (nom, email, message).");
      return;
    }

    if (!EMAIL_PATTERN.test(email)) {
      setStatus("error");
      setErrorMessage("Merci de saisir une adresse email valide.");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: formData.get("phone"),
          service: formData.get("service"),
          message,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || "Une erreur est survenue.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Une erreur est survenue.");
    }
  }

  const whatsappHref = profile.whatsapp
    ? `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(
        "Bonjour, je souhaite en savoir plus sur vos services."
      )}`
    : undefined;

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle eyebrow="Contact" title="Discutons de votre projet" align="center" />

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[3fr_2fr]">
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
          <div className="hidden" aria-hidden="true">
            <label htmlFor="company">Entreprise</label>
            <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
          </div>

          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[var(--color-text)]">
              Nom
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="min-h-11 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2.5 text-sm outline-none transition-colors focus:border-[var(--color-accent)]"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[var(--color-text)]">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="min-h-11 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2.5 text-sm outline-none transition-colors focus:border-[var(--color-accent)]"
            />
          </div>

          <div>
            <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-[var(--color-text)]">
              Téléphone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="min-h-11 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2.5 text-sm outline-none transition-colors focus:border-[var(--color-accent)]"
            />
          </div>

          <div>
            <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-[var(--color-text)]">
              Service
            </label>
            <select
              id="service"
              name="service"
              defaultValue={preselectedService}
              className="min-h-11 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2.5 text-sm outline-none transition-colors focus:border-[var(--color-accent)]"
            >
              <option value="">Sélectionner un service (facultatif)</option>
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[var(--color-text)]">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2.5 text-sm outline-none transition-colors focus:border-[var(--color-accent)]"
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            disabled={status === "sending"}
            className="self-start disabled:opacity-60"
          >
            {status === "sending" ? "Envoi en cours…" : "Envoyer"}
          </Button>

          {status === "success" && (
            <p role="status" className="text-sm font-medium text-[var(--color-accent)]">
              Message envoyé — nous vous répondons rapidement.
            </p>
          )}
          {status === "error" && (
            <p role="alert" className="text-sm font-medium text-red-600">
              {errorMessage}
            </p>
          )}
        </form>

        <div className="flex flex-col gap-4 rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-soft)] p-6">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 text-sm font-medium text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)]"
          >
            <Mail size={18} aria-hidden="true" />
            {profile.email || "TODO — email à fournir"}
          </a>

          {whatsappHref ? (
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm font-medium text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)]"
            >
              <MessageCircle size={18} aria-hidden="true" />
              WhatsApp
            </a>
          ) : (
            <p className="flex items-center gap-3 text-sm text-[var(--color-text-soft)]">
              <MessageCircle size={18} aria-hidden="true" />
              TODO — numéro WhatsApp à fournir
            </p>
          )}

          <div className="flex items-center gap-3 pt-2">
            {profile.socials.map((social) => (
              <a
                key={social.name}
                href={social.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                <SocialIcon icon={social.icon} size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
