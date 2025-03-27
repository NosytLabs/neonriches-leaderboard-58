
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { UserProfile } from '@/contexts/AuthContext';
import { Badge } from '@/components/ui/badge';
import TeamSwitchModal from '@/components/profile/TeamSwitchModal';

interface TeamOverviewProps {
  user: UserProfile;
}

const TeamOverview: React.FC<TeamOverviewProps> = ({ user }) => {
  const userTeam = user?.team || 'none';
  
  // Define team colors
  const teamColors = {
    red: 'bg-red-500/20 text-red-400 border-red-500/30',
    green: 'bg-green-500/20 text-green-400 border-green-500/30',
    blue: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    none: 'bg-white/10 text-white/70 border-white/20'
  };
  
  // Define team names
  const teamNames = {
    red: 'Team Crimson',
    green: 'Team Emerald',
    blue: 'Team Sapphire',
    none: 'No Team'
  };
  
  return (
    <Card className="glass-morphism border-purple-400/20">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-royal flex items-center">
          <Users className="mr-2 h-5 w-5 text-purple-400" />
          Team Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-white/70">Current Team:</span>
            <Badge variant="outline" className={teamColors[userTeam as keyof typeof teamColors]}>
              {teamNames[userTeam as keyof typeof teamNames]}
            </Badge>
          </div>
          
          <div className="glass-morphism border-white/10 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <Award className="h-5 w-5 text-purple-400 mr-2" />
              <span className="text-sm font-medium">Team Benefits</span>
            </div>
            <ul className="text-xs text-white/70 space-y-2">
              <li className="flex items-center">
                <ArrowRight className="h-3 w-3 mr-1 text-purple-400" />
                Weekly team competitions
              </li>
              <li className="flex items-center">
                <ArrowRight className="h-3 w-3 mr-1 text-purple-400" />
                Exclusive team profile decorations
              </li>
              <li className="flex items-center">
                <ArrowRight className="h-3 w-3 mr-1 text-purple-400" />
                Team chat and coordination
              </li>
            </ul>
          </div>
          
          <TeamSwitchModal 
            trigger={
              <Button 
                variant="outline" 
                className="w-full glass-morphism border-purple-400/20 hover:bg-purple-400/10"
              >
                Change Team
              </Button>
            }
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamOverview;
