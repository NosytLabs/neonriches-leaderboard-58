
import { useState, useEffect, useCallback } from 'react';
import { UserProfile } from '@/types/user';
import { 
  MockeryAction, 
  MockeryEvent, 
  MockedUser, 
  UseMockeryReturn 
} from '@/types/mockery-types';
import { useToast } from '@/hooks/use-toast';
import { useSound } from '@/hooks/use-sound';
import { useAuth } from '@/hooks/useAuth';
import {
  getMockeryActionTitle,
  getMockeryActionPrice,
  getMockeryTier,
  getMockeryEffectDuration,
  getMockeryCooldown
} from '@/utils/mockery';
import { adaptUserProfileToUser } from '@/utils/userAdapter';
import { spendFromWallet } from '@/services/walletService';

// Mock data for testing
const mockUsers: MockedUser[] = [
  {
    id: '1',
    username: 'user1',
    displayName: 'User One',
    profileImage: '/avatars/user1.png',
    mockedBy: 'system',
    mockedUntil: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    team: 'red',
    tier: 'gold',
    lastMocked: new Date().toISOString(),
    mockeryCount: 3
  },
  {
    id: '2',
    username: 'user2',
    displayName: 'User Two',
    profileImage: '/avatars/user2.png',
    mockedBy: 'system',
    mockedUntil: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    team: 'green',
    tier: 'silver',
    lastMocked: new Date().toISOString(),
    mockeryCount: 1
  },
  {
    id: '3',
    username: 'user3',
    displayName: 'User Three',
    profileImage: '/avatars/user3.png',
    mockedBy: 'system',
    mockedUntil: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    team: 'blue',
    tier: 'bronze',
    lastMocked: new Date().toISOString(),
    mockeryCount: 2
  }
];

const mockEvents: MockeryEvent[] = [
  {
    id: '1',
    targetId: '2',
    appliedBy: '1',
    action: 'tomatoes',
    createdAt: new Date().toISOString(),
    expiresAt: new Date(Date.now() + 86400000).toISOString(), // 24 hours from now
    isActive: true
  },
  {
    id: '2',
    targetId: '1',
    appliedBy: '3',
    action: 'dunce',
    createdAt: new Date().toISOString(),
    expiresAt: new Date(Date.now() + 172800000).toISOString(), // 48 hours from now
    isActive: true
  }
];

