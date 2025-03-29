
import React from 'react';
import { Clock, Crosshair, Award, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { getMockeryTier } from '@/components/mockery/utils/mockeryUtils';
import { formatDistanceToNow } from '@/utils/formatters';

// Helper function to format time elapsed since a timestamp
const formatTimeElapsed = (timestamp: string): string => {
  try {
    const date = new Date(timestamp);
    return formatDistanceToNow(date);
  } catch (error) {
    return 'Unknown time';
  }
};

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
  return (
    <div className="space-y-4">
      <div className="text-sm text-white/60 mb-2">
        <p>The Hall of Shame displays users who are currently under the effects of mockery.</p>
      </div>
      
      {mockedUsers.length === 0 ? (
        <div className="text-center py-10 bg-black/20 rounded-lg border border-white/10">
          <Award className="h-10 w-10 mx-auto mb-3 text-white/30" />
          <h3 className="text-lg font-medium text-white/80">No Shamed Users</h3>
          <p className="text-sm text-white/50 mt-1">The Hall of Shame is currently empty.</p>
        </div>
      ) : (
        <ScrollArea className="h-[400px] rounded-lg">
          <div className="space-y-3">
            {mockedUsers.map((user, index) => (
              <div 
                key={index}
                className="p-4 rounded-lg bg-black/20 border border-white/10 relative overflow-hidden transition-all duration-300 hover:bg-black/30"
              >
                <div className="absolute inset-0 opacity-10 mockery-background pointer-events-none"></div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {user.avatarUrl ? (
                      <div className="h-10 w-10 rounded-full overflow-hidden border border-white/20">
                        <img 
                          src={user.avatarUrl} 
                          alt={user.username} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="h-10 w-10 rounded-full bg-black/50 flex items-center justify-center border border-white/20">
                        <User className="h-5 w-5 text-white/60" />
                      </div>
                    )}
                    
                    <div>
                      <h4 className="font-medium">
                        {user.displayName || user.username}
                      </h4>
                      <div className="text-xs text-white/60">
                        {user.mockedReason}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end">
                    <Badge 
                      variant="outline" 
                      className="mb-1 bg-red-900/30 text-red-300 border-red-900/50"
                    >
                      <Crosshair className="h-3 w-3 mr-1" />
                      {user.mockedTier ? (user.mockedTier) : 'Unknown'} Mockery
                    </Badge>
                    
                    <div className="text-xs text-white/50 flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {formatTimeElapsed(user.mockedTimestamp)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      )}
    </div>
  );
};

export default HallOfShame;
