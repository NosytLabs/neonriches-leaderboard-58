
import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { TeamColor } from '@/types/team';
import { UserProfile } from '@/types/user-consolidated';
import TeamSelection from './TeamSelection';

interface TeamSelectionModalProps {
  open: boolean;
  onClose: () => void;
  onSelect: (team: TeamColor) => Promise<void>;
  currentTeam?: TeamColor;
  userProfile?: UserProfile;
}

const TeamSelectionModal: React.FC<TeamSelectionModalProps> = ({
  open,
  onClose,
  onSelect,
  currentTeam,
  userProfile
}) => {
  const handleTeamSelect = async (team: TeamColor) => {
    // Only perform update if team is different
    if (team !== currentTeam) {
      await onSelect(team);
    }
    return true;
  };
  
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-black/90 glass-morphism">
        <DialogHeader>
          <DialogTitle>Select Your Team</DialogTitle>
          <DialogDescription>
            Choose a royal faction to represent
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          <TeamSelection 
            selectedTeam={currentTeam}
            onTeamSelect={handleTeamSelect}
            user={userProfile}
          />
        </div>
        
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TeamSelectionModal;
