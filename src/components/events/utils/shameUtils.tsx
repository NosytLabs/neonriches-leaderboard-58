
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { ShieldAlert, Ban, Music2, UserX, CloudFog, UserRoundX, Crown, Skull } from 'lucide-react';

/**
 * Types of shame actions available
 */
export type ShameAction = 
  | 'tomatoes' 
  | 'eggs' 
  | 'dungeons' 
  | 'stocks' 
  | 'dunce' 
  | 'jester' 
  | 'troll' 
  | 'peasant' 
  | 'rat' 
  | 'ghost' 
  | 'skeleton' 
  | 'zombie' 
  | 'witch' 
  | 'monster' 
  | 'demon' 
  | 'target' 
  | 'challenge' 
  | 'crown' 
  | 'pawn';

/**
 * Get the appropriate icon for a shame action
 */
export const getShameActionIcon = (action: ShameAction): LucideIcon => {
  switch (action) {
    case 'tomatoes':
      return Ban;
    case 'eggs':
      return ShieldAlert;
    case 'dungeons':
      return UserX;
    case 'jester':
      return Music2;
    case 'smoke':
    case 'witch':
      return CloudFog;
    case 'crown':
      return Crown;
    case 'skeleton':
    case 'ghost':
      return Skull;
    default:
      return UserRoundX;
  }
};

/**
 * Render a shame action icon with the given size
 */
export const renderShameActionIcon = (action: ShameAction, size: 'sm' | 'md' | 'lg' = 'md') => {
  const IconComponent = getShameActionIcon(action);
  const sizeClass = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };
  
  return (
    <span className={cn(sizeClass[size])}>
      {IconComponent && <IconComponent />}
    </span>
  );
};

export default {
  getShameActionIcon,
  renderShameActionIcon
};
