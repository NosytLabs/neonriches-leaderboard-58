
import { useState, useEffect } from 'react';
import { MockeryAction } from '@/types/mockery-types';

export interface MockeryProtection {
  userId: number;
  startTime: number;
  expiresAt: number;
}

export interface MockeryRecord {
  id: string;
  userId: number;
  targetId: number;
  targetUsername: string;
  action: MockeryAction;
  timestamp: number;
  expiresAt: number;
  isActive: boolean;
}

const useMockeryEffect = () => {
  const [mockeries, setMockeries] = useState<MockeryRecord[]>([]);
  const [protections, setProtections] = useState<MockeryProtection[]>([]);
  
  // Load from localStorage on init
  useEffect(() => {
    const storedMockeries = localStorage.getItem('mockeries');
    const storedProtections = localStorage.getItem('mockeryProtections');
    
    if (storedMockeries) {
      try {
        setMockeries(JSON.parse(storedMockeries));
      } catch (e) {
        console.error('Error parsing mockeries from localStorage', e);
      }
    }
    
    if (storedProtections) {
      try {
        setProtections(JSON.parse(storedProtections));
      } catch (e) {
        console.error('Error parsing mockery protections from localStorage', e);
      }
    }
  }, []);
  
  // Save to localStorage on changes
  useEffect(() => {
    localStorage.setItem('mockeries', JSON.stringify(mockeries));
  }, [mockeries]);
  
  useEffect(() => {
    localStorage.setItem('mockeryProtections', JSON.stringify(protections));
  }, [protections]);
  
  // Clean up expired mockeries and protections periodically
  useEffect(() => {
    const cleanupInterval = setInterval(() => {
      const now = Date.now();
      
      setMockeries(prev => prev.filter(m => m.expiresAt > now));
      setProtections(prev => prev.filter(p => p.expiresAt > now));
    }, 60000); // Cleanup every minute
    
    return () => clearInterval(cleanupInterval);
  }, []);
  
  // Check if a user is protected from mockery
  const isUserProtected = (userId: number): boolean => {
    const now = Date.now();
    return protections.some(p => p.userId === userId && p.expiresAt > now);
  };
  
  // Add mockery protection for a user
  const addMockeryProtection = (userId: number, hours: number) => {
    // Remove any existing protection
    const filteredProtections = protections.filter(p => p.userId !== userId);
    
    // Add new protection
    const now = Date.now();
    const newProtection: MockeryProtection = {
      userId,
      startTime: now,
      expiresAt: now + hours * 60 * 60 * 1000
    };
    
    setProtections([...filteredProtections, newProtection]);
  };
  
  // Handle new mockery action
  const handleMockery = (
    userId: number,
    targetUsername: string,
    action: MockeryAction,
    targetId: number
  ): boolean => {
    // Check if target is protected
    if (isUserProtected(targetId)) {
      return false;
    }
    
    // Add mockery record
    const now = Date.now();
    const newMockery: MockeryRecord = {
      id: `mockery_${now}_${userId}_${targetId}`,
      userId,
      targetId,
      targetUsername,
      action,
      timestamp: now,
      expiresAt: now + 24 * 60 * 60 * 1000, // 24 hours
      isActive: true
    };
    
    setMockeries(prev => [...prev, newMockery]);
    return true;
  };
  
  // Get active mockeries for a user
  const getUserMockeries = (userId: number): MockeryRecord[] => {
    const now = Date.now();
    return mockeries.filter(m => m.targetId === userId && m.expiresAt > now);
  };
  
  return {
    mockeries,
    protections,
    isUserProtected,
    addMockeryProtection,
    handleMockery,
    getUserMockeries
  };
};

export default useMockeryEffect;
