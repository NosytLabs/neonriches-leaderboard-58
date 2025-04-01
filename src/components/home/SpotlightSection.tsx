
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Crown, TrendingUp, Users, Zap } from 'lucide-react';
import { formatCurrency } from '@/utils/formatters';
import SpotlightProfile from './SpotlightProfile';
import { UserProfile } from '@/types/user-consolidated';
import { getMarketingBenefitsByTier } from '@/data/tierData';

interface SpotlightSectionProps {
  topSpenders?: UserProfile[];
  totalUsers?: number;
  totalSpending?: number;
  onViewLeaderboard?: () => void;
}

const SpotlightSection: React.FC<SpotlightSectionProps> = ({
  topSpenders = [],
  totalUsers = 0,
  totalSpending = 0,
  onViewLeaderboard
}) => {
  const [activeTab, setActiveTab] = useState<string>('spending');
  const [featuredUser, setFeaturedUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    if (topSpenders && topSpenders.length > 0) {
      setFeaturedUser(topSpenders[0]);
    }
  }, [topSpenders]);

  // Fix: Create a user object instead of passing a number
  const handleProfileSelect = (index: number) => {
    if (topSpenders && topSpenders[index]) {
      setFeaturedUser(topSpenders[index]);
    }
  };

  const statsCards = [
    {
      id: 'total-users',
      icon: <Users className="h-5 w-5 text-blue-400" />,
      value: totalUsers.toLocaleString(),
      label: 'Royal Citizens'
    },
    {
      id: 'total-spending',
      icon: <Crown className="h-5 w-5 text-royal-gold" />,
      value: formatCurrency(totalSpending),
      label: 'Total Spent'
    },
    {
      id: 'trend',
      icon: <TrendingUp className="h-5 w-5 text-green-400" />,
      value: '24%',
      label: 'Weekly Growth'
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Royal Recognition</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            The elite citizens who contribute to the prosperity of our kingdom through their generous spending.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-6">
            {featuredUser && (
              <SpotlightProfile user={featuredUser} isTopSpender={topSpenders[0]?.id === featuredUser.id} />
            )}
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {statsCards.map((card) => (
                <div 
                  key={card.id}
                  className="glass-morphism p-4 rounded-lg border border-white/10 flex items-center space-x-3"
                >
                  <div className="flex-shrink-0">
                    {card.icon}
                  </div>
                  <div>
                    <div className="text-xl font-bold">{card.value}</div>
                    <div className="text-sm text-white/60">{card.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="glass-morphism border border-white/10 rounded-lg overflow-hidden">
              <div className="p-4 border-b border-white/10 flex justify-between items-center">
                <h3 className="font-bold">Top Spenders</h3>
                <Badge variant="outline" className="bg-black/20">
                  <Zap className="h-3 w-3 mr-1 text-yellow-400" />
                  Royal Status
                </Badge>
              </div>
              
              <div className="divide-y divide-white/10">
                {topSpenders.slice(0, 5).map((user, index) => (
                  <div 
                    key={user.id}
                    className={`p-4 flex items-center space-x-3 hover:bg-white/5 cursor-pointer transition-colors ${
                      featuredUser?.id === user.id ? 'bg-white/10' : ''
                    }`}
                    onClick={() => handleProfileSelect(index)}
                  >
                    <div className="font-bold text-lg w-6 text-center text-white/60">{index + 1}</div>
                    <div className="flex-shrink-0 relative">
                      <img 
                        src={user.profileImage || '/placeholder-avatar.jpg'} 
                        alt={user.username}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      {index === 0 && (
                        <div className="absolute -top-1 -right-1 bg-yellow-500 text-black rounded-full w-5 h-5 flex items-center justify-center text-xs">
                          <Crown className="h-3 w-3" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold truncate">{user.displayName || user.username}</div>
                      <div className="text-sm text-white/60 flex items-center">
                        <span className="truncate mr-1.5">{formatCurrency(user.totalSpent || user.amountSpent || 0)}</span>
                        <Badge variant="outline" className="text-[10px] h-4 px-1 bg-black/20">
                          {user.tier}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-4 border-t border-white/10">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={onViewLeaderboard}
                >
                  View Full Leaderboard
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpotlightSection;
