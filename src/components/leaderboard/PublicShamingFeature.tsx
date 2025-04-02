
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Egg, Flame, Laugh, Fish, ThumbsDown } from 'lucide-react';
import { getInitials } from '@/utils/stringUtils';
import { MockeryAction } from '@/types/mockery-types';
import { 
  getMockeryDescription, 
  getMockeryTierColorClass 
} from '@/utils/mockeryUtils';

const PublicShamingFeature = () => {
  // Mock data for demonstration
  const mockedUsers = [
    {
      id: '1',
      username: 'spender123',
      displayName: 'Big Spender',
      avatarUrl: '/avatars/user1.png',
      rank: 3,
      totalSpent: 5200,
      mockeryCount: {
        tomato: 12,
        egg: 5,
        thumbsDown: 3,
        carrot: 1,
        fish: 2
      }
    },
    {
      id: '2',
      username: 'royalMoney',
      displayName: 'Royal Money',
      avatarUrl: '/avatars/user2.png',
      rank: 7,
      totalSpent: 3800,
      mockeryCount: {
        tomato: 8,
        egg: 2,
        thumbsDown: 7,
        carrot: 4,
        fish: 1
      }
    }
  ];
  
  const [userMockery, setUserMockery] = useState<Record<string, Partial<Record<MockeryAction, number>>>>({
    '1': {
      tomato: 12,
      egg: 5,
      thumbsDown: 3,
      carrot: 1,
      fish: 2
    },
    '2': {
      tomato: 8,
      egg: 2,
      thumbsDown: 7,
      carrot: 4,
      fish: 1
    }
  });
  
  // Apply mockery to a user
  const handleApplyMockery = (userId: string, action: MockeryAction) => {
    setUserMockery(prev => {
      const userMockeries = prev[userId] || {};
      const currentCount = userMockeries[action] || 0;
      
      return {
        ...prev,
        [userId]: {
          ...userMockeries,
          [action]: currentCount + 1
        }
      };
    });
  };
  
  return (
    <Card className="bg-black/20 border-white/10">
      <CardHeader>
        <CardTitle className="text-lg font-medium flex items-center">
          <Flame className="h-5 w-5 mr-2 text-red-500" />
          Public Shaming Leaderboard
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {mockedUsers.map(user => (
          <div 
            key={user.id} 
            className="p-3 border border-white/10 rounded-lg bg-black/30 hover:bg-black/40 transition-colors"
          >
            <div className="flex items-center">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarImage src={user.avatarUrl} alt={user.username} />
                <AvatarFallback>{getInitials(user.displayName || user.username)}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-sm">{user.displayName || user.username}</h3>
                    <p className="text-xs text-white/60">Rank #{user.rank} • ${user.totalSpent.toLocaleString()}</p>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    {Object.entries(userMockery[user.id] || {}).map(([key, count]) => (
                      <Badge 
                        key={key} 
                        variant="outline" 
                        className="bg-black/30 text-xs px-1.5"
                      >
                        {key === 'tomato' && <Flame className="h-3 w-3 mr-1 text-red-500" />}
                        {key === 'egg' && <Egg className="h-3 w-3 mr-1 text-yellow-500" />}
                        {key === 'thumbsDown' && <ThumbsDown className="h-3 w-3 mr-1 text-blue-500" />}
                        {key === 'carrot' && <Laugh className="h-3 w-3 mr-1 text-orange-500" />}
                        {key === 'fish' && <Fish className="h-3 w-3 mr-1 text-cyan-500" />}
                        {count}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between mt-3 gap-2">
              <Button 
                size="sm" 
                variant="outline" 
                className="w-full border-red-500/20 hover:border-red-500/40 hover:bg-red-500/10 text-xs"
                onClick={() => handleApplyMockery(user.id, 'tomato')}
              >
                <Flame className="h-3.5 w-3.5 mr-1.5 text-red-500" />
                Tomatoes
              </Button>
              
              <Button 
                size="sm" 
                variant="outline" 
                className="w-full border-yellow-500/20 hover:border-yellow-500/40 hover:bg-yellow-500/10 text-xs"
                onClick={() => handleApplyMockery(user.id, 'egg')}
              >
                <Egg className="h-3.5 w-3.5 mr-1.5 text-yellow-500" />
                Eggs
              </Button>
              
              <Button 
                size="sm" 
                variant="outline" 
                className="w-full border-blue-500/20 hover:border-blue-500/40 hover:bg-blue-500/10 text-xs"
                onClick={() => handleApplyMockery(user.id, 'thumbsDown')}
              >
                <ThumbsDown className="h-3.5 w-3.5 mr-1.5 text-blue-500" />
                Thumbs Down
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default PublicShamingFeature;
