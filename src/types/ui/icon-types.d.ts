
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
export type IconColor = 'gold' | 'silver' | 'crimson' | 'emerald' | 'royal' | 'default';

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

export type MedievalIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
export type MedievalIconColor = 'gold' | 'silver' | 'crimson' | 'emerald' | 'royal' | 'default';

export interface IconProps {
  icon?: string;
  name: string;
  size?: MedievalIconSize | number;
  color?: MedievalIconColor;
  className?: string;
  style?: 'default' | 'medieval';
  animated?: boolean;
  [key: string]: any;
}

export interface MedievalIconProps {
  name: MedievalIconName;
  size?: MedievalIconSize;
  color?: MedievalIconColor;
  className?: string;
  animated?: boolean;
}

// Icon size mapping
export const iconSizeMap: Record<MedievalIconSize, string> = {
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
export const iconColorMap: Record<MedievalIconColor, string> = {
  'default': 'text-white',
  'gold': 'text-royal-gold',
  'silver': 'text-gray-300',
  'crimson': 'text-royal-crimson',
  'emerald': 'text-emerald-500',
  'royal': 'text-royal-purple'
};
