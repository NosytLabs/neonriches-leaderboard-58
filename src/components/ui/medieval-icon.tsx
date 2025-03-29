
import React from 'react';
import { cn } from '@/lib/utils';
import { Icon, IconName } from '@/components/ui/icon';

// Map medieval icon names to our Icon component names
const medievalIconMap: Record<MedievalIconName, IconName> = {
  crown: 'crown',
  shield: 'shield',
  sword: 'sword',
  scroll: 'scroll',
  coins: 'coin',
  castle: 'castle',
  dragon: 'warning', // We'll use a warning icon for dragon
  goblet: 'goblet',
  potion: 'gift',
  map: 'image',
  key: 'key',
  wallet: 'wallet',
  medal: 'medal',
  heart: 'heart',
  trophy: 'trophy',
  seal: 'medal',
  sparkles: 'star',
  flame: 'fire',
  sunburst: 'sun',
  water: 'water',
  user: 'user',
  message: 'message',
  gem: 'gem'
};

export type MedievalIconName = 
  'crown' | 'shield' | 'sword' | 'scroll' | 'coins' | 
  'castle' | 'dragon' | 'goblet' | 'potion' | 'map' | 
  'key' | 'wallet' | 'medal' | 'heart' | 'trophy' | 
  'seal' | 'sparkles' | 'flame' | 'sunburst' | 'water' |
  'user' | 'message' | 'gem';

export type MedievalIconSize = 
  'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type MedievalIconColor = 
  'gold' | 'silver' | 'purple' | 'red' | 'blue' | 'green' | 
  'amber' | 'crimson' | 'navy' | 'copper' | 'emerald' | 'default' | 'white' | 'bronze';

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
  // Convert color to a CSS variable or color value
  const colorMap: Record<MedievalIconColor, string> = {
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
    white: 'text-white',
    bronze: 'text-amber-800'
  };
  
  const animationClass = animate ? 'animate-bounce-subtle' : '';
  
  return (
    <Icon 
      name={medievalIconMap[name]}
      size={size as any}
      className={cn(
        colorMap[color],
        animationClass,
        className
      )}
      variant="royal"
    />
  );
};

export default MedievalIcon;
