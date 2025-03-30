
import React from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/auth/AuthContext';
import { DollarSign, Crown, Trophy, TrendingUp } from 'lucide-react';
import { formatCurrency } from '@/utils/formatters';
import { useSound } from '@/hooks/sounds/use-sound';

const Index = () => {
  const { user, isAuthenticated } = useAuth();
  const { play } = useSound({ volume: 0.5 });
  
  const handleButtonHover = () => {
    play('hover');
  };
  
  const handleButtonClick = () => {
    play('click');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <header className="py-6 px-4 md:px-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Crown className="text-royal-gold h-8 w-8 mr-2" />
            <h1 className="text-2xl font-bold royal-gradient">SPEND THRONE</h1>
          </div>
          
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <div className="hidden md:block">
                <div className="text-sm text-gray-400">Balance</div>
                <div className="text-royal-gold font-semibold">
                  {formatCurrency(user?.walletBalance || 0)}
                </div>
              </div>
              <div className="hidden md:block">
                <div className="text-sm text-gray-400">Rank</div>
                <div className="text-white font-semibold">#{user?.rank || '???'}</div>
              </div>
              <Button 
                size="sm"
                onMouseEnter={handleButtonHover}
                onClick={handleButtonClick}
              >
                Dashboard
              </Button>
            </div>
          ) : (
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                size="sm"
                onMouseEnter={handleButtonHover}
                onClick={handleButtonClick}
              >
                Login
              </Button>
              <Button 
                variant="royalGold" 
                size="sm"
                onMouseEnter={handleButtonHover}
                onClick={handleButtonClick}
              >
                Register
              </Button>
            </div>
          )}
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            <span className="royal-gradient">Pay to Win.</span>
            <br />
            <span className="text-white"> Literally.</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-300">
            A persistent, ranked leaderboard where your position is determined solely by how much money you spend.
            $1 spent = 1 rank point. Forever.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="glass-morphism p-8 rounded-xl">
              <div className="mb-4 flex justify-center">
                <DollarSign className="h-10 w-10 text-royal-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3">Spend to Ascend</h3>
              <p className="text-gray-400">
                Your rank on the leaderboard is directly tied to how much you spend. More money = higher rank.
              </p>
            </div>
            
            <div className="glass-morphism p-8 rounded-xl">
              <div className="mb-4 flex justify-center">
                <Trophy className="h-10 w-10 text-royal-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3">Eternal Glory</h3>
              <p className="text-gray-400">
                The leaderboard never resets. Your contributions are permanent, cementing your legacy.
              </p>
            </div>
            
            <div className="glass-morphism p-8 rounded-xl">
              <div className="mb-4 flex justify-center">
                <TrendingUp className="h-10 w-10 text-royal-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3">Real-Time Rankings</h3>
              <p className="text-gray-400">
                Watch as participants battle for position, climbing the ladder through sheer financial might.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <Button 
              variant="royalGold" 
              size="lg" 
              className="px-10 text-lg"
              onMouseEnter={handleButtonHover}
              onClick={handleButtonClick}
            >
              Claim Your Throne
            </Button>
            <p className="mt-4 text-gray-400 text-sm">
              A satirical social experiment exploring digital status and wealth dynamics.
            </p>
          </div>
        </div>
      </main>
      
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <p>SPEND THRONE — A satirical take on pay-to-win mechanics and digital status.</p>
          <p className="mt-2">© {new Date().getFullYear()} SpendThrone.com</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
