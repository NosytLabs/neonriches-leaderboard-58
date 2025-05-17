
import React from 'react';
import { Crown, DollarSign, Trophy } from 'lucide-react';
import Leaderboard from '@/components/Leaderboard';
import RoyalWishingWell from '@/components/wishingwell/RoyalWishingWell';
import RoyalCard from '@/components/ui/royal-card';
import useAuth from '@/hooks/useAuth';

const Home: React.FC = () => {
  const { user, loading } = useAuth();
  
  return (
    <div className="min-h-screen bg-black">
      <header className="py-10 px-4 bg-gradient-to-b from-black to-transparent relative">
        <div className="container mx-auto text-center">
          <Crown className="h-12 w-12 text-royal-gold mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold royal-gradient mb-4">
            SpendThrone
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Where money is king, and your worth is measured by your wallet.
            <span className="block mt-2 italic text-white/60">
              The only leaderboard where spending more brings you actual glory.
            </span>
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center p-3 px-6 bg-black/30 rounded-lg border border-white/10">
              <Trophy className="h-5 w-5 mr-3 text-royal-gold" />
              <span>Rise through the ranks with every dollar spent</span>
            </div>
            <div className="flex items-center p-3 px-6 bg-black/30 rounded-lg border border-white/10">
              <DollarSign className="h-5 w-5 mr-3 text-royal-gold" />
              <span>No achievements required, just pure spending power</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="lg:col-span-2">
            <Leaderboard />
          </div>
          
          <div className="space-y-6">
            <RoyalWishingWell 
              currentPool={15750}
              recentWishes={[
                { username: 'KingSpender', amount: 500, result: 'Rank boost', timestamp: '2023-05-01' },
                { username: 'MoneyThrower', amount: 250, result: 'VIP access', timestamp: '2023-05-02' },
                { username: 'WealthFlexer', amount: 100, result: 'Royal badge', timestamp: '2023-05-03' }
              ]}
            />
            
            <RoyalCard 
              variant="gold"
              title="Join the Royal Court"
              description="Spend more to earn a coveted position in the Royal Court"
            >
              <div className="text-center">
                <p className="mb-4 text-white/80">
                  The top 2 spenders secure positions in our exclusive Royal Court, receiving special perks and recognition.
                </p>
                <div className="font-bold text-2xl text-royal-gold">Top Spending Needed: $25,000</div>
              </div>
            </RoyalCard>
          </div>
        </div>
      </main>
      
      <footer className="bg-black/50 border-t border-white/10 py-6">
        <div className="container mx-auto px-4 text-center text-white/60 text-sm">
          <p>SpendThrone - Where your wallet defines your worth</p>
          <p className="mt-2">A satirical social platform exploring wealth dynamics through gamification.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
