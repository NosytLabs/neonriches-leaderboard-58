
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Trophy, Users, ArrowUp, ArrowDown } from 'lucide-react';
import { UserProfile } from '@/types/user';

interface TeamStatusCardProps {
  user: UserProfile;
}

const TeamStatusCard: React.FC<TeamStatusCardProps> = ({ user }) => {
  // Get the team color
  const getTeamColor = (team?: string) => {
    switch (team?.toLowerCase()) {
      case 'red': return 'bg-red-500';
      case 'green': return 'bg-green-500';
      case 'blue': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  // Mock team data - in a real app, this would come from the API
  const teamData = {
    red: { members: 124, rank: 2, change: 1 },
    green: { members: 98, rank: 3, change: -1 },
    blue: { members: 153, rank: 1, change: 0 }
  };

  const userTeam = user.team?.toLowerCase() as keyof typeof teamData || 'red';
  const teamInfo = teamData[userTeam];

  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Users className="mr-2 h-5 w-5 text-white" />
          Team Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-full ${getTeamColor(user.team)} flex items-center justify-center mr-4`}>
              <span className="text-white font-bold capitalize">{user.team?.charAt(0) || '?'}</span>
            </div>
            <div>
              <h3 className="text-lg font-medium capitalize">{user.team || 'No Team'}</h3>
              <p className="text-sm text-white/60">{teamInfo.members} members</p>
            </div>
          </div>

          <div className="glass-morphism border-white/10 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-white/60">Team Rank</span>
              <div className="flex items-center">
                <Trophy className="h-4 w-4 text-yellow-400 mr-1" />
                <span className="font-bold">#{teamInfo.rank}</span>
                {teamInfo.change > 0 && (
                  <ArrowUp className="h-4 w-4 text-green-400 ml-1" />
                )}
                {teamInfo.change < 0 && (
                  <ArrowDown className="h-4 w-4 text-red-400 ml-1" />
                )}
              </div>
            </div>
            <Progress 
              value={45} 
              className="h-2 bg-white/10"
              indicatorClassName={`${getTeamColor(user.team)}`}
            />
            <div className="text-xs text-white/50 mt-1">
              45% to next rank
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2">Team Contributions</h4>
            <div className="grid grid-cols-3 gap-2">
              <div className="glass-morphism border-white/10 p-2 rounded-lg text-center">
                <div className="text-xl font-bold">5</div>
                <div className="text-xs text-white/60">Referrals</div>
              </div>
              <div className="glass-morphism border-white/10 p-2 rounded-lg text-center">
                <div className="text-xl font-bold">12</div>
                <div className="text-xs text-white/60">Comments</div>
              </div>
              <div className="glass-morphism border-white/10 p-2 rounded-lg text-center">
                <div className="text-xl font-bold">$120</div>
                <div className="text-xs text-white/60">Spent</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamStatusCard;
