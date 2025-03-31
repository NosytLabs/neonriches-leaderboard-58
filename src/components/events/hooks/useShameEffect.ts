
import { useState, useEffect } from 'react';
import { MockeryAction } from '@/types/mockery';
import { useToast } from '@/hooks/use-toast';

interface ShameEffect {
  userId: number;
  username: string;
  action: MockeryAction;
  appliedAt: string;
  expiresAt: string;
}

interface ShameStorage {
  shameEffects: ShameEffect[];
  shameCounts: Record<number, number>;
}

const useShameEffect = () => {
  const { toast } = useToast();
  const [shameEffects, setShameEffects] = useState<ShameEffect[]>([]);
  const [shameCooldown, setShameCooldown] = useState<Record<number, number>>({});
  const [shameCount, setShameCount] = useState<Record<number, number>>({});
  
  // Load shame effects from local storage on mount
  useEffect(() => {
    try {
      const storedData = localStorage.getItem('shameData');
      if (storedData) {
        const data: ShameStorage = JSON.parse(storedData);
        
        // Filter out expired shame effects
        const now = new Date();
        const activeEffects = data.shameEffects.filter(
          effect => new Date(effect.expiresAt) > now
        );
        
        setShameEffects(activeEffects);
        setShameCount(data.shameCounts || {});
      }
    } catch (error) {
      console.error('Error loading shame data:', error);
    }
  }, []);
  
  // Save effects to local storage when they change
  useEffect(() => {
    try {
      const dataToStore: ShameStorage = {
        shameEffects,
        shameCounts: shameCount
      };
      
      localStorage.setItem('shameData', JSON.stringify(dataToStore));
    } catch (error) {
      console.error('Error saving shame data:', error);
    }
  }, [shameEffects, shameCount]);
  
  // Apply a shame effect to a user
  const handleShame = (userId: number, username: string, action: MockeryAction): boolean => {
    // Check if user is already shamed
    if (shameEffects.some(effect => effect.userId === userId)) {
      toast({
        title: "Already Shamed",
        description: `${username} is already experiencing a mockery effect.`,
        variant: "destructive",
      });
      return false;
    }
    
    // Check if on cooldown
    if (shameCooldown[userId]) {
      toast({
        title: "On Cooldown",
        description: `You must wait before shaming ${username} again.`,
        variant: "destructive",
      });
      return false;
    }
    
    // Calculate expiration time (24 hours from now)
    const now = new Date();
    const expiresAt = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    
    // Create new shame effect
    const newEffect: ShameEffect = {
      userId,
      username,
      action,
      appliedAt: now.toISOString(),
      expiresAt: expiresAt.toISOString()
    };
    
    // Update state
    setShameEffects(prev => [...prev, newEffect]);
    
    // Update shame count for the user
    setShameCount(prev => ({
      ...prev,
      [userId]: (prev[userId] || 0) + 1
    }));
    
    // Set cooldown (5 minutes for demo purposes)
    setShameCooldown(prev => ({
      ...prev,
      [userId]: Date.now() + 5 * 60 * 1000
    }));
    
    // Create a timeout to remove the cooldown
    setTimeout(() => {
      setShameCooldown(prev => {
        const newCooldowns = { ...prev };
        delete newCooldowns[userId];
        return newCooldowns;
      });
    }, 5 * 60 * 1000);
    
    // Show success toast
    toast({
      title: "Mockery Applied",
      description: `You have successfully applied ${action} to ${username}.`,
      variant: "success",
    });
    
    return true;
  };
  
  // Get the active mockery for a user
  const getActiveMockery = (userId: number) => {
    return shameEffects.find(effect => effect.userId === userId) || null;
  };
  
  // Get the shame count for a user
  const getShameCount = (userId: number): number => {
    return shameCount[userId] || 0;
  };
  
  return {
    shameCooldown,
    shameEffects,
    shameCount,
    getShameCount,
    handleShame,
    getActiveMockery
  };
};

export default useShameEffect;
