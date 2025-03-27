
import React, { useState, useEffect } from 'react';
import LeaderboardHeader from './LeaderboardHeader';
import LeaderboardFilters from './LeaderboardFilters';
import LeaderboardTable from './LeaderboardTable';
import LeaderboardFooter from './LeaderboardFooter';
import { mockLeaderboardData } from './LeaderboardData';
import { useToast } from '@/hooks/use-toast';
import { Crown, Coins } from 'lucide-react';

const RoyalCourt = () => {
  const [leaderboardData, setLeaderboardData] = useState(mockLeaderboardData);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const { toast } = useToast();
  
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
      setLeaderboardData(mockLeaderboardData);
      return;
    }
    
    const filteredData = mockLeaderboardData.filter(user => user.team === team);
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
  
  // Easter egg - random gold coin animations
  useEffect(() => {
    const interval = setInterval(() => {
      const shouldShowCoin = Math.random() > 0.8;
      
      if (shouldShowCoin) {
        const coin = document.createElement('div');
        coin.innerHTML = '<div class="flex items-center justify-center w-8 h-8 rounded-full bg-royal-gold/20"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-royal-gold"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg></div>';
        coin.className = 'fixed z-50 animate-float';
        coin.style.top = `${Math.random() * 70 + 10}vh`;
        coin.style.left = `${Math.random() * 70 + 15}vw`;
        coin.style.animationDuration = `${3 + Math.random() * 4}s`;
        coin.style.opacity = '0.7';
        
        document.body.appendChild(coin);
        
        setTimeout(() => {
          document.body.removeChild(coin);
        }, 5000);
      }
    }, 15000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="leaderboard" className="w-full py-20 px-6 throne-bg relative">
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
          
          <LeaderboardTable leaderboardData={leaderboardData} />
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
