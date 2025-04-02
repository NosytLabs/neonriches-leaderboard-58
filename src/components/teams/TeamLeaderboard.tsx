
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { TeamData } from '@/types/team';
import { createTeamData, getTeamTailwindColor, addTeamId } from '@/utils/teamUtils';

interface TeamLeaderboardProps {
  teams?: TeamData[];
  className?: string;
}

const TeamLeaderboard: React.FC<TeamLeaderboardProps> = ({ teams = [], className }) => {
  // If teams is empty, create some mock teams
  const displayTeams = teams.length > 0 
    ? teams.map(team => addTeamId(team))
    : [
        createTeamData('red'),
        createTeamData('blue'),
        createTeamData('green'),
        createTeamData('gold'),
        createTeamData('purple')
      ];
  
  // Sort teams by ranking (lower is better)
  displayTeams.sort((a, b) => (a.ranking || 999) - (b.ranking || 999));
  
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Team Leaderboard</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {displayTeams.map((team, index) => (
            <div 
              key={team.id || team.color} 
              className="flex items-center p-3 rounded-lg bg-black/20 hover:bg-black/30 transition-all"
            >
              <div className="w-8 h-8 flex items-center justify-center font-bold mr-2">
                {index === 0 ? '🏆' : `#${index + 1}`}
              </div>
              
              <Avatar className={`h-10 w-10 mr-3 bg-${team.color}-500/20`}>
                {team.icon ? (
                  <AvatarImage src={`/assets/teams/${team.icon}.png`} alt={team.name} />
                ) : (
                  <AvatarFallback className={getTeamTailwindColor(team.color)}>
                    {team.name.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                )}
              </Avatar>
              
              <div>
                <div className="font-medium">{team.name}</div>
                <div className="text-sm text-white/60">
                  {team.memberCount ? `${team.memberCount} members` : 'Members: N/A'}
                </div>
              </div>
              
              <div className="ml-auto text-right">
                <div className="font-medium">Rank {team.ranking || 'N/A'}</div>
                <div className="text-sm text-white/60"></div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamLeaderboard;
