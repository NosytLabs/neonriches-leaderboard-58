
export interface SubscriptionPlan {
  id: string;
  name: string;
  tier: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
  } | number;
  features: (string | { name: string; included: boolean })[];
  popular?: boolean; // Updated from isPopular to match component usage
  cta?: string;
}

export type SubscriptionBillingInterval = 'monthly' | 'yearly';

export interface SubscriptionDetails {
  plan: SubscriptionPlan;
  status: 'active' | 'cancelled' | 'expired' | 'pending';
  startDate: string;
  endDate?: string;
  nextBillingDate?: string;
  billingInterval: SubscriptionBillingInterval;
  cancelAtPeriodEnd?: boolean;
}

export interface SubscriptionManagementProps {
  user: any;
  currentSubscription?: SubscriptionDetails | null;
  onUpdateSubscription?: (planId: string, interval: SubscriptionBillingInterval) => Promise<void>;
  onCancelSubscription?: () => Promise<void>;
  onReactivateSubscription?: () => Promise<void>;
}

// Add Feature export for ProfileMarketingFeatures
export type Feature = 
  | 'marketing-basic'
  | 'marketing-premium'
  | 'marketing-royal'
  | 'profile-links'
  | 'profile-analytics'
  | 'profile-customization'
  | 'profile-protection'
  | 'visibility-enhanced'
  | 'mockery-access'
  | 'boost-effects';
