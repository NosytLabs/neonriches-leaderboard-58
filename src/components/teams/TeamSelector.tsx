
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { TeamColor, TeamData } from '@/types/team';
import { useTeam } from '@/hooks/useTeam';
import { Users, Shield, Crown, Sparkles, Info } from 'lucide-react';
import TeamBadge from './TeamBadge';
import { getTeamNFTJoke, getTeamCryptoRoast } from '@/utils/team/teamJokes';

interface TeamSelectorProps {
  currentTeam: TeamColor | null;
  onSelectTeam: (team: TeamColor) => void;
}

const TeamSelector: React.FC<TeamSelectorProps> = ({ currentTeam, onSelectTeam }) => {
  const { toast } = useToast();
  const { allTeams } = useTeam();
  const [selectedTeam, setSelectedTeam] = useState<TeamColor | null>(currentTeam);
  
  const handleSelectTeam = (team: TeamColor) => {
    setSelectedTeam(team);
    
    // Show toast to confirm selection
    toast({
      title: "Team Selected",
      description: `You've selected the ${team} team. Confirm to make it official.`,
      variant: "default",
    });
  };
  
  const handleConfirmTeam = () => {
    if (selectedTeam) {
      onSelectTeam(selectedTeam);
      
      toast({
        title: "Team Joined",
        description: `You are now officially part of the ${selectedTeam} team!`,
        variant: "success",
      });
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="glass-morphism border-white/10 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <Users className="h-6 w-6 mr-2 text-royal-gold" />
          Choose Your Royal Team
        </h2>
        
        <p className="text-white/70 mb-6">
          Align yourself with one of the royal houses to gain team benefits and participate in the team competition.
        </p>
        
        <Tabs defaultValue="teams" className="w-full">
          <TabsList className="grid grid-cols-2 mb-6">
            <TabsTrigger value="teams" className="flex items-center">
              <Crown className="h-4 w-4 mr-2" />
              Royal Teams
            </TabsTrigger>
            <TabsTrigger value="benefits" className="flex items-center">
              <Shield className="h-4 w-4 mr-2" />
              Team Benefits
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="teams">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {allTeams.filter(team => team.id !== 'none' && team.id !== 'neutral').map((team) => (
                <Card 
                  key={team.id}
                  className={`glass-morphism cursor-pointer transition-all hover:scale-105 ${
                    selectedTeam === team.id 
                      ? `border-2 border-${team.id}-400 shadow-lg shadow-${team.id}-400/20` 
                      : 'border-white/10'
                  }`}
                  onClick={() => handleSelectTeam(team.id as TeamColor)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{team.name}</CardTitle>
                      <TeamBadge team={team.id as TeamColor} />
                    </div>
                    <CardDescription>{team.motto}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-white/70 mb-3">{team.description}</p>
                    <div className="flex items-center text-xs text-white/60">
                      <Users className="h-3 w-3 mr-1" />
                      <span>{team.members} members</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {selectedTeam && (
              <div className="mt-6 flex justify-end">
                <Button
                  className={`bg-${selectedTeam}-500 hover:bg-${selectedTeam}-600 text-white`}
                  onClick={handleConfirmTeam}
                >
                  <Crown className="h-4 w-4 mr-2" />
                  Confirm Team Selection
                </Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="benefits">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="glass-morphism border-white/10">
                <CardHeader>
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-royal-gold" />
                    <CardTitle className="text-lg">Team Advantages</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start">
                    <Sparkles className="h-4 w-4 text-royal-gold mr-2 mt-1" />
                    <p className="text-sm text-white/80">Team-specific profile decorations and badges</p>
                  </div>
                  <div className="flex items-start">
                    <Sparkles className="h-4 w-4 text-royal-gold mr-2 mt-1" />
                    <p className="text-sm text-white/80">Access to team-only mockery options</p>
                  </div>
                  <div className="flex items-start">
                    <Sparkles className="h-4 w-4 text-royal-gold mr-2 mt-1" />
                    <p className="text-sm text-white/80">Team-specific leaderboard and competitions</p>
                  </div>
                  <div className="flex items-start">
                    <Sparkles className="h-4 w-4 text-royal-gold mr-2 mt-1" />
                    <p className="text-sm text-white/80">Special team events with unique rewards</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-morphism border-white/10">
                <CardHeader>
                  <div className="flex items-center">
                    <Info className="h-5 w-5 mr-2 text-royal-gold" />
                    <CardTitle className="text-lg">Team Humor</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  {selectedTeam ? (
                    <div className="space-y-4">
                      <div className="p-3 bg-white/5 rounded-lg">
                        <p className="text-sm italic text-white/80">
                          {getTeamNFTJoke(selectedTeam)}
                        </p>
                      </div>
                      <div className="p-3 bg-white/5 rounded-lg">
                        <p className="text-sm italic text-white/80">
                          {getTeamCryptoRoast(selectedTeam)}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <p className="text-white/60 text-sm">Select a team to see team-specific humor</p>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TeamSelector;
