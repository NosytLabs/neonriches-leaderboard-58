
import { UserProfile, UserTier } from './user';

export type MockeryAction = 
  | 'tomatoes' 
  | 'eggs' 
  | 'putridEggs'
  | 'stocks' 
  | 'silence' 
  | 'courtJester'
  | 'smokeBomb'
  | 'dunce'
  | 'glitterBomb'
  | 'royalPie'
  | 'jokeCrown'
  | 'memeFrame'
  | 'roast'
  | 'ridicule'
  | 'shame'
  | 'mock'
  | 'humiliate'
  | 'expose'
  | 'guillotine'
  | 'dungeons'
  | 'removal'
  | 'crown'
  | 'target'
  | 'challenge'
  | 'jest'
  | 'protection'
  | 'immune'
  | 'defeat'
  | 'jester'
  | 'taunt';

export type ShameAction = 'tomatoes' | 'eggs' | 'stocks' | MockeryAction;
export type ExtendedMockeryAction = MockeryAction | ShameAction;

export type MockeryTier = 
  | 'common' 
  | 'uncommon' 
  | 'rare' 
  | 'epic' 
  | 'legendary'
  | 'bronze'
  | 'silver'
  | 'gold'
  | 'platinum'
  | 'diamond';

export interface MockeryEvent {
  id: string;
  userId: string;
  targetUserId: string;
  mockeryType: MockeryAction;
  createdAt: string;
  expiresAt: string;
  isActive: boolean;
  isPaid: boolean;
  amount: number;
  description?: string;
  sourceId?: string;
  sourceName?: string;
  targetId?: string;
  targetName?: string;
  action?: MockeryAction;
  appliedAt?: string;
  appliedById?: string;
  active?: boolean;
}

export interface MockeryEffectData {
  mockeryType: MockeryAction;
  targetUserId: string;
  appliedAt: string;
  expiresAt: string;
  appliedBy: string;
  tier: MockeryTier | string;
  isActive: boolean;
}

export interface UserMockeryStatus {
  isProtected: boolean;
  protectionExpiresAt?: string;
  lastMockedAt?: string;
  lastMockedBy?: string;
  mockeryCount?: number;
  activeMockeries?: MockeryEffectData[];
}

export interface MockUser extends UserProfile {
  isProtected?: boolean;
  protectionExpiresAt?: string;
  lastMocked?: string;
  mockeryCount?: number;
  mockeryType?: MockeryAction;
  mockedBy?: string;
  mockedReason?: string;
}

export interface MockedUser {
  userId: string;
  username: string;
  displayName: string;
  profileImage?: string;
  mockedReason: string;
  mockedTimestamp: string;
  mockedBy: string;
  mockedTier?: UserTier | string;
  mockeryCount: number;
}
