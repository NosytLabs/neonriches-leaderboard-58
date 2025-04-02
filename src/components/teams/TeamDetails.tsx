
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { TeamData, TeamColor } from '@/types/mockery-types';
import { getTeamTailwindColor } from '@/utils/teamUtils';

interface TeamDetailsProps {
  team: TeamData & { id?: string };
  onJoin?: (teamId: string) => void;
  showJoinButton?: boolean;
  userTeam?: TeamColor | null;
}

const TeamDetails: React.FC<TeamDetailsProps> = ({ 
  team, 
  onJoin,
  showJoinButton = true,
  userTeam = null
}) => {
  const teamColor = getTeamTailwindColor(team.color as TeamColor);
  const isCurrentTeam = userTeam === team.color;
  
  return (
    <Card className="overflow-hidden border-none shadow-lg bg-black/30 backdrop-blur-sm">
      <CardHeader className={`py-4 ${teamColor}`}>
        <CardTitle className="flex items-center">
          {team.icon && (
            <span className="mr-2 text-xl">{team.icon}</span>
          )}
          {team.name}
        </CardTitle>
        <CardDescription className="text-white/80">
          {team.motto || 'Join our noble cause'}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-4">
        <p className="mb-4 text-sm text-white/70">{team.description}</p>
        
        <div className="space-y-2">
          {team.memberCount !== undefined && (
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/60">Members</span>
              <Badge variant="outline" className="text-white">{team.memberCount.toLocaleString()}</Badge>
            </div>
          )}
          
          {team.ranking !== undefined && (
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/60">Team Ranking</span>
              <Badge variant="outline" className="text-white">#{team.ranking}</Badge>
            </div>
          )}
        </div>
        
        {team.benefits && team.benefits.length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-medium mb-2">Team Benefits</h4>
            <ul className="list-disc pl-5 text-xs text-white/70 space-y-1">
              {team.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
      
      {showJoinButton && (
        <CardFooter className="pb-4">
          <Button 
            className={`w-full ${teamColor} hover:opacity-90`}
            onClick={() => onJoin && team.id && onJoin(team.id)}
            disabled={isCurrentTeam}
          >
            {isCurrentTeam ? 'Current Team' : 'Join Team'}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default TeamDetails;
