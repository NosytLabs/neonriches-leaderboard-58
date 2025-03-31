
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
  participants?: number;  // Add for MarketingEvents & MarketingHub
  rewards?: string;       // Add for MarketingEvents & MarketingHub
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

export default {
  MarketingEvent,
  MarketingFeaturePrice,
  MarketingBenefit
};
