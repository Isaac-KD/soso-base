/**
 * Domain types for StudyVault.
 * Keep all shared interfaces here — never duplicate inline.
 */

export interface Matiere {
  nom: string;
  icone: string;
  couleur: string;
  fiches: number;
  exercices: number;
  slug: string;
}

export interface FicheRecente {
  titre: string;
  matiere: string;
  /** Union of known content types */
  type: 'fiche' | 'exercice' | 'cours';
  date: string;
  /** Hex colour matching the parent matiere */
  couleur: string;
}

export interface StatItem {
  value: number;
  label: string;
  icon: string;
  accent: string;
}

export interface NavItem {
  href: string;
  icon: string;
  label: string;
}
