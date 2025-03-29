
import React, { useEffect, useState } from 'react';
import { Shell } from '@/components/ui/shell';
import RoyalDivider from '@/components/ui/decorations/RoyalDivider';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/auth';
import { Link } from 'react-router-dom';
import { ArrowRight, Crown, Trophy, Users, Heart, Coins, Swords, Star, Gem } from 'lucide-react';
import { formatNumber, formatCurrency } from '@/lib/utils';
import { User } from '@/types/user';
import ThroneCoinScene from '@/components/animations/ThroneCoinScene';
import SpendThroneLogo from '@/components/brand/SpendThroneLogo';
import Favicon from '@/components/brand/Favicon';

const Index = () => {
  const { user, isLoading } = useAuth();
  const [totalSpent, setTotalSpent] = useState<number>(3456789);
  const [totalUsers, setTotalUsers] = useState<number>(12345);
  const [topGiver, setTopGiver] = useState<User | null>(null);
  
  useEffect(() => {
    // Simulate fetching site statistics
    const fetchStats = async () => {
      // In a real app, this would be an API call
      setTimeout(() => {
        setTotalSpent(3456789);
        setTotalUsers(12345);
        
        // Mock top giver data
        const mockTopGiver = {
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
        } as User;
        
        setTopGiver(mockTopGiver);
      }, 1000);
    };
    
    fetchStats();
    
    // Add floating coin effect on scroll
    const handleScroll = () => {
      // Only run this on the homepage
      if (window.location.pathname !== "/") return;
      
      if (Math.random() > 0.92) { // Occasionally spawn coins
        createFloatingCoin();
      }
    };
    
    // Create a floating coin element
    const createFloatingCoin = () => {
      const coin = document.createElement('div');
      
      // Determine coin value and color class
      const value = Math.random();
      let valueClass = 'coin-value-1';
      if (value > 0.95) valueClass = 'coin-value-100';
      else if (value > 0.85) valueClass = 'coin-value-50';
      else if (value > 0.7) valueClass = 'coin-value-10';
      else if (value > 0.4) valueClass = 'coin-value-5';
      
      coin.className = `floating-coin ${valueClass}`;
      
      // Set random position and rotation
      const xPos = Math.random() * window.innerWidth;
      coin.style.left = `${xPos}px`;
      coin.style.bottom = '0';
      coin.style.setProperty('--rotation', `${Math.random() * 720 - 360}deg`);
      
      // Add to DOM and remove after animation completes
      document.body.appendChild(coin);
      setTimeout(() => {
        if (document.body.contains(coin)) {
          document.body.removeChild(coin);
        }
      }, 3000);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Shell>
      <Favicon />
      <div className="flex flex-col gap-8">
        {/* Hero section */}
        <div className="relative w-full bg-gradient-to-b from-bg-dark-lighter to-bg-dark rounded-lg overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <ThroneCoinScene className="w-full h-full" />
          </div>
          
          <div className="relative z-10 flex flex-col items-center py-16 px-6 text-center">
            <SpendThroneLogo className="w-full max-w-2xl mb-6" />
            
            <h1 className="sr-only">SpendThrone</h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl">
              Where thy wealth determines thy worth. Pay thy way to glory in this satirical kingdom of digital excess.
            </p>
            
            {user ? (
              <Link to="/dashboard">
                <Button className="bg-royal-gold text-black hover:bg-royal-gold/90 royal-button-enhanced">
                  Your Royal Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            ) : (
              <Link to="/signup">
                <Button className="bg-royal-gold text-black hover:bg-royal-gold/90 royal-button-enhanced">
                  Claim Thy Royal Rank
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>
        
        {/* Stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="glass-morphism border-royal-gold/30 animate-royal-entrance">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Trophy className="mr-2 h-5 w-5 text-royal-gold" />
                Kingdom Tribute
              </CardTitle>
              <CardDescription>Gold paid to the royal coffers</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold royal-gradient">{formatCurrency(totalSpent)}</p>
            </CardContent>
          </Card>
          
          <Card className="glass-morphism border-royal-gold/30 animate-royal-entrance animation-delay-100">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-5 w-5 text-royal-gold" />
                Royal Subjects
              </CardTitle>
              <CardDescription>Noble citizens in our realm</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold royal-gradient">{formatNumber(totalUsers)}</p>
            </CardContent>
          </Card>
          
          <Card className="glass-morphism border-royal-gold/30 animate-royal-entrance animation-delay-200">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Heart className="mr-2 h-5 w-5 text-royal-gold" />
                Most Generous Noble
              </CardTitle>
              <CardDescription>The realm's most lavish spender</CardDescription>
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
                    <p className="font-medium royal-gradient">{topGiver.displayName || topGiver.username}</p>
                    <p className="text-sm text-white/70">{formatCurrency(topGiver.amountSpent)}</p>
                  </div>
                </div>
              ) : (
                <p className="text-white/50">Loading top giver...</p>
              )}
            </CardContent>
          </Card>
        </div>
        
        <RoyalDivider variant="double" />
        
        {/* Features section */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medieval royal-gradient mb-4">
            The Ultimate Pay-to-Win Experience
          </h2>
          <p className="text-white/80 mb-8">
            Welcome to SpendThrone, where your rank is determined solely by how much you spend. 
            No skill required, just a willingness to part with your gold for digital prestige. 
            Join a royal house, customize your profile, and climb the ranks to become digital royalty.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Link to="/how-it-works">
              <Button variant="outline" className="glass-morphism border-white/10 hover:bg-white/10">
                Royal Decrees
              </Button>
            </Link>
            <Link to="/leaderboard">
              <Button className="bg-royal-gold text-black hover:bg-royal-gold/90 royal-button-enhanced">
                View The Royal Court
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card className="glass-morphism border-white/10 hover:border-royal-gold/30 transition-all animate-royal-entrance">
            <CardHeader>
              <Coins className="h-12 w-12 text-royal-gold mb-2" />
              <CardTitle>Pay Thy Way to Glory</CardTitle>
              <CardDescription>
                Thy spending is thy virtue in this realm. Every dollar spent raises thy standing.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-white/70 mb-4">
                The more thou spendeth, the higher thy rank. No skill, talent, or merit required—only the contents of thy wallet determine thy worth.
              </p>
              <Link to="/leaderboard">
                <Button variant="outline" size="sm" className="w-full">
                  View Rankings
                </Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card className="glass-morphism border-white/10 hover:border-royal-gold/30 transition-all animate-royal-entrance animation-delay-100">
            <CardHeader>
              <Swords className="h-12 w-12 text-royal-gold mb-2" />
              <CardTitle>Join a Royal House</CardTitle>
              <CardDescription>
                Pledge thy allegiance to a noble house and compete for collective glory.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-white/70 mb-4">
                Choose between the crimson Dragons, emerald Vipers, or sapphire Phoenixes. Each gold piece spent contributes to thy house's standing.
              </p>
              <Link to="/teams">
                <Button variant="outline" size="sm" className="w-full">
                  Choose Thy House
                </Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card className="glass-morphism border-white/10 hover:border-royal-gold/30 transition-all animate-royal-entrance animation-delay-200">
            <CardHeader>
              <Star className="h-12 w-12 text-royal-gold mb-2" />
              <CardTitle>Royal Mockery</CardTitle>
              <CardDescription>
                Pay to shame thy rivals in the royal court of mockery.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-white/70 mb-4">
                Deploy tomatoes, eggs, or stocks against thy enemies. A higher payment means a more devastating mockery effect.
              </p>
              <Link to="/mockery">
                <Button variant="outline" size="sm" className="w-full">
                  Enter the Court
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
        
        {/* CTA section */}
        <div className="mt-12 mb-8">
          <div className="bg-gradient-to-r from-royal-crimson-dark to-royal-purple-dark rounded-lg p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNmMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNnptNy41LTZjMS45MzMgMCAzLjUgMS41NjcgMy41IDMuNXMtMS41NjcgMy41LTMuNSAzLjVjLTEuOTMzIDAtMy41LTEuNTY3LTMuNS0zLjVzMS41NjctMy41IDMuNS0zLjV6IiBzdHJva2U9IiNEMUQxRDEiIHN0cm9rZS13aWR0aD0iMS41Ii8+PC9nPjwvc3ZnPg==')] opacity-5"></div>
            
            <div className="relative z-10">
              <Gem className="h-16 w-16 mx-auto text-royal-gold mb-4 animate-crown-glow" />
              <h2 className="text-3xl font-medieval royal-gradient mb-4">
                Ready to Flaunt Thy Wealth?
              </h2>
              <p className="text-white/90 text-lg max-w-2xl mx-auto mb-6">
                Join the ranks of those who understand that in this digital kingdom, 
                thy worth is measured not by thy character but by thy expenditure.
              </p>
              
              <Link to="/signup">
                <Button size="lg" className="bg-royal-gold text-black hover:bg-royal-gold/90 royal-button-enhanced">
                  Begin Thy Royal Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <p className="text-white/50 text-sm mt-4">
                *All transactions are purely satirical and contribute to absolutely nothing of real-world value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
};

export default Index;
