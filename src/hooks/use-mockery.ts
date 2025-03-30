
import { useState, useEffect } from 'react';
import { User } from '@/types/user';
import { MockeryAction, MockUser, MockedUser, MockeryEvent } from '@/types/mockery';
import { useToast } from '@/hooks/use-toast';

// Mock data for demonstration
const mockUsersList: MockUser[] = [
  { id: '1', username: 'lordSpender', displayName: 'Lord Spender', profileImage: 'https://i.pravatar.cc/150?img=1', rank: 5, team: 'red', tier: 'royal' },
  { id: '2', username: 'coinDuchess', displayName: 'Coin Duchess', profileImage: 'https://i.pravatar.cc/150?img=2', rank: 8, team: 'green', tier: 'gold' },
  { id: '3', username: 'kingOfDebt', displayName: 'King of Debt', profileImage: 'https://i.pravatar.cc/150?img=3', rank: 12, team: 'blue', tier: 'platinum' },
  { id: '4', username: 'baronBroke', displayName: 'Baron Broke', profileImage: 'https://i.pravatar.cc/150?img=4', rank: 20, team: 'red', tier: 'silver' },
  { id: '5', username: 'countessCredit', displayName: 'Countess Credit', profileImage: 'https://i.pravatar.cc/150?img=5', rank: 15, team: 'green', tier: 'gold' },
];

const mockMockeryEvents: MockeryEvent[] = [];

export default function useMockery() {
  const { toast } = useToast();
  const [mockUsers, setMockUsers] = useState<MockUser[]>(mockUsersList);
  const [mockeryEvents, setMockeryEvents] = useState<MockeryEvent[]>(mockMockeryEvents);
  const [protectedUsers, setProtectedUsers] = useState<Map<string, string>>(new Map());
  const [mockedUsers, setMockedUsers] = useState<MockedUser[]>([]);
  
  // Mock implementation of user protection
  const protectUser = (username: string) => {
    const now = new Date();
    const expiryDate = new Date();
    expiryDate.setDate(now.getDate() + 7); // 7 days protection
    
    setProtectedUsers(prev => new Map(prev).set(username, expiryDate.toISOString()));
    
    return true;
  };
  
  // Check if a user is protected from mockery
  const isUserProtected = (username: string): boolean => {
    if (!protectedUsers.has(username)) return false;
    
    const expiryDate = new Date(protectedUsers.get(username) || '');
    const now = new Date();
    
    return expiryDate > now;
  };
  
  // Check if a user is currently mocked
  const isUserShamed = (username: string): boolean => {
    const now = new Date();
    return mockeryEvents.some(event => 
      event.targetUserId === username && 
      new Date(event.expiresAt) > now &&
      event.active
    );
  };
  
  // Get active mockery for a user if any
  const getActiveMockery = (username: string): MockeryEvent | null => {
    const now = new Date();
    return mockeryEvents.find(event => 
      event.targetUserId === username && 
      new Date(event.expiresAt) > now &&
      event.active
    ) || null;
  };
  
  // Check if a user can be mocked
  const canUserBeMocked = (username: string): boolean => {
    return !isUserProtected(username) && !isUserShamed(username);
  };
  
  // Mock a user
  const mockUser = (sourceUser: User, targetUsername: string, action: MockeryAction): boolean => {
    if (isUserProtected(targetUsername)) {
      toast({
        title: "Cannot Mock User",
        description: "This user is protected by royal decree and cannot be mocked.",
        variant: "destructive"
      });
      return false;
    }
    
    if (isUserShamed(targetUsername)) {
      toast({
        title: "User Already Mocked",
        description: "This user is already suffering from mockery. Have mercy!",
        variant: "destructive"
      });
      return false;
    }
    
    // Create new mockery event
    const now = new Date();
    const expiryDate = new Date();
    expiryDate.setHours(now.getHours() + 8); // 8 hours mockery duration
    
    const mockeryEvent: MockeryEvent = {
      id: `mockery-${Date.now()}`,
      sourceUserId: sourceUser.username,
      targetUserId: targetUsername,
      action,
      timestamp: now.toISOString(),
      duration: 8 * 60 * 60 * 1000, // 8 hours in milliseconds
      expiresAt: expiryDate.toISOString(),
      active: true
    };
    
    // Update state
    setMockeryEvents(prev => [...prev, mockeryEvent]);
    
    // Update the mocked user's record
    const targetUser = mockUsers.find(user => user.username === targetUsername);
    if (targetUser) {
      const updatedMockUsers = mockUsers.map(user => {
        if (user.username === targetUsername) {
          return {
            ...user,
            lastMocked: now.toISOString(),
            mockeryCount: (user.mockeryCount || 0) + 1
          };
        }
        return user;
      });
      setMockUsers(updatedMockUsers);
      
      // Add to mocked users list
      const mockedUser: MockedUser = {
        username: targetUsername,
        displayName: targetUser.displayName || targetUsername,
        avatarUrl: targetUser.profileImage,
        mockedReason: `Subjected to ${action} mockery`,
        mockedTimestamp: now.toISOString(),
        mockedBy: sourceUser.username,
        mockedTier: targetUser.tier,
        mockeryCount: (targetUser.mockeryCount || 0) + 1
      };
      
      setMockedUsers(prev => [...prev, mockedUser]);
    }
    
    return true;
  };
  
  // Get mockery count for a user
  const getUserMockeryCount = (username: string): number => {
    const user = mockUsers.find(user => user.username === username);
    return user?.mockeryCount || 0;
  };
  
  // Get count of users mocked by a specific user
  const getUserMockedOthersCount = (username: string): number => {
    return mockeryEvents.filter(event => event.sourceUserId === username).length;
  };
  
  // Mock stats
  const stats = {
    totalMockeryEvents: mockeryEvents.length,
    activeMockeryEvents: mockeryEvents.filter(event => 
      new Date(event.expiresAt) > new Date() && event.active
    ).length,
    protectedUsers: protectedUsers.size,
    mostMockedUser: [...mockUsers].sort((a, b) => 
      (b.mockeryCount || 0) - (a.mockeryCount || 0)
    )[0]?.username || 'None'
  };
  
  return {
    mockedUsers,
    stats,
    mockUsers,
    mockUser,
    isUserProtected,
    protectUser,
    isUserShamed,
    canUserBeMocked,
    getActiveMockery,
    getUserMockeryCount,
    getUserMockedOthersCount
  };
}
