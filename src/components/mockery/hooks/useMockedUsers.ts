
import { useEffect, useCallback } from 'react';
import { MockedUser, MockeryAction } from '@/types/mockery-types';

export interface UseMockedUsersReturn {
  mockedUsers: MockedUser[];
  getActiveMockeryWrapper: (username: string) => MockeryAction;
}

const useMockedUsers = (
  mockUsers: MockedUser[],
  isUserShamed: (username: string) => boolean,
  getActiveMockery: (username: string) => any
): UseMockedUsersReturn => {
  
  // Convert users from our mockUsers array to MockedUser format
  const mockedUsers: MockedUser[] = mockUsers
    .filter(user => isUserShamed(user.username))
    .map(user => ({
      id: user.id || `generated-${user.username}`,
      userId: user.id,
      username: user.username,
      displayName: user.displayName || user.username,
      profileImage: user.profileImage || '',
      mockedReason: `Subjected to ${user.tier || 'unknown'} mockery`,
      mockedTimestamp: user.lastMocked ? user.lastMocked : new Date().toISOString(),
      mockedUntil: user.lastMocked 
        ? new Date(new Date(user.lastMocked).getTime() + 24 * 60 * 60 * 1000).toISOString() 
        : new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString(),
      mockedBy: 'Unknown user',
      mockedTier: user.mockeryCount ? user.tier : 'basic',
      mockeryCount: user.mockeryCount || 1,
      lastMocked: user.lastMocked,
      team: user.team,
      tier: user.tier || 'basic'
    }));
  
  const getActiveMockeryWrapper = useCallback((username: string): MockeryAction => {
    const mockeryEvent = getActiveMockery(username);
    if (mockeryEvent && typeof mockeryEvent === 'object' && 'action' in mockeryEvent) {
      return mockeryEvent.action as MockeryAction || 'tomatoes';
    }
    return 'tomatoes';
  }, [getActiveMockery]);
  
  return {
    mockedUsers,
    getActiveMockeryWrapper
  };
};

export default useMockedUsers;
