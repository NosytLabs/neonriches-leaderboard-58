
import React from 'react';
import { cn } from '@/lib/utils';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type IconVariant = 'solid' | 'outline' | 'royal';

export type IconName = 
  | 'home' | 'trophy' | 'user' | 'profile' | 'dollar' | 'bar-chart'
  | 'star' | 'crown' | 'shield' | 'sword' | 'scroll' | 'coin'
  | 'castle' | 'goblet' | 'key' | 'wallet' | 'medal' | 'heart'
  | 'mail' | 'bell' | 'calendar' | 'edit' | 'trash' | 'lock'
  | 'phone' | 'bookmark' | 'image' | 'video' | 'music' | 'book'
  | 'upload' | 'download' | 'menu' | 'check' | 'warning' | 'info'
  | 'help' | 'camera' | 'gift' | 'link' | 'share' | 'play'
  | 'pause' | 'volume' | 'mute' | 'search' | 'settings' | 'gem'
  | 'fire' | 'sun' | 'water' | 'eye';

export interface IconProps {
  name: IconName;
  size?: IconSize;
  className?: string;
  variant?: IconVariant;
  color?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 'md',
  className,
  variant = 'solid',
  color
}) => {
  // Convert size to pixel dimensions
  const dimensions = {
    xs: 16,
    sm: 20,
    md: 24,
    lg: 32,
    xl: 48,
    '2xl': 64
  };
  
  // Map icon names to positions in the sprite sheet
  const iconPositions: Record<IconName, { x: number; y: number }> = {
    'home': { x: 0, y: 0 },
    'trophy': { x: 1, y: 0 },
    'user': { x: 2, y: 0 },
    'profile': { x: 3, y: 0 },
    'dollar': { x: 4, y: 0 },
    'bar-chart': { x: 5, y: 0 },
    'star': { x: 6, y: 0 },
    'crown': { x: 7, y: 0 },
    'shield': { x: 8, y: 0 },
    'sword': { x: 9, y: 0 },
    'scroll': { x: 10, y: 0 },
    'coin': { x: 11, y: 0 },
    'castle': { x: 12, y: 0 },
    'goblet': { x: 13, y: 0 },
    'key': { x: 14, y: 0 },
    'wallet': { x: 15, y: 0 },
    'medal': { x: 16, y: 0 },
    'heart': { x: 17, y: 0 },
    'mail': { x: 18, y: 0 },
    'bell': { x: 19, y: 0 },
    'calendar': { x: 0, y: 1 },
    'edit': { x: 1, y: 1 },
    'trash': { x: 2, y: 1 },
    'lock': { x: 3, y: 1 },
    'phone': { x: 4, y: 1 },
    'bookmark': { x: 5, y: 1 },
    'image': { x: 6, y: 1 },
    'video': { x: 7, y: 1 },
    'music': { x: 8, y: 1 },
    'book': { x: 9, y: 1 },
    'upload': { x: 10, y: 1 },
    'download': { x: 11, y: 1 },
    'menu': { x: 12, y: 1 },
    'check': { x: 13, y: 1 },
    'warning': { x: 14, y: 1 },
    'info': { x: 15, y: 1 },
    'help': { x: 16, y: 1 },
    'camera': { x: 17, y: 1 },
    'gift': { x: 18, y: 1 },
    'link': { x: 19, y: 1 },
    'share': { x: 0, y: 2 },
    'play': { x: 1, y: 2 },
    'pause': { x: 2, y: 2 },
    'volume': { x: 3, y: 2 },
    'mute': { x: 4, y: 2 },
    'search': { x: 5, y: 2 },
    'settings': { x: 6, y: 2 },
    'gem': { x: 7, y: 2 },
    'fire': { x: 8, y: 2 },
    'sun': { x: 9, y: 2 },
    'water': { x: 10, y: 2 },
    'eye': { x: 11, y: 2 }
  };
  
  // Get position for the requested icon
  const position = iconPositions[name] || { x: 0, y: 0 }; // Default to first icon if not found
  
  // Calculate position in pixels (assuming each icon is 24px in the sprite sheet)
  const posX = -position.x * 24;
  const posY = -position.y * 24;
  
  const styleBg = {
    maskPosition: `${posX}px ${posY}px`,
    WebkitMaskPosition: `${posX}px ${posY}px`,
    backgroundColor: color || undefined,
    width: dimensions[size],
    height: dimensions[size],
  };

  return (
    <span
      className={cn(
        "mask-icon block",
        `icon-${variant}`,
        className
      )}
      style={styleBg}
    />
  );
};
