
export type MockeryAction = 
  | 'tomatoes' 
  | 'putridEggs' 
  | 'stocks' 
  | 'silence' 
  | 'courtJester' 
  | 'dunce' 
  | 'smokeBomb'
  | 'jester'
  | 'ridicule'
  | 'humiliate'
  | 'expose'
  | 'mock'
  | 'shame'
  | 'immune'
  | 'eggs'
  | 'protection'
  | 'glitterBomb'
  | 'royalPie'
  | 'jokeCrown'
  | 'memeFrame'
  | 'roast'; 

export type MockeryTier = 
  | 'common' 
  | 'uncommon' 
  | 'rare' 
  | 'epic' 
  | 'legendary'
  | 'premium'; 

export type ShameAction = MockeryAction;

export interface MockeryUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage: string;
  tier?: string;
  lastMocked?: string;
  mockeryCount?: number;
  activeMockery?: MockeryAction;
  mockeryEndTime?: string;
  mockedBy?: string;
}

export interface MockeryStats {
  totalMocked: number;
  activelyMocked: number;
  mostUsedAction: MockeryAction;
  mostMockedUser: string;
}

export interface MockeryEffect {
  user: string;
  action: MockeryAction;
  appliedBy: string;
  appliedAt: string;
  expiresAt: string;
  isActive: boolean;
}

// For use in the shame festival
export interface MockedUser {
  username: string;
  displayName: string;
  avatarUrl: string;
  mockedReason: string;
  mockedTimestamp: string;
  mockedBy: string;
  mockedTier?: MockeryTier;
  mockeryCount: number;
}

// Alias for backward compatibility
export type MockUser = MockedUser;

export interface MockeryProtectionStatus {
  isProtected: boolean;
  expiresAt: string | null;
  purchasedAt: string | null;
}

// Additional types needed based on errors
export interface MockeryEvent {
  id: string;
  userId: string;
  targetId: string;
  action: MockeryAction;
  timestamp: string;
  expiresAt: string;
}

export interface MockeryEffectData {
  id: string;
  user: string;
  action: MockeryAction;
  appliedBy: string;
  appliedAt: string;
  expiresAt: string;
  isActive: boolean;
}

export interface UserMockeryStatus {
  isActive: boolean;
  currentEffect?: MockeryAction;
  appliedBy?: string;
  expiresAt?: string;
}

export type ExtendedMockeryAction = MockeryAction;

// Predefined mockery effects based on the MockeryAction type
export const MOCKERY_EFFECTS: Record<MockeryAction, string> = {
  tomatoes: "Pelted with virtual tomatoes",
  putridEggs: "Splattered with rotten eggs",
  stocks: "Locked in the virtual stocks",
  silence: "Temporary voice removal",
  courtJester: "Forced to wear jester attire",
  dunce: "Wearing a dunce cap",
  smokeBomb: "Clouded in smoke",
  jester: "Made to perform as a jester",
  ridicule: "Subject to public ridicule",
  humiliate: "Public humiliation",
  expose: "Embarrassing secrets revealed",
  mock: "General mockery",
  shame: "Public shaming",
  immune: "Protected from mockery",
  eggs: "Egged by the community",
  protection: "Protected by royal decree",
  glitterBomb: "Covered in glitter",
  royalPie: "Hit with a royal pie",
  jokeCrown: "Wearing the crown of jokes",
  memeFrame: "Framed in memes",
  roast: "Thoroughly roasted"
};

// Predefined tiers and their descriptions
export const MOCKERY_TIERS: Record<MockeryTier, { name: string, description: string }> = {
  common: {
    name: "Common",
    description: "Basic mockery effects available to all users"
  },
  uncommon: {
    name: "Uncommon",
    description: "Slightly more elaborate mockery effects"
  },
  rare: {
    name: "Rare",
    description: "Distinctive mockery effects with enhanced visibility"
  },
  epic: {
    name: "Epic",
    description: "Premium mockery effects with special animations"
  },
  legendary: {
    name: "Legendary",
    description: "The most prestigious mockery effects available"
  },
  premium: {
    name: "Premium",
    description: "Special effects only available to premium members"
  }
};
