
import { UserTier } from './user';

export interface SubscriptionTier {
  id: string;
  name: string;
  tier: UserTier;
  price: number;
  interval: 'month' | 'year';
  features: string[];
  description: string;
  isPopular?: boolean;
  ctaText?: string;
  color?: string;
  tag?: string;
  priceMonthly?: number;
  priceYearly?: number;
  recommended?: boolean;
  priceId?: string;
  yearlyPriceId?: string;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  interval: 'month' | 'year';
  tier: UserTier;
  features: string[];
  isPopular?: boolean;
}

export interface SubscriptionResponse {
  success: boolean;
  subscriptionId?: string;
  error?: string;
  url?: string;
}

export interface CancelSubscriptionResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export interface SubscriptionContext {
  tiers: Record<UserTier, SubscriptionTier>;
  currentTier: UserTier | null;
  subscribe: (tierId: string) => Promise<SubscriptionResponse>;
  cancelSubscription: () => Promise<CancelSubscriptionResponse>;
  isSubscribing: boolean;
  error: string | null;
}

export interface Feature {
  id: string;
  name: string;
  description: string;
  price: number;
  type?: string;
  tier?: string;
}

export interface FeatureInfo extends Feature {
  category: string;
  icon?: any;
  title?: string;
}
