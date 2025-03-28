
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Crown, Scroll, HelpCircle, User, CalendarDays } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { convertActionToTier, getMockeryText, getMockeryColor } from '@/utils/mockeryHelpers';

type MockedUser = {
  username: string;
  displayName?: string;
  avatarUrl?: string;
  mockedReason: string;
  mockedTimestamp: string;
  mockedBy: string;
  mockedTier?: string;
};

interface HallOfShameProps {
  mockedUsers: MockedUser[];
}

const HallOfShame: React.FC<HallOfShameProps> = ({ mockedUsers }) => {
  // Helper function to get user initials for avatar fallback
  const getUserInitials = (username: string) => {
    return username.substring(0, 2).toUpperCase();
  };
  
  // Helper function to format timestamp
  const formatTimestamp = (timestamp: string) => {
    try {
      const date = new Date(timestamp);
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit' 
      });
    } catch (error) {
      return timestamp;
    }
  };
  
  // Helper function to get badge variant based on mockery type
  const getBadgeVariant = (tier: string) => {
    const mockeryTier = convertActionToTier(tier as any);
    const colorClass = getMockeryColor(mockeryTier);
    return colorClass.text;
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Scroll className="h-5 w-5 text-royal-crimson" />
          <h2 className="text-xl font-bold">Hall of Shame</h2>
        </div>
        
        <Badge className="bg-royal-crimson/80 hover:bg-royal-crimson">
          {mockedUsers.length} Shamed
        </Badge>
      </div>
      
      {mockedUsers.length === 0 ? (
        <div className="text-center py-10 bg-black/20 rounded-lg">
          <HelpCircle className="mx-auto h-10 w-10 text-gray-500 mb-2" />
          <h3 className="text-lg font-medium mb-1">No Shamed Users</h3>
          <p className="text-white/60">The kingdom is peaceful... for now</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mockedUsers.map((user, index) => (
            <Card key={index} className="glass-morphism border-royal-crimson/20">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center justify-between text-base">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-7 w-7 border border-white/20">
                      <AvatarImage src={user.avatarUrl} />
                      <AvatarFallback>{getUserInitials(user.displayName || user.username)}</AvatarFallback>
                    </Avatar>
                    <span>{user.displayName || user.username}</span>
                  </div>
                  
                  <Badge className={getBadgeVariant(user.mockedTier || 'common')}>
                    {getMockeryText(convertActionToTier(user.mockedTier as any))}
                  </Badge>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex justify-between items-center text-sm text-white/60 mb-2">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    <span>Mocked by {user.mockedBy}</span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <CalendarDays className="h-3 w-3" />
                    <span>{formatTimestamp(user.mockedTimestamp)}</span>
                  </div>
                </div>
                
                <div className="bg-black/20 p-2 rounded text-sm">
                  <p className="italic">{user.mockedReason || 'No reason provided'}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default HallOfShame;
