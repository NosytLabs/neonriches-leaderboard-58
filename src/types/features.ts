
import { ReactNode } from 'react';

export type Feature = 
  | 'leaderboard' 
  | 'profile' 
  | 'certificates' 
  | 'teams'
  | 'mockery'
  | 'cosmetics'
  | 'subscriptions'
  | 'marketing'
  | 'analytics'
  | 'notifications'
  | 'messaging'
  | 'visibility'
  | 'marketplace'
  | 'marketing_dashboard'
  | 'referrals';

export interface FeatureInfo {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: ReactNode;
  isPremium: boolean;
  isNew?: boolean;
  comingSoon?: boolean;
  color?: string;
  bgColor?: string;
  details?: string[];
}

export type SubscriptionTier = {
  name: string;
  price: number;
  description: string;
  features: string[];
  color: string;
  popular?: boolean;
  buttonText: string;
  priceId?: string;
  interval?: 'monthly' | 'yearly';
};
