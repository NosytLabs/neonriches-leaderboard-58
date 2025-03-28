
import React from 'react';
import { cn } from '@/lib/utils';

export type MedievalIconName = 
  'crown' | 'shield' | 'sword' | 'scroll' | 'coins' | 
  'castle' | 'dragon' | 'goblet' | 'potion' | 'map' | 
  'key' | 'wallet' | 'medal' | 'heart' | 'trophy' | 
  'seal' | 'sparkles' | 'flame' | 'sunburst' | 'water' |
  'user' | 'message';

export type MedievalIconSize = 
  'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type MedievalIconColor = 
  'gold' | 'silver' | 'purple' | 'red' | 'blue' | 'green' | 
  'amber' | 'crimson' | 'navy' | 'copper' | 'emerald' | 'default' | 'white';

export interface MedievalIconProps {
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
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
    '2xl': 'w-16 h-16'
  };
  
  const colorClasses = {
    gold: 'text-royal-gold',
    silver: 'text-gray-300',
    purple: 'text-purple-400',
    red: 'text-red-500',
    blue: 'text-blue-400',
    green: 'text-green-500',
    amber: 'text-amber-400',
    crimson: 'text-royal-crimson',
    navy: 'text-royal-navy',
    copper: 'text-amber-600',
    emerald: 'text-emerald-400',
    default: 'text-white',
    white: 'text-white'
  };
  
  const animationClass = animate ? 'animate-bounce-subtle' : '';
  
  // Replace this with actual SVG icons in a real implementation
  const getIconContent = () => {
    switch (name) {
      case 'crown':
        return '👑';
      case 'shield':
        return '🛡️';
      case 'sword':
        return '⚔️';
      case 'scroll':
        return '📜';
      case 'coins':
        return '🪙';
      case 'castle':
        return '🏰';
      case 'dragon':
        return '🐉';
      case 'goblet':
        return '🏆';
      case 'potion':
        return '🧪';
      case 'map':
        return '🗺️';
      case 'key':
        return '🔑';
      case 'wallet':
        return '👛';
      case 'medal':
        return '🏅';
      case 'heart':
        return '❤️';
      case 'trophy':
        return '🏆';
      case 'seal':
        return '🌟';
      case 'sparkles':
        return '✨';
      case 'flame':
        return '🔥';
      case 'sunburst':
        return '☀️';
      case 'water':
        return '💧';
      case 'user':
        return '👤';
      case 'message':
        return '💬';
      default:
        return '❓';
    }
  };
  
  return (
    <span 
      className={cn(
        'inline-block font-medieval',
        sizeClasses[size],
        colorClasses[color],
        animationClass,
        className
      )}
      aria-hidden="true"
    >
      {getIconContent()}
    </span>
  );
};

export default MedievalIcon;
