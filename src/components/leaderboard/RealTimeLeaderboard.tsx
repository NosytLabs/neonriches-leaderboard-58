
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Crown, ChevronsUp, ChevronsDown, Minus } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { cn } from '@/lib/utils';
import { formatCurrency } from '@/utils/formatters';

// Mock data for the leaderboard
const mockLeaderboardData = [
  { id: '1', username: 'LordMoneybags', rank: 1, previousRank: 1, totalSpent: 150000, team: 'red', tier: 'royal' },
  { id: '2', username: 'StatusSeeker', rank: 2, previousRank: 3, totalSpent: 120000, team: 'blue', tier: 'premium' },
  { id: '3', username: 'WealthFlaunter', rank: 3, previousRank: 2, totalSpent: 100000, team: 'green', tier: 'royal' },
  { id: '4', username: 'DigitalNoble', rank: 4, previousRank: 4, totalSpent: 80000, team: 'red', tier: 'premium' },
  { id: '5', username: 'VirtualEmperor', rank: 5, previousRank: 7, totalSpent: 65000, team: 'green', tier: 'premium' },
  { id: '6', username: 'RoyalSpender', rank: 6, previousRank: 5, totalSpent: 50000, team: 'blue', tier: 'basic' },
  { id: '7', username: 'EagerPeasant', rank: 7, previousRank: 6, totalSpent: 40000, team: 'red', tier: 'basic' },
  { id: '8', username: 'AspiringNoble', rank: 8, previousRank: 9, totalSpent: 25000, team: 'green', tier: 'basic' },
  { id: '9', username: 'HumbleFlexer', rank: 9, previousRank: 8, totalSpent: 15000, team: 'blue', tier: 'basic' },
  { id: '10', username: 'WannabeLord', rank: 10, previousRank: 10, totalSpent: 10000, team: 'red', tier: 'basic' },
];

const getTeamColor = (team: string) => {
  switch (team) {
    case 'red':
      return 'bg-red-500/20 text-red-400 border-red-500/30';
    case 'blue':
      return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    case 'green':
      return 'bg-green-500/20 text-green-400 border-green-500/30';
    default:
      return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  }
};

const getTierColor = (tier: string) => {
  switch (tier) {
    case 'royal':
      return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
    case 'premium':
      return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    case 'basic':
      return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    default:
      return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  }
};

const getRankChangeIcon = (currentRank: number, previousRank: number) => {
  if (currentRank < previousRank) {
    return <ChevronsUp className="text-green-500 h-4 w-4" />;
  } else if (currentRank > previousRank) {
    return <ChevronsDown className="text-red-500 h-4 w-4" />;
  } else {
    return <Minus className="text-gray-500 h-4 w-4" />;
  }
};

const RealTimeLeaderboard: React.FC<{ maxItems?: number }> = ({ maxItems = 10 }) => {
  const { user } = useAuth();
  const [leaderboardData, setLeaderboardData] = useState(mockLeaderboardData);
  const [isUpdating, setIsUpdating] = useState(false);
  
  // Mock data fetching
  useEffect(() => {
    const interval = setInterval(() => {
      setIsUpdating(true);
      setTimeout(() => {
        // Simulate random fluctuations in the leaderboard
        const updatedData = [...leaderboardData].map(entry => {
          if (Math.random() > 0.7) {
            return {
              ...entry,
              totalSpent: entry.totalSpent + Math.floor(Math.random() * 1000),
            };
          }
          return entry;
        });
        
        // Sort by total spent
        updatedData.sort((a, b) => b.totalSpent - a.totalSpent);
        
        // Update ranks
        updatedData.forEach((entry, index) => {
          entry.previousRank = entry.rank;
          entry.rank = index + 1;
        });
        
        setLeaderboardData(updatedData);
        setIsUpdating(false);
      }, 1000);
    }, 10000); // Update every 10 seconds
    
    return () => clearInterval(interval);
  }, [leaderboardData]);

  return (
    <Card className="glass-morphism border-white/10 shadow-lg">
      <CardHeader className="border-b border-white/10 pb-4">
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center">
            <Crown className="text-royal-gold h-5 w-5 mr-2" />
            <span>Royal Leaderboard</span>
          </CardTitle>
          <div className="flex items-center">
            <div className={cn(
              "w-2 h-2 rounded-full mr-2",
              isUpdating ? "bg-green-500 animate-pulse" : "bg-green-500"
            )} />
            <span className="text-sm text-white/60">
              {isUpdating ? "Updating..." : "Live"}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-hidden">
          <table className="w-full">
            <thead className="bg-black/30">
              <tr>
                <th className="px-4 py-2 text-left text-white/60 text-sm">Rank</th>
                <th className="px-4 py-2 text-left text-white/60 text-sm">Noble</th>
                <th className="px-4 py-2 text-left text-white/60 text-sm">Order</th>
                <th className="px-4 py-2 text-left text-white/60 text-sm">Status</th>
                <th className="px-4 py-2 text-right text-white/60 text-sm">Contribution</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.slice(0, maxItems).map((entry, index) => (
                <motion.tr 
                  key={entry.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={cn(
                    "border-b border-white/5 hover:bg-white/5 transition-colors",
                    user?.id === entry.id && "bg-royal-gold/10"
                  )}
                >
                  <td className="px-4 py-3 flex items-center">
                    <div className="flex items-center">
                      <span className="font-medium">#{entry.rank}</span>
                      <span className="ml-2">{getRankChangeIcon(entry.rank, entry.previousRank)}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      {entry.rank <= 3 && (
                        <Crown className={cn(
                          "h-4 w-4 mr-2",
                          entry.rank === 1 ? "text-yellow-400" : 
                          entry.rank === 2 ? "text-gray-400" : 
                          "text-amber-700"
                        )} />
                      )}
                      <span className={user?.id === entry.id ? "font-semibold text-royal-gold" : ""}>{entry.username}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <Badge className={cn("border", getTeamColor(entry.team))}>
                      {entry.team === 'red' ? 'Crimson' : entry.team === 'blue' ? 'Sapphire' : 'Emerald'}
                    </Badge>
                  </td>
                  <td className="px-4 py-3">
                    <Badge className={cn("border", getTierColor(entry.tier))}>
                      {entry.tier}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-right font-mono">
                    {formatCurrency(entry.totalSpent)}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-3 bg-black/20 flex justify-center border-t border-white/10">
          <span className="text-sm text-white/60 italic">
            Updated {new Date().toLocaleTimeString()}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default RealTimeLeaderboard;
