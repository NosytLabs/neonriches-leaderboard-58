
import { MockeryAction } from '@/types/mockery-types';

// Get the display title for a mockery action
export const getMockeryActionTitle = (action: MockeryAction): string => {
  const titles: Record<string, string> = {
    tomatoes: 'Rotten Tomatoes',
    eggs: 'Rotten Eggs',
    putridEggs: 'Putrid Eggs',
    dungeons: 'Royal Dungeons',
    immune: 'Royal Immunity',
    crown: 'Stolen Crown',
    stocks: 'Public Stocks',
    dunce: 'Dunce Cap',
    jester: 'Court Jester',
    courtJester: 'Royal Court Jester',
    jest: 'Royal Jest',
    troll: 'Village Troll',
    peasant: 'Lowly Peasant',
    rat: 'Castle Rat',
    ghost: 'Royal Ghost',
    skeleton: 'Skeleton Crew',
    zombie: 'Royal Zombie',
    witch: 'Royal Witch',
    monster: 'Castle Monster',
    demon: 'Royal Demon',
    dragon: 'Royal Dragon',
    king: 'False King',
    queen: 'False Queen',
    knight: 'Fallen Knight',
    bishop: 'Corrupt Bishop',
    rook: 'Fallen Rook',
    pawn: 'Mere Pawn',
    target: 'Royal Target',
    challenge: 'Royal Challenge',
    smokeBomb: 'Smoke Bomb',
    glitterBomb: 'Glitter Bomb',
    royalPie: 'Royal Pie Face',
    jokeCrown: 'Joker Crown',
    memeFrame: 'Meme Frame',
    roast: 'Royal Roast',
    ridicule: 'Public Ridicule',
    humiliate: 'Public Humiliation',
    expose: 'Royal Exposure',
    mock: 'Public Mockery',
    taunt: 'Royal Taunt',
    guillotine: 'Guillotine',
    defeat: 'Royal Defeat',
    removal: 'Banishment',
    protection: 'Royal Protection',
    silence: 'Royal Silence',
    shame: 'Public Shame'
  };

  return titles[action] || 'Unknown Mockery';
};

// For backward compatibility
export const getMockeryName = getMockeryActionTitle;
