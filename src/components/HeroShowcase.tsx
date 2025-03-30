
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
  ShieldCheck,
  Sparkles,
  Users
} from 'lucide-react';
import RoyalShowcase from './RoyalShowcase';
import { formatCurrency } from '@/utils/formatters';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

// Sample data for demonstration
const topSpenders = [
  {
    id: '1',
    username: 'EliteSpender',
    displayName: 'Lord Goldhand',
    profileImage: '/images/avatars/elite-spender.jpg',
    amountSpent: 15000,
    rank: 1,
    team: 'red',
  },
  {
    id: '2',
    username: 'RoyalThrower',
    displayName: 'Duchess Moneybags',
    profileImage: '/images/avatars/royal-thrower.jpg',
    amountSpent: 10500,
    rank: 2,
    team: 'blue',
  },
  {
    id: '3',
    username: 'MoneyKing',
    displayName: 'Count Cashflow',
    profileImage: '/images/avatars/money-king.jpg',
    amountSpent: 8750,
    rank: 3,
    team: 'green',
  }
];

const teamColors = {
  red: 'text-team-red border-team-red/30 bg-team-red/10',
  blue: 'text-team-blue border-team-blue/30 bg-team-blue/10',
  green: 'text-team-green border-team-green/30 bg-team-green/10',
};

const HeroShowcase: React.FC = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-black/80 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-royal-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-royal-gold/5 rounded-full blur-3xl"></div>
        
        {/* Floating elements */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div 
              key={i}
              className="absolute" 
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ 
                opacity: 0, 
                scale: 0.5, 
                y: 100, 
                rotate: Math.random() * 360 
              }}
              animate={{ 
                opacity: [0, 0.3 + Math.random() * 0.4, 0],
                scale: [0.5, 1, 0.5],
                y: [100, -100],
                rotate: [Math.random() * 360, Math.random() * 720]
              }}
              transition={{ 
                duration: 3 + Math.random() * 8,
                repeat: Infinity,
                delay: Math.random() * 5,
                repeatDelay: Math.random() * 3
              }}
            >
              {i % 3 === 0 ? (
                <Crown className="text-royal-gold/20 h-6 w-6" />
              ) : i % 3 === 1 ? (
                <Coins className="text-royal-gold/20 h-6 w-6" />
              ) : (
                <Trophy className="text-royal-gold/20 h-6 w-6" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
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
            className="mb-12"
          >
            <RoyalShowcase />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ y: -10 }}
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
              whileHover={{ y: -10 }}
            >
              <Card className="glass-morphism border-white/10 h-full p-6 flex flex-col items-center text-center transition-all duration-300 hover:border-royal-gold/30">
                <div className="rounded-full bg-royal-gold/10 p-4 mb-4">
                  <DollarSign className="h-8 w-8 text-royal-gold" />
                </div>
                <h3 className="text-xl font-bold mb-2">Fund Thy Kingdom</h3>
                <p className="text-white/60 mb-4">Contribute to thy noble rank with generous (and entirely frivolous) payments!</p>
                <Link to="/deposit" className="mt-auto">
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
              whileHover={{ y: -10 }}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="text-center mb-16"
          >
            <Link to="/about">
              <Button variant="ghost" className="text-white/60 hover:text-white hover:bg-white/5 group">
                <ThumbsUp className="mr-2 h-4 w-4" />
                <span>Learn about our ridiculous kingdom</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </motion.div>
          
          {/* Top Spenders Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="mb-10"
          >
            <h3 className="text-2xl font-bold royal-gradient mb-6 text-center">Current Top Spenders</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {topSpenders.map((spender, index) => (
                <motion.div
                  key={spender.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 1.3 }}
                  whileHover={{ y: -5 }}
                >
                  <Link to={`/profile/${spender.username}`}>
                    <Card className={cn(
                      "glass-morphism overflow-hidden group transition-all duration-300",
                      spender.team === 'red' ? 'hover:border-team-red/50' :
                      spender.team === 'blue' ? 'hover:border-team-blue/50' :
                      'hover:border-team-green/50'
                    )}>
                      <div className={cn(
                        "h-1",
                        spender.team === 'red' ? 'bg-team-red' :
                        spender.team === 'blue' ? 'bg-team-blue' :
                        'bg-team-green'
                      )}></div>
                      
                      <div className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="relative mr-4">
                            <Avatar className="h-14 w-14 border-2 border-white/10 group-hover:border-royal-gold/50 transition-all duration-300">
                              <AvatarImage src={spender.profileImage} alt={spender.displayName} />
                              <AvatarFallback className="bg-royal-gold/20">
                                {spender.displayName.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            
                            <div className="absolute -top-2 -right-2">
                              {index === 0 ? (
                                <div className="w-6 h-6 rounded-full bg-royal-gold flex items-center justify-center text-black font-bold text-xs animate-crown-glow">1</div>
                              ) : (
                                <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-black font-bold text-xs">{index + 1}</div>
                              )}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-bold text-lg group-hover:text-royal-gold transition-colors duration-300">
                              {spender.displayName}
                            </h4>
                            <p className={cn(
                              "text-sm",
                              spender.team === 'red' ? 'text-team-red' :
                              spender.team === 'blue' ? 'text-team-blue' :
                              'text-team-green'
                            )}>@{spender.username}</p>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center mt-4">
                          <div className="flex items-center space-x-1">
                            <Crown className="h-4 w-4 text-royal-gold" />
                            <span className="text-sm">Rank #{spender.rank}</span>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold royal-gradient">{formatCurrency(spender.amountSpent)}</div>
                            <div className="text-xs text-white/60">Total Spent</div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="text-center"
          >
            <Link to="/leaderboard">
              <Button className="bg-gradient-to-r from-royal-gold to-royal-gold-bright text-black hover:opacity-90">
                <Users className="mr-2 h-4 w-4" />
                <span>View Complete Leaderboard</span>
                <Sparkles className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroShowcase;
