
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TeamData, TeamColor } from '@/types/mockery-types';
import { formatNumber } from '@/utils/formatters';

interface TeamLeaderboardProps {
  activeTeam?: TeamColor | string;
  onSelectTeam?: (teamId: string) => void;
}

const TeamLeaderboard: React.FC<TeamLeaderboardProps> = ({ activeTeam, onSelectTeam }) => {
  // Create team data with all required properties
  const teams: TeamData[] = [
    {
      id: 'team1',
      name: 'Team Red',
      color: 'red',
      description: 'The fiery team that never backs down',
      logoUrl: '/assets/teams/red.png',
      members: 5420,
      totalContribution: 3250000,
      totalSpent: 3250000,
      rank: 1,
      previousRank: 2,
      benefits: ['Premium mockery actions', '10% bonus on all rewards', 'Exclusive team chat'],
      leader: 'RedKing',
      joinFee: 100,
      icon: 'fire'
    },
    {
      id: 'team2',
      name: 'Team Blue',
      color: 'blue',
      description: 'Cold as ice, calculated and precise',
      logoUrl: '/assets/teams/blue.png',
      members: 4890,
      totalContribution: 2850000,
      totalSpent: 2850000,
      rank: 2,
      previousRank: 1,
      benefits: ['Reduced cooldown on actions', '5% discount on all purchases', 'Blue team badge'],
      leader: 'BlueMaster',
      joinFee: 100,
      icon: 'snowflake'
    },
    {
      id: 'team3',
      name: 'Team Green',
      color: 'green',
      description: 'Growing stronger every day',
      logoUrl: '/assets/teams/green.png',
      members: 3650,
      totalContribution: 2150000,
      totalSpent: 2150000,
      rank: 3,
      previousRank: 3,
      benefits: ['Bonus experience points', 'Special team emotes', 'Green team profile skin'],
      leader: 'GreenLeader',
      joinFee: 50,
      icon: 'leaf'
    },
    {
      id: 'team4',
      name: 'Team Gold',
      color: 'gold',
      description: 'The most prestigious and wealthiest team',
      logoUrl: '/assets/teams/gold.png',
      members: 1200,
      totalContribution: 4500000,
      totalSpent: 4500000,
      rank: 4,
      previousRank: 5,
      benefits: ['Golden profile border', 'Special team animations', 'Priority support'],
      leader: 'GoldKing',
      joinFee: 1000,
      icon: 'crown'
    },
    {
      id: 'team5',
      name: 'Team Purple',
      color: 'purple',
      description: 'Mysterious and powerful',
      logoUrl: '/assets/teams/purple.png',
      members: 2540,
      totalContribution: 1850000,
      totalSpent: 1850000,
      rank: 5,
      previousRank: 4,
      benefits: ['Special team powers', 'Unique profile effects', 'Exclusive team events'],
      leader: 'PurpleWizard',
      joinFee: 200,
      icon: 'zap'
    }
  ];

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Team Rankings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {teams.map((team) => (
            <div 
              key={team.id}
              className={`p-4 rounded-md cursor-pointer transition-colors hover:bg-accent ${activeTeam === team.color ? 'bg-accent/50' : ''}`}
              onClick={() => onSelectTeam && onSelectTeam(team.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-${team.color}-500/20 text-${team.color}-500`}>
                    <div className="text-xl font-bold">#{team.rank}</div>
                  </div>
                  <div>
                    <div className="font-medium">{team.name}</div>
                    <div className="text-sm text-muted-foreground">{formatNumber(team.members)} members</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold">${formatNumber(team.totalSpent / 100)}</div>
                  <div className="text-sm text-muted-foreground">Total spent</div>
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
