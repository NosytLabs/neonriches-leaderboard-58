
import React, { useState } from 'react';
import { Shell } from '@/components/ui/shell';
import PageHeader from '@/components/common/PageHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TeamOverview from '@/components/teams/TeamOverview';
import TeamSelection from '@/components/teams/TeamSelection';
import { TeamMembersTable } from '@/components/teams/TeamMembersTable';
import useAuth from '@/hooks/useAuth';
import { toStandardUserProfile, ensureTeamColor } from '@/utils/typeUnifier';
import { TeamColor } from '@/types/mockery-types';

const TeamsPage: React.FC = () => {
  const { user, updateUser } = useAuth();
  const [selectedTeam, setSelectedTeam] = useState('');

  // Create a standard user profile
  const standardUser = user ? toStandardUserProfile(user) : null;

  const handleUpdateTeam = async (team: TeamColor | string): Promise<boolean> => {
    if (user && updateUser) {
      const teamColor = ensureTeamColor(team);
      await updateUser({ team: teamColor });
      return true;
    }
    return false;
  };

  const handleTeamSelect = (team: TeamColor | string) => {
    setSelectedTeam(team as string);
  };

  return (
    <Shell>
      <PageHeader
        title="Royal Teams"
        description="Join a team and compete for glory and rewards."
        size="default"
      />
      
      <div className="container mx-auto py-8">
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="glass-morphism border-white/10 grid grid-cols-2 md:w-[400px]">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="selection">Selection</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            {standardUser && (
              <TeamOverview 
                user={standardUser} 
                onUpdateTeam={handleUpdateTeam} 
              />
            )}
          </TabsContent>
          
          <TabsContent value="selection" className="space-y-4">
            <TeamSelection onTeamSelect={handleTeamSelect} />
          </TabsContent>
        </Tabs>
        
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Team Members</h2>
          <TeamMembersTable />
        </div>
      </div>
    </Shell>
  );
};

export default TeamsPage;
