
export type SubscriptionTier = 'free' | 'premium' | 'royal';
export type SubscriptionPeriod = 'monthly' | 'yearly';
export type SubscriptionStatus = 'active' | 'canceled' | 'expired' | 'paused';

export interface SubscriptionPlan {
  id: string;
  name: string;
  tier: SubscriptionTier;
  price: number;
  yearlyPrice?: number;
  features: string[];
  description: string;
  priceId?: string;
  yearlyPriceId?: string;
  popular?: boolean;
  color?: string;
}

export interface UserSubscription {
  id: string;
  userId: string;
  tier: SubscriptionTier;
  startDate: string;
  endDate: string;
  status: SubscriptionStatus;
  period: SubscriptionPeriod;
  autoRenew: boolean;
  stripeCustomerId?: string;
  stripeSubscriptionId?: string;
  cancelAt?: string;
  price: number;
}

export interface Feature {
  id: string;
  name: string;
  description: string;
  tier: SubscriptionTier;
  icon?: string;
}

export interface FeatureInfo extends Feature {
  category: string;
}
