
import { MockeryAction, MockeryTier } from '@/types/mockery';
import { ShameAction } from '@/types/mockery';

export const MOCKERY_DESCRIPTIONS: Record<string, string> = {
  tomatoes: 'Target has been pelted with rotten tomatoes, showing their lowly status in the royal court.',
  eggs: 'Target has been egged, marking them as a court jester for the day.',
  putridEggs: 'Target has been pelted with putrid eggs, causing them great embarrassment.',
  stocks: 'Target has been placed in the public stocks for royal ridicule.',
  dunce: 'Target has been marked as the court dunce, showing their foolishness.',
  silence: 'Target has been silenced by royal decree.',
  courtJester: 'Target has been assigned the role of court jester for royal entertainment.',
  jester: 'Target has been turned into a royal jester for entertainment.',
  smokeBomb: 'Target has been engulfed in smoke, causing confusion and disarray.',
  protection: 'Target is under royal protection and immune to mockery.',
  immune: 'Target has royal immunity and cannot be mocked.',
  jest: 'Target has been jested, causing mild embarrassment.',
  crown: 'Target has been crowned with the Mockery Crown.',
  target: 'Target has been marked for public ridicule.',
  challenge: 'Target has been challenged to a royal duel.',
  defeat: 'Target has been defeated in royal combat.',
  shame: 'Target has been publicly shamed.',
  taunt: 'Target has been taunted by royal decree.',
  royalPie: 'Target has been hit with a royal pie, causing great embarrassment.',
  jokeCrown: 'Target has been forced to wear the Joke Crown.',
  memeFrame: 'Target has been framed in a royal meme.',
  roast: 'Target has been thoroughly roasted by royal decree.',
  ridicule: 'Target has been ridiculed publicly.',
  humiliate: 'Target has been humiliated in front of the court.',
  expose: 'Target\'s secrets have been exposed to the public.',
  mock: 'Target has been mocked publicly.',
  guillotine: 'Target has been sentenced to the royal guillotine (metaphorically).',
  dungeons: 'Target has been thrown into the royal dungeons.',
  removal: 'Target has been removed from royal favor.',
  glitterBomb: 'Target has been hit with a royal glitter bomb.'
};

export const getMockeryDescription = (action: MockeryAction): string => {
  return MOCKERY_DESCRIPTIONS[action] || 'Target has been mocked by royal decree.';
};

export const getMockeryCost = (action: MockeryAction): number => {
  const costs: Record<MockeryAction, number> = {
    tomatoes: 5,
    eggs: 10,
    putridEggs: 15,
    stocks: 25,
    dunce: 30,
    silence: 40,
    courtJester: 50,
    smokeBomb: 60,
    protection: 75,
    immune: 100,
    glitterBomb: 20,
    target: 10,
    challenge: 30,
    jest: 5,
    crown: 50,
    defeat: 75,
    jester: 15,
    royalPie: 25,
    jokeCrown: 30,
    memeFrame: 20,
    roast: 15,
    ridicule: 10,
    humiliate: 35,
    expose: 40,
    mock: 5,
    shame: 15,
    taunt: 5,
    guillotine: 100,
    dungeons: 75,
    removal: 50
  };
  
  return costs[action] || 10;
};

export const getMockeryName = (action: MockeryAction): string => {
  const names: Record<MockeryAction, string> = {
    tomatoes: 'Rotten Tomatoes',
    eggs: 'Rancid Eggs',
    putridEggs: 'Putrid Eggs',
    stocks: 'Royal Stocks',
    dunce: 'Dunce Cap',
    silence: 'Royal Silence',
    courtJester: 'Court Jester',
    smokeBomb: 'Smoke Bomb',
    protection: 'Royal Protection',
    immune: 'Royal Immunity',
    glitterBomb: 'Glitter Bomb',
    target: 'Royal Target',
    challenge: 'Royal Challenge',
    jest: 'Royal Jest',
    crown: 'Mockery Crown',
    defeat: 'Royal Defeat',
    jester: 'Royal Jester',
    royalPie: 'Royal Pie',
    jokeCrown: 'Joke Crown',
    memeFrame: 'Meme Frame',
    roast: 'Royal Roast',
    ridicule: 'Royal Ridicule',
    humiliate: 'Royal Humiliation',
    expose: 'Royal Exposure',
    mock: 'Royal Mockery',
    shame: 'Royal Shame',
    taunt: 'Royal Taunt',
    guillotine: 'Royal Guillotine',
    dungeons: 'Royal Dungeons',
    removal: 'Royal Removal'
  };
  
  return names[action] || 'Royal Mockery';
};

export const getMockeryActionIconColor = (action: MockeryAction): string => {
  if (action === 'tomatoes' || action === 'taunt') return 'text-red-500';
  if (action === 'eggs' || action === 'putridEggs') return 'text-yellow-500';
  if (action === 'stocks' || action === 'dunce') return 'text-amber-700';
  if (action === 'silence' || action === 'jester') return 'text-purple-500';
  if (action === 'protection' || action === 'immune') return 'text-blue-500';
  if (action === 'courtJester' || action === 'mock') return 'text-green-500';
  if (action === 'roast' || action === 'shame') return 'text-orange-500';
  
  return 'text-royal-gold';
};

export const getMockeryCooldown = (action: MockeryAction): number => {
  if (action === 'tomatoes' || action === 'taunt' || action === 'mock') return 1; // 1 hour
  if (action === 'eggs' || action === 'jest' || action === 'jester' || action === 'common') return 3; // 3 hours
  
  if (action === 'jester' || action === 'mock' || action === 'roast' || action === 'shame' || action === 'uncommon') return 6; // 6 hours
  
  if (action === 'royalPie' || action === 'memeFrame' || action === 'defeat' || action === 'ridicule' || action === 'expose' || action === 'removal' || action === 'rare') return 12; // 12 hours
  
  if (action === 'jokeCrown' || action === 'humiliate' || action === 'dungeons' || action === 'epic') return 24; // 24 hours
  
  if (action === 'guillotine' || action === 'legendary') return 48; // 48 hours
  
  return 6; // Default 6 hours
};

export const getMockeryTierColor = (tier: MockeryTier): string => {
  if (tier === 'common') return 'text-gray-400';
  if (tier === 'uncommon') return 'text-green-400';
  if (tier === 'rare') return 'text-blue-400';
  if (tier === 'epic') return 'text-purple-400';
  if (tier === 'legendary') return 'text-orange-400';
  if (tier === 'royal') return 'text-royal-gold';
  if (tier === 'premium') return 'text-pink-400';
  if (tier === 'basic') return 'text-white';
  
  return 'text-white';
};
