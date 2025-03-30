
import React from 'react';
import { MockeryAction } from '@/types/mockery';
import { getMockeryActionIcon } from '@/components/mockery/utils/mockeryUtils';
import { cn } from '@/lib/utils';

interface MockeryIconProps {
  action: MockeryAction;
  size?: number;
  className?: string;
}

const MockeryIcon: React.FC<MockeryIconProps> = ({
  action,
  size = 16,
  className
}) => {
  const Icon = getMockeryActionIcon(action);
  
  // Get color based on action
  const getColor = () => {
    switch (action) {
      case 'courtJester':
        return 'text-royal-gold';
      case 'silence':
        return 'text-purple-400';
      case 'stocks':
        return 'text-blue-400';
      case 'eggs':
      case 'putridEggs':
        return 'text-green-400';
      case 'protection':
      case 'immune':
        return 'text-cyan-400';
      case 'smokeBomb':
        return 'text-gray-400';
      case 'glitterBomb':
        return 'text-pink-400';
      default:
        return 'text-gray-300';
    }
  };
  
  return (
    <Icon className={cn(getColor(), className)} size={size} />
  );
};

export default MockeryIcon;
