
import { HTMLAttributes, ReactNode } from "react";

// Badge variants available in the application
export type BadgeVariant = 
  | 'default'
  | 'secondary'
  | 'destructive'
  | 'outline'
  | 'success'
  | 'warning'
  | 'gold'
  | 'royal';

// Props for Badge component
export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
  children?: ReactNode;
  className?: string;
}
