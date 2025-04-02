
import { useState, useEffect } from 'react';
import { useProfileData } from './useProfileData';
import { UserProfile } from '@/types/user';
import { toTeamColor } from '@/utils/typeConverters';

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
  const { profile, loading, error } = useProfileData(userId || '');

  useEffect(() => {
    // Logic to determine if this is the current user's profile
    if (userId && profile && profile.id === userId) {
      setIsOwnProfile(true);
    }
  }, [userId, profile]);

  // Convert the profile to ensure team is TeamColor type
  const adaptedProfile = profile ? {
    ...profile,
    team: toTeamColor(profile.team)
  } as UserProfile : null;

  return {
    userProfile: adaptedProfile,
    isLoading: loading,
    error: error ? new Error(error) : null,
    isOwnProfile
  };
};

export default useUser;
