# CLAUDE.md — Site « Libreville Digital.IA »

> Fichier d'instructions pour Claude Code. Décrit le projet, la stack, les
> sections, les conventions et les données à renseigner.
> À placer à la racine du dépôt.

---

## 1. Vue d'ensemble

Site **vitrine et portfolio** de **Libreville Digital.IA**, **studio digital
basé à Libreville (Gabon) et à Fort Worth (Texas, États-Unis)**, fondé par
**deux associés**. Le site présente le studio, ses compétences, ses services
et ses réalisations, et sert de canal principal de **prise de contact et de
conversion**.

**Les deux fondateurs**
| Fondateur | Localisation |
|---|---|
| **Maxime** | Fort Worth, Texas (États-Unis) |
| **Gontran** | Libreville (Gabon) |

> Cette **double implantation** est un argument différenciant : elle doit être
> visible dès le Hero et rappelée dans « À propos » et le Footer.

**Objectifs**
1. Présenter le studio et **ses deux fondateurs** de façon crédible et moderne.
2. Mettre en valeur les **réalisations** (web, design, IA, branding).
3. **Convertir** : faire démarrer un projet (formulaire, WhatsApp, réseaux).

**Public cible** : entrepreneurs, PME, commerçants et institutions du Grand
Libreville et du Gabon, la clientèle francophone d'Afrique centrale, ainsi que
la **diaspora et les clients basés aux États-Unis**.

**Ton éditorial : « nous »** (agence, pas personne seule). Tous les textes
visibles sont **en français**.

**Réseau social connu** : Facebook — **Libreville Digital.IA**
(les autres liens sont à fournir, voir `TODO` dans `profile.ts`).

---

## 2. Stack technique

| Domaine | Choix | Notes |
|---|---|---|
| Framework | **Next.js 16 (App Router) + TypeScript** | SEO, performance |
| Styles | **Tailwind CSS v4** | mobile-first, jetons déclarés en CSS (`@theme`) dans `globals.css` |
| Animations | **Framer Motion** | apparitions au scroll, compteurs |
| Icônes | **lucide-react** | |
| Formulaire | **Resend** ou **Formspree** | envoi d'email sans backend lourd |
| Images | **next/image** | AVIF/WebP, lazy loading |
| Déploiement | **Vercel** | domaine personnalisé |

> Cible **Lighthouse ≥ 90** sur les quatre axes. Le site doit rester léger :
> chargement utile < 2,5 s sur une connexion 3G/4G irrégulière.
>
> Décision prise le 2026-09-06 : le projet a été initialisé avec les dernières
> versions (Next.js 16 + Tailwind v4) plutôt que Next.js 14 + `tailwind.config.ts`.
> Les jetons de couleur/typo vivent dans `src/app/globals.css` via `@theme inline`
> au lieu d'un fichier `tailwind.config.ts` (qui n'existe plus avec Tailwind v4).

---

## 3. Structure du projet

```
libreville-digital-ia/
├── CLAUDE.md
├── next.config.ts
├── .env.local                    # clés (jamais commit)
├── public/
│   ├── images/
│   │   ├── fondateurs/
│   │   ├── projets/
│   │   └── temoignages/
│   ├── logo.svg
│   └── og-image.jpg
└── src/
    ├── app/
    │   ├── layout.tsx            # métadonnées SEO, polices
    │   ├── page.tsx              # page unique (one-page)
    │   └── globals.css           # jetons de couleur/typo (@theme)
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.tsx
    │   │   ├── MobileMenu.tsx    # menu hamburger
    │   │   └── Footer.tsx
    │   ├── sections/
    │   │   ├── Hero.tsx
    │   │   ├── About.tsx
    │   │   ├── Skills.tsx
    │   │   ├── Services.tsx
    │   │   ├── Portfolio.tsx
    │   │   ├── Experience.tsx
    │   │   ├── Testimonials.tsx
    │   │   ├── CallToAction.tsx
    │   │   └── Contact.tsx
    │   └── ui/
    │       ├── Button.tsx
    │       ├── SectionTitle.tsx
    │       ├── FounderCard.tsx
    │       ├── ProjectCard.tsx
    │       ├── SkillBar.tsx
    │       ├── ServiceCard.tsx
    │       ├── TimelineItem.tsx
    │       ├── TestimonialCard.tsx
    │       └── StatCounter.tsx
    ├── data/
    │   ├── profile.ts            # agence, fondateurs, stats, réseaux
    │   ├── skills.ts
    │   ├── services.ts
    │   ├── projects.ts
    │   ├── experience.ts
    │   └── testimonials.ts
    ├── hooks/
    │   ├── useScrollSpy.ts
    │   └── useActiveFilter.ts
    └── types/index.ts
```

