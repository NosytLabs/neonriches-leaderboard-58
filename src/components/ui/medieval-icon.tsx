
import React from 'react';
import { cn } from '@/lib/utils';
import { Crown, Shield, Sword, Scroll, Gem } from 'lucide-react';

export type MedievalIconName = 'crown' | 'shield' | 'sword' | 'scroll' | 'gem' | 'certificate' | 'coins';
export type MedievalIconSize = 'sm' | 'md' | 'lg';
export type MedievalIconColor = 'gold' | 'silver' | 'bronze' | 'red' | 'green' | 'blue' | 'amber' | 'purple';

interface MedievalIconProps {
  name: MedievalIconName;
  size?: MedievalIconSize;
  color?: MedievalIconColor;
  className?: string;
}

const MedievalIcon: React.FC<MedievalIconProps> = ({ 
  name, 
  size = 'md', 
  color = 'gold',
  className
}) => {
  // Get size in pixels
  const getSize = () => {
    switch (size) {
      case 'sm': return 16;
      case 'lg': return 32;
      default: return 24;  // md
    }
  };

  // Get color class
  const getColorClass = () => {
    switch (color) {
      case 'gold': return 'text-royal-gold';
      case 'silver': return 'text-gray-300';
      case 'bronze': return 'text-amber-600';
      case 'red': return 'text-red-500';
      case 'green': return 'text-green-500';
      case 'blue': return 'text-blue-500';
      case 'amber': return 'text-amber-500';
      case 'purple': return 'text-purple-500';
      default: return 'text-royal-gold';
    }
  };

  const iconSize = getSize();
  const colorClass = getColorClass();
  
  // Render the appropriate icon based on name
  const renderIcon = () => {
    switch (name) {
      case 'crown':
        return <Crown size={iconSize} className={cn(colorClass, className)} />;
      case 'shield':
        return <Shield size={iconSize} className={cn(colorClass, className)} />;
      case 'sword':
        return <Sword size={iconSize} className={cn(colorClass, className)} />;
      case 'scroll':
        return <Scroll size={iconSize} className={cn(colorClass, className)} />;
      case 'gem':
        return <Gem size={iconSize} className={cn(colorClass, className)} />;
      case 'certificate':
        return (
          <div className={cn("relative flex items-center justify-center", colorClass, className)}>
            <Scroll size={iconSize} />
            <Crown size={iconSize/2} className="absolute" style={{ top: '20%' }} />
          </div>
        );
      case 'coins':
        return (
          <div className={cn("relative flex items-center justify-center", colorClass, className)}>
            <div className="relative">
              <Gem size={iconSize} />
              <Gem size={iconSize*0.7} className="absolute -bottom-1 -right-1" />
            </div>
          </div>
        );
      default:
        return <Crown size={iconSize} className={cn(colorClass, className)} />;
    }
  };

  return renderIcon();
};

export default MedievalIcon;
