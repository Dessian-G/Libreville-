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
  // Rédaction de démarrage (voir CLAUDE.md §13) — à ajuster librement.
  tagline:
    "Nous aidons entrepreneurs, PME et institutions à exister en ligne : sites web, identité visuelle et solutions IA, pensés et livrés par une équipe basée à Libreville comme à Fort Worth.",
  // Rédaction de démarrage — positionnement générique, aucun fait précis
  // inventé (pas de date de création, pas de nom de client). À ajuster.
  about:
    "Libreville Digital.IA est né de la rencontre entre deux passionnés du numérique, l'un basé à Libreville, l'autre à Fort Worth. Nous combinons design, développement et intelligence artificielle pour accompagner entrepreneurs, commerçants et institutions dans la construction de leur présence en ligne — du premier site vitrine aux solutions plus avancées propulsées par l'IA. Cette double implantation, entre l'Afrique centrale et les États-Unis, nous permet de rester à l'écoute de nos clients sur une large plage horaire, tout en gardant un regard sur les usages numériques des deux continents.",
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
