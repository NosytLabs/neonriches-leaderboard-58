
import { ReactNode } from 'react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
  bgColor: string;
  details: string[];
  category?: string;
}

export type FeatureID = 
  | 'visibility'
  | 'analytics'
  | 'marketing'
  | 'customization'
  | 'social'
  | 'privacy'
  | 'communication'
  | 'monetization'
  | 'marketing_dashboard';

export interface FeatureInfo {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
}

export interface FeatureAccess {
  hasAccess: boolean;
  tierRequired: string;
  isComingSoon?: boolean;
}
