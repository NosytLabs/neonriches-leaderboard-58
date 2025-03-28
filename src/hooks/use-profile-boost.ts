
import { useEffect, useState } from 'react';
import { UserProfile, ProfileBoost } from '@/types/user';

export type BoostEffect = 'glow' | 'sparkle' | 'crown' | 'pulse' | 'rainbow';

export const boostEffects: Record<BoostEffect, { name: string, description: string, price: number }> = {
  glow: {
    name: 'Royal Glow',
    description: 'A subtle golden glow around your profile',
    price: 10
  },
  sparkle: {
    name: 'Enchanted Sparkles',
    description: 'Magical sparkles that appear around your profile elements',
    price: 20
  },
  crown: {
    name: 'Crown Aura',
    description: 'A crown appears above your profile with a magical aura',
    price: 40
  },
  pulse: {
    name: 'Royal Pulse',
    description: 'Your profile elements pulse with royal energy',
    price: 30
  },
  rainbow: {
    name: 'Rainbow Royalty',
    description: 'A shifting rainbow glow surrounds your profile',
    price: 50
  }
};

export const useProfileBoost = (user: UserProfile | null) => {
  const [activeBoosts, setActiveBoosts] = useState<ProfileBoost[]>([]);
  
  useEffect(() => {
    if (!user || !user.profileBoosts) {
      setActiveBoosts([]);
      return;
    }
    
    // Filter only active boosts
    const currentTime = Date.now();
    const currentActiveBoosts = user.profileBoosts.filter(
      boost => boost.endTime > currentTime
    );
    
    setActiveBoosts(currentActiveBoosts);
    
    // Set up interval to check for expired boosts
    const interval = setInterval(() => {
      const now = Date.now();
      setActiveBoosts(prev => prev.filter(boost => boost.endTime > now));
    }, 60000); // Check every minute
    
    return () => clearInterval(interval);
  }, [user]);
  
  const getBoostEffect = (effectId: string): BoostEffect | undefined => {
    if (Object.keys(boostEffects).includes(effectId)) {
      return effectId as BoostEffect;
    }
    return undefined;
  };
  
  const getBoostTimeRemaining = (boost: ProfileBoost): number => {
    const now = Date.now();
    return Math.max(0, boost.endTime - now);
  };
  
  const formatTimeRemaining = (milliseconds: number): string => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    if (days > 0) {
      return `${days}d ${hours % 24}h`;
    } else if (hours > 0) {
      return `${hours}h ${minutes % 60}m`;
    } else {
      return `${minutes}m`;
    }
  };
  
  return {
    activeBoosts,
    getBoostEffect,
    getBoostTimeRemaining,
    formatTimeRemaining
  };
};
