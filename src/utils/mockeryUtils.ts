
import { MockeryAction, MockeryTier } from '@/types/mockery';
import { cn } from '@/lib/utils';

// Get name for mockery action
export const getMockeryName = (action: MockeryAction): string => {
  const names: Record<MockeryAction, string> = {
    'shame': 'Public Shaming',
    'taunt': 'Royal Taunt',
    'crown': 'Challenge the Crown',
    'challenge': 'Noble Challenge',
    'protection': 'Royal Protection',
    'jest': 'Court Jester',
    'target': 'Mark as Target',
    'defeat': 'Declare Defeat',
    'expose': 'Royal Exposure'
  };
  
  return names[action] || 'Unknown Action';
};

// Get description for mockery action
export const getMockeryDescription = (action: MockeryAction): string => {
  const descriptions: Record<MockeryAction, string> = {
    'shame': 'Publicly shame this user for their spending habits',
    'taunt': 'Taunt this user with royal authority',
    'crown': 'Challenge this user for their crown position',
    'challenge': 'Issue a formal challenge to outspend this user',
    'protection': 'Grant royal protection against mockery',
    'jest': 'Turn this user into a jester for all to laugh at',
    'target': 'Mark user as a target for the kingdom',
    'defeat': 'Declare your defeat to this noble spender',
    'expose': 'Expose this user\'s spending to the kingdom'
  };
  
  return descriptions[action] || 'Unknown Action';
};

// Get cost for mockery action
export const getMockeryCost = (action: MockeryAction, tier: MockeryTier = 'basic'): number => {
  const baseCosts: Record<MockeryAction, number> = {
    'shame': 10,
    'taunt': 15,
    'crown': 100,
    'challenge': 25,
    'protection': 50,
    'jest': 20,
    'target': 30,
    'defeat': 5,
    'expose': 40
  };
  
  const tierMultipliers: Record<MockeryTier, number> = {
    'basic': 1,
    'premium': 2,
    'royal': 3,
    'common': 1,
    'uncommon': 1.5,
    'rare': 2,
    'epic': 3,
    'legendary': 5
  };
  
  return Math.round(baseCosts[action] * (tierMultipliers[tier] || 1));
};

// Get cooldown for mockery action
export const getMockeryCooldown = (action: MockeryAction, tier: MockeryTier = 'basic'): number => {
  const baseCooldowns: Record<MockeryAction, number> = {
    'shame': 60, // 1 minute
    'taunt': 300, // 5 minutes
    'crown': 86400, // 24 hours
    'challenge': 3600, // 1 hour
    'protection': 43200, // 12 hours
    'jest': 1800, // 30 minutes
    'target': 7200, // 2 hours
    'defeat': 300, // 5 minutes
    'expose': 21600 // 6 hours
  };
  
  const tierMultipliers: Record<MockeryTier, number> = {
    'basic': 1,
    'premium': 0.75,
    'royal': 0.5,
    'common': 1,
    'uncommon': 0.9,
    'rare': 0.75,
    'epic': 0.6,
    'legendary': 0.4
  };
  
  return Math.round(baseCooldowns[action] * (tierMultipliers[tier] || 1));
};

// Get CSS color class for mockery action
export const getMockeryActionIconColor = (action: MockeryAction): string => {
  if (action === 'shame') return 'text-amber-500';
  if (action === 'taunt') return 'text-red-500';
  if (action === 'crown') return 'text-yellow-500';
  if (action === 'challenge') return 'text-blue-500';
  if (action === 'protection') return 'text-emerald-500';
  if (action === 'jest') return 'text-purple-500';
  if (action === 'target') return 'text-orange-500';
  if (action === 'defeat') return 'text-gray-500';
  if (action === 'expose') return 'text-pink-500';
  
  return 'text-white';
};

// Get CSS animation class for mockery effect
export const getMockeryEffectClass = (action: MockeryAction): string => {
  const effectClasses: Record<MockeryAction, string> = {
    'shame': 'animate-bounce',
    'taunt': 'animate-pulse',
    'crown': 'animate-glow',
    'challenge': 'animate-shake',
    'protection': 'animate-shield',
    'jest': 'animate-spin-slow',
    'target': 'animate-pulse',
    'defeat': 'animate-fade',
    'expose': 'animate-flash'
  };
  
  return effectClasses[action] || '';
};

// Get duration for mockery effect in hours
export const getMockeryDuration = (action: MockeryAction, tier: MockeryTier = 'basic'): number => {
  const baseDurations: Record<MockeryAction, number> = {
    'shame': 3, // 3 hours
    'taunt': 6, // 6 hours
    'crown': 24, // 24 hours
    'challenge': 12, // 12 hours
    'protection': 48, // 48 hours
    'jest': 8, // 8 hours
    'target': 18, // 18 hours
    'defeat': 4, // 4 hours
    'expose': 36 // 36 hours
  };
  
  const tierMultipliers: Record<MockeryTier, number> = {
    'basic': 1,
    'premium': 1.5,
    'royal': 2,
    'common': 1,
    'uncommon': 1.25,
    'rare': 1.5,
    'epic': 1.75,
    'legendary': 2.5
  };
  
  return baseDurations[action] * (tierMultipliers[tier] || 1);
};

// Get mockery tier from user tier
export const getMockeryTierFromUserTier = (userTier: string): MockeryTier => {
  switch (userTier) {
    case 'premium': 
    case 'pro': 
      return 'premium';
    case 'royal':
    case 'founder':
    case 'whale':
      return 'royal';
    default:
      return 'basic';
  }
};

export const getTierRarityClass = (tier: MockeryTier): string => {
  const tierClasses: Record<MockeryTier, string> = {
    'basic': 'text-white',
    'premium': 'text-amber-400',
    'royal': 'text-purple-400',
    'common': 'text-white',
    'uncommon': 'text-green-400',
    'rare': 'text-blue-400',
    'epic': 'text-purple-400',
    'legendary': 'text-yellow-400'
  };
  
  return tierClasses[tier] || 'text-white';
};

// Export mockery constants for use in other files
export const MOCKERY_COOLDOWNS = getMockeryCooldown;
export const MOCKERY_COSTS = getMockeryCost;
export const MOCKERY_NAMES = getMockeryName;
export const MOCKERY_DESCRIPTIONS = getMockeryDescription;
