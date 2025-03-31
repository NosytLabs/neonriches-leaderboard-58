
import React from 'react';
import { cn } from '@/lib/utils';
import { MockeryAction } from '@/types/mockery-types';

interface MockeryActionIconProps {
  action: MockeryAction;
  size?: number;
  className?: string;
}

const MockeryActionIcon: React.FC<MockeryActionIconProps> = ({
  action,
  size = 16,
  className
}) => {
  const getIcon = (actionType: MockeryAction): string => {
    const icons: Record<string, string> = {
      'tomatoes': '🍅',
      'eggs': '🥚',
      'crown': '👑',
      'jester': '🎭',
      'stocks': '🪵',
      'protection': '🛡️',
      'shame': '😳',
      'target': '🎯',
      'putridEggs': '🥚',
      'silence': '🔇',
      'courtJester': '🃏',
      'smokeBomb': '💨',
      'immune': '🔰',
      'dunce': '📝',
      'glitterBomb': '✨',
      'royalPie': '🥧',
      'jokeCrown': '👑',
      'memeFrame': '🖼️',
      'roast': '🔥',
      'ridicule': '😂',
      'humiliate': '😱',
      'expose': '👁️',
      'mock': '🤡',
      'taunt': '👈',
      'guillotine': '🪓',
      'dungeons': '🏰',
      'removal': '🗑️',
      'troll': '👹',
      'peasant': '👨‍🌾',
      'rat': '🐀',
      'ghost': '👻',
      'skeleton': '💀',
      'zombie': '🧟',
      'witch': '🧙',
      'monster': '👾',
      'dragon': '🐉',
      'jest': '🤣',
      'challenge': '⚔️',
      'defeat': '🏳️',
      'laughing': '😂'
    };

    return icons[actionType] || '❓';
  };

  return (
    <span 
      className={cn("inline-block", className)} 
      style={{ fontSize: `${size}px`, lineHeight: 1 }}
    >
      {getIcon(action)}
    </span>
  );
};

export default MockeryActionIcon;
