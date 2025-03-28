
import { UserProfile } from '@/contexts/AuthContext';
import { teamData } from '@/utils/teamUtils';
import { TeamColor, UserTeam } from '@/types/teams';

export interface TeamSwitchResult {
  success: boolean;
  message: string;
}

export const switchUserTeam = async (
  user: UserProfile,
  team: TeamColor,
  updateProfileFn: (data: Partial<UserProfile>) => Promise<void>
): Promise<TeamSwitchResult> => {
  try {
    // Check if user is already on this team
    if (user.team === team) {
      return {
        success: false,
        message: "You are already a member of this team."
      };
    }
    
    // In a real app, you'd make an API call here
    // For now, we'll simulate the team switch
    
    // Record time of team switch
    localStorage.setItem('lastTeamSwitch', Date.now().toString());
    
    // Update user profile
    await updateProfileFn({ team });
    
    return {
      success: true,
      message: "Team switched successfully!"
    };
  } catch (error) {
    console.error("Team switch failed:", error);
    return {
      success: false,
      message: "Failed to switch teams. Please try again."
    };
  }
};

// Re-export team data for backward compatibility
export { teamData };

// Export TeamColor and UserTeam types for backward compatibility
export type { TeamColor, UserTeam };
