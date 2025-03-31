
import { useState, useEffect, useCallback } from 'react';
import { useToast } from './use-toast';
import { useSound } from './sounds/use-sound';
import { useAuth } from './useAuth';
import { MockeryAction, MockeryEvent, MockedUser, UseMockery } from '@/types/mockery-types';

const useMockery = (): UseMockery => {
  const { toast } = useToast();
  const sound = useSound();
  const { user } = useAuth();
  
  const [mockedUsers, setMockedUsers] = useState<MockedUser[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  // Fetch mocked users on component mount
  useEffect(() => {
    if (user) {
      // In a real app, this would fetch from an API
      const mockMockedUsers: MockedUser[] = [
        {
          id: '1',
          username: 'MockedUser1',
          mockedBy: user.id,
          mockedAction: 'tomatoes',
          mockedTimestamp: new Date().toISOString(),
          mockedUntil: new Date(Date.now() + 3600000).toISOString(),
          tier: 'basic'
        },
        {
          id: '2',
          username: 'MockedUser2',
          mockedBy: user.id,
          mockedAction: 'eggs',
          mockedTimestamp: new Date().toISOString(),
          mockedUntil: new Date(Date.now() + 7200000).toISOString(),
          tier: 'premium'
        }
      ];
      
      setMockedUsers(mockMockedUsers);
    }
  }, [user]);
  
  // Apply mockery to a user
  const applyMockery = useCallback(async (targetId: string, targetName: string, action: MockeryAction): Promise<boolean> => {
    setIsLoading(true);
    setError(null);
    
    try {
      // In a real app, this would make an API call
      
      // Play mockery sound
      sound.playSound('mockery');
      
      // Add to mocked users list
      const newMockedUser: MockedUser = {
        id: targetId,
        username: targetName,
        mockedBy: user?.id || 'unknown',
        mockedAction: action,
        mockedTimestamp: new Date().toISOString(),
        mockedUntil: new Date(Date.now() + 3600000).toISOString(),
        tier: 'basic'
      };
      
      setMockedUsers(prev => [...prev, newMockedUser]);
      
      // Show success toast
      toast({
        title: 'Mockery Applied',
        description: `You have mocked ${targetName} with ${action}`,
        variant: 'success'
      });
      
      return true;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(errorMessage);
      
      // Show error toast
      toast({
        title: 'Mockery Failed',
        description: errorMessage,
        variant: 'destructive'
      });
      
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [sound, toast, user]);
  
  // Remove mockery from a user
  const removeMockery = useCallback(async (targetId: string): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      // In a real app, this would make an API call
      
      // Remove from mocked users list
      setMockedUsers(prev => prev.filter(user => user.id !== targetId));
      
      // Show success toast
      toast({
        title: 'Mockery Removed',
        description: 'The mockery has been removed',
        variant: 'success'
      });
      
      return true;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(errorMessage);
      
      // Show error toast
      toast({
        title: 'Failed to Remove Mockery',
        description: errorMessage,
        variant: 'destructive'
      });
      
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [toast]);
  
  // Get active mockery for a user
  const getActiveMockery = useCallback((targetId: string): MockeryEvent | null => {
    const mockedUser = mockedUsers.find(user => user.id === targetId);
    
    if (!mockedUser) return null;
    
    return {
      id: `mockery-${mockedUser.id}`,
      targetId: mockedUser.id.toString(),
      appliedBy: mockedUser.mockedBy || 'unknown',
      type: mockedUser.mockedAction || 'tomatoes',
      timestamp: mockedUser.mockedTimestamp,
      expiresAt: mockedUser.mockedUntil,
      isActive: new Date(mockedUser.mockedUntil) > new Date(),
      createdAt: mockedUser.mockedTimestamp
    };
  }, [mockedUsers]);
  
  // Check if a user is currently mocked
  const isUserMocked = useCallback((targetId: string): boolean => {
    return mockedUsers.some(user => 
      user.id === targetId && 
      new Date(user.mockedUntil) > new Date()
    );
  }, [mockedUsers]);
  
  return {
    applyMockery,
    removeMockery,
    getActiveMockery,
    isUserMocked,
    mockedUsers,
    mockedCount: mockedUsers.length,
    isLoading,
    error
  };
};

export default useMockery;
