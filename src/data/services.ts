export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // nom d'icône lucide-react (PascalCase)
  items?: string[]; // sous-modules (ex : les 5 volets de « Formation »)
}

// Titres et modules de "Formation" fournis par le CLAUDE.md — connus, à saisir tels quels.
// Descriptions : TODO, non fournies — ne rien inventer, une phrase de marketing
// inventée serait présentée comme réelle.
export const services: Service[] = [
  {
    id: "sites-web",
    title: "Création de sites web",
    description: "", // TODO: description courte (1-2 phrases) à rédiger
    icon: "Globe",
  },
  {
    id: "applications",
    title: "Applications",
    description: "", // TODO
    icon: "Smartphone",
  },
  {
    id: "design-graphique",
    title: "Design graphique",
    description: "", // TODO
    icon: "Palette",
  },
  {
    id: "publicite-ia",
    title: "Publicité avec IA",
    description: "", // TODO
    icon: "Megaphone",
  },
  {
    id: "branding",
    title: "Branding",
    description: "", // TODO
    icon: "Fingerprint",
  },
  {
    id: "formation",
    title: "Formation",
    description: "", // TODO
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
    description: "", // TODO
    icon: "PenSquare",
  },
  {
    id: "solutions-ia",
    title: "Solutions IA",
    description: "", // TODO
    icon: "Cpu",
  },
];
