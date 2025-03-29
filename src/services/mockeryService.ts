
import { User, UserProfile } from '@/types/user';
import { MockeryAction, MockeryEvent, MockUser } from '@/types/mockery';

// Mock storage for mockery data
const mockedUsers: MockUser[] = [];
const mockeryHistory: MockeryEvent[] = [];
const userProtections: Record<string, number> = {}; // username -> expiry timestamp
const mockCooldowns: Record<string, number> = {}; // username -> cooldown expiry timestamp

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
    }
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
    action
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
      rank: 999
    });
  }
  
  // Set cooldown
  const cooldownDuration = 60 * 60 * 1000; // 1 hour in milliseconds
  mockCooldowns[targetUsername] = Date.now() + cooldownDuration;
  
  return true;
};

// Protect a user
export const protectUser = (
  user: User,
  durationDays: number = 7
): boolean => {
  const durationMs = durationDays * 24 * 60 * 60 * 1000; // Convert days to milliseconds
  userProtections[user.username] = Date.now() + durationMs;
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
  return mockeryHistory.filter(event => event.appliedTo === username).length;
};
