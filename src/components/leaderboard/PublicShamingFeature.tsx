
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Eye, Target, TrendingUp, Trophy, User } from 'lucide-react';
import { LeaderboardUser, MockeryAction } from '@/types/mockery-types';
import { formatCurrency } from '@/utils/formatters';
import { useToast } from '@/hooks/use-toast';

interface PublicShamingFeatureProps {
  users: LeaderboardUser[];
  onShame?: (userId: string, action: MockeryAction) => void;
}

// Define a type for valid mockery actions
type ValidMockeryAction = Extract<MockeryAction, 'tomato' | 'egg' | 'putridEgg'>;

const PublicShamingFeature: React.FC<PublicShamingFeatureProps> = ({ 
  users = [], 
  onShame 
}) => {
  const { toast } = useToast();
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Define the mockery action costs
  const actionCosts: Record<string, number> = {
    'tomato': 10,
    'egg': 25,
    'putridEgg': 50,
    'thumbsDown': 5,
    'mock': 15,
    'jester': 35,
    'taunt': 20
  };

  // Define more consistent mockery action costs for the user interface
  const displayActionCosts: Record<string, number> = {
    'tomato': 10,
    'egg': 25,
    'putridEgg': 50,
    'thumbsDown': 5,
    'mock': 15,
    'jester': 35,
    'taunt': 20
  };

  const handleSelectUser = (userId: string) => {
    setSelectedUserId(userId === selectedUserId ? null : userId);
  };

  const handleShameUser = async (userId: string, action: MockeryAction) => {
    setLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Call the callback if provided
    if (onShame) {
      onShame(userId, action);
    }

    // Show toast notification
    toast({
      title: "Mockery Deployed",
      description: `You have successfully shamed this user with ${action}.`,
      variant: "default"
    });

    setLoading(false);
    setSelectedUserId(null);
  };

  if (users.length === 0) {
    return (
      <Card className="glass-morphism border-white/10">
        <CardHeader>
          <CardTitle>Public Shaming</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center py-8 text-white/60">
            No users available for shaming at this time.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Target className="h-5 w-5 mr-2 text-red-500" />
          Public Shaming
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-white/60 mb-4">
          Mock those who spend less than you! Choose a user below to shame.
        </p>

        <div className="space-y-3">
          {users.slice(0, 5).map(user => (
            <div 
              key={user.id || user.userId} 
              className={`p-3 rounded-lg border ${
                selectedUserId === (user.id || user.userId) 
                  ? 'bg-black/40 border-royal-gold/20' 
                  : 'bg-black/20 border-white/5 hover:bg-black/30 hover:border-white/10'
              } transition-all cursor-pointer`}
              onClick={() => handleSelectUser(user.id || user.userId || '')}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={user.profileImage} />
                    <AvatarFallback>
                      {user.username?.substring(0, 2).toUpperCase() || 'U'}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium flex items-center">
                      {user.displayName || user.username}
                      {user.isVerified && (
                        <Badge variant="outline" className="ml-2 h-5 px-1.5">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          #{user.rank}
                        </Badge>
                      )}
                    </div>
                    <div className="text-xs text-white/60">
                      Spent: {formatCurrency(user.totalSpent || user.amountSpent || 0)}
                    </div>
                  </div>
                </div>
                
                {selectedUserId !== (user.id || user.userId) && (
                  <Button size="sm" variant="ghost" className="text-white/70 hover:text-white">
                    <Eye className="h-4 w-4 mr-1" />
                    Details
                  </Button>
                )}
              </div>

              {selectedUserId === (user.id || user.userId) && (
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <Button 
                    size="sm"
                    variant="outline"
                    className="bg-black/30"
                    onClick={() => handleShameUser(user.id || user.userId || '', 'tomato')}
                    disabled={loading}
                  >
                    Tomato (${displayActionCosts['tomato']})
                  </Button>
                  <Button 
                    size="sm"
                    variant="outline"
                    className="bg-black/30"
                    onClick={() => handleShameUser(user.id || user.userId || '', 'egg')}
                    disabled={loading}
                  >
                    Egg (${displayActionCosts['egg']})
                  </Button>
                  <Button 
                    size="sm"
                    variant="outline"
                    className="bg-black/30"
                    onClick={() => handleShameUser(user.id || user.userId || '', 'mock')}
                    disabled={loading}
                  >
                    Mock (${displayActionCosts['mock']})
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PublicShamingFeature;
