import React from 'react';
import { cn } from '@/lib/utils';

export type IconName = 
  // Navigation & UI
  | 'settings' | 'home' | 'search' | 'menu' | 'arrow-right' | 'close'
  | 'user' | 'profile' | 'notification' | 'filter' | 'edit' | 'trash'
  | 'wallet' | 'dollar' | 'coin' | 'crown' | 'trophy' | 'gift'
  | 'play' | 'pause' | 'volume' | 'mute' | 'upload' | 'download'
  // Royal & Medieval
  | 'throne' | 'sword' | 'shield' | 'scroll' | 'quill' | 'key'
  | 'treasure' | 'gem' | 'medal' | 'goblet' | 'castle' | 'flag'
  // Social & Communication
  | 'heart' | 'star' | 'like' | 'dislike' | 'comment' | 'message'
  | 'mail' | 'send' | 'share' | 'link' | 'phone'
  // Status & Feedback
  | 'check' | 'warning' | 'info' | 'error' | 'help' | 'lock'
  | 'clock' | 'calendar' | 'bell' | 'bookmark' | 'tag'
  // Content & Media
  | 'image' | 'video' | 'audio' | 'file' | 'folder' | 'camera'
  | 'gallery' | 'music' | 'microphone' | 'headphones' | 'book';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type IconVariant = 'default' | 'solid' | 'outline' | 'royal';

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
  variant = 'default',
  color
}) => {
  const sizeClasses = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
    '2xl': 'w-16 h-16',
  };

  // Map icon names to their positions in the sprite sheet
  // Format: [row, column]
  const iconPositions: Record<IconName, [number, number]> = {
    // Navigation & UI (Row 1)
    'settings': [0, 0],
    'volume': [0, 1],
    'home': [0, 3],
    'search': [0, 9],
    'menu': [2, 18],
    
    // Status indicators (Row 2)
    'notification': [1, 1],
    'info': [1, 2],
    'warning': [1, 19],
    
    // Money & Value (Row 3-4)
    'wallet': [2, 1],
    'dollar': [3, 0],
    'coin': [3, 1],
    'crown': [1, 14],
    'trophy': [7, 18],
    
    // Communication (Row 2-3)
    'message': [2, 13],
    'mail': [1, 12],
    'phone': [2, 4],
    
    // Media & File (Row 0-1)
    'image': [0, 19],
    'camera': [5, 4],
    'video': [0, 17],
    'file': [1, 2],
    
    // User & Profile
    'user': [2, 0],
    'profile': [2, 0],
    
    // Actions
    'edit': [0, 6],
    'trash': [4, 2],
    'upload': [3, 6],
    'download': [3, 7],
    'play': [3, 18],
    'close': [1, 13],
    
    // Game elements
    'shield': [0, 0],
    'sword': [7, 1],
    'scroll': [5, 17],
    'castle': [2, 15],
    'treasure': [5, 18],
    
    // Social
    'heart': [3, 4],
    'star': [1, 1],
    'like': [3, 5],
    'dislike': [3, 5],
    'comment': [2, 13],
    'share': [4, 14],
    
    // Other common icons
    'lock': [2, 8],
    'calendar': [0, 5],
    'clock': [6, 5],
    'bookmark': [6, 4],
    'tag': [7, 3],
    'check': [7, 4],
    'error': [1, 13],
    'help': [1, 19],
    
    // Additional icons
    'arrow-right': [2, 19],
    'filter': [6, 16],
    'pause': [3, 18],
    'mute': [2, 2],
    'link': [4, 14],
    'send': [2, 14],
    'bell': [1, 14],
    'folder': [4, 12],
    'audio': [6, 15],
    'music': [6, 15],
    'microphone': [5, 16],
    'headphones': [6, 13],
    'book': [5, 17],
    'gallery': [1, 19],
    'gift': [6, 7],
    'goblet': [7, 18],
    'medal': [7, 19],
    'gem': [7, 16],
    'quill': [7, 1],
    'key': [4, 1],
    'flag': [6, 19],
    'throne': [1, 14],
  };

  // Calculate background position for the sprite
  const getIconStyle = (name: IconName) => {
    const position = iconPositions[name];
    if (!position) return {};
    
    const [row, col] = position;
    return {
      backgroundPosition: `-${col * 24}px -${row * 24}px`
    };
  };

  const variantClasses = {
    default: 'text-foreground',
    solid: 'text-white bg-foreground rounded-sm',
    outline: 'text-foreground border border-foreground rounded-sm',
    royal: 'text-royal-gold',
  };

  return (
    <span 
      className={cn(
        'inline-block bg-current mask-icon',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      style={{
        ...getIconStyle(name),
        ...(color ? { color } : {}),
      }}
      aria-hidden="true"
    />
  );
};

export default Icon;
