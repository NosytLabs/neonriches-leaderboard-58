
// Define types for mockery-related features
export type MockeryTier = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

export type MockeryAction = 
  'tomatoes' | 
  'eggs' | 
  'stocks' | 
  'silence' | 
  'courtJester' | 
  'jester' | 
  'protected' | 
  'immune' | 
  'dunce' | 
  'roast' | 
  'ridicule' | 
  'taunt' | 
  'drama';

export type ExtendedMockeryAction = MockeryAction;
export type ShameAction = MockeryAction;

export interface MockeryEvent {
  id: string;
  targetUserId: string;
  sourceUserId: string;
  timestamp: string;
  mockeryType: MockeryAction;
  action?: string;
  duration: number;
  active: boolean;
  sourceUsername?: string; // Added for compatibility
}

export interface MockeryEffectData {
  type: MockeryAction;
  until: string;
  tier: MockeryTier;
  duration?: number;
  strength?: number;
  appliedBy?: string;
  id?: string;
  action?: string; // Added for compatibility
}

export interface UserMockeryStatus {
  username: string;
  userId?: string;
  protectedUntil: string | null;
  activeProtection?: MockeryEffectData | null;
  activeMockeries?: MockeryEffectData[];
  mockeryCount: number;
  lastMockedAt: string | null;
}

export interface MockUser {
  id: string;
  username: string;
  profilePicture: string;
  tier: MockeryTier;
  lastMockery: string;
  mockeryCount: number;
  isProtected: boolean;
  onlineStatus: boolean;
}

// These are helper functions to ensure string values conform to defined types
export const asMockeryTier = (tier: string): MockeryTier => {
  const validTiers: MockeryTier[] = ['common', 'uncommon', 'rare', 'epic', 'legendary'];
  return validTiers.includes(tier as MockeryTier) 
    ? tier as MockeryTier 
    : 'common';
};

export const asMockeryAction = (action: string): MockeryAction => {
  const validActions: MockeryAction[] = [
    'tomatoes', 'eggs', 'stocks', 'silence', 'courtJester', 
    'jester', 'protected', 'immune', 'dunce', 'roast', 
    'ridicule', 'taunt', 'drama'
  ];
  return validActions.includes(action as MockeryAction) 
    ? action as MockeryAction 
    : 'tomatoes';
};
