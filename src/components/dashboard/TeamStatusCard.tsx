
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserProfile } from '@/types/user-consolidated';

interface TeamStatusCardProps {
  user: UserProfile;
}

const TeamStatusCard: React.FC<TeamStatusCardProps> = ({ user }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Status</CardTitle>
      </CardHeader>
      <CardContent>
        {user.teamName ? (
          <div>
            <p>You are a member of team: <strong>{user.teamName}</strong></p>
            <p className="mt-2">This is a placeholder for team status information.</p>
          </div>
        ) : (
          <p>You are not part of any team yet.</p>
        )}
      </CardContent>
    </Card>
  );
};

export default TeamStatusCard;
