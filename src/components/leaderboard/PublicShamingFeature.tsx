
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CircleDollarSign, ThumbsUp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { MockeryAction } from '@/types/mockery';

// Define a minimal user interface for simplicity
interface MinimalUser {
  id: string;
  username: string;
  profileImage?: string;
  tier?: string;
  team?: string;
  totalSpent: number;
  rank: number;
}

const PublicShamingFeature: React.FC = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  const [activeUsers, setActiveUsers] = useState<MinimalUser[]>([]);
  const [showingUsers, setShowingUsers] = useState<boolean>(false);

  // Simulate loading active users
  useEffect(() => {
    const mockUsers: MinimalUser[] = [
      {
        id: '1',
        username: 'RoyalSpender',
        profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
        tier: 'royal',
        team: 'red',
        totalSpent: 5000,
        rank: 1
      },
      {
        id: '2',
        username: 'MoneyCrown',
        profileImage: 'https://randomuser.me/api/portraits/women/2.jpg',
        tier: 'premium',
        team: 'blue',
        totalSpent: 3500,
        rank: 2
      },
      {
        id: '3',
        username: 'WealthyNoble',
        profileImage: 'https://randomuser.me/api/portraits/men/3.jpg',
        tier: 'pro',
        team: 'green',
        totalSpent: 2800,
        rank: 3
      }
    ];

    // Simulate API delay
    const timer = setTimeout(() => {
      setActiveUsers(mockUsers);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleFetchUsers = () => {
    setShowingUsers(true);
  };

  const handleShameUser = (userId: string, username: string, action: MockeryAction) => {
    // Calculate cost based on action
    const costs: Record<MockeryAction, number> = {
      'tomatoes': 5,
      'eggs': 10,
      'stocks': 20,
      'crown': 50,
      'jester': 15,
      'putridEggs': 30,
      'silence': 40,
      'courtJester': 45,
      'smokeBomb': 25,
      'shame': 15,
      'protection': 100
    };

    const cost = costs[action] || 10;

    // In a real app, this would be an API call
    toast({
      title: 'Public Shaming',
      description: `You spent $${cost} to shame ${username} with ${action}!`,
      duration: 3000
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <CircleDollarSign className="mr-2 h-5 w-5 text-royal-gold" />
          Public Shaming Feature
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          Spend money to shame other users in the most medieval way possible! Your mockery will be displayed publicly on their profile.
        </p>

        {!showingUsers ? (
          <Button onClick={handleFetchUsers} className="w-full">
            <ThumbsUp className="mr-2 h-4 w-4" />
            Show Active Users to Shame
          </Button>
        ) : activeUsers.length > 0 ? (
          <div className="space-y-4 mt-4">
            {activeUsers.map(user => (
              <div key={user.id} className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-secondary">
                    {user.profileImage && <img src={user.profileImage} alt={user.username} className="w-full h-full object-cover" />}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">{user.username}</p>
                    <p className="text-xs text-muted-foreground">Rank #{user.rank}</p>
                  </div>
                </div>
                <div>
                  <Button size="sm" variant="outline" onClick={() => handleShameUser(user.id, user.username, 'tomatoes')}>
                    Throw Tomatoes ($5)
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center py-4">Loading users...</p>
        )}
      </CardContent>
    </Card>
  );
};

export default PublicShamingFeature;
