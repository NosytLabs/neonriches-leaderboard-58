
export type DecorationType = 
  | 'coat-of-arms' 
  | 'crossed-swords' 
  | 'royal-banner' 
  | 'corner-flourish' 
  | 'royal-insignia';

export type MedievalIconColor = 
  | 'gold' 
  | 'silver' 
  | 'bronze' 
  | 'royal' 
  | 'crimson' 
  | 'navy'
  | 'default';

export type MedievalIconSize = 
  | 'xs' 
  | 'sm' 
  | 'md' 
  | 'lg' 
  | 'xl' 
  | '2xl'
  | '3xl'
  | '4xl';

export type IconSize = 
  | 'xs' 
  | 'sm' 
  | 'md' 
  | 'lg' 
  | 'xl' 
  | '2xl'
  | '3xl'
  | '4xl';

export interface DecorationProps {
  className?: string;
  color?: MedievalIconColor;
  size?: MedievalIconSize;
  animated?: boolean;
  mirror?: boolean;
  rotate?: number;
  opacity?: number;
}
