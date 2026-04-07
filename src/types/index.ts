// src/types/index.ts

export interface NavItem {
  label: string;
  href?: string;
  icon?: string;
  dotColor?: string;
  badge?: string | number;
  count?: string | number;
  active?: boolean;
}

export interface NavSection {
  title?: string;
  items: NavItem[];
}