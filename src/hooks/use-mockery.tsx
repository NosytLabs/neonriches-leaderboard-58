
import { useState, useCallback } from 'react';
import { MockeryAction } from '@/types/mockery-types';
import { useToast } from '@/hooks/use-toast';

interface UseMockeryOptions {
  onComplete?: () => void;
}

export const useMockery = (options: UseMockeryOptions = {}) => {
  const [selectedAction, setSelectedAction] = useState<MockeryAction | null>(null);
  const [targetUserId, setTargetUserId] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handleSelectAction = useCallback((action: MockeryAction) => {
    setSelectedAction(action);
  }, []);

  const handleSelectTarget = useCallback((userId: string) => {
    setTargetUserId(userId);
  }, []);

  const handleApplyMockery = useCallback(async () => {
    if (!selectedAction || !targetUserId) {
      toast({
        title: "Error",
        description: "Please select both an action and a target",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);
    try {
      // Here you would make the actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Success",
        description: "Mockery applied successfully",
      });

      setSelectedAction(null);
      setTargetUserId(null);
      options.onComplete?.();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to apply mockery",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  }, [selectedAction, targetUserId, toast, options]);

  const reset = useCallback(() => {
    setSelectedAction(null);
    setTargetUserId(null);
    setIsProcessing(false);
  }, []);

  return {
    selectedAction,
    targetUserId,
    isProcessing,
    handleSelectAction,
    handleSelectTarget,
    handleApplyMockery,
    reset
  };
};

export default useMockery;
