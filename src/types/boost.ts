
export type BoostEffectType = 'spotlight' | 'highlight' | 'glitter' | 'aura' | 'halo' | 'sparkle' | 'pulse' | 'shimmer' | 'radiance' | 'glow' | 'crown';

export interface BoostEffect {
  id: string;
  name: string;
  description: string;
  cssClass: string;
  type: BoostEffectType;
  tier: string;
  price: number;
  duration: number;
  icon: string;
  minTier?: string;
  durationDays?: number;
  previewImage?: string;
  rarity?: string;
}

export interface ProfileBoost {
  id: string;
  userId: string;
  effectId: string;
  startDate: string;
  endDate: string;
  isPermanent?: boolean;
  isActive?: boolean;
  type?: string;
  strength?: number;
}

export interface BoostPurchaseResult {
  success: boolean;
  message: string;
  boost?: ProfileBoost;
  transactionId?: string;
}

export interface UseProfileBoostReturn {
  availableBoosts: BoostEffect[];
  activeBoosts: ProfileBoost[];
  purchaseBoost: (boostId: string) => Promise<BoostPurchaseResult>;
  isLoading: boolean;
  error: string | null;
}
