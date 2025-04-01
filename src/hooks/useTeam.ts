
import { useState } from 'react';
import { TeamColor, TeamData } from '@/types/team';
import { useAuth } from '@/hooks/useAuth';
import { teamService } from '@/services/teamService';

const useTeam = () => {
  const { user, updateUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const currentTeam = user?.team || 'none';
  
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
  
  const getTeamColor = (team: TeamColor): string => {
    return teamService.getTeamColor(team);
  };
  
  const getTeamName = (team: TeamColor): string => {
    return teamService.getTeamName(team);
  };
  
  const getTeamMotto = (team: TeamColor): string => {
    return teamService.getTeamMotto(team);
  };
  
  const getTeamBenefits = (team: TeamColor): string[] => {
    return teamService.getTeamBenefits(team);
  };
  
  return {
    currentTeam,
    changeTeam,
    isLoading,
    error,
    getTeamColor,
    getTeamName,
    getTeamMotto,
    getTeamBenefits
  };
};

export default useTeam;
