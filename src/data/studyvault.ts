/**
 * Static data for StudyVault.
 *
 * Centralised here so every component draws from a single source.
 * When you add a real backend, replace these exports with fetch calls
 * and the component interfaces stay unchanged.
 */

import type { Matiere, FicheRecente, StatItem, NavItem } from '../types';

// ─── Navigation ──────────────────────────────────────────────────────────────

export const NAV_ITEMS: NavItem[] = [
  { href: '/',          icon: '⌂', label: 'Accueil'    },
  { href: '/fiches',    icon: '◫', label: 'Fiches'     },
  { href: '/exercices', icon: '✎', label: 'Exercices'  },
  { href: '/cours',     icon: '⊞', label: 'Cours'      },
  { href: '/matieres',  icon: '◈', label: 'Matières'   },
];

export const NAV_BOTTOM: NavItem[] = [
  { href: '/parametres', icon: '⊙', label: 'Paramètres' },
];

// ─── Matières ────────────────────────────────────────────────────────────────

export const MATIERES: Matiere[] = [
  { nom: 'Mathématiques', icone: '∑',   couleur: '#7C9EC9', fiches: 12, exercices: 34, slug: 'mathematiques' },
  { nom: 'Physique',      icone: '⚛',   couleur: '#C98B7C', fiches: 8,  exercices: 21, slug: 'physique'      },
  { nom: 'Informatique',  icone: '</>',  couleur: '#7CC9A0', fiches: 15, exercices: 47, slug: 'informatique'  },
  { nom: 'Chimie',        icone: '⚗',   couleur: '#C9C37C', fiches: 6,  exercices: 18, slug: 'chimie'        },
  { nom: 'Littérature',   icone: '❝',   couleur: '#B07CC9', fiches: 9,  exercices: 5,  slug: 'litterature'   },
  { nom: 'Histoire',      icone: '⧖',   couleur: '#C97C9E', fiches: 11, exercices: 8,  slug: 'histoire'      },
];

// ─── Fiches récentes ─────────────────────────────────────────────────────────

export const FICHES_RECENTES: FicheRecente[] = [
  { titre: 'Intégrales par parties',   matiere: 'Mathématiques', type: 'fiche',    date: '24 mars', couleur: '#7C9EC9' },
  { titre: 'Les lois de Newton',       matiere: 'Physique',      type: 'fiche',    date: '22 mars', couleur: '#C98B7C' },
  { titre: 'Récursivité en Python',    matiere: 'Informatique',  type: 'exercice', date: '20 mars', couleur: '#7CC9A0' },
  { titre: 'Liaisons covalentes',      matiere: 'Chimie',        type: 'fiche',    date: '19 mars', couleur: '#C9C37C' },
  { titre: 'La Révolution française',  matiere: 'Histoire',      type: 'cours',    date: '17 mars', couleur: '#C97C9E' },
];

// ─── Dashboard stats ─────────────────────────────────────────────────────────

export const STATS: StatItem[] = [
  { value: 61,  label: 'Fiches de cours', icon: '◫', accent: '#7C9EC9' },
  { value: 133, label: 'Exercices',        icon: '✎', accent: '#7CC9A0' },
  { value: 6,   label: 'Matières',         icon: '◈', accent: '#C9C37C' },
  { value: 24,  label: 'Cette semaine',    icon: '⧖', accent: '#C97C9E' },
];
