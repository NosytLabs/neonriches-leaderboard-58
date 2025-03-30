
import React from 'react';
import { cn } from "@/lib/utils";
import * as LucideIcons from 'lucide-react';

// Define themed icon types
export type MedievalIconName = 
  | 'Crown' 
  | 'Shield' 
  | 'Scroll' 
  | 'Coins' 
  | 'Key' 
  | 'Sword'
  | 'Trophy'
  | 'Heart'
  | 'Medal'
  | 'Gem'
  | 'Wallet';

export type MedievalIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type MedievalIconColor = 'default' | 'gold' | 'silver' | 'crimson';

export interface MedievalIconProps {
  name: MedievalIconName;
  size?: MedievalIconSize;
  color?: MedievalIconColor;
  className?: string;
  onClick?: () => void;
}

const sizeMap = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 32,
  xl: 40,
};

const colorMap = {
  default: 'text-white',
  gold: 'text-royal-gold',
  silver: 'text-gray-300',
  crimson: 'text-royal-crimson',
};

const MedievalIcon: React.FC<MedievalIconProps> = ({
  name,
  size = 'md',
  color = 'default',
  className,
  onClick
}) => {
  const pixelSize = sizeMap[size];
  
  // Convert to proper Lucide icon name
  const iconName = name as keyof typeof LucideIcons;
  const LucideIcon = LucideIcons[iconName];
  
  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }
  
  return (
    <LucideIcon
      size={pixelSize}
      className={cn(
        colorMap[color],
        className
      )}
      onClick={onClick}
    />
  );
};

export default MedievalIcon;
