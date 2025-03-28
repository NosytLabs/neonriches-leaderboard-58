
export type MedievalIconName = 
  'crown' | 
  'sword' | 
  'shield' | 
  'castle' | 
  'chalice' | 
  'scroll' | 
  'dragon' | 
  'knight' | 
  'bow' | 
  'axe' | 
  'fleur-de-lis' | 
  'gem' |
  'coins' |
  'cross';

export type MedievalIconSize = 
  'xs' | 
  'sm' | 
  'md' | 
  'lg' | 
  'xl' | 
  '2xl' | 
  '3xl' |
  '4xl';

export type MedievalIconColor = 
  'gold' | 
  'silver' | 
  'bronze' |
  'royal-gold' | 
  'royal-silver' | 
  'royal-crimson' | 
  'royal-purple' | 
  'royal-blue' | 
  'royal-navy';

export type MedievalDecorationType = 
  'border-pattern' | 
  'coat-of-arms' | 
  'corner-flourish' | 
  'crossed-swords' | 
  'royal-banner' | 
  'royal-insignia';

// Make MedievalDecorationSize match MedievalIconSize for consistency
export type MedievalDecorationSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';

export type MedievalDecorationColor = MedievalIconColor;

export interface BaseDecorationProps {
  size?: MedievalDecorationSize;
  color?: MedievalDecorationColor;
  className?: string;
  animate?: boolean;
  icon?: MedievalIconName;
}

export interface RoyalDividerProps {
  variant?: RoyalDividerVariant;
  className?: string;
}

export type RoyalDividerVariant = 
  'simple' | 
  'ornate' | 
  'crowned' | 
  'dual' | 
  'royal';

// Size mappings for decoration components
export const sizeClasses = {
  xs: {
    container: 'w-8 h-8',
    icon: 'xs' as MedievalIconSize,
    border: 'border'
  },
  sm: {
    container: 'w-16 h-16',
    icon: 'sm' as MedievalIconSize,
    border: 'border-2'
  },
  md: {
    container: 'w-24 h-24',
    icon: 'md' as MedievalIconSize,
    border: 'border-2'
  },
  lg: {
    container: 'w-32 h-32',
    icon: 'lg' as MedievalIconSize,
    border: 'border-3'
  },
  xl: {
    container: 'w-48 h-48',
    icon: 'xl' as MedievalIconSize,
    border: 'border-4'
  },
  '2xl': {
    container: 'w-64 h-64',
    icon: '2xl' as MedievalIconSize,
    border: 'border-4'
  },
  '3xl': {
    container: 'w-80 h-80',
    icon: '2xl' as MedievalIconSize, // Limited to '2xl' as that's the largest icon size
    border: 'border-4'
  },
  '4xl': {
    container: 'w-96 h-96',
    icon: '2xl' as MedievalIconSize, // Limited to '2xl' as that's the largest icon size
    border: 'border-4'
  }
};

// Helper function to get color classes
export const getColorClass = (color: MedievalDecorationColor = 'gold', type: 'text' | 'border' = 'text'): string => {
  const colorMap = {
    'gold': { text: 'text-royal-gold', border: 'border-royal-gold/30' },
    'silver': { text: 'text-silver-gray', border: 'border-silver-gray/30' },
    'bronze': { text: 'text-amber-600', border: 'border-amber-600/30' },
    'royal-gold': { text: 'text-royal-gold', border: 'border-royal-gold/30' },
    'royal-silver': { text: 'text-royal-silver', border: 'border-royal-silver/30' },
    'royal-crimson': { text: 'text-royal-crimson', border: 'border-royal-crimson/30' },
    'royal-purple': { text: 'text-royal-purple', border: 'border-royal-purple/30' },
    'royal-blue': { text: 'text-royal-blue', border: 'border-royal-blue/30' },
    'royal-navy': { text: 'text-royal-navy', border: 'border-royal-navy/30' }
  };
  
  return colorMap[color]?.[type] || (type === 'text' ? 'text-royal-gold' : 'border-royal-gold/30');
};

export const toMedievalIconColor = (color: MedievalDecorationColor): MedievalIconColor => {
  // This acts as a type guard to ensure the color is valid
  return color;
};
