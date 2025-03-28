
import { useState, useEffect } from 'react';
import { MockUser, MockeryAction } from '@/components/mockery/utils/mockeryUtils';
import { useToast } from './use-toast';

export interface UseMockeryResult {
  mockUsers: MockUser[];
  isUserProtected: (username: string) => boolean;
  protectUser: (username: string) => void;
  isUserShamed: (username: string) => boolean;
  canUserBeMocked: (username: string) => boolean;
  mockUser: (username: string, action: MockeryAction, amount: number) => boolean;
}

// Mock data for development
const initialMockUsers: MockUser[] = [
  {
    id: '1',
    username: 'royalPeasant',
    displayName: 'Royal Peasant',
    profileImage: '/avatars/peasant.jpg',
    mockedBy: [],
    mockeryCount: 0,
    isShamed: false,
    isProtected: false
  },
  {
    id: '2',
    username: 'kingNeedsGold',
    displayName: 'King Needs Gold',
    profileImage: '/avatars/king.jpg',
    mockedBy: [],
    mockeryCount: 0,
    isShamed: false,
    isProtected: true,
    protectedUntil: new Date(Date.now() + 86400000) // 24 hours from now
  },
  {
    id: '3',
    username: 'jesterFool',
    displayName: 'Jester Fool',
    profileImage: '/avatars/jester.jpg',
    mockedBy: ['user1', 'user2'],
    mockeryCount: 2,
    isShamed: true,
    isProtected: false,
    lastMocked: new Date()
  }
];

const useMockery = (): UseMockeryResult => {
  const { toast } = useToast();
  const [mockUsers, setMockUsers] = useState<MockUser[]>(initialMockUsers);
  
  // Load from localStorage if available
  useEffect(() => {
    const savedMockUsers = localStorage.getItem('mockery_users');
    if (savedMockUsers) {
      try {
        const parsedUsers = JSON.parse(savedMockUsers);
        
        // Convert date strings back to Date objects
        const processedUsers = parsedUsers.map((user: any) => ({
          ...user,
          lastMocked: user.lastMocked ? new Date(user.lastMocked) : undefined,
          protectedUntil: user.protectedUntil ? new Date(user.protectedUntil) : undefined
        }));
        
        setMockUsers(processedUsers);
      } catch (error) {
        console.error('Failed to parse mockery users from localStorage:', error);
      }
    }
  }, []);
  
  // Save to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('mockery_users', JSON.stringify(mockUsers));
  }, [mockUsers]);
  
  const isUserProtected = (username: string): boolean => {
    const user = mockUsers.find(u => u.username === username);
    if (!user) return false;
    
    if (user.isProtected && user.protectedUntil) {
      // Check if protection has expired
      if (new Date() > user.protectedUntil) {
        // Protection expired, update the user
        setMockUsers(prev => 
          prev.map(u => 
            u.username === username 
              ? { ...u, isProtected: false, protectedUntil: undefined } 
              : u
          )
        );
        return false;
      }
      return true;
    }
    
    return false;
  };
  
  const protectUser = (username: string): void => {
    const protectionDuration = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
    const protectedUntil = new Date(Date.now() + protectionDuration);
    
    setMockUsers(prev => {
      const userExists = prev.some(u => u.username === username);
      
      if (userExists) {
        return prev.map(user => 
          user.username === username 
            ? { ...user, isProtected: true, protectedUntil } 
            : user
        );
      } else {
        // Create a new user with protection
        return [
          ...prev,
          {
            id: `user_${Date.now()}`,
            username,
            mockeryCount: 0,
            isShamed: false,
            isProtected: true,
            protectedUntil
          }
        ];
      }
    });
    
    toast({
      title: "Protection Granted",
      description: `${username} is now protected from mockery for 7 days.`,
      variant: "success"
    });
  };
  
  const isUserShamed = (username: string): boolean => {
    const user = mockUsers.find(u => u.username === username);
    return user ? user.isShamed : false;
  };
  
  const canUserBeMocked = (username: string): boolean => {
    return !isUserProtected(username);
  };
  
  const mockUser = (username: string, action: MockeryAction, amount: number): boolean => {
    if (!canUserBeMocked(username)) {
      toast({
        title: "Mockery Failed",
        description: "This user is protected from mockery.",
        variant: "destructive"
      });
      return false;
    }
    
    setMockUsers(prev => {
      const userExists = prev.some(u => u.username === username);
      
      if (userExists) {
        return prev.map(user => {
          if (user.username === username) {
            const mockedBy = [...(user.mockedBy || []), 'currentUser'];
            const mockeryCount = (user.mockeryCount || 0) + 1;
            const isShamed = mockeryCount >= 3; // User is shamed after 3 mockeries
            
            return {
              ...user,
              mockedBy,
              mockeryCount,
              isShamed,
              lastMocked: new Date(),
              tier: action
            };
          }
          return user;
        });
      } else {
        // Create a new user that's been mocked
        return [
          ...prev,
          {
            id: `user_${Date.now()}`,
            username,
            mockedBy: ['currentUser'],
            mockeryCount: 1,
            isShamed: false,
            isProtected: false,
            lastMocked: new Date(),
            tier: action
          }
        ];
      }
    });
    
    toast({
      title: "Mockery Successful",
      description: `You have successfully mocked ${username}!`,
      variant: "default"
    });
    
    return true;
  };
  
  return {
    mockUsers,
    isUserProtected,
    protectUser,
    isUserShamed,
    canUserBeMocked,
    mockUser
  };
};

export default useMockery;
