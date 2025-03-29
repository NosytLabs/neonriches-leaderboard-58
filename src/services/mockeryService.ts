
import { MockeryAction, MockeryEvent, MockeryStats, MockeryProtection, MockedUser } from '@/types/mockery';
import { User } from '@/types/user';
import { spendFromWallet } from './walletService';

// In-memory storage for mockery data (would be a database in production)
let mockeryEvents: MockeryEvent[] = [];
let mockeryProtections: MockeryProtection[] = [];

// Load from localStorage if available
if (typeof window !== 'undefined') {
  const storedEvents = localStorage.getItem('mockeryEvents');
  const storedProtections = localStorage.getItem('mockeryProtections');
  
  if (storedEvents) {
    try {
      mockeryEvents = JSON.parse(storedEvents);
    } catch (e) {
      console.error('Error parsing mockery events:', e);
    }
  }
  
  if (storedProtections) {
    try {
      mockeryProtections = JSON.parse(storedProtections);
    } catch (e) {
      console.error('Error parsing mockery protections:', e);
    }
  }
}

// Save data to localStorage
const saveData = () => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('mockeryEvents', JSON.stringify(mockeryEvents));
    localStorage.setItem('mockeryProtections', JSON.stringify(mockeryProtections));
  }
};

// Get mockery price based on action type
export const getMockeryPrice = (action: MockeryAction): number => {
  switch (action) {
    case 'tomatoes': return 10;
    case 'eggs': return 15;
    case 'stocks': return 20;
    case 'silence': return 25;
    case 'courtJester': return 30;
    default: return 10;
  }
};

// Get description for mockery action
export const getMockeryDescription = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes': return 'Pelt with virtual tomatoes';
    case 'eggs': return 'Bombard with digital eggs';
    case 'stocks': return 'Place in virtual stocks for public ridicule';
    case 'silence': return 'Temporarily silence in public forums';
    case 'courtJester': return 'Appoint as the court jester';
    default: return 'Mock publicly';
  }
};

// Mock a user with a specific action
export const mockUser = (
  sourceUser: User,
  targetUsername: string,
  action: MockeryAction
): boolean => {
  // Check if user has protection
  if (isUserProtected(targetUsername)) {
    return false;
  }
  
  // Calculate price based on action
  const price = getMockeryPrice(action);
  
  // Try to spend from user's wallet
  const success = spendFromWallet(
    sourceUser, 
    price, 
    'mockery',
    `${action} mockery of ${targetUsername}`,
    { targetUser: targetUsername, mockeryType: action }
  );
  
  if (!success) {
    return false;
  }
  
  // Record mockery event
  const mockeryEvent: MockeryEvent = {
    id: `mockery_${Date.now()}_${sourceUser.id}_${targetUsername}`,
    sourceUser: sourceUser.username,
    targetUser: targetUsername,
    action,
    timestamp: new Date().toISOString(),
    amount: price
  };
  
  mockeryEvents.push(mockeryEvent);
  saveData();
  
  return true;
};

// Check if a user is protected from mockery
export const isUserProtected = (username: string): boolean => {
  const now = new Date();
  
  return mockeryProtections.some(
    p => p.username === username && 
         new Date(p.endDate) > now &&
         p.isActive
  );
};

// Add protection for a user
export const protectUser = (
  user: User,
  durationDays: number = 7
): boolean => {
  const price = 10 * durationDays; // $10 per day
  
  // Try to spend from user's wallet
  const success = spendFromWallet(
    user,
    price,
    'protection',
    `Mockery protection for ${durationDays} days`,
    {}
  );
  
  if (!success) {
    return false;
  }
  
  // Remove any existing protection
  mockeryProtections = mockeryProtections.filter(p => p.username !== user.username);
  
  // Add new protection
  const now = new Date();
  const endDate = new Date();
  endDate.setDate(now.getDate() + durationDays);
  
  const protection: MockeryProtection = {
    userId: user.id,
    username: user.username,
    startDate: now.toISOString(),
    endDate: endDate.toISOString(),
    isActive: true
  };
  
  mockeryProtections.push(protection);
  saveData();
  
  return true;
};

