import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TeamData } from '@/types/mockery-types';

interface TeamLeaderboardProps {
  teams: TeamData[];
}

const TeamLeaderboard: React.FC<TeamLeaderboardProps> = ({ teams }) => {
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle>Team Leaderboard</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {teams.map((team) => (
            <div key={team.id} className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="mr-2">{team.rank}.</span>
                <span>{team.name}</span>
                <Badge className="ml-2">{team.color}</Badge>
              </div>
              <span>${team.totalSpent}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamLeaderboard;
