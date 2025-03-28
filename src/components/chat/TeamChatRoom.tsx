
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/auth';
import { Shield, Users, Flame, Zap, Droplets } from 'lucide-react';
import WhaleChat from './WhaleChat';
import { Button } from '@/components/ui/button';
import { TeamType } from '@/types/user';

interface TeamMember {
  id: string;
  username: string;
  profileImage?: string;
  isOnline: boolean;
  rank?: number;
}

interface TeamChatRoomProps {
  title?: string;
  description?: string;
}

const TeamChatRoom: React.FC<TeamChatRoomProps> = ({
  title = "Royal Team Chambers",
  description = "Coordinate with your fellow team members",
}) => {
  const { user, isAuthenticated } = useAuth();
  const [activeTeam, setActiveTeam] = useState<TeamType | 'all'>('all');
  
  useEffect(() => {
    // If user has a team, set it as the default active team
    if (user?.team && user.team !== 'none') {
      setActiveTeam(user.team);
    }
  }, [user]);
  
  const getTeamIcon = (team: string) => {
    switch(team) {
      case 'red': return <Flame className="h-4 w-4 text-red-500" />;
      case 'green': return <Zap className="h-4 w-4 text-green-500" />;
      case 'blue': return <Droplets className="h-4 w-4 text-blue-500" />;
      default: return <Users className="h-4 w-4 text-white/80" />;
    }
  };
  
  const getTeamColor = (team: string) => {
    switch(team) {
      case 'red': return 'text-red-500 border-red-500/30 bg-red-500/10';
      case 'green': return 'text-green-500 border-green-500/30 bg-green-500/10';
      case 'blue': return 'text-blue-500 border-blue-500/30 bg-blue-500/10';
      default: return 'text-white/80 border-white/20 bg-white/5';
    }
  };
  
  const getTeamTitle = (team: string) => {
    switch(team) {
      case 'red': return "Red Team (Neon Fire)";
      case 'green': return "Green Team (Lime Zap)";
      case 'blue': return "Blue Team (Cool Pulse)";
      default: return "All Teams";
    }
  };
  
  if (!isAuthenticated) {
    return (
      <Card className="glass-morphism border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Shield className="mr-2 h-5 w-5 text-royal-gold" />
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center py-10">
          <p>You must be logged in to access the team chambers.</p>
          <Button 
            className="royal-button mt-4" 
            onClick={() => {/* Open auth modal */}}
          >
            Enter the Court
          </Button>
        </CardContent>
      </Card>
    );
  }
  
  if (user?.team === 'none' || !user?.team) {
    return (
      <Card className="glass-morphism border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Shield className="mr-2 h-5 w-5 text-royal-gold" />
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center py-10">
          <p>You must join a team to access the team chambers.</p>
          <Button 
            className="royal-button mt-4" 
            onClick={() => {/* Navigate to team selection */}}
          >
            Choose Your Team
          </Button>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center text-lg">
            <Shield className="mr-2 h-5 w-5 text-royal-gold" />
            {title}
          </CardTitle>
          <Badge className={getTeamColor(user.team)}>
            {getTeamIcon(user.team)}
            <span className="ml-1">Team Member</span>
          </Badge>
        </div>
        <p className="text-white/60 text-sm">{description}</p>
      </CardHeader>
      
      <Tabs value={activeTeam} onValueChange={(value) => setActiveTeam(value as TeamType | 'all')}>
        <TabsList className="grid grid-cols-4 mb-2 mx-3">
          <TabsTrigger value="all" className="data-[state=active]:bg-white/10">
            <Users className="h-4 w-4 mr-1" />
            <span className="hidden sm:inline">All</span>
          </TabsTrigger>
          <TabsTrigger value="red" className="data-[state=active]:bg-red-500/20">
            <Flame className="h-4 w-4 text-red-500 mr-1" />
            <span className="hidden sm:inline">Red</span>
          </TabsTrigger>
          <TabsTrigger value="green" className="data-[state=active]:bg-green-500/20">
            <Zap className="h-4 w-4 text-green-500 mr-1" />
            <span className="hidden sm:inline">Green</span>
          </TabsTrigger>
          <TabsTrigger value="blue" className="data-[state=active]:bg-blue-500/20">
            <Droplets className="h-4 w-4 text-blue-500 mr-1" />
            <span className="hidden sm:inline">Blue</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-0">
          <WhaleChat 
            title="Royal Court Chat"
            description="Where all nobles may converse"
            minRank={999}
          />
        </TabsContent>
        
        <TabsContent value="red" className="mt-0">
          <WhaleChat 
            title="Red Team (Neon Fire)"
            description="Strategy chamber for Red Team members"
            teamFilter="red"
            minRank={999}
          />
        </TabsContent>
        
        <TabsContent value="green" className="mt-0">
          <WhaleChat 
            title="Green Team (Lime Zap)"
            description="Strategy chamber for Green Team members"
            teamFilter="green"
            minRank={999}
          />
        </TabsContent>
        
        <TabsContent value="blue" className="mt-0">
          <WhaleChat 
            title="Blue Team (Cool Pulse)"
            description="Strategy chamber for Blue Team members"
            teamFilter="blue"
            minRank={999}
          />
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default TeamChatRoom;
