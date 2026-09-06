export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // nom d'icône lucide-react (PascalCase)
  items?: string[]; // sous-modules (ex : les 5 volets de « Formation »)
}

// Titres et modules de "Formation" fournis par le CLAUDE.md — connus, à saisir tels quels.
// Descriptions : rédaction de démarrage (voir CLAUDE.md §13) — génériques, ne
// décrivent pas un projet ou un client réel précis. À ajuster librement.
export const services: Service[] = [
  {
    id: "sites-web",
    title: "Création de sites web",
    description:
      "Des sites vitrines et e-commerce rapides, responsives et pensés pour convertir vos visiteurs en clients.",
    icon: "Globe",
  },
  {
    id: "applications",
    title: "Applications",
    description:
      "Conception d'applications web et mobiles sur mesure, adaptées aux besoins spécifiques de votre activité.",
    icon: "Smartphone",
  },
  {
    id: "design-graphique",
    title: "Design graphique",
    description:
      "Identité visuelle, supports imprimés et visuels pour réseaux sociaux, pensés pour renforcer votre image de marque.",
    icon: "Palette",
  },
  {
    id: "publicite-ia",
    title: "Publicité avec IA",
    description:
      "Création et optimisation de campagnes publicitaires grâce à l'intelligence artificielle, pour toucher la bonne audience au bon moment.",
    icon: "Megaphone",
  },
  {
    id: "branding",
    title: "Branding",
    description:
      "Construction d'une identité de marque forte et cohérente, du logo au ton éditorial.",
    icon: "Fingerprint",
  },
  {
    id: "formation",
    title: "Formation",
    description:
      "Initiation et perfectionnement pour vos équipes, sur les outils numériques comme sur les usages de l'intelligence artificielle.",
    icon: "GraduationCap",
    items: [
      "Informatique",
      "Bureautique",
      "Communication digitale",
      "Intelligence artificielle",
      "Relation client / call center",
    ],
  },
  {
    id: "creation-contenu",
    title: "Création de contenu",
    description:
      "Textes, visuels et vidéos pensés pour votre audience, adaptés à chaque canal de diffusion.",
    icon: "PenSquare",
  },
  {
    id: "solutions-ia",
    title: "Solutions IA",
    description:
      "Automatisation, chatbots et outils sur mesure propulsés par l'intelligence artificielle pour optimiser votre activité.",
    icon: "Cpu",
  },
];
