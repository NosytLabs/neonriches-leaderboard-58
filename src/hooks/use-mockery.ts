
import { useState, useEffect, useCallback } from 'react';
import { MockeryAction } from '@/types/mockery';
import { useToast } from './use-toast';

// Mock user for testing
interface MockUser {
  userId: string;
  username: string;
  profileImage?: string;
  mockedBy?: string[];
  mockeryCount: number;
  isShamed: boolean;
  isProtected: boolean;
  protectedUntil?: Date;
  lastMocked?: Date;
  tier?: string;
}

interface UseMockeryResult {
  mockUsers: MockUser[];
  isUserProtected: (username: string) => boolean;
  protectUser: (username: string) => void;
  isUserShamed: (username: string) => boolean;
  canUserBeMocked: (username: string) => boolean;
  mockUser: (username: string, action: MockeryAction, amount: number) => boolean;
}

const useMockery = (): UseMockeryResult => {
  const { toast } = useToast();
  const [mockUsers, setMockUsers] = useState<MockUser[]>([
    {
      userId: '1',
      username: 'kingSpender',
      mockeryCount: 0,
      isShamed: false,
      isProtected: false
    },
    {
      userId: '2',
      username: 'queenCash',
      mockeryCount: 0,
      isShamed: false,
      isProtected: false
    },
    {
      userId: '3',
      username: 'bishopBaller',
      mockeryCount: 0,
      isShamed: false,
      isProtected: false
    }
  ]);

  // Load mockery data from localStorage
  useEffect(() => {
    const storedMockery = localStorage.getItem('mockery_data');
    if (storedMockery) {
      try {
        const parsedData = JSON.parse(storedMockery);
        setMockUsers(parsedData);
      } catch (error) {
        console.error('Error parsing mockery data:', error);
      }
    }
  }, []);

  // Save mockery data to localStorage
  const saveMockeryData = useCallback((data: MockUser[]) => {
    localStorage.setItem('mockery_data', JSON.stringify(data));
  }, []);

  // Check if a user is protected from mockery
  const isUserProtected = useCallback((username: string): boolean => {
    const user = mockUsers.find(u => u.username === username);
    
    if (!user || !user.isProtected) return false;
    
    if (user.protectedUntil) {
      const now = new Date();
      const protectedUntil = new Date(user.protectedUntil);
      
      if (now > protectedUntil) {
        // Protection has expired
        const updatedUsers = mockUsers.map(u => 
          u.username === username 
            ? { ...u, isProtected: false, protectedUntil: undefined } 
            : u
        );
        
        setMockUsers(updatedUsers);
        saveMockeryData(updatedUsers);
        return false;
      }
      
      return true;
    }
    
    return user.isProtected;
  }, [mockUsers, saveMockeryData]);

  // Protect a user from mockery
  const protectUser = useCallback((username: string): void => {
    const protectionDuration = 7 * 24 * 60 * 60 * 1000; // 7 days in ms
    const protectedUntil = new Date(Date.now() + protectionDuration);
    
    const userExists = mockUsers.some(u => u.username === username);
    
    if (userExists) {
      const updatedUsers = mockUsers.map(user => 
        user.username === username 
          ? { ...user, isProtected: true, protectedUntil } 
          : user
      );
      setMockUsers(updatedUsers);
      saveMockeryData(updatedUsers);
    } else {
      const newUser: MockUser = {
        userId: `user_${Date.now()}`,
        username,
        mockeryCount: 0,
        isShamed: false,
        isProtected: true,
        protectedUntil
      };
      
      const updatedUsers = [...mockUsers, newUser];
      setMockUsers(updatedUsers);
      saveMockeryData(updatedUsers);
    }
    
    toast({
      title: "Protection Active",
      description: `${username} is now protected from mockery for 7 days`,
    });
  }, [mockUsers, saveMockeryData, toast]);

  // Check if a user is currently shamed
  const isUserShamed = useCallback((username: string): boolean => {
    const user = mockUsers.find(u => u.username === username);
    
    if (!user || !user.isShamed) return false;
    
    if (user.lastMocked) {
      const now = new Date();
      const mockedTime = new Date(user.lastMocked);
      const mockedDuration = 24 * 60 * 60 * 1000; // 24 hours in ms
      
      if (now.getTime() - mockedTime.getTime() > mockedDuration) {
        // Mockery has expired
        const updatedUsers = mockUsers.map(u => 
          u.username === username 
            ? { ...u, isShamed: false } 
            : u
        );
        
        setMockUsers(updatedUsers);
        saveMockeryData(updatedUsers);
        return false;
      }
      
      return true;
    }
    
    return user.isShamed;
  }, [mockUsers, saveMockeryData]);

  // Check if a user can be mocked (not on cooldown)
  const canUserBeMocked = useCallback((username: string): boolean => {
    // Users can't mock themselves
    if (username === "currentUser") return false;
    
    // Protected users can't be mocked
    if (isUserProtected(username)) return false;
    
    const user = mockUsers.find(u => u.username === username);
    
    if (!user || !user.lastMocked) return true;
    
    const now = new Date();
    const lastMocked = new Date(user.lastMocked);
    const cooldownPeriod = 4 * 60 * 60 * 1000; // 4 hours in ms
    
    return now.getTime() - lastMocked.getTime() > cooldownPeriod;
  }, [mockUsers, isUserProtected]);

  // Mock a user
  const mockUser = useCallback((username: string, action: MockeryAction, amount: number): boolean => {
    if (isUserProtected(username)) {
      toast({
        title: "Mockery Failed",
        description: `${username} is protected from mockery`,
        variant: "destructive"
      });
      return false;
    }
    
    if (!canUserBeMocked(username)) {
      toast({
        title: "Cooldown Active",
        description: `${username} was recently mocked. Try again later.`,
        variant: "destructive"
      });
      return false;
    }
    
    const userExists = mockUsers.some(u => u.username === username);
    const now = new Date();
    
    if (userExists) {
      const updatedUsers = mockUsers.map(user => 
        user.username === username 
          ? { 
              ...user, 
              isShamed: true, 
              lastMocked: now, 
              mockeryCount: user.mockeryCount + 1,
              tier: action
            } 
          : user
      );
      
      setMockUsers(updatedUsers);
      saveMockeryData(updatedUsers);
    } else {
      const newUser: MockUser = {
        userId: `user_${Date.now()}`,
        username,
        mockeryCount: 1,
        isShamed: true,
        isProtected: false,
        lastMocked: now,
        tier: action
      };
      
      const updatedUsers = [...mockUsers, newUser];
      setMockUsers(updatedUsers);
      saveMockeryData(updatedUsers);
    }
    
    toast({
      title: "Mockery Successful",
      description: `You have successfully mocked ${username}`,
    });
    
    return true;
  }, [mockUsers, isUserProtected, canUserBeMocked, saveMockeryData, toast]);

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
export type { UseMockeryResult };
