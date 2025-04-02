import React from 'react';
import { Shell } from '@/components/ui/shell';
import PageHeader from '@/components/common/PageHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TeamOverview from '@/components/teams/TeamOverview';
import TeamSelection from '@/components/teams/TeamSelection';
import { TeamMembersTable } from '@/components/teams/TeamMembersTable';

const TeamsPage: React.FC = () => {
  return (
    <Shell>
      <PageHeader
        title="Royal Teams"
        description="Join a team and compete for glory and rewards."
        size="md"
      />
      
      <div className="container mx-auto py-8">
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="glass-morphism border-white/10 grid grid-cols-2 md:w-[400px]">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="selection">Selection</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            <TeamOverview />
          </TabsContent>
          
          <TabsContent value="selection" className="space-y-4">
            <TeamSelection />
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
