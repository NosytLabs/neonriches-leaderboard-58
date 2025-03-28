
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
  | 'gem';

export type MedievalIconSize = 'sm' | 'md' | 'lg' | 'xl';
export type MedievalIconColor = 'gold' | 'silver' | 'bronze' | 'red' | 'blue' | 'green' | 'purple' | 'amber';

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
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8'
  };
  
  const colorClasses = {
    gold: 'text-royal-gold',
    silver: 'text-gray-300',
    bronze: 'text-amber-600',
    red: 'text-royal-crimson',
    blue: 'text-royal-navy',
    green: 'text-emerald-500',
    purple: 'text-purple-500',
    amber: 'text-amber-500'
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
      default: return '👑';
    }
  };
  
  return (
    <span className={cn(
      sizeClasses[size], 
      colorClasses[color], 
      'inline-flex items-center justify-center', 
      className
    )}>
      {getIconContent(name)}
    </span>
  );
};

export default MedievalIcon;
