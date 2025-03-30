
// Define the base mockery action types
export type MockeryAction = 
  | 'tomatoes'
  | 'eggs' 
  | 'putridEggs'
  | 'stocks'
  | 'silence'
  | 'courtJester'
  | 'dunce'
  | 'smokeBomb'
  | 'glitterBomb'
  | 'royalPie'
  | 'jokeCrown'
  | 'memeFrame'
  | 'jester'
  | 'roast'
  | 'ridicule'
  | 'humiliate'
  | 'expose'
  | 'mock'
  | 'shame'
  | 'taunt'
  | 'immune'
  | 'protection'
  | 'guillotine'
  | 'dungeons'
  | 'removal';

// Subset of mockery actions that can be used for public shaming
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
  | 'shame'
  | 'smokeBomb';

export type MockeryTier = 
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'legendary'
  | 'basic'
  | 'premium'
  | 'elite'
  | 'royal';

export interface MockeryEvent {
  id: string;
  userId: string;
  targetId: string;
  action: MockeryAction;
  appliedAt: Date | string;
  expiresAt: Date | string;
  isActive: boolean;
}

export interface MockeryEffectData {
  username: string;
  action: MockeryAction;
}

export interface UserMockeryStatus {
  isProtected: boolean;
  protectionExpiresAt?: Date | string;
  activeMockery?: MockeryEvent;
  mockeryCount: number;
  mockedOthersCount: number;
}

export interface MockUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  tier?: string;
  team?: string;
  lastMocked?: string;
  mockeryCount?: number;
}

export interface ExtendedMockeryAction {
  title: string;
  description: string;
  price: number;
  tier: MockeryTier;
  icon?: string;
}
