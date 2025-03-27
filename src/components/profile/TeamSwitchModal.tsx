
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { UserProfile } from '@/contexts/AuthContext';

interface TeamSwitchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  user: UserProfile;
  onTeamChange: (team: 'red' | 'green' | 'blue') => Promise<void>;
}

const TeamSwitchModal = ({ open, onOpenChange, user, onTeamChange }: TeamSwitchModalProps) => {
  const { toast } = useToast();
  const [selectedTeam, setSelectedTeam] = useState<'red' | 'green' | 'blue'>(user.team || 'red');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleTeamChange = async () => {
    if (selectedTeam === user.team) {
      toast({
        title: "No change",
        description: "You're already on this team.",
      });
      onOpenChange(false);
      return;
    }

    setIsSubmitting(true);
    try {
      await onTeamChange(selectedTeam);
      toast({
        title: "Team changed!",
        description: `You've successfully joined Team ${selectedTeam.charAt(0).toUpperCase() + selectedTeam.slice(1)}!`,
      });
      onOpenChange(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to change team. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-morphism border-white/10">
        <DialogHeader>
          <DialogTitle>Switch Team</DialogTitle>
          <DialogDescription>
            Choose a team to join. Your contributions will count toward your team's rank.
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          <RadioGroup value={selectedTeam} onValueChange={(value) => setSelectedTeam(value as 'red' | 'green' | 'blue')}>
            <div className="flex items-center space-x-2 mb-4">
              <RadioGroupItem value="red" id="team-red" className="border-team-red text-team-red" />
              <Label htmlFor="team-red" className="flex items-center cursor-pointer">
                <div className="w-4 h-4 bg-team-red rounded-full mr-2"></div>
                <span>Red Team (Neon Fire)</span>
              </Label>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <RadioGroupItem value="green" id="team-green" className="border-team-green text-team-green" />
              <Label htmlFor="team-green" className="flex items-center cursor-pointer">
                <div className="w-4 h-4 bg-team-green rounded-full mr-2"></div>
                <span>Green Team (Lime Zap)</span>
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="blue" id="team-blue" className="border-team-blue text-team-blue" />
              <Label htmlFor="team-blue" className="flex items-center cursor-pointer">
                <div className="w-4 h-4 bg-team-blue rounded-full mr-2"></div>
                <span>Blue Team (Cool Pulse)</span>
              </Label>
            </div>
          </RadioGroup>
        </div>

        <DialogFooter>
          <Button 
            variant="outline" 
            onClick={() => onOpenChange(false)} 
            className="glass-morphism border-white/10 text-white hover:bg-white/10"
          >
            Cancel
          </Button>
          <Button 
            onClick={handleTeamChange} 
            className="bg-gradient-to-r from-team-red via-team-green to-team-blue hover:opacity-90 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Switching..." : "Confirm Team Change"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TeamSwitchModal;
