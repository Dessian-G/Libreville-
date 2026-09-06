import { NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const { name, email, phone, service, message } = body as Record<string, string>;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Merci de remplir les champs obligatoires (nom, email, message)." },
      { status: 400 }
    );
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: "Adresse email invalide." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !to) {
    console.error(
      "Formulaire de contact : RESEND_API_KEY ou CONTACT_TO_EMAIL manquant dans .env.local"
    );
    return NextResponse.json(
      {
        error:
          "Le formulaire n'est pas encore configuré. Merci de nous contacter par WhatsApp ou email en attendant.",
      },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    // TODO: une fois un domaine vérifié dans Resend, remplacer par une adresse
    // sur ce domaine (ex. contact@librevilledigital.ia) pour une meilleure délivrabilité.
    from: "Libreville Digital.IA <onboarding@resend.dev>",
    to,
    replyTo: email,
    subject: `Nouveau message — ${name}${service ? ` (${service})` : ""}`,
    text: [
      `Nom : ${name}`,
      `Email : ${email}`,
      phone ? `Téléphone : ${phone}` : null,
      service ? `Service : ${service}` : null,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (error) {
    console.error("Erreur Resend :", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi. Merci de réessayer." },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
