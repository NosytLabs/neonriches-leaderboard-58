
import { MockeryAction, MockeryTier } from '@/types/mockery';
import { CosmeticRarity } from '@/types/cosmetics';

// Mockery action costs
export const getMockeryCost = (action: MockeryAction): number => {
  const MOCKERY_COSTS: Record<MockeryAction, number> = {
    tomatoes: 5,
    eggs: 7,
    putridEggs: 10,
    stocks: 15,
    dunce: 10,
    silence: 25,
    courtJester: 50,
    smokeBomb: 75,
    protection: 100,
    immune: 150,
    jester: 25,
    glitterBomb: 30,
    royalPie: 20,
    jokeCrown: 35,
    memeFrame: 15,
    roast: 10,
    ridicule: 15,
    humiliate: 25,
    expose: 30,
    mock: 5,
    shame: 15,
    taunt: 10,
    guillotine: 100,
    dungeons: 75,
    removal: 200
  };
  
  return MOCKERY_COSTS[action] || 10;
};

// Mockery action names
export const getMockeryName = (action: MockeryAction): string => {
  const MOCKERY_NAMES: Record<MockeryAction, string> = {
    tomatoes: 'Throw Rotten Tomatoes',
    eggs: 'Throw Eggs',
    putridEggs: 'Throw Putrid Eggs',
    stocks: 'Place in Stocks',
    dunce: 'Apply Dunce Cap',
    silence: 'Enforce Silence',
    courtJester: 'Make Court Jester',
    smokeBomb: 'Royal Smoke Bomb',
    protection: 'Royal Protection',
    immune: 'Royal Immunity',
    jester: 'Jester Mark',
    glitterBomb: 'Glitter Bomb',
    royalPie: 'Royal Pie',
    jokeCrown: 'Joke Crown',
    memeFrame: 'Meme Frame',
    roast: 'Public Roast',
    ridicule: 'Public Ridicule',
    humiliate: 'Royal Humiliation',
    expose: 'Royal Exposure',
    mock: 'Mockery',
    shame: 'Public Shame',
    taunt: 'Royal Taunt',
    guillotine: 'Royal Guillotine',
    dungeons: 'Royal Dungeons',
    removal: 'Profile Removal'
  };
  
  return MOCKERY_NAMES[action] || `Action: ${action}`;
};

// Mockery action descriptions
export const getMockeryDescription = (action: MockeryAction, targetUsername?: string): string => {
  const target = targetUsername || 'your target';
  
  const MOCKERY_DESCRIPTIONS: Record<MockeryAction, string> = {
    tomatoes: `Splatter ${target}'s profile with rotten tomatoes.`,
    eggs: `Throw eggs at ${target}'s profile.`,
    putridEggs: `Throw putrid eggs at ${target}'s profile.`,
    stocks: `Place ${target} in the public stocks for everyone to see.`,
    dunce: `Place a dunce cap on ${target}'s profile.`,
    silence: `Prevent ${target} from speaking in public forums.`,
    courtJester: `Make ${target} the court jester, complete with outfit.`,
    smokeBomb: `Cover ${target}'s profile in thick smoke for 8 hours.`,
    protection: `Grant royal protection against mockery attacks.`,
    immune: `Grant immunity against all mockery for 7 days.`,
    jester: `Mark ${target} as a royal jester.`,
    glitterBomb: `Cover ${target}'s profile with glitter.`,
    royalPie: `Throw a royal pie at ${target}.`,
    jokeCrown: `Place a jester's crown on ${target}.`,
    memeFrame: `Frame ${target}'s profile in memes.`,
    roast: `Roast ${target} with royal commentary.`,
    ridicule: `Ridicule ${target} in the royal court.`,
    humiliate: `Publicly humiliate ${target} in the royal court.`,
    expose: `Expose ${target}'s spending habits to all.`,
    mock: `Mock ${target} with royal disdain.`,
    shame: `Shame ${target} in public.`,
    taunt: `Taunt ${target} with royal mockery.`,
    guillotine: `Subject ${target} to the royal guillotine (visual effect only).`,
    dungeons: `Send ${target} to the royal dungeons (visual effect only).`,
    removal: `Remove ${target}'s profile from public view temporarily.`
  };
  
  return MOCKERY_DESCRIPTIONS[action] || `Apply mockery to ${target}.`;
};

