
export type RoyalDividerVariant = 'line' | 'double' | 'fancy' | 'ornate' | 'simple';
export type RoyalDividerColor = 'default' | 'royal' | 'gold' | 'crimson' | 'purple';

export interface RoyalDividerProps {
  variant?: RoyalDividerVariant;
  label?: string;
  color?: RoyalDividerColor;
  className?: string;
}

export type RoyalDecorationType = 'border' | 'corner' | 'shield' | 'crown' | 'banner' | 'insignia' | 'swords';
