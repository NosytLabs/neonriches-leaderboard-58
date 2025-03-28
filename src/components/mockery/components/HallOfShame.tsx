
import React from 'react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { getMockeryTierText, getMockeryTierColor } from '../utils/mockeryUtils';

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
  tier?: string;
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
        const tierColors = user.tier ? getMockeryTierColor(user.tier) : { text: '', bg: '', border: '' };
        
        return (
          <Card 
            key={user.userId} 
            className={`p-4 ${user.tier ? tierColors.bg : 'bg-white/5'} ${user.tier ? tierColors.border : 'border-white/10'} border`}
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
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">{user.username}</h3>
                  {user.tier && (
                    <Badge 
                      variant="outline" 
                      className={tierColors.text}
                    >
                      {getMockeryTierText(user.tier)}
                    </Badge>
                  )}
                </div>
                
                <div className="flex items-center text-sm text-white/60">
                  <span>Mocked {user.mockeryCount} {user.mockeryCount === 1 ? 'time' : 'times'}</span>
                  {user.lastMocked && (
                    <span className="ml-2 text-xs">
                      Last: {new Date(user.lastMocked).toLocaleDateString()}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default HallOfShame;
