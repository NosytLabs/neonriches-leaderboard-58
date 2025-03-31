
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { formatCurrency } from '@/utils/formatters';
import { TeamColor } from '@/types/team';
import { Bell, Flame, ShieldAlert, UserX } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { LeaderboardUser } from '@/types/leaderboard';

export interface PublicShamingFestivalProps {
  leaderboardUsers?: LeaderboardUser[];
  onShameApplied?: (userId: string, action: string) => void;
}

const PublicShamingFestival: React.FC<PublicShamingFestivalProps> = ({ 
  leaderboardUsers = [], // Default to empty array if not provided
  onShameApplied = () => {} // Default no-op function if not provided
}) => {
  const { toast } = useToast();
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [isShaming, setIsShaming] = useState(false);
  
  // Mock users for display if none provided
  const usersToDisplay = leaderboardUsers.length > 0 ? leaderboardUsers : [
    {
      id: '1',
      userId: '1',
      username: 'GoldenKing',
      profileImage: '/avatars/user1.png',
      totalSpent: 5000,
      rank: 1,
      team: 'gold' as TeamColor,
      tier: 'royal',
      spendStreak: 7,
      displayName: 'Golden King',
      walletBalance: 10000,
      previousRank: 2,
      joinDate: '2023-01-15T00:00:00.000Z',
      isVerified: true
    },
    {
      id: '2',
      userId: '2',
      username: 'DiamondDuchess',
      profileImage: '/avatars/user2.png',
      totalSpent: 3800,
      rank: 2,
      team: 'purple' as TeamColor,
      tier: 'elite',
      spendStreak: 5,
      displayName: 'Diamond Duchess',
      walletBalance: 7500,
      previousRank: 3,
      joinDate: '2023-02-10T00:00:00.000Z',
      isVerified: true
    },
    {
      id: '3',
      userId: '3',
      username: 'SilverSage',
      profileImage: '/avatars/user3.png',
      totalSpent: 2500,
      rank: 3,
      team: 'blue' as TeamColor,
      tier: 'platinum',
      spendStreak: 3,
      displayName: 'Silver Sage',
      walletBalance: 5000,
      previousRank: 5,
      joinDate: '2023-03-22T00:00:00.000Z',
      isVerified: true
    }
  ];
  
  const handleShameUser = (userId: string, action: string) => {
    setIsShaming(true);
    
    // Simulate API call
    setTimeout(() => {
      onShameApplied(userId, action);
      
      setIsShaming(false);
      setSelectedUser(null);
      
      toast({
        title: "Public Shaming Applied",
        description: "Your mockery has been recorded in the royal ledger!",
        variant: "success"
      });
    }, 1000);
  };
  
  const getShameActionLabel = (actionId: string) => {
    switch(actionId) {
      case 'tomato': return 'Throw Tomatoes';
      case 'mock': return 'Public Mockery';
      case 'denounce': return 'Royal Denouncement';
      default: return 'Shame';
    }
  };
  
  const getShameActionIcon = (actionId: string) => {
    switch(actionId) {
      case 'tomato': return <Flame className="h-4 w-4 mr-2" />;
      case 'mock': return <UserX className="h-4 w-4 mr-2" />;
      case 'denounce': return <ShieldAlert className="h-4 w-4 mr-2" />;
      default: return <Bell className="h-4 w-4 mr-2" />;
    }
  };
  
  return (
    <Card className="glass-morphism border-royal-gold/20">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Bell className="h-5 w-5 text-royal-gold mr-2" />
          Public Shaming Festival
        </CardTitle>
        <p className="text-sm text-muted-foreground mt-1">
          Shame those who spend less than you! Choose a peasant below to mock.
        </p>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          {usersToDisplay.map((user) => (
            <div key={user.id || user.userId} className="flex items-center justify-between p-3 rounded-lg bg-black/20 border border-white/5 hover:border-royal-gold/30 hover:bg-black/30 transition-all">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src={user.profileImage} alt={user.username} />
                  <AvatarFallback>{user.username?.[0]?.toUpperCase() || 'U'}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium flex items-center">
                    {user.username}
                    <Badge variant="outline" className="ml-2 text-xs">Rank #{user.rank}</Badge>
                  </div>
                  <div className="text-xs text-white/60">
                    Spent: ${formatCurrency(user.totalSpent || 0)}
                  </div>
                </div>
              </div>
              
              {selectedUser === (user.id || user.userId) ? (
                <div className="flex space-x-2">
                  {['tomato', 'mock', 'denounce'].map((action) => (
                    <Button 
                      key={action}
                      size="sm" 
                      variant="outline"
                      onClick={() => handleShameUser(user.id || user.userId || '', action)}
                      disabled={isShaming}
                      className="glass-morphism border-white/10 text-xs"
                    >
                      {getShameActionIcon(action)}
                      {getShameActionLabel(action)}
                    </Button>
                  ))}
                </div>
              ) : (
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={() => setSelectedUser(user.id || user.userId || '')}
                  className="glass-morphism border-white/10"
                >
                  <Bell className="h-4 w-4 mr-2" />
                  Shame
                </Button>
              )}
            </div>
          ))}
          
          <div className="text-center mt-6 pt-4 border-t border-white/10">
            <p className="text-xs text-white/50">
              Public shaming is a time-honored tradition in the SpendThrone kingdom. Shame users below your rank at your own peril.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PublicShamingFestival;
