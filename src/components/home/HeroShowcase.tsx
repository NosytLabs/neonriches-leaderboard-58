
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, Crown, DollarSign, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { fetchTopSpender } from '@/services/leaderboardService';
import { formatDollarAmount } from '@/utils/formatters';
import { User } from '@/types/user';

const HeroShowcase: React.FC = () => {
  const [topSpender, setTopSpender] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTopSpender = async () => {
      try {
        const data = await fetchTopSpender();
        setTopSpender(data);
      } catch (error) {
        console.error('Error fetching top spender:', error);
      } finally {
        setLoading(false);
      }
    };

    getTopSpender();
  }, []);

  if (loading) {
    return (
      <Card className="glass-morphism border-royal-gold/20 overflow-hidden">
        <CardContent className="p-0">
          <div className="p-6 space-y-4">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-10 w-32 mt-4" />
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!topSpender) {
    return (
      <Card className="glass-morphism border-royal-gold/20">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Crown className="h-5 w-5 text-royal-gold mr-2" />
            Top Spender Throne
          </h3>
          <p className="text-white/70 mb-4">No data available at the moment.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="glass-morphism border-royal-gold/20 overflow-hidden">
      <CardContent className="p-0">
        <div className="bg-gradient-to-r from-royal-gold/20 to-royal-purple/20 p-6 relative">
          <Badge className="absolute top-4 right-4 bg-royal-gold text-black">
            #{topSpender.rank}
          </Badge>
          
          <h3 className="text-xl font-bold mb-2 flex items-center">
            <Crown className="h-5 w-5 text-royal-gold mr-2" />
            Top Spender Throne
          </h3>
          
          <div className="flex items-center space-x-4 mb-4">
            <div className="relative">
              <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-royal-gold">
                <img 
                  src={topSpender.profileImage || 'https://randomuser.me/api/portraits/men/1.jpg'} 
                  alt={topSpender.displayName || topSpender.username} 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-royal-gold rounded-full p-1">
                <DollarSign className="h-3 w-3 text-black" />
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg">{topSpender.displayName || topSpender.username}</h4>
              <p className="text-white/70 text-sm flex items-center">
                <Sparkles className="h-3 w-3 mr-1 text-royal-gold" />
                <span className="text-royal-gold font-semibold">
                  {formatDollarAmount(topSpender.amountSpent)}
                </span>
                <span className="ml-1">spent</span>
              </p>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="text-white/70">Team</span>
              <Badge 
                className={`${
                  topSpender.team === 'red' ? 'bg-red-500' : 
                  topSpender.team === 'green' ? 'bg-green-500' : 
                  'bg-blue-500'
                }`}
              >
                {topSpender.team?.charAt(0).toUpperCase() + topSpender.team?.slice(1)}
              </Badge>
            </div>
            
            <div className="flex justify-between items-center text-sm">
              <span className="text-white/70">Tier</span>
              <Badge className="bg-royal-gold text-black">
                {topSpender.tier?.charAt(0).toUpperCase() + topSpender.tier?.slice(1)}
              </Badge>
            </div>
            
            {topSpender.spendStreak && topSpender.spendStreak > 0 && (
              <div className="flex justify-between items-center text-sm">
                <span className="text-white/70">Spend Streak</span>
                <span className="text-royal-gold">{topSpender.spendStreak} days</span>
              </div>
            )}
          </div>
          
          <Button 
            variant="link" 
            className="text-royal-gold p-0 mt-4 group"
            asChild
          >
            <Link to={`/profile/${topSpender.username}`}>
              <span>View Royal Profile</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
        
        <div className="p-4 bg-black/30">
          <div className="flex items-center text-sm text-white/60">
            <Award className="h-4 w-4 mr-2 text-royal-gold" />
            <span>Want to claim this throne? Simply outspend the current ruler!</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HeroShowcase;
