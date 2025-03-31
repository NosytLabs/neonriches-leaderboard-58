
import { MockeryAction, MockeryTier } from '@/types/mockery';
import { CosmeticRarity } from '@/types/cosmetics';
import { 
  Crown, 
  Egg, 
  Lock, 
  Shield, 
  ThumbsDown, 
  Target,
  LucideIcon
} from 'lucide-react';
import { FC } from 'react';

// TomatoIcon component
export const TomatoIcon: FC<{className?: string; size?: number}> = ({className = "", size = 24}) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="13" r="8" />
    <path d="M12 5c0-1 1-2 3-2s3 1 3 4c0 1.5-.5 2-1 3" />
    <path d="M8 13c-2.5-2.5-3-5-1-9 4 2 6 4 8 9" />
  </svg>
);

// Get display name for a mockery action
export const getMockeryName = (action: MockeryAction): string => {
  const names: Record<MockeryAction, string> = {
    tomatoes: 'Rotten Tomatoes',
    eggs: 'Rotten Eggs',
    crown: 'Crown Theft',
    jester: 'Jester Hat',
    stocks: 'Public Stocks',
    protection: 'Royal Protection',
    target: 'Royal Target',
    shame: 'Public Shame'
  };
  
  return names[action] || 'Unknown Mockery';
};

// Get description for a mockery action
export const getMockeryDescription = (action: MockeryAction): string => {
  const descriptions: Record<MockeryAction, string> = {
    tomatoes: 'Throw rotten tomatoes at this user to humiliate them publicly.',
    eggs: 'Throw rotten eggs at this user to make them stink of shame.',
    crown: 'Steal their crown, demoting them temporarily.',
    jester: 'Make them wear a jester hat for everyone to see.',
    stocks: 'Lock them in the public stocks for all to ridicule.',
    protection: 'Grant royal protection against mockery.',
    target: 'Mark them as a target for public mockery.',
    shame: 'Cover them in public shame for all to see.'
  };
  
  return descriptions[action] || 'A mysterious form of mockery.';
};

// Get cost for a mockery action
export const getMockeryCost = (action: MockeryAction): number => {
  const costs: Record<MockeryAction, number> = {
    tomatoes: 0.25,
    eggs: 0.50,
    crown: 1.00,
    jester: 0.75,
    stocks: 0.50,
    protection: 5.00,
    target: 0.50,
    shame: 0.25
  };
  
  return costs[action] || 0.25;
};

// Get tier for a mockery action
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  const tiers: Record<MockeryAction, MockeryTier> = {
    tomatoes: 'standard',
    eggs: 'standard',
    crown: 'premium',
    jester: 'standard',
    stocks: 'standard',
    protection: 'royal',
    target: 'standard',
    shame: 'standard'
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
  const durations: Record<MockeryAction, number> = {
    tomatoes: 24,
    eggs: 24,
    crown: 48,
    jester: 24,
    stocks: 36,
    protection: 72,
    target: 24,
    shame: 24
  };
  
  return durations[action] || 24;
};

// Get mockery action icon component
export const getMockeryActionIcon = (action: MockeryAction): FC<any> => {
  const icons: Record<MockeryAction, FC<any>> = {
    tomatoes: TomatoIcon,
    eggs: Egg,
    crown: Crown,
    stocks: Lock,
    protection: Shield,
    target: Target,
    shame: ThumbsDown,
    jester: Crown
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
  const classes: Record<MockeryAction, string> = {
    tomatoes: 'bg-red-500/20 border-red-500/40',
    eggs: 'bg-yellow-500/20 border-yellow-500/40',
    crown: 'bg-amber-500/20 border-amber-500/40',
    jester: 'bg-purple-500/20 border-purple-500/40',
    stocks: 'bg-gray-500/20 border-gray-500/40',
    protection: 'bg-blue-500/20 border-blue-500/40',
    target: 'bg-orange-500/20 border-orange-500/40',
    shame: 'bg-red-500/20 border-red-500/40'
  };
  
  return classes[action] || 'bg-red-500/20 border-red-500/40';
};

// Helper function for backward compatibility
export const getMockeryCooldown = (action: string): number => {
  return 3600; // Default 1 hour cooldown
};

// Create a price function that combines tier and action
export const getMockeryPrice = (action: MockeryAction, tier: MockeryTier): number => {
  const basePrice = getMockeryActionPrice(action);
  const tierMultiplier = {
    common: 1,
    uncommon: 1.5,
    rare: 2,
    epic: 2.5,
    legendary: 3,
    basic: 1,
    premium: 2,
    royal: 3,
    bronze: 1,
    silver: 1.5,
    standard: 1
  }[tier] || 1;
  
  return basePrice * tierMultiplier;
};
