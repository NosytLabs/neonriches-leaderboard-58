
// Consolidated icon types used throughout the application

// Icon name types
export type MedievalIconName = 
  | 'Crown' 
  | 'Shield' 
  | 'Sword' 
  | 'Scroll' 
  | 'Heart' 
  | 'Medal' 
  | 'Trophy' 
  | 'Key' 
  | 'Coins' 
  | 'Wallet' 
  | 'Gem' 
  | 'Seal';

export type LucideIconName = string;
export type IconName = MedievalIconName | LucideIconName;

// Icon color types
export type MedievalIconColor = 
  | 'default' 
  | 'gold' 
  | 'silver' 
  | 'crimson' 
  | 'royal' 
  | 'navy' 
  | 'bronze' 
  | 'purple';

export type IconColor = 
  | MedievalIconColor
  | 'primary' 
  | 'secondary' 
  | 'muted' 
  | 'accent';

// Icon size types
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

// Icon style types
export type IconStyle = 'default' | 'medieval';

// Icon props interfaces
export interface BaseIconProps {
  size?: IconSize;
  color?: IconColor | string;
  className?: string;
}

export interface MedievalIconProps extends BaseIconProps {
  name: MedievalIconName;
}

export interface IconProps extends BaseIconProps {
  name: IconName | string;
  style?: IconStyle;
}
