
import { User, UserProfile } from '@/types/user';
import { MockeryAction, MockeryEvent, MockUser } from '@/types/mockery';
import { MOCKERY_COOLDOWNS } from '@/utils/mockeryUtils';

// Mock storage for mockery data
const mockedUsers: MockUser[] = [];
const mockeryHistory: MockeryEvent[] = [];
const userProtections: Record<string, number> = {}; // username -> expiry timestamp
const mockCooldowns: Record<string, number> = {}; // username -> cooldown expiry timestamp
const mockeryCounters: Record<string, number> = {}; // username -> count of times mocked
const mockedOthersCounters: Record<string, number> = {}; // username -> count of times mocked others

// Get mocked users
export const getMockedUsers = (): MockUser[] => {
  return [...mockedUsers];
};

// Get mockery stats
export const getMockeryStats = (): any => {
  return {
    total: mockeryHistory.length,
    active: mockedUsers.length,
    protected: Object.keys(userProtections).length,
    popular: {
      action: 'tomatoes',
      count: 42
    },
    mostMocked: Object.entries(mockeryCounters)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([username, count]) => ({ username, count })),
    topMockers: Object.entries(mockedOthersCounters)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([username, count]) => ({ username, count }))
  };
};

// Check if user is protected
export const isUserProtected = (username: string): boolean => {
  const expiryTime = userProtections[username];
  if (!expiryTime) return false;
  
  return Date.now() < expiryTime;
};

// Check if user is on mockery cooldown
export const isUserOnMockeryCooldown = (username: string): boolean => {
  const cooldownTime = mockCooldowns[username];
  if (!cooldownTime) return false;
  
  return Date.now() < cooldownTime;
};

// Mock a user
export const mockUser = (
  sourceUser: User,
  targetUsername: string,
  action: MockeryAction
): boolean => {
  // Check if target is protected
  if (isUserProtected(targetUsername)) {
    return false;
  }
  
  // Check if user is on cooldown
  if (isUserOnMockeryCooldown(targetUsername)) {
    return false;
  }
  
  // Create mockery event
  const mockeryEvent: MockeryEvent = {
    id: `mockery_${Date.now()}`,
    type: action,
    appliedBy: sourceUser.id,
    appliedTo: targetUsername,
    timestamp: new Date(),
    action,
    mockeryCount: (mockeryCounters[targetUsername] || 0) + 1
  };
  
  // Add to history
  mockeryHistory.push(mockeryEvent);
  
  // Add to mocked users if not already there
  const existingIndex = mockedUsers.findIndex(u => u.username === targetUsername);
  if (existingIndex === -1) {
    mockedUsers.push({
      id: `user_${Date.now()}`,
      username: targetUsername,
      displayName: targetUsername,
      rank: 999,
      lastMocked: new Date().toISOString(),
      mockeryCount: 1
    });
  } else {
    mockedUsers[existingIndex].lastMocked = new Date().toISOString();
    mockedUsers[existingIndex].mockeryCount = (mockedUsers[existingIndex].mockeryCount || 0) + 1;
  }
  
  // Update mockery counters
  mockeryCounters[targetUsername] = (mockeryCounters[targetUsername] || 0) + 1;
  mockedOthersCounters[sourceUser.username] = (mockedOthersCounters[sourceUser.username] || 0) + 1;
  
  // Set cooldown
  const cooldownDuration = MOCKERY_COOLDOWNS[action] || (60 * 60 * 1000); // Default 1 hour if not specified
  mockCooldowns[targetUsername] = Date.now() + cooldownDuration;
  
  return true;
};

// Protect a user
export const protectUser = (
  user: User | string,
  durationDays: number = 7
): boolean => {
  const username = typeof user === 'string' ? user : user.username;
  const durationMs = durationDays * 24 * 60 * 60 * 1000; // Convert days to milliseconds
  userProtections[username] = Date.now() + durationMs;
  return true;
};

// Get user mockery history
export const getUserMockeryHistory = (username: string): MockeryEvent[] => {
  return mockeryHistory.filter(
    event => event.appliedTo === username || event.appliedBy === username
  );
};

// Get active mockery for a user
export const getActiveMockery = (username: string): MockeryEvent | null => {
  // In a real app, this would check for active effects
  const mockeryEvents = mockeryHistory.filter(
    event => event.appliedTo === username
  );
  
  if (mockeryEvents.length === 0) return null;
  
  // Return the most recent one
  return mockeryEvents.sort((a, b) => {
    return b.timestamp.getTime() - a.timestamp.getTime();
  })[0];
};

// Get user mockery count
export const getUserMockeryCount = (username: string): number => {
  return mockeryCounters[username] || 0;
};

// Get user mocked others count
export const getUserMockedOthersCount = (username: string): number => {
  return mockedOthersCounters[username] || 0;
};

// Remove mockery effect from user
export const removeMockeryEffect = (
  username: string,
  actionToRemove?: MockeryAction
): boolean => {
  // Find the user
  const userIndex = mockedUsers.findIndex(u => u.username === username);
  if (userIndex === -1) return false;
  
  if (actionToRemove) {
    // Remove specific mockery events
    const filteredHistory = mockeryHistory.filter(
      event => !(event.appliedTo === username && event.type === actionToRemove)
    );
    
    // If we filtered out events, update the history
    if (filteredHistory.length < mockeryHistory.length) {
      mockeryHistory.length = 0;
      mockeryHistory.push(...filteredHistory);
      return true;
    }
    
    return false;
  } else {
    // Remove all mockery events for the user
    const filteredHistory = mockeryHistory.filter(
      event => event.appliedTo !== username
    );
    
    // If we filtered out events, update the history
    if (filteredHistory.length < mockeryHistory.length) {
      mockeryHistory.length = 0;
      mockeryHistory.push(...filteredHistory);
      return true;
    }
    
    return false;
  }
};

// Clear all mockery cooldowns for a user
export const clearMockeryCooldowns = (username: string): boolean => {
  if (mockCooldowns[username]) {
    delete mockCooldowns[username];
    return true;
  }
  return false;
};
