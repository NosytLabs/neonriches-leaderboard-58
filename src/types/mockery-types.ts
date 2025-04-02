
import { UserProfile } from './user';

export type MockeryTier = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'royal';

export interface MockeryItem {
  id: string;
  content: string;
  tier: MockeryTier;
  cost: number;
  author?: string;
  createdAt?: string;
  approvedAt?: string;
  approvedBy?: string;
  isApproved: boolean;
  usageCount: number;
  category: string;
  tags: string[];
}

export interface MockeryEffect {
  id: string;
  name: string;
  description: string;
  tier: MockeryTier;
  duration: number; // in days
  cost: number;
  effectStrength: number;
  appliesTo: 'profile' | 'rank' | 'visibility' | 'all';
  visualEffect?: string;
  soundEffect?: string;
}

export interface MockeryConfig {
  enabled: boolean;
  costMultiplier: number;
  tierUnlockLevel: Record<MockeryTier, number>;
  maxMockeryPerDay: number;
  protectionCost: Record<MockeryTier, number>;
  cooldownPeriod: number; // hours
}

export interface UserMockeryStats {
  mockeryUsed: number;
  mockeryReceived: number;
  protectionPurchased: number;
  totalSpent: number;
  mockeryHistory: {
    date: string;
    targetUser: string;
    mockeryId: string;
    cost: number;
  }[];
  favorites: string[];
}

export interface MockeryProps {
  targetUser: UserProfile;
  currentUser: UserProfile;
  onMockeryUsed?: (mockery: MockeryItem, targetUser: UserProfile) => void;
  availableMockery: MockeryItem[];
  userStats?: UserMockeryStats;
  config?: MockeryConfig;
}
