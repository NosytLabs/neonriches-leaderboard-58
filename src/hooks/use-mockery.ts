
import { useState, useEffect } from 'react';
import { User } from '@/types/user';
import { MockeryAction, MockeryEvent, MockedUser } from '@/types/mockery';
import { 
  mockUser, 
  protectUser, 
  isUserProtected, 
  getMockeryStats, 
  getMockedUsers, 
  getUserMockeryHistory,
  getActiveMockery,
  isUserOnMockeryCooldown,
  getUserMockeryCount
} from '@/services/mockeryService';

const useMockery = () => {
  const [mockedUsers, setMockedUsers] = useState<MockedUser[]>([]);
  const [stats, setStats] = useState<any>(null);
  
  // Load mockery data on mount
  useEffect(() => {
    setMockedUsers(getMockedUsers());
    setStats(getMockeryStats());
  }, []);
  
  // Mock a user
  const handleMockUser = (
    sourceUser: User, 
    targetUsername: string, 
    action: MockeryAction
  ): boolean => {
    const result = mockUser(sourceUser, targetUsername, action);
    
    if (result) {
      // Update local state
      setMockedUsers(getMockedUsers());
      setStats(getMockeryStats());
    }
    
    return result;
  };
  
  // Add protection for a user
  const handleProtectUser = (
    user: User,
    durationDays: number = 7
  ): boolean => {
    const result = protectUser(user, durationDays);
    
    if (result) {
      // Update local state
      setMockedUsers(getMockedUsers());
    }
    
    return result;
  };
  
  // Check if user is shamed (has active mockery)
  const isUserShamed = (username: string): boolean => {
    return getActiveMockery(username) !== null;
  };
  
  // Check if user can be mocked
  const canUserBeMocked = (username: string): boolean => {
    return !isUserProtected(username) && !isUserOnMockeryCooldown(username);
  };
  
  return {
    mockedUsers,
    stats,
    mockUser: handleMockUser,
    protectUser: handleProtectUser,
    isUserProtected,
    isUserShamed,
    canUserBeMocked,
    getUserMockeryHistory,
    getActiveMockery,
    isUserOnMockeryCooldown,
    getUserMockeryCount
  };
};

export default useMockery;
