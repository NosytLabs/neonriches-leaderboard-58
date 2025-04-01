
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { UserProfile } from '@/types/user-consolidated';
import { TrendingUp, DollarSign, Trophy, Crown, BarChart, Users } from 'lucide-react';
import ProfileBoostedContent from '@/components/ui/ProfileBoostedContent';
import { getTeamBgColorClass, getTeamTextColorClass } from '@/lib/colors';
import { safeToLocaleString } from '@/utils/safeToString';
import { formatNumber } from '@/utils/formatters';

interface DashboardStatsOverviewProps {
  user: UserProfile;
}

const DashboardStatsOverview: React.FC<DashboardStatsOverviewProps> = ({ user }) => {
  // Create a compatible user object for ProfileBoostedContent
  const compatibleUser: UserProfile = {
    ...user,
    id: typeof user.id === 'number' ? String(user.id) : user.id,
    team: user.team || null
  };
  
  // Helper function for safe string conversion
  const safeString = (value: any): string => {
    if (value === null || value === undefined) return '';
    return String(value);
  };
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Spending Stat */}
      <Card className="glass-morphism border-white/10 overflow-hidden">
        <CardContent className="p-5">
          <div className="flex items-center justify-between">
            <div className="rounded-full p-2 bg-royal-gold/10">
              <DollarSign className="h-5 w-5 text-royal-gold" />
            </div>
            <div>
              <p className="text-sm text-white/70">Total Spent</p>
              <ProfileBoostedContent user={compatibleUser} type="text">
                <p className="text-2xl font-bold">${safeToLocaleString(user.amountSpent || user.totalSpent || 0)}</p>
              </ProfileBoostedContent>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Rank Stat */}
      <Card className="glass-morphism border-white/10 overflow-hidden">
        <CardContent className="p-5">
          <div className="flex items-center justify-between">
            <div className="rounded-full p-2 bg-royal-purple/10">
              <Trophy className="h-5 w-5 text-royal-purple" />
            </div>
            <div>
              <p className="text-sm text-white/70">Current Rank</p>
              <ProfileBoostedContent user={compatibleUser} type="text">
                <p className="text-2xl font-bold">#{safeString(user.rank || 'N/A')}</p>
              </ProfileBoostedContent>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Team Stat */}
      <Card className="glass-morphism border-white/10 overflow-hidden">
        <CardContent className="p-5">
          <div className="flex items-center justify-between">
            <div className={`rounded-full p-2 ${
              user.team ? getTeamBgColorClass(user.team.toString()) + '/10' : 'bg-white/10'
            }`}>
              <Users className={`h-5 w-5 ${
                user.team ? getTeamTextColorClass(user.team.toString()) : 'text-white'
              }`} />
            </div>
            <div>
              <p className="text-sm text-white/70">Team</p>
              <p className={`text-2xl font-bold capitalize ${
                user.team ? getTeamTextColorClass(user.team.toString()) : 'text-white'
              }`}>
                {user.team || 'None'}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Analytics Stat */}
      <Card className="glass-morphism border-white/10 overflow-hidden">
        <CardContent className="p-5">
          <div className="flex items-center justify-between">
            <div className="rounded-full p-2 bg-royal-crimson/10">
              <BarChart className="h-5 w-5 text-royal-crimson" />
            </div>
            <div>
              <p className="text-sm text-white/70">Profile Views</p>
              <p className="text-2xl font-bold">{formatNumber(user.profileViews || 0)}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardStatsOverview;
