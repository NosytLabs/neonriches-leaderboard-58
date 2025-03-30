
import { MockeryAction, MockeryTier } from '@/types/mockery';
import { 
  Crown, 
  Egg, 
  Target, 
  VolumeX, 
  Milestone,
  Sparkles, 
  Lock,
  Cloud,
  Flame
} from 'lucide-react';

// Mockery durations (in hours)
export const MOCKERY_DURATIONS: Record<MockeryAction, number> = {
  tomatoes: 24,
  eggs: 24,
  putridEggs: 24,
  stocks: 48,
  silence: 12,
  courtJester: 72,
  dunce: 24,
  smokeBomb: 8,
  glitterBomb: 36,
  royalPie: 24,
  jokeCrown: 48,
  memeFrame: 36,
  jester: 48,
  roast: 24,
  ridicule: 24,
  humiliate: 36,
  expose: 36,
  mock: 24,
  shame: 24,
  taunt: 12,
  immune: 168,
  protection: 168,
  guillotine: 72,
  dungeons: 72,
  removal: 48
};

// Mockery cooldowns (in hours)
export const MOCKERY_COOLDOWNS: Record<MockeryTier, number> = {
  common: 6,
  uncommon: 12,
  rare: 24,
  epic: 48,
  legendary: 72,
  basic: 24,
  premium: 12,
  royal: 6,
  elite: 6
};

// Mockery names
export const MOCKERY_NAMES: Record<MockeryAction, string> = {
  tomatoes: 'Rotten Tomatoes',
  eggs: 'Regular Eggs',
  putridEggs: 'Putrid Eggs',
  stocks: 'Royal Stocks',
  silence: 'Royal Silence',
  courtJester: 'Court Jester',
  dunce: 'Dunce Cap',
  smokeBomb: 'Royal Smoke Bomb',
  glitterBomb: 'Glitter Bomb',
  royalPie: 'Royal Pie',
  jokeCrown: 'Joke Crown',
  memeFrame: 'Meme Frame',
  jester: 'Jester Mark',
  roast: 'Royal Roast',
  ridicule: 'Public Ridicule',
  humiliate: 'Humiliation',
  expose: 'Exposure',
  mock: 'Mockery',
  shame: 'Public Shaming',
  taunt: 'Royal Taunt',
  immune: 'Royal Immunity',
  protection: 'Royal Protection',
  guillotine: 'Royal Guillotine',
  dungeons: 'Royal Dungeons',
  removal: 'Profile Removal'
};

// Mockery descriptions
export const MOCKERY_DESCRIPTIONS: Record<MockeryAction, string> = {
  tomatoes: 'Splatter the user\'s profile with rotten tomatoes for all to see.',
  eggs: 'Throw eggs at the user\'s profile, creating a messy display.',
  putridEggs: 'Throw putrid eggs at the user\'s profile for a particularly foul effect.',
  stocks: 'Lock the user in the royal stocks for public ridicule.',
  silence: 'Prevent the user from commenting for a period of time.',
  courtJester: 'Force the user to wear the court jester outfit on their profile.',
  dunce: 'Put a dunce cap on the user\'s profile picture.',
  smokeBomb: 'Completely obscure the user\'s profile with thick, dramatic smoke.',
  glitterBomb: 'Cover the user\'s profile in sparkly, hard-to-clean glitter.',
  royalPie: 'Hit the user with a cream pie to the face on their profile.',
  jokeCrown: 'Place a ridiculous joke crown on the user\'s profile.',
  memeFrame: 'Frame the user\'s profile with an embarrassing meme border.',
  jester: 'Mark the user with the symbol of the royal jester.',
  roast: 'Apply a royal roasting to the user\'s profile.',
  ridicule: 'Subject the user to public ridicule on their profile.',
  humiliate: 'Publicly humiliate the user on their profile.',
  expose: 'Expose the user\'s follies for all to see.',
  mock: 'Mock the user in a general way.',
  shame: 'Shame the user publicly.',
  taunt: 'Apply a royal taunt to the user\'s profile.',
  immune: 'Grant the user immunity from mockery.',
  protection: 'Protect the user from mockery for a period of time.',
  guillotine: 'Subject the user to the royal guillotine (visually on profile).',
  dungeons: 'Send the user to the royal dungeons (visually on profile).',
  removal: 'Temporarily remove certain profile elements.'
};

// Get mockery action icon
export const getMockeryActionIcon = (action: MockeryAction) => {
  switch (action) {
    case 'tomatoes': return Flame;
    case 'eggs': 
    case 'putridEggs': return Egg;
    case 'stocks': return Lock;
    case 'silence': return VolumeX;
    case 'courtJester': 
    case 'jester': return Crown;
    case 'dunce': return Milestone;
    case 'smokeBomb': return Cloud;
    case 'glitterBomb': return Sparkles;
    case 'immune':
    case 'protection': return Crown;
    case 'ridicule': 
    case 'humiliate': 
    case 'expose': 
    case 'mock': 
    case 'shame': 
    default: return Target;
  }
};

// Get mockery action title
export const getMockeryActionTitle = (action: MockeryAction): string => {
  return MOCKERY_NAMES[action] || 'Unknown Mockery';
};

// Get mockery action description
export const getMockeryActionDescription = (action: MockeryAction): string => {
  return MOCKERY_DESCRIPTIONS[action] || 'No description available';
};

// Get mockery tier for an action
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  switch (action) {
    case 'tomatoes':
    case 'dunce':
    case 'mock':
      return 'common';
    case 'putridEggs':
    case 'royalPie':
    case 'ridicule':
      return 'uncommon';
    case 'stocks':
    case 'jokeCrown':
    case 'humiliate':
      return 'rare';
    case 'silence':
    case 'glitterBomb':
    case 'memeFrame':
    case 'expose':
      return 'epic';
    case 'courtJester':
    case 'smokeBomb':
    case 'shame':
      return 'legendary';
    default:
      return 'common';
  }
};

// Get mockery action price
export const getMockeryActionPrice = (action: MockeryAction): number => {
  const tier = getMockeryTier(action);
  switch (tier) {
    case 'common': return 5;
    case 'uncommon': return 10;
    case 'rare': return 25;
    case 'epic': return 50;
    case 'legendary': return 100;
    default: return 5;
  }
};

// Get mockery description
export const getMockeryDescription = (action: MockeryAction): string => {
  return MOCKERY_DESCRIPTIONS[action] || 'No description available';
};

// Get active mockery class
export const getActiveMockeryClass = (action: MockeryAction | undefined): string => {
  if (!action) return '';
  
  switch (action) {
    case 'tomatoes': return 'mockery-tomatoes';
    case 'eggs': 
    case 'putridEggs': return 'mockery-eggs';
    case 'stocks': return 'mockery-stocks';
    case 'silence': return 'mockery-silence';
    case 'courtJester': return 'mockery-jester';
    case 'smokeBomb': return 'mockery-smoke';
    case 'glitterBomb': return 'mockery-glitter';
    default: return '';
  }
};