> **Principe** : tout le **contenu éditorial** vit dans `src/data/*.ts`, jamais
> en dur dans les composants. Ajouter un projet = ajouter un objet au tableau.

---

## 4. Sections du site (dans l'ordre)

### 4.1 Header / Navbar
- **Logo ou nom** à gauche : **Libreville Digital.IA** (le point et les
  majuscules « .IA » font partie du nom — ne jamais l'écrire autrement).
- Navigation : **Accueil · À propos · Compétences · Projets · Services · Contact**.
- Bouton d'action **« Nous contacter »** (couleur accent, mis en avant).
- **Menu hamburger** en dessous de `md` : panneau plein écran ou tiroir
  latéral, fermeture au clic sur un lien et avec `Échap`.
- **Sticky** en haut ; fond transparent au départ, fond plein + ombre légère
  après ~50 px de scroll.
- **Scrollspy** : le lien de la section visible est mis en évidence.
- Défilement fluide, ancres décalées de la hauteur de la navbar.

### 4.2 Hero
- **Photos ou avatars des deux fondateurs** (composant `FounderCard`, côte à
  côte en desktop, empilés ou en petit duo sur mobile).
- **Nom / prénom** de chaque fondateur : **Maxime** et **Gontran**.
- **Titre professionnel** affiché en accroche principale :
  **« Un studio digital basé à Libreville et à Fort Worth, Texas »**
  (texte exact, à ne pas reformuler).
- Éventuellement, le rôle propre à chaque fondateur sous sa photo — `TODO`,
  à fournir.
- **Courte présentation** du studio et de son duo fondateur : 2–3 lignes.
- Bouton principal **« Voir nos projets »** → ancre `#projets`.
- **Liens réseaux sociaux**, dont **Facebook : Libreville Digital.IA**.
- Hauteur `min-h-[90vh]`, indicateur de scroll discret.

> Pas de bouton « Télécharger le CV » sur ce site : c'est une agence, pas un
> profil individuel.

### 4.3 À propos
- **Présentation du studio et de ses fondateurs** :
  - **Maxime — Fort Worth, Texas**
  - **Gontran — Libreville, Gabon**
- **Parcours** : trajectoire de chacun et naissance du studio.
- **Expérience** : domaines d'intervention et types de clients accompagnés.
- **Localisation** : **Libreville** et **Fort Worth** — présenter les deux
  ancrages côte à côte (deux blocs ou deux repères), pas une adresse unique.
  Insister sur l'avantage du **décalage horaire** : une équipe joignable sur
  une large plage horaire, entre l'Afrique centrale et les États-Unis.
- Bloc de **statistiques animées** (compteur au scroll) :
  - `X` projets réalisés
  - `X` années d'expérience
  - `X` clients
- Mise en page 2 colonnes desktop (texte + visuel), 1 colonne mobile.

> **TODO contenu** : chiffres exacts, noms de famille, parcours, expérience et
> textes de présentation à fournir. Ne rien inventer — laisser des `TODO`
> visibles dans `profile.ts`.

### 4.4 Compétences
Six domaines, avec **barre ou carte de niveau** :
- Design graphique
- Développement web
- UI/UX
- Intelligence artificielle
- Marketing digital
- Communication

Grille 3 colonnes (desktop) → 2 (tablette) → 1 (mobile). Les barres s'animent
à l'entrée dans le viewport (`Framer Motion`, `whileInView`). Icône + niveau
pour chaque compétence.

### 4.5 Services
Cartes en grille 3 colonnes → 2 (tablette) → 1 (mobile) :
- **Création de sites web**
- **Applications**
- **Design graphique**
- **Publicité avec IA**
- **Branding**
- **Formation**
- **Création de contenu**
- **Solutions IA**

Chaque carte : icône, titre, description courte (1–2 phrases), lien vers le
formulaire de contact avec le service pré-sélectionné.

**Détail de l'offre « Formation »** — initiation et perfectionnement :
- Informatique
- Bureautique
- Communication digitale
- Intelligence artificielle
- Relation client / call center

> La formation est un service **plus riche que les autres** : sa carte doit
> pouvoir afficher la liste des cinq modules ci-dessus (dépliage au clic ou
> modale), sans casser l'alignement de la grille. Prévoir dans `Service` un
> champ optionnel `items?: string[]` et un rendu adapté quand il est présent.

### 4.6 Portfolio / Projets
- **Galerie** en grille (3 colonnes desktop, 2 tablette, 1 mobile).
- **Filtres** : `Tous` · `Web` · `Design` · `IA` · `Branding`
  (filtrage côté client, réagencement animé).
- Carte projet : **image**, **nom**, **catégorie**, **description**,
  **technologies utilisées** (badges), bouton **« Voir le projet »**.
- Le bouton ouvre le lien externe (`target="_blank" rel="noopener"`), ou une
  modale de détail si le projet n'a pas d'URL publique.

### 4.7 Expérience
- **Timeline** verticale : alternée gauche/droite en desktop, alignée à gauche
  en mobile.
- Chaque entrée : **entreprise**, **poste**, **dates**, **missions
  principales** (liste à puces courte).

### 4.8 Témoignages
- Carrousel (ou grille si peu d'items) : **photo du client**, **nom**,
  **fonction**, **avis**, **note en étoiles** (1–5).
- Swipe sur mobile, flèches sur desktop.

### 4.9 Call To Action
- Titre fort : **« Vous avez un projet ? »**
- Texte court d'accroche.
- Bouton **« Démarrer un projet »** → ancre `#contact` ou WhatsApp direct.
- Bande pleine largeur, fond contrasté (couleur accent).

### 4.10 Contact
- **Formulaire** : Nom · Email · Téléphone · Message · bouton **Envoyer**.
  - Validation côté client (champs requis, format email).
  - États visibles : envoi en cours, succès, erreur.
  - Anti-spam simple (champ *honeypot* caché).
- **Coordonnées directes** à côté du formulaire :
  - **WhatsApp** (lien `wa.me` avec message pré-rempli)
  - **Email** (lien `mailto:`)
  - **Réseaux sociaux** (Facebook Libreville Digital.IA + autres)

### 4.11 Footer
- **Logo** + **courte description** du studio, avec rappel des deux
  implantations : **Libreville · Fort Worth**.
- **Navigation** (rappel des ancres principales).
- **Réseaux sociaux**.
- **Copyright** avec année dynamique.
- Lien **Mentions légales**.

---

## 5. Modèles de données (`src/data/`)

```ts
// profile.ts
export interface Founder {
  firstName: string;          // "Maxime" | "Gontran"
  lastName?: string;          // TODO à fournir
  role?: string;              // titre propre au fondateur — TODO
  city: string;               // "Fort Worth, Texas" | "Libreville, Gabon"
  photo: string;
  bio?: string;               // 1–2 phrases
  socials?: { name: string; url: string }[];
}

export interface AgencyProfile {
  name: string;               // "Libreville Digital.IA"
  headline: string;           // "Un studio digital basé à Libreville et à Fort Worth, Texas"
  tagline: string;            // présentation courte (Hero)
  about: string;              // texte « À propos »
  locations: [string, string];// ["Libreville, Gabon", "Fort Worth, Texas"]
  logo: string;
  email: string;
  phone: string;
  whatsapp: string;           // format international, sans +
  founders: [Founder, Founder];   // Maxime (Fort Worth), Gontran (Libreville)
  stats: { projects: number; yearsExperience: number; clients: number };
  socials: { name: string; url: string; icon: string }[];
  // ex : { name: 'Facebook', url: 'https://facebook.com/…', icon: 'facebook' }
}

// skills.ts
export interface Skill { name: string; level: number; icon: string }

// services.ts
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  items?: string[];           // sous-modules (ex : les 5 volets de « Formation »)
}

// projects.ts
export type ProjectCategory = 'Web' | 'Design' | 'IA' | 'Branding';
export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  description: string;
  image: string;
  technologies: string[];
  url?: string;               // absent → modale de détail
  featured?: boolean;
}

// experience.ts
export interface ExperienceItem {
  company: string;
  role: string;
  startDate: string;          // "2023-01"
  endDate: string | 'present';
  missions: string[];
}

// testimonials.ts
export interface Testimonial {
  name: string;
  role: string;
  photo: string;
  quote: string;
  rating: 1 | 2 | 3 | 4 | 5;
}
```

---

## 6. Responsive design (exigence forte)

Le site doit fonctionner **parfaitement** sur 🖥️ desktop, 💻 laptop,
📱 smartphone et 📲 tablette.

| Cible | Largeur | Comportement |
|---|---|---|
| Mobile | `< 640px` | 1 colonne, menu hamburger |
| Tablette | `sm` / `md` (640–1024) | 2 colonnes |
| Laptop | `lg` (1024–1280) | 3 colonnes, menu complet |
| Desktop | `xl+` (≥ 1280) | 3–4 colonnes, conteneur max ~1280px |

**Règles à respecter**
- **Mobile-first** : classes de base pour mobile, puis `sm: md: lg:`.
- **Menu hamburger** sous `md`, navigation complète au-dessus.
- **Grilles** : 3/4 colonnes → 1 colonne sans casse
  (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).
- **Images adaptatives** : `next/image` avec `sizes` correct et ratios fixes
  pour éviter le *layout shift* (CLS).
- **Typographie responsive** : `text-3xl md:text-5xl lg:text-6xl`, ou `clamp()`
  pour les grands titres.
- **Zones tactiles** : tout élément cliquable ≥ **44 × 44 px**, bien espacé.
- **Navigation fluide** : scroll doux, ancres décalées de la navbar.
- **Chargement rapide** : lazy loading hors écran, polices via `next/font`,
  aucune librairie lourde inutile.
- **Aucun débordement horizontal** à 320 px de large.

---

## 7. Accessibilité

- HTML **sémantique** : `<header> <nav> <main> <section> <footer>`, un seul `<h1>`.
- `alt` pertinent sur toutes les images.
- Focus visible au clavier ; menu mobile navigable au clavier, fermable `Échap`.
- Contraste **WCAG AA** (≥ 4,5:1).
- `<label>` associés aux champs du formulaire (pas seulement un `placeholder`).
- Respect de `prefers-reduced-motion`.

---

## 8. SEO & métadonnées

- `metadata` Next.js dans `layout.tsx` : `title`, `description`, `keywords`,
  **Open Graph** et **Twitter Card** (`/og-image.jpg`, 1200×630).
- Données structurées **JSON-LD** de type `Organization` : nom, logo, réseaux
  sociaux, fondateurs, et **deux `location`** (Libreville, Gabon et Fort Worth,
  Texas, US) via `areaServed` / `address`.
- Le `title` et la `description` doivent mentionner **Libreville** *et*
  **Fort Worth** — c'est un signal de recherche utile sur les deux marchés.
- `sitemap.xml`, `robots.txt`, URL canonique, `lang="fr"` sur `<html>`.

---

## 9. Design & identité visuelle

- **Palette** : déclarée en variables CSS dans `src/app/globals.css`
  (`--color-accent`, `--color-bg`, `--color-text`, etc.) via `@theme inline`
  pour pouvoir changer l'identité d'un coup. Valeurs par défaut posées à
  l'Étape 1 (accent violet `#5B4BF5`) — à ajuster selon la charte définitive
  du studio.
- **Typographie** : **Space Grotesk** (titres, `--font-display`) + **Inter**
  (texte courant, `--font-sans`), chargées via `next/font/google`.
- **Style** : moderne, épuré, beaucoup d'espace blanc, arrondis cohérents,
  ombres douces. Éviter l'effet « template générique ».
- **Animations** : discrètes — apparition au scroll, léger `hover` sur les
  cartes. Jamais d'animation qui retarde la lecture du contenu.

---

## 10. Conventions de code

- **TypeScript strict** (`strict: true`), pas de `any` non justifié.
- Composants **fonctionnels**, un par fichier, `PascalCase`.
- **Tailwind** pour tout le style ; pas de CSS inline sauf exception.
- Contenu éditorial **uniquement** dans `src/data/`.
- Hooks `useCamelCase`, constantes `SCREAMING_SNAKE_CASE`.
- Commits en français : `feat:`, `fix:`, `style:`, `docs:`.
- **Ne jamais** committer `.env.local`.

---

## 11. Variables d'environnement (`.env.local`)

```
NEXT_PUBLIC_SITE_URL=
RESEND_API_KEY=              # ou FORMSPREE_ENDPOINT
CONTACT_TO_EMAIL=
```

---

## 12. Feuille de route

**Phase 1 — Socle** ✅ (2026-09-06)
Init Next.js + Tailwind + Framer Motion, layout, fichiers `data/` à venir,
responsive de base, jetons de couleur/typo.

**Phase 2 — Contenu** ✅ (2026-09-06)
Navbar + menu hamburger, Footer, Hero à deux fondateurs, À propos + stats
animées, Compétences, Services, Portfolio + filtres, Expérience (timeline),
Témoignages, CTA.

**Phase 3 — Conversion & finitions** ✅ (2026-09-06)
Formulaire de contact fonctionnel (Resend), WhatsApp, email, SEO/OG/JSON-LD,
sitemap/robots, accessibilité (focus visible, contrastes AA, reduced-motion),
audit Lighthouse (Performance 94 · Accessibilité 100 · Bonnes pratiques 100 ·
SEO 100 — build de production, throttling mobile simulé).

---

## 13. État du projet et prochaines étapes

Les 3 phases sont **fonctionnellement complètes** — structure, sections,
responsive, accessibilité et SEO technique en place. Reste **avant mise en
ligne réelle** (contenu, pas de code) :

1. **Fondateurs** : noms de famille, rôles, photos (`public/images/fondateurs/`), bios.
2. **Textes** : tagline (Hero) et texte « À propos » — actuellement des `TODO`
   visibles à l'écran, à rédiger et remplacer dans `src/data/profile.ts`.
3. **Chiffres réels** : `stats.projects`, `stats.yearsExperience`, `stats.clients`
   (actuellement à `0`).
4. **Contenu à ajouter au fur et à mesure** : projets (`src/data/projects.ts`),
   expérience (`src/data/experience.ts`), témoignages (`src/data/testimonials.ts`)
   — tous vides pour l'instant, avec état vide géré proprement en attendant.
5. **Descriptions des 8 services** (1-2 phrases chacune) dans `src/data/services.ts`.
6. **Resend** : créer un compte, générer une clé API, renseigner
   `RESEND_API_KEY` et `CONTACT_TO_EMAIL` dans `.env.local` (le formulaire
   affiche un message clair tant que ce n'est pas fait plutôt que d'échouer
   silencieusement). Vérifier un domaine dans Resend et mettre à jour l'adresse
   `from` dans `src/app/api/contact/route.ts` (actuellement l'adresse bac à
   sable `onboarding@resend.dev`).
7. **WhatsApp** : numéro renseigné (`24104867777`, dérivé de +241 04867777) —
   tester le lien `wa.me` généré sur le site ; si besoin, retirer le `0` initial.
8. **`NEXT_PUBLIC_SITE_URL`** dans `.env.local` une fois le domaine choisi
   (utilisé par les métadonnées SEO, le sitemap et le JSON-LD).
9. **Logo réel** (`public/logo.svg`) — un texte de marque est utilisé en
   attendant. Image Open Graph générée dynamiquement (`src/app/opengraph-image.tsx`)
   en attendant de vraies photos.
10. **Mentions légales** (`src/app/mentions-legales/page.tsx`) : page stub à rédiger.
