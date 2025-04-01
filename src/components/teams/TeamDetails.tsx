
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import useTeam from '@/hooks/useTeam';
import { TeamColor } from '@/types/team';
import { Badge } from '@/components/ui/badge';
import { UserCircle, Shield, Zap } from 'lucide-react';

interface TeamDetailsProps {
  team: TeamColor;
  className?: string;
}

const TeamDetails: React.FC<TeamDetailsProps> = ({ team, className }) => {
  const { getTeamName, getTeamMotto, getTeamBenefits, getTeamColor } = useTeam();
  
  return (
    <Card className={`overflow-hidden ${className}`}>
      <CardHeader className={`${getTeamColor(team).replace('text-', 'bg-').replace('500', '700/20')}`}>
        <CardTitle className="flex items-center gap-2">
          <UserCircle className={`h-5 w-5 ${getTeamColor(team)}`} />
          {getTeamName(team)}
        </CardTitle>
        <CardDescription className="text-lg font-italic">
          "{getTeamMotto(team)}"
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-4">
        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
          <Shield className="h-5 w-5" />
          Team Benefits
        </h3>
        
        <ul className="space-y-2">
          {getTeamBenefits(team).map((benefit, index) => (
            <li key={index} className="flex items-start gap-2">
              <Zap className="h-4 w-4 mt-1 flex-shrink-0" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
        
        <div className="flex flex-wrap gap-2 mt-4">
          <Badge variant="outline" className={`${getTeamColor(team)}`}>
            Team Bonus
          </Badge>
          <Badge variant="outline">
            Faction Rewards
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamDetails;
