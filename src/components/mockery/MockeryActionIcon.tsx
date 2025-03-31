
import React from 'react';
import { cn } from '@/lib/utils';
import { MockeryAction } from '@/types/mockery';

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
    switch (actionType) {
      case 'tomatoes': return '🍅';
      case 'eggs': return '🥚';
      case 'crown': return '👑';
      case 'jester': return '🎭';
      case 'stocks': return '🪵';
      case 'protection': return '🛡️';
      case 'shame': return '😳';
      case 'target': return '🎯';
      case 'putridEggs': return '🥚';
      case 'silence': return '🔇';
      case 'courtJester': return '🃏';
      case 'smokeBomb': return '💨';
      case 'immune': return '🔰';
      case 'dunce': return '📝';
      case 'glitterBomb': return '✨';
      case 'royalPie': return '🥧';
      case 'jokeCrown': return '👑';
      case 'memeFrame': return '🖼️';
      case 'roast': return '🔥';
      case 'ridicule': return '😂';
      case 'humiliate': return '😱';
      case 'expose': return '👁️';
      case 'mock': return '🤡';
      case 'taunt': return '👈';
      case 'guillotine': return '🪓';
      case 'dungeons': return '🏰';
      case 'removal': return '🗑️';
      case 'troll': return '👹';
      case 'peasant': return '👨‍🌾';
      case 'rat': return '🐀';
      case 'ghost': return '👻';
      case 'skeleton': return '💀';
      case 'zombie': return '🧟';
      case 'witch': return '🧙';
      case 'monster': return '👾';
      case 'dragon': return '🐉';
      case 'jest': return '🤣';
      case 'challenge': return '⚔️';
      case 'defeat': return '🏳️';
      default: return '❓';
    }
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
