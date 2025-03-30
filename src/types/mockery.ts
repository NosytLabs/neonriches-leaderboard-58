
// Mockery-related types
export type MockeryAction = 'tomatoes' | 'putridEggs' | 'stocks' | 'silence' | 'courtJester' | 'dunce' | 'smokeBomb' | 'eggs' | 'jester' | 'protection' | 'immune' | 'royalPie' | 'glitterBomb' | 'jokeCrown' | 'memeFrame' | 'roast' | 'ridicule' | 'humiliate' | 'expose' | 'mock' | 'shame';
export type ShameAction = 'ridicule' | 'humiliate' | 'expose' | 'mock' | 'tomatoes' | 'stocks' | 'eggs' | 'silence' | 'courtJester' | 'dunce' | 'smokeBomb' | 'shame' | 'jester' | 'putridEggs' | 'protection';
export type MockeryTier = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'premium' | 'basic';

export interface MockeryEvent {
  id: string;
  sourceUserId: string;
  targetUserId: string;
  action: MockeryAction;
  timestamp: string;
  duration: number; // in milliseconds
  expiresAt: string;
  active: boolean;
  appliedTo?: string;
  appliedBy?: string;
  type?: string;
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
  profileImage?: string;
  mockedReason?: string;
  mockedTimestamp?: string;
  mockedBy?: string;
  mockedTier?: string;
  mockeryCount?: number;
  lastMocked?: string;
}

export interface ExtendedMockeryAction {
  title: string;
  description: string;
  price: number;
  tier: MockeryTier;
  icon?: string;
}

export interface MockeryEffect {
  id: string;
  name: string;
  description: string;
  duration: number;
  tier: MockeryTier;
  icon: string;
}

export interface MockeryStats {
  totalMockeries: number;
  usersMocked: number;
  mostPopularAction: string;
  mostActiveUser: string;
}
