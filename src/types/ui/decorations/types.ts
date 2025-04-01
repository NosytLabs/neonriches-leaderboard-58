
// MedievalIconName defines all available icon names for medieval UI elements
export type MedievalIconName = 
  | 'crown'
  | 'shield'
  | 'sword'
  | 'banner'
  | 'scroll'
  | 'goblet'
  | 'castle'
  | 'dragon'
  | 'knight'
  | 'king'
  | 'queen'
  | 'jester'
  | 'wizard'
  | 'coin'
  | 'treasure'
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
  | 'mace';

// MedievalIconColor defines all available colors for medieval UI elements
export type MedievalIconColor = 
  | 'gold'
  | 'royal'
  | 'silver'
  | 'bronze'
  | 'red'
  | 'blue'
  | 'green'
  | 'purple';

// MedievalIconSize defines all available sizes for medieval UI elements
export type MedievalIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// Define IconSize and IconColor for use in standard components
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type IconColor = 
  | 'primary' 
  | 'secondary' 
  | 'muted' 
  | 'accent'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'royal'
  | 'gold'
  | 'silver'
  | 'bronze'
  | 'red'
  | 'blue'
  | 'green'
  | 'purple'
  | 'crimson';

// Various size maps for consistent sizing
export const iconSizeMap: Record<MedievalIconSize, string> = {
  'xs': 'w-3 h-3',
  'sm': 'w-4 h-4',
  'md': 'w-6 h-6',
  'lg': 'w-8 h-8',
  'xl': 'w-10 h-10'
};

// Color maps for consistent coloring
export const iconColorMap: Record<MedievalIconColor, string> = {
  'gold': 'text-royal-gold',
  'royal': 'text-royal-purple',
  'silver': 'text-gray-300',
  'bronze': 'text-amber-700',
  'red': 'text-red-500',
  'blue': 'text-blue-500',
  'green': 'text-green-500',
  'purple': 'text-purple-500'
};

// Interface for base decoration props
export interface BaseDecorationProps {
  color?: MedievalIconColor | string;
  size?: IconSize;
  animate?: boolean;
  className?: string;
}

// Interface for component size classes
export interface SizeClassObj {
  container: string;
  icon: IconSize;
  border: string;
}

export type SizeClassType = string | SizeClassObj;

// Size mapping for decorations
export const sizeClasses: Record<IconSize, SizeClassType> = {
  'xs': { container: 'w-4 h-4', icon: 'xs', border: 'border border-[1px]' },
  'sm': { container: 'w-6 h-6', icon: 'sm', border: 'border border-[1px]' },
  'md': { container: 'w-8 h-8', icon: 'md', border: 'border border-[2px]' },
  'lg': { container: 'w-12 h-12', icon: 'lg', border: 'border border-[2px]' },
  'xl': { container: 'w-16 h-16', icon: 'xl', border: 'border border-[3px]' }
};

// Get color class for backgrounds, borders, etc.
export const getColorClass = (color: string, type: 'text' | 'border' | 'bg' = 'border'): string => {
  const colorClasses: Record<string, Record<string, string>> = {
    text: {
      'gold': 'text-royal-gold',
      'royal': 'text-royal-purple',
      'default': 'text-white/70',
      'crimson': 'text-royal-crimson',
      'purple': 'text-purple-500',
      'navy': 'text-royal-navy',
    },
    border: {
      'gold': 'border-royal-gold',
      'royal': 'border-royal-purple',
      'default': 'border-white/20',
      'crimson': 'border-royal-crimson',
      'purple': 'border-purple-500',
      'navy': 'border-royal-navy',
    },
    bg: {
      'gold': 'bg-royal-gold',
      'royal': 'bg-royal-purple',
      'default': 'bg-white/10',
      'crimson': 'bg-royal-crimson',
      'purple': 'bg-purple-500',
      'navy': 'bg-royal-navy',
    }
  };
  
  return colorClasses[type][color] || colorClasses[type]['default'];
};

// Convert color string to MedievalIconColor
export const toMedievalIconColor = (color?: string): MedievalIconColor => {
  if (!color) return 'gold';
  
  switch (color.toLowerCase()) {
    case 'gold': return 'gold';
    case 'royal': return 'royal';
    case 'silver': return 'silver';
    case 'bronze': return 'bronze';
    case 'red': return 'red';
    case 'blue': return 'blue';
    case 'green': return 'green';
    case 'purple': return 'purple';
    default: return 'gold';
  }
};

// Define RoyalDividerColor type
export type RoyalDividerColor = 'default' | 'royal' | 'gold' | 'crimson' | 'purple' | 'navy';
