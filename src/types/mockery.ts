
export type MockeryAction = 
  'tomatoes' | 'eggs' | 'stocks' | 'dunce' | 'jester' | 'crown' | 
  'taunt' | 'shame' | 'putridEggs' | 'silence' |
  'courtJester' | 'smokeBomb' | 'protection' | 'immune' | 'glitterBomb' |
  'royalPie' | 'jokeCrown' | 'memeFrame' | 'roast' | 'ridicule' | 
  'humiliate' | 'expose' | 'mock' | 'guillotine' | 'dungeons' | 
  'removal' | 'jest' | 'challenge' | 'target' | 'defeat';

export type MockeryTier = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'basic' | 'premium' | 'royal';

export interface MockeryEvent {
  id: string;
  userId: string;
  targetId: string;
  action: MockeryAction;
  mockeryType: string;
  tier: MockeryTier;
  timestamp: number;
  until: number;
  isActive: boolean;
  createdAt: string;
  sourceId?: string;
  appliedAt?: number;
  expiresAt?: number;
  active?: boolean;
}

export interface MockedUser {
  id: string;
  userId: string;
  username: string;
  displayName: string;
  profileImage: string;
  tier: UserTier;
  rank?: number;
  team: TeamType;
  hasProtection?: boolean;
  mockedReason?: string;
  mockedTimestamp?: string;
  mockedBy?: string;
  mockedTier?: string;
  mockeryCount?: number;
  lastMocked?: string;
  activeEffects?: MockeryEvent[];
}

export type ShameAction = MockeryAction;
