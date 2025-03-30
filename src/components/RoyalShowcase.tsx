
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Crown, DollarSign, TrendingUp, Users } from 'lucide-react';
import RoyalTrophyModel from './3d/RoyalTrophyModel';
import { User } from '@/types/user';
import { formatCurrency } from '@/utils/formatters';

interface RoyalShowcaseProps {
  className?: string;
}

const RoyalShowcase: React.FC<RoyalShowcaseProps> = ({ className = '' }) => {
  // Mock top spender data
  const topSpender: User = {
    id: 'user-1',
    username: 'moneybags',
    email: 'money@example.com',
    rank: 1,
    joinedAt: new Date().toISOString(),
    displayName: 'Money Bags',
    gender: 'male',
    profileImage: 'https://api.dicebear.com/6.x/personas/svg?seed=moneybags',
    amountSpent: 5000,
    totalSpent: 5000,
    spentAmount: 5000,
    tier: 'royal',
    team: 'red',
    walletBalance: 10000,
    spendStreak: 30,
    followers: 150
  };

  return (
    <div className={`${className} max-w-4xl mx-auto`}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2 royal-gradient">The Royal Throne</h2>
        <p className="text-white/70">
          Our top spender sits on the throne of honor and glory
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <Card className="glass-morphism border-white/10 overflow-hidden">
            <CardContent className="pt-6 pb-4 px-6">
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                    <Crown className="h-7 w-7 text-yellow-400" />
                  </div>
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-yellow-400 mb-2">
                    <img
                      src={topSpender.profileImage}
                      alt={topSpender.displayName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-bold mt-2">{topSpender.displayName}</h3>
                <p className="text-white/60 text-sm">@{topSpender.username}</p>

                <div className="flex items-center mt-2">
                  <Badge variant="outline" className="bg-yellow-500/10 border-yellow-500/20 text-yellow-400">
                    Rank #{topSpender.rank}
                  </Badge>
                </div>

                <div className="grid grid-cols-3 gap-3 w-full mt-4">
                  <div className="glass-morphism border-white/10 p-3 rounded-lg flex flex-col items-center">
                    <DollarSign className="h-5 w-5 text-green-400" />
                    <div className="text-sm text-white/60">Total Spent</div>
                    <div className="font-bold">{formatCurrency(topSpender.totalSpent || 0)}</div>
                  </div>

                  <div className="glass-morphism border-white/10 p-3 rounded-lg flex flex-col items-center">
                    <TrendingUp className="h-5 w-5 text-blue-400" />
                    <div className="text-sm text-white/60">Streak</div>
                    <div className="font-bold">{topSpender.spendStreak || 0} days</div>
                  </div>

                  <div className="glass-morphism border-white/10 p-3 rounded-lg flex flex-col items-center">
                    <Users className="h-5 w-5 text-purple-400" />
                    <div className="text-sm text-white/60">Followers</div>
                    <div className="font-bold">{topSpender.followers || 0}</div>
                  </div>
                </div>

                <div className="mt-4 glass-morphism border-white/10 p-3 rounded-lg w-full">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-white/60">Member Since</div>
                      <div className="font-medium">
                        {new Date(topSpender.joinedAt).toLocaleDateString()}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-white/60">Team</div>
                      <div className="font-medium capitalize">
                        {topSpender.team || 'None'}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between w-full mt-4">
                  <Button variant="outline" className="glass-morphism border-white/10 hover:bg-white/10">
                    View Profile
                  </Button>
                  <Button className="bg-royal-gold text-black hover:bg-royal-gold/90">
                    Claim Throne
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full h-80">
            <RoyalTrophyModel
              rank={topSpender.rank}
              username={topSpender.username}
              rotationSpeed={0.01}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoyalShowcase;
