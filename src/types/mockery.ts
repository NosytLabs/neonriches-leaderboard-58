
// Mockery types

// Define MockeryAction as a string literal union type to match how it's used in shameUtils
export type MockeryAction = 
  | 'tomatoes'
  | 'eggs' 
  | 'putridEggs'
  | 'stocks'
  | 'dunce'
  | 'silence'
  | 'courtJester'
  | 'jester'
  | 'smokeBomb'
  | 'glitterBomb'
  | 'taunt'
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
  | 'roast'
  | 'royalPie'
  | 'jokeCrown'
  | 'memeFrame';

export type MockeryTier = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'basic' | 'premium' | 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond';

export interface MockeryActionData {
  id: string;
  name: string;
  description: string;
  cost: number;
  effect: string;
  duration: number;
  icon: string;
  targetId?: string;
  targetUsername?: string;
  tier?: MockeryTier;
}

export interface MockeryEvent {
  id: string;
  actionId: string;
  senderId: string;
  targetId: string;
  timestamp: string;
  duration: number;
  isActive: boolean;
  endTime: string;
}

export interface MockeryEffectData {
  id: string;
  targetId: string;
  effect: string;
  durationRemaining: number;
  senderName: string;
  actionName: string;
}

export interface UserMockeryStatus {
  userId: string;
  activeEffects: MockeryEffectData[];
  lastMocked: string | null;
}

export interface MockUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  rank: number;
  mockeryCount?: number;
  lastMocked?: string;
  tier?: MockeryTier;
}

export interface ShameAction {
  id: string;
  name: string;
  description: string;
  tier: MockeryTier;
  cost: number;
  effect: string;
  icon: string;
}

export interface ExtendedMockeryAction extends MockeryActionData {
  tier: MockeryTier;
  targetUser?: MockUser;
}

export interface MockedUser {
  username: string;
  displayName: string;
  avatarUrl?: string;
  mockedReason: string;
  mockedTimestamp: string;
  mockedBy: string;
  mockedTier?: string;
  mockeryCount: number;
}
