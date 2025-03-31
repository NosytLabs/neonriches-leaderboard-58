
import { TeamColor } from './user';

export interface MarketingEvent {
  id: string;
  title: string;
  description: string;
  type: 'contest' | 'promotion' | 'giveaway' | 'tournament' | 'special';
  startDate: string;
  endDate: string;
  participants: number;
  rewards: string;
  teamRestriction?: TeamColor | null;
  tierRestriction?: string[] | null;
  requiredSpend?: number;
  imageUrl?: string;
}

export interface MarketingEventsProps {
  events: MarketingEvent[];
}

export interface MarketingFeature {
  id: string;
  name: string;
  description: string;
  price: number;
  tier: string;
  active: boolean;
  icon: string;
}

export interface MarketingMetrics {
  profileViews: number;
  linkClicks: number;
  conversionRate: number;
  rankImprovements: number;
}

export interface MarketingSettings {
  showProfile: boolean;
  allowMessages: boolean;
  featuredInLeaderboard: boolean;
  customTheme: boolean;
}
