
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Crown, Trophy, ArrowRight } from 'lucide-react';
import { formatCurrency } from '@/utils/formatters';
import { cn } from '@/lib/utils';

// Sample data for demonstration
const topSpenders = [
  {
    id: '1',
    username: 'LordGoldfinger',
    displayName: 'Lord Goldfinger',
    profileImage: '',
    amountSpent: 25000,
    rank: 1,
    team: 'red',
  },
  {
    id: '2',
    username: 'CountessWealth',
    displayName: 'Countess of Wealth',
    profileImage: '',
    amountSpent: 18500,
    rank: 2,
    team: 'blue',
  },
  {
    id: '3',
    username: 'DukeCashington',
    displayName: 'Duke Cashington',
    profileImage: '',
    amountSpent: 12750,
    rank: 3,
    team: 'green',
  }
];

const teamColors = {
  red: {
    bg: 'bg-red-500',
    text: 'text-red-500',
    border: 'hover:border-red-500/50',
    highlight: 'from-red-500/20 to-red-500/5'
  },
  blue: {
    bg: 'bg-blue-500',
    text: 'text-blue-500',
    border: 'hover:border-blue-500/50',
    highlight: 'from-blue-500/20 to-blue-500/5'
  },
  green: {
    bg: 'bg-green-500',
    text: 'text-green-500',
    border: 'hover:border-green-500/50',
    highlight: 'from-green-500/20 to-green-500/5'
  },
};

const RoyalShowcase: React.FC = () => {
  return (
    <div className="royal-showcase mb-10">
      {/* Top Royalty Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {topSpenders.map((spender, index) => (
          <motion.div
            key={spender.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
          >
            <Link to={`/profile/${spender.username}`}>
              <Card className={cn(
                "glass-morphism relative border-white/10 overflow-hidden h-full group",
                teamColors[spender.team as keyof typeof teamColors].border
              )}>
                {/* Team color indicator */}
                <div className={cn(
                  "h-1.5",
                  teamColors[spender.team as keyof typeof teamColors].bg
                )}></div>
                
                {/* Rank indicator for top 3 */}
                <div className="absolute top-3 right-3">
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold",
                    index === 0 
                      ? "bg-royal-gold text-black" 
                      : index === 1 
                        ? "bg-gray-300 text-gray-800" 
                        : "bg-amber-700 text-white"
                  )}>
                    {spender.rank}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col items-center">
                  <Avatar className="w-24 h-24 mb-4 border-2 group-hover:border-4 border-white/10 group-hover:border-royal-gold/50 transition-all duration-300">
                    <AvatarImage src={spender.profileImage} alt={spender.displayName} />
                    <AvatarFallback className="bg-gradient-to-br from-royal-gold/30 to-royal-gold/10 text-2xl font-bold">
                      {spender.displayName.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold group-hover:text-royal-gold transition-colors duration-300">
                      {spender.displayName}
                    </h3>
                    <p className={cn(
                      "text-sm",
                      teamColors[spender.team as keyof typeof teamColors].text
                    )}>
                      @{spender.username}
                    </p>
                  </div>
                  
                  <div className="mt-auto w-full">
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="flex items-center">
                        <Crown className="h-5 w-5 text-royal-gold mr-2" />
                        <span>Rank #{spender.rank}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-royal-gold">
                          {formatCurrency(spender.amountSpent)}
                        </div>
                        <div className="text-xs text-white/60">Total Spent</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-t opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
      
      {/* View All Link */}
      <div className="text-center">
        <Link to="/leaderboard" className="inline-flex items-center text-royal-gold hover:underline group">
          <Trophy className="h-4 w-4 mr-2" />
          <span>View Complete Leaderboard</span>
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default RoyalShowcase;
