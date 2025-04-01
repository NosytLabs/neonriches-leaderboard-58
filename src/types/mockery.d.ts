
// Define all possible mockery actions
export type MockeryAction = 
  | 'taunt'
  | 'shame'
  | 'jester'
  | 'mock'
  | 'challenge'
  | 'joust'
  | 'duel'
  | 'tomatoes'
  | 'eggs'
  | 'crown'
  | 'stocks'
  | 'putridEggs'
  | 'silence'
  | 'courtJester'
  | 'smokeBomb'
  | 'protection';

export type MockeryTier = 
  | 'common' 
  | 'uncommon' 
  | 'rare' 
  | 'epic' 
  | 'legendary'
  | 'royal'
  | 'basic'
  | 'premium'
  | 'silver'
  | 'bronze';

export interface MockeryItem {
  id: string;
  type: MockeryAction;
  senderId: string;
  targetId: string;
  message: string;
  createdAt: string;
  isPublic: boolean;
  cost: number;
  team?: TeamColor;
  reactions?: number;
}

export interface MockeryResponse {
  id: string;
  mockeryId: string;
  userId: string;
  content: string;
  createdAt: string;
  isPublic: boolean;
}

export interface MockeryStats {
  sentCount: number;
  receivedCount: number;
  responseRate: number;
  favoriteType: MockeryAction;
  topTarget?: {
    userId: string;
    username: string;
    count: number;
  };
}

// Export TeamColor so it's available when importing from this file
export type TeamColor = 'red' | 'blue' | 'green' | 'gold' | 'purple' | 'none' | 'neutral';
