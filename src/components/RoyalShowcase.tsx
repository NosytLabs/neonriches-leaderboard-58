
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Crown, Medal, Trophy, Users, ArrowRight } from 'lucide-react';
import { formatCurrency } from '@/utils/formatters';
import { Button } from '@/components/ui/button';
import { UserProfile } from '@/types/user';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// Sample data for demonstration (in a real app, this would come from an API)
const topUsers = [
  {
    id: '1',
    username: 'EliteSpender',
    displayName: 'Lord Goldhand',
    profileImage: '/images/avatars/elite-spender.jpg',
    amountSpent: 15000,
    followers: 156,
    joinedAt: '2023-01-15T00:00:00Z',
    team: 'red',
  },
  {
    id: '2',
    username: 'RoyalThrower',
    displayName: 'Duchess Moneybags',
    profileImage: '/images/avatars/royal-thrower.jpg',
    amountSpent: 10500,
    followers: 78,
    joinedAt: '2023-04-20T00:00:00Z',
    team: 'blue',
  },
  {
    id: '3',
    username: 'MoneyKing',
    displayName: 'Count Cashflow',
    profileImage: '/images/avatars/money-king.jpg',
    amountSpent: 8750,
    followers: 92,
    joinedAt: '2023-03-10T00:00:00Z',
    team: 'green',
  }
];

interface RoyalShowcaseProps {
  user?: UserProfile | null;
  className?: string;
}

const RoyalShowcase: React.FC<RoyalShowcaseProps> = ({ user, className }) => {
  const getTeamColor = (team: string) => {
    switch(team) {
      case 'red': return 'text-team-red';
      case 'green': return 'text-team-green';
      case 'blue': return 'text-team-blue';
      default: return 'text-white';
    }
  };
  
  const getTeamBgColor = (team: string) => {
    switch(team) {
      case 'red': return 'bg-team-red';
      case 'green': return 'bg-team-green';
      case 'blue': return 'bg-team-blue';
      default: return 'bg-gray-700';
    }
  };

  return (
    <Card className={cn("glass-morphism bg-gradient-to-br from-royal-dark/60 to-black shadow-xl border-royal-gold/20", className)}>
      <CardHeader className="border-b border-royal-gold/10 pb-3">
        <div className="flex items-center space-x-2">
          <Crown className="text-royal-gold h-5 w-5 animate-pulse-slow" />
          <CardTitle className="text-lg font-royal royal-gradient">The Royal Court Elite</CardTitle>
        </div>
        <CardDescription>
          Behold the most esteemed nobles of the SpendThrone realm
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-4">
        <div className="space-y-4">
          {topUsers.map((topUser, index) => (
            <motion.div 
              key={topUser.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="relative"
            >
              <Link to={`/profile/${topUser.username}`}>
                <div className="flex items-center gap-4 p-4 rounded-lg glass-morphism border border-white/5 hover:border-royal-gold/20 transition-all duration-300 group">
                  {/* Ranking Medal */}
                  <div className="absolute -left-2 -top-2 z-10">
                    {index === 0 ? (
                      <div className="w-7 h-7 rounded-full bg-royal-gold flex items-center justify-center text-black font-bold text-xs animate-crown-glow">1</div>
                    ) : index === 1 ? (
                      <div className="w-7 h-7 rounded-full bg-gray-300 flex items-center justify-center text-black font-bold text-xs">2</div>
                    ) : (
                      <div className="w-7 h-7 rounded-full bg-amber-700 flex items-center justify-center text-black font-bold text-xs">3</div>
                    )}
                  </div>
                  
                  {/* User Avatar */}
                  <div className="relative">
                    <Avatar className="h-12 w-12 border-2 border-white/10 group-hover:border-royal-gold/50 transition-all duration-300">
                      <AvatarImage src={topUser.profileImage} alt={topUser.displayName} />
                      <AvatarFallback className="bg-royal-gold/20">
                        {topUser.displayName.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    
                    {/* Team Indicator */}
                    <div className={cn(
                      "absolute -bottom-1 -right-1 w-4 h-4 rounded-full border border-white/20",
                      getTeamBgColor(topUser.team)
                    )}></div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-white truncate flex items-center group-hover:text-royal-gold transition-colors duration-300">
                          {topUser.displayName}
                          {index === 0 && (
                            <Crown className="h-4 w-4 ml-1 text-royal-gold" />
                          )}
                        </h3>
                        <p className={cn("text-gray-400 text-sm", getTeamColor(topUser.team))}>@{topUser.username}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold royal-gradient">{formatCurrency(topUser.amountSpent)}</div>
                        <div className="text-xs text-gray-400 flex items-center justify-end gap-1">
                          <Users className="h-3 w-3" />
                          <span>{topUser.followers} followers</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-royal-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <Link to="/leaderboard">
            <Button variant="outline" className="border-royal-gold/20 text-royal-gold hover:bg-royal-gold/10 w-full group">
              <Trophy className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              View Full Leaderboard
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default RoyalShowcase;
