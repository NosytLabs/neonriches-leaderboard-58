
export type DecorationSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type DecorationRotate = '0' | '45' | '90' | '135' | '180' | '225' | '270' | '315';
export type DecorationPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
export type DecorationColor = 'default' | 'gold' | 'silver' | 'royal' | 'crimson';

export interface DecorationProps {
  size?: DecorationSize;
  color?: DecorationColor;
  position?: DecorationPosition;
  rotate?: DecorationRotate;
  className?: string;
}

export type MedievalIconColor = 'default' | 'gold' | 'silver' | 'royal' | 'crimson';
export type MedievalIconSize = DecorationSize;
