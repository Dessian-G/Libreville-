export interface ExperienceItem {
  company: string;
  role: string;
  startDate: string; // "2023-01"
  endDate: string | "present";
  missions: string[];
}

// TODO: aucun parcours réel fourni pour l'instant. Ajouter ici les entrées de
// la timeline (voir l'interface ExperienceItem ci-dessus) — ne pas inventer
// d'expérience fictive. Le composant Experience doit gérer un état vide tant
// que ce tableau n'est pas rempli.
export const experience: ExperienceItem[] = [];
