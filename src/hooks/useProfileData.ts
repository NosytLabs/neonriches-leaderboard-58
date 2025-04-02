
import { useState, useEffect } from 'react';
import { UserProfile } from '@/types/user';
import { useAuth } from './useAuth';

// Update the defaultSettings to include required properties
const defaultSettings = {
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
  showEmailOnProfile: false,
  rankChangeAlerts: false,
  newFollowerAlerts: false,
  teamNotifications: false,
  language: 'en',
  allowMessages: true,
  publicProfile: true,
  shameAlerts: false
};

interface UseProfileDataResult {
  profileData: UserProfile | null;
  loading: boolean;
  error: Error | null;
  updateProfile: (data: Partial<UserProfile>) => Promise<boolean>;
}

/**
 * Hook to fetch and manage user profile data
 */
export const useProfileData = (userId: string): UseProfileDataResult => {
  const { user, updateUser } = useAuth();
  const [profileData, setProfileData] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      // If viewing current user's profile, use the auth context data
      if (user && (userId === user.id || !userId)) {
        setProfileData(user);
        setLoading(false);
        return;
      }

      try {
        // Mock data fetch for demonstration
        // This would normally be an API call
        const mockUser: UserProfile = {
          id: userId,
          username: `user_${userId}`,
          displayName: `User ${userId}`,
          profileImage: 'https://via.placeholder.com/150',
          joinedDate: new Date().toISOString(),
          team: 'red',
          tier: 'silver',
          rank: 50,
          previousRank: 51,
          totalSpent: 500,
          amountSpent: 500,
          walletBalance: 200,
          settings: defaultSettings,
          cosmetics: {
            border: [],
            color: [],
            font: [],
            emoji: [],
            title: [],
            background: [],
            effect: [],
            badge: [],
            theme: []
          }
        };

        setTimeout(() => {
          setProfileData(mockUser);
          setLoading(false);
        }, 500);
      } catch (err) {
        setError(err as Error);
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [userId, user]);

  const updateProfile = async (data: Partial<UserProfile>): Promise<boolean> => {
    try {
      if (!profileData) return false;

      // Update local state first for UI responsiveness
      setProfileData({ ...profileData, ...data });

      // If updating current user's profile, use the auth context
      if (user && userId === user.id) {
        await updateUser(data);
      } else {
        // This would normally be an API call
        console.log('Updating profile:', data);
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
      }

      return true;
    } catch (err) {
      setError(err as Error);
      return false;
    }
  };

  return { profileData, loading, error, updateProfile };
};

// Export named exports for easier access
export { defaultSettings };

// Default export for compatibility
export default useProfileData;
