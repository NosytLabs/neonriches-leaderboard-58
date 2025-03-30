
// Medieval decoration types
export type MedievalDecorationType = 
  | 'ornament' 
  | 'border' 
  | 'frame' 
  | 'corners' 
  | 'divider'
  | 'symbol'
  | 'crown'
  | 'crest'
  | 'banner'
  | 'shield'
  | 'scroll'
  | 'flourish'
  | 'top'
  | 'bottom';

export type MedievalDecorationColor = 
  | 'gold' 
  | 'silver' 
  | 'bronze' 
  | 'crimson' 
  | 'navy' 
  | 'black' 
  | 'white'
  | 'default'
  | 'green'
  | 'red'
  | 'blue';

export type MedievalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface BaseDecorationProps {
  className?: string;
  children?: React.ReactNode;
  color?: MedievalDecorationColor;
  size?: MedievalSize;
  animate?: boolean;
  icon?: string;
  container?: string;
  border?: string;
}

export interface RoyalDecorationProps extends BaseDecorationProps {
  type?: MedievalDecorationType;
  position?: string;
  variant?: string; // Added this property
}

export interface RoyalDividerProps extends BaseDecorationProps {
  type?: 'line' | 'double' | 'fancy' | 'ornate' | 'simple';
  color?: 'royal' | 'gold' | 'default' | 'crimson' | 'purple';
}

// Color and size utility functions
export const sizeClasses: Record<MedievalSize, string> = {
  'xs': 'h-3 w-3',
  'sm': 'h-4 w-4',
  'md': 'h-6 w-6',
  'lg': 'h-8 w-8',
  'xl': 'h-12 w-12',
  '2xl': 'h-16 w-16'
};

export const getColorClass = (color: MedievalDecorationColor = 'gold'): string => {
  switch (color) {
    case 'gold':
      return 'text-royal-gold';
    case 'silver':
      return 'text-slate-300';
    case 'bronze':
      return 'text-amber-700';
    case 'crimson':
      return 'text-royal-crimson';
    case 'navy':
      return 'text-royal-navy';
    case 'black':
      return 'text-black';
    case 'white':
      return 'text-white';
    case 'green':
      return 'text-green-500';
    case 'red':
      return 'text-red-500';
    case 'blue':
      return 'text-blue-500';
    default:
      return 'text-royal-gold';
  }
};

// Icon types
export type MedievalIconColor = 
  | 'gold' 
  | 'silver' 
  | 'bronze' 
  | 'crimson' 
  | 'navy' 
  | 'black' 
  | 'white';

export type MedievalIconName = 
  | 'crown' 
  | 'scepter' 
  | 'chalice' 
  | 'throne' 
  | 'scroll' 
  | 'shield' 
  | 'sword' 
  | 'castle';

export type MedievalIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const toMedievalIconColor = (color: string): MedievalIconColor => {
  switch (color) {
    case 'gold':
      return 'gold';
    case 'silver':
      return 'silver';
    case 'bronze':
      return 'bronze';
    case 'crimson':
      return 'crimson';
    case 'navy':
      return 'navy';
    case 'black':
      return 'black';
    case 'white':
      return 'white';
    default:
      return 'gold';
  }
};

export type { MedievalDecorationType, MedievalDecorationColor, MedievalSize };
export type { MedievalIconColor, MedievalIconName, MedievalIconSize };
