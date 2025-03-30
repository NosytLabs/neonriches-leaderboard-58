
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Crown, Trophy, Users, ArrowRight, DollarSign, Coins, ThumbsUp, Shield, Sparkles, Flame } from 'lucide-react';
import { Shell } from '@/components/ui/shell';
import RoyalHero from '@/components/RoyalHero';
import RoyalShowcase from '@/components/RoyalShowcase';
import TeamStandings from '@/components/home/TeamStandings';
import RoyalBadges from '@/components/RoyalBadges';
import HeroBackground from '@/components/ui/hero/HeroBackground';
import HeroShowcase from '@/components/HeroShowcase';
import { formatCurrency } from '@/utils/formatters';
import { useAuth } from '@/contexts';

const Home = () => {
  const { isAuthenticated } = useAuth();
  
  // Sample statistics for the hero section
  const totalUsers = 1285;
  const totalSpent = 750000;
  const averageSpending = totalSpent / totalUsers;
  const topSpendAmount = 50000;
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-bg-dark via-bg-darker to-bg-dark">
      {/* Hero Section with Royal Theme */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <HeroBackground isVisible={true} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 z-10 relative py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-4">
              <motion.div 
                className="w-24 h-24 mx-auto mb-4 relative"
                animate={{ rotateY: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-royal-gold to-royal-gold-bright rounded-full opacity-20 animate-pulse-slow"></div>
                <Crown className="w-full h-full text-royal-gold animate-crown-glow" />
              </motion.div>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold royal-gradient mb-6 font-royal tracking-tight">
              SPEND THRONE
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-6 leading-relaxed">
              The ultimate pay-to-win experience where your rank is determined 
              <span className="text-royal-gold font-bold"> exclusively </span>
              by how much you spend.
            </p>
            
            <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg border border-royal-gold/20 mb-8 max-w-xl mx-auto transform hover:scale-105 transition-transform duration-300">
              <p className="text-xl italic text-royal-gold font-semibold">
                "$1 spent = 1 unit of rank. The leaderboard never resets."
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              {!isAuthenticated ? (
                <>
                  <Link to="/register">
                    <Button className="w-full sm:w-auto bg-gradient-to-r from-royal-gold to-royal-gold-bright hover:opacity-90 text-black royal-button min-w-[200px] py-6 text-lg font-bold group">
                      <Crown className="mr-2 h-5 w-5 group-hover:animate-spin" />
                      <span>Claim Your Throne</span>
                    </Button>
                  </Link>
                  
                  <Link to="/leaderboard">
                    <Button variant="outline" className="w-full sm:w-auto bg-foreground/5 hover:bg-foreground/10 text-white border-white/10 hover:border-royal-gold/30 min-w-[200px] py-6 text-lg">
                      <Trophy className="mr-2 h-5 w-5" />
                      <span>View Leaderboard</span>
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/deposit">
                    <Button className="w-full sm:w-auto bg-gradient-to-r from-royal-gold to-royal-gold-bright hover:opacity-90 text-black royal-button min-w-[200px] py-6 text-lg font-bold group">
                      <Coins className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                      <span>Increase Your Status</span>
                    </Button>
                  </Link>
                  
                  <Link to="/profile">
                    <Button variant="outline" className="w-full sm:w-auto bg-foreground/5 hover:bg-foreground/10 text-white border-white/10 hover:border-royal-gold/30 min-w-[200px] py-6 text-lg">
                      <Crown className="mr-2 h-5 w-5" />
                      <span>View Your Profile</span>
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </motion.div>
          
          {/* Floating elements animation */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.div 
                key={i}
                className="absolute"
                initial={{ 
                  x: Math.random() * 100 + '%', 
                  y: '100%',
                  rotate: Math.random() * 360,
                  scale: Math.random() * 0.5 + 0.5
                }}
                animate={{ 
                  y: '-20%',
                  rotate: Math.random() * 720
                }}
                transition={{ 
                  duration: Math.random() * 20 + 15, 
                  repeat: Infinity, 
                  delay: Math.random() * 10,
                  ease: 'linear'
                }}
              >
                {i % 3 === 0 ? (
                  <Crown className="text-royal-gold/20 h-8 w-8" />
                ) : i % 3 === 1 ? (
                  <Coins className="text-royal-gold/20 h-8 w-8" />
                ) : (
                  <Trophy className="text-royal-gold/20 h-8 w-8" />
                )}
              </motion.div>
            ))}
          </div>
          
          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 z-20 relative"
          >
            <div className="glass-morphism p-6 rounded-xl border border-white/10 hover:border-royal-gold/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 rounded-full bg-royal-gold/10 flex items-center justify-center">
                  <Users className="text-royal-gold animate-pulse-slow" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-center mb-1">{totalUsers.toLocaleString()}</h3>
              <p className="text-white/60 text-center">Noble Subjects</p>
            </div>
            
            <div className="glass-morphism p-6 rounded-xl border border-white/10 hover:border-royal-gold/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 rounded-full bg-royal-gold/10 flex items-center justify-center">
                  <DollarSign className="text-royal-gold animate-pulse-slow" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-center mb-1">{formatCurrency(totalSpent)}</h3>
              <p className="text-white/60 text-center">Royal Treasury</p>
            </div>
            
            <div className="glass-morphism p-6 rounded-xl border border-white/10 hover:border-royal-gold/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 rounded-full bg-royal-gold/10 flex items-center justify-center">
                  <Crown className="text-royal-gold animate-pulse-slow" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-center mb-1">{formatCurrency(topSpendAmount)}</h3>
              <p className="text-white/60 text-center">Top Royal Spender</p>
            </div>
            
            <div className="glass-morphism p-6 rounded-xl border border-white/10 hover:border-royal-gold/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 rounded-full bg-royal-gold/10 flex items-center justify-center">
                  <Sparkles className="text-royal-gold animate-pulse-slow" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-center mb-1">{formatCurrency(averageSpending)}</h3>
              <p className="text-white/60 text-center">Average Contribution</p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-bg-dark/80 to-bg-darker">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="royal-gradient">The Royal Hierarchy</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              At SpendThrone, your position in our satirical hierarchy is determined by one simple metric: your spending.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div 
              className="glass-morphism p-8 rounded-xl border border-white/10 hover:border-royal-gold/30 transition-all duration-300"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-royal-crimson/20 flex items-center justify-center">
                  <DollarSign size={32} className="text-royal-crimson" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Spend to Ascend</h3>
              <p className="text-white/70 text-center">
                Every dollar spent equals one unit of rank. It's that simple. No skill required, just your wallet.
              </p>
            </motion.div>
            
            <motion.div 
              className="glass-morphism p-8 rounded-xl border border-white/10 hover:border-royal-gold/30 transition-all duration-300"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-royal-gold/20 flex items-center justify-center">
                  <Trophy size={32} className="text-royal-gold" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Eternal Glory</h3>
              <p className="text-white/70 text-center">
                Our leaderboard never resets. Your contributions are permanently recorded, cementing your legacy.
              </p>
            </motion.div>
            
            <motion.div 
              className="glass-morphism p-8 rounded-xl border border-white/10 hover:border-royal-gold/30 transition-all duration-300"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-royal-navy/20 flex items-center justify-center">
                  <Shield size={32} className="text-royal-navy" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Join a House</h3>
              <p className="text-white/70 text-center">
                Pledge allegiance to one of three royal houses: Red (Fire), Green (Forest), or Blue (Ocean).
              </p>
            </motion.div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/features">
              <Button variant="outline" className="border-royal-gold/30 text-royal-gold hover:bg-royal-gold/10 mt-6">
                <Sparkles className="mr-2 h-4 w-4" />
                Discover All Royal Features
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Royal Showcase */}
      <section className="py-20 bg-gradient-to-b from-bg-darker to-bg-dark/90 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-64 bg-royal-gold/5 rounded-full blur-3xl transform -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-full h-64 bg-royal-purple/5 rounded-full blur-3xl transform translate-y-1/2"></div>
        </div>
        
        <Shell withBrandIcon transparent>
          <motion.div 
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 royal-gradient">
              The Royal Court
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Behold the elite nobles who have ascended our ranks through the most virtuous of acts: excessive spending.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <RoyalShowcase />
          </motion.div>
          
          <div className="mt-12 text-center">
            <Link to="/leaderboard">
              <Button variant="royalGold" size="lg" className="mt-8">
                <Trophy className="mr-2 h-4 w-4" />
                View Full Leaderboard
              </Button>
            </Link>
          </div>
        </Shell>
      </section>
      
      {/* Team Standings */}
      <section className="py-20 bg-gradient-to-b from-bg-dark/95 to-bg-dark/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/map-texture.png')] opacity-5 pointer-events-none"></div>
        
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 royal-gradient">
              Royal House Rivalries
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Join one of three competing noble houses and battle for collective glory and team rewards.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <TeamStandings />
            </motion.div>
            
            <div className="mt-10 text-center">
              <Link to="/teams">
                <Button className="bg-gradient-to-r from-team-red via-team-green to-team-blue text-white hover:opacity-90 border-none">
                  <Flame className="mr-2 h-4 w-4" />
                  Choose Your Royal House
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Royal Badges Section */}
      <section className="py-20 bg-gradient-to-b from-bg-dark/80 to-bg-darker relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <RoyalBadges />
        </motion.div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-t from-bg-darker to-bg-dark/90 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            className="glass-morphism p-10 border border-royal-gold/20 rounded-xl max-w-4xl mx-auto relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-royal-gold/10 rounded-full filter blur-[80px] animate-pulse-slow"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-royal-purple/10 rounded-full filter blur-[80px] animate-pulse-slow"></div>
            
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
                    <Crown className="mr-2 h-5 w-5" />
                    <span>Create Your Noble Profile</span>
                  </Button>
                </Link>
                
                <Link to="/about">
                  <Button variant="outline" className="w-full sm:w-auto border-royal-gold/50 text-royal-gold hover:bg-royal-gold/10">
                    <ThumbsUp className="mr-2 h-5 w-5" />
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
