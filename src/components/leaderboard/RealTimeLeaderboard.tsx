
import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { LeaderboardEntry } from '@/types/leaderboard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Users, Trophy, ArrowUp, ArrowDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import useNotificationSounds from '@/hooks/use-notification-sounds';

interface RealTimeLeaderboardProps {
  limit?: number;
  showTitle?: boolean;
  compact?: boolean;
  className?: string;
}

const RealTimeLeaderboard: React.FC<RealTimeLeaderboardProps> = ({
  limit = 5,
  showTitle = true,
  compact = false,
  className
}) => {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatedEntryId, setUpdatedEntryId] = useState<string | null>(null);
  const { toast } = useToast();
  const { playSound } = useNotificationSounds();
  
  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const { data, error } = await supabase
          .from('leaderboard_view')
          .select('*')
          .order('rank', { ascending: true })
          .limit(limit);
        
        if (error) throw error;
        
        setEntries(data as unknown as LeaderboardEntry[]);
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchLeaderboard();
    
    // Set up real-time subscription
    const channel = supabase
      .channel('leaderboard-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'deposits'
        },
        async (payload) => {
          // When a new deposit is made, refresh the leaderboard
          const newData = await supabase
            .from('leaderboard_view')
            .select('*')
            .order('rank', { ascending: true })
            .limit(limit);
          
          if (!newData.error) {
            const oldEntries = [...entries];
            const newEntries = newData.data as unknown as LeaderboardEntry[];
            
            // Find changes in ranking
            if (oldEntries.length > 0 && newEntries.length > 0) {
              const changedEntry = newEntries.find(newEntry => {
                const oldEntry = oldEntries.find(e => e.id === newEntry.id);
                return oldEntry && oldEntry.rank !== newEntry.rank;
              });
              
              if (changedEntry) {
                // Highlight the changed entry
                setUpdatedEntryId(changedEntry.id);
                playSound('cash');
                
                const oldRank = oldEntries.find(e => e.id === changedEntry.id)?.rank;
                const newRank = changedEntry.rank;
                
                if (oldRank && newRank && oldRank !== newRank) {
                  toast({
                    title: "Rank Changed!",
                    description: `${changedEntry.username} moved from rank #${oldRank} to #${newRank}!`,
                    variant: "default",
                  });
                }
                
                setTimeout(() => setUpdatedEntryId(null), 3000);
              }
            }
            
            setEntries(newEntries);
          }
        }
      )
      .subscribe();
    
    return () => {
      supabase.removeChannel(channel);
    };
  }, [limit, toast, playSound]);
  
  const getTeamColor = (team: string | undefined) => {
    if (!team) return 'bg-gray-500/20';
    
    switch (team.toLowerCase()) {
      case 'red': return 'bg-red-500/20 text-red-500';
      case 'green': return 'bg-green-500/20 text-green-500';
      case 'blue': return 'bg-blue-500/20 text-blue-500';
      default: return 'bg-gray-500/20';
    }
  };
  
  return (
    <Card className={cn("glass-morphism border-white/10", className)}>
      {showTitle && (
        <CardHeader className={compact ? "py-3" : undefined}>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-royal-gold" />
            <span>Live Leaderboard</span>
          </CardTitle>
        </CardHeader>
      )}
      <CardContent className={compact ? "py-2" : undefined}>
        {loading ? (
          Array(limit).fill(0).map((_, i) => (
            <div key={i} className="flex items-center space-x-4 mb-3">
              <Skeleton className="h-8 w-8 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[150px]" />
                <Skeleton className="h-3 w-[100px]" />
              </div>
            </div>
          ))
        ) : (
          <div className="space-y-1">
            <AnimatePresence>
              {entries.map((entry) => (
                <motion.div
                  key={entry.id}
                  className={cn(
                    "flex items-center p-2 rounded-lg",
                    updatedEntryId === entry.id 
                      ? "bg-royal-gold/20 border border-royal-gold/30" 
                      : "hover:bg-white/5"
                  )}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-2 flex-1">
                    <div className="flex-shrink-0 w-7 text-center font-mono font-bold">
                      {entry.rank}
                    </div>
                    <div className={cn(
                      "h-7 w-7 rounded-full overflow-hidden flex items-center justify-center",
                      entry.rank === 1 ? "border border-royal-gold" : "border border-white/10"
                    )}>
                      {entry.profileImage ? (
                        <img 
                          src={entry.profileImage} 
                          alt={entry.username} 
                          className="h-full w-full object-cover" 
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center bg-white/10">
                          {entry.username.charAt(0).toUpperCase()}
                        </div>
                      )}
                    </div>
                    <div className="ml-2">
                      <p className="font-medium text-sm">
                        {entry.displayName || entry.username}
                      </p>
                      {!compact && (
                        <p className="text-xs text-white/50">@{entry.username}</p>
                      )}
                    </div>
                  </div>
                  
                  {entry.team && !compact && (
                    <div className={cn(
                      "px-2 py-0.5 rounded text-xs flex items-center",
                      getTeamColor(entry.team)
                    )}>
                      <Users className="h-3 w-3 mr-1" />
                      {entry.team}
                    </div>
                  )}
                  
                  <div className="ml-auto font-mono text-sm">
                    ${entry.amountSpent?.toLocaleString() || entry.totalDeposited?.toLocaleString()}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RealTimeLeaderboard;
