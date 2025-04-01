
import { useState, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Feature, FeatureAccessResponse } from '@/types/feature';

export interface FeatureAccessHookResult {
  isLoading: boolean;
  unlockFeature: (feature: Feature) => Promise<FeatureAccessResponse>;
  isUnlocking: boolean;
  accessError: string | null;
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
      if (feature === 'royal-wishing-well') {
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
        redirectUrl: `/features/${feature}`
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
  const checkFeatureAccess = useCallback(async (feature: Feature): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // For demo, let's say the user has access to these features
      const availableFeatures: Feature[] = [
        'analytics',
        'link-tracking',
        'status-boosts',
        'visibility-enhancements',
        'certificate-creation'
      ];
      
      return availableFeatures.includes(feature);
    } catch (error) {
      console.error('Error checking feature access:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    unlockFeature,
    isUnlocking,
    accessError
  };
};

// No need to re-export types that are already exported elsewhere
