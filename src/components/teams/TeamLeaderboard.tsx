
import React from 'react';
import { TeamData, TeamColor } from '@/types/team';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { createTeamData, getTeamTailwindBgColor } from '@/utils/teamUtils';

const TeamLeaderboard: React.FC = () => {
  // Create mock team data with the updated function signature
  const redTeam = createTeamData('red', 'The Red Order', 'The mighty warriors of flame', 1250, 245000, 1);
  const blueTeam = createTeamData('blue', 'The Blue Guardians', 'Defenders of the realm', 980, 198000, 2);
  const greenTeam = createTeamData('green', 'The Green Sentinels', 'Stewards of the kingdom', 765, 156000, 3);
  const goldTeam = createTeamData('gold', 'The Gold Dynasty', 'The royal bloodline', 540, 129000, 4);
  const purpleTeam = createTeamData('purple', 'The Purple Reign', 'Masters of the arcane', 320, 87000, 5);

  const teams = [redTeam, blueTeam, greenTeam, goldTeam, purpleTeam];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Team Standings</h2>
      
      <div className="space-y-4">
        {teams.map((team) => (
          <Card key={team.id} className="overflow-hidden">
            <CardHeader className="p-4 pb-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10 rounded-md border">
                    <AvatarImage src={team.logo} alt={team.name} />
                    <AvatarFallback className={getTeamTailwindBgColor(team.color)}>
                      {team.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">{team.name}</CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span>#{team.rank}</span>
                      <span className="mx-1">•</span>
                      <span>{team.memberCount.toLocaleString()} members</span>
                    </div>
                  </div>
                </div>
                <Badge variant="outline" className={getTeamTailwindBgColor(team.color) + " border-0 text-white"}>
                  {team.color.toUpperCase()}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="mt-2 flex justify-between text-sm">
                <span>Total Spending:</span>
                <span className="font-medium">{team.totalSpent.toLocaleString()} coins</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TeamLeaderboard;
