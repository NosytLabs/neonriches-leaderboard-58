
export interface BaseDecorationProps {
  // Size properties
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  // Color properties
  color?: 'default' | 'gold' | 'royal' | 'crimson' | 'navy' | 'purple';
  // Additional styling
  className?: string;
  animated?: boolean;
  // Icon properties
  icon?: string;
  // Position/layout properties
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center' | 'top-center';
}

export type DecorationProps = BaseDecorationProps;

// Define getColorClass helper
export const getColorClass = (color?: string): string => {
  const colorMap: Record<string, string> = {
    'default': 'text-white',
    'gold': 'text-royal-gold',
    'silver': 'text-gray-300',
    'bronze': 'text-amber-600',
    'red': 'text-red-500',
    'blue': 'text-blue-500',
    'green': 'text-green-500',
    'purple': 'text-purple-500',
    'crimson': 'text-royal-crimson',
    'royal': 'text-royal-purple',
    'navy': 'text-royal-navy'
  };
  
  return colorMap[color || 'default'] || colorMap.default;
};

// Medieval icon types
export type MedievalIconName = 
  | 'crown' 
  | 'scroll'
  | 'shield'
  | 'sword'
  | 'banner'
  | 'goblet'
  | 'dragon'
  | 'knight'
  | 'king'
  | 'queen'
  | 'jester'
  | 'wizard'
  | 'coin'
  | 'treasure'
  | 'treasure-chest'
  | 'horse'
  | 'fleur'
  | 'chalice'
  | 'throne'
  | 'crossed-swords'
  | 'helmet'
  | 'bow'
  | 'arrow'
  | 'candle'
  | 'torch'
  | 'flag'
  | 'axe'
  | 'mace'
  | 'castle'
  | 'tower'
  | 'goblet';

export type IconColor = 
  | 'default'
  | 'gold'
  | 'silver'
  | 'bronze'
  | 'red'
  | 'blue'
  | 'green'
  | 'purple'
  | 'crimson'
  | 'navy'
  | 'royal'
  | string;

export type MedievalIconColor = IconColor;

export type DecorationSize = 
  | 'xs' 
  | 'sm' 
  | 'md' 
  | 'lg' 
  | 'xl' 
  | '2xl' 
  | '3xl'
  | '4xl';

// Size classes for decorations
export const sizeClasses: Record<DecorationSize, string> = {
  'xs': 'h-4 w-4',
  'sm': 'h-6 w-6',
  'md': 'h-8 w-8',
  'lg': 'h-10 w-10',
  'xl': 'h-12 w-12',
  '2xl': 'h-16 w-16',
  '3xl': 'h-20 w-20',
  '4xl': 'h-24 w-24'
};

export type RoyalDividerColor = 'default' | 'royal' | 'gold' | 'crimson' | 'navy' | 'purple';

// Type for icon sizes that matches iconProps
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

// Add MedievalIconSize type alias for backward compatibility
export type MedievalIconSize = IconSize;
