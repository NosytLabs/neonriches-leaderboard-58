
import React from 'react';
import { cn } from '@/lib/utils';
import { MedievalIconProps, iconSizeMap, iconColorMap } from '@/types/ui/icon-types';
import { Crown, Sword, Shield, Scroll, Key, Flag, Gem, Trophy, Castle } from 'lucide-react';

const MedievalIcon: React.FC<MedievalIconProps> = ({ 
  name, 
  className = "", 
  size = "md",
  color = "default",
  animated = false
}) => {
  // Get the appropriate size class
  const sizeClass = typeof size === 'string' 
    ? (size in iconSizeMap ? iconSizeMap[size as keyof typeof iconSizeMap] : iconSizeMap.md)
    : '';

  // Get the appropriate color class
  const colorClass = typeof color === 'string' && color in iconColorMap 
    ? iconColorMap[color as keyof typeof iconColorMap] 
    : '';

  // Animation class
  const animationClass = animated ? 'animate-pulse' : '';

  // Combined classes
  const combinedClasses = cn(sizeClass, colorClass, animationClass, className);

  const getIcon = () => {
    switch (name.toLowerCase()) {
      case 'crown':
        return <Crown className={combinedClasses} />;
      case 'sword':
        return <Sword className={combinedClasses} />;
      case 'shield':
        return <Shield className={combinedClasses} />;
      case 'scroll':
        return <Scroll className={combinedClasses} />;
      case 'key':
        return <Key className={combinedClasses} />;
      case 'flag':
        return <Flag className={combinedClasses} />;
      case 'gem':
        return <Gem className={combinedClasses} />;
      case 'trophy':
        return <Trophy className={combinedClasses} />;
      case 'castle':
        return <Castle className={combinedClasses} />;
      default:
        return <Crown className={combinedClasses} />;
    }
  };

  return getIcon();
};

export default MedievalIcon;
