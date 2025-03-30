
import { User } from './user';

export type MockeryTier = 
  | 'common' 
  | 'uncommon' 
  | 'rare' 
  | 'epic' 
  | 'legendary' 
  | 'premium' 
  | 'basic' 
  | 'royal'
  | 'elite';

export type MockeryAction = 
  | 'tomatoes' 
  | 'eggs' 
  | 'putridEggs'
  | 'stocks' 
  | 'silence' 
  | 'courtJester'
  | 'dunce'
  | 'smokeBomb'
  | 'jester'
  | 'ridicule' 
  | 'humiliate' 
  | 'expose' 
  | 'mock' 
  | 'shame'
  | 'immune'
  | 'protection'
  | 'glitterBomb'
  | 'royalPie'
  | 'jokeCrown'
  | 'memeFrame'
  | 'roast'
  | 'taunt'
  | 'guillotine'
  | 'dungeons'
  | 'removal';

export interface MockeryEvent {
  id: string;
  sourceUserId?: string;
  targetUserId?: string;
  targetId?: string;
  sourceId?: string;
  action?: MockeryAction;
  actionType?: MockeryAction;
  type?: string;
  timestamp: string | Date;
  duration: number;
  expiresAt?: string;
  active?: boolean;
  cost?: number;
  tier?: MockeryTier;
  appliedTo?: string;
  appliedBy?: string;
}

export interface MockeryEffectData {
  username: string;
  action: MockeryAction;
  duration?: number;
  tier?: MockeryTier;
  id?: string;
  name?: string;
  description?: string;
  price?: number;
  imageUrl?: string;
  animationClass?: string;
}

export interface UserMockeryStatus {
  isProtected?: boolean;
  protectionExpiresAt?: string;
  activeMockery?: MockeryEvent;
  mockeryCount?: number;
  mockedOthersCount?: number;
  activeEffects?: MockeryEvent[];
  protectionExpiry?: string | null;
  lastMocked?: string | null;
}

export interface MockUser {
  id?: string;
  userId?: string;
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
  displayName?: string;
  avatarUrl?: string;
  mockedReason?: string;
  mockedTimestamp?: string;
  mockedBy?: string;
  mockedTier?: string;
  mockeryCount?: number;
  userId?: string;
  rank?: number;
  amountSpent?: number;
  team?: string | null;
  profileImage?: string;
  tier?: string;
  lastMocked?: string;
}

export type ExtendedMockeryAction = MockeryAction | 'protection';

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

export type ShameAction = 
  | 'tomatoes' 
  | 'eggs' 
  | 'putridEggs'
  | 'stocks' 
  | 'silence' 
  | 'courtJester'
  | 'dunce'
  | 'jester'
  | 'ridicule' 
  | 'shame';
