
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, Award, Users } from 'lucide-react';
import TeamChat from './TeamChat';
import { User } from '@/types/user';
import { TeamType } from '@/types/user';

interface TeamChatRoomProps {
  user: User | null;
}

const TeamChatRoom: React.FC<TeamChatRoomProps> = ({ user }) => {
  const [activeTeam, setActiveTeam] = useState<TeamType>('all');
  
  const getTeamLabel = (team: TeamType) => {
    switch (team) {
      case 'red': return 'Red Team';
      case 'green': return 'Green Team';
      case 'blue': return 'Blue Team';
      case 'all': return 'All Teams';
      default: return 'All Teams';
    }
  };
  
  const getTeamIcon = (team: TeamType) => {
    switch (team) {
      case 'red': return <Shield className="h-4 w-4 text-red-500" />;
      case 'green': return <Shield className="h-4 w-4 text-green-500" />;
      case 'blue': return <Shield className="h-4 w-4 text-blue-500" />;
      case 'all': return <Users className="h-4 w-4" />;
      default: return <Users className="h-4 w-4" />;
    }
  };
  
  const handleTeamChange = (team: TeamType) => {
    setActiveTeam(team);
  };
  
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center">
          <Award className="mr-2 h-5 w-5 text-royal-gold" />
          Team Chat Room
        </CardTitle>
      </CardHeader>
      
      <Tabs value={activeTeam} onValueChange={(value) => handleTeamChange(value as TeamType)}>
        <TabsList className="grid grid-cols-4 bg-transparent">
          <TabsTrigger value="all" className="data-[state=active]:bg-white/10">
            <Users className="h-4 w-4 mr-1" />
            All
          </TabsTrigger>
          <TabsTrigger value="red" className="data-[state=active]:bg-red-500/20 data-[state=active]:text-red-500">
            <Shield className="h-4 w-4 mr-1" />
            Red
          </TabsTrigger>
          <TabsTrigger value="green" className="data-[state=active]:bg-green-500/20 data-[state=active]:text-green-500">
            <Shield className="h-4 w-4 mr-1" />
            Green
          </TabsTrigger>
          <TabsTrigger value="blue" className="data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-500">
            <Shield className="h-4 w-4 mr-1" />
            Blue
          </TabsTrigger>
        </TabsList>
        
        <CardContent className="pt-4">
          <TeamChat user={user} />
          
          {!user && (
            <div className="mt-4 p-4 bg-white/5 rounded-lg text-center">
              <p className="text-white/70 mb-2">Join a team to participate in team chat</p>
              <Button>Log In</Button>
            </div>
          )}
        </CardContent>
      </Tabs>
    </Card>
  );
};

export default TeamChatRoom;
