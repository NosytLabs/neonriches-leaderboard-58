
import { useState, useEffect } from 'react';

export type MockeryAction = 'tomatoes' | 'eggs' | 'stocks' | 'silence' | 'courtJester' | 'jester' | 'dunce' | 'roast' | 'ridicule' | 'taunt';
export type MockeryTier = 'basic' | 'advanced' | 'royal' | 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

interface MockeryEffect {
  userId: string;
  type: MockeryAction;
  timestamp: number;
  expiresAt: number;
}

interface MockeryProtection {
  userId: string;
  expiresAt: number;
  hours: number;
}

interface UseMockeryEffectOptions {
  cooldownPeriod?: number;
}

const useMockeryEffect = (options: UseMockeryEffectOptions = {}) => {
  const { cooldownPeriod = 60000 * 60 * 1 } = options; // Default 1 hour cooldown
  
  const [mockeryEffects, setMockeryEffects] = useState<Record<number, MockeryAction>>({});
  const [mockeryCooldown, setMockeryCooldown] = useState<Record<number, boolean>>({});
  const [mockeryCount, setMockeryCount] = useState<Record<number, number>>({});
  const [protections, setProtections] = useState<MockeryProtection[]>([]);
  
  // Get mockery count for a user
  const getMockeryCount = (userId: number): number => {
    return mockeryCount[userId] || 0;
  };
  
  // Handle a new mockery
  const handleMockery = (userId: number, username: string, type: MockeryAction, amount: number) => {
    // Check if the user is protected
    if (isUserProtected(userId)) {
      return false;
    }
    
    // Apply mockery effect
    setMockeryEffects(prev => ({
      ...prev,
      [userId]: type
    }));
    
    // Start cooldown
    setMockeryCooldown(prev => ({
      ...prev,
      [userId]: true
    }));
    
    // Increment mockery count
    setMockeryCount(prev => ({
      ...prev,
      [userId]: (prev[userId] || 0) + 1
    }));
    
    // Set timeout to clear cooldown
    setTimeout(() => {
      setMockeryCooldown(prev => ({
        ...prev,
        [userId]: false
      }));
    }, cooldownPeriod);
    
    return true;
  };
  
  // Check if a user is protected from mockery
  const isUserProtected = (userId: number): boolean => {
    // Convert to string for comparison since we store user IDs as strings in protections
    const userIdStr = userId.toString();
    const now = Date.now();
    return protections.some(p => p.userId === userIdStr && p.expiresAt > now);
  };
  
  // Add mockery protection for a user
  const addMockeryProtection = (userId: number, hours: number): void => {
    const now = Date.now();
    const expiresAt = now + (hours * 60 * 60 * 1000);
    
    setProtections(prev => [
      ...prev.filter(p => p.userId !== userId.toString()),
      {
        userId: userId.toString(),
        expiresAt,
        hours
      }
    ]);
  };
  
  // Clean up expired protections
  useEffect(() => {
    const cleanupInterval = setInterval(() => {
      const now = Date.now();
      setProtections(prev => prev.filter(p => p.expiresAt > now));
    }, 60000); // Check every minute
    
    return () => clearInterval(cleanupInterval);
  }, []);
  
  return {
    mockeryEffects,
    mockeryCooldown,
    mockeryCount,
    getMockeryCount,
    handleMockery,
    isUserProtected,
    addMockeryProtection,
    protections
  };
};

export default useMockeryEffect;
