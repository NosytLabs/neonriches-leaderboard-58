
// Extended medieval icon names to fix type issues
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
  | 'banner'
  | 'key'
  | 'coins'
  | 'chest'
  | 'treasure-chest'
  | 'flag'
  | 'tower'
  | 'dagger'
  | 'potion';

// Extended icon color types to fix type issues
export type IconColor = 
  | 'default' 
  | 'primary' 
  | 'secondary' 
  | 'gold' 
  | 'royal' 
  | 'crimson' 
  | 'green' 
  | 'blue' 
  | 'red'
  | 'silver'
  | 'emerald';

// Icon props type
export interface MedievalIconProps {
  name: MedievalIconName;
  color?: IconColor | string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
  className?: string;
}

// Icon color mapping
export type MedievalIconColor = IconColor;
