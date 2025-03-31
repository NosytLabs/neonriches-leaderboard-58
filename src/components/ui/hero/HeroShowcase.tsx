
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import RoyalButton from '@/components/ui/royal-button';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/utils/formatters';
import { Trophy, Crown, Coins, Users, ArrowRight, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const HeroShowcase: React.FC = () => {
  // Sample data for demonstration - in a real app this would come from an API
  const topSpenders = [
    {
      id: '1',
      username: 'LordCashington',
      displayName: 'Lord Cashington',
      profileImage: '/images/avatars/lord-cashington.jpg',
      amountSpent: 12500,
      rank: 1,
      team: 'red',
    },
    {
      id: '2',
      username: 'DuchessGold',
      displayName: 'Duchess Gold',
      profileImage: '/images/avatars/duchess-gold.jpg',
      amountSpent: 9750,
      rank: 2,
      team: 'blue',
    },
    {
      id: '3',
      username: 'MoneyBaronIII',
      displayName: 'Money Baron III',
      profileImage: '/images/avatars/money-baron.jpg',
      amountSpent: 7200,
      rank: 3,
      team: 'green',
    }
  ];

  const statData = [
    {
      title: "Total Spent",
      value: formatCurrency(2750000),
      icon: <Coins className="h-5 w-5 text-royal-gold" />,
      description: "Coins in our royal treasury"
    },
    {
      title: "Noble Users",
      value: "1,247",
      icon: <Users className="h-5 w-5 text-royal-gold" />,
      description: "Members of the court"
    },
    {
      title: "Team Competition",
      value: "House Crimson",
      icon: <Crown className="h-5 w-5 text-red-500" />,
      description: "Currently leading"
    },
    {
      title: "Avg. Per User",
      value: formatCurrency(2205),
      icon: <Trophy className="h-5 w-5 text-royal-gold" />,
      description: "Royal contributions"
    }
  ];

  return (
    <div className="py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-royal-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-royal-gold/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-royal mb-4 royal-gradient">
            The Royal Leaderboard
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Behold the noble elite who have ascended our ranks through the purest form of merit: excessive spending!
          </p>
        </motion.div>
        
        {/* Stats Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {statData.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-morphism p-6 rounded-lg border-white/10 hover:border-royal-gold/30 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-medium text-lg">{stat.title}</h3>
                {stat.icon}
              </div>
              <p className="text-2xl font-bold royal-gradient">{stat.value}</p>
              <p className="text-sm text-white/60 mt-1">{stat.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Top Spenders */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center royal-gradient">Current Top Spenders</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topSpenders.map((spender, index) => (
              <motion.div
                key={spender.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                whileHover={{ y: -5 }}
              >
                <Card className={cn(
                  "glass-morphism overflow-hidden group transition-all duration-300 cursor-pointer",
                  spender.team === 'red' ? 'hover:border-red-500/50' :
                  spender.team === 'blue' ? 'hover:border-blue-500/50' :
                  'hover:border-green-500/50'
                )}>
                  <div className={cn(
                    "h-1",
                    spender.team === 'red' ? 'bg-red-500' :
                    spender.team === 'blue' ? 'bg-blue-500' :
                    'bg-green-500'
                  )}></div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="relative mr-4">
                        <div className="h-14 w-14 rounded-full bg-royal-gold/20 flex items-center justify-center text-xl font-bold border-2 border-white/10 group-hover:border-royal-gold/50 transition-all duration-300">
                          {spender.displayName.charAt(0)}
                        </div>
                        
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
                          spender.team === 'red' ? 'text-red-500' :
                          spender.team === 'blue' ? 'text-blue-500' :
                          'text-green-500'
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
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="glass-morphism border-royal-gold/20 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4 royal-gradient">Ready to Make Your Ascent?</h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Join the ranks of our noble spenders and watch as your wealth transforms into digital prestige.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/signup">
                <RoyalButton 
                  variant="royalGold" 
                  size="lg" 
                  className="group"
                  glow
                >
                  <Crown className="mr-2 h-5 w-5" />
                  Join the Nobility
                </RoyalButton>
              </Link>
              
              <Link to="/leaderboard">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-royal-gold/50 hover:bg-royal-gold/10 group"
                >
                  <Trophy className="mr-2 h-5 w-5" />
                  <span>View Full Leaderboard</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroShowcase;
