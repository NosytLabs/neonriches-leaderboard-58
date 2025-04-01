
import React from 'react';
import { Button } from '@/components/ui/button';
import { Crown, TrendingUp, DollarSign, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/auth';

const HeroSection = () => {
  const { user } = useAuth();
  
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-10">
      <div className="glass-morphism border-white/10 p-8 rounded-lg max-w-4xl w-full text-center">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-royal-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-royal-crimson/10 rounded-full blur-3xl"></div>
        
        <div className="flex justify-center mb-6">
          <Crown className="h-16 w-16 text-royal-gold animate-pulse" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-royal-gold via-white to-royal-gold bg-clip-text text-transparent">
          SPEND THRONE
        </h1>
        
        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          A persistent, ranked leaderboard where your position is determined by your financial contributions. 
          The ultimate pay-to-win social experiment.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="glass-morphism border-white/10 p-4 rounded-lg w-full md:w-[45%]">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="h-6 w-6 text-royal-gold mr-2" />
              <h3 className="text-xl font-bold">Persistent Ranking</h3>
            </div>
            <p className="text-white/70">
              Your rank never resets. Every dollar spent raises your position permanently.
            </p>
          </div>
          
          <div className="glass-morphism border-white/10 p-4 rounded-lg w-full md:w-[45%]">
            <div className="flex items-center justify-center mb-2">
              <DollarSign className="h-6 w-6 text-royal-gold mr-2" />
              <h3 className="text-xl font-bold">Direct Correlation</h3>
            </div>
            <p className="text-white/70">
              $1 spent = 1 unit of rank. Simple, transparent, and mercilessly capitalistic.
            </p>
          </div>
          
          <div className="glass-morphism border-white/10 p-4 rounded-lg w-full md:w-[45%]">
            <div className="flex items-center justify-center mb-2">
              <Users className="h-6 w-6 text-royal-gold mr-2" />
              <h3 className="text-xl font-bold">Join a Royal Team</h3>
            </div>
            <p className="text-white/70">
              Align with a royal house and compete for team supremacy while climbing ranks.
            </p>
          </div>
          
          <div className="glass-morphism border-white/10 p-4 rounded-lg w-full md:w-[45%]">
            <div className="flex items-center justify-center mb-2">
              <Crown className="h-6 w-6 text-royal-gold mr-2" />
              <h3 className="text-xl font-bold">Medieval Mockery</h3>
            </div>
            <p className="text-white/70">
              Use royal power to shame, mock and challenge others in medieval style.
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          {user ? (
            <>
              <Button
                className="bg-gradient-to-r from-royal-gold to-royal-gold-bright text-black hover:opacity-90"
                size="lg"
                asChild
              >
                <Link to="/dashboard">
                  <Crown className="h-5 w-5 mr-2" />
                  Royal Dashboard
                </Link>
              </Button>
              
              <Button
                className="bg-gradient-to-r from-royal-crimson to-royal-crimson-bright text-white hover:opacity-90"
                size="lg"
                asChild
              >
                <Link to="/deposit">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Increase Rank
                </Link>
              </Button>
            </>
          ) : (
            <>
              <Button
                className="bg-gradient-to-r from-royal-gold to-royal-gold-bright text-black hover:opacity-90"
                size="lg"
                asChild
              >
                <Link to="/signup">
                  <Crown className="h-5 w-5 mr-2" />
                  Claim Your Throne
                </Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                asChild
              >
                <Link to="/leaderboard">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  View Leaderboard
                </Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
