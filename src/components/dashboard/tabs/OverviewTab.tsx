// Add missing ProfileBoost import
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Crown, ArrowRight, Sparkles, Activity, DollarSign } from 'lucide-react';
import { formatCurrency } from '@/utils/formatters';
import { ProfileBoost } from '@/types/boost';

interface OverviewTabProps {
  user?: any;
  onEditProfile?: () => void;
  onViewProfile?: () => void;
}

const OverviewTab: React.FC<OverviewTabProps> = ({ user, onEditProfile, onViewProfile }) => {
  if (!user) return <div>Loading...</div>;

  return (
    <div className="space-y-4">
      <Card className="glass-morphism border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Activity className="h-4 w-4 mr-2" />
            Overview
          </CardTitle>
          <CardDescription>
            Quick overview of your account and activity.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={user.profileImage} alt={user.username} />
              <AvatarFallback>{user.username.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-lg font-semibold">{user.displayName}</h3>
              <p className="text-sm text-white/60">@{user.username}</p>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <h4 className="text-sm font-medium">Wallet Balance</h4>
              <p className="text-xl font-bold">${formatCurrency(user.walletBalance)}</p>
            </div>
            <Button variant="outline" onClick={onEditProfile}>
              Edit Profile
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <h4 className="text-sm font-medium">Total Spending</h4>
              <p className="text-xl font-bold">${formatCurrency(user.totalSpent)}</p>
            </div>
            <Button variant="outline" onClick={onViewProfile}>
              View Profile
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium">Rank</h4>
              <div className="flex items-center">
                <Crown className="h-4 w-4 mr-1 text-yellow-500" />
                <p className="text-xl font-bold">#{user.rank}</p>
              </div>
            </div>
            <Badge variant="secondary">
              {user.tier}
            </Badge>
          </div>
        </CardContent>
      </Card>
      
      <Card className="glass-morphism border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Sparkles className="h-4 w-4 mr-2" />
            Boost Effects
          </CardTitle>
          <CardDescription>
            Active boosts and effects on your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          {user.profileBoosts && user.profileBoosts.length > 0 ? (
            user.profileBoosts.map((boost: ProfileBoost) => (
              <div key={boost.id} className="flex items-center justify-between p-3 rounded-md bg-black/20 border border-white/10">
                <div>
                  <h4 className="text-sm font-medium">{boost.name}</h4>
                  <p className="text-xs text-white/60">{boost.description}</p>
                </div>
                <Badge variant="outline">Level {boost.level}</Badge>
              </div>
            ))
          ) : (
            <p className="text-sm text-white/60">No active boosts.</p>
          )}
        </CardContent>
      </Card>
      
      <Card className="glass-morphism border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center">
            <DollarSign className="h-4 w-4 mr-2" />
            Spending Actions
          </CardTitle>
          <CardDescription>
            Quick actions to manage your spending.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button variant="outline">
            Deposit Funds
          </Button>
          <Button variant="outline">
            Withdraw Funds
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default OverviewTab;
