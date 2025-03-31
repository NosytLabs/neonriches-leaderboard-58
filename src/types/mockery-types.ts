
import { UserProfile, UserTier, TeamColor } from '@/types/user';

export type MockeryAction = 
  | 'tomatoes'
  | 'eggs'
  | 'stocks'
  | 'crown'
  | 'dragon'
  | 'demon'
  | 'dunce'
  | 'jester'
  | 'troll'
  | 'peasant'
  | 'rat'
  | 'skeleton'
  | 'zombie'
  | 'witch'
  | 'monster'
  | 'knight'
  | 'bishop'
  | 'rook'
  | 'pawn'
  | 'king'
  | 'queen'
  | 'ghost'
  | 'target'
  | 'challenge'
  | 'immune'
  | 'shame'
  | 'protection'
  | 'putridEggs'
  | 'silence'
  | 'courtJester'
  | 'jest'
  | 'smokeBomb'
  | 'glitterBomb'
  | 'royalPie'
  | 'jokeCrown'
  | 'memeFrame'
  | 'roast'
  | 'ridicule'
  | 'humiliate'
  | 'expose'
  | 'mock'
  | 'taunt'
  | 'guillotine'
  | 'defeat'
  | 'removal'
  | 'dungeons';

export type ExtendedMockeryAction = MockeryAction | string;

export type MockeryTier = 
  | 'basic'
  | 'premium'
  | 'royal'
  | 'legendary'
  | 'rare'
  | 'epic'
  | 'common'
  | 'uncommon'
  | 'silver'
  | 'bronze';

export type ShameAction = 
  | 'tomatoes'
  | 'eggs'
  | 'stocks'
  | 'shame';

export interface MockeryEvent {
  id: string;
  action: MockeryAction;
  targetId: string;
  appliedAt: string;
  appliedBy: string;
  duration: number;
  expiresAt: string;
  isActive: boolean;
  cost?: number;
  tier?: MockeryTier;
}

export interface MockedUser {
  id: string;
  username: string;
  action: MockeryAction;
  appliedAt: string;
  appliedBy: string;
  expiresAt: string;
  userId?: string;
  displayName?: string;
  profileImage?: string;
  mockedReason?: string;
  mockedTimestamp?: string;
  mockedUntil?: string;
  mockedBy?: string;
  mockedTier?: string;
  mockeryCount?: number;
  lastMocked?: string;
  team?: string;
  tier?: string;
  mockedAction?: MockeryAction;
}

export interface ShameEffectData {
  type: ShameAction;
  timestamp: string;
}

export interface MockeryEffectData {
  username: string;
  action: MockeryAction;
}

export interface NotificationSoundOptions {
  volume?: number;
  pitch?: number;
  loop?: boolean;
}

export interface UseMockery {
  mockUsers: MockedUser[];
  isUserProtected: (username: string) => boolean;
  protectUser: (username: string) => Promise<boolean>;
  isUserShamed: (username: string) => boolean;
  mockUser: (targetId: string, action: MockeryAction) => Promise<boolean>;
  getUserMockeryCount: (username: string) => number;
  getUserMockedOthersCount: (username: string) => number;
  getActiveMockery: (username: string) => MockeryAction | null;
}
