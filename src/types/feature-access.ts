
// Feature access types for subscription and tier-based feature gating
export type Feature = 
  | 'advanced_mockery'
  | 'premium_cosmetics'
  | 'team_benefits'
  | 'enhanced_profile'
  | 'royal_certificate'
  | 'custom_titles'
  | 'premium_analytics'
  | 'royal_protection'
  | 'throne_room'
  | 'marketing_dashboard'
  | 'custom_domain'
  | 'advanced_profile'
  | 'ai_integration'
  | 'data_export'
  | 'api_access';

export interface FeatureRequirements {
  tier?: string[];
  subscription?: string[];
  minRank?: number;
  teamRequired?: boolean;
  isFounder?: boolean;
  isVIP?: boolean;
}

export interface FeatureAccess {
  feature: Feature;
  name: string;
  description: string;
  icon: string;
  requirements: FeatureRequirements;
  alternateAccess?: string;
}
