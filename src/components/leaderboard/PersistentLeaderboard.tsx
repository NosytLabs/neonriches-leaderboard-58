
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Crown, TrendingUp, Gift, Sparkles, Zap, Filter, Search } from 'lucide-react';
import { UserRankData, getUserRanking } from '@/services/spendingService';
import { Input } from '@/components/ui/input';
import PaymentModal from '@/components/PaymentModal';
import { useAuth } from '@/contexts/AuthContext';
import { Badge } from '@/components/ui/badge';
import { applyUserSpending } from '@/services/spendingService';
import { Link } from 'react-router-dom';
import { TeamColor } from '@/types/teams';

interface PersistentLeaderboardProps {
  limit?: number;
  showFilters?: boolean;
  showSearch?: boolean;
  showTeams?: boolean;
  compact?: boolean;
  className?: string;
}

const PersistentLeaderboard: React.FC<PersistentLeaderboardProps> = ({
  limit = 10,
  showFilters = true,
  showSearch = true,
  showTeams = true,
  compact = false,
  className = ''
}) => {
  const { user } = useAuth();
  const [rankings, setRankings] = useState<UserRankData[]>([]);
  const [filteredRankings, setFilteredRankings] = useState<UserRankData[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [teamFilter, setTeamFilter] = useState<'all' | TeamColor>('all');
  const [userRank, setUserRank] = useState<UserRankData | null>(null);
  
  // Load rankings
  useEffect(() => {
    const data = getUserRanking();
    setRankings(data);
    
    // Find current user's rank
    if (user) {
      const currentUserRank = data.find(r => r.userId === user.id);
      setUserRank(currentUserRank || null);
    }
  }, [user]);
  
  // Apply filters
  useEffect(() => {
    let filtered = [...rankings];
    
    // Apply team filter
    if (teamFilter !== 'all') {
      filtered = filtered.filter(r => r.team === teamFilter);
    }
    
    // Apply search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(r => 
        r.username.toLowerCase().includes(query)
      );
    }
    
    setFilteredRankings(filtered);
  }, [rankings, teamFilter, searchQuery]);
  
  const handleSpendingSuccess = async (amount: number) => {
    if (user) {
      const success = await applyUserSpending(user, amount);
      if (success) {
        // Refresh the rankings
        const updatedRankings = getUserRanking();
        setRankings(updatedRankings);
        
        // Update user rank
        const updatedUserRank = updatedRankings.find(r => r.userId === user.id);
        setUserRank(updatedUserRank || null);
      }
    }
  };
  
  const getTeamColor = (team: TeamColor | null | undefined) => {
    if (!team) return 'bg-gray-500';
    
    switch(team) {
      case 'red': return 'bg-team-red';
      case 'green': return 'bg-team-green';
      case 'blue': return 'bg-team-blue';
      default: return 'bg-gray-500';
    }
  };
  
  return (
    <Card className={`glass-morphism border-white/10 overflow-hidden ${className}`}>
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-royal-purple/20 to-royal-gold/10 rounded-bl-full blur-xl"></div>
      
      <CardHeader className="space-y-1">
        <div className="flex items-center">
          <Crown className="mr-2 h-6 w-6 text-royal-gold" />
          <CardTitle>Global Leaderboard</CardTitle>
        </div>
        <p className="text-sm text-white/70">
          Where glory is measured in dollars spent
        </p>
      </CardHeader>
      
      <CardContent>
        {/* Current user's rank (if logged in) */}
        {user && userRank && (
          <div className="mb-4 glass-morphism border-white/10 rounded-lg p-2 px-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 rounded-full glass-morphism border-white/10 mr-3">
                  <span className="text-sm font-bold">#{userRank.rank}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8 border border-white/10">
                    {userRank.profileImage ? (
                      <AvatarImage src={userRank.profileImage} alt={user.username} />
                    ) : (
                      <AvatarFallback className="bg-gradient-to-br from-royal-purple to-royal-gold">
                        {user.username.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <div>
                    <div className="flex items-center">
                      <span className="font-medium">{user.username}</span>
                      {userRank.tier === 'pro' && (
                        <Badge variant="outline" className="ml-2 bg-royal-gold/20 text-royal-gold border-royal-gold/30 text-xs">
                          PRO
                        </Badge>
                      )}
                    </div>
                    <div className="text-xs text-white/60 flex items-center gap-1">
                      <span>${userRank.totalSpent.toLocaleString()}</span>
                      {userRank.spendStreak > 0 && (
                        <Badge variant="outline" className="ml-1 bg-amber-500/20 text-amber-400 border-amber-500/30 text-[10px] px-1 py-0 h-4">
                          <TrendingUp className="w-2 h-2 mr-0.5" /> {userRank.spendStreak}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              <PaymentModal 
                amount={10} 
                onSuccess={handleSpendingSuccess}
                trigger={
                  <Button size="sm" className="bg-gradient-to-r from-team-red via-team-green to-team-blue hover:opacity-90 text-white text-xs h-8">
                    <Gift className="h-3 w-3 mr-1" />
                    Increase Rank
                  </Button>
                }
              />
            </div>
          </div>
        )}
        
        {/* Filters & Search */}
        {(showFilters || showSearch) && (
          <div className={`flex ${compact ? 'flex-col space-y-2' : 'flex-row'} justify-between items-center mb-4`}>
            {showSearch && (
              <div className={`relative ${compact ? 'w-full' : 'w-1/2'}`}>
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-white/40" />
                <Input
                  placeholder="Search username..."
                  className="pl-8 glass-morphism border-white/10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            )}
            
            {showFilters && (
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-white/60" />
                <div className="flex rounded-md overflow-hidden">
                  <Button
                    size="sm"
                    variant={teamFilter === 'all' ? 'default' : 'outline'}
                    className={`text-xs h-8 ${teamFilter === 'all' ? 'bg-white/20' : 'glass-morphism border-white/10'}`}
                    onClick={() => setTeamFilter('all')}
                  >
                    All
                  </Button>
                  <Button
                    size="sm"
                    variant={teamFilter === 'red' ? 'default' : 'outline'}
                    className={`text-xs h-8 ${teamFilter === 'red' ? 'bg-team-red' : 'glass-morphism border-white/10'}`}
                    onClick={() => setTeamFilter('red')}
                  >
                    <div className="w-2 h-2 rounded-full bg-team-red mr-1"></div>
                    Red
                  </Button>
                  <Button
                    size="sm"
                    variant={teamFilter === 'green' ? 'default' : 'outline'}
                    className={`text-xs h-8 ${teamFilter === 'green' ? 'bg-team-green' : 'glass-morphism border-white/10'}`}
                    onClick={() => setTeamFilter('green')}
                  >
                    <div className="w-2 h-2 rounded-full bg-team-green mr-1"></div>
                    Green
                  </Button>
                  <Button
                    size="sm"
                    variant={teamFilter === 'blue' ? 'default' : 'outline'}
                    className={`text-xs h-8 ${teamFilter === 'blue' ? 'bg-team-blue' : 'glass-morphism border-white/10'}`}
                    onClick={() => setTeamFilter('blue')}
                  >
                    <div className="w-2 h-2 rounded-full bg-team-blue mr-1"></div>
                    Blue
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
        
        {/* Leaderboard Table */}
        <div className="space-y-2">
          {filteredRankings.slice(0, limit).map((rank, index) => (
            <div 
              key={rank.userId}
              className={`flex items-center justify-between p-2 rounded-lg transition-colors ${
                user && rank.userId === user.id 
                  ? 'glass-morphism-highlight border border-white/20 bg-white/5' 
                  : 'hover:bg-white/5'
              }`}
            >
              {/* Rank & User Info */}
              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 rounded-full glass-morphism border-white/10 mr-3">
                  {rank.rank <= 3 ? (
                    <span className="text-sm">
                      {rank.rank === 1 && <Crown className="h-4 w-4 text-royal-gold" />}
                      {rank.rank === 2 && <Crown className="h-4 w-4 text-gray-300" />}
                      {rank.rank === 3 && <Crown className="h-4 w-4 text-amber-700" />}
                    </span>
                  ) : (
                    <span className="text-sm font-bold">#{rank.rank}</span>
                  )}
                </div>
                
                <div className="flex items-center">
                  <Link to={`/profile/${rank.username}`}>
                    <Avatar className={`h-10 w-10 border ${
                      rank.tier === 'pro' ? 'border-royal-gold/50' : 'border-white/10'
                    }`}>
                      {rank.profileImage ? (
                        <AvatarImage src={rank.profileImage} alt={rank.username} />
                      ) : (
                        <AvatarFallback className="bg-gradient-to-br from-royal-purple to-royal-gold">
                          {rank.username.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      )}
                    </Avatar>
                  </Link>
                  
                  <div className="ml-3">
                    <div className="flex items-center">
                      <Link to={`/profile/${rank.username}`} className="font-medium hover:text-royal-gold transition-colors">
                        {rank.username}
                      </Link>
                      
                      {rank.tier === 'pro' && (
                        <Badge variant="outline" className="ml-2 bg-royal-gold/20 text-royal-gold border-royal-gold/30 text-xs">
                          PRO
                        </Badge>
                      )}
                      
                      {showTeams && rank.team && (
                        <div className={`w-2 h-2 rounded-full ml-2 ${getTeamColor(rank.team)}`}></div>
                      )}
                    </div>
                    
                    <div className="text-xs text-white/60 flex items-center">
                      <span>${rank.totalSpent.toLocaleString()}</span>
                      {rank.spendStreak > 0 && (
                        <Badge variant="outline" className="ml-1 bg-amber-500/20 text-amber-400 border-amber-500/30 text-[10px] px-1 py-0 h-4">
                          <TrendingUp className="w-2 h-2 mr-0.5" /> {rank.spendStreak}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Actions */}
              {!compact && (
                <div className="flex items-center space-x-2">
                  {rank.rank === 1 && (
                    <div className="text-xs bg-royal-gold/20 text-royal-gold px-2 py-1 rounded-full flex items-center">
                      <Sparkles className="w-3 h-3 mr-1" /> Top Spender
                    </div>
                  )}
                  
                  {rank.spendStreak >= 3 && (
                    <div className="text-xs bg-amber-500/20 text-amber-400 px-2 py-1 rounded-full flex items-center">
                      <Zap className="w-3 h-3 mr-1" /> Streak {rank.spendStreak}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
          
          {filteredRankings.length === 0 && (
            <div className="text-center py-8 text-white/50">
              <div className="text-3xl mb-2">👑</div>
              No users found matching your filters
            </div>
          )}
        </div>
        
        {/* View All Button */}
        {filteredRankings.length > limit && (
          <div className="text-center mt-4">
            <Button variant="outline" className="glass-morphism border-white/10 text-white">
              View All Rankings
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PersistentLeaderboard;
