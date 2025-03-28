
import React from 'react';
import { Crown, Shield, Scroll, GemIcon, Swords, Trophy, Key, Coins, Wallet, Heart, Medal, Castle } from 'lucide-react';
import { cn } from '@/lib/utils';

export type MedievalIconName = 
  | 'crown' 
  | 'shield' 
  | 'scroll' 
  | 'gem' 
  | 'sword' 
  | 'trophy' 
  | 'key' 
  | 'coins' 
  | 'wallet' 
  | 'heart' 
  | 'medal' 
  | 'castle' 
  | 'certificate';

export type MedievalIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type MedievalIconColor = 
  | 'default' 
  | 'gold' 
  | 'silver' 
  | 'copper' 
  | 'red' 
  | 'blue' 
  | 'green' 
  | 'purple' 
  | 'amber';

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
  color = 'default',
  className,
  animate = false
}) => {
  const sizeClass = getSizeClass(size);
  const colorClass = getColorClass(color);
  const animationClass = animate ? 'animate-pulse-slow' : '';
  
  const iconClasses = cn(sizeClass, colorClass, animationClass, className);
  
  switch (name) {
    case 'crown':
      return <Crown className={iconClasses} />;
    case 'shield':
      return <Shield className={iconClasses} />;
    case 'scroll':
      return <Scroll className={iconClasses} />;
    case 'gem':
      return <GemIcon className={iconClasses} />;
    case 'sword':
      return <Swords className={iconClasses} />;
    case 'trophy':
      return <Trophy className={iconClasses} />;
    case 'key':
      return <Key className={iconClasses} />;
    case 'coins':
      return <Coins className={iconClasses} />;
    case 'wallet':
      return <Wallet className={iconClasses} />;
    case 'heart':
      return <Heart className={iconClasses} />;
    case 'medal':
      return <Medal className={iconClasses} />;
    case 'castle':
      return <Castle className={iconClasses} />;
    case 'certificate':
      return <Scroll className={iconClasses} />;
    default:
      return <Crown className={iconClasses} />;
  }
};

const getSizeClass = (size: MedievalIconSize): string => {
  switch (size) {
    case 'xs':
      return 'w-3 h-3';
    case 'sm':
      return 'w-4 h-4';
    case 'md':
      return 'w-6 h-6';
    case 'lg':
      return 'w-8 h-8';
    case 'xl':
      return 'w-12 h-12';
    default:
      return 'w-6 h-6';
  }
};

const getColorClass = (color: MedievalIconColor): string => {
  switch (color) {
    case 'gold':
      return 'text-royal-gold';
    case 'silver':
      return 'text-gray-300';
    case 'copper':
      return 'text-amber-600';
    case 'red':
      return 'text-red-500';
    case 'blue':
      return 'text-blue-500';
    case 'green':
      return 'text-green-500';
    case 'purple':
      return 'text-purple-500';
    case 'amber':
      return 'text-amber-500';
    default:
      return 'text-white';
  }
};

export default MedievalIcon;
