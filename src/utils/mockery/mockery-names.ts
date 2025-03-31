
import { MockeryAction } from '@/types/mockery';

export const getMockeryActionTitle = (action: MockeryAction): string => {
  const names: Record<string, string> = {
    tomatoes: 'Rotten Tomatoes',
    eggs: 'Rotten Eggs',
    shame: 'Bell of Shame',
    dungeons: 'Royal Dungeons',
    immune: 'Royal Immunity',
    crown: 'Mock Crown',
    stocks: 'Public Stocks',
    dunce: 'Dunce Cap',
    jester: 'Court Jester',
    troll: 'Bridge Troll',
    peasant: 'Lowly Peasant',
    rat: 'Plague Rat',
    ghost: 'Ghostify',
    skeleton: 'Skeletonize',
    zombie: 'Zombify',
    witch: 'Witch Hunt',
    monster: 'Monsterize',
    demon: 'Demonize',
    dragon: 'Dragonify',
    king: 'False King',
    queen: 'False Queen',
    knight: 'Rusty Knight',
    bishop: 'Corrupt Bishop',
    rook: 'Crumbling Rook',
    pawn: 'Mere Pawn',
    target: 'Royal Target',
    challenge: 'Royal Challenge'
  };
  
  return names[action] || 'Unknown Mockery';
};

// Alias for backward compatibility
export const getMockeryName = getMockeryActionTitle;

export default getMockeryActionTitle;
