
// Medieval decoration types
export type MedievalIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
export type MedievalIconColor = 'default' | 'gold' | 'silver' | 'royal' | 'crimson' | 'emerald' | 'obsidian' | 'azure';
export type MedievalDecorationColor = MedievalIconColor;

export interface BaseDecorationProps {
  size?: MedievalIconSize;
  color?: MedievalIconColor;
  className?: string;
}

export type RoyalDividerVariant = 'line' | 'double' | 'fancy';

export interface RoyalDividerProps extends BaseDecorationProps {
  variant?: RoyalDividerVariant;
}

// Helper function to convert color to class
export const getColorClass = (color: MedievalIconColor): string => {
  switch(color) {
    case 'gold': return 'text-royal-gold';
    case 'silver': return 'text-gray-300';
    case 'royal': return 'text-purple-500';
    case 'crimson': return 'text-red-600';
    case 'emerald': return 'text-emerald-500';
    case 'obsidian': return 'text-gray-800';
    case 'azure': return 'text-blue-500';
    default: return 'text-royal-gold';
  }
};

// Helper functions to convert icon types
export const toMedievalIconColor = (color?: string): MedievalIconColor => {
  if (!color) return 'default';
  
  switch(color) {
    case 'gold': return 'gold';
    case 'silver': return 'silver';
    case 'royal': return 'royal';
    case 'crimson': return 'crimson';
    case 'emerald': return 'emerald';
    case 'obsidian': return 'obsidian';
    case 'azure': return 'azure';
    default: return 'default';
  }
};

// Size classes mapping
export const sizeClasses: Record<MedievalIconSize, string> = {
  'xs': 'w-4 h-4',
  'sm': 'w-6 h-6',
  'md': 'w-8 h-8',
  'lg': 'w-12 h-12',
  'xl': 'w-16 h-16',
  '2xl': 'w-24 h-24',
  '3xl': 'w-32 h-32'
};
