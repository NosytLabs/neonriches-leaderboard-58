
import React from 'react';

// Define the MedievalIconName type with proper capitalization
export type MedievalIconName = 
  | "Crown" 
  | "Shield" 
  | "Sword" 
  | "Scroll" 
  | "Heart" 
  | "Medal" 
  | "Trophy" 
  | "Key" 
  | "Coins" 
  | "Wallet" 
  | "Gem" 
  | "Seal";

// Define the MedievalIconColor type 
export type MedievalIconColor = 
  | "default" 
  | "gold" 
  | "silver" 
  | "crimson";

// Define the MedievalIconSize type
export type MedievalIconSize = 
  | "xs" 
  | "sm" 
  | "md" 
  | "lg" 
  | "xl";

// Define MedievalIconProps
export interface MedievalIconProps {
  name: MedievalIconName;
  size?: MedievalIconSize;
  color?: MedievalIconColor;
  className?: string;
}

// Define the MedievalIcon component
declare const MedievalIcon: React.FC<MedievalIconProps>;

export default MedievalIcon;
