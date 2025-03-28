
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
  | 'sunburst'
  | 'seal'
  | 'medal'
  | 'sparkles'
  | 'star'
  | 'trophy'
  | 'key'
  | 'wallet';

export type MedievalIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type MedievalIconColor = 
  | 'gold' 
  | 'silver' 
  | 'bronze' 
  | 'red' 
  | 'blue' 
  | 'green' 
  | 'purple' 
  | 'white'
  | 'default'
  | 'copper'
  | 'crimson'
  | 'navy'
  | 'emerald';

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
    'xl': 'w-10 h-10',
    '2xl': 'w-12 h-12'
  };
  
  const colorClasses = {
    'gold': 'text-royal-gold',
    'silver': 'text-gray-300',
    'bronze': 'text-amber-600',
    'red': 'text-royal-crimson',
    'blue': 'text-royal-navy-bright',
    'green': 'text-emerald-500',
    'purple': 'text-royal-purple',
    'white': 'text-white',
    'default': 'text-white',
    'copper': 'text-amber-700',
    'crimson': 'text-royal-crimson',
    'navy': 'text-royal-navy-bright',
    'emerald': 'text-emerald-500'
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
      case 'seal':
        return <SealIcon className={iconClass} />;
      case 'medal':
        return <MedalIcon className={iconClass} />;
      case 'sparkles':
        return <SparklesIcon className={iconClass} />;
      case 'star':
        return <StarIcon className={iconClass} />;
      case 'trophy':
        return <TrophyIcon className={iconClass} />;
      case 'key':
        return <KeyIcon className={iconClass} />;
      case 'wallet':
        return <WalletIcon className={iconClass} />;
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

const SealIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const MedalIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

const SparklesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
  </svg>
);

const StarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const TrophyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="M8 21h8" />
    <path d="M12 21v-5" />
    <path d="M18 8c0 4-2.5 6-6 6s-6-2-6-6" />
    <path d="M17 3H7v5a5 5 0 0 0 10 0V3Z" />
  </svg>
);

const KeyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
  </svg>
);

const WalletIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
  </svg>
);

export default MedievalIcon;
