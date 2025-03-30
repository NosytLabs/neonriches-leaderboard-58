
import React, { useState, useEffect } from 'react';
import { Trophy, CrownIcon, TrendingUp, Users, DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { UserProfile } from '@/types/user';
import { formatCurrency } from '@/utils/formatters';
import { supabase } from '@/integrations/supabase/client';

interface TopSpenderShowcaseProps {
  highlightTop?: boolean;
  className?: string;
}

const TopSpenderShowcase: React.FC<TopSpenderShowcaseProps> = ({ 
  highlightTop = false,
  className = '' 
}) => {
  const [topUser, setTopUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchTopUser = async () => {
      try {
        const { data, error } = await supabase
          .from('leaderboard_view')
          .select('*')
          .order('rank', { ascending: true })
          .limit(1)
          .single();
        
        if (error) throw error;
        
        setTopUser({
          id: data.id,
          username: data.username,
          displayName: data.display_name,
          profileImage: data.profile_image,
          rank: data.rank,
          totalSpent: data.total_deposited,
          amountSpent: data.total_deposited,
          team: data.team,
          tier: data.tier,
          joinDate: data.joined_at,
          joinedAt: data.joined_at,
          spendStreak: 0,
          followers: 0
        });
      } catch (error) {
        console.error('Error fetching top user:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchTopUser();
    
    // Set up real-time subscription to update when rankings change
    const channel = supabase
      .channel('leaderboard-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'deposits'
        },
        async () => {
          // Refresh the top user when there's a change in deposits
          await fetchTopUser();
        }
      )
      .subscribe();
    
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);
  
  if (loading || !topUser) {
    return (
      <div className={`max-w-lg mx-auto ${className}`}>
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2 flex items-center justify-center">
            <Trophy className="h-6 w-6 mr-2 text-yellow-400" />
            Top Spender Showcase
          </h2>
          <p className="text-white/70">
            Loading the current sovereign...
          </p>
        </div>
        
        <Card className="glass-morphism border-white/10 overflow-hidden animate-pulse">
          <div className="h-[300px]"></div>
        </Card>
      </div>
    );
  }
  
  return (
    <div className={`max-w-lg mx-auto ${className}`}>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center justify-center">
          <Trophy className="h-6 w-6 mr-2 text-yellow-400" />
          Top Spender Showcase
        </h2>
        <p className="text-white/70">
          The throne belongs to those who spend the most
        </p>
      </div>
      
      <Card className="glass-morphism border-white/10 overflow-hidden">
        <CardHeader className="relative p-0">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-yellow-500/20 to-transparent" />
          
          {highlightTop && (
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-royal-gold text-black px-3 py-1 rounded-full text-sm font-bold flex items-center z-10">
              <CrownIcon className="h-4 w-4 mr-1" />
              CURRENT SOVEREIGN
            </div>
          )}
        </CardHeader>
        
        <CardContent className="pt-6 pb-4 px-6 relative z-10">
          <div className="flex justify-between items-start">
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <CrownIcon className="h-7 w-7 text-yellow-400" />
                </div>
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-yellow-400 mb-2">
                  <img
                    src={topUser.profileImage || `https://api.dicebear.com/6.x/personas/svg?seed=${topUser.username}`}
                    alt={topUser.displayName || topUser.username}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <h3 className="text-xl font-bold">{topUser.displayName || topUser.username}</h3>
              <p className="text-white/60 text-sm">@{topUser.username}</p>
              
              <div className="flex items-center mt-2">
                <Badge variant="outline" className="bg-yellow-500/10 border-yellow-500/20 text-yellow-400">
                  Rank #{topUser.rank}
                </Badge>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="glass-morphism border-white/10 p-3 rounded-lg">
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 text-green-400 mr-2" />
                  <div>
                    <div className="text-sm text-white/60">Total Spent</div>
                    <div className="text-xl font-bold">{formatCurrency(topUser.totalSpent || 0)}</div>
                  </div>
                </div>
              </div>
              
              <div className="glass-morphism border-white/10 p-3 rounded-lg">
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-blue-400 mr-2" />
                  <div>
                    <div className="text-sm text-white/60">Virtual Status</div>
                    <div className="text-xl font-bold text-royal-gold">Sovereign</div>
                  </div>
                </div>
              </div>
              
              <div className="glass-morphism border-white/10 p-3 rounded-lg">
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-purple-400 mr-2" />
                  <div>
                    <div className="text-sm text-white/60">Team</div>
                    <div className="text-xl font-bold capitalize">{topUser.team || 'None'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 glass-morphism border-white/10 p-4 rounded-lg">
            <h4 className="text-lg font-semibold mb-2">Royal Stats</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-white/60">Member Since</div>
                <div className="font-medium">
                  {new Date(topUser.joinDate || topUser.joinedAt).toLocaleDateString()}
                </div>
              </div>
              <div>
                <div className="text-sm text-white/60">Tier</div>
                <div className="font-medium capitalize">
                  {topUser.tier || 'Royal'}
                </div>
              </div>
              <div>
                <div className="text-sm text-white/60">Days at #1</div>
                <div className="font-medium">
                  {Math.floor(Math.random() * 30) + 1} {/* Mock data */}
                </div>
              </div>
              <div>
                <div className="text-sm text-white/60">Milestone Level</div>
                <div className="font-medium">
                  Maximum
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between mt-6">
            <Button variant="outline" className="glass-morphism border-white/10 hover:bg-white/10">
              View Profile
            </Button>
            <Button className="bg-royal-gold text-black hover:bg-royal-gold/90">
              Compete for #1
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TopSpenderShowcase;
