import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { Flame, Clock, Medal, Star, Crown, Badge, Shield } from 'lucide-react';
import { MockeryAction } from '@/types/mockery';
import { LeaderboardUser } from '@/types/leaderboard';
import ShameModal from './components/ShameModal';

// Import properly from shameUtils
import { hasWeeklyDiscount } from '@/utils/shameUtils';
import { getWeeklyDiscountedAction } from '@/utils/shameUtils';
import { getMockeryName } from '@/utils/mockeryUtils';
import { getDiscountedShamePrice } from '@/utils/shameUtils';

interface PublicShamingFestivalProps {
  leaderboardUsers: LeaderboardUser[];
  onShameApplied: (userId: string, shameType: MockeryAction) => void;
}

const PublicShamingFestival: React.FC<PublicShamingFestivalProps> = ({ leaderboardUsers, onShameApplied }) => {
  const [selectedUser, setSelectedUser] = useState<LeaderboardUser | null>(null);
  const [selectedShame, setSelectedShame] = useState<MockeryAction | null>(null);
  
  const hasDiscount = hasWeeklyDiscount();
  const discountedAction = getWeeklyDiscountedAction();
  
  const handleShame = (user: LeaderboardUser, shameType: MockeryAction) => {
    setSelectedUser(user);
    setSelectedShame(shameType);
  };
  
  const handleConfirmShame = (userId: string) => {
    if (selectedShame) {
      onShameApplied(userId, selectedShame);
      setSelectedUser(null);
      setSelectedShame(null);
    }
  };
  
  const handleCancelShame = () => {
    setSelectedUser(null);
    setSelectedShame(null);
  };
  
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Flame className="mr-2 h-4 w-4 text-royal-crimson" />
          Public Shaming Festival
        </CardTitle>
      </CardHeader>
      
      <CardContent className="grid gap-4">
        {leaderboardUsers.map((user) => (
          <div key={user.userId} className="flex items-center justify-between p-3 rounded-lg bg-black/20 border border-white/10">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute -top-1 -left-1 w-5 h-5 flex items-center justify-center bg-background text-xs font-semibold rounded-full border border-border">
                  {user.rank}
                </div>
                <div className="h-10 w-10 rounded-full bg-muted overflow-hidden">
                  <img
                    src={user.profileImage}
                    alt={user.username}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="font-medium">{user.username}</div>
                <div className="text-xs text-muted-foreground">
                  Spent: ${user.totalSpent.toLocaleString()}
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleShame(user, 'tomatoes')}
                    className="border-royal-crimson/30 hover:bg-royal-crimson/10"
                  >
                    <Clock className="h-3 w-3 mr-1" />
                    Tomatoes
                  </Button>
                </DialogTrigger>
                {selectedUser?.userId === user.userId && selectedShame === 'tomatoes' && (
                  <ShameModal 
                    targetUser={user}
                    shameType="tomatoes"
                    onConfirm={handleConfirmShame}
                    onCancel={handleCancelShame}
                  />
                )}
              </Dialog>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleShame(user, 'eggs')}
                    className="border-royal-crimson/30 hover:bg-royal-crimson/10"
                  >
                    <Medal className="h-3 w-3 mr-1" />
                    Eggs
                  </Button>
                </DialogTrigger>
                {selectedUser?.userId === user.userId && selectedShame === 'eggs' && (
                  <ShameModal 
                    targetUser={user}
                    shameType="eggs"
                    onConfirm={handleConfirmShame}
                    onCancel={handleCancelShame}
                  />
                )}
              </Dialog>
              
              {hasDiscount && discountedAction && (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleShame(user, discountedAction)}
                      className="border-emerald-400/30 hover:bg-emerald-400/10"
                    >
                      <Star className="h-3 w-3 mr-1" />
                      {getMockeryName(discountedAction)}
                      <Badge className="ml-1 bg-emerald-500/20 text-emerald-400 text-[0.6rem]">
                        50% OFF
                      </Badge>
                    </Button>
                  </DialogTrigger>
                  {selectedUser?.userId === user.userId && selectedShame === discountedAction && (
                    <ShameModal 
                      targetUser={user}
                      shameType={discountedAction}
                      onConfirm={handleConfirmShame}
                      onCancel={handleCancelShame}
                      hasDiscount
                    />
                  )}
                </Dialog>
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default PublicShamingFestival;
