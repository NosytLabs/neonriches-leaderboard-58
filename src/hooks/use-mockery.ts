
import { useState, useCallback } from 'react';
import { MockeryAction, MockedUser } from '@/types/mockery';
import { useSound } from '@/hooks/use-sound';
import { useToast } from '@/hooks/use-toast';
import { getMockeryName } from '@/utils/mockery';

/**
 * Hook to manage mockery functionality
 */
const useMockery = () => {
  const [mockUsers, setMockUsers] = useState<MockedUser[]>([
    {
      id: '1',
      userId: '1',
      username: 'WealthyUser',
      displayName: 'Sir Money Bags',
      profileImage: '/images/avatars/money-bags.jpg',
      tier: 'royal',
      team: 'gold',
      action: 'tomatoes',
      appliedBy: 'MockingUser',
      appliedAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
    },
    {
      id: '2',
      userId: '2',
      username: 'BigSpender',
      displayName: 'Lady Royal',
      profileImage: '/images/avatars/royal-spender.jpg',
      tier: 'premium',
      team: 'purple',
      action: 'eggs',
      appliedBy: 'JesterUser',
      appliedAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
    }
  ]);
  
  const sound = useSound();
  const { toast } = useToast();
  
  // Mock a user
  const mockUser = useCallback(async (userId: string, action: MockeryAction, reason?: string): Promise<boolean> => {
    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      // Add to mocked users
      const mockedUser: MockedUser = {
        id: userId,
        userId: userId,
        username: `User${userId}`,
        displayName: `User ${userId}`,
        profileImage: '/images/avatars/default.jpg',
        tier: 'basic',
        team: 'red',
        action: action,
        appliedBy: 'CurrentUser',
        appliedAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
        reason: reason
      };
      
      setMockUsers(prev => [...prev, mockedUser]);
      
      // Play sound effect
      sound.playSound('mockery', { volume: 0.5 });
      
      toast({
        title: "Mockery Applied",
        description: `You've successfully applied ${getMockeryName(action)} to User${userId}`,
        variant: "default"
      });
      
      return true;
    } catch (error) {
      console.error('Error mocking user:', error);
      
      toast({
        title: "Mockery Failed",
        description: "There was an error applying the mockery",
        variant: "destructive"
      });
      
      return false;
    }
  }, [sound, toast]);
  
  // Remove mockery from a user
  const removeMockery = useCallback(async (userId: string): Promise<boolean> => {
    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      // Remove from mocked users
      setMockUsers(prev => prev.filter(user => user.id !== userId));
      
      toast({
        title: "Mockery Removed",
        description: "The mockery has been successfully removed",
        variant: "default"
      });
      
      return true;
    } catch (error) {
      console.error('Error removing mockery:', error);
      
      toast({
        title: "Action Failed",
        description: "There was an error removing the mockery",
        variant: "destructive"
      });
      
      return false;
    }
  }, [toast]);
  
  // Get all mocked users
  const getMockedUsers = useCallback(() => {
    return mockUsers;
  }, [mockUsers]);
  
  // Check if user is mocked
  const isUserMocked = useCallback((userId: string) => {
    return mockUsers.some(user => user.id === userId);
  }, [mockUsers]);
  
  // Get mockery details for a user
  const getUserMockeryDetails = useCallback((userId: string) => {
    return mockUsers.find(user => user.id === userId) || null;
  }, [mockUsers]);
  
  // Check if user is immune to mockery
  const isUserImmune = useCallback((userId: string) => {
    return false; // Mock implementation
  }, []);
  
  // Check if user is protected from mockery
  const isUserProtected = useCallback((username: string) => {
    return false; // Mock implementation
  }, []);
  
  // Protect a user from mockery
  const protectUser = useCallback(async (username: string) => {
    toast({
      title: "Protection Purchased",
      description: `${username} is now protected from mockery`,
      variant: "default"
    });
    
    return true; // Mock implementation
  }, [toast]);
  
  // Check if user is publicly shamed
  const isUserShamed = useCallback((username: string) => {
    return mockUsers.some(user => user.username === username);
  }, [mockUsers]);
  
  // Get number of times user has been mocked
  const getUserMockeryCount = useCallback((username: string) => {
    return mockUsers.filter(user => user.username === username).length;
  }, [mockUsers]);
  
  // Get number of times user has mocked others
  const getUserMockedOthersCount = useCallback((username: string) => {
    return mockUsers.filter(user => user.appliedBy === username).length;
  }, [mockUsers]);
  
  // Get active mockery for a user
  const getActiveMockery = useCallback((username: string) => {
    const mockedUser = mockUsers.find(user => user.username === username);
    if (!mockedUser) return null;
    
    return {
      id: mockedUser.id,
      action: mockedUser.action,
      targetId: mockedUser.id,
      appliedBy: mockedUser.appliedBy,
      expiresAt: mockedUser.expiresAt,
      isActive: true
    };
  }, [mockUsers]);
  
  return {
    mockUser,
    removeMockery,
    getMockedUsers,
    isUserMocked,
    getUserMockeryDetails,
    isUserImmune,
    mockUsers,
    isUserProtected,
    protectUser,
    isUserShamed,
    getUserMockeryCount,
    getUserMockedOthersCount,
    getActiveMockery
  };
};

export default useMockery;
