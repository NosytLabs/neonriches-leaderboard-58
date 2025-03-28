
import React from 'react';
import { Crown, Award, Shield, Book, Sword, Scroll, ThumbsUp } from 'lucide-react';

interface MedievalIconProps {
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  color?: 'gold' | 'silver' | 'copper' | 'default';
  animate?: boolean;
  className?: string;
}

const MedievalIcon: React.FC<MedievalIconProps> = ({ 
  name, 
  size = 'md', 
  color = 'default',
  animate = false,
  className = ''
}) => {
  const getSize = (): number => {
    switch (size) {
      case 'xs': return 14;
      case 'sm': return 18;
      case 'md': return 24;
      case 'lg': return 32;
      default: return 24;
    }
  };
  
  const getColor = (): string => {
    switch (color) {
      case 'gold': return '#D4AF37';
      case 'silver': return '#C0C0C0';
      case 'copper': return '#B87333';
      default: return 'currentColor';
    }
  };
  
  const animationClass = animate ? 'animate-pulse-slow' : '';
  const combinedClassName = `${animationClass} ${className}`;
  const iconSize = getSize();
  const iconColor = getColor();
  
  switch (name.toLowerCase()) {
    case 'crown':
      return <Crown size={iconSize} color={iconColor} className={combinedClassName} />;
    case 'award':
      return <Award size={iconSize} color={iconColor} className={combinedClassName} />;
    case 'shield':
      return <Shield size={iconSize} color={iconColor} className={combinedClassName} />;
    case 'book':
      return <Book size={iconSize} color={iconColor} className={combinedClassName} />;
    case 'sword':
      return <Sword size={iconSize} color={iconColor} className={combinedClassName} />;
    case 'scroll':
      return <Scroll size={iconSize} color={iconColor} className={combinedClassName} />;
    case 'seal':
      return <Award size={iconSize} color={iconColor} className={combinedClassName} />;
    default:
      return <ThumbsUp size={iconSize} color={iconColor} className={combinedClassName} />;
  }
};

export default MedievalIcon;
