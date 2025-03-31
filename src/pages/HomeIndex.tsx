
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import RoyalButton from '@/components/ui/royal-button';
import { Crown, Trophy, ArrowRight } from 'lucide-react';
import { formatCurrency } from '@/utils/formatters';

// This component serves as the main landing page
const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/90 relative overflow-hidden">
      {/* Hero background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-bg-dark to-bg-dark-lighter"></div>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Crown className="h-16 w-16 text-royal-gold" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 royal-gradient font-medieval">
            SPEND THRONE
          </h1>
          
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/80 mb-6">
            The ultimate pay-to-win leaderboard where your rank equals your spending.
            A satirical throne awaits those willing to part with their coin.
          </p>
          
          <div className="mt-4 text-lg text-royal-gold">
            <span className="font-medium">Total Money Wasted: </span>
            <span className="font-bold">
              {formatCurrency(Math.floor(Math.random() * 1000000) + 500000)}
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Link to="/leaderboard">
              <RoyalButton 
                variant="royalGold" 
                size="lg" 
                className="text-lg font-bold"
                glow
              >
                <Trophy className="mr-2 h-5 w-5" />
                View Leaderboard
              </RoyalButton>
            </Link>
            
            <Link to="/deposit">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-royal-gold/50 hover:bg-royal-gold/10 text-lg"
              >
                Make Your Deposit
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="glass-morphism border-white/10 p-6 rounded-lg text-center h-full flex flex-col"
            >
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-white/70 flex-grow">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* CTA section */}
        <div className="glass-morphism border-royal-gold/30 p-8 rounded-lg text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-4 royal-gradient">Ready to Claim Your Throne?</h2>
          <p className="text-white/80 mb-6">
            Join our satirical kingdom where money equals status.
          </p>
          <Link to="/signup">
            <RoyalButton 
              variant="royalGold" 
              size="lg" 
              glow
            >
              Start Your Ascension
              <ArrowRight className="ml-2 h-4 w-4" />
            </RoyalButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

// Feature card data
const features = [
  {
    title: "Permanent Rank",
    description: "Your rank on the leaderboard is determined solely by how much you've spent. Every dollar counts towards your eternal glory.",
  },
  {
    title: "Public Recognition",
    description: "Showcase your wealth and commitment to frivolous spending to the world.",
  },
  {
    title: "Royal Privileges",
    description: "Unlock exclusive cosmetics, titles, and mockery powers as you ascend through the ranks of nobility.",
  }
];

export default Index;
