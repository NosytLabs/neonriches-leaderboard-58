
import React, { useState } from 'react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from '@/contexts/auth';
import { Flame, Zap, Snowflake } from 'lucide-react';
import { TeamType } from '@/types/user';

const TeamSelection = () => {
  const { user, updateUserProfile } = useAuth();
  // In case user.team includes 'none', default to 'red'
  const initialTeam = (user?.team === 'red' || user?.team === 'green' || user?.team === 'blue') 
    ? user.team 
    : 'red';
  
  const [selectedTeam, setSelectedTeam] = useState<'red' | 'green' | 'blue'>(initialTeam as 'red' | 'green' | 'blue');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleTeamSelect = (value: 'red' | 'green' | 'blue') => {
    setSelectedTeam(value);
  };

  const handleSubmit = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    
    try {
      await updateUserProfile({ team: selectedTeam });
      // Success notification could go here
    } catch (error) {
      console.error('Failed to update team:', error);
      // Error notification could go here
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">Choose Your Team</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-white/70">
          Select your team to join forces with like-minded nobles and compete for glory.
        </p>
        
        <RadioGroup 
          value={selectedTeam} 
          onValueChange={handleTeamSelect as (value: string) => void}
          className="grid grid-cols-1 gap-4 mt-4"
        >
          <div className={`flex items-start space-x-3 p-3 rounded-md ${
            selectedTeam === 'red' ? 'bg-red-950/30 border border-red-500/30' : 'bg-black/20'
          }`}>
            <RadioGroupItem value="red" id="team-red" className="mt-1" />
            <div className="flex-1">
              <Label htmlFor="team-red" className="flex items-center">
                <Flame className="mr-2 h-5 w-5 text-red-500" />
                <span className="text-lg font-semibold text-red-400">Red Team</span>
              </Label>
              <p className="text-sm text-white/70 mt-1 ml-7">
                The team of passion and ambition. Red nobles are driven by the desire to reach the top at all costs.
              </p>
            </div>
          </div>
          
          <div className={`flex items-start space-x-3 p-3 rounded-md ${
            selectedTeam === 'green' ? 'bg-green-950/30 border border-green-500/30' : 'bg-black/20'
          }`}>
            <RadioGroupItem value="green" id="team-green" className="mt-1" />
            <div className="flex-1">
              <Label htmlFor="team-green" className="flex items-center">
                <Zap className="mr-2 h-5 w-5 text-green-500" />
                <span className="text-lg font-semibold text-green-400">Green Team</span>
              </Label>
              <p className="text-sm text-white/70 mt-1 ml-7">
                The team of prosperity and growth. Green nobles focus on steady progress and sustainable spending.
              </p>
            </div>
          </div>
          
          <div className={`flex items-start space-x-3 p-3 rounded-md ${
            selectedTeam === 'blue' ? 'bg-blue-950/30 border border-blue-500/30' : 'bg-black/20'
          }`}>
            <RadioGroupItem value="blue" id="team-blue" className="mt-1" />
            <div className="flex-1">
              <Label htmlFor="team-blue" className="flex items-center">
                <Snowflake className="mr-2 h-5 w-5 text-blue-500" />
                <span className="text-lg font-semibold text-blue-400">Blue Team</span>
              </Label>
              <p className="text-sm text-white/70 mt-1 ml-7">
                The team of intellect and strategy. Blue nobles are calculated in their spending, focused on maximum efficiency.
              </p>
            </div>
          </div>
        </RadioGroup>
        
        <Button 
          onClick={handleSubmit} 
          className="w-full" 
          disabled={isSubmitting || (user?.team === selectedTeam)}
        >
          {isSubmitting ? 'Saving...' : user?.team === selectedTeam ? 'Current Team' : 'Join Team'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default TeamSelection;
