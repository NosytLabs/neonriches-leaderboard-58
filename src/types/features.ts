
import { UserTier } from "./user";

export type Feature = 
  | 'analytics' 
  | 'visibility'
  | 'marketing'
  | 'advertising'
  | 'design'
  | 'mockery'
  | 'protection'
  | 'shame'
  | 'status'
  | 'cosmetics'
  | 'certificates'
  | 'royal_chat'
  | 'teams'
  | 'challenges'
  | 'nft'
  | 'boost'
  | 'marketing_dashboard'
  | 'solana';

export interface FeatureInfo {
  id: string;
  name: string;
  description: string;
  tier: UserTier;
  price: number;
  icon: string;
  title: string;
}

export interface SubscriptionTier {
  id: string;
  name: string;
  price: number;
  billingPeriod: 'monthly' | 'yearly';
  features: string[];
  description: string;
  popularFeature?: string;
  ctaText: string;
  color: string;
  discount?: number;
  compareFeatures?: Record<string, boolean | string>;
}

export interface ProfileBoostData {
  id: string;
  userId: string;
  type: string;
  name: string;
  description: string;
  startDate?: string;
  endDate?: string;
  isActive: boolean;
  duration: number;
  price: number;
  cssClass: string;
  tier: string;
}
