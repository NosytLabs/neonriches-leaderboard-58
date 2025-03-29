
import React, { useEffect, useState } from 'react';
import { Shell } from '@/components/ui/shell';
import { HeadingText } from '@/components/ui/heading-text';
import { Banner } from '@/components/ui/banner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/auth';
import { Link } from 'react-router-dom';
import { ArrowRight, Crown, Trophy, Users, Heart } from 'lucide-react';
import RoyalDivider from '@/components/ui/decorations/RoyalDivider';
import { formatNumber, formatCurrency } from '@/lib/utils';
import { User } from '@/types/user';

const Index = () => {
  const { user, isLoading } = useAuth();
  const [totalSpent, setTotalSpent] = useState<number>(0);
  const [totalUsers, setTotalUsers] = useState<number>(0);
  const [topGiver, setTopGiver] = useState<User | null>(null);
  
  useEffect(() => {
    // Simulate fetching site statistics
    const fetchStats = async () => {
      // In a real app, this would be an API call
      setTimeout(() => {
        setTotalSpent(3456789);
        setTotalUsers(12345);
        
        // Mock top giver data
        const mockTopGiver: User = {
          id: "user-7891",
          username: "whale_supreme",
          email: "whale@example.com",
          rank: 1,
          tier: "whale",
          team: "blue",
          profileImage: "https://source.unsplash.com/random/?portrait&whale",
          amountSpent: 250000,
          spentAmount: 250000,
          spendStreak: 12,
          joinDate: new Date(Date.now() - 15000000000).toISOString(),
          joinedAt: new Date(Date.now() - 15000000000).toISOString(),
          walletBalance: 5000,
          displayName: "Royal Whale",
          totalSpent: 250000,
          socialLinks: [],
          cosmetics: {
            borders: ["gold", "animated"],
            colors: ["royal", "gold"],
            fonts: ["medieval"],
            emojis: ["crown", "money"],
            titles: ["Generous"],
            backgrounds: ["castle"],
            effects: ["sparkle"],
            badges: ["top-donor"],
            themes: ["royal"]
          },
          profileBoosts: [],
          createdAt: new Date(Date.now() - 15000000000).toISOString() // Ensure createdAt is not missing
        };
        
        setTopGiver(mockTopGiver);
      }, 1000);
    };
    
    fetchStats();
  }, []);

  return (
    <Shell>
      <div className="flex flex-col gap-8">
        <Banner 
          title="P2W.FUN" 
          subtitle="Where your wallet determines your worth" 
          callToAction={
            user ? (
              <Link to="/dashboard">
                <Button className="bg-royal-gold text-black hover:bg-royal-gold/90">
                  Your Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            ) : (
              <Link to="/signup">
                <Button className="bg-royal-gold text-black hover:bg-royal-gold/90">
                  Claim Your Rank
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            )
          }
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="glass-morphism border-white/10">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Trophy className="mr-2 h-5 w-5 text-royal-gold" />
                Total Spent
              </CardTitle>
              <CardDescription>Money paid to the kingdom</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold royal-gradient">{formatCurrency(totalSpent)}</p>
            </CardContent>
          </Card>
          
          <Card className="glass-morphism border-white/10">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-5 w-5 text-royal-gold" />
                Total Users
              </CardTitle>
              <CardDescription>Noble citizens in our kingdom</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold royal-gradient">{formatNumber(totalUsers)}</p>
            </CardContent>
          </Card>
          
          <Card className="glass-morphism border-white/10">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Heart className="mr-2 h-5 w-5 text-royal-gold" />
                Top Giver
              </CardTitle>
              <CardDescription>Most generous royal</CardDescription>
            </CardHeader>
            <CardContent>
              {topGiver ? (
                <div className="flex items-center space-x-2">
                  <div className="h-10 w-10 rounded-full overflow-hidden">
                    <img 
                      src={topGiver.profileImage} 
                      alt={topGiver.displayName || topGiver.username} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{topGiver.displayName || topGiver.username}</p>
                    <p className="text-sm text-white/70">{formatCurrency(topGiver.amountSpent)}</p>
                  </div>
                </div>
              ) : (
                <p className="text-white/50">Loading top giver...</p>
              )}
            </CardContent>
          </Card>
        </div>
        
        <RoyalDivider variant="center" />
        
        <div className="text-center max-w-3xl mx-auto">
          <HeadingText className="mb-4" size="xl">
            <Crown className="inline-block mr-2 h-6 w-6 text-royal-gold" />
            The Ultimate Pay-to-Win Experience
          </HeadingText>
          <p className="text-white/70 mb-6">
            Welcome to P2W.FUN, where your rank is determined solely by how much you spend. No skill required, just a willingness to part with your money for digital prestige. Join a team, customize your profile, and climb the ranks to become digital royalty.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/how-it-works">
              <Button variant="outline" className="glass-morphism border-white/10 hover:bg-white/10">
                How It Works
              </Button>
            </Link>
            <Link to="/leaderboard">
              <Button className="bg-royal-gold text-black hover:bg-royal-gold/90">
                View Leaderboard
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Shell>
  );
};

export default Index;
