
import React, { Dispatch, SetStateAction } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { UserProfile, TeamColor } from '@/types/user';
import TeamSelector from './TeamSelector';

export interface TeamSwitchModalProps {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
  user: UserProfile;
  onTeamChange: (team: TeamColor) => Promise<void>;
}

const TeamSwitchModal: React.FC<TeamSwitchModalProps> = ({ 
  open, 
  onOpenChange, 
  user, 
  onTeamChange 
}) => {
  const { toast } = useToast();
  const [selectedTeam, setSelectedTeam] = React.useState<TeamColor>(user.team as TeamColor || 'red');
  const [isLoading, setIsLoading] = React.useState(false);

  const handleTeamChange = async () => {
    if (selectedTeam === user.team) {
      onOpenChange(false);
      return;
    }

    setIsLoading(true);
    try {
      await onTeamChange(selectedTeam);
      toast({
        title: 'Team Updated',
        description: `Your team has been updated to ${
          selectedTeam === 'red' ? 'Crimson Crown' :
          selectedTeam === 'green' ? 'Golden Order' :
          'Azure Knights'
        }`,
        variant: 'success',
      });
      onOpenChange(false);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update team. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogTitle className="mb-4">Choose Your Team</DialogTitle>
        
        <div className="mb-6">
          <p className="text-sm text-muted-foreground mb-4">
            Select the team you wish to join. Your team choice affects your profile appearance and leaderboard grouping.
          </p>
          <TeamSelector team={selectedTeam} onTeamChange={setSelectedTeam} />
        </div>
        
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)} disabled={isLoading}>
            Cancel
          </Button>
          <Button onClick={handleTeamChange} disabled={isLoading || selectedTeam === user.team}>
            {isLoading ? 'Updating...' : 'Confirm Team Change'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TeamSwitchModal;
