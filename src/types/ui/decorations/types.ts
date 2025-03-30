
export type MedievalIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type MedievalIconColor = 
  | 'default'
  | 'gold'
  | 'silver'
  | 'bronze'
  | 'royal'
  | 'crimson'
  | 'emerald'
  | 'sapphire'
  | 'amethyst';

export type MedievalDecorationColor = MedievalIconColor;

// Helper functions to get classes for decorations
export const sizeClasses: Record<MedievalIconSize, string> = {
  'xs': 'w-4 h-4',
  'sm': 'w-5 h-5',
  'md': 'w-6 h-6',
  'lg': 'w-8 h-8',
  'xl': 'w-10 h-10',
  '2xl': 'w-12 h-12'
};

export const toMedievalIconColor = (color: string): MedievalIconColor => {
  switch (color) {
    case 'gold': return 'gold';
    case 'silver': return 'silver';
    case 'bronze': return 'bronze';
    case 'royal': return 'royal';
    case 'crimson': return 'crimson';
    case 'emerald': return 'emerald';
    case 'sapphire': return 'sapphire';
    case 'amethyst': return 'amethyst';
    default: return 'default';
  }
};

export const getColorClass = (color: MedievalIconColor): string => {
  switch (color) {
    case 'gold': return 'text-royal-gold';
    case 'silver': return 'text-royal-silver';
    case 'bronze': return 'text-royal-bronze';
    case 'royal': return 'text-royal-purple';
    case 'crimson': return 'text-royal-crimson';
    case 'emerald': return 'text-emerald-500';
    case 'sapphire': return 'text-blue-500';
    case 'amethyst': return 'text-purple-500';
    default: return 'text-white';
  }
};
