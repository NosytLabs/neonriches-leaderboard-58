
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RefreshCw, Trophy, Coins, ExternalLink } from 'lucide-react';
import { getOnChainLeaderboard } from '@/services/solanaService';
import { getLeaderboard, syncOnChainLeaderboard } from '@/services/leaderboardService';
import { formatAddress } from '@/utils/solanaUtils';
import { useToast } from '@/hooks/use-toast';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { motion } from 'framer-motion';
import { getTeamColor } from '@/utils/teamUtils';
import { Link } from 'react-router-dom';

interface SolanaLeaderboardProps {
  limit?: number;
  showTeams?: boolean;
  className?: string;
}

const SolanaLeaderboard: React.FC<SolanaLeaderboardProps> = ({
  limit = 10,
  showTeams = true,
  className = ''
}) => {
  const [leaderboard, setLeaderboard] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  const fetchLeaderboard = async () => {
    try {
      setIsLoading(true);
      
      // Get leaderboard data from our service (which uses total deposits)
      const data = await getLeaderboard(limit);
      setLeaderboard(data);
      
      // Also fetch on-chain data and sync it with our database (for verification purposes)
      const onChainData = await getOnChainLeaderboard(limit);
      await syncOnChainLeaderboard(onChainData);
      
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
      toast({
        title: "Failed to Load Leaderboard",
        description: "There was an error loading the leaderboard data. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLeaderboard();
  }, [limit]);

  const getTeamBadge = (team: 'red' | 'green' | 'blue' | null) => {
    if (!team || !showTeams) return null;
    
    const teamColors: Record<string, string> = {
      red: 'bg-royal-crimson/20 text-royal-crimson border-royal-crimson/30',
      green: 'bg-royal-gold/20 text-royal-gold border-royal-gold/30',
      blue: 'bg-royal-navy/20 text-royal-navy border-royal-navy/30'
    };
    
    const teamNames: Record<string, string> = {
      red: 'Crimson Court',
      green: 'Golden Order',
      blue: 'Royal Navy'
    };
    
    return (
      <Badge variant="outline" className={`text-xs ${teamColors[team]}`}>
        {teamNames[team]}
      </Badge>
    );
  };
  
  const getTierBadge = (tier: string) => {
    const tierColors: Record<string, string> = {
      royal: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      premium: 'bg-royal-gold/20 text-royal-gold border-royal-gold/30',
      basic: 'bg-white/20 text-white/80 border-white/30'
    };
    
    return (
      <Badge variant="outline" className={`text-xs ${tierColors[tier] || 'bg-white/10 text-white/70 border-white/20'}`}>
        {tier.charAt(0).toUpperCase() + tier.slice(1)}
      </Badge>
    );
  };

  return (
    <Card className={`glass-morphism border-white/10 ${className}`}>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center">
          <Trophy className="h-5 w-5 text-royal-gold mr-2" />
          Royal Leaderboard
        </CardTitle>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={fetchLeaderboard}
          disabled={isLoading}
        >
          <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
        </Button>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-3">
            {Array(5).fill(0).map((_, i) => (
              <div key={i} className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {leaderboard.map((entry, index) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="glass-morphism border-white/10 p-3 rounded-md flex items-center justify-between hover:bg-white/5 transition-all"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-royal-gold/30 to-royal-crimson/30 mr-3">
                    {entry.rank === 1 ? (
                      <Trophy className="h-5 w-5 text-royal-gold" />
                    ) : (
                      <span className="text-sm font-bold">#{entry.rank}</span>
                    )}
                  </div>
                  <div>
                    <Link to={`/profile/${entry.username}`} className="font-medium text-royal-gold hover:underline flex items-center">
                      {entry.profileImage ? (
                        <Avatar className="h-6 w-6 mr-2">
                          <AvatarImage src={entry.profileImage} alt={entry.username} />
                          <AvatarFallback className={getTeamColor(entry.team)}>
                            {entry.username.charAt(0).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                      ) : null}
                      {entry.username}
                    </Link>
                    <div className="flex items-center space-x-2 mt-1">
                      {getTeamBadge(entry.team)}
                      {getTierBadge(entry.tier)}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold flex items-center">
                    <Coins className="h-4 w-4 text-royal-gold mr-1" />
                    ${entry.totalDeposited.toLocaleString()}
                  </div>
                  <div className="text-xs text-white/60">
                    {entry.currentBalance !== undefined ? (
                      <>Current: ${entry.currentBalance.toLocaleString()}</>
                    ) : null}
                  </div>
                </div>
              </motion.div>
            ))}
            
            {leaderboard.length === 0 && (
              <div className="text-center py-6 text-white/50 italic">
                No leaderboard data available
              </div>
            )}
          </div>
        )}
        
        <div className="mt-6 text-center">
          <Button 
            variant="outline" 
            className="glass-morphism border-white/10"
            size="sm"
            asChild
          >
            <Link to="/leaderboard">
              View Full Leaderboard
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SolanaLeaderboard;
