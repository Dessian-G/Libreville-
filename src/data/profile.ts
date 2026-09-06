export interface Founder {
  firstName: string;
  lastName?: string;
  role?: string;
  city: string;
  photo: string;
  bio?: string;
  socials?: { name: string; url: string }[];
}

export interface AgencyProfile {
  name: string;
  headline: string;
  tagline: string;
  about: string;
  locations: [string, string];
  logo: string;
  email: string;
  phone: string;
  whatsapp: string;
  founders: [Founder, Founder];
  stats: { projects: number; yearsExperience: number; clients: number };
  socials: { name: string; url: string; icon: string }[];
}

// TODO (par fondateur) : photo (à déposer dans public/images/fondateurs/).
// Gontran : nom de famille, rôle précis et bio restent à fournir.
export const founders: [Founder, Founder] = [
  {
    firstName: "Maxime",
    lastName: "Guiro",
    role: "Designer graphique · Développeur web · UI/UX Designer · Intelligence artificielle",
    city: "Fort Worth, Texas",
    photo: "", // TODO: chemin vers public/images/fondateurs/maxime.jpg
    bio: "Professionnel du digital polyvalent, il transforme une idée en solution numérique complète — de la conception visuelle à la réalisation technique — en combinant design graphique, développement web, UI/UX et intelligence artificielle.",
  },
  {
    firstName: "Gontran",
    city: "Libreville, Gabon",
    photo: "", // TODO: chemin vers public/images/fondateurs/gontran.jpg
  },
];

export const profile: AgencyProfile = {
  name: "Libreville Digital.IA",
  headline: "Un studio digital basé à Libreville et à Fort Worth, Texas",
  // TODO: présentation courte du studio et du duo fondateur (2-3 lignes, Hero) à fournir.
  tagline: "",
  // TODO: texte de présentation « À propos » (parcours, naissance du studio,
  // domaines d'intervention, types de clients) à fournir.
  about: "",
  locations: ["Libreville, Gabon", "Fort Worth, Texas"],
  logo: "/logo.svg", // TODO: logo à déposer dans public/
  email: "librevilledigitalia@gmail.com",
  phone: "", // TODO
  // Fourni : +241 04867777. Concaténé tel quel (indicatif + numéro, sans "+"
  // ni espace) — à tester avec le lien wa.me avant mise en ligne : si le lien
  // n'ouvre pas la bonne conversation, retirer le "0" initial (24104867777 → 2414867777).
  whatsapp: "24104867777",
  founders,
  stats: {
    // TODO: chiffres réels à fournir — laissés à 0 en attendant (ne pas inventer).
    projects: 0,
    yearsExperience: 0,
    clients: 0,
  },
  socials: [
    {
      name: "Facebook",
      url: "", // TODO: URL exacte de la page Facebook "Libreville Digital.IA"
      icon: "facebook",
    },
    // TODO: autres réseaux sociaux (Instagram, LinkedIn, ...) à ajouter si applicable.
  ],
};
