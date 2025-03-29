
export type MockeryTier = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

export type MockeryAction = 
  | 'tomatoes'
  | 'eggs'
  | 'stocks'
  | 'silence'
  | 'courtJester'
  | 'jester'
  | 'protected'
  | 'immune'
  | 'dunce'
  | 'roast'
  | 'ridicule'
  | 'taunt'
  | 'drama';

export interface MockeryEvent {
  id: string;
  targetUserId: string;
  sourceUserId: string;
  action: MockeryAction;
  createdAt: string;
  expiresAt: string;
  message?: string;
  isActive: boolean;
}

export interface MockeryHistoryItem {
  id: string;
  action: MockeryAction;
  targetUsername: string;
  sourceUsername: string;
  timestamp: string;
  expiresAt: string;
  message?: string;
}

export interface UserMockeryStatus {
  hasMockedToday: boolean;
  canBeMocked: boolean;
  activeEffects: MockeryEvent[];
  lastMockedAt?: string;
  lastMockedBy?: string;
}

export const mockeryActionsByTier: Record<MockeryTier, MockeryAction[]> = {
  common: ['tomatoes', 'dunce', 'taunt'],
  uncommon: ['eggs', 'roast', 'ridicule'],
  rare: ['stocks', 'silence', 'drama'],
  epic: ['courtJester', 'jester', 'protected'],
  legendary: ['immune']
};

// Alias type for compatibility
export type ShameAction = MockeryAction;
