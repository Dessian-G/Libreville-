export interface Skill {
  name: string;
  level: number; // 0-100
  icon: string; // nom d'icône lucide-react (PascalCase)
}

// TODO: les niveaux ci-dessous sont des valeurs de départ (placeholder) —
// à valider avec le studio avant mise en ligne. Ne pas présenter comme réels.
export const skills: Skill[] = [
  { name: "Design graphique", level: 80, icon: "Palette" },
  { name: "Développement web", level: 80, icon: "Code2" },
  { name: "UI/UX", level: 80, icon: "LayoutTemplate" },
  { name: "Intelligence artificielle", level: 80, icon: "BrainCircuit" },
  { name: "Marketing digital", level: 80, icon: "TrendingUp" },
  { name: "Communication", level: 80, icon: "MessagesSquare" },
];
