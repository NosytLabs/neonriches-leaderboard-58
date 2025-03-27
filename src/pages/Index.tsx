import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import RoyalFeatures from '@/components/RoyalFeatures';
import RoyalFAQ from '@/components/RoyalFAQ';
import RoyalBadges from '@/components/RoyalBadges';
import TeamSection from '@/components/TeamSection';
import CombinedLeaderboard from '@/components/leaderboard/CombinedLeaderboard';
import RoyalDivider from '@/components/ui/royal-divider';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Crown, Trophy, Users, Sparkles } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main>
        <Hero />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold royal-gradient mb-2">
              The Ultimate Pay-to-Win Experience
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              On P2W.FUN, your status is directly proportional to your spending. $1 = 1 unit of rank. 
              The leaderboard never resets, making your investment in status eternal.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            <div className="glass-morphism border-white/10 rounded-lg p-6 text-center">
              <Crown className="h-12 w-12 text-royal-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Dollar-Driven Rank</h3>
              <p className="text-white/70 mb-4">
                Your rank is determined solely by your spending. Top spenders get exclusive perks and recognition.
              </p>
              <Link to="/leaderboard">
                <Button className="bg-white/10 hover:bg-white/20 text-white">
                  View Rankings
                </Button>
              </Link>
            </div>
            
            <div className="glass-morphism border-white/10 rounded-lg p-6 text-center">
              <Trophy className="h-12 w-12 text-royal-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Weekly Events</h3>
              <p className="text-white/70 mb-4">
                Participate in weekly events like Poke Party where you can pay to drop others down in rank.
              </p>
              <Link to="/events">
                <Button className="bg-white/10 hover:bg-white/20 text-white">
                  View Events
                </Button>
              </Link>
            </div>
            
            <div className="glass-morphism border-white/10 rounded-lg p-6 text-center">
              <Users className="h-12 w-12 text-royal-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Team Competition</h3>
              <p className="text-white/70 mb-4">
                Join one of three RGB teams and compete for team glory and additional bonuses.
              </p>
              <Link to="/dashboard">
                <Button className="bg-white/10 hover:bg-white/20 text-white">
                  Join a Team
                </Button>
              </Link>
            </div>
          </div>
          
          <RoyalDivider variant="line" label="ROYAL COURT" color="royal" className="mb-8" />
          
          <div className="mb-16">
            <CombinedLeaderboard limit={5} compact={true} />
          </div>
          
          <RoyalFeatures />
          <TeamSection />
          <RoyalBadges />
          <RoyalFAQ />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
