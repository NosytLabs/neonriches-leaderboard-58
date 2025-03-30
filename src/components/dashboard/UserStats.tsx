
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { User, CreditCard, BarChart, Calendar } from 'lucide-react';
import { UserProfile } from '@/types/user';
import { formatCurrency, formatDate } from '@/utils/formatters';

interface UserStatsProps {
  user: UserProfile;
}

const UserStats: React.FC<UserStatsProps> = ({ user }) => {
  return (
    <Card className="glass-morphism border-white/10">
      <CardContent className="p-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col space-y-1 border border-white/10 rounded-md p-3">
            <span className="text-sm text-white/60 flex items-center">
              <User className="inline mr-1 h-3 w-3" /> Account Tier
            </span>
            <span className="text-lg font-medium capitalize">
              {user.tier || 'Standard'}
            </span>
          </div>
          
          <div className="flex flex-col space-y-1 border border-white/10 rounded-md p-3">
            <span className="text-sm text-white/60 flex items-center">
              <CreditCard className="inline mr-1 h-3 w-3" /> Wallet Balance
            </span>
            <span className="text-lg font-medium">
              {formatCurrency(user.walletBalance || 0)}
            </span>
          </div>
          
          <div className="flex flex-col space-y-1 border border-white/10 rounded-md p-3">
            <span className="text-sm text-white/60 flex items-center">
              <BarChart className="inline mr-1 h-3 w-3" /> Average Daily Spend
            </span>
            <span className="text-lg font-medium">
              {formatCurrency(calculateAverageDailySpend())}
            </span>
          </div>
          
          <div className="flex flex-col space-y-1 border border-white/10 rounded-md p-3">
            <span className="text-sm text-white/60 flex items-center">
              <Calendar className="inline mr-1 h-3 w-3" /> Member Since
            </span>
            <span className="text-lg font-medium">
              {formatJoinDate()}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
  
  function calculateAverageDailySpend(): number {
    const totalSpent = user.totalSpent || user.amountSpent || 0;
    const joinDate = user.joinedAt || user.joinDate || new Date().toISOString();
    const daysSinceJoining = Math.max(1, getDaysSince(joinDate));
    
    return totalSpent / daysSinceJoining;
  }
  
  function getDaysSince(date: string | Date): number {
    const joinDate = new Date(date);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - joinDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }
  
  function formatJoinDate(): string {
    return formatDate(user.joinedAt || '');
  }
};

export default UserStats;
