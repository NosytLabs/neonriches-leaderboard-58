
import { MockeryAction, MockeryTier, ShameAction } from '@/types/mockery';
import { CosmeticRarity } from '@/types/cosmetics';

export const MOCKERY_NAMES: Record<MockeryAction, string> = {
  'tomatoes': 'Rotten Tomatoes',
  'eggs': 'Rotten Eggs',
  'putridEggs': 'Putrid Eggs',
  'stocks': 'Public Stocks',
  'dunce': 'Dunce Cap',
  'silence': 'Royal Silence',
  'courtJester': 'Court Jester',
  'smokeBomb': 'Smoke Bomb',
  'protection': 'Royal Protection',
  'immune': 'Royal Immunity',
  'glitterBomb': 'Glitter Bomb',
  'royalPie': 'Royal Pie',
  'jokeCrown': 'Joke Crown',
  'memeFrame': 'Meme Frame',
  'jester': 'Jester Hat',
  'roast': 'Royal Roast',
  'ridicule': 'Public Ridicule',
  'humiliate': 'Humiliation',
  'expose': 'Exposure',
  'mock': 'Mockery',
  'shame': 'Shame',
  'taunt': 'Taunt',
  'guillotine': 'Guillotine',
  'dungeons': 'Dungeons',
  'removal': 'Removal',
};

export const MOCKERY_DESCRIPTIONS: Record<MockeryAction, string> = {
  'tomatoes': 'Splatter the target with rotten tomatoes, leaving them marked with shame for 24 hours.',
  'eggs': 'Pelt the target with eggs, causing them embarrassment for 12 hours.',
  'putridEggs': 'Bombard the target with putrid eggs that leave a lingering stench for 48 hours.',
  'stocks': 'Place the target in the public stocks for 72 hours of humiliation.',
  'dunce': 'Force the target to wear a dunce cap for 36 hours.',
  'silence': 'Silence the target for 24 hours, preventing them from speaking in public forums.',
  'courtJester': 'Make the target the court jester for 48 hours, forced to entertain others.',
  'smokeBomb': 'Drop a smoke bomb that obscures the target temporarily for 6 hours.',
  'protection': 'Protect yourself from mockery for 7 days.',
  'immune': 'Grant yourself royal immunity from mockery for 30 days.',
  'glitterBomb': 'Cover the target in glitter they can\'t wash off for 12 hours.',
  'royalPie': 'Splat a royal pie in the target\'s face for 24 hours of sticky embarrassment.',
  'jokeCrown': 'Crown the target as the kingdom\'s fool for 72 hours.',
  'memeFrame': 'Frame the target\'s profile in ridiculous memes for 48 hours.',
  'jester': 'Force the target to wear a jester hat and bells for 48 hours of ridicule.',
  'roast': 'Publicly roast the target with witty insults for 24 hours.',
  'ridicule': 'Subject the target to public ridicule for 48 hours.',
  'humiliate': 'Humiliate the target in front of the entire kingdom for 72 hours.',
  'expose': 'Expose the target\'s embarrassing moments for all to see for 48 hours.',
  'mock': 'Mock the target\'s appearance and mannerisms for 24 hours.',
  'shame': 'Bring shame upon the target for 36 hours.',
  'taunt': 'Taunt the target with jeers and insults for 12 hours.',
  'guillotine': 'Subject the target to a symbolic guillotine for 72 hours.',
  'dungeons': 'Send the target to the digital dungeons for 48 hours.',
  'removal': 'Remove the target from public view for 24 hours.',
};

export const MOCKERY_COSTS: Record<MockeryAction, number> = {
  'tomatoes': 5,
  'eggs': 10,
  'putridEggs': 25,
  'stocks': 50,
  'dunce': 35,
  'silence': 75,
  'courtJester': 100,
  'smokeBomb': 20,
  'protection': 150,
  'immune': 500,
  'glitterBomb': 35,
  'royalPie': 50,
  'jokeCrown': 75,
  'memeFrame': 100,
  'jester': 45,
  'roast': 30,
  'ridicule': 40,
  'humiliate': 60,
  'expose': 55,
  'mock': 25,
  'shame': 35,
  'taunt': 15,
  'guillotine': 85,
  'dungeons': 70,
  'removal': 40,
};

export const MOCKERY_COOLDOWNS: Record<MockeryAction, number> = {
  'tomatoes': 12 * 60 * 60 * 1000, // 12 hours
  'eggs': 6 * 60 * 60 * 1000, // 6 hours
  'putridEggs': 24 * 60 * 60 * 1000, // 24 hours
  'stocks': 36 * 60 * 60 * 1000, // 36 hours
  'dunce': 18 * 60 * 60 * 1000, // 18 hours
  'silence': 12 * 60 * 60 * 1000, // 12 hours
  'courtJester': 24 * 60 * 60 * 1000, // 24 hours
  'smokeBomb': 3 * 60 * 60 * 1000, // 3 hours
  'protection': 0, // No cooldown
  'immune': 0, // No cooldown
  'glitterBomb': 6 * 60 * 60 * 1000, // 6 hours
  'royalPie': 12 * 60 * 60 * 1000, // 12 hours
  'jokeCrown': 36 * 60 * 60 * 1000, // 36 hours
  'memeFrame': 24 * 60 * 60 * 1000, // 24 hours
  'jester': 24 * 60 * 60 * 1000, // 24 hours
  'roast': 12 * 60 * 60 * 1000, // 12 hours
  'ridicule': 18 * 60 * 60 * 1000, // 18 hours
  'humiliate': 30 * 60 * 60 * 1000, // 30 hours
  'expose': 24 * 60 * 60 * 1000, // 24 hours
  'mock': 12 * 60 * 60 * 1000, // 12 hours
  'shame': 18 * 60 * 60 * 1000, // 18 hours
  'taunt': 6 * 60 * 60 * 1000, // 6 hours
  'guillotine': 36 * 60 * 60 * 1000, // 36 hours
  'dungeons': 24 * 60 * 60 * 1000, // 24 hours
  'removal': 18 * 60 * 60 * 1000, // 18 hours
};

export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  switch (action) {
    case 'tomatoes':
    case 'eggs':
    case 'smokeBomb':
    case 'taunt':
      return 'common';
    case 'putridEggs':
    case 'dunce':
    case 'glitterBomb':
    case 'jester':
    case 'mock':
    case 'roast':
    case 'shame':
      return 'uncommon';
    case 'stocks':
    case 'silence':
    case 'royalPie':
    case 'memeFrame':
    case 'protection':
    case 'ridicule':
    case 'expose':
    case 'removal':
      return 'rare';
    case 'courtJester':
    case 'jokeCrown':
    case 'humiliate':
    case 'dungeons':
      return 'epic';
    case 'immune':
    case 'guillotine':
      return 'legendary';
    default:
      return 'common';
  }
};
