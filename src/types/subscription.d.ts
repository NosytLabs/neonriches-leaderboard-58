
export interface SubscriptionTier {
  id: string;
  name: string;
  description: string;
  priceMonthly: number;
  priceYearly: number;
  features: string[];
  recommended: boolean;
}

export interface Feature {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface FeatureInfo extends Feature {
  category: string;
  icon?: React.ReactNode;
  tier?: string;
}
