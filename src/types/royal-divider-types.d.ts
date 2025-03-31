
export type RoyalDividerVariant = 'line' | 'double' | 'fancy' | 'ornate' | 'simple' | 'crown' | 'scroll';
export type RoyalDividerColor = 'default' | 'royal' | 'gold' | 'crimson' | 'purple' | 'navy' | 'emerald';

export interface RoyalDividerProps {
  variant?: RoyalDividerVariant;
  label?: string;
  color?: RoyalDividerColor;
  className?: string;
}

export type RoyalDecorationType = 'border' | 'corner' | 'shield' | 'crown' | 'banner' | 'insignia' | 'swords';
