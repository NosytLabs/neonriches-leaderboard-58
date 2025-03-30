
import { useState, useCallback } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { createCheckoutSession } from '@/services/stripeService';

type FeatureTier = 'free' | 'standard' | 'premium' | 'royal';

interface FeatureDefinition {
  id: string;
  minTier: FeatureTier;
  individualPurchase: boolean;
  price: number;
}

// Define the features and their access requirements
const FEATURES: Record<string, FeatureDefinition> = {
  'basic_analytics': { id: 'basic_analytics', minTier: 'standard', individualPurchase: true, price: 9.99 },
  'advanced_analytics': { id: 'advanced_analytics', minTier: 'premium', individualPurchase: true, price: 19.99 },
  'multi_profile': { id: 'multi_profile', minTier: 'premium', individualPurchase: true, price: 14.99 },
  'custom_themes': { id: 'custom_themes', minTier: 'standard', individualPurchase: true, price: 7.99 },
  'priority_support': { id: 'priority_support', minTier: 'premium', individualPurchase: false, price: 0 },
  'marketing_dashboard': { id: 'marketing_dashboard', minTier: 'standard', individualPurchase: true, price: 9.99 },
  'audience_insights': { id: 'audience_insights', minTier: 'premium', individualPurchase: true, price: 24.99 },
  'unlimited_cosmetics': { id: 'unlimited_cosmetics', minTier: 'royal', individualPurchase: false, price: 0 },
  'royal_profile': { id: 'royal_profile', minTier: 'royal', individualPurchase: false, price: 0 }
};

// Map subscription tiers to their numerical level for comparison
const TIER_LEVELS: Record<string, number> = {
  'free': 0,
  'standard': 1,
  'premium': 2,
  'royal': 3
};

export interface UseFeatureAccessReturn {
  canAccessFeature: (featureId: string) => boolean;
  checkFeatureAccess: (featureId: string) => { hasAccess: boolean; reason: string };
  purchaseFeatureIndividually: (featureId: string) => Promise<boolean>;
  isLoading: boolean;
  error: string | null;
}

export const useFeatureAccess = (): UseFeatureAccessReturn => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Check if the user has access to a feature based on subscription tier or individual purchase
  const canAccessFeature = useCallback((featureId: string): boolean => {
    if (!user || !FEATURES[featureId]) return false;
    
    // Check if user has directly purchased this feature
    if (user.purchasedFeatures?.includes(featureId)) {
      return true;
    }
    
    // Check if user's subscription tier includes this feature
    const feature = FEATURES[featureId];
    const userSubscription = user.subscription;
    
    if (userSubscription && userSubscription.tier) {
      const userTierLevel = TIER_LEVELS[userSubscription.tier.toLowerCase()] || 0;
      const requiredTierLevel = TIER_LEVELS[feature.minTier];
      
      return userTierLevel >= requiredTierLevel;
    }
    
    return false;
  }, [user]);
  
  // More detailed check with reason for lack of access
  const checkFeatureAccess = useCallback((featureId: string): { hasAccess: boolean; reason: string } => {
    if (!user) {
      return { hasAccess: false, reason: 'Please log in to access this feature.' };
    }
    
    if (!FEATURES[featureId]) {
      return { hasAccess: false, reason: 'Feature not found.' };
    }
    
    if (user.purchasedFeatures?.includes(featureId)) {
      return { hasAccess: true, reason: 'Individually purchased' };
    }
    
    const feature = FEATURES[featureId];
    const userSubscription = user.subscription;
    
    if (userSubscription && userSubscription.tier) {
      const userTierLevel = TIER_LEVELS[userSubscription.tier.toLowerCase()] || 0;
      const requiredTierLevel = TIER_LEVELS[feature.minTier];
      
      if (userTierLevel >= requiredTierLevel) {
        return { hasAccess: true, reason: `Included in ${userSubscription.tier} subscription` };
      }
      
      return { 
        hasAccess: false, 
        reason: `Requires ${feature.minTier} subscription. You have ${userSubscription.tier}.` 
      };
    }
    
    return { hasAccess: false, reason: `Requires ${feature.minTier} subscription.` };
  }, [user]);
  
  // Purchase a feature individually
  const purchaseFeatureIndividually = useCallback(async (featureId: string): Promise<boolean> => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to purchase features",
        variant: "destructive"
      });
      return false;
    }
    
    const feature = FEATURES[featureId];
    
    if (!feature) {
      toast({
        title: "Feature Not Found",
        description: "The requested feature is not available",
        variant: "destructive"
      });
      return false;
    }
    
    if (!feature.individualPurchase) {
      toast({
        title: "Subscription Required",
        description: `This feature is only available as part of a ${feature.minTier} subscription`,
        variant: "destructive"
      });
      return false;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      // In a real app, this would redirect to Stripe checkout
      const checkoutSession = await createCheckoutSession(
        feature.price, 
        `${featureId} Feature`, 
        'feature', 
        featureId
      );
      
      // Simulate successful purchase for now
      setIsLoading(false);
      return true;
    } catch (err: any) {
      setError(err.message || 'Failed to purchase feature');
      toast({
        title: "Purchase Failed",
        description: err.message || 'There was an error processing your payment',
        variant: "destructive"
      });
      setIsLoading(false);
      return false;
    }
  }, [user, toast]);
  
  return {
    canAccessFeature,
    checkFeatureAccess,
    purchaseFeatureIndividually,
    isLoading,
    error
  };
};
