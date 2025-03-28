
import React from 'react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { safeMockeryTierLabel, safeMockeryTierColor } from '@/utils/mockeryHelpers';
import { MockeryTier } from '@/types/mockery';

interface MockUser {
  userId: string;
  username: string;
  profileImage?: string;
  mockedBy?: string[];
  mockeryCount: number;
  isShamed: boolean;
  isProtected: boolean;
  protectedUntil?: Date;
  lastMocked?: Date;
  tier?: string; // Changed to string type for flexibility
}

interface HallOfShameProps {
  mockedUsers: MockUser[];
}

const HallOfShame: React.FC<HallOfShameProps> = ({ mockedUsers }) => {
  if (mockedUsers.length === 0) {
    return (
      <div className="text-center p-8 text-white/60 italic">
        The hall of shame is empty. No users have been mocked recently.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {mockedUsers.map((user) => {
        // Only get tier colors if tier is defined
        const tierColors = user.tier ? safeMockeryTierColor(user.tier) : {
          text: 'text-white/70',
          bg: 'bg-white/5',
          border: 'border-white/10'
        };
        
        return (
          <Card 
            key={user.userId} 
            className={`p-4 ${tierColors.bg} ${tierColors.border} border`}
          >
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12 border-2 border-white/20">
                {user.profileImage ? (
                  <AvatarImage src={user.profileImage} alt={user.username} />
                ) : (
                  <AvatarFallback>
                    {user.username.charAt(0).toUpperCase()}
                  </AvatarFallback>
                )}
              </Avatar>
              
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <div className="font-medium">{user.username}</div>
                  {user.tier && (
                    <Badge variant="outline" className={`${tierColors.text} bg-black/20`}>
                      {safeMockeryTierLabel(user.tier)}
                    </Badge>
                  )}
                </div>
                <div className="text-sm text-white/60">
                  Mocked {user.mockeryCount} times
                </div>
              </div>
              
              {user.isProtected && (
                <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30">
                  Protected
                </Badge>
              )}
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default HallOfShame;
