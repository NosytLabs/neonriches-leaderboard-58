import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowUp, ArrowDown, Search, Trophy } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { TeamData } from '@/types/team-data';
import { toTeamColor } from '@/utils/typeConverters';
import { cn } from '@/lib/utils';
import { formatCurrency } from '@/utils/formatters';

interface TeamLeaderboardProps {
  teams?: TeamData[];
  title?: string;
  limit?: number;
}

const mockTeams: TeamData[] = [
  {
    id: "1",
    name: "Gold Spenders",
    color: toTeamColor("gold"),
    description: "The elite team of royal spenders",
    logoUrl: "/teams/gold-logo.png",
    members: 120,
    totalContribution: 250000,
    rank: 1,
    previousRank: 2,
    benefits: ["Royal protection", "Crown badge", "Extended mockery options"]
  },
  {
    id: "2",
    name: "Blue Warriors",
    color: toTeamColor("blue"),
    description: "Strategic spenders with a plan",
    logoUrl: "/teams/blue-logo.png",
    members: 240,
    totalContribution: 180000,
    rank: 2,
    previousRank: 1,
    benefits: ["Team boost bonuses", "Special events access", "Community rewards"]
  },
  {
    id: "3",
    name: "Red Rivals",
    color: toTeamColor("red"),
    description: "Competitive and aggressive spenders",
    logoUrl: "/teams/red-logo.png",
    members: 205,
    totalContribution: 160000,
    rank: 3,
    previousRank: 3,
    benefits: ["Rival bonuses", "Comeback mechanics", "Team challenges"]
  },
  {
    id: "4",
    name: "Green Growth",
    color: toTeamColor("green"),
    description: "Steady and sustainable spenders",
    logoUrl: "/teams/green-logo.png",
    members: 320,
    totalContribution: 120000,
    rank: 4,
    previousRank: 5,
    benefits: ["Growth bonuses", "New member rewards", "Group incentives"]
  },
  {
    id: "5",
    name: "Purple Prestige",
    color: toTeamColor("purple"),
    description: "Elegant and prestigious spenders",
    logoUrl: "/teams/purple-logo.png",
    members: 90,
    totalContribution: 90000,
    rank: 5,
    previousRank: 4,
    benefits: ["Prestige badges", "Exclusive cosmetics", "VIP events"]
  }
];

const TeamLeaderboard: React.FC<TeamLeaderboardProps> = ({ 
  teams = mockTeams, 
  title = "Team Leaderboard",
  limit = 5
}) => {
  const [sortedTeams, setSortedTeams] = useState<TeamData[]>(
    [...teams].sort((a, b) => (b.totalContribution || b.totalSpent) - (a.totalContribution || a.totalSpent))
  );
  
  const getTeamColorClass = (color: TeamColor): string => {
    const colorMap: Record<TeamColor, string> = {
      'red': 'text-red-500',
      'blue': 'text-blue-500',
      'green': 'text-green-500',
      'gold': 'text-yellow-500',
      'purple': 'text-purple-500',
      'silver': 'text-gray-400',
      'bronze': 'text-amber-700',
      'crimson': 'text-rose-600',
      'none': 'text-gray-400',
      'neutral': 'text-gray-400'
    };
    
    return colorMap[color] || 'text-gray-400';
  };
  
  const getRankChangeIcon = (team: TeamData) => {
    if (!team.previousRank) return null;
    
    const rankDiff = team.previousRank - team.rank;
    
    if (rankDiff > 0) {
      return <ArrowUp className="h-4 w-4 text-green-500" />;
    } else if (rankDiff < 0) {
      return <ArrowDown className="h-4 w-4 text-red-500" />;
    } else {
      return null;
    }
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Trophy className="mr-2 h-5 w-5 text-royal-gold" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {sortedTeams.slice(0, limit).map((team, index) => (
            <div 
              key={team.id || team.name} 
              className={cn(
                "flex items-center justify-between p-3 rounded-lg border transition-colors",
                index === 0 ? "bg-royal-gold/10 border-royal-gold/30" : "bg-background/50 border-border/50 hover:bg-background/80"
              )}
            >
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 h-10 w-10 overflow-hidden rounded-full bg-background/80 flex items-center justify-center">
                  {team.logoUrl ? (
                    <img src={team.logoUrl} alt={team.name} className="h-full w-full object-cover" />
                  ) : (
                    <div className={cn("font-bold text-lg", getTeamColorClass(team.color))}>
                      {team.name.charAt(0)}
                    </div>
                  )}
                </div>
                
                <div>
                  <div className="font-semibold flex items-center">
                    {team.name}
                    <Badge variant="outline" className="ml-2 text-xs">
                      Rank #{team.rank}
                    </Badge>
                    {getRankChangeIcon(team)}
                  </div>
                  <div className="text-sm text-muted-foreground flex items-center space-x-2">
                    <span><Users className="inline h-3 w-3 mr-1" />{team.members?.length || team.memberCount}</span>
                    <span>•</span>
                    <span>{formatCurrency(team.totalContribution || team.totalSpent)}</span>
                  </div>
                </div>
              </div>
              
              {index === 0 && (
                <Badge className="bg-royal-gold text-black">
                  <Medal className="h-3 w-3 mr-1" />
                  Leader
                </Badge>
              )}
            </div>
          ))}
          
          {sortedTeams.length === 0 && (
            <div className="text-center py-4 text-muted-foreground">
              No teams available
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamLeaderboard;