// Mockery cooldown periods in milliseconds
export const getMockeryCooldown = (action: MockeryAction): number => {
  const MOCKERY_COOLDOWNS: Record<MockeryAction, number> = {
    tomatoes: 24 * 60 * 60 * 1000, // 24 hours
    eggs: 24 * 60 * 60 * 1000,
    putridEggs: 48 * 60 * 60 * 1000, // 48 hours
    stocks: 72 * 60 * 60 * 1000, // 72 hours
    dunce: 48 * 60 * 60 * 1000,
    silence: 48 * 60 * 60 * 1000,
    courtJester: 7 * 24 * 60 * 60 * 1000, // 7 days
    smokeBomb: 8 * 60 * 60 * 1000, // 8 hours
    protection: 7 * 24 * 60 * 60 * 1000, // 7 days
    immune: 7 * 24 * 60 * 60 * 1000,
    jester: 4 * 24 * 60 * 60 * 1000, // 4 days
    glitterBomb: 48 * 60 * 60 * 1000,
    royalPie: 36 * 60 * 60 * 1000, // 36 hours
    jokeCrown: 72 * 60 * 60 * 1000,
    memeFrame: 60 * 60 * 60 * 1000, // 60 hours
    roast: 24 * 60 * 60 * 1000,
    ridicule: 48 * 60 * 60 * 1000,
    humiliate: 72 * 60 * 60 * 1000,
    expose: 48 * 60 * 60 * 1000,
    mock: 24 * 60 * 60 * 1000,
    shame: 48 * 60 * 60 * 1000,
    taunt: 24 * 60 * 60 * 1000,
    guillotine: 7 * 24 * 60 * 60 * 1000,
    dungeons: 5 * 24 * 60 * 60 * 1000, // 5 days
    removal: 3 * 24 * 60 * 60 * 1000 // 3 days
  };
  
  return MOCKERY_COOLDOWNS[action] || 24 * 60 * 60 * 1000; // Default 24 hours
};

// Get mockery tier
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  const MOCKERY_TIERS: Record<MockeryAction, MockeryTier> = {
    tomatoes: 'common',
    eggs: 'common',
    mock: 'common',
    taunt: 'common',
    dunce: 'common',
    putridEggs: 'uncommon',
    roast: 'uncommon',
    ridicule: 'uncommon',
    memeFrame: 'uncommon',
    royalPie: 'uncommon',
    stocks: 'rare',
    shame: 'rare',
    silence: 'rare',
    jester: 'rare',
    jokeCrown: 'rare',
    expose: 'rare',
    glitterBomb: 'epic',
    humiliate: 'epic',
    smokeBomb: 'epic',
    protection: 'epic',
    dungeons: 'legendary',
    guillotine: 'legendary',
    courtJester: 'legendary',
    immune: 'legendary',
    removal: 'premium'
  };
  
  return MOCKERY_TIERS[action] || 'common';
};

// Get rarity based on mockery tier
export const getMockeryRarity = (tier: MockeryTier): CosmeticRarity => {
  const MOCKERY_RARITY: Record<MockeryTier, CosmeticRarity> = {
    common: 'common',
    uncommon: 'uncommon',
    rare: 'rare',
    epic: 'epic',
    legendary: 'legendary',
    premium: 'legendary'
  };
  
  return MOCKERY_RARITY[tier] || 'common';
};

// Get CSS class for mockery effect display
export const getActiveMockeryClass = (action: MockeryAction): string => {
  const MOCKERY_CLASSES: Record<MockeryAction, string> = {
    tomatoes: 'mockery-tomatoes',
    eggs: 'mockery-eggs',
    putridEggs: 'mockery-putrid-eggs',
    stocks: 'mockery-stocks',
    dunce: 'mockery-dunce',
    silence: 'mockery-silence',
    courtJester: 'mockery-court-jester',
    smokeBomb: 'mockery-smoke-bomb',
    protection: 'mockery-protection',
    immune: 'mockery-immune',
    jester: 'mockery-jester',
    glitterBomb: 'mockery-glitter-bomb',
    royalPie: 'mockery-royal-pie',
    jokeCrown: 'mockery-joke-crown',
    memeFrame: 'mockery-meme-frame',
    roast: 'mockery-roast',
    ridicule: 'mockery-ridicule',
    humiliate: 'mockery-humiliate',
    expose: 'mockery-expose',
    mock: 'mockery-mock',
    shame: 'mockery-shame',
    taunt: 'mockery-taunt',
    guillotine: 'mockery-guillotine',
    dungeons: 'mockery-dungeons',
    removal: 'mockery-removal'
  };
  
  return MOCKERY_CLASSES[action] || '';
};

// Get mockery action icon
export const getMockeryActionIcon = (action: MockeryAction): string => {
  const MOCKERY_ICONS: Record<MockeryAction, string> = {
    tomatoes: '🍅',
    eggs: '🥚',
    putridEggs: '🥚',
    stocks: '🪵',
    dunce: '🎓',
    silence: '🔇',
    courtJester: '🃏',
    smokeBomb: '💨',
    protection: '🛡️',
    immune: '✨',
    jester: '🃏',
    glitterBomb: '✨',
    royalPie: '🥧',
    jokeCrown: '👑',
    memeFrame: '🖼️',
    roast: '🔥',
    ridicule: '😂',
    humiliate: '😱',
    expose: '👁️',
    mock: '🤪',
    shame: '😳',
    taunt: '😝',
    guillotine: '⚔️',
    dungeons: '🏰',
    removal: '❌'
  };
  
  return MOCKERY_ICONS[action] || '❓';
};

export const getMockeryActionTitle = (action: MockeryAction): string => {
  return getMockeryName(action);
};

export const getMockeryActionDescription = (action: MockeryAction, username?: string): string => {
  return getMockeryDescription(action, username);
};

export const getMockeryActionPrice = (action: MockeryAction): number => {
  return getMockeryCost(action);
};
