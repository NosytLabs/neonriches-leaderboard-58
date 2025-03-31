import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Crown, DollarSign, TrendingUp, TrendingDown } from 'lucide-react';
import { formatCurrency } from '@/utils/formatters';
import { UserProfile } from '@/types/user-types';
import { useNavigate } from 'react-router-dom';
import { Trophy, CrownIcon } from 'lucide-react';
import { UserTier, TeamType } from '@/types/user-types';

const TopSpenderShowcase: React.FC = () => {
  const navigate = useNavigate();
  
  // Simplified top spenders
  const topSpenders = [
    {
      id: '1',
      username: 'ThroneMaster',
      displayName: 'Throne Master',
      profileImage: '/images/avatars/top1.jpg',
      rank: 1,
      tier: 'royal' as UserTier,
      team: 'gold' as TeamType,
      totalSpent: 25000,
      achievements: ['Royal Patron', 'Crown Holder', 'Fortune Throne']
    },
    {
      id: '2',
      username: 'GoldBaronX',
      displayName: 'Gold Baron',
      profileImage: '/images/avatars/top2.jpg',
      rank: 2,
      tier: 'platinum' as UserTier,
      team: 'blue' as TeamType,
      totalSpent: 18750, 
      achievements: ['Platinum Patron', 'Elite Donor']
    },
    {
      id: '3',
      username: 'DigitalNoble',
      displayName: 'Digital Noble',
      profileImage: '/images/avatars/top3.jpg',
      rank: 3,
      tier: 'platinum' as UserTier,
      team: 'red' as TeamType,
      totalSpent: 12500,
      achievements: ['Gold Patron', 'Legacy Builder']
    }
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {topSpenders.map((spender) => (
        <Card key={spender.id} className="bg-black/30 border-white/10 overflow-hidden">
          <CardHeader>
            <CardTitle className={`h-1 ${spender.rank === 1 ? 'bg-yellow-500' : spender.rank === 2 ? 'bg-gray-400' : 'bg-amber-700'}`}></CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center">
                <div className="relative">
                  <Avatar className="h-14 w-14 border-2 border-white/20">
                    <AvatarImage src={spender.profileImage} alt={spender.username} />
                    <AvatarFallback>{spender.username[0].toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div className="absolute -top-1 -right-1">
                    <Badge variant="outline" className="bg-black border-none flex items-center h-6 px-2">
                      <Trophy className={`h-3 w-3 mr-1 ${spender.rank === 1 ? 'text-yellow-500' : spender.rank === 2 ? 'text-gray-400' : 'text-amber-700'}`} />
                      <span className="text-xs font-bold">#{spender.rank}</span>
                    </Badge>
                  </div>
                </div>
                <div className="ml-3">
                  <h3 className="font-bold text-sm">{spender.displayName}</h3>
                  <p className="text-xs text-white/60">@{spender.username}</p>
                </div>
              </div>
              <UserBadge type="tier" value={spender.tier} size="sm" />
            </div>
            
            <div className="mb-4">
              <div className="text-xs text-white/60 mb-1">Total Spent</div>
              <div className="text-lg font-bold">${formatCurrency(spender.totalSpent)}</div>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => navigate(`/profile/${spender.username}`)}
              >
                View Profile
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full bg-black/30 hover:bg-black/50"
                onClick={() => navigate(`/leaderboard?highlight=${spender.id}`)}
              >
                <CrownIcon className="h-3 w-3 mr-1" />
                Leaderboard
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TopSpenderShowcase;
