
import { useState, useEffect, useMemo } from 'react';
import { useAuth } from '@/contexts';
import { UserProfile } from '@/types/user';

export interface Feature {
  id: string;
  name: string;
  description: string;
  minTier: string;
  isPro: boolean;
  isEnabled: boolean;
  price?: number;
}

export interface UseFeatureAccessReturn {
  features: Feature[];
  isFeatureEnabled: (featureId: string) => boolean;
  isProFeature: (featureId: string) => boolean;
  isUserPro: boolean;
  getUpgradeUrl: (featureId: string) => string;
  getFeaturePriceId: (featureId: string) => string;
  getMarketingFeaturePriceId: (featureId: string) => string;
  canUseFeature: (featureId: string) => boolean;
  shouldShowUpgrade: (featureId: string) => boolean;
}

const useFeatureAccess = (): UseFeatureAccessReturn => {
  const { user } = useAuth();
  const [features, setFeatures] = useState<Feature[]>([]);

  const userTier = user?.tier || 'basic';
  const isUserPro = ['premium', 'royal', 'diamond'].includes(userTier);

  useEffect(() => {
    // In a real application, this would likely come from an API
    const availableFeatures: Feature[] = [
      {
        id: 'analytics',
        name: 'Advanced Analytics',
        description: 'Access detailed profile analytics, visitor demographics, and engagement metrics.',
        minTier: 'premium',
        isPro: true,
        isEnabled: true
      },
      {
        id: 'custom_profile',
        name: 'Custom Profile Styling',
        description: 'Unlock exclusive profile customizations, themes, and animations.',
        minTier: 'premium',
        isPro: true,
        isEnabled: true
      },
      {
        id: 'visibility',
        name: 'Enhanced Visibility',
        description: 'Boost your profile visibility in the leaderboard with premium placement.',
        minTier: 'premium',
        isPro: true,
        isEnabled: true
      },
      {
        id: 'unlimited_links',
        name: 'Unlimited Profile Links',
        description: 'Add as many links as you want to your profile, without restrictions.',
        minTier: 'plus',
        isPro: false,
        isEnabled: true
      },
      {
        id: 'scheduler',
        name: 'Profile Boost Scheduler',
        description: 'Schedule automatic profile boosts during peak hours.',
        minTier: 'royal',
        isPro: true,
        isEnabled: false
      }
    ];
    
    setFeatures(availableFeatures);
  }, []);

  const isFeatureEnabled = useMemo(() => {
    return (featureId: string) => {
      const feature = features.find(f => f.id === featureId);
      if (!feature) return false;
      return feature.isEnabled;
    };
  }, [features]);

  const isProFeature = useMemo(() => {
    return (featureId: string) => {
      const feature = features.find(f => f.id === featureId);
      if (!feature) return false;
      return feature.isPro;
    };
  }, [features]);

  const canUseFeature = useMemo(() => {
    return (featureId: string) => {
      const feature = features.find(f => f.id === featureId);
      if (!feature || !feature.isEnabled) return false;
      
      const tierLevels = {
        'free': 0,
        'basic': 1,
        'plus': 2,
        'premium': 3,
        'royal': 4,
        'diamond': 5
      };
      
      const userTierLevel = tierLevels[userTier as keyof typeof tierLevels] || 0;
      const requiredTierLevel = tierLevels[feature.minTier as keyof typeof tierLevels] || 0;
      
      return userTierLevel >= requiredTierLevel;
    };
  }, [features, userTier]);

  const shouldShowUpgrade = useMemo(() => {
    return (featureId: string) => {
      return !canUseFeature(featureId) && isFeatureEnabled(featureId);
    };
  }, [canUseFeature, isFeatureEnabled]);

  const getUpgradeUrl = (featureId: string): string => {
    return `/subscription?feature=${featureId}`;
  };

  const getFeaturePriceId = (featureId: string): string => {
    // In a real application, this would map features to price IDs in your payment processor
    const priceMap: Record<string, string> = {
      'analytics': 'price_analytics_monthly',
      'custom_profile': 'price_custom_profile',
      'visibility': 'price_visibility_boost',
      'unlimited_links': 'price_unlimited_links',
      'scheduler': 'price_scheduler'
    };
    
    return priceMap[featureId] || '';
  };

  const getMarketingFeaturePriceId = (featureId: string): string => {
    // Mock implementation - would be replaced with actual price IDs
    return `price_marketing_${featureId}`;
  };

  return {
    features,
    isFeatureEnabled,
    isProFeature,
    isUserPro,
    getUpgradeUrl,
    getFeaturePriceId,
    getMarketingFeaturePriceId,
    canUseFeature,
    shouldShowUpgrade
  };
};

export default useFeatureAccess;
