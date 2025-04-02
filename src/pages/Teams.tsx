
import React, { useState, useEffect } from 'react';
import { 
  Shell, 
  Badge 
} from '@/utils/componentImports';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Shield, Users, Trophy, ChevronRight } from 'lucide-react';
import { TeamColor } from '@/types/mockery-types';
import { TeamData } from '@/types/team';
import TeamSelection from '@/components/teams/TeamSelection';
import TeamOverview from '@/components/teams/TeamOverview';
import { createTeamData } from '@/utils/teamUtils';
import TeamLeaderboard from '@/components/teams/TeamLeaderboard';
import TeamDetails from '@/components/teams/TeamDetails';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toTeamColor } from '@/utils/teamUtils';

const TeamsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTeam, setSelectedTeam] = useState<TeamColor>('red');
  const [userTeam, setUserTeam] = useState<TeamColor>('none');
  const [teamDetails, setTeamDetails] = useState<TeamData | null>(null);
  
  // Simulate fetching team data
  useEffect(() => {
    const teamData = createTeamData(selectedTeam);
    setTeamDetails(teamData);
  }, [selectedTeam]);
  
  const handleTeamSelect = async (team: TeamColor | string): Promise<void> => {
    const validTeam = toTeamColor(team);
    setUserTeam(validTeam);
    setSelectedTeam(validTeam);
    return Promise.resolve();
  };
  
  const handleTeamView = (team: TeamColor | string): Promise<boolean> => {
    const validTeam = toTeamColor(team);
    setSelectedTeam(validTeam);
    return Promise.resolve(true);
  };
  
  return (
    <Shell>
      <div className="container mx-auto py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Royal Teams</h1>
          {userTeam !== 'none' ? (
            <Badge className="px-3 py-1 text-sm">
              Your Team: {userTeam.charAt(0).toUpperCase() + userTeam.slice(1)}
            </Badge>
          ) : (
            <Badge variant="outline" className="px-3 py-1 text-sm">
              No Team Selected
            </Badge>
          )}
        </div>
        
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="overview" className="flex items-center">
              <Shield className="h-4 w-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="selection" className="flex items-center">
              <Users className="h-4 w-4 mr-2" />
              Join a Team
            </TabsTrigger>
            <TabsTrigger value="leaderboard" className="flex items-center">
              <Trophy className="h-4 w-4 mr-2" />
              Team Leaderboard
            </TabsTrigger>
            <TabsTrigger value="details" className="flex items-center">
              <ChevronRight className="h-4 w-4 mr-2" />
              Team Details
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <TeamOverview 
              userTeam={userTeam} 
              onJoinTeam={() => setActiveTab('selection')}
            />
          </TabsContent>
          
          <TabsContent value="selection">
            <TeamSelection 
              onTeamSelect={handleTeamSelect}
              selectedTeam={selectedTeam}
            />
          </TabsContent>
          
          <TabsContent value="leaderboard">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <TeamLeaderboard />
              </div>
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Team Benefits</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-white/70">
                      Teams compete for glory and rewards on the royal leaderboard. 
                      Your spending contributes to your team's rank.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <Shield className="h-4 w-4 mr-2 mt-0.5 text-green-500" />
                        <span>Team-exclusive royal bonuses</span>
                      </li>
                      <li className="flex items-start">
                        <Shield className="h-4 w-4 mr-2 mt-0.5 text-green-500" />
                        <span>Weekly team competitions</span>
                      </li>
                      <li className="flex items-start">
                        <Shield className="h-4 w-4 mr-2 mt-0.5 text-green-500" />
                        <span>Special team cosmetics</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => setActiveTab('selection')}
                    >
                      Change Team
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="details">
            {teamDetails && (
              <TeamDetails team={teamDetails} />
            )}
          </TabsContent>
        </Tabs>
      </div>
    </Shell>
  );
};

export default TeamsPage;
