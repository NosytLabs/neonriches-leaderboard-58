
import React from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';
import { Button } from '@/components/ui/button';
import HeroBackground from '@/components/ui/hero/HeroBackground';
import { Crown, Trophy, Gem, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

// This component serves as the main landing page
const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/90 relative overflow-hidden">
      {/* Hero background with particles */}
      <HeroBackground intensity="high" color="gold" />
      
      {/* Main content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Crown className="h-16 w-16 text-royal-gold animate-pulse-slow" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 royal-gradient">
            SPEND THRONE
          </h1>
          
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/80 mb-8">
            The ultimate pay-to-win leaderboard where your rank equals your spending.
            A satirical throne awaits those willing to part with their coin.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/leaderboard">
              <Button size="lg" className="bg-gradient-to-r from-royal-gold to-amber-600 text-black hover:opacity-90">
                <Trophy className="mr-2 h-5 w-5" />
                View Leaderboard
              </Button>
            </Link>
            
            <Link to="/deposit">
              <Button size="lg" variant="outline" className="border-royal-gold/50 hover:bg-royal-gold/10">
                <Gem className="mr-2 h-5 w-5" />
                Make Your Deposit
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={cn(
                "glass-morphism border-white/10 p-6 rounded-lg text-center animate-royal-entrance",
                `animation-delay-${index * 100}`
              )}
            >
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-royal-gold/20 flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* CTA section */}
        <div className="glass-morphism border-royal-gold/30 p-8 rounded-lg text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 royal-gradient">Ready to Claim Your Throne?</h2>
          <p className="text-white/80 mb-6">
            Join our satirical kingdom where money equals status and the concept of "value" is hilariously distorted.
          </p>
          <Link to="/signup">
            <Button size="lg" className="bg-gradient-to-r from-amber-600 to-royal-gold text-black hover:opacity-90 group">
              Start Your Ascension
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Main app content */}
      <Home />
    </div>
  );
};

// Feature card data
const features = [
  {
    title: "Permanent Rank",
    description: "Your rank on the leaderboard is determined solely by how much you've spent. Every dollar counts towards your eternal glory.",
    icon: <Trophy className="h-8 w-8 text-royal-gold" />
  },
  {
    title: "Public Recognition",
    description: "Showcase your wealth and commitment to frivolous spending to the world. Let everyone witness your dedication to the throne.",
    icon: <Crown className="h-8 w-8 text-royal-gold" />
  },
  {
    title: "Royal Privileges",
    description: "Unlock exclusive cosmetics, titles, and mockery powers as you ascend through the ranks of nobility.",
    icon: <Gem className="h-8 w-8 text-royal-gold" />
  }
];

export default Index;
