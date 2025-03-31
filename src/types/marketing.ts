
export interface MarketingFeature {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: string;
  tier?: string; // Added for compatibility
  active?: boolean; // Added for compatibility
  type?: string;
  category?: string;
  enabled?: boolean;
  benefits?: string[];
  requirements?: string[];
  popularity?: number;
  isPopular?: boolean;
}

export interface MarketingEvent {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  type: string;
  status: string;
  imageUrl?: string;
  link?: string;
  target?: string;
  isRegistered?: boolean;
  registrationCount?: number;
  maxRegistrations?: number;
}

export interface MarketingEventsProps {
  events?: MarketingEvent[];
  onRegister?: (eventId: string) => Promise<boolean>;
  onUnregister?: (eventId: string) => Promise<boolean>;
  onViewDetails?: (eventId: string) => void;
}

export interface MarketingCampaign {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'paused' | 'completed' | 'draft';
  startDate: string;
  endDate: string;
  budget: number;
  spent: number;
  conversions: number;
  clicks: number;
  impressions: number;
}

export interface MarketingPerformance {
  profileViews: number;
  profileClicks: number;
  conversionRate: number;
  followers: number;
  engagement: number;
  period: 'day' | 'week' | 'month' | 'year';
  compareToLastPeriod: number;
}

export interface MarketingRecommendation {
  type: 'feature' | 'setting' | 'campaign' | 'content';
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  actionUrl?: string;
  actionText?: string;
  impact?: number;
  difficulty?: number;
  imageUrl?: string;
}
