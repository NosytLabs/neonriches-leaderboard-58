
import { MockeryAction } from '@/types/mockery';

export const getMockeryActionIcon = (action: MockeryAction): string => {
  const icons: Record<MockeryAction, string> = {
    tomatoes: 'fruit',
    eggs: 'egg',
    shame: 'bell',
    dungeons: 'lock',
    immune: 'shield',
    crown: 'crown',
    stocks: 'fence',
    dunce: 'hat',
    jester: 'wand',
    fool: 'hat',
    troll: 'monster',
    peasant: 'tool',
    rat: 'rat',
    ghost: 'ghost',
    skeleton: 'skull',
    zombie: 'heart',
    witch: 'wand',
    monster: 'monster',
    demon: 'flame',
    dragon: 'dragon',
    king: 'king',
    queen: 'queen',
    knight: 'sword',
    bishop: 'cross',
    rook: 'castle',
    pawn: 'chess-pawn',
    target: 'target',
    challenge: 'swords'
  };
  
  return icons[action] || 'question';
};
