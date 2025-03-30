
import React, { CSSProperties } from 'react';
import { LucideProps } from 'lucide-react';

// Define possible icon colors
export type IconColor = 
  | "default"
  | "primary" 
  | "secondary"
  | "accent"
  | "white"
  | "black"
  | "gold"
  | "red"
  | "green"
  | "blue"
  | "yellow"
  | "gray"
  | "silver"
  | "bronze"
  | "crimson"
  | "navy"
  | "purple"
  | "muted"
  | "emerald";

// Define possible icon sizes
export type IconSize = 
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | number;

// Define possible icon styles
export type IconStyle = "default" | "medieval";

// Prop interface for icons
export interface IconProps extends Omit<LucideProps, "color"> {
  name?: string;
  size?: IconSize;
  color?: IconColor;
  style?: IconStyle | CSSProperties;
  variant?: string;
  animate?: boolean;
  className?: string;
}

export type IconComponent = React.ComponentType<IconProps>;

// Medieval icon specific types
export type MedievalIconName = string;
export type MedievalIconColor = 
  | "gold" 
  | "primary" 
  | "secondary" 
  | "white" 
  | "black"
  | "silver"
  | "bronze"
  | "crimson"
  | "navy"
  | "purple"
  | "emerald";

export type MedievalIconSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | number;

export interface MedievalIconProps {
  name: MedievalIconName;
  color?: MedievalIconColor;
  size?: MedievalIconSize;
  className?: string;
  animate?: boolean;
}
