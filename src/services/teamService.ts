
import { TeamColor } from '@/types/teams';
import { UserProfile } from '@/types/user';
import { adaptUserProfileToUser } from '@/utils/userAdapter';

export const switchUserTeam = async (
  user: UserProfile,
  team: TeamColor,
  updateUserProfile: (updates: Partial<UserProfile>) => Promise<boolean>
): Promise<{ success: boolean; message?: string }> => {
  try {
    if (!user) {
      return { success: false, message: 'You must be logged in to join a team' };
    }
    
    // Check if this is a first-time team join (free) or a team switch ($1 fee)
    const isFirstTeamSelection = !user.team;
    
    if (!isFirstTeamSelection) {
      // Record the time of the team switch for cooldown purposes
      localStorage.setItem('lastTeamSwitch', Date.now().toString());
    }
    
    // Update the user's team
    const success = await updateUserProfile({ team });
    
    if (success) {
      return { success: true };
    } else {
      throw new Error('Failed to update user profile');
    }
  } catch (error) {
    console.error('Team switch failed', error);
    return { 
      success: false, 
      message: error instanceof Error ? error.message : 'Failed to join team' 
    };
  }
};

export const getTeamStats = async (team: TeamColor): Promise<any> => {
  // In a real app, this would fetch team stats from an API
  return {
    members: Math.floor(Math.random() * 1000) + 100,
    totalSpent: Math.floor(Math.random() * 100000) + 10000,
    rank: Math.floor(Math.random() * 3) + 1,
    weeklyChange: Math.floor(Math.random() * 20) - 10,
  };
};
