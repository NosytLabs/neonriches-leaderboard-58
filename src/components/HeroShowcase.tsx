
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Crown, 
  Trophy, 
  ArrowRight, 
  DollarSign, 
  Coins, 
  ThumbsUp,
  Flag,
  ShieldCheck
} from 'lucide-react';
import RoyalShowcase from './RoyalShowcase';

const HeroShowcase: React.FC = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-black/80 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-royal-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-royal-gold/5 rounded-full blur-3xl"></div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/5 opacity-20">
          <Crown size={30} className="text-royal-gold animate-float" style={{ animationDuration: '15s', animationDelay: '1s' }} />
        </div>
        <div className="absolute top-1/3 right-1/4 opacity-20">
          <DollarSign size={24} className="text-royal-gold animate-float" style={{ animationDuration: '12s', animationDelay: '0.5s' }} />
        </div>
        <div className="absolute bottom-1/4 left-1/3 opacity-20">
          <Coins size={28} className="text-royal-gold animate-float" style={{ animationDuration: '13s', animationDelay: '2s' }} />
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-royal mb-4 royal-gradient">
                Behold The Noble Elite!
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto text-lg">
                Witness those who have ascended our leaderboard through the most noble of virtues: excessive spending!
              </p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-10"
          >
            <RoyalShowcase />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card className="glass-morphism border-white/10 h-full p-6 flex flex-col items-center text-center transition-all duration-300 hover:border-royal-gold/30">
                <div className="rounded-full bg-royal-crimson/10 p-4 mb-4">
                  <Crown className="h-8 w-8 text-royal-crimson" />
                </div>
                <h3 className="text-xl font-bold mb-2">Join The Court</h3>
                <p className="text-white/60 mb-4">Create thy noble profile and begin thy journey towards superficial prestige!</p>
                <Link to="/signup" className="mt-auto">
                  <Button variant="outline" className="border-royal-crimson/40 hover:border-royal-crimson/80 hover:bg-royal-crimson/10">
                    <Flag className="mr-2 h-4 w-4" />
                    <span>Claim Thy Title</span>
                  </Button>
                </Link>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Card className="glass-morphism border-white/10 h-full p-6 flex flex-col items-center text-center transition-all duration-300 hover:border-royal-gold/30">
                <div className="rounded-full bg-royal-gold/10 p-4 mb-4">
                  <DollarSign className="h-8 w-8 text-royal-gold" />
                </div>
                <h3 className="text-xl font-bold mb-2">Fund Thy Kingdom</h3>
                <p className="text-white/60 mb-4">Contribute to thy noble rank with generous (and entirely frivolous) payments!</p>
                <Link to="/pay/fiat" className="mt-auto">
                  <Button variant="outline" className="border-royal-gold/40 hover:border-royal-gold/80 hover:bg-royal-gold/10">
                    <Coins className="mr-2 h-4 w-4" />
                    <span>Open Treasury</span>
                  </Button>
                </Link>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <Card className="glass-morphism border-white/10 h-full p-6 flex flex-col items-center text-center transition-all duration-300 hover:border-royal-gold/30">
                <div className="rounded-full bg-royal-navy/10 p-4 mb-4">
                  <Trophy className="h-8 w-8 text-royal-navy" />
                </div>
                <h3 className="text-xl font-bold mb-2">View The Nobility</h3>
                <p className="text-white/60 mb-4">Examine the full rankings of our realm's most financially excessive subjects!</p>
                <Link to="/leaderboard" className="mt-auto">
                  <Button variant="outline" className="border-royal-navy/40 hover:border-royal-navy/80 hover:bg-royal-navy/10">
                    <ShieldCheck className="mr-2 h-4 w-4" />
                    <span>See Rankings</span>
                  </Button>
                </Link>
              </Card>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="text-center"
          >
            <Link to="/about">
              <Button variant="ghost" className="text-white/60 hover:text-white hover:bg-white/5">
                <ThumbsUp className="mr-2 h-4 w-4" />
                <span>Learn about our ridiculous kingdom</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroShowcase;
