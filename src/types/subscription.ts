
// Subscription types

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
