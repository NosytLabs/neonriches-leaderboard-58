
import { Lucide } from "@/types/icons";

/**
 * Different mockery action types available in the application
 */
export type MockeryAction = 
  | 'tomatoes'
  | 'eggs'
  | 'putridEggs'
  | 'crown'
  | 'stocks'
  | 'jester'
  | 'courtJester'
  | 'shame'
  | 'silence'
  | 'smokeBomb'
  | 'protection'
  | 'taunt'
  | 'mock'
  | 'challenge'
  | 'joust'
  | 'duel'
  | 'fish'; // Adding 'fish' action that's used in mockeryUtils.ts

/**
 * Mockery tiers define rarity and price levels
 */
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

/**
 * Team colors available in the application
 */
export type TeamColor = 
  | 'red'
  | 'blue'
  | 'green'
  | 'gold'
  | 'purple'
  | 'none'
  | 'neutral'
  | 'silver'
  | 'bronze';

/**
 * Shortened type for team color
 */
export type TeamType = 
  | 'red'
  | 'blue'
  | 'green'
  | 'gold'
  | 'purple';

/**
 * Interface for mockery event data
 */
export interface MockeryEvent {
  id: string;
  action: MockeryAction;
  appliedAt: string;
  fromId: string; 
  isAnonymous: boolean;
  timestamp: string;
  expiresAt: string;
  visible?: boolean;
  appliedBy?: string;
  isActive?: boolean;
  active?: boolean;
  targetId?: string; // Added for compatibility with some components
}

/**
 * Interface for a mocked user
 */
export interface MockedUser {
  id: string;
  username: string;
  profileImage?: string;
  action: MockeryAction;
  appliedAt: string;
  expiresAt: string;
  appliedBy: string;
  reason?: string;
  tier?: string;
  team?: string;
  displayName?: string; // Added for compatibility with existing code
}

/**
 * Interface for mockery history
 */
export interface MockeryHistory {
  userId: string;
  actions: Record<MockeryAction, number>;
  received: Record<MockeryAction, number>;
  totalApplied: number;
  totalReceived: number;
}

/**
 * Interface for mockery stats
 */
export interface MockeryStats {
  received: Record<MockeryAction, number>;
  deployed: Record<MockeryAction, number>;
  [key: string]: any;
}
