
import { useState, useEffect } from 'react';
import { UserProfile } from '@/types/user';
import { MockeryAction, MockeryEvent, MockUser } from '@/types/mockery';
import { fetchMockeryEvents } from '@/services/mockeryService';

// Mock data for testing
const mockUsers: MockUser[] = [
  {
    id: '1',
    username: 'user1',
    displayName: 'User One',
    profileImage: '/avatars/user1.png',
    rank: 5,
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
    rank: 10,
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
    rank: 15,
    team: 'blue',
    tier: 'bronze',
    lastMocked: new Date().toISOString(),
    mockeryCount: 2
  },
  {
    id: '4',
    username: 'user4',
    displayName: 'User Four',
    profileImage: '/avatars/user4.png',
    rank: 20,
    team: 'red',
    tier: 'platinum',
    lastMocked: new Date().toISOString(),
    mockeryCount: 0
  },
  {
    id: '5',
    username: 'user5',
    displayName: 'User Five',
    profileImage: '/avatars/user5.png',
    rank: 25,
    team: 'green',
    tier: 'diamond',
    lastMocked: new Date().toISOString(),
    mockeryCount: 5
  }
];

const mockEvents: MockeryEvent[] = [
  {
    id: '1',
    sourceId: '1',
    sourceName: 'User One',
    targetId: '2',
    targetName: 'User Two',
    action: 'tomatoes',
    appliedAt: new Date().toISOString(),
    expiresAt: new Date(Date.now() + 86400000).toISOString(), // 24 hours from now
    isActive: true
  },
  {
    id: '2',
    sourceId: '3',
    sourceName: 'User Three',
    targetId: '1',
    targetName: 'User One',
    action: 'dunce',
    appliedAt: new Date().toISOString(),
    expiresAt: new Date(Date.now() + 172800000).toISOString(), // 48 hours from now
    isActive: true
  }
];

interface UseMockeryReturn {
  mockUsers: MockUser[];
  mockeryEvents: MockeryEvent[];
  isLoading: boolean;
  error: string | null;
  mockUser: (user: UserProfile, targetUsername: string, action: MockeryAction) => boolean;
  protectUser: (username: string) => boolean;
  isUserProtected: (username: string) => boolean;
  isUserShamed: (username: string) => boolean;
  canUserBeMocked: (username: string) => boolean;
  getActiveMockery: (username: string) => MockeryEvent | null;
  getUserMockeryCount: (username: string) => number;
  getUserMockedOthersCount: (username: string) => number;
}

const useMockery = (): UseMockeryReturn => {
  const [users, setUsers] = useState<MockUser[]>(mockUsers);
  const [events, setEvents] = useState<MockeryEvent[]>(mockEvents);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const loadMockeryData = async () => {
      setIsLoading(true);
      try {
        const fetchedEvents = await fetchMockeryEvents();
        setEvents(fetchedEvents || mockEvents);
      } catch (err) {
        setError('Error loading mockery data');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadMockeryData();
  }, []);
  
  // Check if a user is currently protected from mockery
  const isUserProtected = (username: string): boolean => {
    const protectionEvent = events.find(event => 
      event.targetId === username && 
      event.action === 'protection' && 
      event.isActive
    );
    
    return !!protectionEvent;
  };
  
  // Check if a user is currently shamed
  const isUserShamed = (username: string): boolean => {
    const userEvents = events.filter(event => 
      event.targetId === username && 
      event.action !== 'protection' && 
      event.isActive
    );
    
    return userEvents.length > 0;
  };
  
  // Check if a user can be mocked (not protected)
  const canUserBeMocked = (username: string): boolean => {
    return !isUserProtected(username);
  };
  
  // Get active mockery event for a user
  const getActiveMockery = (username: string): MockeryEvent | null => {
    const mockery = events.find(event => 
      event.targetId === username && 
      event.action !== 'protection' && 
      event.isActive
    );
    
    return mockery || null;
  };
  
  // Apply mockery to a user
  const mockUser = (user: UserProfile, targetUsername: string, action: MockeryAction): boolean => {
    if (!canUserBeMocked(targetUsername)) {
      return false;
    }
    
    // Create a new mockery event
    const newEvent: MockeryEvent = {
      id: Math.random().toString(36).substring(2, 9),
      sourceId: user.id,
      sourceName: user.displayName || user.username,
      targetId: targetUsername,
      targetName: targetUsername,
      action,
      appliedAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 86400000).toISOString(), // 24 hours
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
    
    return true;
  };
  
  // Protect a user from mockery
  const protectUser = (username: string): boolean => {
    // Create a new protection event
    const newEvent: MockeryEvent = {
      id: Math.random().toString(36).substring(2, 9),
      sourceId: username,
      sourceName: username,
      targetId: username,
      targetName: username,
      action: 'protection',
      appliedAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 7 * 86400000).toISOString(), // 7 days
      isActive: true
    };
    
    // Add the new protection event
    setEvents(prev => [...prev, newEvent]);
    
    return true;
  };
  
  // Get number of times a user has been mocked
  const getUserMockeryCount = (username: string): number => {
    const user = users.find(u => u.username === username);
    return user?.mockeryCount || 0;
  };
  
  // Get number of times a user has mocked others
  const getUserMockedOthersCount = (username: string): number => {
    return events.filter(event => event.sourceId === username).length;
  };
  
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
    getUserMockedOthersCount
  };
};

export default useMockery;
