
import { VariantProps } from "class-variance-authority";

export type RoyalButtonVariant = 
  | "default" 
  | "destructive" 
  | "outline" 
  | "secondary" 
  | "ghost" 
  | "link" 
  | "royal" 
  | "gold" 
  | "premium"
  | "glass"
  | "mahogany"
  | "goldOutline"
  | "crimsonOutline"
  | "navyOutline"
  | "royalGold"  
  | "royalCrimson"
  | "royalNavy"  
  | "royalPurple";

export type RoyalButtonSize = "default" | "sm" | "lg" | "icon";

export interface RoyalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: RoyalButtonVariant;
  size?: RoyalButtonSize;
  asChild?: boolean;
  icon?: React.ReactNode;
  glow?: boolean;
}
