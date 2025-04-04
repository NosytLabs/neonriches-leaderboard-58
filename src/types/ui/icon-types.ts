
import { LucideProps } from 'lucide-react';

export interface IconProps extends LucideProps {
  icon?: string;
  name?: string; // For backward compatibility
  iconName?: string; // Support iconName prop
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | number;
  color?: 'default' | 'primary' | 'secondary' | 'accent' | 'muted' | 'warning' | 'success' | 'danger' | 'info' | string;
  animated?: boolean;
  style?: 'default' | React.CSSProperties;
}

export const iconSizeMap = {
  xs: 'h-3 w-3',
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
  xl: 'h-10 w-10',
  '2xl': 'h-12 w-12',
};

export const iconColorMap = {
  default: 'text-foreground',
  primary: 'text-primary',
  secondary: 'text-secondary',
  accent: 'text-accent',
  muted: 'text-muted-foreground',
  warning: 'text-yellow-500',
  success: 'text-green-500',
  danger: 'text-red-500',
  info: 'text-blue-500',
};
