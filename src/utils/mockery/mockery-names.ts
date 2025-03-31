
import { MockeryAction, ExtendedMockeryAction } from '@/types/mockery-types';

// Get the display name for a mockery action
export const getMockeryActionTitle = (action: MockeryAction | ExtendedMockeryAction): string => {
  const names: Record<string, string> = {
    tomatoes: 'Rotten Tomatoes',
    eggs: 'Rotten Eggs',
    putridEggs: 'Putrid Eggs',
    dungeons: 'Royal Dungeons',
    immune: 'Royal Immunity',
    crown: 'Mock Crown',
    stocks: 'Public Stocks',
    dunce: 'Dunce Cap',
    jester: 'Court Jester',
    courtJester: 'Court Jester',
    jest: 'Royal Jest',
    troll: 'Bridge Troll',
    peasant: 'Lowly Peasant',
    rat: 'Plague Rat',
    ghost: 'Palace Ghost',
    skeleton: 'Royal Skeleton',
    zombie: 'Undead Zombie',
    witch: 'Accused Witch',
    monster: 'Royal Monster',
    demon: 'Court Demon',
    dragon: 'Village Dragon',
    king: 'False King',
    queen: 'False Queen',
    knight: 'Rusty Knight',
    bishop: 'Corrupt Bishop',
    rook: 'Crumbling Rook',
    pawn: 'Mere Pawn',
    target: 'Target Practice',
    challenge: 'Royal Challenge',
    smokeBomb: 'Smoke Bomb',
    glitterBomb: 'Glitter Bomb',
    royalPie: 'Royal Pie',
    jokeCrown: 'Joke Crown',
    memeFrame: 'Meme Frame',
    roast: 'Royal Roast',
    ridicule: 'Public Ridicule',
    humiliate: 'Royal Humiliation',
    expose: 'Public Expose',
    mock: 'Royal Mockery',
    taunt: 'Royal Taunt',
    guillotine: 'Mockery Guillotine',
    defeat: 'Royal Defeat',
    removal: 'Content Removal',
    protection: 'Royal Protection'
  };

  return names[action] || 'Unknown Mockery';
};

// Re-export with alternative name for backward compatibility
export const getMockeryName = getMockeryActionTitle;
