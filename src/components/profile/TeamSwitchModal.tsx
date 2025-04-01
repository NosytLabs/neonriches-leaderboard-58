
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { TeamColor } from '@/types/user';

interface TeamSwitchModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  currentTeam: TeamColor | null;
  onTeamSwitch: (team: TeamColor) => Promise<void>;
}

const TeamSwitchModal: React.FC<TeamSwitchModalProps> = ({
  isOpen,
  onOpenChange,
  currentTeam,
  onTeamSwitch
}) => {
  const [selectedTeam, setSelectedTeam] = useState<TeamColor>(currentTeam || 'red');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = async () => {
    if (selectedTeam === currentTeam) {
      onOpenChange(false);
      return;
    }
    
    setIsLoading(true);
    
    try {
      await onTeamSwitch(selectedTeam);
      
      toast({
        title: "Team Changed",
        description: `You've successfully joined the ${
          selectedTeam === 'red' ? 'Crimson Crown' :
          selectedTeam === 'green' ? 'Golden Order' :
          selectedTeam === 'blue' ? 'Azure Knights' :
          'No Team'
        }!`,
        variant: "success"
      });
      
      onOpenChange(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to change team. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Switch Team</DialogTitle>
          <DialogDescription>
            Choose a new team to join. This will affect your rankings and available rewards.
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          <RadioGroup 
            defaultValue={currentTeam || 'red'} 
            onValueChange={(value) => setSelectedTeam(value as TeamColor)}
            className="grid gap-4"
          >
            <div className={`relative flex items-center space-x-3 rounded-lg border p-4 shadow-sm transition-all ${
              selectedTeam === 'red' ? 'border-royal-crimson/50 bg-royal-crimson/5' : 'border-border'
            }`}>
              <RadioGroupItem value="red" id="team-red" className="sr-only" />
              <Shield className="h-6 w-6 text-royal-crimson" />
              <Label htmlFor="team-red" className="cursor-pointer flex-1">
                <div>
                  <div className="font-medium">Crimson Crown</div>
                  <div className="text-sm text-muted-foreground">Warriors & Fighters</div>
                </div>
              </Label>
            </div>
            
            <div className={`relative flex items-center space-x-3 rounded-lg border p-4 shadow-sm transition-all ${
              selectedTeam === 'green' ? 'border-royal-gold/50 bg-royal-gold/5' : 'border-border'
            }`}>
              <RadioGroupItem value="green" id="team-green" className="sr-only" />
              <Shield className="h-6 w-6 text-royal-gold" />
              <Label htmlFor="team-green" className="cursor-pointer flex-1">
                <div>
                  <div className="font-medium">Golden Order</div>
                  <div className="text-sm text-muted-foreground">Merchants & Nobles</div>
                </div>
              </Label>
            </div>
            
            <div className={`relative flex items-center space-x-3 rounded-lg border p-4 shadow-sm transition-all ${
              selectedTeam === 'blue' ? 'border-royal-navy/50 bg-royal-navy/5' : 'border-border'
            }`}>
              <RadioGroupItem value="blue" id="team-blue" className="sr-only" />
              <Shield className="h-6 w-6 text-royal-navy" />
              <Label htmlFor="team-blue" className="cursor-pointer flex-1">
                <div>
                  <div className="font-medium">Azure Knights</div>
                  <div className="text-sm text-muted-foreground">Strategists & Scholars</div>
                </div>
              </Label>
            </div>
          </RadioGroup>
        </div>
        
        <DialogFooter>
          <Button 
            variant="outline" 
            onClick={() => onOpenChange(false)}
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleSubmit}
            disabled={isLoading || selectedTeam === currentTeam}
          >
            {isLoading ? "Switching Team..." : "Confirm Switch"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TeamSwitchModal;
