
export interface BaseDecorationProps {
  // Size properties
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  // Color properties
  color?: 'default' | 'gold' | 'royal' | 'crimson';
  // Additional styling
  className?: string;
  animate?: boolean;
  // Icon properties
  icon?: string;
  // Position/layout properties
  container?: string;
  border?: string;
  // Decoration specific properties
  variant?: string;
  type?: string;
  // Children for composite decorations
  children?: React.ReactNode;
  // Style for special decorations
  style?: React.CSSProperties;
  // Position property for corner decorations
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
}

export type DecorationProps = BaseDecorationProps;

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

export type MedievalIconColor = 
  | 'default'
  | 'gold'
  | 'silver'
  | 'bronze'
  | 'red'
  | 'blue'
  | 'green'
  | 'purple'
  | 'crimson'
  | 'royal';

export type DecorationSize = 
  | 'xs' 
  | 'sm' 
  | 'md' 
  | 'lg' 
  | 'xl' 
  | '2xl' 
  | '3xl'
  | '4xl';

// Export utility functions to help with decoration properties
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
    'royal': 'text-royal-purple'
  };
  
  return colorMap[color || 'default'] || colorMap.default;
};

export const toMedievalIconColor = (color?: string): MedievalIconColor => {
  const validColors: MedievalIconColor[] = [
    'default', 'gold', 'silver', 'bronze', 
    'red', 'blue', 'green', 'purple', 
    'crimson', 'royal'
  ];
  
  if (!color || !validColors.includes(color as MedievalIconColor)) {
    return 'default';
  }
  
  return color as MedievalIconColor;
};

// Type for icon sizes that matches iconProps
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
