
import React from 'react';
import { Button } from '@/components/ui/button';
import TeamSelector from '../TeamSelector';

interface TeamEditorProps {
  team: "red" | "blue" | "green";
  onTeamChange: (team: "red" | "blue" | "green") => void;
  onSave: () => void;
  isLoading: boolean;
}

const TeamEditor: React.FC<TeamEditorProps> = ({ 
  team, 
  onTeamChange, 
  onSave, 
  isLoading 
}) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-base font-medium">Team Affiliation</h3>
        <p className="text-sm text-muted-foreground">
          Choose which royal team you want to join. Your team choice impacts your available rewards and leaderboard.
        </p>
      </div>
      
      <div className="mt-4">
        <TeamSelector 
          team={team}
          onTeamChange={onTeamChange} 
        />
      </div>
      
      <Button 
        onClick={onSave} 
        disabled={isLoading}
      >
        Save Team Selection
      </Button>
    </div>
  );
};

export default TeamEditor;
