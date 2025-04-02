
import { useState, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';
import { MockeryAction, MockeryResult } from '@/types/mockery-types';
import { UserProfile } from '@/types/user';
import { ensureMockeryAction } from '@/utils/mockeryNormalizer';

export const useMockery = () => {
  const { toast } = useToast();
  const [targetUser, setTargetUser] = useState<UserProfile | null>(null);
  const [isMocking, setIsMocking] = useState(false);
  const [mockeryResult, setMockeryResult] = useState<MockeryResult | null>(null);

  // Define costs for different mockery actions
  const actionCosts: Record<MockeryAction, number> = {
    tomato: 10,
    egg: 15,
    putridEgg: 25,
    crown: 50,
    thumbsDown: 5,
    mock: 10,
    stocks: 35,
    jester: 30,
    courtJester: 30,
    silence: 40,
    taunt: 10,
    smokeBomb: 45,
    protection: 75,
    shame: 20,
    challenge: 30,
    joust: 40,
    duel: 50,
    royal_decree: 100,
    flame: 15,
    heart: 20,
    skull: 25,
    thumbs_down: 10,
    rotten_egg: 20
  };

  const mockUser = async (actionType: string, target: UserProfile): Promise<MockeryResult> => {
    try {
      setIsMocking(true);
      setTargetUser(target);
      
      // Normalize the action type to match our MockeryAction type
      const normalizedAction = ensureMockeryAction(actionType);
      
      // In a real app, this would make an API call
      // For now, we'll simulate a successful mockery
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const cost = costForAction(normalizedAction);
      
      const result: MockeryResult = {
        success: true,
        message: `You have successfully mocked ${target.username || 'the user'} with ${normalizedAction}!`,
        cost,
        actionType: normalizedAction,
        targetId: target.id
      };
      
      setMockeryResult(result);
      
      toast({
        title: "Mockery Successful",
        description: result.message,
      });
      
      return result;
    } catch (error) {
      const errorResult: MockeryResult = {
        success: false,
        message: "Failed to mock user",
        error: error instanceof Error ? error.message : "Unknown error"
      };
      
      setMockeryResult(errorResult);
      
      toast({
        title: "Mockery Failed",
        description: errorResult.message,
        variant: "destructive"
      });
      
      return errorResult;
    } finally {
      setIsMocking(false);
    }
  };

  const costForAction = (action: MockeryAction): number => {
    return actionCosts[action] || 10;
  };

  const resetMockery = useCallback(() => {
    setTargetUser(null);
    setMockeryResult(null);
  }, []);

  return {
    targetUser,
    isMocking,
    mockeryResult,
    mockUser,
    costForAction,
    resetMockery
  };
};

export default useMockery;
