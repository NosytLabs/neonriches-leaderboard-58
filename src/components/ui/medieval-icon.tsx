
import React from 'react';
import { cn } from '@/lib/utils';

export type MedievalIconName = 'crown' | 'scroll' | 'coins' | 'seal' | 'sword' | 'shield' | 'castle' | 'goblet' | 'pattern';
export type MedievalIconSize = 'xs' | 'sm' | 'md' | 'lg' | '2xl';
export type MedievalIconColor = 'default' | 'gold' | 'silver' | 'copper' | 'crimson' | 'navy' | 'bronze';

interface MedievalIconProps {
  name: MedievalIconName;
  size?: MedievalIconSize;
  color?: MedievalIconColor;
  animate?: boolean;
  className?: string;
}

const MedievalIcon: React.FC<MedievalIconProps> = ({
  name,
  size = 'md',
  color = 'default',
  animate = false,
  className,
}) => {
  const sizeClasses = {
    xs: 'text-sm',
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
    '2xl': 'text-4xl',
  };

  const colorClasses = {
    default: 'text-white',
    gold: 'text-royal-gold',
    silver: 'text-gray-300',
    copper: 'text-amber-700',
    crimson: 'text-royal-crimson',
    navy: 'text-royal-navy',
    bronze: 'text-amber-800',
  };

  const animationClass = animate ? getAnimationClass(name) : '';

  const renderIcon = () => {
    switch (name) {
      case 'crown':
        return '👑';
      case 'scroll':
        return '📜';
      case 'coins':
        return '💰';
      case 'seal':
        return '🔰';
      case 'sword':
        return '⚔️';
      case 'shield':
        return '🛡️';
      case 'castle':
        return '🏰';
      case 'goblet':
        return '🏆';
      case 'pattern':
        return '✳️';
      default:
        return '❓';
    }
  };

  return (
    <span className={cn(sizeClasses[size], colorClasses[color], animationClass, className)}>
      {renderIcon()}
    </span>
  );
};

function getAnimationClass(iconName: MedievalIconName): string {
  switch (iconName) {
    case 'crown':
      return 'animate-crown-glow';
    case 'scroll':
      return 'animate-quill-write';
    case 'coins':
      return 'animate-coin-flip';
    case 'seal':
      return 'animate-seal-stamp';
    case 'pattern':
      return 'animate-spin-slow';
    default:
      return '';
  }
}

export default MedievalIcon;
