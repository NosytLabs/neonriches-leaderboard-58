import { useEffect, useState } from 'react';
import { UserProfile, ProfileBoost } from '@/types/user';
import { Crown, Sparkle, Flame, Star, Lightbulb } from 'lucide-react';
import React from 'react';

export type BoostEffectType = 'glow' | 'sparkle' | 'crown' | 'pulse' | 'rainbow';

export interface BoostEffectDetails {
  id: BoostEffectType;
  name: string;
  description: string;
  price: number;
  cssClass: string;
  bonusText: string;
  icon: React.ReactNode;
}

export const boostEffects: Record<BoostEffectType, BoostEffectDetails> = {
  glow: {
    id: 'glow',
    name: 'Royal Glow',
    description: 'A subtle golden glow around your profile',
    price: 10,
    cssClass: 'profile-boost-glow',
    bonusText: '+10% Visibility',
    icon: React.createElement(Lightbulb, { size: 16, className: "text-royal-gold" })
  },
  sparkle: {
    id: 'sparkle',
    name: 'Enchanted Sparkles',
    description: 'Magical sparkles that appear around your profile elements',
    price: 20,
    cssClass: 'profile-boost-sparkle',
    bonusText: '+15% Visibility',
    icon: React.createElement(Sparkle, { size: 16, className: "text-royal-gold" })
  },
  crown: {
    id: 'crown',
    name: 'Crown Aura',
    description: 'A crown appears above your profile with a magical aura',
    price: 40,
    cssClass: 'profile-boost-crown',
    bonusText: '+30% Visibility',
    icon: React.createElement(Crown, { size: 16, className: "text-royal-gold" })
  },
  pulse: {
    id: 'pulse',
    name: 'Royal Pulse',
    description: 'Your profile elements pulse with royal energy',
    price: 30,
    cssClass: 'profile-boost-pulse',
    bonusText: '+20% Visibility',
    icon: React.createElement(Star, { size: 16, className: "text-royal-gold" })
  },
  rainbow: {
    id: 'rainbow',
    name: 'Rainbow Royalty',
    description: 'A shifting rainbow glow surrounds your profile',
    price: 50,
    cssClass: 'profile-boost-rainbow',
    bonusText: '+40% Visibility',
    icon: React.createElement(Flame, { size: 16, className: "text-royal-gold" })
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
    ) as ProfileBoost[];
    
    setActiveBoosts(currentActiveBoosts);
    
    // Set up interval to check for expired boosts
    const interval = setInterval(() => {
      const now = Date.now();
      setActiveBoosts(prev => prev.filter(boost => boost.endTime > now));
    }, 60000); // Check every minute
    
    return () => clearInterval(interval);
  }, [user]);
  
  const getBoostEffect = (effectId: string): BoostEffectDetails | undefined => {
    return boostEffects[effectId as BoostEffectType];
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

  // Helper function to get combined CSS classes for all active boosts
  const getBoostClasses = (): string => {
    if (!activeBoosts || activeBoosts.length === 0) return '';
    
    let classes = '';
    activeBoosts.forEach(boost => {
      const effect = getBoostEffect(boost.effectId);
      if (effect && effect.cssClass) {
        classes += ` ${effect.cssClass}`;
      }
    });
    return classes.trim();
  };
  
  // Helper to check if there are any active boosts
  const hasActiveBoosts = (): boolean => {
    return activeBoosts && activeBoosts.length > 0;
  };
  
  return {
    activeBoosts,
    getBoostEffect,
    getBoostTimeRemaining,
    formatTimeRemaining,
    getBoostClasses,
    hasActiveBoosts
  };
};

export default useProfileBoost;
