
export interface MarketingEvent {
  id: string;
  title: string;
  description: string;
  type: 'visibility' | 'contest' | 'promotion' | 'community';
  startDate: string;
  endDate: string;
  participants: number;
  rewards?: string;
  imageUrl?: string;
}

export interface MarketingMetrics {
  profileViews: number;
  impressions: number;
  clickThrough: number;
  engagement: number;
  followers: number;
  conversionRate: number;
  rankPosition?: number;
  visibilityScore?: number;
}

export interface MarketingFeature {
  id: string;
  name: string;
  description: string;
  price: number;
  tier: 'basic' | 'premium' | 'royal';
  category: 'analytics' | 'visibility' | 'customization' | 'protection';
}

export interface VisibilityBoost {
  id: string;
  name: string;
  duration: number; // in hours
  price: number;
  multiplier: number;
  description: string;
  features: string[];
}
