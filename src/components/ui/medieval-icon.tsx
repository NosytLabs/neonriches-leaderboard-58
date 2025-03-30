
import React from 'react';
import { cn } from '@/lib/utils';
import { IconSize } from '@/types/ui/decorations/types';

interface MedievalIconProps {
  name: string;
  size?: IconSize;
  color?: string;
  className?: string;
  animated?: boolean;
}

const MedievalIcon: React.FC<MedievalIconProps> = ({
  name,
  size = 'md',
  color = 'gold',
  className,
  animated = false
}) => {
  const iconSizeMap: Record<IconSize, number> = {
    'xs': 16,
    'sm': 20,
    'md': 24,
    'lg': 32,
    'xl': 48,
    '2xl': 64,
    '3xl': 96,
    '4xl': 128
  };
  
  const iconSize = iconSizeMap[size] || 24;
  
  const getColorClass = (color: string): string => {
    switch (color) {
      case 'gold': return 'text-royal-gold';
      case 'silver': return 'text-gray-300';
      case 'bronze': return 'text-amber-600';
      case 'royal': return 'text-royal-purple';
      case 'crimson': return 'text-royal-crimson';
      case 'navy': return 'text-royal-navy';
      case 'emerald': return 'text-emerald-500';
      default: return 'text-royal-gold';
    }
  };
  
  const getIconContent = (name: string): React.ReactNode => {
    // Map icon names to unicode symbols or SVG
    switch (name.toLowerCase()) {
      case 'crown': return '👑';
      case 'sword': return '⚔️';
      case 'shield': return '🛡️';
      case 'scroll': return '📜';
      case 'castle': return '🏰';
      case 'dragon': return '🐉';
      case 'knight': return '🏇';
      case 'treasure': return '💰';
      case 'potion': return '🧪';
      case 'wizard': return '🧙‍♂️';
      case 'king': return '🤴';
      case 'queen': return '👸';
      case 'jester': return '🃏';
      case 'arrow': return '🏹';
      default: return '⚜️';
    }
  };
  
  return (
    <span 
      className={cn(
        getColorClass(color),
        animated && 'animate-pulse-slow',
        'inline-flex items-center justify-center',
        className
      )}
      style={{ fontSize: `${iconSize / 16}rem` }}
      role="img"
      aria-label={name}
    >
      {getIconContent(name)}
    </span>
  );
};

export default MedievalIcon;
