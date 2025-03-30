
import { MockeryAction } from '@/types/mockery';
import { 
  Target, 
  Crown, 
  Egg, 
  Shield, 
  Crown as CrownIcon, 
  Laugh, 
  Trash, 
  Volume2, 
  VolumeX, 
  Flame, 
  Bomb 
} from 'lucide-react';

/**
 * Get the appropriate icon for a mockery action
 */
export const getMockeryIcon = (action: MockeryAction) => {
  switch (action) {
    case 'tomatoes':
      return '🍅';
    case 'eggs':
    case 'putridEggs':
      return '🥚';
    case 'stocks':
      return '🪵';
    case 'dunce':
      return '🧢';
    case 'jester':
      return '🃏';
    case 'crown':
      return '👑';
    case 'taunt':
      return '😝';
    case 'shame':
      return '😳';
    case 'silence':
      return '🤐';
    case 'courtJester':
      return '🃏';
    case 'smokeBomb':
      return '💣';
    case 'protection':
      return '🛡️';
    case 'jest':
      return '😂';
    case 'glitterBomb':
      return '✨';
    case 'royalPie':
      return '🥧';
    case 'jokeCrown':
      return '👑';
    case 'memeFrame':
      return '🖼️';
    case 'roast':
      return '🔥';
    case 'ridicule':
      return '🤪';
    case 'humiliate':
      return '😱';
    case 'expose':
      return '👀';
    case 'mock':
      return '🤡';
    case 'guillotine':
      return '🪓';
    case 'dungeons':
      return '🏰';
    case 'removal':
      return '❌';
    case 'challenge':
      return '⚔️';
    case 'target':
      return '🎯';
    case 'defeat':
      return '💀';
    case 'immune':
      return '🛡️';
    default:
      return '❓';
  }
};

/**
 * Get the appropriate Lucide icon component for a mockery action
 */
export const getMockeryActionIcon = (action: MockeryAction) => {
  switch (action) {
    case 'tomatoes':
    case 'eggs':
    case 'putridEggs':
      return Egg;
    case 'crown':
    case 'jokeCrown':
      return Crown;
    case 'stocks':
    case 'dunce':
      return Trash;
    case 'jester':
    case 'jest':
    case 'courtJester':
      return Laugh;
    case 'taunt':
    case 'ridicule':
    case 'mock':
    case 'humiliate':
      return Laugh;
    case 'shame':
    case 'expose':
      return Target;
    case 'silence':
      return VolumeX;
    case 'smokeBomb':
    case 'glitterBomb':
      return Bomb;
    case 'protection':
    case 'immune':
      return Shield;
    case 'roast':
      return Flame;
    case 'target':
    case 'challenge':
      return Target;
    case 'guillotine':
    case 'dungeons':
    case 'removal':
    case 'defeat':
      return Trash;
    default:
      return Target;
  }
};

/**
 * Get the appropriate color for a mockery action icon
 */
export const getMockeryActionIconColor = (action: MockeryAction) => {
  switch (action) {
    case 'tomatoes':
      return 'text-red-500';
    case 'eggs':
    case 'putridEggs':
      return 'text-yellow-300';
    case 'stocks':
      return 'text-amber-700';
    case 'dunce':
      return 'text-gray-400';
    case 'jester':
    case 'courtJester':
    case 'jest':
      return 'text-purple-500';
    case 'crown':
    case 'jokeCrown':
      return 'text-yellow-500';
    case 'taunt':
      return 'text-indigo-400';
    case 'shame':
      return 'text-pink-400';
    case 'silence':
      return 'text-gray-500';
    case 'smokeBomb':
      return 'text-gray-700';
    case 'protection':
    case 'immune':
      return 'text-blue-400';
    case 'glitterBomb':
      return 'text-purple-300';
    case 'royalPie':
      return 'text-yellow-600';
    case 'memeFrame':
      return 'text-green-400';
    case 'roast':
      return 'text-orange-500';
    case 'ridicule':
      return 'text-red-400';
    case 'humiliate':
      return 'text-pink-500';
    case 'expose':
      return 'text-amber-400';
    case 'mock':
      return 'text-green-500';
    case 'guillotine':
      return 'text-red-600';
    case 'dungeons':
      return 'text-gray-800';
    case 'removal':
      return 'text-red-800';
    case 'challenge':
      return 'text-yellow-400';
    case 'target':
      return 'text-red-400';
    case 'defeat':
      return 'text-gray-900';
    default:
      return 'text-gray-400';
  }
};

export default getMockeryIcon;
