
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/auth';
import SpendThroneLogo from '@/components/brand/SpendThroneLogo';

interface RoyalHeroProps {
  className?: string;
}

const RoyalHero: React.FC<RoyalHeroProps> = ({ className }) => {
  const { isAuthenticated } = useAuth();
  
  return (
    <div className={cn(
      'relative py-20 overflow-hidden',
      className
    )}>
      {/* Background gradient and texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 opacity-80" />
      
      {/* Animated coin effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <div 
            key={i}
            className="absolute animate-floating-coin"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              opacity: 0.3 + Math.random() * 0.4,
            }}
          >
            <Icon 
              name="coin" 
              size={Math.random() > 0.5 ? 'md' : 'lg'} 
            />
          </div>
        ))}
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-12">
        <div className="flex flex-col items-center text-center mb-8">
          {/* Logo with animation */}
          <div className="mb-6 animate-royal-entrance">
            <SpendThroneLogo variant="full" className="h-24 md:h-32" animated />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight animate-royal-entrance animation-delay-100">
            <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 text-transparent bg-clip-text">
              SpendThrone
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl animate-royal-entrance animation-delay-200">
            The ultimate pay-to-win social experience where your status is determined by how much you spend!
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-royal-entrance animation-delay-300">
            {!isAuthenticated ? (
              <>
                <Link to="/register">
                  <Button 
                    variant="royalGold" 
                    size="lg" 
                    className="relative group"
                  >
                    <span className="absolute inset-0 w-full h-full rounded-md blur opacity-30 bg-gradient-to-r from-amber-400 to-yellow-300 group-hover:opacity-50 transition duration-300"></span>
                    <span className="relative flex items-center">
                      <Icon name="crown" size="sm" className="mr-2" />
                      Claim Your Throne
                    </span>
                  </Button>
                </Link>
                <Link to="/leaderboard">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-royal-gold/50 text-royal-gold hover:bg-royal-gold/10 hover:text-royal-gold/90"
                  >
                    <Icon name="trophy" size="sm" className="mr-2" />
                    View Leaderboard
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/deposit">
                  <Button 
                    variant="royalGold" 
                    size="lg" 
                    className="relative group"
                  >
                    <span className="absolute inset-0 w-full h-full rounded-md blur opacity-30 bg-gradient-to-r from-amber-400 to-yellow-300 group-hover:opacity-50 transition duration-300"></span>
                    <span className="relative flex items-center">
                      <Icon name="coin" size="sm" className="mr-2" />
                      Increase Your Power
                    </span>
                  </Button>
                </Link>
                <Link to="/leaderboard">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-royal-gold/50 text-royal-gold hover:bg-royal-gold/10 hover:text-royal-gold/90"
                  >
                    <Icon name="trophy" size="sm" className="mr-2" />
                    View Your Rank
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
        
        {/* Features section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10 animate-royal-entrance animation-delay-400">
            <div className="rounded-full w-12 h-12 flex items-center justify-center bg-gradient-to-br from-amber-400 to-yellow-600 mb-4">
              <Icon name="crown" size="md" />
            </div>
            <h3 className="text-xl font-bold mb-2">Pay To Win</h3>
            <p className="text-white/70">Your rank is determined solely by how much you spend. It's that simple.</p>
          </div>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10 animate-royal-entrance animation-delay-500">
            <div className="rounded-full w-12 h-12 flex items-center justify-center bg-gradient-to-br from-amber-400 to-yellow-600 mb-4">
              <Icon name="Users" size="md" />
            </div>
            <h3 className="text-xl font-bold mb-2">Join A Team</h3>
            <p className="text-white/70">Ally with Red, Green, or Blue teams and compete for glory and rewards.</p>
          </div>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10 animate-royal-entrance animation-delay-600">
            <div className="rounded-full w-12 h-12 flex items-center justify-center bg-gradient-to-br from-amber-400 to-yellow-600 mb-4">
              <Icon name="Sparkles" size="md" />
            </div>
            <h3 className="text-xl font-bold mb-2">Special Perks</h3>
            <p className="text-white/70">Unlock exclusive profile features, badges, and more as you spend.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoyalHero;
