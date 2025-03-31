import { useState, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { NotificationSoundOptions } from '@/types/mockery';
import useNotificationSound from '@/hooks/useNotificationSound';

interface AscensionOptions {
  cost: number;
  onSuccess?: () => void;
  onError?: (message: string) => void;
}

const useQuickAscension = (options: AscensionOptions) => {
  const { toast } = useToast();
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const { playSound } = useNotificationSound();
  
  const ascend = useCallback(async () => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "You must be logged in to ascend.",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate an API call
    setTimeout(() => {
      const success = Math.random() > 0.5;
      
      if (success) {
        toast({
          title: "Ascension Successful",
          description: "You have ascended to a higher rank!",
        });
        
        playSound('success', { volume: 0.3 });
        
        if (options.onSuccess) {
          options.onSuccess();
        }
      } else {
        toast({
          title: "Ascension Failed",
          description: "Your attempt to ascend has failed.",
        });
        
        playSound('error', { volume: 0.3 });
        
        if (options.onError) {
          options.onError("Ascension failed.");
        }
      }
      
      setIsLoading(false);
    }, 2000);
  }, [toast, user, setIsLoading, playSound, options]);
  
  return {
    ascend,
    isLoading
  };
};

export default useQuickAscension;
