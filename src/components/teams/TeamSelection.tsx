
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Crown, Shield, Flame, Zap, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/auth';
import { useToast } from '@/hooks/use-toast';
import { useResponsive } from '@/hooks/use-responsive';
import { TeamColor, TeamSelectionProps } from '@/types/teams';

const TeamSelection: React.FC<TeamSelectionProps> = ({ user, onTeamSelect }) => {
  const { updateUserProfile } = useAuth();
  const { toast } = useToast();
  const { isMobile } = useResponsive();
  const [selectedTeam, setSelectedTeam] = useState<TeamColor>(
    (user?.team as TeamColor) || 'red'
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleTeamSelection = async () => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "You must be logged in to join a team",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    try {
      if (onTeamSelect) {
        const success = await onTeamSelect(selectedTeam);
        if (!success) {
          throw new Error("Failed to update team");
        }
      } else {
        await updateUserProfile({ ...user, team: selectedTeam });
      }
      
      toast({
        title: "Team Updated",
        description: `You've joined the ${selectedTeam} team!`,
        variant: "default"
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update team selection",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const teamDescription = {
    red: "The Red Dragon team embraces fire and passion. Members of this team are known for their bold strategies and aggressive spending to climb the ranks.",
    green: "The Green Serpent team channels growth and prosperity. They focus on consistent, strategic investments to ensure steady progression.",
    blue: "The Blue Phoenix team values wisdom and patience. They are calculated in their approach, often waiting for the perfect moment to strike."
  };

  return (
    <div className="glass-morphism border-white/10 p-4 md:p-6 rounded-lg">
      <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">Choose Your Royal House</h2>
      <p className="text-white/70 mb-4 md:mb-6 text-sm md:text-base">
        Align yourself with one of the three royal houses to compete for glory and rewards.
      </p>

      <Tabs defaultValue={selectedTeam || 'red'} onValueChange={(value) => setSelectedTeam(value as TeamColor)} className="w-full">
        <TabsList className={`grid w-full grid-cols-3 ${isMobile ? 'h-14' : 'h-12'}`}>
          <TabsTrigger value="red" className="flex items-center justify-center gap-2 data-[state=active]:bg-red-500/20">
            <Flame className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} text-red-400`} />
            <span className={isMobile ? "hidden sm:inline" : ""}>Red Dragon</span>
          </TabsTrigger>
          <TabsTrigger value="green" className="flex items-center justify-center gap-2 data-[state=active]:bg-green-500/20">
            <Zap className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} text-green-400`} />
            <span className={isMobile ? "hidden sm:inline" : ""}>Green Serpent</span>
          </TabsTrigger>
          <TabsTrigger value="blue" className="flex items-center justify-center gap-2 data-[state=active]:bg-blue-500/20">
            <Droplets className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} text-blue-400`} />
            <span className={isMobile ? "hidden sm:inline" : ""}>Blue Phoenix</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="red" className="mt-4 space-y-4">
          <div className="flex flex-col md:flex-row items-center gap-4 p-4 rounded-lg bg-red-500/10 border border-red-500/20">
            <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center">
              <Crown className="h-8 w-8 text-red-400" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-bold text-lg mb-1">House of the Red Dragon</h3>
              <p className="text-white/70 text-sm">{teamDescription.red}</p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="green" className="mt-4 space-y-4">
          <div className="flex flex-col md:flex-row items-center gap-4 p-4 rounded-lg bg-green-500/10 border border-green-500/20">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
              <Crown className="h-8 w-8 text-green-400" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-bold text-lg mb-1">House of the Green Serpent</h3>
              <p className="text-white/70 text-sm">{teamDescription.green}</p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="blue" className="mt-4 space-y-4">
          <div className="flex flex-col md:flex-row items-center gap-4 p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
            <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center">
              <Crown className="h-8 w-8 text-blue-400" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-bold text-lg mb-1">House of the Blue Phoenix</h3>
              <p className="text-white/70 text-sm">{teamDescription.blue}</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-6 flex justify-center">
        <Button
          onClick={handleTeamSelection}
          disabled={isSubmitting || !user}
          className={`w-full sm:w-auto ${
            selectedTeam === 'red' ? 'bg-red-600 hover:bg-red-700' :
            selectedTeam === 'green' ? 'bg-green-600 hover:bg-green-700' :
            'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          <Shield className="w-4 h-4 mr-2" />
          {user?.team === selectedTeam ? 'Confirm Allegiance' : 'Join This House'}
        </Button>
      </div>
    </div>
  );
};

export default TeamSelection;
