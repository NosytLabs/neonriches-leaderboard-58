
import React, { useState, useEffect, useRef } from 'react';
import LeaderboardHeader from './LeaderboardHeader';
import LeaderboardFilters from './LeaderboardFilters';
import LeaderboardTable from './LeaderboardTable';
import LeaderboardFooter from './LeaderboardFooter';
import { mockLeaderboardData } from './LeaderboardData';
import { useToast } from '@/hooks/use-toast';
import { Crown, Coins } from 'lucide-react';
import useFloatingCoins from '@/hooks/use-floating-coins';
import { UserProfile } from '@/types/user';

const RoyalCourt = () => {
  // Convert mock leaderboard data to UserProfile format
  const convertedLeaderboardData: UserProfile[] = mockLeaderboardData.map(user => ({
    id: user.id.toString(),
    username: user.username,
    email: `${user.username.toLowerCase()}@example.com`,
    profileImage: user.profileImage,
    amountSpent: user.amountSpent,
    spentAmount: user.amountSpent,
    walletBalance: 0,
    rank: user.rank,
    previousRank: user.previousRank || user.rank + 1, // Provide a default previousRank
    spendStreak: Math.floor(Math.random() * 10),
    tier: 'crab',
    team: user.team as any || null,
    gender: 'king',
    joinDate: new Date().toISOString(),
    joinedAt: new Date().toISOString(),
    cosmetics: {
      borders: [],
      colors: [],
      fonts: [],
      emojis: [],
      titles: [],
      backgrounds: [],
      effects: [],
      badges: [],
      themes: []
    },
    socialLinks: []
  }));
  
  const [leaderboardData, setLeaderboardData] = useState<UserProfile[]>(convertedLeaderboardData);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const { toast } = useToast();
  const containerRef = useRef<HTMLElement>(null);
  
  // Use our new hook for floating coins
  useFloatingCoins({
    containerRef
  });
  
  // Satirical welcome toast
  useEffect(() => {
    const timer = setTimeout(() => {
      toast({
        title: "Royal Decree",
        description: "Welcome to the Royal Court, where your worth is measured not by your character, but by your credit card limit!",
        duration: 5000,
      });
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [toast]);
  
  const handleSort = () => {
    const newDirection = sortDirection === 'desc' ? 'asc' : 'desc';
    setSortDirection(newDirection);
    
    const sortedData = [...leaderboardData].sort((a, b) => {
      return newDirection === 'desc' 
        ? b.amountSpent - a.amountSpent 
        : a.amountSpent - b.amountSpent;
    });
    
    setLeaderboardData(sortedData);
  };
  
  const handleFilter = (team: string | null) => {
    setActiveFilter(team);
    
    if (team === null) {
      setLeaderboardData(convertedLeaderboardData);
      return;
    }
    
    const filteredData = convertedLeaderboardData.filter(user => user.team === team);
    setLeaderboardData(filteredData);
    
    // Satirical toast based on team selection
    const teamMessages = {
      'red': "Ah, the Purple Dynasty! Where the wealthy flaunt their digital status with reckless abandon.",
      'green': "The Gold Dominion welcomes you! Remember, he who pays the most, shines the brightest.",
      'blue': "The Azure Order values loyalty... to spending money! Keep those contributions flowing!"
    };
    
    toast({
      title: "Royal Attention",
      description: teamMessages[team as keyof typeof teamMessages] || "Choose your allegiance wisely!",
      duration: 3000,
    });
  };
  
  return (
    <section ref={containerRef} id="leaderboard" className="w-full py-20 px-6 throne-bg relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-10 left-1/4 w-96 h-96 bg-royal-purple/10 rounded-full filter blur-[100px] animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-royal-gold/10 rounded-full filter blur-[80px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-royal-blue/10 rounded-full filter blur-[90px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="absolute -top-16 right-0 text-white/20 italic text-sm">
          "In the game of thrones, you pay or you fade."
        </div>
        
        <LeaderboardHeader />
        
        <div className="royal-card rounded-xl overflow-hidden mb-8 glass-morphism border-white/10">
          <LeaderboardFilters 
            activeFilter={activeFilter}
            sortDirection={sortDirection}
            onFilterChange={handleFilter}
            onSortChange={handleSort}
          />
          
          <LeaderboardTable users={leaderboardData} currentFilter={activeFilter} />
        </div>
        
        <LeaderboardFooter />
        
        <div className="mt-12 text-center glass-morphism border border-white/10 rounded-lg p-6 max-w-3xl mx-auto">
          <div className="flex justify-center mb-3">
            <div className="relative">
              <Crown size={24} className="text-royal-gold" />
              <div className="absolute -inset-3 bg-royal-gold/10 rounded-full blur-sm"></div>
            </div>
          </div>
          <h3 className="text-lg font-royal mb-2 royal-gradient">The Royal Investment Philosophy</h3>
          <p className="text-white/70 italic">
            "Remember, dear nobles, the more you spend, the more meaningful your completely meaningless rank becomes. 
            Your financial contributions directly validate your sense of self-worth in our delightfully absurd digital aristocracy."
          </p>
          <div className="flex items-center justify-center mt-4 text-xs text-white/50">
            <Coins size={12} className="text-royal-gold mr-1" />
            <span>Weekly top spender receives an entirely fictional crown!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoyalCourt;
