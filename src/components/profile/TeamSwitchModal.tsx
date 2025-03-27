
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { TeamColor, teamData } from '@/types/teams';
import { Users, Clock } from 'lucide-react';
import { switchUserTeam } from '@/services/teamService';

interface TeamSwitchModalProps {
  trigger?: React.ReactNode;
  onSuccess?: () => void;
}

const TeamSwitchModal: React.FC<TeamSwitchModalProps> = ({
  trigger,
  onSuccess
}) => {
  const { user, updateProfile } = useAuth();
  const [selectedTeam, setSelectedTeam] = useState<TeamColor | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  
  const handleTeamSelect = (team: TeamColor) => {
    setSelectedTeam(team);
    setError(null);
  };
  
  const handleJoinTeam = async () => {
    if (!selectedTeam) {
      setError('Please select a team to join');
      return;
    }
    
    setIsProcessing(true);
    setError(null);
    
    try {
      const result = await switchUserTeam(user, selectedTeam, updateProfile);
      
      if (result.success) {
        if (onSuccess) {
          onSuccess();
        }
        setOpen(false);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('Failed to join team. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };
  
  // Get the time since last team switch
  const getLastSwitchTime = () => {
    const lastTeamSwitchTime = localStorage.getItem('lastTeamSwitch');
    if (lastTeamSwitchTime) {
      const lastSwitch = parseInt(lastTeamSwitchTime, 10);
      const now = Date.now();
      const daysSinceLastSwitch = Math.floor((now - lastSwitch) / (24 * 60 * 60 * 1000));
      
      if (daysSinceLastSwitch < 1) {
        const hoursSinceLastSwitch = Math.floor((now - lastSwitch) / (60 * 60 * 1000));
        return `Last switched ${hoursSinceLastSwitch} hours ago`;
      } else if (daysSinceLastSwitch === 1) {
        return 'Last switched yesterday';
      } else {
        return `Last switched ${daysSinceLastSwitch} days ago`;
      }
    }
    
    return null;
  };
  
  const lastSwitchTime = getLastSwitchTime();
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" className="w-full glass-morphism border-white/10 hover:bg-white/10">
            <Users className="mr-2 h-4 w-4" />
            Switch Team
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="glass-morphism border-white/10 sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Join a Team</DialogTitle>
          <DialogDescription>
            Select a team to join and compete for team prizes.
            {lastSwitchTime && (
              <div className="flex items-center mt-2 text-xs text-white/60">
                <Clock className="h-3 w-3 mr-1" />
                {lastSwitchTime}
              </div>
            )}
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 gap-4 py-4">
          {Object.values(teamData).map((team) => (
            <div 
              key={team.id}
              className={`glass-morphism rounded-lg p-4 cursor-pointer transition-all hover:border-${team.id} ${
                selectedTeam === team.id 
                  ? `border-2 border-team-${team.id} bg-white/5` 
                  : 'border border-white/10'
              }`}
              style={{ borderColor: selectedTeam === team.id ? team.color : undefined }}
              onClick={() => handleTeamSelect(team.id)}
            >
              <div className="flex items-center">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center mr-3 text-xl"
                  style={{ backgroundColor: team.bgColor }}
                >
                  {team.icon}
                </div>
                <div>
                  <div className="font-medium" style={{ color: team.color }}>{team.name}</div>
                  <div className="text-sm text-white/70">{team.description}</div>
                </div>
              </div>
              
              <div className="mt-2 grid grid-cols-2 gap-2 text-sm text-white/60">
                <div>Members: {team.members}</div>
                <div>Rank: #{team.rank}</div>
              </div>
            </div>
          ))}
        </div>
        
        {error && (
          <div className="text-destructive text-sm mb-2">{error}</div>
        )}
        
        <div className="flex justify-end">
          <Button variant="outline" className="mr-2 glass-morphism border-white/10" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button 
            onClick={handleJoinTeam}
            disabled={!selectedTeam || isProcessing}
            className={selectedTeam ? `bg-team-${selectedTeam} hover:bg-team-${selectedTeam}/90 text-white` : ''}
          >
            {isProcessing ? (
              <>
                <span className="animate-spin mr-2">⚙️</span> Joining...
              </>
            ) : (
              'Join Team'
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TeamSwitchModal;