const useMockery = (): UseMockeryReturn => {
  const { user } = useAuth();
  const { toast } = useToast();
  const sound = useSound();
  const [users, setUsers] = useState<MockedUser[]>(mockUsers);
  const [events, setEvents] = useState<MockeryEvent[]>(mockEvents);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const loadMockeryData = async () => {
      setIsLoading(true);
      try {
        // In a real implementation, you'd fetch data from an API or database
        // For now, we'll just use the mock data
        
        // Clear expired events
        const now = new Date();
        const activeEvents = events.filter(event => 
          new Date(event.expiresAt) > now
        );
        
        if (activeEvents.length !== events.length) {
          setEvents(activeEvents);
        }
        
      } catch (err) {
        setError('Error loading mockery data');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadMockeryData();
    
    // Set up interval to periodically clear expired events
    const interval = setInterval(() => {
      const now = new Date();
      setEvents(prev => prev.filter(event => new Date(event.expiresAt) > now));
    }, 60000); // Check every minute
    
    return () => clearInterval(interval);
  }, []);
  
  // Check if a user is currently protected from mockery
  const isUserProtected = useCallback((username: string): boolean => {
    const protectionEvent = events.find(event => 
      event.targetId === username && 
      event.action === 'protection' && 
      event.isActive
    );
    
    return !!protectionEvent;
  }, [events]);
  
  // Check if a user is currently shamed
  const isUserShamed = useCallback((username: string): boolean => {
    const userEvents = events.filter(event => 
      event.targetId === username && 
      event.action !== 'protection' && 
      event.isActive
    );
    
    return userEvents.length > 0;
  }, [events]);
  
  // Check if a user can be mocked (not protected)
  const canUserBeMocked = useCallback((username: string): boolean => {
    return !isUserProtected(username);
  }, [isUserProtected]);
  
  // Get active mockery event for a user
  const getActiveMockery = useCallback((username: string): MockeryEvent | null => {
    const mockery = events.find(event => 
      event.targetId === username && 
      event.action !== 'protection' && 
      event.isActive
    );
    
    return mockery || null;
  }, [events]);
  
  // Apply mockery to a user
  const mockUser = useCallback((userId: string, targetUsername: string, action: MockeryAction): boolean => {
    if (!canUserBeMocked(targetUsername)) {
      toast({
        title: "Protected User",
        description: "This user is currently protected from mockery.",
        variant: "destructive"
      });
      return false;
    }
    
    // Create a new mockery event
    const newEvent: MockeryEvent = {
      id: Math.random().toString(36).substring(2, 9),
      targetId: targetUsername,
      appliedBy: userId,
      action,
      createdAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + getMockeryEffectDuration(action) * 3600000).toISOString(),
      isActive: true
    };
    
    // Add the new event
    setEvents(prev => [...prev, newEvent]);
    
    // Update mockery count for the target user
    setUsers(prev => prev.map(u => {
      if (u.username === targetUsername) {
        return {
          ...u,
          lastMocked: new Date().toISOString(),
          mockeryCount: (u.mockeryCount || 0) + 1
        };
      }
      return u;
    }));
    
    // Play mockery sound
    sound.playSound('mockery', { volume: 0.5 });
    
    return true;
  }, [canUserBeMocked, sound, toast]);
  
  // Protect a user from mockery
  const protectUser = useCallback((username: string): boolean => {
    // Create a new protection event
    const newEvent: MockeryEvent = {
      id: Math.random().toString(36).substring(2, 9),
      targetId: username,
      appliedBy: username,
      action: 'protection',
      createdAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 7 * 86400000).toISOString(), // 7 days
      isActive: true
    };
    
    // Add the new protection event
    setEvents(prev => [...prev, newEvent]);
    
    // Play protection sound
    sound.playSound('protection', { volume: 0.5 });
    
    return true;
  }, [sound]);
  
  // Get number of times a user has been mocked
  const getUserMockeryCount = useCallback((username: string): number => {
    const user = users.find(u => u.username === username);
    return user?.mockeryCount || 0;
  }, [users]);
  
  // Get number of times a user has mocked others
  const getUserMockedOthersCount = useCallback((username: string): number => {
    return events.filter(event => event.appliedBy === username).length;
  }, [events]);
  
  // Apply mockery with cost handling
  const applyMockery = useCallback(async (targetId: string, action: MockeryAction): Promise<boolean> => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "You must be logged in to perform mockery actions."
      });
      return false;
    }
    
    if (!targetId || !action) {
      toast({
        title: "Missing Information",
        description: "Please select a user and mockery action to proceed."
      });
      return false;
    }
    
    const tier = getMockeryTier(action);
    const cost = getMockeryActionPrice(action);
    const fullUser = adaptUserProfileToUser(user);
    
    const successResult = spendFromWallet(
      fullUser,
      cost,
      'mockery',
      `${getMockeryActionTitle(action)} mockery`,
      { targetUser: targetId, mockeryType: action }
    );
    
    if (successResult) {
      const result = mockUser(user.id, targetId, action);
      
      if (result) {
        sound.playSound('mockery', { volume: 0.5 });
        
        toast({
          title: "Mockery Applied",
          description: `You have successfully applied ${getMockeryActionTitle(action)} to the user.`,
          variant: "success"
        });
      }
      
      return result;
    } else {
      toast({
        title: "Insufficient Funds",
        description: `You need at least ${cost.toFixed(2)} to perform this mockery.`,
        variant: "destructive"
      });
      
      return false;
    }
  }, [user, mockUser, sound, toast]);
  
  // Remove mockery
  const removeMockery = useCallback(async (targetId: string): Promise<boolean> => {
    setEvents(prev => prev.map(event => {
      if (event.targetId === targetId && event.isActive && event.action !== 'protection') {
        return { ...event, isActive: false };
      }
      return event;
    }));
    
    return true;
  }, []);
  
  return {
    mockUsers: users,
    mockeryEvents: events,
    isLoading,
    error,
    mockUser,
    protectUser,
    isUserProtected,
    isUserShamed,
    canUserBeMocked,
    getActiveMockery,
    getUserMockeryCount,
    getUserMockedOthersCount,
    applyMockery,
    removeMockery
  };
};

export default useMockery;
