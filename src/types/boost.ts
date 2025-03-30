
// Types for profile boosts and effects

export type BoostEffectType = 
  | 'visibility'
  | 'highlight'
  | 'promote'
  | 'feature'
  | 'advertise'
  | 'boost'
  | 'rocket'
  | 'star';

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
}

export interface ProfileBoost {
  id: string;
  userId: string;
  effectId: string;
  startTime: string;
  endTime: string;
  duration: number;
  isActive: boolean;
  level: number;
  type: string;
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
