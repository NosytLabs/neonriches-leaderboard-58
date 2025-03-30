
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Shield, Trophy, ArrowUp, ArrowDown } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { UserProfile } from '@/types/user';
import { getTeamColor } from '@/utils/teamUtils';

interface TeamStatusCardProps {
  user: UserProfile;
}

// Mock team standings data
const teamStandings = {
  red: { position: 1, members: 1243, totalSpent: 4532789 },
  green: { position: 2, members: 987, totalSpent: 3987654 },
  blue: { position: 3, members: 1102, totalSpent: 3654321 },
};

const TeamStatusCard: React.FC<TeamStatusCardProps> = ({ user }) => {
  const userTeam = (user.team || 'none').toLowerCase() as 'red' | 'green' | 'blue' | 'none';
  
  if (userTeam === 'none') {
    return (
      <Card className="glass-morphism border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Users className="mr-2 h-5 w-5 text-white/60" />
            Team Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center h-40">
            <p className="text-white/60 text-center">
              You are not yet aligned with a team. Join a team to see team status and contribute to team standings.
            </p>
            <Button className="mt-4">
              Join a Team
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }
  
  const team = teamStandings[userTeam];
  const teamColorClass = getTeamColor(userTeam);
  const teamProgressPercentage = Math.min(100, (team.totalSpent / 5000000) * 100);
  
  // Get team position change (mock data)
  const positionChange = userTeam === 'red' ? 1 : userTeam === 'green' ? 0 : -1;
  
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Users className="mr-2 h-5 w-5 text-white/60" />
          {userTeam.charAt(0).toUpperCase() + userTeam.slice(1)} Team Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Shield className={`h-8 w-8 mr-3 ${teamColorClass}`} />
              <div>
                <p className="text-lg font-semibold">Rank #{team.position}</p>
                <div className="flex items-center text-sm">
                  {positionChange > 0 ? (
                    <ArrowUp className="h-3 w-3 mr-1 text-green-500" />
                  ) : positionChange < 0 ? (
                    <ArrowDown className="h-3 w-3 mr-1 text-red-500" />
                  ) : null}
                  <span className={positionChange > 0 ? 'text-green-500' : positionChange < 0 ? 'text-red-500' : 'text-white/60'}>
                    {positionChange === 0 ? 'No change' : `${Math.abs(positionChange)} position${Math.abs(positionChange) > 1 ? 's' : ''} ${positionChange > 0 ? 'up' : 'down'}`}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <p className="text-lg font-semibold">{team.members.toLocaleString()}</p>
              <p className="text-sm text-white/60">Members</p>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-white/60">Team Spending Goal</span>
              <span className="text-sm font-medium">${team.totalSpent.toLocaleString()} / $5,000,000</span>
            </div>
            <Progress value={teamProgressPercentage} className={`h-2 ${teamColorClass}`} />
          </div>
          
          <div className="p-3 bg-white/5 rounded-md">
            <div className="flex items-center">
              <Trophy className="h-5 w-5 mr-2 text-royal-gold" />
              <div>
                <p className="text-sm font-medium">Team Bonus: +{Math.floor(teamProgressPercentage / 10)}% Visibility</p>
                <p className="text-xs text-white/60">All team members receive a visibility boost based on team performance</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Adding Button component that was missing in the original import list
const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { className?: string }> = ({ 
  children, 
  className = '',
  ...props 
}) => {
  return (
    <button 
      className={`px-4 py-2 bg-royal-purple text-white rounded hover:bg-royal-purple/90 transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default TeamStatusCard;
