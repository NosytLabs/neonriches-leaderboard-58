
import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Profile = () => {
  const { user } = useAuth();
  const { username } = useParams<{ username: string }>();

  // This is a simplified placeholder component
  // We'll need to properly implement or remove the missing imports
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="glass-morphism border-white/10">
        <CardHeader>
          <CardTitle>Profile Page</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This page is currently under development.</p>
          <p>Username: {username || (user?.username || 'Guest')}</p>
          
          {user ? (
            <div className="mt-4">
              <h3 className="text-xl font-bold">{user.displayName}</h3>
              <p>Rank: #{user.rank}</p>
              <p>Team: {user.team}</p>
            </div>
          ) : (
            <p>Please log in to view your profile.</p>
          )}
          
          <Button className="mt-4" variant="default">
            Back to Dashboard
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
