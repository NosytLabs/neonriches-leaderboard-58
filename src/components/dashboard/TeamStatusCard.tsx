
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Users, Trophy, ArrowRight } from 'lucide-react';
import { UserProfile } from '@/types/user';
import { formatCurrency } from '@/utils/formatters';

interface TeamStatusCardProps {
  user: UserProfile;
}

const TeamStatusCard: React.FC<TeamStatusCardProps> = ({ user }) => {
  const teamName = user.team ? user.team.charAt(0).toUpperCase() + user.team.slice(1) : 'None';
  const teamColor = getTeamColor(user.team || 'none');
  
  // Sample team data
  const teamRank = 2;
  const teamMembers = 24;
  const teamTotalSpent = 25000;
  
  // Get team color class
  function getTeamColor(team: string): string {
    switch (team.toLowerCase()) {
      case 'red':
        return 'text-red-500';
      case 'green':
        return 'text-green-500';
      case 'blue':
        return 'text-blue-500';
      default:
        return 'text-gray-500';
    }
  }

  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center">
          <Users className="mr-2 h-5 w-5 text-white/70" />
          Team Status: <span className={`ml-2 ${teamColor}`}>{teamName}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col space-y-1 border border-white/10 rounded-md p-3">
            <span className="text-sm text-white/60">Team Rank</span>
            <div className="flex items-center">
              <Trophy className="mr-1 h-4 w-4 text-royal-gold" />
              <span className="text-xl font-bold">#{teamRank}</span>
            </div>
          </div>
          
          <div className="flex flex-col space-y-1 border border-white/10 rounded-md p-3">
            <span className="text-sm text-white/60">Team Members</span>
            <div className="flex items-center">
              <Users className="mr-1 h-4 w-4 text-white/70" />
              <span className="text-xl font-bold">{teamMembers}</span>
            </div>
          </div>
          
          <div className="flex flex-col space-y-1 border border-white/10 rounded-md p-3 col-span-2">
            <span className="text-sm text-white/60">Total Team Contributions</span>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold">{formatCurrency(teamTotalSpent)}</span>
              <div className="flex items-center text-sm text-white/60 hover:text-white/80 cursor-pointer">
                View Details <ArrowRight className="ml-1 h-3 w-3" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-gradient-to-r from-royal-gold/20 to-transparent rounded-md">
          <p className="text-sm text-white/70">
            Join forces with your team to climb the ranks! Every contribution counts toward your team's standing.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamStatusCard;
