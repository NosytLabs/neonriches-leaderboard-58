
/**
 * Types for the mockery and shame system
 */

export type MockeryAction = 
  | 'tomatoes' 
  | 'eggs' 
  | 'stocks' 
  | 'dunce' 
  | 'jester' 
  | 'crown' 
  | 'taunt' 
  | 'shame'
  | 'putridEggs'
  | 'silence';

export type MockeryTier = 'basic' | 'premium' | 'royal' | 'legendary';

export interface MockeryEvent {
  id: string;
  targetId: string;
  targetUsername: string;
  action: MockeryAction;
  appliedBy: string;
  appliedAt: string;
  expiresAt: string;
  tier: MockeryTier;
  isActive: boolean;
}

export interface MockedUser {
  id: string;
  userId?: string;
  username: string;
  displayName: string;
  profileImage: string;
  mockedReason?: string;
  mockedTimestamp: string;
  mockedBy: string;
  mockedTier: string;
  mockeryCount: number;
  lastMocked?: string;
  team: string;
  tier: string;
}

export interface MockeryProtection {
  id: string;
  userId: string;
  startDate: string;
  endDate: string;
  type: 'basic' | 'premium' | 'royal';
  isActive: boolean;
}

export interface MockeryStats {
  totalMockeries: number;
  mostPopularAction: MockeryAction;
  mostMockedUser: string;
  mostActiveUser: string;
  protectedUsers: number;
}

export type ShameAction = MockeryAction;
