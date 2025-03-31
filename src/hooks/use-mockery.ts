
import { useState, useEffect } from 'react';
import { User } from '@/types/user';
import { mockUsers } from '@/data/mockUsers';
import { MockeryAction, MockeryEvent } from '@/types/mockery-types';

// Simple mock implementation of the useMockery hook
const useMockery = () => {
  const [mockedUsers, setMockedUsers] = useState<User[]>(mockUsers as User[]);
  const [protectedUsers, setProtectedUsers] = useState<string[]>([]);
  const [mockeryEvents, setMockeryEvents] = useState<MockeryEvent[]>([]);
  const [mockeryCount, setMockeryCount] = useState<Record<string, number>>({});
  const [mockedByCount, setMockedByCount] = useState<Record<string, number>>({});

  // Check if a user is protected from mockery
  const isUserProtected = (username: string): boolean => {
    return protectedUsers.includes(username);
  };

  // Protect a user from mockery
  const protectUser = (username: string): boolean => {
    if (!isUserProtected(username)) {
      setProtectedUsers(prev => [...prev, username]);
      return true;
    }
    return false;
  };

  // Check if a user is currently shamed
  const isUserShamed = (username: string): boolean => {
    return mockeryEvents.some(event => 
      event.targetId === username && event.isActive
    );
  };

  // Mock a user
  const mockUser = (currentUser: User, targetUsername: string, action: MockeryAction): boolean => {
    if (isUserProtected(targetUsername)) {
      return false;
    }

    const now = new Date();
    const expiresAt = new Date(now.getTime() + 24 * 60 * 60 * 1000); // 24 hours

    const newEvent: MockeryEvent = {
      id: `mock-${Date.now()}`,
      type: action,
      appliedBy: currentUser.username,
      targetId: targetUsername,
      isActive: true,
      createdAt: now.toISOString(),
      expiresAt: expiresAt.toISOString()
    };

    setMockeryEvents(prev => [...prev, newEvent]);
    
    // Update mockery counts
    setMockeryCount(prev => ({
      ...prev,
      [targetUsername]: (prev[targetUsername] || 0) + 1
    }));
    
    setMockedByCount(prev => ({
      ...prev,
      [currentUser.username]: (prev[currentUser.username] || 0) + 1
    }));

    return true;
  };

  // Get the number of times a user has been mocked
  const getUserMockeryCount = (username: string): number => {
    return mockeryCount[username] || 0;
  };

  // Get the number of times a user has mocked others
  const getUserMockedOthersCount = (username: string): number => {
    return mockedByCount[username] || 0;
  };

  // Get the active mockery for a user
  const getActiveMockery = (username: string): { action: MockeryAction, timestamp: string } | null => {
    const activeEvent = mockeryEvents.find(event => 
      event.targetId === username && event.isActive
    );
    
    if (activeEvent) {
      return {
        action: activeEvent.type,
        timestamp: activeEvent.createdAt
      };
    }
    
    return null;
  };

  // Clean up expired mockery events
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setMockeryEvents(prev => 
        prev.map(event => {
          if (new Date(event.expiresAt) < now) {
            return { ...event, isActive: false };
          }
          return event;
        })
      );
    }, 60000); // Check every minute
    
    return () => clearInterval(interval);
  }, []);

  return {
    mockUsers: mockedUsers,
    isUserProtected,
    protectUser,
    isUserShamed,
    mockUser,
    getUserMockeryCount,
    getUserMockedOthersCount,
    getActiveMockery
  };
};

export default useMockery;
