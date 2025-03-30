
import { ReactNode } from 'react';
import { ShieldAlert, Sword, Crown, FaceSad, ThumbsDown, Laugh, Target, Skull, Map } from 'lucide-react';

export type MockeryAction = 
  | 'shame'
  | 'taunt'
  | 'crown'
  | 'challenge'
  | 'protection'
  | 'jest'
  | 'target'
  | 'defeat'
  | 'expose';

export type MockeryTier = 'basic' | 'premium' | 'royal';

export type MockeryDuration = 'short' | 'medium' | 'long';

export interface MockeryEffectData {
  id: string;
  action: MockeryAction;
  target: string;
  appliedBy: string;
  duration: number;
  strength: number;
  timestamp: number;
  tier: MockeryTier;
}

// Mockery action costs
export const getMockeryCost = (action: MockeryAction, tier: MockeryTier = 'basic'): number => {
  const costMap: Record<MockeryAction, Record<MockeryTier, number>> = {
    'shame': { 'basic': 50, 'premium': 100, 'royal': 250 },
    'taunt': { 'basic': 25, 'premium': 50, 'royal': 100 },
    'crown': { 'basic': 200, 'premium': 500, 'royal': 1000 },
    'challenge': { 'basic': 75, 'premium': 150, 'royal': 300 },
    'protection': { 'basic': 100, 'premium': 200, 'royal': 400 },
    'jest': { 'basic': 35, 'premium': 70, 'royal': 150 },
    'target': { 'basic': 55, 'premium': 110, 'royal': 225 },
    'defeat': { 'basic': 125, 'premium': 250, 'royal': 500 },
    'expose': { 'basic': 60, 'premium': 120, 'royal': 240 }
  };
  
  return costMap[action][tier] || 50;
};

// Mockery action descriptions
export const getMockeryDescription = (action: MockeryAction): string => {
  const descriptions: Record<MockeryAction, string> = {
    'shame': 'Publicly shame this user, reducing their visibility for a time',
    'taunt': 'Send a public taunt to this user, challenging their status',
    'crown': 'Crown this user as an imposter king/queen for all to see',
    'challenge': 'Issue a formal spending challenge to this noble',
    'protection': 'Grant yourself protection from mockery for a limited time',
    'jest': 'Make this user the subject of royal jesting',
    'target': 'Mark this user as a target for other players',
    'defeat': 'Declare victory over this user in a spending contest',
    'expose': 'Expose this user\'s spending habits to the court'
  };
  
  return descriptions[action] || 'Apply a mockery effect to this user';
};

// Mockery action names
export const getMockeryName = (action: MockeryAction): string => {
  const names: Record<MockeryAction, string> = {
    'shame': 'Public Shaming',
    'taunt': 'Royal Taunt',
    'crown': 'Fool\'s Crown',
    'challenge': 'Spending Challenge',
    'protection': 'Royal Protection',
    'jest': 'Court Jester',
    'target': 'Royal Target',
    'defeat': 'Public Defeat',
    'expose': 'Public Exposure'
  };
  
  return names[action] || 'Unknown Mockery';
};

// Mockery cooldown periods in milliseconds
export const getMockeryCooldown = (action: MockeryAction): number => {
  const cooldowns: Record<MockeryAction, number> = {
    'shame': 3600000, // 1 hour
    'taunt': 1800000, // 30 minutes
    'crown': 86400000, // 24 hours
    'challenge': 43200000, // 12 hours
    'protection': 86400000, // 24 hours
    'jest': 3600000, // 1 hour
    'target': 7200000, // 2 hours
    'defeat': 86400000, // 24 hours
    'expose': 14400000 // 4 hours
  };
  
  return cooldowns[action] || 3600000;
};

// Get icon for mockery action
export const getMockeryActionIcon = (action: MockeryAction): ReactNode => {
  const icons: Record<MockeryAction, ReactNode> = {
    'shame': <FaceSad className="text-amber-500" />,
    'taunt': <ThumbsDown className="text-red-500" />,
    'crown': <Crown className="text-yellow-500" />,
    'challenge': <Sword className="text-blue-500" />,
    'protection': <ShieldAlert className="text-green-500" />,
    'jest': <Laugh className="text-purple-500" />,
    'target': <Target className="text-red-500" />,
    'defeat': <Skull className="text-gray-500" />,
    'expose': <Map className="text-amber-500" />
  };
  
  return icons[action] || <Laugh className="text-purple-500" />;
};

// Get title for mockery action
export const getMockeryActionTitle = (action: MockeryAction): string => {
  return getMockeryName(action);
};

// Get description for mockery action
export const getMockeryActionDescription = (action: MockeryAction): string => {
  return getMockeryDescription(action);
};

// Get price for mockery action
export const getMockeryActionPrice = (action: MockeryAction, tier: MockeryTier = 'basic'): number => {
  return getMockeryCost(action, tier);
};

export const convertShameActionToMockery = (action: string): MockeryAction => {
  const actionMap: Record<string, MockeryAction> = {
    'shame': 'shame',
    'taunt': 'taunt',
    'crown': 'crown',
    'challenge': 'challenge',
    'protection': 'protection',
    'jest': 'jest',
    'target': 'target',
    'defeat': 'defeat',
    'expose': 'expose'
  };
  
  return actionMap[action] || 'shame';
};

export type ShameAction = MockeryAction;
