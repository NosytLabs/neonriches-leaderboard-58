
import React from 'react';
import { cn } from '@/lib/utils';
import { Crown, Shield, Sword, Scroll, Gem, Heart, Trophy, Castle, User, Coins, Award, Wallet, Sparkles } from 'lucide-react';

export type MedievalIconName = 
  | 'crown' 
  | 'shield' 
  | 'sword' 
  | 'scroll' 
  | 'gem' 
  | 'certificate' 
  | 'coins'
  | 'seal'
  | 'heart'
  | 'medal'
  | 'trophy'
  | 'castle'
  | 'key'
  | 'wallet'
  | 'user'
  | 'sparkles'
  | 'star'
  | 'flame'
  | 'sunburst'
  | 'water';

export type MedievalIconSize = 'sm' | 'md' | 'lg' | 'xs' | 'xl' | '2xl';
export type MedievalIconColor = 
  | 'gold' 
  | 'silver' 
  | 'bronze' 
  | 'red' 
  | 'green' 
  | 'blue' 
  | 'amber' 
  | 'purple'
  | 'copper'
  | 'crimson'
  | 'navy'
  | 'emerald'
  | 'default'
  | 'white';

interface MedievalIconProps {
  name: MedievalIconName;
  size?: MedievalIconSize;
  color?: MedievalIconColor;
  className?: string;
  animate?: boolean;
}

const MedievalIcon: React.FC<MedievalIconProps> = ({ 
  name, 
  size = 'md', 
  color = 'gold',
  className,
  animate = false
}) => {
  // Get size in pixels
  const getSize = () => {
    switch (size) {
      case 'xs': return 12;
      case 'sm': return 16;
      case 'lg': return 32;
      case 'xl': return 40;
      case '2xl': return 48;
      default: return 24;  // md
    }
  };

  // Get color class
  const getColorClass = () => {
    switch (color) {
      case 'gold': return 'text-royal-gold';
      case 'silver': return 'text-gray-300';
      case 'bronze': return 'text-amber-600';
      case 'copper': return 'text-amber-700';
      case 'red': return 'text-red-500';
      case 'green': return 'text-green-500';
      case 'blue': return 'text-blue-500';
      case 'amber': return 'text-amber-500';
      case 'purple': return 'text-purple-500';
      case 'crimson': return 'text-royal-crimson';
      case 'navy': return 'text-royal-navy';
      case 'emerald': return 'text-emerald-500';
      case 'white': return 'text-white';
      case 'default': return 'text-white/70';
      default: return 'text-royal-gold';
    }
  };

  const iconSize = getSize();
  const colorClass = getColorClass();
  const animationClass = animate ? 'animate-pulse-slow' : '';
  
  // Render the appropriate icon based on name
  const renderIcon = () => {
    switch (name) {
      case 'crown':
        return <Crown size={iconSize} className={cn(colorClass, animationClass, className)} />;
      case 'shield':
        return <Shield size={iconSize} className={cn(colorClass, animationClass, className)} />;
      case 'sword':
        return <Sword size={iconSize} className={cn(colorClass, animationClass, className)} />;
      case 'scroll':
        return <Scroll size={iconSize} className={cn(colorClass, animationClass, className)} />;
      case 'gem':
        return <Gem size={iconSize} className={cn(colorClass, animationClass, className)} />;
      case 'heart':
        return <Heart size={iconSize} className={cn(colorClass, animationClass, className)} />;
      case 'medal':
        return <Award size={iconSize} className={cn(colorClass, animationClass, className)} />;
      case 'trophy':
        return <Trophy size={iconSize} className={cn(colorClass, animationClass, className)} />;
      case 'castle':
        return <Castle size={iconSize} className={cn(colorClass, animationClass, className)} />;
      case 'user':
        return <User size={iconSize} className={cn(colorClass, animationClass, className)} />;
      case 'wallet':
        return <Wallet size={iconSize} className={cn(colorClass, animationClass, className)} />;
      case 'sparkles':
        return <Sparkles size={iconSize} className={cn(colorClass, animationClass, className)} />;
      case 'seal':
        return (
          <div className={cn("relative flex items-center justify-center", colorClass, animationClass, className)}>
            <Shield size={iconSize} />
            <Crown size={iconSize/2} className="absolute" style={{ top: '25%' }} />
          </div>
        );
      case 'certificate':
        return (
          <div className={cn("relative flex items-center justify-center", colorClass, animationClass, className)}>
            <Scroll size={iconSize} />
            <Crown size={iconSize/2} className="absolute" style={{ top: '20%' }} />
          </div>
        );
      case 'coins':
        return (
          <div className={cn("relative flex items-center justify-center", colorClass, animationClass, className)}>
            <div className="relative">
              <Gem size={iconSize} />
              <Gem size={iconSize*0.7} className="absolute -bottom-1 -right-1" />
            </div>
          </div>
        );
      // Add fallbacks for the additional icon types
      case 'star':
        return <Sparkles size={iconSize} className={cn(colorClass, animationClass, className)} />;
      case 'flame':
        return <div className={cn(colorClass, animationClass, className)}>🔥</div>;
      case 'sunburst':
        return <Sparkles size={iconSize} className={cn(colorClass, animationClass, className)} />;
      case 'water':
        return <div className={cn(colorClass, animationClass, className)}>💧</div>;
      case 'key':
        return <div className={cn(colorClass, animationClass, className)}>🔑</div>;
      default:
        return <Crown size={iconSize} className={cn(colorClass, animationClass, className)} />;
    }
  };

  return renderIcon();
};

export default MedievalIcon;
