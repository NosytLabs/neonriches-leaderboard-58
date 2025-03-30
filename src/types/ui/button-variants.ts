
import { VariantProps } from 'class-variance-authority';

export type ButtonVariant = 
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'link'
  | 'royal'
  | 'royalGold'
  | 'glass';

export type ToastVariant = 
  | 'default'
  | 'destructive'
  | 'success'
  | 'royal';  // Add royal variant for toasts

export interface RoyalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: 'default' | 'sm' | 'lg' | 'icon';
  isLoading?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children?: React.ReactNode;
}
