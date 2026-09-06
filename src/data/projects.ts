export type ProjectCategory = "Web" | "Design" | "IA" | "Branding";

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  description: string;
  image: string;
  technologies: string[];
  url?: string; // absent → modale de détail
  featured?: boolean;
}

// TODO: aucune réalisation réelle fournie pour l'instant. Ajouter ici les
// projets du studio (voir l'interface Project ci-dessus) — ne pas inventer de
// projets fictifs pour remplir la grille. Le composant Portfolio doit gérer
// un état vide tant que ce tableau n'est pas rempli.
export const projects: Project[] = [];
