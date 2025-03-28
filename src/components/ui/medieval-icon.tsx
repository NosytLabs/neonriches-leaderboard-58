
import React from 'react';
import { cn } from '@/lib/utils';

export type MedievalIconName = 
  | 'crown' 
  | 'sword' 
  | 'shield' 
  | 'scroll' 
  | 'castle' 
  | 'dragon'
  | 'knight' 
  | 'king' 
  | 'queen' 
  | 'jester' 
  | 'wizard' 
  | 'treasure' 
  | 'coins' 
  | 'gem'
  | 'seal'
  | 'parchment'
  | 'chalice'
  | 'key'
  | 'torch'
  | 'quill'
  | 'medal'
  | 'heart'
  | 'trophy'
  | 'wallet'
  | 'message'
  | 'user'
  | 'flame'
  | 'sunburst'
  | 'water'
  | 'sparkles';

export type MedievalIconSize = 'sm' | 'md' | 'lg' | 'xl' | 'xs' | '2xl';
export type MedievalIconColor = 
  | 'gold' 
  | 'silver' 
  | 'bronze' 
  | 'red' 
  | 'blue' 
  | 'green' 
  | 'purple' 
  | 'amber'
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
  const sizeClasses = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8',
    '2xl': 'w-10 h-10'
  };
  
  const colorClasses = {
    gold: 'text-royal-gold',
    silver: 'text-gray-300',
    bronze: 'text-amber-600',
    copper: 'text-amber-600',
    red: 'text-royal-crimson',
    crimson: 'text-royal-crimson',
    blue: 'text-royal-navy',
    navy: 'text-royal-navy',
    green: 'text-emerald-500',
    emerald: 'text-emerald-500',
    purple: 'text-purple-500',
    amber: 'text-amber-500',
    default: 'text-gray-300',
    white: 'text-white'
  };
  
  // Map icon names to emoji or unicode symbols
  const getIconContent = (iconName: MedievalIconName): string => {
    switch (iconName) {
      case 'crown': return '👑';
      case 'sword': return '⚔️';
      case 'shield': return '🛡️';
      case 'scroll': return '📜';
      case 'castle': return '🏰';
      case 'dragon': return '🐉';
      case 'knight': return '🏇';
      case 'king': return '♚';
      case 'queen': return '♛';
      case 'jester': return '🃏';
      case 'wizard': return '🧙';
      case 'treasure': return '💰';
      case 'coins': return '🪙';
      case 'gem': return '💎';
      case 'seal': return '🔰';
      case 'parchment': return '📝';
      case 'chalice': return '🏆';
      case 'key': return '🔑';
      case 'torch': return '🔥';
      case 'quill': return '✒️';
      case 'medal': return '🏅';
      case 'heart': return '❤️';
      case 'trophy': return '🏆';
      case 'wallet': return '👛';
      case 'message': return '💬';
      case 'user': return '👤';
      case 'flame': return '🔥';
      case 'sunburst': return '☀️';
      case 'water': return '💧';
      case 'sparkles': return '✨';
      default: return '👑';
    }
  };
  
  return (
    <span className={cn(
      sizeClasses[size], 
      colorClasses[color], 
      'inline-flex items-center justify-center',
      animate && 'animate-pulse-slow',
      className
    )}>
      {getIconContent(name)}
    </span>
  );
};

export default MedievalIcon;
