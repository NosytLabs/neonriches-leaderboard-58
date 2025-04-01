
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/layout/PageHeader';
import { useAuth } from '@/contexts/auth';
import { useTeam } from '@/hooks/useTeam';
import { TeamColor } from '@/types/team';
import { Users, Globe, TrendingUp, Crown } from 'lucide-react';
import TeamSelector from '@/components/teams/TeamSelector';
import TeamLeaderboard from '@/components/teams/TeamLeaderboard';
import TeamDetails from '@/components/teams/TeamDetails';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import usePageTracking from '@/hooks/usePageTracking';

const Teams = () => {
  const { user, updateUserProfile } = useAuth();
  const { toast } = useToast();
  const { allTeams } = useTeam();
  const [activeTab, setActiveTab] = useState('join');
  
  // Track page view
  usePageTracking();
  
  const handleSelectTeam = async (team: TeamColor) => {
    try {
      if (user) {
        // In a real app, this would call an API to update the user's team
        await updateUserProfile({ ...user, team });
        
        toast({
          title: "Team Joined",
          description: `You have successfully joined the ${team} team!`,
          variant: "success",
        });
        
        // Switch to the details tab
        setActiveTab('details');
      }
    } catch (error) {
      console.error("Error joining team:", error);
      toast({
        title: "Error Joining Team",
        description: "There was an error joining the team. Please try again.",
        variant: "destructive",
      });
    }
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <PageHeader 
          title="Royal Teams" 
          description="Join a royal house and compete for collective glory"
          icon={<Users className="h-8 w-8 text-royal-gold" />}
        />
        
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="mt-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="join" className="flex items-center gap-2">
              <Crown className="h-4 w-4" />
              Join Team
            </TabsTrigger>
            <TabsTrigger value="leaderboard" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Team Leaderboard
            </TabsTrigger>
            <TabsTrigger value="details" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Team Details
            </TabsTrigger>
          </TabsList>
          
          <div className="mt-6">
            <TabsContent value="join">
              <TeamSelector 
                currentTeam={user?.team as TeamColor || null} 
                onSelectTeam={handleSelectTeam} 
              />
            </TabsContent>
            
            <TabsContent value="leaderboard">
              <TeamLeaderboard teams={allTeams} />
            </TabsContent>
            
            <TabsContent value="details">
              <TeamDetails team={user?.team as TeamColor || 'neutral'} />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Teams;
