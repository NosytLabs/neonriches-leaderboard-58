
export type MockeryTier = 
  | 'common'
  | 'uncommon' 
  | 'rare' 
  | 'epic' 
  | 'legendary'
  | 'royal'
  | 'premium'
  | 'elite'
  | 'basic';

export type MockeryAction = 
  | 'tomatoes'
  | 'eggs'
  | 'putridEggs'
  | 'stocks'
  | 'silence'
  | 'courtJester'
  | 'jester'
  | 'dunce'
  | 'smokeBomb'
  | 'glitterBomb'
  | 'immune'
  | 'protection'
  | 'royalPie'
  | 'jokeCrown'
  | 'memeFrame'
  | 'ridicule'
  | 'humiliate'
  | 'expose'
  | 'mock'
  | 'shame';

// Alias for backwards compatibility
export type ShameAction = MockeryAction;

export interface MockeryEvent {
  id: string;
  action: MockeryAction;
  targetId: string;
  sourceId: string;
  appliedAt: string; 
  expiresAt: string;
  isActive: boolean;
  metadata?: Record<string, any>;
}

export interface MockUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  tier?: string;
  team?: string;
  isProtected?: boolean;
  isVerified?: boolean;
  mockeryEvents?: MockeryEvent[];
  rank?: number;
}

export interface MockeryActionDetails {
  id: MockeryAction;
  name: string;
  description: string;
  price: number;
  tier: MockeryTier;
  duration: number; // in hours
  icon: string;
}
