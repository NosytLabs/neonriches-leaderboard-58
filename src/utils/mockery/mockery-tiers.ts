
import { MockeryAction, MockeryTier } from '@/types/mockery-types';

// Get the tier for a mockery action
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  const tiers: Record<string, MockeryTier> = {
    tomatoes: 'basic',
    eggs: 'basic',
    putridEggs: 'premium',
    dungeons: 'premium',
    immune: 'royal',
    crown: 'premium',
    stocks: 'premium',
    dunce: 'basic',
    jester: 'premium',
    courtJester: 'premium',
    jest: 'basic',
    troll: 'basic',
    peasant: 'basic',
    rat: 'basic',
    ghost: 'premium',
    skeleton: 'premium',
    zombie: 'premium',
    witch: 'premium',
    monster: 'premium',
    demon: 'royal',
    dragon: 'legendary',
    king: 'royal',
    queen: 'royal',
    knight: 'premium',
    bishop: 'premium',
    rook: 'premium',
    pawn: 'basic',
    target: 'basic',
    challenge: 'premium',
    smokeBomb: 'premium',
    glitterBomb: 'royal',
    royalPie: 'basic',
    jokeCrown: 'premium',
    memeFrame: 'basic',
    roast: 'premium',
    ridicule: 'premium',
    humiliate: 'royal',
    expose: 'royal',
    mock: 'basic',
    taunt: 'basic',
    guillotine: 'legendary',
    defeat: 'premium',
    removal: 'legendary',
    protection: 'royal',
    silence: 'premium',
    shame: 'basic'
  };

  return tiers[action] || 'basic';
};

// Get the color class for a mockery tier
export const getMockeryTierColorClass = (tier: MockeryTier): string => {
  const colorClasses: Record<MockeryTier, string> = {
    basic: 'text-gray-400 border-gray-400',
    premium: 'text-purple-500 border-purple-500',
    royal: 'text-royal-gold border-royal-gold',
    legendary: 'text-red-500 border-red-500',
    rare: 'text-blue-500 border-blue-500',
    epic: 'text-pink-500 border-pink-500',
    silver: 'text-gray-300 border-gray-300',
    common: 'text-green-500 border-green-500',
    uncommon: 'text-yellow-500 border-yellow-500'
  };

  return colorClasses[tier] || colorClasses.basic;
};

// Get the CSS class for an active mockery effect
export const getActiveMockeryClass = (action: MockeryAction): string => {
  const mockeryClasses: Record<string, string> = {
    tomatoes: 'mockery-tomatoes',
    eggs: 'mockery-eggs',
    putridEggs: 'mockery-putrid-eggs',
    dungeons: 'mockery-dungeons',
    stocks: 'mockery-stocks',
    dunce: 'mockery-dunce',
    jester: 'mockery-jester',
    courtJester: 'mockery-court-jester',
    protection: 'mockery-protection',
    shame: 'mockery-shame',
    silence: 'mockery-silence',
    smokeBomb: 'mockery-smoke',
    glitterBomb: 'mockery-glitter',
    guillotine: 'mockery-guillotine',
    royalPie: 'mockery-pie'
  };

  return mockeryClasses[action] || 'mockery-default';
};
