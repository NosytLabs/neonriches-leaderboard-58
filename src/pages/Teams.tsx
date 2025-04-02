import React, { useState } from 'react';
import { Container } from '@/components/ui/container';
import { Shell } from '@/components/ui/Shell'; // Fixed casing
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import TeamSelector from '@/components/teams/TeamSelector';
import TeamBenefitsDisplay from '@/components/teams/TeamBenefitsDisplay';
import TeamMembersTable from '@/components/teams/TeamMembersTable';
import TeamJoinButton from '@/components/teams/TeamJoinButton';
import { useTeam } from '@/hooks/useTeam';
import { Button } from '@/components/ui/button';
import { TeamColor } from '@/types/team';

const Teams = () => {
  const { currentTeam, changeTeam, isLoading, error, getTeamName, getTeamBenefits, allTeams } = useTeam();
  const [selectedTeam, setSelectedTeam] = useState<TeamColor>(currentTeam as TeamColor);
  
  const handleTeamChange = async (newTeam: TeamColor) => {
    setSelectedTeam(newTeam);
    const success = await changeTeam(newTeam);
    if (success) {
      console.log('Team changed successfully');
    } else {
      console.error('Failed to change team');
    }
  };
  
  return (
    <Shell>
      <Container>
        <Card className="glass-morphism border-white/10">
          <CardHeader>
            <CardTitle>Choose Your Allegiance</CardTitle>
          </CardHeader>
          <CardContent>
            <TeamSelector 
              onTeamChange={handleTeamChange}
            />
            {error && <p className="text-red-500">{error}</p>}
            {isLoading && <p>Loading...</p>}
          </CardContent>
        </Card>
        
        <Card className="glass-morphism border-white/10 mt-6">
          <CardHeader>
            <CardTitle>{getTeamName(selectedTeam)} Benefits</CardTitle>
          </CardHeader>
          <CardContent>
            <TeamBenefitsDisplay team={selectedTeam} />
          </CardContent>
        </Card>
        
        <Card className="glass-morphism border-white/10 mt-6">
          <CardHeader>
            <CardTitle>Team Members</CardTitle>
          </CardHeader>
          <CardContent>
            <TeamMembersTable team={selectedTeam} />
          </CardContent>
        </Card>
        
        <TeamJoinButton team={selectedTeam} />
      </Container>
    </Shell>
  );
};

export default Teams;
