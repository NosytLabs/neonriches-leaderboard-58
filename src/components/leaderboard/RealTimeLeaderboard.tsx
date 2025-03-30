
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User } from '@/types/user';
import { formatCurrency } from '@/utils/formatters';
import { motion, AnimatePresence } from 'framer-motion';
import { Crown, Award, DollarSign, ChevronDown, ChevronUp } from 'lucide-react';

interface RealTimeLeaderboardProps {
  limit?: number;
}

const RealTimeLeaderboard: React.FC<RealTimeLeaderboardProps> = ({ limit = 10 }) => {
  const [leaderboardData, setLeaderboardData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);
  
  // Simulated data loading - would be replaced with an actual API call
  useEffect(() => {
    const fetchLeaderboard = async () => {
      setLoading(true);
      
      // Mock data
      const mockUsers: User[] = Array.from({ length: 20 }).map((_, index) => {
        const rank = index + 1;
        const amountSpent = Math.floor(10000 / rank) * 1000 + Math.floor(Math.random() * 5000);
        
        return {
          id: `user-${index}`,
          username: `Noble${rank}`,
          displayName: `Lord Spender ${rank}`,
          rank,
          amountSpent,
          tier: rank <= 3 ? 'platinum' : rank <= 10 ? 'gold' : 'silver',
          team: ['red', 'green', 'blue'][Math.floor(Math.random() * 3)] as 'red' | 'green' | 'blue',
          walletBalance: Math.floor(Math.random() * 5000),
          joinedAt: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString(),
          profileImage: `https://i.pravatar.cc/150?img=${index}`
        };
      });
      
      setLeaderboardData(mockUsers);
      setLoading(false);
    };
    
    fetchLeaderboard();
  }, []);
  
  const displayedUsers = expanded ? leaderboardData : leaderboardData.slice(0, limit);
  
  if (loading) {
    return (
      <Card className="glass-morphism border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Crown className="mr-2 h-5 w-5 text-royal-gold" />
            Royal Leaderboard
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-4">
            {Array.from({ length: limit }).map((_, index) => (
              <div key={index} className="flex items-center gap-4 p-3 bg-white/5 rounded-md animate-pulse">
                <div className="w-8 h-8 bg-white/10 rounded-full"></div>
                <div className="flex-1">
                  <div className="h-4 bg-white/10 rounded w-1/3 mb-2"></div>
                  <div className="h-3 bg-white/10 rounded w-1/4"></div>
                </div>
                <div className="h-4 bg-white/10 rounded w-16"></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Crown className="mr-2 h-5 w-5 text-royal-gold" />
          Royal Leaderboard
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-1">
          <AnimatePresence>
            {displayedUsers.map((user, index) => (
              <motion.div
                key={user.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`flex items-center p-3 rounded-md ${
                  index === 0 ? 'bg-gradient-to-r from-royal-gold/30 to-royal-gold/5' :
                  index === 1 ? 'bg-gradient-to-r from-gray-300/30 to-gray-300/5' :
                  index === 2 ? 'bg-gradient-to-r from-amber-700/30 to-amber-700/5' :
                  'bg-white/5 hover:bg-white/10'
                } transition-colors`}
              >
                <div className="w-8 text-center font-bold">
                  {index === 0 ? (
                    <Crown className="h-5 w-5 text-royal-gold mx-auto" />
                  ) : (
                    <span className={
                      index === 1 ? 'text-gray-300' :
                      index === 2 ? 'text-amber-700' :
                      'text-white/70'
                    }>
                      {index + 1}
                    </span>
                  )}
                </div>
                
                <div className="flex-shrink-0 mx-3">
                  <div className={`w-10 h-10 rounded-full overflow-hidden border-2 ${
                    index === 0 ? 'border-royal-gold' :
                    index === 1 ? 'border-gray-300' :
                    index === 2 ? 'border-amber-700' :
                    'border-transparent'
                  }`}>
                    <img 
                      src={user.profileImage || `https://i.pravatar.cc/150?img=${index}`} 
                      alt={user.displayName || user.username} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="font-medium">
                    {user.displayName || user.username}
                    {index < 3 && (
                      <span className="ml-2">
                        {index === 0 ? (
                          <Award className="h-4 w-4 text-royal-gold inline" />
                        ) : index === 1 ? (
                          <Award className="h-4 w-4 text-gray-300 inline" />
                        ) : (
                          <Award className="h-4 w-4 text-amber-700 inline" />
                        )}
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-white/60 flex items-center">
                    <span className={`inline-block w-2 h-2 rounded-full mr-1 ${
                      user.team === 'red' ? 'bg-red-500' :
                      user.team === 'green' ? 'bg-green-500' :
                      'bg-blue-500'
                    }`}></span>
                    <span className="capitalize">{user.team}</span>
                    <span className="mx-1">•</span>
                    <span className="capitalize">{user.tier}</span>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="font-bold flex items-center justify-end">
                    <DollarSign className="h-3 w-3 text-royal-gold" />
                    <span>{formatCurrency(user.amountSpent).replace('$', '')}</span>
                  </div>
                  <div className="text-xs text-white/60">spent</div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {leaderboardData.length > limit && (
          <div className="mt-4 text-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setExpanded(!expanded)}
              className="text-white/70 hover:text-white"
            >
              {expanded ? (
                <>
                  <ChevronUp className="h-4 w-4 mr-1" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4 mr-1" />
                  Show More
                </>
              )}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RealTimeLeaderboard;
