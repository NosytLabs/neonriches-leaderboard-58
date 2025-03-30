
import { DecorationSize } from './decorations/types';

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
  | 'coat-of-arms';

export interface MedievalIconProps {
  name: MedievalIconName;
  size?: IconSize;
  color?: IconColor;
  className?: string;
}
