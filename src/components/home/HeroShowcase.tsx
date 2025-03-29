
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Crown, ArrowRight, Sparkles, Award, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { fetchTopSpender } from '@/services/leaderboardService';
import { formatDollarAmount } from '@/utils/formatters';
import { User } from '@/types/user';
import { Badge } from '@/components/ui/badge';

interface HeroShowcaseProps {
  className?: string;
}

const HeroShowcase: React.FC<HeroShowcaseProps> = ({ className = '' }) => {
  const [topSpender, setTopSpender] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getTopSpender = async () => {
      try {
        setIsLoading(true);
        const data = await fetchTopSpender();
        setTopSpender(data);
      } catch (error) {
        console.error("Failed to fetch top spender:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getTopSpender();
  }, []);

  if (isLoading) {
    return (
      <Card className={`glass-morphism border-royal-gold/20 ${className}`}>
        <CardContent className="p-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="h-16 w-16 rounded-full bg-royal-gold/20 animate-pulse"></div>
            <div className="h-6 w-48 bg-royal-gold/20 animate-pulse rounded"></div>
            <div className="h-4 w-32 bg-royal-gold/10 animate-pulse rounded"></div>
            <div className="h-10 w-40 bg-royal-gold/20 animate-pulse rounded"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!topSpender) {
    return (
      <Card className={`glass-morphism border-royal-gold/20 ${className}`}>
        <CardContent className="p-6">
          <div className="flex flex-col items-center space-y-4">
            <Crown className="h-16 w-16 text-royal-gold/50" />
            <h3 className="text-xl font-medium text-white/80">No Spenders Yet</h3>
            <p className="text-white/60 text-center">Be the first to claim the throne!</p>
            <Button variant="default" asChild>
              <Link to="/auth">
                <Sparkles className="mr-2 h-4 w-4" />
                Join Now
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getTierColor = (tier: string = 'bronze') => {
    const colors = {
      bronze: 'bg-amber-800/80 text-amber-200',
      silver: 'bg-slate-400/80 text-white',
      gold: 'bg-yellow-500/80 text-white',
      platinum: 'bg-indigo-400/80 text-white',
      royal: 'bg-royal-gold/80 text-black',
    };
    return colors[tier as keyof typeof colors] || colors.bronze;
  };

  return (
    <Card className={`glass-morphism border-royal-gold/20 overflow-hidden ${className}`}>
      <div className="absolute top-0 right-0 p-2">
        <Badge className="bg-royal-gold text-black font-medium">
          <Crown className="h-3 w-3 mr-1" /> Top Spender
        </Badge>
      </div>
      
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-br from-royal-gold/10 to-royal-purple/5 rounded-full blur-3xl -translate-y-20 scale-125"></div>
        <div className="absolute bottom-0 right-0 w-full h-40 bg-gradient-to-tl from-royal-navy/10 to-royal-crimson/5 rounded-full blur-3xl translate-y-20 scale-125"></div>
      </div>
      
      <CardContent className="p-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-royal-gold to-royal-gold-bright animate-spin-slow blur-sm scale-110"></div>
            <Avatar className="h-24 w-24 ring-4 ring-royal-gold/30 relative">
              <AvatarImage src={topSpender.profileImage} alt={topSpender.username} />
              <AvatarFallback className="bg-royal-navy text-royal-gold text-xl">
                {getInitials(topSpender.username)}
              </AvatarFallback>
            </Avatar>
            <div className="absolute -top-3 -right-2 bg-royal-gold text-black h-9 w-9 rounded-full flex items-center justify-center">
              <Crown className="h-5 w-5" />
            </div>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold">{topSpender.username}</h3>
            <p className="text-royal-gold font-medium text-xl">
              {formatDollarAmount(topSpender.totalSpent || 0)} spent
            </p>
            <Badge variant="outline" className={`${getTierColor(topSpender.tier)} mt-1`}>
              {topSpender.tier?.charAt(0).toUpperCase() + topSpender.tier?.slice(1) || 'Bronze'} Tier
            </Badge>
          </div>
          
          <div className="grid grid-cols-2 gap-3 w-full max-w-xs mt-2">
            <div className="glass-morphism border-white/10 p-2 rounded-lg flex flex-col items-center">
              <Award className="h-4 w-4 text-royal-gold mb-1" />
              <span className="text-xs text-white/70">Rank</span>
              <span className="font-semibold">#{topSpender.rank || 1}</span>
            </div>
            <div className="glass-morphism border-white/10 p-2 rounded-lg flex flex-col items-center">
              <Users className="h-4 w-4 text-royal-gold mb-1" />
              <span className="text-xs text-white/70">Team</span>
              <span className="font-semibold">{topSpender.team || 'None'}</span>
            </div>
          </div>
          
          <Button variant="outline" className="border-royal-gold text-royal-gold hover:bg-royal-gold/10 mt-2" asChild>
            <Link to={`/profile/${topSpender.username}`}>
              View Profile
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default HeroShowcase;
