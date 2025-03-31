
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { UserProfile } from '@/types/user';
import { formatCurrency } from '@/utils/formatters';
import { CrownIcon, TrendingUp, Users, Clock } from 'lucide-react';

interface ProfileStatsProps {
  user: UserProfile;
}

const ProfileStats: React.FC<ProfileStatsProps> = ({ user }) => {
  const { rank, walletBalance, amountSpent, spentAmount, totalSpent, followers } = user;
  
  // Use whatever spending value is available
  const spendingValue = totalSpent || spentAmount || amountSpent || 0;
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
      <Card className="glass-morphism border-white/10">
        <CardContent className="p-4 flex items-center gap-4">
          <div className="rounded-full bg-purple-500/10 p-2">
            <CrownIcon className="h-5 w-5 text-purple-400" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Rank</p>
            <p className="text-lg font-semibold">#{rank || 'N/A'}</p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="glass-morphism border-white/10">
        <CardContent className="p-4 flex items-center gap-4">
          <div className="rounded-full bg-green-500/10 p-2">
            <TrendingUp className="h-5 w-5 text-green-400" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Spent</p>
            <p className="text-lg font-semibold">${formatCurrency(spendingValue)}</p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="glass-morphism border-white/10">
        <CardContent className="p-4 flex items-center gap-4">
          <div className="rounded-full bg-blue-500/10 p-2">
            <Users className="h-5 w-5 text-blue-400" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Followers</p>
            <p className="text-lg font-semibold">{followers || 0}</p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="glass-morphism border-white/10">
        <CardContent className="p-4 flex items-center gap-4">
          <div className="rounded-full bg-amber-500/10 p-2">
            <Clock className="h-5 w-5 text-amber-400" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Balance</p>
            <p className="text-lg font-semibold">${formatCurrency(walletBalance || 0)}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileStats;
