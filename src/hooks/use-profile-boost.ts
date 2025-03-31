
import { useState, useEffect } from 'react';
import { UserProfile } from '@/types/user-consolidated';
import { ProfileBoost, BoostEffect, BoostEffectType } from '@/types/boost';

// Sample boost effect data
const BOOST_EFFECTS: Record<string, BoostEffect> = {
  glow: {
    id: 'glow',
    name: 'Golden Glow',
    description: 'Adds a subtle golden glow to your profile',
    cssClass: 'profile-boost-glow',
    type: 'effect',
    tier: 'basic',
    price: 10,
    duration: 3 * 24 * 60 * 60 * 1000, // 3 days in ms
    durationDays: 3,
    icon: 'Sparkles',
    previewImage: '/assets/boosts/glow.png'
  },
  sparkle: {
    id: 'sparkle',
    name: 'Royal Sparkle',
    description: 'Add animated sparkles to your profile',
    cssClass: 'profile-boost-sparkle',
    type: 'animation',
    tier: 'premium',
    price: 25,
    duration: 7 * 24 * 60 * 60 * 1000, // 7 days in ms
    durationDays: 7,
    icon: 'Star',
    previewImage: '/assets/boosts/sparkle.png'
  },
  crown: {
    id: 'crown',
    name: 'Royal Crown',
    description: 'Display a majestic crown on your profile',
    cssClass: 'profile-boost-crown',
    type: 'badge',
    tier: 'royal',
    price: 50,
    duration: 14 * 24 * 60 * 60 * 1000, // 14 days in ms
    durationDays: 14,
    icon: 'Crown',
    previewImage: '/assets/boosts/crown.png'
  }
};

const useProfileBoost = (user: UserProfile | null) => {
  const [activeBoosts, setActiveBoosts] = useState<ProfileBoost[]>([]);
  const [availableBoosts, setAvailableBoosts] = useState<BoostEffect[]>([]);

  useEffect(() => {
    if (!user) {
      setActiveBoosts([]);
      return;
    }

    // Get current time
    const now = new Date();
    
    // Filter active boosts
    const currentBoosts = (user.profileBoosts || []).filter(boost => {
      if (!boost.endDate) return false;
      return new Date(boost.endDate) > now;
    });
    
    setActiveBoosts(currentBoosts);
    
    // Set available boosts based on user tier
    const boostValues = Object.values(BOOST_EFFECTS);
    setAvailableBoosts(boostValues);
  }, [user]);

  // Get time left for a boost
  const getBoostTimeLeft = (boost: ProfileBoost): string => {
    if (!boost.endDate) return 'Unknown';
    
    const now = new Date();
    const end = new Date(boost.endDate);
    
    if (end <= now) return 'Expired';
    
    const diffTime = end.getTime() - now.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    if (diffDays > 0) {
      return `${diffDays} day${diffDays !== 1 ? 's' : ''} ${diffHours} hour${diffHours !== 1 ? 's' : ''}`;
    }
    
    if (diffHours > 0) {
      const diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
      return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ${diffMinutes} minute${diffMinutes !== 1 ? 's' : ''}`;
    }
    
    const diffMinutes = Math.floor(diffTime / (1000 * 60));
    return `${diffMinutes} minute${diffMinutes !== 1 ? 's' : ''}`;
  };

  // Get boost effect data
  const getBoostEffect = (effectIdOrType: string): BoostEffect | null => {
    return BOOST_EFFECTS[effectIdOrType] || null;
  };

  return {
    activeBoosts,
    availableBoosts,
    getBoostTimeLeft,
    getBoostEffect,
    BOOST_EFFECTS
  };
};

export default useProfileBoost;
export type { BoostEffectType };
