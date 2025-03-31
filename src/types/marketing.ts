
import { UserTier } from './user-consolidated';

export interface MarketingFeature {
  id: string;
  name: string;
  description: string;
  price: number;
  includedInTiers: UserTier[];
  icon: string;
  type: MarketingFeatureType;
  benefits: string[];
  isIndividuallyPurchasable: boolean;
}

export type MarketingFeatureType = 
  | 'analytics'
  | 'links'
  | 'visibility'
  | 'marketing'
  | 'automation'
  | 'targeting'
  | 'personalization'
  | 'optimization';

export interface MarketingSettings {
  allowMarketingEmails: boolean;
  allowProductEmails: boolean;
  allowEventEmails: boolean;
  allowPartnerEmails: boolean;
  emailFrequency: 'daily' | 'weekly' | 'monthly' | 'never';
  emailFormat: 'html' | 'text';
  trackAnalytics: boolean;
  allowPersonalization: boolean;
  allowTargetedAds: boolean;
  allowCookies: boolean;
  allowThirdPartySharing: boolean;
}

export interface MarketingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[]; // IDs of included features
  tier: UserTier;
  isPopular: boolean;
  isFeatured: boolean;
  savings?: number; // Percentage saved compared to buying features individually
}

export interface MarketingStats {
  impressions: number;
  clicks: number;
  conversions: number;
  clickThroughRate: number;
  conversionRate: number;
  averageTimeOnProfile: number;
  totalVisitors: number;
  uniqueVisitors: number;
  referrals: number;
  referralConversions: number;
}

export interface MarketingCampaign {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  status: 'active' | 'scheduled' | 'completed' | 'paused' | 'draft';
  budget: number;
  spent: number;
  impressions: number;
  clicks: number;
  conversions: number;
  targetAudience: string[];
  features: string[]; // IDs of marketing features used
}

export interface MarketingBenefit {
  id: string;
  name: string;
  description: string;
  tier: UserTier;
  isHighlighted: boolean;
}

export interface MarketingBenefits {
  free: MarketingBenefit[];
  basic: MarketingBenefit[];
  premium: MarketingBenefit[];
  royal: MarketingBenefit[];
}

// Define feature access tiers
export interface FeatureAccessTiers {
  analytics: {
    free: string;
    basic: string;
    premium: string;
    royal: string;
  };
  links: {
    free: string;
    basic: string;
    premium: string;
    royal: string;
  };
  visibility: {
    free: string;
    basic: string;
    premium: string;
    royal: string;
  };
  marketing: {
    free: string;
    basic: string;
    premium: string;
    royal: string;
  };
}

export interface FeatureAccessHook {
  hasAccess: (feature: string) => boolean;
  getUpgradeTier: (feature: string) => UserTier | null;
  getFeatureValue: (feature: string) => string | number | boolean;
}
