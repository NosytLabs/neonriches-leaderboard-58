
import { ReactNode } from 'react';

export type BoostEffectType = 
  | "visibility" 
  | "rankup" 
  | "highlight" 
  | "animated" 
  | "special"
  | "crown"
  | "sparkle"
  | "glow";

export interface BoostEffect {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  type: string;
  tier: string;
  icon: ReactNode;
  cssClass?: string;
  durationDays?: number;
  previewImage?: string;
}

export interface ProfileBoost {
  id: string;
  userId: string;
  effectId: string;
  startDate: string;
  endDate: string;
  level: number;
  type: string;
  strength: number;
  appliedBy: string;
}

export interface ProfileBoostData {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  type: string;
  tier: string;
  effectId?: string;
  startDate?: string;
  endDate?: string;
  level?: number;
  strength?: number;
}

export type BoostStrength = "low" | "medium" | "high";

export type BoostTier = "basic" | "premium" | "royal" | "legendary";
