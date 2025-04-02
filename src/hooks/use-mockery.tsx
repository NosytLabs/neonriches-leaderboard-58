
import { useState, useCallback } from 'react';
import { MockeryAction, MockeryEvent, MockeryUser } from '@/types/mockery-types';
import { useToast } from './use-toast';
import { useSound } from './sounds/use-sound';

// Interface for the return value of this hook
interface UseMockeryResult {
  targetUser: MockeryUser | null;
  mockUser: (action: MockeryAction, targetUser: MockeryUser) => Promise<boolean>;
  isMocking: boolean;
  mockeryResult: MockeryEvent | null;
  costForAction: (action: MockeryAction) => number;
  resetMockery: () => void;
}

// Modify to use the updated MockeryEvent type
export const useMockery = (): UseMockeryResult => {
  const [targetUser, setTargetUser] = useState<MockeryUser | null>(null);
  const [isMocking, setIsMocking] = useState<boolean>(false);
  const [mockeryResult, setMockeryResult] = useState<MockeryEvent | null>(null);
  const { toast } = useToast();
  const sound = useSound();

  // Example mock users for demo purposes
  const mockUsers: { [key: string]: MockeryUser } = {
    "user1": {
      id: "1",
      username: "kingspender",
      displayName: "King Spender",
      profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
      team: "gold",
      tier: "royal",
      rank: 1
    },
    "user2": {
      id: "2",
      username: "queenofcash",
      displayName: "Queen of Cash",
      profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
      team: "purple",
      tier: "premium",
      rank: 2
    },
    "user3": {
      id: "3",
      username: "statuschaser",
      displayName: "Status Chaser",
      profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
      team: "red",
      tier: "basic",
      rank: 3
    }
  };

  // Function to calculate cost for an action
  const costForAction = (action: MockeryAction): number => {
    // Simple cost calculation
    const costs: Partial<Record<MockeryAction, number>> = {
      tomato: 10,
      egg: 15,
      crown: 100,
      stocks: 75,
      jester: 50,
      protection: 250
    };
    return costs[action] || 20;
  };

  // Function to mock a user with a specific action
  const mockUser = useCallback(async (action: MockeryAction, user: MockeryUser): Promise<boolean> => {
    setIsMocking(true);
    setTargetUser(user);

    try {
      // In a real app, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Play a sound effect based on the action
      if (action === 'tomato') {
        sound.playSound('error');
      } else if (action === 'crown') {
        sound.playSound('royal');
      } else if (action === 'taunt') {
        sound.playSound('mock');
      } else {
        sound.playSound('notification');
      }
      
      // Create a mock result
      const result: MockeryEvent = {
        id: `mock-${Date.now()}`,
        actionType: action,
        senderId: "current-user",
        senderName: "Current User",
        targetId: user.id,
        targetName: user.username,
        timestamp: new Date().toISOString(),
        tier: 'common',
        cost: costForAction(action)
      };
      
      setMockeryResult(result);
      toast({
        title: "Mockery Applied",
        description: `You have successfully applied ${action} to ${user.username}.`,
      });
      
      return true;
    } catch (error) {
      console.error('Error mocking user:', error);
      toast({
        title: "Mockery Failed",
        description: "Unable to apply mockery at this time.",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsMocking(false);
    }
  }, [toast, sound]);

  const resetMockery = () => {
    setTargetUser(null);
    setMockeryResult(null);
  };

  return {
    targetUser,
    mockUser,
    isMocking,
    mockeryResult,
    costForAction,
    resetMockery
  };
};
