
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { UserProfile } from '@/types/user';
import { Trophy, DollarSign, Users, Clock } from 'lucide-react';
import { formatCurrency, formatNumber } from '@/utils/formatters';

interface ProfileStatsProps {
  user: UserProfile;
}

const ProfileStats: React.FC<ProfileStatsProps> = ({ user }) => {
  // Use totalSpent or amountSpent depending on what's available
  const amountSpent = user.totalSpent ?? user.amountSpent ?? 0;
  const followersCount = typeof user.followers === 'number' 
    ? user.followers 
    : Array.isArray(user.followers) 
      ? user.followers.length 
      : 0;
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Card className="glass-morphism border-white/10">
        <CardContent className="p-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-white/70 mb-1">Rank</p>
            <p className="text-xl font-bold">#{user.rank || 'N/A'}</p>
          </div>
          <Trophy className="h-8 w-8 text-royal-gold opacity-80" />
        </CardContent>
      </Card>
      
      <Card className="glass-morphism border-white/10">
        <CardContent className="p-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-white/70 mb-1">Spent</p>
            <p className="text-xl font-bold">{formatCurrency(amountSpent)}</p>
          </div>
          <DollarSign className="h-8 w-8 text-green-500 opacity-80" />
        </CardContent>
      </Card>
      
      <Card className="glass-morphism border-white/10">
        <CardContent className="p-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-white/70 mb-1">Followers</p>
            <p className="text-xl font-bold">{formatNumber(followersCount)}</p>
          </div>
          <Users className="h-8 w-8 text-blue-500 opacity-80" />
        </CardContent>
      </Card>
      
      <Card className="glass-morphism border-white/10">
        <CardContent className="p-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-white/70 mb-1">Profile Views</p>
            <p className="text-xl font-bold">{formatNumber(user.profileViews || 0)}</p>
          </div>
          <Clock className="h-8 w-8 text-purple-500 opacity-80" />
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileStats;
