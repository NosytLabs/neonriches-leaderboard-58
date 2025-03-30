
export type MockeryAction = 'tomatoes' | 'eggs' | 'stocks' | 'dunce' | 'protection' | 'shame' | 'taunt';
export type ShameAction = 'tomatoes' | 'eggs' | 'stocks';
export type MockeryTier = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'basic' | 'premium' | 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond' | 'royal';
export type ExtendedMockeryAction = MockeryAction | 'throne-throw' | 'royal-decree';

export interface MockeryEvent {
  id: string;
  userId: string;
  sourceId: string;
  sourceName: string;
  targetId: string;
  targetName: string;
  targetUserId: string;
  action: MockeryAction;
  mockeryType: string;
  appliedAt: string;
  createdAt: string;
  expiresAt: string;
  isActive: boolean;
}

export interface MockeryEffectData {
  id: string;
  type: MockeryAction;
  targetId: string;
  startTime: number;
  duration: number;
  effectStrength: number;
}

export interface MockUser {
  id: string;
  username: string;
  rank: number;
  amountSpent: number;
  profileImage?: string;
  team?: TeamType;
  isProtected?: boolean;
}

export interface MockedUser extends MockUser {
  mockeryType: MockeryAction;
  appliedAt: string;
  expiresAt: string;
}

export interface UserMockeryStatus {
  isProtected: boolean;
  activeEffects: MockeryEvent[];
  protectionExpiresAt?: string;
}

export interface MockeryActionInfo {
  action: MockeryAction;
  timestamp: number;
  until: number;
}

// Export the interfaces and types to prevent conflicts with isolatedModules
export { MockeryAction, ShameAction, MockeryTier, ExtendedMockeryAction, MockeryEvent, MockeryEffectData, MockUser, MockedUser, UserMockeryStatus, MockeryActionInfo };
