
import { useState, useEffect } from 'react';
import { UserProfile } from '@/types/user';
import { useFeatureAccess } from '@/hooks/use-feature-access';

interface MarketingFeatures {
  profileLinks: number;
  analytics: boolean;
  customization: boolean;
  protection: number;
}

export const useMarketing = () => {
  const { hasAccess } = useFeatureAccess();
  
  // Calculate the marketing features based on user's tier and purchased features
  const getUserMarketingFeatures = (user: UserProfile): MarketingFeatures => {
    const tier = user?.tier || 'basic';
    const purchasedFeatures = user?.purchasedFeatures || [];
    
    // Default values for each tier
    const features: MarketingFeatures = {
      profileLinks: 0,
      analytics: false,
      customization: false,
      protection: 0
    };
    
    // Apply tier-based features
    if (tier === 'basic' || hasAccess('marketing-basic')) {
      features.profileLinks = 1;
    }
    
    if (tier === 'pro' || hasAccess('marketing-pro')) {
      features.profileLinks = 3;
      features.analytics = true;
    }
    
    if (tier === 'premium' || hasAccess('marketing-premium')) {
      features.profileLinks = 5;
      features.analytics = true;
      features.customization = true;
      features.protection = 12;
    }
    
    if (tier === 'royal' || hasAccess('marketing-royal')) {
      features.profileLinks = 10;
      features.analytics = true;
      features.customization = true;
      features.protection = 24;
    }
    
    // Check for individually purchased features
    if (purchasedFeatures.includes('feature-links')) {
      features.profileLinks = Math.max(features.profileLinks, 2);
    }
    
    if (purchasedFeatures.includes('feature-analytics')) {
      features.analytics = true;
    }
    
    if (purchasedFeatures.includes('feature-customization')) {
      features.customization = true;
    }
    
    if (purchasedFeatures.includes('feature-protection')) {
      features.protection = Math.max(features.protection, 6);
    }
    
    return features;
  };
  
  return {
    getUserMarketingFeatures
  };
};
