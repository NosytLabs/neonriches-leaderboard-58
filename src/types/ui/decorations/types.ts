
import { ReactNode } from 'react';

// Medieval decoration types
export type MedievalDecorationType = 
  | "border" 
  | "corner" 
  | "divider" 
  | "crown" 
  | "shield" 
  | "scroll" 
  | "banner" 
  | "top" 
  | "bottom";

export type MedievalDecorationSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export type MedievalDecorationColor = 
  | "gold" 
  | "silver" 
  | "bronze" 
  | "crimson" 
  | "navy" 
  | "emerald" 
  | "purple" 
  | "white" 
  | "black"
  | "royal";

// Alias for backward compatibility
export type MedievalIconColor = MedievalDecorationColor;
export type MedievalIconSize = MedievalDecorationSize;
export type MedievalIconName = string;
export type MedievalSize = MedievalDecorationSize;

// Base decoration props
export interface BaseDecorationProps {
  type?: MedievalDecorationType;
  size?: MedievalDecorationSize;
  color?: MedievalDecorationColor;
  className?: string;
  position?: string;
  animate?: boolean;
}

// Royal divider props
export type RoyalDividerVariant = "line" | "double" | "fancy" | "ornate" | "simple";

export interface RoyalDividerProps {
  variant?: RoyalDividerVariant;
  color?: "gold" | "royal" | "default" | "crimson" | "purple";
  label?: string | ReactNode;
  className?: string;
  showIcon?: boolean;
}

// Utility functions for decoration components
export const sizeClasses: Record<MedievalDecorationSize, string> = {
  xs: "w-4 h-4",
  sm: "w-6 h-6",
  md: "w-8 h-8",
  lg: "w-10 h-10",
  xl: "w-12 h-12",
  "2xl": "w-16 h-16"
};

export const getColorClass = (color: MedievalDecorationColor): string => {
  switch (color) {
    case "gold": return "text-royal-gold";
    case "silver": return "text-gray-300";
    case "bronze": return "text-amber-700";
    case "crimson": return "text-royal-crimson";
    case "navy": return "text-royal-navy";
    case "emerald": return "text-emerald-500";
    case "purple": return "text-purple-500";
    case "white": return "text-white";
    case "black": return "text-black";
    case "royal": return "text-royal-purple";
    default: return "text-white";
  }
};

export const toMedievalIconColor = (color: string): MedievalIconColor => {
  switch (color) {
    case "gold": return "gold";
    case "silver": return "silver";
    case "bronze": return "bronze";
    case "crimson": return "crimson";
    case "navy": return "navy";
    case "emerald": return "emerald";
    case "purple": return "purple";
    case "white": return "white";
    case "black": return "black";
    default: return "gold";
  }
};

// Export RoyalDecorationProps type
export type RoyalDecorationProps = {
  type?: string;
  size?: string;
  color?: string;
  className?: string;
};
