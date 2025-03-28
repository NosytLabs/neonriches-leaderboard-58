
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Trophy, Crown, Gem, Scroll } from 'lucide-react';
import MedievalIcon from './ui/medieval-icon';

const RoyalFeatures = () => {
  return (
    <div className="py-12">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold royal-gradient mb-3 font-royal">Royal Privileges</h2>
        <p className="text-white/70 max-w-xl mx-auto">
          Discover the exclusive features that await those who contribute to the royal treasury.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/features" className="glass-morphism p-6 rounded-lg transition-all duration-300 hover:border-royal-gold/30 group">
          <div className="w-12 h-12 rounded-full bg-royal-gold/10 flex items-center justify-center mb-4 group-hover:bg-royal-gold/20 transition-colors">
            <MedievalIcon name="crown" size="lg" color="gold" className="group-hover:animate-crown-glow" />
          </div>
          <h3 className="text-xl font-bold mb-2">Royal Ranking</h3>
          <p className="text-white/70">
            Your position in the court is determined by your financial contributions. $1 spent = 1 unit of rank in our satirical hierarchy.
          </p>
        </Link>
        
        <Link to="/profile/royalty" className="glass-morphism p-6 rounded-lg transition-all duration-300 hover:border-royal-crimson/30 group">
          <div className="w-12 h-12 rounded-full bg-royal-crimson/10 flex items-center justify-center mb-4 group-hover:bg-royal-crimson/20 transition-colors">
            <Scroll className="h-8 w-8 text-royal-crimson group-hover:animate-pulse-slow" />
          </div>
          <h3 className="text-xl font-bold mb-2">Noble Profiles</h3>
          <p className="text-white/70">
            Create and customize your royal profile page. Higher spending unlocks premium customization options to showcase your wealth.
          </p>
        </Link>
        
        <Link to="/teams" className="glass-morphism p-6 rounded-lg transition-all duration-300 hover:border-royal-navy/30 group">
          <div className="w-12 h-12 rounded-full bg-royal-navy/10 flex items-center justify-center mb-4 group-hover:bg-royal-navy/20 transition-colors">
            <Shield className="h-8 w-8 text-royal-navy group-hover:animate-pulse-slow" />
          </div>
          <h3 className="text-xl font-bold mb-2">Noble Houses</h3>
          <p className="text-white/70">
            Join one of three competing noble houses: Red (fire), Green (forest), or Blue (water). Competition between houses drives spending.
          </p>
        </Link>
        
        <Link to="/events" className="glass-morphism p-6 rounded-lg transition-all duration-300 hover:border-royal-purple/30 group">
          <div className="w-12 h-12 rounded-full bg-royal-purple/10 flex items-center justify-center mb-4 group-hover:bg-royal-purple/20 transition-colors">
            <Trophy className="h-8 w-8 text-purple-500 group-hover:animate-pulse-slow" />
          </div>
          <h3 className="text-xl font-bold mb-2">Royal Tournaments</h3>
          <p className="text-white/70">
            Participate in weekly events like "Poke Party" where you can pay to temporarily affect others' rankings in playful competition.
          </p>
        </Link>
        
        <Link to="/features" className="glass-morphism p-6 rounded-lg transition-all duration-300 hover:border-royal-gold/30 group">
          <div className="w-12 h-12 rounded-full bg-royal-gold/10 flex items-center justify-center mb-4 group-hover:bg-royal-gold/20 transition-colors">
            <Gem className="h-8 w-8 text-royal-gold group-hover:animate-pulse-slow" />
          </div>
          <h3 className="text-xl font-bold mb-2">Treasury Rewards</h3>
          <p className="text-white/70">
            A portion of weekly spending goes to the treasury, with distributions to top spenders and consistent contributors.
          </p>
        </Link>
        
        <Link to="/royal-council" className="glass-morphism p-6 rounded-lg transition-all duration-300 hover:border-royal-navy/30 group">
          <div className="w-12 h-12 rounded-full bg-royal-navy/10 flex items-center justify-center mb-4 group-hover:bg-royal-navy/20 transition-colors">
            <Crown className="h-8 w-8 text-royal-navy group-hover:animate-pulse-slow" />
          </div>
          <h3 className="text-xl font-bold mb-2">Royal Council</h3>
          <p className="text-white/70">
            Join our royal council to vote on feature proposals and help shape the future direction of our satirical kingdom.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default RoyalFeatures;
