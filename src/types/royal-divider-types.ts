
/**
 * Types for the Royal Divider component
 */

export type RoyalDividerVariant = 'line' | 'double' | 'fancy' | 'ornate' | 'crown' | 'simple';
export type RoyalDividerColor = 'default' | 'royal' | 'gold' | 'crimson' | 'navy' | 'purple';
export type RoyalDividerSize = 'sm' | 'md' | 'lg' | 'xl';

export interface RoyalDividerProps {
  variant?: RoyalDividerVariant;
  color?: RoyalDividerColor;
  className?: string;
  size?: RoyalDividerSize;
  label?: string;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}
