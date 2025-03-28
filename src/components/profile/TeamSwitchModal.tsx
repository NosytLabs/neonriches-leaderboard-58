
import React, { useState } from 'react';
import { Shield, Info, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useAuth } from '@/contexts/auth';
import { UserProfile } from '@/contexts/AuthContext';
import { Separator } from '@/components/ui/separator';

// Define team color type
export type TeamColor = 'red' | 'green' | 'blue';

// Define team data
const teamData = [
  {
    id: 'red',
    name: 'House Crimson',
    color: 'text-team-red',
    bgColor: 'bg-team-red/10',
    icon: <Shield className="h-5 w-5 text-team-red" />,
    description: 'Warriors of flame and passion, House Crimson values boldness and courage above all else.',
    members: 423,
    rank: 1
  },
  {
    id: 'green',
    name: 'House Emerald',
    color: 'text-team-green',
    bgColor: 'bg-team-green/10',
    icon: <Shield className="h-5 w-5 text-team-green" />,
    description: 'Strategists and scholars, House Emerald values wisdom and growth as their highest virtues.',
    members: 387,
    rank: 2
  },
  {
    id: 'blue',
    name: 'House Sapphire',
    color: 'text-team-blue',
    bgColor: 'bg-team-blue/10',
    icon: <Shield className="h-5 w-5 text-team-blue" />,
    description: 'Masters of transformation and innovation, House Sapphire values creativity and intellect.',
    members: 341,
    rank: 3
  }
];

export interface TeamSwitchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  user: UserProfile;
  onTeamChange: (team: TeamColor) => Promise<void>;
  trigger?: React.ReactNode;
}

const TeamSwitchModal: React.FC<TeamSwitchModalProps> = ({ 
  open, 
  onOpenChange,
  user,
  onTeamChange,
  trigger
}) => {
  const [selectedTeam, setSelectedTeam] = useState<TeamColor | null>(user?.team as TeamColor || null);
  const [isChanging, setIsChanging] = useState(false);
  
  const handleTeamSelect = (teamId: TeamColor) => {
    setSelectedTeam(teamId);
  };
  
  const handleTeamChange = async () => {
    if (!selectedTeam || selectedTeam === user?.team) return;
    
    setIsChanging(true);
    try {
      await onTeamChange(selectedTeam);
      onOpenChange(false);
    } catch (error) {
      console.error('Error changing team:', error);
    } finally {
      setIsChanging(false);
    }
  };
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {trigger && <div onClick={() => onOpenChange(true)}>{trigger}</div>}
      <DialogContent className="sm:max-w-[500px] glass-morphism">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Choose Your Noble House</DialogTitle>
          <DialogDescription>
            Select the house that represents your values and aspirations. Your choice influences team rankings and special events.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 my-4">
          {teamData.map((team) => (
            <div 
              key={team.id} 
              className={`rounded-lg p-4 border transition-all cursor-pointer ${
                selectedTeam === team.id 
                  ? `border-${team.id} ${team.bgColor}` 
                  : 'border-white/10 hover:border-white/20'
              }`}
              onClick={() => handleTeamSelect(team.id as TeamColor)}
            >
              <div className="flex items-start">
                <div className="mr-3 mt-0.5">
                  {team.icon}
                </div>
                <div className="flex-1">
                  <h3 className={`font-bold ${team.color}`}>{team.name}</h3>
                  <p className="text-sm text-white/70 mt-1">{team.description}</p>
                </div>
                {selectedTeam === team.id && (
                  <div className="ml-2">
                    <Check className={`h-5 w-5 ${team.color}`} />
                  </div>
                )}
              </div>
              
              <div className="flex justify-between mt-3 text-xs text-white/50">
                <span>Members: {team.members}</span>
                <span>Rank: #{team.rank}</span>
              </div>
            </div>
          ))}
        </div>
        
        <Separator className="my-2" />
        
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 text-sm flex items-start">
          <Info className="h-4 w-4 text-blue-400 mr-2 mt-0.5" />
          <p className="text-white/80">
            You can change your team at any time, but all contributions will stay with your previous team.
          </p>
        </div>
        
        <DialogFooter className="mt-4">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button 
            onClick={handleTeamChange}
            disabled={!selectedTeam || selectedTeam === user?.team || isChanging}
            className={selectedTeam ? `bg-team-${selectedTeam} hover:bg-team-${selectedTeam}/80` : ''}
          >
            {isChanging ? 'Changing...' : 'Confirm Selection'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TeamSwitchModal;
