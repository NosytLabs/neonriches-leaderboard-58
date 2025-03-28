
import React from 'react';
import { cn } from '@/lib/utils';
import { ExtendedMockeryAction } from '@/types/mockery';

interface MockeryActionIconProps {
  action: ExtendedMockeryAction;
  size?: number;
  className?: string;
}

const MockeryActionIcon: React.FC<MockeryActionIconProps> = ({
  action,
  size = 16,
  className
}) => {
  const getIcon = (actionType: string): string => {
    switch (actionType) {
      case 'tomatoes': return '🍅';
      case 'eggs': return '🥚';
      case 'stocks': return '🪵';
      case 'silence': return '🔇';
      case 'courtJester': return '🃏';
      case 'protected': return '🛡️';
      case 'immune': return '👑';
      case 'jester': return '🎭';
      case 'dunce': return '📝';
      case 'roast': return '🔥';
      case 'ridicule': return '😂';
      case 'taunt': return '👋';
      case 'drama': return '🎭';
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
