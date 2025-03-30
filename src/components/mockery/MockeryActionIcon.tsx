
import React from 'react';
import { cn } from '@/lib/utils';
import { MockeryAction } from '@/types/mockery';
import { getMockeryTier } from '@/utils/mockeryUtils';

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
      case 'putridEggs': return '🥚';
      case 'stocks': return '🪵';
      case 'silence': return '🔇';
      case 'courtJester': return '🃏';
      case 'protection': return '🛡️';
      case 'immune': return '👑';
      case 'jester': return '🎭';
      case 'dunce': return '📝';
      case 'smokeBomb': return '💨';
      case 'glitterBomb': return '✨';
      case 'royalPie': return '🥧';
      case 'jokeCrown': return '👑';
      case 'memeFrame': return '🖼️';
      case 'roast': return '🔥';
      case 'ridicule': return '😂';
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
