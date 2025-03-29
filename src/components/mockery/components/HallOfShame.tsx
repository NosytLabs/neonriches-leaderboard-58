
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { formatTimeElapsed } from '@/utils/formatters';
import { getMockeryActionIcon, getMockeryTier, getMockeryActionTitle } from '@/components/mockery/utils/mockeryUtils';

interface MockedUser {
  username: string;
  displayName?: string;
  avatarUrl?: string;
  mockedReason: string;
  mockedTimestamp: string;
  mockedBy: string;
  mockedTier?: string;
}

interface HallOfShameProps {
  mockedUsers: MockedUser[];
}

const HallOfShame: React.FC<HallOfShameProps> = ({ mockedUsers }) => {
  if (mockedUsers.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Hall of Shame</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-8 text-center border border-dashed border-white/10 rounded-md">
            <p className="text-white/60">No users have been mocked yet. Be the first to shame someone!</p>
          </div>
        </CardContent>
      </Card>
    );
  }
  
  // Helper function to get color based on mockery tier
  const getTierColor = (tier: string = 'common') => {
    switch (tier) {
      case 'legendary': return 'text-royal-gold';
      case 'epic': return 'text-purple-400';
      case 'rare': return 'text-blue-400';
      case 'uncommon': return 'text-green-400';
      case 'common': return 'text-gray-300';
      default: return 'text-gray-300';
    }
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hall of Shame</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {mockedUsers.map((user, index) => {
          const actionTitle = user.mockedReason || 'Unknown mockery';
          const MockeryIcon = getMockeryActionIcon(actionTitle as any);
          
          return (
            <div 
              key={index} 
              className="flex items-center gap-3 p-3 rounded-md bg-white/5 border border-white/10"
            >
              <Avatar className="h-10 w-10 border border-white/10">
                <AvatarImage src={user.avatarUrl} alt={user.username} />
                <AvatarFallback>{user.username.substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-sm truncate">
                    {user.displayName || user.username}
                  </h3>
                  <Badge 
                    variant="outline" 
                    className={`text-[10px] border-0 ${getTierColor(user.mockedTier)} bg-black/30`}
                  >
                    {user.mockedTier?.toUpperCase() || 'COMMON'}
                  </Badge>
                </div>
                
                <div className="flex items-center gap-1.5 text-xs text-white/60">
                  <MockeryIcon className={`h-3 w-3 ${getTierColor(user.mockedTier)}`} />
                  <span>{actionTitle}</span>
                  <span>•</span>
                  <span>{formatTimeElapsed(user.mockedTimestamp)}</span>
                </div>
              </div>
              
              <Badge
                variant="outline"
                className="text-xs bg-black/20 border-0"
              >
                By {user.mockedBy}
              </Badge>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default HallOfShame;
