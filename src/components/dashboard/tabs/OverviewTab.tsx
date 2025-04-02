import React from 'react';
import DashboardStatsOverview from '../DashboardStatsOverview';
import { UserProfile as User } from '@/types/user-consolidated';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Crown, ChevronUp, ChevronDown, DollarSign } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface OverviewTabProps {
  user: User;
  onSpend?: () => void;
  onPaymentSuccess?: () => void;
}

const OverviewTab: React.FC<OverviewTabProps> = ({ user, onSpend, onPaymentSuccess }) => {
  // Calculate rank change indicator
  const rankChange = user.rank && user.previousRank ? user.previousRank - user.rank : 0;
  
  // Calculate progress to next rank (simplified for demo)
  const progressToNextRank = Math.min(85, Math.floor(Math.random() * 100));
  
  // Modify the isActiveBoost function to handle both 'active' and 'isActive' properties
  const isActiveBoost = (boost: ProfileBoost): boolean => {
    // Check both properties for compatibility with different types
    return boost.active || (boost.isActive ?? false);
  };
  
  return (
    <div className="space-y-6">
      <DashboardStatsOverview user={user} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="glass-morphism border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <Crown className="h-5 w-5 mr-2 text-royal-gold" />
              Your Royal Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-white/70">Current Rank</span>
                <div className="flex items-center">
                  <span className="text-xl font-bold mr-2">#{user.rank || 'N/A'}</span>
                  {rankChange > 0 && (
                    <span className="text-green-400 flex items-center text-sm">
                      <ChevronUp className="h-4 w-4" />
                      {rankChange}
                    </span>
                  )}
                  {rankChange < 0 && (
                    <span className="text-red-400 flex items-center text-sm">
                      <ChevronDown className="h-4 w-4" />
                      {Math.abs(rankChange)}
                    </span>
                  )}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-white/70">Progress to Next Rank</span>
                <span className="text-white/90">{progressToNextRank}%</span>
              </div>
              <Progress value={progressToNextRank} className="bg-white/10" />
              
              <div className="flex items-center justify-between">
                <span className="text-white/70">Tier</span>
                <span className="text-white/90 capitalize">{user.tier || 'Basic'}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-white/70">Team</span>
                <span className="text-white/90 capitalize">{user.team || 'None'}</span>
              </div>
              
              <Button 
                onClick={onPaymentSuccess} 
                className="w-full bg-royal-gold text-black hover:bg-royal-gold/90 mt-2"
              >
                <DollarSign className="h-4 w-4 mr-2" />
                Boost Your Status
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass-morphism border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <DollarSign className="h-5 w-5 mr-2 text-royal-gold" />
              Spending Power
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-white/70">Total Spent</span>
                <span className="text-xl font-bold">${user.totalSpent?.toLocaleString() || user.amountSpent?.toLocaleString() || '0'}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-white/70">Wallet Balance</span>
                <span className="text-white/90">${user.walletBalance?.toLocaleString() || '0'}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-white/70">Spend Streak</span>
                <span className="text-white/90">{user.spendStreak || 0} days</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-white/70">Boosts Active</span>
                <span className="text-white/90">{user.profileBoosts?.filter(b => isActiveBoost(b))?.length || 0}</span>
              </div>
              
              <Button 
                onClick={onSpend} 
                className="w-full bg-purple-600 hover:bg-purple-700 mt-2"
              >
                <DollarSign className="h-4 w-4 mr-2" />
                Add Funds
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OverviewTab;
