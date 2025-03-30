
// Types for mockery features
export type MockeryAction = 
  | "eggs"
  | "putridEggs"
  | "stocks"
  | "silence"
  | "courtJester"
  | "smokeBomb"
  | "protection" 
  | "immune" 
  | "jester" 
  | "dunce" 
  | "glitterBomb" 
  | "royalPie" 
  | "jokeCrown" 
  | "memeFrame" 
  | "roast" 
  | "ridicule" 
  | "humiliate" 
  | "expose" 
  | "mock" 
  | "shame" 
  | "taunt" 
  | "guillotine" 
  | "dungeons" 
  | "removal"
  | "crown"
  | "target"
  | "challenge"
  | "defeat"
  | "jest"
  | "tomatoes";

export type ShameAction = MockeryAction;
export type ExtendedMockeryAction = MockeryAction;

export type MockeryTier = 
  | "common" 
  | "uncommon" 
  | "rare" 
  | "epic" 
  | "legendary"
  | "basic"
  | "bronze"
  | "silver"
  | "gold"
  | "platinum"
  | "diamond"
  | "premium";

export interface MockeryEvent {
  id: string;
  userId: string;
  targetUserId: string;
  mockeryType: MockeryAction;
  createdAt: string;
  expiresAt: string;
  isActive: boolean;
  // Additional properties needed based on errors
  action?: MockeryAction;
  sourceId?: string;
  sourceName?: string;
  targetId?: string;
  targetName?: string;
  appliedAt?: string;
  appliedById?: string;
  tier?: MockeryTier;
  duration?: number;
}

export interface MockeryEffectData {
  id: string;
  userId: string;
  targetId: string;
  action: MockeryAction;
  startTime: string;
  endTime: string;
  active: boolean;
}

export interface UserMockeryStatus {
  isProtected: boolean;
  isImmune: boolean;
  hasMockeryPowers: boolean;
  currentMockeryCount: number;
  remainingMockerySlots: number;
}

export interface MockedUser {
  id: string;
  username: string;
  profileImage?: string;
  tier?: string;
  mockeryType?: MockeryAction;
  expiresAt?: string;
  mockedReason?: string;
  displayName?: string;
  mockedTimestamp?: string;
  mockedBy?: string;
  userId?: string;
}

export type MockUser = MockedUser;

export interface MockeryHistoryItem {
  id: string;
  target: string;
  action: MockeryAction;
  appliedBy: string;
  appliedAt: string;
  expiresAt: string;
  isActive: boolean;
}

export interface MockeryStats {
  applied: number;
  received: number;
  active: number;
}
