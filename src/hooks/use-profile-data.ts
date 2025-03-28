
import { useState, useEffect } from 'react';

// Profile data types
interface ProfileData {
  userId: string;
  displayName: string;
  bio: string;
  followers: number;
  following: number;
  profileViews: number;
  totalSpent: number;
  achievements: {
    id: string;
    title: string;
    description: string;
    dateEarned: string;
  }[];
  recentActivity: {
    id: string;
    type: string;
    description: string;
    timestamp: string;
  }[];
}

export const useProfileData = (userId: string) => {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      if (!userId) {
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      
      try {
        // In a real app, this would be an API call
        // For now we'll mock the data
        await new Promise(resolve => setTimeout(resolve, 800));
        
        const mockData: ProfileData = {
          userId,
          displayName: 'Royal User',
          bio: 'A noble participant in the royal experiment',
          followers: 42,
          following: 12,
          profileViews: 150,
          totalSpent: 250,
          achievements: [
            {
              id: 'ach_1',
              title: 'First Spend',
              description: 'Made your first royal expenditure',
              dateEarned: new Date().toISOString()
            }
          ],
          recentActivity: [
            {
              id: 'act_1',
              type: 'purchase',
              description: 'Purchased a Royal Title',
              timestamp: new Date().toISOString()
            }
          ]
        };
        
        setProfileData(mockData);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch profile data'));
        console.error('Error fetching profile data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfileData();
  }, [userId]);

  const updateProfileData = async (updates: Partial<ProfileData>) => {
    try {
      // In a real app, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setProfileData(prev => {
        if (!prev) return null;
        return { ...prev, ...updates };
      });
      
      return true;
    } catch (err) {
      console.error('Error updating profile data:', err);
      return false;
    }
  };

  return {
    profileData,
    isLoading,
    error,
    updateProfileData
  };
};
