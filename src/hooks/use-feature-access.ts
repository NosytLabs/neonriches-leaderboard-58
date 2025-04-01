
import { useState, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';
import { FeatureId, Feature, FeatureAccessResponse } from '@/types/feature';

export interface FeatureAccessHookResult {
  isLoading: boolean;
  unlockFeature: (feature: Feature) => Promise<FeatureAccessResponse>;
  isUnlocking: boolean;
  accessError: string | null;
  hasAccess: (featureId: FeatureId) => boolean;
  isUserPro: boolean;
  canAccessFeature: (featureId: FeatureId) => boolean;
  purchaseFeatureIndividually: (featureId: FeatureId) => Promise<{success: boolean, url?: string}>;
}

/**
 * A hook for handling feature access and unlocking
 */
export const useFeatureAccess = (): FeatureAccessHookResult => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isUnlocking, setIsUnlocking] = useState<boolean>(false);
  const [accessError, setAccessError] = useState<string | null>(null);
  const { toast } = useToast();

  // Mock feature unlock function
  const unlockFeature = useCallback(async (feature: Feature): Promise<FeatureAccessResponse> => {
    setIsUnlocking(true);
    setAccessError(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For testing purposes, we'll "unlock" all features except one
      if (feature.id === 'royal-wishing-well') {
        setAccessError('This feature requires a subscription upgrade.');
        return {
          success: false,
          error: 'This feature requires a subscription upgrade.',
          redirectUrl: '/subscription'
        };
      }
      
      // Success path
      return {
        success: true,
        subscriptionId: 'mock-sub-123',
        redirectUrl: `/features/${feature.id}`
      };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      setAccessError(errorMessage);
      return {
        success: false,
        error: errorMessage
      };
    } finally {
      setIsUnlocking(false);
    }
  }, []);

  // A function to check if a user has access to a feature
  const hasAccess = useCallback((featureId: FeatureId): boolean => {
    // For demo, let's say the user has access to these features
    const availableFeatures: FeatureId[] = [
      'analytics',
      'link-tracking',
      'status-boosts',
      'visibility-enhancements',
      'certificate-creation',
      'marketing-basic'
    ];
    
    return availableFeatures.includes(featureId);
  }, []);

  const canAccessFeature = useCallback((featureId: FeatureId): boolean => {
    return hasAccess(featureId);
  }, [hasAccess]);
  
  // Mock function to check if user is pro
  const isUserPro = true;
  
  // Mock function to purchase feature individually
  const purchaseFeatureIndividually = useCallback(async (featureId: FeatureId): Promise<{success: boolean, url?: string}> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      success: true,
      url: `/features/${featureId}`
    };
  }, []);

  return {
    isLoading,
    unlockFeature,
    isUnlocking,
    accessError,
    hasAccess,
    isUserPro,
    canAccessFeature,
    purchaseFeatureIndividually
  };
};

// Export the Feature type
export type { FeatureId, Feature };
