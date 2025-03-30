
// Mockery-related types
export type MockeryAction = 
  | 'tomatoes' 
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
  | 'eggs'
  | 'protection'
  | 'glitterBomb'
  | 'royalPie'
  | 'jokeCrown'
  | 'memeFrame'
  | 'roast';

export type ShameAction = 'ridicule' | 'humiliate' | 'expose' | 'mock' | MockeryAction;
export type MockeryTier = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'premium';

export interface MockeryEvent {
  id: string;
  sourceUserId?: string;
  targetUserId?: string;
  action: MockeryAction;
  timestamp: string;
  duration: number; // in milliseconds
  expiresAt?: string;
  active?: boolean;
  cost?: number;
  tier?: MockeryTier;
  type?: string;
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
  username: string;
  displayName?: string;
  profileImage?: string;
  rank?: number;
  team?: string;
  tier?: string;
  lastMocked?: string;
  mockeryCount?: number;
  userId?: string;
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
