
// Types for decorations used throughout the application

export type RoyalDecorationType = 
  | 'border' 
  | 'corner' 
  | 'divider' 
  | 'crown' 
  | 'shield'
  | 'scroll'
  | 'banner';

export type RoyalDecorationSize = 
  | 'xs'
  | 'sm' 
  | 'md' 
  | 'lg'
  | 'xl'
  | '2xl';

export type RoyalDecorationColor = 
  | 'gold'
  | 'silver'
  | 'bronze'
  | 'royal'
  | 'crimson'
  | 'emerald'
  | 'obsidian';

export interface BaseDecorationProps {
  className?: string;
  size?: RoyalDecorationSize;
  color?: RoyalDecorationColor;
  animated?: boolean;
}

export interface RoyalDividerProps extends BaseDecorationProps {
  variant?: RoyalDividerVariant;
}

export type RoyalDividerVariant = 'line' | 'double' | 'fancy' | 'ornate';
