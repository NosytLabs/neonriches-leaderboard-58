
// Boost effect types
import { UserTier } from './user';

export type BoostEffectType =
  | 'visibility'
  | 'highlight'
  | 'promote'
  | 'feature'
  | 'advertise'
  | 'boost'
  | 'rocket'
  | 'star'
  | 'rank'
  | 'profile'
  | 'cosmetic'
  | 'marketing';

export interface BoostEffect {
  id: string;
  name: string;
  description: string;
  type: BoostEffectType | string;
  duration: number;
  icon: string;
  tier?: string;
  price?: number;
  strength?: number;
  cssClass?: string;
  previewImage?: string;
  cost?: number;
  minTier?: UserTier;
  rarity?: string;
  durationDays?: number;
}

export interface ProfileBoost {
  id: string;
  userId: string;
  effectId: string;
  startTime: string;
  endTime: string;
  startDate?: string;
  endDate?: string;
  duration: number;
  isActive: boolean;
  level: number;
  type: string;
  strength?: number;
  appliedBy?: string;
}

export interface BoostPurchaseResult {
  success: boolean;
  boostId?: string;
  error?: string;
}

export interface BoostState {
  activeBoosts: ProfileBoost[];
  availableBoosts: BoostEffect[];
  purchasedBoosts: string[];
  isLoading: boolean;
  error: string | null;
}

export interface BoostContextType {
  boosts: BoostState;
  purchaseBoost: (boostId: string, level: number) => Promise<BoostPurchaseResult>;
  cancelBoost: (boostId: string) => Promise<boolean>;
  refreshBoosts: () => Promise<void>;
}
