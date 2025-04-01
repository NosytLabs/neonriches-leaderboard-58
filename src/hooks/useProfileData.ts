
import { useState, useEffect } from 'react';
import { UserProfile, TeamColor } from '@/types/user';

interface ProfileDataResult {
  profileData: UserProfile | null;
  loading: boolean;
  error: Error | null;
  isOwnProfile?: boolean;
}

export const useProfileData = (userId: string, userContext?: UserProfile | null): ProfileDataResult => {
  const [profileData, setProfileData] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [isOwnProfile, setIsOwnProfile] = useState<boolean>(false);

  useEffect(() => {
    const fetchProfileData = async () => {
      if (!userId) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        
        // If we already have the user data in context, use that instead of fetching
        if (userContext && userContext.id === userId) {
          setProfileData(userContext);
          setIsOwnProfile(true);
          setLoading(false);
          return;
        }

        // Simulate API call to fetch profile data
        // In a real app, this would be an API call to get user profile data
        setTimeout(() => {
          // Mock data for simulation
          const teamOptions: TeamColor[] = ['red', 'green', 'blue', 'none'];
          const randomTeamIndex = Math.floor(Math.random() * 3); // Only pick from first 3 options to avoid null
          const selectedTeam = teamOptions[randomTeamIndex];
          
          const mockUserProfile: UserProfile = {
            id: userId,
            username: `user_${userId}`,
            displayName: `Royal User ${userId}`,
            email: `user${userId}@example.com`,
            profileImage: `https://source.unsplash.com/random/?portrait&${userId}`,
            rank: Math.floor(Math.random() * 100) + 1,
            amountSpent: Math.floor(Math.random() * 5000),
            totalSpent: Math.floor(Math.random() * 5000),
            walletBalance: Math.floor(Math.random() * 1000),
            tier: Math.random() > 0.7 ? 'pro' : 'basic',
            team: selectedTeam,
            joinedDate: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
            profileViews: Math.floor(Math.random() * 1000),
            profileClicks: Math.floor(Math.random() * 200),
            followers: [],
            following: [],
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
            },
            socialLinks: [],
            bio: '',
            createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
            profileBoosts: []
          };

          setProfileData(mockUserProfile);
          setIsOwnProfile(false);
          setLoading(false);
        }, 800);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch profile data'));
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [userId, userContext]);

  return { profileData, loading, error, isOwnProfile };
};
