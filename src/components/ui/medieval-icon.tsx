
import React from 'react';
import { cn } from '@/lib/utils';
import {
  MedievalIconProps,
  MedievalIconName,
  MedievalIconColor,
  MedievalIconSize
} from './medieval-icon.d';
import Crown from '@/components/ui/icons/Crown';

const MedievalIcon: React.FC<MedievalIconProps> = ({
  name,
  size = 'md',
  color = 'default',
  className
}) => {
  // Define size classes
  const sizeClasses = {
    xs: 'h-3 w-3',
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
    xl: 'h-8 w-8'
  };
  
  // Define color classes
  const colorClasses = {
    default: 'text-foreground',
    gold: 'text-royal-gold',
    silver: 'text-gray-300',
    crimson: 'text-royal-crimson'
  };
  
  // Get the correct size and color classes
  const sizeClass = sizeClasses[size] || sizeClasses.md;
  const colorClass = colorClasses[color] || colorClasses.default;
  
  // Combine classes
  const combinedClassName = cn(sizeClass, colorClass, className);
  
  // Render the appropriate icon based on name
  switch (name) {
    case "Crown":
      return <Crown className={combinedClassName} />;
    case "Shield":
      return <div className={combinedClassName}>🛡️</div>;
    case "Sword":
      return <div className={combinedClassName}>⚔️</div>;
    case "Scroll":
      return <div className={combinedClassName}>📜</div>;
    case "Heart":
      return <div className={combinedClassName}>❤️</div>;
    case "Medal":
      return <div className={combinedClassName}>🏅</div>;
    case "Trophy":
      return <div className={combinedClassName}>🏆</div>;
    case "Key":
      return <div className={combinedClassName}>🔑</div>;
    case "Coins":
      return <div className={combinedClassName}>💰</div>;
    case "Wallet":
      return <div className={combinedClassName}>👛</div>;
    case "Gem":
      return <div className={combinedClassName}>💎</div>;
    case "Seal":
      return <div className={combinedClassName}>🔖</div>;
    default:
      console.warn(`Icon "${name}" not found, using default Crown`);
      return <Crown className={combinedClassName} />;
  }
};

export default MedievalIcon;
