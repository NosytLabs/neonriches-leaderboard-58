
// Update the MockedUser initializations to include all required fields
import { useState, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useSound } from '@/hooks/use-sound';
import { MockeryAction, MockedUser, MockeryEvent } from '@/types/mockery-types';

export const useMockery = () => {
  const [mockedUsers, setMockedUsers] = useState<MockedUser[]>([
    {
      id: "1",
      userId: "user1",  // Added required field
      username: "EliteSpender",
      displayName: "Elite Spender",
      profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
      tier: "royal",
      team: "red",
      action: "tomatoes",
      appliedBy: "system",
      appliedAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 3600000).toISOString(),
      totalSpent: 15000,  // Added required field
      rank: 1,            // Added required field
      spendStreak: 7      // Added required field
    },
    {
      id: "2",
      userId: "user2",  // Added required field
      username: "MoneyThrone",
      displayName: "Money Throne",
      profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
      tier: "premium",
      team: "blue",
      action: "eggs",
      appliedBy: "user123",
      appliedAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 7200000).toISOString(),
      totalSpent: 12000,  // Added required field
      rank: 2,            // Added required field
      spendStreak: 5      // Added required field
    }
  ]);
  
  const [selectedAction, setSelectedAction] = useState<MockeryAction>("taunt");
  const { toast } = useToast();
  const sound = useSound();
  
  const applyMockery = useCallback((userId: string, action: MockeryAction, reason?: string) => {
    const mockUser: MockedUser = {
      id: userId,
      userId: userId,  // Added required field
      username: "MockedUser",
      displayName: "Mocked User",
      profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
      tier: "basic",
      team: "green",
      action: action,
      appliedBy: "current-user",
      appliedAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 3600000).toISOString(),
      reason: reason,
      totalSpent: 5000,  // Added required field
      rank: 15,          // Added required field
      spendStreak: 3     // Added required field
    };
    
    setMockedUsers(prev => [...prev, mockUser]);
    
    toast({
      title: "Mockery Applied",
      description: `You've applied ${action} to user ${userId}`,
      variant: "default"
    });
    
    sound.playSound("notification");
    
    return mockUser;
  }, [toast, sound]);
  
  const removeMockery = useCallback((userId: string) => {
    setMockedUsers(prev => prev.filter(user => user.id !== userId));
    
    toast({
      title: "Mockery Removed",
      description: `You've removed mockery from user ${userId}`,
      variant: "default"
    });
  }, [toast]);
  
  // Add mock events for display
  const mockEvents: MockeryEvent[] = [
    {
      id: "event1",
      action: "tomatoes",
      targetId: "user1",
      fromId: "currentUser",
      timestamp: new Date().toISOString(),
      isAnonymous: false,
      message: "You got tomatoes!",
      appliedBy: "user123"  // Added for compatibility
    },
    {
      id: "event2",
      action: "crown",
      targetId: "user2",
      fromId: "currentUser",
      timestamp: new Date(Date.now() - 86400000).toISOString(),
      isAnonymous: true,
      appliedBy: "user456"  // Added for compatibility
    }
  ];
  
  return {
    mockedUsers,
    selectedAction,
    setSelectedAction,
    applyMockery,
    removeMockery,
    mockEvents
  };
};

export default useMockery;
