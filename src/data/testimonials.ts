export interface Testimonial {
  name: string;
  role: string;
  photo: string;
  quote: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

// TODO: aucun témoignage réel fourni pour l'instant. Ajouter ici les avis
// clients (voir l'interface Testimonial ci-dessus) — ne pas inventer de faux
// témoignages. Le composant Testimonials doit gérer un état vide tant que ce
// tableau n'est pas rempli.
export const testimonials: Testimonial[] = [];
