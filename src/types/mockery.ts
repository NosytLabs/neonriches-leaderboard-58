
import { User } from "./user";

export type MockeryAction = 'tomatoes' | 'eggs' | 'stocks' | 'silence' | 'courtJester';
export type MockeryTier = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
export type ShameAction = 'tomatoes' | 'eggs' | 'stocks';
export type ExtendedMockeryAction = MockeryAction | 'protected' | 'immune' | 'jester' | 'dunce' | 'roast' | 'ridicule' | 'taunt' | 'drama';

export interface MockeryEffectData {
  type: MockeryAction;
  username: string;
  timestamp: string;
  expiryTime: string;
  amount: number;
  mockerId: string;
  mockerName: string;
  message?: string;
}

export interface PurchaseMockeryParams {
  targetUser: string;
  action: MockeryAction;
  amount: number;
  message?: string;
}

export interface ShameModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetUser: User | null;
}

export interface MockeryCardProps {
  action: MockeryAction;
  tier: string;
  username?: string;
  onSelect: (action: MockeryAction) => boolean;
  selected: boolean;
  className?: string;
}

export interface CountdownTimerProps {
  endTime: string;
  onComplete?: () => void;
  className?: string;
}

export interface MockeryEvent {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  featured: boolean;
  discountedActions: MockeryAction[];
  discountPercentage: number;
  action?: string; // Adding this for compatibility
}

export interface UserMockeryStatus {
  userId: string;
  activeEffects: MockeryEffectData[];
  immunityUntil?: string;
  totalReceivedMockeries: number;
  totalSentMockeries: number;
  username?: string; // Adding this for compatibility
  activeProtection?: string; // Adding this for compatibility
  activeMockeries?: MockeryEffectData[]; // Adding this for compatibility
}

export interface MockUser {
  id: string;
  username: string;
  profilePicture: string;
  tier: string | MockeryTier;
  lastMockery: string;
  mockeryCount: number;
  isProtected: boolean;
  onlineStatus: boolean;
}

// Create an actual value export for use with default exports
const mockeryTypes = {
  MockeryAction: 'MockeryAction type',
  MockeryTier: 'MockeryTier type',
  ShameAction: 'ShameAction type'
};

export default mockeryTypes;
