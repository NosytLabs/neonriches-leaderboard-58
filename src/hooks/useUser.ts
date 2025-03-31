
import { useState, useEffect } from 'react';
import { useProfileData } from './useProfileData';
import { UserProfile } from '@/types/user';

interface UseUserResult {
  userProfile: UserProfile | null;
  isLoading: boolean;
  error: Error | null;
  isOwnProfile?: boolean;
}

/**
 * Hook to fetch and manage user profile data
 * This wraps the useProfileData hook to provide a simpler interface
 */
export const useUser = (userId?: string): UseUserResult => {
  const [isOwnProfile, setIsOwnProfile] = useState<boolean>(false);
  const { profileData, loading, error } = useProfileData(userId || '');

  useEffect(() => {
    // Logic to determine if this is the current user's profile could be added here
    if (userId && profileData && profileData.id === userId) {
      setIsOwnProfile(true);
    }
  }, [userId, profileData]);

  return {
    userProfile: profileData,
    isLoading: loading,
    error: error,
    isOwnProfile
  };
};

export default useUser;
