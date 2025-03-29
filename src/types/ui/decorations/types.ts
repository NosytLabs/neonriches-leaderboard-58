
export type MedievalIconColor = 'gold' | 'silver' | 'bronze' | 'crimson' | 'royal' | 'navy' | 'emerald' | 'purple' | 'platinum';
export type MedievalDecorationColor = 'gold' | 'silver' | 'bronze' | 'crimson' | 'royal' | 'navy' | 'emerald' | 'purple' | 'royal';
export type MedievalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface BaseDecorationProps {
  className?: string;
  size?: MedievalSize;
  color?: MedievalDecorationColor;
  animate?: boolean;
  icon?: boolean;
}

export type RoyalDividerVariant = 'fancy' | 'line' | 'double' | 'ornate' | 'simple';

export interface RoyalDividerProps extends BaseDecorationProps {
  variant?: RoyalDividerVariant;
  color?: 'default' | 'royal' | 'gold' | 'crimson' | 'purple';
}

export const sizeClasses: Record<MedievalSize, string> = {
  'xs': 'h-4 w-4',
  'sm': 'h-6 w-6',
  'md': 'h-8 w-8',
  'lg': 'h-10 w-10',
  'xl': 'h-12 w-12',
  '2xl': 'h-16 w-16'
};

export const getColorClass = (color: MedievalDecorationColor): string => {
  switch (color) {
    case 'gold': return 'text-royal-gold';
    case 'silver': return 'text-slate-300';
    case 'bronze': return 'text-amber-700';
    case 'crimson': return 'text-royal-crimson';
    case 'royal': return 'text-royal-purple';
    case 'navy': return 'text-royal-navy';
    case 'emerald': return 'text-emerald-500';
    case 'purple': return 'text-purple-500';
    default: return 'text-royal-gold';
  }
};

export const toMedievalIconColor = (color: MedievalDecorationColor): MedievalIconColor => {
  if (color === 'royal') return 'royal';
  return color as MedievalIconColor;
};
