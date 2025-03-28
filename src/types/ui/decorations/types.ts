
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

export type MedievalDecorationSize = 
  'xs' | 
  'sm' | 
  'md' | 
  'lg' | 
  'xl' | 
  '2xl' | 
  '3xl' |
  '4xl';

export type MedievalDecorationColor = MedievalIconColor;

export interface BaseDecorationProps {
  size?: MedievalDecorationSize;
  color?: MedievalDecorationColor;
  className?: string;
  container?: string;
  border?: string;
  icon?: string;
  animate?: boolean;
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
