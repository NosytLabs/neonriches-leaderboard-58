
export type Feature = 
  | 'analytics' 
  | 'link-tracking' 
  | 'advanced-profiling' 
  | 'royal-themes' 
  | 'status-boosts' 
  | 'visibility-enhancements' 
  | 'custom-badges' 
  | 'certificate-creation' 
  | 'profile-verification' 
  | 'royal-wishing-well' 
  | 'premium-alerts' 
  | 'team-management'
  | 'marketing-basic'
  | 'marketing-pro'
  | 'marketing-premium'
  | 'marketing-royal'
  | 'marketing_dashboard';

export interface FeatureInfo {
  id: Feature;
  name: string;
  description: string;
  tier: 'free' | 'basic' | 'premium' | 'royal';
  icon: string;
  category: 'analytics' | 'branding' | 'visibility' | 'engagement';
}

export interface FeatureAccessResponse {
  success: boolean;
  subscriptionId?: string;
  redirectUrl?: string;
  error?: string;
}

export interface FeaturesState {
  unlocked: Feature[];
  isLoading: boolean;
  recent: {
    feature: Feature;
    timestamp: string;
  }[];
}
