
import React from 'react';
import { Trophy, CrownIcon, TrendingUp, Users, DollarSign } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { UserProfile } from '@/types/user';
import { formatCurrency } from '@/utils/formatters';

interface TopSpenderShowcaseProps {
  user: UserProfile;
  className?: string;
}

const TopSpenderShowcase: React.FC<TopSpenderShowcaseProps> = ({ user, className = '' }) => {
  // Calculate custom values that might not exist on user
  const spendStreak = user.spendStreak || 0;
  const followers = user.followers || 0;

  return (
    <div className={`max-w-lg mx-auto ${className}`}>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center justify-center">
          <Trophy className="h-6 w-6 mr-2 text-yellow-400" />
          Top Spender Showcase
        </h2>
        <p className="text-white/70">
          The throne belongs to those who spend the most
        </p>
      </div>
      
      <Card className="glass-morphism border-white/10 overflow-hidden">
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-yellow-500/20 to-transparent" />
          
          <div className="pt-6 pb-4 px-6 relative z-10">
            <div className="flex justify-between items-start">
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <CrownIcon className="h-7 w-7 text-yellow-400" />
                  </div>
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-yellow-400 mb-2">
                    <img
                      src={user.profileImage || `https://api.dicebear.com/6.x/personas/svg?seed=${user.username}`}
                      alt={user.displayName || user.username}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold">{user.displayName || user.username}</h3>
                <p className="text-white/60 text-sm">@{user.username}</p>
                
                <div className="flex items-center mt-2">
                  <Badge variant="outline" className="bg-yellow-500/10 border-yellow-500/20 text-yellow-400">
                    Rank #{user.rank || 'N/A'}
                  </Badge>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="glass-morphism border-white/10 p-3 rounded-lg">
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 text-green-400 mr-2" />
                    <div>
                      <div className="text-sm text-white/60">Total Spent</div>
                      <div className="text-xl font-bold">{formatCurrency(user.totalSpent || 0)}</div>
                    </div>
                  </div>
                </div>
                
                <div className="glass-morphism border-white/10 p-3 rounded-lg">
                  <div className="flex items-center">
                    <TrendingUp className="h-5 w-5 text-blue-400 mr-2" />
                    <div>
                      <div className="text-sm text-white/60">Spending Streak</div>
                      <div className="text-xl font-bold">{spendStreak} days</div>
                    </div>
                  </div>
                </div>
                
                <div className="glass-morphism border-white/10 p-3 rounded-lg">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-purple-400 mr-2" />
                    <div>
                      <div className="text-sm text-white/60">Followers</div>
                      <div className="text-xl font-bold">{followers}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 glass-morphism border-white/10 p-4 rounded-lg">
              <h4 className="text-lg font-semibold mb-2">Royal Stats</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-white/60">Member Since</div>
                  <div className="font-medium">
                    {new Date(user.joinedDate || '').toLocaleDateString()}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-white/60">Team</div>
                  <div className="font-medium capitalize">
                    {user.team || 'None'}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-white/60">Tier</div>
                  <div className="font-medium capitalize">
                    {user.tier || 'Basic'}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-white/60">Wallet Balance</div>
                  <div className="font-medium">
                    {formatCurrency(user.walletBalance || 0)}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between mt-6">
              <Button variant="outline" className="glass-morphism border-white/10 hover:bg-white/10">
                View Profile
              </Button>
              <Button className="bg-royal-gold text-black hover:bg-royal-gold/90">
                Boost Profile
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TopSpenderShowcase;
