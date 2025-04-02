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
      userId: "1", // Add userId for compatibility
      username: "kingspender",
      displayName: "King Spender",
      profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
      team: "gold",
      tier: "royal",
      rank: 1,
      totalSpent: 15000 // Added required property
    },
    "user2": {
      id: "2",
      userId: "2", // Add userId for compatibility
      username: "queenofcash",
      displayName: "Queen of Cash",
      profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
      team: "purple",
      tier: "premium",
      rank: 2,
      totalSpent: 12000 // Added required property
    },
    "user3": {
      id: "3",
      userId: "3", // Add userId for compatibility
      username: "statuschaser",
      displayName: "Status Chaser",
      profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
      team: "red",
      tier: "basic",
      rank: 3,
      totalSpent: 8000 // Added required property
    }
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
        type: action, // Use type instead of action for consistency
        fromUserId: "current-user",
        toUserId: user.userId || '', // Use userId for compatibility
        timestamp: new Date().toISOString(),
        fromUser: mockUsers["user1"],
        toUser: user,
        cost: costForAction(action) // Add cost for compatibility
      };
      
      setMockeryResult(result);
      
      // Show a toast notification
      toast({
        title: 'Mockery Successful',
        description: `You used ${action} on ${user.displayName}`,
        variant: 'success'
      });
      
      return true;
    } catch (error) {
      console.error('Error mocking user:', error);
      
      toast({
        title: 'Mockery Failed',
        description: 'There was an error processing your mockery',
        variant: 'destructive'
      });
      
      return false;
    } finally {
      setIsMocking(false);
    }
  }, [toast, sound]);

  // Calculate cost for different actions
  const costForAction = useCallback((action: MockeryAction): number => {
    const costs: Record<string, number> = {
      tomato: 10,
      egg: 15,
      rotten_egg: 25,
      crown: 100,
      heart: 5,
      laugh: 5,
      skull: 30,
      thumbs_down: 5,
      flame: 20,
      putridEgg: 50,
      stocks: 75,
      shame: 60,
      protection: 150,
      jester: 40,
      courtJester: 80,
      silence: 120,
      smokeBomb: 90,
      taunt: 30,
      mock: 40,
      challenge: 100,
      joust: 200,
      duel: 200,
      fish: 25
    };
    
    return costs[action] || 10;
  }, []);

  // Reset the mockery state
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

export default useMockery;
