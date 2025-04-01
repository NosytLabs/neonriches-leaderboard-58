
import React from 'react';
import { cn } from '@/lib/utils';
import { MedievalIconProps } from '@/types/ui/icon-types';

const MedievalIcon: React.FC<MedievalIconProps> = ({
  name,
  size = 'md',
  color = 'gold',
  animated = false,
  className,
  onClick
}) => {
  // Size mappings
  const sizeMap = {
    xs: 'w-4 h-4',
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-10 h-10'
  };
  
  // Color mappings
  const colorMap = {
    gold: 'text-royal-gold',
    royal: 'text-royal-purple',
    silver: 'text-gray-300',
    bronze: 'text-amber-700',
    red: 'text-red-500',
    blue: 'text-blue-500',
    green: 'text-green-500',
    purple: 'text-purple-500',
    default: 'text-white'
  };
  
  // Map medieval icon names to FontAwesome or other icon class names
  const iconMap: Record<string, string> = {
    crown: 'fa-crown',
    shield: 'fa-shield-alt',
    sword: 'fa-sword',
    banner: 'fa-flag',
    scroll: 'fa-scroll',
    goblet: 'fa-wine-glass',
    castle: 'fa-chess-rook',
    dragon: 'fa-dragon',
    knight: 'fa-chess-knight',
    king: 'fa-chess-king',
    queen: 'fa-chess-queen',
    jester: 'fa-hat-wizard',
    wizard: 'fa-hat-wizard',
    coin: 'fa-coins',
    treasure: 'fa-coins',
    horse: 'fa-horse',
    fleur: 'fa-fleur-de-lis',
    chalice: 'fa-wine-glass-alt',
    throne: 'fa-chair',
    'crossed-swords': 'fa-swords',
    helmet: 'fa-helmet-battle',
    bow: 'fa-bow-arrow',
    arrow: 'fa-arrow-alt',
    candle: 'fa-candle-holder',
    torch: 'fa-fire',
    flag: 'fa-flag-alt',
    axe: 'fa-axe',
    mace: 'fa-mace',
    key: 'fa-key'
  };
  
  // We'll use a placeholder until we implement actual icons
  const renderIcon = () => {
    // This would use actual icons in production
    return (
      <span 
        className={cn(
          sizeMap[size], 
          colorMap[color], 
          animated ? 'animate-pulse' : '',
          "flex items-center justify-center"
        )}
      >
        {getIconDisplay(name)}
      </span>
    );
  };
  
  const getIconDisplay = (iconName: string): string => {
    const iconDisplayMap: Record<string, string> = {
      crown: '👑',
      shield: '🛡️',
      sword: '⚔️',
      banner: '🏳️',
      scroll: '📜',
      goblet: '🏆',
      castle: '🏰',
      dragon: '🐉',
      knight: '🧙‍♂️',
      king: '🤴',
      queen: '👸',
      jester: '🤹',
      wizard: '🧙‍♂️',
      coin: '🪙',
      treasure: '💰',
      horse: '🐎',
      fleur: '⚜️',
      chalice: '🍷',
      throne: '🪑',
      'crossed-swords': '⚔️',
      helmet: '⛑️',
      bow: '🏹',
      arrow: '➡️',
      candle: '🕯️',
      torch: '🔥',
      flag: '🏁',
      axe: '🪓',
      mace: '🔨',
      key: '🔑'
    };
    
    return iconDisplayMap[iconName] || '🔰';
  };
  
  return (
    <div 
      className={cn('medieval-icon', className)} 
      onClick={onClick}
    >
      {renderIcon()}
    </div>
  );
};

export default MedievalIcon;
