
import { MockeryAction, ShameAction, MockeryTier } from '@/types/mockery';

export const MOCKERY_NAMES: Record<string, string> = {
  tomatoes: 'Rotten Tomatoes',
  putridEggs: 'Putrid Eggs',
  stocks: 'Public Stocks',
  silence: 'Royal Silencing',
  courtJester: 'Court Jester',
  jester: 'Court Jester',
  dunce: 'Dunce Cap',
  protection: 'Royal Protection',
  smokeBomb: 'Smoke Bomb',
  royalPie: 'Royal Pie',
  glitterBomb: 'Glitter Bomb',
  jokeCrown: 'Joke Crown',
  memeFrame: 'Meme Frame'
};

export const MOCKERY_COSTS: Record<string, number> = {
  tomatoes: 1,
  putridEggs: 3,
  stocks: 5,
  silence: 8,
  jester: 10,
  courtJester: 15,
  dunce: 5,
  protection: 10,
  smokeBomb: 20,
  royalPie: 4,
  glitterBomb: 12,
  jokeCrown: 7,
  memeFrame: 9
};

export const MOCKERY_DESCRIPTIONS: Record<string, string> = {
  tomatoes: 'Pelt the user with virtual rotten tomatoes for 24 hours, adding splatters to their profile.',
  putridEggs: 'Throw virtual eggs at the user for 48 hours, covering their profile with egg splats.',
  stocks: 'Place the user in the public stocks for 72 hours, restricting their profile in a wooden restraint frame.',
  silence: 'Apply a silent treatment effect to the user\'s profile for 48 hours, adding a muzzle graphic to their avatar.',
  courtJester: 'Elevate the user to Court Jester for a full 7 days, adding a jester\'s hat and bells to their profile.',
  jester: 'Force the user to wear the jester\'s hat for 96 hours, adding a colorful fool\'s cap to their profile.',
  dunce: 'Place a dunce cap on the user for 48 hours, displaying their folly to all visitors.',
  protection: 'Protect yourself from all mockery attempts for 7 days with royal immunity.',
  smokeBomb: 'Deploy a smoke bomb on the user\'s profile for 8 hours, obscuring their content with thick smoke effects.',
  royalPie: 'Launch a royal cream pie at the user\'s profile for 36 hours, adding splattered cream to their avatar.',
  glitterBomb: 'Explode a glitter bomb on the user\'s profile for 48 hours, covering everything in sparkly residue.',
  jokeCrown: 'Add a ridiculous oversized crown to the user\'s profile for 72 hours, mocking their royal aspirations.',
  memeFrame: 'Frame the user\'s profile in animated memes for 60 hours, surrounding their content with internet humor.'
};

export const mockeryActions: MockeryAction[] = [
  'tomatoes',
  'putridEggs',
  'stocks',
  'silence', 
  'jester',
  'courtJester',
  'dunce',
  'smokeBomb',
  'royalPie',
  'glitterBomb',
  'jokeCrown',
  'memeFrame'
];

export const getMockeryDescription = (action: MockeryAction, username: string): string => {
  const descriptions: Record<string, string> = {
    tomatoes: `Pelt ${username} with virtual rotten tomatoes for 24 hours.`,
    putridEggs: `Throw virtual eggs at ${username} for 48 hours.`,
    stocks: `Place ${username} in the public stocks for 72 hours.`,
    silence: `Silence ${username} from all public communication for 48 hours.`,
    jester: `Force ${username} to wear the jester's hat for 96 hours.`,
    courtJester: `Elevate ${username} to the position of Court Jester for a full 7 days.`,
    dunce: `Place a dunce cap on ${username} for 48 hours.`,
    protection: `Protect ${username} from all mockery attempts for 7 days.`,
    smokeBomb: `Deploy a smoke bomb on ${username}'s profile for 8 hours.`,
    royalPie: `Launch a royal cream pie at ${username}'s profile for 36 hours.`,
    glitterBomb: `Explode a glitter bomb on ${username}'s profile for 48 hours.`,
    jokeCrown: `Add a ridiculous crown to ${username}'s profile for 72 hours.`,
    memeFrame: `Frame ${username}'s profile in animated memes for 60 hours.`
  };
  
  return descriptions[action] || `Mock ${username} publicly.`;
};

export const getMockeryDuration = (action: MockeryAction): number => {
  const durations: Record<string, number> = {
    tomatoes: 24,
    putridEggs: 48,
    stocks: 72,
    silence: 48,
    jester: 96,
    courtJester: 168, // 7 days
    dunce: 48,
    protection: 168, // 7 days
    smokeBomb: 8,
    royalPie: 36,
    glitterBomb: 48,
    jokeCrown: 72,
    memeFrame: 60
  };
  
  return durations[action] || 24;
};

// Helper function to get mockery action price for ShameAction type (for compatibility)
export const getShameActionPrice = (action: ShameAction): number => {
  return MOCKERY_COSTS[action] || 1;
};
