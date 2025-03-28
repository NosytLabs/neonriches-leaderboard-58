
import React, { useState } from 'react';
import { Shield, Crown, Zap, Flame } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface TeamSelectorProps {
  currentTeam: string | null;
  onTeamChange?: (team: string) => void;
}

const TEAMS = [
  {
    id: 'red',
    name: 'House Crimson Dynasty',
    description: 'Masters of opulent displays and lavish investments',
    color: 'text-red-500',
    bgColor: 'bg-red-500/20',
    borderColor: 'border-red-500/30',
    icon: Flame
  },
  {
    id: 'green',
    name: 'Emerald Empire Collective',
    description: 'Architects of wealth and strategic spending',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/20',
    borderColor: 'border-emerald-500/30',
    icon: Zap
  },
  {
    id: 'blue',
    name: 'Sapphire Sovereign Alliance',
    description: 'Nobility through calculated financial dominance',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/20',
    borderColor: 'border-blue-500/30',
    icon: Crown
  }
];

const TeamSelector: React.FC<TeamSelectorProps> = ({ currentTeam, onTeamChange }) => {
  const [selectedTeam, setSelectedTeam] = useState<string>(currentTeam || '');
  const { toast } = useToast();

  const handleTeamChange = (value: string) => {
    setSelectedTeam(value);
  };

  const handleSaveTeam = () => {
    if (onTeamChange && selectedTeam) {
      onTeamChange(selectedTeam);
    }
    
    const teamName = TEAMS.find(team => team.id === selectedTeam)?.name;
    
    toast({
      title: "Royal House Updated",
      description: `You have aligned with ${teamName || 'a new royal house'}!`,
    });
  };

  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Shield className="mr-2 h-5 w-5 text-royal-gold" />
          Choose Your Royal House
        </CardTitle>
        <CardDescription>
          Align with a royal house to boost your standing in the kingdom
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup value={selectedTeam} onValueChange={handleTeamChange} className="space-y-6">
          {TEAMS.map(team => (
            <div 
              key={team.id}
              className={`flex items-start space-x-4 p-4 rounded-lg ${team.bgColor} ${team.borderColor} border transition-colors duration-300 hover:bg-opacity-30`}
            >
              <RadioGroupItem value={team.id} id={team.id} className="mt-1" />
              <div className="flex-1">
                <Label 
                  htmlFor={team.id} 
                  className={`flex items-center text-base font-medium ${team.color} cursor-pointer`}
                >
                  <team.icon className="mr-2 h-5 w-5" />
                  {team.name}
                </Label>
                <p className="text-sm text-white/70 mt-1">
                  {team.description}
                </p>
              </div>
            </div>
          ))}
        </RadioGroup>

        <div className="mt-6 flex justify-end">
          <Button onClick={handleSaveTeam} className={`${selectedTeam ? TEAMS.find(t => t.id === selectedTeam)?.bgColor : 'bg-royal-gold/20'} hover:opacity-90`}>
            <Shield className="mr-2 h-4 w-4" />
            Pledge Allegiance
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamSelector;
