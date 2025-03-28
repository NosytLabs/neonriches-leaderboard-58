
import { MockeryEvent, MockeryEffectData, UserMockeryStatus, MockUser, MockeryAction } from '@/types/mockery';

// Mock user data for the mockery system
export const getMockUsers = (): MockUser[] => {
  return [
    {
      id: 'user1',
      username: 'WhaleLord',
      profilePicture: '/assets/avatars/1.jpg',
      tier: 'legendary',
      lastMockery: new Date().toISOString(),
      mockeryCount: 5,
      isProtected: false,
      onlineStatus: true
    },
    {
      id: 'user2',
      username: 'CryptoNoble',
      profilePicture: '/assets/avatars/2.jpg',
      tier: 'rare',
      lastMockery: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      mockeryCount: 2,
      isProtected: true,
      onlineStatus: false
    }
  ];
};

// Check if a user has active protection
export const getUserProtection = (username: string): MockeryEffectData | null => {
  // For demo purposes, just check if the username contains 'protected'
  if (username === 'CryptoNoble') {
    return {
      type: 'protected',
      until: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
      tier: 'legendary'
    };
  }
  
  return null;
};

// Get all active mockeries for a user
export const getUserMockeries = (username: string): MockeryEffectData[] => {
  if (username === 'WhaleLord') {
    return [
      {
        id: 'mock1',
        type: 'eggs',
        until: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString(),
        tier: 'rare',
        duration: 24,
        strength: 1,
        appliedBy: 'user3',
      }
    ];
  }
  
  return [];
};

// Add a new mockery event
export const addMockeryEvent = (
  targetUsername: string, 
  sourceUsername: string,
  mockeryType: MockeryAction
): MockeryEvent => {
  const mockeryEvent: MockeryEvent = {
    id: `mockery_${Date.now()}`,
    targetUserId: `user_${targetUsername}`,
    sourceUserId: `user_${sourceUsername}`,
    timestamp: new Date().toISOString(),
    mockeryType,
    duration: 24, // 24 hours
    active: true,
    sourceUsername // Added for compatibility
  };
  
  // Here you would typically persist this to a database
  
  return mockeryEvent;
};

// Apply protection to a user
export const applyProtectionToUser = (username: string): MockeryEvent => {
  const protectionEvent: MockeryEvent = {
    id: `protection_${Date.now()}`,
    targetUserId: `user_${username}`,
    sourceUserId: `user_${username}`,
    timestamp: new Date().toISOString(),
    mockeryType: 'protected',
    duration: 7 * 24, // 7 days in hours
    active: true,
    sourceUsername: username // Added for compatibility
  };
  
  // Here you would typically persist this to a database
  
  return protectionEvent;
};

// Get mockery status for a user
export const getUserMockeryStatus = (username: string): UserMockeryStatus => {
  const protection = getUserProtection(username);
  const mockeries = getUserMockeries(username);
  
  return {
    username,
    userId: `user_${username}`,
    protectedUntil: protection ? protection.until : null,
    activeProtection: protection,
    activeMockeries: mockeries,
    mockeryCount: mockeries.length,
    lastMockedAt: mockeries.length > 0 ? new Date().toISOString() : null
  };
};

// Check if a user is currently protected from mockery
export const isUserProtected = (username: string): boolean => {
  const protection = getUserProtection(username);
  return !!protection && new Date(protection.until) > new Date();
};

// Check if a user is currently being mocked
export const isUserMocked = (username: string): boolean => {
  const mockeries = getUserMockeries(username);
  return mockeries.length > 0 && mockeries.some(m => new Date(m.until) > new Date());
};
