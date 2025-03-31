
import { useState, useEffect } from 'react';
import { MockeryAction } from '@/types/mockery';
import { useToast } from '@/hooks/use-toast';

export interface ShameEffect {
  userId: number;
  username: string;
  action: MockeryAction;
  appliedAt: string;
  expiresAt: string;
}

const useShameEffect = () => {
  const { toast } = useToast();
  const [shameEffects, setShameEffects] = useState<ShameEffect[]>([]);
  const [shameCooldown, setShameCooldown] = useState<Record<number, boolean>>({});
  const [shameCount, setShameCount] = useState<Record<number, number>>({});
  
  // Load existing effects from localStorage
  useEffect(() => {
    try {
      const storedEffects = localStorage.getItem('shameEffects');
      const storedCounts = localStorage.getItem('shameCounts');
      
      if (storedEffects) {
        const parsedEffects: ShameEffect[] = JSON.parse(storedEffects);
        // Filter out expired effects
        const currentEffects = parsedEffects.filter(effect => {
          return new Date(effect.expiresAt) > new Date();
        });
        setShameEffects(currentEffects);
      }
      
      if (storedCounts) {
        setShameCount(JSON.parse(storedCounts));
      }
    } catch (error) {
      console.error('Error loading shame effects:', error);
    }
  }, []);
  
  // Save effects to localStorage when they change
  useEffect(() => {
    try {
      localStorage.setItem('shameEffects', JSON.stringify(shameEffects));
      localStorage.setItem('shameCounts', JSON.stringify(shameCount));
    } catch (error) {
      console.error('Error saving shame effects:', error);
    }
  }, [shameEffects, shameCount]);
  
  // Handle adding a new shame effect
  const handleShame = (userId: number, username: string, action: MockeryAction) => {
    const now = new Date();
    
    // Set cooldown for this user
    setShameCooldown(prev => ({
      ...prev,
      [userId]: true
    }));
    
    // Set a timeout to remove the cooldown after 10 seconds
    setTimeout(() => {
      setShameCooldown(prev => ({
        ...prev,
        [userId]: false
      }));
    }, 10000);
    
    // Set expiration time (24 hours from now)
    const expiresAt = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    
    // Add the new effect
    const newEffect: ShameEffect = {
      userId,
      username,
      action,
      appliedAt: now.toISOString(),
      expiresAt: expiresAt.toISOString()
    };
    
    // Update existing effects (remove any existing effect for this user)
    setShameEffects(prev => [
      ...prev.filter(effect => effect.userId !== userId),
      newEffect
    ]);
    
    // Increment the shame count for this user
    setShameCount(prev => ({
      ...prev,
      [userId]: (prev[userId] || 0) + 1
    }));
    
    // Show a toast notification
    toast({
      title: "Mockery Applied",
      description: `You have applied ${action} to ${username}.`,
      variant: "default"
    });
    
    return true;
  };
  
  // Get shame count for a user
  const getShameCount = (userId: number): number => {
    return shameCount[userId] || 0;
  };
  
  // Get active mockery for a user
  const getActiveMockery = (userId: number): ShameEffect | null => {
    return shameEffects.find(effect => effect.userId === userId) || null;
  };
  
  return {
    shameEffects,
    shameCooldown,
    shameCount,
    handleShame,
    getShameCount,
    getActiveMockery
  };
};

export default useShameEffect;
