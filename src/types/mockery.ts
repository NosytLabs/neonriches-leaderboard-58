
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
  | 'immune';

// Union of tiers for mockery actions
export type MockeryTier = 'basic' | 'premium' | 'royal' | 'legendary' | 'common' | 'uncommon' | 'rare' | 'epic';

export interface MockeryEvent {
  id: string;
  targetId: string;
  targetUsername: string;
  action: MockeryAction;
  appliedBy: string;
  appliedAt: string;
  expiresAt: string;
  tier: MockeryTier;
  isActive: boolean;
  sourceId?: string;
}

export interface MockedUser {
  id: string;
  userId?: string;
  username: string;
  displayName: string;
  profileImage: string;
  mockedReason?: string;
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

export type ShameAction = MockeryAction;
