
import React from 'react';
import { Crown, Key, Scroll, Shield, Award, Swords } from 'lucide-react';

type IconName = 'crown' | 'key' | 'scroll' | 'shield' | 'award' | 'swords';
type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type IconColor = 'gold' | 'silver' | 'bronze' | 'default';

interface MedievalIconProps {
  name: IconName;
  size?: IconSize;
  color?: IconColor;
  className?: string;
}

const MedievalIcon: React.FC<MedievalIconProps> = ({ 
  name, 
  size = 'md', 
  color = 'default',
  className = ''
}) => {
  // Size mapping
  const sizeMap = {
    xs: 14,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 32
  };
  
  // Color mapping
  const colorMap = {
    gold: 'text-royal-gold',
    silver: 'text-zinc-300',
    bronze: 'text-amber-600',
    default: ''
  };
  
  // Select the appropriate icon component
  const getIcon = () => {
    switch (name) {
      case 'crown':
        return <Crown size={sizeMap[size]} className={`${colorMap[color]} ${className}`} />;
      case 'key':
        return <Key size={sizeMap[size]} className={`${colorMap[color]} ${className}`} />;
      case 'scroll':
        return <Scroll size={sizeMap[size]} className={`${colorMap[color]} ${className}`} />;
      case 'shield':
        return <Shield size={sizeMap[size]} className={`${colorMap[color]} ${className}`} />;
      case 'award':
        return <Award size={sizeMap[size]} className={`${colorMap[color]} ${className}`} />;
      case 'swords':
        return <Swords size={sizeMap[size]} className={`${colorMap[color]} ${className}`} />;
      default:
        return <Crown size={sizeMap[size]} className={`${colorMap[color]} ${className}`} />;
    }
  };
  
  return getIcon();
};

export default MedievalIcon;
