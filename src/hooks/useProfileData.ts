
// Fix type compatibility issues in useProfileData.ts
import { useState, useEffect, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';
import { UserProfile } from '@/types/user-consolidated';
import { asFlex } from '@/utils/styleUtils';

const defaultUserProfile: UserProfile = {
  id: '',
  username: '',
  displayName: '',
  email: '',
  profileImage: '/assets/default-avatar.png',
  bio: '',
  joinedDate: new Date().toISOString(),
  isVerified: false,
  team: 'none',
  tier: 'basic',
  rank: 0,
  previousRank: 0,
  totalSpent: 0,
  amountSpent: 0,
  walletBalance: 0,
  settings: {
    profileVisibility: 'public',
    allowProfileLinks: true,
    theme: 'dark',
    notifications: true,
    emailNotifications: false,
    marketingEmails: false,
    showRank: true,
    darkMode: true,
    soundEffects: true,
    showBadges: true,
    showTeam: true,
    showSpending: true
  },
  profileBoosts: [],
  cosmetics: {
    border: [],
    font: [],
    color: [],
    emoji: [],
    title: [],
    background: [],
    effect: [],
    badge: [],
    theme: []
  },
  spendStreak: 0,
  profileViews: 0,
  profileClicks: 0,
  subscription: null,
  purchasedFeatures: []
};

export const useProfileData = (userId?: string) => {
  const [profile, setProfile] = useState<UserProfile>(defaultUserProfile);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  
  const fetchProfileData = useCallback(async () => {
    if (!userId) {
      setLoading(false);
      return;
    }
    
    try {
      setLoading(true);
      
      // Simulate API call with timeout
      setTimeout(() => {
        // In a real app, this would be an API call
        const mockUser: UserProfile = {
          ...defaultUserProfile,
          id: userId,
          username: `user_${userId}`,
          displayName: `User ${userId}`,
          rank: Math.floor(Math.random() * 100),
          previousRank: Math.floor(Math.random() * 100),
          totalSpent: Math.floor(Math.random() * 10000),
          amountSpent: Math.floor(Math.random() * 10000),
          tier: Math.random() > 0.5 ? 'premium' : 'basic',
          settings: {
            profileVisibility: 'public',
            allowProfileLinks: true,
            theme: 'dark',
            notifications: true,
            emailNotifications: false,
            marketingEmails: false,
            showRank: true,
            darkMode: true,
            soundEffects: true,
            showBadges: true,
            showTeam: true,
            showSpending: true,
            allowMentions: true,
            shameAlerts: true
          }
        };
        
        setProfile(mockUser as UserProfile); // Cast to ensure compatibility
        setLoading(false);
      }, 500);
    } catch (err) {
      setError('Failed to load profile data');
      setLoading(false);
      toast({
        title: 'Error',
        description: 'Failed to load profile data',
        variant: 'destructive'
      });
    }
  }, [userId, toast]);
  
  const updateProfile = useCallback(async (data: Partial<UserProfile>) => {
    try {
      // Simulate API call
      setLoading(true);
      
      setTimeout(() => {
        setProfile(prevProfile => ({
          ...prevProfile,
          ...data
        }));
        
        setLoading(false);
        toast({
          title: 'Profile Updated',
          description: 'Your profile has been successfully updated',
          variant: 'success'
        });
      }, 500);
      
      return true;
    } catch (err) {
      setLoading(false);
      toast({
        title: 'Error',
        description: 'Failed to update profile',
        variant: 'destructive'
      });
      return false;
    }
  }, [toast]);
  
  useEffect(() => {
    fetchProfileData();
  }, [fetchProfileData]);
  
  return {
    profile,
    loading,
    error,
    updateProfile,
    refreshProfile: fetchProfileData
  };
};
