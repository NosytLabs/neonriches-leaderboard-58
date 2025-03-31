
import { MockeryActionType } from '@/types/mockery';

/**
 * Get the emoji icon for a mockery action
 */
export const getMockeryActionIcon = (action: MockeryActionType): string => {
  const icons: Record<string, string> = {
    tomatoes: '🍅',
    eggs: '🥚',
    shame: '🔔',
    dungeons: '⛓️',
    immune: '🛡️',
    crown: '👑',
    stocks: '🪵',
    dunce: '🎭',
    jester: '🃏',
    troll: '👹',
    peasant: '👨‍🌾',
    rat: '🐀',
    ghost: '👻',
    skeleton: '💀',
    zombie: '🧟',
    witch: '🧙',
    monster: '👾',
    demon: '😈',
    dragon: '🐉',
    king: '🤴',
    queen: '👸',
    knight: '🐴',
    bishop: '♗',
    rook: '♖',
    pawn: '♟️',
    target: '🎯',
    challenge: '⚔️'
  };
  
  return icons[action] || '🎭';
};

export const getMockeryActionIconColor = (action: MockeryActionType): string => {
  const colors: Record<string, string> = {
    tomatoes: 'text-red-500',
    eggs: 'text-yellow-200',
    shame: 'text-yellow-500',
    dungeons: 'text-gray-700',
    immune: 'text-blue-300',
    crown: 'text-royal-gold',
    stocks: 'text-amber-800',
    dunce: 'text-gray-400',
    jester: 'text-purple-400',
    troll: 'text-green-700',
    peasant: 'text-amber-600',
    rat: 'text-gray-500',
    ghost: 'text-white',
    skeleton: 'text-gray-200',
    zombie: 'text-green-500',
    witch: 'text-purple-700',
    monster: 'text-blue-700',
    demon: 'text-red-700',
    dragon: 'text-emerald-500',
    king: 'text-royal-gold',
    queen: 'text-pink-300',
    knight: 'text-gray-500',
    bishop: 'text-purple-200',
    rook: 'text-gray-400',
    pawn: 'text-gray-300',
    target: 'text-red-400',
    challenge: 'text-royal-crimson'
  };
  
  return colors[action] || 'text-gray-400';
};

export default getMockeryActionIcon;
