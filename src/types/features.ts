
// Feature types for the application

export interface Feature {
  id: string;
  name: string;
  description: string;
  tier: string;
  icon: string;
  price: number;
  category?: string;
  features?: string[];
}

export interface FeatureInfo extends Feature {
  category: string;
}

export interface FeatureCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  features: Feature[];
}

export interface FeaturePurchaseResult {
  success: boolean;
  featureId?: string;
  error?: string;
  redirectUrl?: string;
  subscriptionId?: string;
}

export interface SubscriptionResponse {
  success: boolean;
  subscriptionId?: string;
  error?: string;
  url?: string;
}
