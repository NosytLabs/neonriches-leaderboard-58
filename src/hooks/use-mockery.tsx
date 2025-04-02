
import { useState, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useSound } from '@/hooks/use-sound';
import { MockeryAction, MockedUser, MockeryEvent } from '@/types/mockery-types';
import { normalizeMockeryAction } from '@/utils/mockeryNormalizer';

export const useMockery = () => {
  const [mockedUsers, setMockedUsers] = useState<MockedUser[]>([
    {
      id: "1",
      userId: "user1",
      username: "EliteSpender",
      displayName: "Elite Spender",
      profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
      tier: "royal",
      team: "red",
      action: "tomato", // Fixed from "tomatoes"
      appliedBy: "system",
      appliedAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 3600000).toISOString(),
      totalSpent: 15000,
      rank: 1,
      spendStreak: 7
    },
    {
      id: "2",
      userId: "user2",
      username: "MoneyThrone",
      displayName: "Money Throne",
      profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
      tier: "premium",
      team: "blue",
      action: "egg", // Fixed from "eggs"
      appliedBy: "user123",
      appliedAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 7200000).toISOString(),
      totalSpent: 12000,
      rank: 2,
      spendStreak: 5
    }
  ]);
  
  const [selectedAction, setSelectedAction] = useState<MockeryAction>("taunt");
  const { toast } = useToast();
  const sound = useSound();
  
  const applyMockery = useCallback((userId: string, action: MockeryAction, reason?: string) => {
    // Normalize action before storing
    const normalizedAction = normalizeMockeryAction(action);
    
    const mockUser: MockedUser = {
      id: userId,
      userId: userId,
      username: "MockedUser",
      displayName: "Mocked User",
      profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
      tier: "basic",
      team: "green",
      action: normalizedAction,
      appliedBy: "current-user",
      appliedAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 3600000).toISOString(),
      reason: reason,
      totalSpent: 5000,
      rank: 15,
      spendStreak: 3
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
  
  // Add mock events for display that match MockeryEvent interface
  const mockEvents: MockeryEvent[] = [
    {
      id: "event1",
      fromUser: "currentUser", // Changed fromUserId to fromUser
      toUser: "user1", // Changed toUserId to toUser
      action: "tomatoes",
      targetId: "user1",
      fromId: "currentUser",
      timestamp: new Date().toISOString(),
      isAnonymous: false,
      message: "You got tomatoes!",
      appliedBy: "user123",
      seen: false
    },
    {
      id: "event2",
      fromUser: "currentUser", // Changed fromUserId to fromUser
      toUser: "user2", // Changed toUserId to toUser
      action: "crown",
      targetId: "user2",
      fromId: "currentUser",
      timestamp: new Date(Date.now() - 86400000).toISOString(),
      isAnonymous: true,
      appliedBy: "user456",
      seen: false
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
