
import { ReactNode } from "react";

export type MedievalIconSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
export type MedievalIconColor = 
  "default" | 
  "gold" | 
  "silver" | 
  "crimson" | 
  "navy" | 
  "emerald" | 
  "purple";

export type MedievalIconName = string;
export type MedievalDecorationType = string;
export type MedievalDecorationSize = MedievalIconSize;
export type MedievalDecorationColor = MedievalIconColor;
export type MedievalSize = MedievalIconSize;

export interface BaseDecorationProps {
  color?: MedievalIconColor;
  size?: MedievalIconSize;
  className?: string;
  animate?: boolean;
  icon?: ReactNode;
  container?: string;
  border?: string;
}

export type RoyalDividerVariant = "line" | "double" | "fancy" | "ornate" | "simple";

export interface RoyalDividerProps extends BaseDecorationProps {
  variant?: RoyalDividerVariant;
  color?: "royal" | "gold" | "crimson" | "default" | "purple";
}
