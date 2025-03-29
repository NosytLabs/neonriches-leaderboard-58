
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Crown, ArrowRight, DollarSign, Users, Award, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/auth';
import '../styles/animations/enhanced-animations.css';

const RoyalHero = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const isAuthenticated = !!user;
  
  const handleGetStarted = () => {
    if (isAuthenticated) {
      navigate('/dashboard');
    } else {
      navigate('/signup');
    }
  };
  
  return (
    <div className="relative overflow-hidden py-20 bg-gradient-to-b from-black to-background">
      {/* Animated elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-[10%] w-40 h-40 bg-royal-crimson/5 rounded-full blur-3xl animate-royal-float"></div>
        <div className="absolute bottom-10 right-[5%] w-56 h-56 bg-royal-navy/5 rounded-full blur-3xl animate-royal-float animation-delay-200"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-royal-purple/5 rounded-full blur-3xl animate-royal-float animation-delay-300"></div>
        
        {/* Floating coins */}
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-7 h-7 rounded-full bg-royal-gold/30 animate-royal-float"
            style={{
              top: `${10 + Math.random() * 80}%`,
              left: `${10 + Math.random() * 80}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <DollarSign className="w-4 h-4 text-royal-gold" />
          </div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto animate-royal-entrance">
          <div className="rounded-full bg-royal-gold/10 p-4 mb-6">
            <Crown className="h-12 w-12 text-royal-gold animate-crown-glow" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-royal">
            <span className="royal-gradient">The Ultimate Pay-to-Win</span>
            <br />
            <span className="royal-gradient">Social Experience</span>
          </h1>
          
          <p className="text-white/80 max-w-3xl mb-8 text-lg md:text-xl leading-relaxed">
            Welcome to the realm where your <span className="text-royal-gold">wealth</span> determines your <span className="text-royal-gold">worth</span>. 
            Spend real money to climb the ranks in this satirical social experiment where $1 = 1 unit of rank.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 w-full">
            <div className="glass-morphism rounded-lg p-5 flex flex-col items-center">
              <DollarSign className="h-8 w-8 text-royal-gold mb-3" />
              <h3 className="font-bold text-xl mb-2">Pay to Rank</h3>
              <p className="text-white/70 text-sm text-center">Your rank is exactly equal to how much you've spent. Simple as that.</p>
            </div>
            
            <div className="glass-morphism rounded-lg p-5 flex flex-col items-center">
              <Users className="h-8 w-8 text-royal-gold mb-3" />
              <h3 className="font-bold text-xl mb-2">Join a Team</h3>
              <p className="text-white/70 text-sm text-center">Choose Red, Green, or Blue and compete for team dominance.</p>
            </div>
            
            <div className="glass-morphism rounded-lg p-5 flex flex-col items-center">
              <Award className="h-8 w-8 text-royal-gold mb-3" />
              <h3 className="font-bold text-xl mb-2">Win Prizes</h3>
              <p className="text-white/70 text-sm text-center">Top spenders receive rewards from the Affluent Assembly prize pool.</p>
            </div>
          </div>
          
          <Button
            onClick={handleGetStarted}
            className="text-black bg-gradient-to-r from-royal-gold-dark via-royal-gold to-royal-gold-bright hover:opacity-90 text-lg px-8 py-6 h-auto group"
          >
            <span>Begin Your Noble Journey</span>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <p className="mt-4 text-white/50 text-sm flex items-center">
            <Sparkles className="h-4 w-4 mr-1 text-royal-gold/70" />
            <span>
              No skills required. Money is the only qualification.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoyalHero;
