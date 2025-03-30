
export type MedievalIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type MedievalIconColor = 
  | 'gold' 
  | 'silver' 
  | 'bronze' 
  | 'royal' 
  | 'crimson' 
  | 'navy' 
  | 'platinum'
  | 'default'
  | 'purple'
  | 'emerald'
  | 'azure';

export type MedievalDecorationColor = 
  | 'gold' 
  | 'silver' 
  | 'bronze' 
  | 'royal' 
  | 'crimson' 
  | 'navy' 
  | 'platinum'
  | 'default'
  | 'purple'
  | 'emerald'
  | 'azure';

export interface BaseDecorationProps {
  color?: MedievalIconColor;
  size?: MedievalIconSize;
  className?: string;
}

export const sizeClasses = {
  xs: 'h-4 w-4',
  sm: 'h-6 w-6',
  md: 'h-8 w-8',
  lg: 'h-10 w-10',
  xl: 'h-12 w-12'
};

export const toMedievalIconColor = (color: string): MedievalIconColor => {
  const validColors: MedievalIconColor[] = [
    'gold', 'silver', 'bronze', 'royal', 'crimson', 
    'navy', 'platinum', 'default', 'purple', 'emerald', 'azure'
  ];
  
  return validColors.includes(color as MedievalIconColor) 
    ? color as MedievalIconColor 
    : 'default';
};

export const getColorClass = (color: MedievalIconColor): string => {
  const colorMap: Record<MedievalIconColor, string> = {
    gold: 'text-royal-gold',
    silver: 'text-gray-300',
    bronze: 'text-amber-600',
    royal: 'text-royal-blue',
    crimson: 'text-royal-crimson',
    navy: 'text-royal-navy',
    platinum: 'text-royal-platinum',
    default: 'text-white',
    purple: 'text-purple-500',
    emerald: 'text-emerald-500',
    azure: 'text-sky-400'
  };
  
  return colorMap[color] || 'text-white';
};