// Get mockery stats
export const getMockeryStats = (): MockeryStats => {
  const uniqueTargets = new Set(mockeryEvents.map(e => e.targetUser));
  
  // Count occurrences of each action
  const actionCounts: Record<MockeryAction, number> = {
    tomatoes: 0,
    eggs: 0,
    stocks: 0,
    silence: 0,
    courtJester: 0
  };
  
  mockeryEvents.forEach(e => {
    actionCounts[e.action]++;
  });
  
  // Find most used action
  let mostUsedAction: MockeryAction = 'tomatoes';
  let maxCount = 0;
  
  Object.entries(actionCounts).forEach(([action, count]) => {
    if (count > maxCount) {
      maxCount = count;
      mostUsedAction = action as MockeryAction;
    }
  });
  
  // Find highest mocker and most mocked
  const mockerCounts: Record<string, number> = {};
  const mockedCounts: Record<string, number> = {};
  
  mockeryEvents.forEach(e => {
    mockerCounts[e.sourceUser] = (mockerCounts[e.sourceUser] || 0) + 1;
    mockedCounts[e.targetUser] = (mockedCounts[e.targetUser] || 0) + 1;
  });
  
  let highestMocker = '';
  let maxMockerCount = 0;
  let mostMocked = '';
  let maxMockedCount = 0;
  
  Object.entries(mockerCounts).forEach(([username, count]) => {
    if (count > maxMockerCount) {
      maxMockerCount = count;
      highestMocker = username;
    }
  });
  
  Object.entries(mockedCounts).forEach(([username, count]) => {
    if (count > maxMockedCount) {
      maxMockedCount = count;
      mostMocked = username;
    }
  });
  
  return {
    totalMockery: mockeryEvents.length,
    targetedUsers: uniqueTargets.size,
    mostUsedAction,
    highestMockerUsername: highestMocker,
    mostMockedUsername: mostMocked
  };
};

// Get mocked users
export const getMockedUsers = (): MockedUser[] => {
  const now = new Date();
  const threeDaysAgo = new Date();
  threeDaysAgo.setDate(now.getDate() - 3);
  
  // Get recent mockery events (last 3 days)
  const recentEvents = mockeryEvents.filter(
    e => new Date(e.timestamp) > threeDaysAgo
  );
  
  // Group by target user
  const userMap: Record<string, MockedUser> = {};
  
  recentEvents.forEach(event => {
    if (!userMap[event.targetUser]) {
      userMap[event.targetUser] = {
        username: event.targetUser,
        displayName: event.targetUser,
        mockedTimestamp: event.timestamp,
        mockedReason: `Subjected to ${event.action}`,
        mockedBy: event.sourceUser,
        mockedTier: getMockeryTier(event.action)
      };
    } else if (new Date(event.timestamp) > new Date(userMap[event.targetUser].mockedTimestamp)) {
      // Update if this is a more recent mockery
      userMap[event.targetUser].mockedTimestamp = event.timestamp;
      userMap[event.targetUser].mockedReason = `Subjected to ${event.action}`;
      userMap[event.targetUser].mockedBy = event.sourceUser;
      userMap[event.targetUser].mockedTier = getMockeryTier(event.action);
    }
  });
  
  return Object.values(userMap);
};

// Helper to get mockery tier
const getMockeryTier = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes': return 'common';
    case 'eggs': return 'uncommon';
    case 'stocks': return 'rare';
    case 'silence': return 'epic';
    case 'courtJester': return 'legendary';
    default: return 'common';
  }
};

// Get user's mockery history
export const getUserMockeryHistory = (username: string): MockeryEvent[] => {
  return mockeryEvents.filter(
    e => e.sourceUser === username || e.targetUser === username
  ).sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
};

// Get active mockery events for a user
export const getActiveMockery = (username: string): MockeryEvent | null => {
  const now = new Date();
  const oneDayAgo = new Date();
  oneDayAgo.setDate(now.getDate() - 1);
  
  // Find the most recent mockery within the last day
  const recentMockeries = mockeryEvents
    .filter(e => e.targetUser === username && new Date(e.timestamp) > oneDayAgo)
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
  
  return recentMockeries.length > 0 ? recentMockeries[0] : null;
};

// Check if user is on mockery cooldown
export const isUserOnMockeryCooldown = (username: string): boolean => {
  const now = new Date();
  const threeDaysAgo = new Date();
  threeDaysAgo.setDate(now.getDate() - 3);
  
  // Check if user has been mocked in the last 3 days
  return mockeryEvents.some(
    e => e.targetUser === username && new Date(e.timestamp) > threeDaysAgo
  );
};

// Get count of times a user has been mocked
export const getUserMockeryCount = (username: string): number => {
  return mockeryEvents.filter(e => e.targetUser === username).length;
};
