
import { MockeryAction, MockeryTier } from '@/types/mockery';
import { CosmeticRarity } from '@/types/cosmetics';
import { 
  Crown, 
  Egg, 
  Lock, 
  Shield, 
  ThumbsDown, 
  Target
} from 'lucide-react';
import { TomatoIcon } from './mockery/mockery-icons';

// Get display name for a mockery action
export const getMockeryName = (action: MockeryAction): string => {
  const names: Partial<Record<MockeryAction, string>> = {
    tomatoes: 'Rotten Tomatoes',
    eggs: 'Rotten Eggs',
    crown: 'Crown Theft',
    jester: 'Jester Hat',
    stocks: 'Public Stocks',
    protection: 'Royal Protection',
    target: 'Royal Target',
    shame: 'Public Shame',
    putridEggs: 'Putrid Eggs',
    silence: 'Royal Silence',
    courtJester: 'Court Jester',
    jest: 'Royal Jest',
    challenge: 'Royal Challenge',
    defeat: 'Royal Defeat',
    fool: 'Royal Fool'
  };
  
  return names[action] || 'Unknown Mockery';
};

// Get description for a mockery action
export const getMockeryDescription = (action: MockeryAction): string => {
  const descriptions: Partial<Record<MockeryAction, string>> = {
    tomatoes: 'Throw rotten tomatoes at this user to humiliate them publicly.',
    eggs: 'Throw rotten eggs at this user to make them stink of shame.',
    crown: 'Steal their crown, demoting them temporarily.',
    jester: 'Make them wear a jester hat for everyone to see.',
    stocks: 'Lock them in the public stocks for all to ridicule.',
    protection: 'Grant royal protection against mockery.',
    target: 'Mark them as a target for public mockery.',
    shame: 'Cover them in public shame for all to see.',
    putridEggs: 'Throw particularly putrid eggs that leave a lasting smell.',
    silence: 'Impose royal silence on this user.',
    courtJester: 'Promote them to royal court jester with fancy attire.',
    jest: 'Make a royal jest at their expense.',
    challenge: 'Issue a royal challenge to test their mettle.',
    defeat: 'Mark them as royally defeated.',
    dungeons: 'Send them to the royal dungeons.',
    fool: 'Label them the royal fool for all to see.'
  };
  
  return descriptions[action] || 'A mysterious form of mockery.';
};

// Get cost for a mockery action
export const getMockeryCost = (action: MockeryAction): number => {
  const costs: Partial<Record<MockeryAction, number>> = {
    tomatoes: 0.25,
    eggs: 0.50,
    crown: 1.00,
    jester: 0.75,
    stocks: 0.50,
    protection: 5.00,
    target: 0.50,
    shame: 0.25,
    putridEggs: 0.75,
    silence: 1.50,
    courtJester: 1.50,
    jest: 0.50,
    challenge: 2.00,
    defeat: 1.00,
    dungeons: 3.00,
    fool: 0.50
  };
  
  return costs[action] || 0.25;
};

// Get tier for a mockery action
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  const tiers: Partial<Record<MockeryAction, MockeryTier>> = {
    tomatoes: 'standard',
    eggs: 'standard',
    crown: 'premium',
    jester: 'standard',
    stocks: 'standard',
    protection: 'royal',
    target: 'standard',
    shame: 'standard',
    putridEggs: 'premium',
    silence: 'premium',
    courtJester: 'premium',
    jest: 'standard',
    challenge: 'premium',
    defeat: 'premium',
    dungeons: 'royal',
    fool: 'standard'
  };
  
  return tiers[action] || 'standard';
};

// Get display color for a mockery tier
export const getMockeryTierColorClass = (tier: MockeryTier): string => {
  const colors: Record<MockeryTier, string> = {
    standard: 'text-blue-400',
    premium: 'text-purple-400',
    royal: 'text-yellow-400',
    legendary: 'text-emerald-400',
    common: 'text-gray-400',
    uncommon: 'text-cyan-400',
    rare: 'text-indigo-400',
    epic: 'text-pink-400',
    basic: 'text-slate-400',
    silver: 'text-gray-300'
  };
  
  return colors[tier] || 'text-gray-400';
};

// Get duration of mockery in hours
export const getMockeryDuration = (action: MockeryAction): number => {
  const durations: Partial<Record<MockeryAction, number>> = {
    tomatoes: 24,
    eggs: 24,
    crown: 48,
    jester: 24,
    stocks: 36,
    protection: 72,
    target: 24,
    shame: 24,
    putridEggs: 48,
    silence: 24,
    courtJester: 48,
    jest: 12,
    challenge: 24,
    defeat: 48,
    dungeons: 72,
    fool: 24
  };
  
  return durations[action] || 24;
};

// Get mockery action icon component
export const getMockeryActionIcon = (action: MockeryAction): FC | LucideIcon => {
  const icons: Partial<Record<MockeryAction, any>> = {
    tomatoes: TomatoIcon,
    eggs: Egg,
    crown: Crown,
    stocks: Lock,
    protection: Shield,
    target: Target,
    shame: ThumbsDown
  };
  
  return icons[action] || ThumbsDown;
};

// For backward compatibility
export { getMockeryName as getMockeryActionTitle };
export { getMockeryDescription as getMockeryActionDescription };
export { getMockeryCost as getMockeryActionPrice };
export { getMockeryActionIcon as getMockeryIconColor };
export { getMockeryActionIcon as getMockeryActionIconColor };

// Define a simple function to get class for mockery that is active
export const getActiveMockeryClass = (action: MockeryAction): string => {
  const classes: Partial<Record<MockeryAction, string>> = {
    tomatoes: 'bg-red-500/20 border-red-500/40',
    eggs: 'bg-yellow-500/20 border-yellow-500/40',
    crown: 'bg-amber-500/20 border-amber-500/40',
    jester: 'bg-purple-500/20 border-purple-500/40',
    stocks: 'bg-gray-500/20 border-gray-500/40',
    protection: 'bg-blue-500/20 border-blue-500/40'
  };
  
  return classes[action] || 'bg-red-500/20 border-red-500/40';
};
