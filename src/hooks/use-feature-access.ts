
import { useState, useCallback } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';

export interface Feature {
  id: string;
  name: string;
  description: string;
  tier: string[];
  price: number;
  priceId?: string;
  category: string;
}

export interface FeatureAccessHookResult {
  hasAccess: (featureId: string) => boolean;
  isLoading: boolean;
  getUpgradeUrl: (featureId: string) => string;
  getMarketingFeaturePriceId: (featureId: string) => string;
  purchaseFeatureIndividually: (featureId: string, success?: () => void) => Promise<{ success: boolean; url?: string; }>;
}

/**
 * Hook for checking feature access
 */
export const useFeatureAccess = (): FeatureAccessHookResult => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  // Check if the user has access to a feature
  const hasAccess = useCallback((featureId: string) => {
    if (!user) return false;

    // Assume certain tiers have access to specific features
    const tierFeatureMap: Record<string, string[]> = {
      'royal': ['all', 'analytics', 'marketing', 'boost', 'customize', 'premium', 'verified', 'export', 'bribery'],
      'premium': ['analytics', 'marketing', 'boost', 'customize', 'premium'],
      'pro': ['analytics', 'boost', 'customize'],
      'basic': ['basic']
    };

    // Special case for 'all' feature
    if (tierFeatureMap[user.tier]?.includes('all')) return true;

    // Check if user has direct access via purchasedFeatures
    if (user.purchasedFeatures?.includes(featureId)) return true;

    // Check if user's tier includes this feature
    return tierFeatureMap[user.tier]?.includes(featureId) || false;
  }, [user]);

  // Get feature upgrade URL (if user doesn't have access)
  const getUpgradeUrl = useCallback((featureId: string) => {
    return `/subscription?feature=${featureId}`;
  }, []);

  // Get feature price ID for marketing features
  const getMarketingFeaturePriceId = useCallback((featureId: string) => {
    const featurePriceIds: Record<string, string> = {
      'analytics': 'price_analytics',
      'marketing': 'price_marketing',
      'boost': 'price_boost',
      'customize': 'price_customize',
      'premium': 'price_premium',
      'verified': 'price_verified',
      'export': 'price_export',
      'bribery': 'price_bribery'
    };

    return featurePriceIds[featureId] || '';
  }, []);

  // Purchase a feature individually
  const purchaseFeatureIndividually = useCallback(async (
    featureId: string,
    successCallback?: () => void
  ): Promise<{ success: boolean; url?: string; }> => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to purchase this feature."
      });
      return { success: false };
    }

    setIsLoading(true);

    try {
      // In a real app, this would call an API to create a checkout session
      // For this demo, we'll just simulate a successful purchase
      await new Promise(resolve => setTimeout(resolve, 800));

      // Call success callback if provided
      if (successCallback) successCallback();

      setIsLoading(false);
      return { 
        success: true,
        // For redirection to checkout, we'd return a URL
        // url: 'https://example.com/checkout/session_id'
      };
    } catch (error) {
      console.error('Error purchasing feature:', error);
      setIsLoading(false);
      return { success: false };
    }
  }, [user, toast]);

  return {
    hasAccess,
    isLoading,
    getUpgradeUrl,
    getMarketingFeaturePriceId,
    purchaseFeatureIndividually
  };
};

export default useFeatureAccess;
export type { Feature as Feature };
