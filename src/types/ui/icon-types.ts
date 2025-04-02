
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
  | 'royal-banner';

// Define the MedievalIconSize type
export type MedievalIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';

// Define the IconProps interface
export interface IconProps extends LucideProps {
  name?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  color?: string;
  style?: CSSProperties | string;
}

// Define the IconAdapterProps interface
export interface IconAdapterProps {
  name: string;
  size?: MedievalIconSize;
  color?: string;
  className?: string;
}

// Define the ThemeIconProps interface
export interface ThemeIconProps extends React.HTMLAttributes<HTMLDivElement> {
  name: MedievalIconName;
  size?: MedievalIconSize;
  color?: string;
  className?: string;
}

// Export a IconComponent type
export type IconComponent = React.ComponentType<IconProps>;
