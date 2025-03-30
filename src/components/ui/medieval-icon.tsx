
import React from 'react';
import IconSystem from './IconSystem';

// Define type-safe icon names and colors
export type MedievalIconName = 
  | "Crown" | "Shield" | "Sword" | "Scroll" | "Heart"
  | "Medal" | "Trophy" | "Key" | "Coins" | "Wallet" | "Gem"
  | "Seal";

export type MedievalIconColor = 
  | "default" | "gold" | "silver" | "crimson";

export type MedievalIconSize = 
  | "xs" | "sm" | "md" | "lg" | "xl";

export interface MedievalIconProps {
  name: MedievalIconName;
  color?: MedievalIconColor;
  size?: MedievalIconSize;
  className?: string;
}

/**
 * MedievalIcon component for themed icons with royal style
 */
const MedievalIcon: React.FC<MedievalIconProps> = ({
  name,
  color = "default",
  size = "md",
  className,
}) => {
  return (
    <IconSystem
      name={name}
      size={size}
      color={color}
      className={className}
      style="medieval"
    />
  );
};

export default MedievalIcon;
