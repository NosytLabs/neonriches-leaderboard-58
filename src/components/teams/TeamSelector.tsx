
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TeamColor } from '@/types/team';

export interface TeamSelectorProps {
  onTeamChange: (team: TeamColor) => void;
  team?: TeamColor;
}

const TeamSelector: React.FC<TeamSelectorProps> = ({ onTeamChange, team = "red" }) => {
  const teamColors: TeamColor[] = ["red", "blue", "green"];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {teamColors.map((teamColor) => (
        <Card 
          key={teamColor}
          className={`cursor-pointer ${teamColor === team ? 'border-2 border-' + teamColor + '-500' : 'border border-white/10'}`}
          onClick={() => onTeamChange(teamColor)}
        >
          <CardContent className="p-4">
            <div className={`w-full h-24 flex items-center justify-center rounded-md bg-${teamColor}-500/20`}>
              <span className={`text-${teamColor}-500 font-bold text-xl`}>
                {teamColor.charAt(0).toUpperCase() + teamColor.slice(1)} Team
              </span>
            </div>
            <Button 
              className="w-full mt-4" 
              variant={teamColor === team ? "default" : "outline"}
              onClick={(e) => {
                e.stopPropagation();
                onTeamChange(teamColor);
              }}
            >
              {teamColor === team ? 'Selected' : 'Select'}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TeamSelector;
