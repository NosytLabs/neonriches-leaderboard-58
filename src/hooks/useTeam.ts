
import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/auth';
import { TeamData, TeamColor } from '@/types/team';
import teamService from '@/services/teamService';

const useTeam = () => {
  const { user, updateUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const currentTeam = user?.team || 'none';
  
  // Define mock team data for the Teams page
  const allTeams: TeamColor[] = ['red', 'blue', 'green', 'gold', 'purple', 'none', 
    'neutral', 'silver', 'bronze', 'crimson'];
  
  const changeTeam = async (newTeam: TeamColor): Promise<boolean> => {
    if (!user) {
      setError('You must be logged in to change teams');
      return false;
    }
    
    if (newTeam === user.team) {
      return true; // Already on this team
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      // In a real app, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Update user with new team
      const success = await updateUser({
        ...user,
        team: newTeam
      });
      
      if (!success) {
        setError('Failed to update team');
        return false;
      }
      
      return true;
    } catch (err) {
      setError('An error occurred while changing teams');
      console.error('Team change error:', err);
      return false;
    } finally {
      setIsLoading(false);
    }
  };
  
  return {
    currentTeam,
    changeTeam,
    isLoading,
    error,
    getTeamColor: teamService.getTeamColor.bind(teamService),
    getTeamName: teamService.getTeamName.bind(teamService),
    getTeamMotto: teamService.getTeamMotto.bind(teamService),
    getTeamBenefits: teamService.getTeamBenefits.bind(teamService),
    allTeams
  };
};

export default useTeam;
// Also export named for components that expect named import
export { useTeam };
