
import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { useSound } from '@/hooks/use-sound';
import { 
  MockeryAction, 
  MockeryEvent, 
  MockedUser,
  MockeryTier
} from '@/types/mockery-types';
import { User } from '@/types/user';
import { 
  getMockeryActionTitle,
  getMockeryActionDescription,
  getMockeryActionPrice
} from '@/utils/mockery';

// Mock data for development
const mockMockedUsers: MockedUser[] = [
  {
    id: "1",
    username: "SirSpendALot",
    displayName: "Sir Spend-A-Lot",
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
    mockedReason: "Subjected to rotten tomatoes",
    mockedTimestamp: new Date().toISOString(),
    mockedUntil: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    mockedBy: "KingMidas",
    mockedTier: "basic",
    mockeryCount: 3,
    lastMocked: new Date().toISOString(),
    team: "red",
    tier: "premium"
  },
  {
    id: "2",
    username: "LadyFortune",
    displayName: "Lady Fortune",
    profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
    mockedReason: "Placed in the stocks",
    mockedTimestamp: new Date().toISOString(),
    mockedUntil: new Date(Date.now() + 48 * 60 * 60 * 1000).toISOString(),
    mockedBy: "KingMidas",
    mockedTier: "premium",
    mockeryCount: 1,
    lastMocked: new Date().toISOString(),
    team: "blue",
    tier: "royal"
  }
];

const mockEvents: MockeryEvent[] = [
  {
    id: "1",
    type: "tomatoes",
    appliedBy: "KingMidas",
    targetId: "1",
    isActive: true,
    createdAt: new Date().toISOString(),
    expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    tier: "basic"
  },
  {
    id: "2",
    type: "stocks",
    appliedBy: "KingMidas",
    targetId: "2",
    isActive: true,
    createdAt: new Date().toISOString(),
    expiresAt: new Date(Date.now() + 48 * 60 * 60 * 1000).toISOString(),
    tier: "premium"
  }
];

/**
 * Hook for managing mockery features
 */
