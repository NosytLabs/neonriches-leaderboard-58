
// Defining the allowed icon names
export type MedievalIconName = 
  'crown' | 
  'scroll' | 
  'shield' | 
  'sword' | 
  'coin' | 
  'coins' | 
  'chalice' | 
  'castle' | 
  'dragon' | 
  'knight' | 
  'throne' |
  'seal' |
  'medal' |
  'heart' |
  'trophy' |
  'key' |
  'wallet' |
  'user' |
  'message' |
  'gem' |
  'sparkles' |
  'flame' |
  'sunburst' |
  'water';

// Defining the allowed icon sizes
export type MedievalIconSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'xs';

// Defining the allowed colors
export type MedievalIconColor = 
  'gold' | 
  'silver' | 
  'bronze' |
  'red' | 
  'blue' | 
  'green' | 
  'purple' | 
  'amber' |
  'copper' |
  'crimson' |
  'navy' |
  'emerald' |
  'default' |
  'white' |
  'platinum' |
  'royal';

// Props interface for the MedievalIcon component
export interface MedievalIconProps {
  name: MedievalIconName;
  size?: MedievalIconSize;
  color?: MedievalIconColor;
  className?: string;
  animate?: boolean;
}

// Base decoration props that include animate property
export interface BaseDecorationProps {
  size?: MedievalDecorationSize;
  color?: MedievalDecorationColor;
  className?: string;
  animate?: boolean;
  icon?: MedievalIconName;
}

// Mapping sizes to CSS classes for consistent sizing
export const MEDIEVAL_ICON_SIZES: Record<MedievalIconSize, { container: string; icon: MedievalIconSize; border: string; }> = {
  'xs': {
    container: 'w-4 h-4',
    icon: 'sm', // xs maps to sm since we don't have an actual xs size
    border: 'border-[1px]'
  },
  'sm': {
    container: 'w-6 h-6',
    icon: 'sm',
    border: 'border-[1px]'
  },
  'md': {
    container: 'w-8 h-8',
    icon: 'md',
    border: 'border-2'
  },
  'lg': {
    container: 'w-12 h-12',
    icon: 'lg',
    border: 'border-2'
  },
  'xl': {
    container: 'w-16 h-16',
    icon: 'xl',
    border: 'border-3'
  },
  '2xl': {
    container: 'w-24 h-24',
    icon: '2xl',
    border: 'border-4'
  }
};

// Mapping colors to CSS classes for the icon
export const MEDIEVAL_ICON_COLORS: Record<MedievalIconColor, string> = {
  'gold': 'text-royal-gold',
  'silver': 'text-silver-gray',
  'bronze': 'text-amber-600',
  'copper': 'text-amber-700',
  'crimson': 'text-royal-crimson',
  'navy': 'text-royal-navy',
  'emerald': 'text-emerald-500',
  'red': 'text-red-500',
  'blue': 'text-blue-500',
  'green': 'text-green-500',
  'purple': 'text-purple-500',
  'amber': 'text-amber-500',
  'default': 'text-white',
  'white': 'text-white',
  'platinum': 'text-platinum-300',
  'royal': 'text-royal-gold'
};

// Mapping colors to CSS classes for the border/background
export const MEDIEVAL_ICON_BG_COLORS: Record<MedievalIconColor, string> = {
  'gold': 'from-royal-gold/20 to-royal-gold/10 border-royal-gold/30',
  'silver': 'from-gray-400/20 to-gray-300/10 border-gray-400/30',
  'bronze': 'from-amber-600/20 to-amber-700/10 border-amber-600/30',
  'copper': 'from-amber-700/20 to-amber-800/10 border-amber-700/30',
  'crimson': 'from-royal-crimson/20 to-royal-crimson/10 border-royal-crimson/30',
  'navy': 'from-royal-navy/20 to-royal-navy/10 border-royal-navy/30',
  'emerald': 'from-emerald-500/20 to-emerald-600/10 border-emerald-500/30',
  'red': 'from-red-500/20 to-red-600/10 border-red-500/30',
  'blue': 'from-blue-500/20 to-blue-600/10 border-blue-500/30',
  'green': 'from-green-500/20 to-green-600/10 border-green-500/30',
  'purple': 'from-purple-500/20 to-purple-600/10 border-purple-500/30',
  'amber': 'from-amber-500/20 to-amber-600/10 border-amber-500/30',
  'default': 'from-white/10 to-white/5 border-white/20',
  'white': 'from-white/20 to-white/10 border-white/30',
  'platinum': 'from-platinum-300/20 to-platinum-300/10 border-platinum-300/30',
  'royal': 'from-royal-gold/20 to-royal-gold/10 border-royal-gold/30'
};

// Helper functions for using medieval decorations
export type MedievalDecorationType = 'top' | 'bottom' | 'left' | 'right' | 'corner' | 'center';
export type MedievalDecorationSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl'; // Added '2xl'
export type MedievalDecorationColor = MedievalIconColor;

export const sizeClasses: Record<MedievalDecorationSize, string> = {
  'sm': 'w-16 h-16',
  'md': 'w-24 h-24',
  'lg': 'w-32 h-32',
  'xl': 'w-48 h-48',
  '2xl': 'w-64 h-64' // Added 2xl
};

export const getColorClass = (color: MedievalDecorationColor = 'gold'): string => {
  return MEDIEVAL_ICON_COLORS[color] || MEDIEVAL_ICON_COLORS.gold;
};

export const toMedievalIconColor = (color: string): MedievalIconColor => {
  return (color as MedievalIconColor) || 'gold';
};

export type RoyalDividerVariant = 'simple' | 'ornate' | 'royal' | 'scroll' | 'fancy' | 'line' | 'double';

export interface RoyalDividerProps {
  variant?: RoyalDividerVariant;
  color?: MedievalIconColor;
  className?: string;
}
