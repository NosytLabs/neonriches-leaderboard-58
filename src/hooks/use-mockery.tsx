
import { useState, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useSound } from '@/hooks/use-sound';
import { MockeryAction, MockedUser, MockeryEvent } from '@/types/mockery-types';
import { normalizeMockeryAction } from '@/utils/mockeryNormalizer';

export const useMockery = () => {
  const [mockedUsers, setMockedUsers] = useState<MockedUser[]>([
    {
      id: "user1",
      username: "EliteSpender",
      displayName: "Elite Spender",
      profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
      tier: "royal",
      team: "red",
      // Additional properties
      action: "tomato",
      appliedBy: "system",
      appliedAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 3600000).toISOString(),
      totalSpent: 15000,
      rank: 1,
      spendStreak: 7,
      mockeryCount: 5,
      lastMockedAt: new Date().toISOString(),
      recentActions: ['tomato', 'egg']
    },
    {
      id: "user2",
      username: "MoneyThrone",
      displayName: "Money Throne",
      profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
      tier: "premium",
      team: "blue",
      // Additional properties
      action: "egg",
      appliedBy: "user123",
      appliedAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 7200000).toISOString(),
      totalSpent: 12000,
      rank: 2,
      spendStreak: 5,
      mockeryCount: 3,
      lastMockedAt: new Date().toISOString(),
      recentActions: ['egg', 'crown']
    }
  ]);
  
  const [selectedAction, setSelectedAction] = useState<MockeryAction>("crown");
  const { toast } = useToast();
  const sound = useSound();
  
  const applyMockery = useCallback((userId: string, action: MockeryAction, reason?: string) => {
    // Normalize action before storing
    const normalizedAction = normalizeMockeryAction(action as string) as MockeryAction;
    
    const mockUser: MockedUser = {
      id: userId,
      username: "MockedUser",
      displayName: "Mocked User",
      profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
      tier: "basic",
      team: "green",
      // Additional properties
      action: normalizedAction,
      appliedBy: "current-user",
      appliedAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 3600000).toISOString(),
      reason: reason,
      totalSpent: 5000,
      rank: 15,
      spendStreak: 3,
      mockeryCount: 1,
      lastMockedAt: new Date().toISOString(),
      recentActions: [normalizedAction]
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
      fromUserId: "currentUser",
      toUserId: "user1",
      action: "tomato",
      timestamp: new Date().toISOString(),
      tier: "common",
      isAnonymous: false,
      message: "You got tomatoes!",
      // Additional properties for compatibility
      cost: 10,
      targetId: "user1",
      fromId: "currentUser",
      appliedBy: "user123",
      seen: false
    },
    {
      id: "event2",
      fromUserId: "currentUser",
      toUserId: "user2",
      action: "crown",
      timestamp: new Date(Date.now() - 86400000).toISOString(),
      tier: "epic",
      isAnonymous: true,
      // Additional properties for compatibility
      cost: 50,
      targetId: "user2",
      fromId: "currentUser",
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
