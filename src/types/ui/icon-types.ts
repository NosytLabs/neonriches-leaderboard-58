
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const iconSizeMap: Record<IconSize, string> = {
  xs: 'h-3 w-3',
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
  xl: 'h-8 w-8'
};

export const iconColorMap: Record<string, string> = {
  default: 'text-current',
  primary: 'text-primary',
  secondary: 'text-secondary',
  muted: 'text-muted-foreground',
  accent: 'text-accent',
  gold: 'text-yellow-500',
  royal: 'text-purple-500',
  crimson: 'text-red-600',
  emerald: 'text-emerald-500'
};

export interface IconProps {
  name?: string;
  icon?: string;  // Added this property
  iconName?: string;
  size?: IconSize | number;
  color?: string;
  className?: string;
  strokeWidth?: number;
  animated?: boolean;
  style?: any;
  [key: string]: any;
}
