
import React, { useState } from 'react';
import { Shell } from '@/components/ui/shell';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TeamColor, TeamData } from '@/types/team';
import teamService from '@/services/teamService';
import { toTeamColor } from '@/utils/typeConverters';
import TeamDetails from '@/components/teams/TeamDetails';
import TeamLeaderboard from '@/components/teams/TeamLeaderboard';
import TeamSelector from '@/components/teams/TeamSelector';

const TeamsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTeam, setSelectedTeam] = useState<TeamColor>('gold');
  
  const handleTeamChange = (team: TeamColor) => {
    setSelectedTeam(team);
  };
  
  return (
    <Shell>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6">Teams</h1>
        
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="selection">Selection</TabsTrigger>
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <TeamDetails team={selectedTeam} className="w-full" />
          </TabsContent>
          
          <TabsContent value="selection">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4">Choose Your Team</h2>
              <TeamSelector team={selectedTeam} onTeamChange={handleTeamChange} />
            </div>
          </TabsContent>
          
          <TabsContent value="leaderboard">
            <TeamLeaderboard title="Team Rankings" />
          </TabsContent>
        </Tabs>
      </div>
    </Shell>
  );
};

export default TeamsPage;
