
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

export type MockeryTier = 
  | 'common' 
  | 'uncommon' 
  | 'rare' 
  | 'epic' 
  | 'legendary'
  | 'premium'; 

export type ShameAction = MockeryAction;

export interface MockeryUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage: string;
  tier?: string;
  lastMocked?: string;
  mockeryCount?: number;
  activeMockery?: MockeryAction;
  mockeryEndTime?: string;
  mockedBy?: string;
}

export interface MockeryStats {
  totalMocked: number;
  activelyMocked: number;
  mostUsedAction: MockeryAction;
  mostMockedUser: string;
}

export interface MockeryEffect {
  user: string;
  action: MockeryAction;
  appliedBy: string;
  appliedAt: string;
  expiresAt: string;
  isActive: boolean;
}

// For use in the shame festival
export interface MockedUser {
  username: string;
  displayName: string;
  avatarUrl: string;
  mockedReason: string;
  mockedTimestamp: string;
  mockedBy: string;
  mockedTier?: MockeryTier;
  mockeryCount: number;
}

// Alias for backward compatibility
export type MockUser = MockedUser;

export interface MockeryProtectionStatus {
  isProtected: boolean;
  expiresAt: string | null;
  purchasedAt: string | null;
}

// Additional types needed based on errors
export interface MockeryEvent {
  id: string;
  userId: string;
  targetId: string;
  action: MockeryAction;
  timestamp: string;
  expiresAt: string;
}

export interface MockeryEffectData {
  id: string;
  user: string;
  action: MockeryAction;
  appliedBy: string;
  appliedAt: string;
  expiresAt: string;
  isActive: boolean;
}

export interface UserMockeryStatus {
  isActive: boolean;
  currentEffect?: MockeryAction;
  appliedBy?: string;
  expiresAt?: string;
}

export type ExtendedMockeryAction = MockeryAction;
