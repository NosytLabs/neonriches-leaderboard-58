
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TeamData, TeamColor } from '@/types/team';
import { formatDollarAmount, formatNumber } from '@/utils/formatters';
import { Trophy, Users, TrendingUp, ArrowUp, ArrowDown, Minus } from 'lucide-react';
import TeamBadge from './TeamBadge';

interface TeamLeaderboardProps {
  teams: TeamData[];
}

const TeamLeaderboard: React.FC<TeamLeaderboardProps> = ({ teams }) => {
  // Sort teams by total contribution
  const sortedTeams = [...teams].filter(team => team.id !== 'none' && team.id !== 'neutral')
    .sort((a, b) => b.totalContribution - a.totalContribution);
  
  return (
    <div className="space-y-6">
      <Card className="glass-morphism border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Trophy className="h-5 w-5 mr-2 text-royal-gold" />
            Team Leaderboard
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-white/10">
                  <th className="pb-3 pl-3">Rank</th>
                  <th className="pb-3">Team</th>
                  <th className="pb-3">Members</th>
                  <th className="pb-3">Total Spent</th>
                  <th className="pb-3">Avg Per Member</th>
                  <th className="pb-3">Trend</th>
                </tr>
              </thead>
              <tbody>
                {sortedTeams.map((team, index) => {
                  const avgPerMember = team.members > 0 
                    ? team.totalContribution / team.members 
                    : 0;
                  
                  // Mock trend data
                  const trends = ['up', 'down', 'neutral'];
                  const trend = trends[Math.floor(Math.random() * trends.length)];
                  
                  return (
                    <tr key={team.id} className="border-b border-white/5 hover:bg-white/5">
                      <td className="py-4 pl-3 font-bold">#{index + 1}</td>
                      <td className="py-4">
                        <div className="flex items-center">
                          <TeamBadge team={team.id as TeamColor} showName={true} />
                        </div>
                      </td>
                      <td className="py-4">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1 text-white/60" />
                          {formatNumber(team.members)}
                        </div>
                      </td>
                      <td className="py-4 font-bold">
                        {formatDollarAmount(team.totalContribution)}
                      </td>
                      <td className="py-4">
                        {formatDollarAmount(avgPerMember)}
                      </td>
                      <td className="py-4">
                        {trend === 'up' && <ArrowUp className="h-5 w-5 text-green-500" />}
                        {trend === 'down' && <ArrowDown className="h-5 w-5 text-red-500" />}
                        {trend === 'neutral' && <Minus className="h-5 w-5 text-gray-500" />}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      
      <Card className="glass-morphism border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center">
            <TrendingUp className="h-5 w-5 mr-2 text-royal-gold" />
            Team Performance Stats
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {sortedTeams.slice(0, 3).map((team, index) => (
              <Card key={team.id} className="glass-morphism border-white/10">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-sm text-white/60">
                        {index === 0 ? 'Leading Team' : index === 1 ? '2nd Place' : '3rd Place'}
                      </p>
                      <h3 className="font-bold flex items-center mt-1">
                        <TeamBadge team={team.id as TeamColor} size="sm" className="mr-2" />
                        {team.name}
                      </h3>
                    </div>
                    {index === 0 && <Trophy className="h-6 w-6 text-royal-gold" />}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-white/60">Total Spent</p>
                      <p className="font-bold">{formatDollarAmount(team.totalContribution)}</p>
                    </div>
                    <div>
                      <p className="text-white/60">Members</p>
                      <p className="font-bold">{formatNumber(team.members)}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeamLeaderboard;
