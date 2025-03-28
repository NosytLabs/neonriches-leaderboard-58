import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Shield, Users, Trophy, ArrowRight } from 'lucide-react';
import { Team } from '@/types/user';
import { teamData } from '@/utils/teamUtils';

// Define a TeamColor type
type TeamColor = 'red' | 'green' | 'blue';

interface TeamSwitchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  currentTeam: Team;
  onTeamSwitch: (team: Team) => void;
}

const TeamSwitchModal: React.FC<TeamSwitchModalProps> = ({ open, onOpenChange, currentTeam, onTeamSwitch }) => {
  const [selectedTeam, setSelectedTeam] = useState<Team>(currentTeam);
  const [isSwitching, setIsSwitching] = useState(false);

  const handleTeamSelect = (team: Team) => {
    setSelectedTeam(team);
  };

  const handleTeamSwitch = async () => {
    setIsSwitching(true);
    // Simulate team switch delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    onTeamSwitch(selectedTeam);
    setIsSwitching(false);
    onOpenChange(false); // Close the modal after switching
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-morphism sm:max-w-[425px] border-royal-gold/30">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-blue-500" />
            Switch Allegiance
          </DialogTitle>
          <DialogDescription>
            Choose your team wisely. Your allegiance determines your destiny.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Select Your Team</h4>
            <p className="text-sm text-muted-foreground">
              Choose the team that best represents your values and aspirations.
            </p>
          </div>

          <RadioGroup defaultValue={currentTeam || undefined} className="grid gap-2" onValueChange={handleTeamSelect}>
            {teamData.map((team) => (
              <div key={team.id} className="flex items-center space-x-2">
                <RadioGroupItem value={team.id} id={team.id} className="border-2 rounded-full" />
                <Label htmlFor={team.id} className="flex justify-between w-full p-4 rounded-lg glass-morphism cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">{team.icon}</span>
                    <div>
                      <h4 className="font-semibold">{team.name}</h4>
                      <p className="text-sm text-muted-foreground">{team.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-center">
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{team.members}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Trophy className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm text-yellow-500">Rank {team.rank}</span>
                    </div>
                  </div>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="flex justify-end">
          <Button type="submit" onClick={handleTeamSwitch} disabled={isSwitching || selectedTeam === currentTeam}>
            {isSwitching ? (
              <>Switching... </>
            ) : (
              <>
                Switch Team <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TeamSwitchModal;
