
/**
 * Marketing event interface
 */
export interface MarketingEvent {
  id: string;
  title: string;
  description: string;
  type: string;
  startDate: string;
  endDate: string;
  imageUrl?: string;
  participants?: number;
  rewards?: string;
}

/**
 * Props for the MarketingEvents component
 */
export interface MarketingEventsProps {
  events: MarketingEvent[];
}

/**
 * Marketing feature interface
 */
export interface MarketingFeature {
  id: string;
  name: string;
  description: string;
  price: number;
  tier: string;
  active: boolean;
  icon: string;
}

/**
 * Marketing feature price info
 */
export interface MarketingFeaturePrice {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
  benefits: string[];
}

/**
 * Marketing benefit
 */
export interface MarketingBenefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
  available: boolean;
}

// Export type instances to avoid "used as value" errors
export const MarketingEvent: any = undefined;
export const MarketingFeaturePrice: any = undefined;
export const MarketingBenefit: any = undefined;
