
import { LucideIcon } from 'lucide-react';

export type Lucide = LucideIcon;

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type IconColor = 
  | 'primary' 
  | 'secondary' 
  | 'muted' 
  | 'accent'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'royal'
  | 'gold'
  | 'silver'
  | 'crimson';

export interface IconProps {
  size?: IconSize;
  color?: IconColor;
  className?: string;
}
