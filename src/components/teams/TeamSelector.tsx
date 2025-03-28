
import React from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Shield } from 'lucide-react';

interface TeamSelectorProps {
  team: 'red' | 'green' | 'blue' | null;
  onTeamChange: (team: 'red' | 'green' | 'blue') => void;
  currentTeam?: 'red' | 'green' | 'blue' | null; // Added for backward compatibility
}

const TeamSelector: React.FC<TeamSelectorProps> = ({ team, onTeamChange, currentTeam }) => {
  // Use currentTeam if provided, otherwise fall back to team
  const activeTeam = currentTeam || team;

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold">Choose Your Royal House</h3>
      <p className="text-white/60 text-sm">
        Align yourself with one of the three royal houses to participate in team competitions and events.
      </p>
      
      <RadioGroup value={activeTeam || ''} onValueChange={(value) => onTeamChange(value as 'red' | 'green' | 'blue')} className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className={`relative rounded-lg border p-4 cursor-pointer hover:bg-red-500/10 hover:border-red-500/30 transition-colors ${activeTeam === 'red' ? 'bg-red-500/20 border-red-500/50' : 'border-white/10 bg-white/5'}`}>
          <RadioGroupItem value="red" id="team-red" className="absolute right-4 top-4" />
          <div className="mb-5">
            <Shield className="h-10 w-10 text-red-500" />
          </div>
          <div>
            <Label htmlFor="team-red" className="text-base font-bold text-red-400">House Crimson Dynasty</Label>
            <p className="text-xs text-white/70 mt-1">Masters of opulent displays and lavish investments</p>
          </div>
        </div>
        
        <div className={`relative rounded-lg border p-4 cursor-pointer hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-colors ${activeTeam === 'green' ? 'bg-emerald-500/20 border-emerald-500/50' : 'border-white/10 bg-white/5'}`}>
          <RadioGroupItem value="green" id="team-green" className="absolute right-4 top-4" />
          <div className="mb-5">
            <Shield className="h-10 w-10 text-emerald-500" />
          </div>
          <div>
            <Label htmlFor="team-green" className="text-base font-bold text-emerald-400">Emerald Empire Collective</Label>
            <p className="text-xs text-white/70 mt-1">Architects of wealth and strategic spending</p>
          </div>
        </div>
        
        <div className={`relative rounded-lg border p-4 cursor-pointer hover:bg-blue-500/10 hover:border-blue-500/30 transition-colors ${activeTeam === 'blue' ? 'bg-blue-500/20 border-blue-500/50' : 'border-white/10 bg-white/5'}`}>
          <RadioGroupItem value="blue" id="team-blue" className="absolute right-4 top-4" />
          <div className="mb-5">
            <Shield className="h-10 w-10 text-blue-500" />
          </div>
          <div>
            <Label htmlFor="team-blue" className="text-base font-bold text-blue-400">Sapphire Sovereign Alliance</Label>
            <p className="text-xs text-white/70 mt-1">Nobility through calculated financial dominance</p>
          </div>
        </div>
      </RadioGroup>
    </div>
  );
};

export default TeamSelector;
