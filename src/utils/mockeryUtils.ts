
import { MockeryAction, MockeryTier } from '@/types/mockery';

// Mockery descriptions
export const MOCKERY_DESCRIPTIONS: Record<MockeryAction | string, string> = {
  tomatoes: "Rotten tomatoes splatter across the user's profile, a classic form of medieval public mockery.",
  eggs: "Eggs have been thrown at this user's profile. A time-honored tradition of public disapproval.",
  putridEggs: "The foulest of eggs have been hurled, filling the profile with a virtual stench of public disapproval.",
  stocks: "This user has been placed in virtual stocks, forced to endure the digital equivalent of public humiliation.",
  silence: "A vow of silence has been imposed upon this user. Their words carry less weight in the royal court.",
  courtJester: "Adorned with bells and motley, this user serves as entertainment for the nobility with their folly.",
  dunce: "A pointed hat marks this user's shame. They must stand in the corner until they learn their lesson.",
  smokeBomb: "A thick cloud of mysterious smoke engulfs this profile, obscuring their presence in the digital realm.",
  jester: "Forced to entertain the court with their folly, this user dances for the amusement of others.",
  ridicule: "Public ridicule has befallen this user, their reputation tarnished by whispers and mockery.",
  humiliate: "A formal humiliation has been decreed, stripping away dignity in the court of public opinion.",
  expose: "Their secrets laid bare, this user stands exposed before the merciless crowd.",
  mock: "General mockery surrounds this user, their status diminished by public jeering.",
  shame: "The bell of shame rings for this user, announcing their disgrace to all who would hear.",
  taunt: "Cruel words and gestures follow this user wherever they go in the digital kingdom.",
  glitterBomb: "A shower of gaudy glitter coats everything, turning serious business into a sparkly farce.",
  royalPie: "The finest pie in the land, delivered directly to the face with ceremonial precision.",
  jokeCrown: "A crown of folly sits upon their head, declaring them the sovereign of poor decisions.",
  memeFrame: "Their words and deeds are forever framed in the context of public humor and derision.",
  roast: "A formal ceremony where this user's flaws are highlighted with cutting wit and humor.",
  guillotine: "The ultimate symbolic punishment, though thankfully only in digital form.",
  dungeons: "Condemned to the virtual dungeons, away from the light of social standing.",
  removal: "Banished from view, as if they never existed in the eyes of the kingdom.",
  protection: "A royal decree has provided immunity from mockery, shielding this user from public shame.",
  immune: "Protected by special status, this user stands untouchable against common mockery.",
};

// Get mockery action price
export const getMockeryPrice = (action: MockeryAction): number => {
  const prices: Record<MockeryAction | string, number> = {
    tomatoes: 5,
    eggs: 10,
    putridEggs: 15,
    stocks: 20,
    silence: 30,
    courtJester: 50,
    dunce: 10,
    smokeBomb: 75,
    glitterBomb: 40,
    royalPie: 35,
    jokeCrown: 45,
    memeFrame: 25,
    jester: 20,
    roast: 15,
    ridicule: 10,
    humiliate: 25,
    expose: 30,
    mock: 5,
    shame: 20,
    taunt: 15,
    immune: 50,
    protection: 50,
    guillotine: 100,
    dungeons: 80,
    removal: 90
  };
  
  return prices[action] || 10;
};

// Get mockery action tier
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  const tiers: Record<MockeryAction | string, MockeryTier> = {
    tomatoes: 'common',
    eggs: 'common',
    putridEggs: 'uncommon',
    stocks: 'rare',
    silence: 'epic',
    courtJester: 'legendary',
    dunce: 'common',
    smokeBomb: 'legendary',
    glitterBomb: 'epic',
    royalPie: 'rare',
    jokeCrown: 'epic',
    memeFrame: 'uncommon',
    jester: 'uncommon',
    roast: 'common',
    ridicule: 'common',
    humiliate: 'uncommon',
    expose: 'rare',
    mock: 'common',
    shame: 'uncommon',
    taunt: 'common',
    immune: 'epic',
    protection: 'epic',
    guillotine: 'legendary',
    dungeons: 'legendary',
    removal: 'legendary'
  };
  
  return tiers[action] || 'common';
};

// Get mockery action duration in hours
export const getMockeryDuration = (action: MockeryAction): number => {
  const durations: Record<MockeryAction | string, number> = {
    tomatoes: 2,      // 2 hours
    eggs: 3,          // 3 hours
    putridEggs: 4,    // 4 hours
    stocks: 8,        // 8 hours
    silence: 12,      // 12 hours
    courtJester: 24,  // 24 hours
    dunce: 6,         // 6 hours
    smokeBomb: 8,     // 8 hours
    glitterBomb: 4,   // 4 hours
    royalPie: 6,      // 6 hours
    jokeCrown: 12,    // 12 hours
    memeFrame: 8,     // 8 hours
    jester: 4,        // 4 hours
    roast: 3,         // 3 hours
    ridicule: 2,      // 2 hours
    humiliate: 6,     // 6 hours
    expose: 8,        // 8 hours
    mock: 1,          // 1 hour
    shame: 4,         // 4 hours
    taunt: 2,         // 2 hours
    immune: 48,       // 48 hours (2 days)
    protection: 168,  // 168 hours (7 days)
    guillotine: 72,   // 72 hours (3 days)
    dungeons: 48,     // 48 hours (2 days)
    removal: 24       // 24 hours (1 day)
  };
  
  return durations[action] || 4; // Default to 4 hours
};

// Get mockery action icon
export const getMockeryIcon = (action: MockeryAction): string => {
  const icons: Record<MockeryAction | string, string> = {
    tomatoes: '🍅',
    eggs: '🥚',
    putridEggs: '🥚',
    stocks: '🪓',
    silence: '🤐',
    courtJester: '🃏',
    dunce: '🎭',
    smokeBomb: '💨',
    glitterBomb: '✨',
    royalPie: '🥧',
    jokeCrown: '👑',
    memeFrame: '🖼️',
    jester: '🎭',
    roast: '🔥',
    ridicule: '😂',
    humiliate: '😳',
    expose: '📣',
    mock: '🤡',
    shame: '🔔',
    taunt: '👎',
    immune: '🛡️',
    protection: '🛡️',
    guillotine: '🪓',
    dungeons: '🏰',
    removal: '🚫'
  };
  
  return icons[action] || '👀';
};

// Get mockery description
export const getMockeryDescription = (action: MockeryAction): string => {
  return MOCKERY_DESCRIPTIONS[action] || 'A mysterious form of mockery has been applied.';
};

// Check if an action is a premium mockery
export const isPremiumMockery = (action: MockeryAction): boolean => {
  const premiumActions: MockeryAction[] = [
    'smokeBomb',
    'glitterBomb',
    'royalPie',
    'jokeCrown',
    'courtJester',
    'silence',
    'guillotine',
    'dungeons',
    'removal'
  ];
  
  return premiumActions.includes(action);
};
