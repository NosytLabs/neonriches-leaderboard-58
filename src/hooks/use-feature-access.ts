import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';

export interface Feature {
  id: string;
  name: string;
  description: string;
  price: number;
  tier: string;
  features?: string[];
}

export interface UseFeatureAccessReturn {
  hasPremiumAccess: boolean;
  hasTeamAccess: boolean;
  hasMarketingAccess: boolean;
  hasVisibilityAccess: boolean;
  hasChatAccess: boolean;
  hasAnalyticsAccess: boolean;
  hasCustomizationAccess: boolean;
  getSubscriptionPriceId: (tier: string) => string;
  getMarketingFeaturePriceId: (featureId: string) => string;
  isFeatureAccessible: (featureId: string) => boolean;
  isPremiumTier: (tier: string) => boolean;
  isLoading: boolean;
}

const useFeatureAccess = (): UseFeatureAccessReturn => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [hasPremiumAccess, setHasPremiumAccess] = useState(false);
  const [hasTeamAccess, setHasTeamAccess] = useState(false);
  const [hasMarketingAccess, setHasMarketingAccess] = useState(false);
  const [hasVisibilityAccess, setHasVisibilityAccess] = useState(false);
  const [hasChatAccess, setHasChatAccess] = useState(false);
  const [hasAnalyticsAccess, setHasAnalyticsAccess] = useState(false);
  const [hasCustomizationAccess, setHasCustomizationAccess] = useState(false);
  
  useEffect(() => {
    setIsLoading(true);
    if (user) {
      const isPremium = user.tier !== 'free' && user.tier !== 'basic';
      setHasPremiumAccess(isPremium);
      setHasTeamAccess(isPremium);
      setHasMarketingAccess(isPremium);
      setHasVisibilityAccess(isPremium);
      setHasChatAccess(isPremium);
      setHasAnalyticsAccess(isPremium);
      setHasCustomizationAccess(isPremium);
    } else {
      setHasPremiumAccess(false);
      setHasTeamAccess(false);
      setHasMarketingAccess(false);
      setHasVisibilityAccess(false);
      setHasChatAccess(false);
      setHasAnalyticsAccess(false);
      setHasCustomizationAccess(false);
    }
    setIsLoading(false);
  }, [user]);
  
  const getSubscriptionPriceId = (tier: string): string => {
    switch (tier) {
      case 'basic': return 'price_1N7x2x2eZvKYlo2ClJpoG4J9';
      case 'plus': return 'price_1N7x312eZvKYlo2C6MT6jmwU';
      case 'premium': return 'price_1N7x3G2eZvKYlo2C9qKxEi4t';
      case 'royal': return 'price_1N7x3g2eZvKYlo2C2wzk6K9i';
      default: return '';
    }
  };
  
  const getMarketingFeaturePriceId = (featureId: string): string => {
    // Mock implementation
    return `price_marketing_${featureId}`;
  };
  
  const isFeatureAccessible = (featureId: string): boolean => {
    // Mock implementation
    return true;
  };
  
  const isPremiumTier = (tier: string): boolean => {
    return tier === 'premium' || tier === 'royal';
  };
  
  return {
    hasPremiumAccess,
    hasTeamAccess,
    hasMarketingAccess,
    hasVisibilityAccess,
    hasChatAccess,
    hasAnalyticsAccess,
    hasCustomizationAccess,
    getSubscriptionPriceId,
    getMarketingFeaturePriceId,
    isFeatureAccessible,
    isPremiumTier,
    isLoading
  };
};

export default useFeatureAccess;
