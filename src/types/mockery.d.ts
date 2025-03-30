
// Mockery-related types
export type MockeryAction = 'tomatoes' | 'putridEggs' | 'stocks' | 'silence' | 'courtJester' | 'dunce' | 'smokeBomb';
export type ShameAction = 'ridicule' | 'humiliate' | 'expose' | 'mock' | MockeryAction;
export type MockeryTier = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

export interface MockeryEvent {
  id: string;
  sourceUserId: string;
  targetUserId: string;
  action: MockeryAction;
  timestamp: string;
  duration: number; // in milliseconds
  expiresAt: string;
  active: boolean;
}

export interface MockeryEffectData {
  username: string;
  action: MockeryAction;
  duration?: number;
  tier?: MockeryTier;
}

export interface UserMockeryStatus {
  isProtected: boolean;
  protectionExpiresAt?: string;
  activeMockery?: MockeryEvent;
  mockeryCount: number;
  mockedOthersCount: number;
}

export interface MockUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  rank?: number;
  team?: string;
  tier?: string;
  lastMocked?: string;
  mockeryCount?: number;
}

export interface MockedUser {
  username: string;
  displayName: string;
  avatarUrl?: string;
  mockedReason?: string;
  mockedTimestamp?: string;
  mockedBy?: string;
  mockedTier?: string;
  mockeryCount?: number;
}

export interface ExtendedMockeryAction extends MockeryAction {
  title: string;
  description: string;
  price: number;
  tier: MockeryTier;
  icon?: string;
}
