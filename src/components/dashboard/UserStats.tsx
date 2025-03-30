
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, Calendar, ChevronUp, DollarSign, Trophy, Users } from 'lucide-react';
import { UserProfile } from '@/types/user';
import { formatCurrency } from '@/utils/formatters';
import { getRelativeTimeString } from '@/utils/dateUtils';

interface UserStatsProps {
  user: UserProfile;
  className?: string;
}

const UserStats: React.FC<UserStatsProps> = ({ user, className }) => {
  const totalSpent = user.totalSpent || user.amountSpent || 0;
  const formatDateJoined = (date?: string) => {
    if (!date) return 'Unknown';
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };
  
  const getMembershipDuration = (date?: string) => {
    if (!date) return 'Unknown';
    const joinDate = new Date(date);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - joinDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 30) {
      return `${diffDays} days`;
    } else if (diffDays < 365) {
      const months = Math.floor(diffDays / 30);
      return `${months} month${months > 1 ? 's' : ''}`;
    } else {
      const years = Math.floor(diffDays / 365);
      const remainingMonths = Math.floor((diffDays % 365) / 30);
      return `${years} year${years > 1 ? 's' : ''}${remainingMonths > 0 ? `, ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}` : ''}`;
    }
  };

  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Activity className="mr-2 h-5 w-5 text-royal-gold" />
          Stats Overview
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col p-4 bg-black/20 rounded-lg">
            <div className="flex items-center gap-2 mb-1 text-royal-gold">
              <DollarSign className="h-5 w-5" />
              <span className="font-semibold">Total Spent</span>
            </div>
            <span className="text-2xl font-bold">{formatCurrency(totalSpent)}</span>
          </div>
          
          <div className="flex flex-col p-4 bg-black/20 rounded-lg">
            <div className="flex items-center gap-2 mb-1 text-royal-gold">
              <Trophy className="h-5 w-5" />
              <span className="font-semibold">Current Rank</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl font-bold">#{user.rank || 'N/A'}</span>
              {user.previousRank && user.rank && user.previousRank > user.rank && (
                <span className="text-green-500 flex items-center ml-2 text-sm">
                  <ChevronUp className="h-4 w-4" />
                  {user.previousRank - user.rank}
                </span>
              )}
            </div>
          </div>
          
          <div className="flex flex-col p-4 bg-black/20 rounded-lg">
            <div className="flex items-center gap-2 mb-1 text-royal-gold">
              <Calendar className="h-5 w-5" />
              <span className="font-semibold">Member Since</span>
            </div>
            <span className="text-md font-medium">{formatDateJoined(user.joinDate)}</span>
            <span className="text-xs text-white/60 mt-1">
              {getMembershipDuration(user.joinDate)}
            </span>
          </div>
          
          <div className="flex flex-col p-4 bg-black/20 rounded-lg">
            <div className="flex items-center gap-2 mb-1 text-royal-gold">
              <Users className="h-5 w-5" />
              <span className="font-semibold">Social</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="block text-lg font-semibold">{user.followers || 0}</span>
                <span className="text-xs text-white/60">Followers</span>
              </div>
              <div>
                <span className="block text-lg font-semibold">{user.following || 0}</span>
                <span className="text-xs text-white/60">Following</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserStats;
