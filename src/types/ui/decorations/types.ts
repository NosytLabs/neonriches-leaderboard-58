
export type MedievalDecorationType = 
  | 'border-pattern'
  | 'corner-flourish' 
  | 'coat-of-arms'
  | 'royal-banner'
  | 'royal-insignia'
  | 'crossed-swords';

export type MedievalDecorationColor = 
  | 'royal-gold'
  | 'royal-purple'
  | 'royal-blue'
  | 'royal-red'
  | 'royal-green';

export type MedievalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type MedievalIconColor = 'gold' | 'silver' | 'copper' | 'royal' | 'default';
export type MedievalIconName = 
  | 'crown'
  | 'throne'
  | 'scroll'
  | 'sword'
  | 'chalice'
  | 'shield'
  | 'coin'
  | 'treasure'
  | 'quill'
  | 'royal-seal';

export type MedievalIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface BaseDecorationProps {
  type?: MedievalDecorationType;
  color?: MedievalDecorationColor; 
  size?: MedievalSize;
  className?: string;
  children?: React.ReactNode;
}

export interface RoyalDividerProps extends BaseDecorationProps {
  variant?: 'line' | 'double' | 'fancy';
  color?: 'royal' | 'gold' | 'default' | 'crimson';
  label?: string;
  labelPosition?: 'left' | 'center' | 'right';
}

// Size classes mapping
export const sizeClasses: Record<MedievalSize, string> = {
  xs: 'h-4 w-4',
  sm: 'h-6 w-6',
  md: 'h-8 w-8',
  lg: 'h-10 w-10',
  xl: 'h-12 w-12'
};

// Color classes mapping
export const getColorClass = (color: MedievalDecorationColor) => {
  switch (color) {
    case 'royal-gold':
      return 'text-royal-gold';
    case 'royal-purple':
      return 'text-royal-purple';
    case 'royal-blue':
      return 'text-royal-blue';
    case 'royal-red':
      return 'text-royal-red';
    case 'royal-green':
      return 'text-royal-green';
    default:
      return 'text-royal-gold';
  }
};

// Map to icon color
export const toMedievalIconColor = (color?: MedievalDecorationColor): MedievalIconColor => {
  if (!color) return 'default';
  
  switch (color) {
    case 'royal-gold':
      return 'gold';
    case 'royal-purple':
      return 'royal';
    default:
      return 'default';
  }
};
