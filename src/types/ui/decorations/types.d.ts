
export type MedievalIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type MedievalIconColor = 'default' | 'gold' | 'silver' | 'bronze' | 'royal' | 'crimson' | 'navy' | 'purple' | 'emerald' | 'azure' | 'platinum';

export interface BaseDecorationProps {
  size?: MedievalIconSize;
  color?: MedievalIconColor;
  className?: string;
  animated?: boolean;
}

export const getColorClass = (color: MedievalIconColor): string => {
  switch (color) {
    case 'gold': return 'text-royal-gold';
    case 'silver': return 'text-gray-300';
    case 'bronze': return 'text-amber-700';
    case 'royal': return 'text-royal-purple';
    case 'crimson': return 'text-royal-crimson';
    case 'navy': return 'text-royal-navy';
    case 'purple': return 'text-purple-500';
    case 'emerald': return 'text-emerald-500';
    case 'azure': return 'text-blue-400';
    case 'platinum': return 'text-gray-200';
    default: return 'text-white';
  }
};

export const toMedievalIconColor = (color: string): MedievalIconColor => {
  if (color === 'gold' || color === 'silver' || color === 'bronze' || color === 'royal' || 
      color === 'crimson' || color === 'navy' || color === 'purple' || color === 'emerald' || 
      color === 'azure' || color === 'platinum') {
    return color as MedievalIconColor;
  }
  return 'default';
};
