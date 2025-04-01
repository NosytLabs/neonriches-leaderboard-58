
import React, { useState, useEffect } from 'react';
import { Shell } from '@/components/ui/Shell';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { TeamColor } from '@/types/team';
import useTeam from '@/hooks/useTeam';
import { useAuth } from '@/hooks/useAuth';
import { Separator } from '@/components/ui/separator';
import { Shield, Users, Trophy, Crown, Zap, Swords, BookOpen, Leaf, Coins } from 'lucide-react';

interface TeamData {
  id: string;
  color: TeamColor;
  name: string;
  motto: string;
  members: number;
  benefits: string[];
}

const Teams: React.FC = () => {
  const team = useTeam();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  
  const allTeamColors: TeamColor[] = ['red', 'blue', 'green', 'gold', 'purple', 'silver', 'bronze'];
  
  // Convert allTeamColors to TeamData[] format
  const teamData: TeamData[] = allTeamColors.map(color => ({
    id: color,
    color: color,
    name: team.getTeamName(color),
    motto: team.getTeamMotto(color),
    members: Math.floor(Math.random() * 1000) + 100, // Mock member count
    benefits: team.getTeamBenefits(color)
  }));
  
  const handleSelectTeam = async (selectedTeam: TeamColor) => {
    if (!user) {
      // Show login prompt
      return;
    }
    
    setLoading(true);
    try {
      await team.changeTeam(selectedTeam);
    } catch (error) {
      console.error('Error changing team:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const getTeamIcon = (color: TeamColor) => {
    switch (color) {
      case 'red': return <Swords className="h-6 w-6 text-red-500" />;
      case 'blue': return <BookOpen className="h-6 w-6 text-blue-500" />;
      case 'green': return <Leaf className="h-6 w-6 text-green-500" />;
      case 'gold': return <Coins className="h-6 w-6 text-yellow-400" />;
      case 'purple': return <Crown className="h-6 w-6 text-purple-500" />;
      case 'silver': return <Shield className="h-6 w-6 text-gray-400" />;
      case 'bronze': return <Trophy className="h-6 w-6 text-amber-600" />;
      default: return <Users className="h-6 w-6 text-gray-400" />;
    }
  };
  
  return (
    <Shell>
      <div className="container mx-auto px-4 py-12">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold royal-gradient">Royal Court Teams</h1>
            <p className="mt-2 text-white/70">Join a team to showcase your allegiance and gain exclusive benefits</p>
          </div>
          
          <TeamSelector 
            currentTeam={team.currentTeam} 
            onSelectTeam={handleSelectTeam}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamData.map((team) => (
              <TeamCard 
                key={team.id}
                team={team}
                icon={getTeamIcon(team.color)}
                onJoin={() => handleSelectTeam(team.color)}
                isCurrentTeam={user?.team === team.color}
              />
            ))}
          </div>
        </div>
      </div>
    </Shell>
  );
};

interface TeamSelectorProps {
  currentTeam: TeamColor;
  onSelectTeam: (team: TeamColor) => Promise<void>;
}

const TeamSelector: React.FC<TeamSelectorProps> = ({ currentTeam, onSelectTeam }) => {
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle>Your Current Team</CardTitle>
        <CardDescription>
          Your team affiliation affects your status and benefits in the Royal Court
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-center">
          {/* Display current team info */}
        </div>
      </CardContent>
    </Card>
  );
};

interface TeamCardProps {
  team: TeamData;
  icon: React.ReactNode;
  onJoin: () => void;
  isCurrentTeam: boolean;
}

const TeamCard: React.FC<TeamCardProps> = ({ team, icon, onJoin, isCurrentTeam }) => {
  return (
    <Card className={`glass-morphism border-white/10 overflow-hidden hover:shadow-lg transition-all ${isCurrentTeam ? 'ring-2 ring-offset-2 ring-offset-background' : ''}`}>
      <div className={`h-2 w-full ${team.color === 'red' ? 'bg-red-500' : 
        team.color === 'blue' ? 'bg-blue-500' : 
        team.color === 'green' ? 'bg-green-500' : 
        team.color === 'gold' ? 'bg-yellow-400' : 
        team.color === 'purple' ? 'bg-purple-500' : 
        team.color === 'silver' ? 'bg-gray-300' : 
        team.color === 'bronze' ? 'bg-amber-600' : 'bg-gray-500'}`}
      />
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center gap-2">
            {icon}
            <span>{team.name}</span>
          </CardTitle>
          <Badge variant="outline" className="ml-2">
            <Users className="h-3 w-3 mr-1" />
            {team.members}
          </Badge>
        </div>
        <CardDescription>"{team.motto}"</CardDescription>
      </CardHeader>
      <CardContent>
        <h4 className="font-medium mb-2">Team Benefits:</h4>
        <ul className="space-y-1 text-sm">
          {team.benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-start">
              <Zap className="h-4 w-4 mr-1 text-royal-gold shrink-0 mt-0.5" />
              <span className="text-white/80">{benefit}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <button
          onClick={onJoin}
          disabled={isCurrentTeam}
          className={`w-full py-2 rounded-md transition-colors ${
            isCurrentTeam 
              ? 'bg-white/10 text-white/50 cursor-not-allowed' 
              : `bg-white/5 hover:bg-white/10 text-white border border-white/10`
          }`}
        >
          {isCurrentTeam ? 'Current Team' : 'Join Team'}
        </button>
      </CardFooter>
    </Card>
  );
};

export default Teams;