const useMockery = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const sound = useSound();
  
  const [mockedUsers, setMockedUsers] = useState<MockedUser[]>(mockMockedUsers);
  const [mockeryEvents, setMockeryEvents] = useState<MockeryEvent[]>(mockEvents);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  // Fetch mocked users on component mount
  useEffect(() => {
    const fetchMockedUsers = async () => {
      setIsLoading(true);
      try {
        // This would normally be an API call
        // Simulating API response with mock data
        setMockedUsers(mockMockedUsers);
        setMockeryEvents(mockEvents);
        setError(null);
      } catch (err) {
        setError('Failed to fetch mocked users');
        console.error('Error fetching mocked users:', err);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchMockedUsers();
  }, []);
  
  // Apply mockery to a user
  const applyMockery = useCallback(async (
    targetId: string, 
    targetName: string, 
    action: MockeryAction
  ): Promise<boolean> => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "You must be logged in to perform mockery actions."
      });
      return false;
    }
    
    setIsLoading(true);
    try {
      // This would normally be an API call
      // Simulating API response
      
      const mockeryPrice = getMockeryActionPrice(action);
      const mockeryTitle = getMockeryActionTitle(action);
      const mockeryTier = "basic" as MockeryTier;
      
      const expiresAt = new Date();
      expiresAt.setHours(expiresAt.getHours() + 24); // 24 hour mockery
      
      const newEvent: MockeryEvent = {
        id: `mock-${Date.now()}`,
        type: action,
        appliedBy: user.username,
        targetId: targetId,
        isActive: true,
        createdAt: new Date().toISOString(),
        expiresAt: expiresAt.toISOString(),
        tier: mockeryTier
      };
      
      // Add to mockery events
      setMockeryEvents(prev => [...prev, newEvent]);
      
      // Check if user is already mocked
      const existingMockedUser = mockedUsers.find(u => u.id === targetId);
      
      if (existingMockedUser) {
        // Update existing mocked user
        setMockedUsers(prev => prev.map(u => 
          u.id === targetId 
            ? {
                ...u,
                mockedReason: `Subjected to ${mockeryTitle.toLowerCase()}`,
                mockedTimestamp: new Date().toISOString(),
                mockedUntil: expiresAt.toISOString(),
                mockedBy: user.username,
                mockedTier: mockeryTier,
                mockeryCount: (u.mockeryCount || 0) + 1,
                lastMocked: new Date().toISOString()
              }
            : u
        ));
      } else {
        // Add new mocked user
        const newMockedUser: MockedUser = {
          id: targetId,
          username: targetName,
          profileImage: "", // This would normally come from the API
          mockedReason: `Subjected to ${mockeryTitle.toLowerCase()}`,
          mockedTimestamp: new Date().toISOString(),
          mockedUntil: expiresAt.toISOString(),
          mockedBy: user.username,
          mockedTier: mockeryTier,
          mockeryCount: 1,
          lastMocked: new Date().toISOString()
        };
        
        setMockedUsers(prev => [...prev, newMockedUser]);
      }
      
      // Play sound effect
      sound.playSound('mockery', { volume: 0.5 });
      
      toast({
        title: "Mockery Applied",
        description: `You have subjected ${targetName} to ${mockeryTitle.toLowerCase()}!`,
        variant: "success"
      });
      
      return true;
    } catch (err) {
      setError('Failed to apply mockery');
      console.error('Error applying mockery:', err);
      
      toast({
        title: "Mockery Failed",
        description: "There was an error applying the mockery effect.",
        variant: "destructive"
      });
      
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [user, toast, sound]);
  
  // Remove mockery from a user
  const removeMockery = useCallback(async (targetId: string): Promise<boolean> => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "You must be logged in to perform mockery actions."
      });
      return false;
    }
    
    setIsLoading(true);
    try {
      // This would normally be an API call
      // Simulating API response
      
      // Deactivate all mockery events for this target
      setMockeryEvents(prev => prev.map(event => 
        event.targetId === targetId
          ? { ...event, isActive: false }
          : event
      ));
      
      // Remove user from mocked users list
      setMockedUsers(prev => prev.filter(u => u.id !== targetId));
      
      toast({
        title: "Mockery Removed",
        description: "The mockery effect has been removed.",
        variant: "success"
      });
      
      return true;
    } catch (err) {
      setError('Failed to remove mockery');
      console.error('Error removing mockery:', err);
      
      toast({
        title: "Action Failed",
        description: "There was an error removing the mockery effect.",
        variant: "destructive"
      });
      
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [user, toast]);
  
  // Get active mockery for a user
  const getActiveMockery = useCallback((targetId: string): MockeryEvent | null => {
    return mockeryEvents.find(event => 
      event.targetId === targetId && 
      event.isActive && 
      new Date(event.expiresAt) > new Date()
    ) || null;
  }, [mockeryEvents]);
  
  // Check if a user is currently mocked
  const isUserMocked = useCallback((targetId: string): boolean => {
    return !!getActiveMockery(targetId);
  }, [getActiveMockery]);
  
  // Check if a user is protected from mockery
  const isUserProtected = useCallback((username: string): boolean => {
    const event = mockeryEvents.find(event => 
      event.targetId === username && 
      event.type === 'protection' && 
      event.isActive && 
      new Date(event.expiresAt) > new Date()
    );
    
    return !!event;
  }, [mockeryEvents]);
  
  // Apply protection to a user
  const protectUser = useCallback((username: string): boolean => {
    if (!user) return false;
    
    try {
      // Create protection event
      const expiresAt = new Date();
      expiresAt.setDate(expiresAt.getDate() + 7); // 7 day protection
      
      const newEvent: MockeryEvent = {
        id: `protect-${Date.now()}`,
        type: 'protection',
        appliedBy: user.username,
        targetId: username,
        isActive: true,
        createdAt: new Date().toISOString(),
        expiresAt: expiresAt.toISOString(),
        tier: 'premium'
      };
      
      // Add to mockery events
      setMockeryEvents(prev => [...prev, newEvent]);
      
      return true;
    } catch (err) {
      console.error('Error protecting user:', err);
      return false;
    }
  }, [user]);
  
  // Check if a user is shamed
  const isUserShamed = useCallback((username: string): boolean => {
    return isUserMocked(username);
  }, [isUserMocked]);
  
  // Mock a user (wrapper for applyMockery)
  const mockUser = useCallback((
    mockingUser: User,
    targetUsername: string,
    action: MockeryAction
  ): boolean => {
    applyMockery(targetUsername, targetUsername, action);
    return true;
  }, [applyMockery]);
  
  // Get mockery count for a user
  const getUserMockeryCount = useCallback((username: string): number => {
    const mockedUser = mockedUsers.find(u => u.username === username);
    return mockedUser?.mockeryCount || 0;
  }, [mockedUsers]);
  
  // Get count of users mocked by this user
  const getUserMockedOthersCount = useCallback((username: string): number => {
    return mockeryEvents.filter(event => 
      event.appliedBy === username && 
      event.isActive
    ).length;
  }, [mockeryEvents]);
  
  return {
    applyMockery,
    removeMockery,
    getActiveMockery,
    isUserMocked,
    isUserProtected,
    protectUser,
    isUserShamed,
    mockUser,
    getUserMockeryCount,
    getUserMockedOthersCount,
    mockedUsers,
    mockUsers: mockedUsers, // Alias for backward compatibility
    mockeryEvents,
    mockedCount: mockedUsers.length,
    isLoading,
    error
  };
};

export default useMockery;
