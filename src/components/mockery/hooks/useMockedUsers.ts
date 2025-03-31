
import { useState, useCallback } from 'react';
import { MockedUser, MockeryAction } from '@/types/mockery';

interface UseMockedUsersOptions {
  mockUsers: MockedUser[];
  isUserShamed: (username: string) => boolean;
  getActiveMockery: (username: string) => any | null;
}

const useMockedUsers = (
  mockUsers: MockedUser[],
  isUserShamed: (username: string) => boolean,
  getActiveMockery: (username: string) => any | null
) => {
  // Simple wrapper for getActiveMockery to handle type issues
  const getActiveMockeryWrapper = useCallback((username: string): MockeryAction | null => {
    const mockery = getActiveMockery(username);
    if (!mockery) return null;
    
    // If it returns an object, get the action property
    if (typeof mockery === 'object' && mockery && 'action' in mockery) {
      return mockery.action as MockeryAction;
    }
    
    // If it returns a string (the action directly)
    if (typeof mockery === 'string') {
      return mockery as MockeryAction;
    }
    
    return null;
  }, [getActiveMockery]);
  
  return {
    mockedUsers: mockUsers,
    isUserShamed,
    getActiveMockeryWrapper
  };
};

export default useMockedUsers;
