
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Crown, Trophy, Users, ArrowRight, DollarSign, Coins, ThumbsUp } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import { Shell } from '@/components/ui/shell';
import RoyalHero from '@/components/RoyalHero';
import HeroShowcase from '@/components/home/HeroShowcase';
import RoyalShowcase from '@/components/RoyalShowcase';
import TeamStandings from '@/components/home/TeamStandings';
import RoyalBadges from '@/components/RoyalBadges';
import HeroBackground from '@/components/ui/hero/HeroBackground';
import { formatCurrency } from '@/utils/formatters';

const Home = () => {
  // Sample statistics for the hero section
  const totalUsers = 1285;
  const totalSpent = 750000;
  const averageSpending = totalSpent / totalUsers;
  const topSpendAmount = 50000;
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <HeroBackground isVisible={true} />
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold royal-gradient mb-6 font-royal">
              SPEND THRONE
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-8">
              A persistent, ranked leaderboard where your status is determined solely by how much you spend!
            </p>
            <p className="text-lg md:text-xl text-royal-gold italic font-semibold mb-12 max-w-xl mx-auto">
              "$1 spent = 1 unit of rank. The leaderboard never resets."
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/leaderboard">
                <Button className="w-full sm:w-auto bg-gradient-to-r from-royal-purple to-royal-gold hover:opacity-90 text-white royal-button min-w-[180px]">
                  <Trophy className="mr-2 h-4 w-4" />
                  <span>View Leaderboard</span>
                </Button>
              </Link>
              
              <Link to="/signup">
                <Button variant="outline" className="w-full sm:w-auto bg-foreground/5 hover:bg-foreground/10 text-white border-white/10 hover:border-royal-gold/30 min-w-[180px]">
                  <Crown className="mr-2 h-4 w-4" />
                  <span>Claim Your Throne</span>
                </Button>
              </Link>
            </div>
          </motion.div>
          
          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          >
            <div className="glass-morphism p-6 rounded-xl border border-white/10 hover:border-royal-gold/30 transition-all duration-300">
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 rounded-full bg-royal-gold/10 flex items-center justify-center">
                  <Users className="text-royal-gold" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-1">{totalUsers.toLocaleString()}</h3>
              <p className="text-white/60 text-center">Total Nobles</p>
            </div>
            
            <div className="glass-morphism p-6 rounded-xl border border-white/10 hover:border-royal-gold/30 transition-all duration-300">
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 rounded-full bg-royal-gold/10 flex items-center justify-center">
                  <DollarSign className="text-royal-gold" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-1">{formatCurrency(totalSpent)}</h3>
              <p className="text-white/60 text-center">Total Squandered</p>
            </div>
            
            <div className="glass-morphism p-6 rounded-xl border border-white/10 hover:border-royal-gold/30 transition-all duration-300">
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 rounded-full bg-royal-gold/10 flex items-center justify-center">
                  <Crown className="text-royal-gold" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-1">{formatCurrency(topSpendAmount)}</h3>
              <p className="text-white/60 text-center">Top Spender Amount</p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Royal Showcase */}
      <section className="py-20 bg-gradient-to-b from-background/90 to-background">
        <Shell withBrandIcon transparent>
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 royal-gradient">
              The Royal Court
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Behold those who have ascended our leaderboard through the most noble of virtues: excessive spending!
            </p>
          </div>
          
          <RoyalShowcase />
        </Shell>
      </section>
      
      {/* Team Standings */}
      <section className="py-20 bg-gradient-to-b from-background/95 to-background/90">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 royal-gradient">
              Team Rivalries
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Join a team and compete for collective glory! Will you side with Red, Blue, or Green in this battle of wallets?
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <TeamStandings />
          </div>
        </div>
      </section>
      
      {/* Royal Badges */}
      <RoyalBadges />
      
      {/* Features Grid */}
      <section className="py-20 bg-gradient-to-b from-background/90 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 royal-gradient">
              The Pay-to-Win Experience
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              A satirical social experiment exploring digital status and the extremes of wealth-based ranking
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="glass-morphism p-8 rounded-xl border border-white/10 hover:border-royal-gold/30 transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-royal-crimson/10 flex items-center justify-center">
                  <DollarSign size={28} className="text-royal-crimson" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Spend to Ascend</h3>
              <p className="text-white/70 text-center">
                Your rank on the leaderboard is directly proportional to your spending. More money = higher rank. It's that simple.
              </p>
            </div>
            
            <div className="glass-morphism p-8 rounded-xl border border-white/10 hover:border-royal-gold/30 transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-royal-gold/10 flex items-center justify-center">
                  <Trophy size={28} className="text-royal-gold" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Eternal Glory</h3>
              <p className="text-white/70 text-center">
                The leaderboard never resets. Your contributions are permanently recorded, cementing your legacy forever.
              </p>
            </div>
            
            <div className="glass-morphism p-8 rounded-xl border border-white/10 hover:border-royal-gold/30 transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-royal-navy/10 flex items-center justify-center">
                  <Coins size={28} className="text-royal-navy" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Royal Perks</h3>
              <p className="text-white/70 text-center">
                Unlock exclusive cosmetics, profile enhancements, and social abilities as you pour more money into your rank.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-t from-background to-background/90 relative">
        <div className="container mx-auto px-4">
          <div className="glass-morphism p-10 border border-royal-gold/20 rounded-xl max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-royal-gold/10 rounded-full filter blur-[80px]"></div>
            
            <div className="text-center relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 royal-gradient">
                Ready to Claim Your Throne?
              </h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                Join now and experience the ultimate pay-to-win social platform where your wallet determines your worth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/signup">
                  <Button className="w-full sm:w-auto bg-royal-gold hover:bg-royal-gold/90 text-black font-semibold py-6 px-8">
                    <Crown className="mr-2 h-4 w-4" />
                    <span>Create Your Noble Profile</span>
                  </Button>
                </Link>
                
                <Link to="/about">
                  <Button variant="outline" className="w-full sm:w-auto border-royal-gold/50 text-royal-gold hover:bg-royal-gold/10">
                    <ThumbsUp className="mr-2 h-4 w-4" />
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
