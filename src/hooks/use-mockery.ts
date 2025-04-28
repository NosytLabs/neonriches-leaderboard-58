
import { useState, useCallback } from 'react';
import { MockeryAction, MockeryEvent, MockeryTarget } from '@/types/mockery-types';
import useAuth from './useAuth';
import { useToast } from './use-toast';

export const useMockery = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const [recentEvents, setRecentEvents] = useState<MockeryEvent[]>([]);
  
  const performMockery = useCallback(async (
    action: MockeryAction,
    target: MockeryTarget,
    message?: string
  ) => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "You must be logged in to mock others.",
        variant: "destructive"
      });
      return;
    }
    
    setIsProcessing(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newEvent: MockeryEvent = {
        id: `mockery-${Date.now()}`,
        action,
        sourceUserId: user.id,
        sourceUsername: user.username,
        targetUserId: target.userId,
        targetUsername: target.username,
        createdAt: new Date(),
        message
      };
      
      setRecentEvents(prev => [newEvent, ...prev]);
      
      toast({
        title: "Mockery Successful",
        description: `You successfully ${action}ed ${target.displayName || target.username}!`,
        variant: "success"
      });
      
      return newEvent;
    } catch (error) {
      toast({
        title: "Mockery Failed",
        description: "There was an error performing this action.",
        variant: "destructive"
      });
      return null;
    } finally {
      setIsProcessing(false);
    }
  }, [user, toast]);
  
  return {
    performMockery,
    isProcessing,
    recentEvents
  };
};

export default useMockery;
