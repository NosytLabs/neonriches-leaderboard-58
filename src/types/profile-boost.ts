
import { LucideIcon } from "lucide-react";

// Profile boost related types
export type BoostEffectType = 
  | 'aura' 
  | 'highlight' 
  | 'background' 
  | 'nameEffect'
  | 'profileGlow'
  | 'crown'
  | 'sparkle'
  | 'glow';

export type BoostStrength = 'low' | 'medium' | 'high' | 'extreme';

export type BoostTier = 'basic' | 'premium' | 'royal' | 'legendary';

export interface BoostEffect {
  id: string;
  name: string;
  description: string;
  icon: string | LucideIcon;
  type: BoostEffectType;
  cssClass: string;
  tier: BoostTier | string;
  duration: number;
  price: number;
  durationDays?: number; // for backward compatibility
  previewImage?: string;
}

export interface ProfileBoost {
  id: string;
  userId: string;
  effectId: string;
  startDate: string | Date;
  endDate: string | Date;
  isActive: boolean;
  purchaseDate: string | Date;
}

export interface ProfileBoostData {
  id: string;
  name: string;
  description: string;
  type: BoostEffectType;
  duration: number;
  price: number;
  cssClass: string;
  tier: string;
  startDate?: string | Date;
  endDate?: string | Date;
  isActive?: boolean;
}

// Re-export types with 'export type' syntax for TS modules
export type { ProfileBoost };
export type { BoostEffect };
export type { BoostEffectType };
export type { BoostStrength };
export type { BoostTier };
export type { ProfileBoostData };
