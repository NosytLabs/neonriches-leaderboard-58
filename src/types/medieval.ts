
export type MedievalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type MedievalIconColor = 'default' | 'gold' | 'silver' | 'bronze' | 'red' | 'green' | 'blue' | 'purple' | 'primary';
export type MedievalDecorationColor = 'default' | 'gold' | 'silver' | 'bronze' | 'red' | 'green' | 'blue' | 'purple' | 'navy' | 'platinum' | 'primary';
export type MedievalIconVariant = 'filled' | 'outline' | 'duotone';
export type MedievalDecorationSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type RoyalDividerVariant = 'line' | 'double' | 'fancy' | 'scroll' | 'quill' | 'treasure' | 'ornate';
export type IconVariant = 'default' | 'outline' | 'solid' | 'gold' | 'silver';

export interface MedievalDecorationProps {
  className?: string;
  size?: MedievalSize;
  color?: MedievalDecorationColor;
  variant?: 'default' | 'outline' | 'solid';
  rotate?: number;
  flip?: boolean;
  opacity?: number;
}

export interface MedievalIconProps {
  name: string;
  className?: string;
  size?: MedievalSize;
  color?: MedievalIconColor;
  variant?: MedievalIconVariant;
}

export interface BorderPatternProps {
  className?: string;
  color?: MedievalDecorationColor;
  variant?: 'default' | 'royal' | 'ornate';
  size?: MedievalDecorationSize;
}

export interface RoyalDividerProps {
  className?: string;
  variant?: RoyalDividerVariant;
  color?: MedievalDecorationColor;
}

export interface MedievalDecorationColors {
  container: string;
  border: string;
  icon: string;
}
