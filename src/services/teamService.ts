
import { TeamColor, teamData } from '@/types/teams';
import { toast } from '@/hooks/use-toast';
import { UserProfile } from '@/contexts/AuthContext';
import { getTeamTotals } from '@/services/spendingService';

export interface TeamSwitchResult {
  success: boolean;
  message: string;
  cooldownRemaining?: number; // in hours
}

// Calculate the cooldown period for team switching (24 hours)
const TEAM_SWITCH_COOLDOWN = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export const switchUserTeam = async (
  user: UserProfile,
  newTeam: TeamColor,
  updateProfile: (data: Partial<UserProfile>) => Promise<void>
): Promise<TeamSwitchResult> => {
  try {
    if (!user) {
      return {
        success: false,
        message: 'You must be logged in to join a team'
      };
    }
    
    // Check if user is already on this team
    if (user.team === newTeam) {
      return {
        success: false,
        message: `You are already on the ${teamData[newTeam].name} team`
      };
    }
    
    // Check if there's a cooldown period
    const lastTeamSwitchTime = localStorage.getItem('lastTeamSwitch');
    if (lastTeamSwitchTime) {
      const lastSwitch = parseInt(lastTeamSwitchTime, 10);
      const now = Date.now();
      const timeSinceLastSwitch = now - lastSwitch;
      
      if (timeSinceLastSwitch < TEAM_SWITCH_COOLDOWN) {
        const hoursRemaining = Math.ceil((TEAM_SWITCH_COOLDOWN - timeSinceLastSwitch) / (60 * 60 * 1000));
        
        return {
          success: false,
          message: `You can switch teams again in ${hoursRemaining} hours`,
          cooldownRemaining: hoursRemaining
        };
      }
    }
    
    // Switch the team
    await updateProfile({
      team: newTeam
    });
    
    // Record the team switch time
    localStorage.setItem('lastTeamSwitch', Date.now().toString());
    
    toast({
      title: 'Team Joined',
      description: `You are now part of the ${teamData[newTeam].name} team`,
    });
    
    return {
      success: true,
      message: `Successfully joined the ${teamData[newTeam].name} team`
    };
  } catch (error) {
    console.error('Error switching team:', error);
    
    return {
      success: false,
      message: 'Failed to switch teams. Please try again.'
    };
  }
};

export const getTeamRankings = () => {
  const totals = getTeamTotals();
  
  // Sort teams by total spending
  const rankings = Object.entries(totals)
    .map(([team, total]) => ({
      team: team as TeamColor,
      total
    }))
    .sort((a, b) => b.total - a.total);
  
  // Assign ranks
  const rankedTeams = rankings.map((item, index) => ({
    ...teamData[item.team],
    rank: index + 1,
    totalSpent: item.total
  }));
  
  return rankedTeams;
};

export const getUserTeamBonus = (user: UserProfile | null): number => {
  if (!user || !user.team) return 0;
  
  // Calculate team contribution bonus
  const teamRankings = getTeamRankings();
  const userTeam = teamRankings.find(team => team.id === user.team);
  
  if (!userTeam) return 0;
  
  // Team rank bonuses
  switch (userTeam.rank) {
    case 1: return 0.10; // 10% bonus for first place
    case 2: return 0.05; // 5% bonus for second place
    case 3: return 0.02; // 2% bonus for third place
    default: return 0;
  }
};
