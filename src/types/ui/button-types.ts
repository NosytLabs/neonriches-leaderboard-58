
import { ButtonHTMLAttributes, ReactNode } from "react";

// Button variants available in the application
export type ButtonVariant = 
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'link'
  | 'success'
  | 'warning'
  | 'royal'
  | 'royalGold'
  | 'purple'
  | 'crimson'
  | 'gold'
  | 'glass';

// Button sizes available in the application
export type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

// Comprehensive ButtonProps that extends HTML button attributes
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
  children?: ReactNode;
  className?: string;
}
