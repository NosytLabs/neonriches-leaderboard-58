
import { ReactNode } from 'react';
import { MedievalIconColor, MedievalIconSize } from '../icon-types';

// Base decoration props that all decorative elements share
export interface BaseDecorationProps {
  color?: MedievalIconColor;
  size?: MedievalIconSize;
  className?: string;
  animate?: boolean;
  icon?: ReactNode;
  variant?: string;
  position?: string;
  container?: string;
  border?: string;
}

// Royal divider specific props
export interface RoyalDividerProps extends BaseDecorationProps {
  color?: MedievalIconColor | "crimson";
  variant?: "line" | "double" | "fancy" | "ornate" | "simple";
  position?: string;
  className?: string;
}

// Royal decoration specific props
export interface RoyalDecorationProps extends BaseDecorationProps {
  type?: RoyalDecorationType;
  variant?: string;
  position?: string;
}

// Types of royal decorations
export type RoyalDecorationType = 
  | "default"
  | "corner"
  | "border"
  | "accent"
  | "flourish"
  | "coat-of-arms"
  | "crown"
  | "swords" 
  | "banner"
  | "insignia"
  | "top"
  | "bottom";

export type MedievalSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | number;
export type MedievalDecorationType = string;
export type MedievalDecorationSize = MedievalIconSize;
export type MedievalDecorationColor = MedievalIconColor;

export type RoyalDividerVariant = "line" | "double" | "fancy" | "ornate" | "simple";
