
import React from 'react';
import { UserProfile } from '@/types/user';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Eye, Users, Clock, TrendingUp, LineChart } from 'lucide-react';

interface ProfileStatsProps {
  user: UserProfile;
}

const ProfileStats: React.FC<ProfileStatsProps> = ({ user }) => {
  return (
    <div className="space-y-6 animate-royal-entrance">
      <Card className="glass-morphism border-white/10">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center">
            <BarChart className="mr-2 h-5 w-5 text-royal-gold" />
            Profile Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="glass-morphism p-4 rounded-lg border border-white/10">
              <div className="flex items-center space-x-2">
                <Eye className="h-4 w-4 text-royal-gold" />
                <span className="text-sm font-medium">Profile Views</span>
              </div>
              <div className="mt-2 text-2xl font-bold">
                {user.profileViews?.toLocaleString() || '0'}
              </div>
            </div>
            
            <div className="glass-morphism p-4 rounded-lg border border-white/10">
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-royal-gold" />
                <span className="text-sm font-medium">Followers</span>
              </div>
              <div className="mt-2 text-2xl font-bold">
                {user.followers?.toLocaleString() || '0'}
              </div>
            </div>
            
            <div className="glass-morphism p-4 rounded-lg border border-white/10">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-royal-gold" />
                <span className="text-sm font-medium">Rank</span>
              </div>
              <div className="mt-2 text-2xl font-bold">
                #{user.rank.toLocaleString()}
              </div>
            </div>
            
            <div className="glass-morphism p-4 rounded-lg border border-white/10">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-royal-gold" />
                <span className="text-sm font-medium">Days Active</span>
              </div>
              <div className="mt-2 text-2xl font-bold">
                {Math.floor((Date.now() - new Date(user.joinedAt).getTime()) / (1000 * 60 * 60 * 24))}
              </div>
            </div>
          </div>
          
          <div className="mt-6 glass-morphism p-4 rounded-lg border border-white/10">
            <p className="text-sm text-white/70">
              Your royal profile has been viewed {user.profileViews || 0} times. 
              Keep enhancing your profile to attract more attention and rise through the ranks.
            </p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="glass-morphism border-white/10">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center">
            <LineChart className="mr-2 h-5 w-5 text-royal-gold" />
            Engagement Over Time
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-48 flex items-center justify-center glass-morphism border border-white/10 rounded-lg">
            <p className="text-white/50">Detailed analytics coming soon...</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileStats;
