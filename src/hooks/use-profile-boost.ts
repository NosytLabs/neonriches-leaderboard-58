
import { useState, useEffect } from 'react';
import { UserProfile } from '@/types/user';

export type BoostEffect = 
  | 'glow' 
  | 'rainbow' 
  | 'pulse' 
  | 'sparkle' 
  | 'crown' 
  | 'shimmer' 
  | 'flames'
  | 'banner';

interface BoostEffectDetails {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number; // in hours
  cssClass: string;
  exclusive: boolean; // can be applied with other effects?
}

interface ActiveBoost {
  effectId: string;
  startTime: number;
  endTime: number;
}

export const boostEffects: Record<string, BoostEffectDetails> = {
  'glow': {
    id: 'glow',
    name: 'Royal Glow',
    description: 'Surrounds your name with a subtle royal glow',
    price: 5,
    duration: 24, // 24 hours
    cssClass: 'royal-glow',
    exclusive: false
  },
  'rainbow': {
    id: 'rainbow',
    name: 'Rainbow Text',
    description: 'Makes your name cycle through royal colors',
    price: 10,
    duration: 48, // 48 hours
    cssClass: 'royal-rainbow-text',
    exclusive: true
  },
  'pulse': {
    id: 'pulse',
    name: 'Pulsing Aura',
    description: 'Creates a pulsing aura around your profile card',
    price: 15,
    duration: 72, // 72 hours
    cssClass: 'royal-pulse',
    exclusive: false
  },
  'sparkle': {
    id: 'sparkle',
    name: 'Sparkling Effect',
    description: 'Adds twinkling stars around your username',
    price: 20,
    duration: 72, // 72 hours
    cssClass: 'royal-sparkle',
    exclusive: false
  },
  'crown': {
    id: 'crown',
    name: 'Crown Display',
    description: 'Shows a small crown icon next to your name',
    price: 25,
    duration: 96, // 96 hours
    cssClass: 'royal-crown',
    exclusive: false
  },
  'shimmer': {
    id: 'shimmer',
    name: 'Gold Shimmer',
    description: 'Adds a gold shimmering effect to your profile',
    price: 30,
    duration: 120, // 120 hours
    cssClass: 'royal-shimmer',
    exclusive: true
  },
  'flames': {
    id: 'flames',
    name: 'Royal Flames',
    description: 'Surrounds your profile with animated flames',
    price: 50,
    duration: 168, // 168 hours (1 week)
    cssClass: 'royal-flames',
    exclusive: true
  },
  'banner': {
    id: 'banner',
    name: 'Royal Banner',
    description: 'Displays a royal banner behind your name',
    price: 75,
    duration: 336, // 336 hours (2 weeks)
    cssClass: 'royal-banner',
    exclusive: true
  }
};

export function useProfileBoost(user: UserProfile | null) {
  const [activeBoosts, setActiveBoosts] = useState<ActiveBoost[]>([]);
  
  useEffect(() => {
    if (!user) return;
    
    // Load active boosts from localStorage
    const storedBoosts = localStorage.getItem(`profile_boosts_${user.id}`);
    if (storedBoosts) {
      try {
        const parsedBoosts = JSON.parse(storedBoosts);
        // Filter out expired boosts
        const currentTime = Date.now();
        const activeBoosts = parsedBoosts.filter((boost: ActiveBoost) => boost.endTime > currentTime);
        setActiveBoosts(activeBoosts);
        
        // If there are expired boosts that were filtered out, save the updated list
        if (activeBoosts.length !== parsedBoosts.length) {
          localStorage.setItem(`profile_boosts_${user.id}`, JSON.stringify(activeBoosts));
        }
      } catch (error) {
        console.error("Error parsing profile boosts:", error);
      }
    }
    
    // Check for expired boosts every minute
    const interval = setInterval(() => {
      const currentTime = Date.now();
      setActiveBoosts(prevBoosts => {
        const updatedBoosts = prevBoosts.filter(boost => boost.endTime > currentTime);
        
        // If boosts changed, save to localStorage
        if (updatedBoosts.length !== prevBoosts.length) {
          localStorage.setItem(`profile_boosts_${user.id}`, JSON.stringify(updatedBoosts));
        }
        
        return updatedBoosts;
      });
    }, 60000); // Check every minute
    
    return () => clearInterval(interval);
  }, [user]);
  
  const addBoost = async (boostId: string): Promise<boolean> => {
    if (!user || !boostEffects[boostId]) return false;
    
    const effect = boostEffects[boostId];
    const currentTime = Date.now();
    const endTime = currentTime + (effect.duration * 60 * 60 * 1000); // Convert hours to ms
    
    // Check if this is an exclusive effect
    if (effect.exclusive) {
      // Remove any other exclusive effects
      const updatedBoosts = activeBoosts.filter(boost => {
        const effectDetails = boostEffects[boost.effectId];
        return !effectDetails.exclusive;
      });
      
      const newBoost: ActiveBoost = {
        effectId: boostId,
        startTime: currentTime,
        endTime
      };
      
      const newBoosts = [...updatedBoosts, newBoost];
      setActiveBoosts(newBoosts);
      
      if (user) {
        localStorage.setItem(`profile_boosts_${user.id}`, JSON.stringify(newBoosts));
      }
    } else {
      // Non-exclusive effect - just add it
      const newBoost: ActiveBoost = {
        effectId: boostId,
        startTime: currentTime,
        endTime
      };
      
      const newBoosts = [...activeBoosts, newBoost];
      setActiveBoosts(newBoosts);
      
      if (user) {
        localStorage.setItem(`profile_boosts_${user.id}`, JSON.stringify(newBoosts));
      }
    }
    
    return true;
  };
  
  const removeBoost = (boostId: string): boolean => {
    if (!user) return false;
    
    const updatedBoosts = activeBoosts.filter(boost => boost.effectId !== boostId);
    
    if (updatedBoosts.length !== activeBoosts.length) {
      setActiveBoosts(updatedBoosts);
      localStorage.setItem(`profile_boosts_${user.id}`, JSON.stringify(updatedBoosts));
      return true;
    }
    
    return false;
  };
  
  const getActiveEffects = (): string[] => {
    const currentTime = Date.now();
    return activeBoosts
      .filter(boost => boost.endTime > currentTime)
      .map(boost => boostEffects[boost.effectId].cssClass);
  };
  
  const getBoostRemaining = (boostId: string): number => {
    const currentTime = Date.now();
    const boost = activeBoosts.find(b => b.effectId === boostId);
    
    if (!boost) return 0;
    
    const remaining = Math.max(0, boost.endTime - currentTime);
    return Math.floor(remaining / (60 * 60 * 1000)); // Convert ms to hours
  };
  
  const hasActiveBoost = (boostId: string): boolean => {
    const currentTime = Date.now();
    return activeBoosts.some(boost => boost.effectId === boostId && boost.endTime > currentTime);
  };
  
  return {
    activeBoosts,
    addBoost,
    removeBoost,
    getActiveEffects,
    getBoostRemaining,
    hasActiveBoost
  };
}

export default useProfileBoost;
