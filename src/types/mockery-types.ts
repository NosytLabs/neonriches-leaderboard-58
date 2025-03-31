
import { TeamColor, UserTier } from './user';
import { SoundOptions } from './sound-types';

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

export type MockeryAction = 
  | 'tomatoes'
  | 'eggs'
  | 'stocks'
  | 'crown'
  | 'protection'
  | 'dragon'
  | 'demon'
  | 'dunce'
  | 'jester'
  | 'troll'
  | 'peasant'
  | 'rat'
  | 'ghost'
  | 'skeleton'
  | 'zombie'
  | 'witch'
  | 'monster'
  | 'king'
  | 'queen'
  | 'knight'
  | 'bishop'
  | 'rook'
  | 'pawn'
  | 'target'
  | 'challenge'
  | 'dungeons'
  | 'immune'
  | 'shame';

// Extended mockery actions that include additional types
export type ExtendedMockeryAction = 
  | MockeryAction
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
  | 'fool';

// For backward compatibility
export type ShameAction = 
  | 'tomatoes'
  | 'eggs'
  | 'stocks'
  | 'shame'
  | 'crown'
  | 'dunce'
  | 'jester';

export interface MockeryEvent {
  id: string;
  targetId: string;
  targetUsername: string;
  appliedBy: string;
  appliedByUsername: string;
  action: ExtendedMockeryAction;
  timestamp: string;
  expiresAt: string;
  isActive: boolean;
}

export interface MockedUser {
  id: string;
  userId?: string;
  username: string;
  displayName: string;
  profileImage?: string;
  mockedReason: string;
  mockedTimestamp: string;
  mockedUntil: string;
  mockedBy: string;
  mockedTier?: string;
  mockeryCount?: number;
  lastMocked?: string;
  team?: TeamColor;
  tier?: UserTier;
}

export interface UseMockery {
  mockUsers: MockedUser[];
  isUserProtected: (username: string) => boolean;
  protectUser: (username: string) => void;
  isUserShamed: (username: string) => boolean;
  mockUser: (user: any, targetUsername: string, action: ExtendedMockeryAction) => void;
  getUserMockeryCount: (username: string) => number;
  getUserMockedOthersCount: (username: string) => number;
  getActiveMockery: (username: string) => MockeryEvent | null;
  applyMockery: (targetId: string, targetName: string, action: ExtendedMockeryAction) => Promise<boolean>;
  removeMockery: (targetId: string) => Promise<boolean>;
  getActiveMockeries: () => MockeryEvent[];
  getUserMockedBy: (username: string) => string | null;
  getMockeryEndTime: (username: string) => string | null;
  error: string;
}

// For backward compatibility
export type NotificationSoundOptions = SoundOptions;
