
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { UserProfile } from '@/types/user-consolidated';
import { TeamColor } from '@/types/team';
import TeamSelectionModal from '@/components/teams/TeamSelectionModal';
import { getInitials } from '@/utils/stringUtils';

interface TeamOverviewProps {
  user: UserProfile;
  onUpdateTeam: (team: TeamColor) => Promise<void>;
  userTeam?: TeamColor;
  onJoinTeam?: () => void;
}

const TeamOverview: React.FC<TeamOverviewProps> = ({ 
  user, 
  onUpdateTeam,
  userTeam,
  onJoinTeam
}) => {
  const [showTeamModal, setShowTeamModal] = React.useState(false);
  
  // Use either passed userTeam or get from user object
  const currentTeam = userTeam || (user.team as TeamColor);
  
  // Team color mapping
  const getTeamColor = (team?: string): string => {
    switch (team) {
      case 'red': return 'text-red-500';
      case 'green': return 'text-green-500';
      case 'blue': return 'text-blue-500';
      default: return 'text-gray-500';
    }
  };
  
  // Team name mapping
  const getTeamName = (team?: string): string => {
    switch (team) {
      case 'red': return 'Royal Order of Reckless Spending';
      case 'green': return 'Emerald Exchequer Cabaret';
      case 'blue': return 'Cobalt Credit Cartel';
      default: return 'No Team';
    }
  };
  
  // Team abbreviation mapping
  const getTeamAbbreviation = (team?: string): string => {
    switch (team) {
      case 'red': return 'RORS';
      case 'green': return 'EEC';
      case 'blue': return 'CCC';
      default: return 'N/A';
    }
  };
  
  const handleUpdateTeam = async (newTeam: TeamColor) => {
    await onUpdateTeam(newTeam);
    setShowTeamModal(false);
  };
  
  const handleJoinTeamClick = () => {
    if (onJoinTeam) {
      onJoinTeam();
    } else {
      setShowTeamModal(true);
    }
  };
  
  return (
    <>
      <Card className="glass-morphism">
        <CardHeader>
          <CardTitle>Team Affiliation</CardTitle>
          <CardDescription>Your noble house in the kingdom</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <Avatar className={`h-12 w-12 ring-2 ${currentTeam ? `ring-${currentTeam}-500/50` : 'ring-gray-500/50'} bg-black/20`}>
              <AvatarImage src={user.profileImage} />
              <AvatarFallback>{getInitials(user.displayName || user.username)}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className={`font-bold ${getTeamColor(currentTeam as string)}`}>
                {getTeamName(currentTeam as string)}
              </h3>
              <p className="text-sm text-muted-foreground">
                {getTeamAbbreviation(currentTeam as string)} Member
              </p>
            </div>
            <Badge variant="outline" className="ml-auto">
              {currentTeam ? `${(currentTeam as string).charAt(0).toUpperCase()}${(currentTeam as string).slice(1)}` : 'None'}
            </Badge>
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            variant="outline" 
            className="w-full"
            onClick={handleJoinTeamClick}
          >
            Change Team
          </Button>
        </CardFooter>
      </Card>
      
      {showTeamModal && (
        <TeamSelectionModal 
          open={showTeamModal} 
          onClose={() => setShowTeamModal(false)}
          onSelect={handleUpdateTeam}
          currentTeam={currentTeam as TeamColor}
          userProfile={user}
        />
      )}
    </>
  );
};

export default TeamOverview;
