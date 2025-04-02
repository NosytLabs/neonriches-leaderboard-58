
import { LucideProps } from "lucide-react";
import { CSSProperties } from "react";

// Define the MedievalIconName type
export type MedievalIconName =
  | 'crown'
  | 'sword'
  | 'shield'
  | 'castle'
  | 'scroll'
  | 'dragon'
  | 'knight'
  | 'goblet'
  | 'throne'
  | 'banner'
  | 'crossed-swords'
  | 'fleur-de-lis'
  | 'coat-of-arms'
  | 'royal-scepter'
  | 'royal-crown'
  | 'chalice'
  | 'treasure-chest'
  | 'helmet'
  | 'axe'
  | 'mace'
  | 'bow-arrow'
  | 'dagger'
  | 'horse'
  | 'torch'
  | 'quill'
  | 'armor'
  | 'tower'
  | 'jester'
  | 'target'
  | 'medallion'
  | 'wizard-hat'
  | 'wand'
  | 'potion'
  | 'cauldron'
  | 'magic-book'
  | 'crystal-ball'
  | 'wizard-staff'
  | 'witch-broom'
  | 'talisman'
  | 'amulet'
  | 'ring'
  | 'pendant'
  | 'coin'
  | 'gold-coin'
  | 'chest'
  | 'key'
  | 'lock'
  | 'map'
  | 'compass'
  | 'telescope'
  | 'hourglass'
  | 'sundial'
  | 'parchment'
  | 'feather'
  | 'ink-bottle'
  | 'royal-seal'
  | 'quill-ink'
  | 'royal-decree'
  | 'tome'
  | 'spellbook'
  | 'grimoire'
  | 'rune-stone'
  | 'candelabra'
  | 'chandelier'
  | 'royal-carriage'
  | 'royal-throne'
  | 'catapult'
  | 'trebuchet'
  | 'ballista'
  | 'battering-ram'
  | 'royal-banner'
  | 'flag'; // Add flag to fix StyleGuide.tsx error

// Define the IconSize type
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';

// Define the IconColor type
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

// Define the IconProps interface that extends LucideProps
export interface IconProps extends Omit<LucideProps, 'style'> {
  name?: string;
  icon?: string;
  size?: IconSize | number;
  color?: IconColor | string;
  style?: IconStyle | CSSProperties;
  animated?: boolean;
}

// Define the IconAdapterProps interface
export interface IconAdapterProps {
  name: string;
  size?: IconSize;
  color?: string;
  className?: string;
}

// Define the MedievalIconProps interface
export interface MedievalIconProps {
  name: MedievalIconName;
  size?: IconSize;
  color?: IconColor | string;
  className?: string;
  animated?: boolean;
}

// Define the ThemeIconProps interface
export interface ThemeIconProps extends React.HTMLAttributes<HTMLDivElement> {
  name: MedievalIconName;
  size?: IconSize;
  color?: string;
  className?: string;
}

// Export a IconComponent type
export type IconComponent = React.ComponentType<IconProps>;

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
