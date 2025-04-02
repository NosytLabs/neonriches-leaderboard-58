
import React, { useState, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';
import { MockeryAction } from '@/types/mockery-types';
import { UserProfile } from '@/types/user';

export interface MockeryEvent {
  id: string;
  action: MockeryAction;
  fromUserId: string;
  targetUserId: string; // Use targetUserId for consistency
  timestamp: string;
  value: number;
  description?: string;
}

export interface MockeryResult {
  success: boolean;
  message: string;
  targetUser?: UserProfile;
  event?: MockeryEvent;
}

// Export only once
export const useMockery = () => {
  const { toast } = useToast();
  const [isMocking, setIsMocking] = useState<boolean>(false);
  const [targetUser, setTargetUser] = useState<UserProfile | null>(null);
  const [mockeryResult, setMockeryResult] = useState<MockeryResult | null>(null);

  const costForAction = useCallback((action: MockeryAction): number => {
    const costs: Record<MockeryAction, number> = {
      tomato: 5,
      egg: 10,
      thumbsDown: 15,
      shame: 20,
      jester: 30,
      mock: 50,
      challenge: 75,
      joust: 100,
      duel: 150,
      crown: 200,
      stocks: 250,
      putridEgg: 300,
      silence: 350,
      courtJester: 400,
      smokeBomb: 450,
      protection: 500,
      laugh: 25,
      fish: 35,
      taunt: 40,
      rotten_egg: 300, 
      flame: 75,
      heart: 100,
      thumbs_down: 15,
      skull: 20,
      trumpet: 45,
      confetti: 50,
      royal_decree: 500,
      shame_certificate: 200,
      insult: 50,
      humiliate: 150
    };
    
    return costs[action] || 50;
  }, []);

  const mockUser = useCallback(async (actionType: MockeryAction, user: UserProfile): Promise<MockeryResult> => {
    setIsMocking(true);
    setTargetUser(user);
    
    try {
      // In a real implementation, this would be an API call
      const mockResult: MockeryResult = {
        success: true,
        message: `Successfully mocked ${user.username} with ${actionType}`,
        targetUser: user,
        event: {
          id: `mock-${Date.now()}`,
          action: actionType,
          fromUserId: 'current-user-id',
          targetUserId: user.id,
          timestamp: new Date().toISOString(),
          value: costForAction(actionType)
        }
      };
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      setMockeryResult(mockResult);
      toast({
        title: "Mockery Successful",
        description: mockResult.message,
      });
      
      return mockResult;
    } catch (error) {
      const errorResult: MockeryResult = {
        success: false,
        message: "Failed to mock user. Please try again."
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
  }, [toast, costForAction]);

  const resetMockery = useCallback(() => {
    setTargetUser(null);
    setMockeryResult(null);
  }, []);

  return {
    targetUser,
    mockUser,
    isMocking,
    mockeryResult,
    costForAction,
    resetMockery
  };
};

// Remove duplicate default export
