
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar } from '@/components/ui/avatar';
import { TeamData } from '@/types/mockery-types';
import { formatNumber } from '@/utils/formatters';

interface TeamLeaderboardProps {
  teams: TeamData[];
}

const TeamLeaderboard: React.FC<TeamLeaderboardProps> = ({ teams }) => {
  // Sort teams by total contribution
  const sortedTeams = [...teams].sort((a, b) => b.totalContribution - a.totalContribution);

  // Get team badge color based on team color
  const getTeamBadgeColor = (teamColor: string) => {
    switch (teamColor) {
      case 'red':
        return 'bg-red-500 text-white';
      case 'blue':
        return 'bg-blue-500 text-white';
      case 'green':
        return 'bg-green-500 text-white';
      case 'gold':
        return 'bg-yellow-500 text-white';
      case 'purple':
        return 'bg-purple-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  // Calculate average contribution per member
  const getAverageContribution = (team: TeamData) => {
    if (!team.members || team.members === 0) return 0;
    return Math.round(team.totalContribution / team.members);
  };

  // Get contribution trend indicator
  const getContributionTrendIndicator = (team: TeamData) => {
    const previousRank = team.previousRank || 0;
    const currentRank = team.rank || 0;
    
    if (previousRank === 0 || currentRank === 0) return 'neutral';
    
    if (currentRank < previousRank) {
      return 'up';
    } else if (currentRank > previousRank) {
      return 'down';
    } else {
      return 'neutral';
    }
  };

  return (
    <Card className="w-full shadow-md bg-card">
      <CardHeader className="border-b pb-3">
        <CardTitle className="text-xl font-bold">Team Standings</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="space-y-4">
          {sortedTeams.map((team, index) => (
            <div key={team.id} className="flex items-center justify-between p-3 rounded-md hover:bg-muted/50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="flex flex-col items-center justify-center min-w-8">
                  <span className="text-lg font-bold">{index + 1}</span>
                  {getContributionTrendIndicator(team) === 'up' && (
                    <span className="text-green-500 text-xs">▲</span>
                  )}
                  {getContributionTrendIndicator(team) === 'down' && (
                    <span className="text-red-500 text-xs">▼</span>
                  )}
                </div>
                
                <Avatar className="h-10 w-10">
                  <img src={team.logoUrl} alt={team.name} className="object-cover" />
                </Avatar>
                
                <div>
                  <div className="font-medium">{team.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {team.members} {team.members === 1 ? 'member' : 'members'}
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-end">
                <Badge className={getTeamBadgeColor(team.color)}>
                  {team.color.charAt(0).toUpperCase() + team.color.slice(1)}
                </Badge>
                <div className="text-sm mt-1">
                  {formatNumber(team.totalContribution)} points
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamLeaderboard;
