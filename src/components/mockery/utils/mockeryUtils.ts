
import { MockeryAction, ShameAction } from '@/types/mockery';
import { Egg, Flame, Crown, Shield, Megaphone, Ban, Award, Meh } from 'lucide-react';

/**
 * Get the appropriate icon component for a mockery action
 */
export const getMockeryActionIcon = (action: MockeryAction) => {
  switch (action) {
    case 'tomatoes':
      return Flame;
    case 'eggs':
      return Egg;
    case 'stocks':
      return Ban;
    case 'silence':
      return Megaphone;
    case 'courtJester':
    case 'jester':
      return Crown;
    case 'common':
      return Meh;
    case 'uncommon':
      return Egg;
    case 'rare':
      return Shield;
    case 'epic':
      return Crown;
    case 'legendary':
      return Award;
    case 'protection':
    case 'immune':
      return Shield;
    default:
      return Flame;
  }
};

/**
 * Get the price for a mockery action
 */
export const getMockeryPrice = (action: MockeryAction): number => {
  const prices: Record<string, number> = {
    tomatoes: 5,
    eggs: 10,
    stocks: 20,
    silence: 30,
    jester: 50,
    courtJester: 100,
    dunce: 40,
    common: 5,
    uncommon: 10,
    rare: 25,
    epic: 50,
    legendary: 100,
    protection: 50,
    immune: 75
  };
  
  return prices[action] || 10;
};

/**
 * Get the title for a mockery action
 */
export const getMockeryTitle = (action: MockeryAction): string => {
  const titles: Record<string, string> = {
    tomatoes: 'Rotten Tomatoes',
    eggs: 'Egg Throwing',
    stocks: 'Public Stocks',
    silence: 'Royal Silencing',
    jester: 'Court Jester',
    courtJester: 'Royal Court Jester',
    dunce: 'Dunce Cap',
    common: 'Common Mockery',
    uncommon: 'Uncommon Mockery',
    rare: 'Rare Mockery',
    epic: 'Epic Mockery',
    legendary: 'Legendary Mockery',
    protection: 'Royal Protection',
    immune: 'Royal Immunity'
  };
  
  return titles[action] || 'Mockery';
};

/**
 * Get the description for a mockery action
 */
export const getMockeryDescription = (action: MockeryAction, username: string): string => {
  const descriptions: Record<string, string> = {
    tomatoes: `Pelt ${username} with virtual rotten tomatoes for 24 hours.`,
    eggs: `Throw virtual eggs at ${username} for 48 hours.`,
    stocks: `Place ${username} in the public stocks for 72 hours.`,
    silence: `Silence ${username} from all public communication for 48 hours.`,
    jester: `Force ${username} to wear the jester's hat for 96 hours.`,
    courtJester: `Elevate ${username} to the position of Court Jester for a full 7 days.`,
    dunce: `Place a dunce cap on ${username} for 48 hours.`,
    protection: `Protect ${username} from all mockery attempts for 7 days.`,
    immune: `Grant ${username} immunity from all negative effects for 10 days.`
  };
  
  return descriptions[action] || `Mock ${username} publicly.`;
};

/**
 * Get the duration for a mockery action in hours
 */
export const getMockeryDuration = (action: MockeryAction): number => {
  const durations: Record<string, number> = {
    tomatoes: 24,
    eggs: 48,
    stocks: 72,
    silence: 48,
    jester: 96,
    courtJester: 168, // 7 days
    dunce: 48,
    common: 24,
    uncommon: 48,
    rare: 72,
    epic: 96,
    legendary: 168, // 7 days
    protection: 168, // 7 days
    immune: 240 // 10 days
  };
  
  return durations[action] || 24;
};
