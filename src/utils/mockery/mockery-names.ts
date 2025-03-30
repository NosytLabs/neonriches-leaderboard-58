
import { MockeryAction } from '@/types/mockery';

export const getMockeryName = (action: MockeryAction): string => {
  const names: Record<MockeryAction, string> = {
    tomatoes: 'Tomato Barrage',
    eggs: 'Rotten Eggs',
    shame: 'Public Shaming',
    dungeons: 'Dungeon Exile',
    immune: 'Royal Immunity',
    crown: 'Crown of Mockery',
    stocks: 'Village Stocks',
    dunce: 'Dunce Cap',
    jester: 'Court Jester',
    fool: 'Royal Fool',
    troll: 'Troll Label',
    peasant: 'Peasant Demotion',
    rat: 'Plague Rat',
    ghost: 'Haunted Label',
    skeleton: 'Skeleton Curse',
    zombie: 'Zombie Mark',
    witch: 'Witch Trial',
    monster: 'Monster Label',
    demon: 'Demon Mark',
    dragon: 'Dragon\'s Target',
    king: 'False King',
    queen: 'False Queen',
    knight: 'Tarnished Knight',
    bishop: 'Fallen Bishop',
    rook: 'Damaged Rook',
    pawn: 'Mere Pawn',
    target: 'Royal Target',
    challenge: 'Gauntlet Challenge'
  };
  
  return names[action] || 'Unknown Mockery';
};
