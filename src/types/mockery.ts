
export type MockeryAction = 
  | "tomatoes" 
  | "eggs" 
  | "shame" 
  | "dungeons" 
  | "immune" 
  | "crown" 
  | "stocks" 
  | "dunce" 
  | "jester" 
  | "fool" 
  | "troll" 
  | "peasant" 
  | "rat" 
  | "silence" 
  | "banned" 
  | "scarlet" 
  | "cursed" 
  | "laughing" 
  | "poor" 
  | "muted" 
  | "exile" 
  | "challenge"
  | "protection" 
  | "putridEggs" 
  | "courtJester"
  | "royalDecree"
  | "knighthood"
  | "tarAndFeather"
  | "rotten"
  | "pillory";

export type MockeryTier = 
  | "common" 
  | "uncommon" 
  | "rare" 
  | "epic" 
  | "legendary" 
  | "basic" 
  | "premium" 
  | "royal" 
  | "bronze"
  | "silver";

export interface MockeryEvent {
  id: string;
  action: MockeryAction;
  targetId: string;
  appliedBy: string;
  appliedAt: string;
  expiresAt: string;
  tier?: MockeryTier;
  isActive: boolean;
  metadata?: Record<string, any>;
}

export interface MockedUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  action: MockeryAction;
  appliedBy: { id: string; username: string };
  appliedAt: string;
  expiresAt: string;
  tier?: string;
  team?: string;
}

export type ShameAction = MockeryAction;

// Add notification sound options
export interface NotificationSoundOptions {
  volume?: number;
  playbackRate?: number;
  loop?: boolean;
  delay?: number;
}

// Add shame effect data
export interface ShameEffectData {
  username: string;
  action: MockeryAction;
  tier?: MockeryTier;
  duration?: number;
  isActive: boolean;
}
