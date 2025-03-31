
import { useMemo } from 'react';
import { MockedUser, MockeryAction } from '@/types/mockery-types';

const useMockedUsers = (
  mockUsers: MockedUser[], 
  isUserShamed: (username: string) => boolean,
  getActiveMockery: (username: string) => any | null
) => {
  const mockedUsers = useMemo(() => {
    return mockUsers;
  }, [mockUsers]);
  
  const getActiveMockeryWrapper = (username: string): MockeryAction | null => {
    const mockery = getActiveMockery(username);
    return mockery?.action || null;
  };
  
  return {
    mockedUsers,
    getActiveMockeryWrapper
  };
};

export default useMockedUsers;
