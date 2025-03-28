import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useAuth } from '@/contexts/AuthContext';
import { getLeaderboardEntries } from '@/services/leaderboardService';
import { LeaderboardEntry } from '@/types/leaderboard';
import { Button } from '@/components/ui/button';
import { ArrowDown, ArrowUp, UserPlus, UserMinus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { adaptToUser, ensureUser } from '@/utils/userAdapter';

const PersistentLeaderboard: React.FC = () => {
  const { user: userProfile } = useAuth();
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchLeaderboard = async () => {
      setIsLoading(true);
      try {
        const entries = await getLeaderboardEntries();
        setLeaderboard(entries);
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
        toast({
          title: "Error",
          description: "Failed to load leaderboard entries.",
          variant: "destructive"
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchLeaderboard();
  }, [toast]);

  const getRankChangeIcon = (rankChange: number) => {
    if (rankChange > 0) {
      return <ArrowUp className="text-green-500 w-4 h-4" />;
    } else if (rankChange < 0) {
      return <ArrowDown className="text-red-500 w-4 h-4" />;
    } else {
      return null;
    }
  };

  if (isLoading) {
    return (
      <Card className="glass-morphism border-white/10">
        <CardHeader>
          <CardTitle>Royal Leaderboard</CardTitle>
          <CardDescription>See who's leading the kingdom</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-32">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-royal-gold"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle>Royal Leaderboard</CardTitle>
        <CardDescription>See who's leading the kingdom</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-3">
            {leaderboard.map((entry) => (
              <div key={entry.id} className="glass-morphism-subtle rounded-lg p-3 flex items-center justify-between">
                <div className="flex items-center">
                  <span className="font-mono text-sm mr-4">#{entry.rank}</span>
                  <div className="flex items-center">
                    {getRankChangeIcon(entry.rank - (entry.previousRank || entry.rank))}
                    <span className="ml-1">{entry.username}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm text-white/60">${entry.totalDeposited?.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default PersistentLeaderboard;
