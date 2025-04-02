
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
export type IconColor = 
  | 'default' 
  | 'primary'
  | 'secondary'
  | 'muted'
  | 'accent'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'gold' 
  | 'silver' 
  | 'crimson' 
  | 'emerald' 
  | 'royal'
  | 'red'
  | 'blue'
  | 'green'
  | 'purple';

export type IconStyle = 'default' | 'medieval';

export type MedievalIconName = 
  | 'crown'
  | 'shield'
  | 'sword'
  | 'castle'
  | 'chalice'
  | 'dragon'
  | 'flag'
  | 'fleur-de-lis'
  | 'goblet'
  | 'knight'
  | 'royal-crown'
  | 'scroll'
  | 'throne'
  | 'tower'
  | 'treasure-chest'
  | 'coat-of-arms'
  | 'medal'
  | 'gem'
  | 'heart'
  | 'trophy'
  | 'key'
  | 'coins'
  | 'wallet'
  | 'seal'
  | 'sparkles'
  | 'user'
  | 'users'
  | 'Crown'
  | 'Scroll'
  | 'Coins'
  | 'Shield'
  | 'Sparkles'
  | 'Trophy'
  | 'Users'
  | 'User'
  | 'banner'
  | 'dagger'
  | 'coin'
  | 'potion'
  | 'treasure-chest';

export interface IconProps {
  icon?: string;
  name?: string;
  size?: IconSize | number;
  color?: IconColor | string;
  className?: string;
  style?: IconStyle;
  animated?: boolean;
  [key: string]: any;
}

export interface MedievalIconProps {
  name: MedievalIconName;
  size?: IconSize;
  color?: IconColor;
  className?: string;
  animated?: boolean;
}

// Icon size mapping
export const iconSizeMap: Record<IconSize, string> = {
  'xs': 'w-3 h-3',
  'sm': 'w-4 h-4',
  'md': 'w-6 h-6',
  'lg': 'w-8 h-8',
  'xl': 'w-10 h-10',
  '2xl': 'w-12 h-12',
  '3xl': 'w-16 h-16',
  '4xl': 'w-20 h-20'
};

// Icon color mapping
export const iconColorMap: Record<IconColor, string> = {
  'default': 'text-foreground',
  'primary': 'text-primary',
  'secondary': 'text-secondary',
  'muted': 'text-muted-foreground',
  'accent': 'text-accent',
  'success': 'text-green-500',
  'warning': 'text-amber-500',
  'danger': 'text-red-500',
  'info': 'text-blue-500',
  'gold': 'text-royal-gold',
  'silver': 'text-gray-300',
  'crimson': 'text-royal-crimson',
  'emerald': 'text-emerald-500',
  'royal': 'text-royal-gold',
  'red': 'text-red-500',
  'blue': 'text-blue-500',
  'green': 'text-green-500',
  'purple': 'text-purple-500'
};
