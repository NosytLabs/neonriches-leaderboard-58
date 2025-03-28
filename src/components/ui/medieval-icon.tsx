
import React from 'react';
import { Crown, Flame, Coins, Shield, Scroll, Sword, Gem, Castle, Heart, Skull, User, Book, Bell, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

export type MedievalIconName = 
  | 'crown' 
  | 'flame' 
  | 'coins' 
  | 'shield' 
  | 'scroll' 
  | 'sword' 
  | 'gem' 
  | 'castle' 
  | 'heart' 
  | 'skull' 
  | 'user' 
  | 'book' 
  | 'bell' 
  | 'award'
  | 'water' 
  | 'sunburst';

export type MedievalIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type MedievalIconColor = 'gold' | 'silver' | 'bronze' | 'red' | 'blue' | 'green' | 'purple' | 'white';

interface MedievalIconProps {
  name: MedievalIconName;
  size?: MedievalIconSize;
  color?: MedievalIconColor;
  className?: string;
  animate?: boolean | 'shine' | 'pulse' | 'glow' | 'float';
}

const MedievalIcon: React.FC<MedievalIconProps> = ({
  name,
  size = 'md',
  color = 'white',
  className = '',
  animate = false
}) => {
  const sizeClasses = {
    'xs': 'w-3.5 h-3.5',
    'sm': 'w-5 h-5',
    'md': 'w-6 h-6',
    'lg': 'w-8 h-8',
    'xl': 'w-10 h-10'
  };
  
  const colorClasses = {
    'gold': 'text-royal-gold',
    'silver': 'text-gray-300',
    'bronze': 'text-amber-600',
    'red': 'text-royal-crimson',
    'blue': 'text-royal-navy-bright',
    'green': 'text-emerald-500',
    'purple': 'text-royal-purple',
    'white': 'text-white'
  };
  
  const animationClasses = {
    'true': 'animate-pulse',
    'shine': 'animate-royal-shine',
    'pulse': 'animate-pulse',
    'glow': 'animate-crown-glow',
    'float': 'animate-float'
  };
  
  const iconClass = cn(
    sizeClasses[size],
    colorClasses[color],
    animate ? animationClasses[animate.toString() as keyof typeof animationClasses] : '',
    className
  );
  
  const getIcon = () => {
    switch (name) {
      case 'crown':
        return <Crown className={iconClass} />;
      case 'flame':
        return <Flame className={iconClass} />;
      case 'coins':
        return <Coins className={iconClass} />;
      case 'shield':
        return <Shield className={iconClass} />;
      case 'scroll':
        return <Scroll className={iconClass} />;
      case 'sword':
        return <Sword className={iconClass} />;
      case 'gem':
        return <Gem className={iconClass} />;
      case 'castle':
        return <Castle className={iconClass} />;
      case 'heart':
        return <Heart className={iconClass} />;
      case 'skull':
        return <Skull className={iconClass} />;
      case 'user':
        return <User className={iconClass} />;
      case 'book':
        return <Book className={iconClass} />;
      case 'bell':
        return <Bell className={iconClass} />;
      case 'award':
        return <Award className={iconClass} />;
      case 'water':
        return <WaterIcon className={iconClass} />;
      case 'sunburst':
        return <SunburstIcon className={iconClass} />;
      default:
        return <Crown className={iconClass} />;
    }
  };

  return getIcon();
};

// Custom SVG icons for additional medieval themed icons
const WaterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 22a8 8 0 0 1-8-8c0-4.41 8-12 8-12s8 7.59 8 12a8 8 0 0 1-8 8z" />
  </svg>
);

const SunburstIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="M4.93 4.93l1.41 1.41" />
    <path d="M17.66 17.66l1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="M6.34 17.66l-1.41 1.41" />
    <path d="M19.07 4.93l-1.41 1.41" />
  </svg>
);

export default MedievalIcon;
