
import React from 'react';
import { MockeryAction, MockeryTier } from '@/types/mockery';
import { 
  AlertCircle, 
  Egg, 
  Crown, 
  Theater, 
  Target, 
  Shield, 
  Bell, 
  MessageSquare, 
  Ban, 
  UserX, 
  Angry, 
  Feather 
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// TomatoIcon component
export const TomatoIcon: React.FC<{ className?: string; size?: number }> = ({ className = "", size = 24 }) => (
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

// Get mockery action icon
export const getMockeryActionIcon = (action: MockeryAction): LucideIcon => {
  const icons: Record<string, LucideIcon> = {
    'tomatoes': TomatoIcon,
    'eggs': Egg,
    'crown': Crown,
    'jester': Theater,
    'stocks': UserX,
    'shame': Bell,
    'protection': Shield
  };
  return icons[action] || Target;
};

// Get display name for a mockery action
export const getMockeryName = (action: MockeryAction): string => {
  const names: Record<MockeryAction, string> = {
    tomatoes: 'Rotten Tomatoes',
    eggs: 'Rotten Eggs',
    crown: 'Mock Crown',
    stocks: 'Public Stocks',
    jester: 'Court Jester',
    shame: 'Public Shame',
    protection: 'Royal Protection'
  };
  
  return names[action] || 'Unknown Mockery';
};

// Get description for a mockery action
export const getMockeryDescription = (action: MockeryAction): string => {
  const descriptions: Record<MockeryAction, string> = {
    tomatoes: 'Throw rotten tomatoes at this user to humiliate them publicly.',
    eggs: 'Throw rotten eggs at this user to make them stink of shame.',
    crown: 'Place a ridiculous crown on their head to mock their achievements.',
    stocks: 'Lock them in the public stocks for all to ridicule.',
    jester: 'Mark them as the court jester, subjecting them to ridicule.',
    shame: 'Subject this user to public mockery and shame.',
    protection: 'Grant royal protection against mockery for 7 days.'
  };
  
  return descriptions[action] || 'A mysterious form of mockery.';
};

// Get cost for a mockery action
export const getMockeryCost = (action: MockeryAction): number => {
  const costs: Record<MockeryAction, number> = {
    tomatoes: 0.25,
    eggs: 0.50,
    crown: 1.00,
    stocks: 0.50,
    jester: 0.60,
    shame: 1.25,
    protection: 5.00
  };
  
  return costs[action] || 0.25;
};

// Get tier for a mockery action
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  const tiers: Record<MockeryAction, MockeryTier> = {
    tomatoes: 'common',
    eggs: 'common',
    crown: 'uncommon',
    stocks: 'common',
    jester: 'uncommon',
    shame: 'rare',
    protection: 'legendary'
  };
  
  return tiers[action] || 'common';
};

// Get display color for a mockery tier
export const getMockeryTierColorClass = (tier: MockeryTier): string => {
  const colors: Record<MockeryTier, string> = {
    common: 'text-blue-400',
    uncommon: 'text-cyan-400',
    rare: 'text-indigo-400',
    epic: 'text-pink-400',
    legendary: 'text-emerald-400',
    basic: 'text-gray-400',
    premium: 'text-blue-500',
    royal: 'text-royal-gold',
    silver: 'text-gray-300',
    bronze: 'text-amber-700'
  };
  
  return colors[tier] || 'text-gray-400';
};

// Get duration of mockery in hours
export const getMockeryDuration = (action: MockeryAction): number => {
  const durations: Record<MockeryAction, number> = {
    tomatoes: 24,
    eggs: 24,
    crown: 48,
    stocks: 36,
    jester: 48,
    shame: 24,
    protection: 168 // 7 days
  };
  
  return durations[action] || 24;
};

// Define a simple function to get class for mockery that is active
export const getActiveMockeryClass = (action: MockeryAction | null): string => {
  if (!action) return '';
  
  const classes: Record<MockeryAction, string> = {
    tomatoes: 'bg-red-500/20 border-red-500/40',
    eggs: 'bg-yellow-500/20 border-yellow-500/40',
    crown: 'bg-amber-500/20 border-amber-500/40',
    stocks: 'bg-gray-500/20 border-gray-500/40',
    jester: 'bg-purple-500/20 border-purple-500/40',
    shame: 'bg-red-800/20 border-red-800/40',
    protection: 'bg-green-500/20 border-green-500/40'
  };
  
  return classes[action] || 'bg-red-500/20 border-red-500/40';
};

// Weekly discount utilities
export const hasWeeklyDiscount = (action: MockeryAction): boolean => {
  return action === 'eggs';
};

export const getWeeklyDiscountedAction = (): MockeryAction => {
  return 'eggs';
};

export const getDiscountedShamePrice = (action: MockeryAction): number => {
  const originalPrice = getMockeryCost(action);
  // Apply a 50% discount
  return originalPrice * 0.5;
};

export const getShameActionMessage = (action: MockeryAction, username: string): string => {
  const messages: Record<MockeryAction, string> = {
    'tomatoes': `You've pelted ${username} with rotten tomatoes!`,
    'eggs': `You've egged ${username}!`,
    'crown': `You've mocked ${username} with a ridiculous crown!`,
    'stocks': `You've placed ${username} in the stocks!`,
    'jester': `You've made ${username} the court jester!`,
    'shame': `You've publicly shamed ${username}!`,
    'protection': `You've granted ${username} royal protection!`
  };
  
  return messages[action] || `You've publicly mocked ${username}!`;
};

// Render the appropriate icon for a mockery action
export const renderMockeryIcon = (action: MockeryAction, className: string = "h-4 w-4") => {
  const IconComponent = getMockeryActionIcon(action);
  return <IconComponent className={className} />;
};

// For backward compatibility
export const getMockeryActionTitle = getMockeryName;
export const getMockeryActionDescription = getMockeryDescription;
export const getMockeryActionPrice = getMockeryCost;
export const getShameActionPrice = getMockeryCost;
