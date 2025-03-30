
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
  | "diamond";

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
}

export interface MockedUser {
  id: string;
  username: string;
  profileImage?: string;
  tier?: UserTier;
  mockeryType?: MockeryAction;
  expiresAt?: string;
  mockedReason?: string;
}

export interface MockeryProtection {
  id: string;
  userId: string;
  type: "shield" | "immunity" | "deflect";
  createdAt: string;
  expiresAt: string;
  isActive: boolean;
}

// Re-export for use in other files
export type { MockeryAction, MockeryEvent, MockeryTier };
