
export interface IconProps {
  icon?: string;
  name?: string;
  iconName?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | number;
  color?: 'default' | 'primary' | 'secondary' | 'muted' | 'accent' | 
          'info' | 'success' | 'warning' | 'danger' | 'royal' | 
          'gold' | 'silver' | 'crimson' | string;
  animated?: boolean;
  style?: 'default' | Record<string, any>;
  className?: string;
  [key: string]: any;
}

export const iconSizeMap = {
  xs: 'h-3 w-3',
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
  xl: 'h-12 w-12',
  xxl: 'h-16 w-16'
};

export const iconColorMap = {
  default: 'text-current',
  primary: 'text-primary',
  secondary: 'text-secondary',
  muted: 'text-muted',
  accent: 'text-accent',
  info: 'text-blue-500',
  success: 'text-green-500',
  warning: 'text-yellow-500',
  danger: 'text-red-500',
  royal: 'text-royal-gold',
  gold: 'text-yellow-400',
  silver: 'text-gray-400',
  crimson: 'text-red-600'
};
