
// Define all possible mockery actions
export type MockeryAction = 
  | 'taunt'
  | 'shame'
  | 'jester'
  | 'mock'
  | 'challenge'
  | 'joust'
  | 'duel'
  | 'tomato' // use singular form
  | 'egg' // use singular form
  | 'crown'
  | 'stocks'
  | 'putridEgg' // use singular form
  | 'silence'
  | 'courtJester'
  | 'smokeBomb'
  | 'protection'
  | 'thumbsDown'
  | 'laugh'
  | 'fish'
  | 'trumpet'
  | 'confetti'
  | 'rotten_egg'
  | 'flame'
  | 'thumbs_down'
  | 'heart'
  | 'skull';

// Legacy alias support
export type LegacyMockeryAction = 
  | 'tomatoes' 
  | 'eggs' 
  | 'putridEggs';

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
  | 'bronze'
  | 'standard';

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
export type TeamColor = 'red' | 'blue' | 'green' | 'gold' | 'purple' | 'none' | 'neutral' | 'silver' | 'bronze' | 'crimson';

// Add missing MockeryUser and MockeryEvent interfaces
export interface MockeryUser {
  id: string;
  username: string;
  displayName: string;
  profileImage: string;
  rank: number;
  tier: string;
  team: TeamColor;
  userId?: string; // Add this to fix use-mockery.tsx errors
}

export interface MockeryEvent {
  id: string;
  actionType: MockeryAction;
  senderId: string;
  senderName: string;
  targetId: string;
  targetName: string;
  timestamp: string;
  message?: string;
  tier: MockeryTier;
  cost?: number;
  type?: string; // Add this to fix use-mockery.tsx errors
}
