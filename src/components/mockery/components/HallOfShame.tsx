
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Target, Clock, Trophy, Crown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MockedUser {
  username: string;
  displayName: string;
  avatarUrl?: string;
  mockedReason: string;
  mockedTimestamp: string;
  mockedBy: string;
  mockedTier?: string;
  mockeryCount?: number;
}

interface HallOfShameProps {
  mockedUsers: MockedUser[];
}

const HallOfShame: React.FC<HallOfShameProps> = ({ mockedUsers }) => {
  const getTimeSince = (timestamp: string) => {
    const now = new Date();
    const mockedTime = new Date(timestamp);
    const diffInSeconds = Math.floor((now.getTime() - mockedTime.getTime()) / 1000);
    
    if (diffInSeconds < 60) {
      return 'just now';
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    } else {
      const days = Math.floor(diffInSeconds / 86400);
      return `${days} day${days !== 1 ? 's' : ''} ago`;
    }
  };
  
  const getMockeryTierStyle = (tier?: string) => {
    switch(tier?.toLowerCase()) {
      case 'common':
        return 'bg-white/10 text-white';
      case 'uncommon':
        return 'bg-royal-gold/10 text-royal-gold';
      case 'rare':
        return 'bg-royal-navy/10 text-royal-navy';
      case 'epic':
        return 'bg-royal-purple/10 text-royal-purple';
      case 'legendary':
        return 'bg-royal-crimson/10 text-royal-crimson';
      default:
        return 'bg-white/10 text-white';
    }
  };
  
  return (
    <Card className="glass-morphism border-royal-crimson/20">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center">
            <Crown className="mr-2 h-5 w-5 text-royal-crimson" />
            <span className="royal-text-shimmer">Royal Hall of Shame</span>
          </CardTitle>
          
          <Badge variant="outline" className="bg-royal-crimson/10 text-royal-crimson border-royal-crimson/30">
            {mockedUsers.length} Mocked Royals
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="px-4 pb-4">
        {mockedUsers.length === 0 ? (
          <div className="p-10 text-center text-white/50">
            <Target className="mx-auto mb-2 h-8 w-8 text-white/30" />
            <p className="text-sm">No users have been mocked yet. Be the first to mock someone!</p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="p-3 bg-black/20 rounded-lg text-sm text-white/70">
              <p className="flex items-center">
                <Trophy className="h-4 w-4 text-royal-gold mr-2" />
                <span>The most mocked users in the kingdom are showcased in our Royal Hall of Shame. The mockery effects on these profiles are purely cosmetic and have no impact on ranking or functionality.</span>
              </p>
            </div>
            
            <div className="space-y-2">
              {mockedUsers.map((user) => (
                <div
                  key={user.username}
                  className="glass-morphism border-white/10 p-3 rounded-lg"
                >
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-3 border border-white/10">
                      <AvatarImage src={user.avatarUrl} alt={user.username} />
                      <AvatarFallback>{user.username.substring(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-grow">
                      <div className="flex items-center flex-wrap gap-2">
                        <div className="font-medium">{user.displayName}</div>
                        
                        <Badge
                          className={cn("text-xs", getMockeryTierStyle(user.mockedTier))}
                        >
                          {user.mockedTier || 'Common'}
                        </Badge>
                        
                        {user.mockeryCount && user.mockeryCount > 1 && (
                          <Badge
                            variant="outline"
                            className="bg-royal-crimson/10 text-royal-crimson border-royal-crimson/30 text-xs"
                          >
                            <Target className="h-3 w-3 mr-1" />
                            Mocked {user.mockeryCount} times
                          </Badge>
                        )}
                      </div>
                      
                      <div className="text-sm text-white/60 mt-1">{user.mockedReason}</div>
                      
                      <div className="flex items-center text-xs text-white/50 mt-2">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{getTimeSince(user.mockedTimestamp)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default HallOfShame;
