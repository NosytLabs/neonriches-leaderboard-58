
// Basic icon sizes
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';

// Medieval icon sizes
export type MedievalIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// Colors for icons
export type IconColor = 'default' | 'primary' | 'secondary' | 'gold' | 'royal' | 'crimson' | 'green' | 'blue' | 'red';

// Icon style variations
export type IconStyle = 'outline' | 'solid' | 'duotone';

// Medieval icon names
export type MedievalIconName = 
  | 'crown'
  | 'scroll'
  | 'sword'
  | 'shield'
  | 'coin'
  | 'castle'
  | 'dragon'
  | 'knight'
  | 'throne'
  | 'chalice'
  | 'banner';

// Standard interface for medieval icon props
export interface MedievalIconProps {
  name: MedievalIconName;
  size?: MedievalIconSize;
  color?: IconColor;
  className?: string;
}

// Adapter props for icon components
export interface IconAdapterProps {
  size?: IconSize;
  color?: IconColor;
  className?: string;
}

// Color mapping for icons
export const iconColorMap = {
  default: 'text-foreground',
  primary: 'text-primary',
  secondary: 'text-secondary',
  gold: 'text-royal-gold',
  royal: 'text-royal-purple',
  crimson: 'text-royal-crimson',
  green: 'text-green-500',
  blue: 'text-blue-500',
  red: 'text-red-500'
};
