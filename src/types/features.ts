
import { ReactNode } from 'react';

export type FeatureStatus = 'active' | 'coming_soon' | 'beta' | 'new';
export type FeatureCategory = 'profile' | 'leaderboard' | 'team' | 'social' | 'mockery' | 'cosmetic' | 'achievement' | 'certificate' | 'marketing';
export type FeatureTier = 'free' | 'basic' | 'premium' | 'royal' | 'all';

// Define the Feature type as either a string or an object
export type Feature = 
  | string 
  | {
      id: string;
      title: string;
      description: string;
      icon: ReactNode;
      color: string;
      bgColor: string;
      details: string[];
      category?: FeatureCategory;
      status?: FeatureStatus;
      tier?: FeatureTier;
    };

export interface FeatureInfo {
  id: string;
  name: string;
  description: string;
  icon: ReactNode;
  status: FeatureStatus;
  tier: FeatureTier;
  category: FeatureCategory;
}

export interface FeatureInfoProps {
  feature: Feature;
  showDetails?: boolean;
}

export interface FeatureCardProps {
  feature: Feature;
  onClick?: () => void;
  active?: boolean;
  showBadge?: boolean;
  showDescription?: boolean;
  hideStatus?: boolean;
}

export interface FeatureAccessProps {
  feature: Feature;
  children: ReactNode;
  fallback?: ReactNode;
}
