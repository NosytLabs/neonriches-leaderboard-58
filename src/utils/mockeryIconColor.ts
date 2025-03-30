
import { MockeryAction } from '@/types/mockery';

export const getMockeryActionIconColor = (action: MockeryAction): string => {
  switch (action) {
    case 'courtJester':
    case 'crown':
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
    case 'tomatoes':
    case 'challenge':
    case 'defeat':
      return 'text-red-400';
    case 'target':
    case 'dunce':
      return 'text-orange-400';
    case 'jest':
      return 'text-indigo-400';
    default:
      return 'text-gray-300';
  }
};

export default getMockeryActionIconColor;
