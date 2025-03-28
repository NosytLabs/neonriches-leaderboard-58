
import { User } from "./user";

export type MockeryAction = 'tomatoes' | 'eggs' | 'stocks' | 'silence' | 'courtJester';
export type MockeryTier = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
export type ShameAction = 'tomatoes' | 'eggs' | 'stocks';

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

export default {
  MockeryAction,
  MockeryTier,
  ShameAction
};
