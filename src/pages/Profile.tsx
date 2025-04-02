
import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { formatDollarAmount } from '@/utils/formatters';
import { Shell } from '@/components/ui/shell/Shell';

const Profile = () => {
  const { user } = useAuth();
  const { username } = useParams<{ username: string }>();

  return (
    <Shell variant="centered">
      <Card className="glass-morphism border-white/10">
        <CardHeader className="flex items-center justify-between">
          <CardTitle className="text-2xl font-bold">Profile Page</CardTitle>
          {user?.tier === 'royal' && (
            <div className="badge-royal">
              <Icon name="Crown" size="sm" color="gold" />
              <span className="ml-1">Royal</span>
            </div>
          )}
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-muted-foreground">Username: {username || (user?.username || 'Guest')}</p>
            
            {user ? (
              <div className="mt-4 space-y-2">
                <h3 className="text-xl font-bold">{user.displayName}</h3>
                <div className="flex items-center">
                  <Icon name="Trophy" size="sm" className="mr-2 text-yellow-500" />
                  <p>Rank: #{user.rank}</p>
                </div>
                <div className="flex items-center">
                  <Icon name="Users" size="sm" className="mr-2 text-blue-500" />
                  <p>Team: {user.team}</p>
                </div>
                <div className="flex items-center">
                  <Icon name="Wallet" size="sm" className="mr-2 text-green-500" />
                  <p>Total Spent: {formatDollarAmount(user.totalSpent)}</p>
                </div>
              </div>
            ) : (
              <p className="text-muted-foreground">Please log in to view your profile.</p>
            )}
            
            <Button className="mt-4" variant="default">
              Back to Dashboard
            </Button>
          </div>
        </CardContent>
      </Card>
    </Shell>
  );
};

export default Profile;
