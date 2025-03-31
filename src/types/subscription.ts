
export interface Subscription {
  id: string;
  userId: string;
  planId: string;
  planName: string;
  status: 'active' | 'cancelled' | 'expired' | 'paused' | 'pending';
  price: number;
  interval: 'monthly' | 'yearly' | 'quarterly';
  startDate: string;
  nextBillingDate: string;
  endDate?: string;
  cancelledAt?: string;
  paymentMethod?: string;
  features?: string[];
  autoRenew?: boolean;
  trialEndDate?: string;
  isInTrial?: boolean;
}

export type SubscriptionTier = 'free' | 'basic' | 'premium' | 'royal';

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  interval: string;
  description: string;
  features: string[];
  color: string;
  maxLinks: number;
  maxProfiles: number;
  analyticsAccess: boolean;
  customization: boolean;
  protectionDuration: number;
  priceMonthly: number;
  priceYearly: number;
}

export interface Feature {
  id: string;
  name: string;
  description: string;
  isAvailable: boolean;
  isUnlocked: boolean;
  tier: SubscriptionTier;
  price?: number;
  category?: string;
}

export interface FeatureInfo {
  name: string;
  description: string;
  limits: {
    free: string;
    basic: string;
    premium: string;
    royal: string;
  };
}

export interface SubscriptionStatus {
  isActive: boolean;
  currentPlan: SubscriptionTier;
  expiryDate?: string;
  daysLeft?: number;
  autoRenew?: boolean;
}
