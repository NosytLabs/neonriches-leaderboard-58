
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
  | 'silence'
  | 'courtJester'
  | 'smokeBomb'
  | 'protection'
  | 'jest'
  | 'glitterBomb'
  | 'royalPie'
  | 'jokeCrown'
  | 'memeFrame'
  | 'roast'
  | 'ridicule'
  | 'humiliate'
  | 'expose'
  | 'mock'
  | 'guillotine'
  | 'dungeons'
  | 'removal'
  | 'challenge'
  | 'target'
  | 'defeat'
  | 'immune'
  | 'fool' // Added missing action
  | 'troll'
  | 'peasant'
  | 'rat'
  | 'ghost'
  | 'skeleton'
  | 'zombie'
  | 'witch'
  | 'monster'
  | 'demon'
  | 'dragon'
  | 'king'
  | 'queen'
  | 'knight'
  | 'bishop'
  | 'rook'
  | 'pawn';

// Union of tiers for mockery actions
export type MockeryTier = 'basic' | 'premium' | 'royal' | 'legendary' | 'common' | 'uncommon' | 'rare' | 'epic' | 'bronze' | 'silver';

export interface MockeryEvent {
  id: string;
  targetId: string;
  targetUsername: string;
  targetName?: string; // Added this
  action: MockeryAction;
  appliedBy: string;
  appliedAt: string;
  expiresAt: string;
  tier: MockeryTier;
  isActive: boolean;
  sourceId?: string;
  sourceName?: string;
}

export interface MockedUser {
  id: string;
  userId?: string;
  username: string;
  displayName: string;
  profileImage: string;
  mockedReason?: string; // Made it optional
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
  totalPokes?: number;
  mostPoked?: string;
  prizePool?: number;
  totalPrizes?: number;
  totalSpent?: number;
  usersParticipating?: number;
  participantCount?: number;
  participantsCount?: number;
}

export interface MockeryActionInfo {
  icon: string;
  title: string;
  description: string;
  tier: MockeryTier;
  price: number;
  duration: number;
}

export type ShameAction = MockeryAction;

// Type alias for mocked user
export type MockUser = MockedUser;

// Add NotificationSoundOptions interface
export interface NotificationSoundOptions {
  volume?: number;
  loop?: boolean;
  delay?: number;
}
