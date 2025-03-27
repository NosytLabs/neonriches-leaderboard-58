
import { UserProfile } from '@/contexts/AuthContext';

export interface TeamSwitchResult {
  success: boolean;
  message: string;
}

export const switchUserTeam = async (
  user: UserProfile,
  team: 'red' | 'green' | 'blue',
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

// Mock team data
export type TeamColor = 'red' | 'green' | 'blue';

export const teamData = {
  red: {
    id: 'red',
    name: 'Red Team',
    description: 'The fiery warriors of the neon flame',
    icon: '🔥',
    color: '#FF4560',
    bgColor: 'rgba(255, 69, 96, 0.2)',
    members: 1205,
    rank: 2
  },
  green: {
    id: 'green',
    name: 'Green Team',
    description: 'The electrifying force of the lime zap',
    icon: '⚡',
    color: '#00E396',
    bgColor: 'rgba(0, 227, 150, 0.2)',
    members: 983,
    rank: 3
  },
  blue: {
    id: 'blue',
    name: 'Blue Team',
    description: 'The mesmerizing flow of the cool pulse',
    icon: '💧',
    color: '#008FFB',
    bgColor: 'rgba(0, 143, 251, 0.2)',
    members: 1347,
    rank: 1
  }
};
