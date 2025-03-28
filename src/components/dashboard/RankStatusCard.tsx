
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, TrendingUp, Crown } from 'lucide-react';
import { UserProfile } from '@/contexts/AuthContext';
import ProfileBoostedContent from '@/components/ui/ProfileBoostedContent';

interface RankStatusCardProps {
  user: UserProfile;
}

const RankStatusCard: React.FC<RankStatusCardProps> = ({ user }) => {
  return (
    <Card className="glass-morphism border-purple-400/20">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-royal flex items-center">
          <Trophy className="mr-2 h-5 w-5 text-purple-400" />
          Your Royal Ranking
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="glass-morphism border-white/10 p-4 rounded-lg">
            <div className="text-sm text-white/70 mb-1">Current Rank</div>
            <ProfileBoostedContent user={user} type="text">
              <div className="text-2xl font-bold flex items-center">
                <Crown className="h-5 w-5 text-purple-400 mr-2" />
                #{user?.rank || '??'}
              </div>
            </ProfileBoostedContent>
          </div>
          
          <div className="glass-morphism border-white/10 p-4 rounded-lg">
            <div className="text-sm text-white/70 mb-1">Total Spent</div>
            <div className="text-2xl font-bold">
              ${user?.amountSpent?.toFixed(2) || '0.00'}
            </div>
          </div>
          
          <div className="glass-morphism border-white/10 p-4 rounded-lg">
            <div className="text-sm text-white/70 mb-1">Weekly Change</div>
            <div className="text-xl font-bold flex items-center">
              <TrendingUp className="h-5 w-5 text-green-400 mr-2" />
              +3 Ranks
            </div>
          </div>
        </div>
        
        <div className="mt-4 glass-morphism border-white/10 p-4 rounded-lg">
          <div className="mb-2 text-sm text-white/70">Path to Next Rank</div>
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-600 to-purple-400" 
              style={{ width: '65%' }}
            ></div>
          </div>
          <div className="mt-2 text-xs text-white/70 flex justify-between">
            <span>Current: ${user?.amountSpent?.toFixed(2) || '0.00'}</span>
            <span>Next Rank: ${((user?.amountSpent || 0) + 10).toFixed(2)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RankStatusCard;
